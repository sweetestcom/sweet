/* Shared runtime extracted from podcastchart.html */
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const EPISODE_CACHE_TTL_MS = 3 * 60 * 60 * 1000;
const WORKER_API_BASE = 'https://ytpds.swiestapp.workers.dev';

const platformSelect = document.getElementById('platform-select');
const countrySelect = document.getElementById('country-select');
const typeSelect = document.getElementById('type-select');
const languageSelectEl = document.getElementById('language-select');
const chartContainer = document.getElementById('podcasts-chart');
const loadingEl = document.getElementById('loading');
const skeletonEl = document.getElementById('skeleton-grid');
const emptyStateEl = document.getElementById('empty-state');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const statusText = document.getElementById('status-text');
const countText = document.getElementById('count-text');
const toastEl = document.getElementById('toast');
const topButton = document.getElementById('top-button');
const topbgEl = document.getElementById('topbg');
const randomBtn = document.getElementById('random-btn');
const shareBtn = document.getElementById('share-btn');
const refreshBtn = document.getElementById('refresh-btn');
let myPodcastsEntryBtn = document.getElementById('my-podcasts-btn');
const logoTitleEl = document.querySelector('.logo-title');
const siteLogoEl = document.querySelector('.logo-title > img:first-of-type');
const heroTitleEl = document.querySelector('.logo-title h1');
const heroSubtitleWrapEl = (() => {
  if (!logoTitleEl) return null;
  let wrap = logoTitleEl.querySelector('.hero-subtitle-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'hero-subtitle-wrap';
    const titleNode = logoTitleEl.querySelector('h1');
    if (titleNode && titleNode.parentNode === logoTitleEl) {
      titleNode.insertAdjacentElement('afterend', wrap);
    } else {
      logoTitleEl.appendChild(wrap);
    }
  }
  return wrap;
})();
const heroPlatformIconEl = (() => {
  if (!heroSubtitleWrapEl) return null;
  let node = heroSubtitleWrapEl.querySelector('.hero-platform-icon');
  if (!node) {
    node = document.createElement('img');
    node.className = 'hero-platform-icon';
    node.alt = '';
    node.loading = 'eager';
    node.decoding = 'async';
    node.referrerPolicy = 'no-referrer';
    heroSubtitleWrapEl.appendChild(node);
  }
  return node;
})();
const heroSubtitleEl = (() => {
  if (!heroSubtitleWrapEl) return null;
  let node = heroSubtitleWrapEl.querySelector('.hero-subtitle');
  if (!node) {
    node = document.createElement('div');
    node.className = 'hero-subtitle';
    heroSubtitleWrapEl.appendChild(node);
  }
  return node;
})();
const metaDescriptionEl = document.querySelector('meta[name="description"]');
const baseHeroTitle = heroTitleEl ? heroTitleEl.textContent.trim() : '';
const baseDocumentTitle = document.title.trim();
const baseMetaDescription = metaDescriptionEl ? (metaDescriptionEl.getAttribute('content') || '').trim() : '';

function syncHeroGlassTextAttrs() {
  if (heroTitleEl) {
    heroTitleEl.setAttribute('data-glass-text', String(heroTitleEl.textContent || '').trim());
  }
  if (heroSubtitleEl) {
    heroSubtitleEl.setAttribute('data-glass-text', String(heroSubtitleEl.textContent || '').trim());
  }
}
syncHeroGlassTextAttrs();

const limitButtons = [];

let periodSelect = null;
let dateSelect = null;
let scopeSelect = null;
let historyReminderEl = null;
let chartsDbPromise = null;
let reminderJobId = 0;
const IDB_NAME = 'podcastChartsDB';
const IDB_VERSION = 2;
const IDB_RESPONSE_STORE = 'responses';
const IDB_SNAPSHOT_STORE = 'snapshots';
const IDB_META_STORE = 'meta';
const IDB_NOTES_STORE = 'notes';

let activeRequestId = 0;
const RANK_SCORE_FULL_MAX = 100;
const RANK_SCORE_EXTENDED_MAX = 200;
let visibleLimit = RANK_SCORE_FULL_MAX;
let aggregateVisibleLimit = 100;
const AGGREGATE_AUTO_LOAD_BATCH = 100;
let toastTimer = null;
let translateJobId = 0;
let wallResizeTimer = null;
let latestWallItems = [];
let itunesSearchAssistShellEl = null;
let itunesSearchAssistButtonEl = null;
let itunesSearchAssistResultsEl = null;
let itunesSearchAssistRunId = 0;
let itunesSearchAssistState = { signature: '', loading: false, items: [] };
const THEME_STORAGE_KEY = 'podcast_chart_theme_v1';
const THEME_MODE_DARK = 'dark';
const THEME_MODE_LIGHT = 'light';
const THEME_META_COLOR = {
  [THEME_MODE_DARK]: '#080d1a',
  [THEME_MODE_LIGHT]: '#eef4ff'
};
let themeToggleBtnEl = null;
let currentThemeMode = (() => {
  try {
    const stored = String(localStorage.getItem(THEME_STORAGE_KEY) || '').trim().toLowerCase();
    return stored === THEME_MODE_LIGHT ? THEME_MODE_LIGHT : THEME_MODE_DARK;
  } catch {
    return THEME_MODE_DARK;
  }
})();
try {
  document.documentElement.dataset.theme = currentThemeMode;
  const initialThemeColorEl = document.querySelector('meta[name="theme-color"]');
  if (initialThemeColorEl) initialThemeColorEl.setAttribute('content', THEME_META_COLOR[currentThemeMode] || THEME_META_COLOR[THEME_MODE_DARK]);
} catch {}
const translationCache = new Map();
let microsoftTranslateAuthState = null;
let microsoftTranslateAuthPromise = null;
const languageDetectCache = new Map();
const snapshotRowsCache = new Map();
let currentStatusKey = 'ready';
let currentLoadingKey = 'loadingDots';
let surpriseRunId = 0;
let isSurpriseRunning = false;
let currentLoadVisualToken = 0;
let loadRingAnimFrame = 0;
let loadRingState = null;
let currentRankTrendMap = null;
let currentHistorySeriesMap = null;
let activeHistoryPanelRow = null;
let activeNotePanelRow = null;
let favoritePodcastMap = new Map();
let favoriteRankState = { contexts: {}, updatedAt: 0 };
const IDB_META_KEY_FAVORITES = 'favorites_v1';

function getThemeToggleSvg(theme = currentThemeMode) {
  const mode = normalizeThemeMode(theme);
  if (mode === THEME_MODE_LIGHT) {
    return `<svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4.35" fill="none" stroke="currentColor" stroke-width="1.75"></circle>
      <path d="M12 2.65v2.05M12 19.3v2.05M21.35 12h-2.05M4.7 12H2.65M18.6 5.4 17.2 6.8M6.8 17.2 5.4 18.6M18.6 18.6 17.2 17.2M6.8 6.8 5.4 5.4" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>`;
  }
  return `<svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M18.65 15.45A8.25 8.25 0 0 1 9.58 3.68a.45.45 0 0 0-.5-.62A9.35 9.35 0 1 0 20.94 14.9a.45.45 0 0 0-.62-.5 7.77 7.77 0 0 1-1.67 1.05Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;
}

function normalizeThemeMode(theme) {
  return String(theme || '').trim().toLowerCase() === THEME_MODE_LIGHT ? THEME_MODE_LIGHT : THEME_MODE_DARK;
}

function updateThemeMetaColor(theme = currentThemeMode) {
  try {
    const themeColorEl = document.querySelector('meta[name="theme-color"]');
    if (themeColorEl) themeColorEl.setAttribute('content', THEME_META_COLOR[normalizeThemeMode(theme)] || THEME_META_COLOR[THEME_MODE_DARK]);
  } catch {}
}

function syncThemeToggleUi() {
  if (!themeToggleBtnEl) return;
  const nextTheme = currentThemeMode === THEME_MODE_LIGHT ? THEME_MODE_DARK : THEME_MODE_LIGHT;
  const title = nextTheme === THEME_MODE_LIGHT ? 'Switch to light theme' : 'Switch to dark theme';
  const iconHost = themeToggleBtnEl.querySelector('.theme-toggle-icon');
  if (iconHost) iconHost.innerHTML = getThemeToggleSvg(currentThemeMode);
  themeToggleBtnEl.dataset.theme = currentThemeMode;
  themeToggleBtnEl.setAttribute('aria-label', title);
  themeToggleBtnEl.setAttribute('title', title);
  themeToggleBtnEl.setAttribute('aria-pressed', currentThemeMode === THEME_MODE_LIGHT ? 'true' : 'false');
}

function applyThemeMode(theme, options = {}) {
  const nextTheme = normalizeThemeMode(theme);
  currentThemeMode = nextTheme;
  try {
    document.documentElement.dataset.theme = nextTheme;
  } catch {}
  if (options.persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {}
  }
  updateThemeMetaColor(nextTheme);
  syncThemeToggleUi();
}

function ensureThemeToggleButton() {
  if (!logoTitleEl || !siteLogoEl || !siteLogoEl.parentNode) return null;
  let shell = siteLogoEl.parentElement;
  if (!shell || !shell.classList.contains('hero-logo-shell')) {
    shell = document.createElement('div');
    shell.className = 'hero-logo-shell';
    siteLogoEl.parentNode.insertBefore(shell, siteLogoEl);
    shell.appendChild(siteLogoEl);
  }
  if (!themeToggleBtnEl || !themeToggleBtnEl.isConnected) {
    themeToggleBtnEl = document.createElement('button');
    themeToggleBtnEl.className = 'theme-toggle-btn';
    themeToggleBtnEl.type = 'button';
    themeToggleBtnEl.innerHTML = `<span class="theme-toggle-icon">${getThemeToggleSvg(currentThemeMode)}</span>`;
    themeToggleBtnEl.addEventListener('click', () => {
      themeToggleBtnEl.classList.remove('is-switching');
      void themeToggleBtnEl.offsetWidth;
      themeToggleBtnEl.classList.add('is-switching');
      setTimeout(() => {
        if (themeToggleBtnEl) themeToggleBtnEl.classList.remove('is-switching');
      }, 460);
      applyThemeMode(currentThemeMode === THEME_MODE_LIGHT ? THEME_MODE_DARK : THEME_MODE_LIGHT, { persist: true });
    });
  }
  if (themeToggleBtnEl.parentNode !== shell) {
    shell.appendChild(themeToggleBtnEl);
  }
  syncThemeToggleUi();
  return themeToggleBtnEl;
}
const IDB_META_KEY_FAVORITE_RANK = 'favorite_rank_state_v1';
const IDB_META_KEY_RSS_PLAYBACK_PREFIX = 'rss_playback_v1::';
const IDB_META_KEY_PREFETCH_STATE = 'prefetch_state_v1';
const MY_PODCASTS_SCOPE_VALUE = 'favorites';
const PREFETCH_MAX_RETRIES = 3;
const PREFETCH_REQUEST_TIMEOUT_MS = 180 * 1000;
const PREFETCH_IDLE_DELAY_MS = 3200;
const PREFETCH_INTER_REQUEST_DELAY_MS = 900;
const PREFETCH_FAILURE_COOLDOWN_MS = 12 * 60 * 60 * 1000;
const PREFETCH_MAX_EXACT_COMBOS = 28;
const PREFETCH_MAX_COUNTRY_HISTORY = 6;
const PREFETCH_MAX_LANGUAGE_SCOPE_HISTORY = 8;
const PREFETCH_MAX_ALL_SCOPE_HISTORY = 8;
let favoriteStorageLoadPromise = null;
let myPodcastsControlsEl = null;
let myPodcastsRssInputEl = null;
let myPodcastsAddBtnEl = null;
let myPodcastsYoutubeBtnEl = null;
let myPodcastsOpmlBtnEl = null;
let myPodcastsRetryBtnEl = null;
let myPodcastsOpmlFileEl = null;
let myPodcastsProgressEl = null;
let myPodcastsTabsEl = null;
let myPodcastsImportModesEl = null;
let myPodcastsOpmlPickEl = null;
let myPodcastsLayoutMq = null;
let myPodcastsBusy = false;
let myPodcastsFailedCandidates = [];
let myPodcastsScopeActive = false;
let myPodcastsActiveTab = 'podcasts';
let myPodcastsImportMode = 'rss';
let prefetchStateCache = null;
let prefetchStatePromise = null;
let prefetchIdleTimer = 0;
let prefetchRunId = 0;
let prefetchRunnerPromise = null;
const NOTE_AUTOSAVE_DELAY_MS = 520;
const MY_PODCASTS_TAB_VALUES = ['podcasts', 'episodes', 'notes'];
const MY_PODCASTS_IMPORT_MODE_VALUES = ['rss', 'youtube', 'apple', 'spotify', 'opml'];
let prefetchAbortController = null;
let dataBackfillCache = new Map();
const ITUNES_DISCOVERY_SEARCH_LIMIT = 25;
const itunesCatalogSearchCache = new Map();
const PLATFORM_ACCENT_COLORS = {
  apple: ['#9156BE', '#B374D6', '#7631AE'],
  spotify: ['#00D84E', '#00DB4F', '#00B243'],
  youtube: ['#FF0034', '#FF0032', '#E6002D'],
  orfsound: ['#CA7DC0', '#AF8CDD', '#7C2CC5'],
  raiplaysound: ['#D0EDFF', '#8FD2FC', '#70C9FF'],
  srfaudio: ['#BD364D', '#CB6A7A', '#C24E61'],
  drlyd: ['#FF0A2D', '#E10022', '#161616'],
  rtbfauvio: ['#FFD21A', '#F7B500', '#1C1C1C'],
  rneaudio: ['#EB1C24', '#AA1F4B', '#111111'],
  npoluister: ['#FF7A00', '#FF9A1F', '#F06400'],
  ximalaya: ['#F86442', '#FF7B45', '#E84B2F'],
  bilibili: ['#F76A9D', '#F95A93', '#FF3F86'],
  bbcsounds: ['#F86000', '#D04010', '#A02800'],
  siriusxm: ['#0000E8', '#355CFF', '#7D8CFF'],
  pandora: ['#E02040', '#D02060', '#7010A0'],
  podcastapp: ['#3050E0', '#3040F0', '#3040E0'],
  rtlplus: ['#FF5C01', '#D4000D', '#6E0CED'],
  abclisten: ['#D81F2A', '#FF4A3D', '#B81222'],
  nrk: ['#082040', '#90B8F0', '#405068'],
  yleareena: ['#00B0C8', '#58E0F0', '#2098A8'],
  sverigesradio: ['#0167C6', '#08B46A', '#CC24B4', '#FF5C00'],
  tunein: ['#10D8C8', '#10A8A8', '#182038'],
  ardsounds: ['#12AAF0', '#9680DC', '#F04999'],
  radiofrance: ['#C027AE', '#D53195', '#E31A78'],
  podimo: ['#8050F0', '#A080E0', '#7060B0'],
  podcastaddict: ['#F2662A', '#FF8A3D', '#D94E1D'],
  deezer: ['#A038F8', '#9030E8', '#7030A0'],
  radionet: ['#60E040', '#80D070', '#30B010'],
  ivoox: ['#F05B21', '#F46E27', '#F78A3B'],
  castbox: ['#FF7640', '#FF965E', '#FF5E2A'],
  pocketcasts: ['#F65953', '#F7736F', '#F53E36'],
  audible: ['#FD9B2C', '#FCB355', '#FF8A0A'],
  iheartradio: ['#C02547', '#DB5E79', '#C9002B'],
  podbbang: ['#1DA0EA', '#1FA1EE', '#23A4F1'],
  audioclip: ['#1EC677', '#1FE678', '#02BB66'],
  amazonmusic: ['#28C6CE', '#3CE0E7', '#23A1A7'],
  radiko: ['#15ACEA', '#81D2F4', '#00A6E8']
};
const ALL_PLATFORM_RING_GRADIENT = ['#2EF2FF', '#4EA1FF', '#5F69FF', '#8E5BFF', '#F45BFF'];
const PLATFORM_APP_STORE_IDS = {
  apple: { id: '525463029', country: 'us' },
  spotify: { id: '324684580', country: 'us' },
  youtube: { id: '544007664', country: 'us' },
  orfsound: { id: '1581937791', country: 'at' },
  raiplaysound: { id: '360927284', country: 'it' },
  srfaudio: { id: '638194352', country: 'ch' },
  drlyd: { id: '433155921', country: 'dk' },
  rtbfauvio: { id: '1249992761', country: 'be' },
  rneaudio: { id: '6446399078', country: 'es' },
  npoluister: { id: '1515695401', country: 'nl' },
  ximalaya: { id: '876336838', country: 'cn' },
  bilibili: { id: '736536022', country: 'cn' },
  bbcsounds: { id: '1380676511', country: 'gb' },
  siriusxm: { id: '317951436', country: 'us' },
  pandora: { id: '284035177', country: 'us' },
  podcastapp: { id: '1199070742', country: 'us' },
  rtlplus: { id: '1057991212', country: 'de' },
  abclisten: { id: '544149504', country: 'au' },
  nrk: { id: '401928833', country: 'no' },
  yleareena: { id: '542317657', country: 'fi' },
  sverigesradio: { id: '300548244', country: 'se' },
  tunein: { id: '418987775', country: 'us' },
  ardsounds: { id: '1224607890', country: 'de' },
  radiofrance: { id: '310211433', country: 'fr' },
  podimo: { id: '1476538730', country: 'us' },
  podcastaddict: { id: null, country: 'us', iconUrl: 'https://play-lh.googleusercontent.com/m6FeLOkUfP8qTZNXKFSSI8_exI-SlGJRcIArl3gRm3-VninL7l1RdYlPkkf2CfbBnA=w512-h512' },
  deezer: { id: '292738169', country: 'us' },
  radionet: { id: '402206359', country: 'us' },
  ivoox: { id: '542673545', country: 'us' },
  audible: { id: '379693831', country: 'us' },
  iheartradio: { id: '290638154', country: 'us' },
  castbox: { id: '1243410543', country: 'us' },
  pocketcasts: { id: '414834813', country: 'us' },
  radiko: { id: '370515585', country: 'jp' },
  amazonmusic: { id: '510855668', country: 'us' },
  podbbang: { id: '612769954', country: 'us' },
  audioclip: { id: '393499958', country: 'us' }
};
const PLATFORM_ICON_FALLBACK = {
  all: 'logo.webp',
  apple: 'logo.webp',
  spotify: 'logo.webp',
  youtube: 'logo.webp',
  drlyd: 'logo.webp',
  rtbfauvio: 'logo.webp',
  rneaudio: 'logo.webp',
  npoluister: 'logo.webp',
  ximalaya: 'logo.webp',
  bilibili: 'logo.webp',
  bbcsounds: 'logo.webp',
  siriusxm: 'logo.webp',
  pandora: 'logo.webp',
  podcastapp: 'logo.webp',
  rtlplus: 'logo.webp',
  abclisten: 'logo.webp',
  nrk: 'logo.webp',
  yleareena: 'logo.webp',
  sverigesradio: 'logo.webp',
  tunein: 'logo.webp',
  ardsounds: 'logo.webp',
  radiofrance: 'logo.webp',
  podimo: 'logo.webp',
  podcastaddict: 'logo.webp',
  deezer: 'logo.webp',
  radionet: 'logo.webp',
  ivoox: 'logo.webp',
  audible: 'logo.webp',
  iheartradio: 'logo.webp',
  castbox: 'logo.webp',
  pocketcasts: 'logo.webp',
  radiko: 'logo.webp',
  amazonmusic: 'logo.webp',
  podbbang: 'logo.webp',
  audioclip: 'logo.webp'
};
const platformAppIconCache = new Map();
const platformAppIconPending = new Map();
const platformAppIconLoaded = new Set();
const PLATFORM_APP_ICON_CACHE_STORAGE_KEY = 'platform_app_icon_cache_v1';
const PLATFORM_APP_ICON_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
let platformAppIconStorageState = null;
let heroPlatformIconJobId = 0;
const dynamicTypeDefinitionsByPlatformCountry = new Map();
const LANGUAGE_SCOPE_RING_GRADIENT = ALL_PLATFORM_RING_GRADIENT.slice();
const LANGUAGE_DETECT_CACHE_PREFIX = 'langdetect::';
const LANGUAGE_DETECT_CACHE_TTL_MS = 180 * 24 * 60 * 60 * 1000;
const LANGUAGE_DETECT_CONCURRENCY = 12;
const MICROSOFT_TRANSLATE_AUTH_URL = 'https://edge.microsoft.com/translate/auth';
const MICROSOFT_TRANSLATE_API_BASE = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';
const MICROSOFT_PREFERRED_TRANSLATE_PAGE_LANGS = new Set(['mn-mong', 'sr-latn']);
const ARDSOUNDS_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: '', defaultLabel: 'Podcast Charts' },
  { value: 'ardsounds-comedy-satire', key: '', defaultLabel: 'Comedy' },
  { value: 'ardsounds-true-crime', key: '', defaultLabel: 'True Crime' },
  { value: 'ardsounds-doku-reportage', key: '', defaultLabel: 'Doku' },
  { value: 'ardsounds-sportschau', key: '', defaultLabel: 'Sportschau' },
  { value: 'ardsounds-wissen', key: '', defaultLabel: 'Wissen' },
  { value: 'ardsounds-fuer-kinder', key: '', defaultLabel: 'Für Kinder' },
  { value: 'ardsounds-hoerspiel', key: '', defaultLabel: 'Hörspiel' },
  { value: 'ardsounds-hoerbuch', key: '', defaultLabel: 'Hörbuch' },
  { value: 'ardsounds-leben-liebe', key: '', defaultLabel: 'Leben & Liebe' },
  { value: 'ardsounds-politik-hintergrund', key: '', defaultLabel: 'Politik' },
  { value: 'ardsounds-geschichte', key: '', defaultLabel: 'Geschichte' },
  { value: 'ardsounds-gesellschaft', key: '', defaultLabel: 'Gesellschaft' },
  { value: 'ardsounds-religion-philosophie', key: '', defaultLabel: 'Religion & Philosophie' },
  { value: 'ardsounds-retro', key: '', defaultLabel: 'Retro' },
  { value: 'ardsounds-musik-entdecken', key: '', defaultLabel: 'Musik entdecken' },
  { value: 'ardsounds-kultur', key: '', defaultLabel: 'Kultur' },
  { value: 'ardsounds-wirtschaft', key: '', defaultLabel: 'Wirtschaft' },
  { value: 'ardsounds-kriege-konflikte', key: '', defaultLabel: 'Kriege & Konflikte' }
];
const PODCASTADDICT_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: 'topPodcasts', defaultLabel: 'Top Podcasts' }
];
const PODCASTAPP_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: 'topPodcasts', defaultLabel: 'Top Podcasts' }
];
const RTLPLUS_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: null, defaultLabel: 'Beliebte Podcasts' },
  { value: 'rtlplus-trending-podcasts', key: null, defaultLabel: 'Diese Woche angesagte Podcasts' },
  { value: 'rtlplus-top10-podcasts-de', key: null, defaultLabel: 'Top 10 Podcasts in Deutschland' }
];
const RADIOFRANCE_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: '', defaultLabel: 'Top Podcasts' },
  { value: 'radiofrance-enfants', key: '', defaultLabel: 'Enfants' },
  { value: 'radiofrance-true-crime', key: '', defaultLabel: 'True Crime' },
  { value: 'radiofrance-fictions', key: '', defaultLabel: 'Fictions' },
  { value: 'radiofrance-histoire', key: '', defaultLabel: 'Histoire' },
  { value: 'radiofrance-sciences', key: '', defaultLabel: 'Sciences' },
  { value: 'radiofrance-monde', key: '', defaultLabel: 'Monde' },
  { value: 'radiofrance-musique', key: '', defaultLabel: 'Musique' },
  { value: 'radiofrance-arts-divertissement', key: '', defaultLabel: 'Arts & divertissement' },
  { value: 'radiofrance-humour', key: '', defaultLabel: 'Humour' },
  { value: 'radiofrance-vie-quotidienne', key: '', defaultLabel: 'Vie quotidienne' }
];
const NPO_LUISTER_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: '', defaultLabel: 'Onze aanbevelingen' },
  { value: 'npoluister-actualiteiten', key: '', defaultLabel: 'Actualiteiten' },
  { value: 'npoluister-cultuur', key: '', defaultLabel: 'Cultuur' },
  { value: 'npoluister-documentaire', key: '', defaultLabel: 'Documentaire' },
  { value: 'npoluister-fictie', key: '', defaultLabel: 'Fictie' },
  { value: 'npoluister-geschiedenis', key: '', defaultLabel: 'Geschiedenis' },
  { value: 'npoluister-humor', key: '', defaultLabel: 'Humor' },
  { value: 'npoluister-kinderen', key: '', defaultLabel: 'Kinderen' },
  { value: 'npoluister-klassieke-muziek', key: '', defaultLabel: 'Klassieke muziek' },
  { value: 'npoluister-levensbeschouwing', key: '', defaultLabel: 'Levensbeschouwing' },
  { value: 'npoluister-lifestyle', key: '', defaultLabel: 'Lifestyle' },
  { value: 'npoluister-media', key: '', defaultLabel: 'Media' },
  { value: 'npoluister-misdaad', key: '', defaultLabel: 'Misdaad' },
  { value: 'npoluister-muziek', key: '', defaultLabel: 'Muziek' },
  { value: 'npoluister-muziekmix', key: '', defaultLabel: 'Muziekmix' },
  { value: 'npoluister-radio-gemist', key: '', defaultLabel: 'Radio gemist' },
  { value: 'npoluister-sport', key: '', defaultLabel: 'Sport' },
  { value: 'npoluister-verhalen', key: '', defaultLabel: 'Verhalen' },
  { value: 'npoluister-wetenschap', key: '', defaultLabel: 'Wetenschap' }
];
const DR_LYD_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: '', defaultLabel: 'Udvalgte favoritter' },
  { value: 'drlyd-nyheder', key: '', defaultLabel: 'Nyheder' },
  { value: 'drlyd-kultur', key: '', defaultLabel: 'Kultur' },
  { value: 'drlyd-musik', key: '', defaultLabel: 'Musik' },
  { value: 'drlyd-sport', key: '', defaultLabel: 'Sport' },
  { value: 'drlyd-krimi', key: '', defaultLabel: 'Krimi' },
  { value: 'drlyd-historie', key: '', defaultLabel: 'Historie' },
  { value: 'drlyd-kaerlighed-og-sex', key: '', defaultLabel: 'Kærlighed og sex' },
  { value: 'drlyd-dokumentar', key: '', defaultLabel: 'Dokumentar' },
  { value: 'drlyd-livsstil', key: '', defaultLabel: 'Livsstil' },
  { value: 'drlyd-tro-og-eksistens', key: '', defaultLabel: 'Tro og eksistens' },
  { value: 'drlyd-underholdning', key: '', defaultLabel: 'Underholdning' },
  { value: 'drlyd-sundhed', key: '', defaultLabel: 'Sundhed' },
  { value: 'drlyd-videnskab-og-tech', key: '', defaultLabel: 'Videnskab og tech' }
];
const RTBF_AUVIO_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: '', defaultLabel: 'Nos incontournables' }
];
const RNE_AUDIO_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: '', defaultLabel: 'Nuestros podcast' }
];
const PODIMO_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: 'topPodcasts', defaultLabel: 'Top Podcasts' }
];
const IVOOX_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: 'topPodcasts', defaultLabel: 'Top Podcasts' }
];
const XIMALAYA_TYPE_DEFINITIONS = [
  { value: 'ximalaya-story-podcasts', key: 'ximalayaStoryPodcasts', defaultLabel: 'Story Podcasts' },
  { value: 'ximalaya-opinion-podcasts', key: 'ximalayaOpinionPodcasts', defaultLabel: 'Opinion Podcasts' }
];
const BILIBILI_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: 'topPodcasts', defaultLabel: 'Top Podcasts' }
];
const SIRIUSXM_TYPE_DEFINITIONS = [
  { value: 'top-podcasts', key: 'topPodcasts', defaultLabel: 'Top Podcasts' },
  { value: 'top-episodes', key: 'topEpisodes', defaultLabel: 'Top Episodes' },
  { value: 'siriusxm-news-politics', key: null, defaultLabel: 'News & Politics' },
  { value: 'siriusxm-true-crime', key: null, defaultLabel: 'True Crime' },
  { value: 'siriusxm-comedy', key: null, defaultLabel: 'Comedy' },
  { value: 'siriusxm-pop-culture', key: null, defaultLabel: 'Pop Culture' },
  { value: 'siriusxm-sports-talk', key: null, defaultLabel: 'Sports Talk' },
  { value: 'siriusxm-health-wellness', key: null, defaultLabel: 'Health & Wellness' },
  { value: 'siriusxm-strange-unexplained', key: null, defaultLabel: 'Strange & Unexplained' },
  { value: 'siriusxm-history', key: null, defaultLabel: 'History' },
  { value: 'siriusxm-hobbies-interests', key: null, defaultLabel: 'Hobbies & Interests' },
  { value: 'siriusxm-science', key: null, defaultLabel: 'Science' },
  { value: 'siriusxm-technology', key: null, defaultLabel: 'Technology' },
  { value: 'siriusxm-talk-en-espanol', key: null, defaultLabel: 'Talk En Español' },
  { value: 'siriusxm-arts-literature', key: null, defaultLabel: 'Arts & Literature' },
  { value: 'siriusxm-fiction-drama', key: null, defaultLabel: 'Fiction & Drama' },
  { value: 'siriusxm-business', key: null, defaultLabel: 'Business' }
];
const XIMALAYA_DWS_SCRIPT_URL = 'https://s1.xmcdn.com/yx/static-source/last/dist/js/dws2.0.0.js';
const XIMALAYA_DWS_API_KEY = 't6pfoml9679z52kqw93uqu75eflqdg1bykhl';
const XIMALAYA_DWS_APP_NAME = 'h5_goyxvzyohd';
const XIMALAYA_RANKING_ID_BY_TYPE = Object.freeze({
  'ximalaya-story-podcasts': '100529',
  'ximalaya-opinion-podcasts': '100558'
});
let ximalayaSdkLoadPromise = null;
let ximalayaBrowserIdPromise = null;
let ximalayaWarmupPromise = null;
let ximalayaStorageQuotaGuardDepth = 0;
const FONT_CSS_URLS = {
  core: 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Noto+Sans:wght@400;500;700;800&family=Sora:wght@500;700&display=swap',
  arabic: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;700;800&display=swap',
  thaana: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thaana:wght@400;500;700;800&display=swap',
  hebrew: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@400;500;700;800&display=swap',
  devanagari: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700;800&display=swap',
  bengali: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;700;800&display=swap',
  gurmukhi: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Gurmukhi:wght@400;500;700;800&display=swap',
  gujarati: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati:wght@400;500;700;800&display=swap',
  oriya: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Oriya:wght@400;500;700;800&display=swap',
  kannada: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@400;500;700;800&display=swap',
  malayalam: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;500;700;800&display=swap',
  tamil: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;700;800&display=swap',
  telugu: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;700;800&display=swap',
  thai: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;700;800&display=swap',
  lao: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;700;800&display=swap',
  khmer: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@400;500;700;800&display=swap',
  myanmar: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;500;700;800&display=swap',
  sinhala: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;500;700;800&display=swap',
  armenian: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;500;700;800&display=swap',
  georgian: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;500;700;800&display=swap',
  ethiopic: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;500;700;800&display=swap',
  tibetan: 'https://fonts.googleapis.com/css2?family=Noto+Serif+Tibetan:wght@400;700&display=swap',
  mongolian: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Mongolian:wght@400;500;700&display=swap',
  'canadian-aboriginal': 'https://fonts.googleapis.com/css2?family=Noto+Sans+Canadian+Aboriginal:wght@400;500;700&display=swap',
  'cjk-sc': 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&display=swap',
  'cjk-tc': 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap',
  japanese: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap',
  korean: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap'
};
const FONT_PROFILE_PRELOAD_KEYS = {
  latin: ['core'],
  arabic: ['core', 'arabic'],
  thaana: ['core', 'thaana'],
  hebrew: ['core', 'hebrew'],
  devanagari: ['core', 'devanagari'],
  bengali: ['core', 'bengali'],
  gurmukhi: ['core', 'gurmukhi'],
  gujarati: ['core', 'gujarati'],
  oriya: ['core', 'oriya'],
  kannada: ['core', 'kannada'],
  malayalam: ['core', 'malayalam'],
  tamil: ['core', 'tamil'],
  telugu: ['core', 'telugu'],
  thai: ['core', 'thai'],
  lao: ['core', 'lao'],
  khmer: ['core', 'khmer'],
  myanmar: ['core', 'myanmar'],
  sinhala: ['core', 'sinhala'],
  armenian: ['core', 'armenian'],
  georgian: ['core', 'georgian'],
  ethiopic: ['core', 'ethiopic'],
  tibetan: ['core', 'tibetan'],
  mongolian: ['core', 'mongolian'],
  'canadian-aboriginal': ['core', 'canadian-aboriginal'],
  'cjk-sc': ['core', 'cjk-sc'],
  'cjk-tc': ['core', 'cjk-tc'],
  japanese: ['core', 'japanese'],
  korean: ['core', 'korean']
};
const FONT_PAGE_PROFILE_MAP = {
  am: 'ethiopic',
  ar: 'arabic',
  'ar-eg': 'arabic',
  'ar-iq': 'arabic',
  'ar-lb': 'arabic',
  'ar-ma': 'arabic',
  'ar-sa': 'arabic',
  dv: 'thaana',
  dz: 'tibetan',
  yi: 'hebrew',
  bho: 'devanagari',
  mai: 'devanagari',
  as: 'bengali',
  bn: 'bengali',
  bo: 'tibetan',
  ckb: 'arabic',
  cr: 'canadian-aboriginal',
  fa: 'arabic',
  gu: 'gujarati',
  he: 'hebrew',
  hi: 'devanagari',
  hy: 'armenian',
  iu: 'canadian-aboriginal',
  ja: 'japanese',
  ka: 'georgian',
  km: 'khmer',
  kn: 'kannada',
  ko: 'korean',
  lo: 'lao',
  ml: 'malayalam',
  'mn-mong': 'mongolian',
  mr: 'devanagari',
  my: 'myanmar',
  ne: 'devanagari',
  om: 'ethiopic',
  or: 'oriya',
  pa: 'gurmukhi',
  ps: 'arabic',
  sd: 'arabic',
  si: 'sinhala',
  ta: 'tamil',
  te: 'telugu',
  th: 'thai',
  ug: 'arabic',
  ur: 'arabic',
  'zh-hans': 'cjk-sc',
  'zh-hant': 'cjk-tc',
  'zh-hk': 'cjk-tc'
};
const FONT_SCRIPT_REGEX = {
  arabic: /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/u,
  hebrew: /[\u0590-\u05FF]/u,
  devanagari: /[\u0900-\u097F]/u,
  bengali: /[\u0980-\u09FF]/u,
  gurmukhi: /[\u0A00-\u0A7F]/u,
  gujarati: /[\u0A80-\u0AFF]/u,
  oriya: /[\u0B00-\u0B7F]/u,
  tamil: /[\u0B80-\u0BFF]/u,
  telugu: /[\u0C00-\u0C7F]/u,
  kannada: /[\u0C80-\u0CFF]/u,
  malayalam: /[\u0D00-\u0D7F]/u,
  sinhala: /[\u0D80-\u0DFF]/u,
  thai: /[\u0E00-\u0E7F]/u,
  lao: /[\u0E80-\u0EFF]/u,
  tibetan: /[\u0F00-\u0FFF]/u,
  myanmar: /[\u1000-\u109F\uA9E0-\uA9FF\uAA60-\uAA7F]/u,
  georgian: /[\u10A0-\u10FF\u1C90-\u1CBF\u2D00-\u2D2F]/u,
  hangul: /[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF]/u,
  ethiopic: /[\u1200-\u137F\u1380-\u139F\u2D80-\u2DDF\uAB00-\uAB2F]/u,
  canadianAboriginal: /[\u1400-\u167F]/u,
  mongolian: /[\u1800-\u18AF]/u,
  khmer: /[\u1780-\u17FF\u19E0-\u19FF]/u,
  hiragana: /[\u3040-\u309F]/u,
  katakana: /[\u30A0-\u30FF\u31F0-\u31FF]/u,
  bopomofo: /[\u3100-\u312F\u31A0-\u31BF]/u,
  han: /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/u,
  armenian: /[\u0530-\u058F\uFB13-\uFB17]/u
};
const HAN_TRADITIONAL_COUNTRIES = new Set(['tw', 'hk', 'mo']);
const loadedFontCssKeys = new Set();
const pendingFontCssLoads = new Map();
let fontScanFrame = 0;

function normalizePageFontLang(value) {
  return String(value || '').trim().toLowerCase().replace(/_/g, '-');
}

function resolvePageFontProfile(langCode = '') {
  const normalized = normalizePageFontLang(langCode || document.documentElement.getAttribute('lang') || '');
  if (FONT_PAGE_PROFILE_MAP[normalized]) return FONT_PAGE_PROFILE_MAP[normalized];
  const base = normalized.split('-')[0];
  return FONT_PAGE_PROFILE_MAP[base] || 'latin';
}

function ensurePageFontProfileDefaults() {
  const htmlEl = document.documentElement;
  const profile = resolvePageFontProfile(htmlEl.getAttribute('lang') || '');
  if (!htmlEl.dataset.fontProfile) htmlEl.dataset.fontProfile = profile;
  (FONT_PROFILE_PRELOAD_KEYS[profile] || FONT_PROFILE_PRELOAD_KEYS.latin).forEach((key) => loadedFontCssKeys.add(key));
  loadedFontCssKeys.add('core');
  return profile;
}

function currentHanFontProfileHint() {
  const country = String((countrySelect && countrySelect.value) || '').trim().toLowerCase();
  if (country === 'jp') return 'japanese';
  if (country === 'kr') return 'korean';
  if (HAN_TRADITIONAL_COUNTRIES.has(country)) return 'cjk-tc';
  const pageProfile = resolvePageFontProfile(document.documentElement.getAttribute('lang') || '');
  if (pageProfile === 'japanese' || pageProfile === 'korean' || pageProfile === 'cjk-tc') return pageProfile;
  return 'cjk-sc';
}

function ensureFontCssKeyLoaded(key) {
  const safeKey = String(key || '').trim();
  if (!safeKey || loadedFontCssKeys.has(safeKey)) return Promise.resolve(safeKey);
  const existing = pendingFontCssLoads.get(safeKey);
  if (existing) return existing;
  const href = FONT_CSS_URLS[safeKey];
  if (!href) {
    loadedFontCssKeys.add(safeKey);
    return Promise.resolve(safeKey);
  }

  const promise = new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset.fontCssKey = safeKey;
    link.onload = () => resolve(safeKey);
    link.onerror = () => resolve(safeKey);
    document.head.appendChild(link);
  }).finally(() => {
    loadedFontCssKeys.add(safeKey);
    pendingFontCssLoads.delete(safeKey);
  });

  pendingFontCssLoads.set(safeKey, promise);
  return promise;
}

function collectRequiredFontCssKeysFromText(text) {
  const raw = String(text || '');
  if (!raw) return [];
  const keys = [];
  const add = (key) => {
    if (!key || keys.includes(key) || loadedFontCssKeys.has(key)) return;
    keys.push(key);
  };

  if (FONT_SCRIPT_REGEX.arabic.test(raw)) add('arabic');
  if (FONT_SCRIPT_REGEX.hebrew.test(raw)) add('hebrew');
  if (FONT_SCRIPT_REGEX.devanagari.test(raw)) add('devanagari');
  if (FONT_SCRIPT_REGEX.bengali.test(raw)) add('bengali');
  if (FONT_SCRIPT_REGEX.gurmukhi.test(raw)) add('gurmukhi');
  if (FONT_SCRIPT_REGEX.gujarati.test(raw)) add('gujarati');
  if (FONT_SCRIPT_REGEX.oriya.test(raw)) add('oriya');
  if (FONT_SCRIPT_REGEX.tamil.test(raw)) add('tamil');
  if (FONT_SCRIPT_REGEX.telugu.test(raw)) add('telugu');
  if (FONT_SCRIPT_REGEX.kannada.test(raw)) add('kannada');
  if (FONT_SCRIPT_REGEX.malayalam.test(raw)) add('malayalam');
  if (FONT_SCRIPT_REGEX.sinhala.test(raw)) add('sinhala');
  if (FONT_SCRIPT_REGEX.thai.test(raw)) add('thai');
  if (FONT_SCRIPT_REGEX.lao.test(raw)) add('lao');
  if (FONT_SCRIPT_REGEX.tibetan.test(raw)) add('tibetan');
  if (FONT_SCRIPT_REGEX.myanmar.test(raw)) add('myanmar');
  if (FONT_SCRIPT_REGEX.georgian.test(raw)) add('georgian');
  if (FONT_SCRIPT_REGEX.ethiopic.test(raw)) add('ethiopic');
  if (FONT_SCRIPT_REGEX.canadianAboriginal.test(raw)) add('canadian-aboriginal');
  if (FONT_SCRIPT_REGEX.mongolian.test(raw)) add('mongolian');
  if (FONT_SCRIPT_REGEX.khmer.test(raw)) add('khmer');
  if (FONT_SCRIPT_REGEX.armenian.test(raw)) add('armenian');
  if (FONT_SCRIPT_REGEX.hiragana.test(raw) || FONT_SCRIPT_REGEX.katakana.test(raw)) add('japanese');
  if (FONT_SCRIPT_REGEX.hangul.test(raw)) add('korean');
  if (FONT_SCRIPT_REGEX.bopomofo.test(raw)) add('cjk-tc');
  if (FONT_SCRIPT_REGEX.han.test(raw)) add(currentHanFontProfileHint());

  return keys;
}

function ensureFontsForText(text) {
  const keys = collectRequiredFontCssKeysFromText(text);
  if (!keys.length) return Promise.resolve([]);
  return Promise.all(keys.map((key) => ensureFontCssKeyLoaded(key)));
}

function buildFontWarmupSampleFromItems(items, limit = 140) {
  if (!Array.isArray(items) || !items.length) return '';
  const parts = [];
  for (let i = 0; i < items.length && parts.length < limit; i += 1) {
    const item = items[i];
    if (!item) continue;
    if (item.title) parts.push(String(item.title));
    if (item.publisher) parts.push(String(item.publisher));
  }
  return parts.join('\n');
}

function buildFontWarmupSampleFromFeed(feed, fallbackTitle = '') {
  const parts = [];
  if (feed && feed.title) parts.push(String(feed.title));
  if (fallbackTitle) parts.push(String(fallbackTitle));
  if (feed && Array.isArray(feed.episodes)) {
    feed.episodes.slice(0, 80).forEach((episode) => {
      if (!episode) return;
      if (episode.title) parts.push(String(episode.title));
      if (episode.author) parts.push(String(episode.author));
    });
  }
  return parts.join('\n');
}

function warmupFontsForItems(items) {
  const sample = buildFontWarmupSampleFromItems(items);
  if (sample) void ensureFontsForText(sample);
}

function buildVisibleFontSample() {
  const parts = [];
  const pushNode = (node) => {
    if (!node) return;
    const text = String(node.textContent || '').trim();
    if (text) parts.push(text);
  };

  pushNode(heroTitleEl);
  pushNode(heroSubtitleEl);
  pushNode(statusText);
  pushNode(countText);
  pushNode(chartContainer);

  const activePlayer = document.querySelector('.episode-player-wrap:not([hidden])');
  const activeHistory = document.querySelector('.history-panel-wrap:not([hidden])');
  const activeTools = document.querySelector('.my-podcasts-tools.is-visible');
  pushNode(activePlayer);
  pushNode(activeHistory);
  pushNode(activeTools);

  return parts.join('\n');
}

function scheduleVisibleFontScan() {
  if (fontScanFrame) cancelAnimationFrame(fontScanFrame);
  fontScanFrame = requestAnimationFrame(() => {
    fontScanFrame = 0;
    const sample = buildVisibleFontSample();
    if (sample) void ensureFontsForText(sample);
  });
}

ensurePageFontProfileDefaults();


function getCurrentFileName() {
  return window.location.pathname.split('/').pop() || 'podcastchart.html';
}

function pageToLanguage(fileName) {
  const match = fileName.toLowerCase().match(/^podcastchart(?:-([^.]+))?\.html$/);
  return match && match[1] ? match[1].toLowerCase() : 'en';
}

function languageToPage(langCode) {
  const code = (langCode || '').trim().toLowerCase();
  if (!code || code === 'en') return 'podcastchart.html';
  return `podcastchart-${code}.html`;
}

function getPodcastAddictLanguageCode(pageLang = pageToLanguage(getCurrentFileName())) {
  const lang = String(pageLang || '').trim().toLowerCase();
  const direct = {
    ar: 'ar',
    bn: 'bn',
    bg: 'bg',
    hr: 'hr',
    cs: 'cs',
    da: 'da',
    nl: 'nl',
    en: 'en',
    eo: 'en',
    et: 'et',
    tl: 'tl',
    fi: 'fi',
    fr: 'fr',
    de: 'de',
    el: 'el',
    he: 'he',
    hi: 'hi',
    hu: 'hu',
    id: 'id',
    it: 'it',
    ja: 'ja',
    kk: 'kk',
    ko: 'ko',
    lv: 'lv',
    lt: 'lt',
    mk: 'mk',
    ms: 'ms',
    no: 'no',
    la: 'en',
    fa: 'fa',
    pl: 'pl',
    pa: 'pa',
    prs: 'fa',
    ro: 'ro',
    ru: 'ru',
    run: 'fr',
    ryu: 'ja',
    sk: 'sk',
    sl: 'sl',
    st: 'en',
    sw: 'sw',
    sv: 'sv',
    ti: 'en',
    th: 'th',
    to: 'en',
    tr: 'tr',
    uk: 'uk',
    vi: 'vi',
    nya: 'en',
    tt: 'ru'
  };
  if (direct[lang]) return direct[lang];
  if (lang === 'zh-hans' || lang === 'zh-hant' || lang === 'zh-hk') return 'zh';
  if (lang === 'es-es' || lang === 'es-mx' || lang === 'es-ar' || lang === 'es-419') return 'es';
  if (lang === 'pt-br' || lang === 'pt-pt') return 'pt';
  if (lang === 'sr-cyrl' || lang === 'sr-latn') return 'sr';
  if (lang === 'ar-eg' || lang === 'ar-iq' || lang === 'ar-lb' || lang === 'ar-ma' || lang === 'ar-sa') return 'ar';
  return '';
}

function pageSupportsPodcastAddict(pageLang = pageToLanguage(getCurrentFileName())) {
  return Boolean(getPodcastAddictLanguageCode(pageLang));
}

function showToast(message) {
  if (!toastEl) return;
  if (toastTimer) {
    clearTimeout(toastTimer);
    toastTimer = null;
  }

  const scheduleHide = (delay = 2200) => {
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show', 'toast-rich', 'toast-rank', 'toast-expanded');
      toastEl.innerHTML = '';
      toastEl.textContent = '';
    }, delay);
  };

  const renderSimpleToast = (text, icon = '', duration = 2200) => {
    const parts = [];
    if (icon) parts.push(String(icon).trim());
    if (text) parts.push(String(text).trim());
    toastEl.classList.remove('toast-rich', 'toast-rank', 'toast-expanded');
    toastEl.textContent = parts.join(' ').trim();
    toastEl.classList.add('show');
    scheduleHide(duration);
  };

  const buildRankChangeDelta = (change) => {
    const oldRank = Number(change && change.oldRank);
    const newRank = Number(change && change.newRank);
    if (!Number.isFinite(newRank)) return '⬇️out';
    if (!Number.isFinite(oldRank)) return `⬆️#${newRank}`;
    const diff = oldRank - newRank;
    if (diff > 0) return `⬆️${diff}`;
    if (diff < 0) return `⬇️${Math.abs(diff)}`;
    return `→#${newRank}`;
  };

  const renderRankToast = (changes, expanded = false) => {
    const list = Array.isArray(changes) ? changes.filter(Boolean) : [];
    if (!list.length) return;
    const previewCount = expanded ? list.length : Math.min(2, list.length);
    const visible = list.slice(0, previewCount);
    const remaining = Math.max(0, list.length - visible.length);
    const detailHtml = visible.map((change) => {
      const title = escapeHtml(String(change && change.title || 'Podcast').trim() || 'Podcast');
      const delta = escapeHtml(buildRankChangeDelta(change));
      const deltaClass = !Number.isFinite(Number(change && change.newRank))
        ? 'is-out'
        : (Number(change.oldRank) - Number(change.newRank)) > 0
          ? 'is-up'
          : 'is-down';
      return `<div class="toast-rank-line"><span class="toast-rank-name">${title}</span><span class="toast-rank-delta ${deltaClass}">${delta}</span></div>`;
    }).join('');
    const moreHtml = !expanded && remaining > 0
      ? `<div class="toast-rank-more">+${remaining}</div>`
      : '';
    const toggleHtml = list.length > 1
      ? `<button class="toast-toggle" type="button" aria-expanded="${expanded ? 'true' : 'false'}">${expanded ? '▴' : '▾'}</button>`
      : '';

    toastEl.classList.add('toast-rich', 'toast-rank', 'show');
    toastEl.classList.toggle('toast-expanded', expanded);
    toastEl.innerHTML = `
      <div class="toast-card">
        <div class="toast-head">
          <div class="toast-title">🔔 ${list.length}</div>
          <div class="toast-actions">
            ${toggleHtml}
            <button class="toast-close" type="button" aria-label="${escapeHtml(tOr('close', 'Close'))}">✕</button>
          </div>
        </div>
        <div class="toast-body">${detailHtml}${moreHtml}</div>
      </div>
    `;

    const closeBtn = toastEl.querySelector('.toast-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = null;
        toastEl.classList.remove('show', 'toast-rich', 'toast-rank', 'toast-expanded');
        toastEl.innerHTML = '';
      }, { once: true });
    }

    const toggleBtn = toastEl.querySelector('.toast-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        renderRankToast(list, !expanded);
      }, { once: true });
    }

    scheduleHide(expanded ? 9000 : 5200);
  };

  if (message && typeof message === 'object' && !Array.isArray(message)) {
    if (message.kind === 'rank-changes') {
      renderRankToast(message.changes, Boolean(message.expanded));
      return;
    }
    renderSimpleToast(message.message || '', message.icon || '', Number(message.duration) || 2200);
    return;
  }

  renderSimpleToast(message || '');
}

function t(key) {
  return uiText[key] || UI_TEXT_DEFAULT[key] || key;
}

function tOr(key, fallback) {
  const translated = t(key);
  return translated && translated !== key ? translated : fallback;
}

const ENGLISH_TEXT_MODE_QUERY_KEY = 'tone';
const ENGLISH_TEXT_MODE_GENZ = 'genz';
const ENGLISH_TEXT_MODE_LINKEDINBRO = 'linkedinbro';

function getActiveEnglishTextMode() {
  const pageLang = pageToLanguage(getCurrentFileName()) || 'en';
  if (pageLang !== 'en') return '';
  try {
    const params = new URLSearchParams(window.location.search);
    const mode = String(params.get(ENGLISH_TEXT_MODE_QUERY_KEY) || '').trim().toLowerCase();
    if (mode === ENGLISH_TEXT_MODE_GENZ) return ENGLISH_TEXT_MODE_GENZ;
    if (mode === ENGLISH_TEXT_MODE_LINKEDINBRO) return ENGLISH_TEXT_MODE_LINKEDINBRO;
    return '';
  } catch {
    return '';
  }
}

function getEnglishTextModeBundle(mode = getActiveEnglishTextMode()) {
  if (!mode) return null;
  const modes = window.ENGLISH_TEXT_MODES;
  if (!modes || typeof modes !== 'object') return null;
  const bundle = modes[mode];
  return bundle && typeof bundle === 'object' ? bundle : null;
}

function getRuntimeText(key, fallback = '') {
  const value = String(uiText[key] || '').trim();
  return value || String(fallback || '');
}

function applyEnglishModeParam(params) {
  if (!(params instanceof URLSearchParams)) return params;
  const mode = getActiveEnglishTextMode();
  if (mode) params.set(ENGLISH_TEXT_MODE_QUERY_KEY, mode);
  else params.delete(ENGLISH_TEXT_MODE_QUERY_KEY);
  return params;
}

const NOTE_UI_FALLBACKS = {
  note: 'Note',
  closeNote: 'Close note',
  notePlaceholder: 'Write your note here...',
  noteSaved: 'Note saved',
  noteDeleted: 'Note deleted',
  noteEmptyExport: 'Write a note first',
  noteSavedLocally: 'Saved locally in this browser',
  noteUnsaved: 'Unsaved changes',
  noteSaving: 'Saving...',
  noteDone: 'Done',
  noteDelete: 'Delete',
  noteSave: 'Save',
  noteDownload: 'Download',
  noteDownloadMd: 'Markdown (.md)',
  noteDownloadTxt: 'Text (.txt)',
  noteCopy: 'Copy',
  noteCopied: 'Note copied',
  noteOpenSource: 'Open source',
  noteLastSaved: 'Last saved',
  noteNew: 'No saved note yet',
  noteExport: 'Export',
  noteFor: 'Note',
  noteDownloaded: 'Note downloaded'
};

function noteText(key) {
  const translated = t(key);
  if (translated && translated !== key) return translated;
  return NOTE_UI_FALLBACKS[key] || key;
}

function isTopEpisodesType(type) {
  return String(type || '').trim().toLowerCase() === 'top-episodes';
}

function normalizeTopType(type) {
  return isTopEpisodesType(type) ? 'top-episodes' : 'top-podcasts';
}

function getDynamicTypeDefinitionsKey(platform, country) {
  return `${String(platform || '').trim().toLowerCase()}::${normalizeCountry(country || 'us')}`;
}

function getDynamicTypeDefinitions(platform, country = (countrySelect ? countrySelect.value : 'us')) {
  return dynamicTypeDefinitionsByPlatformCountry.get(getDynamicTypeDefinitionsKey(platform, country)) || null;
}

function setDynamicTypeDefinitions(platform, country, defs) {
  const cleaned = Array.isArray(defs)
    ? defs.map((def) => ({
      value: String(def && def.value || '').trim().toLowerCase(),
      key: '',
      defaultLabel: String(def && def.defaultLabel || '').trim(),
      indent: Number(def && def.indent) || 0
    })).filter((def) => def.value && def.defaultLabel)
    : [];
  if (!cleaned.length) return;
  dynamicTypeDefinitionsByPlatformCountry.set(getDynamicTypeDefinitionsKey(platform, country), cleaned);
}

function buildPodimoTypeDefinitionsFromPayload(payload) {
  const list = Array.isArray(payload && payload.availableTypes) ? payload.availableTypes : [];
  const defs = list.map((item) => ({
    value: String(item && item.value || '').trim().toLowerCase(),
    key: '',
    defaultLabel: String(item && item.label || '').trim(),
    indent: 0
  })).filter((item) => item.value && item.defaultLabel);
  return defs.length ? defs : null;
}

function maybeApplyDynamicTypeDefinitions(platform, country, payload, preferredType = '') {
  const safePlatform = String(platform || '').trim().toLowerCase();
  if (safePlatform !== 'podimo') return;
  const defs = buildPodimoTypeDefinitionsFromPayload(payload);
  if (!defs || !defs.length) return;
  setDynamicTypeDefinitions(safePlatform, country, defs);
  if (platformSelect && String(platformSelect.value || '').trim().toLowerCase() === safePlatform) {
    rebuildTypeSelectOptions(safePlatform, preferredType || (typeSelect ? typeSelect.value : ''), { force: true });
    updateHeroTypeSubtitle();
  }
}

function hasLegacyPodimoAvailableTypes(payload) {
  const list = Array.isArray(payload && payload.availableTypes) ? payload.availableTypes : [];
  if (!list.length) return true;
  return list.some((item, index) => {
    const value = String(item && item.value || '').trim().toLowerCase();
    const label = String(item && item.label || '').trim();
    if (!value || !label) return true;
    if (/\s[-–—|:]\s*podcasts?\b/i.test(label)) return true;
    if (index === 0 && value === 'top-podcasts' && /^top podcasts$/i.test(label)) return true;
    return false;
  });
}

function loadExternalScriptOnce(src, dataKey) {
  const key = String(dataKey || src || '').trim();
  if (!key) return Promise.reject(new Error('Missing external script key'));
  const existing = document.querySelector(`script[data-runtime-script="${CSS.escape(key)}"]`);
  if (existing) {
    if (existing.dataset.loaded === 'true') return Promise.resolve();
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error(`Failed to load script: ${src}`)), { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    script.dataset.runtimeScript = key;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

async function ensureXimalayaSdkLoaded() {
  if (window.du_web_sdk) return window.du_web_sdk;
  if (!ximalayaSdkLoadPromise) {
    ximalayaSdkLoadPromise = withXimalayaStorageQuotaGuard(() => loadExternalScriptOnce(XIMALAYA_DWS_SCRIPT_URL, 'ximalaya-du-web-sdk'))
      .then(() => {
        if (!window.du_web_sdk) {
          throw new Error('喜马拉雅签名 SDK 未初始化');
        }
        try {
          if (typeof window.du_web_sdk.setConfig === 'function') {
            window.du_web_sdk.setConfig({ deb: 'true' });
          }
        } catch { }
        return window.du_web_sdk;
      })
      .catch((error) => {
        ximalayaSdkLoadPromise = null;
        throw error;
      });
  }
  return ximalayaSdkLoadPromise;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withXimalayaStorageQuotaGuard(task) {
  if (!window.Storage || !Storage.prototype || typeof Storage.prototype.setItem !== 'function') {
    return await task();
  }

  const original = Storage.prototype.setItem;
  ximalayaStorageQuotaGuardDepth += 1;
  if (ximalayaStorageQuotaGuardDepth === 1) {
    Storage.prototype.setItem = function guardedSetItem(key, value) {
      try {
        return original.call(this, key, value);
      } catch (error) {
        if (error && error.name === 'QuotaExceededError') return undefined;
        throw error;
      }
    };
  }

  try {
    return await task();
  } finally {
    ximalayaStorageQuotaGuardDepth = Math.max(0, ximalayaStorageQuotaGuardDepth - 1);
    if (ximalayaStorageQuotaGuardDepth === 0) {
      Storage.prototype.setItem = original;
    }
  }
}

function callXimalayaSdk(methodName, cacheBrowserId = false) {
  const sdk = window.du_web_sdk;
  if (!sdk || typeof sdk[methodName] !== 'function') {
    return Promise.reject(new Error(`喜马拉雅签名方法不可用: ${methodName}`));
  }
  return withXimalayaStorageQuotaGuard(() => new Promise((resolve) => {
    try {
      sdk[methodName](XIMALAYA_DWS_API_KEY, XIMALAYA_DWS_APP_NAME, '', (value) => {
        const out = String(value || '').trim();
        if (cacheBrowserId && out) {
          ximalayaBrowserIdPromise = Promise.resolve(out);
        }
        resolve(out);
      });
    } catch (error) {
      resolve('');
    }
  }));
}

async function callXimalayaSdkWithRetry(methodName, options = {}) {
  const {
    retries = 6,
    cacheBrowserId = false,
    label = methodName
  } = options;

  let lastValue = '';
  for (let attempt = 0; attempt < retries; attempt += 1) {
    const value = await callXimalayaSdk(methodName, cacheBrowserId);
    const out = String(value || '').trim();
    if (out) return out;
    lastValue = out;
    if (attempt < retries - 1) {
      await sleep(120 + attempt * 120);
    }
  }

  return lastValue;
}

async function warmupXimalayaSdk() {
  if (ximalayaWarmupPromise) return ximalayaWarmupPromise;
  ximalayaWarmupPromise = ensureXimalayaSdkLoaded()
    .then(async () => {
      try {
        await callXimalayaSdkWithRetry('getBrowserID', {
          retries: 8,
          cacheBrowserId: true,
          label: 'browserId'
        });
      } catch { }
    })
    .catch((error) => {
      ximalayaWarmupPromise = null;
      throw error;
    });
  return ximalayaWarmupPromise;
}

function shouldWarmupXimalayaSdk() {
  const currentCountry = countrySelect ? String(countrySelect.value || '').trim().toLowerCase() : '';
  return currentCountry === 'cn';
}

async function getXimalayaBrowserId() {
  if (ximalayaBrowserIdPromise) return ximalayaBrowserIdPromise;
  ximalayaBrowserIdPromise = ensureXimalayaSdkLoaded()
    .then(() => callXimalayaSdkWithRetry('getBrowserID', {
      retries: 8,
      cacheBrowserId: true,
      label: 'browserId'
    }))
    .then((value) => {
      if (!value) throw new Error('喜马拉雅 browserId 为空');
      return value;
    })
    .catch((error) => {
      ximalayaBrowserIdPromise = null;
      throw error;
    });
  return ximalayaBrowserIdPromise;
}

async function createXimalayaSign() {
  await ensureXimalayaSdkLoaded();
  const browserId = await getXimalayaBrowserId();
  const sessionId = await callXimalayaSdkWithRetry('getSessionID', {
    retries: 6,
    label: 'sessionId'
  });
  if (!browserId || !sessionId) {
    throw new Error('喜马拉雅签名生成失败');
  }
  return `${browserId}&&${sessionId}`;
}

function getTypeDefinitionsForPlatform(platform) {
  const p = String(platform || '').trim().toLowerCase();
  if (p === 'apple') return APPLE_TYPE_DEFINITIONS;
  if (p === 'spotify') return SPOTIFY_TYPE_DEFINITIONS;
  if (p === 'ximalaya') return XIMALAYA_TYPE_DEFINITIONS;
  if (p === 'bilibili') return BILIBILI_TYPE_DEFINITIONS;
  if (p === 'siriusxm') return SIRIUSXM_TYPE_DEFINITIONS;
  if (p === 'bbcsounds') return TOP_PODCASTS_ONLY_TYPE_DEFINITIONS;
  if (p === 'pandora') return TOP_PODCASTS_ONLY_TYPE_DEFINITIONS;
  if (p === 'podcastapp') return PODCASTAPP_TYPE_DEFINITIONS;
  if (p === 'rtlplus') return RTLPLUS_TYPE_DEFINITIONS;
  if (p === 'tunein') return TOP_PODCASTS_ONLY_TYPE_DEFINITIONS;
  if (p === 'ardsounds') return ARDSOUNDS_TYPE_DEFINITIONS;
  if (p === 'radiofrance') return RADIOFRANCE_TYPE_DEFINITIONS;
  if (p === 'npoluister') return NPO_LUISTER_TYPE_DEFINITIONS;
  if (p === 'drlyd') return DR_LYD_TYPE_DEFINITIONS;
  if (p === 'rtbfauvio') return RTBF_AUVIO_TYPE_DEFINITIONS;
  if (p === 'rneaudio') return RNE_AUDIO_TYPE_DEFINITIONS;
  if (p === 'podimo') return getDynamicTypeDefinitions(p, countrySelect ? countrySelect.value : 'us') || PODIMO_TYPE_DEFINITIONS;
  if (p === 'podcastaddict') return PODCASTADDICT_TYPE_DEFINITIONS;
  if (p === 'ivoox') return IVOOX_TYPE_DEFINITIONS;
  if (
    p === 'castbox'
    || p === 'pocketcasts'
    || p === 'audible'
    || p === 'orfsound'
    || p === 'raiplaysound'
    || p === 'srfaudio'
    || p === 'rneaudio'
    || p === 'iheartradio'
    || p === 'amazonmusic'
    || p === 'radiko'
    || p === 'radionet'
    || p === 'abclisten'
    || p === 'nrk'
    || p === 'yleareena'
    || p === 'sverigesradio'
  ) {
    return TOP_PODCASTS_ONLY_TYPE_DEFINITIONS;
  }
  return DEFAULT_TYPE_DEFINITIONS;
}

function normalizeTypeForPlatform(platform, type) {
  const defs = getTypeDefinitionsForPlatform(platform);
  const raw = String(type || '').trim().toLowerCase();
  if (defs.some((def) => def.value === raw)) return raw;
  return defs[0] ? defs[0].value : 'top-podcasts';
}

function buildTypeOptionLabel(def) {
  const key = String(def && def.key || '').trim();
  const localizedByKey = key ? String(t(key) || '').trim() : '';
  const localized = localizedByKey && localizedByKey !== key ? localizedByKey : '';
  const base = localized
    || String(def && def.defaultLabel || '').trim()
    || String(def && def.value || '').trim();
  const level = Number(def && def.indent) || 0;
  if (!level) return base;
  const gap = '\u00A0\u00A0'.repeat(Math.min(4, Math.max(1, level)));
  return `${gap}${base}`;
}

function rebuildTypeSelectOptions(platform = (platformSelect ? platformSelect.value : ''), preferredType = '', options = {}) {
  if (!typeSelect) return;
  const safePlatform = String(platform || '').trim().toLowerCase();
  const defs = getTypeDefinitionsForPlatform(safePlatform);
  const keepValue = normalizeTypeForPlatform(safePlatform, preferredType || typeSelect.value);
  const shouldForce = Boolean(options && options.force);
  const signature = `${safePlatform}|${defs.map((d) => d.value).join(',')}`;

  if (!shouldForce && typeSelect.dataset.typeSignature === signature) {
    Array.from(typeSelect.options).forEach((option) => {
      const def = defs.find((d) => d.value === option.value);
      if (!def) return;
      option.textContent = buildTypeOptionLabel(def);
      option.title = option.textContent.replace(/^\s*↳\s*/, '').trim();
      option.dataset.baseLabel = option.title;
      option.dataset.indent = String(Number(def.indent) || 0);
    });
    if (!typeSelect.querySelector(`option[value="${keepValue}"]`)) {
      typeSelect.value = defs[0] ? defs[0].value : 'top-podcasts';
    } else {
      typeSelect.value = keepValue;
    }
    return;
  }

  typeSelect.innerHTML = '';
  defs.forEach((def) => {
    const option = document.createElement('option');
    option.value = def.value;
    option.textContent = buildTypeOptionLabel(def);
    option.title = option.textContent.replace(/^\s*↳\s*/, '').trim();
    option.dataset.baseLabel = option.title;
    option.dataset.indent = String(Number(def.indent) || 0);
    typeSelect.appendChild(option);
  });
  typeSelect.dataset.typeSignature = signature;
  typeSelect.value = keepValue;
}

function getCurrentTypeDisplayLabel() {
  if (!typeSelect) return '';
  const option = typeSelect.options[typeSelect.selectedIndex] || null;
  if (!option) return '';
  return String(option.dataset.baseLabel || option.title || option.textContent || '')
    .replace(/^\s*↳\s*/, '')
    .trim();
}

function isAppleTypeValue(value) {
  return String(value || '').trim().toLowerCase().startsWith('apple-');
}

function isSpotifyTypeValue(value) {
  return String(value || '').trim().toLowerCase().startsWith('spotify-');
}

function getAppleMainPrefetchTypes() {
  return (Array.isArray(APPLE_TYPE_DEFINITIONS) ? APPLE_TYPE_DEFINITIONS : [])
    .filter((def) => isAppleTypeValue(def && def.value) && !Number(def && def.indent))
    .map((def) => String(def.value || '').trim().toLowerCase())
    .filter(Boolean);
}

function getSpotifyCategoryPrefetchTypes() {
  return (Array.isArray(SPOTIFY_TYPE_DEFINITIONS) ? SPOTIFY_TYPE_DEFINITIONS : [])
    .filter((def) => isSpotifyTypeValue(def && def.value))
    .map((def) => String(def.value || '').trim().toLowerCase())
    .filter(Boolean);
}

function buildPrefetchTask(platform, country, type, reason = '') {
  const safePlatform = String(platform || '').trim().toLowerCase();
  const safeCountry = normalizeCountry(country);
  const safeType = normalizeTypeForPlatform(safePlatform, type);
  if (!safePlatform || !safeCountry || !safeType) return null;
  if (!isPlatformAvailableForCountry(safePlatform, safeCountry)) return null;
  return {
    key: prefetchComboStateKey(safePlatform, safeCountry, safeType),
    platform: safePlatform,
    country: safeCountry,
    type: safeType,
    reason: String(reason || '').trim()
  };
}

function dedupePrefetchTasks(tasks) {
  const out = [];
  const seen = new Set();
  (Array.isArray(tasks) ? tasks : []).forEach((task) => {
    if (!task || !task.key || seen.has(task.key)) return;
    seen.add(task.key);
    out.push(task);
  });
  return out;
}

function buildCountryBasePrefetchTasks(country, options = {}) {
  const safeCountry = normalizeCountry(country);
  const currentPlatform = String((options.currentPlatform || '').trim()).toLowerCase();
  const currentType = normalizeTypeForPlatform(currentPlatform || 'apple', options.currentType || 'top-podcasts');
  const out = [];

  ['top-podcasts', 'top-episodes'].forEach((type) => {
    const appleTask = buildPrefetchTask('apple', safeCountry, type, 'country-base');
    const spotifyTask = buildPrefetchTask('spotify', safeCountry, type, 'country-base');
    if (appleTask) out.push(appleTask);
    if (spotifyTask) out.push(spotifyTask);
  });

  if (options.includeSpotifyCategories !== false) {
    getSpotifyCategoryPrefetchTypes().forEach((type) => {
      const task = buildPrefetchTask('spotify', safeCountry, type, 'country-spotify-categories');
      if (task) out.push(task);
    });
  }

  if (options.includeAppleMainCategories !== false) {
    getAppleMainPrefetchTypes().forEach((type) => {
      const task = buildPrefetchTask('apple', safeCountry, type, 'country-apple-main');
      if (task) out.push(task);
    });
  }

  return out.filter((task) => !(task.platform === currentPlatform && task.country === safeCountry && task.type === currentType));
}

function buildCountryHistoryPrefetchTasks(country) {
  const safeCountry = normalizeCountry(country);
  const out = [];
  ['top-podcasts', 'top-episodes'].forEach((type) => {
    const appleTask = buildPrefetchTask('apple', safeCountry, type, 'country-history');
    const spotifyTask = buildPrefetchTask('spotify', safeCountry, type, 'country-history');
    if (appleTask) out.push(appleTask);
    if (spotifyTask) out.push(spotifyTask);
  });
  return out;
}

function normalizeAppArtworkUrl(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';

  return raw
    .replace(/\/(\d{2,4})x(\d{2,4})bb\.(png|jpg|jpeg|webp)(\?.*)?$/i, '/512x512bb.$3$4')
    .replace(/\/(\d{2,4})x0w\.(png|jpg|jpeg|webp)(\?.*)?$/i, '/512x512bb.$2$3');
}

function getCurrentHeroPlatformKey() {
  const scope = currentScopeValue();
  if (isLanguageScopeMode(scope)) {
    const selected = String((platformSelect && platformSelect.value) || '').trim().toLowerCase();
    return selected || 'all';
  }
  return String((platformSelect && platformSelect.value) || 'apple').trim().toLowerCase() || 'apple';
}

function getHeroPlatformDisplayName(platformKey) {
  const key = String(platformKey || '').trim().toLowerCase();
  const option = platformSelect ? platformSelect.querySelector('option[value="' + key + '"]') : null;
  const raw = String(option ? option.textContent : '').trim();
  if (raw) return raw;
  if (key === 'all') return String(t('allPlatform') || 'All Platform').trim();
  return key;
}

function getPlatformAppIconStorageDayKey(now = Date.now()) {
  if (typeof getLocalDateKey === 'function') {
    try { return String(getLocalDateKey(now) || '').trim(); } catch { }
  }
  const d = new Date(now);
  if (!Number.isFinite(d.getTime())) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function loadPlatformAppIconStorageState() {
  if (platformAppIconStorageState) return platformAppIconStorageState;
  const todayKey = getPlatformAppIconStorageDayKey(Date.now());
  const empty = { dayKey: todayKey, savedAt: 0, icons: {} };

  try {
    const raw = localStorage.getItem(PLATFORM_APP_ICON_CACHE_STORAGE_KEY);
    if (!raw) {
      platformAppIconStorageState = empty;
      return platformAppIconStorageState;
    }

    const parsed = JSON.parse(raw);
    const dayKey = String((parsed && parsed.dayKey) || '').trim();
    const savedAt = Number((parsed && parsed.savedAt) || 0);
    const icons = (parsed && typeof parsed.icons === 'object' && parsed.icons) ? parsed.icons : {};
    const valid = {};

    Object.entries(icons).forEach(([key, value]) => {
      const k = String(key || '').trim().toLowerCase();
      const v = String(value || '').trim();
      if (!k || !v) return;
      valid[k] = v;
    });

    if (dayKey && dayKey === todayKey && (Date.now() - savedAt) < PLATFORM_APP_ICON_CACHE_TTL_MS) {
      platformAppIconStorageState = { dayKey, savedAt, icons: valid };
      return platformAppIconStorageState;
    }
  } catch { }

  platformAppIconStorageState = empty;
  return platformAppIconStorageState;
}

function persistPlatformAppIconStorageState() {
  const state = loadPlatformAppIconStorageState();
  if (!state) return;
  try {
    localStorage.setItem(PLATFORM_APP_ICON_CACHE_STORAGE_KEY, JSON.stringify(state));
  } catch { }
}

function getCachedPlatformIconUrl(platformKey) {
  const key = String(platformKey || '').trim().toLowerCase();
  if (!key || key === 'all') return PLATFORM_ICON_FALLBACK.all || 'logo.webp';

  if (platformAppIconCache.has(key)) {
    const value = String(platformAppIconCache.get(key) || '').trim();
    if (value) return value;
  }

  const state = loadPlatformAppIconStorageState();
  const fromStorage = String((state && state.icons && state.icons[key]) || '').trim();
  if (fromStorage) {
    platformAppIconCache.set(key, fromStorage);
    return fromStorage;
  }

  return PLATFORM_ICON_FALLBACK[key] || PLATFORM_ICON_FALLBACK.all || 'logo.webp';
}

function markPlatformIconLoaded(url) {
  const u = String(url || '').trim();
  if (!u) return;
  platformAppIconLoaded.add(u);
}

function preloadPlatformIconUrl(url) {
  const u = String(url || '').trim();
  if (!u || platformAppIconLoaded.has(u)) return;
  const img = new Image();
  img.decoding = 'async';
  img.loading = 'eager';
  img.referrerPolicy = 'no-referrer';
  img.onload = () => markPlatformIconLoaded(u);
  img.onerror = () => { };
  img.src = u;
}

function setHeroPlatformIconImmediate(platformKey) {
  if (!heroPlatformIconEl) return;
  const key = String(platformKey || '').trim().toLowerCase();
  const name = getHeroPlatformDisplayName(key);
  const iconUrl = getCachedPlatformIconUrl(key);

  heroPlatformIconEl.alt = `${name} icon`;
  heroPlatformIconEl.title = name;

  if (iconUrl && heroPlatformIconEl.src !== iconUrl) {
    heroPlatformIconEl.src = iconUrl;
  }
  preloadPlatformIconUrl(iconUrl);
}

function lookupAppStoreIconByJsonp(appId, country = 'us', timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const callbackName = '__podcastChartsIconCb_' + String(appId) + '_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
    const script = document.createElement('script');
    let done = false;

    const cleanup = () => {
      if (done) return;
      done = true;
      try { delete window[callbackName]; } catch { window[callbackName] = undefined; }
      if (script && script.parentNode) script.parentNode.removeChild(script);
      if (timer) clearTimeout(timer);
    };

    const timer = setTimeout(() => {
      cleanup();
      reject(new Error('JSONP lookup timeout'));
    }, Math.max(2500, Number(timeoutMs) || 8000));

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload || null);
    };

    script.async = true;
    script.src = 'https://itunes.apple.com/lookup?id=' + encodeURIComponent(appId) + '&country=' + encodeURIComponent(country || 'us') + '&callback=' + encodeURIComponent(callbackName);
    script.onerror = () => {
      cleanup();
      reject(new Error('JSONP lookup network error'));
    };

    document.head.appendChild(script);
  });
}

async function resolvePlatformIconUrl(platformKey) {
  const key = String(platformKey || '').trim().toLowerCase();
  if (!key || key === 'all') return PLATFORM_ICON_FALLBACK.all || 'logo.webp';

  const fromLocal = getCachedPlatformIconUrl(key);
  if (fromLocal && fromLocal !== (PLATFORM_ICON_FALLBACK[key] || PLATFORM_ICON_FALLBACK.all || 'logo.webp')) {
    return fromLocal;
  }

  const cfg = PLATFORM_APP_STORE_IDS[key];
  if (!cfg || (!cfg.id && !cfg.iconUrl)) {
    const fallback = PLATFORM_ICON_FALLBACK[key] || PLATFORM_ICON_FALLBACK.all || 'logo.webp';
    platformAppIconCache.set(key, fallback);
    return fallback;
  }

  if (cfg && cfg.iconUrl) {
    const directIcon = normalizeAppArtworkUrl(cfg.iconUrl) || cfg.iconUrl;
    platformAppIconCache.set(key, directIcon);
    const state = loadPlatformAppIconStorageState();
    state.dayKey = getPlatformAppIconStorageDayKey(Date.now());
    state.savedAt = Date.now();
    state.icons[key] = directIcon;
    persistPlatformAppIconStorageState();
    preloadPlatformIconUrl(directIcon);
    return directIcon;
  }

  if (platformAppIconPending.has(key)) return platformAppIconPending.get(key);

  const task = (async () => {
    try {
      const payload = await lookupAppStoreIconByJsonp(cfg.id, cfg.country || 'us');
      const first = Array.isArray(payload && payload.results) ? payload.results[0] : null;
      const iconRaw = first && (first.artworkUrl512 || first.artworkUrl100 || first.artworkUrl60 || '');
      const icon = normalizeAppArtworkUrl(iconRaw);
      const finalUrl = icon || PLATFORM_ICON_FALLBACK[key] || PLATFORM_ICON_FALLBACK.all || 'logo.webp';
      platformAppIconCache.set(key, finalUrl);
      const state = loadPlatformAppIconStorageState();
      state.dayKey = getPlatformAppIconStorageDayKey(Date.now());
      state.savedAt = Date.now();
      state.icons[key] = finalUrl;
      persistPlatformAppIconStorageState();
      preloadPlatformIconUrl(finalUrl);
      return finalUrl;
    } catch (error) {
      console.warn('Platform icon lookup failed:', key, error);
      const fallback = PLATFORM_ICON_FALLBACK[key] || PLATFORM_ICON_FALLBACK.all || 'logo.webp';
      platformAppIconCache.set(key, fallback);
      return fallback;
    } finally {
      platformAppIconPending.delete(key);
    }
  })();

  platformAppIconPending.set(key, task);
  return task;
}

async function updateHeroPlatformBadge() {
  if (!heroPlatformIconEl) return;
  const jobId = ++heroPlatformIconJobId;
  const key = getCurrentHeroPlatformKey();
  setHeroPlatformIconImmediate(key);
  const iconUrl = await resolvePlatformIconUrl(key);
  if (jobId !== heroPlatformIconJobId) return;

  heroPlatformIconEl.src = iconUrl || PLATFORM_ICON_FALLBACK.all || 'logo.webp';
  heroPlatformIconEl.alt = getHeroPlatformDisplayName(key) + ' icon';
  heroPlatformIconEl.title = getHeroPlatformDisplayName(key);
  markPlatformIconLoaded(heroPlatformIconEl.src);
}

function prewarmPlatformAppIcons() {
  loadPlatformAppIconStorageState();

  const currentKey = getCurrentHeroPlatformKey();
  setHeroPlatformIconImmediate(currentKey);
  void resolvePlatformIconUrl(currentKey).catch(() => { });

  const keys = Object.keys(PLATFORM_APP_STORE_IDS);
  const start = () => {
    for (const key of keys) {
      const fromCache = getCachedPlatformIconUrl(key);
      if (fromCache) preloadPlatformIconUrl(fromCache);
      if (!platformAppIconPending.has(key)) {
        void resolvePlatformIconUrl(key).catch(() => { });
      }
    }
  };

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(start, { timeout: 2500 });
  } else {
    setTimeout(start, 120);
  }
}

function updateHeroTypeSubtitle() {
  if (!heroSubtitleEl) return;

  const favoritesScope = isFavoritesScopeMode();
  const label = favoritesScope ? buildMyPodcastsScopeLabel() : getCurrentTypeDisplayLabel();

  if (!label) {
    heroSubtitleEl.textContent = '';
    syncHeroGlassTextAttrs();
    heroSubtitleEl.style.display = 'none';
    if (heroSubtitleWrapEl) heroSubtitleWrapEl.style.display = 'none';
    return;
  }

  heroSubtitleEl.textContent = label;
  syncHeroGlassTextAttrs();
  heroSubtitleEl.style.display = 'block';

  if (heroPlatformIconEl) {
    heroPlatformIconEl.style.display = favoritesScope ? 'none' : 'block';
  }

  if (heroSubtitleWrapEl) heroSubtitleWrapEl.style.display = 'inline-flex';
  if (!favoritesScope) void updateHeroPlatformBadge();
}

function normalizeCountry(country) {
  const c = String(country || 'us').trim().toLowerCase();
  return /^[a-z]{2}$/.test(c) ? c : 'us';
}


function normalizeFavoriteKeyFromText(text) {
  return normalizeCrossPlatformKeyPart(text);
}

function normalizeFavoriteUrlKey(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  try {
    const parsed = new URL(raw);
    parsed.hash = '';
    const out = parsed.toString().replace(/\/+$/, '');
    return out || raw;
  } catch {
    return '';
  }
}

function normalizeFavoriteFeedUrl(url) {
  const normalized = normalizeFavoriteUrlKey(url);
  if (normalized && /^https?:\/\//i.test(normalized)) return normalized;
  const raw = String(url || '').trim();
  if (/^https?:\/\//i.test(raw)) return raw.replace(/\/+$/, '');
  return '';
}

function inferFavoriteFeedUrlFromRecord(record) {
  const row = record && typeof record === 'object' ? record : {};
  const directFeed = normalizeFavoriteFeedUrl(row.feedUrl);
  if (directFeed) return directFeed;

  const embedPlatform = String(row.embedPlatform || '').trim().toLowerCase();
  const embedUrl = normalizeFavoriteFeedUrl(row.embedUrl);
  if (embedUrl && (embedPlatform === 'castbox' || embedPlatform === 'pocketcasts' || embedPlatform === 'rss')) {
    return embedUrl;
  }

  const directUrl = normalizeFavoriteFeedUrl(row.url);
  if (!directUrl) return '';
  if (/\.xml(?:$|[?#])/i.test(directUrl) || /\/(?:rss|feed)(?:$|[/?#])/i.test(directUrl) || /\/podcast\/rss\.xml(?:$|[?#])/i.test(directUrl) || /^https?:\/\/feeds\./i.test(directUrl)) {
    return directUrl;
  }
  return '';
}

function buildFavoritePreferredKeyFromRecord(record) {
  const row = record && typeof record === 'object' ? record : {};
  const explicit = String(row.favoriteKey || '').trim();
  if (/^(?:f|tp|t|u):/i.test(explicit)) return explicit;

  const feed = inferFavoriteFeedUrlFromRecord(row);
  if (feed) return `f:${feed}`;

  const urlKey = normalizeFavoriteUrlKey(row.url);
  if (urlKey) return `u:${urlKey}`;

  const titleKey = normalizeFavoriteKeyFromText(row.title);
  if (titleKey) return `t:${titleKey}`;
  return '';
}

function expandFavoriteCandidateKeys(record) {
  const row = record && typeof record === 'object' ? record : {};
  const keys = [];
  const push = (value) => {
    const k = String(value || '').trim();
    if (!k || keys.includes(k)) return;
    keys.push(k);
  };

  const explicit = String(row.favoriteKey || '').trim();
  if (/^(?:f|tp|t|u):/i.test(explicit)) push(explicit);

  const feed = inferFavoriteFeedUrlFromRecord(row);
  if (feed) push(`f:${feed}`);

  const urlKey = normalizeFavoriteUrlKey(row.url);
  if (urlKey) push(`u:${urlKey}`);

  const titleKey = normalizeFavoriteKeyFromText(row.title);
  if (titleKey) push(`t:${titleKey}`);
  const publisherKey = normalizeFavoriteKeyFromText(row.publisher);
  if (titleKey && publisherKey) push(`tp:${titleKey}::${publisherKey}`);

  return keys;
}

function normalizeFavoriteRecord(record = {}) {
  const row = record && typeof record === 'object' ? record : {};
  const feedUrl = inferFavoriteFeedUrlFromRecord(row);
  const sourceTypeRaw = String(row.sourceType || '').trim().toLowerCase();
  const sourceType = sourceTypeRaw || (feedUrl ? 'rss' : 'chart');
  const embedUrl = String(row.embedUrl || '').trim() || (feedUrl || '');
  const embedPlatformRaw = String(row.embedPlatform || '').trim().toLowerCase();
  const embedPlatform = embedPlatformRaw || (feedUrl ? 'rss' : '');
  const embedKind = String(row.embedKind || '').trim().toLowerCase() || (embedUrl ? 'top-podcasts' : '');

  return {
    favoriteKey: String(row.favoriteKey || '').trim(),
    title: String(row.title || '').trim(),
    publisher: String(row.publisher || '').trim(),
    url: String(row.url || '').trim(),
    image: String(row.image || '').trim(),
    feedUrl,
    embedUrl,
    embedPlatform,
    embedKind,
    sourceType,
    originPlatform: String(row.originPlatform || '').trim().toLowerCase(),
    originCountry: String(row.originCountry || '').trim().toLowerCase(),
    originType: String(row.originType || '').trim().toLowerCase(),
    addedAt: Number(row.addedAt) || Date.now(),
    updatedAt: Number(row.updatedAt) || Date.now()
  };
}

function mergeFavoriteRecords(previous, incoming) {
  const prev = normalizeFavoriteRecord(previous || {});
  const next = normalizeFavoriteRecord(incoming || {});
  const keep = (a, b) => String(a || '').trim() || String(b || '').trim();
  return {
    favoriteKey: keep(next.favoriteKey, prev.favoriteKey),
    title: keep(next.title, prev.title),
    publisher: keep(next.publisher, prev.publisher),
    url: keep(next.url, prev.url),
    image: keep(next.image, prev.image),
    feedUrl: keep(next.feedUrl, prev.feedUrl),
    embedUrl: keep(next.embedUrl, prev.embedUrl),
    embedPlatform: keep(next.embedPlatform, prev.embedPlatform).toLowerCase(),
    embedKind: keep(next.embedKind, prev.embedKind).toLowerCase(),
    sourceType: keep(next.sourceType, prev.sourceType).toLowerCase(),
    originPlatform: keep(next.originPlatform, prev.originPlatform).toLowerCase(),
    originCountry: keep(next.originCountry, prev.originCountry).toLowerCase(),
    originType: keep(next.originType, prev.originType).toLowerCase(),
    addedAt: Math.min(Number(prev.addedAt) || Date.now(), Number(next.addedAt) || Date.now()),
    updatedAt: Date.now()
  };
}

function findExistingFavoriteKeyForRecord(record) {
  if (!favoritePodcastMap || !favoritePodcastMap.size) return '';

  const keys = expandFavoriteCandidateKeys(record);
  for (const key of keys) {
    if (favoritePodcastMap.has(key)) return key;
  }

  const hasStrongIdentity = Boolean(
    inferFavoriteFeedUrlFromRecord(record) ||
    normalizeFavoriteUrlKey(record && record.url) ||
    String(record && record.favoriteKey || '').trim()
  );
  if (hasStrongIdentity) return '';

  const titleKey = normalizeFavoriteKeyFromText(record && record.title);
  if (titleKey) {
    for (const [existingKey, existingValue] of favoritePodcastMap.entries()) {
      if (normalizeFavoriteKeyFromText(existingValue && existingValue.title) === titleKey) {
        return existingKey;
      }
    }
  }

  return '';
}

function buildFavoriteKeyFromItem(item) {
  const row = item && typeof item === 'object' ? item : {};
  const explicit = String(row.favoriteKey || '').trim();
  if (/^(?:f|tp|t|u):/i.test(explicit)) return explicit;

  const existing = findExistingFavoriteKeyForRecord(row);
  if (existing) return existing;
  return buildFavoritePreferredKeyFromRecord(row);
}

function parseFavoriteStorage(raw) {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function favoriteMapToPlainObject() {
  const obj = {};
  favoritePodcastMap.forEach((value, key) => {
    const row = normalizeFavoriteRecord({ ...(value || {}), favoriteKey: key });
    obj[key] = {
      title: row.title,
      publisher: row.publisher,
      url: row.url,
      image: row.image,
      feedUrl: row.feedUrl,
      embedUrl: row.embedUrl,
      embedPlatform: row.embedPlatform,
      embedKind: row.embedKind,
      sourceType: row.sourceType,
      originPlatform: row.originPlatform,
      originCountry: row.originCountry,
      originType: row.originType,
      addedAt: Number(row.addedAt) || Date.now(),
      updatedAt: Number(row.updatedAt) || Date.now()
    };
  });
  return obj;
}

function applyFavoriteStorageObject(obj) {
  favoritePodcastMap = new Map();
  const parsed = obj && typeof obj === 'object' ? obj : {};
  Object.keys(parsed).forEach((key) => {
    const safeKey = String(key || '').trim();
    if (!safeKey) return;
    const row = normalizeFavoriteRecord({ ...(parsed[key] || {}), favoriteKey: safeKey });
    const existingKey = findExistingFavoriteKeyForRecord(row);
    const finalKey = existingKey || buildFavoritePreferredKeyFromRecord(row) || safeKey;
    if (!finalKey) return;
    const merged = mergeFavoriteRecords(favoritePodcastMap.get(finalKey), { ...row, favoriteKey: finalKey });
    favoritePodcastMap.set(finalKey, merged);
  });
}

function getFavoriteItemsForRender() {
  const rows = Array.from(favoritePodcastMap.entries())
    .map(([key, value]) => ({ key, value: normalizeFavoriteRecord({ ...(value || {}), favoriteKey: key }) }))
    .filter((entry) => entry.value && entry.value.title)
    .sort((a, b) => {
      const aa = Number(a.value.addedAt) || 0;
      const bb = Number(b.value.addedAt) || 0;
      if (aa !== bb) return aa - bb;
      return String(a.value.title || '').localeCompare(String(b.value.title || ''));
    });

  return rows.map((entry, index) => ({
    rank: index + 1,
    title: entry.value.title,
    publisher: entry.value.publisher,
    image: entry.value.image,
    url: entry.value.url,
    feedUrl: entry.value.feedUrl,
    embedUrl: entry.value.embedUrl,
    embedPlatform: entry.value.embedPlatform,
    embedKind: entry.value.embedKind,
    sourceType: entry.value.sourceType,
    originPlatform: entry.value.originPlatform,
    originCountry: entry.value.originCountry,
    originType: entry.value.originType,
    favoriteKey: entry.key,
    addedAt: entry.value.addedAt,
    updatedAt: entry.value.updatedAt
  }));
}

function getFavoriteEntries() {
  return Array.from(favoritePodcastMap.entries()).map(([key, value]) => ({
    key,
    value: normalizeFavoriteRecord({ ...(value || {}), favoriteKey: key })
  }));
}

function buildYouTubeThumbnailFromUrl(url) {
  const videoId = extractYoutubeVideoIdFromUrl(url);
  return videoId ? `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg` : '';
}

function inferContentKindFromLink(platform, link, fallbackKind = '') {
  const safePlatform = String(platform || '').trim().toLowerCase();
  const rawLink = String(link || '').trim();
  const explicit = String(fallbackKind || '').trim().toLowerCase();
  if (explicit === 'top-episodes' || explicit === 'top-podcasts') return explicit;
  if (!safePlatform || !rawLink) return 'top-podcasts';

  if (safePlatform === 'apple') {
    return /\bi=\d+\b/.test(rawLink) ? 'top-episodes' : 'top-podcasts';
  }
  if (safePlatform === 'spotify') {
    return /open\.spotify\.com\/episode\//i.test(rawLink) ? 'top-episodes' : 'top-podcasts';
  }
  if (safePlatform === 'youtube') {
    const parsed = safeUrlParse(rawLink);
    if (parsed && String(parsed.searchParams.get('list') || '').trim()) return 'top-podcasts';
    return extractYoutubeVideoIdFromUrl(rawLink) ? 'top-episodes' : 'top-podcasts';
  }
  if (safePlatform === 'bilibili') return 'top-episodes';
  return 'top-podcasts';
}

function inferPlatformFromUrl(url) {
  const raw = String(url || '').trim().toLowerCase();
  if (!raw) return '';
  if (raw.includes('podcasts.apple.com')) return 'apple';
  if (raw.includes('open.spotify.com')) return 'spotify';
  if (raw.includes('youtube.com') || raw.includes('youtu.be')) return 'youtube';
  if (raw.includes('bilibili.com')) return 'bilibili';
  if (/^https?:\/\//.test(raw)) return 'rss';
  return '';
}

function buildNoteLibraryItem(noteRecord, favoriteLookup = new Map()) {
  const record = noteRecord && typeof noteRecord === 'object' ? noteRecord : {};
  const link = String(record.link || '').trim();
  const platform = String(record.platform || inferPlatformFromUrl(link)).trim().toLowerCase();
  const provisionalKind = inferContentKindFromLink(platform, link, record.kind);
  const provisionalContext = buildNoteContext({
    id: record.id,
    title: record.title,
    publisher: record.publisher,
    link,
    image: record.image,
    embedUrl: record.embedUrl,
    platform,
    kind: provisionalKind
  });

  const favoriteRecord = favoriteLookup.get(provisionalContext.id) || favoriteLookup.get(`url::${link}`) || null;
  const kind = inferContentKindFromLink(platform, link, record.kind || (favoriteRecord && (favoriteRecord.originType || favoriteRecord.embedKind)));
  const context = buildNoteContext({
    id: record.id,
    title: record.title,
    publisher: record.publisher,
    link,
    image: record.image || (favoriteRecord && favoriteRecord.image),
    embedUrl: record.embedUrl || (favoriteRecord && favoriteRecord.embedUrl),
    platform,
    kind
  });

  const merged = favoriteRecord
    ? normalizeFavoriteRecord({
        ...favoriteRecord,
        title: record.title || favoriteRecord.title,
        publisher: record.publisher || favoriteRecord.publisher,
        url: link || favoriteRecord.url,
        image: String(record.image || '').trim() || favoriteRecord.image,
        embedUrl: String(record.embedUrl || '').trim() || favoriteRecord.embedUrl,
        embedKind: kind || favoriteRecord.embedKind,
        embedPlatform: platform || favoriteRecord.embedPlatform
      })
    : normalizeFavoriteRecord({
        title: record.title,
        publisher: record.publisher,
        url: link,
        image: String(record.image || '').trim() || (platform === 'youtube' ? buildYouTubeThumbnailFromUrl(link) : ''),
        embedUrl: String(record.embedUrl || '').trim(),
        embedPlatform: platform,
        embedKind: kind,
        sourceType: 'note',
        originPlatform: platform,
        originType: kind
      });

  const embedMeta = merged.embedUrl && merged.embedPlatform
    ? { embedUrl: merged.embedUrl, embedPlatform: merged.embedPlatform, embedKind: merged.embedKind || kind }
    : buildInlineEmbedMeta(platform, kind, link);

  return {
    rank: '-',
    rowVariant: 'note',
    title: String(record.title || merged.title || '').trim() || 'Untitled',
    publisher: String(record.publisher || merged.publisher || platformBrandLabel(platform) || '').trim(),
    image: String(record.image || merged.image || '').trim() || (platform === 'youtube' ? buildYouTubeThumbnailFromUrl(link) : ''),
    url: link,
    feedUrl: merged.feedUrl,
    embedUrl: embedMeta.embedUrl || '',
    embedPlatform: embedMeta.embedPlatform || platform,
    embedKind: embedMeta.embedKind || kind,
    sourceType: favoriteRecord ? String(favoriteRecord.sourceType || '').trim().toLowerCase() || 'note' : 'note',
    originPlatform: platform,
    originCountry: '',
    originType: kind,
    favoriteKey: favoriteRecord ? favoriteRecord.favoriteKey : '',
    addedAt: Number(record.createdAt) || Number(record.updatedAt) || Date.now(),
    updatedAt: Number(record.updatedAt) || 0,
    notePreviewHtml: buildNotePreviewHtml(record.content, { interactive: canSeekTimestampsForPlatform(platform) }),
    noteSearchText: `${record.title || ''} ${record.publisher || ''} ${record.link || ''} ${record.content || ''}`.trim(),
    noteContext: context,
    noteContent: String(record.content || '')
  };
}

async function hydrateNoteRecordsForLibrary(records, favoriteLookup = new Map()) {
  const list = Array.isArray(records) ? records.map((row) => ({ ...(row || {}) })) : [];
  for (const record of list) {
    const link = String(record.link || '').trim();
    const platform = String(record.platform || inferPlatformFromUrl(link)).trim().toLowerCase();
    const favoriteRecord = favoriteLookup.get(String(record.id || '').trim()) || favoriteLookup.get(`url::${link}`) || null;
    const inferredKind = inferContentKindFromLink(platform, link, record.kind || (favoriteRecord && (favoriteRecord.originType || favoriteRecord.embedKind)));

    if (!record.platform && platform) record.platform = platform;
    if (!record.kind && inferredKind) record.kind = inferredKind;
    if (!record.publisher && favoriteRecord && favoriteRecord.publisher) record.publisher = favoriteRecord.publisher;
    if (!record.embedUrl && favoriteRecord && favoriteRecord.embedUrl) record.embedUrl = favoriteRecord.embedUrl;
    if (!record.image && favoriteRecord && favoriteRecord.image) record.image = favoriteRecord.image;

    if (!record.embedUrl && platform && link) {
      const inlineMeta = buildInlineEmbedMeta(platform, inferredKind, link);
      if (inlineMeta && inlineMeta.embedUrl) record.embedUrl = inlineMeta.embedUrl;
    }

    if (!record.image && platform === 'youtube') {
      const youtubeImage = buildYouTubeThumbnailFromUrl(link);
      if (youtubeImage) record.image = youtubeImage;
    }

    if ((platform === 'apple') && (inferredKind === 'top-episodes') && link) {
      const appleEmbedUrl = String(record.embedUrl || buildInlineEmbedMeta('apple', 'top-episodes', link).embedUrl || '').trim();
      if (appleEmbedUrl) {
        try {
          const meta = await resolveAppleEpisodeEmbedMeta(appleEmbedUrl);
          if (meta) {
            if (!record.image && meta.image) record.image = meta.image;
            if (!record.publisher && meta.publisher) record.publisher = meta.publisher;
            if (!record.title && meta.title) record.title = meta.title;
            if (!record.embedUrl) record.embedUrl = appleEmbedUrl;
          }
        } catch { }
      }
    }
  }
  return list;
}

async function collectMyPodcastsLibraryData() {
  if (favoriteStorageLoadPromise) {
    try { await favoriteStorageLoadPromise; } catch {}
  }

  const favoriteEntries = getFavoriteEntries();
  const favoriteLookup = new Map();
  favoriteEntries.forEach(({ key, value }) => {
    const row = normalizeFavoriteRecord({ ...(value || {}), favoriteKey: key });
    const context = buildNoteContext({
      title: row.title,
      publisher: row.publisher,
      link: row.url,
      favoriteKey: key,
      embedUrl: row.embedUrl,
      platform: row.originPlatform || row.embedPlatform,
      kind: row.originType || row.embedKind
    });
    if (context.id) favoriteLookup.set(context.id, row);
    if (row.url) favoriteLookup.set(`url::${row.url}`, row);
  });

  const favorites = getFavoriteItemsForRender();
  const podcasts = [];
  const episodes = [];
  favorites.forEach((item) => {
    if (favoriteTypeFromRecord(item) === 'episodes') episodes.push(item);
    else podcasts.push(item);
  });

  const notesRaw = await loadAllNotes();
  const hydratedNotesRaw = await hydrateNoteRecordsForLibrary(notesRaw, favoriteLookup);
  const notes = hydratedNotesRaw.map((record) => buildNoteLibraryItem(record, favoriteLookup));

  return { podcasts, episodes, notes };
}

function refreshFavoriteButtonsFromState() {
  document.querySelectorAll('.favorite-link').forEach((btn) => {
    const key = String(btn.getAttribute('data-favorite-key') || '').trim();
    if (!key) return;
    updateFavoriteButtonVisual(btn, favoritePodcastMap.has(key));
  });
}

async function persistFavoriteMapToIndexedDb() {
  try {
    await idbPut(IDB_META_STORE, {
      key: IDB_META_KEY_FAVORITES,
      value: favoriteMapToPlainObject(),
      updatedAt: Date.now()
    });
  } catch (error) {
    console.warn('Favorite IndexedDB write failed:', error);
  }
}

async function loadFavoriteMapFromIndexedDb() {
  try {
    const record = await idbGet(IDB_META_STORE, IDB_META_KEY_FAVORITES);
    if (!record || typeof record !== 'object') return false;

    const source =
      (record.value && typeof record.value === 'object' && record.value) ||
      (record.payload && typeof record.payload === 'object' && record.payload) ||
      (record.data && typeof record.data === 'object' && record.data) ||
      null;

    if (!source) return false;

    applyFavoriteStorageObject(source);
    refreshFavoriteButtonsFromState();
    return true;
  } catch (error) {
    console.warn('Favorite IndexedDB read failed:', error);
    return false;
  }
}

function saveFavoriteStorageMap() {
  void persistFavoriteMapToIndexedDb();
}

function loadFavoriteStorageMap() {
  favoritePodcastMap = new Map();
  favoriteStorageLoadPromise = Promise.resolve(loadFavoriteMapFromIndexedDb()).catch((error) => {
    console.warn('Favorite storage IDB bootstrap failed:', error);
  });
  return favoriteStorageLoadPromise;
}

function parseFavoriteRankState(raw) {
  if (!raw) return { contexts: {}, updatedAt: 0 };
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return { contexts: {}, updatedAt: 0 };
    const contexts = parsed.contexts && typeof parsed.contexts === 'object' ? parsed.contexts : {};
    const updatedAt = Number(parsed.updatedAt) || 0;
    return { contexts, updatedAt };
  } catch {
    return { contexts: {}, updatedAt: 0 };
  }
}

async function persistFavoriteRankStateToIndexedDb() {
  try {
    await idbPut(IDB_META_STORE, {
      key: IDB_META_KEY_FAVORITE_RANK,
      value: favoriteRankState,
      updatedAt: Number(favoriteRankState.updatedAt) || Date.now()
    });
  } catch (error) {
    console.warn('Favorite rank IndexedDB write failed:', error);
  }
}

async function loadFavoriteRankStateFromIndexedDb() {
  try {
    const record = await idbGet(IDB_META_STORE, IDB_META_KEY_FAVORITE_RANK);
    if (!record || typeof record !== 'object') return false;

    const source =
      (record.value && typeof record.value === 'object' && record.value) ||
      (record.payload && typeof record.payload === 'object' && record.payload) ||
      (record.data && typeof record.data === 'object' && record.data) ||
      null;

    if (!source) return false;

    favoriteRankState = {
      contexts: source.contexts && typeof source.contexts === 'object' ? source.contexts : {},
      updatedAt: Number(source.updatedAt) || 0
    };
    return true;
  } catch (error) {
    console.warn('Favorite rank IndexedDB read failed:', error);
    return false;
  }
}

function loadFavoriteRankState() {
  favoriteRankState = { contexts: {}, updatedAt: 0 };
  Promise.resolve(loadFavoriteRankStateFromIndexedDb()).catch((error) => {
    console.warn('Favorite rank IDB bootstrap failed:', error);
  });
}

function saveFavoriteRankState() {
  favoriteRankState.updatedAt = Date.now();
  void persistFavoriteRankStateToIndexedDb();
}

function isFavoriteItem(item) {
  const key = buildFavoriteKeyFromItem(item);
  return !!(key && favoritePodcastMap.has(key));
}

function updateFavoriteButtonVisual(btn, isActive) {
  if (!btn) return;
  btn.classList.toggle('is-active', !!isActive);
  btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  const label = isActive ? getUnfavoriteActionLabel() : getFavoriteActionLabel();
  btn.setAttribute('aria-label', label);
  btn.setAttribute('title', label);
}

function triggerFavoriteAnimation(btn) {
  if (!btn) return;
  btn.classList.remove('is-animating', 'is-burst');
  void btn.offsetWidth;
  btn.classList.add('is-animating', 'is-burst');
  setTimeout(() => {
    btn.classList.remove('is-animating', 'is-burst');
  }, 750);
}

function updateFavoriteButtonsByKey(key, isActive) {
  const target = String(key || '').trim();
  if (!target) return;
  document.querySelectorAll('.favorite-link').forEach((btn) => {
    if (String(btn.getAttribute('data-favorite-key') || '').trim() !== target) return;
    updateFavoriteButtonVisual(btn, isActive);
  });
}

function contextKeyForFavoriteRank() {
  const scope = currentScopeValue();
  const platform = String((platformSelect && platformSelect.value) || '').trim().toLowerCase() || 'apple';
  const type = String((typeSelect && typeSelect.value) || '').trim().toLowerCase() || 'top-podcasts';
  const country = String(getEffectiveCountryKeyForScope() || 'us').trim().toLowerCase();
  const period = currentPeriodValue();
  return `${scope}|${platform}|${type}|${country}|${period}`;
}

async function ensureNotificationPermissionFromGesture() {
  if (typeof window === 'undefined' || typeof Notification === 'undefined') return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission !== 'default') return false;
  try {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  } catch {
    return false;
  }
}

async function showBrowserRankNotification(title, body, tag = '') {
  if (typeof window === 'undefined' || typeof Notification === 'undefined') return false;
  if (Notification.permission !== 'granted') return false;

  const payload = {
    body,
    tag: tag || `fav-rank-${Date.now()}`,
    renotify: false,
    icon: 'pwa-192.png',
    badge: 'pwa-192.png'
  };

  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg && typeof reg.showNotification === 'function') {
        await reg.showNotification(title, payload);
        return true;
      }
    }
  } catch (error) {
    console.warn('Service worker notification failed:', error);
  }

  try {
    new Notification(title, payload);
    return true;
  } catch (error) {
    console.warn('Notification API failed:', error);
    return false;
  }
}

function pruneFavoriteRankContexts(limit = 80) {
  const contexts = favoriteRankState && favoriteRankState.contexts && typeof favoriteRankState.contexts === 'object'
    ? favoriteRankState.contexts
    : {};
  const keys = Object.keys(contexts);
  if (keys.length <= limit) return;
  keys.sort((a, b) => {
    const ta = Number((contexts[a] && contexts[a]._updatedAt) || 0);
    const tb = Number((contexts[b] && contexts[b]._updatedAt) || 0);
    return ta - tb;
  });
  const drop = keys.length - limit;
  for (let i = 0; i < drop; i += 1) {
    delete contexts[keys[i]];
  }
}

async function maybeNotifyFavoriteRankChanges(items) {
  if (!favoritePodcastMap.size) return;

  const contextKey = contextKeyForFavoriteRank();
  const contexts = favoriteRankState.contexts && typeof favoriteRankState.contexts === 'object'
    ? favoriteRankState.contexts
    : (favoriteRankState.contexts = {});

  const prev = contexts[contextKey] && typeof contexts[contextKey] === 'object' ? contexts[contextKey] : null;
  const current = {};
  const titleMap = {};

  (Array.isArray(items) ? items : []).forEach((item, index) => {
    const key = buildFavoriteKeyFromItem(item);
    if (!key || !favoritePodcastMap.has(key)) return;
    const rank = Number(item && item.rank) || (index + 1);
    if (!Number.isFinite(rank)) return;
    current[key] = rank;
    titleMap[key] = String(item && item.title || favoritePodcastMap.get(key)?.title || '').trim() || 'Podcast';
  });

  current._updatedAt = Date.now();

  if (!prev) {
    contexts[contextKey] = current;
    pruneFavoriteRankContexts();
    saveFavoriteRankState();
    return;
  }

  const changes = [];
  const prevKeys = Object.keys(prev).filter((key) => !key.startsWith('_'));
  const currKeys = Object.keys(current).filter((key) => !key.startsWith('_'));
  const union = new Set([...prevKeys, ...currKeys]);

  union.forEach((key) => {
    const oldRank = Number(prev[key]);
    const newRank = Number(current[key]);

    if (!Number.isFinite(oldRank)) return;
    if (Number.isFinite(newRank) && oldRank === newRank) return;

    changes.push({
      key,
      oldRank,
      newRank: Number.isFinite(newRank) ? newRank : null,
      title: titleMap[key] || String((favoritePodcastMap.get(key) || {}).title || 'Podcast')
    });
  });

  contexts[contextKey] = current;
  pruneFavoriteRankContexts();
  saveFavoriteRankState();

  if (!changes.length) return;

  const rankedChanges = changes
    .map((change) => {
      const oldRank = Number(change.oldRank);
      const newRank = Number(change.newRank);
      const delta = (!Number.isFinite(newRank) || !Number.isFinite(oldRank))
        ? -9999
        : (oldRank - newRank);
      return { ...change, delta };
    })
    .sort((a, b) => {
      if (a.delta !== b.delta) return b.delta - a.delta;
      const ar = Number.isFinite(a.newRank) ? a.newRank : 999999;
      const br = Number.isFinite(b.newRank) ? b.newRank : 999999;
      return ar - br;
    });

  showToast({
    kind: 'rank-changes',
    changes: rankedChanges
  });

  if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
    const preview = rankedChanges.slice(0, 3).map((change) => {
      const oldRank = Number(change.oldRank);
      const newRank = Number(change.newRank);
      let deltaText = '⬇️out';
      if (Number.isFinite(oldRank) && Number.isFinite(newRank)) {
        const diff = oldRank - newRank;
        deltaText = diff > 0 ? `⬆️${diff}` : diff < 0 ? `⬇️${Math.abs(diff)}` : `→#${newRank}`;
      } else if (Number.isFinite(newRank)) {
        deltaText = `⬆️#${newRank}`;
      }
      return `${String(change.title || 'Podcast').trim() || 'Podcast'} ${deltaText}`;
    });
    const rest = rankedChanges.length > preview.length ? `\n+${rankedChanges.length - preview.length}` : '';
    await showBrowserRankNotification(`🔔 ${rankedChanges.length}`, `${preview.join('\n')}${rest}`, `fav-rank-${contextKey}`);
  }
}

function buildFavoriteRecordFromButton(btn) {
  const sourceType = String(btn.getAttribute('data-favorite-source-type') || '').trim().toLowerCase() || 'chart';
  return normalizeFavoriteRecord({
    favoriteKey: String(btn.getAttribute('data-favorite-key') || '').trim(),
    title: String(btn.getAttribute('data-favorite-title') || '').trim(),
    publisher: String(btn.getAttribute('data-favorite-publisher') || '').trim(),
    url: String(btn.getAttribute('data-favorite-url') || '').trim(),
    image: String(btn.getAttribute('data-favorite-image') || '').trim(),
    feedUrl: String(btn.getAttribute('data-favorite-feed') || '').trim(),
    embedUrl: String(btn.getAttribute('data-favorite-embed-url') || '').trim(),
    embedPlatform: String(btn.getAttribute('data-favorite-embed-platform') || '').trim().toLowerCase(),
    embedKind: String(btn.getAttribute('data-favorite-embed-kind') || '').trim().toLowerCase() || 'top-podcasts',
    sourceType,
    originPlatform: String(btn.getAttribute('data-favorite-origin-platform') || '').trim().toLowerCase(),
    originCountry: String(btn.getAttribute('data-favorite-origin-country') || '').trim().toLowerCase(),
    originType: String(btn.getAttribute('data-favorite-origin-type') || '').trim().toLowerCase(),
    addedAt: Date.now(),
    updatedAt: Date.now()
  });
}

function upsertFavoriteRecord(record, options = {}) {
  const incoming = normalizeFavoriteRecord(record || {});
  const existingKey = findExistingFavoriteKeyForRecord(incoming);
  const key = existingKey || buildFavoritePreferredKeyFromRecord(incoming);
  if (!key) return { ok: false, key: '' };

  const prev = favoritePodcastMap.get(key);
  const next = mergeFavoriteRecords(prev, { ...incoming, favoriteKey: key });
  favoritePodcastMap.set(key, next);

  if (options && options.persist !== false) {
    saveFavoriteStorageMap();
  }

  return { ok: true, key, added: !prev, updated: !!prev };
}

async function toggleFavoriteFromButton(button) {
  const btn = button && button.closest ? button.closest('.favorite-link') : null;
  if (!btn) return false;

  const record = buildFavoriteRecordFromButton(btn);
  const buttonKey = String(btn.getAttribute('data-favorite-key') || '').trim();
  const existingKey = findExistingFavoriteKeyForRecord(record) || (buttonKey && favoritePodcastMap.has(buttonKey) ? buttonKey : '');

  if (existingKey && favoritePodcastMap.has(existingKey)) {
    favoritePodcastMap.delete(existingKey);
    updateFavoriteButtonsByKey(existingKey, false);
    saveFavoriteStorageMap();
    showToast({
      icon: '💔',
      message: String(record && record.title || '').trim() || getFavoriteRemovedMessage(),
      duration: 2200
    });
  } else {
    const result = upsertFavoriteRecord(record, { persist: true });
    if (!result.ok) return false;
    updateFavoriteButtonsByKey(result.key, true);
    triggerFavoriteAnimation(btn);
    showToast({
      icon: '❤️',
      message: String(record && record.title || '').trim() || getFavoriteAddedMessage(),
      duration: 2200
    });
    await ensureNotificationPermissionFromGesture();
  }

  if (isFavoritesScopeMode()) {
    void renderMyPodcastsLibrary();
  }

  return true;
}

function hasIndexedDbSupport() {
  try {
    return typeof window !== 'undefined' && typeof window.indexedDB !== 'undefined';
  } catch {
    return false;
  }
}

function idbRequestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('IndexedDB request failed'));
  });
}

function idbTransactionDone(tx) {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onabort = () => reject(tx.error || new Error('IndexedDB transaction aborted'));
    tx.onerror = () => reject(tx.error || new Error('IndexedDB transaction failed'));
  });
}

function openChartsDb() {
  if (!hasIndexedDbSupport()) return Promise.resolve(null);
  if (chartsDbPromise) return chartsDbPromise;

  chartsDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(IDB_NAME, IDB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(IDB_RESPONSE_STORE)) {
        const store = db.createObjectStore(IDB_RESPONSE_STORE, { keyPath: 'key' });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
      }

      if (!db.objectStoreNames.contains(IDB_SNAPSHOT_STORE)) {
        const store = db.createObjectStore(IDB_SNAPSHOT_STORE, { keyPath: 'id' });
        store.createIndex('comboKey', 'comboKey', { unique: false });
        store.createIndex('snapshotDate', 'snapshotDate', { unique: false });
      }

      if (!db.objectStoreNames.contains(IDB_META_STORE)) {
        db.createObjectStore(IDB_META_STORE, { keyPath: 'key' });
      }

      if (!db.objectStoreNames.contains(IDB_NOTES_STORE)) {
        const store = db.createObjectStore(IDB_NOTES_STORE, { keyPath: 'id' });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Failed to open IndexedDB'));
  }).catch((error) => {
    console.warn('IndexedDB unavailable:', error);
    return null;
  });

  return chartsDbPromise;
}

async function idbGet(storeName, key) {
  const db = await openChartsDb();
  if (!db) return null;
  const tx = db.transaction(storeName, 'readonly');
  const result = await idbRequestToPromise(tx.objectStore(storeName).get(key));
  await idbTransactionDone(tx);
  return result || null;
}

async function idbPut(storeName, value) {
  const db = await openChartsDb();
  if (!db) return false;
  const tx = db.transaction(storeName, 'readwrite');
  tx.objectStore(storeName).put(value);
  await idbTransactionDone(tx);
  return true;
}

async function idbDelete(storeName, key) {
  const db = await openChartsDb();
  if (!db) return false;
  const tx = db.transaction(storeName, 'readwrite');
  tx.objectStore(storeName).delete(key);
  await idbTransactionDone(tx);
  return true;
}

async function idbGetAllByIndex(storeName, indexName, query) {
  const db = await openChartsDb();
  if (!db) return [];
  const tx = db.transaction(storeName, 'readonly');
  const index = tx.objectStore(storeName).index(indexName);
  const result = await idbRequestToPromise(index.getAll(query));
  await idbTransactionDone(tx);
  return Array.isArray(result) ? result : [];
}

async function idbGetAll(storeName) {
  const db = await openChartsDb();
  if (!db) return [];
  const tx = db.transaction(storeName, 'readonly');
  const result = await idbRequestToPromise(tx.objectStore(storeName).getAll());
  await idbTransactionDone(tx);
  return Array.isArray(result) ? result : [];
}

function buildNoteContext(values = {}) {
  const title = String(values.title || '').trim();
  const publisher = String(values.publisher || '').trim();
  const link = /^https?:\/\//i.test(String(values.link || '').trim()) ? String(values.link || '').trim() : '';
  const favoriteKey = String(values.favoriteKey || '').trim();
  const embedUrl = String(values.embedUrl || '').trim();
  const image = String(values.image || '').trim();
  const platform = String(values.platform || '').trim().toLowerCase();
  const kind = String(values.kind || '').trim().toLowerCase();

  let id = String(values.id || '').trim();
  if (!id) {
    if (link) id = `url::${link}`;
    else if (favoriteKey) id = `fav::${favoriteKey}`;
    else if (embedUrl && platform) id = `embed::${platform}::${embedUrl}`;
    else id = `text::${platform}::${kind}::${normalizeCrossPlatformKeyPart(title)}::${normalizeCrossPlatformKeyPart(publisher)}`;
  }

  return { id, title, publisher, link, image, embedUrl, platform, kind };
}

function readNoteContextFromElement(node) {
  if (!node || !node.getAttribute) return buildNoteContext();
  return buildNoteContext({
    id: node.getAttribute('data-note-id') || '',
    title: node.getAttribute('data-note-title') || '',
    publisher: node.getAttribute('data-note-publisher') || '',
    link: node.getAttribute('data-note-link') || '',
    image: node.getAttribute('data-note-image') || '',
    embedUrl: node.getAttribute('data-note-embed-url') || '',
    platform: node.getAttribute('data-note-platform') || '',
    kind: node.getAttribute('data-note-kind') || ''
  });
}

function formatNoteUpdatedAt(value) {
  const ts = Number(value);
  if (!Number.isFinite(ts) || ts <= 0) return '';
  try {
    return new Intl.DateTimeFormat(getDateLocaleTag(), {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(ts));
  } catch {
    return new Date(ts).toLocaleString();
  }
}

function getNoteStatusText(updatedAt, dirty = false, saving = false) {
  if (saving) return noteText('noteSaving');
  if (dirty) return noteText('noteUnsaved');
  if (Number(updatedAt) > 0) {
    return `${noteText('noteLastSaved')}: ${formatNoteUpdatedAt(updatedAt)}`;
  }
  return noteText('noteNew');
}

async function loadNote(id) {
  const safeId = String(id || '').trim();
  if (!safeId) return null;
  try {
    const record = await idbGet(IDB_NOTES_STORE, safeId);
    return record && typeof record === 'object' ? record : null;
  } catch (error) {
    console.warn('Note read failed:', safeId, error);
    return null;
  }
}

async function saveNote(id, title, link, content, extra = {}) {
  const safeId = String(id || '').trim();
  if (!safeId) throw new Error('Missing note id');
  const rawContent = String(content || '');
  const now = Date.now();

  if (!rawContent.trim()) {
    await deleteNote(safeId);
    return null;
  }

  const existing = await loadNote(safeId);
  const record = {
    id: safeId,
    title: String(title || '').trim(),
    link: String(link || '').trim(),
    publisher: String(extra.publisher || '').trim(),
    image: String(extra.image || '').trim(),
    embedUrl: String(extra.embedUrl || '').trim(),
    platform: String(extra.platform || '').trim().toLowerCase(),
    kind: String(extra.kind || '').trim().toLowerCase(),
    content: rawContent,
    createdAt: Number(existing && existing.createdAt) || now,
    updatedAt: now
  };

  await idbPut(IDB_NOTES_STORE, record);
  return record;
}

async function deleteNote(id) {
  const safeId = String(id || '').trim();
  if (!safeId) return false;
  try {
    await idbDelete(IDB_NOTES_STORE, safeId);
    return true;
  } catch (error) {
    console.warn('Note delete failed:', safeId, error);
    return false;
  }
}

async function loadAllNotes() {
  try {
    const records = await idbGetAll(IDB_NOTES_STORE);
    return (Array.isArray(records) ? records : [])
      .filter((record) => record && typeof record === 'object' && String(record.id || '').trim())
      .sort((a, b) => {
        const aa = Number(a && a.updatedAt) || 0;
        const bb = Number(b && b.updatedAt) || 0;
        if (aa !== bb) return bb - aa;
        return String((a && a.title) || '').localeCompare(String((b && b.title) || ''));
      });
  } catch (error) {
    console.warn('Note list read failed:', error);
    return [];
  }
}

function normalizeMyPodcastsTab(value) {
  const safe = String(value || '').trim().toLowerCase();
  return MY_PODCASTS_TAB_VALUES.includes(safe) ? safe : 'podcasts';
}

function normalizeMyPodcastsImportMode(value) {
  const safe = String(value || '').trim().toLowerCase();
  return MY_PODCASTS_IMPORT_MODE_VALUES.includes(safe) ? safe : 'rss';
}

function favoriteTypeFromRecord(record) {
  const row = normalizeFavoriteRecord(record || {});
  const kind = String(row.embedKind || row.originType || '').trim().toLowerCase();
  if (kind === 'top-episodes') return 'episodes';
  return 'podcasts';
}

function canSeekTimestampsForPlatform(platform) {
  const safe = String(platform || '').trim().toLowerCase();
  return safe === 'youtube' || safe === 'rss' || safe === 'castbox' || safe === 'pocketcasts';
}

function parseNoteTimestampSeconds(token) {
  const raw = String(token || '').trim();
  if (!raw || !/^\d{1,2}:\d{2}(?::\d{2})?$/.test(raw)) return NaN;
  const parts = raw.split(':').map((value) => Number(value));
  if (parts.some((value) => !Number.isFinite(value) || value < 0)) return NaN;
  if (parts.length === 2) return (parts[0] * 60) + parts[1];
  return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
}

function buildInteractiveTimestampHtml(rawText, options = {}) {
  const text = String(rawText || '');
  const interactive = !!options.interactive;
  const timestampRe = /\b\d{1,2}:\d{2}(?::\d{2})?\b/g;
  let output = '';
  let cursor = 0;
  let match;
  while ((match = timestampRe.exec(text))) {
    const token = String(match[0] || '');
    const seconds = parseNoteTimestampSeconds(token);
    output += escapeHtml(text.slice(cursor, match.index));
    if (Number.isFinite(seconds) && seconds >= 0) {
      if (interactive) {
        output += `<button class="note-timestamp" type="button" data-note-seek="${seconds}" data-note-seek-label="${escapeHtml(token)}">${escapeHtml(token)}</button>`;
      } else {
        output += `<span class="note-timestamp-static">${escapeHtml(token)}</span>`;
      }
    } else {
      output += escapeHtml(token);
    }
    cursor = match.index + token.length;
  }
  output += escapeHtml(text.slice(cursor));
  return output.replace(/\r?\n/g, '<br>');
}

function buildNotePreviewHtml(rawText, options = {}) {
  const text = String(rawText || '').trim();
  if (!text) return '';
  const maxChars = Math.max(60, Number(options.maxChars) || 260);
  const clipped = text.length > maxChars ? `${text.slice(0, maxChars - 1).trimEnd()}…` : text;
  return buildInteractiveTimestampHtml(clipped, options);
}

function buildNoteFullPreviewHtml(rawText, options = {}) {
  return buildInteractiveTimestampHtml(String(rawText || ''), options);
}

function sanitizeNoteFilename(value) {
  const raw = String(value || '').trim().toLowerCase();
  const normalized = raw
    .normalize('NFKD')
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
  return normalized || 'podcast-note';
}

function buildNoteExportContent(format, context, content, updatedAt = Date.now()) {
  const safeFormat = String(format || 'md').trim().toLowerCase() === 'txt' ? 'txt' : 'md';
  const safeContent = String(content || '').trim();
  const savedAt = formatNoteUpdatedAt(updatedAt) || new Date(Number(updatedAt) || Date.now()).toLocaleString();
  const title = String(context && context.title || '').trim() || 'Untitled';
  const link = String(context && context.link || '').trim();
  const publisher = String(context && context.publisher || '').trim();
  const platform = String(context && context.platform || '').trim().toLowerCase();
  const platformLabel = platform ? platformBrandLabel(platform) : '';

  if (safeFormat === 'txt') {
    return [
      `Title: ${title}`,
      link ? `Link: ${link}` : '',
      publisher ? `Publisher: ${publisher}` : '',
      platformLabel ? `Platform: ${platformLabel}` : '',
      `Saved: ${savedAt}`,
      '---------------------------------',
      safeContent
    ].filter(Boolean).join('\n');
  }

  return [
    `# ${title}`,
    '',
    link ? `Link: [${link}](${link})` : '',
    publisher ? `Publisher: ${publisher}` : '',
    platformLabel ? `Platform: ${platformLabel}` : '',
    `Saved: ${savedAt}`,
    '',
    '---',
    '',
    safeContent
  ].filter((line, index, arr) => line || (index > 0 && arr[index - 1] !== '')).join('\n');
}

function downloadNote(format, context, content, updatedAt = Date.now()) {
  const safeContent = String(content || '');
  if (!safeContent.trim()) {
    showToast(noteText('noteEmptyExport'));
    return false;
  }
  const safeFormat = String(format || 'md').trim().toLowerCase() === 'txt' ? 'txt' : 'md';
  const body = buildNoteExportContent(safeFormat, context, safeContent, updatedAt);
  const blob = new Blob([body], { type: safeFormat === 'txt' ? 'text/plain;charset=utf-8' : 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const stamp = new Date(Number(updatedAt) || Date.now()).toISOString().slice(0, 19).replace(/[:T]/g, '-');
  const base = sanitizeNoteFilename((context && context.title) || 'podcast-note');
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${base}-${stamp}.${safeFormat}`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(noteText('noteDownloaded'));
  return true;
}

function createEmptyPrefetchState() {
  return {
    seenCountries: {},
    seenCombos: {},
    languageScopes: {},
    allScopes: {},
    comboStatus: {},
    updatedAt: 0
  };
}

function normalizePrefetchState(raw) {
  const base = createEmptyPrefetchState();
  if (!raw || typeof raw !== 'object') return base;

  ['seenCountries', 'seenCombos', 'languageScopes', 'allScopes', 'comboStatus'].forEach((key) => {
    if (raw[key] && typeof raw[key] === 'object') base[key] = raw[key];
  });
  base.updatedAt = Number(raw.updatedAt) || 0;
  return base;
}

function extractMetaRecordValue(record) {
  if (!record || typeof record !== 'object') return null;
  if (record.value && typeof record.value === 'object') return record.value;
  if (record.payload && typeof record.payload === 'object') return record.payload;
  if (record.data && typeof record.data === 'object') return record.data;
  return null;
}

async function loadPrefetchState() {
  if (prefetchStateCache) return prefetchStateCache;
  if (prefetchStatePromise) return prefetchStatePromise;

  prefetchStatePromise = (async () => {
    try {
      const record = await idbGet(IDB_META_STORE, IDB_META_KEY_PREFETCH_STATE);
      prefetchStateCache = normalizePrefetchState(extractMetaRecordValue(record));
    } catch (error) {
      console.warn('Prefetch state read failed:', error);
      prefetchStateCache = createEmptyPrefetchState();
    }
    return prefetchStateCache;
  })().finally(() => {
    prefetchStatePromise = null;
  });

  return prefetchStatePromise;
}

async function savePrefetchState(state = prefetchStateCache) {
  const next = normalizePrefetchState(state);
  next.updatedAt = Date.now();
  prefetchStateCache = next;

  try {
    await idbPut(IDB_META_STORE, {
      key: IDB_META_KEY_PREFETCH_STATE,
      value: next,
      updatedAt: next.updatedAt
    });
  } catch (error) {
    console.warn('Prefetch state write failed:', error);
  }

  return next;
}

function prunePrefetchBucket(bucket, limit) {
  const source = bucket && typeof bucket === 'object' ? bucket : {};
  const keys = Object.keys(source);
  const max = Math.max(1, Number(limit) || 1);
  if (keys.length <= max) return source;

  keys.sort((a, b) => {
    const ta = Number((source[a] && source[a].lastViewedAt) || 0);
    const tb = Number((source[b] && source[b].lastViewedAt) || 0);
    if (tb !== ta) return tb - ta;
    const ha = Number((source[a] && source[a].hits) || 0);
    const hb = Number((source[b] && source[b].hits) || 0);
    return hb - ha;
  });

  const out = {};
  keys.slice(0, max).forEach((key) => {
    out[key] = source[key];
  });
  return out;
}

function recentEntriesFromBucket(bucket, limit) {
  const source = bucket && typeof bucket === 'object' ? bucket : {};
  return Object.entries(source)
    .sort((a, b) => {
      const ta = Number((a[1] && a[1].lastViewedAt) || 0);
      const tb = Number((b[1] && b[1].lastViewedAt) || 0);
      if (tb !== ta) return tb - ta;
      const ha = Number((a[1] && a[1].hits) || 0);
      const hb = Number((b[1] && b[1].hits) || 0);
      return hb - ha;
    })
    .slice(0, Math.max(1, Number(limit) || 1));
}

function touchPrefetchBucket(bucket, key, patch = {}) {
  const source = bucket && typeof bucket === 'object' ? bucket : {};
  const existing = source[key] && typeof source[key] === 'object' ? source[key] : {};
  source[key] = {
    ...existing,
    ...patch,
    hits: Number(existing.hits || 0) + 1,
    lastViewedAt: Date.now()
  };
  return source[key];
}

function prefetchComboStateKey(platform, country, type) {
  return `${String(platform || '').trim().toLowerCase()}|${String(country || '').trim().toLowerCase()}|${String(type || '').trim().toLowerCase()}`;
}

function getLocalDateKey(ts = Date.now()) {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getUtcDateKey(ts = Date.now()) {
  const d = new Date(ts);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getStorageDateKey(ts = Date.now()) {
  return getUtcDateKey(ts);
}

const APPLE_CHART_TIME_ZONE = 'America/Los_Angeles';

function extractIsoDateKey(value) {
  const match = String(value || '').trim().match(/^(\d{4}-\d{2}-\d{2})(?:[T\s]|$)/);
  return match ? match[1] : '';
}

function getDateKeyInTimeZone(ts = Date.now(), timeZone = 'UTC') {
  const target = Number(ts);
  if (!Number.isFinite(target)) return getUtcDateKey();

  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    const parts = formatter.formatToParts(new Date(target));
    const byType = {};
    parts.forEach((part) => {
      if (part && part.type) byType[part.type] = part.value;
    });
    if (byType.year && byType.month && byType.day) {
      return `${byType.year}-${byType.month}-${byType.day}`;
    }
  } catch { }

  return getUtcDateKey(target);
}

function getApplePlatformDateKey(ts = Date.now()) {
  return getDateKeyInTimeZone(ts, APPLE_CHART_TIME_ZONE);
}

function getCurrentSnapshotDateKeyForPlatform(platform, ts = Date.now()) {
  const safePlatform = String(platform || '').trim().toLowerCase();
  if (safePlatform === 'apple') return getApplePlatformDateKey(ts);
  return getStorageDateKey(ts);
}

function extractAppleSourceUpdated(payload) {
  if (!payload || typeof payload !== 'object') return '';
  const feed = payload.feed && typeof payload.feed === 'object' ? payload.feed : {};
  const candidates = [
    feed.updated,
    feed.lastUpdated,
    payload.updated,
    payload.lastUpdated,
    payload.generatedAt
  ];
  for (const value of candidates) {
    const raw = String(value || '').trim();
    if (raw) return raw;
  }
  return '';
}

function getResponseCacheDateKeyForPlatform(platform, payload, updatedAt = Date.now()) {
  const safePlatform = String(platform || '').trim().toLowerCase();
  if (safePlatform === 'apple') {
    const sourceUpdatedAt = extractAppleSourceUpdated(payload);
    return extractIsoDateKey(sourceUpdatedAt) || getApplePlatformDateKey(updatedAt);
  }
  return getStorageDateKey(updatedAt);
}

function isResponseCacheFreshForPlatform(platform, type, payload, updatedAt = Date.now()) {
  const updated = Number(updatedAt || 0);
  if (!payload || !updated) return false;
  if ((Date.now() - updated) >= getCacheTtlMsForType(normalizeTypeForPlatform(platform, type))) return false;
  return getResponseCacheDateKeyForPlatform(platform, payload, updated) === getCurrentSnapshotDateKeyForPlatform(platform);
}

function buildSnapshotFingerprint(items) {
  const rows = Array.isArray(items) ? items.slice(0, RANK_SCORE_EXTENDED_MAX) : [];
  let hash = 2166136261;

  rows.forEach((item, index) => {
    const rank = Number(item && item.rank) || (index + 1);
    const key = [
      String(rank),
      String(item && item.url ? item.url : ''),
      String(item && item.title ? item.title : ''),
      String(item && item.publisher ? item.publisher : '')
    ].join('\u001f');

    for (let i = 0; i < key.length; i += 1) {
      hash ^= key.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
  });

  return `v1_${(hash >>> 0).toString(16)}_${rows.length}`;
}

function compareSnapshotRecency(a, b) {
  const ad = String((a && a.snapshotDate) || '');
  const bd = String((b && b.snapshotDate) || '');
  if (ad !== bd) return bd.localeCompare(ad);

  const af = Number((a && (a.fetchedAt || a.savedAt)) || 0);
  const bf = Number((b && (b.fetchedAt || b.savedAt)) || 0);
  if (af !== bf) return bf - af;

  return String((b && b.id) || '').localeCompare(String((a && a.id) || ''));
}

function pickLatestSnapshotRecord(rows) {
  if (!Array.isArray(rows) || !rows.length) return null;
  return rows.slice().sort(compareSnapshotRecency)[0] || null;
}

function currentPeriodValue() {
  const el = periodSelect || document.getElementById('period-select');
  const value = el ? String(el.value || 'daily') : 'daily';
  return ['daily', 'week', 'month', 'year', 'all'].includes(value) ? value : 'daily';
}

function currentScopeValue() {
  if (myPodcastsScopeActive) return MY_PODCASTS_SCOPE_VALUE;
  const el = scopeSelect || document.getElementById('chart-scope-select');
  const value = el ? String(el.value || 'country').trim() : 'country';
  return value || 'country';
}

function getLanguageScopeConfig(scope = currentScopeValue()) {
  const key = String(scope || '').trim().toLowerCase();
  return LANGUAGE_SCOPE_CONFIGS[key] || null;
}

function isLanguageScopeMode(scope = currentScopeValue()) {
  return !!getLanguageScopeConfig(scope);
}

function buildMyPodcastsScopeLabel() {
  const explicit = String(t('myPodcasts') || '').trim();
  if (explicit) return explicit;

  const podcastsWord = String(t('podcastsWord') || '').trim() || 'Podcasts';
  const pageLang = pageToLanguage(getCurrentFileName()) || 'en';
  if (pageLang === 'en') return `My ${podcastsWord}`.trim();
  return podcastsWord;
}

function isFavoritesScopeMode(scope = currentScopeValue()) {
  return String(scope || '').trim().toLowerCase() === MY_PODCASTS_SCOPE_VALUE;
}

function ensureMyPodcastsEntryButton() {
  if (myPodcastsEntryBtn && myPodcastsEntryBtn.isConnected) return myPodcastsEntryBtn;

  const actions = document.querySelector('.command-actions');
  if (!actions) return null;

  let btn = actions.querySelector('#my-podcasts-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.className = 'plain-btn';
    btn.id = 'my-podcasts-btn';
    btn.type = 'button';
    btn.textContent = buildMyPodcastsScopeLabel();

    const refreshNode = actions.querySelector('#refresh-btn');
    if (refreshNode && refreshNode.parentNode === actions && refreshNode.nextSibling) {
      actions.insertBefore(btn, refreshNode.nextSibling);
    } else {
      actions.appendChild(btn);
    }
  }

  myPodcastsEntryBtn = btn;
  if (!btn.dataset.boundClick) {
    btn.addEventListener('click', () => {
      const nextActive = !isFavoritesScopeMode();
      myPodcastsScopeActive = nextActive;
      if (!nextActive && scopeSelect && scopeSelect.querySelector('option[value="country"]')) {
        scopeSelect.value = 'country';
      }
      resetLimitAndReload();
    });
    btn.dataset.boundClick = '1';
  }

  return btn;
}

function updateMyPodcastsEntryButtonState() {
  const btn = ensureMyPodcastsEntryButton();
  if (!btn) return;
  const active = isFavoritesScopeMode();
  btn.classList.toggle('active', active);
  btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  btn.setAttribute('title', buildMyPodcastsScopeLabel());
}

function getEffectiveCountryKeyForScope(country = (countrySelect ? countrySelect.value : 'us'), scope = currentScopeValue()) {
  const cfg = getLanguageScopeConfig(scope);
  if (cfg && cfg.key) return cfg.key;
  return String(country || 'us').trim().toLowerCase() || 'us';
}

function getScopeHeadingOverride(scope = currentScopeValue()) {
  const cfg = getLanguageScopeConfig(scope);
  return cfg ? buildScopeSelectOptionLabel(cfg.key || scope) : '';
}

function normalizePrimaryLangCode(code) {
  const c = String(code || '').trim().toLowerCase();
  if (!c) return 'en';
  if (c.startsWith('zh-')) return 'zh';
  if (c.startsWith('es-')) return 'es';
  if (c.startsWith('pt-')) return 'pt';
  if (c.startsWith('fr-')) return 'fr';
  if (c.startsWith('ar-')) return 'ar';
  return c.split('-')[0] || c;
}

function getLanguageDisplayName(langCode) {
  const code = normalizePrimaryLangCode(langCode);
  const localeCandidates = [];
  const push = (x) => {
    const v = String(x || '').trim();
    if (v && !localeCandidates.includes(v)) localeCandidates.push(v);
  };
  push(getIntlLocaleTag());
  push(getTranslateTarget());
  push(document.documentElement && document.documentElement.lang);
  push(code);
  push('en');

  let langName = '';
  try {
    let locale = localeCandidates[0] || 'en';
    if (typeof Intl !== 'undefined' && Intl.DisplayNames) {
      if (typeof Intl.DisplayNames.supportedLocalesOf === 'function') {
        const supported = Intl.DisplayNames.supportedLocalesOf(localeCandidates);
        if (supported && supported.length) locale = supported[0];
      }
      const dn = new Intl.DisplayNames([locale], { type: 'language' });
      langName = String(dn.of(code) || '').trim();
    }
  } catch { }
  return langName || code.toUpperCase();
}

function buildLanguageScopeLabel(langCode) {
  const raw = String(langCode || '').trim().toLowerCase();
  const code = normalizePrimaryLangCode(raw);
  const langName = getLanguageDisplayName(raw || code);
  const word = String(t('podcastsWord') || uiText.podcastsWord || '').trim();
  const pageLang = pageToLanguage(getCurrentFileName()) || 'en';
  if (pageLang === 'zh-hans' || pageLang === 'zh-hant' || pageLang === 'zh-hk' || pageLang === 'ja') {
    return `${langName}${word}`;
  }
  return `${langName} ${word}`.trim();
}

function buildScopeSelectOptionLabel(value) {
  const v = String(value || '').trim().toLowerCase();
  if (v === 'country') {
    const scoped = String(t('scope.country') || '').trim();
    const explicit = scoped && scoped !== 'scope.country'
      ? scoped
      : String(t('languageChart') || '').trim();
    if (explicit) return explicit;
    const label = String(t('periodLabel') || '').trim();
    return label || UI_TEXT_DEFAULT.languageChart || '';
  }
  if (v === MY_PODCASTS_SCOPE_VALUE) {
    const scoped = String(t('scope.myPodcasts') || '').trim();
    return (scoped && scoped !== 'scope.myPodcasts') ? scoped : buildMyPodcastsScopeLabel();
  }
  if (v.startsWith('lang-')) {
    const scopedKey = `scope.${v}`;
    const explicit = String(t(scopedKey) || '').trim();
    if (explicit && explicit !== scopedKey) return explicit;
    const cfg = LANGUAGE_SCOPE_CONFIGS[v];
    if (cfg && cfg.label) return cfg.label;
    return buildLanguageScopeLabel(v.slice(5));
  }
  const explicit = String(t('languageChart') || '').trim();
  if (explicit) return explicit;
  const label = String(t('periodLabel') || '').trim();
  return label || UI_TEXT_DEFAULT.languageChart || '';
}

function supportsWorkerCountryBatch(platform, type) {
  const p = String(platform || '').trim().toLowerCase();
  const safeType = normalizeTypeForPlatform(p, type);
  const isEpisodes = isTopEpisodesType(safeType);
  if (!p || p === 'all') return false;
  if (p === 'youtube') return false; 
  if (p === 'iheartradio' || p === 'iheart') return false; 
  if ((p === 'castbox' || p === 'pocketcasts') && isEpisodes) return false;
  return ['apple', 'spotify', 'castbox', 'pocketcasts', 'podbbang', 'audioclip'].includes(p);
}

async function fetchWorkerCountryBatchRaw(platform, type, countries) {
  const p = String(platform || '').trim().toLowerCase();
  const safeType = normalizeTypeForPlatform(p, type);
  const list = (Array.isArray(countries) ? countries : [])
    .map((code) => String(code || '').trim().toLowerCase())
    .filter(Boolean)
    .filter((code, idx, arr) => arr.indexOf(code) === idx);

  if (!supportsWorkerCountryBatch(p, safeType) || !list.length) {
    return { results: [], failures: list.slice() };
  }

  const params = new URLSearchParams({
    platform: 'batch',
    target_platform: p,
    type: safeType,
    countries: list.join(',')
  });

  const payload = await fetchJsonWithFallback([`${WORKER_API_BASE}/?${params.toString()}`]);
  const rows = Array.isArray(payload && payload.results) ? payload.results : [];
  const seen = new Set();
  const results = [];
  const failures = [];

  rows.forEach((row) => {
    const country = String((row && row.country) || '').trim().toLowerCase();
    if (!country || seen.has(country)) return;
    seen.add(country);
    if (row && row.ok && Object.prototype.hasOwnProperty.call(row, 'data')) {
      results.push({ country, data: row.data });
      return;
    }
    failures.push(country);
  });

  list.forEach((country) => {
    if (!seen.has(country) && !failures.includes(country)) failures.push(country);
  });

  return { results, failures };
}

function ensureScopeSelectOptions() {
  if (!scopeSelect) return;

  const needed = ['country', 'lang-en', 'lang-zh', 'lang-es', 'lang-ar', 'lang-fr', 'lang-pt', 'lang-de', 'lang-nl'];
  const existingValues = new Set(Array.from(scopeSelect.options).map((opt) => String(opt.value || '').trim().toLowerCase()));

  needed.forEach((value) => {
    if (!existingValues.has(value)) {
      const option = document.createElement('option');
      option.value = value;
      scopeSelect.appendChild(option);
    }
  });

  Array.from(scopeSelect.options).forEach((option) => {
    const value = String(option.value || '').trim().toLowerCase();
    if (!needed.includes(value)) option.remove();
  });

  const ordered = [];
  needed.forEach((value) => {
    const node = scopeSelect.querySelector(`option[value="${value}"]`);
    if (!node) return;
    node.textContent = buildScopeSelectOptionLabel(value);
    node.title = node.textContent;
    ordered.push(node);
  });
  ordered.forEach((node) => scopeSelect.appendChild(node));

  if (!scopeSelect.querySelector(`option[value="${scopeSelect.value}"]`)) {
    scopeSelect.value = 'country';
  }
}

function comboKeyFor(platform, country, type) {
  return `${platform}::${country}::${type}`;
}

function comboKeyForCurrent() {
  return comboKeyFor(platformSelect.value, getEffectiveCountryKeyForScope(), typeSelect.value);
}

async function getResponseCacheEntry(key) {
  try {
    const record = await idbGet(IDB_RESPONSE_STORE, key);
    if (record && Object.prototype.hasOwnProperty.call(record, 'payload')) return record;
  } catch (error) {
    console.warn('IndexedDB response cache read failed:', error);
  }
  return null;
}

async function setResponseCacheEntry(key, payload) {
  const record = { key, payload, updatedAt: Date.now() };
  try {
    await idbPut(IDB_RESPONSE_STORE, record);
  } catch (error) {
    console.warn('IndexedDB response cache write failed:', error);
  }
  return record;
}

async function removeResponseCacheEntry(key) {
  try { await idbDelete(IDB_RESPONSE_STORE, key); } catch { }
}

function scoreFromRank(rank) {
  const n = Number(rank);
  if (!Number.isFinite(n) || n < 1 || n > RANK_SCORE_EXTENDED_MAX) return 0;
  if (n <= RANK_SCORE_FULL_MAX) return (RANK_SCORE_FULL_MAX + 1) - n;

  const t = (n - (RANK_SCORE_FULL_MAX + 1)) / (RANK_SCORE_EXTENDED_MAX - (RANK_SCORE_FULL_MAX + 1));
  const value = 0.99 - (0.98 * t);
  return Math.max(0.01, Number(value.toFixed(4)));
}

function getPlatformRankCap(platform = (platformSelect ? platformSelect.value : ''), type = (typeSelect ? typeSelect.value : 'top-podcasts')) {
  const p = String(platform || '').trim().toLowerCase();
  const rawType = String(type || '').trim().toLowerCase();
  const isAppleEpisode = p === 'apple' && rawType === 'top-episodes';
  if (p === 'spotify') return RANK_SCORE_EXTENDED_MAX;
  if (p === 'apple' && !isAppleEpisode) return RANK_SCORE_EXTENDED_MAX;
  if (p === 'amazonmusic' && rawType === 'top-podcasts') return RANK_SCORE_EXTENDED_MAX;
  if (p === 'bbcsounds' && rawType === 'top-podcasts') return RANK_SCORE_EXTENDED_MAX;
  if (p === 'podcastapp' && rawType === 'top-podcasts') return RANK_SCORE_EXTENDED_MAX;
  return RANK_SCORE_FULL_MAX;
}

function shouldUncapSinglePlatformDisplay(platform = (platformSelect ? platformSelect.value : ''), type = (typeSelect ? typeSelect.value : 'top-podcasts')) {
  const p = String(platform || '').trim().toLowerCase();
  const rawType = String(type || '').trim().toLowerCase();
  if (p === 'spotify') return true;
  if (p === 'apple' && rawType !== 'top-episodes') return true;
  if (p === 'amazonmusic' && rawType === 'top-podcasts') return true;
  if (p === 'bbcsounds' && rawType === 'top-podcasts') return true;
  if (p === 'podcastapp' && rawType === 'top-podcasts') return true;
  return false;
}

function getDefaultVisibleLimitForSelection(platform = (platformSelect ? platformSelect.value : ''), type = (typeSelect ? typeSelect.value : 'top-podcasts'), scope = currentScopeValue()) {
  if (shouldUncapAggregateDisplay(platform, scope)) {
    return AGGREGATE_AUTO_LOAD_BATCH;
  }
  if (shouldUncapSinglePlatformDisplay(platform, type)) {
    return Number.POSITIVE_INFINITY;
  }
  return getPlatformRankCap(platform, type);
}

function isAggregateSnapshotCombo(platform, country) {
  const p = String(platform || '').trim().toLowerCase();
  const c = String(country || '').trim().toLowerCase();
  return p === 'all' || c.startsWith('lang-');
}

function shouldUncapAggregateDisplay(platform = (platformSelect ? platformSelect.value : ''), scope = currentScopeValue()) {
  const p = String(platform || '').trim().toLowerCase();
  return p === 'all' || !!getLanguageScopeConfig(scope) || isFavoritesScopeMode(scope);
}


function getAggregateVisibleCap() {
  return Math.max(AGGREGATE_AUTO_LOAD_BATCH, Number(aggregateVisibleLimit) || AGGREGATE_AUTO_LOAD_BATCH);
}

function getRenderDataCap() {
  if (shouldUncapAggregateDisplay()) return Number.POSITIVE_INFINITY;
  if (shouldUncapSinglePlatformDisplay()) return Number.POSITIVE_INFINITY;
  return getPlatformRankCap();
}

function getUiVisibleCap() {
  return shouldUncapAggregateDisplay() ? getAggregateVisibleCap() : visibleLimit;
}


function getTrendCompareCap() {
  if (shouldUncapAggregateDisplay()) return Number.POSITIVE_INFINITY;
  if (shouldUncapSinglePlatformDisplay()) return Number.POSITIVE_INFINITY;
  return getPlatformRankCap();
}

function resetAggregateVisibleLimit() {
  aggregateVisibleLimit = AGGREGATE_AUTO_LOAD_BATCH;
}

function maybeLoadMoreAggregateRows() {
  if (!shouldUncapAggregateDisplay()) return false;
  if (!chartContainer) return false;
  if (searchInput && searchInput.value.trim()) return false;

  const rows = Array.from(document.querySelectorAll('.chart-row:not(.chart-ad)'));
  const totalRows = rows.length;
  if (!totalRows) return false;

  const currentlyVisible = rows.reduce((n, row) => n + (row.classList.contains('hidden') ? 0 : 1), 0);
  if (currentlyVisible >= totalRows) return false;

  const visibleRowsOnly = rows.filter((row) => !row.classList.contains('hidden'));
  const triggerRow = visibleRowsOnly[visibleRowsOnly.length - 1];
  if (!triggerRow) return false;

  const rect = triggerRow.getBoundingClientRect();
  if (rect.top > (window.innerHeight || 800) + 180) return false;

  aggregateVisibleLimit = Math.min(totalRows, getAggregateVisibleCap() + AGGREGATE_AUTO_LOAD_BATCH);
  applyFilterAndLimit();
  return true;
}

function normalizeSnapshotItems(items, options = {}) {
  const cap = Number.isFinite(Number(options.cap)) ? Number(options.cap) : 100;
  const list = Array.isArray(items) ? items : [];
  const source = Number.isFinite(cap) ? list.slice(0, Math.max(0, cap)) : list;
  return source.map((item, index) => ({
    rank: Number(item.rank) || (index + 1),
    title: String(item.title || '').trim(),
    publisher: String(item.publisher || '').trim(),
    image: String(item.image || '').trim(),
    url: String(item.url || '').trim(),
    embedUrl: String(item.embedUrl || '').trim(),
    embedPlatform: String(item.embedPlatform || '').trim().toLowerCase(),
    embedKind: String(item.embedKind || '').trim().toLowerCase()
  })).filter((item) => item.title);
}

function resolveSnapshotWriteMeta(platform, payload, fetchedAt, chartFingerprint, latestExisting) {
  const safePlatform = String(platform || '').trim().toLowerCase();

  if (safePlatform === 'apple') {
    const sourceUpdatedAt = extractAppleSourceUpdated(payload);
    const snapshotDate = extractIsoDateKey(sourceUpdatedAt) || getApplePlatformDateKey(fetchedAt);
    return {
      snapshotDate,
      storageDateBasis: sourceUpdatedAt ? 'apple-feed-updated' : 'apple-pacific-observed',
      sourceUpdatedAt
    };
  }

  const snapshotDate = getStorageDateKey(fetchedAt);
  const latestFingerprint = latestExisting
    ? (String(latestExisting.chartFingerprint || '').trim() || buildSnapshotFingerprint(Array.isArray(latestExisting.items) ? latestExisting.items : []))
    : '';

  if (latestExisting && latestFingerprint && latestFingerprint === chartFingerprint) {
    return {
      snapshotDate: String(latestExisting.snapshotDate || snapshotDate),
      storageDateBasis: String(latestExisting.storageDateBasis || '').trim() || 'observed-utc',
      sourceUpdatedAt: String(latestExisting.sourceUpdatedAt || '').trim()
    };
  }

  return {
    snapshotDate,
    storageDateBasis: 'observed-utc',
    sourceUpdatedAt: ''
  };
}

async function saveDailySnapshot(platform, country, type, items, snapshotOptions = Date.now()) {
  const keepAll = isAggregateSnapshotCombo(platform, country);
  const keepUncappedSingle = shouldUncapSinglePlatformDisplay(platform, type);
  const options = (snapshotOptions && typeof snapshotOptions === 'object' && !Array.isArray(snapshotOptions))
    ? snapshotOptions
    : { fetchedAt: snapshotOptions };
  const fetchedAt = Number(options.fetchedAt || Date.now()) || Date.now();
  const payload = options.payload && typeof options.payload === 'object' ? options.payload : null;
  const normalized = normalizeSnapshotItems(items, {
    cap: (keepAll || keepUncappedSingle) ? Number.POSITIVE_INFINITY : getPlatformRankCap(platform, type)
  });
  if (!normalized.length) return false;

  const comboKey = comboKeyFor(platform, country, type);
  const chartFingerprint = buildSnapshotFingerprint(normalized);

  let existingRows = [];
  try {
    existingRows = await idbGetAllByIndex(IDB_SNAPSHOT_STORE, 'comboKey', comboKey);
  } catch (error) {
    console.warn('IndexedDB snapshot compare read failed:', error);
    existingRows = snapshotRowsCache.get(comboKey) || [];
  }

  const latestExisting = pickLatestSnapshotRecord(existingRows);
  const latestFingerprint = latestExisting
    ? (String(latestExisting.chartFingerprint || '').trim() || buildSnapshotFingerprint(Array.isArray(latestExisting.items) ? latestExisting.items : []))
    : '';
  const snapshotMeta = resolveSnapshotWriteMeta(platform, payload, fetchedAt, chartFingerprint, latestExisting);
  const snapshotDate = String(snapshotMeta.snapshotDate || getStorageDateKey(fetchedAt)).trim() || getStorageDateKey(fetchedAt);

  const id = `${comboKey}::${snapshotDate}`;

  const record = {
    id,
    comboKey,
    platform,
    country,
    type,
    snapshotDate,
    fetchedAt,
    savedAt: Date.now(),
    chartFingerprint,
    storageDateBasis: String(snapshotMeta.storageDateBasis || '').trim() || 'observed-utc',
    sourceUpdatedAt: String(snapshotMeta.sourceUpdatedAt || '').trim(),
    items: normalized
  };

  try {
    await idbPut(IDB_SNAPSHOT_STORE, record);

    const nextRows = (Array.isArray(existingRows) ? existingRows : [])
      .filter((row) => row && row.id !== id);
    nextRows.push(record);
    snapshotRowsCache.set(comboKey, nextRows);

    return true;
  } catch (error) {
    console.warn('IndexedDB snapshot write failed:', error);
    return false;
  }
}

function parseDateKey(dateKey) {
  const m = String(dateKey || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]) - 1;
  const d = Number(m[3]);
  const dt = new Date(y, mo, d);
  if (Number.isNaN(dt.getTime())) return null;
  dt.setHours(0, 0, 0, 0);
  return dt;
}

function getDateKeyOffset(baseDateKey, offsetDays) {
  const dt = parseDateKey(baseDateKey) || new Date();
  dt.setHours(0, 0, 0, 0);
  dt.setDate(dt.getDate() + offsetDays);
  return getLocalDateKey(dt.getTime());
}

function getSelectedHistoryDateKey() {
  if (!dateSelect) return '';
  return String(dateSelect.value || dateSelect.dataset.pendingValue || '').trim();
}

function getHistoryAnchorDateKey() {
  return getSelectedHistoryDateKey() || getStorageDateKey();
}

function getPeriodWindowStartDate(period, anchorDateKey = getHistoryAnchorDateKey()) {
  const map = { week: 7, month: 30, year: 365 };
  const days = map[period];
  if (!days) return null;
  return getDateKeyOffset(anchorDateKey, -(days - 1));
}

function filterSnapshotsForPeriod(snapshots, period, anchorDateKey = getHistoryAnchorDateKey()) {
  const endKey = String(anchorDateKey || '');
  const rows = snapshots.filter((row) => {
    const key = String(row && row.snapshotDate ? row.snapshotDate : '');
    return key && (!endKey || key <= endKey);
  });

  if (period === 'all') return rows;
  if (period === 'daily') {
    if (!endKey) return rows;
    return rows.filter((row) => String(row.snapshotDate || '') === endKey);
  }

  const startDateKey = getPeriodWindowStartDate(period, endKey || getStorageDateKey());
  if (!startDateKey) return rows;
  return rows.filter((row) => String(row.snapshotDate || '') >= startDateKey);
}

function aggregateSnapshotsToItems(snapshots) {
  const rows = snapshots.slice().sort((a, b) => String(a.snapshotDate || '').localeCompare(String(b.snapshotDate || '')));
  const dedupedRows = [];
  let prevFingerprint = '';
  let prevFetchedAt = 0;

  rows.forEach((snapshot) => {
    const fingerprint = String(snapshot && snapshot.chartFingerprint ? snapshot.chartFingerprint : '').trim() || buildSnapshotFingerprint(Array.isArray(snapshot && snapshot.items) ? snapshot.items : []);
    const fetchedAt = Number(snapshot && (snapshot.fetchedAt || snapshot.savedAt) || 0);

    if (fingerprint && prevFingerprint === fingerprint && fetchedAt && prevFetchedAt && Math.abs(fetchedAt - prevFetchedAt) < 18 * 60 * 60 * 1000) {
      return;
    }

    prevFingerprint = fingerprint;
    prevFetchedAt = fetchedAt;
    dedupedRows.push(snapshot);
  });

  const map = new Map();

  dedupedRows.forEach((snapshot) => {
    const dayKey = String(snapshot.snapshotDate || '');
    const list = Array.isArray(snapshot.items) ? snapshot.items : [];

    list.forEach((item, index) => {
      const rank = Number(item.rank) || (index + 1);
      const points = scoreFromRank(rank);
      if (!points) return;

      const key = item.url || `${item.title}::${item.publisher}`;
      if (!key) return;

      const prev = map.get(key) || {
        key,
        title: item.title || '',
        publisher: item.publisher || '',
        image: item.image || '',
        url: item.url || '',
        embedUrl: item.embedUrl || '',
        embedPlatform: item.embedPlatform || '',
        embedKind: item.embedKind || '',
        points: 0,
        appearances: 0,
        bestRank: 999,
        latestDate: '',
        latestRank: 999
      };

      prev.points += points;
      prev.appearances += 1;
      prev.bestRank = Math.min(prev.bestRank, rank);

      if (dayKey >= prev.latestDate) {
        prev.latestDate = dayKey;
        prev.latestRank = rank;
        prev.title = item.title || prev.title;
        prev.publisher = item.publisher || prev.publisher;
        prev.image = item.image || prev.image;
        prev.url = item.url || prev.url;
        prev.embedUrl = item.embedUrl || prev.embedUrl;
        prev.embedPlatform = item.embedPlatform || prev.embedPlatform;
        prev.embedKind = item.embedKind || prev.embedKind;
      }

      map.set(key, prev);
    });
  });

  return Array.from(map.values())
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.appearances !== a.appearances) return b.appearances - a.appearances;
      if (a.bestRank !== b.bestRank) return a.bestRank - b.bestRank;
      if (a.latestRank !== b.latestRank) return a.latestRank - b.latestRank;
      return String(a.title).localeCompare(String(b.title));
    })
    .slice(0, Number.isFinite(getRenderDataCap()) ? getRenderDataCap() : undefined)
    .map((item, index) => ({
      rank: index + 1,
      title: item.title || '',
      publisher: item.publisher || '',
      image: item.image || '',
      url: item.url || '',
      embedUrl: item.embedUrl || '',
      embedPlatform: item.embedPlatform || '',
      embedKind: item.embedKind || ''
    }))
    .filter((item) => item.title);
}

function getSnapshotDatesDesc(snapshots) {
  return Array.from(new Set(
    (Array.isArray(snapshots) ? snapshots : [])
      .map((row) => String(row && row.snapshotDate ? row.snapshotDate : ''))
      .filter(Boolean)
  )).sort((a, b) => b.localeCompare(a));
}

function resolveCurrentSnapshotDateKey(snapshots, preferredDateKey = '') {
  const dates = getSnapshotDatesDesc(snapshots);
  if (!dates.length) return '';
  const preferred = String(preferredDateKey || '').trim();
  if (preferred && dates.includes(preferred)) return preferred;
  return dates[0] || '';
}

function getPreviousSnapshotDateKey(snapshots, currentDateKey) {
  const current = String(currentDateKey || '').trim();
  if (!current) return '';
  const dates = getSnapshotDatesDesc(snapshots);
  return dates.find((d) => d < current) || '';
}

function pickSnapshotRecordByDate(snapshots, dateKey) {
  const target = String(dateKey || '').trim();
  if (!target) return null;
  const rows = (Array.isArray(snapshots) ? snapshots : [])
    .filter((row) => String((row && row.snapshotDate) || '') === target);
  return pickLatestSnapshotRecord(rows);
}

function buildRankTrendMap(currentItems, previousItems) {
  const currentList = Array.isArray(currentItems) ? currentItems : [];
  const prevList = Array.isArray(previousItems) ? previousItems : [];
  if (!currentList.length || !prevList.length) return null;
  const cap = getTrendCompareCap();
  const prevScan = Number.isFinite(cap) ? prevList.slice(0, cap) : prevList;
  const currScan = Number.isFinite(cap) ? currentList.slice(0, cap) : currentList;

  const prevRankMap = new Map();
  prevScan.forEach((item, index) => {
    const key = normalizeCrossPlatformKeyPart(item && item.title);
    if (!key || prevRankMap.has(key)) return;
    prevRankMap.set(key, Number(item && item.rank) || (index + 1));
  });
  if (!prevRankMap.size) return null;

  const trendMap = new Map();
  currScan.forEach((item, index) => {
    const key = normalizeCrossPlatformKeyPart(item && item.title);
    if (!key || trendMap.has(key)) return;
    const currentRank = Number(item && item.rank) || (index + 1);
    const prevRank = prevRankMap.get(key);
    if (!Number.isFinite(prevRank)) trendMap.set(key, 'up');
    else if (currentRank < prevRank) trendMap.set(key, 'up');
    else if (currentRank > prevRank) trendMap.set(key, 'down');
    else trendMap.set(key, 'same');
  });

  return trendMap.size ? trendMap : null;
}

function buildDailyRankTrendMapFromSnapshots(snapshots, selectedDateKey = '', currentItemsOverride = null) {
  const currentDateKey = resolveCurrentSnapshotDateKey(snapshots, selectedDateKey);
  if (!currentDateKey) return null;

  const previousDateKey = getPreviousSnapshotDateKey(snapshots, currentDateKey);
  if (!previousDateKey) return null;

  const currentItems = (Array.isArray(currentItemsOverride) && currentItemsOverride.length)
    ? currentItemsOverride
    : snapshotRecordToRenderItems(pickSnapshotRecordByDate(snapshots, currentDateKey));
  const previousItems = snapshotRecordToRenderItems(pickSnapshotRecordByDate(snapshots, previousDateKey));

  return buildRankTrendMap(currentItems, previousItems);
}

function buildAggregateRankTrendMapFromSnapshots(snapshots, period, anchorDateKey, currentItemsOverride = null) {
  const currentDateKey = resolveCurrentSnapshotDateKey(snapshots, anchorDateKey);
  if (!currentDateKey) return null;

  const previousDateKey = getPreviousSnapshotDateKey(snapshots, currentDateKey);
  if (!previousDateKey) return null;

  const currentItems = (Array.isArray(currentItemsOverride) && currentItemsOverride.length)
    ? currentItemsOverride
    : aggregateSnapshotsToItems(filterSnapshotsForPeriod(snapshots, period, currentDateKey));
  const previousItems = aggregateSnapshotsToItems(filterSnapshotsForPeriod(snapshots, period, previousDateKey));

  return buildRankTrendMap(currentItems, previousItems);
}

function snapshotRecordToRenderItems(snapshot) {
  const list = snapshot && Array.isArray(snapshot.items) ? snapshot.items : [];
  const cap = getRenderDataCap();
  const source = Number.isFinite(cap) ? list.slice(0, cap) : list;
  return source.map((item, index) => ({
    rank: Number(item.rank) || (index + 1),
    title: String(item.title || '').trim(),
    publisher: String(item.publisher || '').trim(),
    image: String(item.image || '').trim(),
    url: String(item.url || '').trim(),
    embedUrl: String(item.embedUrl || '').trim(),
    embedPlatform: String(item.embedPlatform || '').trim().toLowerCase(),
    embedKind: String(item.embedKind || '').trim().toLowerCase()
  })).filter((item) => item.title);
}

async function getSnapshotsForCurrentSelection() {
  const key = comboKeyForCurrent();

  try {
    const rows = await idbGetAllByIndex(IDB_SNAPSHOT_STORE, 'comboKey', key);
    const normalizedRows = Array.isArray(rows) ? rows : [];
    snapshotRowsCache.set(key, normalizedRows);
    return normalizedRows;
  } catch (error) {
    console.warn('IndexedDB snapshot read failed:', error);
    return (snapshotRowsCache.get(key) || []).slice();
  }
}

function hasHttpUrl(value) {
  return /^https?:\/\//i.test(String(value || '').trim());
}

function isLikelyFallbackImage(value) {
  const raw = String(value || '').trim();
  if (!raw) return true;
  if (!hasHttpUrl(raw)) return true;
  return /\/logo\.webp(?:[?#]|$)/i.test(raw);
}

function shouldApplyDataBackfill(platform, type) {
  const safePlatform = String(platform || '').trim().toLowerCase();
  const safeType = String(type || '').trim().toLowerCase();

  if (safePlatform !== 'rtlplus' && safeType !== 'top-podcasts' && safeType !== 'top-episodes') {
    return false;
  }

  const backfillPlatforms = [
    'ximalaya', 'amazonmusic', 'audible', 'iheartradio', 'siriusxm',
    'pandora', 'podcastapp', 'tunein', 'podbbang', 'audioclip', 'ardsounds', 'radiofrance',
    'bbcsounds', 'deezer', 'abclisten', 'nrk', 'yleareena',
    'sverigesradio', 'radionet', 'podcastaddict', 'radiko', 'orfsound', 'raiplaysound', 'srfaudio', 'drlyd', 'rtbfauvio', 'rneaudio', 'npoluister',
    'ivoox', 'podimo', 'rtlplus'
  ];

  return backfillPlatforms.includes(safePlatform);
}

async function buildDataBackfillMapFromSnapshots(country, type = 'top-podcasts') {
  const safeType = normalizeTopType(type);
  if (safeType !== 'top-podcasts' && safeType !== 'top-episodes') return new Map();

  const now = Date.now();
  const cacheKey = `${country}_${safeType}`;
  const cached = dataBackfillCache.get(cacheKey);

  if (cached && cached.map instanceof Map && (now - Number(cached.updatedAt || 0)) < JAPAN_BACKFILL_CACHE_TTL_MS) {
    return cached.map;
  }

  const byTitle = new Map();
  const backfillSources = ['apple', 'spotify'];

  for (const sourcePlatform of backfillSources) {
    const comboKey = comboKeyFor(sourcePlatform, country, safeType);
    let rows = [];
    try {
      rows = await idbGetAllByIndex(IDB_SNAPSHOT_STORE, 'comboKey', comboKey);
    } catch (error) {
      console.warn('Data backfill snapshot read failed:', sourcePlatform, error);
    }

    if (!Array.isArray(rows) || !rows.length) {
      try {
        console.log(`Missing backfill snapshot for ${sourcePlatform} (${country}), fetching live...`);
        await fetchCountryPlatformItemsWithCache(sourcePlatform, safeType, country);
        rows = await idbGetAllByIndex(IDB_SNAPSHOT_STORE, 'comboKey', comboKey);
      } catch (error) {
        console.warn(`Failed to live-fetch backfill for ${sourcePlatform}:`, error);
      }
    }

    if (Array.isArray(rows)) snapshotRowsCache.set(comboKey, rows);

    const sortedRows = (rows || []).slice().sort(compareSnapshotRecency);
    for (const row of sortedRows) {
      const list = Array.isArray(row && row.items) ? row.items : [];
      for (const item of list) {
        const key = normalizeCrossPlatformKeyPart(item && item.title);
        if (!key) continue;

        const nextImage = String(item && item.image ? item.image : '').trim();
        const nextUrl = String(item && item.url ? item.url : '').trim();
        const nextEmbedUrl = String(item && item.embedUrl ? item.embedUrl : '').trim();
        const nextEmbedPlatform = String(item && item.embedPlatform ? item.embedPlatform : sourcePlatform).trim().toLowerCase();
        const nextEmbedKind = String(item && item.embedKind ? item.embedKind : safeType).trim().toLowerCase();

        const entry = byTitle.get(key) || {
          image: '',
          url: '',
          embedUrl: '',
          embedPlatform: '',
          embedKind: ''
        };

        if (!entry.image && !isLikelyFallbackImage(nextImage)) {
          entry.image = nextImage;
        }

        if (!entry.url && hasHttpUrl(nextUrl)) {
          entry.url = nextUrl;
          if (hasHttpUrl(nextEmbedUrl) && nextEmbedPlatform) {
            entry.embedUrl = nextEmbedUrl;
            entry.embedPlatform = nextEmbedPlatform;
            entry.embedKind = nextEmbedKind === 'top-episodes' ? 'top-episodes' : 'top-podcasts';
          } else if (nextEmbedPlatform) {
            const embedMeta = buildInlineEmbedMeta(nextEmbedPlatform, safeType, nextUrl);
            if (embedMeta && embedMeta.embedUrl) {
              entry.embedUrl = embedMeta.embedUrl;
              entry.embedPlatform = embedMeta.embedPlatform || nextEmbedPlatform;
              entry.embedKind = embedMeta.embedKind || safeType;
            }
          }
        }

        if (entry.image && entry.url) {
          byTitle.set(key, entry);
          continue;
        }

        byTitle.set(key, entry);
      }
    }
  }

  dataBackfillCache.set(cacheKey, {
    updatedAt: now,
    map: byTitle
  });
  return byTitle;
}

async function enrichItemsFromLocalCacheWithBackfill(items, platform, country, type) {
  const list = Array.isArray(items) ? items : [];
  if (!list.length) return list;
  if (!shouldApplyDataBackfill(platform, type)) return list;

  const backfillMap = await buildDataBackfillMapFromSnapshots(country, type);
  if (!(backfillMap instanceof Map) || !backfillMap.size) return list;

  let changed = false;
  const enriched = list.map((item) => {
    const key = normalizeCrossPlatformKeyPart(item && item.title);
    if (!key) return item;
    const backfill = backfillMap.get(key);
    if (!backfill) return item;

    const next = { ...(item || {}) };
    const hasImage = !isLikelyFallbackImage(next.image);
    const hasUrl = hasHttpUrl(next.url);

    if (!hasImage && !isLikelyFallbackImage(backfill.image)) {
      next.image = backfill.image;
      changed = true;
    }

    if (!hasUrl && hasHttpUrl(backfill.url)) {
      next.url = backfill.url;
      changed = true;
    }

    if ((!next.embedUrl || !next.embedPlatform) && backfill.embedUrl && backfill.embedPlatform) {
      next.embedUrl = backfill.embedUrl;
      next.embedPlatform = backfill.embedPlatform;
      next.embedKind = backfill.embedKind || 'top-podcasts';
      changed = true;
    }

    return next;
  });

  return changed ? enriched : list;
}

function buildHistorySeriesMapFromSnapshots(snapshots, currentItems = [], options = {}) {
  const rows = Array.isArray(snapshots) ? snapshots : [];
  const current = Array.isArray(currentItems) ? currentItems : [];
  const keepAllOut = !!(options && options.includeAllOut);
  if (!rows.length || !current.length) return null;

  const targetKeys = new Set(
    current
      .map((item) => normalizeCrossPlatformKeyPart(item && item.title))
      .filter(Boolean)
  );
  if (!targetKeys.size) return null;

  const groupedByDate = new Map();
  rows.forEach((row) => {
    const day = String((row && row.snapshotDate) || '').trim();
    if (!day) return;
    const prev = groupedByDate.get(day);
    if (!prev || compareSnapshotRecency(row, prev) < 0) {
      groupedByDate.set(day, row);
    }
  });

  const orderedDays = Array.from(groupedByDate.keys()).sort((a, b) => a.localeCompare(b));
  if (!orderedDays.length) return null;

  const OUT_OF_CHART_RANK = 101;
  const result = new Map();
  targetKeys.forEach((key) => result.set(key, []));

  orderedDays.forEach((day) => {
    const snapshot = groupedByDate.get(day);
    const list = Array.isArray(snapshot && snapshot.items) ? snapshot.items : [];
    const dayRankMap = new Map();

    list.forEach((item, index) => {
      const key = normalizeCrossPlatformKeyPart(item && item.title);
      if (!key || !result.has(key) || dayRankMap.has(key)) return;
      const rank = Number(item && item.rank) || (index + 1);
      dayRankMap.set(key, rank);
    });

    targetKeys.forEach((key) => {
      const dayRank = dayRankMap.get(key);
      if (Number.isFinite(dayRank)) {
        result.get(key).push({ dateKey: day, rank: dayRank, out: false });
      } else {
        result.get(key).push({ dateKey: day, rank: OUT_OF_CHART_RANK, out: true });
      }
    });
  });

  if (!keepAllOut) {
    for (const [key, series] of result.entries()) {
      const hasInChartPoint = Array.isArray(series) && series.some((point) => Number(point && point.rank) >= 1 && Number(point && point.rank) <= RANK_SCORE_EXTENDED_MAX);
      if (!hasInChartPoint) {
        result.delete(key);
      }
    }
  }
  return result.size ? result : null;
}

function getHistorySeriesForItem(item) {
  if (!(currentHistorySeriesMap instanceof Map) || !currentHistorySeriesMap.size) return null;
  const key = normalizeCrossPlatformKeyPart(item && item.title);
  if (!key) return null;
  const series = currentHistorySeriesMap.get(key);
  return Array.isArray(series) && series.length ? series : null;
}

function getIntlLocaleTag() {
  const code = pageToLanguage(getCurrentFileName()) || 'en';
  if (code === 'zh-hans') return 'zh-CN';
  if (code === 'zh-hant') return 'zh-TW';
  if (code === 'zh-hk') return 'zh-HK';
  if (code === 'es-419') return 'es-419';
  return code;
}

function getPageDefaultCountryCode() {
  try {
    const select = countrySelect || document.getElementById('country-select');
    if (select) {
      const attrSelected = select.querySelector('option[selected]');
      if (attrSelected && attrSelected.value) return normalizeCountry(attrSelected.value);
      if (select.value) return normalizeCountry(select.value);
    }
  } catch { }
  return 'us';
}

function getDateLocaleTag() {
  const pageCode = String(pageToLanguage(getCurrentFileName()) || 'en').toLowerCase();
  const base = normalizePrimaryLangCode(pageCode);
  const country = String(getPageDefaultCountryCode() || 'us').toUpperCase();
  const manualLocaleMap = {
    'zh-hans': 'zh-CN',
    'zh-hant': 'zh-TW',
    'zh-hk': 'zh-HK',
    'es-419': 'es-MX',
    'es-es': 'es-ES',
    'es-mx': 'es-MX',
    'es-ar': 'es-AR',
    'pt-br': 'pt-BR',
    'pt-pt': 'pt-PT',
    'fr-ca': 'fr-CA',
    'eo': 'eo',
    'la': 'la-VA',
    'ar-eg': 'ar-EG',
    'ar-sa': 'ar-SA',
    'ar-iq': 'ar-IQ',
    'ar-lb': 'ar-LB',
    'ar-ma': 'ar-MA',
    'prs': 'fa-AF',
    'nya': 'en-MW',
    'run': 'rn-BI',
    'to': 'to-TO',
    'st': 'st-ZA',
    'ti': 'ti-ER',
    'tt': 'tt-RU',
    'ryu': 'ja-JP'
  };

  const candidates = [];
  const push = (value) => {
    const tag = String(value || '').trim();
    if (tag && !candidates.includes(tag)) candidates.push(tag);
  };

  push(manualLocaleMap[pageCode]);
  push(base && country ? `${base}-${country}` : '');
  push(getIntlLocaleTag());
  push(base);
  push(country ? `en-${country}` : '');
  push('en-US');

  try {
    if (typeof Intl !== 'undefined' && Intl.DateTimeFormat && typeof Intl.DateTimeFormat.supportedLocalesOf === 'function') {
      const supported = Intl.DateTimeFormat.supportedLocalesOf(candidates);
      if (supported && supported.length) return supported[0];
    }
  } catch { }

  return candidates[0] || 'en-US';
}

function formatDateKeyLocalized(dateKey) {
  const dt = parseDateKey(dateKey);
  if (!dt) return String(dateKey || '');
  try {
    return new Intl.DateTimeFormat(getDateLocaleTag(), {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(dt);
  } catch {
    return dateKey;
  }
}

function getRankTrendSvg(trend) {
  if (trend === 'up') {
    return '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="6.1" fill="currentColor" opacity=".15"/><path d="M8 11V5.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.7 7.6 8 5.3l2.3 2.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  if (trend === 'down') {
    return '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="6.1" fill="currentColor" opacity=".15"/><path d="M8 5V10.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.7 8.4 8 10.7l2.3-2.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  if (trend === 'same') {
    return '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="6.1" fill="currentColor" opacity=".15"/><path d="M5.2 8h5.6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>';
  }
  return '';
}

function getCopyTitleSvg() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g class="copy-icon"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z"/></g><g class="check-icon"><path d="M6.4 12.2 10.25 16.05 17.65 8.65" fill="none" stroke="currentColor" stroke-width="2.15" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
}

function getEpisodePlaySvg() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g class="play-icon"><path fill="currentColor" d="M8.2 5.8c0-1.12 1.22-1.8 2.16-1.2l8.32 5.2c.88.55.88 1.85 0 2.4l-8.32 5.2c-.94.59-2.16-.08-2.16-1.2V5.8Z"/></g><g class="close-icon"><path d="M8 8l8 8M16 8l-8 8" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></g></svg>';
}

function getEpisodeRefreshSvg() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.65 6.35A7.95 7.95 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"/></svg>';
}

function getPlaylistNavSvg(direction) {
  const safeDirection = String(direction || '').trim().toLowerCase();
  const isUp = safeDirection === 'up' || safeDirection === 'prev' || safeDirection === 'previous';
  return isUp
    ? '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m7 14.5 5-5 5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m7 9.5 5 5 5-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function getHistoryChartSvg() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 18h16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".62"/><path d="M5 15.8 9 12.2l3.1 2.3 6.2-6.4" fill="none" stroke="currentColor" stroke-width="2.15" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function getNoteSvg() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 3.8h7.9L20 8.9V18a2.2 2.2 0 0 1-2.2 2.2H7A2.2 2.2 0 0 1 4.8 18V6A2.2 2.2 0 0 1 7 3.8Z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/><path d="M14.8 3.8V8.6H20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/><path d="m9.1 14.9 5.9-5.9 1.7 1.7-5.9 5.9-2.3.6.6-2.3Z" fill="currentColor" opacity=".94"/><path d="M8.4 17.9h7.2" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" opacity=".82"/></svg>';
}

function getSearchCatalogSvg() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="6.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="m16 16 4.2 4.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
}


function getFavoriteHeartSvg() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="heart-outline" d="M12 20.4 4.9 13.9a4.9 4.9 0 0 1 0-7 5.05 5.05 0 0 1 7.1 0L12 7l.02-.02a5.05 5.05 0 0 1 7.1 0 4.9 4.9 0 0 1 0 7L12 20.4Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path class="heart-fill" d="M12 20.4 4.9 13.9a4.9 4.9 0 0 1 0-7 5.05 5.05 0 0 1 7.1 0L12 7l.02-.02a5.05 5.05 0 0 1 7.1 0 4.9 4.9 0 0 1 0 7L12 20.4Z" fill="currentColor"/></svg>';
}

function buildPodcastFallbackCoverDataUri(accent = '#6F8BFF') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" role="img" aria-label="Podcast"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#121b31"/><stop offset="100%" stop-color="#0b1222"/></linearGradient></defs><rect width="300" height="300" rx="40" fill="url(#g)"/><circle cx="150" cy="150" r="74" fill="none" stroke="${accent}" stroke-opacity=".26" stroke-width="14"/><circle cx="150" cy="150" r="44" fill="none" stroke="${accent}" stroke-opacity=".52" stroke-width="14"/><circle cx="150" cy="150" r="13" fill="${accent}"/><rect x="138" y="165" width="24" height="57" rx="12" fill="${accent}" fill-opacity=".94"/><rect x="118" y="218" width="64" height="14" rx="7" fill="${accent}" fill-opacity=".48"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const POCKETCASTS_FALLBACK_COVER = buildPodcastFallbackCoverDataUri('#F43E37');

function isEnglishUiPage() {
  return (pageToLanguage(getCurrentFileName()) || 'en') === 'en';
}

function getCopyTitleActionLabel() {
  const custom = String(uiText.copyTitle || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'Copy title')) return custom;
  return t('copyLink');
}

function getTitleCopiedMessage() {
  const custom = String(uiText.titleCopied || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'Title copied')) return custom;
  return t('linkCopied');
}

function getPlayEpisodeActionLabel() {
  const custom = String(uiText.playEpisode || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'Play episode')) return custom;
  return t('open');
}

function getClosePlayerActionLabel() {
  const custom = String(uiText.closePlayer || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'Close player')) return custom;
  return t('open');
}

function getHistoryActionLabel() {
  const custom = String(uiText.history || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'History')) return custom;
  return t('open');
}

function getCloseHistoryActionLabel() {
  const custom = String(uiText.closeHistory || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'Close history')) return custom;
  return t('open');
}


function getFavoriteActionLabel() {
  const custom = String(uiText.favorite || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'Favorite')) return custom;
  return t('favorite');
}

function getUnfavoriteActionLabel() {
  const custom = String(uiText.unfavorite || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'Unfavorite')) return custom;
  return t('unfavorite');
}

function getFavoriteAddedMessage() {
  const custom = String(uiText.favoriteAdded || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'Saved')) return custom;
  return t('favoriteAdded');
}

function getFavoriteRemovedMessage() {
  const custom = String(uiText.favoriteRemoved || '').trim();
  if (custom && (isEnglishUiPage() || custom !== 'Removed')) return custom;
  return t('favoriteRemoved');
}

function safeUrlParse(raw) {
  try {
    return new URL(String(raw || '').trim());
  } catch {
    return null;
  }
}

function getSpotifyEpisodeEmbedUrl(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  const m = raw.match(/open\.spotify\.com\/episode\/([A-Za-z0-9]+)(?:[/?#]|$)/i);
  if (!m || !m[1]) return '';
  return `https://open.spotify.com/embed/episode/${m[1]}?utm_source=generator`;
}

function getSpotifyShowEmbedUrl(url) {
  const showId = extractSpotifyShowIdFromUrl(url);
  return showId ? buildSpotifyShowAudioEmbedUrl(showId) : '';
}

function extractSpotifyEpisodeIdFromUrl(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  const m =
    raw.match(/open\.spotify\.com\/episode\/([A-Za-z0-9]+)(?:[/?#]|$)/i) ||
    raw.match(/open\.spotify\.com\/embed\/episode\/([A-Za-z0-9]+)(?:[/?#]|$)/i);
  return m && m[1] ? String(m[1]).trim() : '';
}

function extractSpotifyShowIdFromUrl(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  const m =
    raw.match(/open\.spotify\.com\/show\/([A-Za-z0-9]+)(?:[/?#]|$)/i) ||
    raw.match(/open\.spotify\.com\/embed\/show\/([A-Za-z0-9]+)(?:[/?#]|$)/i);
  return m && m[1] ? String(m[1]).trim() : '';
}

function buildSpotifyEpisodeAudioEmbedUrl(episodeId) {
  const id = String(episodeId || '').trim();
  if (!id) return '';
  return `https://open.spotify.com/embed/episode/${id}?utm_source=generator`;
}

function buildSpotifyEpisodeVideoEmbedUrl(episodeId) {
  const id = String(episodeId || '').trim();
  if (!id) return '';
  return `https://open.spotify.com/embed/episode/${id}/video?utm_source=generator`;
}

function buildSpotifyShowAudioEmbedUrl(showId) {
  const id = String(showId || '').trim();
  if (!id) return '';
  return `https://open.spotify.com/embed/show/${id}?utm_source=generator`;
}

function buildSpotifyShowVideoEmbedUrl(showId) {
  const id = String(showId || '').trim();
  if (!id) return '';
  return `https://open.spotify.com/embed/show/${id}/video?utm_source=generator`;
}

function normalizeSpotifyEmbedSource(rawEmbedUrl, fallbackEpisodeId, preferVideo) {
  const raw = String(rawEmbedUrl || '').trim();
  const episodeId = String(fallbackEpisodeId || '').trim();
  if (!episodeId) return '';
  if (!raw) return preferVideo ? buildSpotifyEpisodeVideoEmbedUrl(episodeId) : buildSpotifyEpisodeAudioEmbedUrl(episodeId);
  const base = raw.replace(/([?#].*)$/, '');
  if (preferVideo) {
    const withVideo = base.endsWith('/video') ? base : `${base}/video`;
    return `${withVideo}?utm_source=generator`;
  }
  const noVideo = base.replace(/\/video$/i, '');
  return `${noVideo}?utm_source=generator`;
}

function normalizeSpotifyShowEmbedSource(rawEmbedUrl, fallbackShowId, preferVideo) {
  const raw = String(rawEmbedUrl || '').trim();
  const showId = String(fallbackShowId || '').trim();
  if (!showId) return '';
  if (!raw) return preferVideo ? buildSpotifyShowVideoEmbedUrl(showId) : buildSpotifyShowAudioEmbedUrl(showId);
  const base = raw.replace(/([?#].*)$/, '');
  if (preferVideo) {
    const withVideo = base.endsWith('/video') ? base : `${base}/video`;
    return `${withVideo}?utm_source=generator`;
  }
  const noVideo = base.replace(/\/video$/i, '');
  return `${noVideo}?utm_source=generator`;
}

function getAppleEpisodeEmbedUrl(url) {
  const parsed = safeUrlParse(url);
  if (!parsed) return '';
  const host = parsed.hostname.toLowerCase();
  const hasEpisodeId = parsed.searchParams.get('i');
  if (!hasEpisodeId) return '';
  if (!/podcasts\.apple\.com$/.test(host)) return '';
  parsed.hostname = host.replace(/^embed\./, '').replace(/^/, 'embed.');
  parsed.hash = '';
  return parsed.toString();
}

function getApplePodcastEmbedUrl(url) {
  const parsed = safeUrlParse(url);
  if (!parsed) return '';
  const host = parsed.hostname.toLowerCase();
  if (!/podcasts\.apple\.com$/.test(host)) return '';
  if (!/\/podcast\//i.test(parsed.pathname)) return '';
  parsed.hostname = host.replace(/^embed\./, '').replace(/^/, 'embed.');
  parsed.search = '';
  parsed.hash = '';
  return parsed.toString();
}

function getYoutubeVideoEmbedUrl(url) {
  const parsed = safeUrlParse(url);
  if (!parsed) return '';
  let videoId = '';
  const host = parsed.hostname.toLowerCase();
  if (host.includes('youtube.com')) {
    videoId = parsed.searchParams.get('v') || '';
    if (!videoId) {
      const shorts = parsed.pathname.match(/\/shorts\/([A-Za-z0-9_-]{6,})/);
      if (shorts && shorts[1]) videoId = shorts[1];
    }
    if (!videoId) {
      const embed = parsed.pathname.match(/\/embed\/([A-Za-z0-9_-]{6,})/);
      if (embed && embed[1]) videoId = embed[1];
    }
  } else if (host === 'youtu.be') {
    videoId = parsed.pathname.replace(/^\/+/, '').split('/')[0] || '';
  }
  if (!videoId) return '';
  return `https://www.youtube.com/embed/${videoId}`;
}

function getYoutubePodcastEmbedUrl(url) {
  const parsed = safeUrlParse(url);
  if (!parsed) return '';
  if (/youtube\.com$/i.test(parsed.hostname) || /youtube\.com$/i.test(parsed.hostname.replace(/^www\./, ''))) {
    const listId = parsed.searchParams.get('list');
    if (listId) return `https://www.youtube.com/embed?listType=playlist&list=${encodeURIComponent(listId)}`;
  }
  return getYoutubeVideoEmbedUrl(url);
}

function buildYouTubePlayerHostMarkup(id, videoId, title, extraClass = '', options = {}) {
  const safeId = escapeHtml(String(id || '').trim());
  const safeVideoId = escapeHtml(String(videoId || '').trim());
  const safeTitle = escapeHtml(String(title || 'YouTube player'));
  const safeClass = escapeHtml(String(extraClass || '').trim());
  const safePlaylistId = escapeHtml(String(options.playlistId || '').trim());
  const playlistAttr = safePlaylistId ? ` data-youtube-playlist-id="${safePlaylistId}"` : '';
  return `<div id="${safeId}" class="episode-player-frame youtube youtube-player-host ${safeClass}" data-youtube-video-id="${safeVideoId}"${playlistAttr} data-youtube-title="${safeTitle}"></div>`;
}

function buildInlineEmbedMeta(platform, type, url) {
  const p = String(platform || '').trim().toLowerCase();
  const safeType = String(type || '') === 'top-episodes' ? 'top-episodes' : 'top-podcasts';
  let embedUrl = '';
  if (safeType === 'top-episodes') {
    if (p === 'apple') embedUrl = getAppleEpisodeEmbedUrl(url);
    if (p === 'spotify') embedUrl = getSpotifyEpisodeEmbedUrl(url);
    if (p === 'youtube') embedUrl = getYoutubeVideoEmbedUrl(url);
  } else {
    if (p === 'apple') embedUrl = getApplePodcastEmbedUrl(url);
    if (p === 'spotify') embedUrl = getSpotifyShowEmbedUrl(url);
    if (p === 'youtube') embedUrl = getYoutubePodcastEmbedUrl(url);
  }
  return {
    embedUrl,
    embedPlatform: embedUrl ? p : '',
    embedKind: embedUrl ? safeType : ''
  };
}

function getInlineEmbedFrameHeight(platform, kind) {
  const p = String(platform || '').trim().toLowerCase();
  const safeKind = String(kind || '') === 'top-episodes' ? 'top-episodes' : 'top-podcasts';
  if (p === 'apple') return safeKind === 'top-episodes' ? 175 : 450;
  if (p === 'spotify') return 352;
  if (p === 'bilibili') return 430;
  if (p === 'youtube') return 315;
  return 240;
}

function buildEpisodePlayerIframeMarkup(embedUrl, platform, title, kind, options = {}) {
  const p = String(platform || '').trim().toLowerCase();
  const safeKind = String(kind || '') === 'top-episodes' ? 'top-episodes' : 'top-podcasts';
  const safeUrl = escapeHtml(String(embedUrl || ''));
  const safeTitle = escapeHtml(String(title || (safeKind === 'top-episodes' ? 'Episode player' : 'Podcast player')));
  if (!safeUrl) return '';
  if (p === 'apple') {
    if (safeKind === 'top-episodes') {
      const appleEpisodeMode = String(options.appleEpisodeMode || '').trim().toLowerCase() === 'video' ? 'video' : 'audio';
      const cssClass = `is-episode ${appleEpisodeMode === 'video' ? 'is-video' : 'is-audio'}`;
      return `<div class="episode-player-apple-shell ${cssClass}" data-apple-episode-mode="${appleEpisodeMode}"><iframe class="episode-player-frame apple ${cssClass}" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${safeUrl}" title="${safeTitle}"></iframe></div>`;
    }
    const h = getInlineEmbedFrameHeight(p, safeKind);
    return `<iframe class="episode-player-frame apple is-show" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="${h}" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${safeUrl}" title="${safeTitle}"></iframe>`;
  }
  if (p === 'spotify') {
    const spotifyEpisodeMode = String(options.spotifyEpisodeMode || '').trim().toLowerCase() === 'video' ? 'video' : 'audio';
    const spotifyShowMode = String(options.spotifyShowMode || '').trim().toLowerCase() === 'video' ? 'video' : 'audio';
    const defaultHeight = getInlineEmbedFrameHeight(p, safeKind);
    const dynamicHeight = Number(options.spotifyHeight || 0);
    const h = dynamicHeight > 0 ? dynamicHeight : defaultHeight;
    const cssClass = safeKind === 'top-podcasts'
      ? `is-show ${spotifyShowMode === 'video' ? 'is-video' : 'is-audio'}`
      : `is-episode ${spotifyEpisodeMode === 'video' ? 'is-video' : 'is-audio'}`;
    return `<iframe class="episode-player-frame spotify ${cssClass}" style="border-radius:12px" src="${safeUrl}" width="100%" height="${h}" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="${safeTitle}"></iframe>`;
  }
  if (p === 'bilibili') {
    const h = getInlineEmbedFrameHeight(p, safeKind);
    return `<iframe class="episode-player-frame bilibili is-show" src="${safeUrl}" width="100%" height="${h}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="${safeTitle}"></iframe>`;
  }
  if (p === 'youtube') {
    const ytId = 'yt-player-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    const videoId = extractVideoIdFromEmbedUrl(safeUrl);
    const playlistId = extractPlaylistIdFromEmbedUrl(safeUrl);
    if (videoId || playlistId) {
      return buildYouTubePlayerHostMarkup(
        ytId,
        videoId,
        safeTitle,
        safeKind === 'top-podcasts' ? 'is-show' : 'is-episode',
        { playlistId }
      );
    }
    const ytSrc = safeUrl + (safeUrl.includes('?') ? '&' : '?') + 'enablejsapi=1&origin=' + encodeURIComponent(window.location.origin);
    return `<iframe id="${ytId}" class="episode-player-frame youtube ${safeKind === 'top-podcasts' ? 'is-show' : 'is-episode'}" src="${ytSrc}" title="${safeTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="eager"></iframe>`;
  }
  return '';
}

const SPOTIFY_OEMBED_CACHE_TTL_MS = 30 * 60 * 1000;
const SPOTIFY_OEMBED_CACHE_VERSION = 'v2';
const spotifyOembedCache = new Map();
const spotifyShowOembedCache = new Map();

async function resolveSpotifyEpisodeEmbedMeta(url) {
  const episodeId = extractSpotifyEpisodeIdFromUrl(url);
  if (!episodeId) return null;

  const cacheKey = `${SPOTIFY_OEMBED_CACHE_VERSION}:episode:${episodeId.toLowerCase()}`;
  const now = Date.now();
  const cached = spotifyOembedCache.get(cacheKey);
  if (cached && (now - Number(cached.updatedAt || 0) < SPOTIFY_OEMBED_CACHE_TTL_MS)) {
    return cached.data || null;
  }

  const openUrl = `https://open.spotify.com/episode/${episodeId}`;
  const requestCandidates = [
    `https://open.spotify.com/oembed?url=${encodeURIComponent(`spotify:episode:${episodeId}`)}`,
    `https://open.spotify.com/oembed?url=${encodeURIComponent(openUrl)}`
  ];

  let response = null;
  for (const requestUrl of requestCandidates) {
    try {
      response = await fetch(requestUrl, {
        method: 'GET',
        headers: { 'Accept': 'application/json,text/plain,*/*' }
      });
      if (response && response.ok) break;
    } catch {
      response = null;
    }
  }
  if (!response || !response.ok) return null;

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    return null;
  }
  if (!payload || typeof payload !== 'object') return null;

  const iframeUrl = normalizeSpotifyEmbedSource(payload.iframe_url, episodeId, /video/i.test(String(payload.iframe_url || '')));
  const type = String(payload.type || '').trim().toLowerCase();
  const isVideo = type === 'video' || /\/video(?:[/?#]|$)/i.test(String(payload.iframe_url || ''));
  const height = Number(payload.height || 0);

  const data = {
    episodeId,
    embedUrl: iframeUrl || (isVideo ? buildSpotifyEpisodeVideoEmbedUrl(episodeId) : buildSpotifyEpisodeAudioEmbedUrl(episodeId)),
    isVideo,
    title: String(payload.title || '').trim(),
    publisher: String(payload.author_name || '').trim(),
    image: String(payload.thumbnail_url || '').trim(),
    height: isVideo
      ? (Number.isFinite(height) && height > 0 ? height : 351)
      : 352
  };

  spotifyOembedCache.set(cacheKey, { updatedAt: now, data });
  return data;
}

async function resolveSpotifyShowEmbedMeta(url) {
  const showId = extractSpotifyShowIdFromUrl(url);
  if (!showId) return null;

  const cacheKey = `${SPOTIFY_OEMBED_CACHE_VERSION}:show:${showId.toLowerCase()}`;
  const now = Date.now();
  const cached = spotifyShowOembedCache.get(cacheKey);
  if (cached && (now - Number(cached.updatedAt || 0) < SPOTIFY_OEMBED_CACHE_TTL_MS)) {
    return cached.data || null;
  }

  const openUrl = `https://open.spotify.com/show/${showId}`;
  const requestCandidates = [
    `https://open.spotify.com/oembed?url=${encodeURIComponent(`spotify:show:${showId}`)}`,
    `https://open.spotify.com/oembed?url=${encodeURIComponent(openUrl)}`
  ];

  let response = null;
  for (const requestUrl of requestCandidates) {
    try {
      response = await fetch(requestUrl, {
        method: 'GET',
        headers: { 'Accept': 'application/json,text/plain,*/*' }
      });
      if (response && response.ok) break;
    } catch {
      response = null;
    }
  }
  if (!response || !response.ok) return null;

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    return null;
  }
  if (!payload || typeof payload !== 'object') return null;

  const iframeRaw = String(payload.iframe_url || '').trim();
  const type = String(payload.type || '').trim().toLowerCase();
  const isVideo = type === 'video' || /\/video(?:[/?#]|$)/i.test(iframeRaw);
  const iframeUrl = normalizeSpotifyShowEmbedSource(iframeRaw, showId, isVideo);
  const height = Number(payload.height || 0);

  const data = {
    showId,
    embedUrl: iframeUrl || (isVideo ? buildSpotifyShowVideoEmbedUrl(showId) : buildSpotifyShowAudioEmbedUrl(showId)),
    isVideo,
    title: String(payload.title || '').trim(),
    publisher: String(payload.author_name || '').trim(),
    image: String(payload.thumbnail_url || '').trim(),
    height: Number.isFinite(height) && height > 0
      ? height
      : (isVideo ? 351 : 352)
  };

  spotifyShowOembedCache.set(cacheKey, { updatedAt: now, data });
  return data;
}

const APPLE_EPISODE_META_CACHE_TTL_MS = 30 * 60 * 1000;
const APPLE_EPISODE_META_CACHE_VERSION = 'v3';
const appleEpisodeMetaCache = new Map();
const appleEpisodeMetaPending = new Map();

function extractAppleEpisodeIdsFromEmbedUrl(url) {
  const parsed = safeUrlParse(url);
  if (!parsed) return null;
  const host = String(parsed.hostname || '').trim().toLowerCase().replace(/^www\./, '');
  if (!/podcasts\.apple\.com$/.test(host)) return null;
  const showMatch = parsed.pathname.match(/\/id(\d+)(?:[/?#]|$)/i);
  const episodeId = String(parsed.searchParams.get('i') || '').trim();
  if (!showMatch || !showMatch[1] || !episodeId) return null;
  return {
    showId: String(showMatch[1]).trim(),
    episodeId
  };
}

function buildAppleEpisodePageUrlFromEmbedUrl(url) {
  const parsed = safeUrlParse(url);
  if (!parsed) return '';
  const host = String(parsed.hostname || '').trim();
  if (!host) return '';
  const normalizedHost = host.replace(/^embed\./i, '').replace(/^www\./i, '');
  if (!/podcasts\.apple\.com$/i.test(normalizedHost)) return '';
  const path = String(parsed.pathname || '').trim();
  const query = String(parsed.search || '').trim();
  return `https://${normalizedHost}${path}${query}`;
}

async function fetchAppleEpisodeOEmbedMeta(url, timeoutMs = 9000) {
  const pageUrl = buildAppleEpisodePageUrlFromEmbedUrl(url);
  if (!pageUrl) return null;

  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = controller
    ? setTimeout(() => controller.abort(), Math.max(3000, Number(timeoutMs) || 9000))
    : null;

  try {
    const response = await fetch(`https://podcasts.apple.com/api/oembed?url=${encodeURIComponent(pageUrl)}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json,text/plain,*/*' },
      signal: controller ? controller.signal : undefined
    });
    if (!response || !response.ok) return null;

    let payload = null;
    try {
      payload = await response.json();
    } catch {
      return null;
    }
    if (!payload || typeof payload !== 'object') return null;

    const html = String(payload.html || '').trim();
    const heightMatch = html.match(/\bheight=(['"]?)(\d+)\1/i);
    const heightFromHtml = heightMatch && heightMatch[2] ? Number(heightMatch[2]) : 0;
    const payloadHeight = Number(payload.height || 0);
    const height = Number.isFinite(heightFromHtml) && heightFromHtml > 0
      ? heightFromHtml
      : (Number.isFinite(payloadHeight) && payloadHeight > 0 ? payloadHeight : 0);
    if (!Number.isFinite(height) || height <= 0) return null;

    return {
      height,
      isVideo: height >= 300,
      title: String(payload.title || '').trim(),
      publisher: String(payload.author_name || payload.provider_name || '').trim(),
      image: String(payload.thumbnail_url || '').trim()
    };
  } catch {
    return null;
  } finally {
    if (timer) clearTimeout(timer);
  }
}

function extractApplePodcastIdFromUrl(url) {
  const parsed = safeUrlParse(url);
  if (!parsed) return '';
  const host = String(parsed.hostname || '').trim().toLowerCase().replace(/^www\./, '');
  if (!/podcasts\.apple\.com$/.test(host)) return '';
  const showMatch = parsed.pathname.match(/\/id(\d+)(?:[/?#]|$)/i);
  return showMatch && showMatch[1] ? String(showMatch[1]).trim() : '';
}

function lookupApplePodcastByJsonp(showId, countryCode, timeoutMs = 9000) {
  return new Promise((resolve, reject) => {
    const id = String(showId || '').trim();
    if (!id) {
      reject(new Error('Missing showId'));
      return;
    }
    const callbackName = '__podcastAppleShowMetaCb_' + id + '_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
    const script = document.createElement('script');
    let done = false;

    const cleanup = () => {
      if (done) return;
      done = true;
      try { delete window[callbackName]; } catch { window[callbackName] = undefined; }
      if (script && script.parentNode) script.parentNode.removeChild(script);
      if (timer) clearTimeout(timer);
    };

    const timer = setTimeout(() => {
      cleanup();
      reject(new Error('Apple podcast JSONP timeout'));
    }, Math.max(3000, Number(timeoutMs) || 9000));

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload || null);
    };

    script.async = true;
    script.src =
      'https://itunes.apple.com/lookup?id=' +
      encodeURIComponent(id) +
      '&country=' +
      encodeURIComponent(normalizeCountry(countryCode || 'us')) +
      '&callback=' +
      encodeURIComponent(callbackName);
    script.onerror = () => {
      cleanup();
      reject(new Error('Apple podcast JSONP network error'));
    };

    document.head.appendChild(script);
  });
}

async function resolveApplePodcastImportMeta(url, countryCode) {
  const showId = extractApplePodcastIdFromUrl(url);
  if (!showId) return null;
  let payload = null;
  try {
    payload = await lookupApplePodcastByJsonp(showId, countryCode);
  } catch {
    payload = null;
  }
  if (!payload || typeof payload !== 'object') return null;
  const results = Array.isArray(payload.results) ? payload.results : [];
  const target = results.find((item) => String(item && (item.collectionId || item.trackId) || '') === showId) || results[0];
  if (!target || typeof target !== 'object') return null;
  return {
    showId,
    title: String(target.collectionName || target.trackName || '').trim(),
    publisher: String(target.artistName || '').trim(),
    image: normalizeAppleArtworkUrl300(
      target.artworkUrl600 || target.artworkUrl100 || target.artworkUrl60 || ''
    ),
    feedUrl: String(target.feedUrl || '').trim()
  };
}

function lookupAppleEpisodesByJsonp(showId, timeoutMs = 9000) {
  return new Promise((resolve, reject) => {
    const id = String(showId || '').trim();
    if (!id) {
      reject(new Error('Missing showId'));
      return;
    }
    const callbackName = '__podcastAppleEpisodeMetaCb_' + id + '_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
    const script = document.createElement('script');
    let done = false;

    const cleanup = () => {
      if (done) return;
      done = true;
      try { delete window[callbackName]; } catch { window[callbackName] = undefined; }
      if (script && script.parentNode) script.parentNode.removeChild(script);
      if (timer) clearTimeout(timer);
    };

    const timer = setTimeout(() => {
      cleanup();
      reject(new Error('Apple episode JSONP timeout'));
    }, Math.max(3000, Number(timeoutMs) || 9000));

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload || null);
    };

    script.async = true;
    script.src = 'https://itunes.apple.com/lookup?id=' + encodeURIComponent(id) + '&entity=podcastEpisode&limit=200&callback=' + encodeURIComponent(callbackName);
    script.onerror = () => {
      cleanup();
      reject(new Error('Apple episode JSONP network error'));
    };

    document.head.appendChild(script);
  });
}

function lookupAppleTrackByJsonp(trackId, countryCode, timeoutMs = 9000) {
  return new Promise((resolve, reject) => {
    const id = String(trackId || '').trim();
    if (!id) {
      reject(new Error('Missing trackId'));
      return;
    }
    const callbackName = '__podcastAppleTrackMetaCb_' + id + '_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
    const script = document.createElement('script');
    let done = false;

    const cleanup = () => {
      if (done) return;
      done = true;
      try { delete window[callbackName]; } catch { window[callbackName] = undefined; }
      if (script && script.parentNode) script.parentNode.removeChild(script);
      if (timer) clearTimeout(timer);
    };

    const timer = setTimeout(() => {
      cleanup();
      reject(new Error('Apple track JSONP timeout'));
    }, Math.max(3000, Number(timeoutMs) || 9000));

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload || null);
    };

    script.async = true;
    script.src =
      'https://itunes.apple.com/lookup?id=' +
      encodeURIComponent(id) +
      '&country=' +
      encodeURIComponent(normalizeCountry(countryCode || 'us')) +
      '&callback=' +
      encodeURIComponent(callbackName);
    script.onerror = () => {
      cleanup();
      reject(new Error('Apple track JSONP network error'));
    };

    document.head.appendChild(script);
  });
}

async function resolveAppleEpisodeEmbedMeta(url) {
  const ids = extractAppleEpisodeIdsFromEmbedUrl(url);
  if (!ids) return null;

  const cacheKey = `${APPLE_EPISODE_META_CACHE_VERSION}:${ids.showId}:${ids.episodeId}`;
  const now = Date.now();
  const cached = appleEpisodeMetaCache.get(cacheKey);
  if (cached && (now - Number(cached.updatedAt || 0) < APPLE_EPISODE_META_CACHE_TTL_MS)) {
    return cached.data || null;
  }
  if (appleEpisodeMetaPending.has(cacheKey)) return appleEpisodeMetaPending.get(cacheKey);

  const task = (async () => {
    let oembedMeta = null;
    try {
      oembedMeta = await fetchAppleEpisodeOEmbedMeta(url);
    } catch {
      oembedMeta = null;
    }
    if (oembedMeta && typeof oembedMeta === 'object') {
      const directData = {
        showId: ids.showId,
        episodeId: ids.episodeId,
        isVideo: !!oembedMeta.isVideo,
        kind: '',
        episodeContentType: oembedMeta.isVideo ? 'video' : 'audio',
        episodeFileExtension: '',
        title: String(oembedMeta.title || '').trim(),
        publisher: String(oembedMeta.publisher || '').trim(),
        image: String(oembedMeta.image || '').trim(),
        oembedHeight: Number(oembedMeta.height || 0)
      };
      appleEpisodeMetaCache.set(cacheKey, { updatedAt: now, data: directData });
      return directData;
    }

    let trackPayload = null;
    try {
      trackPayload = await lookupAppleTrackByJsonp(ids.episodeId, normalizeCountry(countrySelect && countrySelect.value ? countrySelect.value : 'us'));
    } catch {
      trackPayload = null;
    }
    if (trackPayload && typeof trackPayload === 'object') {
      const trackResults = Array.isArray(trackPayload.results) ? trackPayload.results : [];
      const exactTrack = trackResults.find((item) => String(item && (item.trackId || '') || '') === ids.episodeId) || trackResults[0];
      if (exactTrack && typeof exactTrack === 'object') {
        const contentType = String(exactTrack.episodeContentType || '').trim().toLowerCase();
        const ext = String(exactTrack.episodeFileExtension || '').trim().toLowerCase();
        const isVideo = contentType === 'video' || ext === 'mp4';
        const directData = {
          showId: ids.showId,
          episodeId: ids.episodeId,
          isVideo,
          kind: String(exactTrack.kind || '').trim().toLowerCase(),
          episodeContentType: contentType,
          episodeFileExtension: ext,
          title: String(exactTrack.trackName || exactTrack.collectionName || '').trim(),
          publisher: String(exactTrack.artistName || exactTrack.collectionArtistName || '').trim(),
          image: normalizeAppleArtworkUrl300(
            exactTrack.artworkUrl600 || exactTrack.artworkUrl160 || exactTrack.artworkUrl100 || exactTrack.artworkUrl60 || ''
          )
        };
        appleEpisodeMetaCache.set(cacheKey, { updatedAt: now, data: directData });
        return directData;
      }
    }

    let payload = null;
    try {
      payload = await lookupAppleEpisodesByJsonp(ids.showId);
    } catch {
      payload = null;
    }

    if (!payload || typeof payload !== 'object') return null;

    const results = Array.isArray(payload.results) ? payload.results : [];
    const target = results.find(item => String(item && item.trackId ? item.trackId : '') === ids.episodeId);
    if (!target || typeof target !== 'object') {
      const data = { showId: ids.showId, episodeId: ids.episodeId, isVideo: false, kind: '', image: '', title: '', publisher: '' };
      appleEpisodeMetaCache.set(cacheKey, { updatedAt: now, data });
      return data;
    }

    const contentType = String(target.episodeContentType || '').trim().toLowerCase();
    const ext = String(target.episodeFileExtension || '').trim().toLowerCase();
    const isVideo = contentType === 'video' || ext === 'mp4';

    const data = {
      showId: ids.showId,
      episodeId: ids.episodeId,
      isVideo,
      kind: String(target.kind || '').trim().toLowerCase(),
      episodeContentType: contentType,
      episodeFileExtension: ext,
      title: String(target.trackName || target.collectionName || '').trim(),
      publisher: String(target.artistName || target.collectionArtistName || '').trim(),
      image: normalizeAppleArtworkUrl300(
        target.artworkUrl600 || target.artworkUrl160 || target.artworkUrl100 || target.artworkUrl60 || ''
      )
    };
    appleEpisodeMetaCache.set(cacheKey, { updatedAt: now, data });
    return data;
  })();

  appleEpisodeMetaPending.set(cacheKey, task);
  try {
    return await task;
  } finally {
    appleEpisodeMetaPending.delete(cacheKey);
  }
}

const castboxRssFeedCache = new Map();
const castboxRssPending = new Map();
const CASTBOX_RSS_CACHE_TTL_MS = 30 * 60 * 1000;
const CASTBOX_RSS_INITIAL_EPISODES = 30;
const CASTBOX_RSS_PAGE_SIZE = 30;

function buildRssProxyCandidates(rssUrl) {
  const raw = String(rssUrl || '').trim();
  if (!raw) return [];
  const encoded = encodeURIComponent(raw);
  return [
    raw,
    `https://api.allorigins.win/raw?url=${encoded}`
  ];
}

function unwrapProxyWrappedText(text) {
  const raw = String(text || '').trim();
  if (!raw) return raw;
  if (!(raw.startsWith('{') || raw.startsWith('['))) return raw;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return raw;
    if (typeof parsed.contents === 'string') return parsed.contents;
    if (typeof parsed.body === 'string') return parsed.body;
    if (parsed.data && typeof parsed.data === 'object') {
      if (typeof parsed.data.contents === 'string') return parsed.data.contents;
      if (typeof parsed.data.body === 'string') return parsed.data.body;
    }
    return raw;
  } catch {
    return raw;
  }
}

function resolveLogicalFeedUrlFromCandidate(candidate) {
  const raw = String(candidate || '').trim();
  if (!raw) return '';
  try {
    const parsed = new URL(raw);
    if (/api\.allorigins\.win$/i.test(parsed.hostname) && /^\/raw\/?$/i.test(parsed.pathname)) {
      const target = String(parsed.searchParams.get('url') || '').trim();
      if (target) return target;
    }
    return raw;
  } catch {
    return raw;
  }
}

function isLikelyFeedContentType(contentType = '') {
  const c = String(contentType || '').trim().toLowerCase();
  if (!c) return false;
  return c.includes('application/rss+xml')
    || c.includes('application/atom+xml')
    || c.includes('application/xml')
    || c.includes('text/xml')
    || c.includes('application/feed+json')
    || c.includes('application/json');
}

function looksLikeFeedXmlText(text) {
  const raw = String(text || '').trim();
  if (!raw) return false;
  return /^<\?xml\b/i.test(raw)
    || /<rss[\s>]/i.test(raw)
    || /<feed[\s>]/i.test(raw)
    || /<rdf:RDF[\s>]/i.test(raw);
}

function looksLikeJsonFeedText(text) {
  const raw = String(text || '').trim();
  if (!raw || !(raw.startsWith('{') || raw.startsWith('['))) return false;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return false;
    const version = String(parsed.version || '').toLowerCase();
    if (version.includes('jsonfeed')) return true;
    return Array.isArray(parsed.items);
  } catch {
    return false;
  }
}

function extractFeedDiscoveryUrlsFromHtml(htmlText, baseUrl = '') {
  const html = String(htmlText || '');
  if (!html.trim()) return [];
  const out = [];
  const seen = new Set();
  const push = (value) => {
    const abs = normalizeXmlLinkHref(value, baseUrl);
    if (!abs || seen.has(abs)) return;
    seen.add(abs);
    out.push(abs);
  };

  try {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const linkNodes = Array.from(doc.querySelectorAll('link[rel][href]'));
    linkNodes.forEach((node) => {
      const rel = String(node.getAttribute('rel') || '').toLowerCase();
      const href = String(node.getAttribute('href') || '').trim();
      const type = String(node.getAttribute('type') || '').toLowerCase();
      if (!href) return;
      const isAlt = /\balternate\b/.test(rel);
      const feedType = /(rss|atom|xml|json|feed)/i.test(type);
      const feedHref = /(rss|atom|feed|podcast|\.xml(?:$|[?#]))/i.test(href);
      if ((isAlt && feedType) || feedHref) push(href);
    });

    doc.querySelectorAll('meta[http-equiv]').forEach((refresh) => {
      const httpEquiv = String(refresh.getAttribute('http-equiv') || '').toLowerCase();
      const content = String(refresh.getAttribute('content') || '');
      if (httpEquiv !== 'refresh') return;
      const m = content.match(/url\s*=\s*([^;]+)/i);
      if (m && m[1]) push(m[1].trim().replace(/^['"]|['"]$/g, ''));
    });

    if (!out.length) {
      const firstAnchor = doc.querySelector('a[href]');
      if (firstAnchor) push(String(firstAnchor.getAttribute('href') || '').trim());
    }
  } catch { }

  if (!out.length) {
    const hrefMatches = [...html.matchAll(/href\s*=\s*["']([^"']+)["']/gi)];
    for (const m of hrefMatches) {
      const href = String(m[1] || '').trim();
      if (!href) continue;
      if (/(rss|atom|feed|podcast|\.xml(?:$|[?#]))/i.test(href)) push(href);
    }
    const moved = html.match(/(?:Moved\s+Permanently|document\s+has\s+moved|redirect)[\s\S]{0,300}?https?:\/\/[^\s"'<>]+/i);
    if (moved) {
      const urlMatch = moved[0].match(/https?:\/\/[^\s"'<>]+/i);
      if (urlMatch && urlMatch[0]) push(urlMatch[0]);
    }
  }

  return out;
}

function extractFeedCandidatesFromBody(text, baseUrl = '') {
  const raw = String(text || '').trim();
  if (!raw) return [];
  if (looksLikeFeedXmlText(raw) || looksLikeJsonFeedText(raw)) return [];
  if (!/<(?:!doctype|html|head|body|meta|link|a)\b/i.test(raw)) return [];
  return extractFeedDiscoveryUrlsFromHtml(raw, baseUrl);
}

async function fetchTextWithFallback(urls, options = {}) {
  const queue = [];
  const seen = new Set();
  const maxAttempts = Math.max(4, Number(options && options.maxAttempts) || 18);
  let attempts = 0;
  let lastError = null;

  const enqueue = (candidate) => {
    const raw = String(candidate || '').trim();
    if (!raw || seen.has(raw)) return;
    queue.push(raw);
  };

  const enqueueWithProxy = (feedUrl) => {
    buildRssProxyCandidates(feedUrl).forEach(enqueue);
  };

  (Array.isArray(urls) ? urls : []).forEach(enqueue);

  while (queue.length && attempts < maxAttempts) {
    const candidate = queue.shift();
    if (!candidate || seen.has(candidate)) continue;
    seen.add(candidate);
    attempts += 1;

    const logicalCandidate = resolveLogicalFeedUrlFromCandidate(candidate) || candidate;

    try {
      const response = await fetch(candidate, { cache: 'no-store', redirect: 'follow' });
      const contentType = String(response.headers.get('content-type') || '').toLowerCase();
      const responseUrl = String(response.url || '').trim();
      const responseLogical = resolveLogicalFeedUrlFromCandidate(responseUrl) || responseUrl;
      const finalUrl = normalizeXmlLinkHref(responseLogical || logicalCandidate, logicalCandidate) || logicalCandidate;

      if (!response.ok) {
        const location = normalizeXmlLinkHref(response.headers.get('location') || '', finalUrl);
        if (location) enqueueWithProxy(location);
        throw new Error(`HTTP ${response.status} for ${logicalCandidate}`);
      }

      const text = unwrapProxyWrappedText(await response.text());
      if (!String(text || '').trim()) {
        throw new Error(`Empty response body for ${logicalCandidate}`);
      }

      if (isLikelyFeedContentType(contentType) || looksLikeFeedXmlText(text) || looksLikeJsonFeedText(text)) {
        return { text, finalUrl };
      }

      const discovered = extractFeedCandidatesFromBody(text, finalUrl);
      if (discovered.length) {
        discovered.forEach((url) => enqueueWithProxy(url));
        continue;
      }

      throw new Error(`Response is not a feed document for ${logicalCandidate}`);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('All request attempts failed');
}

function firstChildByTagNames(node, tagNames) {
  const names = Array.isArray(tagNames) ? tagNames : [tagNames];
  for (const name of names) {
    const els = node ? node.getElementsByTagName(name) : [];
    if (els && els[0]) return els[0];
  }
  return null;
}

function xmlNodeText(node, tagNames) {
  const el = firstChildByTagNames(node, tagNames);
  return el && el.textContent ? String(el.textContent).trim() : '';
}

function collectXmlElementsByTagNames(node, tagNames) {
  const out = [];
  const names = Array.isArray(tagNames) ? tagNames : [tagNames];
  for (const name of names) {
    const els = node ? node.getElementsByTagName(name) : [];
    if (!els || !els.length) continue;
    for (const el of els) out.push(el);
  }
  return out;
}

function normalizeXmlLinkHref(rawHref, baseUrl = '') {
  const raw = String(rawHref || '').trim();
  if (!raw) return '';
  try {
    return new URL(raw, baseUrl || undefined).toString();
  } catch {
    return '';
  }
}

function isLikelyAudioMime(typeValue) {
  const type = String(typeValue || '').trim().toLowerCase();
  if (!type) return false;
  if (type.startsWith('audio/')) return true;
  return /(mpeg|mp3|aac|m4a|x-m4a|ogg|opus|wav|flac|webm)/i.test(type);
}

function isLikelyAudioUrl(urlValue) {
  const url = String(urlValue || '').trim().toLowerCase();
  if (!url) return false;
  return /\.(mp3|m4a|m4b|aac|ogg|oga|opus|wav|flac|webm)(?:$|[?#])/i.test(url)
    || /\/(?:audio|download)(?:\/|$)/i.test(url)
    || /[?&](?:format|mime|type)=audio/i.test(url);
}

function pickBestAudioCandidate(candidates) {
  const list = Array.isArray(candidates) ? candidates.filter(Boolean) : [];
  if (!list.length) return { url: '', mimeType: '' };
  list.sort((a, b) => Number(b.score || 0) - Number(a.score || 0));
  const best = list[0] || null;
  if (!best) return { url: '', mimeType: '' };
  return {
    url: String(best.url || '').trim(),
    mimeType: String(best.mimeType || '').trim()
  };
}

function collectEpisodeAudioCandidates(node, baseUrl = '', atomMode = false) {
  const out = [];
  const push = (rawUrl, rawType = '', score = 0, force = false) => {
    const url = normalizeXmlLinkHref(rawUrl, baseUrl);
    if (!url) return;
    const mimeType = String(rawType || '').trim();
    if (!force && !isLikelyAudioMime(mimeType) && !isLikelyAudioUrl(url)) return;
    out.push({ url, mimeType, score: Number(score) || 0 });
  };

  const enclosures = collectXmlElementsByTagNames(node, ['enclosure']);
  enclosures.forEach((el) => {
    push(el.getAttribute('url'), el.getAttribute('type') || '', 120, true);
  });

  const mediaContents = collectXmlElementsByTagNames(node, ['media:content', 'content']);
  mediaContents.forEach((el) => {
    const medium = String(el.getAttribute('medium') || '').trim().toLowerCase();
    const type = String(el.getAttribute('type') || '').trim();
    const force = medium === 'audio' || isLikelyAudioMime(type);
    push(el.getAttribute('url') || el.getAttribute('src'), type, force ? 115 : 86, force);
  });

  const linkNodes = collectXmlElementsByTagNames(node, ['link']);
  linkNodes.forEach((el) => {
    const href = el.getAttribute('href') || el.textContent || '';
    const rel = String(el.getAttribute('rel') || '').trim().toLowerCase();
    const type = String(el.getAttribute('type') || '').trim();
    if (rel === 'enclosure') {
      push(href, type, 118, true);
      return;
    }
    if (rel === 'alternate') {
      push(href, type, atomMode ? 56 : 36, false);
      return;
    }
    push(href, type, atomMode ? 52 : 32, false);
  });

  const guidText = xmlNodeText(node, ['guid', 'id']);
  if (guidText) push(guidText, '', 30, false);
  const linkText = xmlNodeText(node, ['link']);
  if (linkText) push(linkText, '', 28, false);

  const avNodes = collectXmlElementsByTagNames(node, ['audio', 'source']);
  avNodes.forEach((el) => {
    const src = el.getAttribute('src') || el.getAttribute('url') || '';
    const type = String(el.getAttribute('type') || '').trim();
    const force = isLikelyAudioMime(type);
    push(src, type, force ? 110 : 72, force);
  });

  const richText = [
    xmlNodeText(node, ['content:encoded']),
    xmlNodeText(node, ['description']),
    xmlNodeText(node, ['summary']),
    xmlNodeText(node, ['content'])
  ].filter(Boolean).join('\n');
  extractAudioUrlsFromHtmlFragment(richText, baseUrl).forEach((url) => {
    push(url, '', 66, false);
  });

  return out;
}

function extractAudioUrlsFromHtmlFragment(htmlText, baseUrl = '') {
  const html = String(htmlText || '');
  if (!html.trim()) return [];
  const out = [];
  const seen = new Set();
  const push = (value) => {
    const abs = normalizeXmlLinkHref(value, baseUrl);
    if (!abs || seen.has(abs) || !isLikelyAudioUrl(abs)) return;
    seen.add(abs);
    out.push(abs);
  };

  try {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    doc.querySelectorAll('audio[src], source[src], a[href]').forEach((el) => {
      if (el.hasAttribute('src')) push(el.getAttribute('src'));
      if (el.hasAttribute('href')) push(el.getAttribute('href'));
    });
  } catch { }

  if (!out.length) {
    const attrMatches = [...html.matchAll(/\b(?:src|href)\s*=\s*["']([^"']+)["']/gi)];
    attrMatches.forEach((m) => push(String(m[1] || '').trim()));
  }

  return out;
}

function extractFeedImageUrl(channelOrFeed) {
  if (!channelOrFeed) return '';

  const itunesImage = firstChildByTagNames(channelOrFeed, ['itunes:image']);
  if (itunesImage) {
    const href = normalizeXmlLinkHref(itunesImage.getAttribute('href') || '');
    if (href) return href;
  }

  const imageNode = firstChildByTagNames(channelOrFeed, ['image']);
  if (imageNode) {
    const byUrl = normalizeXmlLinkHref(xmlNodeText(imageNode, ['url']));
    if (byUrl) return byUrl;
    const byText = normalizeXmlLinkHref(imageNode.textContent || '');
    if (byText) return byText;
  }

  const logoText = normalizeXmlLinkHref(xmlNodeText(channelOrFeed, ['logo']));
  if (logoText) return logoText;

  const iconText = normalizeXmlLinkHref(xmlNodeText(channelOrFeed, ['icon']));
  if (iconText) return iconText;

  return '';
}

function extractFeedLinkUrl(channelOrFeed, fallbackBase = '') {
  if (!channelOrFeed) return '';
  const linkEls = collectXmlElementsByTagNames(channelOrFeed, ['link']);
  for (const el of linkEls) {
    const rel = String(el.getAttribute('rel') || '').trim().toLowerCase();
    const href = normalizeXmlLinkHref(el.getAttribute('href') || '', fallbackBase);
    if (!href) continue;
    if (!rel || rel === 'alternate') return href;
  }
  const textLink = normalizeXmlLinkHref(xmlNodeText(channelOrFeed, ['link']), fallbackBase);
  if (textLink) return textLink;
  return normalizeXmlLinkHref(fallbackBase, fallbackBase);
}

function extractEpisodeOpenLink(node, baseUrl = '') {
  const linkEls = collectXmlElementsByTagNames(node, ['link']);
  for (const el of linkEls) {
    const rel = String(el.getAttribute('rel') || '').trim().toLowerCase();
    const href = normalizeXmlLinkHref(el.getAttribute('href') || '', baseUrl);
    if (!href) continue;
    if (!rel || rel === 'alternate') return href;
  }
  const plainLink = normalizeXmlLinkHref(xmlNodeText(node, ['link']), baseUrl);
  if (plainLink) return plainLink;
  return '';
}

function extractItunesNewFeedUrl(xmlText, baseUrl = '') {
  const raw = String(xmlText || '');
  if (!raw) return '';
  const match = raw.match(/<itunes:new-feed-url[^>]*>([\s\S]*?)<\/itunes:new-feed-url>/i);
  if (!match || !match[1]) return '';
  const content = decodeHtmlEntities(String(match[1] || ''))
    .replace(/^<!\[CDATA\[/i, '')
    .replace(/\]\]>$/i, '')
    .trim();
  return normalizeXmlLinkHref(content, baseUrl);
}

function extractJsonFeedAuthor(feedObj = {}) {
  if (feedObj.author && typeof feedObj.author === 'object') {
    const name = String(feedObj.author.name || '').trim();
    if (name) return name;
  }
  if (Array.isArray(feedObj.authors) && feedObj.authors.length) {
    const first = feedObj.authors[0] && typeof feedObj.authors[0] === 'object'
      ? String(feedObj.authors[0].name || '').trim()
      : '';
    if (first) return first;
  }
  const publisher = String(feedObj.publisher || feedObj.publisher_name || '').trim();
  return publisher;
}

function parseJsonFeedFromText(rawText, rssUrl = '') {
  const raw = String(rawText || '').trim();
  if (!raw || !(raw.startsWith('{') || raw.startsWith('['))) return null;

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }

  if (!parsed || typeof parsed !== 'object') return null;
  const itemsRaw = Array.isArray(parsed.items) ? parsed.items : [];
  if (!itemsRaw.length) return null;

  const version = String(parsed.version || '').toLowerCase();
  if (version && !version.includes('jsonfeed') && !Array.isArray(parsed.items)) return null;

  const base = String(rssUrl || '').trim();
  const items = itemsRaw.map((item, index) => {
    const row = item && typeof item === 'object' ? item : {};
    const title = String(row.title || row.summary || row.content_text || `Episode ${index + 1}`).trim() || `Episode ${index + 1}`;
    const pubDateRaw = String(row.date_published || row.date_modified || row.published || '').trim();
    const pubDate = pubDateRaw ? Date.parse(pubDateRaw) : NaN;

    const candidates = [];
    const push = (url, mimeType = '', score = 0, force = false) => {
      const abs = normalizeXmlLinkHref(url, base);
      if (!abs) return;
      const type = String(mimeType || '').trim();
      if (!force && !isLikelyAudioMime(type) && !isLikelyAudioUrl(abs)) return;
      candidates.push({ url: abs, mimeType: type, score: Number(score) || 0 });
    };

    if (Array.isArray(row.attachments)) {
      row.attachments.forEach((att) => {
        if (!att || typeof att !== 'object') return;
        push(att.url, att.mime_type || att.type || '', 120, true);
      });
    }
    push(row.audio_url, row.audio_mime_type || '', 118, true);
    push(row.enclosure_url, row.enclosure_type || '', 116, true);
    push(row.url, '', 40, false);
    extractAudioUrlsFromHtmlFragment(String(row.content_html || row.summary || ''), base)
      .forEach((url) => push(url, '', 66, false));

    const audio = pickBestAudioCandidate(candidates);
    const audioUrl = String(audio.url || '').trim();
    if (!audioUrl) return null;

    return {
      guid: String(row.id || audioUrl || `${index}`).trim(),
      title,
      audioUrl,
      mimeType: String(audio.mimeType || '').trim(),
      duration: String(row.duration || row.duration_in_seconds || '').trim(),
      link: normalizeFavoriteUrlKey(row.external_url || row.url || ''),
      pubDateRaw,
      pubDate: Number.isFinite(pubDate) ? pubDate : 0
    };
  }).filter((item) => item && item.audioUrl);

  if (!items.length) return null;

  const channelTitle = String(parsed.title || parsed.name || 'Podcast').trim() || 'Podcast';
  const channelImage = normalizeXmlLinkHref(parsed.icon || parsed.image || parsed.favicon || '', base);
  const channelLink = normalizeFavoriteUrlKey(parsed.home_page_url || parsed.homePageURL || parsed.url || base);
  const channelPublisher = extractJsonFeedAuthor(parsed);

  return {
    rssUrl: String(base || parsed.feed_url || '').trim(),
    title: channelTitle,
    publisher: channelPublisher,
    link: channelLink,
    image: channelImage,
    episodes: items
  };
}

function parseCastboxRssFeed(xmlText, rssUrl) {
  const rawText = String(xmlText || '').trim();
  if (!rawText) throw new Error('Empty RSS document');

  const jsonFeed = parseJsonFeedFromText(rawText, rssUrl);
  if (jsonFeed) return jsonFeed;

  const xml = new DOMParser().parseFromString(rawText, 'text/xml');
  if (!xml || xml.querySelector('parsererror')) {
    throw new Error('Invalid RSS XML');
  }

  const channelNode = xml.querySelector('channel');
  const feedNode = xml.documentElement;
  const rootNode = channelNode || feedNode;
  if (!rootNode) throw new Error('RSS channel not found');

  const channelTitle = xmlNodeText(rootNode, ['title']) || 'Podcast';
  const channelImage = extractFeedImageUrl(rootNode);
  const channelLink = normalizeFavoriteUrlKey(extractFeedLinkUrl(rootNode, String(rssUrl || '').trim()));

  let channelPublisher = xmlNodeText(rootNode, ['itunes:author', 'author', 'managingEditor']) || '';
  if (!channelPublisher) {
    const authorNode = firstChildByTagNames(rootNode, ['author']);
    const authorName = authorNode ? xmlNodeText(authorNode, ['name']) : '';
    if (authorName) channelPublisher = authorName;
  }

  const rssItems = channelNode
    ? Array.from(channelNode.getElementsByTagName('item'))
    : Array.from(xml.getElementsByTagName('item'));
  const atomEntries = rssItems.length ? [] : Array.from(xml.getElementsByTagName('entry'));
  const sourceNodes = rssItems.length ? rssItems : atomEntries;
  const atomMode = !rssItems.length && atomEntries.length > 0;

  const items = sourceNodes
    .map((itemNode, index) => {
      const title = xmlNodeText(itemNode, ['title']) || `Episode ${index + 1}`;
      const pubDateRaw = atomMode
        ? (xmlNodeText(itemNode, ['published', 'updated', 'dc:date']) || '')
        : (xmlNodeText(itemNode, ['pubDate', 'dc:date', 'published', 'updated']) || '');
      const pubDate = pubDateRaw ? Date.parse(pubDateRaw) : NaN;

      const audio = pickBestAudioCandidate(collectEpisodeAudioCandidates(itemNode, String(rssUrl || '').trim(), atomMode));
      const audioUrl = String(audio.url || '').trim();
      if (!audioUrl) return null;

      const guid = xmlNodeText(itemNode, ['guid', 'id']) || audioUrl || `${index}`;
      const duration = xmlNodeText(itemNode, ['itunes:duration']);
      const link = normalizeFavoriteUrlKey(extractEpisodeOpenLink(itemNode, String(rssUrl || '').trim()));

      return {
        guid,
        title,
        audioUrl,
        mimeType: String(audio.mimeType || '').trim(),
        duration,
        link,
        pubDateRaw,
        pubDate: Number.isFinite(pubDate) ? pubDate : 0
      };
    })
    .filter((item) => item && item.audioUrl);

  if (!items.length) {
    const movedTo = extractItunesNewFeedUrl(rawText, String(rssUrl || '').trim());
    if (movedTo) {
      const movedError = new Error('Feed moved permanently');
      movedError.newFeedUrl = movedTo;
      throw movedError;
    }
    throw new Error('No playable episodes found in RSS');
  }

  return {
    rssUrl: String(rssUrl || '').trim(),
    title: channelTitle,
    publisher: channelPublisher,
    link: channelLink,
    image: channelImage,
    episodes: items
  };
}



function buildRssPlaybackStorageKey(feedUrl, episodeRef) {
  const feed = normalizeFavoriteFeedUrl(feedUrl);
  const ref = String(episodeRef || '').trim();
  if (!feed || !ref) return '';
  return `${IDB_META_KEY_RSS_PLAYBACK_PREFIX}${feed}::${ref}`;
}

async function getRssPlaybackProgress(feedUrl, episodeRef) {
  const key = buildRssPlaybackStorageKey(feedUrl, episodeRef);
  if (!key) return null;
  try {
    const row = await idbGet(IDB_META_STORE, key);
    if (!row || typeof row !== 'object') return null;
    const value = row.value && typeof row.value === 'object' ? row.value : row;
    const currentTime = Number(value.currentTime);
    if (!Number.isFinite(currentTime) || currentTime < 0) return null;
    return {
      currentTime,
      duration: Number(value.duration) || 0,
      title: String(value.title || '').trim(),
      updatedAt: Number(value.updatedAt) || 0
    };
  } catch (error) {
    console.warn('RSS playback read failed:', error);
    return null;
  }
}

async function setRssPlaybackProgress(feedUrl, episodeRef, payload = {}) {
  const key = buildRssPlaybackStorageKey(feedUrl, episodeRef);
  if (!key) return false;
  const currentTime = Number(payload.currentTime);
  if (!Number.isFinite(currentTime) || currentTime < 0) return false;
  try {
    await idbPut(IDB_META_STORE, {
      key,
      value: {
        currentTime,
        duration: Number(payload.duration) || 0,
        title: String(payload.title || '').trim(),
        updatedAt: Number(payload.updatedAt) || Date.now()
      },
      updatedAt: Number(payload.updatedAt) || Date.now()
    });
    return true;
  } catch (error) {
    console.warn('RSS playback write failed:', error);
    return false;
  }
}


async function loadCastboxRssFeed(rssUrl, options = {}) {
  const forceRefresh = !!(options && options.forceRefresh);
  const key = normalizeFavoriteFeedUrl(rssUrl) || String(rssUrl || '').trim();
  if (!key) throw new Error('Missing RSS URL');

  const cached = castboxRssFeedCache.get(key);
  if (!forceRefresh && cached && (Date.now() - cached.updatedAt) < CASTBOX_RSS_CACHE_TTL_MS && cached.feed) {
    return cached.feed;
  }

  if (castboxRssPending.has(key)) {
    return castboxRssPending.get(key);
  }

  const task = (async () => {
    const loaded = await fetchTextWithFallback(buildRssProxyCandidates(key), { maxAttempts: 20 });
    let feed;
    try {
      feed = parseCastboxRssFeed(loaded.text, loaded.finalUrl || key);
    } catch (error) {
      const movedTo = normalizeFavoriteFeedUrl(error && error.newFeedUrl);
      if (!movedTo || movedTo === key) throw error;
      const movedLoaded = await fetchTextWithFallback(buildRssProxyCandidates(movedTo), { maxAttempts: 20 });
      feed = parseCastboxRssFeed(movedLoaded.text, movedLoaded.finalUrl || movedTo);
    }

    const finalFeedUrl = normalizeFavoriteFeedUrl(feed && feed.rssUrl) || key;
    const normalizedFeed = {
      ...feed,
      rssUrl: finalFeedUrl
    };
    const now = Date.now();
    castboxRssFeedCache.set(key, { updatedAt: now, feed: normalizedFeed });
    if (finalFeedUrl !== key) {
      castboxRssFeedCache.set(finalFeedUrl, { updatedAt: now, feed: normalizedFeed });
    }
    return normalizedFeed;
  })();

  castboxRssPending.set(key, task);
  try {
    return await task;
  } finally {
    castboxRssPending.delete(key);
  }
}

function formatCastboxEpisodeMeta(ep) {
  const parts = [];
  if (ep && ep.pubDate) {
    try {
      parts.push(new Intl.DateTimeFormat(getDateLocaleTag(), { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(ep.pubDate)));
    } catch {
      if (ep.pubDateRaw) parts.push(ep.pubDateRaw);
    }
  } else if (ep && ep.pubDateRaw) {
    parts.push(ep.pubDateRaw);
  }
  if (ep && ep.duration) parts.push(String(ep.duration).trim());
  return parts.join(' · ');
}

function formatCastboxAudioTime(secondsValue) {
  const total = Number(secondsValue);
  if (!Number.isFinite(total) || total <= 0) return '00:00';
  const rounded = Math.floor(total);
  const h = Math.floor(rounded / 3600);
  const m = Math.floor((rounded % 3600) / 60);
  const s = rounded % 60;
  const mm = String(m).padStart(h > 0 ? 2 : 1, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${mm}:${ss}`;
}

function buildCastboxEpisodeRowMarkup(ep, index, activeSrc = '') {
  const title = escapeHtml(String(ep.title || `Episode ${index + 1}`));
  const meta = escapeHtml(formatCastboxEpisodeMeta(ep));
  const audioUrl = escapeHtml(String(ep.audioUrl || ''));
  const itemLink = escapeHtml(String(ep.link || ''));
  const guid = escapeHtml(String(ep.guid || ep.audioUrl || `${index}`));
  const isActive = activeSrc && audioUrl && activeSrc === audioUrl;
  const cls = isActive ? 'castbox-rss-item is-active' : 'castbox-rss-item';
  return `<li><button class="${cls}" type="button" data-castbox-ep-src="${audioUrl}" data-castbox-ep-guid="${guid}" data-castbox-ep-title="${title}" data-castbox-ep-meta="${meta}" ${itemLink ? `data-castbox-ep-link="${itemLink}"` : ''}><span class="castbox-rss-item-index">#${index + 1}</span><span class="castbox-rss-item-body"><span class="castbox-rss-item-title">${title}</span>${meta ? `<span class="castbox-rss-item-meta">${meta}</span>` : ''}</span></button></li>`;
}


function buildCastboxEpisodesRowsMarkup(episodes, fromIndex, toIndex, activeSrc = '') {
  const list = Array.isArray(episodes) ? episodes : [];
  const start = Math.max(0, Number(fromIndex) || 0);
  const end = Math.min(list.length, Math.max(start, Number(toIndex) || 0));
  const htmlParts = [];
  for (let i = start; i < end; i += 1) {
    htmlParts.push(buildCastboxEpisodeRowMarkup(list[i], i, activeSrc));
  }
  return htmlParts.join('');
}

function updateCastboxLoadMoreButton(root) {
  if (!root) return;
  const btn = root.querySelector('[data-castbox-load-more]');
  if (!btn) return;
  const feed = root.__castboxFeed;
  const episodes = feed && Array.isArray(feed.episodes) ? feed.episodes : [];
  const visible = Math.max(0, Number(root.__castboxVisibleLimit) || 0);
  const remaining = Math.max(0, episodes.length - visible);
  if (remaining > 0) {
    btn.hidden = false;
    btn.textContent = `+${Math.min(CASTBOX_RSS_PAGE_SIZE, remaining)}`;
  } else {
    btn.hidden = true;
  }
}

function buildCastboxRssPlayerMarkup(feed, fallbackTitle, rssUrl = '') {
  const safeFeedTitle = escapeHtml(String((feed && feed.title) || fallbackTitle || 'Castbox Podcast'));
  const now = (feed && Array.isArray(feed.episodes) && feed.episodes[0]) ? feed.episodes[0] : null;
  if (!now) {
    return `<div class="castbox-rss-error">${escapeHtml(t('loadFailedRefresh'))}</div>`;
  }

  const nowTitle = escapeHtml(String(now.title || ''));
  const nowMeta = escapeHtml(formatCastboxEpisodeMeta(now));
  const audioSrc = escapeHtml(String(now.audioUrl || ''));
  const totalEpisodes = Array.isArray(feed.episodes) ? feed.episodes.length : 0;
  const initialLimit = Math.min(CASTBOX_RSS_INITIAL_EPISODES, totalEpisodes);
  const rows = buildCastboxEpisodesRowsMarkup(feed.episodes || [], 0, initialLimit, String(now.audioUrl || '').trim());
  const safeRssUrl = escapeHtml(String(rssUrl || (feed && feed.rssUrl) || ''));
  const safeFallbackTitle = escapeHtml(String(fallbackTitle || (feed && feed.title) || 'Castbox Podcast'));

  return `
    <div class="castbox-rss-player" data-castbox-rss-player data-castbox-rss-url="${safeRssUrl}" data-castbox-fallback-title="${safeFallbackTitle}" data-castbox-visible-limit="${initialLimit}">
      <div class="castbox-rss-head">
        <p class="castbox-rss-feed-title">${safeFeedTitle}</p>
      </div>
      <div class="castbox-rss-now" data-castbox-now>
        <span class="castbox-rss-now-label">${escapeHtml(t('live'))}</span>
        <div class="castbox-rss-now-title" data-castbox-now-title>${nowTitle}</div>
        ${nowMeta ? `<div class="castbox-rss-item-meta" data-castbox-now-meta>${nowMeta}</div>` : ''}
      </div>
      <div class="castbox-rss-controls">
        <button class="castbox-rss-play" type="button" data-castbox-play aria-label="${escapeHtml(t('playEpisode'))}" title="${escapeHtml(t('playEpisode'))}">
          <svg class="castbox-rss-play-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path data-glyph="play" d="M8 5v14l11-7z"></path>
            <path data-glyph="pause" d="M8 5h3v14H8zm5 0h3v14h-3z"></path>
          </svg>
        </button>
        <div class="castbox-rss-progress-wrap">
          <input class="castbox-rss-progress" data-castbox-progress type="range" min="0" max="1000" step="1" value="0">
          <div class="castbox-rss-time"><span data-castbox-time-current>00:00</span><span>/</span><span data-castbox-time-total>00:00</span></div>
        </div>
        <button class="castbox-rss-refresh" type="button" data-castbox-refresh>${escapeHtml(t('refresh'))}</button>
      </div>
      <audio class="castbox-rss-audio" preload="none" src="${audioSrc}"></audio>
      <ol class="castbox-rss-list" data-castbox-rss-list>${rows}</ol>
      <div class="castbox-rss-more-wrap">
        <button class="castbox-rss-load-more" type="button" data-castbox-load-more hidden>+0</button>
      </div>
    </div>
  `;
}

async function renderCastboxRssPlayerInSlot(slot, embedPlatform, rssUrl, fallbackTitle, forceRefresh = true) {
  if (!slot) return false;
  const platform = String(embedPlatform || 'castbox').trim().toLowerCase();
  const safeRssUrl = String(rssUrl || '').trim();
  const safeFallbackTitle = String(fallbackTitle || '').trim();

  slot.innerHTML = `<div class="episode-player-shell platform-${platform}"><div class="castbox-rss-loading">${escapeHtml(t('loading'))}…</div></div>${buildPlayerAdMarkup()}`;
  const loadingAd = slot.querySelector('.episode-player-ad .adsbygoogle');
  if (loadingAd) initializeAdsbygooglePush();

  try {
    const feed = await loadCastboxRssFeed(safeRssUrl, { forceRefresh: !!forceRefresh });
    if (!slot.isConnected) return true;
    const fontSample = buildFontWarmupSampleFromFeed(feed, safeFallbackTitle);
    if (fontSample) void ensureFontsForText(fontSample);
    slot.innerHTML = `<div class="episode-player-shell platform-${platform}">${buildCastboxRssPlayerMarkup(feed, safeFallbackTitle, safeRssUrl)}</div>${buildPlayerAdMarkup()}`;
    const playerAd = slot.querySelector('.episode-player-ad .adsbygoogle');
    if (playerAd) initializeAdsbygooglePush();
    bindCastboxRssPlayerInteractions(slot, { feed, embedPlatform: platform, rssUrl: safeRssUrl, fallbackTitle: safeFallbackTitle });
    scheduleVisibleFontScan();
    return true;
  } catch (error) {
    console.warn('Castbox RSS player failed:', error);
    if (!slot.isConnected) return false;
    slot.innerHTML = `<div class="episode-player-shell platform-${platform}"><div class="castbox-rss-error-wrap"><div class="castbox-rss-error">${escapeHtml(t('loadFailedRefresh'))}</div><button class="castbox-rss-refresh" type="button" data-castbox-retry>${escapeHtml(t('refresh'))}</button></div></div>${buildPlayerAdMarkup()}`;
    const errorAd = slot.querySelector('.episode-player-ad .adsbygoogle');
    if (errorAd) initializeAdsbygooglePush();
    const retryBtn = slot.querySelector('[data-castbox-retry]');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        renderCastboxRssPlayerInSlot(slot, platform, safeRssUrl, safeFallbackTitle, true).catch(() => { });
      });
    }
    return false;
  }
}

function bindCastboxRssPlayerInteractions(slot, options = {}) {
  if (!slot) return;
  const root = slot.querySelector('[data-castbox-rss-player]');
  if (!root || root.dataset.bound === '1') return;
  root.dataset.bound = '1';

  if (options && options.feed && Array.isArray(options.feed.episodes)) {
    root.__castboxFeed = options.feed;
  }
  root.__castboxPlatform = String((options && options.embedPlatform) || root.__castboxPlatform || 'castbox').trim().toLowerCase();
  root.__castboxRssUrl = String((options && options.rssUrl) || root.getAttribute('data-castbox-rss-url') || '').trim();
  root.__castboxFallbackTitle = String((options && options.fallbackTitle) || root.getAttribute('data-castbox-fallback-title') || '').trim();
  root.__castboxVisibleLimit = Math.max(1, parseInt(root.getAttribute('data-castbox-visible-limit') || `${CASTBOX_RSS_INITIAL_EPISODES}`, 10) || CASTBOX_RSS_INITIAL_EPISODES);

  const audio = root.querySelector('.castbox-rss-audio');
  const playBtn = root.querySelector('[data-castbox-play]');
  const progress = root.querySelector('[data-castbox-progress]');
  const currentTimeEl = root.querySelector('[data-castbox-time-current]');
  const totalTimeEl = root.querySelector('[data-castbox-time-total]');
  const listEl = root.querySelector('[data-castbox-rss-list]');
  const nowTitle = root.querySelector('[data-castbox-now-title]');
  const nowMeta = root.querySelector('[data-castbox-now-meta]');
  if (!audio || !listEl) return;

  let lastSavedSecond = -1;

  function getActiveEpisodeSource() {
    return String(root.dataset.activeEpisodeSrc || audio.getAttribute('src') || '').trim();
  }

  function getActiveEpisodeRef() {
    return String(root.dataset.activeEpisodeGuid || '').trim() || getActiveEpisodeSource();
  }

  async function persistActiveProgress(force = false) {
    const feedUrl = String(root.__castboxRssUrl || '').trim();
    const ref = getActiveEpisodeRef();
    if (!feedUrl || !ref) return;

    const current = Number(audio.currentTime) || 0;
    if (!force && Math.abs(current - lastSavedSecond) < 2) return;
    lastSavedSecond = current;

    await setRssPlaybackProgress(feedUrl, ref, {
      currentTime: current,
      duration: Number(audio.duration) || 0,
      title: nowTitle ? String(nowTitle.textContent || '').trim() : '',
      updatedAt: Date.now()
    });
  }

  async function restoreActiveProgress() {
    const feedUrl = String(root.__castboxRssUrl || '').trim();
    const ref = getActiveEpisodeRef();
    if (!feedUrl || !ref) return;

    const stored = await getRssPlaybackProgress(feedUrl, ref);
    if (!stored) return;

    const applySeek = () => {
      const seek = Number(stored.currentTime);
      if (!Number.isFinite(seek) || seek <= 0) return;
      const duration = Number(audio.duration) || 0;
      const finalSeek = duration > 1 ? Math.min(Math.max(0, seek), Math.max(0, duration - 1)) : seek;
      if (Number.isFinite(finalSeek) && finalSeek > 0) {
        try { audio.currentTime = finalSeek; } catch { }
      }
      if (currentTimeEl) currentTimeEl.textContent = formatCastboxAudioTime(audio.currentTime || finalSeek || 0);
      if (progress && duration > 0) {
        progress.value = String(Math.max(0, Math.min(1000, Math.round(((audio.currentTime || finalSeek || 0) / duration) * 1000))));
      }
    };

    if (audio.readyState >= 1) {
      applySeek();
    } else {
      audio.addEventListener('loadedmetadata', applySeek, { once: true });
    }
  }

  function syncPlayButtonState() {
    if (!playBtn) return;
    const isPlaying = !audio.paused && !audio.ended;
    playBtn.classList.toggle('is-playing', isPlaying);
  }

  function syncAudioTimelineFromElement() {
    if (currentTimeEl) currentTimeEl.textContent = formatCastboxAudioTime(audio.currentTime || 0);
    if (totalTimeEl) totalTimeEl.textContent = formatCastboxAudioTime(audio.duration || 0);
    if (progress) {
      const duration = Number(audio.duration) || 0;
      const current = Number(audio.currentTime) || 0;
      progress.value = duration > 0 ? String(Math.max(0, Math.min(1000, Math.round((current / duration) * 1000)))) : '0';
    }
  }

  function setActiveEpisodeButton(btn) {
    if (!btn) return;
    root.querySelectorAll('.castbox-rss-item.is-active').forEach((node) => node.classList.remove('is-active'));
    btn.classList.add('is-active');
    const title = String(btn.getAttribute('data-castbox-ep-title') || '').trim();
    const meta = String(btn.getAttribute('data-castbox-ep-meta') || '').trim();
    const src = String(btn.getAttribute('data-castbox-ep-src') || '').trim();
    const guid = String(btn.getAttribute('data-castbox-ep-guid') || '').trim();
    root.dataset.activeEpisodeSrc = src;
    root.dataset.activeEpisodeGuid = guid;
    if (nowTitle) nowTitle.textContent = title;
    if (nowMeta) nowMeta.textContent = meta;
    lastSavedSecond = -1;
  }

  function appendMoreEpisodes() {
    const feed = root.__castboxFeed;
    const episodes = feed && Array.isArray(feed.episodes) ? feed.episodes : [];
    const fromIndex = Math.max(0, Number(root.__castboxVisibleLimit) || 0);
    if (fromIndex >= episodes.length) {
      updateCastboxLoadMoreButton(root);
      return;
    }
    const toIndex = Math.min(episodes.length, fromIndex + CASTBOX_RSS_PAGE_SIZE);
    const activeSrc = String(audio.getAttribute('src') || '').trim();
    listEl.insertAdjacentHTML('beforeend', buildCastboxEpisodesRowsMarkup(episodes, fromIndex, toIndex, activeSrc));
    const fontSample = buildFontWarmupSampleFromItems(
      episodes.slice(fromIndex, toIndex).map((episode) => ({
        title: episode && episode.title ? episode.title : '',
        publisher: episode && episode.author ? episode.author : ''
      })),
      CASTBOX_RSS_PAGE_SIZE * 2
    );
    if (fontSample) void ensureFontsForText(fontSample);
    root.__castboxVisibleLimit = toIndex;
    updateCastboxLoadMoreButton(root);
    scheduleVisibleFontScan();
  }

  updateCastboxLoadMoreButton(root);
  syncAudioTimelineFromElement();
  syncPlayButtonState();

  const initialActiveBtn = root.querySelector('.castbox-rss-item.is-active');
  if (initialActiveBtn) {
    setActiveEpisodeButton(initialActiveBtn);
    void restoreActiveProgress();
  }

  audio.addEventListener('play', () => {
    syncPlayButtonState();
    setAudioPlaybackActive(audio, true);
  });
  audio.addEventListener('pause', () => {
    syncPlayButtonState();
    setAudioPlaybackActive(audio, false);
    syncAudioTimelineFromElement();
    void persistActiveProgress(true);
  });
  audio.addEventListener('ended', () => {
    syncPlayButtonState();
    setAudioPlaybackActive(audio, false);
    syncAudioTimelineFromElement();
    void persistActiveProgress(true);
  });
  audio.addEventListener('timeupdate', () => {
    syncAudioTimelineFromElement();
    void persistActiveProgress(false);
  });
  audio.addEventListener('loadedmetadata', syncAudioTimelineFromElement);

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      try {
        if (audio.paused || audio.ended) {
          const playAttempt = audio.play();
          if (playAttempt && typeof playAttempt.catch === 'function') {
            playAttempt.catch(() => { });
          }
        } else {
          audio.pause();
        }
      } catch { }
    });
  }

  if (progress) {
    progress.addEventListener('input', () => {
      const duration = Number(audio.duration) || 0;
      const ratio = Math.max(0, Math.min(1, (Number(progress.value) || 0) / 1000));
      if (currentTimeEl) currentTimeEl.textContent = formatCastboxAudioTime(duration * ratio);
    });
    progress.addEventListener('change', () => {
      const duration = Number(audio.duration) || 0;
      const ratio = Math.max(0, Math.min(1, (Number(progress.value) || 0) / 1000));
      if (duration > 0) audio.currentTime = duration * ratio;
      syncAudioTimelineFromElement();
      void persistActiveProgress(true);
    });
  }

  root.addEventListener('click', (event) => {
    const refreshBtn = event.target && event.target.closest ? event.target.closest('[data-castbox-refresh]') : null;
    if (refreshBtn) {
      event.preventDefault();
      if (refreshBtn.disabled) return;
      refreshBtn.disabled = true;
      refreshBtn.classList.add('is-loading');
      const previousText = refreshBtn.textContent;
      refreshBtn.textContent = t('loading');
      renderCastboxRssPlayerInSlot(
        slot,
        root.__castboxPlatform || 'castbox',
        root.__castboxRssUrl || '',
        root.__castboxFallbackTitle || '',
        true
      ).catch(() => {
        refreshBtn.disabled = false;
        refreshBtn.classList.remove('is-loading');
        refreshBtn.textContent = previousText;
      });
      return;
    }

    const loadMoreBtn = event.target && event.target.closest ? event.target.closest('[data-castbox-load-more]') : null;
    if (loadMoreBtn) {
      event.preventDefault();
      appendMoreEpisodes();
      return;
    }

    const btn = event.target && event.target.closest ? event.target.closest('.castbox-rss-item[data-castbox-ep-src]') : null;
    if (!btn) return;
    event.preventDefault();

    const src = String(btn.getAttribute('data-castbox-ep-src') || '').trim();
    if (!src) return;

    setActiveEpisodeButton(btn);
    const currentSrc = String(audio.getAttribute('src') || '').trim();
    if (currentSrc !== src) {
      audio.setAttribute('src', src);
      audio.load();
      if (currentTimeEl) currentTimeEl.textContent = '00:00';
      if (totalTimeEl) totalTimeEl.textContent = '00:00';
      if (progress) progress.value = '0';
    }

    void restoreActiveProgress();

    try {
      const playAttempt = audio.play();
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => { });
      }
    } catch { }
  });
}


async function copyTextValue(value) {
  const text = String(value || '').trim();
  if (!text) return false;

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    console.warn('Clipboard API copy failed:', error);
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    textarea.remove();
    return !!ok;
  } catch (error) {
    console.warn('execCommand copy failed:', error);
    return false;
  }
}

let copyUiFlashTimer = null;
let copyUiShowTimer = null;
let activeEpisodePlayerRow = null;
const SITE_LOGO_IDLE_SRC = 'logo.webp';
const SITE_LOGO_PLAYING_SRC = 'logo2.webp';
const activeAudioPlaybackSet = new Set();
const activeIframePlaybackSet = new Set();

function applyAppleEpisodeShellLayout(shell) {
  if (!shell || !shell.classList) return;
  if (shell.classList.contains('is-video')) {
    const width = Math.min(Math.max(0, Number(shell.clientWidth) || 0), 660) || 660;
    shell.style.height = `${Math.round(width * 9 / 16)}px`;
    return;
  }
  shell.style.height = '175px';
}

function refreshActiveAppleEpisodeShellLayout() {
  if (!activeEpisodePlayerRow) return;
  const shell = activeEpisodePlayerRow.querySelector('.episode-player-apple-shell.is-episode');
  if (!shell) return;
  applyAppleEpisodeShellLayout(shell);
}

function flashRowCopyUi(row) {
  if (!row) return;
  row.classList.add('copy-flash', 'show-copy');
  if (copyUiFlashTimer) clearTimeout(copyUiFlashTimer);
  copyUiFlashTimer = setTimeout(() => {
    row.classList.remove('copy-flash');
  }, 520);
}

function revealRowCopyUiTemporarily(row, ms = 1400) {
  if (!row) return;
  row.classList.add('show-copy');
  if (copyUiShowTimer) clearTimeout(copyUiShowTimer);
  copyUiShowTimer = setTimeout(() => {
    row.classList.remove('show-copy');
  }, ms);
}

function updateSiteLogoPlaybackState() {
  if (!siteLogoEl) return;
  const hasPlayback = activeAudioPlaybackSet.size > 0 || activeIframePlaybackSet.size > 0;
  const nextSrc = hasPlayback ? SITE_LOGO_PLAYING_SRC : SITE_LOGO_IDLE_SRC;
  if (String(siteLogoEl.getAttribute('src') || '').trim() !== nextSrc) {
    siteLogoEl.setAttribute('src', nextSrc);
  }
}

function setAudioPlaybackActive(audioEl, isActive) {
  if (!audioEl) return;
  if (isActive) {
    activeAudioPlaybackSet.add(audioEl);
  } else {
    activeAudioPlaybackSet.delete(audioEl);
  }
  updateSiteLogoPlaybackState();
}

function setIframePlaybackActive(row, isActive) {
  if (!row) return;
  if (isActive) {
    activeIframePlaybackSet.add(row);
    row.dataset.iframePlaybackActive = '1';
  } else {
    activeIframePlaybackSet.delete(row);
    delete row.dataset.iframePlaybackActive;
  }
  updateSiteLogoPlaybackState();
}

function resetPlaybackSignalsForRerender() {
  activeAudioPlaybackSet.clear();
  activeIframePlaybackSet.clear();
  updateSiteLogoPlaybackState();
}

function pauseFor(ms) {
  return new Promise((resolve) => setTimeout(resolve, Math.max(0, Number(ms) || 0)));
}

async function waitForValue(read, timeoutMs = 5000, intervalMs = 80) {
  const start = Date.now();
  while ((Date.now() - start) < Math.max(200, Number(timeoutMs) || 5000)) {
    try {
      const value = read();
      if (value) return value;
    } catch {}
    await pauseFor(intervalMs);
  }
  return null;
}

async function seekAudioElement(audio, seconds) {
  if (!audio || !Number.isFinite(seconds) || seconds < 0) return false;
  const apply = () => {
    const duration = Number(audio.duration) || 0;
    const next = duration > 1 ? Math.min(Math.max(0, seconds), Math.max(0, duration - 0.25)) : Math.max(0, seconds);
    try { audio.currentTime = next; } catch {}
  };
  if (audio.readyState >= 1) apply();
  else {
    await new Promise((resolve) => {
      audio.addEventListener('loadedmetadata', () => {
        apply();
        resolve();
      }, { once: true });
      try { audio.load(); } catch { resolve(); }
    });
  }
  try {
    const playAttempt = audio.play();
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(() => {});
    }
  } catch {}
  return true;
}

function setYouTubePlayerInstance(host, player) {
  if (!host) return;
  host.__ytPlayerInstance = player || null;
  host.__ytPlayerReady = false;
}

function setYouTubePlayerReady(host, ready = true) {
  if (!host) return;
  host.__ytPlayerReady = !!ready;
}

async function ensureRowPlaybackReady(row) {
  if (!row) return null;
  const playBtn = row.querySelector('.play-link');
  if (!playBtn) return null;
  if (!row.classList.contains('player-open')) {
    await toggleEpisodePlayerFromButton(playBtn);
  }

  const platform = String(playBtn.getAttribute('data-embed-platform') || '').trim().toLowerCase();
  if (platform === 'youtube') {
    const host = await waitForValue(() => row.querySelector('.youtube-player-host'), 7000, 90);
    const player = host ? await waitForValue(() => (host.__ytPlayerInstance && host.__ytPlayerReady) ? host.__ytPlayerInstance : null, 7000, 90) : null;
    return player ? { kind: 'youtube', player } : null;
  }

  if (platform === 'rss' || platform === 'castbox' || platform === 'pocketcasts') {
    const audio = await waitForValue(() => row.querySelector('.castbox-rss-audio'), 5000, 70);
    return audio ? { kind: 'audio', audio } : null;
  }

  return null;
}

async function seekTimestampForRow(row, seconds) {
  const handle = await ensureRowPlaybackReady(row);
  if (!handle) return false;
  if (handle.kind === 'youtube' && handle.player && typeof handle.player.seekTo === 'function') {
    try {
      handle.player.seekTo(seconds, true);
      if (typeof handle.player.playVideo === 'function') handle.player.playVideo();
      return true;
    } catch {
      return false;
    }
  }
  if (handle.kind === 'audio' && handle.audio) {
    return seekAudioElement(handle.audio, seconds);
  }
  return false;
}

async function seekTimestampForPlaylistOverlay(seconds) {
  if (!playlistController || !playlistController.feedEl || !playlistController.currentItem) return false;
  const item = playlistController.currentItem;
  const platform = String(item.embedPlatform || '').trim().toLowerCase();
  if (platform === 'youtube') {
    const host = playlistController.feedEl.querySelector('.youtube-player-host');
    const player = host ? await waitForValue(() => (host.__ytPlayerInstance && host.__ytPlayerReady) ? host.__ytPlayerInstance : null, 7000, 90) : null;
    if (!player || typeof player.seekTo !== 'function') return false;
    try {
      player.seekTo(seconds, true);
      if (typeof player.playVideo === 'function') player.playVideo();
      return true;
    } catch {
      return false;
    }
  }
  if (platform === 'rss' || platform === 'castbox' || platform === 'pocketcasts') {
    const audio = await waitForValue(() => playlistController.feedEl.querySelector('.castbox-rss-audio'), 5000, 70);
    return audio ? seekAudioElement(audio, seconds) : false;
  }
  return false;
}

// ── SponsorBlock Integration ──

let ytIframeApiLoaded = false;
let ytIframeApiLoading = false;
const ytIframeApiCallbacks = [];
const sponsorBlockSegmentCache = new Map();
const sponsorBlockInflightRequests = new Map();
const SPONSORBLOCK_CACHE_TTL_MS = 10 * 60 * 1000;
let activeSponsorBlockMonitor = null;
const sponsorBlockPrefetchQueue = [];
const sponsorBlockPrefetchQueued = new Set();
let sponsorBlockPrefetchRunning = false;

function loadYouTubeIframeApi() {
  return new Promise((resolve) => {
    if (ytIframeApiLoaded && window.YT && window.YT.Player) {
      resolve();
      return;
    }
    ytIframeApiCallbacks.push(resolve);
    if (ytIframeApiLoading) return;
    ytIframeApiLoading = true;
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      ytIframeApiLoaded = true;
      ytIframeApiLoading = false;
      if (typeof prev === 'function') { try { prev(); } catch { } }
      while (ytIframeApiCallbacks.length) {
        const cb = ytIframeApiCallbacks.shift();
        try { cb(); } catch { }
      }
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.onerror = () => {
      ytIframeApiLoading = false;
      console.warn('Failed to load YouTube IFrame API');
      while (ytIframeApiCallbacks.length) {
        const cb = ytIframeApiCallbacks.shift();
        try { cb(); } catch { }
      }
    };
    document.head.appendChild(tag);
  });
}

function extractVideoIdFromEmbedUrl(embedUrl) {
  try {
    const parsed = new URL(embedUrl);
    const embedMatch = parsed.pathname.match(/\/embed\/([A-Za-z0-9_-]{6,})/);
    if (embedMatch && embedMatch[1]) return embedMatch[1];
    const v = parsed.searchParams.get('v');
    if (v) return v;
  } catch { }
  return '';
}

function extractPlaylistIdFromEmbedUrl(embedUrl) {
  try {
    const parsed = new URL(embedUrl);
    return String(parsed.searchParams.get('list') || '').trim();
  } catch { }
  return '';
}

function extractYoutubeVideoIdFromUrl(url) {
  const embedUrl = getYoutubeVideoEmbedUrl(url);
  if (!embedUrl) return '';
  return extractVideoIdFromEmbedUrl(embedUrl);
}

function extractSponsorBlockCandidateVideoId(item) {
  if (!item || typeof item !== 'object') return '';
  const candidates = [
    item.embedUrl,
    item.openUrl,
    item.url,
    item.link,
    item.external_url
  ];
  for (const candidate of candidates) {
    const videoId = extractYoutubeVideoIdFromUrl(String(candidate || '').trim());
    if (videoId) return videoId;
  }
  return '';
}

function getActiveYouTubePlayerVideoId(player) {
  if (!player) return '';
  try {
    const data = typeof player.getVideoData === 'function' ? player.getVideoData() : null;
    const fromData = String((data && (data.video_id || data.videoId)) || '').trim();
    if (fromData) return fromData;
  } catch { }
  try {
    const videoUrl = typeof player.getVideoUrl === 'function' ? String(player.getVideoUrl() || '').trim() : '';
    if (videoUrl) return extractYoutubeVideoIdFromUrl(videoUrl);
  } catch { }
  return '';
}

async function fetchSponsorBlockSegments(videoId) {
  if (!videoId) return [];
  const cacheKey = videoId.toLowerCase();
  const now = Date.now();
  const cached = sponsorBlockSegmentCache.get(cacheKey);
  if (cached && (now - cached.ts < SPONSORBLOCK_CACHE_TTL_MS)) return cached.segments;
  if (sponsorBlockInflightRequests.has(cacheKey)) {
    return sponsorBlockInflightRequests.get(cacheKey);
  }

  const pending = (async () => {
    try {
      const categories = encodeURIComponent(JSON.stringify(['sponsor', 'selfpromo', 'interaction', 'intro', 'outro', 'music_offtopic']));
      const url = `https://sponsor.ajay.app/api/skipSegments?videoID=${encodeURIComponent(videoId)}&categories=${categories}`;
      const resp = await fetch(url);
      if (resp.status === 404) {
        sponsorBlockSegmentCache.set(cacheKey, { ts: now, segments: [] });
        return [];
      }
      if (!resp.ok) return [];
      const data = await resp.json();
      const segments = Array.isArray(data)
        ? data
            .filter((s) => Array.isArray(s.segment) && s.segment.length === 2 && (s.actionType === 'skip' || !s.actionType))
            .map((s) => ({
              start: Number(s.segment[0]) || 0,
              end: Number(s.segment[1]) || 0,
              category: String(s.category || 'sponsor'),
              uuid: String(s.UUID || '')
            }))
            .filter((s) => s.end > s.start)
            .sort((a, b) => a.start - b.start)
        : [];
      sponsorBlockSegmentCache.set(cacheKey, { ts: Date.now(), segments });
      return segments;
    } catch (err) {
      console.warn('SponsorBlock fetch error:', err);
      return [];
    } finally {
      sponsorBlockInflightRequests.delete(cacheKey);
    }
  })();

  sponsorBlockInflightRequests.set(cacheKey, pending);
  return pending;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function collectSponsorBlockVideoIdsFromItems(items, limit = 6) {
  const ids = [];
  for (const item of Array.isArray(items) ? items : []) {
    const embedPlatform = String(item && item.embedPlatform || '').trim().toLowerCase();
    if (embedPlatform !== 'youtube') continue;
    const videoId = extractSponsorBlockCandidateVideoId(item);
    if (!videoId || ids.includes(videoId)) continue;
    ids.push(videoId);
    if (ids.length >= limit) break;
  }
  return ids;
}

function collectSponsorBlockVideoIdsFromRows(container, limit = 6) {
  const ids = [];
  const rows = container ? container.querySelectorAll('.chart-row .play-link[data-embed-platform="youtube"]') : [];
  rows.forEach((btn) => {
    if (ids.length >= limit) return;
    let videoId = extractYoutubeVideoIdFromUrl(String(btn.getAttribute('data-embed-url') || '').trim());
    if (!videoId) {
      const row = btn.closest('.chart-row');
      const openLink = row && row.querySelector('.open-link');
      videoId = extractYoutubeVideoIdFromUrl(openLink ? String(openLink.href || '').trim() : '');
    }
    if (!videoId || ids.includes(videoId)) return;
    ids.push(videoId);
  });
  return ids;
}

function scheduleSponsorBlockPrefetch(videoIds, options = {}) {
  const list = Array.isArray(videoIds) ? videoIds : [];
  const immediate = !!options.immediate;
  for (const rawId of list) {
    const videoId = String(rawId || '').trim();
    if (!videoId) continue;
    const cacheKey = videoId.toLowerCase();
    if (sponsorBlockSegmentCache.has(cacheKey) || sponsorBlockInflightRequests.has(cacheKey) || sponsorBlockPrefetchQueued.has(cacheKey)) continue;
    sponsorBlockPrefetchQueued.add(cacheKey);
    if (immediate) sponsorBlockPrefetchQueue.unshift(cacheKey);
    else sponsorBlockPrefetchQueue.push(cacheKey);
  }
  if (!sponsorBlockPrefetchQueue.length) return;
  void runSponsorBlockPrefetchQueue();
}

async function runSponsorBlockPrefetchQueue() {
  if (sponsorBlockPrefetchRunning) return;
  sponsorBlockPrefetchRunning = true;
  try {
    while (sponsorBlockPrefetchQueue.length) {
      const videoId = sponsorBlockPrefetchQueue.shift();
      sponsorBlockPrefetchQueued.delete(videoId);
      if (!videoId) continue;
      await fetchSponsorBlockSegments(videoId);
      await wait(220);
    }
  } finally {
    sponsorBlockPrefetchRunning = false;
  }
}

function primeSponsorBlockForVideoIds(videoIds, options = {}) {
  const ids = Array.isArray(videoIds) ? videoIds.filter(Boolean) : [];
  if (!ids.length) return;
  void loadYouTubeIframeApi().catch(() => {});
  if (options.immediateFirst) {
    const [first, ...rest] = ids;
    if (first) void fetchSponsorBlockSegments(first);
    if (rest.length) scheduleSponsorBlockPrefetch(rest, { immediate: false });
    return;
  }
  scheduleSponsorBlockPrefetch(ids, { immediate: false });
}

const SPONSORBLOCK_CATEGORY_LABELS = {
  sponsor: 'Sponsor',
  selfpromo: 'Self-promotion',
  interaction: 'Interaction reminder',
  intro: 'Intro',
  outro: 'Outro',
  music_offtopic: 'Non-music'
};

class SponsorBlockMonitor {
  constructor(ytPlayer, segments, shell) {
    this.player = ytPlayer;
    this.segments = segments;
    this.shell = shell;
    this.intervalId = null;
    this.skippedUuids = new Set();
    this.noticeEl = null;
    this.noticeTimer = null;
    this._createNotice();
    this.start();
  }

  _createNotice() {
    const notice = document.createElement('div');
    notice.className = 'sponsorblock-notice';
    notice.textContent = '';
    if (this.shell) {
      this.shell.classList.add('sponsorblock-wrap');
      this.shell.appendChild(notice);
    }
    this.noticeEl = notice;
  }

  start() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => this._tick(), 500);
  }

  _tick() {
    try {
      if (!this.player || typeof this.player.getCurrentTime !== 'function') return;
      const state = this.player.getPlayerState();
      if (state !== 1) return; // only check while playing
      const currentTime = this.player.getCurrentTime();
      for (const seg of this.segments) {
        if (this.skippedUuids.has(seg.uuid)) continue;
        if (currentTime >= seg.start && currentTime < seg.end - 0.5) {
          this.skippedUuids.add(seg.uuid);
          this.player.seekTo(seg.end, true);
          this._showNotice(seg.category);
          break;
        }
      }
    } catch { }
  }

  _showNotice(category) {
    if (!this.noticeEl) return;
    const label = SPONSORBLOCK_CATEGORY_LABELS[category] || category;
    this.noticeEl.textContent = `⏭ Skipped: ${label}`;
    this.noticeEl.classList.add('is-visible');
    clearTimeout(this.noticeTimer);
    this.noticeTimer = setTimeout(() => {
      if (this.noticeEl) this.noticeEl.classList.remove('is-visible');
    }, 3000);
  }

  destroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    clearTimeout(this.noticeTimer);
    if (this.noticeEl && this.noticeEl.parentNode) {
      this.noticeEl.parentNode.removeChild(this.noticeEl);
    }
    if (this.shell) this.shell.classList.remove('sponsorblock-wrap');
    this.player = null;
    this.noticeEl = null;
  }
}

function destroyActiveSponsorBlockMonitor() {
  if (activeSponsorBlockMonitor) {
    try { activeSponsorBlockMonitor.destroy(); } catch { }
    activeSponsorBlockMonitor = null;
  }
}

function setSponsorBlockBadge(shell, segments) {
  if (!shell || !shell.parentNode) return;
  const safeSegments = Array.isArray(segments) ? segments : [];
  const adjacent = shell.nextElementSibling;
  const existing = adjacent && adjacent.classList && adjacent.classList.contains('sponsorblock-badge') ? adjacent : null;
  if (!safeSegments.length) {
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    return;
  }
  const badge = existing || document.createElement('div');
  badge.className = 'sponsorblock-badge';
  badge.innerHTML = '<span class="sponsorblock-badge-icon"></span> SponsorBlock · ' + safeSegments.length + ' segment' + (safeSegments.length === 1 ? '' : 's');
  if (!existing) shell.insertAdjacentElement('afterend', badge);
}

async function syncSponsorBlockForPlayer(ytPlayer, shell, state, options = {}) {
  const isAlive = typeof options.isAlive === 'function' ? options.isAlive : (() => true);
  const onBeforeMonitorSwap = typeof options.onBeforeMonitorSwap === 'function' ? options.onBeforeMonitorSwap : (() => {});
  const onMonitorReady = typeof options.onMonitorReady === 'function' ? options.onMonitorReady : (() => {});
  const fallbackVideoId = String(options.fallbackVideoId || '').trim();
  const currentVideoId = fallbackVideoId || getActiveYouTubePlayerVideoId(ytPlayer);
  if (!currentVideoId || state.currentVideoId === currentVideoId) return;
  state.currentVideoId = currentVideoId;
  const segments = await fetchSponsorBlockSegments(currentVideoId).catch(() => []);
  if (!isAlive()) return;
  setSponsorBlockBadge(shell, segments);
  onBeforeMonitorSwap();
  if (!segments.length) return;
  onMonitorReady(new SponsorBlockMonitor(ytPlayer, segments, shell));
}

async function initSponsorBlockForYouTubePlayer(row) {
  if (!row) return;
  const host = row.querySelector('.episode-player-frame.youtube');
  if (!host || !host.id) return;

  const iframeSrc = host.getAttribute('src') || '';
  const videoId = String(host.getAttribute('data-youtube-video-id') || '').trim() || extractVideoIdFromEmbedUrl(iframeSrc);
  const playlistId = String(host.getAttribute('data-youtube-playlist-id') || '').trim() || extractPlaylistIdFromEmbedUrl(iframeSrc);
  if (!videoId && !playlistId) return;

  const apiPromise = loadYouTubeIframeApi();
  await apiPromise;
  if (!row.classList.contains('player-open')) return;
  if (!window.YT || !window.YT.Player) return;

  const shell = host.closest('.episode-player-shell');
  const state = { currentVideoId: '' };

  try {
      const playerOptions = {
        playerVars: {
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          origin: window.location.origin
        },
        events: {
          onReady: async () => {
            setYouTubePlayerReady(host, true);
            await syncSponsorBlockForPlayer(ytPlayer, shell, state, {
              isAlive: () => row.classList.contains('player-open'),
              fallbackVideoId: videoId && !playlistId ? videoId : '',
              onBeforeMonitorSwap: () => destroyActiveSponsorBlockMonitor(),
            onMonitorReady: (monitor) => { activeSponsorBlockMonitor = monitor; }
          });
        },
        onStateChange: async () => {
          await syncSponsorBlockForPlayer(ytPlayer, shell, state, {
            isAlive: () => row.classList.contains('player-open'),
            fallbackVideoId: videoId && !playlistId ? videoId : '',
            onBeforeMonitorSwap: () => destroyActiveSponsorBlockMonitor(),
            onMonitorReady: (monitor) => { activeSponsorBlockMonitor = monitor; }
          });
        }
      }
    };
    if (videoId && !playlistId) {
      playerOptions.videoId = videoId;
    } else {
      playerOptions.playerVars.listType = 'playlist';
      playerOptions.playerVars.list = playlistId;
    }
    const ytPlayer = new window.YT.Player(host.id, playerOptions);
    setYouTubePlayerInstance(host, ytPlayer);
  } catch (err) {
    console.warn('YT.Player init error:', err);
  }
}

function closeEpisodePlayerRow(row) {
  if (!row) return;
  destroyActiveSponsorBlockMonitor();
  delete row.dataset.appleEpisodeDetectToken;
  setIframePlaybackActive(row, false);
  row.classList.remove('player-open');
  document.body.classList.remove('player-active');
  const audio = row.querySelector('.castbox-rss-audio');
  try {
    if (audio) {
      setAudioPlaybackActive(audio, false);
      audio.pause();
    }
  } catch { }
  const btn = row.querySelector('.play-link');
  if (btn) {
    btn.classList.remove('is-active');
    btn.setAttribute('aria-pressed', 'false');
    const closeLabel = getClosePlayerActionLabel();
    btn.setAttribute('aria-label', getPlayEpisodeActionLabel() || closeLabel);
    btn.setAttribute('title', getPlayEpisodeActionLabel() || closeLabel);
  }
  const slot = row.querySelector('.episode-player-wrap');
  if (slot) {
    slot.innerHTML = '';
    slot.setAttribute('hidden', '');
  }
  if (activeEpisodePlayerRow === row) activeEpisodePlayerRow = null;
}

async function openEpisodePlayerRow(row, btn) {
  if (!row || !btn) return false;
  let embedUrl = String(btn.getAttribute('data-embed-url') || '').trim();
  let embedPlatform = String(btn.getAttribute('data-embed-platform') || '').trim().toLowerCase();
  let embedKind = String(btn.getAttribute('data-embed-kind') || (typeSelect ? typeSelect.value : '') || '').trim().toLowerCase();
  if (!embedUrl || !embedPlatform) return false;

  const slot = row.querySelector('.episode-player-wrap');
  if (!slot) return false;

  const titleNode = row.querySelector('.title');
  const titleText = titleNode ? titleNode.childNodes[0]?.textContent || titleNode.textContent || '' : '';
  if (embedPlatform === 'castbox' || embedPlatform === 'pocketcasts' || embedPlatform === 'rss') {
    setIframePlaybackActive(row, false);
    slot.removeAttribute('hidden');
    row.classList.add('player-open');
    document.body.classList.add('player-active');
    btn.classList.add('is-active');
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', getClosePlayerActionLabel());
    btn.setAttribute('title', getClosePlayerActionLabel());
    activeEpisodePlayerRow = row;
    await renderCastboxRssPlayerInSlot(slot, embedPlatform, embedUrl, titleText, true);
    return true;
  }

  let finalEmbedUrl = embedUrl;
  let iframeOptions = {};
  if (embedPlatform === 'spotify' && embedKind === 'top-episodes') {
    const resolved = await resolveSpotifyEpisodeEmbedMeta(embedUrl);
    if (resolved && resolved.embedUrl) {
      finalEmbedUrl = resolved.embedUrl;
      iframeOptions = {
        spotifyEpisodeMode: resolved.isVideo ? 'video' : 'audio',
        spotifyHeight: resolved.height
      };
    } else {
      const episodeId = extractSpotifyEpisodeIdFromUrl(embedUrl);
      if (episodeId) {
        finalEmbedUrl = buildSpotifyEpisodeAudioEmbedUrl(episodeId);
      }
      iframeOptions = {
        spotifyEpisodeMode: 'audio',
        spotifyHeight: 352
      };
    }
  } else if (embedPlatform === 'spotify' && embedKind === 'top-podcasts') {
    const resolvedShow = await resolveSpotifyShowEmbedMeta(embedUrl);
    if (resolvedShow && resolvedShow.embedUrl) {
      finalEmbedUrl = resolvedShow.embedUrl;
      iframeOptions = {
        spotifyShowMode: resolvedShow.isVideo ? 'video' : 'audio',
        spotifyHeight: resolvedShow.height
      };
    } else {
      const showId = extractSpotifyShowIdFromUrl(embedUrl);
      if (showId) {
        finalEmbedUrl = buildSpotifyShowAudioEmbedUrl(showId);
      }
      iframeOptions = {
        spotifyShowMode: 'audio',
        spotifyHeight: 352
      };
    }
  }
  if (embedPlatform === 'apple' && embedKind === 'top-episodes') {
    iframeOptions = {
      ...iframeOptions,
      appleEpisodeMode: 'audio'
    };
  }

  const iframeHtml = buildEpisodePlayerIframeMarkup(finalEmbedUrl, embedPlatform, titleText, embedKind, iframeOptions);
  if (!iframeHtml) return false;

  slot.innerHTML = `<div class="episode-player-shell platform-${embedPlatform}">${iframeHtml}</div>${buildPlayerAdMarkup()}`;
  slot.removeAttribute('hidden');
  const playerAd = slot.querySelector('.episode-player-ad .adsbygoogle');
  if (playerAd) initializeAdsbygooglePush();
  if (embedPlatform === 'apple' && embedKind === 'top-episodes') {
    const appleShell = slot.querySelector('.episode-player-apple-shell.is-episode');
    if (appleShell) applyAppleEpisodeShellLayout(appleShell);
    const detectToken = `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    row.dataset.appleEpisodeDetectToken = detectToken;
    resolveAppleEpisodeEmbedMeta(embedUrl).then((meta) => {
      if (!row.classList.contains('player-open')) return;
      if (row.dataset.appleEpisodeDetectToken !== detectToken) return;
      if (activeEpisodePlayerRow && activeEpisodePlayerRow !== row) return;
      const liveShell = row.querySelector('.episode-player-apple-shell.is-episode');
      if (!liveShell) return;
      const isVideo = !!(meta && meta.isVideo);
      liveShell.classList.toggle('is-video', isVideo);
      liveShell.classList.toggle('is-audio', !isVideo);
      liveShell.setAttribute('data-apple-episode-mode', isVideo ? 'video' : 'audio');
      applyAppleEpisodeShellLayout(liveShell);
    }).catch(() => { });
  }
  setIframePlaybackActive(row, true);
  row.classList.add('player-open');
  document.body.classList.add('player-active');
  btn.classList.add('is-active');
  btn.setAttribute('aria-pressed', 'true');
  btn.setAttribute('aria-label', getClosePlayerActionLabel());
  btn.setAttribute('title', getClosePlayerActionLabel());
  activeEpisodePlayerRow = row;

  // Initialize SponsorBlock for YouTube players
  if (embedPlatform === 'youtube') {
    initSponsorBlockForYouTubePlayer(row).catch((err) => {
      console.warn('SponsorBlock init failed:', err);
    });
  }

  return true;
}

async function toggleEpisodePlayerFromButton(button) {
  const btn = button && button.closest ? button.closest('.play-link') : null;
  if (!btn) return false;
  const row = btn.closest('.chart-row');
  if (!row) return false;

  const embedPlatform = String(btn.getAttribute('data-embed-platform') || '').trim().toLowerCase();
  const embedUrl = String(btn.getAttribute('data-embed-url') || '').trim();
  if (embedPlatform === 'youtube' && embedUrl) {
    const eagerVideoId = extractVideoIdFromEmbedUrl(embedUrl);
    if (eagerVideoId) {
      primeSponsorBlockForVideoIds([eagerVideoId], { immediateFirst: true });
    }
  }

  if (row.classList.contains('player-open')) {
    closeEpisodePlayerRow(row);
    return true;
  }

  if (activeEpisodePlayerRow && activeEpisodePlayerRow !== row) {
    closeEpisodePlayerRow(activeEpisodePlayerRow);
  }

  return openEpisodePlayerRow(row, btn);
}

function buildHistoryChartPathD(points) {
  if (!Array.isArray(points) || !points.length) return '';
  return points.map((pt, index) => `${index === 0 ? 'M' : 'L'}${pt.x.toFixed(2)} ${pt.y.toFixed(2)}`).join(' ');
}

function getHistoryChartPathLength(points) {
  if (!Array.isArray(points) || points.length < 2) return 0;
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    total += Math.sqrt((dx * dx) + (dy * dy));
  }
  return total;
}

function buildHistoryPanelMarkup(series, platform, titleText = '') {
  const rows = Array.isArray(series) ? series : [];
  if (!rows.length) return '';

  const accentPair = PLATFORM_ACCENT_COLORS[String(platform || '').trim().toLowerCase()] || PLATFORM_ACCENT_COLORS.apple || ['#6F8BFF', '#00C5B0'];
  const c1 = String(accentPair[0] || '#6F8BFF');
  const c2 = String(accentPair[1] || accentPair[0] || '#00C5B0');
  const OUT_OF_CHART_RANK = 101;
  const isOutRank = (rank) => !Number.isFinite(rank) || rank > RANK_SCORE_EXTENDED_MAX;
  const clampRank = (rank) => {
    const n = Number(rank);
    if (!Number.isFinite(n)) return OUT_OF_CHART_RANK;
    return Math.max(1, Math.min(OUT_OF_CHART_RANK, n));
  };

  const width = 640;
  const height = 210;
  const pad = { top: 16, right: 18, bottom: 34, left: 22 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  const dates = rows.map((row) => String((row && row.dateKey) || '').trim());
  const ranks = rows.map((row) => clampRank(Number(row && row.rank)));
  const inChartRanks = ranks.filter((rank) => !isOutRank(rank));
  const minRank = inChartRanks.length ? Math.max(1, Math.min(...inChartRanks)) : OUT_OF_CHART_RANK;
  const latestRank = ranks[ranks.length - 1];
  const firstRank = ranks[0];
  const delta = (!isOutRank(firstRank) && !isOutRank(latestRank))
    ? (Number(firstRank) - Number(latestRank))
    : null;

  let scaleMin = 1;
  let scaleMax = OUT_OF_CHART_RANK;
  const hasOutPoints = ranks.some((rank) => isOutRank(rank));
  if (!hasOutPoints && inChartRanks.length >= 2) {
    const localMin = Math.min(...inChartRanks);
    const localMax = Math.max(...inChartRanks);
    const spread = localMax - localMin;
    if (spread > 0 && spread <= 28) {
      const padRank = Math.max(2, Math.ceil(spread * 0.55));
      scaleMin = Math.max(1, localMin - padRank);
      scaleMax = Math.min(OUT_OF_CHART_RANK, localMax + padRank);
    }
  }
  if (scaleMax <= scaleMin) {
    scaleMax = Math.min(OUT_OF_CHART_RANK, scaleMin + 1);
  }
  const rankToY = (rank) => {
    const ratio = (clampRank(rank) - scaleMin) / (scaleMax - scaleMin);
    return pad.top + Math.max(0, Math.min(1, ratio)) * innerH;
  };

  const points = ranks.map((rank, index) => {
    const x = pad.left + (rows.length <= 1 ? (innerW / 2) : ((index / (rows.length - 1)) * innerW));
    const y = rankToY(rank);
    return { x, y };
  });

  const d = buildHistoryChartPathD(points);
  const pathLen = Math.max(1, Math.round(getHistoryChartPathLength(points)));
  const isFlatSeries = ranks.length >= 2 && ranks.every((rank) => rank === ranks[0]);
  const flatPath = (isFlatSeries && points.length >= 2)
    ? `M${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} L${points[points.length - 1].x.toFixed(2)} ${points[points.length - 1].y.toFixed(2)}`
    : '';
  const pointDots = points.map((pt) => `<circle class="history-point" cx="${pt.x.toFixed(2)}" cy="${pt.y.toFixed(2)}" r="2.35"></circle>`).join('');
  const topSafeY = pad.top + 11;
  const bottomSafeY = height - pad.bottom - 4;
  const pointLabels = points.map((pt, index) => {
    const rank = ranks[index];
    const text = isOutRank(rank) ? '—' : String(rank);
    const preferAbove = pt.y > (pad.top + 26);
    let labelY = preferAbove ? (pt.y - 10) : (pt.y + 16);

    if (preferAbove) {
      labelY = Math.min(labelY, pt.y - 8);
    } else {
      labelY = Math.max(labelY, pt.y + 14);
    }

    labelY = Math.max(topSafeY, Math.min(bottomSafeY, labelY));
    return `<text class="history-point-label${isOutRank(rank) ? ' is-out' : ''}" x="${pt.x.toFixed(2)}" y="${labelY.toFixed(2)}" text-anchor="middle">${escapeHtml(text)}</text>`;
  }).join('');

  const guideSteps = scaleMax - scaleMin > 20
    ? [0, 0.25, 0.5, 0.75, 1]
    : [0, 0.5, 1];
  const yGuides = guideSteps.map((step) => {
    const rank = scaleMin + ((scaleMax - scaleMin) * step);
    const y = rankToY(rank);
    return `<line class="history-grid-line" x1="${pad.left}" y1="${y.toFixed(2)}" x2="${width - pad.right}" y2="${y.toFixed(2)}"></line>`;
  }).join('');

  const startDate = dates[0] ? formatDateKeyLocalized(dates[0]) : '';
  const endDate = dates[dates.length - 1] ? formatDateKeyLocalized(dates[dates.length - 1]) : '';
  const safeTitle = escapeHtml(String(titleText || ''));
  const deltaText = Number.isFinite(delta) ? (delta > 0 ? `+${delta}` : `${delta}`) : '—';
  const latestText = isOutRank(latestRank) ? '#-' : `#${latestRank}`;
  const bestText = isOutRank(minRank) ? '#-' : `#${minRank}`;
  const uid = `history-${Math.random().toString(36).slice(2, 9)}`;

  return `
    <div class="history-panel" data-history-panel style="--history-color-1:${escapeHtml(c1)};--history-color-2:${escapeHtml(c2)};--history-path-len:${pathLen};">
      <div class="history-head">
        <span>${safeTitle}</span>
        <span class="history-summary">${latestText} · ${bestText} · ${deltaText}</span>
      </div>
      <svg class="history-curve" viewBox="0 0 ${width} ${height}" role="img" aria-label="${safeTitle}">
        <defs>
          <linearGradient id="${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="${escapeHtml(c1)}"></stop>
            <stop offset="100%" stop-color="${escapeHtml(c2)}"></stop>
          </linearGradient>
        </defs>
        ${yGuides}
        <path class="history-path-glow" d="${d}"></path>
        <path class="history-path-base" d="${d}"></path>
        ${flatPath ? `<path class="history-path-flat" d="${flatPath}" style="stroke:url(#${uid});"></path>` : ''}
        <path class="history-path" d="${d}" style="stroke:url(#${uid});"></path>
        ${pointLabels}
        ${pointDots}
        ${startDate ? `<text class="history-axis-label" x="${pad.left}" y="${height - 10}">${escapeHtml(startDate)}</text>` : ''}
        ${endDate ? `<text class="history-axis-label" x="${width - pad.right}" y="${height - 10}" text-anchor="end">${escapeHtml(endDate)}</text>` : ''}
      </svg>
    </div>
  `;
}

function closeHistoryPanelRow(row) {
  if (!row) return;
  row.classList.remove('history-open');
  const btn = row.querySelector('.history-link');
  if (btn) {
    btn.classList.remove('is-active');
    btn.setAttribute('aria-pressed', 'false');
    const closeLabel = getCloseHistoryActionLabel();
    btn.setAttribute('aria-label', getHistoryActionLabel() || closeLabel);
    btn.setAttribute('title', getHistoryActionLabel() || closeLabel);
  }
  const slot = row.querySelector('.history-panel-wrap');
  if (slot) {
    slot.innerHTML = '';
    slot.setAttribute('hidden', '');
  }
  if (activeHistoryPanelRow === row) activeHistoryPanelRow = null;
}

function openHistoryPanelRow(row, btn) {
  if (!row || !btn) return false;
  const key = String(btn.getAttribute('data-history-key') || '').trim();
  if (!key || !(currentHistorySeriesMap instanceof Map)) return false;
  const series = currentHistorySeriesMap.get(key);
  if (!Array.isArray(series) || !series.length) return false;

  const slot = row.querySelector('.history-panel-wrap');
  if (!slot) return false;

  const titleNode = row.querySelector('.title');
  const titleText = titleNode ? (titleNode.childNodes[0]?.textContent || titleNode.textContent || '') : '';
  const panelHtml = buildHistoryPanelMarkup(series, platformSelect ? platformSelect.value : 'apple', titleText);
  if (!panelHtml) return false;

  slot.innerHTML = panelHtml;
  slot.removeAttribute('hidden');
  row.classList.add('history-open');
  btn.classList.add('is-active');
  btn.setAttribute('aria-pressed', 'true');
  btn.setAttribute('aria-label', getCloseHistoryActionLabel());
  btn.setAttribute('title', getCloseHistoryActionLabel());
  activeHistoryPanelRow = row;
  return true;
}

function toggleHistoryPanelFromButton(button) {
  const btn = button && button.closest ? button.closest('.history-link') : null;
  if (!btn) return false;
  const row = btn.closest('.chart-row');
  if (!row) return false;

  if (row.classList.contains('history-open')) {
    closeHistoryPanelRow(row);
    return true;
  }

  if (activeHistoryPanelRow && activeHistoryPanelRow !== row) {
    closeHistoryPanelRow(activeHistoryPanelRow);
  }

  return openHistoryPanelRow(row, btn);
}

function setRowNoteButtonState(row, { active = false, hasNote = null } = {}) {
  const btn = row ? row.querySelector('.note-link') : null;
  if (!btn) return;
  btn.classList.toggle('is-active', !!active);
  if (typeof hasNote === 'boolean') {
    btn.classList.toggle('has-note', hasNote);
  }
  btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  const label = active ? noteText('closeNote') : noteText('note');
  btn.setAttribute('aria-label', label);
  btn.setAttribute('title', label);
}

function getNotePanelContext(panel) {
  return readNoteContextFromElement(panel);
}

function updateNotePanelStatus(panel, options = {}) {
  if (!panel) return;
  const statusEl = panel.querySelector('[data-note-status]');
  if (!statusEl) return;
  const updatedAt = Number(options.updatedAt != null ? options.updatedAt : panel.getAttribute('data-note-updated-at'));
  const dirty = !!options.dirty;
  const saving = !!options.saving;
  panel.dataset.dirty = dirty ? 'true' : 'false';
  panel.dataset.saving = saving ? 'true' : 'false';
  if (Number.isFinite(updatedAt) && updatedAt > 0) {
    panel.setAttribute('data-note-updated-at', String(updatedAt));
  } else {
    panel.setAttribute('data-note-updated-at', '0');
  }
  statusEl.textContent = getNoteStatusText(updatedAt, dirty, saving);
}

function buildNotePanelMarkup(context, record = null) {
  const updatedAt = Number(record && record.updatedAt) || 0;
  const rawContent = String(record && record.content || '');
  const content = escapeHtml(rawContent);
  const sourceLink = String(context.link || '').trim();
  const publisher = escapeHtml(String(context.publisher || '').trim());
  const previewHtml = buildNoteFullPreviewHtml(rawContent, { interactive: canSeekTimestampsForPlatform(context.platform) });

  return `
    <section class="note-panel" data-note-panel
      data-note-id="${escapeHtml(context.id)}"
      data-note-title="${escapeHtml(context.title)}"
      data-note-publisher="${escapeHtml(context.publisher)}"
      data-note-link="${escapeHtml(sourceLink)}"
      data-note-image="${escapeHtml(context.image || '')}"
      data-note-embed-url="${escapeHtml(context.embedUrl || '')}"
      data-note-platform="${escapeHtml(context.platform)}"
      data-note-kind="${escapeHtml(context.kind)}"
      data-note-updated-at="${updatedAt}"
      data-dirty="false">
      <div class="note-panel-head">
        <div class="note-panel-head-main">
          <span class="note-panel-kicker">${escapeHtml(noteText('noteFor'))}</span>
          <h4 class="note-panel-title">${escapeHtml(context.title || 'Untitled')}</h4>
          <div class="note-panel-meta">
            ${publisher ? `<span>${publisher}</span>` : ''}
          </div>
        </div>
      </div>
      <textarea class="note-input" data-note-input spellcheck="true" placeholder="${escapeHtml(noteText('notePlaceholder'))}">${content}</textarea>
      <div class="note-preview" data-note-preview>${previewHtml}</div>
      <div class="note-panel-foot">
        <div class="note-status" data-note-status>${escapeHtml(getNoteStatusText(updatedAt, false, false))}</div>
        <div class="note-actions-bar">
          <button class="note-btn note-btn-primary" type="button" data-note-save>${escapeHtml(noteText('noteSave'))}</button>
          <details class="note-download-menu">
            <summary class="note-btn">${escapeHtml(noteText('noteDownload'))}</summary>
            <div class="note-download-pop">
              <button class="note-menu-btn" type="button" data-note-download="md">${escapeHtml(noteText('noteDownloadMd'))}</button>
              <button class="note-menu-btn" type="button" data-note-download="txt">${escapeHtml(noteText('noteDownloadTxt'))}</button>
            </div>
          </details>
          <button class="note-btn" type="button" data-note-copy>${escapeHtml(noteText('noteCopy'))}</button>
          <button class="note-btn note-btn-ghost" type="button" data-note-delete>${escapeHtml(noteText('noteDelete'))}</button>
          <button class="note-btn note-btn-ghost" type="button" data-note-close>${escapeHtml(noteText('closeNote'))}</button>
        </div>
      </div>
    </section>
  `;
}

async function closeNotePanelRow(row) {
  if (!row) return;
  const panel = row.querySelector('[data-note-panel]');
  if (panel && panel.dataset.dirty === 'true') {
    updateNotePanelStatus(panel, {
      dirty: false,
      updatedAt: Number(panel.getAttribute('data-note-updated-at') || 0)
    });
  }
  row.classList.remove('note-open');
  const slot = row.querySelector('.note-panel-wrap');
  if (slot) {
    slot.innerHTML = '';
    slot.setAttribute('hidden', '');
  }
  setRowNoteButtonState(row, { active: false });
  if (activeNotePanelRow === row) activeNotePanelRow = null;
}

async function openNotePanelRow(row, button) {
  if (!row || !button) return false;
  const context = readNoteContextFromElement(button);
  if (!context.id) return false;

  const slot = row.querySelector('.note-panel-wrap');
  if (!slot) return false;

  const record = await loadNote(context.id);
  slot.innerHTML = buildNotePanelMarkup(context, record);
  slot.removeAttribute('hidden');
  row.classList.add('note-open');
  setRowNoteButtonState(row, { active: true, hasNote: !!(record && String(record.content || '').trim()) });
  activeNotePanelRow = row;

  const textarea = slot.querySelector('[data-note-input]');
  if (textarea) {
    requestAnimationFrame(() => {
      try {
        textarea.focus({ preventScroll: false });
        const len = textarea.value.length;
        textarea.setSelectionRange(len, len);
      } catch {}
    });
  }

  return true;
}

async function toggleNotePanelFromButton(button) {
  const btn = button && button.closest ? button.closest('.note-link') : null;
  if (!btn) return false;
  const row = btn.closest('.chart-row');
  if (!row) return false;

  if (row.classList.contains('note-open')) {
    await closeNotePanelRow(row);
    return true;
  }

  if (activeNotePanelRow && activeNotePanelRow !== row) {
    await closeNotePanelRow(activeNotePanelRow);
  }

  return openNotePanelRow(row, btn);
}

async function saveRowNotePanel(panel) {
  if (!panel) return null;
  const context = getNotePanelContext(panel);
  const textarea = panel.querySelector('[data-note-input]');
  if (!textarea || !context.id) return null;
  try {
    updateNotePanelStatus(panel, { saving: true });
    const record = await saveNote(context.id, context.title, context.link, textarea.value, {
      publisher: context.publisher,
      image: context.image,
      embedUrl: context.embedUrl,
      platform: context.platform,
      kind: context.kind
    });
    const row = panel.closest('.chart-row');
    const updatedAt = Number(record && record.updatedAt) || 0;
    updateNotePanelStatus(panel, { updatedAt, dirty: false, saving: false });
    if (row) setRowNoteButtonState(row, { active: true, hasNote: !!record });
    if (isFavoritesScopeMode()) {
      void renderMyPodcastsLibrary();
    }
    showToast(record ? noteText('noteSaved') : noteText('noteDeleted'));
    return record;
  } catch (error) {
    console.warn('Note save failed:', error);
    updateNotePanelStatus(panel, { saving: false, dirty: true, updatedAt: Number(panel.getAttribute('data-note-updated-at') || 0) });
    showToast(t('loadFailedRefresh'));
    return null;
  }
}

async function deleteRowNotePanel(panel) {
  if (!panel) return false;
  const context = getNotePanelContext(panel);
  const textarea = panel.querySelector('[data-note-input]');
  try {
    await deleteNote(context.id);
    if (textarea) textarea.value = '';
    updateNotePanelStatus(panel, { updatedAt: 0, dirty: false, saving: false });
    const row = panel.closest('.chart-row');
    if (row) setRowNoteButtonState(row, { active: true, hasNote: false });
    if (isFavoritesScopeMode()) {
      void renderMyPodcastsLibrary();
    }
    showToast(noteText('noteDeleted'));
    return true;
  } catch (error) {
    console.warn('Note delete failed:', error);
    showToast(t('loadFailedRefresh'));
    return false;
  }
}

function downloadRowNotePanel(panel, format) {
  if (!panel) return false;
  const context = getNotePanelContext(panel);
  const textarea = panel.querySelector('[data-note-input]');
  const content = textarea ? textarea.value : '';
  const updatedAt = Number(panel.getAttribute('data-note-updated-at') || 0) || Date.now();
  return downloadNote(format, context, content, updatedAt);
}

async function copyRowNotePanel(panel) {
  if (!panel) return false;
  const textarea = panel.querySelector('[data-note-input]');
  const content = textarea ? String(textarea.value || '') : '';
  if (!content.trim()) {
    showToast(noteText('noteEmptyExport'));
    return false;
  }
  const ok = await copyTextValue(content);
  if (ok) showToast(noteText('noteCopied'));
  return ok;
}

async function handleNoteTimestampAction(target) {
  const node = target && target.closest ? target.closest('[data-note-seek]') : null;
  if (!node) return false;
  const seconds = Number(node.getAttribute('data-note-seek') || '');
  if (!Number.isFinite(seconds) || seconds < 0) return false;

  const playlistOverlay = node.closest('.plm-note-overlay');
  if (playlistOverlay) {
    return seekTimestampForPlaylistOverlay(seconds);
  }

  const row = node.closest('.chart-row');
  if (!row) return false;
  return seekTimestampForRow(row, seconds);
}

function getRankTrendForItem(item) {
  if (!(currentRankTrendMap instanceof Map) || !currentRankTrendMap.size) return '';
  const key = normalizeCrossPlatformKeyPart(item && item.title);
  if (!key) return '';
  const trend = currentRankTrendMap.get(key);
  return (trend === 'up' || trend === 'down' || trend === 'same') ? trend : '';
}

function ensureHistoryControlStyles() {
  if (document.getElementById('history-tools-style')) return;
  const style = document.createElement('style');
  style.id = 'history-tools-style';
  style.textContent = `
.history-tools-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 220px));
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
}
.history-tools-row .history-tool {
  width: 100%;
  min-width: 0;
  max-width: none;
}
.history-tools-row .history-tool select {
  width: 100%;
  min-width: 0;
}
#daily-reminder {
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.35;
  opacity: .92;
  text-align: center;
}
@media (max-width: 760px) {
  .history-tools-row {
    width: 100%;
    max-width: 100%;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 10px;
  }
  .history-tools-row .history-tool select {
    min-height: 54px;
    font-size: 16px;
  }
  #daily-reminder {
    text-align: start;
    font-size: 13px;
    line-height: 1.45;
  }
}
`;
  document.head.appendChild(style);
}

function getLocalizedDateLabelFallback() {
  try {
    if (typeof Intl !== 'undefined' && Intl.DisplayNames) {
      const locales = [];
      const primary = getIntlLocaleTag();
      if (primary) locales.push(primary);
      locales.push('en');
      let locale = locales[0] || 'en';
      if (typeof Intl.DisplayNames.supportedLocalesOf === 'function') {
        const supported = Intl.DisplayNames.supportedLocalesOf(locales);
        if (supported && supported.length) locale = supported[0];
      }
      const dn = new Intl.DisplayNames([locale], { type: 'dateTimeField' });
      const field = String(dn.of('day') || dn.of('date') || '').trim();
      if (field) return field;
    }
  } catch { }
  return String(t('dateLatest') || '').trim() || '';
}

function getDateLabelText() {
  const raw = String(t('dateLabel') || '').trim();
  const period = String(t('periodLabel') || '').trim();
  if (!raw || (period && raw === period)) return getLocalizedDateLabelFallback();
  return raw;
}

function updateHistoryToolbarTexts() {
  const scopeLabel = t('languageChart');
  const periodLabel = t('periodLabel');
  const dateLabel = getDateLabelText();

  if (scopeSelect) {
    scopeSelect.setAttribute('aria-label', scopeLabel);
    scopeSelect.title = scopeLabel;
  }

  const periodLabelEl = document.getElementById('period-select-label');
  if (periodLabelEl) periodLabelEl.textContent = periodLabel;

  if (periodSelect) {
    periodSelect.setAttribute('aria-label', periodLabel);
    periodSelect.title = periodLabel;
  }

  const dateLabelEl = document.getElementById('history-date-label');
  if (dateLabelEl) dateLabelEl.textContent = dateLabel;

  if (dateSelect) {
    dateSelect.setAttribute('aria-label', dateLabel);
    dateSelect.title = dateLabel;
    const latestOption = dateSelect.querySelector('option[value=""]');
    if (latestOption) latestOption.textContent = t('dateLatest');
  }
}

function updatePeriodUiLabels() {
  const el = periodSelect || document.getElementById('period-select');
  if (!el) return;
  ensureScopeSelectOptions();

  const labels = {
    daily: t('periodDaily'),
    week: t('periodWeek'),
    month: t('periodMonth'),
    year: t('periodYear'),
    all: t('periodAll')
  };

  Array.from(el.options).forEach((option) => {
    if (labels[option.value]) option.textContent = labels[option.value];
  });

  updateHistoryToolbarTexts();
}

async function refreshHistoryDateOptions(prefetchedSnapshots) {
  if (!dateSelect) return [];

  const comboKey = comboKeyForCurrent();
  let snapshots = Array.isArray(prefetchedSnapshots) ? prefetchedSnapshots : null;
  if (!snapshots) snapshots = await getSnapshotsForCurrentSelection();
  if ((!snapshots || !snapshots.length) && snapshotRowsCache.has(comboKey)) {
    snapshots = (snapshotRowsCache.get(comboKey) || []).slice();
  }
  if (!Array.isArray(snapshots)) snapshots = [];

  const selectedBefore = String(dateSelect.value || '').trim();
  const pending = String(dateSelect.dataset.pendingValue || '').trim();
  const target = pending || selectedBefore;

  const uniqueDates = Array.from(new Set(
    snapshots.map((row) => String(row && row.snapshotDate ? row.snapshotDate : '')).filter(Boolean)
  )).sort((a, b) => b.localeCompare(a));

  dateSelect.innerHTML = '';

  const latestOption = document.createElement('option');
  latestOption.value = '';
  latestOption.textContent = t('dateLatest');
  dateSelect.appendChild(latestOption);

  uniqueDates.forEach((dateKey) => {
    const option = document.createElement('option');
    option.value = dateKey;
    option.textContent = formatDateKeyLocalized(dateKey);
    dateSelect.appendChild(option);
  });

  if (target && uniqueDates.includes(target)) {
    dateSelect.value = target;
  } else if (selectedBefore && selectedBefore !== '' && uniqueDates.includes(selectedBefore)) {
    dateSelect.value = selectedBefore;
  } else {
    dateSelect.value = '';
  }

  if (dateSelect.dataset.pendingValue) delete dateSelect.dataset.pendingValue;
  dateSelect.disabled = false;

  updateHistoryToolbarTexts();
  return snapshots;
}

function ensureHistoryControls() {
  ensureHistoryControlStyles();

  let row = document.getElementById('history-tools-row');
  if (!row) {
    const host = document.querySelector('.select-container') || document.querySelector('.menu-container');
    const menuContainer = document.querySelector('.menu-container');
    row = document.createElement('div');
    row.id = 'history-tools-row';
    row.className = 'history-tools-row';
    row.innerHTML = `
      <div class="history-tool">
        <select id="chart-scope-select" aria-label="${t('languageChart')}" title="${t('languageChart')}">
          <option value="country">${t('languageChart')}</option>
          <option value="lang-en">${buildScopeSelectOptionLabel('lang-en')}</option>
          <option value="lang-zh">${buildScopeSelectOptionLabel('lang-zh')}</option>
          <option value="lang-es">${buildScopeSelectOptionLabel('lang-es')}</option>
          <option value="lang-ar">${buildScopeSelectOptionLabel('lang-ar')}</option>
          <option value="lang-fr">${buildScopeSelectOptionLabel('lang-fr')}</option>
          <option value="lang-pt">${buildScopeSelectOptionLabel('lang-pt')}</option>
          <option value="lang-de">${buildScopeSelectOptionLabel('lang-de')}</option>
          <option value="lang-nl">${buildScopeSelectOptionLabel('lang-nl')}</option>
        </select>
      </div>
      <div class="history-tool">
        <label id="period-select-label" for="period-select">${t('periodLabel')}</label>
        <select id="period-select">
          <option value="daily">${t('periodDaily')}</option>
          <option value="week">${t('periodWeek')}</option>
          <option value="month">${t('periodMonth')}</option>
          <option value="year">${t('periodYear')}</option>
          <option value="all">${t('periodAll')}</option>
        </select>
      </div>
      <div class="history-tool">
        <label id="history-date-label" for="history-date-select">${getDateLabelText()}</label>
        <select id="history-date-select">
          <option value="">${t('dateLatest')}</option>
        </select>
      </div>`;

    if (menuContainer && menuContainer.parentNode) {
      menuContainer.parentNode.insertBefore(row, menuContainer.nextSibling);
    } else if (host) {
      host.appendChild(row);
    }
  }

  scopeSelect = document.getElementById('chart-scope-select');
  periodSelect = document.getElementById('period-select');
  dateSelect = document.getElementById('history-date-select');

  if (scopeSelect && !scopeSelect.dataset.boundChange) {
    scopeSelect.addEventListener('change', () => {
      myPodcastsScopeActive = false;
      resetLimitAndReload();
    });
    scopeSelect.dataset.boundChange = '1';
  }

  if (periodSelect && !periodSelect.dataset.boundChange) {
    periodSelect.addEventListener('change', resetLimitAndReload);
    periodSelect.dataset.boundChange = '1';
  }

  if (dateSelect && !dateSelect.dataset.boundChange) {
    dateSelect.addEventListener('change', handleHistoryDateChange);
    dateSelect.dataset.boundChange = '1';
  }

  if (!document.getElementById('daily-reminder')) {
    const host = row.parentNode || document.querySelector('.select-container') || document.querySelector('.menu-container');
    if (host) {
      const reminder = document.createElement('div');
      reminder.id = 'daily-reminder';
      reminder.style.display = 'none';
      host.appendChild(reminder);
    }
  }

  historyReminderEl = document.getElementById('daily-reminder');
  ensureScopeSelectOptions();
  updatePeriodUiLabels();
  updateHistoryToolbarTexts();
  if (!row.dataset.historyInitLoaded) {
    row.dataset.historyInitLoaded = '1';
    Promise.resolve(refreshHistoryDateOptions()).catch((error) => console.warn('History date options init failed:', error));
  }
}


function setMyPodcastsProgress(text = '') {
  if (!myPodcastsProgressEl) return;
  myPodcastsProgressEl.textContent = String(text || '').trim();
}

function setMyPodcastsBusyState(busy) {
  myPodcastsBusy = !!busy;
  if (myPodcastsRssInputEl && !myPodcastsRssInputEl.hidden) myPodcastsRssInputEl.disabled = myPodcastsBusy;
  if (myPodcastsAddBtnEl && !myPodcastsAddBtnEl.hidden) myPodcastsAddBtnEl.disabled = myPodcastsBusy;
  if (myPodcastsYoutubeBtnEl) myPodcastsYoutubeBtnEl.disabled = myPodcastsBusy;
  if (myPodcastsOpmlBtnEl) myPodcastsOpmlBtnEl.disabled = myPodcastsBusy;
  if (myPodcastsOpmlPickEl && !myPodcastsOpmlPickEl.hidden) myPodcastsOpmlPickEl.disabled = myPodcastsBusy;
  if (myPodcastsRetryBtnEl) myPodcastsRetryBtnEl.disabled = myPodcastsBusy;
  if (myPodcastsTabsEl) {
    myPodcastsTabsEl.querySelectorAll('[data-my-podcasts-tab]').forEach((btn) => {
      btn.disabled = myPodcastsBusy;
    });
  }
  if (myPodcastsImportModesEl) {
    myPodcastsImportModesEl.querySelectorAll('[data-my-podcasts-import-mode]').forEach((btn) => {
      btn.disabled = myPodcastsBusy;
    });
  }
  updateMyPodcastsImportUi();
}

function buildFavoriteFeedUrlSet() {
  const set = new Set();
  if (!favoritePodcastMap || !favoritePodcastMap.size) return set;
  favoritePodcastMap.forEach((value) => {
    const feedUrl = normalizeFavoriteFeedUrl(inferFavoriteFeedUrlFromRecord(value));
    if (feedUrl) set.add(feedUrl);
  });
  return set;
}

function setMyPodcastsFailedCandidates(items) {
  myPodcastsFailedCandidates = (Array.isArray(items) ? items : [])
    .map((item) => ({
      feedUrl: normalizeFavoriteFeedUrl(item && item.feedUrl),
      title: String((item && item.title) || '').trim(),
      publisher: String((item && item.publisher) || '').trim(),
      siteUrl: normalizeFavoriteUrlKey((item && item.siteUrl) || ''),
      reason: String((item && item.reason) || '').trim()
    }))
    .filter((item) => item.feedUrl);
  updateMyPodcastsRetryButton();
}

function findMyPodcastsToolsAnchor() {
  return document.querySelector('.command-bar')
    || document.getElementById('history-tools-row')
    || document.querySelector('.history-tools-row')
    || document.querySelector('.menu-container')
    || document.querySelector('.select-container')
    || null;
}

function updateMyPodcastsRetryButton() {
  if (!myPodcastsRetryBtnEl) return;
  const failedCount = Array.isArray(myPodcastsFailedCandidates) ? myPodcastsFailedCandidates.length : 0;
  if (failedCount > 0) {
    myPodcastsRetryBtnEl.hidden = false;
    myPodcastsRetryBtnEl.disabled = myPodcastsBusy;
    myPodcastsRetryBtnEl.textContent = `${t('retry')} (${failedCount})`;
    myPodcastsRetryBtnEl.title = myPodcastsRetryBtnEl.textContent;
  } else {
    myPodcastsRetryBtnEl.hidden = true;
    myPodcastsRetryBtnEl.textContent = t('retry');
    myPodcastsRetryBtnEl.title = t('retry');
  }
}

function getMyPodcastsLocalizedText(key) {
  const value = t(key);
  return typeof value === 'string' ? value.trim() : '';
}

function getMyPodcastsImportActionSvg(mode = myPodcastsImportMode) {
  const safeMode = normalizeMyPodcastsImportMode(mode);
  if (safeMode === 'opml') {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4v10m0 0-4-4m4 4 4-4M5 18h14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function getMyPodcastsImportModeLabel(mode = myPodcastsImportMode) {
  const safeMode = normalizeMyPodcastsImportMode(mode);
  if (safeMode === 'youtube') return getMyPodcastsLocalizedText('myPodcastsImportYoutube');
  if (safeMode === 'apple') return getMyPodcastsLocalizedText('myPodcastsImportApple');
  if (safeMode === 'spotify') return getMyPodcastsLocalizedText('myPodcastsImportSpotify');
  if (safeMode === 'opml') return getMyPodcastsLocalizedText('myPodcastsImportOpml');
  return getMyPodcastsLocalizedText('myPodcastsImportRss');
}

function getMyPodcastsImportActionLabel(mode = myPodcastsImportMode) {
  const safeMode = normalizeMyPodcastsImportMode(mode);
  if (safeMode === 'youtube') return getMyPodcastsLocalizedText('myPodcastsImportActionYoutube');
  if (safeMode === 'apple') return getMyPodcastsLocalizedText('myPodcastsImportActionApple');
  if (safeMode === 'spotify') return getMyPodcastsLocalizedText('myPodcastsImportActionSpotify');
  if (safeMode === 'opml') return getMyPodcastsLocalizedText('myPodcastsImportActionOpml');
  return getMyPodcastsLocalizedText('myPodcastsImportActionRss');
}

function getMyPodcastsImportModeIconSvg(mode = myPodcastsImportMode) {
  const safeMode = normalizeMyPodcastsImportMode(mode);
  if (safeMode === 'rss') {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g transform="translate(1.15 1.1) scale(0.68)"><path fill="currentColor" d="M9.565 26.319c0-2.161-1.752-3.913-3.912-3.913s-3.913 1.752-3.913 3.913c0 2.161 1.752 3.913 3.913 3.913s3.912-1.752 3.912-3.913zM20.651 30.231h-5.543c0-7.383-5.985-13.368-13.368-13.368v-5.543c10.444 0 18.911 8.467 18.911 18.911v0zM24.563 30.231c0-12.605-10.218-22.823-22.823-22.823v-5.706c15.756 0 28.529 12.773 28.529 28.529h-5.706z"/></g></svg>';
  }
  if (safeMode === 'youtube') {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g transform="translate(1.55 4.05) scale(1.04)"><path fill="currentColor" d="M7.988 11.586V5.974c1.992.938 3.535 1.843 5.36 2.82-1.505.834-3.368 1.77-5.36 2.792zM19.091 3.183c-.344-.453-.929-.805-1.553-.922C15.705 1.913 4.271 1.912 2.439 2.261c-.5.094-.945.32-1.328.672C-.5 4.43.005 12.452.393 13.751c.164.562.375.968.641 1.234.342.352.812.594 1.35.703 1.51.312 9.284.487 15.122.047.538-.094 1.014-.344 1.39-.711 1.49-1.49 1.389-9.963.195-11.842z"/></g></svg>';
  }
  if (safeMode === 'apple') {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g transform="translate(1.35 1.25) scale(0.665)"><path fill="currentColor" d="M7.12 0c-3.937-.011-7.131 3.183-7.12 7.12v17.76c-.011 3.937 3.183 7.131 7.12 7.12h17.76c3.937.011 7.131-3.183 7.12-7.12v-17.76c.011-3.937-3.183-7.131-7.12-7.12zM15.817 3.421c3.115 0 5.932 1.204 8.079 3.453 1.631 1.693 2.547 3.489 3.016 5.855.161.787.161 2.932.009 3.817-.5 2.817-2.041 5.339-4.317 7.063-.812.615-2.797 1.683-3.115 1.683-.12 0-.129-.12-.077-.615.099-.792.192-.953.64-1.141.713-.296 1.932-1.167 2.677-1.911 1.301-1.303 2.229-2.932 2.677-4.719.281-1.1.244-3.543-.063-4.672-.969-3.595-3.907-6.385-7.5-7.136-1.041-.213-2.943-.213-4 0-3.636.751-6.647 3.683-7.563 7.371-.245 1.004-.245 3.448 0 4.448.609 2.443 2.188 4.681 4.255 6.015.407.271.896.547 1.1.631.447.192.547.355.629 1.14.052.485.041.62-.072.62-.073 0-.62-.235-1.199-.511l-.052-.041c-3.297-1.62-5.407-4.364-6.177-8.016-.187-.943-.224-3.187-.036-4.052.479-2.323 1.396-4.135 2.921-5.739 2.199-2.319 5.027-3.543 8.172-3.543zM16 7.172c.541.005 1.068.052 1.473.14 3.715.828 6.344 4.543 5.833 8.229-.203 1.489-.713 2.709-1.619 3.844-.448.573-1.537 1.532-1.729 1.532-.032 0-.063-.365-.063-.803v-.808l.552-.661c2.093-2.505 1.943-6.005-.339-8.296-.885-.896-1.912-1.423-3.235-1.661-.853-.161-1.031-.161-1.927-.011-1.364.219-2.417.744-3.355 1.672-2.291 2.271-2.443 5.791-.348 8.296l.552.661v.813c0 .448-.037.807-.084.807-.036 0-.349-.213-.683-.479l-.047-.016c-1.109-.885-2.088-2.453-2.495-3.995-.244-.932-.244-2.697.011-3.625.672-2.505 2.521-4.448 5.079-5.359.547-.193 1.509-.297 2.416-.281zM15.823 11.156c.417 0 .828.084 1.131.24.645.339 1.183.989 1.385 1.677.62 2.104-1.609 3.948-3.631 3.005h-.015c-.953-.443-1.464-1.276-1.475-2.36 0-.979.541-1.828 1.484-2.328.297-.156.709-.235 1.125-.235zM15.812 17.464c1.319-.005 2.271.463 2.625 1.291.265.62.167 2.573-.292 5.735-.307 2.208-.479 2.765-.905 3.141-.589.52-1.417.667-2.209.385h-.004c-.953-.344-1.157-.808-1.553-3.527-.452-3.161-.552-5.115-.285-5.735.348-.823 1.296-1.285 2.624-1.291z"/></path></g></svg>';
  }
  if (safeMode === 'spotify') {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g transform="translate(2 2) scale(1)"><path fill="currentColor" d="M15.915 8.865C12.692 6.951 7.375 6.775 4.297 7.709c-.494.149-1.016-.129-1.166-.624-.15-.494.129-1.016.623-1.166 3.533-1.073 9.405-.866 13.116 1.337.444.264.59.838.326 1.282-.262.444-.838.591-1.281.327zm-.105 2.835c-.226.367-.706.482-1.073.257-2.687-1.652-6.785-2.13-9.964-1.165-.413.124-.848-.108-.973-.52-.124-.412.108-.847.52-.972 3.631-1.102 8.146-.568 11.233 1.329.367.225.482.705.257 1.071zm-1.224 2.723c-.18.294-.563.387-.857.207-2.348-1.435-5.304-1.759-8.785-.964-.335.077-.67-.133-.746-.469-.077-.335.132-.669.469-.746 3.809-.871 7.076-.496 9.712 1.115.294.18.387.563.207.857zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0z"/></g></svg>';
  }
  if (safeMode === 'opml') {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g transform="translate(0.72 -0.42) scale(0.02235)"><path fill="currentColor" d="M271 226q-47 0 -86 23t-62 62.5t-23 85.5v459q0 46 23 85.5t62 62t86 22.5h458q47 0 86 -22.5t62 -62t23 -85.5v-459q0 -46 -23 -85.5t-62 -62.5t-86 -23h-458zM502 336q78 0 146 40q66 39 104 104q40 68 40 147t-40 146q-38 66 -104 105q-68 40 -146.5 40t-146.5 -40q-66 -39 -104 -105q-40 -67 -40 -146t40 -147q38 -65 104 -104q68 -40 147 -40zM502 424q-56 0 -102.5 27.5t-74 74t-27.5 101.5t27.5 101.5t74 74t102 27.5t102 -27.5t74 -74t27.5 -101.5t-27.5 -101.5t-74 -74t-101.5 -27.5zM502 562q29 0 50 21t21 50.5t-21 50.5t-50.5 21t-50.5 -21t-21 -50.5t21 -50.5t51 -21z"/></g></svg>';
  }
  return '';
}

function buildMyPodcastsImportModeButton(mode, active = false) {
  const safeMode = normalizeMyPodcastsImportMode(mode);
  return `<button class="my-podcasts-mode my-podcasts-mode--${safeMode}${active ? ' is-active' : ''}" type="button" data-my-podcasts-import-mode="${safeMode}" aria-pressed="${active ? 'true' : 'false'}"><span class="my-podcasts-mode-icon my-podcasts-mode-icon--${safeMode}" aria-hidden="true">${getMyPodcastsImportModeIconSvg(safeMode)}</span><span class="my-podcasts-mode-label">${escapeHtml(getMyPodcastsImportModeLabel(safeMode))}</span></button>`;
}

function getMyPodcastsImportPlaceholder(mode = myPodcastsImportMode) {
  const safeMode = normalizeMyPodcastsImportMode(mode);
  if (safeMode === 'youtube') return getMyPodcastsLocalizedText('myPodcastsImportPlaceholderYoutube');
  if (safeMode === 'apple') return getMyPodcastsLocalizedText('myPodcastsImportPlaceholderApple');
  if (safeMode === 'spotify') return getMyPodcastsLocalizedText('myPodcastsImportPlaceholderSpotify');
  return getMyPodcastsLocalizedText('myPodcastsImportPlaceholderRss');
}

function getMyPodcastsImportErrorMessage(error) {
  return getMyPodcastsLocalizedText('myPodcastsImportFailed');
}

function updateMyPodcastsImportUi() {
  myPodcastsImportMode = normalizeMyPodcastsImportMode(myPodcastsImportMode);

  if (myPodcastsImportModesEl) {
    myPodcastsImportModesEl.querySelectorAll('[data-my-podcasts-import-mode]').forEach((btn) => {
      const mode = normalizeMyPodcastsImportMode(btn.getAttribute('data-my-podcasts-import-mode'));
      const active = mode === myPodcastsImportMode;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  if (myPodcastsRssInputEl) {
    const useTextInput = myPodcastsImportMode !== 'opml';
    myPodcastsRssInputEl.hidden = !useTextInput;
    myPodcastsRssInputEl.disabled = myPodcastsBusy || !useTextInput;
    myPodcastsRssInputEl.placeholder = getMyPodcastsImportPlaceholder(myPodcastsImportMode);
  }

  if (myPodcastsOpmlPickEl) {
    const show = myPodcastsImportMode === 'opml';
    myPodcastsOpmlPickEl.hidden = !show;
    myPodcastsOpmlPickEl.disabled = myPodcastsBusy;
  }

  if (myPodcastsAddBtnEl) {
    const show = myPodcastsImportMode !== 'opml';
    myPodcastsAddBtnEl.hidden = !show;
    myPodcastsAddBtnEl.disabled = myPodcastsBusy || !show;
    myPodcastsAddBtnEl.innerHTML = getMyPodcastsImportActionSvg(myPodcastsImportMode);
    const actionLabel = getMyPodcastsImportActionLabel(myPodcastsImportMode);
    myPodcastsAddBtnEl.setAttribute('title', actionLabel);
    myPodcastsAddBtnEl.setAttribute('aria-label', actionLabel);
  }

  updateMyPodcastsRetryButton();
}

function syncMyPodcastsControlsLayout() {
  const root = myPodcastsControlsEl || document.getElementById('my-podcasts-tools');
  if (!root) return;
  const head = root.querySelector('.my-podcasts-library-head');
  const toolbar = root.querySelector('.my-podcasts-toolbar');
  const importRow = root.querySelector('.my-podcasts-import-row');
  const modes = myPodcastsImportModesEl || root.querySelector('#my-podcasts-import-modes');
  if (!head || !toolbar || !importRow || !modes) return;
  const isMobile = typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(max-width: 760px)').matches;
  if (isMobile) {
    if (modes.parentNode !== head || modes.previousElementSibling !== importRow) {
      importRow.insertAdjacentElement('afterend', modes);
    }
  } else if (modes.parentNode !== toolbar) {
    toolbar.appendChild(modes);
  }
}

function parseOpmlFeedCandidates(opmlText) {
  const xml = new DOMParser().parseFromString(String(opmlText || ''), 'text/xml');
  if (!xml || xml.querySelector('parsererror')) throw new Error(t('loadFailedRefresh'));

  const outlines = Array.from(xml.querySelectorAll('outline[xmlUrl]'));
  const seen = new Set();
  const out = [];

  outlines.forEach((node) => {
    const feedRaw = String(node.getAttribute('xmlUrl') || '').trim();
    const feedUrl = normalizeFavoriteFeedUrl(feedRaw);
    if (!feedUrl || seen.has(feedUrl)) return;
    seen.add(feedUrl);

    const title = String(node.getAttribute('title') || node.getAttribute('text') || '').trim();
    const publisher = String(node.getAttribute('author') || '').trim();
    const siteUrl = normalizeFavoriteUrlKey(String(node.getAttribute('htmlUrl') || '').trim());
    out.push({ feedUrl, title, publisher, siteUrl });
  });

  return out;
}

async function loadRssFeedWithRetry(rssUrl, attempts = 2) {
  let lastError = null;
  for (let i = 0; i < Math.max(1, attempts); i += 1) {
    try {
      return await loadCastboxRssFeed(rssUrl, { forceRefresh: i > 0 });
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error('RSS load failed');
}

function buildFavoriteRecordFromRssFeed(feed, options = {}) {
  const safeFeedUrl = normalizeFavoriteFeedUrl(feed && feed.rssUrl);
  const title = String((feed && feed.title) || options.title || '').trim();
  const publisher = String((feed && feed.publisher) || options.publisher || '').trim();
  const image = String((feed && feed.image) || '').trim();
  const openUrl = normalizeFavoriteUrlKey((feed && feed.link) || options.siteUrl || safeFeedUrl);
  return normalizeFavoriteRecord({
    title,
    publisher,
    image,
    url: openUrl || safeFeedUrl,
    feedUrl: safeFeedUrl,
    embedUrl: safeFeedUrl,
    embedPlatform: 'rss',
    embedKind: 'top-podcasts',
    sourceType: String(options.sourceType || 'rss').trim().toLowerCase() || 'rss',
    originPlatform: 'rss',
    originCountry: '',
    originType: 'top-podcasts',
    addedAt: Date.now(),
    updatedAt: Date.now()
  });
}

function parseYouTubeImportCandidate(rawUrl) {
  const parsed = safeUrlParse(rawUrl);
  if (!parsed) return null;
  const hostname = String(parsed.hostname || '').trim().toLowerCase().replace(/^www\./, '');
  const pathname = String(parsed.pathname || '').trim();
  const isYoutubeHost = hostname === 'youtube.com' || hostname === 'm.youtube.com' || hostname === 'youtu.be';
  if (!isYoutubeHost) return null;

  const normalizedUrl = parsed.toString();
  const listId = String(parsed.searchParams.get('list') || '').trim();
  const videoId = extractYoutubeVideoIdFromUrl(normalizedUrl);

  if (listId) {
    return {
      kind: 'playlist',
      openUrl: normalizedUrl,
      embedUrl: `https://www.youtube.com/embed?listType=playlist&list=${encodeURIComponent(listId)}`,
      embedKind: 'top-podcasts',
      metaUrl: `https://www.youtube.com/playlist?list=${encodeURIComponent(listId)}`,
      listId,
      videoId,
      fallbackTitle: getRuntimeText('runtime.youtubeFallbackTitlePlaylist', 'YouTube Playlist'),
      fallbackPublisher: getRuntimeText('runtime.youtubeFallbackPublisher', 'YouTube')
    };
  }

  if (videoId) {
    return {
      kind: 'video',
      openUrl: normalizedUrl,
      embedUrl: getYoutubeVideoEmbedUrl(normalizedUrl),
      embedKind: 'top-episodes',
      metaUrl: normalizedUrl,
      videoId,
      fallbackTitle: getRuntimeText('runtime.youtubeFallbackTitleVideo', 'YouTube Video'),
      fallbackPublisher: getRuntimeText('runtime.youtubeFallbackPublisher', 'YouTube')
    };
  }

  const pathParts = pathname.replace(/^\/+/, '').split('/').filter(Boolean);
  if (!pathParts.length) return null;

  let channelLabel = '';
  let channelId = '';
  let embedUrl = '';
  if (pathParts[0] === 'channel' && pathParts[1] && /^UC[\w-]{10,}$/i.test(pathParts[1])) {
    channelId = pathParts[1];
    const uploadsListId = `UU${channelId.slice(2)}`;
    channelLabel = channelId;
    embedUrl = `https://www.youtube.com/embed?listType=playlist&list=${encodeURIComponent(uploadsListId)}`;
  } else if (pathParts[0] === 'user' && pathParts[1]) {
    return {
      kind: 'unsupported',
      reason: 'youtube-channel-legacy-user-unsupported',
      openUrl: normalizedUrl
    };
  } else if (String(pathParts[0] || '').startsWith('@')) {
    return {
      kind: 'unsupported',
      reason: 'youtube-channel-handle-unsupported',
      openUrl: normalizedUrl,
      fallbackTitle: String(pathParts[0] || '').trim()
    };
  } else if (pathParts[0] === 'c' && pathParts[1]) {
    return {
      kind: 'unsupported',
      reason: 'youtube-channel-custom-unsupported',
      openUrl: normalizedUrl
    };
  }

  if (!embedUrl) return null;
  return {
    kind: 'channel',
    openUrl: normalizedUrl,
    embedUrl,
    embedKind: 'top-podcasts',
    channelId,
    channelLabel,
    fallbackTitle: channelLabel || getRuntimeText('runtime.youtubeFallbackTitleChannel', 'YouTube Channel'),
    fallbackPublisher: channelLabel || getRuntimeText('runtime.youtubeFallbackPublisher', 'YouTube')
  };
}

async function resolveYouTubeRuntimeMeta(candidate) {
  if (!candidate || typeof candidate !== 'object') return null;
  const playlistId = String(candidate.listId || '').trim();
  const videoId = String(candidate.videoId || '').trim();
  const host = document.createElement('div');
  host.id = `yt-import-probe-${Math.random().toString(36).slice(2, 11)}`;
  host.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:560px;height:315px;opacity:0;pointer-events:none;';
  document.body.appendChild(host);
  try {
    await loadYouTubeIframeApi();
    if (!window.YT || !window.YT.Player) return null;
    const data = await new Promise((resolve) => {
      let settled = false;
      const finish = (payload) => {
        if (settled) return;
        settled = true;
        resolve(payload || null);
      };
      const timer = window.setTimeout(() => finish(null), 6000);
      const playerVars = {
        playsinline: 1,
        rel: 0,
        modestbranding: 1,
        autoplay: 0,
        controls: 0,
        mute: 1
      };
      if (playlistId) {
        playerVars.listType = 'playlist';
        playerVars.list = playlistId;
      }
      const player = new window.YT.Player(host.id, {
        videoId: videoId || undefined,
        playerVars,
        events: {
          onReady: async () => {
            try {
              if (typeof player.mute === 'function') player.mute();
              if (typeof player.playVideo === 'function') player.playVideo();
            } catch { }
            const payload = await waitForValue(() => {
              try {
                const videoData = typeof player.getVideoData === 'function' ? player.getVideoData() : null;
                const activeVideoId = getActiveYouTubePlayerVideoId(player) || String((videoData && videoData.video_id) || '').trim();
                const title = String((videoData && videoData.title) || '').trim();
                const publisher = String((videoData && videoData.author) || '').trim();
                if (!activeVideoId && !title && !publisher) return null;
                return { title, publisher, videoId: activeVideoId };
              } catch {
                return null;
              }
            }, 7000, 150);
            try {
              if (typeof player.pauseVideo === 'function') player.pauseVideo();
            } catch { }
            try { player.destroy(); } catch { }
            clearTimeout(timer);
            finish(payload);
          },
          onError: () => {
            try { player.destroy(); } catch { }
            clearTimeout(timer);
            finish(null);
          }
        }
      });
    });
    if (!data) return null;
    const meta = {
      title: String(data.title || '').trim(),
      publisher: String(data.publisher || '').trim(),
      image: data.videoId ? buildYouTubeThumbnailFromUrl(`https://www.youtube.com/watch?v=${data.videoId}`) : ''
    };
    if (!meta.title && !meta.publisher && !meta.image) return null;
    return meta;
  } catch {
    return null;
  } finally {
    try { host.remove(); } catch { }
  }
}

function buildYouTubeOEmbedTargetUrl(candidate) {
  if (!candidate || typeof candidate !== 'object') return '';
  if (candidate.kind === 'video' && candidate.videoId) {
    return `https://www.youtube.com/watch?v=${encodeURIComponent(candidate.videoId)}`;
  }
  if (candidate.kind === 'playlist' && candidate.listId) {
    return `https://www.youtube.com/playlist?list=${encodeURIComponent(candidate.listId)}`;
  }
  if (candidate.kind === 'channel' && candidate.channelId) {
    const uploadsListId = `UU${String(candidate.channelId).slice(2)}`;
    return `https://www.youtube.com/playlist?list=${encodeURIComponent(uploadsListId)}`;
  }
  return '';
}

async function fetchYouTubeOEmbedMeta(candidate) {
  const targetUrl = buildYouTubeOEmbedTargetUrl(candidate);
  if (!targetUrl) return null;
  const requestUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(targetUrl)}&format=json`;
  try {
    const text = await fetchTextViaAllOrigins(requestUrl, { timeoutMs: 7000 });
    const payload = parsePossibleJson(text);
    if (!payload || typeof payload !== 'object') return null;
    const rawTitle = String(payload.title || '').trim();
    const author = String(payload.author_name || '').trim();
    const image = String(payload.thumbnail_url || '').trim();
    let title = rawTitle;
    let publisher = author;
    if (candidate && candidate.kind === 'channel' && author) {
      title = author;
      publisher = author;
    } else if (/^uploads from\s+/i.test(title) && author) {
      title = author;
    }
    if (!title && !publisher && !image) return null;
    return { title, publisher, image };
  } catch {
    return null;
  }
}

async function resolveYouTubeImportMeta(candidate) {
  const oembedMeta = await fetchYouTubeOEmbedMeta(candidate);
  const runtimeMeta = (!oembedMeta || !oembedMeta.title || !oembedMeta.publisher || !oembedMeta.image)
    ? await resolveYouTubeRuntimeMeta(candidate)
    : null;
  const fallbackPublisher = getRuntimeText('runtime.youtubeFallbackPublisher', 'YouTube');
  const publisher = String((oembedMeta && oembedMeta.publisher) || (runtimeMeta && runtimeMeta.publisher) || candidate.fallbackPublisher || fallbackPublisher).trim();
  let title = String((oembedMeta && oembedMeta.title) || (runtimeMeta && runtimeMeta.title) || candidate.fallbackTitle || publisher || fallbackPublisher).trim();
  let image = String((oembedMeta && oembedMeta.image) || (runtimeMeta && runtimeMeta.image) || candidate.prefetchedImage || '').trim();
  if (!image && candidate.videoId) image = buildYouTubeThumbnailFromUrl(`https://www.youtube.com/watch?v=${candidate.videoId}`);
  if (candidate && candidate.kind === 'channel') {
    title = publisher || title || getRuntimeText('runtime.youtubeFallbackTitleChannel', 'YouTube Channel');
  }
  if (/^uploads from\s+/i.test(title) && publisher) {
    title = publisher;
  }
  return { title, publisher, image };
}

async function addFavoriteFromYouTubeUrl(rawUrl, options = {}) {
  const candidate = parseYouTubeImportCandidate(rawUrl);
  if (!candidate) throw new Error(t('loadFailedRefresh'));
  if (candidate.kind === 'unsupported') {
    throw new Error(t('loadFailedRefresh'));
  }
  const meta = await resolveYouTubeImportMeta(candidate);
  const record = normalizeFavoriteRecord({
    favoriteKey: `u:${normalizeFavoriteUrlKey(candidate.openUrl)}`,
    title: meta.title,
    publisher: meta.publisher,
    image: meta.image,
    url: candidate.openUrl,
    embedUrl: candidate.embedUrl,
    embedPlatform: 'youtube',
    embedKind: candidate.embedKind,
    sourceType: String(options.sourceType || 'youtube').trim().toLowerCase() || 'youtube',
    originPlatform: 'youtube',
    originCountry: '',
    originType: candidate.embedKind,
    addedAt: Date.now(),
    updatedAt: Date.now()
  });
  if (!record.title || !record.embedUrl) throw new Error(t('loadFailedRefresh'));
  const result = upsertFavoriteRecord(record, { persist: options.persist !== false });
  if (!result.ok) throw new Error(t('loadFailedRefresh'));
  return { result, record, candidate, meta };
}

async function addFavoriteFromRssUrl(rawUrl, options = {}) {
  const feedUrl = normalizeFavoriteFeedUrl(rawUrl);
  if (!feedUrl) throw new Error(t('loadFailedRefresh'));

  const feed = await loadRssFeedWithRetry(feedUrl, 2);
  const record = buildFavoriteRecordFromRssFeed(feed, options);
  if (!record.title) throw new Error(t('loadFailedRefresh'));

  const result = upsertFavoriteRecord(record, { persist: options.persist !== false });
  if (!result.ok) throw new Error(t('loadFailedRefresh'));

  return { result, record, feed };
}

function parsePlatformLinkImportCandidate(platform, rawUrl) {
  const safePlatform = String(platform || '').trim().toLowerCase();
  if (safePlatform !== 'apple' && safePlatform !== 'spotify') return null;
  const parsed = safeUrlParse(rawUrl);
  if (!parsed) return null;
  const openUrl = parsed.toString();
  const embedKind = inferContentKindFromLink(safePlatform, openUrl);
  const inlineMeta = buildInlineEmbedMeta(safePlatform, embedKind, openUrl);
  if (!inlineMeta || !inlineMeta.embedUrl || !inlineMeta.embedPlatform) return null;
  return {
    platform: safePlatform,
    openUrl,
    embedUrl: inlineMeta.embedUrl,
    embedPlatform: inlineMeta.embedPlatform,
    embedKind: inlineMeta.embedKind || embedKind
  };
}

async function resolvePlatformImportMeta(candidate) {
  if (!candidate || typeof candidate !== 'object') return null;
  const platform = String(candidate.platform || '').trim().toLowerCase();
  const embedKind = String(candidate.embedKind || '').trim().toLowerCase() === 'top-episodes' ? 'top-episodes' : 'top-podcasts';

  if (platform === 'spotify') {
    const meta = embedKind === 'top-episodes'
      ? await resolveSpotifyEpisodeEmbedMeta(candidate.openUrl)
      : await resolveSpotifyShowEmbedMeta(candidate.openUrl);
    if (!meta) return null;
    return {
      title: String(meta.title || '').trim(),
      publisher: String(meta.publisher || '').trim(),
      image: String(meta.image || '').trim(),
      embedUrl: String(meta.embedUrl || candidate.embedUrl || '').trim()
    };
  }

  if (platform === 'apple') {
    if (embedKind === 'top-episodes') {
      const meta = await resolveAppleEpisodeEmbedMeta(candidate.embedUrl);
      if (!meta) return null;
      return {
        title: String(meta.title || '').trim(),
        publisher: String(meta.publisher || '').trim(),
        image: String(meta.image || '').trim(),
        embedUrl: String(candidate.embedUrl || '').trim(),
        feedUrl: ''
      };
    }
    const meta = await resolveApplePodcastImportMeta(
      candidate.openUrl,
      normalizeCountry(countrySelect && countrySelect.value ? countrySelect.value : 'us')
    );
    if (!meta) return null;
    return {
      title: String(meta.title || '').trim(),
      publisher: String(meta.publisher || '').trim(),
      image: String(meta.image || '').trim(),
      embedUrl: String(candidate.embedUrl || '').trim(),
      feedUrl: String(meta.feedUrl || '').trim()
    };
  }

  return null;
}

async function addFavoriteFromPlatformUrl(platform, rawUrl, options = {}) {
  const candidate = parsePlatformLinkImportCandidate(platform, rawUrl);
  if (!candidate) throw new Error(t('loadFailedRefresh'));

  const meta = await resolvePlatformImportMeta(candidate);
  const brandLabel = platform === 'apple' ? 'Apple Podcasts' : 'Spotify';
  const record = normalizeFavoriteRecord({
    favoriteKey: `${candidate.platform}:${normalizeFavoriteUrlKey(candidate.openUrl)}`,
    title: String((meta && meta.title) || '').trim() || brandLabel,
    publisher: String((meta && meta.publisher) || '').trim() || brandLabel,
    image: String((meta && meta.image) || '').trim(),
    url: candidate.openUrl,
    feedUrl: String((meta && meta.feedUrl) || '').trim(),
    embedUrl: String((meta && meta.embedUrl) || candidate.embedUrl || '').trim(),
    embedPlatform: candidate.embedPlatform,
    embedKind: candidate.embedKind,
    sourceType: String(options.sourceType || `${candidate.platform}-import`).trim().toLowerCase() || `${candidate.platform}-import`,
    originPlatform: candidate.platform,
    originCountry: '',
    originType: candidate.embedKind,
    addedAt: Date.now(),
    updatedAt: Date.now()
  });

  if (!record.title || !record.embedUrl) {
    throw new Error(t('loadFailedRefresh'));
  }

  const result = upsertFavoriteRecord(record, { persist: options.persist !== false });
  if (!result.ok) throw new Error(t('loadFailedRefresh'));
  return { result, record, candidate, meta };
}

async function importMyPodcastsCandidates(candidates, options = {}) {
  const sourceType = String((options && options.sourceType) || 'opml').trim().toLowerCase() || 'opml';
  const input = Array.isArray(candidates) ? candidates : [];
  const existingFeedSet = buildFavoriteFeedUrlSet();

  const queue = [];
  let skipped = 0;

  input.forEach((item) => {
    const feedUrl = normalizeFavoriteFeedUrl(item && item.feedUrl);
    if (!feedUrl) return;
    if (existingFeedSet.has(feedUrl)) {
      skipped += 1;
      return;
    }
    queue.push({
      feedUrl,
      title: String((item && item.title) || '').trim(),
      publisher: String((item && item.publisher) || '').trim(),
      siteUrl: normalizeFavoriteUrlKey((item && item.siteUrl) || '')
    });
  });

  const total = queue.length;
  let done = 0;
  let added = 0;
  let updated = 0;
  let failed = 0;
  let lastRenderedSuccess = 0;
  let lastRenderAt = 0;
  const failedCandidates = [];

  if (!total) {
    return { total, skipped, added, updated, success: 0, failed, failedCandidates };
  }

  setMyPodcastsProgress(`0/${total}`);

  await mapWithConcurrency(queue, 4, async (candidate) => {
    try {
      const out = await addFavoriteFromRssUrl(candidate.feedUrl, {
        sourceType,
        title: candidate.title,
        publisher: candidate.publisher,
        siteUrl: candidate.siteUrl,
        persist: false
      });

      if (out && out.result && out.result.ok) {
        if (out.result.added) added += 1;
        else updated += 1;

        existingFeedSet.add(candidate.feedUrl);

        await persistFavoriteMapToIndexedDb();
      } else {
        failed += 1;
        failedCandidates.push({ ...candidate, reason: 'insert-failed' });
      }
    } catch (error) {
      failed += 1;
      failedCandidates.push({ ...candidate, reason: error && error.message ? String(error.message) : 'load-failed' });
    } finally {
      done += 1;
      const success = added + updated;
      const now = Date.now();
      const shouldRender = isFavoritesScopeMode()
        && success > lastRenderedSuccess
        && (done === total || (now - lastRenderAt) >= 220);

      setMyPodcastsProgress(`${done}/${total}`);

      if (shouldRender) {
        lastRenderedSuccess = success;
        lastRenderAt = now;
        await renderMyPodcastsLibrary();
      }

      if (shouldRender || done === total || done % 8 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    }
  });

  return {
    total,
    skipped,
    added,
    updated,
    success: added + updated,
    failed,
    failedCandidates
  };
}

async function handleMyPodcastsAddRss() {
  if (!myPodcastsRssInputEl || myPodcastsBusy) return;
  const raw = String(myPodcastsRssInputEl.value || '').trim();
  if (!raw) return;

  setMyPodcastsBusyState(true);
  setMyPodcastsProgress('...');
  try {
    const out = await addFavoriteFromRssUrl(raw, { sourceType: 'rss', persist: false });
    await persistFavoriteMapToIndexedDb();

    myPodcastsRssInputEl.value = '';
    setMyPodcastsProgress(out && out.result && out.result.added ? '+1' : '=1');
    showToast({
      icon: '❤️',
      message: String(out && out.record && out.record.title || '').trim() || getFavoriteAddedMessage(),
      duration: 2200
    });
    await ensureNotificationPermissionFromGesture();

    if (isFavoritesScopeMode()) {
      await renderMyPodcastsLibrary();
    }
  } catch (error) {
    console.warn('Add RSS favorite failed:', error);
    setMyPodcastsProgress('!');
    showToast(t('loadFailedRefresh'));
  } finally {
    setMyPodcastsBusyState(false);
    setTimeout(() => setMyPodcastsProgress(''), 1600);
  }
}

async function handleMyPodcastsAddYouTube() {
  if (!myPodcastsRssInputEl || myPodcastsBusy) return;
  const raw = String(myPodcastsRssInputEl.value || '').trim();
  if (!raw) return;

  setMyPodcastsBusyState(true);
  setMyPodcastsProgress('...');
  try {
    const out = await addFavoriteFromYouTubeUrl(raw, { sourceType: 'youtube-import', persist: false });
    await persistFavoriteMapToIndexedDb();

    myPodcastsRssInputEl.value = '';
    setMyPodcastsProgress(out && out.result && out.result.added ? '+1' : '=1');
    showToast({
      icon: '▶',
      message: String(out && out.record && out.record.title || '').trim() || 'YouTube',
      duration: 2200
    });

    if (isFavoritesScopeMode()) {
      await renderMyPodcastsLibrary();
    }
  } catch (error) {
    console.warn('Add YouTube favorite failed:', error);
    setMyPodcastsProgress('!');
    showToast(getMyPodcastsImportErrorMessage(error));
  } finally {
    setMyPodcastsBusyState(false);
    setTimeout(() => setMyPodcastsProgress(''), 1600);
  }
}

async function handleMyPodcastsAddApple() {
  if (!myPodcastsRssInputEl || myPodcastsBusy) return;
  const raw = String(myPodcastsRssInputEl.value || '').trim();
  if (!raw) return;

  setMyPodcastsBusyState(true);
  setMyPodcastsProgress('...');
  try {
    const out = await addFavoriteFromPlatformUrl('apple', raw, { sourceType: 'apple-import', persist: false });
    await persistFavoriteMapToIndexedDb();

    myPodcastsRssInputEl.value = '';
    setMyPodcastsProgress(out && out.result && out.result.added ? '+1' : '=1');
    showToast({
      icon: '◉',
      message: String(out && out.record && out.record.title || '').trim() || 'Apple Podcasts',
      duration: 2200
    });

    if (isFavoritesScopeMode()) {
      await renderMyPodcastsLibrary();
    }
  } catch (error) {
    console.warn('Add Apple favorite failed:', error);
    setMyPodcastsProgress('!');
    showToast(getMyPodcastsImportErrorMessage(error));
  } finally {
    setMyPodcastsBusyState(false);
    setTimeout(() => setMyPodcastsProgress(''), 1600);
  }
}

async function handleMyPodcastsAddSpotify() {
  if (!myPodcastsRssInputEl || myPodcastsBusy) return;
  const raw = String(myPodcastsRssInputEl.value || '').trim();
  if (!raw) return;

  setMyPodcastsBusyState(true);
  setMyPodcastsProgress('...');
  try {
    const out = await addFavoriteFromPlatformUrl('spotify', raw, { sourceType: 'spotify-import', persist: false });
    await persistFavoriteMapToIndexedDb();

    myPodcastsRssInputEl.value = '';
    setMyPodcastsProgress(out && out.result && out.result.added ? '+1' : '=1');
    showToast({
      icon: '◉',
      message: String(out && out.record && out.record.title || '').trim() || 'Spotify',
      duration: 2200
    });

    if (isFavoritesScopeMode()) {
      await renderMyPodcastsLibrary();
    }
  } catch (error) {
    console.warn('Add Spotify favorite failed:', error);
    setMyPodcastsProgress('!');
    showToast(getMyPodcastsImportErrorMessage(error));
  } finally {
    setMyPodcastsBusyState(false);
    setTimeout(() => setMyPodcastsProgress(''), 1600);
  }
}

function getMyPodcastsImportRunner(mode = myPodcastsImportMode) {
  const safeMode = normalizeMyPodcastsImportMode(mode);
  if (safeMode === 'youtube') return handleMyPodcastsAddYouTube;
  if (safeMode === 'apple') return handleMyPodcastsAddApple;
  if (safeMode === 'spotify') return handleMyPodcastsAddSpotify;
  return handleMyPodcastsAddRss;
}

async function handleMyPodcastsImportOpmlFile(file) {
  if (!file || myPodcastsBusy) return;

  setMyPodcastsBusyState(true);
  setMyPodcastsProgress('...');

  let candidates = [];
  try {
    const text = await file.text();
    candidates = parseOpmlFeedCandidates(text);
  } catch (error) {
    console.warn('OPML parse failed:', error);
    setMyPodcastsProgress('!');
    setMyPodcastsFailedCandidates([]);
    showToast(t('loadFailedRefresh'));
    setMyPodcastsBusyState(false);
    return;
  }

  if (!candidates.length) {
    setMyPodcastsProgress('0');
    setMyPodcastsFailedCandidates([]);
    showToast(t('noData'));
    setMyPodcastsBusyState(false);
    return;
  }

  const summary = await importMyPodcastsCandidates(candidates, { sourceType: 'opml' });
  setMyPodcastsFailedCandidates(summary.failedCandidates);

  setMyPodcastsBusyState(false);
  setMyPodcastsProgress(`✓${summary.success} ✗${summary.failed}${summary.skipped ? ` ⤼${summary.skipped}` : ''}`);

  if (isFavoritesScopeMode()) {
    await renderMyPodcastsLibrary();
  }

  if (summary.failed > 0) {
    showToast(t('loadFailedRefresh'));
  } else if (summary.success > 0) {
    showToast({
      icon: '❤️',
      message: `+${summary.success}`,
      duration: 2200
    });
  } else {
    showToast(t('noData'));
  }
}

async function handleMyPodcastsRetryFailed() {
  if (myPodcastsBusy) return;
  if (!Array.isArray(myPodcastsFailedCandidates) || !myPodcastsFailedCandidates.length) return;

  const retryCandidates = myPodcastsFailedCandidates.slice();
  setMyPodcastsBusyState(true);
  setMyPodcastsProgress('...');

  const summary = await importMyPodcastsCandidates(retryCandidates, { sourceType: 'opml-retry' });
  setMyPodcastsFailedCandidates(summary.failedCandidates);

  setMyPodcastsBusyState(false);
  setMyPodcastsProgress(`✓${summary.success} ✗${summary.failed}${summary.skipped ? ` ⤼${summary.skipped}` : ''}`);

  if (isFavoritesScopeMode()) {
    await renderMyPodcastsLibrary();
  }

  if (summary.failed > 0) {
    showToast(t('loadFailedRefresh'));
  } else if (summary.success > 0) {
    showToast({
      icon: '❤️',
      message: `+${summary.success}`,
      duration: 2200
    });
  }
}

function ensureMyPodcastsControls() {
  const anchor = findMyPodcastsToolsAnchor();
  if (!anchor) return;

  let node = document.getElementById('my-podcasts-tools');
  if (!node) {
    node = document.createElement('div');
    node.id = 'my-podcasts-tools';
    node.className = 'my-podcasts-tools';
    node.innerHTML = `
      <div class="my-podcasts-library-head">
        <div class="my-podcasts-toolbar">
          <div class="my-podcasts-tabs" id="my-podcasts-tabs">
            <button class="my-podcasts-tab is-active" type="button" data-my-podcasts-tab="podcasts" aria-pressed="true"><span class="my-podcasts-tab-label">${escapeHtml(getMyPodcastsTabLabel('podcasts'))}</span><span class="my-podcasts-tab-count">0</span></button>
            <button class="my-podcasts-tab" type="button" data-my-podcasts-tab="episodes" aria-pressed="false"><span class="my-podcasts-tab-label">${escapeHtml(getMyPodcastsTabLabel('episodes'))}</span><span class="my-podcasts-tab-count">0</span></button>
            <button class="my-podcasts-tab" type="button" data-my-podcasts-tab="notes" aria-pressed="false"><span class="my-podcasts-tab-label">${escapeHtml(getMyPodcastsTabLabel('notes'))}</span><span class="my-podcasts-tab-count">0</span></button>
          </div>
          <div class="my-podcasts-import-modes" id="my-podcasts-import-modes" role="group" aria-label="${escapeHtml(getMyPodcastsLocalizedText('myPodcastsImportGroupLabel'))}">
            ${buildMyPodcastsImportModeButton('rss', true)}
            ${buildMyPodcastsImportModeButton('youtube', false)}
            ${buildMyPodcastsImportModeButton('apple', false)}
            ${buildMyPodcastsImportModeButton('spotify', false)}
            ${buildMyPodcastsImportModeButton('opml', false)}
          </div>
        </div>
        <div class="my-podcasts-import-row">
          <div class="my-podcasts-input-shell">
            <input id="my-rss-input" class="my-podcasts-input" type="url" inputmode="url" placeholder="${escapeHtml(getMyPodcastsLocalizedText('myPodcastsImportPlaceholderRss'))}" autocomplete="off" spellcheck="false">
            <button id="my-opml-import" class="my-podcasts-opml-pick" type="button" hidden aria-label="${escapeHtml(getMyPodcastsLocalizedText('myPodcastsImportPickOpml'))}" title="${escapeHtml(getMyPodcastsLocalizedText('myPodcastsImportPickOpml'))}">${escapeHtml(getMyPodcastsLocalizedText('myPodcastsImportPickOpml'))}</button>
          </div>
          <button id="my-rss-add" class="my-podcasts-action-btn" type="button" aria-label="${escapeHtml(getMyPodcastsLocalizedText('myPodcastsImportActionRss'))}" title="${escapeHtml(getMyPodcastsLocalizedText('myPodcastsImportActionRss'))}">${getMyPodcastsImportActionSvg('rss')}</button>
          <button id="my-opml-retry" class="my-podcasts-btn is-compact" type="button" hidden>${t('retry')}</button>
          <input id="my-opml-file" type="file" accept=".opml,.xml,text/xml,application/xml" hidden>
        </div>
      </div>
      <div id="my-podcasts-progress" class="my-podcasts-progress"></div>
    `;
    if (anchor.parentNode) {
      anchor.insertAdjacentElement('afterend', node);
    } else {
      document.body.appendChild(node);
    }
  } else if (anchor.parentNode) {
    if (node.previousElementSibling !== anchor || node.parentNode !== anchor.parentNode) {
      anchor.insertAdjacentElement('afterend', node);
    }
  }

  myPodcastsControlsEl = node;
  myPodcastsRssInputEl = document.getElementById('my-rss-input');
  myPodcastsAddBtnEl = document.getElementById('my-rss-add');
  myPodcastsYoutubeBtnEl = null;
  myPodcastsOpmlBtnEl = document.getElementById('my-opml-import');
  myPodcastsRetryBtnEl = document.getElementById('my-opml-retry');
  myPodcastsOpmlFileEl = document.getElementById('my-opml-file');
  myPodcastsProgressEl = document.getElementById('my-podcasts-progress');
  myPodcastsTabsEl = document.getElementById('my-podcasts-tabs');
  myPodcastsImportModesEl = document.getElementById('my-podcasts-import-modes');
  myPodcastsOpmlPickEl = document.getElementById('my-opml-import');

  if (myPodcastsAddBtnEl && !myPodcastsAddBtnEl.dataset.boundClick) {
    myPodcastsAddBtnEl.addEventListener('click', () => {
      const runner = getMyPodcastsImportRunner(myPodcastsImportMode);
      runner().catch((error) => {
        console.warn('My Podcasts import handler failed:', error);
      });
    });
    myPodcastsAddBtnEl.dataset.boundClick = '1';
  }

  if (myPodcastsRssInputEl && !myPodcastsRssInputEl.dataset.boundEnter) {
    myPodcastsRssInputEl.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      event.preventDefault();
      if (myPodcastsImportMode === 'opml') return;
      const runner = getMyPodcastsImportRunner(myPodcastsImportMode);
      runner().catch((error) => {
        console.warn('My Podcasts enter handler failed:', error);
      });
    });
    myPodcastsRssInputEl.dataset.boundEnter = '1';
  }

  if (myPodcastsOpmlBtnEl && myPodcastsOpmlFileEl && !myPodcastsOpmlBtnEl.dataset.boundClick) {
    myPodcastsOpmlBtnEl.addEventListener('click', () => {
      if (myPodcastsBusy) return;
      myPodcastsOpmlFileEl.value = '';
      myPodcastsOpmlFileEl.click();
    });
    myPodcastsOpmlBtnEl.dataset.boundClick = '1';
  }

  if (myPodcastsRetryBtnEl && !myPodcastsRetryBtnEl.dataset.boundClick) {
    myPodcastsRetryBtnEl.addEventListener('click', () => {
      handleMyPodcastsRetryFailed().catch((error) => {
        console.warn('Retry failed imports handler failed:', error);
      });
    });
    myPodcastsRetryBtnEl.dataset.boundClick = '1';
  }

  if (myPodcastsOpmlFileEl && !myPodcastsOpmlFileEl.dataset.boundChange) {
    myPodcastsOpmlFileEl.addEventListener('change', () => {
      const file = myPodcastsOpmlFileEl.files && myPodcastsOpmlFileEl.files[0];
      if (!file) return;
      handleMyPodcastsImportOpmlFile(file).catch((error) => {
        console.warn('OPML import handler failed:', error);
      });
    });
    myPodcastsOpmlFileEl.dataset.boundChange = '1';
  }

  if (myPodcastsTabsEl && !myPodcastsTabsEl.dataset.boundClick) {
    myPodcastsTabsEl.addEventListener('click', (event) => {
      const btn = event.target && event.target.closest ? event.target.closest('[data-my-podcasts-tab]') : null;
      if (!btn) return;
      myPodcastsActiveTab = normalizeMyPodcastsTab(btn.getAttribute('data-my-podcasts-tab'));
      updateMyPodcastsTabs();
      if (isFavoritesScopeMode()) {
        renderMyPodcastsLibrary().catch((error) => {
          console.warn('My Podcasts tab render failed:', error);
        });
      }
    });
    myPodcastsTabsEl.dataset.boundClick = '1';
  }

  if (myPodcastsImportModesEl && !myPodcastsImportModesEl.dataset.boundClick) {
    myPodcastsImportModesEl.addEventListener('click', (event) => {
      const btn = event.target && event.target.closest ? event.target.closest('[data-my-podcasts-import-mode]') : null;
      if (!btn || myPodcastsBusy) return;
      myPodcastsImportMode = normalizeMyPodcastsImportMode(btn.getAttribute('data-my-podcasts-import-mode'));
      updateMyPodcastsImportUi();
    });
    myPodcastsImportModesEl.dataset.boundClick = '1';
  }

  updateMyPodcastsRetryButton();
  updateMyPodcastsTabs();
  updateMyPodcastsImportUi();
  syncMyPodcastsControlsLayout();
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function' && !myPodcastsLayoutMq) {
    myPodcastsLayoutMq = window.matchMedia('(max-width: 760px)');
    const listener = () => syncMyPodcastsControlsLayout();
    if (typeof myPodcastsLayoutMq.addEventListener === 'function') myPodcastsLayoutMq.addEventListener('change', listener);
    else if (typeof myPodcastsLayoutMq.addListener === 'function') myPodcastsLayoutMq.addListener(listener);
  }
}

function setMyPodcastsControlsVisibility(visible) {
  ensureMyPodcastsControls();
  if (!myPodcastsControlsEl) return;
  myPodcastsControlsEl.classList.toggle('is-visible', !!visible);
  if (visible) updateMyPodcastsRetryButton();
}

function handleHistoryDateChange() {
  visibleLimit = getDefaultVisibleLimitForSelection();
  updateLimitButtons();
  updateCountrySeo();
  updateQueryState();
  fetchPodcastsData();
}

function prunePlatformOptionsForPage() {
  syncPlatformOptionsForCountry();
}

async function updateDailyReminder() {
  const jobId = ++reminderJobId;
  if (!historyReminderEl) return;

  if (!hasIndexedDbSupport()) {
    historyReminderEl.style.display = 'none';
    return;
  }

  const comboKey = comboKeyForCurrent();
  const storageTodayKey = getStorageDateKey();
  const localTodayKey = getLocalDateKey();
  let hasTodaySnapshot = false;

  try {
    const snapshots = await getSnapshotsForCurrentSelection();
    const latest = pickLatestSnapshotRecord(snapshots);

    hasTodaySnapshot = snapshots.some((row) => String((row && row.snapshotDate) || '') === storageTodayKey);

    if (!hasTodaySnapshot && latest) {
      const lastTouched = Number(latest.savedAt || latest.fetchedAt || 0);
      if (lastTouched && getLocalDateKey(lastTouched) === localTodayKey) {
        hasTodaySnapshot = true;
      }
    }

    if (!hasTodaySnapshot) {
      const legacyId = `${comboKey}::${localTodayKey}`;
      hasTodaySnapshot = !!(await idbGet(IDB_SNAPSHOT_STORE, legacyId));
    }
  } catch (error) {
    console.warn('Daily reminder check failed:', error);
  }

  if (jobId !== reminderJobId || !historyReminderEl) return;

  historyReminderEl.style.display = 'block';
  historyReminderEl.textContent = hasTodaySnapshot ? t('reminderSavedToday') : t('reminderNeedToday');
  historyReminderEl.style.color = hasTodaySnapshot ? 'rgba(173,255,208,.92)' : 'rgba(255,214,153,.96)';
}


function setLoading(show, textKey = 'loadingDots') {
  currentLoadingKey = textKey;
  loadingEl.style.display = show ? 'block' : 'none';
  loadingEl.textContent = t(currentLoadingKey);

  if (show) {
    const aggregateVisual = isLanguageScopeMode() || (platformSelect && platformSelect.value === 'all');
    if (aggregateVisual) {
      setChartLoadVisual(true, { platform: 'all', colors: LANGUAGE_SCOPE_RING_GRADIENT });
    } else {
      setChartLoadVisual(true, { platform: platformSelect ? platformSelect.value : 'apple' });
    }
  } else {
    setChartLoadVisual(false);
  }
}

function setSkeleton(show) {
  skeletonEl.classList.toggle('hidden', !show);
}

function setStatus(key) {
  currentStatusKey = key;
  statusText.textContent = t(currentStatusKey);
}

function updateCount(shown, total) {
  countText.textContent = `${shown} / ${total}`;
}

function updateLimitButtons() {
  const favoritesScope = isFavoritesScopeMode();
  limitButtons.forEach((btn) => {
    btn.classList.toggle('active', Number(btn.dataset.limit) === visibleLimit);
    btn.style.display = favoritesScope ? 'none' : '';
  });
}


function ensureRuntimeEffectsStyles() {
  if (document.getElementById('runtime-effects-style')) return;
  const style = document.createElement('style');
  style.id = 'runtime-effects-style';
  style.textContent = `
.select-container.chart-loading-ring { position: relative; border-radius: 22px; overflow: visible; }
.select-container.chart-loading-ring::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  padding: 2px;
  background: var(--chart-load-gradient, conic-gradient(from 0deg, rgba(255,255,255,.2), rgba(255,255,255,0)));
  pointer-events: none;
  opacity: .98;
  filter: drop-shadow(0 0 10px var(--chart-load-glow, rgba(255,255,255,.42))) drop-shadow(0 0 22px var(--chart-load-glow, rgba(255,255,255,.24)));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transition: background .14s linear, filter .18s ease, opacity .18s ease;
}
.select-container.chart-loading-ring.chart-loading-pulse::before {
  animation: chartLoadTraceRotate 1.05s linear infinite;
}
.select-container.chart-loading-ring.chart-loading-complete::before {
  animation: chartLoadCompletePulse .55s ease-out 1;
}
.select-container.chart-loading-ring::after {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(80% 40% at 50% 0%, color-mix(in srgb, var(--chart-load-glow, #7cf) 24%, transparent) 0%, transparent 70%);
  opacity: .85;
}
.chart-row.surprise-hover {
  transform: translateY(-2px) scale(1.006);
  border-color: color-mix(in oklab, var(--brand, #6f92ff) 40%, #ffffff 14%);
  box-shadow:
    0 16px 28px rgba(1,4,12,.52),
    0 0 18px color-mix(in oklab, var(--brand-2, #00c5b0) 10%, transparent);
}
.chart-row.surprise-flicker {
  animation: surprisePulse 240ms ease;
  border-color: color-mix(in oklab, var(--brand, #6f92ff) 44%, #ffffff 16%);
  box-shadow:
    0 16px 28px rgba(1,4,12,.54),
    0 0 0 1px color-mix(in oklab, var(--brand, #6f92ff) 18%, transparent),
    0 0 20px color-mix(in oklab, var(--brand-2, #00c5b0) 16%, transparent);
}
.chart-row.surprise-final {
  border-color: color-mix(in oklab, var(--brand, #6f92ff) 52%, #ffffff 18%);
  background:
    radial-gradient(135% 110% at 100% 0%,
      color-mix(in oklab, var(--brand-2, #00c5b0) 16%, transparent) 0%,
      transparent 56%
    ),
    radial-gradient(120% 100% at 0% 100%,
      color-mix(in oklab, var(--brand, #6f92ff) 12%, transparent) 0%,
      transparent 54%
    ),
    linear-gradient(135deg, rgba(12, 19, 36, 0.98), rgba(8, 14, 26, 0.98));
  box-shadow:
    0 18px 32px rgba(1,4,12,.56),
    0 0 0 1px color-mix(in oklab, var(--brand, #6f92ff) 16%, transparent),
    0 0 24px color-mix(in oklab, var(--brand-2, #00c5b0) 18%, transparent),
    inset 0 1px 0 rgba(255,255,255,.04);
  animation: surpriseFinalPulse .7s ease;
}
.chart-row.surprise-final::before {
  width: 6px;
  opacity: 1;
  border-right-color: color-mix(in oklab, var(--brand, #6f92ff) 34%, rgba(255,255,255,.22));
  box-shadow:
    -10px 0 18px color-mix(in oklab, var(--brand, #6f92ff) 20%, transparent),
    -18px 0 30px color-mix(in oklab, var(--brand-2, #00c5b0) 16%, transparent),
    inset 1px 0 0 rgba(255,255,255,.2),
    inset 0 12px 18px rgba(255,255,255,.12),
    inset 0 -10px 16px rgba(0,0,0,.1);
}
.chart-row.surprise-final::after {
  opacity: 1;
}
.chart-row.surprise-final .title {
  color: #f6fbff;
  text-shadow:
    0 0 12px color-mix(in oklab, var(--brand-2, #00c5b0) 22%, transparent),
    0 0 20px color-mix(in oklab, var(--brand, #6f92ff) 12%, transparent);
}
html[data-theme="light"] .chart-row.surprise-hover {
  border-color: color-mix(in oklab, var(--brand, #5b7cff) 46%, rgba(255,255,255,.72));
  box-shadow:
    0 16px 28px rgba(112,129,163,.18),
    0 0 0 1px color-mix(in oklab, var(--brand, #5b7cff) 10%, transparent),
    -14px 0 24px color-mix(in oklab, var(--brand, #5b7cff) 14%, transparent);
}
html[data-theme="light"] .chart-row.surprise-flicker {
  border-color: color-mix(in oklab, var(--brand, #5b7cff) 50%, rgba(255,255,255,.74));
  box-shadow:
    0 16px 30px rgba(112,129,163,.2),
    0 0 0 1px color-mix(in oklab, var(--brand, #5b7cff) 12%, transparent),
    -16px 0 28px color-mix(in oklab, var(--brand-2, #0fb9b7) 12%, transparent);
}
html[data-theme="light"] .chart-row.surprise-final {
  border-color: color-mix(in oklab, var(--brand, #5b7cff) 52%, rgba(255,255,255,.84));
  background:
    radial-gradient(135% 110% at 100% 0%,
      color-mix(in oklab, var(--brand-2, #0fb9b7) 16%, transparent) 0%,
      transparent 58%
    ),
    radial-gradient(120% 100% at 0% 100%,
      color-mix(in oklab, var(--brand, #5b7cff) 14%, transparent) 0%,
      transparent 56%
    ),
    linear-gradient(160deg, rgba(255,255,255,.98), rgba(239,245,253,.96));
  box-shadow:
    0 18px 34px rgba(112,129,163,.22),
    0 0 0 1px color-mix(in oklab, var(--brand, #5b7cff) 14%, transparent),
    -16px 0 28px color-mix(in oklab, var(--brand, #5b7cff) 18%, transparent),
    inset 0 1px 0 rgba(255,255,255,.88);
}
html[data-theme="light"] .chart-row.surprise-final::before {
  border-right-color: color-mix(in oklab, var(--brand, #5b7cff) 42%, rgba(255,255,255,.28));
  box-shadow:
    -12px 0 22px color-mix(in oklab, var(--brand, #5b7cff) 18%, transparent),
    -22px 0 34px color-mix(in oklab, var(--brand-2, #0fb9b7) 16%, transparent),
    inset 1px 0 0 rgba(255,255,255,.4),
    inset 0 12px 18px rgba(255,255,255,.22),
    inset 0 -10px 16px rgba(64,88,134,.08);
}
html[data-theme="light"] .chart-row.surprise-final .title {
  color: #183050;
  text-shadow:
    0 0 10px color-mix(in oklab, var(--brand-2, #0fb9b7) 14%, transparent),
    0 0 14px color-mix(in oklab, var(--brand, #5b7cff) 10%, transparent);
}
@keyframes chartLoadPulse {
  0% { opacity: .72; filter: drop-shadow(0 0 6px var(--chart-load-glow, rgba(255,255,255,.28))) drop-shadow(0 0 12px var(--chart-load-glow, rgba(255,255,255,.14))); }
  50% { opacity: 1; filter: drop-shadow(0 0 10px var(--chart-load-glow, rgba(255,255,255,.42))) drop-shadow(0 0 22px var(--chart-load-glow, rgba(255,255,255,.24))); }
  100% { opacity: .76; filter: drop-shadow(0 0 7px var(--chart-load-glow, rgba(255,255,255,.30))) drop-shadow(0 0 14px var(--chart-load-glow, rgba(255,255,255,.15))); }
}
@keyframes chartLoadTraceRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes chartLoadCompletePulse {
  0% { opacity: .85; filter: drop-shadow(0 0 8px var(--chart-load-glow, rgba(255,255,255,.35))) drop-shadow(0 0 18px var(--chart-load-glow, rgba(255,255,255,.18))); }
  45% { opacity: 1; filter: drop-shadow(0 0 12px var(--chart-load-glow, rgba(255,255,255,.5))) drop-shadow(0 0 28px var(--chart-load-glow, rgba(255,255,255,.28))); }
  100% { opacity: .96; filter: drop-shadow(0 0 10px var(--chart-load-glow, rgba(255,255,255,.42))) drop-shadow(0 0 22px var(--chart-load-glow, rgba(255,255,255,.22))); }
}
@keyframes surprisePulse { 0% { transform: scale(1); } 60% { transform: scale(1.012); } 100% { transform: scale(1); } }
@keyframes surpriseFinalPulse { 0% { transform: scale(.995); } 45% { transform: scale(1.012); } 100% { transform: scale(1); } }
@media (max-width: 760px) {
  .select-container.chart-loading-ring::before {
    inset: -1px;
    padding: 1px;
    filter: drop-shadow(0 0 6px var(--chart-load-glow, rgba(255,255,255,.32)));
  }
  .chart-row.surprise-final {
    box-shadow:
      0 14px 24px rgba(1,4,12,.52),
      0 0 0 1px color-mix(in oklab, var(--brand, #6f92ff) 14%, transparent),
      0 0 18px color-mix(in oklab, var(--brand-2, #00c5b0) 14%, transparent),
      inset 0 1px 0 rgba(255,255,255,.04);
  }
  html[data-theme="light"] .chart-row.surprise-final {
    box-shadow:
      0 14px 24px rgba(112,129,163,.18),
      0 0 0 1px color-mix(in oklab, var(--brand, #5b7cff) 12%, transparent),
      -12px 0 22px color-mix(in oklab, var(--brand, #5b7cff) 14%, transparent),
      inset 0 1px 0 rgba(255,255,255,.88);
  }
}
.select-container { position: relative; }
.select-container.chart-loading-ring {
  border-color: transparent !important;
  box-shadow: none !important;
}
.select-container.chart-loading-ring::before,
.select-container.chart-loading-ring::after {
  display: none !important;
  animation: none !important;
  background: none !important;
}
.load-ring-overlay {
  position: absolute;
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  pointer-events: none;
  overflow: visible;
  z-index: 3;
}
.load-ring-overlay .ring-track {
  fill: none;
  stroke: transparent;
  stroke-width: 0;
}
.load-ring-overlay .ring-progress {
  fill: none;
  stroke: var(--load-ring-color, #7BD4FF);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.6;
  filter: drop-shadow(0 0 6px var(--chart-load-glow, rgba(123,212,255,.4))) drop-shadow(0 0 14px var(--chart-load-glow, rgba(123,212,255,.2)));
}
.load-ring-overlay .ring-head {
  display: none;
}
.select-container.load-ring-complete-flash .load-ring-overlay .ring-progress {
  animation: loadRingCompleteFlash .55s ease-out 1;
}
.select-container.load-ring-breathe .load-ring-overlay .ring-progress {
  animation: loadRingBreathe 1.15s ease-in-out infinite;
}
@keyframes loadRingCompleteFlash {
  0% { stroke-width: 2.6; opacity: .95; }
  45% { stroke-width: 3.2; opacity: 1; }
  100% { stroke-width: 2.6; opacity: 1; }
}
@keyframes loadRingBreathe {
  0% { opacity: .8; stroke-width: 2.55; }
  50% { opacity: 1; stroke-width: 3.05; }
  100% { opacity: .84; stroke-width: 2.55; }
}
`;
  document.head.appendChild(style);
}

function platformBrandLabel(value) {
  const ximalayaLabel = String(t('platformXimalaya') || '').trim() || 'Ximalaya';
  const bilibiliLabel = String(t('platformBilibili') || '').trim() || 'BiliBili';
  const map = {
    apple: 'Apple',
    spotify: 'Spotify',
    youtube: 'YouTube',
    orfsound: 'ORF Sound',
    raiplaysound: 'RaiPlay Sound',
    srfaudio: 'SRF Audio',
    drlyd: 'DR LYD',
    rtbfauvio: 'RTBF Auvio',
    rneaudio: 'RNE Audio',
    npoluister: 'NPO Luister',
    ximalaya: ximalayaLabel,
    bilibili: bilibiliLabel,
    siriusxm: 'SiriusXM',
    pandora: 'Pandora',
    podcastapp: 'Podcast App',
    rtlplus: 'RTL+',
    bbcsounds: 'BBC Sounds',
    tunein: 'TuneIn',
    abclisten: 'ABC listen',
    nrk: 'NRK Radio',
    yleareena: 'Yle Areena',
    sverigesradio: 'Sveriges Radio',
    ardsounds: 'ARD Sounds',
    radiofrance: 'Radio France',
    podimo: 'Podimo',
    podcastaddict: 'Podcast Addict',
    deezer: 'Deezer',
    radionet: 'radio.net',
    pocketcasts: 'Pocket Casts',
    castbox: 'Castbox',
    audible: 'Audible',
    iheartradio: 'iHeartRadio',
    podbbang: 'Podbbang',
    audioclip: 'Audioclip',
    amazonmusic: 'Amazon Music',
    radiko: 'radiko'
  };
  return map[value] || value;
}

function getPlatformAccentColors(platform) {
  const list = PLATFORM_ACCENT_COLORS[platform] || ['#7BD4FF', '#7A8BFF'];
  return Array.isArray(list) && list.length ? list.slice(0, 6) : ['#7BD4FF', '#7A8BFF'];
}

function getRowAccentPaletteForCurrentSelection() {
  const scope = currentScopeValue();
  const platform = String((platformSelect && platformSelect.value) || '').trim().toLowerCase();
  if (platform === 'all' || isLanguageScopeMode(scope)) {
    return (Array.isArray(LANGUAGE_SCOPE_RING_GRADIENT) && LANGUAGE_SCOPE_RING_GRADIENT.length)
      ? LANGUAGE_SCOPE_RING_GRADIENT.slice()
      : ['#2EF2FF', '#4EA1FF', '#5F69FF', '#8E5BFF', '#F45BFF'];
  }
  return getPlatformAccentColors(platform || 'apple');
}

function applyAccentPaletteToHost(host, palette) {
  if (!host) return;
  const colors = Array.isArray(palette) && palette.length ? palette.slice() : ['#6f92ff', '#00c5b0'];
  const first = String(colors[0] || '#6f92ff');
  const second = String(colors[1] || first);
  host.style.setProperty('--brand', first);
  host.style.setProperty('--brand-2', second);
  if (colors.length <= 2) {
    host.style.setProperty('--row-accent-bar', `linear-gradient(180deg, ${first} 0%, ${second} 100%)`);
    return;
  }
  const steps = colors.map((color, index) => {
    const pos = Math.round((index / (colors.length - 1)) * 100);
    return `${color} ${pos}%`;
  }).join(', ');
  host.style.setProperty('--row-accent-bar', `linear-gradient(180deg, ${steps})`);
}

function applyRowAccentTheme() {
  const host = chartContainer || document.getElementById('podcasts-chart');
  if (!host) return;
  const scope = currentScopeValue();
  const platform = String((platformSelect && platformSelect.value) || '').trim().toLowerCase();
  let palette = null;

  if (isFavoritesScopeMode(scope)) {
    palette = (Array.isArray(LANGUAGE_SCOPE_RING_GRADIENT) && LANGUAGE_SCOPE_RING_GRADIENT.length)
      ? LANGUAGE_SCOPE_RING_GRADIENT.slice()
      : ['#2EF2FF', '#4EA1FF', '#5F69FF', '#8E5BFF', '#F45BFF'];
  } else if (platform === 'all' || isLanguageScopeMode(scope)) {
    palette = (Array.isArray(LANGUAGE_SCOPE_RING_GRADIENT) && LANGUAGE_SCOPE_RING_GRADIENT.length)
      ? LANGUAGE_SCOPE_RING_GRADIENT.slice()
      : ['#2EF2FF', '#4EA1FF', '#5F69FF', '#8E5BFF', '#F45BFF'];
  } else {
    palette = getPlatformAccentColors(platform || 'apple');
  }

  applyAccentPaletteToHost(host, palette);
}


function buildConicProgressGradient(colors, progress, mode = 'determinate') {
  const palette = (Array.isArray(colors) ? colors : []).filter(Boolean);
  const list = palette.length ? palette : ['#7BD4FF', '#7A8BFF'];
  const startDeg = -135;

  if (mode !== 'determinate') {
    const c0 = list[0];
    const c1 = list[1] || list[0];
    const c2 = list[2] || c1;
    return `conic-gradient(from ${startDeg}deg,
      rgba(255,255,255,.05) 0deg 292deg,
      ${c0}33 292deg 314deg,
      ${c1}66 314deg 328deg,
      ${c2}AA 328deg 338deg,
      rgba(255,255,255,.96) 338deg 345deg,
      ${c0}CC 345deg 352deg,
      rgba(255,255,255,.08) 352deg 360deg
    )`;
  }

  const pct = Math.max(0, Math.min(1, Number(progress)));
  const endDeg = Math.round(360 * pct);
  if (endDeg <= 0) return `conic-gradient(from ${startDeg}deg, rgba(255,255,255,.06) 0deg 360deg)`;

  const segs = [];
  for (let i = 0; i < list.length; i += 1) {
    const start = Math.round((endDeg * i) / list.length);
    const end = Math.round((endDeg * (i + 1)) / list.length);
    segs.push(`${list[i]} ${start}deg ${Math.max(start + 1, end)}deg`);
  }
  if (endDeg < 360) segs.push(`rgba(255,255,255,.05) ${endDeg}deg 360deg`);

  if (endDeg > 2 && endDeg < 360) {
    const headStart = Math.max(0, endDeg - 14);
    const headEnd = Math.min(360, endDeg + 2);
    const tailStart = Math.max(0, endDeg - 28);
    segs.push(`rgba(255,255,255,.16) ${tailStart}deg ${headStart}deg`);
    segs.push(`rgba(255,255,255,.98) ${headStart}deg ${headEnd}deg`);
  }

  return `conic-gradient(from ${startDeg}deg, ${segs.join(', ')})`;
}

function getLoadRingHostElement() {
  return document.querySelector('.select-container') || document.querySelector('.menu-container') || chartContainer || null;
}

function stopLoadRingAnimation() {
  if (loadRingAnimFrame) {
    cancelAnimationFrame(loadRingAnimFrame);
    loadRingAnimFrame = 0;
  }
}

function clearLoadRingVisual(host) {
  const target = host || (loadRingState && loadRingState.host) || getLoadRingHostElement();
  stopLoadRingAnimation();
  loadRingState = null;
  if (!target) return;
  target.classList.remove('chart-loading-ring', 'chart-loading-determinate', 'chart-loading-pulse', 'chart-loading-complete', 'load-ring-complete-flash', 'load-ring-breathe');
  target.style.removeProperty('--chart-load-glow');
  target.dataset.loadPlatform = '';
  const svg = target.querySelector('.load-ring-overlay');
  if (svg) svg.remove();
}

function ensureLoadRingOverlay(host) {
  let svg = host.querySelector('.load-ring-overlay');
  if (!svg) {
    const ns = 'http://www.w3.org/2000/svg';
    svg = document.createElementNS(ns, 'svg');
    svg.classList.add('load-ring-overlay');
    svg.setAttribute('aria-hidden', 'true');
    svg.dataset.gradId = `load-ring-grad-${Math.random().toString(36).slice(2, 10)}`;

    const defs = document.createElementNS(ns, 'defs');
    const gradient = document.createElementNS(ns, 'linearGradient');
    gradient.classList.add('ring-gradient');
    gradient.setAttribute('id', svg.dataset.gradId);
    gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
    gradient.setAttribute('x1', '0');
    gradient.setAttribute('y1', '0');
    gradient.setAttribute('x2', '1');
    gradient.setAttribute('y2', '1');
    for (let i = 0; i < 6; i += 1) {
      const stop = document.createElementNS(ns, 'stop');
      stop.classList.add('ring-gradient-stop');
      stop.setAttribute('offset', `${Math.round((i / 5) * 100)}%`);
      stop.setAttribute('stop-color', '#7BD4FF');
      gradient.appendChild(stop);
    }
    defs.appendChild(gradient);

    const track = document.createElementNS(ns, 'rect');
    track.classList.add('ring-track');
    track.setAttribute('vector-effect', 'non-scaling-stroke');

    const progress = document.createElementNS(ns, 'rect');
    progress.classList.add('ring-progress');
    progress.setAttribute('vector-effect', 'non-scaling-stroke');

    const head = document.createElementNS(ns, 'circle');
    head.classList.add('ring-head');
    head.setAttribute('r', '2.7');

    svg.appendChild(defs);
    svg.appendChild(track);
    svg.appendChild(progress);
    svg.appendChild(head);
    host.appendChild(svg);
  }

  return {
    svg,
    gradient: svg.querySelector('.ring-gradient'),
    gradientStops: Array.from(svg.querySelectorAll('.ring-gradient-stop')),
    track: svg.querySelector('.ring-track'),
    progress: svg.querySelector('.ring-progress'),
    head: svg.querySelector('.ring-head')
  };
}

function layoutLoadRingOverlay(host, refs) {
  const rect = host.getBoundingClientRect();
  const width = Math.max(10, Math.round(rect.width) + 2);
  const height = Math.max(10, Math.round(rect.height) + 2);
  refs.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  refs.svg.setAttribute('width', String(width));
  refs.svg.setAttribute('height', String(height));
  if (refs.gradient) {
    refs.gradient.setAttribute('x1', '0');
    refs.gradient.setAttribute('y1', '0');
    refs.gradient.setAttribute('x2', String(width));
    refs.gradient.setAttribute('y2', String(height));
  }

  const radiusRaw = parseFloat((getComputedStyle(host).borderRadius || '20').split(' ')[0]) || 20;
  const inset = 1.25;
  const radius = Math.max(8, Math.min(radiusRaw + 0.5, Math.min(width, height) / 2 - inset));

  const x = inset;
  const y = inset;
  const rw = Math.max(2, width - inset * 2);
  const rh = Math.max(2, height - inset * 2);

  [refs.track, refs.progress].forEach((node) => {
    node.setAttribute('x', String(x));
    node.setAttribute('y', String(y));
    node.setAttribute('width', String(rw));
    node.setAttribute('height', String(rh));
    node.setAttribute('rx', String(radius));
    node.setAttribute('ry', String(radius));
  });

  let length = 2 * (rw + rh);
  if (typeof refs.progress.getTotalLength === 'function') {
    try {
      const measured = refs.progress.getTotalLength();
      if (Number.isFinite(measured) && measured > 0) length = measured;
    } catch { }
  }
  const arcQuarter = (Math.PI * radius) / 2;
  const startOffset = Math.max(0, arcQuarter * 0.55);
  return { width, height, radius, length, startOffset };
}

function pointOnLoadRing(rectNode, lengthPos, totalLength) {
  const len = Math.max(1, Number(totalLength) || 1);
  const pos = ((Number(lengthPos) % len) + len) % len;
  if (typeof rectNode.getPointAtLength === 'function') {
    try {
      return rectNode.getPointAtLength(pos);
    } catch { }
  }
  return { x: 0, y: 0 };
}

function applyLoadRingVisualFrame(host, refs, colors, opts = {}) {
  const metrics = layoutLoadRingOverlay(host, refs);
  const total = Math.max(1, metrics.length);
  const startOffset = Math.max(0, Math.min(total, Number(metrics.startOffset) || 0));
  const palette = (Array.isArray(colors) && colors.length ? colors : ['#7BD4FF']).slice();
  const primary = palette[0] || '#7BD4FF';
  const secondary = palette[1] || primary;
  const tertiary = palette[2] || secondary;
  const useGradient = Boolean(opts.useGradient) && refs.gradient && refs.gradientStops && refs.gradientStops.length && palette.length > 1;

  host.style.setProperty('--chart-load-glow', primary);
  refs.progress.style.setProperty('--load-ring-color', primary);
  if (useGradient) {
    refs.gradientStops.forEach((stop, idx) => {
      const color = palette[idx % palette.length];
      stop.setAttribute('offset', `${Math.round((idx / Math.max(1, refs.gradientStops.length - 1)) * 100)}%`);
      stop.setAttribute('stop-color', color);
      stop.setAttribute('stop-opacity', '1');
    });
    refs.progress.style.stroke = `url(#${refs.svg.dataset.gradId})`;
  } else {
    refs.progress.style.stroke = primary;
  }

  const mode = opts.mode || 'pulse';

  if (mode === 'determinate') {
    const progress = Math.max(0, Math.min(1, Number(opts.progress) || 0));
    const progressLen = total * progress;
    refs.progress.style.opacity = progress > 0 ? '1' : '0.35';
    if (!useGradient) refs.progress.style.stroke = primary;
    refs.progress.style.strokeDasharray = `${Math.max(0, progressLen)} ${total}`;
    refs.progress.style.strokeDashoffset = String(-startOffset);

    if (progress > 0 && progress < 1) {
      refs.progress.style.strokeDasharray = `${Math.max(0, progressLen)} ${Math.max(0, total - progressLen)}`;
      refs.progress.style.filter = `drop-shadow(0 0 7px ${primary}) drop-shadow(0 0 18px ${secondary})`;
    } else if (progress >= 1) {
      refs.progress.style.strokeDasharray = `${total} 0`;
      refs.progress.style.strokeDashoffset = String(-startOffset);
      refs.progress.style.filter = `drop-shadow(0 0 8px ${primary}) drop-shadow(0 0 20px ${secondary}) drop-shadow(0 0 30px ${tertiary})`;
    }

    return metrics;
  }

  const phase = ((Number(opts.phase) % 1) + 1) % 1;
  const headLen = total * phase;
  const trailLen = Math.max(24, total * 0.085);
  const tailStart = Math.max(0, headLen - trailLen);
  const visibleLen = Math.max(0, headLen - tailStart);

  refs.progress.style.opacity = '1';
  if (!useGradient) refs.progress.style.stroke = primary;
  refs.progress.style.strokeDasharray = `${visibleLen} ${total}`;
  refs.progress.style.strokeDashoffset = String(-(tailStart + startOffset));
  refs.progress.style.filter = `drop-shadow(0 0 8px ${primary}) drop-shadow(0 0 18px ${secondary})`;
  return metrics;
}

function triggerLoadRingCompleteFlash(host) {
  if (!host) return;
  host.classList.remove('load-ring-complete-flash');
  void host.offsetWidth;
  host.classList.add('load-ring-complete-flash');
}

function ensureLoadRingLoopRunning() {
  if (loadRingAnimFrame || !loadRingState) return;

  const tick = (ts) => {
    if (!loadRingState) {
      loadRingAnimFrame = 0;
      return;
    }

    const state = loadRingState;
    const host = state.host;
    if (!host || !host.isConnected) {
      clearLoadRingVisual(host);
      loadRingAnimFrame = 0;
      return;
    }

    const refs = state.refs || ensureLoadRingOverlay(host);
    state.refs = refs;
    host.classList.add('chart-loading-ring');
    host.classList.remove('chart-loading-pulse');
    host.classList.add('chart-loading-determinate');
    host.dataset.loadPlatform = String(state.platform || '');

    const elapsed = Math.max(0, ts - state.startTs);
    const minProgress = Math.max(0, Math.min(1, elapsed / state.minFillMs));
    const externalProgress = Number.isFinite(state.externalProgress) ? Math.max(0, Math.min(1, state.externalProgress)) : 0;
    const progress = Math.max(minProgress, externalProgress);

    applyLoadRingVisualFrame(host, refs, state.colors, {
      mode: 'determinate',
      progress,
      useGradient: Boolean(state.useGradient)
    });

    if (progress >= 0.999) {
      if (!state.fullReachedTs) {
        state.fullReachedTs = ts;
        triggerLoadRingCompleteFlash(host);
      }
      host.classList.add('chart-loading-complete', 'load-ring-breathe');
    } else {
      host.classList.remove('chart-loading-complete', 'load-ring-breathe');
    }

    if (!state.loading) {
      if (!state.doneRequestedTs) state.doneRequestedTs = ts;
      const fullTs = state.fullReachedTs || ts;
      const holdFrom = Math.max(fullTs, state.doneRequestedTs);
      if (progress >= 0.999 && (ts - holdFrom) >= state.completeHoldMs) {
        clearLoadRingVisual(host);
        loadRingAnimFrame = 0;
        return;
      }
    }

    loadRingAnimFrame = requestAnimationFrame(tick);
  };

  loadRingAnimFrame = requestAnimationFrame(tick);
}

function setChartLoadVisual(active, options = {}) {
  const host = getLoadRingHostElement();
  if (!host) return;
  ensureRuntimeEffectsStyles();
  ++currentLoadVisualToken;

  const colors = (Array.isArray(options.colors) && options.colors.length)
    ? options.colors
    : getPlatformAccentColors(options.platform || (platformSelect ? platformSelect.value : 'apple'));

  if (!active) {
    if (!loadRingState || loadRingState.host !== host) {
      clearLoadRingVisual(host);
      return currentLoadVisualToken;
    }
    loadRingState.loading = false;
    if (!loadRingState.doneRequestedTs) loadRingState.doneRequestedTs = performance.now();
    ensureLoadRingLoopRunning();
    return currentLoadVisualToken;
  }

  const refs = ensureLoadRingOverlay(host);
  const determinate = Number.isFinite(Number(options.progress));
  const progress = determinate ? Math.max(0, Math.min(1, Number(options.progress))) : null;

  if (!loadRingState || loadRingState.host !== host) {
    clearLoadRingVisual(host);
    loadRingState = {
      host,
      refs,
      colors,
      useGradient: String(options.platform || '') === 'all',
      platform: String(options.platform || ''),
      loading: true,
      startTs: performance.now(),
      minFillMs: 1150,
      completeHoldMs: 420,
      externalProgress: progress,
      fullReachedTs: 0,
      doneRequestedTs: 0
    };
  } else {
    loadRingState.refs = refs;
    loadRingState.colors = colors;
    loadRingState.useGradient = String(options.platform || loadRingState.platform || '') === 'all';
    loadRingState.platform = String(options.platform || loadRingState.platform || '');
    if (!loadRingState.loading) {
      loadRingState.startTs = performance.now();
      loadRingState.fullReachedTs = 0;
      loadRingState.externalProgress = null;
      loadRingState.doneRequestedTs = 0;
    }
    loadRingState.loading = true;
    loadRingState.doneRequestedTs = 0;
    if (determinate) loadRingState.externalProgress = progress;
  }

  if (!determinate && !Number.isFinite(loadRingState.externalProgress)) {
    loadRingState.externalProgress = null;
  }

  host.classList.add('chart-loading-ring');
  host.classList.remove('chart-loading-pulse');
  ensureLoadRingLoopRunning();
  return currentLoadVisualToken;
}

function getEligiblePlatformsForAll(type = (typeSelect ? typeSelect.value : 'top-podcasts'), country = (countrySelect ? countrySelect.value : 'us')) {
  const safeType = normalizeTopType(type);
  const safeCountry = normalizeCountry(country);
  const options = platformSelect ? Array.from(platformSelect.options) : [];

  return options
    .map((opt) => String(opt.value || '').trim().toLowerCase())
    .filter((value) => value && value !== 'all')
    .filter((value) => value !== 'ximalaya' && value !== 'bilibili' && value !== 'ardsounds' && value !== 'radiofrance' && value !== 'podimo' && value !== 'podcastaddict' && value !== 'abclisten' && value !== 'nrk' && value !== 'yleareena' && value !== 'sverigesradio' && value !== 'siriusxm' && value !== 'podcastapp' && value !== 'rtlplus' && value !== 'orfsound' && value !== 'raiplaysound' && value !== 'srfaudio' && value !== 'drlyd' && value !== 'rtbfauvio' && value !== 'rneaudio' && value !== 'npoluister')
    .filter((value) => safeType === 'top-podcasts' || platformSupportsEpisodes(value))
    .filter((value) => isPlatformAvailableForCountry(value, safeCountry));
}

function buildAllPlatformsOptionLabel() {
  const explicit = String(t('allPlatform') || '').trim();
  if (explicit && !/^all\s*platform$/i.test(explicit)) return explicit;
  const lang = pageToLanguage(getCurrentFileName()) || 'en';
  if (lang === 'en') return 'All Platform';
  const range = String(t('periodAll') || '').trim();
  const word = String(t('podcastsWord') || '').trim();
  if (range && word) {
    if (lang === 'zh-hans' || lang === 'zh-hant' || lang === 'zh-hk' || lang === 'ja') return `${range}${word}`;
    return `${range} ${word}`.trim();
  }
  return range || word || (UI_TEXT_DEFAULT.allPlatform || 'All Platform');
}

function buildBrandedPodcastsLabel(brand, englishLabel) {
  const lang = pageToLanguage(getCurrentFileName()) || 'en';
  if (lang === 'en' && englishLabel) return englishLabel;
  const word = String(t('podcastsWord') || '').trim();
  return word ? `${brand} ${word}` : brand;
}

function buildCastboxOptionLabel() {
  return getLocalizedPlatformLabel('platformCastbox', 'Castbox Podcasts', 'Castbox', 'Castbox Podcasts');
}

function buildPocketcastsOptionLabel() {
  return getLocalizedPlatformLabel('platformPocketcasts', 'Pocket Casts Podcasts', 'Pocket Casts', 'Pocket Casts Podcasts');
}

function buildOrfSoundOptionLabel() {
  const label = String(t('platformOrfSound') || '').trim();
  return (label && label !== 'platformOrfSound') ? label : 'ORF Sound';
}

function buildRaiPlaySoundOptionLabel() {
  const label = String(t('platformRaiPlaySound') || '').trim();
  return (label && label !== 'platformRaiPlaySound') ? label : 'RaiPlay Sound';
}

function buildSrfAudioOptionLabel() {
  const label = String(t('platformSrfAudio') || '').trim();
  return (label && label !== 'platformSrfAudio') ? label : 'SRF Audio';
}

function buildDrLydOptionLabel() {
  const label = String(t('platformDrLyd') || '').trim();
  return (label && label !== 'platformDrLyd') ? label : 'DR LYD';
}

function buildRtbfAuvioOptionLabel() {
  const label = String(t('platformRtbfAuvio') || '').trim();
  return (label && label !== 'platformRtbfAuvio') ? label : 'RTBF Auvio';
}

function buildRneAudioOptionLabel() {
  const label = String(t('platformRneAudio') || '').trim();
  return (label && label !== 'platformRneAudio') ? label : 'RNE Audio';
}

function buildNpoLuisterOptionLabel() {
  const label = String(t('platformNpoLuister') || '').trim();
  return (label && label !== 'platformNpoLuister') ? label : 'NPO Luister';
}

function buildAudibleOptionLabel() {
  const label = String(t('platformAudible') || '').trim();
  return (label && label !== UI_TEXT_DEFAULT.platformAudible) ? label : buildBrandedPodcastsLabel('Audible', 'Audible Podcasts');
}

function buildIheartOptionLabel() {
  const label = t('platformIheartRadio');
  if (label) return label;
  return buildBrandedPodcastsLabel('iHeartRadio', 'iHeartRadio Podcasts');
}

function buildAbcListenOptionLabel() {
  const label = t('platformAbclisten');
  return (label && label !== UI_TEXT_DEFAULT.platformAbclisten) ? label : buildBrandedPodcastsLabel('ABC listen', 'ABC listen Podcasts');
}

function buildNrkOptionLabel() {
  const label = t('platformNrk');
  return (label && label !== UI_TEXT_DEFAULT.platformNrk) ? label : buildBrandedPodcastsLabel('NRK Radio', 'NRK Radio Podcasts');
}

function buildYleAreenaOptionLabel() {
  const label = t('platformYleAreena');
  return (label && label !== UI_TEXT_DEFAULT.platformYleAreena) ? label : buildBrandedPodcastsLabel('Yle Areena', 'Yle Areena Podcasts');
}

function buildSverigesRadioOptionLabel() {
  const label = t('platformSverigesRadio');
  return (label && label !== UI_TEXT_DEFAULT.platformSverigesRadio) ? label : buildBrandedPodcastsLabel('Sveriges Radio', 'Sveriges Radio Podcasts');
}

function buildPodbbangOptionLabel() {
  const label = String(t('platformPodbbang') || '').trim();
  if (label && label !== 'platformPodbbang') return label;
  const lang = pageToLanguage(getCurrentFileName()) || 'en';
  if (lang === 'ko') return buildBrandedPodcastsLabel('팟빵', '팟빵 팟캐스트');
  return buildBrandedPodcastsLabel('podbbang', 'podbbang Podcasts');
}

function buildAudioclipOptionLabel() {
  const label = String(t('platformAudioclip') || '').trim();
  if (label && label !== 'platformAudioclip') return label;
  const lang = pageToLanguage(getCurrentFileName()) || 'en';
  if (lang === 'ko') return buildBrandedPodcastsLabel('오디오클립', '오디오클립 팟캐스트');
  return buildBrandedPodcastsLabel('audioclip', 'audioclip Podcasts');
}

function buildAmazonmusicOptionLabel() {
  return getLocalizedPlatformLabel('platformAmazonmusic', 'Amazon Music Podcasts', 'Amazon Music', 'Amazon Music Podcasts');
}

function buildRadikoOptionLabel() {
  return buildBrandedPodcastsLabel('radiko', 'radiko Podcasts');
}

function buildDeezerOptionLabel() {
  return getLocalizedPlatformLabel('platformDeezer', 'Deezer Podcasts', 'Deezer', 'Deezer Podcasts');
}

function buildXimalayaOptionLabel() {
  const label = String(t('platformXimalaya') || '').trim();
  if (label) return label;
  return buildBrandedPodcastsLabel('Ximalaya', 'Ximalaya Podcasts');
}

function buildBilibiliOptionLabel() {
  const label = String(t('platformBilibili') || '').trim();
  if (label) return label;
  return buildBrandedPodcastsLabel('BiliBili', 'BiliBili Podcasts');
}

function buildBbcSoundsOptionLabel() {
  const label = String(t('platformBbcSounds') || '').trim();
  return (label && label !== UI_TEXT_DEFAULT.platformBbcSounds) ? label : buildBrandedPodcastsLabel('BBC Sounds', 'BBC Sounds Podcasts');
}

function buildSiriusXmOptionLabel() {
  const label = String(t('platformSiriusxm') || '').trim();
  return (label && label !== UI_TEXT_DEFAULT.platformSiriusxm) ? label : buildBrandedPodcastsLabel('SiriusXM', 'SiriusXM Podcasts');
}

function buildPandoraOptionLabel() {
  const label = String(t('platformPandora') || '').trim();
  return (label && label !== 'platformPandora') ? label : buildBrandedPodcastsLabel('Pandora', 'Pandora Podcasts');
}

function buildPodcastAppOptionLabel() {
  const label = String(t('platformPodcastApp') || '').trim();
  return (label && label !== UI_TEXT_DEFAULT.platformPodcastApp) ? label : buildBrandedPodcastsLabel('Podcast App', 'Podcast App Podcasts');
}

function buildRtlPlusOptionLabel() {
  const label = String(t('platformRtlPlus') || '').trim();
  return (label && label !== UI_TEXT_DEFAULT.platformRtlPlus) ? label : buildBrandedPodcastsLabel('RTL+', 'RTL+ Podcasts');
}

function buildTuneInOptionLabel() {
  const label = String(t('platformTuneIn') || '').trim();
  return (label && label !== UI_TEXT_DEFAULT.platformTuneIn) ? label : buildBrandedPodcastsLabel('TuneIn', 'TuneIn Podcasts');
}

function buildPodimoOptionLabel() {
  return getLocalizedPlatformLabel('platformPodimo', 'Podimo Podcasts', 'Podimo', 'Podimo Podcasts');
}

function buildPodcastAddictOptionLabel() {
  const label = String(t('platformPodcastAddict') || '').trim();
  return (label && label !== 'platformPodcastAddict')
    ? buildBrandedPodcastsLabel('Podcast Addict', label)
    : buildBrandedPodcastsLabel('Podcast Addict', 'Podcast Addict Podcasts');
}

function buildRadionetOptionLabel() {
  return getLocalizedPlatformLabel('platformRadionet', 'radio.net Podcasts', 'radio.net', 'radio.net Podcasts');
}

function buildIvooxOptionLabel() {
  return getLocalizedPlatformLabel('platformIvoox', 'iVoox Podcasts', 'iVoox', 'iVoox Podcasts');
}

function getLocalizedPlatformLabel(uiKey, defaultLabel, brand, englishLabel) {
  const label = String(t(uiKey) || '').trim();
  if (label && label !== uiKey) return label;
  return buildBrandedPodcastsLabel(brand, englishLabel);
}

function buildPlatformOptionLabel(value) {
  const key = String(value || '').trim().toLowerCase();
  if (key === 'all') return buildAllPlatformsOptionLabel();
  if (key === 'apple') return getLocalizedPlatformLabel('platformApple', UI_TEXT_DEFAULT.platformApple, 'Apple', 'Apple Podcasts');
  if (key === 'spotify') return getLocalizedPlatformLabel('platformSpotify', UI_TEXT_DEFAULT.platformSpotify, 'Spotify', 'Spotify Podcasts');
  if (key === 'youtube') return getLocalizedPlatformLabel('platformYoutube', UI_TEXT_DEFAULT.platformYoutube, 'YouTube', 'YouTube Podcasts');
  if (key === 'orfsound') return buildOrfSoundOptionLabel();
  if (key === 'raiplaysound') return buildRaiPlaySoundOptionLabel();
  if (key === 'srfaudio') return buildSrfAudioOptionLabel();
  if (key === 'drlyd') return buildDrLydOptionLabel();
  if (key === 'rtbfauvio') return buildRtbfAuvioOptionLabel();
  if (key === 'rneaudio') return buildRneAudioOptionLabel();
  if (key === 'npoluister') return buildNpoLuisterOptionLabel();
  if (key === 'ximalaya') return buildXimalayaOptionLabel();
  if (key === 'bilibili') return buildBilibiliOptionLabel();
  if (key === 'siriusxm') return buildSiriusXmOptionLabel();
  if (key === 'pandora') return buildPandoraOptionLabel();
  if (key === 'podcastapp') return buildPodcastAppOptionLabel();
  if (key === 'rtlplus') return buildRtlPlusOptionLabel();
  if (key === 'bbcsounds') return buildBbcSoundsOptionLabel();
  if (key === 'tunein') return buildTuneInOptionLabel();
  if (key === 'ardsounds') return 'ARD Sounds';
  if (key === 'radiofrance') return 'Radio France';
  if (key === 'abclisten') return buildAbcListenOptionLabel();
  if (key === 'nrk') return buildNrkOptionLabel();
  if (key === 'yleareena') return buildYleAreenaOptionLabel();
  if (key === 'sverigesradio') return buildSverigesRadioOptionLabel();
  if (key === 'podimo') return buildPodimoOptionLabel();
  if (key === 'podcastaddict') return buildPodcastAddictOptionLabel();
  if (key === 'deezer') return buildDeezerOptionLabel();
  if (key === 'radionet') return buildRadionetOptionLabel();
  if (key === 'ivoox') return buildIvooxOptionLabel();
  if (key === 'castbox') return buildCastboxOptionLabel();
  if (key === 'pocketcasts') return buildPocketcastsOptionLabel();
  if (key === 'audible') return buildAudibleOptionLabel();
  if (key === 'iheartradio') return buildIheartOptionLabel();
  if (key === 'podbbang') return buildPodbbangOptionLabel();
  if (key === 'audioclip') return buildAudioclipOptionLabel();
  if (key === 'amazonmusic') return buildAmazonmusicOptionLabel();
  if (key === 'radiko') return buildRadikoOptionLabel();
  return key;
}

function ensurePlatformOption(value) {
  if (!platformSelect) return null;
  const key = String(value || '').trim().toLowerCase();
  if (!key || key === 'all') return null;

  const allOption = platformSelect.querySelector('option[value="all"]');
  let option = platformSelect.querySelector(`option[value="${key}"]`);
  if (!option) {
    option = document.createElement('option');
    option.value = key;
  }

  const label = buildPlatformOptionLabel(key);
  option.textContent = label;
  option.title = label;

  if (allOption && allOption.parentNode === platformSelect) {
    platformSelect.insertBefore(option, allOption);
  } else if (option.parentNode !== platformSelect) {
    platformSelect.appendChild(option);
  }

  return option;
}

function ensureCastboxOption() { return ensurePlatformOption('castbox'); }
function ensurePocketcastsOption() { return ensurePlatformOption('pocketcasts'); }
function ensureAudibleOption() { return ensurePlatformOption('audible'); }
function ensureIheartOption() { return ensurePlatformOption('iheartradio'); }
function ensurePodbbangOption() { return ensurePlatformOption('podbbang'); }
function ensureAudioclipOption() { return ensurePlatformOption('audioclip'); }
function ensureAmazonmusicOption() { return ensurePlatformOption('amazonmusic'); }
function ensureRadikoOption() { return ensurePlatformOption('radiko'); }

function ensureAllPlatformOption() {
  if (!platformSelect) return;
  let option = platformSelect.querySelector('option[value="all"]');
  if (!option) {
    option = document.createElement('option');
    option.value = 'all';
    platformSelect.appendChild(option);
  }
  const label = buildAllPlatformsOptionLabel();
  option.textContent = label;
  option.title = label;
  if (platformSelect.lastElementChild !== option) platformSelect.appendChild(option);
}

function ensureAllKnownPlatformOptions() {
  if (!platformSelect) return;
  PLATFORM_OPTION_ORDER.forEach((value) => {
    if (value === 'all') return;
    ensurePlatformOption(value);
  });
  ensureAllPlatformOption();
}

function refreshPlatformOptionLabels() {
  if (!platformSelect) return;
  Array.from(platformSelect.options).forEach((option) => {
    const key = String(option.value || '').trim().toLowerCase();
    const label = buildPlatformOptionLabel(key);
    if (!label) return;
    option.textContent = label;
    option.title = label;
  });
}

function isPlatformAvailableForCountry(platform, country) {
  const key = String(platform || '').trim().toLowerCase();
  if (!key || key === 'all') return true;
  if (key === 'podcastaddict') return pageSupportsPodcastAddict();
  const allowed = COUNTRY_PLATFORM_RULES[key];
  if (!Array.isArray(allowed) || !allowed.length) return true;
  const safeCountry = normalizeCountry(country);
  return allowed.includes(safeCountry);
}

function getPlatformOptionOrderForCountry(country) {
  const safeCountry = normalizeCountry(country);
  if (safeCountry === 'jp') return JP_PLATFORM_OPTION_ORDER.slice();
  if (safeCountry === 'es') {
    const order = PLATFORM_OPTION_ORDER.slice();
    const ivooxIndex = order.indexOf('ivoox');
    const rneIndex = order.indexOf('rneaudio');
    if (ivooxIndex >= 0 && rneIndex >= 0 && ivooxIndex > rneIndex) {
      const [ivoox] = order.splice(ivooxIndex, 1);
      order.splice(rneIndex, 0, ivoox);
    }
    const radionetIndex = order.indexOf('radionet');
    const allIndex = order.indexOf('all');
    if (radionetIndex >= 0) {
      const [radionet] = order.splice(radionetIndex, 1);
      const insertIndex = allIndex >= 0 ? order.indexOf('all') : order.length;
      order.splice(insertIndex, 0, radionet);
    }
    return order;
  }
  return PLATFORM_OPTION_ORDER.slice();
}

function syncPlatformOptionsForCountry() {
  if (!platformSelect) return;

  const previous = String(platformSelect.value || '').trim().toLowerCase();
  const selectedCountry = countrySelect ? countrySelect.value : 'us';
  const platformOrder = getPlatformOptionOrderForCountry(selectedCountry);

  ensureAllKnownPlatformOptions();

  const allowed = new Set(
    platformOrder.filter((value) => value === 'all' || isPlatformAvailableForCountry(value, selectedCountry))
  );

  Array.from(platformSelect.options).forEach((option) => {
    const value = String(option.value || '').trim().toLowerCase();
    if (!allowed.has(value)) option.remove();
  });

  platformOrder.forEach((value) => {
    const option = platformSelect.querySelector(`option[value="${value}"]`);
    if (option) platformSelect.appendChild(option);
  });

  refreshPlatformOptionLabels();

  if (allowed.has(previous) && platformSelect.querySelector(`option[value="${previous}"]`)) {
    platformSelect.value = previous;
  } else if (platformSelect.querySelector('option[value="apple"]')) {
    platformSelect.value = 'apple';
  } else if (platformSelect.options.length) {
    platformSelect.value = platformSelect.options[0].value;
  }
}

function normalizeCrossPlatformKeyPart(value) {
  return String(value || '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[\u2018\u2019\u201C\u201D]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function aggregateAllPlatformsItems(groups, options = {}) {
  const platformWeights = (options && options.platformWeights && typeof options.platformWeights === 'object')
    ? options.platformWeights
    : null;
  const byKey = new Map();

  groups.forEach((group) => {
    const platform = String((group && group.platform) || '');
    const items = Array.isArray(group && group.items) ? group.items : [];

    items.slice(0, RANK_SCORE_EXTENDED_MAX).forEach((item, index) => {
      const rank = Number(item.rank) || (index + 1);
      const basePoints = scoreFromRank(rank);
      const weight = platformWeights && Number.isFinite(Number(platformWeights[platform])) ? Number(platformWeights[platform]) : 1;
      const points = basePoints * weight;
      if (!points) return;

      const titleKey = normalizeCrossPlatformKeyPart(item.title);
      const key = titleKey;
      if (!key) return;

      const row = byKey.get(key) || {
        key,
        title: item.title || '',
        publisher: item.publisher || '',
        image: item.image || '',
        url: item.url || '',
        embedUrl: item.embedUrl || '',
        embedPlatform: item.embedPlatform || '',
        embedKind: item.embedKind || '',
        points: 0,
        platformHits: 0,
        bestRank: 999,
        sourcePlatforms: new Set(),
        sourceCandidates: new Map(),
        topSourceRank: 999
      };

      row.points += points;
      row.bestRank = Math.min(row.bestRank, rank);
      if (!row.sourcePlatforms.has(platform)) {
        row.sourcePlatforms.add(platform);
        row.platformHits += 1;
      }
      if (item && (item.url || item.image || item.publisher || item.title) && !row.sourceCandidates.has(platform)) {
        row.sourceCandidates.set(platform, {
          title: item.title || '',
          publisher: item.publisher || '',
          image: item.image || '',
          url: item.url || '',
          embedUrl: item.embedUrl || '',
          embedPlatform: item.embedPlatform || '',
          embedKind: item.embedKind || '',
          rank
        });
      }

      if (!row.image && item.image) row.image = item.image;
      if (!row.url && item.url) row.url = item.url;
      if (!row.embedUrl && item.embedUrl) row.embedUrl = item.embedUrl;
      if (!row.embedPlatform && item.embedPlatform) row.embedPlatform = item.embedPlatform;
      if (!row.embedKind && item.embedKind) row.embedKind = item.embedKind;
      if (rank < row.topSourceRank) {
        row.topSourceRank = rank;
        row.title = item.title || row.title;
        row.publisher = item.publisher || row.publisher;
        row.image = item.image || row.image;
        row.url = item.url || row.url;
        row.embedUrl = item.embedUrl || row.embedUrl;
        row.embedPlatform = item.embedPlatform || row.embedPlatform;
        row.embedKind = item.embedKind || row.embedKind;
      }

      byKey.set(key, row);
    });
  });

  return Array.from(byKey.values())
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.platformHits !== a.platformHits) return b.platformHits - a.platformHits;
      if (a.bestRank !== b.bestRank) return a.bestRank - b.bestRank;
      return String(a.title || '').localeCompare(String(b.title || ''));
    })
    .map((row, index) => {
      const appleSource = row.sourceCandidates && row.sourceCandidates.get('apple');
      const fallbackSource = (row.sourceCandidates && row.sourceCandidates.size)
        ? Array.from(row.sourceCandidates.values()).sort((a, b) => (a.rank || 999) - (b.rank || 999))[0]
        : null;
      const preferred = appleSource && appleSource.url ? appleSource : (fallbackSource || null);

      return {
        rank: index + 1,
        title: row.title || '',
        publisher: row.publisher || '',
        image: (preferred && preferred.image) || row.image || '',
        url: (preferred && preferred.url) || row.url || '',
        embedUrl: (preferred && preferred.embedUrl) || row.embedUrl || '',
        embedPlatform: (preferred && preferred.embedPlatform) || row.embedPlatform || '',
        embedKind: (preferred && preferred.embedKind) || row.embedKind || ''
      };
    })
    .filter((row) => row.title);
}

function getPlatformFetchColorStack(platforms, activePlatform) {
  const order = [];
  if (activePlatform) order.push(...getPlatformAccentColors(activePlatform));
  (Array.isArray(platforms) ? platforms : []).forEach((platform) => {
    getPlatformAccentColors(platform).forEach((color) => order.push(color));
  });
  const seen = new Set();
  return order.filter((c) => {
    if (!c || seen.has(c)) return false;
    seen.add(c);
    return true;
  }).slice(0, 12);
}

async function fetchSinglePlatformNormalizedData(platform, type, country) {
  const candidates = getApiCandidates(platform, type, country);
  if (!candidates.length) throw new Error(`No source for ${platform}`);
  const data = await fetchJsonWithFallback(candidates);
  const items = collectNormalizedItemsForData(data, platform, type);
  if (!items.length) throw new Error(`Empty data for ${platform}`);
  return { data, items };
}

function choosePreferredLinkCandidate(rows) {
  const list = Array.isArray(rows) ? rows.filter(Boolean) : [];
  if (!list.length) return null;
  const apple = list.find((row) => /(?:podcasts|itunes)\.apple\.com/i.test(String(row.url || '')));
  if (apple) return apple;
  return list.slice().sort((a, b) => (Number(a.rank) || 999) - (Number(b.rank) || 999))[0] || list[0];
}

function aggregateLanguageScopeItems(groups, options = {}) {
  const countryWeights = (options && options.countryWeights && typeof options.countryWeights === 'object')
    ? options.countryWeights
    : null;
  const byKey = new Map();

  (Array.isArray(groups) ? groups : []).forEach((group) => {
    const country = String((group && group.country) || '').trim().toLowerCase();
    const items = Array.isArray(group && group.items) ? group.items : [];

    items.slice(0, RANK_SCORE_EXTENDED_MAX).forEach((item, index) => {
      const rank = Number(item.rank) || (index + 1);
      const basePoints = scoreFromRank(rank);
      const weight = countryWeights && Number.isFinite(Number(countryWeights[country])) ? Number(countryWeights[country]) : 1;
      const points = basePoints * weight;
      if (!points) return;

      const titleKey = normalizeCrossPlatformKeyPart(item && item.title);
      if (!titleKey) return;

      const row = byKey.get(titleKey) || {
        key: titleKey,
        title: String(item && item.title || '').trim(),
        publisher: String(item && item.publisher || '').trim(),
        image: String(item && item.image || '').trim(),
        url: String(item && item.url || '').trim(),
        embedUrl: String(item && item.embedUrl || '').trim(),
        embedPlatform: String(item && item.embedPlatform || '').trim().toLowerCase(),
        embedKind: String(item && item.embedKind || '').trim().toLowerCase(),
        points: 0,
        countryHits: 0,
        bestRank: 999,
        sourceCountries: new Set(),
        candidates: []
      };

      row.points += points;
      row.bestRank = Math.min(row.bestRank, rank);
      if (country && !row.sourceCountries.has(country)) {
        row.sourceCountries.add(country);
        row.countryHits += 1;
      }

      row.candidates.push({
        country,
        rank,
        title: String(item && item.title || '').trim(),
        publisher: String(item && item.publisher || '').trim(),
        image: String(item && item.image || '').trim(),
        url: String(item && item.url || '').trim(),
        embedUrl: String(item && item.embedUrl || '').trim(),
        embedPlatform: String(item && item.embedPlatform || '').trim().toLowerCase(),
        embedKind: String(item && item.embedKind || '').trim().toLowerCase()
      });

      if (!row.image && item.image) row.image = item.image;
      if (!row.url && item.url) row.url = item.url;
      if (!row.embedUrl && item.embedUrl) row.embedUrl = item.embedUrl;
      if (!row.embedPlatform && item.embedPlatform) row.embedPlatform = item.embedPlatform;
      if (!row.embedKind && item.embedKind) row.embedKind = item.embedKind;
      if (!row.publisher && item.publisher) row.publisher = item.publisher;

      byKey.set(titleKey, row);
    });
  });

  return Array.from(byKey.values())
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.countryHits !== a.countryHits) return b.countryHits - a.countryHits;
      if (a.bestRank !== b.bestRank) return a.bestRank - b.bestRank;
      return String(a.title || '').localeCompare(String(b.title || ''));
    })
    .map((row, index) => {
      const preferred = choosePreferredLinkCandidate(row.candidates);
      return {
        rank: index + 1,
        title: (preferred && preferred.title) || row.title || '',
        publisher: (preferred && preferred.publisher) || row.publisher || '',
        image: (preferred && preferred.image) || row.image || '',
        url: (preferred && preferred.url) || row.url || '',
        embedUrl: (preferred && preferred.embedUrl) || row.embedUrl || '',
        embedPlatform: (preferred && preferred.embedPlatform) || row.embedPlatform || '',
        embedKind: (preferred && preferred.embedKind) || row.embedKind || ''
      };
    })
    .filter((item) => item.title);
}

async function fetchCountryPlatformItemsWithCache(platform, type, country, options = {}) {
  const safeType = normalizeTypeForPlatform(platform, type);
  const safeCountry = String(country || 'us').trim().toLowerCase() || 'us';
  const forceRefresh = Boolean(options.forceRefresh);
  const localHit = await getCountryPlatformItemsFromLocalCache(platform, safeType, safeCountry, { forceRefresh });
  if (localHit) return localHit;

  const result = await fetchSinglePlatformNormalizedData(platform, safeType, safeCountry);
  const cacheKey = responseCacheKeyFor(platform, safeCountry, safeType);
  await setResponseCacheEntry(cacheKey, result.data);
  await saveDailySnapshot(platform, safeCountry, safeType, result.items, {
    fetchedAt: Date.now(),
    payload: result.data
  });
  return { items: result.items, source: 'live' };
}

async function getCountryPlatformItemsFromLocalCache(platform, type, country, options = {}) {
  const safeType = normalizeTypeForPlatform(platform, type);
  const safeCountry = String(country || 'us').trim().toLowerCase() || 'us';
  const forceRefresh = Boolean(options.forceRefresh);
  const todayKey = getCurrentSnapshotDateKeyForPlatform(platform);

  if (!forceRefresh) {
    const snapshot = await getSnapshotRecordForComboDate(platform, safeCountry, safeType, todayKey);
    if (snapshot && Array.isArray(snapshot.items) && snapshot.items.length) {
      return { items: snapshotRecordToRenderItems(snapshot), source: 'snapshot' };
    }
  }

  const cacheKey = responseCacheKeyFor(platform, safeCountry, safeType);
  const cachedEntry = forceRefresh ? null : await getResponseCacheEntry(cacheKey);
  const cached = cachedEntry && Object.prototype.hasOwnProperty.call(cachedEntry, 'payload') ? cachedEntry.payload : null;
  const cachedTime = Number((cachedEntry && cachedEntry.updatedAt) || 0);
  const cacheFresh = isResponseCacheFreshForPlatform(platform, safeType, cached, cachedTime);

  if (cacheFresh) {
    const items = collectNormalizedItemsForData(cached, platform, safeType);
    if (items.length) {
      await saveDailySnapshot(platform, safeCountry, safeType, items, {
        fetchedAt: cachedTime,
        payload: cached
      });
      return { items, source: 'cache' };
    }
  }

  return null;
}

function shouldRunBackgroundPrefetch() {
  if (typeof navigator !== 'undefined') {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;
    if (connection) {
      if (connection.saveData) return false;
      const effectiveType = String(connection.effectiveType || '').toLowerCase();
      if (effectiveType === 'slow-2g' || effectiveType === '2g') return false;
    }
  }
  return true;
}

function clearBackgroundPrefetchTimer() {
  if (!prefetchIdleTimer) return;
  clearTimeout(prefetchIdleTimer);
  prefetchIdleTimer = 0;
}

function cancelBackgroundPrefetch(options = {}) {
  clearBackgroundPrefetchTimer();
  prefetchRunId += 1;
  if (options.abortInFlight !== false && prefetchAbortController) {
    try { prefetchAbortController.abort(); } catch { }
  }
}

function getCurrentPrefetchCountry() {
  return normalizeCountry(countrySelect ? countrySelect.value : 'us');
}

function getCurrentPrefetchType(platform = (platformSelect ? platformSelect.value : 'apple')) {
  const safePlatform = String(platform || '').trim().toLowerCase();
  if (safePlatform === 'all') return normalizeTopType(typeSelect ? typeSelect.value : 'top-podcasts');
  return normalizeTypeForPlatform(safePlatform, typeSelect ? typeSelect.value : 'top-podcasts');
}

async function hasFreshResponseCacheForCombo(platform, country, type) {
  const cacheKey = responseCacheKeyFor(platform, country, type);
  const record = await getResponseCacheEntry(cacheKey);
  if (!record || !Object.prototype.hasOwnProperty.call(record, 'payload')) return false;
  return isResponseCacheFreshForPlatform(platform, type, record.payload, record.updatedAt);
}

function isPrefetchFailureCoolingDown(state, task) {
  const statusMap = state && state.comboStatus && typeof state.comboStatus === 'object' ? state.comboStatus : {};
  const row = statusMap[task.key];
  if (!row || typeof row !== 'object') return false;
  const failCount = Number(row.failCount || 0);
  const lastFailureAt = Number(row.lastFailureAt || 0);
  if (failCount < PREFETCH_MAX_RETRIES || !lastFailureAt) return false;
  return (Date.now() - lastFailureAt) < PREFETCH_FAILURE_COOLDOWN_MS;
}

function markPrefetchTaskSuccess(state, task) {
  if (!state.comboStatus || typeof state.comboStatus !== 'object') state.comboStatus = {};
  state.comboStatus[task.key] = {
    failCount: 0,
    lastSuccessAt: Date.now(),
    lastFailureAt: 0
  };
}

function markPrefetchTaskFailure(state, task) {
  if (!state.comboStatus || typeof state.comboStatus !== 'object') state.comboStatus = {};
  const prev = state.comboStatus[task.key] && typeof state.comboStatus[task.key] === 'object'
    ? state.comboStatus[task.key]
    : {};
  state.comboStatus[task.key] = {
    failCount: Math.max(PREFETCH_MAX_RETRIES, Number(prev.failCount || 0) + 1),
    lastSuccessAt: Number(prev.lastSuccessAt || 0),
    lastFailureAt: Date.now()
  };
}

function buildPrefetchPlatformsForScope(platform) {
  const safePlatform = String(platform || '').trim().toLowerCase();
  if (safePlatform === 'apple') return ['apple'];
  if (safePlatform === 'spotify') return ['spotify'];
  return ['apple', 'spotify'];
}

async function recordCurrentPrefetchInterest() {
  const scope = currentScopeValue();
  if (isFavoritesScopeMode(scope)) return;

  const selectedPlatform = String((platformSelect && platformSelect.value) || 'apple').trim().toLowerCase() || 'apple';
  const selectedCountry = getCurrentPrefetchCountry();
  const selectedType = getCurrentPrefetchType(selectedPlatform);
  const state = await loadPrefetchState();

  if (!isLanguageScopeMode(scope)) {
    touchPrefetchBucket(state.seenCountries, selectedCountry, { country: selectedCountry });

    if (selectedPlatform === 'apple' || selectedPlatform === 'spotify') {
      const comboKey = prefetchComboStateKey(selectedPlatform, selectedCountry, selectedType);
      touchPrefetchBucket(state.seenCombos, comboKey, {
        platform: selectedPlatform,
        country: selectedCountry,
        type: selectedType
      });
    } else if (selectedPlatform === 'all') {
      const allKey = `${selectedCountry}|${normalizeTopType(selectedType)}`;
      touchPrefetchBucket(state.allScopes, allKey, {
        country: selectedCountry,
        type: normalizeTopType(selectedType),
        platform: 'all'
      });
    }
  } else {
    const cfg = getLanguageScopeConfig(scope);
    if (cfg) {
      const scopePlatforms = buildPrefetchPlatformsForScope(selectedPlatform);
      const scopeType = selectedPlatform === 'all'
        ? normalizeTopType(selectedType)
        : normalizeTypeForPlatform(scopePlatforms[0], selectedType);
      const scopeKey = `${cfg.key}|${selectedPlatform}|${scopeType}`;
      touchPrefetchBucket(state.languageScopes, scopeKey, {
        scope: cfg.key,
        platform: selectedPlatform,
        type: scopeType,
        countries: Array.isArray(cfg.countries) ? cfg.countries.slice() : []
      });
    }
  }

  state.seenCountries = prunePrefetchBucket(state.seenCountries, PREFETCH_MAX_COUNTRY_HISTORY);
  state.seenCombos = prunePrefetchBucket(state.seenCombos, PREFETCH_MAX_EXACT_COMBOS);
  state.languageScopes = prunePrefetchBucket(state.languageScopes, PREFETCH_MAX_LANGUAGE_SCOPE_HISTORY);
  state.allScopes = prunePrefetchBucket(state.allScopes, PREFETCH_MAX_ALL_SCOPE_HISTORY);
  await savePrefetchState(state);
}

function hasAnyPrefetchHistory(state) {
  return Boolean(
    state
    && (
      Object.keys(state.seenCountries || {}).length
      || Object.keys(state.seenCombos || {}).length
      || Object.keys(state.languageScopes || {}).length
      || Object.keys(state.allScopes || {}).length
    )
  );
}

async function buildBackgroundPrefetchQueue() {
  const state = await loadPrefetchState();
  const currentScope = currentScopeValue();
  const currentCountry = getCurrentPrefetchCountry();
  const currentPlatform = String((platformSelect && platformSelect.value) || 'apple').trim().toLowerCase() || 'apple';
  const currentType = getCurrentPrefetchType(currentPlatform);
  const currentSingleKey = (!isLanguageScopeMode(currentScope) && currentPlatform !== 'all')
    ? prefetchComboStateKey(currentPlatform, currentCountry, currentType)
    : '';
  const tasks = [];
  const historyExists = hasAnyPrefetchHistory(state);

  if (historyExists) {
    recentEntriesFromBucket(state.seenCombos, PREFETCH_MAX_EXACT_COMBOS).forEach(([, entry]) => {
      const task = buildPrefetchTask(entry.platform, entry.country, entry.type, 'history-exact');
      if (task) tasks.push(task);
    });

    recentEntriesFromBucket(state.languageScopes, PREFETCH_MAX_LANGUAGE_SCOPE_HISTORY).forEach(([, entry]) => {
      const countries = (Array.isArray(entry && entry.countries) ? entry.countries : [])
        .map((code) => normalizeCountry(code))
        .filter(Boolean);
      const scopePlatform = String((entry && entry.platform) || '').trim().toLowerCase();
      countries.forEach((country) => {
        if (scopePlatform === 'all') {
          buildCountryBasePrefetchTasks(country, {
            includeAppleMainCategories: false,
            includeSpotifyCategories: false
          }).forEach((task) => tasks.push({ ...task, reason: 'history-language-all' }));
          return;
        }

        const task = buildPrefetchTask(scopePlatform, country, entry && entry.type, 'history-language');
        if (task) tasks.push(task);
      });
    });

    recentEntriesFromBucket(state.allScopes, PREFETCH_MAX_ALL_SCOPE_HISTORY).forEach(([, entry]) => {
      buildCountryBasePrefetchTasks(entry.country, {
        includeAppleMainCategories: true,
        includeSpotifyCategories: true
      }).forEach((task) => tasks.push({ ...task, reason: 'history-all' }));
    });

    recentEntriesFromBucket(state.seenCountries, PREFETCH_MAX_COUNTRY_HISTORY).forEach(([country]) => {
      buildCountryHistoryPrefetchTasks(country).forEach((task) => tasks.push(task));
    });
  }

  buildCountryBasePrefetchTasks(currentCountry, {
    currentPlatform,
    currentType,
    includeAppleMainCategories: true,
    includeSpotifyCategories: true
  }).forEach((task) => tasks.push(task));

  return dedupePrefetchTasks(tasks).filter((task) => task.key !== currentSingleKey);
}

function delayPrefetch(ms, signal) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      cleanup();
      resolve();
    }, Math.max(0, Number(ms) || 0));

    const cleanup = () => {
      clearTimeout(timeout);
      if (signal) signal.removeEventListener('abort', onAbort);
    };

    const onAbort = () => {
      cleanup();
      reject(new Error('Request aborted'));
    };

    if (signal) {
      if (signal.aborted) {
        cleanup();
        reject(new Error('Request aborted'));
        return;
      }
      signal.addEventListener('abort', onAbort, { once: true });
    }
  });
}

async function prefetchSingleTask(task, state, runId) {
  if (runId !== prefetchRunId) return false;
  if (isPrefetchFailureCoolingDown(state, task)) return false;
  if (await hasFreshResponseCacheForCombo(task.platform, task.country, task.type)) return false;

  let lastError = null;
  for (let attempt = 0; attempt < PREFETCH_MAX_RETRIES; attempt += 1) {
    if (runId !== prefetchRunId) return false;
    prefetchAbortController = new AbortController();

    try {
      const result = await fetchSinglePlatformNormalizedDataViaAllOrigins(
        task.platform,
        task.type,
        task.country,
        prefetchAbortController.signal
      );
      await setResponseCacheEntry(responseCacheKeyFor(task.platform, task.country, task.type), result.data);
      await saveDailySnapshot(task.platform, task.country, task.type, result.items, {
        fetchedAt: Date.now(),
        payload: result.data
      });
      markPrefetchTaskSuccess(state, task);
      await savePrefetchState(state);
      return true;
    } catch (error) {
      lastError = error;
      if (String(error && error.message || '') === 'Request aborted') return false;
      if (attempt < (PREFETCH_MAX_RETRIES - 1)) {
        const backoffMs = attempt === 0 ? 5000 + Math.floor(Math.random() * 1500) : 20000 + Math.floor(Math.random() * 2500);
        try {
          await delayPrefetch(backoffMs, prefetchAbortController && prefetchAbortController.signal);
        } catch {
          return false;
        }
      }
    } finally {
      prefetchAbortController = null;
    }
  }

  if (lastError) {
    console.warn(`Background prefetch failed for ${task.key}:`, lastError);
  }
  markPrefetchTaskFailure(state, task);
  await savePrefetchState(state);
  return false;
}

async function runBackgroundPrefetchQueue(runId) {
  if (!shouldRunBackgroundPrefetch()) return;
  const tasks = await buildBackgroundPrefetchQueue();
  if (!tasks.length) return;

  const state = await loadPrefetchState();
  for (const task of tasks) {
    if (runId !== prefetchRunId) return;
    if (!shouldRunBackgroundPrefetch()) return;

    if (await hasFreshResponseCacheForCombo(task.platform, task.country, task.type)) {
      continue;
    }

    await prefetchSingleTask(task, state, runId);
    if (runId !== prefetchRunId) return;

    try {
      await delayPrefetch(PREFETCH_INTER_REQUEST_DELAY_MS, null);
    } catch {
      return;
    }
  }
}

function scheduleBackgroundPrefetch() {
  if (!shouldRunBackgroundPrefetch() || isFavoritesScopeMode()) return;
  clearBackgroundPrefetchTimer();

  const runId = ++prefetchRunId;
  prefetchIdleTimer = window.setTimeout(() => {
    prefetchIdleTimer = 0;
    if (prefetchRunnerPromise) return;
    prefetchRunnerPromise = runBackgroundPrefetchQueue(runId)
      .catch((error) => {
        if (String(error && error.message || '') !== 'Request aborted') {
          console.warn('Background prefetch run failed:', error);
        }
      })
      .finally(() => {
        prefetchRunnerPromise = null;
      });
  }, PREFETCH_IDLE_DELAY_MS);
}

async function finalizeSuccessfulForegroundRender(items = null) {
  if (Array.isArray(items) && items.length && currentPeriodValue() === 'daily' && !getSelectedHistoryDateKey() && !isFavoritesScopeMode()) {
    try {
      await maybeNotifyFavoriteRankChanges(items);
    } catch (error) {
      console.warn('Favorite rank notification failed:', error);
    }
  }
  try {
    await recordCurrentPrefetchInterest();
  } catch (error) {
    console.warn('Prefetch history record failed:', error);
  }
  scheduleBackgroundPrefetch();
}

async function fetchLanguageScopeCompositeData(scopeValue, type, options = {}) {
  const cfg = getLanguageScopeConfig(scopeValue);
  if (!cfg) throw new Error(`Unsupported language scope: ${scopeValue}`);

  const selectedPlatform = platformSelect ? String(platformSelect.value || 'apple') : 'apple';
  const safeType = selectedPlatform === 'all'
    ? normalizeTopType(type)
    : normalizeTypeForPlatform(selectedPlatform, type);
  const forceRefresh = Boolean(options.forceRefresh);
  const onProgress = typeof options.onProgress === 'function' ? options.onProgress : null;
  const countries = (Array.isArray(cfg.countries) ? cfg.countries : [])
    .map((code) => String(code || '').trim().toLowerCase())
    .filter(Boolean)
    .filter((code, index, arr) => arr.indexOf(code) === index)
    .filter((code) => !(platformUsesUsOnly(selectedPlatform) && code !== 'us'));

  const totalUnits = Math.max(1, countries.length);
  const rawGroups = [];
  const failedCountries = [];
  let completed = 0;

  const fetchCountryGroup = async (country) => {
    if (selectedPlatform === 'all') {
      const data = await fetchAllPlatformsCompositeData(safeType, country, { forceRefresh });
      return collectNormalizedItemsForData(data, 'all', safeType);
    }
    const result = await fetchCountryPlatformItemsWithCache(selectedPlatform, safeType, country, { forceRefresh });
    return Array.isArray(result.items) ? result.items : [];
  };

  if (selectedPlatform !== 'all' && supportsWorkerCountryBatch(selectedPlatform, safeType)) {
    const missingCountries = [];
    const countedCountries = new Set();
    const markBatchFetchProgress = (country) => {
      const key = String(country || '').trim().toLowerCase();
      if (!key || countedCountries.has(key)) return;
      countedCountries.add(key);
      completed += 1;
      onProgress && onProgress({ stage: 'fetch', scope: cfg.key, country: key, progress: 0.05 + (completed / totalUnits) * 0.55 });
    };

    await mapWithConcurrency(countries, 6, async (country) => {
      onProgress && onProgress({ stage: 'fetch', scope: cfg.key, country, progress: 0.05 + (completed / totalUnits) * 0.55 });
      const localHit = await getCountryPlatformItemsFromLocalCache(selectedPlatform, safeType, country, { forceRefresh });
      if (localHit && Array.isArray(localHit.items) && localHit.items.length) {
        rawGroups.push({ country, items: localHit.items.slice(0, RANK_SCORE_EXTENDED_MAX) });
        markBatchFetchProgress(country);
        return;
      }
      missingCountries.push(country);
    });

    let pending = missingCountries.slice();
    for (let attempt = 0; attempt < 2 && pending.length; attempt += 1) {
      let batch = null;
      try {
        batch = await fetchWorkerCountryBatchRaw(selectedPlatform, safeType, pending);
      } catch (error) {
        console.warn(`Language scope batch fetch failed for ${cfg.key}/${selectedPlatform} (attempt ${attempt + 1}):`, error);
        if (attempt === 1) {
          pending.forEach((country) => {
            failedCountries.push(country);
            markBatchFetchProgress(country);
          });
        }
        continue;
      }

      const nextPending = Array.isArray(batch.failures) ? batch.failures.slice() : [];
      (Array.isArray(batch.results) ? batch.results : []).forEach((row) => {
        const country = String((row && row.country) || '').trim().toLowerCase();
        const data = row && row.data;
        if (!country || !data) return;
        try {
          const items = collectNormalizedItemsForData(data, selectedPlatform, safeType);
          if (items.length) {
            rawGroups.push({ country, items: items.slice(0, RANK_SCORE_EXTENDED_MAX) });
            setResponseCacheEntry(responseCacheKeyFor(selectedPlatform, country, safeType), data).catch(() => { });
            saveDailySnapshot(selectedPlatform, country, safeType, items, {
              fetchedAt: Date.now(),
              payload: data
            }).catch(() => { });
          } else if (!nextPending.includes(country)) {
            nextPending.push(country);
          }
        } catch (_error) {
          if (!nextPending.includes(country)) nextPending.push(country);
        }
        markBatchFetchProgress(country);
      });

      if (attempt === 1 && nextPending.length) {
        nextPending.forEach((country) => {
          if (!failedCountries.includes(country)) failedCountries.push(country);
          markBatchFetchProgress(country);
        });
      }
      pending = nextPending;
    }
  } else {
    await mapWithConcurrency(countries, 6, async (country) => {
      onProgress && onProgress({ stage: 'fetch', scope: cfg.key, country, progress: 0.05 + (completed / totalUnits) * 0.55 });
      let items = [];
      let error = null;
      try {
        items = await fetchCountryGroup(country);
      } catch (firstError) {
        error = firstError;
        try {
          items = await fetchCountryGroup(country);
          error = null;
        } catch (secondError) {
          error = secondError;
        }
      }

      if (error) {
        failedCountries.push(country);
        console.warn(`Language scope fetch failed for ${cfg.key}/${country}:`, error);
      } else {
        rawGroups.push({ country, items: Array.isArray(items) ? items.slice(0, RANK_SCORE_EXTENDED_MAX) : [] });
      }

      completed += 1;
      onProgress && onProgress({ stage: 'fetch', scope: cfg.key, country, progress: 0.05 + (completed / totalUnits) * 0.55 });
    });
  }

  const allItems = rawGroups.flatMap((group) => Array.isArray(group.items) ? group.items : []);
  onProgress && onProgress({ stage: 'detect', scope: cfg.key, progress: 0.68 });
  const detectedMap = await buildLanguageDetectionMapForItems(allItems, cfg.detectPrefix);
  onProgress && onProgress({ stage: 'detect', scope: cfg.key, progress: 0.88 });

  const filteredGroups = rawGroups.map((group) => ({
    country: group.country,
    items: filterItemsByLanguageDetection(group.items, cfg.detectPrefix, detectedMap)
  }));

  const aggregated = aggregateLanguageScopeItems(filteredGroups, {
    countryWeights: cfg.countryWeights || null
  });
  onProgress && onProgress({ stage: 'done', scope: cfg.key, progress: 1 });

  return {
    platform: cfg.key,
    scope: cfg.key,
    sourcePlatform: selectedPlatform,
    type: safeType,
    country: cfg.key,
    timestamp: new Date().toISOString(),
    podcasts: aggregated,
    sourceCountries: filteredGroups.filter((group) => Array.isArray(group.items) && group.items.length).map((group) => group.country),
    failedCountries
  };
}

async function getSnapshotRecordForComboDate(platform, country, type, dateKey = '') {
  const comboKey = comboKeyFor(platform, country, type);
  const effectiveDateKey = String(dateKey || getCurrentSnapshotDateKeyForPlatform(platform)).trim();
  const id = `${comboKey}::${effectiveDateKey}`;
  if (!id.endsWith('::')) {
    try {
      const direct = await idbGet(IDB_SNAPSHOT_STORE, id);
      if (direct && Array.isArray(direct.items) && direct.items.length) return direct;
    } catch (error) {
      console.warn('Snapshot direct read failed:', error);
    }
  }

  try {
    const rows = await idbGetAllByIndex(IDB_SNAPSHOT_STORE, 'comboKey', comboKey);
    if (Array.isArray(rows)) snapshotRowsCache.set(comboKey, rows);
    return (Array.isArray(rows) ? rows : []).find((row) => String((row && row.snapshotDate) || '') === effectiveDateKey) || null;
  } catch (error) {
    console.warn('Snapshot combo read failed:', error);
    const cachedRows = snapshotRowsCache.get(comboKey) || [];
    return cachedRows.find((row) => String((row && row.snapshotDate) || '') === effectiveDateKey) || null;
  }
}

async function fetchAllPlatformsCompositeData(type, country, options = {}) {
  const onProgress = typeof options.onProgress === 'function' ? options.onProgress : null;
  const forceRefresh = Boolean(options.forceRefresh);
  const platforms = getEligiblePlatformsForAll(type, country);
  const successes = [];
  let failed = [];

  const safeType = type === 'top-episodes' ? 'top-episodes' : 'top-podcasts';
  const safeCountry = String(country || 'us').trim().toLowerCase() || 'us';

  if (!platforms.length) {
    return { platform: 'all', type: safeType, country: safeCountry, timestamp: new Date().toISOString(), podcasts: [], sources: [], failedPlatforms: [] };
  }

  const fetchTargets = [];
  let completedUnits = 0;
  const totalUnits = platforms.length;

  for (const platform of platforms) {
    let usedLocalSnapshot = false;
    if (!forceRefresh) {
      const snapshot = await getSnapshotRecordForComboDate(platform, safeCountry, safeType);
      if (snapshot && Array.isArray(snapshot.items) && snapshot.items.length) {
        successes.push({ platform, data: null, items: snapshotRecordToRenderItems(snapshot), fromSnapshot: true });
        usedLocalSnapshot = true;
      }
    }

    if (!usedLocalSnapshot) {
      fetchTargets.push(platform);
    }

    completedUnits += 1;
    onProgress && onProgress({
      stage: usedLocalSnapshot ? 'cache' : 'plan',
      activePlatform: platform,
      platforms,
      progress: totalUnits ? (completedUnits / totalUnits) * 0.18 : 0.18
    });
  }

  const firstPassTotal = fetchTargets.length;
  let firstDone = 0;

  for (const platform of fetchTargets) {
    onProgress && onProgress({
      stage: 'fetch',
      activePlatform: platform,
      platforms,
      progress: 0.18 + (firstPassTotal ? (firstDone / firstPassTotal) * 0.62 : 0)
    });
    try {
      const result = await fetchSinglePlatformNormalizedData(platform, safeType, safeCountry);
      successes.push({ platform, data: result.data, items: result.items });
    } catch (error) {
      failed.push({ platform, error });
    } finally {
      firstDone += 1;
      onProgress && onProgress({
        stage: 'fetch',
        activePlatform: platform,
        platforms,
        progress: 0.18 + (firstPassTotal ? (firstDone / firstPassTotal) * 0.62 : 0.62)
      });
    }
  }

  if (failed.length) {
    const retryTargets = failed.slice();
    failed = [];
    let retryDone = 0;

    for (const entry of retryTargets) {
      const platform = entry.platform;
      onProgress && onProgress({ stage: 'retry', activePlatform: platform, platforms, progress: 0.80 + (retryTargets.length ? (retryDone / retryTargets.length) * 0.20 : 0) });
      try {
        const result = await fetchSinglePlatformNormalizedData(platform, safeType, safeCountry);
        successes.push({ platform, data: result.data, items: result.items });
      } catch (error) {
        failed.push({ platform, error });
      } finally {
        retryDone += 1;
        onProgress && onProgress({ stage: 'retry', activePlatform: platform, platforms, progress: 0.80 + (retryTargets.length ? (retryDone / retryTargets.length) * 0.20 : 0.20) });
      }
    }
  }

  const platformWeights = (safeCountry === 'us' && safeType === 'top-podcasts') ? US_ALL_PLATFORM_WEIGHTS : null;
  const aggregated = aggregateAllPlatformsItems(
    successes.map((entry) => ({ platform: entry.platform, items: entry.items })),
    { platformWeights }
  );
  onProgress && onProgress({ stage: 'done', platforms, progress: 1 });

  return {
    platform: 'all',
    type: safeType,
    country: safeCountry,
    timestamp: new Date().toISOString(),
    podcasts: aggregated,
    sources: successes.map((entry) => entry.platform),
    failedPlatforms: failed.map((entry) => entry.platform)
  };
}

function normalizeBcp47LanguageTag(tag) {
  const text = String(tag || '').trim().replace(/_/g, '-');
  if (!text) return '';
  return text
    .split('-')
    .map((part, index) => {
      if (!part) return '';
      if (index === 0) return part.toLowerCase();
      if (part.length === 4) return `${part.charAt(0).toUpperCase()}${part.slice(1).toLowerCase()}`;
      if (part.length === 2 || part.length === 3) return part.toUpperCase();
      return part.toLowerCase();
    })
    .join('-');
}

function getTranslateTarget(service = 'google') {
  const pageLang = pageToLanguage(getCurrentFileName());
  const googleMap = {
    'zh-hans': 'zh-CN',
    'zh-hant': 'zh-TW',
    'zh-hk': 'yue',
    'es-es': 'es',
    'es-419': 'es',
    'es-mx': 'es',
    'es-ar': 'es',
    'pt-br': 'pt',
    'pt-pt': 'pt-PT',
    'ha': 'ha',
    'ar-eg': 'ar',
    'ar-sa': 'ar',
    'ar-lb': 'ar',
    'ar-ma': 'ar',
    'ar-iq': 'ar',
    'fr-ca': 'fr-CA',
    'eo': 'eo',
    'la': 'la-VA',
    'he': 'iw',
    'jv': 'jw',
    'kmr': 'ku',
    'mn-cyrl': 'mn',
    'mn-mong': 'mn',
    'sr-cyrl': 'sr',
    'sr-latn': 'sr'
  };
  const microsoftMap = {
    'zh-hans': 'zh-Hans',
    'zh-hant': 'zh-Hant',
    'zh-hk': 'yue',
    'es-es': 'es-es',
    'es-419': 'es-419',
    'es-mx': 'es-mx',
    'es-ar': 'es-ar',
    'pt-br': 'pt-br',
    'pt-pt': 'pt-PT',
    'fr-ca': 'fr-CA',
    'ha': 'ha',
    'ar-eg': 'ar-eg',
    'ar-sa': 'ar-sa',
    'ar-lb': 'ar-lb',
    'ar-ma': 'ar-ma',
    'ar-iq': 'ar-iq',
    'tl': 'fil',
    'no': 'nb',
    'ckb': 'ku-arab',
    'hmn': 'mww',
    'lg': 'lug',
    'mn-cyrl': 'mn-Cyrl',
    'mn-mong': 'mn-Mong',
    'sr-cyrl': 'sr-Cyrl',
    'sr-latn': 'sr-Latn'
  };

  if (service === 'microsoft') {
    return microsoftMap[pageLang] || normalizeBcp47LanguageTag(document.documentElement.lang || pageLang || 'en');
  }

  return googleMap[pageLang] || document.documentElement.lang || pageLang || 'en';
}

function containsTraditionalMongolianScript(text) {
  return /[\u1800-\u18AF]/.test(String(text || ''));
}

function shouldPreferMicrosoftTranslation(text) {
  const pageLang = pageToLanguage(getCurrentFileName());
  if (MICROSOFT_PREFERRED_TRANSLATE_PAGE_LANGS.has(pageLang)) return true;
  if (containsTraditionalMongolianScript(text)) return true;
  return false;
}

function parseJwtExpirationMs(token) {
  const value = String(token || '').trim();
  if (!value) return 0;
  try {
    const parts = value.split('.');
    if (parts.length < 2) return 0;
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64 + '='.repeat((4 - (base64.length % 4 || 4)) % 4);
    const payload = JSON.parse(atob(padded));
    const exp = Number(payload && payload.exp);
    return Number.isFinite(exp) && exp > 0 ? exp * 1000 : 0;
  } catch (_) {
    return 0;
  }
}

async function getMicrosoftTranslateToken(forceRefresh = false) {
  const now = Date.now();
  if (!forceRefresh && microsoftTranslateAuthState && microsoftTranslateAuthState.token && microsoftTranslateAuthState.expiresAt > now + 60 * 1000) {
    return microsoftTranslateAuthState.token;
  }
  if (!forceRefresh && microsoftTranslateAuthPromise) return microsoftTranslateAuthPromise;

  microsoftTranslateAuthPromise = (async () => {
    const response = await fetch(MICROSOFT_TRANSLATE_AUTH_URL, { credentials: 'omit' });
    if (!response.ok) throw new Error(`Microsoft auth HTTP ${response.status}`);
    const token = String(await response.text()).trim();
    if (!token) throw new Error('Microsoft auth returned empty token');
    const expiresAt = parseJwtExpirationMs(token) || (Date.now() + 8 * 60 * 1000);
    microsoftTranslateAuthState = { token, expiresAt };
    return token;
  })();

  try {
    return await microsoftTranslateAuthPromise;
  } finally {
    microsoftTranslateAuthPromise = null;
  }
}

async function translateTextWithGoogle(text, targetLang) {
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(targetLang)}&dt=t&q=${encodeURIComponent(text)}`);
  if (!response.ok) throw new Error(`Google translate HTTP ${response.status}`);
  const data = await response.json();
  return {
    translatedText: data && data[0] && data[0][0] ? String(data[0][0][0] || text) : text,
    detectedLang: String((data && data[2]) || '').trim().toLowerCase(),
    provider: 'google'
  };
}

async function translateTextWithMicrosoft(text, targetLang, forceRefresh = false) {
  const token = await getMicrosoftTranslateToken(forceRefresh);
  const response = await fetch(`${MICROSOFT_TRANSLATE_API_BASE}&to=${encodeURIComponent(targetLang)}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify([{ Text: text }])
  });

  if (response.status === 401 && !forceRefresh) {
    microsoftTranslateAuthState = null;
    return translateTextWithMicrosoft(text, targetLang, true);
  }
  if (!response.ok) throw new Error(`Microsoft translate HTTP ${response.status}`);

  const data = await response.json();
  const row = Array.isArray(data) ? data[0] : null;
  const translation = row && Array.isArray(row.translations) ? row.translations[0] : null;
  return {
    translatedText: translation && typeof translation.text === 'string' ? translation.text : text,
    detectedLang: String(row && row.detectedLanguage && row.detectedLanguage.language || '').trim().toLowerCase(),
    provider: 'microsoft'
  };
}

function shouldSkipTranslate(detectedLang) {
  if (!detectedLang) return false;
  const detected = normalizeBcp47LanguageTag(detectedLang).toLowerCase();
  const pageLang = normalizeBcp47LanguageTag(pageToLanguage(getCurrentFileName()) || '').toLowerCase();
  const targets = [
    pageLang,
    normalizeBcp47LanguageTag(getTranslateTarget('google')).toLowerCase(),
    normalizeBcp47LanguageTag(getTranslateTarget('microsoft')).toLowerCase()
  ].filter(Boolean);

  const aliasGroups = [
    ['no', 'nb', 'nn'],
    ['tl', 'fil'],
    ['hmn', 'mww'],
    ['lg', 'lug'],
    ['zh-hk', 'yue'],
    ['ckb', 'ku', 'ku-arab']
  ];

  if (targets.some((target) => target === detected)) return true;
  if (targets.some((target) => aliasGroups.some((group) => group.includes(target) && group.includes(detected)))) return true;
  if (targets.some((target) => target.startsWith('es') && detected.startsWith('es'))) return true;
  if (targets.some((target) => target.startsWith('pt') && detected.startsWith('pt'))) return true;
  if (targets.some((target) => target.startsWith('zh') && detected.startsWith('zh'))) return true;
  if (targets.some((target) => target.startsWith('ar') && detected.startsWith('ar'))) return true;
  return false;
}

function normalizeTranslatedTextForCompare(text) {
  return String(text || '').replace(/\s+/g, ' ').trim();
}

const PODCASTS_WORD_BY_PAGE_LANG = {
  'zh-hans': '播客',
  'zh-hant': 'Podcasts',
  'zh-hk': 'Podcasts',
  ja: 'ポッドキャスト',
  ko: '팟캐스트'
};

function inferPodcastsWordFromTopLabel(label, pageLang = '') {
  const text = String(label || '').trim();
  if (!text) return '';
  const lang = String(pageLang || '').trim().toLowerCase();

  if (PODCASTS_WORD_BY_PAGE_LANG[lang]) return PODCASTS_WORD_BY_PAGE_LANG[lang];

  const latin = text.match(/\bpodcasts?\b/i);
  if (latin) return 'Podcasts';

  const cyr = text.match(/подкаст(?:ы|а|ов)?/i);
  if (cyr) return cyr[0];

  const arab = text.match(/بودكاست(?:ات)?/i);
  if (arab) return arab[0];

  const heb = text.match(/פודקאסט(?:ים)?/i);
  if (heb) return heb[0];

  const thai = text.match(/พอดแคสต์/i);
  if (thai) return thai[0];

  const compact = text.replace(/\s+/g, ' ').trim();
  if (compact) {
    const parts = compact.split(' ').map((p) => p.trim()).filter(Boolean);
    const candidate = (parts.length > 1 ? parts[parts.length - 1] : parts[0]) || '';
    const cleaned = candidate.replace(/^[\s.,:;!?。！？،؛]+|[\s.,:;!?。！？،؛]+$/g, '');
    if (cleaned && cleaned.length >= 2) return cleaned;
  }

  return '';
}

function resolvePodcastsWordForUi(pageLang, topLabel) {
  const explicit = String(uiText.podcastsWord || '').trim();
  if (explicit) return explicit;

  const inferred = inferPodcastsWordFromTopLabel(topLabel, pageLang);
  if (inferred) return inferred;

  return UI_TEXT_DEFAULT.podcastsWord;
}

async function translateText(text) {
  const cacheKey = `${pageToLanguage(getCurrentFileName()) || 'en'}::${text}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);
  const googleTarget = getTranslateTarget('google');
  const microsoftTarget = getTranslateTarget('microsoft');
  const serviceOrder = ['google', 'microsoft'];
  const serviceTasks = {
    google: () => translateTextWithGoogle(text, googleTarget),
    microsoft: () => translateTextWithMicrosoft(text, microsoftTarget)
  };

  const settled = await Promise.allSettled(serviceOrder.map((provider) => serviceTasks[provider]()));
  const usableResults = [];
  const seenTexts = new Set();

  settled.forEach((entry, index) => {
    const provider = serviceOrder[index];
    if (entry.status !== 'fulfilled') {
      console.warn(`Translation ${provider} failed:`, entry.reason);
      return;
    }
    const result = entry.value;
    if (!result || typeof result.translatedText !== 'string') return;
    if (shouldSkipTranslate(result.detectedLang)) return;

    const translatedText = normalizeTranslatedTextForCompare(result.translatedText);
    const originalText = normalizeTranslatedTextForCompare(text);
    if (!translatedText || translatedText === originalText) return;
    if (seenTexts.has(translatedText)) return;

    seenTexts.add(translatedText);
    usableResults.push({
      provider,
      detectedLang: String(result.detectedLang || '').trim().toLowerCase(),
      translatedText
    });
  });

  const finalResult = usableResults.length
    ? {
      results: usableResults,
      displayText: usableResults.map((item) => item.translatedText).join(' | ')
    }
    : null;

  translationCache.set(cacheKey, finalResult);
  return finalResult;
}

function normalizeLanguageDetectTitleKey(text) {
  const normalized = normalizeCrossPlatformKeyPart(text);
  return normalized || String(text || '').trim().toLowerCase();
}

function languageDetectStoreKey(titleKey) {
  return `${LANGUAGE_DETECT_CACHE_PREFIX}${titleKey}`;
}

async function getCachedDetectedLanguage(titleKey) {
  const key = String(titleKey || '').trim();
  if (!key) return '';
  const mem = languageDetectCache.get(key);
  if (mem && (Date.now() - Number(mem.updatedAt || 0) < LANGUAGE_DETECT_CACHE_TTL_MS)) {
    return String(mem.detectedLang || '').trim();
  }

  try {
    const record = await idbGet(IDB_META_STORE, languageDetectStoreKey(key));
    if (record && typeof record.detectedLang === 'string') {
      if (!record.updatedAt || (Date.now() - Number(record.updatedAt || 0) < LANGUAGE_DETECT_CACHE_TTL_MS)) {
        languageDetectCache.set(key, { detectedLang: record.detectedLang, updatedAt: Number(record.updatedAt || Date.now()) });
        return String(record.detectedLang || '').trim();
      }
    }
  } catch (error) {
    console.warn('Language detect cache read failed:', error);
  }

  return '';
}

async function setCachedDetectedLanguage(titleKey, detectedLang) {
  const key = String(titleKey || '').trim();
  const lang = String(detectedLang || '').trim().toLowerCase();
  if (!key || !lang) return;
  const record = { key: languageDetectStoreKey(key), detectedLang: lang, updatedAt: Date.now() };
  languageDetectCache.set(key, { detectedLang: lang, updatedAt: record.updatedAt });
  try {
    await idbPut(IDB_META_STORE, record);
  } catch (error) {
    console.warn('Language detect cache write failed:', error);
  }
}

function inferCjkLanguageByScript(text) {
  const source = String(text || '').trim();
  if (!source) return '';

  const hasHiragana = /[\u3040-\u309F]/.test(source);
  const hasKatakana = /[\u30A0-\u30FF\u31F0-\u31FF]/.test(source);
  const hasHangul = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/.test(source);
  const hanMatches = source.match(/[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/g) || [];
  const cjkMatches = source.match(/[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g) || [];

  if (hasHangul) return 'ko';
  if (hasHiragana || hasKatakana) return 'ja';

  const hanCount = hanMatches.length;
  const cjkCount = cjkMatches.length;
  if (hanCount >= 2 && cjkCount === hanCount) return 'zh';
  if (hanCount >= 2 && cjkCount > 0 && (hanCount / cjkCount) >= 0.85 && !hasHiragana && !hasKatakana) return 'zh';

  return '';
}

async function detectTextLanguage(text, preferredPrefix = '') {
  const source = String(text || '').trim();
  if (!source) return '';

  const titleKey = normalizeLanguageDetectTitleKey(source);
  const targetPrefix = String(preferredPrefix || '').trim().toLowerCase();

  if (targetPrefix === 'zh') {
    const scriptDetected = inferCjkLanguageByScript(source);
    if (scriptDetected === 'zh') {
      await setCachedDetectedLanguage(titleKey, 'zh');
      return 'zh';
    }
  }

  const cached = await getCachedDetectedLanguage(titleKey);
  if (cached) return cached;

  try {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(source)}`);
    const data = await response.json();
    const detected = String((data && data[2]) || '').trim().toLowerCase();
    if (detected) await setCachedDetectedLanguage(titleKey, detected);
    return detected;
  } catch (error) {
    console.warn('Language detect failed:', error);
    return '';
  }
}

async function mapWithConcurrency
  (items, limit, worker) {
  const list = Array.isArray(items) ? items : [];
  const size = Math.max(1, Number(limit) || 1);
  const results = new Array(list.length);
  let nextIndex = 0;

  const run = async () => {
    while (true) {
      const idx = nextIndex;
      nextIndex += 1;
      if (idx >= list.length) return;
      results[idx] = await worker(list[idx], idx);
    }
  };

  const workers = Array.from({ length: Math.min(size, list.length || 1) }, () => run());
  await Promise.all(workers);
  return results;
}

function languageCodeMatchesPrefix(detectedLang, prefix) {
  const detected = String(detectedLang || '').trim().toLowerCase();
  const target = String(prefix || '').trim().toLowerCase();
  if (!detected || !target) return false;

  const targets = (target === 'zh') ? ['zh', 'yue'] : [target];
  return targets.some((code) => (
    detected === code
    || detected.startsWith(`${code}-`)
    || detected.startsWith(`${code}_`)
  ));
}


async function buildLanguageDetectionMapForItems(items, detectPrefix) {
  const rows = Array.isArray(items) ? items : [];
  const prefix = String(detectPrefix || '').trim().toLowerCase();
  if (!prefix || !rows.length) return new Map();

  const titleTasks = [];
  const seen = new Set();

  rows.forEach((item) => {
    const title = String(item && item.title ? item.title : '').trim();
    const key = normalizeLanguageDetectTitleKey(title);
    if (!title || !key || seen.has(key)) return;
    seen.add(key);
    titleTasks.push({ key, title });
  });

  const results = await mapWithConcurrency(titleTasks, LANGUAGE_DETECT_CONCURRENCY, async (entry) => {
    const detected = await detectTextLanguage(entry.title, prefix);
    return { key: entry.key, detected };
  });

  const map = new Map();
  (Array.isArray(results) ? results : []).forEach((row) => {
    if (!row || !row.key) return;
    map.set(row.key, String(row.detected || '').trim().toLowerCase());
  });
  return map;
}

function filterItemsByLanguageDetection(items, detectPrefix, detectedMap) {
  const rows = Array.isArray(items) ? items : [];
  const prefix = String(detectPrefix || '').trim().toLowerCase();
  const map = detectedMap instanceof Map ? detectedMap : new Map();
  if (!prefix || !rows.length) return rows.slice();

  return rows.filter((item) => {
    const key = normalizeLanguageDetectTitleKey(item && item.title);
    if (!key) return false;
    return languageCodeMatchesPrefix(map.get(key), prefix);
  });
}

async function processTranslations() {
  const jobId = ++translateJobId;
  const titles = Array.from(document.querySelectorAll('.chart-row:not(.hidden):not(.chart-ad) .title'));
  const pending = titles.filter((node) => !node.querySelector('.translated-title'));

  for (let i = 0; i < pending.length; i += 5) {
    if (jobId !== translateJobId) return;
    const batch = pending.slice(i, i + 5);
    await Promise.all(batch.map(async (titleNode) => {
      const original = titleNode.textContent.trim();
      if (!original) return;
      const res = await translateText(original);
      if (!res || !res.displayText) return;
      if (titleNode.querySelector('.translated-title')) return;
      const span = document.createElement('span');
      span.className = 'translated-title';
      span.textContent = res.displayText;
      titleNode.appendChild(span);
    }));
  }
}

async function localizeBasicSelects() {
  ensureScopeSelectOptions();
  ensureAllKnownPlatformOptions();
  syncPlatformOptionsForCountry();
  rebuildTypeSelectOptions(platformSelect ? platformSelect.value : '', typeSelect ? typeSelect.value : '', { force: true });

  ensureAllPlatformOption();
  refreshPlatformOptionLabels();
  updatePeriodUiLabels();
  updateHeroTypeSubtitle();
}

async function localizeUiBundle() {
  const pageLang = pageToLanguage(getCurrentFileName());
  const englishModeBundle = getEnglishTextModeBundle();
  Object.assign(uiText, UI_TEXT_DEFAULT, UI_TEXT_OVERRIDES[pageLang] || {}, (englishModeBundle && englishModeBundle.uiText) || {});

  uiText.podcastsWord = resolvePodcastsWordForUi(pageLang, uiText.topPodcasts);

  applyUiText();
  await localizeBasicSelects();
  applyUiText();
  updateCountrySeo();
}

function applyUiText() {
  ensureScopeSelectOptions();
  const languagePlaceholder = languageSelectEl ? languageSelectEl.querySelector('option[value=""]') : null;
  if (languagePlaceholder) languagePlaceholder.textContent = t('language');

  if (searchInput) searchInput.placeholder = t('searchPlaceholder');
  if (clearSearchBtn) clearSearchBtn.setAttribute('aria-label', t('clearSearch'));
  if (randomBtn) randomBtn.textContent = t('surprise');
  if (shareBtn) shareBtn.textContent = t('share');
  if (refreshBtn) refreshBtn.textContent = t('refresh');
  if (myPodcastsEntryBtn) myPodcastsEntryBtn.textContent = buildMyPodcastsScopeLabel();
  if (topButton) topButton.textContent = t('backToTop');
  updateMyPodcastsEntryButtonState();
  if (emptyStateEl) emptyStateEl.textContent = t('empty');

  setStatus(currentStatusKey);
  if (loadingEl && loadingEl.style.display !== 'none') {
    loadingEl.textContent = t(currentLoadingKey);
  }

  document.querySelectorAll('.open-link').forEach((link) => {
    link.textContent = t('open');
  });
  document.querySelectorAll('.title-copy-btn').forEach((btn) => {
    const label = getCopyTitleActionLabel();
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  });
  document.querySelectorAll('.play-link').forEach((btn) => {
    const label = btn.classList.contains('is-active') ? getClosePlayerActionLabel() : getPlayEpisodeActionLabel();
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  });
  document.querySelectorAll('.history-link').forEach((btn) => {
    const label = btn.classList.contains('is-active') ? getCloseHistoryActionLabel() : getHistoryActionLabel();
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  });

  updatePeriodUiLabels();
  Promise.resolve(refreshHistoryDateOptions()).catch((error) => console.warn('History date options update failed:', error));
  Promise.resolve(updateDailyReminder()).catch((error) => console.warn('Daily reminder update failed:', error));
  updateItunesSearchAssistUi(Array.from(chartContainer.querySelectorAll('.chart-row:not(.hidden)')).length);
}

function getItunesSearchAssistSignature(query = '', country = normalizeCountry(countrySelect && countrySelect.value ? countrySelect.value : 'us')) {
  return [
    String(query || '').trim().toLowerCase(),
    normalizeCountry(country || 'us'),
    String((platformSelect && platformSelect.value) || '').trim().toLowerCase(),
    String(currentScopeValue() || '').trim().toLowerCase()
  ].join('::');
}

function ensureItunesSearchAssistUi() {
  if (itunesSearchAssistShellEl && itunesSearchAssistButtonEl && itunesSearchAssistResultsEl) return itunesSearchAssistShellEl;
  if (!chartContainer || !chartContainer.parentNode) return null;

  const shell = document.createElement('section');
  shell.className = 'itunes-search-assist hidden';
  const searchLabel = escapeHtml(String((searchInput && searchInput.placeholder) || tOr('searchPlaceholder', 'Search podcasts / episodes')));
  shell.innerHTML = `
    <div class="itunes-search-assist-head">
      <button class="itunes-search-trigger" id="itunes-search-trigger" type="button" aria-label="${searchLabel}" title="${searchLabel}">${getSearchCatalogSvg()}</button>
    </div>
    <div class="itunes-search-results hidden" id="itunes-search-results"></div>
  `;

  chartContainer.insertAdjacentElement('afterend', shell);

  itunesSearchAssistShellEl = shell;
  itunesSearchAssistButtonEl = shell.querySelector('#itunes-search-trigger');
  itunesSearchAssistResultsEl = shell.querySelector('#itunes-search-results');

  if (itunesSearchAssistButtonEl) {
    itunesSearchAssistButtonEl.addEventListener('click', () => {
      void runItunesCatalogSearch();
    });
  }

  if (itunesSearchAssistResultsEl) {
    bindAuxiliaryChartContainer(itunesSearchAssistResultsEl);
  }

  syncItunesSearchAssistTheme();
  return shell;
}

function syncItunesSearchAssistTheme() {
  const shell = ensureItunesSearchAssistUi();
  if (!shell) return;
  applyAccentPaletteToHost(shell, getRowAccentPaletteForCurrentSelection());
}

function resetItunesSearchAssistState() {
  itunesSearchAssistRunId += 1;
  itunesSearchAssistState = { signature: '', loading: false, items: [] };
  if (itunesSearchAssistResultsEl) {
    itunesSearchAssistResultsEl.innerHTML = '';
    itunesSearchAssistResultsEl.classList.add('hidden');
  }
}

function updateItunesSearchAssistUi(localMatches = 0) {
  const shell = ensureItunesSearchAssistUi();
  if (!shell || !itunesSearchAssistButtonEl || !itunesSearchAssistResultsEl) return;

  const query = String(searchInput && searchInput.value || '').trim();
  syncItunesSearchAssistTheme();

  if (!query) {
    shell.classList.add('hidden');
    resetItunesSearchAssistState();
    return;
  }

  const searchLabel = String((searchInput && searchInput.placeholder) || tOr('searchPlaceholder', 'Search podcasts / episodes'));
  itunesSearchAssistButtonEl.setAttribute('aria-label', searchLabel);
  itunesSearchAssistButtonEl.setAttribute('title', searchLabel);

  const country = normalizeCountry(countrySelect && countrySelect.value ? countrySelect.value : 'us');
  const signature = getItunesSearchAssistSignature(query, country);
  if (itunesSearchAssistState.loading && itunesSearchAssistState.signature && itunesSearchAssistState.signature !== signature) {
    itunesSearchAssistRunId += 1;
    itunesSearchAssistState.loading = false;
  }
  if (itunesSearchAssistState.signature && itunesSearchAssistState.signature !== signature && !itunesSearchAssistState.loading) {
    resetItunesSearchAssistState();
  }

  shell.classList.remove('hidden');
  shell.classList.toggle('is-empty-local', Number(localMatches) === 0);
  itunesSearchAssistButtonEl.classList.toggle('is-loading', !!itunesSearchAssistState.loading);
  itunesSearchAssistButtonEl.disabled = !!itunesSearchAssistState.loading;

  if (itunesSearchAssistState.signature !== signature && !itunesSearchAssistState.loading) {
    itunesSearchAssistResultsEl.innerHTML = '';
    itunesSearchAssistResultsEl.classList.add('hidden');
  }
}

function localizeCountryNames() {
  if (!countrySelect || typeof Intl === 'undefined' || typeof Intl.DisplayNames !== 'function') return;

  const pageLang = pageToLanguage(getCurrentFileName()) || '';
  const displayLocaleMap = {
    'am': 'am-ET',
    'as': 'as-IN',
    'cy': 'cy-GB',
    'gl': 'gl-ES',
    'lb': 'lb-LU',
    'ky': 'ky-KG',
    'or': 'or-IN',
    'ps': 'ps-AF',
    'so': 'so-SO',
    'tg': 'tg-TJ'
  };

  const candidates = [];
  const pushCandidate = (value) => {
    const v = String(value || '').trim();
    if (!v) return;
    if (!candidates.includes(v)) candidates.push(v);
  };

  pushCandidate(displayLocaleMap[pageLang]);
  pushCandidate(pageLang);
  pushCandidate(getTranslateTarget());
  pushCandidate(document.documentElement && document.documentElement.lang);
  pushCandidate('en');

  let locale = candidates[0] || 'en';
  try {
    if (typeof Intl.DisplayNames.supportedLocalesOf === 'function') {
      const supported = Intl.DisplayNames.supportedLocalesOf(candidates);
      if (supported && supported.length) locale = supported[0];
    }
  } catch (error) {
    console.warn('Intl.DisplayNames locale selection failed:', error);
  }

  const regionNames = new Intl.DisplayNames([locale], { type: 'region' });

  Array.from(countrySelect.options).forEach((option) => {
    const code = String(option.value || '').trim().toUpperCase();
    if (!code) return;

    if (code === 'XK') {
      return;
    }

    const localName = regionNames.of(code);
    if (localName && localName !== code) {
      option.textContent = localName;
    }
  });
}

function getSelectedCountryLabel() {
  if (!countrySelect) return '';
  const idx = countrySelect.selectedIndex;
  if (idx < 0) return '';
  const option = countrySelect.options[idx];
  return option ? String(option.textContent || '').trim() : '';
}

function buildCountryChartHeading(countryName) {
  const base = baseHeroTitle || baseDocumentTitle || 'Podcast Charts';
  const scopeHeading = getScopeHeadingOverride();
  if (scopeHeading) return `${base} - ${scopeHeading}`;

  const country = String(countryName || '').trim();
  if (!country) return base;

  const lang = pageToLanguage(getCurrentFileName());

  if (lang === 'zh-hans' || lang === 'zh-hant' || lang === 'zh-hk' || lang === 'ja') {
    return `${country}${base}`;
  }

  if (lang === 'ko') {
    return `${country} ${base}`;
  }

  return `${base} - ${country}`;
}

function buildCountryMetaDescription(countryName, headingText) {
  const base = String(baseMetaDescription || '').trim();
  if (base) return base;
  return String(headingText || baseDocumentTitle || '').trim();
}

function upsertMetaContent(key, value, useProperty = false) {
  const head = document.head;
  if (!head) return;

  const attr = useProperty ? 'property' : 'name';
  const selector = useProperty ? `meta[property="${key}"]` : `meta[name="${key}"]`;
  let node = head.querySelector(selector);

  if (!node) {
    node = document.createElement('meta');
    node.setAttribute(attr, key);
    head.appendChild(node);
  }

  node.setAttribute('content', value);
}

function updateCountrySeo() {
  const countryName = getSelectedCountryLabel();
  const heading = buildCountryChartHeading(countryName);
  const description = buildCountryMetaDescription(countryName, heading);

  if (heroTitleEl) {
    heroTitleEl.textContent = heading;
    syncHeroGlassTextAttrs();
  }
  document.title = heading;
  updateHeroTypeSubtitle();

  if (metaDescriptionEl) {
    metaDescriptionEl.setAttribute('content', description);
  } else {
    upsertMetaContent('description', description);
  }

  upsertMetaContent('og:title', heading, true);
  upsertMetaContent('og:description', description, true);
  upsertMetaContent('twitter:title', heading);
  upsertMetaContent('twitter:description', description);
}

window.retryImageLoading = function(imgElement, originalUrl, fallbackUrl, syncBgElement = null) {
  if (!imgElement || !originalUrl || originalUrl === fallbackUrl) return;
  if (imgElement.dataset.retrying) return;
  imgElement.dataset.retrying = '1';

  let attempts = 0;
  const maxAttempts = 10;
  
  const attemptRetry = () => {
    if (!imgElement.isConnected) return; // Stop if removed from DOM
    if (attempts >= maxAttempts) {
      delete imgElement.dataset.retrying;
      return;
    }
    
    attempts++;
    const tester = new Image();
    // 3s, 4.5s, 6.75s... up to ~30s max delay
    const delay = Math.min(30000, 3000 * Math.pow(1.5, attempts - 1));
    
    tester.onload = () => {
      if (imgElement.isConnected) {
        imgElement.setAttribute('src', originalUrl);
        if (syncBgElement && syncBgElement.isConnected) {
          syncBgElement.style.backgroundImage = `url('${originalUrl.replace(/'/g, "\\'")}')`;
        }
        delete imgElement.dataset.retrying;
      }
    };
    tester.onerror = () => {
      setTimeout(attemptRetry, delay);
    };
    tester.src = originalUrl;
  };
  
  setTimeout(attemptRetry, 3000);
};

window.handlePlaylistCoverError = function(imgEl, originalUrl, fallbackUrl) {
  if (!imgEl) return;
  imgEl.setAttribute('src', fallbackUrl);
  const bgEl = imgEl.parentElement ? imgEl.parentElement.querySelector('.plm-audio-cover-bg') : null;
  if (bgEl) {
    bgEl.style.backgroundImage = `url('${fallbackUrl}')`;
  }
  if (!imgEl.dataset.retrying) {
    window.retryImageLoading(imgEl, originalUrl, fallbackUrl, bgEl);
  }
};

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function ensureHeroWallStage() {
  if (!topbgEl) return null;
  let stage = document.getElementById('hero-wall-stage');
  if (!stage) {
    stage = document.createElement('div');
    stage.id = 'hero-wall-stage';

    const blur = document.createElement('div');
    blur.id = 'hero-wall-blur';

    const front = document.createElement('div');
    front.id = 'hero-wall-front';

    stage.appendChild(blur);
    stage.appendChild(front);

    const content = document.getElementById('content');
    if (content && content.parentNode === topbgEl) {
      topbgEl.insertBefore(stage, content);
    } else {
      topbgEl.appendChild(stage);
    }
  }

  return {
    stage,
    blur: document.getElementById('hero-wall-blur'),
    front: document.getElementById('hero-wall-front')
  };
}

function wallMetrics() {
  const rect = topbgEl ? topbgEl.getBoundingClientRect() : { width: window.innerWidth || 1280, height: 420 };
  const width = Math.max(rect.width || 0, 320);
  const height = Math.max(rect.height || 0, 240);

  let tile = 104;
  let gap = 9;

  if (width < 460) {
    tile = 62;
    gap = 6;
  } else if (width < 760) {
    tile = 72;
    gap = 7;
  } else if (width < 1024) {
    tile = 84;
    gap = 8;
  } else if (width < 1380) {
    tile = 94;
    gap = 8;
  }

  const cols = Math.max(1, Math.ceil((width + gap) / (tile + gap)));
  const rows = Math.max(1, Math.ceil((height + gap) / (tile + gap)));
  const count = cols * rows;

  return { tile, gap, cols, rows, count };
}

function uniqueCoverUrls(items) {
  const seen = new Set();
  const urls = [];
  for (const item of items) {
    const cover = String(item && item.image ? item.image : '').trim();
    if (!cover || seen.has(cover)) continue;
    seen.add(cover);
    urls.push(cover);
    if (urls.length >= 180) break;
  }
  return urls;
}

function buildWallMarkup(covers, className, startOffset = 0, maxCount) {
  if (!covers.length) return '';
  const limit = Math.max(0, Number.isFinite(maxCount) ? maxCount : covers.length);
  if (!limit) return '';

  let html = '';
  for (let i = 0; i < limit; i += 1) {
    const rawImage = String(covers[(startOffset + i) % covers.length] || '').trim();
    const image = escapeHtml(rawImage);
    const imageReferrerPolicy = needsNoReferrerImage(rawImage, '') ? ' referrerpolicy="no-referrer"' : '';
    html += `<div class="wall-tile ${className}" style="--i:${i}"><img src="${image}" alt="" loading="lazy" decoding="async"${imageReferrerPolicy} /></div>`;
  }
  return html;
}


function renderHeroWall(items) {
  const wall = ensureHeroWallStage();
  if (!wall || !topbgEl) return;

  const covers = uniqueCoverUrls(items);
  const metrics = wallMetrics();

  topbgEl.style.setProperty('--tile-size', `${metrics.tile}px`);
  topbgEl.style.setProperty('--tile-gap', `${metrics.gap}px`);
  topbgEl.style.setProperty('--wall-cols', String(metrics.cols));
  topbgEl.style.setProperty('--wall-rows', String(metrics.rows));

  if (!covers.length) {
    wall.blur.innerHTML = '';
    wall.front.innerHTML = '';
    return;
  }

  const visibleCount = metrics.count;
  const blurOffset = visibleCount > 1 ? Math.min(Math.max(1, Math.floor(metrics.cols / 2)), visibleCount - 1) : 0;

  wall.blur.innerHTML = buildWallMarkup(covers, 'wall-blur-tile', blurOffset, visibleCount);
  wall.front.innerHTML = buildWallMarkup(covers, 'wall-front-tile', 0, visibleCount);
}


function queueHeroWallResize() {
  if (wallResizeTimer) clearTimeout(wallResizeTimer);
  wallResizeTimer = setTimeout(() => renderHeroWall(latestWallItems), 140);
}

function setTopButtonVisibility() {
  if (!topButton) return;
  const show = window.scrollY > 520;
  topButton.style.opacity = show ? '1' : '0';
  topButton.style.pointerEvents = show ? 'auto' : 'none';
}

function allOriginsCandidates(src) {
  const encoded = encodeURIComponent(src);
  return [
    `https://api.allorigins.win/raw?url=${encoded}`,
    `https://api.allorigins.win/raw?url=${src}`
  ];
}

function getApiCandidates(platform, type, country) {
  if (platform === 'all') return [];
  const safeType = normalizeTypeForPlatform(platform, type);
  const simpleType = normalizeTopType(safeType);
  const safeCountry = normalizeCountry(country);
  const safePlatform = String(platform || '').trim().toLowerCase();

  if (!isPlatformAvailableForCountry(safePlatform, safeCountry)) return [];

  if (safePlatform === 'youtube') {
    const params = new URLSearchParams({
      platform: safePlatform,
      type: simpleType,
      country: safeCountry
    });
    return [`${WORKER_API_BASE}/?${params.toString()}`];
  }

  if (
    safePlatform === 'apple'
    || safePlatform === 'spotify'
    || safePlatform === 'bilibili'
    || safePlatform === 'siriusxm'
    || safePlatform === 'pandora'
    || safePlatform === 'podcastapp'
    || safePlatform === 'rtlplus'
    || safePlatform === 'bbcsounds'
    || safePlatform === 'tunein'
    || safePlatform === 'ardsounds'
    || safePlatform === 'radiofrance'
    || safePlatform === 'abclisten'
    || safePlatform === 'nrk'
    || safePlatform === 'yleareena'
    || safePlatform === 'sverigesradio'
    || safePlatform === 'podimo'
    || safePlatform === 'deezer'
    || safePlatform === 'radionet'
    || safePlatform === 'ivoox'
    || safePlatform === 'castbox'
    || safePlatform === 'pocketcasts'
    || safePlatform === 'podbbang'
    || safePlatform === 'audioclip'
    || safePlatform === 'orfsound'
    || safePlatform === 'raiplaysound'
    || safePlatform === 'srfaudio'
    || safePlatform === 'drlyd'
    || safePlatform === 'rtbfauvio'
    || safePlatform === 'rneaudio'
    || safePlatform === 'npoluister'
  ) {
    const params = new URLSearchParams({
      platform: safePlatform,
      type: safeType,
      country: safeCountry
    });
    if (safePlatform === 'bilibili') params.set('rev', '2');
    return [`${WORKER_API_BASE}/?${params.toString()}`];
  }

  if (safePlatform === 'podcastaddict') {
    const language = getPodcastAddictLanguageCode();
    if (!language) return [];
    const params = new URLSearchParams({
      platform: safePlatform,
      type: 'top-podcasts',
      country: safeCountry,
      language
    });
    return [`${WORKER_API_BASE}/?${params.toString()}`];
  }

  if (safePlatform === 'audible') {
    const params = new URLSearchParams({
      platform: safePlatform,
      type: 'top-podcasts',
      country: safeCountry
    });
    return [`${WORKER_API_BASE}/?${params.toString()}`];
  }

  if (safePlatform === 'iheartradio') {
    const params = new URLSearchParams({
      platform: safePlatform,
      type: 'top-podcasts',
      country: 'us'
    });
    return [`${WORKER_API_BASE}/?${params.toString()}`];
  }

  if (safePlatform === 'amazonmusic' || safePlatform === 'radiko') {
    const params = new URLSearchParams({
      platform: safePlatform,
      type: 'top-podcasts',
      country: safeCountry
    });
    return [`${WORKER_API_BASE}/?${params.toString()}`];
  }

  return [];
}

function parsePossibleJson(text) {
  const trimmed = String(text || '').trim();
  if (!trimmed) throw new Error('Empty response');

  try {
    const parsed = JSON.parse(trimmed);
    if (parsed && typeof parsed === 'object' && typeof parsed.contents === 'string') {
      return JSON.parse(parsed.contents);
    }
    return parsed;
  } catch (error) {
    try {
      const wrapped = JSON.parse(trimmed.replace(/^\uFEFF/, ''));
      if (wrapped && typeof wrapped.contents === 'string') {
        return JSON.parse(wrapped.contents);
      }
      throw error;
    } catch {
      throw error;
    }
  }
}

async function fetchJsonWithFallback(urls) {
  let lastError = null;

  for (let round = 0; round < 2; round += 1) {
    for (const originalUrl of urls) {
      const stamp = `_ts=${Date.now()}_${round}`;
      const url = round === 0
        ? originalUrl
        : `${originalUrl}${originalUrl.includes('?') ? '&' : '?'}${stamp}`;

      try {
        const response = await fetch(url, { cache: 'no-store' });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const text = await response.text();
        return parsePossibleJson(text);
      } catch (error) {
        lastError = error;
      }
    }
  }

  throw lastError || new Error('Request failed');
}

function buildAbortErrorMessage(signal, didTimeout, timeoutMs) {
  if (didTimeout) return `Timeout after ${Math.round(Number(timeoutMs || PREFETCH_REQUEST_TIMEOUT_MS) / 1000)}s`;
  if (signal && signal.aborted) return 'Request aborted';
  return 'Request aborted';
}

async function fetchTextWithTimeout(url, options = {}) {
  const timeoutMs = Math.max(5000, Number(options.timeoutMs) || PREFETCH_REQUEST_TIMEOUT_MS);
  const externalSignal = options.signal || null;
  const controller = new AbortController();
  const headers = options.headers && typeof options.headers === 'object' ? options.headers : {};
  let didTimeout = false;

  const handleAbort = () => controller.abort();
  if (externalSignal) {
    if (externalSignal.aborted) controller.abort();
    else externalSignal.addEventListener('abort', handleAbort, { once: true });
  }

  const timeoutId = setTimeout(() => {
    didTimeout = true;
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      signal: controller.signal,
      headers
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return unwrapProxyWrappedText(await response.text());
  } catch (error) {
    if (error && error.name === 'AbortError') {
      throw new Error(buildAbortErrorMessage(externalSignal, didTimeout, timeoutMs));
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
    if (externalSignal) externalSignal.removeEventListener('abort', handleAbort);
  }
}

async function fetchTextViaAllOrigins(sourceUrl, options = {}) {
  const candidates = allOriginsCandidates(sourceUrl);
  let lastError = null;

  for (const candidate of candidates) {
    try {
      return await fetchTextWithTimeout(candidate, {
        timeoutMs: options.timeoutMs,
        signal: options.signal,
        headers: options.headers
      });
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('AllOrigins request failed');
}

function decodeXmlEntities(value) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = String(value || '');
  return textarea.value;
}

function extractFirstXmlMatch(text, pattern, groupIndex = 1) {
  const match = String(text || '').match(pattern);
  return match ? decodeXmlEntities(match[groupIndex] || '') : '';
}

function normalizeAppleXmlFeedText(text) {
  return String(text || '').trim().replace(/^\uFEFF/, '');
}

function extractLargestAppleArtworkFromEntry(entryXml) {
  const matches = [...String(entryXml || '').matchAll(/<im:image\b[^>]*height="(\d+)"[^>]*>([\s\S]*?)<\/im:image>/gi)];
  if (!matches.length) return '';
  const ranked = matches
    .map((match) => ({
      size: Number(match[1]) || 0,
      url: decodeXmlEntities(match[2] || '').trim()
    }))
    .filter((row) => row.url);
  if (!ranked.length) return '';
  ranked.sort((a, b) => a.size - b.size);
  return ranked[ranked.length - 1].url;
}

function extractAppleFeedEntry(entryXml) {
  const url =
    extractFirstXmlMatch(entryXml, /<link\b[^>]*\brel=["']alternate["'][^>]*\bhref=["']([^"']+)["'][^>]*\/?>/i) ||
    extractFirstXmlMatch(entryXml, /<link\b[^>]*\bhref=["']([^"']+)["'][^>]*\brel=["']alternate["'][^>]*\/?>/i) ||
    extractFirstXmlMatch(entryXml, /<id\b[^>]*>([\s\S]*?)<\/id>/i);

  return {
    name: String(extractFirstXmlMatch(entryXml, /<im:name\b[^>]*>([\s\S]*?)<\/im:name>/i) || '').trim(),
    artistName: String(extractFirstXmlMatch(entryXml, /<im:artist\b[^>]*>([\s\S]*?)<\/im:artist>/i) || '').trim(),
    artworkUrl100: extractLargestAppleArtworkFromEntry(entryXml),
    url: String(url || '').trim()
  };
}

function parseAppleRssXmlToPayload(text) {
  const source = normalizeAppleXmlFeedText(text);
  const entries = source.match(/<entry\b[\s\S]*?<\/entry>/gi) || [];
  if (!entries.length) throw new Error('No <entry> nodes found in Apple feed');

  return {
    feed: {
      updated: extractFirstXmlMatch(source, /<updated\b[^>]*>([\s\S]*?)<\/updated>/i),
      results: entries
        .map((entryXml) => extractAppleFeedEntry(entryXml))
        .filter((entry) => entry && entry.name)
    }
  };
}

const SPOTIFY_PREFETCH_SLUG_MAP = Object.freeze({
  'spotify-trending': 'trending',
  'spotify-arts': 'arts',
  'spotify-business': 'business',
  'spotify-comedy': 'comedy',
  'spotify-education': 'education',
  'spotify-fiction': 'fiction',
  'spotify-health-fitness': 'health%252520%2526%252520fitness',
  'spotify-history': 'history',
  'spotify-leisure': 'leisure',
  'spotify-music': 'music',
  'spotify-news': 'news',
  'spotify-religion-spirituality': 'religion%252520%2526%252520spirituality',
  'spotify-science': 'science',
  'spotify-society-culture': 'society%252520%2526%252520culture',
  'spotify-sports': 'sports',
  'spotify-technology': 'technology',
  'spotify-true-crime': 'true%252520crime',
  'spotify-tv-film': 'tv%252520%2526%252520film'
});

function buildAppleDirectSourceUrls(country, type) {
  const safeCountry = normalizeCountry(country);
  const safeType = normalizeTypeForPlatform('apple', type);

  if (safeType === 'top-podcasts') {
    return [`https://itunes.apple.com/${safeCountry}/rss/toppodcasts/limit=200/xml`];
  }

  if (safeType === 'top-episodes') {
    return [
      `https://rss.applemarketingtools.com/api/v2/${safeCountry}/podcasts/top/100/podcast-episodes.json`,
      `https://rss.applemarketingtools.com/api/v2/${safeCountry}/podcasts/top/100/episodes.json`
    ];
  }

  if (safeType === 'top-subscriber-shows') {
    return [
      `https://rss.marketingtools.apple.com/api/v2/${safeCountry}/podcasts/top-subscriber/100/podcasts.json`,
      `https://rss.marketingtools.apple.com/api/v2/${safeCountry}/podcasts/top-subscriber/100/podcast-shows.json`
    ];
  }

  if (safeType === 'top-subscriber-channels') {
    return [
      `https://rss.marketingtools.apple.com/api/v2/${safeCountry}/podcasts/top-subscriber/100/podcast-channels.json`
    ];
  }

  if (isAppleTypeValue(safeType)) {
    const genreId = safeType.slice(6);
    if (genreId) {
      return [`https://itunes.apple.com/${safeCountry}/rss/toppodcasts/genre=${genreId}/limit=100/xml`];
    }
  }

  return [];
}

function buildSpotifyDirectSourceUrls(country, type) {
  const safeCountry = normalizeCountry(country);
  const safeType = normalizeTypeForPlatform('spotify', type);

  if (safeType === 'top-podcasts') {
    return [`https://podcastcharts.byspotify.com/api/charts/top?region=${safeCountry}`];
  }

  if (safeType === 'top-episodes') {
    return [`https://podcastcharts.byspotify.com/api/charts/top_episodes?region=${safeCountry}`];
  }

  const slug = SPOTIFY_PREFETCH_SLUG_MAP[safeType];
  if (slug) {
    return [`https://podcastcharts.byspotify.com/api/charts/${slug}?region=${safeCountry}`];
  }

  return [];
}

async function fetchDirectApplePayloadViaAllOrigins(country, type, signal) {
  const urls = buildAppleDirectSourceUrls(country, type);
  if (!urls.length) throw new Error(`No Apple source for ${type}`);
  let lastError = null;

  for (const sourceUrl of urls) {
    try {
      const safeType = normalizeTypeForPlatform('apple', type);
      if (
        safeType === 'top-episodes'
        || safeType === 'top-subscriber-shows'
        || safeType === 'top-subscriber-channels'
      ) {
        const text = await fetchTextViaAllOrigins(sourceUrl, {
          timeoutMs: PREFETCH_REQUEST_TIMEOUT_MS,
          signal,
          headers: { Accept: 'application/json,text/plain,*/*' }
        });
        return parsePossibleJson(text);
      }

      const text = await fetchTextViaAllOrigins(sourceUrl, {
        timeoutMs: PREFETCH_REQUEST_TIMEOUT_MS,
        signal,
        headers: { Accept: 'application/xml,text/xml,text/plain,*/*' }
      });
      return parseAppleRssXmlToPayload(text);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Apple AllOrigins prefetch failed');
}

async function fetchDirectSpotifyPayloadViaAllOrigins(country, type, signal) {
  const urls = buildSpotifyDirectSourceUrls(country, type);
  if (!urls.length) throw new Error(`No Spotify source for ${type}`);
  let lastError = null;

  for (const sourceUrl of urls) {
    try {
      const text = await fetchTextViaAllOrigins(sourceUrl, {
        timeoutMs: PREFETCH_REQUEST_TIMEOUT_MS,
        signal,
        headers: { Accept: 'application/json,text/plain,*/*' }
      });
      return parsePossibleJson(text);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Spotify AllOrigins prefetch failed');
}

async function fetchSinglePlatformNormalizedDataViaAllOrigins(platform, type, country, signal) {
  const safePlatform = String(platform || '').trim().toLowerCase();
  const safeType = normalizeTypeForPlatform(safePlatform, type);
  const safeCountry = normalizeCountry(country);

  let data = null;
  if (safePlatform === 'apple') {
    data = await fetchDirectApplePayloadViaAllOrigins(safeCountry, safeType, signal);
  } else if (safePlatform === 'spotify') {
    data = await fetchDirectSpotifyPayloadViaAllOrigins(safeCountry, safeType, signal);
  } else {
    throw new Error(`Unsupported background prefetch platform: ${safePlatform}`);
  }

  const items = collectNormalizedItemsForData(data, safePlatform, safeType);
  if (!items.length) throw new Error(`Empty data for ${safePlatform}`);
  return { data, items };
}

function normalizeAppleArtworkUrl300(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  return raw.replace(/\/\d+x\d+bb\./i, '/300x300bb.');
}

function normalizeXimalayaArtworkUrl(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  if (/^https?:\/\/group\d+\/M\d+/i.test(raw)) {
    return raw.replace(/^https?:\/\/(group\d+\/M\d+)/i, 'https://imagev2.xmcdn.com/$1');
  }
  if (/^https?:\/\/storages?\//i.test(raw)) {
    return raw.replace(/^https?:\/\/storages?\//i, 'https://imagev2.xmcdn.com/storages/');
  }
  if (/^(?:storages?|group\d+\/M\d+)\//i.test(raw)) {
    return `https://imagev2.xmcdn.com/${raw.replace(/^\/+/, '')}`;
  }
  return raw;
}

function normalizeBilibiliArtworkUrl(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  let normalized = raw;
  if (/^http:\/\//i.test(normalized)) normalized = normalized.replace(/^http:\/\//i, 'https://');
  else if (normalized.startsWith('//')) normalized = `https:${normalized}`;
  else if (normalized.startsWith('/')) normalized = absoluteUrl(normalized, 'https://www.bilibili.com');
  else if (!/^https?:\/\//i.test(normalized) && normalized.includes('.')) normalized = `https://${normalized}`;
  return normalized;
}

function extractBilibiliBvidFromUrl(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  const match = raw.match(/\/video\/(BV[0-9A-Za-z]+)/i);
  return match && match[1] ? String(match[1]).trim() : '';
}

function normalizeSiriusXmArtworkUrl(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  if (/^https?:\/\/imgsrv-sxm-prod-device\.streaming\.siriusxm\.com\/eyJ/i.test(raw)) return raw;
  if (/^https?:\/\//i.test(raw) && !/^https?:\/\/imgsrv-sxm-prod-device\.streaming\.siriusxm\.com\//i.test(raw)) return raw;
  const normalized = raw.replace(/^https?:\/\/imgsrv-sxm-prod-device\.streaming\.siriusxm\.com\//i, '').replace(/^\/+/, '');
  const payload = {
    key: normalized,
    edits: [
      { format: { type: 'jpeg' } },
      { resize: { height: 600, width: 600 } }
    ]
  };
  return `https://imgsrv-sxm-prod-device.streaming.siriusxm.com/${btoa(JSON.stringify(payload))}`;
}

function needsNoReferrerImage(url, embedPlatform) {
  const platform = String(embedPlatform || '').trim().toLowerCase();
  if (platform === 'bilibili') return true;
  const raw = String(url || '').trim();
  if (!raw) return false;
  try {
    const parsed = new URL(raw);
    const host = parsed.hostname.toLowerCase();
    return host.endsWith('.hdslb.com');
  } catch {
    return false;
  }
}

function normalizeItems(data, platform, type) {
  const safeType = normalizeTopType(type);
  let arr = [];

  if (platform === 'all') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.title || item.name || '',
      publisher: item.publisher || item.author || '',
      image: item.image || '',
      url: item.url || item.link || '',
      embedUrl: item.embedUrl || '',
      embedPlatform: item.embedPlatform || '',
      embedKind: item.embedKind || ''
    }));
  }

  if (platform === 'youtube') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => {
      const url = item.link || item.url || '';
      const embed = buildInlineEmbedMeta('youtube', safeType, url);
      return {
        rank: Number(item.rank) || (index + 1),
        title: item.name || item.title || '',
        publisher: item.author || item.publisher || 'YouTube',
        image: item.image || '',
        url,
        embedUrl: embed.embedUrl,
        embedPlatform: embed.embedPlatform,
        embedKind: embed.embedKind
      };
    });
  }

  if (platform === 'spotify') {
    arr = Array.isArray(data) ? data : [];
    return arr.map((item, index) => {
      if (safeType === 'top-episodes') {
        const eid = (item.episodeUri || '').split(':').pop();
        const url = eid ? `https://open.spotify.com/episode/${eid}` : '';
        const embed = buildInlineEmbedMeta('spotify', safeType, url);
        return {
          rank: index + 1,
          title: item.episodeName || '',
          publisher: item.showName || item.publisher || 'Spotify',
          image: item.showImageUrl || '',
          url,
          embedUrl: embed.embedUrl,
          embedPlatform: embed.embedPlatform,
          embedKind: embed.embedKind
        };
      }
      const sid = (item.showUri || '').split(':').pop();
      const url = sid ? `https://open.spotify.com/show/${sid}` : '';
      const embed = buildInlineEmbedMeta('spotify', safeType, url);
      return {
        rank: index + 1,
        title: item.showName || '',
        publisher: item.showPublisher || item.publisher || 'Spotify',
        image: item.showImageUrl || '',
        url,
        embedUrl: embed.embedUrl,
        embedPlatform: embed.embedPlatform,
        embedKind: embed.embedKind
      };
    });
  }

  if (platform === 'apple') {
    arr = data && data.feed && Array.isArray(data.feed.results) ? data.feed.results : [];
    return arr.map((item, index) => {
      const url = item.url || '';
      const embed = buildInlineEmbedMeta('apple', safeType, url);
      const itemKind = String(item && item.kind || '').trim().toLowerCase();
      return {
        rank: index + 1,
        title: item.name || '',
        publisher: item.artistName || item.publisher || (itemKind === 'podcast-channels'
          ? getRuntimeText('runtime.applePodcastChannels', 'Apple Podcast Channels')
          : getRuntimeText('runtime.appleBrandLabel', 'Apple Podcasts')),
        image: normalizeAppleArtworkUrl300(item.artworkUrl100 || item.artworkUrl600 || item.image || ''),
        url,
        embedUrl: embed.embedUrl,
        embedPlatform: embed.embedPlatform,
        embedKind: embed.embedKind
      };
    });
  }

  if (platform === 'ximalaya') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.name || item.title || '',
      publisher: item.author || item.publisher || platformBrandLabel('ximalaya'),
      image: normalizeXimalayaArtworkUrl(item.image || ''),
      imageCandidates: Array.isArray(item.imageCandidates)
        ? item.imageCandidates.map((value) => normalizeXimalayaArtworkUrl(value)).filter(Boolean)
        : [],
      url: item.link || item.url || '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  if (platform === 'bilibili') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.name || item.title || '',
      publisher: item.author || item.publisher || platformBrandLabel('bilibili'),
      image: normalizeBilibiliArtworkUrl(item.image || ''),
      imageCandidates: Array.isArray(item.imageCandidates)
        ? item.imageCandidates.map((value) => normalizeBilibiliArtworkUrl(value)).filter(Boolean)
        : [],
      url: item.link || item.url || '',
      aid: String(item.aid || '').trim(),
      bvid: String(item.bvid || '').trim(),
      cid: String(item.cid || '').trim(),
      embedUrl: String(item.embedUrl || '').trim(),
      embedPlatform: String(item.embedPlatform || '').trim().toLowerCase(),
      embedKind: String(item.embedKind || '').trim().toLowerCase()
    }));
  }

  if (platform === 'siriusxm') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.name || item.title || '',
      publisher: item.author || item.publisher || 'SiriusXM',
      image: normalizeSiriusXmArtworkUrl(item.image || ''),
      imageCandidates: Array.isArray(item.imageCandidates)
        ? item.imageCandidates.map((value) => normalizeSiriusXmArtworkUrl(value)).filter(Boolean)
        : [],
      url: item.link || item.url || '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  if (platform === 'ardsounds' || platform === 'radiofrance' || platform === 'bbcsounds' || platform === 'siriusxm' || platform === 'pandora' || platform === 'podcastapp' || platform === 'rtlplus' || platform === 'tunein' || platform === 'abclisten' || platform === 'nrk' || platform === 'yleareena' || platform === 'sverigesradio' || platform === 'podimo' || platform === 'podcastaddict' || platform === 'radionet' || platform === 'ivoox' || platform === 'orfsound' || platform === 'raiplaysound' || platform === 'srfaudio' || platform === 'drlyd' || platform === 'rtbfauvio' || platform === 'rneaudio' || platform === 'npoluister') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    const authorFallback = platform === 'ardsounds'
      ? 'ARD Sounds'
      : platform === 'radiofrance'
        ? 'Radio France'
        : platform === 'bbcsounds'
          ? 'BBC Sounds'
          : platform === 'siriusxm'
            ? 'SiriusXM'
            : platform === 'pandora'
              ? 'Pandora'
            : platform === 'podcastapp'
              ? 'Podcast App'
            : platform === 'rtlplus'
              ? 'RTL+'
            : platform === 'tunein'
              ? 'TuneIn'
              : platform === 'abclisten'
                ? 'ABC listen'
                : platform === 'nrk'
                  ? 'NRK Radio'
                  : platform === 'yleareena'
                    ? 'Yle Areena'
                    : platform === 'sverigesradio'
                      ? 'Sveriges Radio'
                      : platform === 'podimo'
                        ? 'Podimo'
                        : platform === 'podcastaddict'
                          ? 'Podcast Addict'
                          : platform === 'orfsound'
                            ? 'ORF Sound'
                          : platform === 'raiplaysound'
                            ? 'RaiPlay Sound'
                          : platform === 'srfaudio'
                            ? 'SRF Audio'
                          : platform === 'drlyd'
                            ? 'DR LYD'
                          : platform === 'rtbfauvio'
                            ? 'RTBF Auvio'
                          : platform === 'rneaudio'
                            ? 'RNE Audio'
                          : platform === 'npoluister'
                            ? 'NPO Luister'
                          : platform === 'ivoox'
                            ? 'iVoox'
                            : 'radio';
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.name || item.title || '',
      publisher: item.author || item.publisher || authorFallback,
      image: item.image || '',
      imageCandidates: Array.isArray(item.imageCandidates) ? item.imageCandidates.slice() : [],
      url: item.link || item.url || '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  if (platform === 'deezer') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.name || item.title || '',
      publisher: item.author || item.publisher || 'Deezer',
      image: item.image || '',
      imageCandidates: Array.isArray(item.imageCandidates) ? item.imageCandidates.slice() : [],
      url: item.link || item.url || '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  if (platform === 'castbox') {
    arr = data && data.data && Array.isArray(data.data.list) ? data.data.list : [];
    return arr.map((item, index) => {
      const rssUrl = String(item.rss_url || '').trim();
      const fallbackUrl = item.website || item.link || (item.social && item.social.website) || '';
      const playable = safeType === 'top-podcasts' && /^https?:\/\//i.test(rssUrl);
      return {
        rank: index + 1,
        title: item.title || '',
        publisher: item.author || item.publisher || item.copyright || 'Castbox',
        image: item.big_cover_url || item.https_cover_url || item.small_cover_url || '',
        url: rssUrl || fallbackUrl,
        embedUrl: playable ? rssUrl : '',
        embedPlatform: playable ? 'castbox' : '',
        embedKind: playable ? safeType : ''
      };
    });
  }

  if (platform === 'pocketcasts') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => {
      const feedUrl = String(item.feed || '').trim();
      const fallbackUrl = String(item.website || '').trim();
      const playable = safeType === 'top-podcasts' && /^https?:\/\//i.test(feedUrl);
      return {
        rank: index + 1,
        title: item.title || '',
        publisher: item.author || item.publisher || 'Pocket Casts',
        image: item.image || item.artwork || item.artwork_url || (item.uuid ? `https://static.pocketcasts.com/discover/images/webp/480/${item.uuid}.webp` : ''),
        url: feedUrl || fallbackUrl,
        embedUrl: playable ? feedUrl : '',
        embedPlatform: playable ? 'pocketcasts' : '',
        embedKind: playable ? safeType : ''
      };
    });
  }

  if (platform === 'audible') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.name || item.title || '',
      publisher: item.author || item.publisher || 'Audible',
      image: item.image || '',
      url: item.link || item.url || '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  if (platform === 'iheartradio') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.name || item.title || '',
      publisher: item.author || item.publisher || 'iHeartRadio',
      image: item.image || '',
      url: item.link || item.url || '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  if (platform === 'amazonmusic') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.name || item.title || '',
      publisher: item.author || item.publisher || 'Amazon Music',
      image: item.image || '',
      url: item.link || item.url || '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  if (platform === 'radiko') {
    arr = Array.isArray(data && data.podcasts) ? data.podcasts : [];
    return arr.map((item, index) => ({
      rank: Number(item.rank) || (index + 1),
      title: item.name || item.title || '',
      publisher: item.author || item.publisher || 'radiko',
      image: item.image || '',
      url: '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  if (platform === 'podbbang') {
    arr = Array.isArray(data && data.data) ? data.data : [];
    return arr.map((item, index) => ({
      rank: index + 1,
      title: item.title || '',
      publisher: item.copyright || item.author || 'Podbbang',
      image: item.image || '',
      url: item.id ? `https://www.podbbang.com/channels/${item.id}` : '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  if (platform === 'audioclip') {
    if (safeType === 'top-episodes') {
      arr = Array.isArray(data && data.episodes) ? data.episodes : [];
      return arr.map((item, index) => ({
        rank: index + 1,
        title: item.episodeTitle || '',
        publisher: item.channelName || item.creatorName || 'Audioclip',
        image: item.imageUrl ? `${item.imageUrl}?type=f300_300` : '',
        url: item.channelNo && item.episodeNo ? `https://audioclip.naver.com/channels/${item.channelNo}/clips/${item.episodeNo}` : '',
        embedUrl: '',
        embedPlatform: '',
        embedKind: ''
      }));
    }
    arr = Array.isArray(data && data.topRankedChannels) ? data.topRankedChannels : [];
    return arr.map((item, index) => ({
      rank: index + 1,
      title: item.channelName || '',
      publisher: item.authorName || item.description || 'Audioclip',
      image: item.imageUrl ? `${item.imageUrl}?type=f300_300` : '',
      url: item.channelNo ? `https://audioclip.naver.com/channels/${item.channelNo}` : '',
      embedUrl: '',
      embedPlatform: '',
      embedKind: ''
    }));
  }

  return [];
}

function buildChartRowsMarkup(items, options = {}) {
  const favoritesScope = Boolean(options.favoritesScope);
  const currentPlatform = String(options.platformForLayout || (platformSelect && platformSelect.value) || '').trim().toLowerCase();
  const currentType = String(options.typeForLayout || (typeSelect && typeSelect.value) || '').trim().toLowerCase();

  return items.map((item) => {
    const isNoteRow = String(item && item.rowVariant || '').trim().toLowerCase() === 'note';
    const itemPlatformForCover = String(item.embedPlatform || item.originPlatform || currentPlatform || '').trim().toLowerCase();
    const itemKindForCover = String(item.embedKind || item.originType || currentType || '').trim().toLowerCase();
    const itemSourceType = String(item.sourceType || '').trim().toLowerCase();
    const title = escapeHtml(item.title);
    const publisher = escapeHtml(item.publisher);
    const imageCandidatesRaw = Array.isArray(item.imageCandidates)
      ? item.imageCandidates.map((value) => String(value || '').trim()).filter(Boolean)
      : [];
    const imageSrc = item.image || imageCandidatesRaw[0] || 'podcast-placeholder.webp';
    const useVideoCover = itemPlatformForCover === 'bilibili'
      || (itemPlatformForCover === 'youtube' && (
        itemKindForCover === 'top-episodes'
        || itemSourceType === 'youtube-import'
      ));
    const image = escapeHtml(imageSrc);
    const imageCandidates = escapeHtml(imageCandidatesRaw.join('\n'));
    const imageReferrerPolicy = needsNoReferrerImage(imageSrc, item.embedPlatform || item.originPlatform || currentPlatform)
      ? ' referrerpolicy="no-referrer"'
      : '';
    const rawUrl = String(item.url || '').trim();
    const hasOpenUrl = /^https?:\/\//i.test(rawUrl);
    const url = hasOpenUrl ? escapeHtml(rawUrl) : '';
    const search = escapeHtml(`${item.title} ${item.publisher} ${isNoteRow ? (item.noteSearchText || '') : ''}`.toLowerCase());
    const copyTitle = escapeHtml(String(item.title || ''));
    const trend = favoritesScope ? '' : getRankTrendForItem(item);
    const trendSvg = trend ? getRankTrendSvg(trend) : '';
    const rankClass = trend ? 'rank-pill has-trend' : 'rank-pill';
    const copySvg = getCopyTitleSvg();
    const playSvg = getEpisodePlaySvg();
    const historySvg = getHistoryChartSvg();
    const noteSvg = getNoteSvg();
    const favoriteSvg = getFavoriteHeartSvg();

    const favoriteRecord = normalizeFavoriteRecord({
      favoriteKey: String(item.favoriteKey || '').trim(),
      title: item.title,
      publisher: item.publisher,
      url: rawUrl,
      image: item.image,
      feedUrl: item.feedUrl,
      embedUrl: item.embedUrl,
      embedPlatform: item.embedPlatform,
      embedKind: item.embedKind || currentType || 'top-podcasts',
      sourceType: item.sourceType || (favoritesScope ? 'rss' : 'chart'),
      originPlatform: item.originPlatform || (favoritesScope ? '' : currentPlatform),
      originCountry: item.originCountry || (favoritesScope ? '' : String((countrySelect && countrySelect.value) || '').trim().toLowerCase()),
      originType: item.originType || (favoritesScope ? '' : currentType)
    });

    const existingFavoriteKey = findExistingFavoriteKeyForRecord(favoriteRecord);
    const favoriteKeyRaw = existingFavoriteKey || buildFavoritePreferredKeyFromRecord(favoriteRecord);
    const favoriteKey = escapeHtml(favoriteKeyRaw);
    const favoriteActive = isNoteRow ? Boolean(existingFavoriteKey) : (favoritesScope ? true : Boolean(existingFavoriteKey));
    const favoriteLabel = escapeHtml(favoriteActive ? getUnfavoriteActionLabel() : getFavoriteActionLabel());

    let embedUrlRaw = String(favoriteRecord.embedUrl || '').trim();
    let embedPlatformRaw = String(favoriteRecord.embedPlatform || '').trim().toLowerCase();
    let embedKindRaw = String(favoriteRecord.embedKind || '').trim().toLowerCase();

    if (favoritesScope && (!embedUrlRaw || !embedPlatformRaw)) {
      const inferredFeed = inferFavoriteFeedUrlFromRecord(favoriteRecord);
      if (inferredFeed) {
        embedUrlRaw = inferredFeed;
        embedPlatformRaw = 'rss';
        embedKindRaw = embedKindRaw || 'top-podcasts';
      } else if (/^https?:\/\//i.test(rawUrl)) {
        let originPlatformHint = String(favoriteRecord.originPlatform || '').trim().toLowerCase();
        if (!originPlatformHint) {
          const lowerUrl = String(rawUrl || '').trim().toLowerCase();
          if (lowerUrl.includes('podcasts.apple.com')) originPlatformHint = 'apple';
          else if (lowerUrl.includes('open.spotify.com')) originPlatformHint = 'spotify';
          else if (lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be')) originPlatformHint = 'youtube';
        }
        const inferred = buildInlineEmbedMeta(originPlatformHint, embedKindRaw || 'top-podcasts', rawUrl);
        if (inferred && inferred.embedUrl && inferred.embedPlatform) {
          embedUrlRaw = String(inferred.embedUrl || '').trim();
          embedPlatformRaw = String(inferred.embedPlatform || '').trim().toLowerCase();
          embedKindRaw = String(inferred.embedKind || embedKindRaw || 'top-podcasts').trim().toLowerCase();
        }
      }
    }

    const canPlayInline = Boolean(embedUrlRaw && embedPlatformRaw && (embedKindRaw === 'top-episodes' || embedKindRaw === 'top-podcasts'));

    const historySeries = favoritesScope || isNoteRow ? null : getHistorySeriesForItem(item);
    const canShowHistory = !favoritesScope && Array.isArray(historySeries) && historySeries.length > 0;
    const historyKey = escapeHtml(normalizeCrossPlatformKeyPart(item.title));
    const noteContext = buildNoteContext({
      title: item.title,
      publisher: item.publisher,
      link: rawUrl,
      image: imageSrc,
      favoriteKey: favoriteKeyRaw,
      embedUrl: embedUrlRaw,
      platform: favoriteRecord.originPlatform || embedPlatformRaw || currentPlatform,
      kind: favoriteRecord.originType || embedKindRaw || currentType
    });
    const copyTitleLabel = escapeHtml(getCopyTitleActionLabel());
    const playLabel = escapeHtml(getPlayEpisodeActionLabel());
    const refreshLabel = escapeHtml(tOr('refreshPlayer', 'Refresh player'));
    const historyLabel = escapeHtml(getHistoryActionLabel());
    const noteLabel = escapeHtml(noteText('note'));

    const favoriteButton = favoriteKeyRaw
      ? `<button class="favorite-link${favoriteActive ? ' is-active' : ''}" type="button"
          data-favorite-key="${favoriteKey}"
          data-favorite-title="${copyTitle}"
          data-favorite-publisher="${publisher}"
          data-favorite-url="${url}"
          data-favorite-image="${image}"
          data-favorite-feed="${escapeHtml(favoriteRecord.feedUrl || '')}"
          data-favorite-embed-url="${escapeHtml(embedUrlRaw)}"
          data-favorite-embed-platform="${escapeHtml(embedPlatformRaw)}"
          data-favorite-embed-kind="${escapeHtml(embedKindRaw || 'top-podcasts')}"
          data-favorite-source-type="${escapeHtml(favoriteRecord.sourceType || (favoritesScope ? 'rss' : 'chart'))}"
          data-favorite-origin-platform="${escapeHtml(favoriteRecord.originPlatform || '')}"
          data-favorite-origin-country="${escapeHtml(favoriteRecord.originCountry || '')}"
          data-favorite-origin-type="${escapeHtml(favoriteRecord.originType || '')}"
          aria-label="${favoriteLabel}" title="${favoriteLabel}" aria-pressed="${favoriteActive ? 'true' : 'false'}">${favoriteSvg}</button>`
      : '';

    const rankPart = favoritesScope || isNoteRow
      ? ''
      : `<div class="${rankClass}"><span class="rank-text">#${item.rank}</span>${trend ? `<span class="rank-trend ${trend}" aria-hidden="true">${trendSvg}</span>` : ''}</div>`;

    const notePreviewHtml = isNoteRow
      ? `<div class="note-row-preview" data-note-preview-static>${String(item.notePreviewHtml || '')}</div>
         <div class="note-row-updated">${escapeHtml(formatNoteUpdatedAt(item.updatedAt) || '')}</div>`
      : '';

    return `
      <article class="chart-row${favoritesScope ? ' favorites-row' : ''}${isNoteRow ? ' note-row' : ''}${useVideoCover ? ' has-video-cover' : ''}" data-search="${search}"
        data-note-id="${escapeHtml(noteContext.id)}"
        data-note-title="${escapeHtml(noteContext.title)}"
        data-note-publisher="${escapeHtml(noteContext.publisher)}"
        data-note-link="${escapeHtml(noteContext.link)}"
        data-note-image="${escapeHtml(noteContext.image)}"
        data-note-embed-url="${escapeHtml(noteContext.embedUrl)}"
        data-note-platform="${escapeHtml(noteContext.platform)}"
        data-note-kind="${escapeHtml(noteContext.kind)}">
        ${rankPart}
        <img class="cover${useVideoCover ? ' cover-video' : ''}" src="${image}" alt="${title}" loading="lazy"${imageReferrerPolicy} data-original-src="${image}" data-image-candidates="${imageCandidates}" data-image-fallback="podcast-placeholder.webp" />
        <div class="meta">
          <div class="title-line">
            <h3 class="title title-copy-target" role="button" tabindex="0" data-copy-title="${copyTitle}" title="${copyTitle}">${title}</h3>
            <button class="title-copy-btn" type="button" data-copy-title="${copyTitle}" aria-label="${copyTitleLabel}" title="${copyTitleLabel}">${copySvg}</button>
          </div>
          <p class="publisher">${publisher}</p>
          ${notePreviewHtml}
        </div>
        <div class="row-actions">
          ${favoriteButton}
          ${canPlayInline ? `<button class="play-link" type="button" data-embed-url="${escapeHtml(embedUrlRaw)}" data-embed-platform="${escapeHtml(embedPlatformRaw)}" data-embed-kind="${escapeHtml(embedKindRaw)}" aria-label="${playLabel}" title="${playLabel}" aria-pressed="false">${playSvg}</button>
          <button class="play-refresh" type="button" aria-label="${refreshLabel}" title="${refreshLabel}">${typeof getEpisodeRefreshSvg === 'function' ? getEpisodeRefreshSvg() : '↻'}</button>` : ''}
          ${canShowHistory ? `<button class="history-link" type="button" data-history-key="${historyKey}" aria-label="${historyLabel}" title="${historyLabel}" aria-pressed="false">${historySvg}</button>` : ''}
          <button class="note-link${isNoteRow && String(item.noteContent || '').trim() ? ' has-note' : ''}" type="button"
            data-note-id="${escapeHtml(noteContext.id)}"
            data-note-title="${escapeHtml(noteContext.title)}"
            data-note-publisher="${escapeHtml(noteContext.publisher)}"
            data-note-link="${escapeHtml(noteContext.link)}"
            data-note-image="${escapeHtml(noteContext.image)}"
            data-note-embed-url="${escapeHtml(noteContext.embedUrl)}"
            data-note-platform="${escapeHtml(noteContext.platform)}"
            data-note-kind="${escapeHtml(noteContext.kind)}"
            aria-label="${noteLabel}" title="${noteLabel}" aria-pressed="false">${noteSvg}</button>
          ${hasOpenUrl ? `<a class="open-link" href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('open'))}</a>` : ''}
        </div>
        <div class="episode-player-wrap" hidden></div>
        <div class="history-panel-wrap" hidden></div>
        <div class="note-panel-wrap" hidden></div>
      </article>
    `;
  }).join('');
}

function initializeRenderedRowNodes(container) {
  if (!container) return;
  container.querySelectorAll('.chart-row').forEach((row, i) => {
    row.style.setProperty('--row-i', String(Math.min(i, 30)));
  });

  container.querySelectorAll('.favorite-link').forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      await toggleFavoriteFromButton(btn);
    });
  });

  container.querySelectorAll('img.cover').forEach((img) => {
    const fallback = String(img.getAttribute('data-image-fallback') || 'podcast-placeholder.webp').trim() || 'podcast-placeholder.webp';
    const candidates = String(img.getAttribute('data-image-candidates') || '')
      .split('\n')
      .map((value) => String(value || '').trim())
      .filter(Boolean);
    let index = Math.max(0, candidates.findIndex((value) => value === img.currentSrc || value === img.getAttribute('src')));
    img.addEventListener('error', () => {
      while (index + 1 < candidates.length) {
        index += 1;
        const next = candidates[index];
        if (!next || next === img.getAttribute('src')) continue;
        img.setAttribute('src', next);
        return;
      }
      if (img.getAttribute('src') !== fallback) {
        img.setAttribute('src', fallback);
        const originalSrc = candidates[0];
        if (originalSrc && originalSrc !== fallback) {
          window.retryImageLoading(img, originalSrc, fallback);
        }
      }
    }, { once: false });
  });
}

function renderItems(items) {
  resetPlaybackSignalsForRerender();
  activeEpisodePlayerRow = null;
  activeHistoryPanelRow = null;
  activeNotePanelRow = null;
  const favoritesScope = isFavoritesScopeMode();
  chartContainer.innerHTML = buildChartRowsMarkup(items, {
    favoritesScope,
    platformForLayout: String((platformSelect && platformSelect.value) || '').trim().toLowerCase(),
    typeForLayout: String((typeSelect && typeSelect.value) || '').trim().toLowerCase()
  });
  initializeRenderedRowNodes(chartContainer);
  primeSponsorBlockForVideoIds(collectSponsorBlockVideoIdsFromItems(items, 6));
}

function getMyPodcastsTabLabel(tab) {
  const safe = normalizeMyPodcastsTab(tab);
  if (safe === 'episodes') {
    return getMyPodcastsLocalizedText('episodesWord');
  }
  if (safe === 'notes') return getMyPodcastsLocalizedText('notesWord');
  return t('podcastsWord');
}

function buildMyPodcastsSectionMarkup(tab, items, options = {}) {
  const safeTab = normalizeMyPodcastsTab(tab);
  const list = Array.isArray(items) ? items : [];
  const sectionTitle = String(options.title || getMyPodcastsTabLabel(safeTab)).trim();
  const sectionNote = String(options.note || '').trim();
  return `
    <section class="my-podcasts-section" data-my-podcasts-section="${escapeHtml(safeTab)}">
      <div class="my-podcasts-section-head">
        <h2 class="my-podcasts-section-title">${escapeHtml(sectionTitle)}</h2>
        <span class="my-podcasts-section-count">${list.length}</span>
      </div>
      ${sectionNote ? `<div class="my-podcasts-section-note">${escapeHtml(sectionNote)}</div>` : ''}
      <div class="my-podcasts-section-body">
        ${buildChartRowsMarkup(list, {
          favoritesScope: true,
          platformForLayout: String((platformSelect && platformSelect.value) || '').trim().toLowerCase(),
          typeForLayout: safeTab === 'episodes' ? 'top-episodes' : 'top-podcasts'
        })}
      </div>
    </section>
  `;
}

function updateMyPodcastsTabs(counts = {}) {
  if (!myPodcastsTabsEl) return;
  Array.from(myPodcastsTabsEl.querySelectorAll('[data-my-podcasts-tab]')).forEach((btn) => {
    const tab = normalizeMyPodcastsTab(btn.getAttribute('data-my-podcasts-tab'));
    const count = Number(counts[tab]) || 0;
    btn.classList.toggle('is-active', tab === myPodcastsActiveTab);
    btn.setAttribute('aria-pressed', tab === myPodcastsActiveTab ? 'true' : 'false');
    const labelEl = btn.querySelector('.my-podcasts-tab-label');
    const countEl = btn.querySelector('.my-podcasts-tab-count');
    if (labelEl) labelEl.textContent = getMyPodcastsTabLabel(tab);
    if (countEl) countEl.textContent = String(count);
  });
}

function filterMyPodcastsItemsByQuery(items, query) {
  const q = String(query || '').trim().toLowerCase();
  if (!q) return Array.isArray(items) ? items.slice() : [];
  return (Array.isArray(items) ? items : []).filter((item) => {
    const searchText = [
      item && item.title,
      item && item.publisher,
      item && item.url,
      item && item.noteSearchText,
      item && item.noteContent
    ].join(' ').toLowerCase();
    return searchText.includes(q);
  });
}

async function renderMyPodcastsLibrary() {
  const library = await collectMyPodcastsLibraryData();
  const query = String(searchInput && searchInput.value || '').trim();
  const counts = {
    podcasts: Array.isArray(library.podcasts) ? library.podcasts.length : 0,
    episodes: Array.isArray(library.episodes) ? library.episodes.length : 0,
    notes: Array.isArray(library.notes) ? library.notes.length : 0
  };
  updateMyPodcastsTabs(counts);

  const baseWallItems = []
    .concat(Array.isArray(library.podcasts) ? library.podcasts : [])
    .concat(Array.isArray(library.episodes) ? library.episodes : []);
  latestWallItems = baseWallItems.slice(0, 120);
  renderHeroWall(latestWallItems);
  warmupFontsForItems(baseWallItems);

  let groups = [];
  if (query) {
    groups = MY_PODCASTS_TAB_VALUES.map((tab) => ({
      tab,
      items: filterMyPodcastsItemsByQuery(library[tab], query)
    })).filter((group) => Array.isArray(group.items) && group.items.length);
  } else {
    groups = [{ tab: myPodcastsActiveTab, items: Array.isArray(library[myPodcastsActiveTab]) ? library[myPodcastsActiveTab] : [] }];
  }

  chartContainer.setAttribute('data-platform', 'all');
  chartContainer.setAttribute('data-scope', MY_PODCASTS_SCOPE_VALUE);
  applyRowAccentTheme();
  resetItunesSearchAssistState();
  removeAds();
  currentRankTrendMap = null;
  currentHistorySeriesMap = null;
  resetAggregateVisibleLimit();
  activeEpisodePlayerRow = null;
  activeHistoryPanelRow = null;
  activeNotePanelRow = null;

  chartContainer.innerHTML = groups.map((group) => {
    return buildMyPodcastsSectionMarkup(group.tab, group.items);
  }).join('');
  initializeRenderedRowNodes(chartContainer);
  processTranslations();

  const total = groups.reduce((sum, group) => sum + (Array.isArray(group.items) ? group.items.length : 0), 0);
  emptyStateEl.classList.toggle('hidden', total > 0);
  updateCount(total, total);
  if (!total) setStatus('noData');
  else setStatus('cache');
}


async function handleTitleCopyInteraction(target) {
  const node = target && target.closest ? target.closest('.title-copy-target, .title-copy-btn') : null;
  if (!node) return false;
  const row = node.closest('.chart-row');
  const raw = String(node.getAttribute('data-copy-title') || '').trim();
  if (!raw) return false;

  const ok = await copyTextValue(raw);
  if (ok) {
    flashRowCopyUi(row);
    showToast(getTitleCopiedMessage());
  }
  return ok;
}

function bindAuxiliaryChartContainer(container) {
  if (!container || container.__podcastChartHandlersBound) return;
  container.__podcastChartHandlersBound = true;

  container.addEventListener('click', async (event) => {
    const favoriteNode = event.target && event.target.closest ? event.target.closest('.favorite-link') : null;
    if (favoriteNode) {
      event.preventDefault();
      event.stopPropagation();
      await toggleFavoriteFromButton(favoriteNode);
      return;
    }

    const playNode = event.target && event.target.closest ? event.target.closest('.play-link') : null;
    if (playNode) {
      event.preventDefault();
      event.stopPropagation();
      await toggleEpisodePlayerFromButton(playNode);
      return;
    }

    const historyNode = event.target && event.target.closest ? event.target.closest('.history-link') : null;
    if (historyNode) {
      event.preventDefault();
      event.stopPropagation();
      toggleHistoryPanelFromButton(historyNode);
      return;
    }

    const noteNode = event.target && event.target.closest ? event.target.closest('.note-link') : null;
    if (noteNode) {
      event.preventDefault();
      event.stopPropagation();
      await toggleNotePanelFromButton(noteNode);
      return;
    }

    const noteSeekNode = event.target && event.target.closest ? event.target.closest('[data-note-seek]') : null;
    if (noteSeekNode) {
      event.preventDefault();
      event.stopPropagation();
      await handleNoteTimestampAction(noteSeekNode);
      return;
    }

    const noteSaveNode = event.target && event.target.closest ? event.target.closest('[data-note-save]') : null;
    if (noteSaveNode) {
      event.preventDefault();
      event.stopPropagation();
      await saveRowNotePanel(noteSaveNode.closest('[data-note-panel]'));
      return;
    }

    const noteDeleteNode = event.target && event.target.closest ? event.target.closest('[data-note-delete]') : null;
    if (noteDeleteNode) {
      event.preventDefault();
      event.stopPropagation();
      await deleteRowNotePanel(noteDeleteNode.closest('[data-note-panel]'));
      return;
    }

    const noteCloseNode = event.target && event.target.closest ? event.target.closest('[data-note-close]') : null;
    if (noteCloseNode) {
      event.preventDefault();
      event.stopPropagation();
      await closeNotePanelRow(noteCloseNode.closest('.chart-row'));
      return;
    }

    const noteDownloadNode = event.target && event.target.closest ? event.target.closest('[data-note-download]') : null;
    if (noteDownloadNode) {
      event.preventDefault();
      event.stopPropagation();
      const menu = noteDownloadNode.closest('.note-download-menu');
      if (menu) menu.open = false;
      downloadRowNotePanel(noteDownloadNode.closest('[data-note-panel]'), noteDownloadNode.getAttribute('data-note-download') || 'md');
      return;
    }

    const noteCopyNode = event.target && event.target.closest ? event.target.closest('[data-note-copy]') : null;
    if (noteCopyNode) {
      event.preventDefault();
      event.stopPropagation();
      await copyRowNotePanel(noteCopyNode.closest('[data-note-panel]'));
      return;
    }

    const refreshNode = event.target && event.target.closest ? event.target.closest('.play-refresh') : null;
    if (refreshNode) {
      event.preventDefault();
      event.stopPropagation();
      const row = refreshNode.closest('.chart-row');
      if (row && row.classList.contains('player-open')) {
        const iframe = row.querySelector('.episode-player-wrap iframe');
        if (iframe) {
          const currentSrc = iframe.src;
          iframe.src = 'about:blank';
          setTimeout(() => { iframe.src = currentSrc; }, 50);
        }
      }
      return;
    }

    const copyNode = event.target && event.target.closest ? event.target.closest('.title-copy-target, .title-copy-btn') : null;
    if (!copyNode) return;
    event.preventDefault();
    event.stopPropagation();
    await handleTitleCopyInteraction(copyNode);
  });

  container.addEventListener('keydown', async (event) => {
    const noteInput = event.target && event.target.matches && event.target.matches('.note-input') ? event.target : null;
    if (noteInput && (event.metaKey || event.ctrlKey) && String(event.key || '').toLowerCase() === 's') {
      event.preventDefault();
      await saveRowNotePanel(noteInput.closest('[data-note-panel]'));
      return;
    }
    const key = event.key;
    if (key !== 'Enter' && key !== ' ') return;
    const copyNode = event.target && event.target.closest ? event.target.closest('.title-copy-target, .title-copy-btn') : null;
    if (!copyNode) return;
    event.preventDefault();
    await handleTitleCopyInteraction(copyNode);
  });

  container.addEventListener('input', (event) => {
    const noteInput = event.target && event.target.matches && event.target.matches('.note-input') ? event.target : null;
    if (!noteInput) return;
    const panel = noteInput.closest('[data-note-panel]');
    if (!panel) return;
    updateNotePanelStatus(panel, {
      dirty: true,
      updatedAt: Number(panel.getAttribute('data-note-updated-at') || 0)
    });
    const preview = panel.querySelector('[data-note-preview]');
    const context = getNotePanelContext(panel);
    if (preview) preview.innerHTML = buildNoteFullPreviewHtml(noteInput.value, { interactive: canSeekTimestampsForPlatform(context.platform) });
  });

  container.addEventListener('pointerdown', (event) => {
    const copyNode = event.target && event.target.closest ? event.target.closest('.title-copy-target, .title-copy-btn') : null;
    if (!copyNode) return;
    revealRowCopyUiTemporarily(copyNode.closest('.chart-row'));
  }, { passive: true });

  container.addEventListener('focusin', (event) => {
    const copyNode = event.target && event.target.closest ? event.target.closest('.title-copy-target, .title-copy-btn') : null;
    if (!copyNode) return;
    const row = copyNode.closest('.chart-row');
    if (row) row.classList.add('show-copy');
  });

  container.addEventListener('focusout', (event) => {
    const row = event.target && event.target.closest ? event.target.closest('.chart-row') : null;
    if (!row) return;
    requestAnimationFrame(() => {
      if (!row.contains(document.activeElement)) row.classList.remove('show-copy');
    });
  });
}

function mergeHistorySeriesMaps(baseMap, extraMap) {
  if (!(extraMap instanceof Map) || !extraMap.size) return baseMap instanceof Map ? new Map(baseMap) : baseMap;
  const merged = baseMap instanceof Map ? new Map(baseMap) : new Map();
  extraMap.forEach((value, key) => {
    if (Array.isArray(value) && value.length) merged.set(key, value);
  });
  return merged;
}

function renderItunesSearchResults(items) {
  ensureItunesSearchAssistUi();
  if (!itunesSearchAssistResultsEl) return;

  const safeItems = Array.isArray(items) ? items : [];
  if (!safeItems.length) {
    itunesSearchAssistResultsEl.innerHTML = '';
    itunesSearchAssistResultsEl.classList.add('hidden');
    return;
  }

  itunesSearchAssistResultsEl.innerHTML = buildChartRowsMarkup(safeItems, {
    favoritesScope: false,
    platformForLayout: 'apple',
    typeForLayout: 'top-podcasts'
  });
  initializeRenderedRowNodes(itunesSearchAssistResultsEl);
  itunesSearchAssistResultsEl.classList.remove('hidden');
  processTranslations();
}

function removeAds() {
  document.querySelectorAll('.chart-ad').forEach((ad) => ad.remove());
}

function visibleRows() {
  return Array.from(chartContainer.querySelectorAll('.chart-row:not(.chart-ad):not(.hidden)'));
}

function initializeAdsbygooglePush() {
  try {
    requestAnimationFrame(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('Ad initialization error:', error);
      }
    });
  } catch (error) {
    console.error('Ad scheduling error:', error);
  }
}

function buildPlayerAdMarkup() {
  return `
    <div class="episode-player-ad" aria-label="${escapeHtml(tOr('sponsored', 'Sponsored'))}">
      <ins class="adsbygoogle"
        style="display:block;min-height:280px;height:auto"
        data-ad-client="ca-pub-9206135835124064"
        data-ad-slot="8754979142"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  `;
}

function buildPlaylistAdMarkup() {
  return `
    <div class="playlist-player-ad" aria-label="${escapeHtml(tOr('sponsored', 'Sponsored'))}">
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-9206135835124064"
        data-ad-slot="8754979142"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  `;
}

function insertAds() {
  removeAds();
  if (searchInput.value.trim()) return;

  const rows = visibleRows();
  const insertionIndexes = [];
  if (rows.length > 3) insertionIndexes.push(2);
  for (let i = 19; i < rows.length; i += 20) insertionIndexes.push(i);
  for (const rowIndex of insertionIndexes) {
    const adWrap = document.createElement('div');
    adWrap.className = 'chart-ad';

    const ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.style.width = '100%';
    ins.style.minHeight = window.innerWidth <= 760 ? '112px' : '104px';
    ins.dataset.adClient = 'ca-pub-9206135835124064';
    ins.dataset.adSlot = '8754979142';
    ins.dataset.adFormat = 'auto';
    ins.dataset.fullWidthResponsive = 'true';

    adWrap.appendChild(ins);
    rows[rowIndex].after(adWrap);
    initializeAdsbygooglePush();
  }
}

function applyFilterAndLimit() {
  const q = searchInput.value.trim().toLowerCase();
  const rows = Array.from(chartContainer.querySelectorAll('.chart-row:not(.chart-ad)'));
  const cap = getUiVisibleCap();
  let total = 0;
  let shown = 0;

  rows.forEach((row) => {
    const text = (row.dataset.search || '').toLowerCase();
    const match = !q || text.includes(q);

    if (!match) {
      row.classList.add('hidden');
      return;
    }

    total += 1;
    if (!Number.isFinite(cap) || shown < cap) {
      shown += 1;
      row.classList.remove('hidden');
    } else {
      row.classList.add('hidden');
    }
  });

  emptyStateEl.classList.toggle('hidden', total > 0);
  updateCount(shown, total);
  updateItunesSearchAssistUi(total);

  if (q) removeAds();
  else insertAds();
  processTranslations();
}


async function randomPick() {
  const rows = visibleRows();
  if (!rows.length || isSurpriseRunning) return;

  isSurpriseRunning = true;
  const runId = ++surpriseRunId;
  ensureRuntimeEffectsStyles();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const clearMarks = () => {
    document.querySelectorAll('.chart-row.spotlight, .chart-row.surprise-hover, .chart-row.surprise-flicker, .chart-row.surprise-final')
      .forEach((row) => row.classList.remove('spotlight', 'surprise-hover', 'surprise-flicker', 'surprise-final'));
  };

  try {
    clearMarks();

    let current = null;
    const spins = Math.min(22, Math.max(12, Math.floor(rows.length * 0.16)));

    for (let i = 0; i < spins; i += 1) {
      if (runId !== surpriseRunId) return;
      if (current) current.classList.remove('surprise-hover', 'surprise-flicker');
      current = rows[Math.floor(Math.random() * rows.length)];
      current.classList.add('surprise-hover', 'surprise-flicker');
      current.scrollIntoView({ behavior: i < spins - 4 ? 'auto' : 'smooth', block: 'center' });
      await sleep(50 + Math.round((i / Math.max(1, spins - 1)) * 170));
    }

    if (current) current.classList.remove('surprise-hover', 'surprise-flicker');
    const chosen = rows[Math.floor(Math.random() * rows.length)];
    chosen.classList.add('spotlight', 'surprise-final');
    chosen.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      if (runId !== surpriseRunId) return;
      chosen.classList.remove('surprise-final');
    }, 1200);
  } finally {
    if (runId === surpriseRunId) isSurpriseRunning = false;
  }
}

function shareView() {
  const params = new URLSearchParams();
  params.set('scope', currentScopeValue());
  params.set('platform', platformSelect.value);
  params.set('type', typeSelect.value);
  params.set('country', countrySelect.value);
  params.set('period', currentPeriodValue());
  const selectedDate = getSelectedHistoryDateKey();
  if (selectedDate) params.set('date', selectedDate);
  if (searchInput.value.trim()) params.set('q', searchInput.value.trim());
  applyEnglishModeParam(params);

  const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => showToast(t('linkCopied')))
      .catch(() => window.prompt(t('copyLink'), url));
  } else {
    window.prompt(t('copyLink'), url);
  }
}


function restoreFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const scope = params.get('scope');
  const platform = params.get('platform');
  const type = params.get('type');
  const country = params.get('country');
  const period = params.get('period');
  const date = params.get('date');
  const q = params.get('q');

  if (scope) {
    if (scope === MY_PODCASTS_SCOPE_VALUE) {
      myPodcastsScopeActive = true;
      if (scopeSelect && scopeSelect.querySelector('option[value="country"]')) scopeSelect.value = 'country';
    } else if (scopeSelect && scopeSelect.querySelector(`option[value="${scope}"]`)) {
      myPodcastsScopeActive = false;
      scopeSelect.value = scope;
    }
  }
  if (country && countrySelect.querySelector(`option[value="${country}"]`)) countrySelect.value = country;
  syncPlatformOptionsForCountry();
  if (platform && platformSelect.querySelector(`option[value="${platform}"]`)) platformSelect.value = platform;
  rebuildTypeSelectOptions(platformSelect ? platformSelect.value : '', type || (typeSelect ? typeSelect.value : ''), { force: true });
  if (type && typeSelect) typeSelect.value = normalizeTypeForPlatform(platformSelect ? platformSelect.value : '', type);
  if (periodSelect && period && periodSelect.querySelector(`option[value="${period}"]`)) periodSelect.value = period;
  if (date !== null && dateSelect) {
    if (date && dateSelect.querySelector(`option[value="${date}"]`)) dateSelect.value = date;
    else if (date) dateSelect.dataset.pendingValue = date;
    else dateSelect.value = '';
  }
  if (q) searchInput.value = q;

  updateLimitButtons();
  updateCountrySeo();
}


function updateQueryState() {
  try {
    const params = new URLSearchParams();
    params.set('scope', currentScopeValue());
    params.set('platform', platformSelect.value);
    params.set('type', typeSelect.value);
    params.set('country', countrySelect.value);
    params.set('period', currentPeriodValue());
    const selectedDate = getSelectedHistoryDateKey();
    if (selectedDate) params.set('date', selectedDate);
    if (searchInput.value.trim()) params.set('q', searchInput.value.trim());
    applyEnglishModeParam(params);
    history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
  } catch (error) {
    console.warn('replaceState unavailable:', error);
  }
}


function renderNormalizedItems(items, options = {}) {
  const favoritesScope = isFavoritesScopeMode();
  currentRankTrendMap = favoritesScope ? null : (options && options.rankTrendMap instanceof Map ? options.rankTrendMap : null);
  currentHistorySeriesMap = favoritesScope ? null : (options && options.historySeriesMap instanceof Map ? options.historySeriesMap : null);
  resetAggregateVisibleLimit();
  latestWallItems = items.slice(0, 120);
  renderHeroWall(latestWallItems);
  warmupFontsForItems(items);

  const scope = currentScopeValue();
  const platformForTheme = favoritesScope ? 'all' : (platformSelect ? platformSelect.value : 'apple');
  chartContainer.setAttribute('data-platform', platformForTheme);
  chartContainer.setAttribute('data-scope', scope);
  applyRowAccentTheme();
  resetItunesSearchAssistState();
  renderItems(items);
  applyFilterAndLimit();
  scheduleVisibleFontScan();
  if (shouldUncapAggregateDisplay()) {
    requestAnimationFrame(() => {
      try { maybeLoadMoreAggregateRows(); } catch { }
    });
  }
  updateQueryState();

  if (!items.length) {
    setStatus('noData');
    emptyStateEl.classList.remove('hidden');
  }

  if (!favoritesScope) {
    Promise.resolve(updateDailyReminder()).catch((error) => {
      console.warn('Daily reminder update failed:', error);
    });
  }

  return items;
}


function collectNormalizedItemsForData(data, platform = platformSelect.value, type = typeSelect.value) {
  return normalizeItems(data, platform, type).filter((item) => item.title);
}

function collectNormalizedItemsForCurrentPayload(data) {
  if (isLanguageScopeMode()) {
    return collectNormalizedItemsForData(data, 'all', typeSelect.value);
  }
  return collectNormalizedItemsForData(data, platformSelect.value, typeSelect.value);
}

function renderFromData(data) {
  const items = collectNormalizedItemsForCurrentPayload(data);
  return renderNormalizedItems(items);
}

function responseCacheKeyFor(platform, country, type) {
  const safePlatform = String(platform || '').trim().toLowerCase();
  const safeCountry = String(country || '').trim().toLowerCase();
  const safeType = String(type || '').trim().toLowerCase();
  if (safePlatform === 'bilibili') {
    return `podcast_data_v2_${safePlatform}_${safeCountry}_${safeType}`;
  }
  return `podcast_data_${safePlatform}_${safeCountry}_${safeType}`;
}

function cacheKeyForCurrent() {
  return responseCacheKeyFor(platformSelect.value, getEffectiveCountryKeyForScope(), typeSelect.value);
}

function getCacheTtlMs() {
  return typeSelect && typeSelect.value === 'top-episodes' ? EPISODE_CACHE_TTL_MS : CACHE_TTL_MS;
}

function getCacheTtlMsForType(type) {
  return type === 'top-episodes' ? EPISODE_CACHE_TTL_MS : CACHE_TTL_MS;
}

async function renderAggregateFromHistory() {
  const period = currentPeriodValue();
  const snapshots = await getSnapshotsForCurrentSelection();
  await refreshHistoryDateOptions(snapshots);

  let items = [];
  let trendMap = null;

  if (period === 'daily') {
    const selectedDateKey = getSelectedHistoryDateKey();
    const chosen = pickSnapshotRecordByDate(snapshots, resolveCurrentSnapshotDateKey(snapshots, selectedDateKey));
    items = snapshotRecordToRenderItems(chosen);
    trendMap = buildDailyRankTrendMapFromSnapshots(snapshots, selectedDateKey, items);
  } else {
    const anchorDateKey = resolveCurrentSnapshotDateKey(snapshots, getHistoryAnchorDateKey());
    const filtered = filterSnapshotsForPeriod(snapshots, period, anchorDateKey || getHistoryAnchorDateKey());
    items = aggregateSnapshotsToItems(filtered);
    trendMap = buildAggregateRankTrendMapFromSnapshots(snapshots, period, anchorDateKey, items);
  }
  items = await enrichItemsFromLocalCacheWithBackfill(items, platformSelect.value, countrySelect.value, typeSelect.value);
  const historySeriesMap = buildHistorySeriesMapFromSnapshots(snapshots, items);
  renderNormalizedItems(items, { rankTrendMap: trendMap, historySeriesMap });
  setStatus(items.length ? 'cache' : 'noData');
  setLoading(false);
  setSkeleton(false);
  return items;
}


async function fetchPodcastsData(options = {}) {
  cancelBackgroundPrefetch({ abortInFlight: true });
  const forceRefresh = Boolean(options.forceRefresh);
  const period = currentPeriodValue();
  const selectedHistoryDateKey = getSelectedHistoryDateKey();
  const selectedPlatform = platformSelect ? platformSelect.value : 'apple';
  const selectedScope = currentScopeValue();
  const languageScopeActive = isLanguageScopeMode(selectedScope);
  const favoritesScopeActive = isFavoritesScopeMode(selectedScope);

  if (favoritesScopeActive) {
    setLoading(false);
    setSkeleton(false);
    if (favoriteStorageLoadPromise) {
      try { await favoriteStorageLoadPromise; } catch { }
    }
    await renderMyPodcastsLibrary();
    return;
  }

  if ((period !== 'daily' || selectedHistoryDateKey) && !forceRefresh) {
    setLoading(true, 'loadingData');
    if (languageScopeActive || selectedPlatform === 'all') {
      setChartLoadVisual(true, { platform: 'all', colors: LANGUAGE_SCOPE_RING_GRADIENT, progress: 0.25 });
    } else {
      setChartLoadVisual(true, { platform: selectedPlatform, progress: 0.25 });
    }
    setSkeleton(chartContainer.children.length === 0);
    setStatus('loading');
    try {
      await renderAggregateFromHistory();
      await finalizeSuccessfulForegroundRender();
    } finally {
      setLoading(false);
      setSkeleton(false);
    }
    return;
  }

  const key = cacheKeyForCurrent();
  const cachedEntry = await getResponseCacheEntry(key);
  const cached = cachedEntry && Object.prototype.hasOwnProperty.call(cachedEntry, 'payload') ? cachedEntry.payload : null;
  const cachedTime = Number((cachedEntry && cachedEntry.updatedAt) || 0);
  const safeSelectedPlatform = String(selectedPlatform || '').trim().toLowerCase();
  const safeSelectedCountry = countrySelect ? countrySelect.value : 'us';
  const podimoNeedsTypeRefresh = safeSelectedPlatform === 'podimo'
    && !getDynamicTypeDefinitions('podimo', safeSelectedCountry)
    && hasLegacyPodimoAvailableTypes(cached);
  const radionetNeedsImageRefresh = safeSelectedPlatform === 'radionet'
    && Array.isArray(cached && cached.podcasts)
    && cached.podcasts.some((item) => {
      const image = String(item && item.image || '').trim();
      const imageCandidates = Array.isArray(item && item.imageCandidates) ? item.imageCandidates.filter(Boolean) : [];
      return !image && imageCandidates.length === 0;
    });
  const cachePlatformForFreshness = (languageScopeActive || selectedPlatform === 'all') ? 'all' : selectedPlatform;
  const cacheTypeForFreshness = (languageScopeActive || selectedPlatform === 'all')
    ? normalizeTopType(typeSelect ? typeSelect.value : 'top-podcasts')
    : typeSelect.value;
  const hasFresh = isResponseCacheFreshForPlatform(cachePlatformForFreshness, cacheTypeForFreshness, cached, cachedTime);

  let renderedCache = false;
  let renderedCachedItems = null;
  if (cached) {
    try {
      maybeApplyDynamicTypeDefinitions(selectedPlatform, countrySelect ? countrySelect.value : 'us', cached, typeSelect ? typeSelect.value : '');
      if (period === 'daily' && !selectedHistoryDateKey) {
        let cachedItems = collectNormalizedItemsForCurrentPayload(cached);
        cachedItems = await enrichItemsFromLocalCacheWithBackfill(cachedItems, platformSelect.value, countrySelect.value, typeSelect.value);
        const snapshots = await getSnapshotsForCurrentSelection();
        await refreshHistoryDateOptions(snapshots);
        const trendMap = buildDailyRankTrendMapFromSnapshots(snapshots, '', cachedItems);
        const historySeriesMap = buildHistorySeriesMapFromSnapshots(snapshots, cachedItems);
        renderNormalizedItems(cachedItems, { rankTrendMap: trendMap, historySeriesMap });
        renderedCachedItems = cachedItems;
        renderedCache = true;
        setStatus(hasFresh && !forceRefresh ? 'cache' : 'cached');
      }
    } catch (error) {
      console.warn('Cache parse failed:', error);
      await removeResponseCacheEntry(key);
    }
  }

  if (period === 'daily' && !selectedHistoryDateKey && hasFresh && !forceRefresh && renderedCache && !podimoNeedsTypeRefresh && !radionetNeedsImageRefresh) {
    await refreshHistoryDateOptions();
    setLoading(false);
    setSkeleton(false);
    await finalizeSuccessfulForegroundRender(renderedCachedItems);
    return;
  }

  const requestId = ++activeRequestId;

  setLoading(true, renderedCache ? 'refreshingData' : 'loadingData');
  setSkeleton(!renderedCache && period === 'daily' && !selectedHistoryDateKey);
  setStatus(renderedCache ? 'refreshing' : 'loading');

  try {
    let data;

    if (languageScopeActive) {
      setChartLoadVisual(true, { platform: 'all', colors: LANGUAGE_SCOPE_RING_GRADIENT });
      data = await fetchLanguageScopeCompositeData(selectedScope, typeSelect.value, {
        forceRefresh,
        onProgress: (progressState) => {
          if (requestId !== activeRequestId) return;
          if (progressState && progressState.stage === 'retry') {
            setChartLoadVisual(true, { platform: 'all', colors: LANGUAGE_SCOPE_RING_GRADIENT });
          }
        }
      });
      if (Array.isArray(data.failedCountries) && data.failedCountries.length) {
        console.warn('Skipped failed countries in language scope mode:', data.failedCountries);
      }
    } else if (selectedPlatform === 'all') {
      const allPlatforms = getEligiblePlatformsForAll(typeSelect.value, countrySelect.value);
      setChartLoadVisual(true, { platform: 'all', colors: LANGUAGE_SCOPE_RING_GRADIENT });

      data = await fetchAllPlatformsCompositeData(typeSelect.value, countrySelect.value, {
        onProgress: (progressState) => {
          if (requestId !== activeRequestId) return;
          if (progressState && progressState.stage === 'retry') {
            setChartLoadVisual(true, { platform: 'all', colors: LANGUAGE_SCOPE_RING_GRADIENT });
          }
        }
      });

      if (Array.isArray(data.failedPlatforms) && data.failedPlatforms.length) {
        console.warn('Skipped failed platforms in all-platform mode:', data.failedPlatforms);
      }
    } else {
      let candidates = null;
      if (selectedPlatform === 'ximalaya') {
        const xmSign = await createXimalayaSign();
        const params = new URLSearchParams({
          platform: 'ximalaya',
          type: normalizeTypeForPlatform('ximalaya', typeSelect.value),
          country: normalizeCountry(countrySelect.value),
          xm_sign: xmSign
        });
        candidates = [`${WORKER_API_BASE}/?${params.toString()}`];
      } else {
        candidates = getApiCandidates(platformSelect.value, typeSelect.value, countrySelect.value);
      }
      if (!candidates.length) {
        setStatus('noSource');
        setLoading(false);
        setSkeleton(false);
        return;
      }
      setChartLoadVisual(true, { platform: selectedPlatform });
      data = await fetchJsonWithFallback(candidates);
    }

    if (requestId !== activeRequestId) return;

    maybeApplyDynamicTypeDefinitions(selectedPlatform, countrySelect ? countrySelect.value : 'us', data, typeSelect ? typeSelect.value : '');
    await setResponseCacheEntry(key, data);

    let normalizedItems = collectNormalizedItemsForCurrentPayload(data);
    normalizedItems = await enrichItemsFromLocalCacheWithBackfill(normalizedItems, platformSelect.value, countrySelect.value, typeSelect.value);
    await saveDailySnapshot(platformSelect.value, getEffectiveCountryKeyForScope(), typeSelect.value, normalizedItems, {
      fetchedAt: Date.now(),
      payload: data
    });
    await refreshHistoryDateOptions();

    if (currentPeriodValue() === 'daily' && !getSelectedHistoryDateKey()) {
      const snapshots = await getSnapshotsForCurrentSelection();
      const trendMap = buildDailyRankTrendMapFromSnapshots(snapshots, '', normalizedItems);
      const historySeriesMap = buildHistorySeriesMapFromSnapshots(snapshots, normalizedItems);
      renderNormalizedItems(normalizedItems, { rankTrendMap: trendMap, historySeriesMap });
      setStatus('live');
    } else {
      await renderAggregateFromHistory();
    }
    await finalizeSuccessfulForegroundRender(normalizedItems);
  } catch (error) {
    console.error('Load failed:', error);
    setStatus('retry');

    if (!renderedCache) {
      if (period !== 'daily' || selectedHistoryDateKey) {
        await renderAggregateFromHistory();
      } else {
        chartContainer.innerHTML = '';
        updateCount(0, 0);
        emptyStateEl.classList.remove('hidden');
        latestWallItems = [];
        renderHeroWall([]);
      }
    }

    showToast(t('loadFailedRefresh'));
  } finally {
    if (requestId === activeRequestId) {
      setLoading(false);
      setSkeleton(false);
    }
  }
}


function initLanguageSwitcher() {
  if (!languageSelectEl) return;

  const currentFile = getCurrentFileName();
  const currentLang = pageToLanguage(currentFile);
  const currentEnglishMode = getActiveEnglishTextMode();

  if (currentLang === 'en' && currentEnglishMode && languageSelectEl.querySelector(`option[value="en-${currentEnglishMode}"]`)) {
    languageSelectEl.value = `en-${currentEnglishMode}`;
  } else if (languageSelectEl.querySelector(`option[value="${currentLang}"]`)) {
    languageSelectEl.value = currentLang;
  } else if (languageSelectEl.querySelector('option[value="en"]')) {
    languageSelectEl.value = 'en';
  }

  const buildEnglishModeUrl = (mode = '') => {
    const params = new URLSearchParams(window.location.search);
    if (mode === ENGLISH_TEXT_MODE_GENZ || mode === ENGLISH_TEXT_MODE_LINKEDINBRO) params.set(ENGLISH_TEXT_MODE_QUERY_KEY, mode);
    else params.delete(ENGLISH_TEXT_MODE_QUERY_KEY);
    const query = params.toString();
    return `${window.location.pathname}${query ? `?${query}` : ''}`;
  };

  const navigate = (langCode) => {
    const target = languageToPage(langCode);
    if (target.toLowerCase() !== currentFile.toLowerCase()) {
      window.location.href = target;
      return;
    }
    if (currentLang === 'en') {
      const baseUrl = buildEnglishModeUrl('');
      if (`${window.location.pathname}${window.location.search}` !== baseUrl) window.location.href = baseUrl;
    }
  };

  const handleChange = (value) => {
    const lang = String(value || '').trim();
    if (!lang) return;
    if (lang === `en-${ENGLISH_TEXT_MODE_GENZ}`) {
      window.location.href = buildEnglishModeUrl(ENGLISH_TEXT_MODE_GENZ);
      return;
    }
    if (lang === `en-${ENGLISH_TEXT_MODE_LINKEDINBRO}`) {
      window.location.href = buildEnglishModeUrl(ENGLISH_TEXT_MODE_LINKEDINBRO);
      return;
    }
    navigate(lang);
  };

  languageSelectEl.addEventListener('change', (event) => handleChange(event.target.value));

}

function platformSupportsEpisodes(platform) {
  if (platform === 'all') return true;
  return platform !== 'audible'
    && platform !== 'orfsound'
    && platform !== 'raiplaysound'
    && platform !== 'srfaudio'
    && platform !== 'drlyd'
    && platform !== 'rtbfauvio'
    && platform !== 'rneaudio'
    && platform !== 'npoluister'
    && platform !== 'iheartradio'
    && platform !== 'ximalaya'
    && platform !== 'bilibili'
    && platform !== 'bbcsounds'
    && platform !== 'pandora'
    && platform !== 'podcastapp'
    && platform !== 'rtlplus'
    && platform !== 'tunein'
    && platform !== 'ardsounds'
    && platform !== 'radiofrance'
    && platform !== 'abclisten'
    && platform !== 'nrk'
    && platform !== 'yleareena'
    && platform !== 'sverigesradio'
    && platform !== 'podimo'
    && platform !== 'podcastaddict'
    && platform !== 'radionet'
    && platform !== 'ivoox'
    && platform !== 'castbox'
    && platform !== 'pocketcasts'
    && platform !== 'amazonmusic'
    && platform !== 'radiko';
}

function platformUsesUsOnly(platform) {
  return platform === 'iheartradio' || platform === 'siriusxm' || platform === 'pandora' || platform === 'podcastapp' || platform === 'tunein';
}

function applyPlatformConstraints() {
  prunePlatformOptionsForPage();
  ensureHistoryControls();
  ensureScopeSelectOptions();
  ensureMyPodcastsControls();

  const scope = currentScopeValue();
  const platform = platformSelect ? platformSelect.value : '';
  const languageScopeActive = isLanguageScopeMode(scope);
  const favoritesScopeActive = isFavoritesScopeMode(scope);

  if (!favoritesScopeActive) {
    rebuildTypeSelectOptions(platform, typeSelect ? typeSelect.value : '');
  }

  if (platformSelect) {
    platformSelect.disabled = favoritesScopeActive;
    platformSelect.setAttribute('aria-disabled', favoritesScopeActive ? 'true' : 'false');
  }

  if (typeSelect) {
    typeSelect.disabled = favoritesScopeActive;
    typeSelect.setAttribute('aria-disabled', favoritesScopeActive ? 'true' : 'false');
  }

  if (countrySelect) {
    const disableCountry = Boolean(languageScopeActive || favoritesScopeActive);
    countrySelect.disabled = disableCountry;
    countrySelect.setAttribute('aria-disabled', disableCountry ? 'true' : 'false');
  }

  if (periodSelect) {
    periodSelect.disabled = favoritesScopeActive;
    periodSelect.setAttribute('aria-disabled', favoritesScopeActive ? 'true' : 'false');
  }

  if (dateSelect) {
    dateSelect.disabled = favoritesScopeActive;
    dateSelect.setAttribute('aria-disabled', favoritesScopeActive ? 'true' : 'false');
  }

  if (favoritesScopeActive) {
    if (periodSelect) periodSelect.value = 'daily';
    if (dateSelect) {
      dateSelect.value = '';
      if (dateSelect.dataset.pendingValue) delete dateSelect.dataset.pendingValue;
    }
    if (historyReminderEl) historyReminderEl.style.display = 'none';
  }

  setMyPodcastsControlsVisibility(favoritesScopeActive);
  updateMyPodcastsEntryButtonState();
  updateLimitButtons();
  updateHeroTypeSubtitle();
}

async function resetLimitAndReload() {
  if (typeof closeEpisodePlayerRow === 'function' && activeEpisodePlayerRow) {
    closeEpisodePlayerRow(activeEpisodePlayerRow);
  }
  if (typeof closeNotePanelRow === 'function' && activeNotePanelRow) {
    closeNotePanelRow(activeNotePanelRow);
  }
  applyPlatformConstraints();
  visibleLimit = getDefaultVisibleLimitForSelection();
  updateLimitButtons();
  updateCountrySeo();
  updateQueryState();
  await refreshHistoryDateOptions();
  try {
    if (shouldWarmupXimalayaSdk()) {
      warmupXimalayaSdk().catch((error) => console.warn('Ximalaya SDK warmup failed:', error));
    }
  } catch (error) {
    console.warn('Ximalaya SDK warmup start failed:', error);
  }
  fetchPodcastsData();
}

platformSelect.addEventListener('change', () => {
  updateHeroTypeSubtitle();
  void resetLimitAndReload();
});
countrySelect.addEventListener('change', resetLimitAndReload);
typeSelect.addEventListener('change', resetLimitAndReload);

searchInput.addEventListener('input', () => {
  if (isFavoritesScopeMode()) {
    renderMyPodcastsLibrary().catch((error) => {
      console.warn('My Podcasts search render failed:', error);
    });
  } else {
    applyFilterAndLimit();
  }
  updateQueryState();
});

chartContainer.addEventListener('click', async (event) => {
  const favoriteNode = event.target && event.target.closest
    ? event.target.closest('.favorite-link')
    : null;
  if (favoriteNode) {
    event.preventDefault();
    event.stopPropagation();
    await toggleFavoriteFromButton(favoriteNode);
    return;
  }

  const playNode = event.target && event.target.closest
    ? event.target.closest('.play-link')
    : null;
  if (playNode) {
    event.preventDefault();
    event.stopPropagation();
    await toggleEpisodePlayerFromButton(playNode);
    return;
  }

  const historyNode = event.target && event.target.closest
    ? event.target.closest('.history-link')
    : null;
  if (historyNode) {
    event.preventDefault();
    event.stopPropagation();
    toggleHistoryPanelFromButton(historyNode);
    return;
  }

  const noteNode = event.target && event.target.closest
    ? event.target.closest('.note-link')
    : null;
  if (noteNode) {
    event.preventDefault();
    event.stopPropagation();
    await toggleNotePanelFromButton(noteNode);
    return;
  }

  const noteSeekNode = event.target && event.target.closest
    ? event.target.closest('[data-note-seek]')
    : null;
  if (noteSeekNode) {
    event.preventDefault();
    event.stopPropagation();
    await handleNoteTimestampAction(noteSeekNode);
    return;
  }

  const noteSaveNode = event.target && event.target.closest
    ? event.target.closest('[data-note-save]')
    : null;
  if (noteSaveNode) {
    event.preventDefault();
    event.stopPropagation();
    await saveRowNotePanel(noteSaveNode.closest('[data-note-panel]'));
    return;
  }

  const noteDeleteNode = event.target && event.target.closest
    ? event.target.closest('[data-note-delete]')
    : null;
  if (noteDeleteNode) {
    event.preventDefault();
    event.stopPropagation();
    await deleteRowNotePanel(noteDeleteNode.closest('[data-note-panel]'));
    return;
  }

  const noteCloseNode = event.target && event.target.closest
    ? event.target.closest('[data-note-close]')
    : null;
  if (noteCloseNode) {
    event.preventDefault();
    event.stopPropagation();
    await closeNotePanelRow(noteCloseNode.closest('.chart-row'));
    return;
  }

  const noteDownloadNode = event.target && event.target.closest
    ? event.target.closest('[data-note-download]')
    : null;
  if (noteDownloadNode) {
    event.preventDefault();
    event.stopPropagation();
    const menu = noteDownloadNode.closest('.note-download-menu');
    if (menu) menu.open = false;
    downloadRowNotePanel(noteDownloadNode.closest('[data-note-panel]'), noteDownloadNode.getAttribute('data-note-download') || 'md');
    return;
  }

  const noteCopyNode = event.target && event.target.closest
    ? event.target.closest('[data-note-copy]')
    : null;
  if (noteCopyNode) {
    event.preventDefault();
    event.stopPropagation();
    await copyRowNotePanel(noteCopyNode.closest('[data-note-panel]'));
    return;
  }

  const copyNode = event.target && event.target.closest
    ? event.target.closest('.title-copy-target, .title-copy-btn')
    : null;

  const refreshNode = event.target && event.target.closest
    ? event.target.closest('.play-refresh')
    : null;

  if (refreshNode) {
    event.preventDefault();
    event.stopPropagation();
    const row = refreshNode.closest('.chart-row');
    if (row && row.classList.contains('player-open')) {
      const iframe = row.querySelector('.episode-player-wrap iframe');
      if (iframe) {
        // Force reload the iframe
        const currentSrc = iframe.src;
        iframe.src = 'about:blank';
        setTimeout(() => { iframe.src = currentSrc; }, 50);
      }
    }
    return;
  }
  if (!copyNode) return;
  event.preventDefault();
  event.stopPropagation();
  await handleTitleCopyInteraction(copyNode);
});

chartContainer.addEventListener('keydown', async (event) => {
  const noteInput = event.target && event.target.matches && event.target.matches('.note-input') ? event.target : null;
  if (noteInput && (event.metaKey || event.ctrlKey) && String(event.key || '').toLowerCase() === 's') {
    event.preventDefault();
    await saveRowNotePanel(noteInput.closest('[data-note-panel]'));
    return;
  }
  const key = event.key;
  if (key !== 'Enter' && key !== ' ') return;
  const copyNode = event.target && event.target.closest
    ? event.target.closest('.title-copy-target, .title-copy-btn')
    : null;
  if (!copyNode) return;
  event.preventDefault();
  await handleTitleCopyInteraction(copyNode);
});

chartContainer.addEventListener('input', (event) => {
  const noteInput = event.target && event.target.matches && event.target.matches('.note-input') ? event.target : null;
  if (!noteInput) return;
  const panel = noteInput.closest('[data-note-panel]');
  if (!panel) return;
  updateNotePanelStatus(panel, {
    dirty: true,
    updatedAt: Number(panel.getAttribute('data-note-updated-at') || 0)
  });
});

chartContainer.addEventListener('pointerdown', (event) => {
  const copyNode = event.target && event.target.closest
    ? event.target.closest('.title-copy-target, .title-copy-btn')
    : null;
  if (!copyNode) return;
  revealRowCopyUiTemporarily(copyNode.closest('.chart-row'));
}, { passive: true });

chartContainer.addEventListener('focusin', (event) => {
  const copyNode = event.target && event.target.closest
    ? event.target.closest('.title-copy-target, .title-copy-btn')
    : null;
  if (!copyNode) return;
  const row = copyNode.closest('.chart-row');
  if (row) row.classList.add('show-copy');
});

chartContainer.addEventListener('focusout', (event) => {
  const row = event.target && event.target.closest ? event.target.closest('.chart-row') : null;
  if (!row) return;
  requestAnimationFrame(() => {
    if (!row.contains(document.activeElement)) row.classList.remove('show-copy');
  });
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  if (isFavoritesScopeMode()) {
    renderMyPodcastsLibrary().catch((error) => {
      console.warn('My Podcasts search clear render failed:', error);
    });
  } else {
    applyFilterAndLimit();
  }
  updateQueryState();
});

randomBtn.addEventListener('click', randomPick);
shareBtn.addEventListener('click', shareView);
refreshBtn.addEventListener('click', () => fetchPodcastsData({ forceRefresh: true }));
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

async function registerPwaServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  try {
    await navigator.serviceWorker.register('sw.js', { scope: './' });
  } catch (error) {
    console.warn('Service worker registration failed:', error);
  }
}


let deferredInstallPrompt = null;
let installPromptArmed = false;

function consumeInstallPromptStorage(key) {
  try { return window.sessionStorage.getItem(key) === '1'; } catch (_) { return false; }
}

function markInstallPromptStorage(key) {
  try { window.sessionStorage.setItem(key, '1'); } catch (_) { }
}

async function promptInstallApp() {
  if (!deferredInstallPrompt) return;
  try {
    const event = deferredInstallPrompt;
    deferredInstallPrompt = null;
    await event.prompt();
    if (event.userChoice && typeof event.userChoice.then === 'function') {
      await event.userChoice;
    }
    markInstallPromptStorage('pwa_prompted_once');
  } catch (error) {
    console.warn('Install prompt failed:', error);
  }
}

function armInstallPromptOnNextGesture() {
  if (installPromptArmed || consumeInstallPromptStorage('pwa_prompted_once')) return;
  installPromptArmed = true;

  const run = async () => {
    window.removeEventListener('pointerdown', run, true);
    window.removeEventListener('keydown', run, true);
    await promptInstallApp();
  };

  window.addEventListener('pointerdown', run, { once: true, passive: true, capture: true });
  window.addEventListener('keydown', run, { once: true, capture: true });
}

function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    armInstallPromptOnNextGesture();
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    installPromptArmed = false;
    markInstallPromptStorage('pwa_installed_once');
  });
}

// ── Playlist Mode ──

const PLM_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2.5"/><polygon points="10,7.5 10,13.5 15,10.5" fill="currentColor" stroke="none"/><line x1="6" y1="20" x2="18" y2="20"/><line x1="9" y1="22.5" x2="15" y2="22.5"/></svg>';

const playlistController = {
  overlay: null,
  items: [],
  currentIndex: 0,
  feedEl: null,
  counterEl: null,
  prevBtn: null,
  nextBtn: null,
  isOpen: false,
  activeCardIframeId: null,
  activeCardSBMonitor: null,
  touchStartY: 0,
  touchDeltaY: 0,
  _keyHandler: null,
  _touchStartHandler: null,
  _touchMoveHandler: null,
  _touchEndHandler: null,
  videoDetectCache: new Map(),

  _buildOverlay() {
    if (this.overlay) return this.overlay;
    const el = document.createElement('div');
    el.id = 'playlist-overlay';
    el.innerHTML = `
      <div class="plm-topbar">
        <button class="plm-close" type="button" aria-label="${this._escapeAttr(tOr('close', 'Close'))}">✕</button>
        <span class="plm-counter"></span>
      </div>
      <div class="plm-feed"></div>
      <button class="plm-nav plm-nav-prev" type="button" aria-label="${this._escapeAttr(tOr('previous', 'Previous'))}">${typeof getPlaylistNavSvg === 'function' ? getPlaylistNavSvg('previous') : '▲'}</button>
      <button class="plm-nav plm-nav-next" type="button" aria-label="${this._escapeAttr(tOr('next', 'Next'))}">${typeof getPlaylistNavSvg === 'function' ? getPlaylistNavSvg('next') : '▼'}</button>
      <div class="plm-note-overlay" hidden></div>
    `;
    document.body.appendChild(el);

    this.feedEl = el.querySelector('.plm-feed');
    this.counterEl = el.querySelector('.plm-counter');
    this.prevBtn = el.querySelector('.plm-nav-prev');
    this.nextBtn = el.querySelector('.plm-nav-next');

    el.querySelector('.plm-close').addEventListener('click', () => this.close());
    this.prevBtn.addEventListener('click', () => this.navigate(-1));
    this.nextBtn.addEventListener('click', () => this.navigate(1));

    this.overlay = el;
    return el;
  },

  _collectItems() {
    const rows = document.querySelectorAll('#podcasts-chart .chart-row');
    const items = [];
    let realItemCount = 0;
    rows.forEach((row) => {
      const playBtn = row.querySelector('.play-link');
      const openLink = row.querySelector('.open-link');
      const coverImg = row.querySelector('.cover');
      const titleEl = row.querySelector('.title');
      const pubEl = row.querySelector('.publisher');
      const favBtn = row.querySelector('.favorite-link');

      if (!playBtn) return;

      const embedUrl = String(playBtn.getAttribute('data-embed-url') || '').trim();
      const embedPlatform = String(playBtn.getAttribute('data-embed-platform') || '').trim().toLowerCase();
      const embedKind = String(playBtn.getAttribute('data-embed-kind') || '').trim().toLowerCase();
      if (!embedUrl || !embedPlatform) return;

      // Collect all favorite data attributes for proper toggleFavoriteFromButton support
      const favAttrs = {};
      if (favBtn) {
        for (const attr of favBtn.attributes) {
          if (attr.name.startsWith('data-favorite-') || attr.name === 'data-cid') {
            favAttrs[attr.name] = attr.value;
          }
        }
      }

      items.push({
        embedUrl,
        resolvedEmbedUrl: null, // set by video detection for Spotify
        embedPlatform,
        embedKind,
        title: titleEl ? (titleEl.childNodes[0]?.textContent || titleEl.textContent || '').trim() : '',
        publisher: pubEl ? pubEl.textContent.trim() : '',
        coverSrc: coverImg ? (coverImg.getAttribute('data-original-src') || coverImg.getAttribute('src') || '') : '',
        openUrl: openLink ? openLink.href : '',
        favAttrs,
        favKey: favAttrs['data-favorite-key'] || '',
        noteContext: buildNoteContext({
          title: titleEl ? (titleEl.childNodes[0]?.textContent || titleEl.textContent || '').trim() : '',
          publisher: pubEl ? pubEl.textContent.trim() : '',
          link: openLink ? openLink.href : '',
          favoriteKey: favAttrs['data-favorite-key'] || '',
          embedUrl,
          platform: embedPlatform,
          kind: embedKind
        }),
        isVideo: embedPlatform === 'youtube' ? true : null,
        _videoDetected: embedPlatform === 'youtube'
      });
      realItemCount++;

      if (realItemCount % 5 === 0) {
        items.push({ isAd: true });
      }
    });

    if (items.length > 0 && items[items.length - 1].isAd) {
      items.pop();
    }
    return items;
  },

  async _detectVideoAsync(item) {
    if (item.isAd) return;
    if (item._videoDetected) return;
    item._videoDetected = true;

    const cacheKey = item.embedUrl;
    if (this.videoDetectCache.has(cacheKey)) {
      const cached = this.videoDetectCache.get(cacheKey);
      item.isVideo = cached.isVideo;
      if (cached.resolvedUrl) item.resolvedEmbedUrl = cached.resolvedUrl;
      return;
    }

    try {
      if (item.embedPlatform === 'spotify') {
        const fn = item.embedKind === 'top-episodes'
          ? (typeof resolveSpotifyEpisodeEmbedMeta === 'function' ? resolveSpotifyEpisodeEmbedMeta : null)
          : (typeof resolveSpotifyShowEmbedMeta === 'function' ? resolveSpotifyShowEmbedMeta : null);
        if (fn) {
          const meta = await fn(item.embedUrl);
          item.isVideo = !!(meta && meta.isVideo);
          if (meta && meta.embedUrl) item.resolvedEmbedUrl = meta.embedUrl;
        } else {
          item.isVideo = false;
        }
      } else if (item.embedPlatform === 'apple' && item.embedKind === 'top-episodes') {
        if (typeof resolveAppleEpisodeEmbedMeta === 'function') {
          const meta = await resolveAppleEpisodeEmbedMeta(item.embedUrl);
          item.isVideo = !!(meta && meta.isVideo);
        } else {
          item.isVideo = false;
        }
      } else {
        item.isVideo = false;
      }
    } catch {
      item.isVideo = false;
    }

    this.videoDetectCache.set(cacheKey, { isVideo: item.isVideo, resolvedUrl: item.resolvedEmbedUrl });
  },

  _startBackgroundDetection() {
    const items = this.items;
    let idx = 0;
    const detectNext = async () => {
      while (idx < items.length && this.isOpen) {
        if (!items[idx]._videoDetected) {
          await this._detectVideoAsync(items[idx]);
          // If this was the current card and we just learned it's video, re-render
          if (idx === this.currentIndex && this.isOpen) {
            this._renderCard(this.currentIndex);
          }
        }
        idx++;
      }
    };
    detectNext().catch(() => {});
  },

  _buildIframeForItem(item) {
    const safeTitle = String(item.title || '').replace(/"/g, '&quot;');
    const p = item.embedPlatform;
    const url = item.resolvedEmbedUrl || item.embedUrl;

    if (item.isVideo && p === 'youtube') {
      const ytId = 'plm-yt-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
      const videoId = extractVideoIdFromEmbedUrl(url);
      const playlistId = extractPlaylistIdFromEmbedUrl(url);
      this.activeCardIframeId = ytId;
      if (videoId || playlistId) {
        return buildYouTubePlayerHostMarkup(ytId, videoId, safeTitle, 'plm-dock-youtube', { playlistId });
      }
      const ytSrc = url + (url.includes('?') ? '&' : '?') + 'enablejsapi=1&origin=' + encodeURIComponent(window.location.origin);
      return `<iframe id="${ytId}" src="${ytSrc}" title="${safeTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }

    if (p === 'spotify') {
      return `<iframe class="plm-dock-spotify" src="${url}" title="${safeTitle}" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" allowfullscreen></iframe>`;
    }
    if (p === 'apple') {
      const cls = item.embedKind === 'top-episodes' ? 'plm-dock-apple-episode' : 'plm-dock-apple-show';
      return `<iframe class="${cls}" src="${url}" title="${safeTitle}" frameborder="0" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" loading="lazy"></iframe>`;
    }
    if (p === 'youtube') {
      const ytId = 'plm-yt-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
      const videoId = extractVideoIdFromEmbedUrl(url);
      const playlistId = extractPlaylistIdFromEmbedUrl(url);
      this.activeCardIframeId = ytId;
      if (videoId || playlistId) {
        return buildYouTubePlayerHostMarkup(ytId, videoId, safeTitle, 'plm-dock-youtube', { playlistId });
      }
      const ytSrc = url + (url.includes('?') ? '&' : '?') + 'enablejsapi=1&origin=' + encodeURIComponent(window.location.origin);
      return `<iframe class="plm-dock-youtube" src="${ytSrc}" title="${safeTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="eager"></iframe>`;
    }
    if (p === 'bilibili') {
      return `<iframe src="${url}" title="${safeTitle}" frameborder="0" allowfullscreen loading="lazy" style="width:100%;aspect-ratio:16/9;"></iframe>`;
    }
    // RSS / Castbox / PocketCasts — use slot for renderCastboxRssPlayerInSlot
    if (p === 'castbox' || p === 'pocketcasts' || p === 'rss') {
      return '<div class="plm-rss-slot"></div>';
    }
    return `<iframe class="plm-dock-spotify" src="${url}" title="${safeTitle}" frameborder="0" allow="autoplay; encrypted-media" loading="lazy" style="height:160px;"></iframe>`;
  },

  _buildCardHtml(item, direction) {
    const isVideo = item.isVideo === true;
    const dirClass = direction === 'up' ? 'plm-slide-down' : direction === 'down' ? 'plm-slide-up' : '';

    if (item.isAd) {
      return `
        <div class="plm-card plm-ad-card ${dirClass}" data-plm-index="${this.currentIndex}">
          <div class="plm-ad-container">
            ${typeof buildPlaylistAdMarkup === 'function' ? buildPlaylistAdMarkup() : ''}
          </div>
        </div>
      `;
    }

    const isFav = this._checkIfFavorited(item);
    const heartSvg = typeof getFavoriteHeartSvg === 'function' ? getFavoriteHeartSvg() : '❤️';
    const noteSvg = typeof getNoteSvg === 'function' ? getNoteSvg() : '✎';

    let mediaSection;
    if (isVideo) {
      mediaSection = `<div class="plm-video-area">${this._buildIframeForItem(item)}</div>`;
    } else {
      const coverSrc = item.coverSrc || '';
      const bgStyle = coverSrc ? `background-image: url('${coverSrc.replace(/'/g, "\\'")}')` : '';
      mediaSection = `
        <div class="plm-audio-cover">
          <div class="plm-audio-cover-bg" style="${bgStyle}"></div>
          <img class="plm-audio-cover-img" src="${coverSrc}" alt="" loading="lazy" onerror="window.handlePlaylistCoverError(this, '${coverSrc.replace(/'/g, "\\'")}', 'podcast-placeholder.webp')">
        </div>
        <div class="plm-player-dock">
          <div class="plm-player-dock-inner">
            ${this._buildIframeForItem(item)}
          </div>
        </div>`;
    }

    // Build favorite button with all original data attributes
    const favAttrStr = Object.entries(item.favAttrs || {})
      .map(([k, v]) => `${k}="${this._escapeAttr(v)}"`)
      .join(' ');

    // Get brand colors for the favorite icon and other active states
    let brandColor1 = '#6f92ff';
    let brandColor2 = '#00c5b0';
    if (typeof getPlatformAccentColors === 'function') {
      const colors = getPlatformAccentColors(item.embedPlatform || 'apple');
      if (colors && colors.length >= 2) {
        brandColor1 = colors[0];
        brandColor2 = colors[1];
      }
    }

    let extraCardClass = '';
    if (!isVideo && item.embedPlatform === 'apple' && item.embedKind !== 'top-episodes') {
      extraCardClass = 'plm-card-apple-show';
    }

    return `
      <div class="plm-card ${dirClass} ${extraCardClass}" data-plm-index="${this.currentIndex}" style="--brand: ${brandColor1}; --brand-2: ${brandColor2};">
        ${mediaSection}
        <div class="plm-info">
          ${!isVideo && item.coverSrc ? `<img class="plm-mini-cover" src="${item.coverSrc}" alt="Mini cover" aria-hidden="true" loading="lazy">` : ''}
          <div class="plm-info-text">
            <h2 class="plm-title">${this._escapeHtml(item.title)}</h2>
            <p class="plm-publisher">${this._escapeHtml(item.publisher)}</p>
          </div>
        </div>
        <div class="plm-actions">
          <button class="plm-action-btn plm-fav-btn favorite-link${isFav ? ' is-active' : ''}" type="button" ${favAttrStr}>
            ${heartSvg}
          </button>
          <button class="plm-action-btn plm-share-btn" type="button" data-share-url="${this._escapeAttr(item.openUrl)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          </button>
          <button class="plm-action-btn plm-note-btn" type="button" aria-label="${this._escapeAttr(noteText('note'))}" title="${this._escapeAttr(noteText('note'))}">
            ${noteSvg}
          </button>
          ${!isVideo && (item.embedPlatform === 'spotify' || item.embedPlatform === 'apple' || item.embedPlatform === 'youtube') ? `
          <button class="plm-action-btn plm-refresh-btn" type="button" aria-label="${this._escapeAttr(tOr('refreshPlayer', 'Refresh player'))}" title="${this._escapeAttr(tOr('refreshPlayer', 'Refresh player'))}">
            ${typeof getEpisodeRefreshSvg === 'function' ? getEpisodeRefreshSvg() : '↻'}
          </button>` : ''}
          ${isVideo ? `
          <button class="plm-action-btn plm-refresh-btn" type="button" aria-label="${this._escapeAttr(tOr('refreshPlayer', 'Refresh player'))}" title="${this._escapeAttr(tOr('refreshPlayer', 'Refresh player'))}">
            ${typeof getEpisodeRefreshSvg === 'function' ? getEpisodeRefreshSvg() : '↻'}
          </button>` : ''}
        </div>
      </div>`;
  },

  _escapeHtml(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); },
  _escapeAttr(s) { return String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;'); },

  _checkIfFavorited(item) {
    const key = String(item && item.favKey || '').trim();
    if (!key) return false;
    return favoritePodcastMap.has(key);
  },

  _renderCard(index, direction) {
    if (!this.feedEl || !this.items.length) return;
    this.currentIndex = Math.max(0, Math.min(index, this.items.length - 1));
    const item = this.items[this.currentIndex];
    this._primeSponsorBlockAroundIndex(this.currentIndex);

    // Destroy previous SponsorBlock monitor
    this._destroySBMonitor();
    this.activeCardIframeId = null;

    this.feedEl.innerHTML = this._buildCardHtml(item, direction);
    this._updateCounter();
    this._updateNavButtons();
    
    // Init Ads for Ad card
    if (item.isAd && typeof initializeAdsbygooglePush === 'function') {
      const adEl = this.feedEl.querySelector('.playlist-player-ad .adsbygoogle');
      if (adEl) initializeAdsbygooglePush();
      return; // No actions or video/audio to init
    }

    this._bindCardActions();

    // Handle RSS/Castbox/PocketCasts players
    const p = item.embedPlatform;
    if ((p === 'castbox' || p === 'pocketcasts' || p === 'rss') && typeof renderCastboxRssPlayerInSlot === 'function') {
      const rssSlot = this.feedEl.querySelector('.plm-rss-slot');
      if (rssSlot) {
        renderCastboxRssPlayerInSlot(rssSlot, p, item.embedUrl, item.title, true).catch(() => {});
      }
    }

    // Init SponsorBlock for YouTube
    if (item.embedPlatform === 'youtube' && this.activeCardIframeId) {
      this._initSBForCurrentCard(item);
    }
  },

  _updateCounter() {
    if (this.counterEl) {
      this.counterEl.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
    }
  },

  _updateNavButtons() {
    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex <= 0;
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= this.items.length - 1;
  },

  _bindCardActions() {
    const card = this.feedEl && this.feedEl.querySelector('.plm-card');
    if (!card) return;

    const favBtn = card.querySelector('.plm-fav-btn');
    if (favBtn) {
      favBtn.addEventListener('click', async () => {
        const item = this.items[this.currentIndex];
        if (!item) return;
        // Use toggleFavoriteFromButton directly — button now has `favorite-link` class and all data attrs
        if (typeof toggleFavoriteFromButton === 'function') {
          await toggleFavoriteFromButton(favBtn);
          // Sync visual state
          const isNowFav = this._checkIfFavorited(item);
          updateFavoriteButtonVisual(favBtn, isNowFav);
        }
      });
    }

    const shareBtn = card.querySelector('.plm-share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        const url = shareBtn.getAttribute('data-share-url');
        if (!url) return;
        if (navigator.share) {
          navigator.share({ url }).catch(() => {});
        } else if (typeof copyTextValue === 'function') {
          copyTextValue(url);
        } else {
          try { navigator.clipboard.writeText(url); } catch {}
        }
      });
    }

    const noteBtn = card.querySelector('.plm-note-btn');
    if (noteBtn) {
      noteBtn.addEventListener('click', async () => {
        const item = this.items[this.currentIndex];
        if (!item || item.isAd) return;
        if (typeof playlistNoteController !== 'undefined') {
          await playlistNoteController.openForItem(item);
        }
      });
      if (typeof playlistNoteController !== 'undefined') {
        playlistNoteController.syncTriggerState(noteBtn, this.items[this.currentIndex]);
      }
    }

    const refreshBtn = card.querySelector('.plm-refresh-btn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        const item = this.items[this.currentIndex];
        if (!item || item.isAd) return;
        
        // Find iframe inside either video area or audio dock
        const iframe = card.querySelector('iframe');
        if (iframe) {
          const currentSrc = iframe.src;
          iframe.src = 'about:blank';
          setTimeout(() => { iframe.src = currentSrc; }, 50);
        }
      });
    }
  },

  async _initSBForCurrentCard(item) {
    if (!this.activeCardIframeId) return;
    const host = document.getElementById(this.activeCardIframeId);
    if (!host) return;
    const videoId = String(host.getAttribute('data-youtube-video-id') || '').trim() || extractVideoIdFromEmbedUrl(item.embedUrl);
    const playlistId = String(host.getAttribute('data-youtube-playlist-id') || '').trim() || extractPlaylistIdFromEmbedUrl(item.embedUrl);
    if (!videoId && !playlistId) return;

    try {
      await loadYouTubeIframeApi();
      if (!this.isOpen || this.items[this.currentIndex] !== item) return;
      if (!window.YT || !window.YT.Player) return;

      const shell = host.closest('.plm-video-area') || host.closest('.plm-player-dock-inner') || host.closest('.plm-card');
      const state = { currentVideoId: '' };
      const playerOptions = {
        playerVars: {
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          origin: window.location.origin
        },
        events: {
          onReady: async () => {
            setYouTubePlayerReady(host, true);
            await syncSponsorBlockForPlayer(ytPlayer, shell, state, {
              isAlive: () => this.isOpen && this.items[this.currentIndex] === item,
              fallbackVideoId: videoId && !playlistId ? videoId : '',
              onBeforeMonitorSwap: () => this._destroySBMonitor(),
              onMonitorReady: (monitor) => { this.activeCardSBMonitor = monitor; }
            });
          },
          onStateChange: async () => {
            await syncSponsorBlockForPlayer(ytPlayer, shell, state, {
              isAlive: () => this.isOpen && this.items[this.currentIndex] === item,
              fallbackVideoId: videoId && !playlistId ? videoId : '',
              onBeforeMonitorSwap: () => this._destroySBMonitor(),
              onMonitorReady: (monitor) => { this.activeCardSBMonitor = monitor; }
            });
          }
        }
      };
      if (videoId && !playlistId) {
        playerOptions.videoId = videoId;
      } else {
        playerOptions.playerVars.listType = 'playlist';
        playerOptions.playerVars.list = playlistId;
      }
      const ytPlayer = new window.YT.Player(this.activeCardIframeId, playerOptions);
      setYouTubePlayerInstance(host, ytPlayer);
    } catch (err) {
      console.warn('Playlist SponsorBlock init error:', err);
    }
  },

  _primeSponsorBlockAroundIndex(index) {
    if (!Array.isArray(this.items) || !this.items.length) return;
    const ids = [];
    for (let i = index; i < this.items.length && ids.length < 6; i += 1) {
      const item = this.items[i];
      if (!item || String(item.embedPlatform || '').trim().toLowerCase() !== 'youtube') continue;
      const videoId = extractSponsorBlockCandidateVideoId(item);
      if (!videoId || ids.includes(videoId)) continue;
      ids.push(videoId);
    }
    primeSponsorBlockForVideoIds(ids, { immediateFirst: true });
  },

  _destroySBMonitor() {
    if (this.activeCardSBMonitor) {
      try { this.activeCardSBMonitor.destroy(); } catch {}
      this.activeCardSBMonitor = null;
    }
  },

  navigate(delta) {
    const newIdx = this.currentIndex + delta;
    if (newIdx < 0 || newIdx >= this.items.length) return;
    const direction = delta > 0 ? 'down' : 'up';
    this._renderCard(newIdx, direction);
  },

  _installKeyboard() {
    this._keyHandler = (e) => {
      if (!this.isOpen) return;
      if (typeof playlistNoteController !== 'undefined' && playlistNoteController.isOpen) {
        if (e.key === 'Escape') {
          playlistNoteController.close().catch(() => {});
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape') { this.close(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { this.navigate(-1); e.preventDefault(); }
      else if (e.key === 'ArrowDown') { this.navigate(1); e.preventDefault(); }
    };
    document.addEventListener('keydown', this._keyHandler);
  },

  _installTouch() {
    this._touchStartHandler = (e) => {
      if (!this.isOpen) return;
      this.touchStartY = e.touches[0].clientY;
      this.touchDeltaY = 0;
    };
    this._touchMoveHandler = (e) => {
      if (!this.isOpen) return;
      this.touchDeltaY = e.touches[0].clientY - this.touchStartY;
    };
    this._touchEndHandler = () => {
      if (!this.isOpen) return;
      if (Math.abs(this.touchDeltaY) > 60) {
        this.navigate(this.touchDeltaY < 0 ? 1 : -1);
      }
      this.touchDeltaY = 0;
    };

    const overlay = this.overlay;
    if (overlay) {
      overlay.addEventListener('touchstart', this._touchStartHandler, { passive: true });
      overlay.addEventListener('touchmove', this._touchMoveHandler, { passive: true });
      overlay.addEventListener('touchend', this._touchEndHandler, { passive: true });
    }
  },

  open() {
    const items = this._collectItems();
    if (!items.length) return;

    this.items = items;
    this.currentIndex = 0;
    this.isOpen = true;

    this._buildOverlay();
    this._renderCard(0);
    this.overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    this._primeSponsorBlockAroundIndex(0);

    // Highlight the button
    const btn = document.getElementById('playlist-mode-btn');
    if (btn) btn.classList.add('active');

    this._installKeyboard();
    this._installTouch();

    // Start background video detection
    this._startBackgroundDetection();
  },

  close() {
    this.isOpen = false;
    this._destroySBMonitor();
    this.activeCardIframeId = null;
    if (typeof playlistNoteController !== 'undefined' && playlistNoteController.isOpen) {
      playlistNoteController.close({ skipRestoreFocus: true }).catch(() => {});
    }

    if (this.overlay) {
      this.overlay.classList.remove('is-open');
    }
    document.body.style.overflow = '';

    const btn = document.getElementById('playlist-mode-btn');
    if (btn) btn.classList.remove('active');

    if (this._keyHandler) {
      document.removeEventListener('keydown', this._keyHandler);
      this._keyHandler = null;
    }
    if (this.overlay && this._touchStartHandler) {
      this.overlay.removeEventListener('touchstart', this._touchStartHandler);
      this.overlay.removeEventListener('touchmove', this._touchMoveHandler);
      this.overlay.removeEventListener('touchend', this._touchEndHandler);
    }

    // Clean up iframe content after transition
    setTimeout(() => {
      if (this.feedEl) this.feedEl.innerHTML = '';
    }, 400);
  }
};

const playlistNoteController = {
  overlayEl: null,
  currentContext: null,
  currentTrigger: null,
  saveTimer: 0,
  isOpen: false,

  ensure() {
    const host = playlistController._buildOverlay();
    const el = host ? host.querySelector('.plm-note-overlay') : null;
    if (!el) return null;
    this.overlayEl = el;
    return el;
  },

  async syncTriggerState(button, item) {
    if (!button || !item || !item.noteContext || !item.noteContext.id) return;
    const record = await loadNote(item.noteContext.id);
    button.classList.toggle('has-note', !!(record && String(record.content || '').trim()));
    button.classList.toggle('is-active', this.isOpen && this.currentContext && this.currentContext.id === item.noteContext.id);
  },

  _setStatus(dirty = false, saving = false, updatedAt = 0) {
    if (!this.overlayEl) return;
    const statusEl = this.overlayEl.querySelector('[data-plm-note-status]');
    if (!statusEl) return;
    this.overlayEl.dataset.dirty = dirty ? 'true' : 'false';
    this.overlayEl.dataset.saving = saving ? 'true' : 'false';
    this.overlayEl.setAttribute('data-note-updated-at', String(Number(updatedAt) || 0));
    statusEl.textContent = getNoteStatusText(updatedAt, dirty, saving);
  },

  _buildMarkup(context, record = null) {
    const updatedAt = Number(record && record.updatedAt) || 0;
    const rawContent = String(record && record.content || '');
    const content = escapeHtml(rawContent);
    const publisher = escapeHtml(String(context.publisher || '').trim());
    const previewHtml = buildNoteFullPreviewHtml(rawContent, { interactive: canSeekTimestampsForPlatform(context.platform) });
    return `
      <div class="plm-note-sheet">
        <div class="plm-note-topbar">
          <button class="plm-note-topbtn" type="button" data-plm-note-close>${escapeHtml(noteText('noteDone'))}</button>
          <div class="plm-note-heading">
            <span class="plm-note-kicker">${escapeHtml(noteText('noteFor'))}</span>
            <strong class="plm-note-title">${escapeHtml(context.title || 'Untitled')}</strong>
            ${publisher ? `<span class="plm-note-publisher">${publisher}</span>` : ''}
          </div>
          <div class="plm-note-topactions">
            <details class="plm-note-download-menu">
              <summary class="plm-note-topbtn">${escapeHtml(noteText('noteDownload'))}</summary>
              <div class="plm-note-download-pop">
                <button class="plm-note-menu-btn" type="button" data-plm-note-download="md">${escapeHtml(noteText('noteDownloadMd'))}</button>
                <button class="plm-note-menu-btn" type="button" data-plm-note-download="txt">${escapeHtml(noteText('noteDownloadTxt'))}</button>
              </div>
            </details>
            <button class="plm-note-topbtn" type="button" data-plm-note-copy>${escapeHtml(noteText('noteCopy'))}</button>
            <button class="plm-note-topbtn is-danger" type="button" data-plm-note-delete>${escapeHtml(noteText('noteDelete'))}</button>
          </div>
        </div>
        <div class="plm-note-meta">
          <span data-plm-note-status>${escapeHtml(getNoteStatusText(updatedAt, false, false))}</span>
        </div>
        <div class="plm-note-body">
          <textarea class="plm-note-input" data-plm-note-input spellcheck="true" placeholder="${escapeHtml(noteText('notePlaceholder'))}">${content}</textarea>
          <div class="plm-note-preview" data-plm-note-preview>${previewHtml}</div>
        </div>
      </div>
    `;
  },

  async openForItem(item) {
    const context = buildNoteContext(item && item.noteContext ? item.noteContext : {
      title: item && item.title,
      publisher: item && item.publisher,
      link: item && item.openUrl,
      image: item && item.image,
      favoriteKey: item && item.favKey,
      embedUrl: item && item.embedUrl,
      platform: item && item.embedPlatform,
      kind: item && item.embedKind
    });
    if (!context.id) return false;

    await this.close({ immediate: true, skipRestoreFocus: true });
    const overlay = this.ensure();
    if (!overlay) return false;

    const record = await loadNote(context.id);
    overlay.innerHTML = this._buildMarkup(context, record);
    overlay.removeAttribute('hidden');
    overlay.classList.add('is-open');
    overlay.setAttribute('data-note-id', escapeHtml(context.id));
    overlay.setAttribute('data-note-title', escapeHtml(context.title));
    overlay.setAttribute('data-note-publisher', escapeHtml(context.publisher));
    overlay.setAttribute('data-note-link', escapeHtml(context.link));
    overlay.setAttribute('data-note-image', escapeHtml(context.image || ''));
    overlay.setAttribute('data-note-embed-url', escapeHtml(context.embedUrl || ''));
    overlay.setAttribute('data-note-platform', escapeHtml(context.platform));
    overlay.setAttribute('data-note-kind', escapeHtml(context.kind));
    overlay.setAttribute('data-note-updated-at', String(Number(record && record.updatedAt) || 0));
    overlay.onclick = (event) => {
      const seekNode = event.target && event.target.closest ? event.target.closest('[data-note-seek]') : null;
      if (seekNode) {
        event.preventDefault();
        event.stopPropagation();
        handleNoteTimestampAction(seekNode).catch((error) => console.warn('Playlist note seek failed:', error));
        return;
      }
      if (event.target === overlay) {
        this.close().catch((error) => console.warn('Playlist note close failed:', error));
      }
    };

    this.currentContext = context;
    this.currentTrigger = playlistController.feedEl ? playlistController.feedEl.querySelector('.plm-note-btn') : null;
    this.isOpen = true;

    if (this.currentTrigger) {
      this.currentTrigger.classList.add('is-active');
      this.currentTrigger.classList.toggle('has-note', !!(record && String(record.content || '').trim()));
    }

    const textarea = overlay.querySelector('[data-plm-note-input]');
    const closeBtn = overlay.querySelector('[data-plm-note-close]');
    const deleteBtn = overlay.querySelector('[data-plm-note-delete]');
    const downloadBtns = overlay.querySelectorAll('[data-plm-note-download]');
    const copyBtn = overlay.querySelector('[data-plm-note-copy]');

    if (textarea) {
      textarea.addEventListener('input', () => {
        this._setStatus(true, false, Number(overlay.getAttribute('data-note-updated-at') || 0));
        const preview = overlay.querySelector('[data-plm-note-preview]');
        if (preview) preview.innerHTML = buildNoteFullPreviewHtml(textarea.value, { interactive: canSeekTimestampsForPlatform(context.platform) });
        if (this.saveTimer) clearTimeout(this.saveTimer);
        this.saveTimer = window.setTimeout(() => {
          this.saveTimer = 0;
          this.saveCurrent().catch((error) => console.warn('Playlist note autosave failed:', error));
        }, NOTE_AUTOSAVE_DELAY_MS);
      });
      textarea.addEventListener('keydown', (event) => {
        if ((event.metaKey || event.ctrlKey) && String(event.key || '').toLowerCase() === 's') {
          event.preventDefault();
          this.flushSave().catch((error) => console.warn('Playlist note save failed:', error));
        }
      });
      requestAnimationFrame(() => {
        try {
          textarea.focus({ preventScroll: true });
          const len = textarea.value.length;
          textarea.setSelectionRange(len, len);
        } catch {}
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.close().catch((error) => console.warn('Playlist note close failed:', error));
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener('click', async () => {
        if (!this.currentContext) return;
        await deleteNote(this.currentContext.id);
        if (textarea) textarea.value = '';
        this._setStatus(false, false, 0);
        if (this.currentTrigger) this.currentTrigger.classList.remove('has-note');
        if (isFavoritesScopeMode()) {
          void renderMyPodcastsLibrary();
        }
        showToast(noteText('noteDeleted'));
      });
    }

    downloadBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!this.currentContext) return;
        const content = textarea ? textarea.value : '';
        const updatedAt = Number(overlay.getAttribute('data-note-updated-at') || 0) || Date.now();
        const menu = btn.closest('.plm-note-download-menu');
        if (menu) menu.open = false;
        downloadNote(btn.getAttribute('data-plm-note-download') || 'md', this.currentContext, content, updatedAt);
      });
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const content = textarea ? String(textarea.value || '') : '';
        if (!content.trim()) {
          showToast(noteText('noteEmptyExport'));
          return;
        }
        const ok = await copyTextValue(content);
        if (ok) showToast(noteText('noteCopied'));
      });
    }

    return true;
  },

  async saveCurrent() {
    if (!this.overlayEl || !this.currentContext) return null;
    const textarea = this.overlayEl.querySelector('[data-plm-note-input]');
    if (!textarea) return null;
    try {
      this._setStatus(false, true, Number(this.overlayEl.getAttribute('data-note-updated-at') || 0));
      const record = await saveNote(this.currentContext.id, this.currentContext.title, this.currentContext.link, textarea.value, {
        publisher: this.currentContext.publisher,
        image: this.currentContext.image,
        embedUrl: this.currentContext.embedUrl,
        platform: this.currentContext.platform,
        kind: this.currentContext.kind
      });
      const updatedAt = Number(record && record.updatedAt) || 0;
      this._setStatus(false, false, updatedAt);
      if (this.currentTrigger) this.currentTrigger.classList.toggle('has-note', !!record);
      if (isFavoritesScopeMode()) {
        void renderMyPodcastsLibrary();
      }
      return record;
    } catch (error) {
      console.warn('Playlist note save failed:', error);
      this._setStatus(true, false, Number(this.overlayEl.getAttribute('data-note-updated-at') || 0));
      return null;
    }
  },

  async flushSave() {
    if (this.saveTimer) {
      clearTimeout(this.saveTimer);
      this.saveTimer = 0;
    }
    return this.saveCurrent();
  },

  async close(options = {}) {
    if (!this.overlayEl || !this.isOpen) return;
    if (!options.immediate) {
      await this.flushSave();
    } else if (this.saveTimer) {
      clearTimeout(this.saveTimer);
      this.saveTimer = 0;
    }
    this.isOpen = false;
    this.overlayEl.classList.remove('is-open');
    this.overlayEl.setAttribute('hidden', '');
    this.overlayEl.innerHTML = '';
    if (this.currentTrigger && !options.skipRestoreFocus) {
      try { this.currentTrigger.focus({ preventScroll: true }); } catch {}
    }
    if (this.currentTrigger) this.currentTrigger.classList.remove('is-active');
    this.currentTrigger = null;
    this.currentContext = null;
  }
};

function ensurePlaylistModeButton() {
  const actions = document.querySelector('.command-actions');
  if (!actions || actions.querySelector('#playlist-mode-btn')) return;

  const btn = document.createElement('button');
  btn.className = 'plain-btn';
  btn.id = 'playlist-mode-btn';
  btn.type = 'button';
  btn.innerHTML = `<span class="plm-icon">${PLM_ICON_SVG}</span> ${escapeHtml(tOr('playlist', 'Playlist'))}`;
  btn.setAttribute('title', tOr('playlistMode', 'Playlist Mode'));

  const refreshNode = actions.querySelector('#refresh-btn');
  if (refreshNode && refreshNode.parentNode === actions) {
    actions.insertBefore(btn, refreshNode);
  } else {
    actions.appendChild(btn);
  }

  btn.addEventListener('click', () => {
    if (playlistController.isOpen) {
      playlistController.close();
    } else {
      playlistController.open();
    }
  });
}

// Initialize playlist mode button when page boots
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensurePlaylistModeButton);
  } else {
    ensurePlaylistModeButton();
  }
}

window.addEventListener('resize', () => {
  queueHeroWallResize();
  refreshActiveAppleEpisodeShellLayout();
});
window.addEventListener('scroll', () => {
  setTopButtonVisibility();
  maybeLoadMoreAggregateRows();
});

let pageBooted = false;

function bootPage() {
  if (pageBooted) return;
  pageBooted = true;

  try {
    applyThemeMode(currentThemeMode, { persist: false });
    ensureThemeToggleButton();
  } catch (error) {
    console.warn('Theme setup failed:', error);
  }

  try { loadYouTubeIframeApi().catch(() => {}); } catch (error) { console.warn('YouTube IFrame API prewarm failed:', error); }

  try {
    if (chartContainer && platformSelect) {
      chartContainer.setAttribute('data-platform', platformSelect.value);
    }
  } catch (error) {
    console.warn('Platform attribute setup failed:', error);
  }

  try { ensureHeroWallStage(); ensureRuntimeEffectsStyles(); } catch (error) { console.warn('Hero wall/effects setup failed:', error); }
  try { ensureMyPodcastsEntryButton(); } catch (error) { console.warn('My Podcasts entry init failed:', error); }
  try { loadFavoriteStorageMap(); loadFavoriteRankState(); } catch (error) { console.warn('Favorite state init failed:', error); }
  try { ensureHistoryControls(); } catch (error) { console.warn('History controls setup failed:', error); }
  try { prunePlatformOptionsForPage(); } catch (error) { console.warn('Platform pruning failed:', error); }
  try { openChartsDb().catch((error) => console.warn('IndexedDB init failed:', error)); } catch (error) { console.warn('IndexedDB init start failed:', error); }
  try { registerPwaServiceWorker(); } catch (error) { console.warn('Service worker init failed:', error); }
  try { setupInstallPrompt(); } catch (error) { console.warn('Install prompt init failed:', error); }
  try { restoreFromQuery(); } catch (error) { console.warn('Query restore failed:', error); }
  try { applyPlatformConstraints(); } catch (error) { console.warn('Platform constraints failed:', error); }
  try { visibleLimit = getDefaultVisibleLimitForSelection(); updateLimitButtons(); } catch (error) { console.warn('Visible limit init failed:', error); }
  try { prewarmPlatformAppIcons(); } catch (error) { console.warn('Platform icon prewarm failed:', error); }
  try {
    const cmdBar = document.querySelector('.command-bar');
    if (cmdBar && typeof IntersectionObserver !== 'undefined') {
      let sentinel = document.getElementById('cmd-bar-sentinel');
      if (!sentinel) {
        sentinel = document.createElement('div');
        sentinel.id = 'cmd-bar-sentinel';
        // Command bar is sticky at top: 10px. We want to know when it hits that sticking point.
        cmdBar.parentNode.insertBefore(sentinel, cmdBar);
      }
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            cmdBar.classList.add('is-stuck');
          } else {
            cmdBar.classList.remove('is-stuck');
          }
        });
      }, { root: null, rootMargin: '-11px 0px 0px 0px', threshold: [1] });
      obs.observe(sentinel);
    }
  } catch (error) { console.warn('Sticky observer failed:', error); }
  try {
    if (shouldWarmupXimalayaSdk()) {
      warmupXimalayaSdk().catch((error) => console.warn('Ximalaya SDK warmup failed:', error));
    }
  } catch (error) {
    console.warn('Ximalaya SDK warmup start failed:', error);
  }
  try { updateCountrySeo(); } catch (error) { console.warn('SEO update failed:', error); }
  try { initLanguageSwitcher(); } catch (error) { console.warn('Language switcher init failed:', error); }

  try {
    localizeUiBundle().catch((error) => console.warn('UI localization failed:', error));
  } catch (error) {
    console.warn('UI localization start failed:', error);
  }

  setStatus('ready');
  setTopButtonVisibility();

  Promise.resolve(fetchPodcastsData()).catch((error) => {
    console.error('Initial fetch failed:', error);
    setStatus('retry');
    showToast(t('loadFailedRefresh'));
  });
}

window.addEventListener('load', bootPage, { once: true });
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (!pageBooted) bootPage();
  }, 0);
}, { once: true });
setTimeout(() => {
  if (!pageBooted) bootPage();
}, 1200);


/* iTunes Apple podcast backfill: post-render, rate-limited, exact-title only */
const ITUNES_SEARCH_BATCH_SIZE = 2;
const ITUNES_SEARCH_BATCH_DELAY_MS = 2600;
const ITUNES_SEARCH_START_DELAY_MS = 200;
const ITUNES_SEARCH_TIMEOUT_MS = 8000;
const ITUNES_SEARCH_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const ITUNES_SEARCH_MAX_RETRIES = 3;
const ITUNES_SEARCH_RETRY_BASE_DELAY_MS = 3200;

let itunesBackfillRunId = 0;
let itunesBackfillWrapped = false;
let itunesPreRenderWrapped = false;
let itunesBackfillStartTimer = 0;

const itunesBackfillCache = new Map();
const itunesDeferredPatchMap = new Map();
const IDB_META_KEY_ITUNES_BACKFILL_PREFIX = 'itunes_backfill_v1::';

function normalizeItunesPodcastTitleKey(title) {
  return normalizeCrossPlatformKeyPart(title);
}

function readCountryCodeForItunesBackfill() {
  return normalizeCountry(countrySelect && countrySelect.value ? countrySelect.value : 'us');
}

function shouldApplyItunesAppleBackfillForSelection(
  platform = (platformSelect ? platformSelect.value : ''),
  type = (typeSelect ? typeSelect.value : ''),
  scope = currentScopeValue()
) {
  const safeScope = String(scope || '').trim().toLowerCase();
  const safePlatform = String(platform || '').trim().toLowerCase();
  const safeType = String(type || '').trim().toLowerCase();

  if (safeScope === 'history' || safeScope === MY_PODCASTS_SCOPE_VALUE) return false;
  if (isLanguageScopeMode(safeScope) || safePlatform === 'all') return false;
  if (!shouldApplyDataBackfill(safePlatform, safeType)) return false;

  return true;
}

function hasPlayableAppleBackfill(item) {
  if (!item || typeof item !== 'object') return false;
  const embedUrl = String(item.embedUrl || '').trim();
  const embedPlatform = String(item.embedPlatform || '').trim().toLowerCase();
  return !!(embedUrl && embedPlatform);
}

function isEligibleForItunesAppleBackfill(item) {
  if (!item || typeof item !== 'object') return false;
  const title = String(item.title || '').trim();
  if (!title) return false;
  if (hasPlayableAppleBackfill(item)) return false;
  return true;
}

function localizeApplePodcastUrl(url, countryCode) {
  const raw = String(url || '').trim();
  const country = normalizeCountry(countryCode || 'us');
  if (!raw) return '';
  try {
    const parsed = new URL(raw);
    if (!/podcasts\.apple\.com$/i.test(parsed.hostname)) return raw;
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts.length >= 2) {
      parts[0] = country;
      parsed.pathname = '/' + parts.join('/');
    }
    parsed.search = '';
    parsed.hash = '';
    return parsed.toString();
  } catch {
    return raw
      .replace(/https:\/\/podcasts\.apple\.com\/[a-z]{2}\//i, 'https://podcasts.apple.com/' + country + '/')
      .replace(/[?#].*$/, '');
  }
}

function buildAppleEmbedUrlFromPodcastPage(url, countryCode) {
  const localized = localizeApplePodcastUrl(url, countryCode);
  if (!localized) return '';
  return localized.replace('://podcasts.apple.com/', '://embed.podcasts.apple.com/');
}

function buildItunesBackfillCacheKey(title, countryCode) {
  const normalizedTitle = normalizeItunesPodcastTitleKey(title);
  const country = normalizeCountry(countryCode || 'us');
  if (!normalizedTitle) return '';
  return country + '::' + normalizedTitle;
}

async function readPersistedItunesBackfillCache(cacheKey) {
  const safeKey = String(cacheKey || '').trim();
  if (!safeKey) return null;
  try {
    const record = await idbGet(IDB_META_STORE, IDB_META_KEY_ITUNES_BACKFILL_PREFIX + safeKey);
    if (!record || typeof record !== 'object') return null;
    const fetchedAt = Number(record.fetchedAt || record.updatedAt || 0) || 0;
    const value = record.value && typeof record.value === 'object' ? record.value : null;
    if (!fetchedAt || !value) return null;
    return { fetchedAt, value };
  } catch (error) {
    console.warn('iTunes backfill cache read failed:', safeKey, error);
    return null;
  }
}

async function persistItunesBackfillCache(cacheKey, value, fetchedAt = Date.now()) {
  const safeKey = String(cacheKey || '').trim();
  if (!safeKey || !value || typeof value !== 'object') return;
  try {
    await idbPut(IDB_META_STORE, {
      key: IDB_META_KEY_ITUNES_BACKFILL_PREFIX + safeKey,
      fetchedAt: Number(fetchedAt) || Date.now(),
      updatedAt: Number(fetchedAt) || Date.now(),
      value
    });
  } catch (error) {
    console.warn('iTunes backfill cache write failed:', safeKey, error);
  }
}

async function getCachedItunesBackfillMatch(title, countryCode) {
  const cacheKey = buildItunesBackfillCacheKey(title, countryCode);
  if (!cacheKey) return null;

  const now = Date.now();
  const mem = itunesBackfillCache.get(cacheKey);
  if (mem && mem.value && (now - Number(mem.fetchedAt || 0) < ITUNES_SEARCH_CACHE_TTL_MS)) {
    return mem.value;
  }

  const persisted = await readPersistedItunesBackfillCache(cacheKey);
  if (persisted && persisted.value && (now - Number(persisted.fetchedAt || 0) < ITUNES_SEARCH_CACHE_TTL_MS)) {
    itunesBackfillCache.set(cacheKey, persisted);
    return persisted.value;
  }

  return null;
}

function applyItunesBackfillMatchToItem(item, match) {
  if (!item || !match) return false;

  const nextEmbedUrl = String(match.embedUrl || '').trim();
  if (!nextEmbedUrl) return false;
  if (String(item.embedUrl || '').trim()) return false;

  item.embedUrl = nextEmbedUrl;
  item.embedPlatform = 'apple';
  item.embedKind = 'top-podcasts';

  if (!String(item.feedUrl || '').trim() && String(match.feedUrl || '').trim()) {
    item.feedUrl = String(match.feedUrl || '').trim();
  }

  return true;
}

async function applyCachedItunesBackfillToItems(items, countryCode) {
  const safeItems = Array.isArray(items) ? items : [];
  if (!safeItems.length) return { changed: false, misses: [], changedItems: [] };

  const pending = safeItems.filter(isEligibleForItunesAppleBackfill);
  if (!pending.length) return { changed: false, misses: [], changedItems: [] };

  const lookups = await Promise.all(
    pending.map(async (item) => {
      const title = String((item && item.title) || '').trim();
      const match = await getCachedItunesBackfillMatch(title, countryCode);
      return { item, match };
    })
  );

  let changed = false;
  const misses = [];
  const changedItems = [];

  lookups.forEach(({ item, match }) => {
    if (match && applyItunesBackfillMatchToItem(item, match)) {
      changed = true;
      changedItems.push(item);
    } else if (item && !hasPlayableAppleBackfill(item)) {
      misses.push(item);
    }
  });

  return { changed, misses, changedItems };
}

async function applyCachedItunesBackfillToTargets(targets, countryCode) {
  const list = Array.isArray(targets)
    ? targets.filter((items, index, arr) => Array.isArray(items) && arr.indexOf(items) === index)
    : [];

  if (!list.length) return { changed: false, changedItems: [] };

  const source = list[0];
  const primary = await applyCachedItunesBackfillToItems(source, countryCode);
  let changed = Boolean(primary.changed);
  const changedItems = Array.isArray(primary.changedItems) ? primary.changedItems.slice() : [];

  for (let i = 1; i < list.length; i += 1) {
    const target = list[i];
    const follow = await applyCachedItunesBackfillToItems(target, countryCode);
    if (follow.changed) changed = true;
  }

  return { changed, changedItems };
}

function fetchItunesSearchPayload(title, countryCode, timeoutMs = ITUNES_SEARCH_TIMEOUT_MS, limit = 5) {
  return new Promise((resolve, reject) => {
    const term = String(title || '').trim();
    if (!term) {
      resolve(null);
      return;
    }

    const callbackName = '__podcastChartsItunesCb_' + Date.now() + '_' + Math.floor(Math.random() * 100000);
    const script = document.createElement('script');
    let settled = false;
    let timer = 0;

    const cleanup = () => {
      if (settled) return;
      settled = true;
      try {
        delete window[callbackName];
      } catch {
        window[callbackName] = undefined;
      }
      if (timer) clearTimeout(timer);
      if (script.parentNode) script.parentNode.removeChild(script);
    };

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload || null);
    };

    timer = window.setTimeout(() => {
      cleanup();
      reject(new Error('iTunes search timeout'));
    }, Math.max(2500, Number(timeoutMs) || ITUNES_SEARCH_TIMEOUT_MS));

    const country = normalizeCountry(countryCode || 'us');
    const safeLimit = Math.max(1, Math.min(25, Number(limit) || 5));
    const url =
      'https://itunes.apple.com/search?media=podcast&entity=podcast&limit=' +
      encodeURIComponent(String(safeLimit)) +
      '&country=' +
      encodeURIComponent(country) +
      '&term=' +
      encodeURIComponent(term) +
      '&callback=' +
      encodeURIComponent(callbackName);

    script.async = true;
    script.src = url;
    script.onerror = () => {
      cleanup();
      reject(new Error('iTunes search network error'));
    };
    document.head.appendChild(script);
  });
}

function normalizeItunesCatalogSearchEntry(entry, countryCode, themePlatform) {
  if (!entry || String(entry.kind || '').trim().toLowerCase() !== 'podcast') return null;
  const country = normalizeCountry(countryCode || 'us');
  const pageUrl = localizeApplePodcastUrl(entry.collectionViewUrl || entry.trackViewUrl || '', country);
  const embedUrl = buildAppleEmbedUrlFromPodcastPage(pageUrl, country);
  if (!pageUrl || !embedUrl) return null;
  const image = normalizeAppleArtworkUrl300(
    entry.artworkUrl600 || entry.artworkUrl100 || entry.artworkUrl60 || ''
  );
  return {
    rank: '-',
    title: String(entry.trackName || entry.collectionName || '').trim(),
    publisher: String(entry.artistName || '').trim() || 'Apple Podcasts',
    image: image || 'podcast-placeholder.webp',
    imageCandidates: image ? [image] : [],
    url: pageUrl,
    feedUrl: String(entry.feedUrl || '').trim(),
    embedUrl,
    embedPlatform: 'apple',
    embedKind: 'top-podcasts',
    sourceType: 'chart',
    originPlatform: String(themePlatform || (platformSelect && platformSelect.value) || 'apple').trim().toLowerCase() || 'apple',
    originCountry: country,
    originType: 'top-podcasts'
  };
}

async function searchApplePodcastsOnItunes(term, countryCode, limit = ITUNES_DISCOVERY_SEARCH_LIMIT) {
  const query = String(term || '').trim();
  if (!query) return [];

  const country = normalizeCountry(countryCode || 'us');
  const safeLimit = Math.max(1, Math.min(25, Number(limit) || ITUNES_DISCOVERY_SEARCH_LIMIT));
  const cacheKey = `${country}::${query.toLowerCase()}::${safeLimit}`;
  const now = Date.now();
  const cached = itunesCatalogSearchCache.get(cacheKey);
  if (cached && Array.isArray(cached.items) && (now - Number(cached.fetchedAt || 0) < ITUNES_SEARCH_CACHE_TTL_MS)) {
    return cached.items.slice();
  }

  let lastError = null;
  for (let attempt = 0; attempt <= ITUNES_SEARCH_MAX_RETRIES; attempt += 1) {
    try {
      const payload = await fetchItunesSearchPayload(query, country, ITUNES_SEARCH_TIMEOUT_MS, safeLimit);
      const results = Array.isArray(payload && payload.results) ? payload.results : [];
      const items = results
        .map((entry) => normalizeItunesCatalogSearchEntry(entry, country, platformSelect ? platformSelect.value : 'apple'))
        .filter((item) => item && item.title)
        .slice(0, safeLimit);
      itunesCatalogSearchCache.set(cacheKey, { fetchedAt: now, items });
      return items;
    } catch (error) {
      lastError = error;
      if (attempt >= ITUNES_SEARCH_MAX_RETRIES) break;
      await sleep(getItunesRetryDelay(attempt, error));
    }
  }

  console.warn('iTunes catalog search failed:', query, lastError);
  throw lastError || new Error('iTunes catalog search failed');
}

function getItunesRetryDelay(attempt, error) {
  const message = String((error && error.message) || '').toLowerCase();
  if (message.includes('403')) return ITUNES_SEARCH_RETRY_BASE_DELAY_MS * 2 * Math.max(1, attempt + 1);
  if (message.includes('429')) return ITUNES_SEARCH_RETRY_BASE_DELAY_MS * 3 * Math.max(1, attempt + 1);
  return ITUNES_SEARCH_RETRY_BASE_DELAY_MS * Math.max(1, attempt + 1);
}

async function searchApplePodcastByExactTitleOnItunes(title, countryCode) {
  const cacheKey = buildItunesBackfillCacheKey(title, countryCode);
  if (!cacheKey) return null;

  const now = Date.now();
  const cached = itunesBackfillCache.get(cacheKey);
  if (cached && cached.value && (now - Number(cached.fetchedAt || 0) < ITUNES_SEARCH_CACHE_TTL_MS)) {
    return cached.value;
  }

  const persisted = await readPersistedItunesBackfillCache(cacheKey);
  if (persisted && persisted.value && (now - Number(persisted.fetchedAt || 0) < ITUNES_SEARCH_CACHE_TTL_MS)) {
    itunesBackfillCache.set(cacheKey, persisted);
    return persisted.value;
  }

  const normalizedTitle = normalizeItunesPodcastTitleKey(title);
  const country = normalizeCountry(countryCode || 'us');
  let lastError = null;

  for (let attempt = 0; attempt <= ITUNES_SEARCH_MAX_RETRIES; attempt += 1) {
    try {
      const payload = await fetchItunesSearchPayload(title, country, ITUNES_SEARCH_TIMEOUT_MS);
      const results = Array.isArray(payload && payload.results) ? payload.results : [];

      const found = results.find((entry) => {
        if (!entry || String(entry.kind || '').trim().toLowerCase() !== 'podcast') return false;
        const trackNameKey = normalizeItunesPodcastTitleKey(entry.trackName || '');
        const collectionNameKey = normalizeItunesPodcastTitleKey(entry.collectionName || '');
        return trackNameKey === normalizedTitle || collectionNameKey === normalizedTitle;
      });

      if (!found) return null;

      const pageUrl = localizeApplePodcastUrl(found.collectionViewUrl || found.trackViewUrl || '', country);
      const embedUrl = buildAppleEmbedUrlFromPodcastPage(pageUrl, country);
      if (!pageUrl || !embedUrl) return null;

      const match = {
        url: pageUrl,
        embedUrl,
        embedPlatform: 'apple',
        embedKind: 'top-podcasts',
        feedUrl: String(found.feedUrl || '').trim(),
        artistName: String(found.artistName || '').trim(),
        artworkUrl100: String(found.artworkUrl100 || found.artworkUrl600 || '').trim(),
        trackId: String(found.trackId || found.collectionId || '').trim()
      };

      const cacheValue = { fetchedAt: now, value: match };
      itunesBackfillCache.set(cacheKey, cacheValue);
      void persistItunesBackfillCache(cacheKey, match, now);
      return match;
    } catch (error) {
      lastError = error;
      if (attempt >= ITUNES_SEARCH_MAX_RETRIES) break;
      await sleep(getItunesRetryDelay(attempt, error));
    }
  }

  console.warn('iTunes exact title search failed:', title, lastError);
  return null;
}

async function runItunesCatalogSearch() {
  ensureItunesSearchAssistUi();
  if (!itunesSearchAssistButtonEl || !itunesSearchAssistResultsEl) return;

  const query = String(searchInput && searchInput.value || '').trim();
  if (!query) {
    resetItunesSearchAssistState();
    updateItunesSearchAssistUi(0);
    return;
  }

  const country = normalizeCountry(countrySelect && countrySelect.value ? countrySelect.value : 'us');
  const signature = getItunesSearchAssistSignature(query, country);
  if (!itunesSearchAssistState.loading && itunesSearchAssistState.signature === signature && Array.isArray(itunesSearchAssistState.items) && itunesSearchAssistState.items.length) {
    renderItunesSearchResults(itunesSearchAssistState.items);
    updateItunesSearchAssistUi(Array.from(chartContainer.querySelectorAll('.chart-row:not(.hidden)')).length);
    return;
  }
  const runId = ++itunesSearchAssistRunId;

  itunesSearchAssistState.signature = signature;
  itunesSearchAssistState.loading = true;
  updateItunesSearchAssistUi(Array.from(chartContainer.querySelectorAll('.chart-row:not(.hidden)')).length);

  try {
    const items = await searchApplePodcastsOnItunes(query, country, ITUNES_DISCOVERY_SEARCH_LIMIT);
    if (runId !== itunesSearchAssistRunId) return;

    const snapshots = await getSnapshotsForCurrentSelection().catch(() => []);
    const searchHistoryMap = buildHistorySeriesMapFromSnapshots(snapshots, items, { includeAllOut: true });
    currentHistorySeriesMap = mergeHistorySeriesMaps(currentHistorySeriesMap, searchHistoryMap);

    itunesSearchAssistState = {
      signature,
      loading: false,
      items: Array.isArray(items) ? items.slice() : []
    };
    renderItunesSearchResults(itunesSearchAssistState.items);
    updateItunesSearchAssistUi(Array.from(chartContainer.querySelectorAll('.chart-row:not(.hidden)')).length);
  } catch (error) {
    if (runId !== itunesSearchAssistRunId) return;
    console.warn('iTunes catalog search UI failed:', error);
    itunesSearchAssistState = { signature, loading: false, items: [] };
    renderItunesSearchResults([]);
    updateItunesSearchAssistUi(Array.from(chartContainer.querySelectorAll('.chart-row:not(.hidden)')).length);
    showToast(t('loadFailedRefresh'));
  }
}

function getItunesPatchedPlayButtonMarkup(item) {
  const embedUrlRaw = escapeHtml(String(item && item.embedUrl || '').trim());
  const embedPlatformRaw = escapeHtml(String(item && item.embedPlatform || '').trim().toLowerCase());
  const embedKindRaw = escapeHtml(String(item && item.embedKind || 'top-podcasts').trim().toLowerCase());
  const playLabel = escapeHtml(getPlayEpisodeActionLabel());
  const playSvg = getEpisodePlaySvg();
  return `<button class="play-link" type="button" data-embed-url="${embedUrlRaw}" data-embed-platform="${embedPlatformRaw}" data-embed-kind="${embedKindRaw}" aria-label="${playLabel}" title="${playLabel}" aria-pressed="false">${playSvg}</button>`;
}

function updateRowFavoriteEmbedDataset(row, item) {
  const favBtn = row ? row.querySelector('.favorite-link') : null;
  if (!favBtn || !item) return;
  favBtn.setAttribute('data-favorite-embed-url', String(item.embedUrl || '').trim());
  favBtn.setAttribute('data-favorite-embed-platform', String(item.embedPlatform || '').trim().toLowerCase());
  favBtn.setAttribute('data-favorite-embed-kind', String(item.embedKind || 'top-podcasts').trim().toLowerCase());
  if (!String(favBtn.getAttribute('data-favorite-feed') || '').trim() && String(item.feedUrl || '').trim()) {
    favBtn.setAttribute('data-favorite-feed', String(item.feedUrl || '').trim());
  }
}

function findChartRowsForItunesBackfillTitle(title) {
  const titleKey = normalizeItunesPodcastTitleKey(title);
  if (!titleKey || !chartContainer) return [];

  return Array.from(chartContainer.querySelectorAll('.chart-row')).filter((row) => {
    const buttonTitle = row.querySelector('.favorite-link')?.getAttribute('data-favorite-title') || '';
    const copyTitle = row.querySelector('.title-copy-target')?.getAttribute('data-copy-title') || '';
    const textTitle = row.querySelector('.title')?.textContent || '';
    const rowTitle = buttonTitle || copyTitle || textTitle || '';
    return normalizeItunesPodcastTitleKey(rowTitle) === titleKey;
  });
}

function ensureRowPlayButtonPatched(row, item) {
  if (!row || !item) return false;

  const embedUrl = String(item.embedUrl || '').trim();
  const embedPlatform = String(item.embedPlatform || '').trim().toLowerCase();
  const embedKind = String(item.embedKind || 'top-podcasts').trim().toLowerCase();
  if (!embedUrl || !embedPlatform) return false;

  const rowActions = row.querySelector('.row-actions');
  if (!rowActions) return false;

  let playBtn = row.querySelector('.play-link');
  if (!playBtn) {
    const historyBtn = rowActions.querySelector('.history-link');
    const openLink = rowActions.querySelector('.open-link');
    const wrapper = document.createElement('div');
    wrapper.innerHTML = getItunesPatchedPlayButtonMarkup(item);
    playBtn = wrapper.firstElementChild;
    if (!playBtn) return false;
    const anchor = historyBtn || openLink || null;
    if (anchor) {
      rowActions.insertBefore(playBtn, anchor);
    } else {
      rowActions.appendChild(playBtn);
    }
  }

  const playLabel = String(getPlayEpisodeActionLabel() || '').trim() || 'Play';
  playBtn.setAttribute('data-embed-url', embedUrl);
  playBtn.setAttribute('data-embed-platform', embedPlatform);
  playBtn.setAttribute('data-embed-kind', embedKind);
  playBtn.setAttribute('aria-label', playLabel);
  playBtn.setAttribute('title', playLabel);
  if (!row.classList.contains('player-open')) {
    playBtn.setAttribute('aria-pressed', 'false');
    playBtn.classList.remove('is-active');
  }
  playBtn.disabled = false;
  playBtn.removeAttribute('hidden');
  playBtn.removeAttribute('aria-disabled');
  playBtn.style.display = '';

  updateRowFavoriteEmbedDataset(row, item);
  return true;
}

function patchVisibleRowsForItunesBackfillItem(item) {
  if (!item) return 0;
  const rows = findChartRowsForItunesBackfillTitle(item.title);
  let patched = 0;
  rows.forEach((row) => {
    if (ensureRowPlayButtonPatched(row, item)) patched += 1;
  });
  return patched;
}

function patchVisibleRowsForItunesBackfillItems(items) {
  const list = Array.isArray(items) ? items : [];
  list.forEach((item) => {
    patchVisibleRowsForItunesBackfillItem(item);
  });
}

function addDeferredItunesPatchItems(items) {
  const list = Array.isArray(items) ? items : [];
  list.forEach((item) => {
    if (!item) return;
    const key = normalizeItunesPodcastTitleKey(item.title);
    if (!key) return;
    itunesDeferredPatchMap.set(key, item);
  });
}

function flushDeferredItunesPatchItems() {
  if (!itunesDeferredPatchMap.size) return;
  if (hasActiveItunesSensitivePlayerOpen()) return;
  const items = Array.from(itunesDeferredPatchMap.values());
  itunesDeferredPatchMap.clear();
  patchVisibleRowsForItunesBackfillItems(items);
}

function clearPendingItunesBackfillStartTimer() {
  if (itunesBackfillStartTimer) {
    clearTimeout(itunesBackfillStartTimer);
    itunesBackfillStartTimer = 0;
  }
}

async function applyCachedItunesBackfillImmediately(items, runMeta = null) {
  const safeItems = Array.isArray(items) ? items : [];
  if (!safeItems.length) return;

  const currentPlatform = platformSelect ? platformSelect.value : '';
  const currentType = typeSelect ? typeSelect.value : '';
  const currentScope = currentScopeValue();
  if (!shouldApplyItunesAppleBackfillForSelection(currentPlatform, currentType, currentScope)) {
    return;
  }

  if (runMeta) {
    const latestPlatform = String((platformSelect && platformSelect.value) || '').trim().toLowerCase();
    const latestType = String((typeSelect && typeSelect.value) || '').trim().toLowerCase();
    const latestScope = currentScopeValue();
    if (latestPlatform !== runMeta.platform || latestType !== runMeta.type || latestScope !== runMeta.scope) {
      return;
    }
  }

  const country = readCountryCodeForItunesBackfill();
  const { changed, changedItems } = await applyCachedItunesBackfillToItems(safeItems, country);
  if (!changed || !Array.isArray(changedItems) || !changedItems.length) return;

  if (hasActiveItunesSensitivePlayerOpen()) {
    addDeferredItunesPatchItems(changedItems);
  } else {
    patchVisibleRowsForItunesBackfillItems(changedItems);
  }
}

async function backfillMissingApplePlaybackFromItunes(items, runMeta = null) {
  const safeItems = Array.isArray(items) ? items : [];
  if (!safeItems.length) return;

  const currentPlatform = platformSelect ? platformSelect.value : '';
  const currentType = typeSelect ? typeSelect.value : '';
  const currentScope = currentScopeValue();

  if (!shouldApplyItunesAppleBackfillForSelection(currentPlatform, currentType, currentScope)) {
    return;
  }

  const runId = ++itunesBackfillRunId;
  const country = readCountryCodeForItunesBackfill();
  const runCountry = country;

  if (runMeta) {
    const latestPlatform = String((platformSelect && platformSelect.value) || '').trim().toLowerCase();
    const latestType = String((typeSelect && typeSelect.value) || '').trim().toLowerCase();
    const latestScope = currentScopeValue();
    if (latestPlatform !== runMeta.platform || latestType !== runMeta.type || latestScope !== runMeta.scope) {
      return;
    }
  }

  const pending = safeItems.filter(isEligibleForItunesAppleBackfill);
  if (!pending.length) return;

  for (let start = 0; start < pending.length; start += ITUNES_SEARCH_BATCH_SIZE) {
    if (runId !== itunesBackfillRunId) return;

    if (runCountry !== readCountryCodeForItunesBackfill()) {
      itunesBackfillRunId += 1;
      return;
    }

    if (runMeta) {
      const latestPlatform = String((platformSelect && platformSelect.value) || '').trim().toLowerCase();
      const latestType = String((typeSelect && typeSelect.value) || '').trim().toLowerCase();
      const latestScope = currentScopeValue();
      if (latestPlatform !== runMeta.platform || latestType !== runMeta.type || latestScope !== runMeta.scope) {
        itunesBackfillRunId += 1;
        return;
      }
    }

    const batch = pending.slice(start, start + ITUNES_SEARCH_BATCH_SIZE).filter((item) => {
      return item && !hasPlayableAppleBackfill(item) && String(item.title || '').trim();
    });

    if (!batch.length) continue;

    const results = await Promise.all(batch.map(async (item) => {
      const title = String((item && item.title) || '').trim();
      if (!title || hasPlayableAppleBackfill(item)) return null;
      const match = await searchApplePodcastByExactTitleOnItunes(title, country);
      if (match && applyItunesBackfillMatchToItem(item, match)) {
        return item;
      }
      return null;
    }));

    if (runId !== itunesBackfillRunId) return;

    if (runCountry !== readCountryCodeForItunesBackfill()) {
      itunesBackfillRunId += 1;
      return;
    }

    const changedItems = results.filter(Boolean);
    if (changedItems.length) {
      if (hasActiveItunesSensitivePlayerOpen()) {
        addDeferredItunesPatchItems(changedItems);
      } else {
        patchVisibleRowsForItunesBackfillItems(changedItems);
      }
    }

    if (start + ITUNES_SEARCH_BATCH_SIZE < pending.length) {
      await sleep(ITUNES_SEARCH_BATCH_DELAY_MS);
    }
  }
}

function hasActiveItunesSensitivePlayerOpen() {
  return !!document.querySelector('.episode-player-wrap:not([hidden]), .history-panel-wrap:not([hidden])');
}

(function installItunesPreRenderBackfillWrapper() {
  if (itunesPreRenderWrapped) return;
  if (typeof enrichItemsFromLocalCacheWithBackfill !== 'function') return;

  const originalEnrich = enrichItemsFromLocalCacheWithBackfill;

  enrichItemsFromLocalCacheWithBackfill = async function wrappedEnrichItemsFromLocalCacheWithBackfill() {
    const result = await originalEnrich.apply(this, arguments);

    const resultItems = Array.isArray(result) ? result : [];
    const argItems = Array.isArray(arguments[0]) ? arguments[0] : [];
    const items = resultItems.length ? resultItems : argItems;
    const targets = [];
    if (resultItems.length) targets.push(resultItems);
    if (argItems.length && argItems !== resultItems) targets.push(argItems);

    const platformArg = arguments.length > 1 ? arguments[1] : (platformSelect ? platformSelect.value : '');
    const countryArg = arguments.length > 2 ? arguments[2] : readCountryCodeForItunesBackfill();
    const typeArg = arguments.length > 3 ? arguments[3] : (typeSelect ? typeSelect.value : 'top-podcasts');
    const scope = currentScopeValue();

    if (!shouldApplyItunesAppleBackfillForSelection(platformArg, typeArg, scope)) {
      return result;
    }

    try {
      await applyCachedItunesBackfillToTargets(targets.length ? targets : [items], countryArg);
    } catch (error) {
      console.warn('Pre-render iTunes cached backfill failed:', error);
    }

    return result;
  };

  if (typeof window !== 'undefined') {
    window.enrichItemsFromLocalCacheWithBackfill = enrichItemsFromLocalCacheWithBackfill;
  }

  itunesPreRenderWrapped = true;
})();

(function installItunesAppleBackfillWrapper() {
  if (itunesBackfillWrapped) return;
  if (typeof renderNormalizedItems !== 'function') return;

  const originalRenderNormalizedItems = renderNormalizedItems;
  const originalCloseEpisodePlayerRow = typeof closeEpisodePlayerRow === 'function' ? closeEpisodePlayerRow : null;

  if (originalCloseEpisodePlayerRow) {
    closeEpisodePlayerRow = function wrappedCloseEpisodePlayerRow() {
      const result = originalCloseEpisodePlayerRow.apply(this, arguments);
      Promise.resolve().then(() => {
        flushDeferredItunesPatchItems();
      });
      return result;
    };

    if (typeof window !== 'undefined') {
      window.closeEpisodePlayerRow = closeEpisodePlayerRow;
    }
  }

  const wrappedRenderNormalizedItems = function wrappedRenderNormalizedItems() {
    const result = originalRenderNormalizedItems.apply(this, arguments);

    clearPendingItunesBackfillStartTimer();

    const items = arguments && arguments.length ? arguments[0] : null;
    const runMeta = {
      platform: String((platformSelect && platformSelect.value) || '').trim().toLowerCase(),
      type: String((typeSelect && typeSelect.value) || '').trim().toLowerCase(),
      scope: currentScopeValue()
    };

    if (!shouldApplyItunesAppleBackfillForSelection(runMeta.platform, runMeta.type, runMeta.scope)) {
      return result;
    }

    Promise.resolve()
      .then(() => applyCachedItunesBackfillImmediately(items, runMeta))
      .catch((error) => {
        console.warn('Immediate cached iTunes backfill failed:', error);
      });

    itunesBackfillStartTimer = window.setTimeout(() => {
      itunesBackfillStartTimer = 0;
      Promise.resolve()
        .then(() => backfillMissingApplePlaybackFromItunes(items, runMeta))
        .catch((error) => {
          console.warn('Deferred iTunes Apple backfill failed:', error);
        });
    }, ITUNES_SEARCH_START_DELAY_MS);

    return result;
  };

  wrappedRenderNormalizedItems.__itunesBackfillWrapped = true;
  renderNormalizedItems = wrappedRenderNormalizedItems;

  if (typeof window !== 'undefined') {
    window.renderNormalizedItems = wrappedRenderNormalizedItems;
  }

  itunesBackfillWrapped = true;
})();
