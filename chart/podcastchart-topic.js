(function () {
  const TOPIC_PAGE_CONFIG = window.TOPIC_PAGE_CONFIG || {};
  const TOPIC_KEY = String(TOPIC_PAGE_CONFIG.topicKey || document.body?.dataset?.topicKey || 'news').trim().toLowerCase() || 'news';
  const SHARED_TOPIC_ICON_ENTRY = window.TOPIC_ICON_REGISTRY && window.TOPIC_ICON_REGISTRY[TOPIC_KEY]
    ? window.TOPIC_ICON_REGISTRY[TOPIC_KEY]
    : null;
  const TOPIC_PLATFORM = String(TOPIC_PAGE_CONFIG.platform || 'apple').trim().toLowerCase() || 'apple';
  const TOPIC_TYPE = String(TOPIC_PAGE_CONFIG.topicType || 'apple-1489-episodes').trim().toLowerCase() || 'apple-1489-episodes';
  const TOPIC_COUNTRY_BATCH_TARGET = Number(TOPIC_PAGE_CONFIG.countryBatchTarget || 45) || 45;
  const TOPIC_STORAGE_KEY = `topic-${TOPIC_KEY}-state-v1`;
  const TOPIC_SIGNATURE_OPTION_ID = `topic-${TOPIC_KEY}-signature-option`;
  const TOPIC_SNAPSHOT_VERSION = 5;
  const TOPIC_ACCENT_PALETTE = Array.isArray(TOPIC_PAGE_CONFIG.accentPalette) && TOPIC_PAGE_CONFIG.accentPalette.length
    ? TOPIC_PAGE_CONFIG.accentPalette
    : ['#3555A8', '#5B7CFF', '#0FB9B7'];
  const TOPIC_ICON_SRC = String((SHARED_TOPIC_ICON_ENTRY && SHARED_TOPIC_ICON_ENTRY.iconSrc) || TOPIC_PAGE_CONFIG.iconSrc || '').trim();
  const TOPIC_ICON_ALT = String(TOPIC_PAGE_CONFIG.iconAlt || `${TOPIC_KEY} icon`).trim();
  const TOPIC_ICON_TITLE = String(TOPIC_PAGE_CONFIG.iconTitle || `${TOPIC_KEY} topic`).trim();
  const TOPIC_ICON_SCALE = Number((SHARED_TOPIC_ICON_ENTRY && SHARED_TOPIC_ICON_ENTRY.iconScale) || TOPIC_PAGE_CONFIG.iconScale || 1);
  const TOPIC_DEFAULT_COLLECTIONS = ['collection-anglosphere'];

  function resolveDefaultCollectionsForLocale(locale) {
    const safeLocale = String(locale || '').trim().toLowerCase();
    const langBase = safeLocale.split('-')[0];
    const groups = Array.isArray(TOPIC_PAGE_CONFIG.contentLanguageGroups) ? TOPIC_PAGE_CONFIG.contentLanguageGroups : [];
    const norm = (value) => String(value || '').trim().toLowerCase();

    const preferredByPrefix = groups.filter((group) => {
      const prefix = norm(group && group.detectPrefix);
      return prefix && (prefix === safeLocale || prefix === langBase || safeLocale.startsWith(`${prefix}-`));
    }).map((group) => norm(group.key)).filter(Boolean);
    if (preferredByPrefix.length) {
      const preference = [
        'collection-sinophone',
        'collection-hispanic',
        'collection-lusophone',
        'collection-francophone',
        'collection-germanic',
        'collection-russian',
        'collection-arab-world',
        'collection-dutch-flemish',
        'collection-malay-maritime',
        'collection-anglosphere',
        'collection-global-english'
      ];
      const best = preference.find((key) => preferredByPrefix.includes(key)) || preferredByPrefix[0];
      return [best];
    }

    const localeCountry = safeLocale.split('-').slice(1).join('-');
    if (localeCountry) {
      const preferredByCountry = groups.filter((group) => {
        const countries = Array.isArray(group && group.countries) ? group.countries : [];
        return countries.includes(localeCountry);
      }).map((group) => norm(group.key)).filter(Boolean);
      if (preferredByCountry.length) return preferredByCountry;
    }
    return TOPIC_DEFAULT_COLLECTIONS.slice();
  }

  const TOPIC_DEFAULT_STATE = {
    uiLang: normalizeUiLang((TOPIC_PAGE_CONFIG && TOPIC_PAGE_CONFIG.locale) || 'en'),
    contentLanguages: resolveDefaultCollectionsForLocale((TOPIC_PAGE_CONFIG && TOPIC_PAGE_CONFIG.locale) || 'en'),
    period: 'daily'
  };
  const state = {
    uiLang: TOPIC_DEFAULT_STATE.uiLang,
    contentLanguages: new Set(TOPIC_DEFAULT_STATE.contentLanguages),
    manualInclude: new Set(),
    manualExclude: new Set(),
    filters: [],
    countrySearch: '',
    draftContentLanguages: new Set(TOPIC_DEFAULT_STATE.contentLanguages),
    draftManualInclude: new Set(),
    draftManualExclude: new Set(),
    draftCountrySearch: '',
    draftFilters: [],
    draftFilterMode: 'hide',
    isLanguageModalOpen: false,
    isCountryModalOpen: false,
    isFilterModalOpen: false,
    hasPendingCountryApply: false,
    currentSignature: '',
    latestItems: [],
    latestSnapshots: [],
    latestDisplayItems: []
  };
  // Topic pages use their own markup ids (news-*) and cannot rely on implicit
  // globals from the shared script. Bind all runtime nodes explicitly here.
  const chartContainer = (typeof window.chartContainer !== 'undefined' && window.chartContainer)
    || document.getElementById('podcasts-chart');
  const emptyStateEl = (typeof window.emptyStateEl !== 'undefined' && window.emptyStateEl)
    || document.getElementById('empty-state');
  const searchBox = (typeof searchInput !== 'undefined' && searchInput)
    || document.getElementById('search-input');
  const clearSearchButton = (typeof clearSearchBtn !== 'undefined' && clearSearchBtn)
    || document.getElementById('clear-search');
  const refreshButton = (typeof refreshBtn !== 'undefined' && refreshBtn)
    || document.getElementById('refresh-btn');

  const hiddenPlatformSelect = (typeof platformSelect !== 'undefined' && platformSelect)
    || document.getElementById('platform-select');
  const hiddenTypeSelect = (typeof typeSelect !== 'undefined' && typeSelect)
    || document.getElementById('type-select');
  const hiddenCountrySelect = (typeof countrySelect !== 'undefined' && countrySelect)
    || document.getElementById('country-select');

  const uiLanguageSelect = document.getElementById('news-ui-language');
  const periodControl = document.getElementById('news-period-select')
    || (typeof periodSelect !== 'undefined' ? periodSelect : null)
    || document.getElementById('period-select');
  const dateControl = document.getElementById('news-date-select')
    || (typeof dateSelect !== 'undefined' ? dateSelect : null)
    || document.getElementById('history-date-select');

  const languageSummaryEl = document.getElementById('news-language-summary');
  const countrySummaryEl = document.getElementById('news-country-summary');
  const filterSummaryEl = document.getElementById('news-filter-summary');
  const selectionLanguageEl = document.getElementById('news-selection-language');
  const selectionCountriesEl = document.getElementById('news-selection-countries');
  const lastUpdateEl = document.getElementById('news-last-update');
  const languageTriggerBtn = document.getElementById('news-language-trigger');
  const countryTriggerBtn = document.getElementById('news-country-trigger');
  const filterTriggerBtn = document.getElementById('news-filter-trigger');
  const countryPanel = document.getElementById('news-country-panel');

  const languageListEl = document.getElementById('news-language-list');
  const countryListEl = document.getElementById('news-country-list');
  const countrySearchInput = document.getElementById('news-country-search');
  const countrySearchClearBtn = document.getElementById('news-country-clear');
  const filterKeywordInput = document.getElementById('news-filter-keyword');
  const filterModeHideBtn = document.getElementById('news-filter-mode-hide');
  const filterModeBlurBtn = document.getElementById('news-filter-mode-blur');
  const filterListEl = document.getElementById('news-filter-list');
  const filterAddBtn = document.getElementById('news-filter-add');

  const languageModalEl = document.getElementById('news-language-modal');
  const countryModalEl = document.getElementById('news-country-modal');
  const filterModalEl = document.getElementById('news-filter-modal');
  const languageModalCloseBtn = document.getElementById('news-language-dialog-close');
  const languageModalCancelBtn = document.getElementById('news-language-cancel');
  const languageModalApplyBtn = document.getElementById('news-language-apply');
  const countryModalCloseBtn = document.getElementById('news-country-dialog-close');
  const countryModalCancelBtn = document.getElementById('news-country-cancel');
  const countryModalApplyBtn = document.getElementById('news-country-apply');
  const countryModalClearBtn = document.getElementById('news-country-clear');
  const filterModalCloseBtn = document.getElementById('news-filter-dialog-close');
  const filterModalCancelBtn = document.getElementById('news-filter-cancel');
  const filterModalApplyBtn = document.getElementById('news-filter-apply');
  const shareButton = document.getElementById('share-btn');

  const heroSubtitleWrapEl = document.querySelector('.hero-subtitle-wrap');
  const heroSubtitleEl = heroSubtitleWrapEl ? heroSubtitleWrapEl.querySelector('.hero-subtitle') : null;
  const heroPlatformIconEl = heroSubtitleWrapEl ? heroSubtitleWrapEl.querySelector('.hero-platform-icon') : null;
  function cloneButtonWithoutListeners(button) {
    if (!button || !button.parentNode) return button;
    const clone = button.cloneNode(true);
    button.parentNode.replaceChild(clone, button);
    return clone;
  }
  const customShareButton = cloneButtonWithoutListeners(shareButton);
  function normalizeUiLang(value) {
    const safe = String(value || '').trim().toLowerCase();
    return safe || String((TOPIC_PAGE_CONFIG && TOPIC_PAGE_CONFIG.locale) || 'en').trim().toLowerCase() || 'en';
  }

  function buildTopicLocaleHref(locale) {
    const safe = normalizeUiLang(locale);
    const url = new URL(window.location.href);
    url.pathname = `/chart/${TOPIC_KEY}/${TOPIC_KEY}-podcast${safe === 'en' ? '' : `-${safe}`}.html`;
    return url.toString();
  }

  function isRtlLanguage(code) {
    return ['ar', 'fa', 'he', 'ur', 'ckb', 'dv', 'pa-pk', 'prs', 'sd', 'ug', 'yi'].includes(String(code || '').trim().toLowerCase());
  }

  function getTopicLocale(lang = state.uiLang) {
    const pageConfig = window.TOPIC_PAGE_CONFIG || {};
    const normalized = normalizeUiLang(lang);
    return {
      code: normalized,
      label: pageConfig.topicLabel || TOPIC_KEY,
      uiText: pageConfig.localizedUiText || UI_TEXT_DEFAULT,
      topicText: pageConfig.localizedTopicText || {}
    };
  }

  function getTopicStrings(lang = state.uiLang) {
    const pageConfig = window.TOPIC_PAGE_CONFIG || {};
    return pageConfig.localizedTopicText || {};
  }

  function getTopicHeroInlineSummary(lang = state.uiLang) {
    const pageConfig = window.TOPIC_PAGE_CONFIG || {};
    return pageConfig.heroInlineSummary || '';
  }

  function applyTopicAccentTheme() {
    const hosts = [
      chartContainer,
      document.body,
      document.documentElement,
      document.querySelector('[data-global-rss-player]'),
      document.getElementById('playlist-overlay')
    ].filter(Boolean);
    if (chartContainer) chartContainer.setAttribute('data-platform', `${TOPIC_KEY}-topic`);
    hosts.forEach((host) => {
      try { applyAccentPaletteToHost(host, TOPIC_ACCENT_PALETTE); } catch {}
      try {
        host.style.setProperty('--rss-accent', TOPIC_ACCENT_PALETTE[0]);
        host.style.setProperty('--rss-accent-soft', TOPIC_ACCENT_PALETTE[1] || TOPIC_ACCENT_PALETTE[0]);
      } catch {}
    });
  }

  function syncTopicHeroBadge() {
    if (!heroSubtitleWrapEl || !heroPlatformIconEl) return;
    if (isFavoritesScopeMode()) {
      try { updateHeroTypeSubtitle(); } catch {}
      heroPlatformIconEl.style.display = 'none';
      return;
    }
    const heroSummary = getTopicHeroInlineSummary();
    if (heroSubtitleEl) {
      heroSubtitleEl.textContent = heroSummary || '';
      heroSubtitleEl.style.display = heroSummary ? 'block' : 'none';
    }
    if (heroSubtitleWrapEl) heroSubtitleWrapEl.style.display = 'inline-flex';
    if (TOPIC_ICON_SRC) {
      heroPlatformIconEl.src = TOPIC_ICON_SRC;
      heroPlatformIconEl.alt = TOPIC_ICON_ALT;
      heroPlatformIconEl.title = TOPIC_ICON_TITLE;
      heroPlatformIconEl.style.setProperty('--topic-hero-icon-scale', String(Number.isFinite(TOPIC_ICON_SCALE) && TOPIC_ICON_SCALE > 0 ? TOPIC_ICON_SCALE : 1));
      heroPlatformIconEl.style.display = 'block';
      try { if (typeof syncHeroGlassTextAttrs === 'function') syncHeroGlassTextAttrs(); } catch {}
      try { markPlatformIconLoaded(TOPIC_ICON_SRC); } catch {}
    } else {
      heroPlatformIconEl.style.removeProperty('--topic-hero-icon-scale');
      heroPlatformIconEl.style.display = 'none';
    }
  }

  function isTopicSnapshotCurrentShape(snapshot) {
    const payload = snapshot && snapshot.payload;
    return Boolean(payload && Number(payload.topicVersion || 0) >= TOPIC_SNAPSHOT_VERSION);
  }

  function removeTopicScopeControls() {
    const row = document.getElementById('history-tools-row');
    if (row && row.parentNode) row.parentNode.removeChild(row);
  }

  async function renderTopicMyPodcasts() {
    myPodcastsScopeActive = true;
    try { ensureMyPodcastsControls(); } catch {}
    setMyPodcastsControlsVisibility(true);
    updateMyPodcastsEntryButtonState();
    await renderMyPodcastsLibrary();
    applyTopicAccentTheme();
    syncTopicHeroBadge();
  }

  async function exitTopicMyPodcasts(options = {}) {
    myPodcastsScopeActive = false;
    setMyPodcastsControlsVisibility(false);
    updateMyPodcastsEntryButtonState();
    await loadNewsPodcastData(options);
  }

  function getContentLanguageGroups() {
    const pageConfig = window.TOPIC_PAGE_CONFIG || {};
    return Array.isArray(pageConfig.contentLanguageGroups) ? pageConfig.contentLanguageGroups : [];
  }

  function getContentLanguageGroupMap() {
    return new Map(getContentLanguageGroups().map((group) => [group.key, group]));
  }

  function normalizeCollectionKey(value) {
    const safe = String(value || '').trim().toLowerCase();
    const legacyMap = {
      'lang-en': 'collection-anglosphere',
      'lang-es': 'collection-hispanic',
      'lang-fr': 'collection-francophone',
      'lang-de': 'collection-germanic',
      'lang-pt': 'collection-lusophone',
      'lang-ar': 'collection-arab-world',
      'lang-zh': 'collection-sinophone',
      'lang-ja': 'region-east-asia',
      'lang-ko': 'region-east-asia',
      'lang-hi': 'region-south-asia',
      'lang-it': 'region-southern-europe',
      'collection-italian': 'region-southern-europe',
      'lang-nl': 'collection-dutch-flemish',
      'lang-ru': 'collection-russian'
    };
    return legacyMap[safe] || safe;
  }

  function getAllCountries() {
    return Array.from(hiddenCountrySelect.options)
      .map((option) => ({ value: String(option.value || '').trim().toLowerCase(), label: String(option.textContent || '').trim() }))
      .filter((item) => /^[a-z]{2}$/.test(item.value));
  }

  function getCountryLabel(code) {
    const safe = String(code || '').trim().toLowerCase();
    const match = getAllCountries().find((item) => item.value === safe);
    return match ? match.label : safe.toUpperCase();
  }

  function formatString(template, values) {
    return String(template || '').replace(/\{(\w+)\}/g, (_match, key) => {
      return Object.prototype.hasOwnProperty.call(values || {}, key) ? String(values[key]) : '';
    });
  }

  function buildSelectionSignaturePayload() {
    return JSON.stringify({
      topic: TOPIC_KEY,
      collections: Array.from(state.contentLanguages).sort(),
      manualInclude: Array.from(state.manualInclude).sort(),
      manualExclude: Array.from(state.manualExclude).sort()
    });
  }

  function hashSelectionSignature(text) {
    let hash = 2166136261;
    const source = String(text || '');
    for (let i = 0; i < source.length; i += 1) {
      hash ^= source.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return Math.abs(hash >>> 0).toString(36);
  }

  function currentSelectionSignatureValue() {
    return `topic-${TOPIC_KEY}-${hashSelectionSignature(buildSelectionSignaturePayload())}`;
  }

  function ensureSelectionOption(value) {
    let option = hiddenCountrySelect.querySelector(`#${TOPIC_SIGNATURE_OPTION_ID}`);
    if (!option) {
      option = document.createElement('option');
      option.id = TOPIC_SIGNATURE_OPTION_ID;
      option.dataset.topicSignature = '1';
      hiddenCountrySelect.appendChild(option);
    }
    option.value = value;
    option.textContent = value;
    hiddenCountrySelect.value = value;
    state.currentSignature = value;
  }

  function getAutoCountries() {
    const groupMap = getContentLanguageGroupMap();
    const out = new Set();
    state.contentLanguages.forEach((key) => {
      const group = groupMap.get(key);
      (group && Array.isArray(group.countries) ? group.countries : []).forEach((country) => out.add(country));
    });
    return out;
  }

  function getEffectiveCountries() {
    const out = getAutoCountries();
    state.manualInclude.forEach((country) => out.add(country));
    state.manualExclude.forEach((country) => out.delete(country));
    return out;
  }

  function getEffectiveCountriesFor(includeSet = state.manualInclude, excludeSet = state.manualExclude) {
    const out = getAutoCountries();
    includeSet.forEach((country) => out.add(country));
    excludeSet.forEach((country) => out.delete(country));
    return out;
  }

  function getCountryModeFor(country, includeSet = state.manualInclude, excludeSet = state.manualExclude) {
    const safe = String(country || '').trim().toLowerCase();
    if (excludeSet.has(safe)) return getAutoCountries().has(safe) ? 'excluded-auto' : 'excluded';
    if (includeSet.has(safe)) return 'manual';
    if (getAutoCountries().has(safe)) return 'auto';
    return 'none';
  }

  function isCountrySelectedFor(country, includeSet = state.manualInclude, excludeSet = state.manualExclude) {
    return getEffectiveCountriesFor(includeSet, excludeSet).has(String(country || '').trim().toLowerCase());
  }

  function getCountryMode(country) {
    return getCountryModeFor(country, state.manualInclude, state.manualExclude);
  }

  function isCountrySelected(country) {
    return isCountrySelectedFor(country, state.manualInclude, state.manualExclude);
  }

  function setCountryMode(country, nextMode) {
    const safe = String(country || '').trim().toLowerCase();
    if (!safe) return;
    state.manualInclude.delete(safe);
    state.manualExclude.delete(safe);
    if (nextMode === 'manual') state.manualInclude.add(safe);
    if (nextMode === 'excluded') state.manualExclude.add(safe);
  }

  function toggleCountrySelection(country) {
    const autoCountries = getAutoCountries();
    const safe = String(country || '').trim().toLowerCase();
    if (!safe) return;
    const currentMode = getCountryMode(safe);
    const selected = isCountrySelected(safe);
    if (selected) {
      if (currentMode === 'auto') {
        setCountryMode(safe, 'excluded');
        return;
      }
      if (currentMode === 'manual') {
        setCountryMode(safe, 'none');
        return;
      }
      return;
    }
    if (currentMode === 'excluded' && autoCountries.has(safe)) {
      setCountryMode(safe, 'auto');
      return;
    }
    setCountryMode(safe, 'manual');
  }

  function formatAppearanceText(count) {
    const strings = getTopicStrings();
    const n = Math.max(1, Number(count) || 1);
    return formatString(n === 1 ? strings.appearancesSingular : strings.appearancesPlural, { count: n });
  }

  function getSelectedContentGroups() {
    const map = getContentLanguageGroupMap();
    return Array.from(state.contentLanguages)
      .map((key) => map.get(key))
      .filter(Boolean);
  }

  function persistTopicState() {
    const payload = {
      uiLang: state.uiLang,
      collections: Array.from(state.contentLanguages),
      manualInclude: Array.from(state.manualInclude),
      manualExclude: Array.from(state.manualExclude),
      filters: Array.isArray(state.filters) ? state.filters.map((item) => ({ keyword: String(item.keyword || ''), mode: String(item.mode || 'hide') })) : [],
      period: currentPeriodValue(),
      date: getSelectedHistoryDateKey(),
      query: String(searchBox && searchBox.value || '').trim()
    };
    try {
      localStorage.setItem(TOPIC_STORAGE_KEY, JSON.stringify(payload));
    } catch {}
  }

  function readTopicState() {
    let raw = null;
    try {
      raw = JSON.parse(localStorage.getItem(TOPIC_STORAGE_KEY) || 'null');
    } catch {}

    const params = new URLSearchParams(window.location.search);
    const pageLocale = normalizeUiLang((TOPIC_PAGE_CONFIG && TOPIC_PAGE_CONFIG.locale) || TOPIC_DEFAULT_STATE.uiLang);
    const resolved = {
      uiLang: normalizeUiLang(params.get('lang') || pageLocale),
      contentLanguages: (params.get('collections') || params.get('content') || '').split(',').map((value) => value.trim()).filter(Boolean),
      manualInclude: (params.get('include') || '').split(',').map((value) => value.trim().toLowerCase()).filter(Boolean),
      manualExclude: (params.get('exclude') || '').split(',').map((value) => value.trim().toLowerCase()).filter(Boolean),
      filters: [],
      period: String(params.get('period') || (raw && raw.period) || TOPIC_DEFAULT_STATE.period).trim().toLowerCase(),
      date: String(params.get('date') || (raw && raw.date) || '').trim(),
      query: String(params.get('q') || (raw && raw.query) || '').trim()
    };

    const allowStoredCollections = Boolean(
      raw
      && normalizeUiLang(raw.uiLang || pageLocale) === pageLocale
      && !params.get('collections')
      && !params.get('content')
    );
    if (allowStoredCollections && !resolved.contentLanguages.length && raw && Array.isArray(raw.collections)) {
      resolved.contentLanguages = raw.collections.slice();
    }
    if (allowStoredCollections && !resolved.contentLanguages.length && raw && Array.isArray(raw.contentLanguages)) {
      resolved.contentLanguages = raw.contentLanguages.slice();
    }
    if (!resolved.contentLanguages.length) resolved.contentLanguages = TOPIC_DEFAULT_STATE.contentLanguages.slice();
    if (!resolved.manualInclude.length && raw && Array.isArray(raw.manualInclude)) resolved.manualInclude = raw.manualInclude.slice();
    if (!resolved.manualExclude.length && raw && Array.isArray(raw.manualExclude)) resolved.manualExclude = raw.manualExclude.slice();
    if (raw && Array.isArray(raw.filters)) resolved.filters = raw.filters.slice();

    const validCollectionKeys = getContentLanguageGroupMap();
    const normalizedCollections = resolved.contentLanguages
      .map((value) => normalizeCollectionKey(value))
      .filter((value, index, arr) => value && arr.indexOf(value) === index && validCollectionKeys.has(value));

    state.uiLang = normalizeUiLang(resolved.uiLang);
    const defaultCollections = resolveDefaultCollectionsForLocale(state.uiLang);
    state.contentLanguages = new Set(normalizedCollections.length ? normalizedCollections : defaultCollections);
    state.manualInclude = new Set(resolved.manualInclude.filter((value) => /^[a-z]{2}$/.test(value)));
    state.manualExclude = new Set(resolved.manualExclude.filter((value) => /^[a-z]{2}$/.test(value)));
    state.filters = normalizeTopicFilters(resolved.filters);
    state.countrySearch = '';

    if (searchBox) searchBox.value = resolved.query;
    if (periodControl) periodControl.value = ['daily', 'week', 'month', 'year', 'all'].includes(resolved.period) ? resolved.period : 'daily';
    if (dateControl) {
      dateControl.value = resolved.date;
      if (resolved.date) dateControl.dataset.pendingValue = resolved.date;
    }
  }

  function updateQueryState() {
    const params = new URLSearchParams();
    params.set('lang', state.uiLang);
    if (state.contentLanguages.size) params.set('collections', Array.from(state.contentLanguages).sort().join(','));
    if (state.manualInclude.size) params.set('include', Array.from(state.manualInclude).sort().join(','));
    if (state.manualExclude.size) params.set('exclude', Array.from(state.manualExclude).sort().join(','));
    params.set('period', currentPeriodValue());
    const selectedDate = getSelectedHistoryDateKey();
    if (selectedDate) params.set('date', selectedDate);
    const q = String(searchBox && searchBox.value || '').trim();
    if (q) params.set('q', q);
    history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
    persistTopicState();
  }

  function normalizeTopicFilterKeyword(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function normalizeTopicFilterMode(value) {
    return String(value || '').trim().toLowerCase() === 'blur' ? 'blur' : 'hide';
  }

  function normalizeTopicFilters(filters) {
    const out = [];
    const seen = new Set();
    (Array.isArray(filters) ? filters : []).forEach((item) => {
      const keyword = normalizeTopicFilterKeyword(item && item.keyword);
      if (!keyword) return;
      const dedupeKey = keyword.toLowerCase();
      if (seen.has(dedupeKey)) return;
      seen.add(dedupeKey);
      out.push({ keyword, mode: normalizeTopicFilterMode(item && item.mode) });
    });
    return out;
  }

  function overrideSharedHooks() {
    window.RUNTIME_PAGE_LANG = state.uiLang;
    updateCountrySeo = () => {};
    fetchPodcastsData = () => {
      if (isFavoritesScopeMode()) {
        setMyPodcastsControlsVisibility(true);
        updateMyPodcastsEntryButtonState();
        return renderTopicMyPodcasts();
      }
      setMyPodcastsControlsVisibility(false);
      updateMyPodcastsEntryButtonState();
      return loadNewsPodcastData();
    };
  }

  function applyTopicRuntimeLanguage(lang) {
    state.uiLang = normalizeUiLang(lang);
    window.RUNTIME_PAGE_LANG = state.uiLang;
    document.documentElement.setAttribute('data-runtime-lang', state.uiLang);
    document.documentElement.lang = state.uiLang === 'zh-hans'
      ? 'zh-Hans'
      : state.uiLang === 'zh-hant'
        ? 'zh-Hant'
        : state.uiLang;
    document.documentElement.dir = isRtlLanguage(state.uiLang) ? 'rtl' : 'ltr';

    const locale = getTopicLocale(state.uiLang);
    Object.assign(uiText, UI_TEXT_DEFAULT, locale.uiText || {});
    applyUiText();
    updatePeriodUiLabels();
    updateTopicStaticText();
    try {
      const myPodcastsBtn = ensureMyPodcastsEntryButton();
      if (myPodcastsBtn) myPodcastsBtn.textContent = buildMyPodcastsScopeLabel();
    } catch {}
    updateQueryState();
    syncTopicHeroBadge();
  }

  function closeTopicPanels() {
    closeLanguageModal();
    closeCountryModal();
    closeFilterModal();
  }

  function updateTopicStaticText() {
    const strings = getTopicStrings();
    document.querySelectorAll('[data-topic-i18n]').forEach((node) => {
      const key = node.getAttribute('data-topic-i18n');
      if (!key) return;
      const value = strings[key];
      if (!value) return;
      if (node.matches('input[placeholder]')) node.setAttribute('placeholder', value);
      else node.textContent = value;
    });
    document.querySelectorAll('[data-topic-i18n-placeholder]').forEach((node) => {
      const key = node.getAttribute('data-topic-i18n-placeholder');
      if (!key) return;
      const value = strings[key];
      if (!value) return;
      node.setAttribute('placeholder', value);
    });
    if (countrySearchInput) countrySearchInput.setAttribute('placeholder', strings.countrySearchPlaceholder);
    if (customShareButton) {
      if (typeof decorateCommandButton === 'function') {
        decorateCommandButton(customShareButton, 'share', uiText.share || UI_TEXT_DEFAULT.share || 'Share');
      } else {
        customShareButton.textContent = uiText.share || UI_TEXT_DEFAULT.share || 'Share';
      }
    }
    if (selectionLanguageEl) selectionLanguageEl.textContent = buildLanguageSummaryText();
    if (selectionCountriesEl) selectionCountriesEl.textContent = buildCountrySummaryText();
    if (countrySummaryEl) countrySummaryEl.textContent = buildCountrySummaryText();
    if (languageSummaryEl) languageSummaryEl.textContent = buildLanguageSummaryText();
    if (filterSummaryEl) filterSummaryEl.textContent = buildFilterSummaryText();
  }

  function buildLanguageSummaryText() {
    const groups = getSelectedContentGroups();
    if (!groups.length) return getTopicStrings().summaryNoLanguage;
    if (groups.length === 1) return formatString(getTopicStrings().summarySingleLanguage, { label: groups[0].label, count: 1 });
    return formatString(getTopicStrings().summaryMultiLanguage, { count: groups.length });
  }

  function buildCountrySummaryText() {
    const strings = getTopicStrings();
    const active = getEffectiveCountries().size;
    return formatString(active === 1 ? strings.summaryCountrySingular : strings.summaryCountryPlural, { count: active });
  }

  function buildFilterSummaryText() {
    const strings = getTopicStrings();
    const count = Array.isArray(state.filters) ? state.filters.length : 0;
    if (!count) return strings.filterSummaryNone;
    if (count === 1) return strings.filterSummarySingle;
    return formatString(strings.filterSummaryMulti, { count });
  }

  function buildSelectionSummaryText() {
    const strings = getTopicStrings();
    const groupCount = state.contentLanguages.size;
    if (!groupCount) return strings.summaryNoLanguage;
    if (groupCount === 1) {
      const only = getSelectedContentGroups()[0];
      return formatString(strings.summarySingleLanguage, { label: only ? only.label : '', count: 1 });
    }
    return formatString(strings.summaryMultiLanguage, { count: groupCount });
  }

  function buildCollectionSectionConfig() {
    const pageConfig = window.TOPIC_PAGE_CONFIG || {};
    return Array.isArray(pageConfig.collectionSections) ? pageConfig.collectionSections : [];
  }

  function renderContentLanguageChips(selectedSet = state.contentLanguages) {
    if (!languageListEl) return;
    const selected = new Set(selectedSet);
    const groups = getContentLanguageGroups();
    const sections = buildCollectionSectionConfig();
    const strings = getTopicStrings();
    languageListEl.innerHTML = sections.map((section) => {
      const rows = groups
        .filter((group) => group.groupKey === section.key)
        .map((group) => {
          const active = selected.has(group.key);
          const countryCount = Array.isArray(group.countries) ? group.countries.length : 0;
          const countryLabel = formatString(countryCount === 1 ? strings.summaryCountrySingular : strings.summaryCountryPlural, { count: countryCount });
          return `
            <button class="news-country-row news-language-row news-collection-row ${active ? 'is-selected' : ''}" type="button" data-language-toggle="${escapeHtml(group.key)}" aria-pressed="${active ? 'true' : 'false'}">
              <div class="news-country-main">
                <div class="news-country-name">${escapeHtml(group.label)}</div>
                <div class="news-country-meta">
                  <span class="news-country-code">${escapeHtml(countryLabel)}</span>
                </div>
                <div class="news-collection-note">${escapeHtml(group.description || '')}</div>
              </div>
              <span class="news-country-side">
                <span class="news-country-mark" aria-hidden="true"></span>
              </span>
            </button>
          `;
        }).join('');
      return `
        <section class="news-collection-section">
          <header class="news-collection-section-head">
            <h3 class="news-collection-section-title">${escapeHtml(section.title)}</h3>
            ${section.help ? `<p class="news-collection-section-help">${escapeHtml(section.help)}</p>` : ''}
          </header>
          <div class="news-collection-section-list">${rows}</div>
        </section>
      `;
    }).join('');
  }

  function renderFilterList(filters = state.filters) {
    if (!filterListEl) return;
    const strings = getTopicStrings();
    const list = normalizeTopicFilters(filters);
    if (!list.length) {
      filterListEl.innerHTML = `<div class="news-filter-empty">${escapeHtml(strings.filterEmpty)}</div>`;
      return;
    }
    filterListEl.innerHTML = list.map((item, index) => {
      const modeLabel = item.mode === 'blur' ? strings.filterModeBlurShort : strings.filterModeHideShort;
      return `
        <div class="news-filter-item" data-filter-index="${index}">
          <div class="news-filter-item-copy">
            <strong class="news-filter-item-keyword">${escapeHtml(item.keyword)}</strong>
            <span class="news-filter-item-mode">${escapeHtml(modeLabel)}</span>
          </div>
          <div class="news-filter-item-actions">
            <button class="plain-btn news-filter-item-toggle" type="button" data-filter-toggle-mode="${index}">${escapeHtml(item.mode === 'blur' ? strings.filterModeHide : strings.filterModeBlur)}</button>
            <button class="plain-btn news-filter-item-remove" type="button" data-filter-remove="${index}">${escapeHtml(strings.removeFilter)}</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function ensureContentLanguageChipsPresent() {
    if (!languageListEl) return;
    const hasOptions = languageListEl.querySelector('[data-language-toggle]');
    if (!hasOptions) renderContentLanguageChips(state.draftContentLanguages && state.draftContentLanguages.size ? state.draftContentLanguages : state.contentLanguages);
  }

  function getSortedCountries(queryValue = state.countrySearch, includeSet = state.manualInclude, excludeSet = state.manualExclude) {
    const query = String(queryValue || '').trim().toLowerCase();
    return getAllCountries()
      .filter((country) => !query || country.label.toLowerCase().includes(query) || country.value.includes(query))
      .sort((a, b) => {
        const modeA = getCountryModeFor(a.value, includeSet, excludeSet);
        const modeB = getCountryModeFor(b.value, includeSet, excludeSet);
        const rank = { auto: 0, manual: 0, 'excluded-auto': 1, none: 2, excluded: 2 };
        if (rank[modeA] !== rank[modeB]) return rank[modeA] - rank[modeB];
        return a.label.localeCompare(b.label);
      });
  }

  function renderCountryList(includeSet = state.manualInclude, excludeSet = state.manualExclude, queryValue = state.countrySearch) {
    if (!countryListEl) return;
    countryListEl.innerHTML = getSortedCountries(queryValue, includeSet, excludeSet).map((country) => {
      const mode = getCountryModeFor(country.value, includeSet, excludeSet);
      const selected = isCountrySelectedFor(country.value, includeSet, excludeSet);
      return `
        <button class="news-country-row ${selected ? 'is-selected' : ''} is-${mode}" type="button" data-country-toggle="${escapeHtml(country.value)}" aria-pressed="${selected ? 'true' : 'false'}">
          <div class="news-country-main">
            <div class="news-country-name">${escapeHtml(country.label)}</div>
            <div class="news-country-meta">
              <span class="news-country-code">${escapeHtml(country.value.toUpperCase())}</span>
            </div>
          </div>
          <span class="news-country-side">
            <span class="news-country-mark" aria-hidden="true"></span>
          </span>
        </button>
      `;
    }).join('');
  }

  function clearRenderedTranslations() {
    chartContainer.querySelectorAll('.translated-title, .transliteration-title').forEach((node) => node.remove());
  }

  function openLanguageModal() {
    state.draftContentLanguages = new Set(state.contentLanguages);
    renderContentLanguageChips(state.draftContentLanguages);
    ensureContentLanguageChipsPresent();
    if (languageModalEl) {
      languageModalEl.classList.remove('hidden');
      languageModalEl.setAttribute('aria-hidden', 'false');
    }
    state.isLanguageModalOpen = true;
  }

  function openFilterModal() {
    state.draftFilters = Array.isArray(state.filters) ? state.filters.map((item) => ({ ...item })) : [];
    state.draftFilterMode = 'hide';
    renderFilterList(state.draftFilters);
    if (filterKeywordInput) filterKeywordInput.value = '';
    syncFilterModeButtons();
    if (filterModalEl) {
      filterModalEl.classList.remove('hidden');
      filterModalEl.setAttribute('aria-hidden', 'false');
    }
    state.isFilterModalOpen = true;
  }

  function closeFilterModal() {
    if (filterModalEl) {
      filterModalEl.classList.add('hidden');
      filterModalEl.setAttribute('aria-hidden', 'true');
    }
    state.isFilterModalOpen = false;
  }

  function syncFilterModeButtons() {
    if (filterModeHideBtn) filterModeHideBtn.classList.toggle('is-active', state.draftFilterMode === 'hide');
    if (filterModeBlurBtn) filterModeBlurBtn.classList.toggle('is-active', state.draftFilterMode === 'blur');
  }

  function upsertDraftFilter(keyword, mode) {
    const safeKeyword = normalizeTopicFilterKeyword(keyword);
    if (!safeKeyword) return false;
    const safeMode = normalizeTopicFilterMode(mode);
    const list = Array.isArray(state.draftFilters) ? state.draftFilters.slice() : [];
    const existingIndex = list.findIndex((item) => String(item.keyword || '').toLowerCase() === safeKeyword.toLowerCase());
    if (existingIndex >= 0) list[existingIndex] = { keyword: safeKeyword, mode: safeMode };
    else list.unshift({ keyword: safeKeyword, mode: safeMode });
    state.draftFilters = normalizeTopicFilters(list);
    renderFilterList(state.draftFilters);
    return true;
  }

  function applyDraftFilters() {
    state.filters = normalizeTopicFilters(state.draftFilters);
    updateSelectionSummary();
    persistTopicState();
    closeFilterModal();
    return rerenderCurrentTopicView();
  }

  function closeLanguageModal() {
    if (languageModalEl) {
      languageModalEl.classList.add('hidden');
      languageModalEl.setAttribute('aria-hidden', 'true');
    }
    state.isLanguageModalOpen = false;
  }

  function applyDraftLanguageSelection() {
    const previous = new Set(state.contentLanguages);
    state.contentLanguages = new Set(state.draftContentLanguages);
    if (!state.contentLanguages.size) state.contentLanguages.add(TOPIC_DEFAULT_STATE.contentLanguages[0]);
    const currentMap = getContentLanguageGroupMap();
    const addedCollections = Array.from(state.contentLanguages).filter((key) => !previous.has(key));
    if (addedCollections.length) {
      addedCollections.forEach((key) => {
        const group = currentMap.get(key);
        (group && Array.isArray(group.countries) ? group.countries : []).forEach((country) => {
          state.manualExclude.delete(String(country || '').trim().toLowerCase());
        });
      });
    }
    renderContentLanguageChips();
    updateSelectionSummary();
    updateQueryState();
    closeLanguageModal();
    return loadNewsPodcastData({ forceRefresh: false });
  }

  function openCountryModal() {
    state.draftManualInclude = new Set(state.manualInclude);
    state.draftManualExclude = new Set(state.manualExclude);
    state.draftCountrySearch = '';
    if (countrySearchInput) countrySearchInput.value = '';
    renderCountryList(state.draftManualInclude, state.draftManualExclude, state.draftCountrySearch);
    if (countryModalEl) {
      countryModalEl.classList.remove('hidden');
      countryModalEl.setAttribute('aria-hidden', 'false');
    }
    state.isCountryModalOpen = true;
  }

  function closeCountryModal() {
    if (countryModalEl) {
      countryModalEl.classList.add('hidden');
      countryModalEl.setAttribute('aria-hidden', 'true');
    }
    state.isCountryModalOpen = false;
  }

  function toggleDraftCountrySelection(country) {
    const safe = String(country || '').trim().toLowerCase();
    if (!safe) return;
    const includeSet = state.draftManualInclude;
    const excludeSet = state.draftManualExclude;
    const autoCountries = getAutoCountries();
    const currentMode = getCountryModeFor(safe, includeSet, excludeSet);
    const selected = isCountrySelectedFor(safe, includeSet, excludeSet);
    includeSet.delete(safe);
    excludeSet.delete(safe);
    if (selected) {
      if (currentMode === 'auto') excludeSet.add(safe);
      return;
    }
    if (currentMode === 'excluded' && autoCountries.has(safe)) return;
    includeSet.add(safe);
  }

  function applyDraftCountrySelection() {
    state.manualInclude = new Set(state.draftManualInclude);
    state.manualExclude = new Set(state.draftManualExclude);
    state.hasPendingCountryApply = false;
    updateSelectionSummary();
    updateQueryState();
    closeCountryModal();
    return loadNewsPodcastData({ forceRefresh: false });
  }

  function inferDetectedLanguageLabel(code) {
    const safe = String(code || '').trim().toLowerCase();
    const groups = getContentLanguageGroups();
    const found = groups.find((group) => languageCodeMatchesPrefix(safe, group.detectPrefix));
    return found ? found.label : (safe || '').toUpperCase();
  }

  function normalizeTopicAppleUrlKey(rawUrl) {
    const safe = String(rawUrl || '').trim();
    if (!safe) return '';
    try {
      const parsed = new URL(safe);
      const episodeId = String(parsed.searchParams.get('i') || '').trim();
      if (episodeId) return `apple:${episodeId}`;
      const path = String(parsed.pathname || '')
        .replace(/^\/[a-z]{2}(?:-[a-z]{2})?\//i, '/')
        .replace(/\/+$/g, '');
      return path ? `apple-url:${path.toLowerCase()}` : '';
    } catch {
      return safe.toLowerCase();
    }
  }

  function normalizeTopicPublishedKey(rawValue) {
    const safe = String(rawValue || '').trim();
    if (!safe) return '';
    const normalizedDate = safe.match(/^\d{4}-\d{2}-\d{2}/);
    if (normalizedDate && normalizedDate[0]) return normalizedDate[0];
    return normalizeCrossPlatformKeyPart(safe);
  }

  function buildTopicItemKey(item) {
    const appleId = String(item && item.appleId || '').trim();
    if (appleId) return `apple:${appleId}`;
    const urlKey = normalizeTopicAppleUrlKey(item && item.url);
    if (urlKey) return urlKey;
    const title = normalizeCrossPlatformKeyPart(item && item.title);
    const publisher = normalizeCrossPlatformKeyPart(item && item.publisher);
    const published = normalizeTopicPublishedKey(item && item.publishedText);
    return `${title}::${publisher}::${published}`;
  }

  function dedupeTopicCountryItems(items) {
    const rows = Array.isArray(items) ? items : [];
    const byKey = new Map();

    rows.forEach((item, index) => {
      const rank = Number(item && item.rank) || (index + 1);
      const key = buildTopicItemKey(item);
      if (!key) return;

      const existing = byKey.get(key);
      if (!existing || rank < existing.rank) {
        byKey.set(key, {
          ...item,
          rank
        });
      }
    });

    return Array.from(byKey.values()).sort((a, b) => {
      const rankA = Number(a && a.rank) || 999;
      const rankB = Number(b && b.rank) || 999;
      if (rankA !== rankB) return rankA - rankB;
      return String(a && a.title || '').localeCompare(String(b && b.title || ''));
    });
  }

  function getTopicCountryWeight(country, countryWeights = null) {
    const safeCountry = String(country || '').trim().toLowerCase();
    if (!safeCountry || !countryWeights || typeof countryWeights !== 'object') return 1;
    const rawWeight = Number(countryWeights[safeCountry]);
    return Number.isFinite(rawWeight) && rawWeight > 0 ? rawWeight : 1;
  }

  function getTopicSelectedWeightTotal(countries, countryWeights = null) {
    const rows = Array.isArray(countries) ? countries : [];
    const total = rows.reduce((sum, country) => sum + getTopicCountryWeight(country, countryWeights), 0);
    return total > 0 ? total : Math.max(rows.length, 1);
  }

  async function getTopicCountryLocalItems(country, options = {}) {
    const safeCountry = String(country || '').trim().toLowerCase();
    const forceRefresh = Boolean(options.forceRefresh);
    if (!safeCountry || forceRefresh) return null;

    const cacheKey = responseCacheKeyFor(TOPIC_PLATFORM, safeCountry, TOPIC_TYPE);
    const cachedEntry = await getResponseCacheEntry(cacheKey);
    const cached = cachedEntry && Object.prototype.hasOwnProperty.call(cachedEntry, 'payload') ? cachedEntry.payload : null;
    const cachedTime = Number((cachedEntry && cachedEntry.updatedAt) || 0);
    const cacheFresh = isResponseCacheFreshForPlatform(TOPIC_PLATFORM, TOPIC_TYPE, cached, cachedTime);
    if (!cacheFresh || !cached) return null;

    const items = decorateCountryItems(collectNormalizedItemsForData(cached, TOPIC_PLATFORM, TOPIC_TYPE), safeCountry);
    if (!items.length) return null;

    await persistPlatformPayloadAliases(TOPIC_PLATFORM, TOPIC_TYPE, safeCountry, cached, items, {
      fetchedAt: cachedTime,
      payload: cached
    });
    return { items, source: 'cache' };
  }

  async function hasCompleteLocalCoverage(effectiveCountries) {
    const countries = Array.isArray(effectiveCountries) ? effectiveCountries : [];
    if (!countries.length) return false;
    let complete = true;
    await mapWithConcurrency(countries, 6, async (country) => {
      const localHit = await getTopicCountryLocalItems(country, { forceRefresh: false });
      if (!localHit || !Array.isArray(localHit.items) || !localHit.items.length) complete = false;
    });
    return complete;
  }

  async function buildTopicDetectionMap(items) {
    const rows = Array.isArray(items) ? items : [];
    if (!rows.length) return new Map();

    const tasks = [];
    const seen = new Set();
    rows.forEach((item) => {
      const title = String(item && item.title || '').trim();
      const key = normalizeLanguageDetectTitleKey(title);
      if (!title || !key || seen.has(key)) return;
      seen.add(key);
      tasks.push({ key, title });
    });

    const results = await mapWithConcurrency(tasks, LANGUAGE_DETECT_CONCURRENCY, async (entry) => {
      const detected = await detectTextLanguage(entry.title, '');
      return { key: entry.key, detected: String(detected || '').trim().toLowerCase() };
    });

    const out = new Map();
    (Array.isArray(results) ? results : []).forEach((row) => {
      if (!row || !row.key) return;
      out.set(row.key, String(row.detected || '').trim().toLowerCase());
    });
    return out;
  }

  function decorateCountryItems(items, country) {
    const label = getCountryLabel(country);
    return (Array.isArray(items) ? items : []).map((item) => ({
      ...item,
      sourceType: String(item.sourceType || 'chart').trim().toLowerCase() || 'chart',
      originPlatform: TOPIC_PLATFORM,
      originType: String(item.originType || TOPIC_TYPE).trim().toLowerCase() || TOPIC_TYPE,
      originCountry: country,
      originCountryLabel: label,
      embedPlatform: String(item.embedPlatform || 'apple').trim().toLowerCase() || 'apple',
      embedKind: String(item.embedKind || TOPIC_TYPE).trim().toLowerCase() || TOPIC_TYPE,
      appleId: String(item.appleId || '').trim()
    }));
  }

  function buildTopicCountryBatches(countries) {
    const list = Array.isArray(countries) ? countries.filter(Boolean) : [];
    if (!list.length) return [];

    const batchCount = Math.max(1, Math.ceil(list.length / TOPIC_COUNTRY_BATCH_TARGET));
    const baseSize = Math.floor(list.length / batchCount);
    const remainder = list.length % batchCount;
    const batches = [];
    let start = 0;

    for (let index = 0; index < batchCount; index += 1) {
      const size = baseSize + (index < remainder ? 1 : 0);
      batches.push(list.slice(start, start + size));
      start += size;
    }

    return batches.filter((batch) => batch.length);
  }

  async function fetchCountriesForSelection(forceRefresh = false) {
    const effectiveCountries = Array.from(getEffectiveCountries()).sort();
    const countryMap = new Map();
    const failed = [];
    const missing = [];

    await mapWithConcurrency(effectiveCountries, 6, async (country) => {
      const localHit = await getTopicCountryLocalItems(country, { forceRefresh });
      if (localHit && Array.isArray(localHit.items) && localHit.items.length) {
        countryMap.set(country, decorateCountryItems(localHit.items, country));
        return;
      }
      missing.push(country);
    });

    const chunks = buildTopicCountryBatches(missing);

    for (const chunk of chunks) {
      let batch = null;
      try {
        batch = await fetchWorkerCountryBatchRaw(TOPIC_PLATFORM, TOPIC_TYPE, chunk);
      } catch (error) {
        console.warn('News topic country batch failed:', error);
        failed.push(...chunk);
        continue;
      }

      const okRows = Array.isArray(batch && batch.results) ? batch.results : [];
      okRows.forEach((row) => {
        const country = String(row && row.country || '').trim().toLowerCase();
        const data = row && row.data;
        if (!country || !data) return;
        const items = decorateCountryItems(collectNormalizedItemsForData(data, TOPIC_PLATFORM, TOPIC_TYPE), country);
        if (!items.length) return;
        countryMap.set(country, items);
        persistPlatformPayloadAliases(TOPIC_PLATFORM, TOPIC_TYPE, country, data, items, { fetchedAt: Date.now(), payload: data }).catch(() => {});
      });

      const failedRows = Array.isArray(batch && batch.failures) ? batch.failures : [];
      failed.push(...failedRows.filter((country) => country && !countryMap.has(country)));
    }

    return { countryMap, failed, effectiveCountries };
  }

  async function aggregateTopicItems(countryMap, options = {}) {
    const countryWeights = (options && options.countryWeights && typeof options.countryWeights === 'object')
      ? options.countryWeights
      : null;
    const selectedCountries = Array.from(countryMap.keys())
      .map((country) => String(country || '').trim().toLowerCase())
      .filter(Boolean);
    const totalSelectedWeight = getTopicSelectedWeightTotal(selectedCountries, countryWeights);
    const rawItems = Array.from(countryMap.entries()).flatMap(([country, items]) => {
      const deduped = dedupeTopicCountryItems(items);
      return deduped.map((item) => ({
        ...item,
        originCountry: String(item && item.originCountry || country || '').trim().toLowerCase()
      }));
    });
    const allByKey = new Map();

    rawItems.forEach((item, index) => {
      const country = String(item && item.originCountry || '').trim().toLowerCase();
      const rank = Number(item.rank) || (index + 1);
      const basePoints = scoreFromRank(rank);
      const points = basePoints * getTopicCountryWeight(country, countryWeights);
      if (!points) return;
      const key = buildTopicItemKey(item);
      if (!key) return;
      const existing = allByKey.get(key) || {
        key,
        title: item.title || '',
        publisher: item.publisher || '',
        image: item.image || '',
        url: item.url || '',
        description: item.description || '',
        podcastTitle: item.podcastTitle || '',
        publishedText: item.publishedText || '',
        durationText: item.durationText || '',
        meta: item.meta || '',
        embedUrl: item.embedUrl || '',
        embedPlatform: item.embedPlatform || 'apple',
        embedKind: item.embedKind || TOPIC_TYPE,
        sourceType: item.sourceType || 'chart',
        appleId: item.appleId || '',
        bestRank: 999,
        points: 0,
        basePoints: 0,
        countries: new Set()
      };
      existing.points += points;
      existing.basePoints += basePoints;
      existing.bestRank = Math.min(existing.bestRank, rank);
      if (country) existing.countries.add(country);
      if (rank <= existing.bestRank) {
        existing.title = item.title || existing.title;
        existing.publisher = item.publisher || existing.publisher;
        existing.image = item.image || existing.image;
        existing.url = item.url || existing.url;
        existing.description = item.description || existing.description;
        existing.podcastTitle = item.podcastTitle || existing.podcastTitle;
        existing.publishedText = item.publishedText || existing.publishedText;
        existing.durationText = item.durationText || existing.durationText;
        existing.meta = item.meta || existing.meta;
        existing.embedUrl = item.embedUrl || existing.embedUrl;
        existing.embedPlatform = item.embedPlatform || existing.embedPlatform;
        existing.embedKind = item.embedKind || existing.embedKind;
        existing.sourceType = item.sourceType || existing.sourceType;
        existing.appleId = item.appleId || existing.appleId;
      }
      allByKey.set(key, existing);
    });

    const aggregated = Array.from(allByKey.values()).map((item) => {
      const coverageWeight = Array.from(item.countries).reduce((sum, country) => {
        return sum + getTopicCountryWeight(country, countryWeights);
      }, 0);
      const weightedPoints = item.points;
      return {
        ...item,
        weightedPoints,
        coverageWeight,
        coverageRatio: totalSelectedWeight > 0
          ? Math.min(1, coverageWeight / totalSelectedWeight)
          : 0,
        points: weightedPoints
      };
    });

    return aggregated
      .sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.coverageWeight !== a.coverageWeight) return b.coverageWeight - a.coverageWeight;
        if (b.countries.size !== a.countries.size) return b.countries.size - a.countries.size;
        if (a.bestRank !== b.bestRank) return a.bestRank - b.bestRank;
        return String(a.title || '').localeCompare(String(b.title || ''));
      })
      .map((item, index) => ({
        rank: index + 1,
        title: item.title || '',
        publisher: item.publisher || '',
        image: item.image || '',
        url: item.url || '',
        description: item.description || '',
        podcastTitle: item.podcastTitle || '',
        publishedText: item.publishedText || '',
        durationText: item.durationText || '',
        meta: item.meta || '',
        embedUrl: item.embedUrl || '',
        embedPlatform: item.embedPlatform || 'apple',
        embedKind: item.embedKind || TOPIC_TYPE,
        sourceType: item.sourceType || 'chart',
        originPlatform: TOPIC_PLATFORM,
        originType: item.embedKind || TOPIC_TYPE,
        originCountry: '',
        originCountryLabel: '',
        detectedLanguage: item.detectedLanguage || '',
        detectedLanguageLabel: item.detectedLanguageLabel || '',
        appearanceText: formatAppearanceText(item.countries.size),
        appleId: item.appleId || ''
      }));
  }

  function topicFilterMatchesItem(item, filter) {
    const keyword = String(filter && filter.keyword || '').trim().toLowerCase();
    if (!keyword) return false;
    const haystack = [
      item && item.title,
      item && item.publisher,
      item && item.podcastTitle,
      item && item.description
    ].map((value) => String(value || '').toLowerCase()).join('\n');
    return haystack.includes(keyword);
  }

  function buildTopicDisplayItems(items) {
    const source = Array.isArray(items) ? items : [];
    const filters = normalizeTopicFilters(state.filters);
    if (!filters.length) {
      return source.map((item) => ({ ...item, topicFilterMode: '', topicFilterKeyword: '' }));
    }
    const out = [];
    source.forEach((item) => {
      const matches = filters.filter((filter) => topicFilterMatchesItem(item, filter));
      if (!matches.length) {
        out.push({ ...item, topicFilterMode: '', topicFilterKeyword: '' });
        return;
      }
      const hideMatch = matches.find((filter) => filter.mode === 'hide');
      if (hideMatch) return;
      const blurMatch = matches.find((filter) => filter.mode === 'blur');
      out.push({
        ...item,
        topicFilterMode: blurMatch ? 'blur' : '',
        topicFilterKeyword: blurMatch ? blurMatch.keyword : ''
      });
    });
    return out;
  }

  async function rerenderCurrentTopicView() {
    if (isFavoritesScopeMode()) return renderTopicMyPodcasts();
    if ((currentPeriodValue() !== 'daily' || getSelectedHistoryDateKey())) return renderTopicHistory();
    const items = Array.isArray(state.latestItems) ? state.latestItems : [];
    const snapshots = Array.isArray(state.latestSnapshots) ? state.latestSnapshots : [];
    const displayItems = buildTopicDisplayItems(items);
    state.latestDisplayItems = displayItems;
    const trendMap = buildDailyRankTrendMapFromSnapshots(snapshots, '', displayItems);
    const historySeriesMap = buildHistorySeriesMapFromSnapshots(snapshots, displayItems);
    renderNormalizedItems(displayItems, { rankTrendMap: trendMap, historySeriesMap });
    syncTopicCount(displayItems);
    applyTopicAccentTheme();
    clearRenderedTranslations();
    processTranslations();
    setStatus(displayItems.length ? 'live' : 'noData');
    setLoading(false);
    setSkeleton(false);
    updateSelectionSummary();
    syncTopicHeroBadge();
    return displayItems;
  }

  async function renderTopicHistory() {
    const snapshots = await getSnapshotsForCurrentSelection();
    state.latestSnapshots = snapshots;
    await refreshHistoryDateOptions(snapshots);

    let items = [];
    let trendMap = null;
    if (currentPeriodValue() === 'daily') {
      const selectedDateKey = getSelectedHistoryDateKey();
      const chosen = pickSnapshotRecordByDate(snapshots, resolveCurrentSnapshotDateKey(snapshots, selectedDateKey));
      items = snapshotRecordToRenderItems(chosen);
      trendMap = buildDailyRankTrendMapFromSnapshots(snapshots, selectedDateKey, items);
    } else {
      const anchor = resolveCurrentSnapshotDateKey(snapshots, getHistoryAnchorDateKey());
      const filtered = filterSnapshotsForPeriod(snapshots, currentPeriodValue(), anchor || getHistoryAnchorDateKey());
      items = aggregateSnapshotsToItems(filtered);
      trendMap = buildAggregateRankTrendMapFromSnapshots(snapshots, currentPeriodValue(), anchor, items);
    }

    const displayItems = buildTopicDisplayItems(items);
    state.latestDisplayItems = displayItems;
    const historySeriesMap = buildHistorySeriesMapFromSnapshots(snapshots, displayItems);
    renderNormalizedItems(displayItems, { rankTrendMap: trendMap, historySeriesMap });
    syncTopicCount(displayItems);
    applyTopicAccentTheme();
    clearRenderedTranslations();
    processTranslations();
    state.latestItems = items;
    setStatus(displayItems.length ? 'cache' : 'noData');
    setLoading(false);
    setSkeleton(false);
    updateSelectionSummary();
    syncTopicHeroBadge();
    return displayItems;
  }


  function syncTopicCount(items) {
    const list = Array.isArray(items) ? items : [];
    if (!searchBox || !searchBox.value.trim()) updateCount(list.length, list.length);
  }

  function updateSelectionSummary(failureCount = 0) {
    if (selectionLanguageEl) selectionLanguageEl.textContent = buildLanguageSummaryText();
    if (selectionCountriesEl) selectionCountriesEl.textContent = buildCountrySummaryText();
    if (countrySummaryEl) countrySummaryEl.textContent = buildCountrySummaryText();
    if (languageSummaryEl) languageSummaryEl.textContent = buildLanguageSummaryText();
    if (filterSummaryEl) filterSummaryEl.textContent = buildFilterSummaryText();
    if (lastUpdateEl) {
      if (!state.latestItems.length) {
        lastUpdateEl.textContent = getTopicStrings().lastUpdateIdle;
      } else {
        const prefix = formatNoteUpdatedAt(Date.now()) || new Date().toLocaleString();
        lastUpdateEl.textContent = failureCount
          ? `${prefix} · ${failureCount} failed`
          : prefix;
      }
    }
  }

  async function loadNewsPodcastData(options = {}) {
    const forceRefresh = Boolean(options.forceRefresh);
    if (isFavoritesScopeMode()) return renderTopicMyPodcasts();
    const effectiveCountries = Array.from(getEffectiveCountries()).sort();
    if (!effectiveCountries.length) {
      chartContainer.innerHTML = '';
      updateCount(0, 0);
      setStatus('noData');
      emptyStateEl.classList.remove('hidden');
      showToast(getTopicStrings().noCountrySelected);
      return;
    }

    ensureSelectionOption(currentSelectionSignatureValue());
    updateQueryState();

    const existingSnapshots = await getSnapshotsForCurrentSelection();

    if ((currentPeriodValue() !== 'daily' || getSelectedHistoryDateKey()) && !forceRefresh) {
      return renderTopicHistory();
    }

    if (!forceRefresh) {
      const currentDate = resolveCurrentSnapshotDateKey(existingSnapshots, '');
      const currentSnapshot = pickSnapshotRecordByDate(existingSnapshots, currentDate);
      const currentItems = snapshotRecordToRenderItems(currentSnapshot);
      if (currentItems.length && isTopicSnapshotCurrentShape(currentSnapshot) && await hasCompleteLocalCoverage(effectiveCountries)) {
        state.latestItems = currentItems;
        state.latestSnapshots = existingSnapshots;
        await refreshHistoryDateOptions(existingSnapshots);
        const displayItems = buildTopicDisplayItems(currentItems);
        state.latestDisplayItems = displayItems;
        const trendMap = buildDailyRankTrendMapFromSnapshots(existingSnapshots, '', displayItems);
        const historySeriesMap = buildHistorySeriesMapFromSnapshots(existingSnapshots, displayItems);
        renderNormalizedItems(displayItems, { rankTrendMap: trendMap, historySeriesMap });
        syncTopicCount(displayItems);
        applyTopicAccentTheme();
        clearRenderedTranslations();
        processTranslations();
        setStatus(displayItems.length ? 'cache' : 'noData');
        setLoading(false);
        setSkeleton(false);
        updateSelectionSummary();
        syncTopicHeroBadge();
        return displayItems;
      }
    }

    window.TOPIC_TRANSLATIONS_SUSPENDED = true;
    setLoading(true, state.latestItems.length ? 'refreshingData' : 'loadingData');
    setSkeleton(chartContainer.children.length === 0 && !state.latestItems.length);
    setStatus(state.latestItems.length ? 'refreshing' : 'loading');
    try {
      const { countryMap, failed } = await fetchCountriesForSelection(forceRefresh);
      const items = await aggregateTopicItems(countryMap, {
        countryWeights: window.PODCAST_MARKET_WEIGHTS || null
      });
      state.latestItems = items;
      state.hasPendingCountryApply = false;
      await saveDailySnapshot(TOPIC_PLATFORM, state.currentSignature, TOPIC_TYPE, items, {
        fetchedAt: Date.now(),
        payload: { topic: TOPIC_KEY, signature: state.currentSignature, topicVersion: TOPIC_SNAPSHOT_VERSION }
      });
      const snapshots = await getSnapshotsForCurrentSelection();
      state.latestSnapshots = snapshots;
      await refreshHistoryDateOptions(snapshots);
      const displayItems = buildTopicDisplayItems(items);
      state.latestDisplayItems = displayItems;
      const trendMap = buildDailyRankTrendMapFromSnapshots(snapshots, '', displayItems);
      const historySeriesMap = buildHistorySeriesMapFromSnapshots(snapshots, displayItems);
      window.TOPIC_TRANSLATIONS_SUSPENDED = false;
      renderNormalizedItems(displayItems, { rankTrendMap: trendMap, historySeriesMap });
      syncTopicCount(displayItems);
      applyTopicAccentTheme();
      clearRenderedTranslations();
      processTranslations();
      setStatus(displayItems.length ? 'live' : 'noData');
      setLoading(false);
      setSkeleton(false);
      updateSelectionSummary(failed.length);
      syncTopicHeroBadge();
      if (failed.length) showToast(getTopicStrings().fetchFailed);
    } catch (error) {
      console.error('News topic load failed:', error);
      window.TOPIC_TRANSLATIONS_SUSPENDED = false;
      setStatus('retry');
      setLoading(false);
      setSkeleton(false);
      if (!state.latestItems.length) emptyStateEl.classList.remove('hidden');
      if (state.latestItems.length) processTranslations();
      applyTopicAccentTheme();
      syncTopicHeroBadge();
      showToast(t('loadFailedRefresh'));
    }
  }

  function bindTopicEvents() {
    document.addEventListener('click', (event) => {
      const target = event.target;
      if (state.isCountryModalOpen && target && target.closest && target.closest('[data-country-modal-close]')) { closeCountryModal(); return; }
      if (state.isLanguageModalOpen && target && target.closest && target.closest('[data-language-modal-close]')) { closeLanguageModal(); return; }
      if (state.isFilterModalOpen && target && target.closest && target.closest('[data-filter-modal-close]')) { closeFilterModal(); return; }
      if (target && target.closest && target.closest('.topic-filter-block')) return;
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (state.isCountryModalOpen) { closeCountryModal(); return; }
        if (state.isLanguageModalOpen) { closeLanguageModal(); return; }
        if (state.isFilterModalOpen) { closeFilterModal(); return; }
        closeTopicPanels();
      }
    });

    if (uiLanguageSelect) {
      uiLanguageSelect.addEventListener('change', () => {
        const nextLocale = normalizeUiLang(uiLanguageSelect.value);
        const currentLocale = normalizeUiLang((window.TOPIC_PAGE_CONFIG && window.TOPIC_PAGE_CONFIG.locale) || state.uiLang);
        if (nextLocale && nextLocale !== currentLocale) {
          window.location.href = buildTopicLocaleHref(nextLocale);
        }
      });
    }

    if (languageTriggerBtn) {
      languageTriggerBtn.addEventListener('click', () => openLanguageModal());
    }

    if (filterTriggerBtn) {
      filterTriggerBtn.addEventListener('click', () => openFilterModal());
    }

    if (languageListEl) {
      languageListEl.addEventListener('click', (event) => {
        const button = event.target && event.target.closest ? event.target.closest('[data-language-toggle]') : null;
        if (!button) return;
        const key = String(button.getAttribute('data-language-toggle') || '').trim();
        if (!key) return;
        if (state.draftContentLanguages.has(key)) state.draftContentLanguages.delete(key);
        else state.draftContentLanguages.add(key);
        if (!state.draftContentLanguages.size) state.draftContentLanguages.add(TOPIC_DEFAULT_STATE.contentLanguages[0]);
        renderContentLanguageChips(state.draftContentLanguages);
      });
    }

    if (countryTriggerBtn) {
      countryTriggerBtn.addEventListener('click', () => openCountryModal());
    }

    if (filterModeHideBtn) {
      filterModeHideBtn.addEventListener('click', () => {
        state.draftFilterMode = 'hide';
        syncFilterModeButtons();
      });
    }

    if (filterModeBlurBtn) {
      filterModeBlurBtn.addEventListener('click', () => {
        state.draftFilterMode = 'blur';
        syncFilterModeButtons();
      });
    }

    if (filterAddBtn) {
      filterAddBtn.addEventListener('click', () => {
        const keyword = normalizeTopicFilterKeyword(filterKeywordInput && filterKeywordInput.value);
        if (!keyword) return;
        if (upsertDraftFilter(keyword, state.draftFilterMode) && filterKeywordInput) {
          filterKeywordInput.value = '';
          try { filterKeywordInput.focus({ preventScroll: true }); } catch {}
        }
      });
    }

    if (filterKeywordInput) {
      filterKeywordInput.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') return;
        event.preventDefault();
        const keyword = normalizeTopicFilterKeyword(filterKeywordInput.value);
        if (!keyword) return;
        if (upsertDraftFilter(keyword, state.draftFilterMode)) {
          filterKeywordInput.value = '';
        }
      });
    }

    if (filterListEl) {
      filterListEl.addEventListener('click', (event) => {
        const removeBtn = event.target && event.target.closest ? event.target.closest('[data-filter-remove]') : null;
        if (removeBtn) {
          const index = Number(removeBtn.getAttribute('data-filter-remove'));
          if (Number.isInteger(index) && index >= 0) {
            state.draftFilters = normalizeTopicFilters(state.draftFilters.filter((_item, itemIndex) => itemIndex !== index));
            renderFilterList(state.draftFilters);
          }
          return;
        }
        const toggleBtn = event.target && event.target.closest ? event.target.closest('[data-filter-toggle-mode]') : null;
        if (toggleBtn) {
          const index = Number(toggleBtn.getAttribute('data-filter-toggle-mode'));
          if (Number.isInteger(index) && state.draftFilters[index]) {
            state.draftFilters[index] = {
              ...state.draftFilters[index],
              mode: state.draftFilters[index].mode === 'blur' ? 'hide' : 'blur'
            };
            renderFilterList(state.draftFilters);
          }
        }
      });
    }

    if (countryListEl) {
      countryListEl.addEventListener('click', (event) => {
        const button = event.target && event.target.closest ? event.target.closest('[data-country-toggle]') : null;
        if (!button) return;
        const code = String(button.getAttribute('data-country-toggle') || '').trim().toLowerCase();
        if (!code) return;
        toggleDraftCountrySelection(code);
        renderCountryList(state.draftManualInclude, state.draftManualExclude, state.draftCountrySearch);
      });
    }

    if (countrySearchInput) {
      countrySearchInput.addEventListener('input', () => {
        state.draftCountrySearch = String(countrySearchInput.value || '');
        renderCountryList(state.draftManualInclude, state.draftManualExclude, state.draftCountrySearch);
      });
    }

    if (countrySearchClearBtn) {
      countrySearchClearBtn.addEventListener('click', () => {
        state.draftCountrySearch = '';
        if (countrySearchInput) countrySearchInput.value = '';
        renderCountryList(state.draftManualInclude, state.draftManualExclude, state.draftCountrySearch);
      });
    }

    if (languageModalCloseBtn) languageModalCloseBtn.addEventListener('click', () => closeLanguageModal());
    if (languageModalCancelBtn) languageModalCancelBtn.addEventListener('click', () => closeLanguageModal());
    if (languageModalApplyBtn) languageModalApplyBtn.addEventListener('click', () => { void applyDraftLanguageSelection(); });

    if (filterModalCloseBtn) filterModalCloseBtn.addEventListener('click', () => closeFilterModal());
    if (filterModalCancelBtn) filterModalCancelBtn.addEventListener('click', () => closeFilterModal());
    if (filterModalApplyBtn) filterModalApplyBtn.addEventListener('click', () => { void applyDraftFilters(); });

    if (countryModalCloseBtn) countryModalCloseBtn.addEventListener('click', () => closeCountryModal());
    if (countryModalCancelBtn) countryModalCancelBtn.addEventListener('click', () => closeCountryModal());
    if (countryModalApplyBtn) countryModalApplyBtn.addEventListener('click', () => { void applyDraftCountrySelection(); });

    if (refreshButton) {
      refreshButton.addEventListener('click', () => {
        if (isFavoritesScopeMode()) {
          void renderTopicMyPodcasts();
          return;
        }
        loadNewsPodcastData({ forceRefresh: true });
      });
    }

    if (searchBox) {
      searchBox.addEventListener('input', () => {
        if (isFavoritesScopeMode()) {
          updateQueryState();
          void renderTopicMyPodcasts();
          return;
        }
        applyFilterAndLimit();
        updateQueryState();
      });
    }

    if (clearSearchButton) {
      clearSearchButton.addEventListener('click', () => {
        if (!searchBox) return;
        searchBox.value = '';
        if (isFavoritesScopeMode()) void renderTopicMyPodcasts();
        else applyFilterAndLimit();
        updateQueryState();
        try { searchBox.focus({ preventScroll: true }); } catch {}
      });
    }

    if (periodControl) {
      periodSelect = periodControl;
      periodControl.addEventListener('change', () => {
        if (dateControl) {
          if (periodControl.value !== 'daily') {
            dateControl.value = '';
            delete dateControl.dataset.pendingValue;
          }
        }
        updateQueryState();
        loadNewsPodcastData({ forceRefresh: false });
      });
    }

    if (dateControl) {
      dateSelect = dateControl;
      dateControl.addEventListener('change', () => {
        updateQueryState();
        loadNewsPodcastData({ forceRefresh: false });
      });
    }

    if (customShareButton) {
      customShareButton.addEventListener('click', () => {
        const url = `${window.location.origin}${window.location.pathname}${window.location.search}`;
        if (typeof performShareAction === 'function') {
          void performShareAction(url);
          return;
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url)
            .then(() => showToast(t('linkCopied')))
            .catch(() => window.prompt(t('copyLink'), url));
        } else {
          window.prompt(t('copyLink'), url);
        }
      });
    }

    const topicMyPodcastsButton = ensureMyPodcastsEntryButton();
    if (topicMyPodcastsButton) {
      const rebound = cloneButtonWithoutListeners(topicMyPodcastsButton);
      myPodcastsEntryBtn = rebound;
      if (typeof decorateCommandButton === 'function') {
        decorateCommandButton(rebound, 'my-podcasts', buildMyPodcastsScopeLabel());
      }
      rebound.addEventListener('click', async () => {
        if (isFavoritesScopeMode()) await exitTopicMyPodcasts({ forceRefresh: false });
        else await renderTopicMyPodcasts();
      });
      updateMyPodcastsEntryButtonState();
    }

    if (chartContainer) {
      chartContainer.addEventListener('click', (event) => {
        const revealBtn = event.target && event.target.closest ? event.target.closest('[data-topic-reveal]') : null;
        if (!revealBtn) return;
        const row = revealBtn.closest('.chart-row.topic-row-is-blurred');
        if (!row) return;
        row.classList.remove('topic-row-is-blurred');
        row.removeAttribute('data-topic-filter-keyword');
        revealBtn.remove();
      });
    }
  }

  async function bootstrapTopicPage() {
    overrideSharedHooks();
    readTopicState();
    renderContentLanguageChips();
    ensureContentLanguageChipsPresent();
    renderFilterList(state.filters);
    renderCountryList();
    applyTopicRuntimeLanguage(state.uiLang);
    updateSelectionSummary();

    if (uiLanguageSelect) uiLanguageSelect.value = normalizeUiLang((window.TOPIC_PAGE_CONFIG && window.TOPIC_PAGE_CONFIG.locale) || state.uiLang);
    if (searchBox && searchBox.value) applyFilterAndLimit();

    hiddenPlatformSelect.value = TOPIC_PLATFORM;
    hiddenTypeSelect.value = TOPIC_TYPE;
    ensureSelectionOption(currentSelectionSignatureValue());

    try {
      await openChartsDb();
    } catch (error) {
      console.warn('Topic page IndexedDB init failed:', error);
    }

    try { if (typeof loadFavoriteStorageMap === 'function') loadFavoriteStorageMap(); } catch (error) { console.warn('Favorites init failed:', error); }
    try { if (typeof loadFavoriteRankState === 'function') loadFavoriteRankState(); } catch (error) { console.warn('Favorite rank init failed:', error); }
    try {
      if (typeof applyThemeMode === 'function') {
        const themeMode = typeof currentThemeMode !== 'undefined' ? currentThemeMode : 'dark';
        applyThemeMode(themeMode, { persist: false, refreshAppleEmbeds: false });
      }
    } catch (error) { console.warn('Theme apply failed:', error); }
    try { if (typeof ensureThemeToggleButton === 'function') ensureThemeToggleButton(); } catch (error) { console.warn('Theme toggle init failed:', error); }
    try { if (typeof ensureMyPodcastsControls === 'function') ensureMyPodcastsControls(); } catch (error) { console.warn('My Podcasts controls init failed:', error); }
    try {
      if (typeof ensureMyPodcastsEntryButton === 'function') ensureMyPodcastsEntryButton();
      if (typeof updateMyPodcastsEntryButtonState === 'function') updateMyPodcastsEntryButtonState();
    } catch (error) { console.warn('My Podcasts button init failed:', error); }
    try { if (typeof ensurePlaylistModeButton === 'function') ensurePlaylistModeButton(); } catch (error) { console.warn('Playlist button init failed:', error); }
    try { if (typeof ensureAudioModeButton === 'function') ensureAudioModeButton(); } catch (error) { console.warn('Audio button init failed:', error); }
    try { if (typeof decorateCommandActionButtons === 'function') decorateCommandActionButtons(); } catch (error) { console.warn('Command icon sync failed:', error); }
    try {
      if (typeof globalRssPlayerController !== 'undefined'
        && globalRssPlayerController
        && typeof globalRssPlayerController.ensureMounted === 'function') {
        globalRssPlayerController.ensureMounted();
      }
    } catch (error) { console.warn('Global player init failed:', error); }
    try { if (typeof registerPwaServiceWorker === 'function') registerPwaServiceWorker(); } catch (error) { console.warn('Service worker init failed:', error); }
    try { if (typeof setupInstallPrompt === 'function') setupInstallPrompt(); } catch (error) { console.warn('Install prompt init failed:', error); }

    removeTopicScopeControls();
    bindTopicEvents();
    setStatus('ready');
    setTopButtonVisibility();
    syncTopicHeroBadge();
    await loadNewsPodcastData();
  }

  bootstrapTopicPage().catch((error) => {
    console.error('News topic page init failed:', error);
    try { if (typeof setStatus === 'function') setStatus('retry'); } catch {}
    try {
      const message = typeof t === 'function' ? t('loadFailedRefresh') : 'Load failed. Please refresh and try again.';
      if (typeof showToast === 'function') showToast(message);
    } catch {}
  });
})();
    window.TOPIC_TRANSLATIONS_SUSPENDED = false;
