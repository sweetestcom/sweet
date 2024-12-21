const LANGUAGE_CONFIG = {
    'en': {
        prompt: "You are a professional English speaking tutor. Help users correct their grammar and pronunciation. When users speak English, you'll identify what they said, point out pronunciation issues and grammatical errors, and guide them step by step to correct their pronunciation. When pronunciation is correct, suggest a new sentence based on the current context, continuing this process until the user says 'OK, Stop'. Please respond in English. If you understand, please reply with 'OK'.",
        ui: {
            title: "AI Language Tutor",
            apiKeyPlaceholder: "Enter your Gemini API Key",
            startPrompt: "🎤 Say something in English! e.g., What is Artificial Intelligence?",
            recording: "🎤 Recording...",
            processing: "♻️ Processing...",
            pause: "Pause Session",
            continue: "Continue Session",
            stop: "End Session",
            export: "Export",
            confirmStop: "Are you sure you want to end this session?",
            ended: "Session ended",
            aiReply: "✨ AI Reply:",
            userSaid: "🎤 You said:"
        }
    },
    'ar': {
        prompt: "أنت مدرس لغة إنجليزية محترف. ساعد المستخدمين في تحسين قواعدهم اللغوية ونطقهم. عندما يتحدث المستخدمون باللغة الإنجليزية، ستحدد ما قالوه، وتشير إلى مشاكل النطق وأخطاء القواعد، وترشدهم خطوة بخطوة لتحسين نطقهم. عندما يكون النطق صحيحاً، اقترح جملة جديدة بناءً على السياق الحالي، واستمر في هذه العملية حتى يقول المستخدم 'OK, Stop'. الرجاء الرد باللغة العربية. إذا فهمت، الرجاء الرد بـ 'OK'.",
        ui: {
            title: "معلم اللغة بالذكاء الاصطناعي",
            apiKeyPlaceholder: "أدخل مفتاح Gemini API الخاص بك",
            startPrompt: "🎤 قل أي شيء بالإنجليزية! مثال: What is Artificial Intelligence?",
            recording: "🎤 جاري التسجيل...",
            processing: "♻️ جاري المعالجة...",
            pause: "إيقاف مؤقت",
            continue: "استمرار",
            stop: "إيقاف",
            export: "تصدير",
            confirmStop: "هل أنت متأكد أنك تريد إنهاء هذه الجلسة؟",
            ended: "انتهت الجلسة",
            aiReply: "✨ رد الذكاء الاصطناعي:",
            userSaid: "🎤 قلت:"
        }
    },
    'bn': {
        prompt: "আপনি একজন পেশাদার ইংরেজি ভাষার শিক্ষক। ব্যবহারকারীদের ব্যাকরণ এবং উচ্চারণ উন্নত করতে সাহায্য করুন। যখন ব্যবহারকারীরা ইংরেজিতে কথা বলে, আপনি তারা কী বলেছে তা চিহ্নিত করবেন, উচ্চারণ সমস্যা এবং ব্যাকরণগত ভুল দেখাবেন, এবং তাদের উচ্চারণ উন্নত করতে ধাপে ধাপে গাইড করবেন। যখন উচ্চারণ সঠিক হয়, বর্তমান প্রসঙ্গের উপর ভিত্তি করে একটি নতুন বাক্য প্রস্তাব করুন, ব্যবহারকারী 'OK, Stop' না বলা পর্যন্ত এই প্রক্রিয়া চালিয়ে যান। অনুগ্রহ করে বাংলায় উত্তর দিন। আপনি যদি বুঝতে পেরে থাকেন, তবে অনুগ্রহ করে 'OK' দিয়ে উত্তর দিন।",
        ui: {
            title: "AI ভাষা শিক্ষক",
            apiKeyPlaceholder: "আপনার Gemini API কী লিখুন",
            startPrompt: "🎤 ইংরেজিতে কিছু বলুন! উদাহরণ: What is Artificial Intelligence?",
            recording: "🎤 রেকর্ড করা হচ্ছে...",
            processing: "♻️ প্রক্রিয়াকরণ করা হচ্ছে...",
            pause: "বিরতি",
            continue: "চালিয়ে যান",
            stop: "থামুন",
            export: "রপ্তানি",
            confirmStop: "আপনি কি নিশ্চিত যে আপনি এই সেশন শেষ করতে চান?",
            ended: "সেশন শেষ হয়েছে",
            aiReply: "✨ AI এর উত্তর:",
            userSaid: "🎤 আপনি বলেছেন:"
        }
    },
    'bg': {
        prompt: "Вие сте професионален учител по английски език. Помогнете на потребителите да подобрят граматиката и произношението си. Когато потребителите говорят на английски, ще идентифицирате какво са казали, ще посочите проблеми с произношението и граматически грешки, и ще ги напътствате стъпка по стъпка за подобряване на произношението им. Когато произношението е правилно, предложете ново изречение въз основа на текущия контекст, продължете този процес докато потребителят каже 'OK, Stop'. Моля, отговорете на български. Ако разбирате, моля отговорете с 'OK'.",
        ui: {
            title: "AI Езиков Учител",
            apiKeyPlaceholder: "Въведете вашия Gemini API ключ",
            startPrompt: "🎤 Кажете нещо на английски! Пример: What is Artificial Intelligence?",
            recording: "🎤 Записва се...",
            processing: "♻️ Обработва се...",
            pause: "Пауза",
            continue: "Продължи",
            stop: "Спри",
            export: "Експорт",
            confirmStop: "Сигурни ли сте, че искате да прекратите тази сесия?",
            ended: "Сесията приключи",
            aiReply: "✨ AI отговор:",
            userSaid: "🎤 Вие казахте:"
        }
    },
    'hr': {
        prompt: "Vi ste profesionalni tutor engleskog jezika. Pomozite korisnicima ispraviti gramatiku i izgovor. Kada korisnici govore engleski, identificirat ćete što su rekli, ukazati na probleme s izgovorom i gramatičke pogreške te ih korak po korak voditi do ispravnog izgovora. Kada je izgovor točan, predložite novu rečenicu temeljenu na trenutnom kontekstu, nastavljajući ovaj proces dok korisnik ne kaže 'OK, Stop'. Molimo odgovarajte na hrvatskom. Ako razumijete, molimo odgovorite s 'OK'.",
        ui: {
            title: "AI Jezični Asistent",
            apiKeyPlaceholder: "Unesite vaš Gemini API ključ",
            startPrompt: "🎤 Recite nešto na engleskom! Npr: What is Artificial Intelligence?",
            recording: "🎤 Snimanje...",
            processing: "♻️ Obrada...",
            pause: "Pauziraj sesiju",
            continue: "Nastavi sesiju",
            stop: "Završi sesiju",
            export: "Izvoz",
            confirmStop: "Jeste li sigurni da želite završiti ovu sesiju?",
            ended: "Sesija završena",
            aiReply: "✨ AI odgovor:",
            userSaid: "🎤 Vi ste rekli:"
        }
    },
    'cs': {
        prompt: "Jste profesionální učitel anglického jazyka. Pomáhejte uživatelům opravovat jejich gramatiku a výslovnost. Když uživatelé mluví anglicky, identifikujete, co řekli, poukážete na problémy s výslovností a gramatické chyby a povedete je krok za krokem ke správné výslovnosti. Když je výslovnost správná, navrhněte novou větu založenou na aktuálním kontextu a pokračujte v tomto procesu, dokud uživatel neřekne 'OK, Stop'. Prosím odpovídejte v češtině. Pokud rozumíte, odpovězte prosím 'OK'.",
        ui: {
            title: "AI Jazykový Asistent",
            apiKeyPlaceholder: "Zadejte váš Gemini API klíč",
            startPrompt: "🎤 Řekněte něco anglicky! Např.: What is Artificial Intelligence?",
            recording: "🎤 Nahrávání...",
            processing: "♻️ Zpracování...",
            pause: "Pozastavit relaci",
            continue: "Pokračovat v relaci",
            stop: "Ukončit relaci",
            export: "Export",
            confirmStop: "Opravdu chcete ukončit tuto relaci?",
            ended: "Relace ukončena",
            aiReply: "✨ AI odpověď:",
            userSaid: "🎤 Řekli jste:"
        }
    },
    'da': {
        prompt: "Du er en professionel engelsklærer. Hjælp brugere med at rette deres grammatik og udtale. Når brugere taler engelsk, skal du identificere, hvad de sagde, påpege udtalelsesproblemer og grammatiske fejl og guide dem trin for trin til at rette deres udtale. Når udtalen er korrekt, foreslå en ny sætning baseret på den aktuelle kontekst og fortsæt denne proces, indtil brugeren siger 'OK, Stop'. Svar venligst på dansk. Hvis du forstår, svar venligst med 'OK'.",
        ui: {
            title: "AI Sprogassistent",
            apiKeyPlaceholder: "Indtast din Gemini API-nøgle",
            startPrompt: "🎤 Sig noget på engelsk! F.eks.: What is Artificial Intelligence?",
            recording: "🎤 Optager...",
            processing: "♻️ Behandler...",
            pause: "Pause session",
            continue: "Fortsæt session",
            stop: "Afslut session",
            export: "Eksporter",
            confirmStop: "Er du sikker på, at du vil afslutte denne session?",
            ended: "Session afsluttet",
            aiReply: "✨ AI-svar:",
            userSaid: "🎤 Du sagde:"
        }
    },
    'nl': {
        prompt: "U bent een professionele Engelse taalleraar. Help gebruikers hun grammatica en uitspraak te verbeteren. Wanneer gebruikers Engels spreken, identificeert u wat ze zeiden, wijst u op uitspraakproblemen en grammaticale fouten, en begeleidt u hen stap voor stap bij het verbeteren van hun uitspraak. Wanneer de uitspraak correct is, stel dan een nieuwe zin voor op basis van de huidige context en ga door met dit proces totdat de gebruiker 'OK, Stop' zegt. Antwoord alstublieft in het Nederlands. Als u het begrijpt, antwoord dan met 'OK'.",
        ui: {
            title: "AI Taalassistent",
            apiKeyPlaceholder: "Voer uw Gemini API-sleutel in",
            startPrompt: "🎤 Zeg iets in het Engels! Bijv.: What is Artificial Intelligence?",
            recording: "🎤 Opname...",
            processing: "♻️ Verwerking...",
            pause: "Sessie pauzeren",
            continue: "Sessie voortzetten",
            stop: "Sessie beëindigen",
            export: "Exporteren",
            confirmStop: "Weet u zeker dat u deze sessie wilt beëindigen?",
            ended: "Sessie beëindigd",
            aiReply: "✨ AI-antwoord:",
            userSaid: "🎤 U zei:"
        }
    },
    'et': {
        prompt: "Te olete professionaalne inglise keele õpetaja. Aidake kasutajatel parandada nende grammatikat ja hääldust. Kui kasutajad räägivad inglise keelt, tuvastate, mida nad ütlesid, osutate hääldusprobleemidele ja grammatikavigadele ning juhendate neid samm-sammult õige häälduse suunas. Kui hääldus on õige, pakkuge välja uus lause praeguse konteksti põhjal ja jätkake seda protsessi, kuni kasutaja ütleb 'OK, Stop'. Palun vastake eesti keeles. Kui saite aru, vastake palun 'OK'.",
        ui: {
            title: "AI Keeleabi",
            apiKeyPlaceholder: "Sisestage oma Gemini API võti",
            startPrompt: "🎤 Öelge midagi inglise keeles! Nt: What is Artificial Intelligence?",
            recording: "🎤 Salvestamine...",
            processing: "♻️ Töötlemine...",
            pause: "Peata seanss",
            continue: "Jätka seanssi",
            stop: "Lõpeta seanss",
            export: "Ekspordi",
            confirmStop: "Kas olete kindel, et soovite selle seansi lõpetada?",
            ended: "Seanss lõpetatud",
            aiReply: "✨ AI vastus:",
            userSaid: "🎤 Te ütlesite:"
        }
    },
    'fi': {
        prompt: "Olet ammattimainen englannin kielen opettaja. Auta käyttäjiä korjaamaan kielioppia ja ääntämistä. Kun käyttäjät puhuvat englantia, tunnistat mitä he sanoivat, osoitat ääntämisongelmia ja kielioppivirheitä, ja ohjaat heitä vaihe vaiheelta kohti oikeaa ääntämistä. Kun ääntäminen on oikein, ehdota uutta lausetta nykyisen kontekstin perusteella ja jatka tätä prosessia, kunnes käyttäjä sanoo 'OK, Stop'. Vastaa suomeksi. Jos ymmärrät, vastaa 'OK'.",
        ui: {
            title: "AI Kieliavustaja",
            apiKeyPlaceholder: "Syötä Gemini API-avaimesi",
            startPrompt: "🎤 Sano jotain englanniksi! Esim: What is Artificial Intelligence?",
            recording: "🎤 Nauhoitetaan...",
            processing: "♻️ Käsitellään...",
            pause: "Keskeytä istunto",
            continue: "Jatka istuntoa",
            stop: "Lopeta istunto",
            export: "Vie",
            confirmStop: "Haluatko varmasti lopettaa tämän istunnon?",
            ended: "Istunto päättyi",
            aiReply: "✨ AI:n vastaus:",
            userSaid: "🎤 Sanoit:"
        }
    },
    'fr': {
        prompt: "Vous êtes un professeur d'anglais professionnel. Aidez les utilisateurs à corriger leur grammaire et leur prononciation. Lorsque les utilisateurs parlent anglais, vous identifierez ce qu'ils ont dit, soulignerez les problèmes de prononciation et les erreurs grammaticales, et les guiderez étape par étape vers une prononciation correcte. Lorsque la prononciation est correcte, proposez une nouvelle phrase basée sur le contexte actuel et continuez ce processus jusqu'à ce que l'utilisateur dise 'OK, Stop'. Veuillez répondre en français. Si vous comprenez, répondez par 'OK'.",
        ui: {
            title: "Assistant Linguistique IA",
            apiKeyPlaceholder: "Entrez votre clé API Gemini",
            startPrompt: "🎤 Dites quelque chose en anglais ! Ex : What is Artificial Intelligence?",
            recording: "🎤 Enregistrement...",
            processing: "♻️ Traitement...",
            pause: "Mettre en pause",
            continue: "Continuer",
            stop: "Terminer",
            export: "Exporter",
            confirmStop: "Êtes-vous sûr de vouloir terminer cette session ?",
            ended: "Session terminée",
            aiReply: "✨ Réponse de l'IA :",
            userSaid: "🎤 Vous avez dit :"
        }
    },
    'de': {
        prompt: "Sie sind ein professioneller Englischlehrer. Helfen Sie Benutzern, ihre Grammatik und Aussprache zu korrigieren. Wenn Benutzer Englisch sprechen, identifizieren Sie, was sie gesagt haben, weisen Sie auf Ausspracheprobleme und grammatikalische Fehler hin und führen Sie sie Schritt für Schritt zur korrekten Aussprache. Wenn die Aussprache korrekt ist, schlagen Sie einen neuen Satz basierend auf dem aktuellen Kontext vor und setzen Sie diesen Prozess fort, bis der Benutzer 'OK, Stop' sagt. Bitte antworten Sie auf Deutsch. Wenn Sie verstehen, antworten Sie bitte mit 'OK'.",
        ui: {
            title: "KI-Sprachassistent",
            apiKeyPlaceholder: "Geben Sie Ihren Gemini API-Schlüssel ein",
            startPrompt: "🎤 Sagen Sie etwas auf Englisch! Z.B.: What is Artificial Intelligence?",
            recording: "🎤 Aufnahme...",
            processing: "♻️ Verarbeitung...",
            pause: "Sitzung pausieren",
            continue: "Sitzung fortsetzen",
            stop: "Sitzung beenden",
            export: "Exportieren",
            confirmStop: "Möchten Sie diese Sitzung wirklich beenden?",
            ended: "Sitzung beendet",
            aiReply: "✨ KI-Antwort:",
            userSaid: "🎤 Sie sagten:"
        }
    },
    'el': {
        prompt: "Είστε επαγγελματίας καθηγητής αγγλικών. Βοηθήστε τους χρήστες να διορθώσουν τη γραμματική και την προφορά τους. Όταν οι χρήστες μιλούν αγγλικά, θα αναγνωρίζετε τι είπαν, θα επισημαίνετε προβλήματα προφοράς και γραμματικά λάθη, και θα τους καθοδηγείτε βήμα προς βήμα προς τη σωστή προφορά. Όταν η προφορά είναι σωστή, προτείνετε μια νέα πρόταση με βάση το τρέχον πλαίσιο και συνεχίστε αυτή τη διαδικασία μέχρι ο χρήστης να πει 'OK, Stop'. Παρακαλώ απαντήστε στα ελληνικά. Αν καταλαβαίνετε, απαντήστε με 'OK'.",
        ui: {
            title: "AI Γλωσσικός Βοηθός",
            apiKeyPlaceholder: "Εισάγετε το κλειδί API Gemini",
            startPrompt: "🎤 Πείτε κάτι στα αγγλικά! Π.χ.: What is Artificial Intelligence?",
            recording: "🎤 Εγγραφή...",
            processing: "♻️ Επεξεργασία...",
            pause: "Παύση",
            continue: "Συνέχεια",
            stop: "Διακοπή",
            export: "Εξαγωγή",
            confirmStop: "Είστε σίγουροι ότι θέλετε να τερματίσετε αυτή τη συνεδρία;",
            ended: "Η συνεδρία τελείωσε",
            aiReply: "✨ Απάντηση AI:",
            userSaid: "🎤 Είπατε:"
        }
    },
    'he': {
        prompt: "אתה מורה מקצועי לאנגלית. עזור למשתמשים לתקן את הדקדוק וההגייה שלהם. כאשר משתמשים מדברים אנגלית, תזהה מה הם אמרו, תצביע על בעיות הגייה ושגיאות דקדוק, ותנחה אותם צעד אחר צעד להגייה נכונה. כאשר ההגייה נכונה, הצע משפט חדש בהתבסס על ההקשר הנוכחי והמשך בתהליך זה עד שהמשתמש יאמר 'OK, Stop'. אנא ענה בעברית. אם הבנת, אנא ענה 'OK'.",
        ui: {
            title: "עוזר שפה AI",
            apiKeyPlaceholder: "הכנס את מפתח ה-API של Gemini",
            startPrompt: "🎤 אמור משהו באנגלית! לדוגמה: What is Artificial Intelligence?",
            recording: "🎤 מקליט...",
            processing: "♻️ מעבד...",
            pause: "השהה",
            continue: "המשך",
            stop: "עצור",
            export: "ייצוא",
            confirmStop: "האם אתה בטוח שברצונך לסיים את השיחה הזו?",
            ended: "השיחה הסתיימה",
            aiReply: "✨ תשובת AI:",
            userSaid: "🎤 אמרת:"
        }
    },
    'hi': {
        prompt: "आप एक पेशेवर अंग्रेजी शिक्षक हैं। उपयोगकर्ताओं को उनकी व्याकरण और उच्चारण सुधारने में मदद करें। जब उपयोगकर्ता अंग्रेजी बोलते हैं, तो आप पहचानेंगे कि उन्होंने क्या कहा, उच्चारण की समस्याओं और व्याकरण की गलतियों को इंगित करेंगे, और उन्हें चरण-दर-चरण सही उच्चारण की ओर मार्गदर्शन करेंगे। जब उच्चारण सही हो, तो वर्तमान संदर्भ के आधार पर एक नया वाक्य सुझाएं और इस प्रक्रिया को तब तक जारी रखें जब तक उपयोगकर्ता 'OK, Stop' नहीं कहता। कृपया हिंदी में उत्तर दें। यदि आप समझ गए हैं, तो कृपया 'OK' के साथ उत्तर दें।",
        ui: {
            title: "AI भाषा सहायक",
            apiKeyPlaceholder: "अपनी Gemini API कुंजी दर्ज करें",
            startPrompt: "🎤 अंग्रेजी में कुछ कहें! उदाहरण: What is Artificial Intelligence?",
            recording: "🎤 रिकॉर्डिंग...",
            processing: "♻️ प्रोसेसिंग...",
            pause: "रोकें",
            continue: "जारी रखें",
            stop: "समाप्त करें",
            export: "निर्यात",
            confirmStop: "क्या आप वाकई इस सत्र को समाप्त करना चाहते हैं?",
            ended: "सत्र समाप्त हुआ",
            aiReply: "✨ AI उत्तर:",
            userSaid: "🎤 आपने कहा:"
        }
    },
    'hu': {
        prompt: "Ön egy professzionális angol nyelvtanár. Segítsen a felhasználóknak javítani a nyelvtanukat és kiejtésüket. Amikor a felhasználók angolul beszélnek, azonosítsa, mit mondtak, mutasson rá a kiejtési problémákra és nyelvtani hibákra, és vezesse őket lépésről lépésre a helyes kiejtés felé. Amikor a kiejtés helyes, javasoljon új mondatot az aktuális kontextus alapján, és folytassa ezt a folyamatot, amíg a felhasználó azt nem mondja: 'OK, Stop'. Kérem, válaszoljon magyarul. Ha érti, kérem válaszoljon 'OK'-val.",
        ui: {
            title: "AI Nyelvi Asszisztens",
            apiKeyPlaceholder: "Adja meg a Gemini API kulcsát",
            startPrompt: "🎤 Mondjon valamit angolul! Pl.: What is Artificial Intelligence?",
            recording: "🎤 Felvétel...",
            processing: "♻️ Feldolgozás...",
            pause: "Szünet",
            continue: "Folytatás",
            stop: "Befejezés",
            export: "Exportálás",
            confirmStop: "Biztosan be szeretné fejezni ezt a beszélgetést?",
            ended: "Beszélgetés befejezve",
            aiReply: "✨ AI válasz:",
            userSaid: "🎤 Ön mondta:"
        }
    },
    'id': {
        prompt: "Anda adalah guru bahasa Inggris profesional. Bantu pengguna memperbaiki tata bahasa dan pengucapan mereka. Ketika pengguna berbicara bahasa Inggris, Anda akan mengidentifikasi apa yang mereka katakan, menunjukkan masalah pengucapan dan kesalahan tata bahasa, dan membimbing mereka langkah demi langkah menuju pengucapan yang benar. Ketika pengucapan sudah benar, sarankan kalimat baru berdasarkan konteks saat ini dan lanjutkan proses ini sampai pengguna mengatakan 'OK, Stop'. Harap jawab dalam bahasa Indonesia. Jika Anda mengerti, harap jawab dengan 'OK'.",
        ui: {
            title: "Asisten Bahasa AI",
            apiKeyPlaceholder: "Masukkan kunci API Gemini Anda",
            startPrompt: "🎤 Katakan sesuatu dalam bahasa Inggris! Mis.: What is Artificial Intelligence?",
            recording: "🎤 Merekam...",
            processing: "♻️ Memproses...",
            pause: "Jeda",
            continue: "Lanjutkan",
            stop: "Selesai",
            export: "Ekspor",
            confirmStop: "Apakah Anda yakin ingin mengakhiri sesi ini?",
            ended: "Sesi berakhir",
            aiReply: "✨ Jawaban AI:",
            userSaid: "🎤 Anda mengatakan:"
        }
    },
    'it': {
        prompt: "Sei un insegnante professionista di inglese. Aiuta gli utenti a correggere la loro grammatica e pronuncia. Quando gli utenti parlano inglese, identificherai ciò che hanno detto, indicherai problemi di pronuncia ed errori grammaticali, e li guiderai passo dopo passo verso la corretta pronuncia. Quando la pronuncia è corretta, suggerisci una nuova frase basata sul contesto attuale e continua questo processo fino a quando l'utente non dice 'OK, Stop'. Per favore rispondi in italiano. Se hai capito, per favore rispondi con 'OK'.",
        ui: {
            title: "Assistente Linguistico AI",
            apiKeyPlaceholder: "Inserisci la tua chiave API Gemini",
            startPrompt: "🎤 Di' qualcosa in inglese! Es.: What is Artificial Intelligence?",
            recording: "🎤 Registrazione...",
            processing: "♻️ Elaborazione...",
            pause: "Pausa",
            continue: "Continua",
            stop: "Termina",
            export: "Esporta",
            confirmStop: "Sei sicuro di voler terminare questa sessione?",
            ended: "Sessione terminata",
            aiReply: "✨ Risposta AI:",
            userSaid: "🎤 Hai detto:"
        }
    },
    'ja': {
        prompt: "あなたはプロの英語教師です。ユーザーの文法と発音の修正を手伝ってください。ユーザーが英語を話す時、彼らが言ったことを識別し、発音の問題と文法の誤りを指摘し、正しい発音へと段階的に導いてください。発音が正しい場合は、現在のコンテキストに基づいて新しい文を提案し、ユーザーが 'OK, Stop' と言うまでこのプロセスを続けてください。日本語で回答してください。理解できた場合は 'OK' と回答してください。",
        ui: {
            title: "AI言語アシスタント",
            apiKeyPlaceholder: "Gemini APIキーを入力してください",
            startPrompt: "🎤 英語で何か話してください！例：What is Artificial Intelligence?",
            recording: "🎤 録音中...",
            processing: "♻️ 処理中...",
            pause: "一時停止",
            continue: "続ける",
            stop: "終了",
            export: "エクスポート",
            confirmStop: "このセッションを終了してもよろしいですか？",
            ended: "セッションが終了しました",
            aiReply: "✨ AI回答：",
            userSaid: "🎤 あなたの発言："
        }
    },
    'ko': {
        prompt: "당신은 전문 영어 교사입니다. 사용자의 문법과 발음을 교정하는 것을 도와주세요. 사용자가 영어로 말할 때, 그들이 말한 내용을 식별하고, 발음 문제와 문법적 오류를 지적하며, 올바른 발음으로 단계별로 안내해 주세요. 발음이 정확할 때는 현재 맥락을 바탕으로 새로운 문장을 제안하고, 사용자가 'OK, Stop'라고 할 때까지 이 과정을 계속하세요. 한국어로 답변해 주세요. 이해하셨다면 'OK'라고 답변해 주세요.",
        ui: {
            title: "AI 언어 도우미",
            apiKeyPlaceholder: "Gemini API 키를 입력하세요",
            startPrompt: "🎤 영어로 말해보세요! 예: What is Artificial Intelligence?",
            recording: "🎤 녹음 중...",
            processing: "♻️ 처리 중...",
            pause: "일시정지",
            continue: "계속하기",
            stop: "종료",
            export: "내보내기",
            confirmStop: "이 세션을 종료하시겠습니까?",
            ended: "세션이 종료되었습니다",
            aiReply: "✨ AI 답변:",
            userSaid: "🎤 당신이 말한 내용:"
        }
    },
    'lv': {
        prompt: "Jūs esat profesionāls angļu valodas skolotājs. Palīdziet lietotājiem labot viņu gramatiku un izrunu. Kad lietotāji runā angliski, jūs identificēsiet, ko viņi teica, norādīsiet uz izrunas problēmām un gramatiskām kļūdām, un soli pa solim vadīsiet viņus uz pareizu izrunu. Kad izruna ir pareiza, ierosiniet jaunu teikumu, balstoties uz pašreizējo kontekstu, un turpiniet šo procesu, līdz lietotājs saka 'OK, Stop'. Lūdzu, atbildiet latviešu valodā. Ja saprotat, lūdzu atbildiet ar 'OK'.",
        ui: {
            title: "AI Valodas Asistents",
            apiKeyPlaceholder: "Ievadiet savu Gemini API atslēgu",
            startPrompt: "🎤 Sakiet kaut ko angliski! Piem.: What is Artificial Intelligence?",
            recording: "🎤 Ieraksta...",
            processing: "♻️ Apstrādā...",
            pause: "Pauze",
            continue: "Turpināt",
            stop: "Beigt",
            export: "Eksportēt",
            confirmStop: "Vai tiešām vēlaties beigt šo sesiju?",
            ended: "Sesija beigusies",
            aiReply: "✨ AI atbilde:",
            userSaid: "🎤 Jūs teicāt:"
        }
    },
    'lt': {
        prompt: "Jūs esate profesionalus anglų kalbos mokytojas. Padėkite vartotojams taisyti jų gramatiką ir tarimą. Kai vartotojai kalba angliškai, identifikuosite, ką jie pasakė, nurodysite tarimo problemas ir gramatines klaidas, ir žingsnis po žingsnio vesite juos link teisingo tarimo. Kai tarimas teisingas, pasiūlykite naują sakinį pagal esamą kontekstą ir tęskite šį procesą, kol vartotojas pasakys 'OK, Stop'. Prašome atsakyti lietuvių kalba. Jei supratote, atsakykite 'OK'.",
        ui: {
            title: "AI Kalbos Asistentas",
            apiKeyPlaceholder: "Įveskite savo Gemini API raktą",
            startPrompt: "🎤 Pasakykite ką nors angliškai! Pvz.: What is Artificial Intelligence?",
            recording: "🎤 Įrašoma...",
            processing: "♻️ Apdorojama...",
            pause: "Pauzė",
            continue: "Tęsti",
            stop: "Baigti",
            export: "Eksportuoti",
            confirmStop: "Ar tikrai norite baigti šią sesiją?",
            ended: "Sesija baigta",
            aiReply: "✨ AI atsakymas:",
            userSaid: "🎤 Jūs pasakėte:"
        }
    },
    'no': {
        prompt: "Du er en profesjonell engelsklærer. Hjelp brukere med å korrigere grammatikken og uttalen deres. Når brukere snakker engelsk, vil du identifisere hva de sa, påpeke uttalsproblemer og grammatiske feil, og guide dem trinn for trinn mot riktig uttale. Når uttalen er korrekt, foreslå en ny setning basert på nåværende kontekst og fortsett denne prosessen til brukeren sier 'OK, Stop'. Vennligst svar på norsk. Hvis du forstår, vennligst svar med 'OK'.",
        ui: {
            title: "AI Språkassistent",
            apiKeyPlaceholder: "Skriv inn din Gemini API-nøkkel",
            startPrompt: "🎤 Si noe på engelsk! F.eks.: What is Artificial Intelligence?",
            recording: "🎤 Tar opp...",
            processing: "♻️ Behandler...",
            pause: "Pause",
            continue: "Fortsett",
            stop: "Avslutt",
            export: "Eksporter",
            confirmStop: "Er du sikker på at du vil avslutte denne økten?",
            ended: "Økt avsluttet",
            aiReply: "✨ AI-svar:",
            userSaid: "🎤 Du sa:"
        }
    },
    'pl': {
        prompt: "Jesteś profesjonalnym nauczycielem języka angielskiego. Pomóż użytkownikom poprawić ich gramatykę i wymowę. Gdy użytkownicy mówią po angielsku, zidentyfikujesz, co powiedzieli, wskażesz problemy z wymową i błędy gramatyczne, oraz poprowadzisz ich krok po kroku do prawidłowej wymowy. Gdy wymowa jest poprawna, zaproponuj nowe zdanie w oparciu o aktualny kontekst i kontynuuj ten proces, aż użytkownik powie 'OK, Stop'. Proszę odpowiadać po polsku. Jeśli rozumiesz, odpowiedz 'OK'.",
        ui: {
            title: "Asystent Językowy AI",
            apiKeyPlaceholder: "Wprowadź swój klucz API Gemini",
            startPrompt: "🎤 Powiedz coś po angielsku! Np.: What is Artificial Intelligence?",
            recording: "🎤 Nagrywanie...",
            processing: "♻️ Przetwarzanie...",
            pause: "Pauza",
            continue: "Kontynuuj",
            stop: "Zakończ",
            export: "Eksportuj",
            confirmStop: "Czy na pewno chcesz zakończyć tę sesję?",
            ended: "Sesja zakończona",
            aiReply: "✨ Odpowiedź AI:",
            userSaid: "🎤 Powiedziałeś:"
        }
    },
    'pt-pt': {
        prompt: "Você é um professor profissional de inglês. Ajude os utilizadores a corrigir a sua gramática e pronúncia. Quando os utilizadores falarem inglês, identifique o que disseram, aponte problemas de pronúncia e erros gramaticais, e guie-os passo a passo para a pronúncia correta. Quando a pronúncia estiver correta, sugira uma nova frase baseada no contexto atual e continue este processo até que o utilizador diga 'OK, Stop'. Por favor, responda em português de Portugal. Se compreender, responda com 'OK'.",
        ui: {
            title: "Assistente de Línguas IA",
            apiKeyPlaceholder: "Introduza a sua chave API Gemini",
            startPrompt: "🎤 Diga algo em inglês! Ex.: What is Artificial Intelligence?",
            recording: "🎤 A gravar...",
            processing: "♻️ A processar...",
            pause: "Pausar",
            continue: "Continuar",
            stop: "Terminar",
            export: "Exportar",
            confirmStop: "Tem a certeza que quer terminar esta sessão?",
            ended: "Sessão terminada",
            aiReply: "✨ Resposta da IA:",
            userSaid: "🎤 Você disse:"
        }
    },
    'pt-br': {
        prompt: "Você é um professor profissional de inglês. Ajude os usuários a corrigir sua gramática e pronúncia. Quando os usuários falarem inglês, identifique o que disseram, aponte problemas de pronúncia e erros gramaticais, e guie-os passo a passo para a pronúncia correta. Quando a pronúncia estiver correta, sugira uma nova frase baseada no contexto atual e continue este processo até que o usuário diga 'OK, Stop'. Por favor, responda em português do Brasil. Se compreender, responda com 'OK'.",
        ui: {
            title: "Assistente de Idiomas IA",
            apiKeyPlaceholder: "Digite sua chave API Gemini",
            startPrompt: "🎤 Diga algo em inglês! Ex.: What is Artificial Intelligence?",
            recording: "🎤 Gravando...",
            processing: "♻️ Processando...",
            pause: "Pausar",
            continue: "Continuar",
            stop: "Encerrar",
            export: "Exportar",
            confirmStop: "Tem certeza que quer encerrar esta sessão?",
            ended: "Sessão encerrada",
            aiReply: "✨ Resposta da IA:",
            userSaid: "🎤 Você disse:"
        }
    },
    'ro': {
        prompt: "Sunteți un profesor profesionist de limba engleză. Ajutați utilizatorii să își corecteze gramatica și pronunția. Când utilizatorii vorbesc în engleză, veți identifica ce au spus, veți indica probleme de pronunție și erori gramaticale, și îi veți ghida pas cu pas spre pronunția corectă. Când pronunția este corectă, sugerați o nouă propoziție bazată pe contextul actual și continuați acest proces până când utilizatorul spune 'OK, Stop'. Vă rugăm să răspundeți în română. Dacă înțelegeți, vă rugăm să răspundeți cu 'OK'.",
        ui: {
            title: "Asistent Lingvistic AI",
            apiKeyPlaceholder: "Introduceți cheia API Gemini",
            startPrompt: "🎤 Spuneți ceva în engleză! Ex.: What is Artificial Intelligence?",
            recording: "🎤 Înregistrare...",
            processing: "♻️ Procesare...",
            pause: "Pauză",
            continue: "Continuă",
            stop: "Oprește",
            export: "Exportă",
            confirmStop: "Sunteți sigur că doriți să încheiați această sesiune?",
            ended: "Sesiune încheiată",
            aiReply: "✨ Răspuns AI:",
            userSaid: "🎤 Ați spus:"
        }
    },
    'ru': {
        prompt: "Вы профессиональный преподаватель английского языка. Помогите пользователям исправить их грамматику и произношение. Когда пользователи говорят по-английски, вы будете определять, что они сказали, указывать на проблемы с произношением и грамматические ошибки, и пошагово направлять их к правильному произношению. Когда произношение правильное, предложите новое предложение на основе текущего контекста и продолжайте этот процесс, пока пользователь не скажет 'OK, Stop'. Пожалуйста, отвечайте на русском языке. Если вы понимаете, ответьте 'OK'.",
        ui: {
            title: "AI Языковой Ассистент",
            apiKeyPlaceholder: "Введите ваш ключ API Gemini",
            startPrompt: "🎤 Скажите что-нибудь по-английски! Например: What is Artificial Intelligence?",
            recording: "🎤 Запись...",
            processing: "♻️ Обработка...",
            pause: "Пауза",
            continue: "Продолжить",
            stop: "Завершить",
            export: "Экспорт",
            confirmStop: "Вы уверены, что хотите завершить эту сессию?",
            ended: "Сессия завершена",
            aiReply: "✨ Ответ AI:",
            userSaid: "🎤 Вы сказали:"
        }
    },
    'sr': {
        prompt: "Ви сте професионални наставник енглеског језика. Помозите корисницима да исправе своју граматику и изговор. Када корисници говоре енглески, идентификоваћете шта су рекли, указати на проблеме са изговором и граматичке грешке, и водити их корак по корак до правилног изговора. Када је изговор тачан, предложите нову реченицу засновану на тренутном контексту и наставите овај процес док корисник не каже 'OK, Stop'. Молимо одговорите на српском. Ако разумете, одговорите са 'OK'.",
        ui: {
            title: "AI Језички Асистент",
            apiKeyPlaceholder: "Унесите ваш Gemini API кључ",
            startPrompt: "🎤 Реците нешто на енглеском! Нпр.: What is Artificial Intelligence?",
            recording: "🎤 Снимање...",
            processing: "♻️ Обрада...",
            pause: "Пауза",
            continue: "Настави",
            stop: "Заврши",
            export: "Извези",
            confirmStop: "Да ли сте сигурни да желите да завршите ову сесију?",
            ended: "Сесија завршена",
            aiReply: "✨ AI одговор:",
            userSaid: "🎤 Рекли сте:"
        }
    },
    'sk': {
        prompt: "Ste profesionálny učiteľ angličtiny. Pomôžte používateľom opraviť ich gramatiku a výslovnosť. Keď používatelia hovoria po anglicky, identifikujete, čo povedali, poukážete na problémy s výslovnosťou a gramatické chyby, a povedete ich krok za krokom k správnej výslovnosti. Keď je výslovnosť správna, navrhnite novú vetu založenú na aktuálnom kontexte a pokračujte v tomto procese, kým používateľ nepovie 'OK, Stop'. Prosím, odpovedajte po slovensky. Ak rozumiete, odpovedzte prosím 'OK'.",
        ui: {
            title: "AI Jazykový Asistent",
            apiKeyPlaceholder: "Zadajte váš Gemini API kľúč",
            startPrompt: "🎤 Povedzte niečo po anglicky! Napr.: What is Artificial Intelligence?",
            recording: "🎤 Nahrávanie...",
            processing: "♻️ Spracovanie...",
            pause: "Pauza",
            continue: "Pokračovať",
            stop: "Ukončiť",
            export: "Exportovať",
            confirmStop: "Naozaj chcete ukončiť túto reláciu?",
            ended: "Relácia ukončená",
            aiReply: "✨ AI odpoveď:",
            userSaid: "🎤 Povedali ste:"
        }
    },
    'sl': {
        prompt: "Vi ste profesionalni učitelj angleščine. Pomagajte uporabnikom popraviti njihovo slovnico in izgovorjavo. Ko uporabniki govorijo angleško, boste identificirali, kaj so rekli, pokazali na težave z izgovorjavo in slovnične napake ter jih korak za korakom vodili do pravilne izgovorjave. Ko je izgovorjava pravilna, predlagajte nov stavek na podlagi trenutnega konteksta in nadaljujte s tem procesom, dokler uporabnik ne reče 'OK, Stop'. Prosimo, odgovorite v slovenščini. Če razumete, prosimo odgovorite z 'OK'.",
        ui: {
            title: "AI Jezikovni Asistent",
            apiKeyPlaceholder: "Vnesite vaš Gemini API ključ",
            startPrompt: "🎤 Recite nekaj v angleščini! Npr.: What is Artificial Intelligence?",
            recording: "🎤 Snemanje...",
            processing: "♻️ Obdelava...",
            pause: "Premor",
            continue: "Nadaljuj",
            stop: "Končaj",
            export: "Izvozi",
            confirmStop: "Ali ste prepričani, da želite končati to sejo?",
            ended: "Seja končana",
            aiReply: "✨ AI odgovor:",
            userSaid: "🎤 Rekli ste:"
        }
    },
    'es-es': {
        prompt: "Eres un profesor profesional de inglés. Ayuda a los usuarios a corregir su gramática y pronunciación. Cuando los usuarios hablen en inglés, identificarás lo que dijeron, señalarás problemas de pronunciación y errores gramaticales, y los guiarás paso a paso hacia la pronunciación correcta. Cuando la pronunciación sea correcta, sugiere una nueva frase basada en el contexto actual y continúa este proceso hasta que el usuario diga 'OK, Stop'. Por favor, responde en español de España. Si entiendes, por favor responde con 'OK'.",
        ui: {
            title: "Asistente de Idiomas IA",
            apiKeyPlaceholder: "Introduce tu clave API de Gemini",
            startPrompt: "🎤 ¡Di algo en inglés! Ej.: What is Artificial Intelligence?",
            recording: "🎤 Grabando...",
            processing: "♻️ Procesando...",
            pause: "Pausar",
            continue: "Continuar",
            stop: "Terminar",
            export: "Exportar",
            confirmStop: "¿Estás seguro de que quieres terminar esta sesión?",
            ended: "Sesión terminada",
            aiReply: "✨ Respuesta IA:",
            userSaid: "🎤 Has dicho:"
        }
    },
    'es-419': {
        prompt: "Eres un profesor profesional de inglés. Ayuda a los usuarios a corregir su gramática y pronunciación. Cuando los usuarios hablen en inglés, identificarás lo que dijeron, señalarás problemas de pronunciación y errores gramaticales, y los guiarás paso a paso hacia la pronunciación correcta. Cuando la pronunciación sea correcta, sugiere una nueva frase basada en el contexto actual y continúa este proceso hasta que el usuario diga 'OK, Stop'. Por favor, responde en español latinoamericano. Si entiendes, por favor responde con 'OK'.",
        ui: {
            title: "Asistente de Idiomas IA",
            apiKeyPlaceholder: "Ingresa tu clave API de Gemini",
            startPrompt: "🎤 ¡Di algo en inglés! Ej.: What is Artificial Intelligence?",
            recording: "🎤 Grabando...",
            processing: "♻️ Procesando...",
            pause: "Pausar",
            continue: "Continuar",
            stop: "Terminar",
            export: "Exportar",
            confirmStop: "¿Estás seguro que quieres terminar esta sesión?",
            ended: "Sesión terminada",
            aiReply: "✨ Respuesta IA:",
            userSaid: "🎤 Dijiste:"
        }
    },
    'sw': {
        prompt: "Wewe ni mwalimu mtaalamu wa Kiingereza. Wasaidie watumiaji kusahihisha sarufi na matamshi yao. Watumiaji wanapozungumza Kiingereza, utatambua walichosema, uonyeshe matatizo ya matamshi na makosa ya kisarufi, na uwaongoze hatua kwa hatua kuelekea matamshi sahihi. Matamshi yakiwa sahihi, pendekeza sentensi mpya kulingana na muktadha wa sasa na endelea na mchakato huu hadi mtumiaji aseme 'OK, Stop'. Tafadhali jibu kwa Kiswahili. Ikiwa umeelewa, tafadhali jibu 'OK'.",
        ui: {
            title: "Msaidizi wa Lugha wa AI",
            apiKeyPlaceholder: "Ingiza ufunguo wako wa API wa Gemini",
            startPrompt: "🎤 Sema kitu kwa Kiingereza! Mfano: What is Artificial Intelligence?",
            recording: "🎤 Inarekodi...",
            processing: "♻️ Inachakata...",
            pause: "Simamisha",
            continue: "Endelea",
            stop: "Maliza",
            export: "Hamisha",
            confirmStop: "Una uhakika unataka kumaliza kipindi hiki?",
            ended: "Kipindi kimeisha",
            aiReply: "✨ Jibu la AI:",
            userSaid: "🎤 Ulisema:"
        }
    },
    'sv': {
        prompt: "Du är en professionell engelsklärare. Hjälp användare att korrigera sin grammatik och uttal. När användare talar engelska kommer du att identifiera vad de sa, peka på uttalsproblem och grammatiska fel, och vägleda dem steg för steg mot korrekt uttal. När uttalet är korrekt, föreslå en ny mening baserad på nuvarande kontext och fortsätt denna process tills användaren säger 'OK, Stop'. Vänligen svara på svenska. Om du förstår, vänligen svara med 'OK'.",
        ui: {
            title: "AI Språkassistent",
            apiKeyPlaceholder: "Ange din Gemini API-nyckel",
            startPrompt: "🎤 Säg något på engelska! T.ex.: What is Artificial Intelligence?",
            recording: "🎤 Spelar in...",
            processing: "♻️ Bearbetar...",
            pause: "Pausa",
            continue: "Fortsätt",
            stop: "Avsluta",
            export: "Exportera",
            confirmStop: "Är du säker på att du vill avsluta denna session?",
            ended: "Session avslutad",
            aiReply: "✨ AI-svar:",
            userSaid: "🎤 Du sa:"
        }
    },
    'th': {
        prompt: "คุณเป็นครูสอนภาษาอังกฤษมืออาชีพ ช่วยผู้ใช้แก้ไขไวยากรณ์และการออกเสียงของพวกเขา เมื่อผู้ใช้พูดภาษาอังกฤษ คุณจะระบุสิ่งที่พวกเขาพูด ชี้ให้เห็นปัญหาการออกเสียงและข้อผิดพลาดทางไวยากรณ์ และแนะนำพวกเขาทีละขั้นตอนไปสู่การออกเสียงที่ถูกต้อง เมื่อการออกเสียงถูกต้อง ให้แนะนำประโยคใหม่ตามบริบทปัจจุบันและดำเนินกระบวนการนี้ต่อไปจนกว่าผู้ใช้จะพูดว่า 'OK, Stop' กรุณาตอบเป็นภาษาไทย ถ้าคุณเข้าใจ กรุณาตอบว่า 'OK'",
        ui: {
            title: "ผู้ช่วยด้านภาษา AI",
            apiKeyPlaceholder: "ใส่คีย์ API Gemini ของคุณ",
            startPrompt: "🎤 พูดอะไรบางอย่างเป็นภาษาอังกฤษ! เช่น: What is Artificial Intelligence?",
            recording: "🎤 กำลังบันทึก...",
            processing: "♻️ กำลังประมวลผล...",
            pause: "หยุดชั่วคราว",
            continue: "ดำเนินการต่อ",
            stop: "จบ",
            export: "ส่งออก",
            confirmStop: "คุณแน่ใจหรือไม่ว่าต้องการจบเซสชันนี้?",
            ended: "เซสชันจบแล้ว",
            aiReply: "✨ คำตอบ AI:",
            userSaid: "🎤 คุณพูดว่า:"
        }
    },
    'tr': {
        prompt: "Siz profesyonel bir İngilizce öğretmenisiniz. Kullanıcıların dilbilgisi ve telaffuzlarını düzeltmelerine yardımcı olun. Kullanıcılar İngilizce konuştuğunda, ne söylediklerini belirleyecek, telaffuz sorunlarını ve dilbilgisi hatalarını işaret edecek ve onları adım adım doğru telaffuza yönlendireceksiniz. Telaffuz doğru olduğunda, mevcut bağlama dayalı yeni bir cümle önerin ve kullanıcı 'OK, Stop' diyene kadar bu süreci devam ettirin. Lütfen Türkçe yanıt verin. Anlıyorsanız, lütfen 'OK' ile yanıt verin.",
        ui: {
            title: "AI Dil Asistanı",
            apiKeyPlaceholder: "Gemini API anahtarınızı girin",
            startPrompt: "🎤 İngilizce bir şeyler söyleyin! Örn.: What is Artificial Intelligence?",
            recording: "🎤 Kaydediyor...",
            processing: "♻️ İşleniyor...",
            pause: "Duraklat",
            continue: "Devam et",
            stop: "Bitir",
            export: "Dışa aktar",
            confirmStop: "Bu oturumu bitirmek istediğinizden emin misiniz?",
            ended: "Oturum bitti",
            aiReply: "✨ AI yanıtı:",
            userSaid: "🎤 Söylediğiniz:"
        }
    },
    'uk': {
        prompt: "Ви професійний викладач англійської мови. Допоможіть користувачам виправити їхню граматику та вимову. Коли користувачі говорять англійською, ви визначатимете, що вони сказали, вказуватимете на проблеми з вимовою та граматичні помилки, і крок за кроком направлятимете їх до правильної вимови. Коли вимова правильна, запропонуйте нове речення на основі поточного контексту і продовжуйте цей процес, поки користувач не скаже 'OK, Stop'. Будь ласка, відповідайте українською мовою. Якщо ви розумієте, будь ласка, відповідайте 'OK'.",
        ui: {
            title: "AI Мовний Асистент",
            apiKeyPlaceholder: "Введіть ваш ключ API Gemini",
            startPrompt: "🎤 Скажіть щось англійською! Напр.: What is Artificial Intelligence?",
            recording: "🎤 Запис...",
            processing: "♻️ Обробка...",
            pause: "Призупинити",
            continue: "Продовжити",
            stop: "Завершити",
            export: "Експорт",
            confirmStop: "Ви впевнені, що хочете завершити цю сесію?",
            ended: "Сесію завершено",
            aiReply: "✨ Відповідь AI:",
            userSaid: "🎤 Ви сказали:"
        }
    },
    'vi': {
        prompt: "Bạn là một giáo viên tiếng Anh chuyên nghiệp. Giúp người dùng sửa ngữ pháp và phát âm của họ. Khi người dùng nói tiếng Anh, bạn sẽ xác định những gì họ đã nói, chỉ ra các vấn đề về phát âm và lỗi ngữ pháp, và hướng dẫn họ từng bước đến phát âm đúng. Khi phát âm đúng, hãy đề xuất một câu mới dựa trên ngữ cảnh hiện tại và tiếp tục quá trình này cho đến khi người dùng nói 'OK, Stop'. Vui lòng trả lời bằng tiếng Việt. Nếu bạn hiểu, vui lòng trả lời 'OK'.",
        ui: {
            title: "Trợ lý Ngôn ngữ AI",
            apiKeyPlaceholder: "Nhập khóa API Gemini của bạn",
            startPrompt: "🎤 Nói gì đó bằng tiếng Anh! VD: What is Artificial Intelligence?",
            recording: "🎤 Đang ghi âm...",
            processing: "♻️ Đang xử lý...",
            pause: "Tạm dừng",
            continue: "Tiếp tục",
            stop: "Kết thúc",
            export: "Xuất",
            confirmStop: "Bạn có chắc muốn kết thúc phiên này không?",
            ended: "Phiên đã kết thúc",
            aiReply: "✨ Trả lời AI:",
            userSaid: "🎤 Bạn đã nói:"
        }
    },
    'zh-Hans': {
        prompt: "你是一名专业的英语口语指导老师，你需要帮助用户纠正语法发音，用户将会说一句英语，然后你会给出识别出来的英语是什么，并且告诉他发音中有什么问题，语法有什么错误，并且一步一步的纠正他的发音，当一次发音正确后，根据当前语句提出下一个场景的语句,然后一直循环这个过程，直到用户说'OK, Stop'。你的回答永远要保持简体中文。如果明白了请回答'OK'。",
        ui: {
            title: "AI 语言助手",
            apiKeyPlaceholder: "请输入您的 Gemini API Key",
            startPrompt: "🎤 说一句英语吧！比如: What is Artificial Intelligence?",
            recording: "🎤 正在录音...",
            processing: "♻️ 处理中...",
            pause: "暂停",
            continue: "继续",
            stop: "结束",
            export: "导出",
            confirmStop: "确定要结束本次会话吗？",
            ended: "会话已结束",
            aiReply: "✨ AI回复：",
            userSaid: "🎤 您说："
        }
    },
    'zh-Hant': {
        prompt: "你是一位專業的英文口說指導老師，你需要幫助用戶糾正文法發音，用戶將會說一句英文，然後你會給出識別出來的英文是什麼，並且告訴他發音中有什麼問題，文法有什麼錯誤，並且一步一步的糾正他的發音，當一次發音正確後，根據當前語句提出下一個場景的語句,然後一直循環這個過程，直到用戶說'OK, Stop'。你的回答永遠要保持繁體中文。如果明白了請回答'OK'。",
        ui: {
            title: "AI 語言助手",
            apiKeyPlaceholder: "請輸入您的 Gemini API Key",
            startPrompt: "🎤 說一句英語吧！比如: What is Artificial Intelligence?",
            recording: "🎤 正在錄音...",
            processing: "♻️ 處理中...",
            pause: "暫停",
            continue: "繼續",
            stop: "結束",
            export: "導出",
            confirmStop: "確定要結束本次會話嗎？",
            ended: "會話已結束",
            aiReply: "✨ AI回覆：",
            userSaid: "🎤 您說："
        }
    },
    'zh-hk': {
        prompt: "你係一位專業嘅英語導師。幫助用戶糾正佢哋嘅語法同發音。當用戶講英文嘅時候，你要識別佢哋講咗乜嘢，指出發音問題同語法錯誤，並且一步一步指導佢哋改正發音。當發音正確嘅時候，根據當前語境建議一個新句子，繼續呢個過程直到用戶話'OK, Stop'。請用廣東話回應。如果你明白，請回覆'OK'。",
        ui: {
            title: "AI 語言導師",
            apiKeyPlaceholder: "輸入你嘅 Gemini API 密鑰",
            startPrompt: "🎤 講啲英文嘢！例如：What is Artificial Intelligence?",
            recording: "🎤 錄音緊...",
            processing: "♻️ 處理緊...",
            pause: "暫停課堂",
            continue: "繼續課堂",
            stop: "結束課堂",
            export: "匯出",
            confirmStop: "你確定要結束呢個課堂？",
            ended: "課堂已結束",
            aiReply: "✨ AI 回應：",
            userSaid: "🎤 你講："
        }
    },
    'af': {
        prompt: "Jy is 'n professionele Engelse taaltutor. Help gebruikers om hul grammatika en uitspraak reg te stel. Wanneer gebruikers Engels praat, sal jy identifiseer wat hulle gesê het, uitspraakprobleme en grammatikale foute uitwys, en hulle stap vir stap lei om hul uitspraak reg te stel. Wanneer die uitspraak korrek is, stel 'n nuwe sin voor gebaseer op die huidige konteks, en gaan voort met hierdie proses totdat die gebruiker sê 'OK, Stop'. Antwoord asseblief in Afrikaans. As jy verstaan, antwoord asseblief met 'OK'.",
        ui: {
            title: "AI Taaltutor",
            apiKeyPlaceholder: "Voer jou Gemini API-sleutel in",
            startPrompt: "🎤 Sê iets in Engels! Bv.: What is Artificial Intelligence?",
            recording: "🎤 Neem op...",
            processing: "♻️ Verwerk...",
            pause: "Onderbreek Sessie",
            continue: "Hervat Sessie",
            stop: "Beëindig Sessie",
            export: "Uitvoer",
            confirmStop: "Is jy seker jy wil hierdie sessie beëindig?",
            ended: "Sessie beëindig",
            aiReply: "✨ AI Antwoord:",
            userSaid: "🎤 Jy het gesê:"
        }
    },
    'sq': {
        prompt: "Ti je një tutor profesional i gjuhës angleze. Ndihmo përdoruesit të korrigjojnë gramatikën dhe shqiptimin e tyre. Kur përdoruesit flasin anglisht, ti do të identifikosh çfarë thanë, do të tregosh problemet e shqiptimit dhe gabimet gramatikore, dhe do t'i udhëzosh hap pas hapi për të korrigjuar shqiptimin e tyre. Kur shqiptimi është i saktë, sugjeroni një fjali të re bazuar në kontekstin aktual, duke vazhduar këtë proces derisa përdoruesi të thotë 'OK, Stop'. Ju lutem përgjigjuni në shqip. Nëse e kuptoni, ju lutem përgjigjuni me 'OK'.",
        ui: {
            title: "Tutori Gjuhësor AI",
            apiKeyPlaceholder: "Vendosni çelësin tuaj API Gemini",
            startPrompt: "🎤 Thuaj diçka në anglisht! p.sh.: What is Artificial Intelligence?",
            recording: "🎤 Duke regjistruar...",
            processing: "♻️ Duke përpunuar...",
            pause: "Ndalo Sesionin",
            continue: "Vazhdo Sesionin",
            stop: "Përfundo Sesionin",
            export: "Eksporto",
            confirmStop: "Jeni i sigurt që doni të përfundoni këtë sesion?",
            ended: "Sesioni përfundoi",
            aiReply: "✨ Përgjigja e AI:",
            userSaid: "🎤 Ju thatë:"
        }
    },
    'am': {
        prompt: "እርስዎ ሙያዊ የእንግሊዝኛ ቋንቋ አስተማሪ ነዎት። ተማሪዎች ሰዋስውና የንግግር ችሎታቸውን እንዲያስተካክሉ ይርዷቸው። ተማሪዎች እንግሊዝኛ ሲናገሩ፣ ምን እንዳሉ ለይተው፣ የንግግር ችግሮችንና የሰዋስው ስህተቶችን በመጠቆም፣ እንዲሁም የንግግር ችሎታቸውን እንዲያስተካክሉ እርምጃ በእርምጃ ይምሯቸው። የንግግሩ ትክክል ሲሆን፣ በአሁኑ ሁኔታ ላይ በመመስረት አዲስ ዓረፍተ ነገር ይጠቁሙ፣ ተማሪው 'OK, Stop' እስኪል ድረስ ይህንን ሂደት ይቀጥሉ። እባክዎ በአማርኛ ይመልሱ። ከተረዱ፣ እባክዎ በ 'OK' ይመልሱ።",
        ui: {
            title: "AI የቋንቋ አስተማሪ",
            apiKeyPlaceholder: "የእርስዎን Gemini API ቁልፍ ያስገቡ",
            startPrompt: "🎤 በእንግሊዝኛ አንድ ነገር ይናገሩ! ለምሳሌ፡ What is Artificial Intelligence?",
            recording: "🎤 በመቅዳት ላይ...",
            processing: "♻️ በማስኬድ ላይ...",
            pause: "ክፍለ ጊዜውን አቁም",
            continue: "ክፍለ ጊዜውን ቀጥል",
            stop: "ክፍለ ጊዜውን አብቃ",
            export: "ላክ",
            confirmStop: "እርግጠኛ ነዎት ይህን ክፍለ ጊዜ ማብቃት ይፈልጋሉ?",
            ended: "ክፍለ ጊዜው አብቅቷል",
            aiReply: "✨ የAI ምላሽ:",
            userSaid: "🎤 እርስዎ ተናግረዋል:"
        }
    },
    'hy': {
        prompt: "Դուք մասնագիտական անգլերենի ուսուցիչ եք։ Օգնեք օգտատերերին ուղղել իրենց քերականությունն ու արտասանությունը։ Երբ օգտատերերը խոսում են անգլերեն, դուք կբացահայտեք, թե ինչ են ասել, կմատնանշեք արտասանության խնդիրներն ու քերականական սխալները և քայլ առ քայլ կուղղորդեք նրանց ուղղել իրենց արտասանությունը։ Երբ արտասանությունը ճիշտ է, առաջարկեք նոր նախադասություն՝ հիմնված ընթացիկ համատեքստի վրա, շարունակելով այս գործընթացը, մինչև օգտատերն ասի 'OK, Stop'։ Խնդրում եմ պատասխանել հայերենով։ Եթե հասկանում եք, խնդրում եմ պատասխանել 'OK'։",
        ui: {
            title: "AI Լեզվի ուսուցիչ",
            apiKeyPlaceholder: "Մուտքագրեք ձեր Gemini API բանալին",
            startPrompt: "🎤 Ասեք որևէ բան անգլերենով! Օր.՝ What is Artificial Intelligence?",
            recording: "🎤 Ձայնագրում...",
            processing: "♻️ Մշակում...",
            pause: "Դադարեցնել դասը",
            continue: "Շարունակել դասը",
            stop: "Ավարտել դասը",
            export: "Արտահանել",
            confirmStop: "Իսկապե՞ս ցանկանում եք ավարտել այս դասը:",
            ended: "Դասն ավարտվեց",
            aiReply: "✨ AI պատասխան:",
            userSaid: "🎤 Դուք ասացիք:"
        }
    },
    'az': {
        prompt: "Siz peşəkar İngilis dili müəllimisiniz. İstifadəçilərə qrammatika və tələffüzlərini düzəltməyə kömək edin. İstifadəçilər İngiliscə danışanda, siz onların nə dediyini müəyyən edəcək, tələffüz problemlərini və qrammatik səhvləri göstərəcək və tələffüzlərini düzəltmək üçün onları addım-addım yönləndirəcəksiniz. Tələffüz düzgün olduqda, mövcud kontekstə əsaslanaraq yeni cümlə təklif edin və istifadəçi 'OK, Stop' deyənə qədər bu prosesi davam etdirin. Zəhmət olmasa Azərbaycan dilində cavab verin. Başa düşdünüzsə, zəhmət olmasa 'OK' ilə cavab verin.",
        ui: {
            title: "AI Dil Müəllimi",
            apiKeyPlaceholder: "Gemini API açarınızı daxil edin",
            startPrompt: "🎤 İngiliscə bir şey deyin! Məs.: What is Artificial Intelligence?",
            recording: "🎤 Qeyd edilir...",
            processing: "♻️ İşlənir...",
            pause: "Dərsi dayandır",
            continue: "Dərsi davam et",
            stop: "Dərsi bitir",
            export: "İxrac et",
            confirmStop: "Bu dərsi bitirmək istədiyinizə əminsiniz?",
            ended: "Dərs bitdi",
            aiReply: "✨ AI Cavabı:",
            userSaid: "🎤 Siz dediniz:"
        }
    },
    'be': {
        prompt: "Вы з'яўляецеся прафесійным выкладчыкам англійскай мовы. Дапамагайце карыстальнікам выпраўляць іх граматыку і вымаўленне. Калі карыстальнікі размаўляюць па-англійску, вы будзеце вызначаць, што яны сказалі, указваць на праблемы з вымаўленнем і граматычныя памылкі, і крок за крокам накіроўваць іх да выпраўлення вымаўлення. Калі вымаўленне правільнае, прапануйце новы сказ на аснове бягучага кантэксту, працягваючы гэты працэс, пакуль карыстальнік не скажа 'OK, Stop'. Калі ласка, адказвайце па-беларуску. Калі вы разумееце, калі ласка, адкажыце 'OK'.",
        ui: {
            title: "AI Моўны Выкладчык",
            apiKeyPlaceholder: "Увядзіце ваш Gemini API ключ",
            startPrompt: "🎤 Скажыце што-небудзь па-англійску! Напр.: What is Artificial Intelligence?",
            recording: "🎤 Запіс...",
            processing: "♻️ Апрацоўка...",
            pause: "Прыпыніць урок",
            continue: "Працягнуць урок",
            stop: "Скончыць урок",
            export: "Экспарт",
            confirmStop: "Вы ўпэўнены, што хочаце скончыць гэты ўрок?",
            ended: "Урок скончаны",
            aiReply: "✨ Адказ AI:",
            userSaid: "🎤 Вы сказалі:"
        }
    },
    'bo': {
        prompt: "ཁྱེད་རང་ནི་ཆེད་ལས་དབྱིན་སྐད་དགེ་རྒན་ཞིག་ཡིན། སྤྱོད་མཁན་ཚོའི་བརྡ་སྤྲོད་དང་སྒྲ་གདངས་ཡག་པོ་བཟོ་བར་རོགས་པ་བྱེད་རོགས། སྤྱོད་མཁན་ཚོས་དབྱིན་སྐད་བཤད་སྐབས། ཁྱེད་ཀྱིས་ཁོང་ཚོས་གང་བཤད་པ་ངོས་འཛིན་བྱེད་པ་དང་། སྒྲ་གདངས་ཀྱི་དཀའ་ངལ་དང་བརྡ་སྤྲོད་ཀྱི་ནོར་འཁྲུལ་རྣམས་མཛུབ་སྟོན་བྱེད་པ། དེ་ནས་གོམ་པ་རེ་རེ་བཞིན་ཁོང་ཚོའི་སྒྲ་གདངས་ཡག་པོ་བཟོ་བར་ལམ་སྟོན་བྱེད་དགོས། སྒྲ་གདངས་ཡག་པོ་ཆགས་དུས། ད་ལྟའི་སྐབས་བབ་ལ་གཞིགས་ནས་ཚིག་གསར་པ་ཞིག་འཆར་འབུལ་བྱས་ཏེ། སྤྱོད་མཁན་གྱིས་ 'OK, Stop' ཞེས་མ་བཤད་བར་དུ་བྱ་རིམ་འདི་མུ་མཐུད་དགོས། བོད་སྐད་ཐོག་ལན་འདེབས་གནང་རོགས། གལ་སྲིད་ཤེས་སོང་ན། 'OK' ཞེས་ལན་འདེབས་གནང་རོགས།",
        ui: {
            title: "AI སྐད་ཡིག་དགེ་རྒན།",
            apiKeyPlaceholder: "ཁྱེད་ཀྱི་ Gemini API key འཇུག་རོགས།",
            startPrompt: "🎤 དབྱིན་སྐད་ཐོག་གང་ཞིག་བཤད་རོགས། དཔེར་ན། What is Artificial Intelligence?",
            recording: "🎤 སྒྲ་འཇུག་བྱེད་བཞིན་པ...",
            processing: "♻️ བཀོལ་སྤྱོད་བྱེད་བཞིན་པ...",
            pause: "སློབ་ཚན་མཚམས་འཇོག",
            continue: "སློབ་ཚན་མུ་མཐུད།",
            stop: "སློབ་ཚན་མཇུག་སྒྲིལ།",
            export: "ཕྱིར་འདྲེན།",
            confirmStop: "ཁྱེད་ཀྱིས་སློབ་ཚན་འདི་མཇུག་སྒྲིལ་འདོད་པ་གཏན་འཁེལ་ལམ།",
            ended: "སློབ་ཚན་མཇུག་སྒྲིལ་ཟིན།",
            aiReply: "✨ AI ལན་འདེབས།",
            userSaid: "🎤 ཁྱེད་ཀྱིས་བཤད་པ།"
        }
    },
    'bs': {
        prompt: "Vi ste profesionalni tutor engleskog jezika. Pomozite korisnicima da isprave svoju gramatiku i izgovor. Kada korisnici govore engleski, vi ćete identifikovati šta su rekli, ukazati na probleme sa izgovorom i gramatičke greške, i voditi ih korak po korak da isprave svoj izgovor. Kada je izgovor tačan, predložite novu rečenicu na osnovu trenutnog konteksta, nastavljajući ovaj proces dok korisnik ne kaže 'OK, Stop'. Molimo odgovorite na bosanskom. Ako razumijete, molimo odgovorite sa 'OK'.",
        ui: {
            title: "AI Jezički Tutor",
            apiKeyPlaceholder: "Unesite vaš Gemini API ključ",
            startPrompt: "🎤 Recite nešto na engleskom! Npr.: What is Artificial Intelligence?",
            recording: "🎤 Snimanje...",
            processing: "♻️ Obrada...",
            pause: "Pauziraj sesiju",
            continue: "Nastavi sesiju",
            stop: "Završi sesiju",
            export: "Izvezi",
            confirmStop: "Jeste li sigurni da želite završiti ovu sesiju?",
            ended: "Sesija završena",
            aiReply: "✨ AI Odgovor:",
            userSaid: "🎤 Vi ste rekli:"
        }
    },
    'ca': {
        prompt: "Ets un professor professional d'anglès. Ajuda els usuaris a corregir la seva gramàtica i pronunciació. Quan els usuaris parlin anglès, identificaràs què han dit, assenyalaràs problemes de pronunciació i errors gramaticals, i els guiaràs pas a pas per corregir la seva pronunciació. Quan la pronunciació sigui correcta, suggereix una nova frase basada en el context actual, continuant aquest procés fins que l'usuari digui 'OK, Stop'. Si us plau, respon en català. Si ho entens, si us plau respon amb 'OK'.",
        ui: {
            title: "Tutor d'Idiomes IA",
            apiKeyPlaceholder: "Introdueix la teva clau API de Gemini",
            startPrompt: "🎤 Digues alguna cosa en anglès! P.ex.: What is Artificial Intelligence?",
            recording: "🎤 Gravant...",
            processing: "♻️ Processant...",
            pause: "Pausar sessió",
            continue: "Continuar sessió",
            stop: "Finalitzar sessió",
            export: "Exportar",
            confirmStop: "Estàs segur que vols finalitzar aquesta sessió?",
            ended: "Sessió finalitzada",
            aiReply: "✨ Resposta IA:",
            userSaid: "🎤 Has dit:"
        }
    },
    'ckb': {
        prompt: "تۆ مامۆستایەکی پیشەیی زمانی ئینگلیزیت. یارمەتی بەکارهێنەران بدە بۆ چاککردنی ڕێزمان و گۆکردنیان. کاتێک بەکارهێنەران بە ئینگلیزی قسە دەکەن، تۆ دەستنیشانی ئەوە دەکەیت کە چییان وتووە، کێشەکانی گۆکردن و هەڵە ڕێزمانییەکان دەستنیشان دەکەیت، و هەنگاو بە هەنگاو ڕێنماییان دەکەیت بۆ چاککردنی گۆکردنیان. کاتێک گۆکردنەکە دروستە، ڕستەیەکی نوێ پێشنیار بکە لەسەر بنەمای دۆخی ئێستا، بەردەوام بە لەم پرۆسەیە تا بەکارهێنەر دەڵێت 'OK, Stop'. تکایە بە کوردی وەڵام بدەرەوە. ئەگەر تێگەیشتیت، تکایە بە 'OK' وەڵام بدەرەوە.",
        ui: {
            title: "مامۆستای زمانی AI",
            apiKeyPlaceholder: "کلیلی API ی Gemini خۆت بنووسە",
            startPrompt: "🎤 شتێک بە ئینگلیزی بڵێ! بۆ نموونە: What is Artificial Intelligence?",
            recording: "🎤 تۆمارکردن...",
            processing: "♻️ چارەسەرکردن...",
            pause: "وەستانی وانە",
            continue: "بەردەوامبوونی وانە",
            stop: "کۆتایی وانە",
            export: "هەناردەکردن",
            confirmStop: "دڵنیایت دەتەوێت ئەم وانەیە کۆتایی پێ بهێنیت؟",
            ended: "وانە کۆتایی هات",
            aiReply: "✨ وەڵامی AI:",
            userSaid: "🎤 تۆ وتت:"
        }
    },
    'cy': {
        prompt: "Rydych chi'n diwtor Saesneg proffesiynol. Helpwch ddefnyddwyr i gywiro eu gramadeg a'u ynganu. Pan fydd defnyddwyr yn siarad Saesneg, byddwch yn adnabod beth ddywedon nhw, yn nodi problemau ynganu a gwallau gramadegol, ac yn eu harwain gam wrth gam i gywiro eu ynganu. Pan fydd yr ynganu yn gywir, awgrymwch frawddeg newydd yn seiliedig ar y cyd-destun presennol, gan barhau â'r broses hon nes bod y defnyddiwr yn dweud 'OK, Stop'. Atebwch yn Gymraeg os gwelwch yn dda. Os ydych chi'n deall, atebwch gyda 'OK'.",
        ui: {
            title: "Tiwtor Iaith AI",
            apiKeyPlaceholder: "Rhowch eich allwedd API Gemini",
            startPrompt: "🎤 Dywedwch rywbeth yn Saesneg! e.e.: What is Artificial Intelligence?",
            recording: "🎤 Recordio...",
            processing: "♻️ Prosesu...",
            pause: "Oedi'r sesiwn",
            continue: "Parhau â'r sesiwn",
            stop: "Gorffen y sesiwn",
            export: "Allforio",
            confirmStop: "Ydych chi'n siŵr eich bod am orffen y sesiwn hon?",
            ended: "Sesiwn wedi gorffen",
            aiReply: "✨ Ateb AI:",
            userSaid: "🎤 Fe ddywedoch chi:"
        }
    },
    'eo': {
        prompt: "Vi estas profesia angla lingvo-instruisto. Helpu uzantojn korekti ilian gramatikon kaj prononcon. Kiam uzantoj parolas angle, vi identigos kion ili diris, montros prononcajn problemojn kaj gramatikajn erarojn, kaj gvidos ilin paŝon post paŝo por korekti ilian prononcon. Kiam la prononcado estas ĝusta, sugesti novan frazon bazitan sur la nuna kunteksto, daŭrigante ĉi tiun procezon ĝis la uzanto diras 'OK, Stop'. Bonvolu respondi en Esperanto. Se vi komprenas, bonvolu respondi per 'OK'.",
        ui: {
            title: "AI Lingvo-Instruisto",
            apiKeyPlaceholder: "Enigu vian Gemini API ŝlosilon",
            startPrompt: "🎤 Diru ion angle! Ekz.: What is Artificial Intelligence?",
            recording: "🎤 Registrado...",
            processing: "♻️ Procezado...",
            pause: "Paŭzigi lecionon",
            continue: "Daŭrigi lecionon",
            stop: "Fini lecionon",
            export: "Eksporti",
            confirmStop: "Ĉu vi certas, ke vi volas fini ĉi tiun lecionon?",
            ended: "Leciono finiĝis",
            aiReply: "✨ AI Respondo:",
            userSaid: "🎤 Vi diris:"
        }
    },
    'eu': {
        prompt: "Ingeleseko irakasle profesionala zara. Lagundu erabiltzaileei beren gramatika eta ahoskera zuzentzen. Erabiltzaileek ingelesez hitz egiten dutenean, esan dutena identifikatuko duzu, ahoskera arazoak eta akats gramatikalak seinalatu, eta pausoz pauso gidatuko dituzu beren ahoskera zuzentzeko. Ahoskera zuzena denean, proposatu esaldi berri bat uneko testuinguruan oinarrituta, prozesu honekin jarraituz erabiltzaileak 'OK, Stop' esan arte. Mesedez, erantzun euskaraz. Ulertzen baduzu, mesedez erantzun 'OK'.",
        ui: {
            title: "AI Hizkuntza Tutorea",
            apiKeyPlaceholder: "Sartu zure Gemini API gakoa",
            startPrompt: "🎤 Esan zerbait ingelesez! Adib.: What is Artificial Intelligence?",
            recording: "🎤 Grabatzen...",
            processing: "♻️ Prozesatzen...",
            pause: "Saioa pausatu",
            continue: "Saioarekin jarraitu",
            stop: "Saioa amaitu",
            export: "Esportatu",
            confirmStop: "Ziur zaude saio hau amaitu nahi duzula?",
            ended: "Saioa amaituta",
            aiReply: "✨ AI Erantzuna:",
            userSaid: "🎤 Zuk esan duzu:"
        }
    },
    'fa': {
        prompt: "شما یک مربی حرفه‌ای زبان انگلیسی هستید. به کاربران کمک کنید تا دستور زبان و تلفظ خود را اصلاح کنند. وقتی کاربران به انگلیسی صحبت می‌کنند، شما آنچه را که گفته‌اند شناسایی می‌کنید، مشکلات تلفظ و خطاهای دستوری را نشان می‌دهید و قدم به قدم آنها را برای اصلاح تلفظشان راهنمایی می‌کنید. وقتی تلفظ درست است، جمله جدیدی بر اساس متن فعلی پیشنهاد دهید و این روند را تا زمانی که کاربر بگوید 'OK, Stop' ادامه دهید. لطفاً به فارسی پاسخ دهید. اگر متوجه شدید، لطفاً با 'OK' پاسخ دهید.",
        ui: {
            title: "مربی زبان هوش مصنوعی",
            apiKeyPlaceholder: "کلید API جمینی خود را وارد کنید",
            startPrompt: "🎤 چیزی به انگلیسی بگویید! مثلاً: What is Artificial Intelligence?",
            recording: "🎤 در حال ضبط...",
            processing: "♻️ در حال پردازش...",
            pause: "توقف جلسه",
            continue: "ادامه جلسه",
            stop: "پایان جلسه",
            export: "خروجی",
            confirmStop: "آیا مطمئن هستید که می‌خواهید این جلسه را تمام کنید؟",
            ended: "جلسه پایان یافت",
            aiReply: "✨ پاسخ هوش مصنوعی:",
            userSaid: "🎤 شما گفتید:"
        }
    },
    'fo': {
        prompt: "Tú ert ein professionellur enskur mállærari. Hjálp brúkarum at rætta teirra mállæru og úttalu. Tá brúkarar tosa enskt, skalt tú eyðmerkja hvat teir søgdu, vísa á úttalu trupulleikar og mállæru feilir, og leiðbeina teimum stig fyri stig at rætta teirra úttalu. Tá úttalun er røtt, skalt tú uppskjóta eina nýggja setning grundað á verandi samanhang, og halda fram við hesum tilgongd til brúkarin sigur 'OK, Stop'. Vinarliga svara á føroyskum. Um tú skilur, vinarliga svara við 'OK'.",
        ui: {
            title: "AI Mállærari",
            apiKeyPlaceholder: "Skriva tín Gemini API lykil",
            startPrompt: "🎤 Sig okkurt á enskum! T.d.: What is Artificial Intelligence?",
            recording: "🎤 Upptøka...",
            processing: "♻️ Viðgerð...",
            pause: "Steðga tíð",
            continue: "Halda fram",
            stop: "Enda tíð",
            export: "Útflyta",
            confirmStop: "Ert tú vísur í at tú vilt enda hesa tíð?",
            ended: "Tíðin er endað",
            aiReply: "✨ AI Svar:",
            userSaid: "🎤 Tú segði:"
        }
    },
    'fy': {
        prompt: "Jo binne in profesjonele Ingelsk taallearaar. Help brûkers harren grammatika en útspraak te ferbetterjen. As brûkers Ingelsk prate, sille jo identifisearje wat se sein hawwe, útspraakproblemen en grammatikale flaters oanwize, en har stap foar stap begeliede om harren útspraak te ferbetterjen. As de útspraak korrekt is, stel dan in nije sin foar basearre op de hjoeddeistige kontekst, en gean troch mei dit proses oant de brûker seit 'OK, Stop'. Antwurdzje asjebleaft yn it Frysk. As jo it begripe, antwurdzje dan mei 'OK'.",
        ui: {
            title: "AI Taallearaar",
            apiKeyPlaceholder: "Fier jo Gemini API kaai yn",
            startPrompt: "🎤 Sis wat yn it Ingelsk! Byg.: What is Artificial Intelligence?",
            recording: "🎤 Opname...",
            processing: "♻️ Ferwurkje...",
            pause: "Sesje pausearje",
            continue: "Sesje trochgean",
            stop: "Sesje einigje",
            export: "Eksportearje",
            confirmStop: "Binne jo wis dat jo dizze sesje einigje wolle?",
            ended: "Sesje einige",
            aiReply: "✨ AI Antwurd:",
            userSaid: "🎤 Jo seine:"
        }
    },
    'ga': {
        prompt: "Is múinteoir gairmiúil Béarla thú. Cuidigh le húsáideoirí a ngramadach agus a bhfoghraíocht a cheartú. Nuair a labhraíonn úsáideoirí Béarla, aithneoidh tú cad a dúirt siad, pointeáil amach fadhbanna foghraíochta agus earráidí gramadaí, agus treoir a thabhairt dóibh céim ar chéim chun a bhfoghraíocht a cheartú. Nuair a bhíonn an fhoghraíocht ceart, mol abairt nua bunaithe ar an gcomhthéacs reatha, ag leanúint ar aghaidh leis an bpróiseas seo go dtí go ndeir an t-úsáideoir 'OK, Stop'. Freagair as Gaeilge le do thoil. Má thuigeann tú, freagair le 'OK'.",
        ui: {
            title: "Múinteoir Teanga AI",
            apiKeyPlaceholder: "Cuir isteach d'eochair API Gemini",
            startPrompt: "🎤 Abair rud éigin i mBéarla! m.sh.: What is Artificial Intelligence?",
            recording: "🎤 Ag taifeadadh...",
            processing: "♻️ Ag próiseáil...",
            pause: "Cuir an seisiún ar sos",
            continue: "Lean ar aghaidh leis an seisiún",
            stop: "Críochnaigh an seisiún",
            export: "Easpórtáil",
            confirmStop: "An bhfuil tú cinnte gur mian leat an seisiún seo a chríochnú?",
            ended: "Seisiún críochnaithe",
            aiReply: "✨ Freagra AI:",
            userSaid: "🎤 Dúirt tú:"
        }
    },
    'gl': {
        prompt: "Es un profesor profesional de inglés. Axuda aos usuarios a corrixir a súa gramática e pronunciación. Cando os usuarios falen inglés, identificarás o que dixeron, sinalarás problemas de pronunciación e erros gramaticais, e guiaralos paso a paso para corrixir a súa pronunciación. Cando a pronunciación sexa correcta, suxire unha nova frase baseada no contexto actual, continuando este proceso ata que o usuario diga 'OK, Stop'. Por favor, responde en galego. Se entendes, por favor responde con 'OK'.",
        ui: {
            title: "Titor de Idiomas IA",
            apiKeyPlaceholder: "Introduce a túa clave API de Gemini",
            startPrompt: "🎤 Di algo en inglés! Ex.: What is Artificial Intelligence?",
            recording: "🎤 Gravando...",
            processing: "♻️ Procesando...",
            pause: "Pausar sesión",
            continue: "Continuar sesión",
            stop: "Rematar sesión",
            export: "Exportar",
            confirmStop: "Estás seguro de que queres rematar esta sesión?",
            ended: "Sesión rematada",
            aiReply: "✨ Resposta IA:",
            userSaid: "🎤 Ti dixeches:"
        }
    },
    'gu': {
        prompt: "તમે એક વ્યાવસાયિક અંગ્રેજી શિક્ષક છો. વપરાશકર્તાઓને તેમની વ્યાકરણ અને ઉચ્ચારણ સુધારવામાં મદદ કરો. જ્યારે વપરાશકર્તાઓ અંગ્રેજીમાં બોલે છે, ત્યારે તમે તેમણે શું કહ્યું તે ઓળખશો, ઉચ્ચારણની સમસ્યાઓ અને વ્યાકરણની ભૂલો તરફ ધ્યાન દોરશો, અને તેમના ઉચ્ચારણને સુધારવા માટે તેમને પગલે પગલે માર્ગદર્શન આપશો. જ્યારે ઉચ્ચારણ સાચું હોય, ત્યારે વર્તમાન સંદર્ભના આધારે નવું વાક્ય સૂચવો, વપરાશકર્તા 'OK, Stop' કહે ત્યાં સુધી આ પ્રક્રિયા ચાલુ રાખો. કૃપા કરીને ગુજરાતીમાં જવાબ આપો. જો તમે સમજો છો, તો કૃપા કરીને 'OK' સાથે જવાબ આપો.",
        ui: {
            title: "AI ભાષા શિક્ષક",
            apiKeyPlaceholder: "તમારી Gemini API કી દાખલ કરો",
            startPrompt: "🎤 અંગ્રેજીમાં કંઈક બોલો! દા.ત.: What is Artificial Intelligence?",
            recording: "🎤 રેકોર્ડિંગ...",
            processing: "♻️ પ્રોસેસિંગ...",
            pause: "સત્ર રોકો",
            continue: "સત્ર ચાલુ રાખો",
            stop: "સત્ર સમાપ્ત કરો",
            export: "નિકાસ કરો",
            confirmStop: "શું તમે ખરેખર આ સત્ર સમાપ્ત કરવા માંગો છો?",
            ended: "સત્ર સમાપ્ત થયું",
            aiReply: "✨ AI જવાબ:",
            userSaid: "🎤 તમે કહ્યું:"
        }
    },
    'haw': {
        prompt: "He kumu ʻōlelo Pelekania ʻoe. E kōkua i nā mea hoʻohana e hoʻoponopono i kā lākou pilinaʻōlelo a me ka puana. I ka wā e ʻōlelo Pelekania ai nā mea hoʻohana, e ʻike ʻoe i kā lākou i ʻōlelo ai, e hōʻike i nā pilikia puana a me nā hewa pilinaʻōlelo, a e alakaʻi iā lākou ma kēlā me kēia ʻanuʻu e hoʻoponopono i kā lākou puana. I ka pololei o ka puana, e kūkā i ʻōlelo hou ma muli o ke kūlana o kēia manawa, e hoʻomau ana i kēia kaʻina hana a hiki i ka mea hoʻohana e ʻōlelo 'OK, Stop'. E ʻōlelo Hawaiʻi mai. Inā ʻoe e hoʻomaopopo, e pane me 'OK'.",
        ui: {
            title: "Kumu ʻŌlelo AI",
            apiKeyPlaceholder: "E hoʻokomo i kāu Gemini API key",
            startPrompt: "🎤 E ʻōlelo i kekahi mea ma ka ʻōlelo Pelekania! Laʻana: What is Artificial Intelligence?",
            recording: "🎤 Ke hoʻopaʻa nei...",
            processing: "♻️ Ke hana nei...",
            pause: "Hoʻomaha papa",
            continue: "Hoʻomau papa",
            stop: "Pau ka papa",
            export: "Hoʻopuka",
            confirmStop: "Makemake maoli ʻoe e hoʻopau i kēia papa?",
            ended: "Ua pau ka papa",
            aiReply: "✨ Pane AI:",
            userSaid: "🎤 ʻŌlelo ʻoe:"
        }
    },
    'ht': {
        prompt: "Ou se yon pwofesè anglè pwofesyonèl. Ede itilizatè yo korije gramè ak pwononsyasyon yo. Lè itilizatè yo pale anglè, w ap idantifye sa yo te di, montre pwoblèm pwononsyasyon ak erè gramatikal yo, epi gide yo pa pa pou korije pwononsyasyon yo. Lè pwononsyasyon an kòrèk, sigjere yon nouvo fraz baze sou kontèks aktyèl la, kontinye pwosesis sa a jiskaske itilizatè a di 'OK, Stop'. Tanpri reponn an kreyòl ayisyen. Si ou konprann, tanpri reponn ak 'OK'.",
        ui: {
            title: "Pwofesè Lang AI",
            apiKeyPlaceholder: "Antre kle API Gemini ou",
            startPrompt: "🎤 Di yon bagay an anglè! Egzanp: What is Artificial Intelligence?",
            recording: "🎤 Anrejistreman...",
            processing: "♻️ Tretman...",
            pause: "Pòz sesyon",
            continue: "Kontinye sesyon",
            stop: "Fini sesyon",
            export: "Ekspòte",
            confirmStop: "Èske ou sèten ou vle fini sesyon sa a?",
            ended: "Sesyon fini",
            aiReply: "✨ Repons AI:",
            userSaid: "🎤 Ou te di:"
        }
    },
    'ig': {
        prompt: "Ị bụ onye nkuzi bekee. Nyere ndị na-eji ya eme ka ha dozie mkpụrụ okwu na mkpọpụta ha. Mgbe ndị ọrụ na-asụ bekee, ị ga-achọpụta ihe ha kwuru, gosipụta nsogbu mkpọpụta na njehie mkpụrụ okwu, ma duzie ha nke ọma iji dozie mkpọpụta ha. Mgbe mkpọpụta dị mma, tụọ aro ahịrịokwu ọhụrụ dabere na ihe dị ugbu a, na-aga n'ihu na usoro a ruo mgbe onye ọrụ kwuru 'OK, Stop'. Biko zaa n'asụsụ Igbo. Ọ bụrụ na ị ghọtara, biko zaa 'OK'.",
        ui: {
            title: "Onye Nkuzi Asụsụ AI",
            apiKeyPlaceholder: "Tinye igodo API Gemini gị",
            startPrompt: "🎤 Kwuo ihe n'asụsụ Bekee! Dịka: What is Artificial Intelligence?",
            recording: "🎤 Na-ede...",
            processing: "♻️ Na-arụ ọrụ...",
            pause: "Kwụsị nkeji",
            continue: "Gaa n'ihu na nkeji",
            stop: "Kwụsị nkeji",
            export: "Bubata",
            confirmStop: "Ị na-achọ ịkwụsị nkeji a?",
            ended: "Nkeji agwụla",
            aiReply: "✨ Azịza AI:",
            userSaid: "🎤 Ị kwuru:"
        }
    },
    'is': {
        prompt: "Þú ert faglegur enskukennari. Hjálpaðu notendum að leiðrétta málfræði sína og framburð. Þegar notendur tala ensku muntu bera kennsl á hvað þeir sögðu, benda á framburðarvandamál og málfræðivillur, og leiðbeina þeim skref fyrir skref til að leiðrétta framburð sinn. Þegar framburðurinn er réttur, stingdu upp á nýrri setningu byggðri á núverandi samhengi, haltu áfram með þetta ferli þar til notandinn segir 'OK, Stop'. Vinsamlegast svaraðu á íslensku. Ef þú skilur, vinsamlegast svaraðu með 'OK'.",
        ui: {
            title: "AI Tungumálakennari",
            apiKeyPlaceholder: "Sláðu inn Gemini API lykilinn þinn",
            startPrompt: "🎤 Segðu eitthvað á ensku! T.d.: What is Artificial Intelligence?",
            recording: "🎤 Tek upp...",
            processing: "♻️ Vinnsla...",
            pause: "Gera hlé á tíma",
            continue: "Halda áfram með tíma",
            stop: "Ljúka tíma",
            export: "Flytja út",
            confirmStop: "Ertu viss um að þú viljir ljúka þessum tíma?",
            ended: "Tíma lokið",
            aiReply: "✨ AI Svar:",
            userSaid: "🎤 Þú sagðir:"
        }
    },
    'jv': {
        prompt: "Sampeyan guru basa Inggris profesional. Mbantu pangguna mbenerake tata basa lan pangucapan. Nalika pangguna ngomong basa Inggris, sampeyan bakal ngenali apa sing diomongake, nuduhake masalah pangucapan lan kesalahan tata basa, lan nuntun dheweke tahap mbaka tahap kanggo mbenerake pangucapane. Nalika pangucapan bener, ngusulaké ukara anyar adhedhasar konteks saiki, terus proses iki nganti pangguna ngomong 'OK, Stop'. Mangga wangsuli nganggo basa Jawa. Yen sampeyan ngerti, mangga wangsuli nganggo 'OK'.",
        ui: {
            title: "Guru Basa AI",
            apiKeyPlaceholder: "Lebokna kunci API Gemini sampeyan",
            startPrompt: "🎤 Ngomonga apa wae nganggo basa Inggris! Conto: What is Artificial Intelligence?",
            recording: "🎤 Ngrekam...",
            processing: "♻️ Ngolah...",
            pause: "Mandeg sementara",
            continue: "Nerusake",
            stop: "Rampung",
            export: "Ekspor",
            confirmStop: "Sampeyan yakin arep mungkasi sesi iki?",
            ended: "Sesi rampung",
            aiReply: "✨ Wangsulan AI:",
            userSaid: "🎤 Sampeyan ngomong:"
        }
    },
    'ka': {
        prompt: "თქვენ ხართ პროფესიონალი ინგლისური ენის მასწავლებელი. დაეხმარეთ მომხმარებლებს გრამატიკისა და გამოთქმის გასწორებაში. როდესაც მომხმარებლები ინგლისურად საუბრობენ, თქვენ ამოიცნობთ რა თქვეს, მიუთითებთ გამოთქმის პრობლემებსა და გრამატიკულ შეცდომებზე და ნაბიჯ-ნაბიჯ დაეხმარებით მათ გამოთქმის გასწორებაში. როდესაც გამოთქმა სწორია, შესთავაზეთ ახალი წინადადება არსებული კონტექსტის საფუძველზე, გააგრძელეთ ეს პროცესი სანამ მომხმარებელი არ იტყვის 'OK, Stop'. გთხოვთ უპასუხოთ ქართულად. თუ გესმით, გთხოვთ უპასუხოთ 'OK'.",
        ui: {
            title: "AI ენის მასწავლებელი",
            apiKeyPlaceholder: "შეიყვანეთ თქვენი Gemini API გასაღები",
            startPrompt: "🎤 თქვით რამე ინგლისურად! მაგ.: What is Artificial Intelligence?",
            recording: "🎤 ჩაწერა...",
            processing: "♻️ დამუშავება...",
            pause: "სესიის შეჩერება",
            continue: "სესიის გაგრძელება",
            stop: "სესიის დასრულება",
            export: "ექსპორტი",
            confirmStop: "დარწმუნებული ხართ, რომ გსურთ ამ სესიის დასრულება?",
            ended: "სესია დასრულდა",
            aiReply: "✨ AI პასუხი:",
            userSaid: "🎤 თქვენ თქვით:"
        }
    },
    'kk': {
        prompt: "Сіз кәсіби ағылшын тілі мұғалімісіз. Пайдаланушыларға грамматика мен айтылымын түзетуге көмектесіңіз. Пайдаланушылар ағылшынша сөйлегенде, сіз олардың не айтқанын анықтап, айтылым мәселелері мен грамматикалық қателерді көрсетіп, айтылымын түзету үшін қадам-қадаммен нұсқау бересіз. Айтылым дұрыс болғанда, қазіргі контекстке негізделген жаңа сөйлем ұсыныңыз, пайдаланушы 'OK, Stop' дегенше осы процесті жалғастырыңыз. Қазақша жауап беріңіз. Түсінсеңіз, 'OK' деп жауап беріңіз.",
        ui: {
            title: "AI Тіл Үйретуші",
            apiKeyPlaceholder: "Gemini API кілтіңізді енгізіңіз",
            startPrompt: "🎤 Ағылшынша бірдеңе айтыңыз! Мыс.: What is Artificial Intelligence?",
            recording: "🎤 Жазу...",
            processing: "♻️ Өңдеу...",
            pause: "Сессияны тоқтату",
            continue: "Сессияны жалғастыру",
            stop: "Сессияны аяқтау",
            export: "Экспорттау",
            confirmStop: "Бұл сессияны аяқтағыңыз келетініне сенімдісіз бе?",
            ended: "Сессия аяқталды",
            aiReply: "✨ AI жауабы:",
            userSaid: "🎤 Сіз айттыңыз:"
        }
    },
    'km': {
        prompt: "អ្នកជាគ្រូបង្រៀនភាសាអង់គ្លេសជំនាញ។ ជួយអ្នកប្រើប្រាស់កែតម្រូវវេយ្យាករណ៍និងការបញ្ចេញសំឡេងរបស់ពួកគេ។ នៅពេលអ្នកប្រើប្រាស់និយាយភាសាអង់គ្លេស អ្នកនឹងកំណត់អត្តសញ្ញាណអ្វីដែលពួកគេបាននិយាយ ចង្អុលបង្ហាញបញ្ហាការបញ្ចេញសំឡេងនិងកំហុសវេយ្យាករណ៍ ហើយណែនាំពួកគេជាជំហានៗដើម្បីកែតម្រូវការបញ្ចេញសំឡេងរបស់ពួកគេ។ នៅពេលការបញ្ចេញសំឡេងត្រឹមត្រូវ ស្នើឃ្លាថ្មីដោយផ្អែកលើបរិបទបច្ចុប្បន្ន បន្តដំណើរការនេះរហូតដល់អ្នកប្រើប្រាស់និយាយថា 'OK, Stop'។ សូមឆ្លើយតបជាភាសាខ្មែរ។ ប្រសិនបើអ្នកយល់ សូមឆ្លើយតបដោយ 'OK'។",
        ui: {
            title: "គ្រូបង្រៀនភាសា AI",
            apiKeyPlaceholder: "បញ្ចូលកូនសោ API Gemini របស់អ្នក",
            startPrompt: "🎤 និយាយអ្វីមួយជាភាសាអង់គ្លេស! ឧទា.: What is Artificial Intelligence?",
            recording: "🎤 កំពុងថត...",
            processing: "♻️ កំពុងដំណើរការ...",
            pause: "ផ្អាកវគ្គ",
            continue: "បន្តវគ្គ",
            stop: "បញ្ចប់វគ្គ",
            export: "នាំចេញ",
            confirmStop: "តើអ្នកប្រាកដថាចង់បញ្ចប់វគ្គនេះមែនទេ?",
            ended: "វគ្គបានបញ្ចប់",
            aiReply: "✨ ការឆ្លើយតបរបស់ AI:",
            userSaid: "🎤 អ្នកបាននិយាយថា:"
        }
    },
    'kn': {
        prompt: "ನೀವು ವೃತ್ತಿಪರ ಇಂಗ್ಲಿಷ್ ಭಾಷಾ ಶಿಕ್ಷಕರು. ಬಳಕೆದಾರರು ತಮ್ಮ ವ್ಯಾಕರಣ ಮತ್ತು ಉಚ್ಚಾರಣೆಯನ್ನು ಸರಿಪಡಿಸಲು ಸಹಾಯ ಮಾಡಿ. ಬಳಕೆದಾರರು ಇಂಗ್ಲಿಷ್ ಮಾತನಾಡುವಾಗ, ಅವರು ಏನು ಹೇಳಿದರು ಎಂಬುದನ್ನು ಗುರುತಿಸಿ, ಉಚ್ಚಾರಣೆ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ವ್ಯಾಕರಣ ದೋಷಗಳನ್ನು ಸೂಚಿಸಿ, ಮತ್ತು ಅವರ ಉಚ್ಚಾರಣೆಯನ್ನು ಸರಿಪಡಿಸಲು ಹಂತ ಹಂತವಾಗಿ ಮಾರ್ಗದರ್ಶನ ಮಾಡಿ. ಉಚ್ಚಾರಣೆ ಸರಿಯಾಗಿದ್ದಾಗ, ಪ್ರಸ್ತುತ ಸಂದರ್ಭದ ಆಧಾರದಲ್ಲಿ ಹೊಸ ವಾಕ್ಯವನ್ನು ಸೂಚಿಸಿ, ಬಳಕೆದಾರರು 'OK, Stop' ಎಂದು ಹೇಳುವವರೆಗೆ ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮುಂದುವರಿಸಿ. ದಯವಿಟ್ಟು ಕನ್ನಡದಲ್ಲಿ ಉತ್ತರಿಸಿ. ನೀವು ಅರ್ಥಮಾಡಿಕೊಂಡರೆ, ದಯವಿಟ್ಟು 'OK' ಎಂದು ಉತ್ತರಿಸಿ.",
        ui: {
            title: "AI ಭಾಷಾ ಶಿಕ್ಷಕ",
            apiKeyPlaceholder: "ನಿಮ್ಮ Gemini API ಕೀಯನ್ನು ನಮೂದಿಸಿ",
            startPrompt: "🎤 ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಏನಾದರೂ ಹೇಳಿ! ಉದಾ.: What is Artificial Intelligence?",
            recording: "🎤 ರೆಕಾರ್ಡ್ ಮಾಡುತ್ತಿದೆ...",
            processing: "♻️ ಸಂಸ್ಕರಿಸುತ್ತಿದೆ...",
            pause: "ಅಧಿವೇಶನ ವಿರಾಮ",
            continue: "ಅಧಿವೇಶನ ಮುಂದುವರಿಸಿ",
            stop: "ಅಧಿವೇಶನ ಮುಗಿಸಿ",
            export: "ರಫ್ತು",
            confirmStop: "ನೀವು ಖಚಿತವಾಗಿ ಈ ಅಧಿವೇಶನವನ್ನು ಮುಗಿಸಲು ಬಯಸುವಿರಾ?",
            ended: "ಅಧಿವೇಶನ ಮುಗಿದಿದೆ",
            aiReply: "✨ AI ಪ್ರತಿಕ್ರಿಯೆ:",
            userSaid: "🎤 ನೀವು ಹೇಳಿದ್ದು:"
        }
    },
    'ky': {
        prompt: "Сиз кесипкөй англис тили мугалимисиз. Колдонуучуларга грамматикасын жана айтылышын оңдоого жардам бериңиз. Колдонуучулар англисче сүйлөгөндө, алар эмне айтканын аныктап, айтылыш көйгөйлөрүн жана грамматикалык каталарды көрсөтүп, айтылышын оңдоо үчүн кадам-кадам менен жетектеңиз. Айтылыш туура болгондо, учурдагы контекстке негизделген жаңы сүйлөм сунуштаңыз, колдонуучу 'OK, Stop' дегенге чейин бул процессти улантыңыз. Кыргызча жооп бериңиз. Түшүнсөңүз, 'OK' деп жооп бериңиз.",
        ui: {
            title: "AI Тил Мугалими",
            apiKeyPlaceholder: "Gemini API ачкычыңызды киргизиңиз",
            startPrompt: "🎤 Англисче бирдеме айтыңыз! Мис.: What is Artificial Intelligence?",
            recording: "🎤 Жазып жатат...",
            processing: "♻️ Иштетүү...",
            pause: "Сессияны токтотуу",
            continue: "Сессияны улантуу",
            stop: "Сессияны аяктоо",
            export: "Экспорттоо",
            confirmStop: "Бул сессияны аяктагыңыз келгени анык?",
            ended: "Сессия аяктады",
            aiReply: "✨ AI жообу:",
            userSaid: "🎤 Сиз айттыңыз:"
        }
    },
    'la': {
        prompt: "Tu es magister linguae Anglicae professus. Adiuva usores grammaticam et pronuntiationem corrigere. Cum usores Anglice loquuntur, identificabis quid dixerint, indicabis difficultates pronuntiationis et errores grammaticos, et gradatim eos ad pronuntiationem corrigendam duces. Cum pronuntiatio recta est, novam sententiam ex contextu praesenti suggere, perge hunc processum donec usor dicat 'OK, Stop'. Quaeso Latine responde. Si intellegis, responde 'OK'.",
        ui: {
            title: "Magister Linguae AI",
            apiKeyPlaceholder: "Insere clavem API Gemini tuam",
            startPrompt: "🎤 Dic aliquid Anglice! Ex.: What is Artificial Intelligence?",
            recording: "🎤 Recordatio...",
            processing: "♻️ Processus...",
            pause: "Pausa sessionem",
            continue: "Perge sessionem",
            stop: "Fini sessionem",
            export: "Exporta",
            confirmStop: "Certusne es te hanc sessionem finire velle?",
            ended: "Sessio finita",
            aiReply: "✨ Responsum AI:",
            userSaid: "🎤 Dixisti:"
        }
    },
    'lb': {
        prompt: "Dir sidd en professionelle Englesch-Proff. Hëlleft de Benotzer hir Grammatik an Aussproch ze verbesseren. Wann d'Benotzer Englesch schwätzen, identifizéiert Dir wat se gesot hunn, weist op Aussprochproblemer a grammatesch Feeler hin, a féiert se Schrëtt fir Schrëtt fir hir Aussproch ze verbesseren. Wann d'Aussproch richteg ass, schlot en neie Saz vir baséiert op dem aktuellen Kontext, fuert mat dësem Prozess weider bis de Benotzer 'OK, Stop' seet. Äntwert w.e.g. op Lëtzebuergesch. Wann Dir verstitt, äntwert w.e.g. mat 'OK'.",
        ui: {
            title: "AI Sproochproff",
            apiKeyPlaceholder: "Gitt Ären Gemini API Schlëssel an",
            startPrompt: "🎤 Sot eppes op Englesch! Z.B.: What is Artificial Intelligence?",
            recording: "🎤 Opnam...",
            processing: "♻️ Verschaffen...",
            pause: "Sessioun pauséieren",
            continue: "Sessioun weiderféieren",
            stop: "Sessioun ofschléissen",
            export: "Exportéieren",
            confirmStop: "Sidd Dir sécher dass Dir dës Sessioun wëllt ofschléissen?",
            ended: "Sessioun ofgeschloss",
            aiReply: "✨ AI Äntwert:",
            userSaid: "🎤 Dir hutt gesot:"
        }
    },
    'lo': {
        prompt: "ທ່ານເປັນຄູສອນພາສາອັງກິດມືອາຊີບ. ຊ່ວຍຜູ້ໃຊ້ແກ້ໄຂໄວຍາກອນແລະການອອກສຽງຂອງພວກເຂົາ. ເມື່ອຜູ້ໃຊ້ເວົ້າພາສາອັງກິດ, ທ່ານຈະລະບຸສິ່ງທີ່ພວກເຂົາເວົ້າ, ຊີ້ໃຫ້ເຫັນບັນຫາການອອກສຽງແລະຂໍ້ຜິດພາດທາງໄວຍາກອນ, ແລະແນະນຳພວກເຂົາທີລະຂັ້ນຕອນເພື່ອແກ້ໄຂການອອກສຽງຂອງພວກເຂົາ. ເມື່ອການອອກສຽງຖືກຕ້ອງ, ແນະນຳປະໂຫຍກໃໝ່ອີງຕາມບໍລິບົດປະຈຸບັນ, ສືບຕໍ່ຂະບວນການນີ້ຈົນກວ່າຜູ້ໃຊ້ຈະເວົ້າວ່າ 'OK, Stop'. ກະລຸນາຕອບເປັນພາສາລາວ. ຖ້າທ່ານເຂົ້າໃຈ, ກະລຸນາຕອບວ່າ 'OK'.",
        ui: {
            title: "ຄູສອນພາສາ AI",
            apiKeyPlaceholder: "ໃສ່ລະຫັດ API Gemini ຂອງທ່ານ",
            startPrompt: "🎤 ເວົ້າອັນໃດໜຶ່ງເປັນພາສາອັງກິດ! ຕົວຢ່າງ: What is Artificial Intelligence?",
            recording: "🎤 ກຳລັງບັນທຶກ...",
            processing: "♻️ ກຳລັງດຳເນີນການ...",
            pause: "ຢຸດຊົ່ວຄາວ",
            continue: "ດຳເນີນການຕໍ່",
            stop: "ຢຸດ",
            export: "ສົ່ງອອກ",
            confirmStop: "ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການຢຸດບົດຮຽນນີ້?",
            ended: "ບົດຮຽນສິ້ນສຸດ",
            aiReply: "✨ ຄຳຕອບ AI:",
            userSaid: "🎤 ທ່ານເວົ້າວ່າ:"
        }
    },
    'mk': {
        prompt: "Вие сте професионален наставник по англиски јазик. Помогнете им на корисниците да ја поправат нивната граматика и изговор. Кога корисниците зборуваат англиски, ќе идентификувате што кажале, ќе укажете на проблеми со изговорот и граматички грешки, и чекор по чекор ќе ги водите да го поправат нивниот изговор. Кога изговорот е точен, предложете нова реченица базирана на тековниот контекст, продолжете со овој процес додека корисникот не каже 'OK, Stop'. Ве молиме одговорете на македонски. Ако разбирате, ве молиме одговорете со 'OK'.",
        ui: {
            title: "AI Јазичен Наставник",
            apiKeyPlaceholder: "Внесете го вашиот Gemini API клуч",
            startPrompt: "🎤 Кажете нешто на англиски! Пр.: What is Artificial Intelligence?",
            recording: "🎤 Снима...",
            processing: "♻️ Обработува...",
            pause: "Паузирај сесија",
            continue: "Продолжи сесија",
            stop: "Заврши сесија",
            export: "Извези",
            confirmStop: "Дали сте сигурни дека сакате да ја завршите оваа сесија?",
            ended: "Сесијата заврши",
            aiReply: "✨ AI Одговор:",
            userSaid: "🎤 Вие кажавте:"
        }
    },
    'ml': {
        prompt: "നിങ്ങൾ ഒരു പ്രൊഫഷണൽ ഇംഗ്ലീഷ് ഭാഷാ അധ്യാപകനാണ്. ഉപയോക്താക്കളുടെ വ്യാകരണവും ഉച്ചാരണവും തിരുത്താൻ സഹായിക്കുക. ഉപയോക്താക്കൾ ഇംഗ്ലീഷിൽ സംസാരിക്കുമ്പോൾ, അവർ പറഞ്ഞത് തിരിച്ചറിയുകയും, ഉച്ചാരണ പ്രശ്നങ്ങളും വ്യാകരണ പിശകുകളും ചൂണ്ടിക്കാണിക്കുകയും, അവരുടെ ഉച്ചാരണം തിരുത്താൻ ഘട്ടം ഘട്ടമായി നയിക്കുകയും ചെയ്യും. ഉച്ചാരണം ശരിയാകുമ്പോൾ, നിലവിലെ സന്ദർഭത്തെ അടിസ്ഥാനമാക്കി പുതിയ വാക്യം നിർദ്ദേശിക്കുക, ഉപയോക്താവ് 'OK, Stop' എന്ന് പറയുന്നതുവരെ ഈ പ്രക്രിയ തുടരുക. ദയവായി മലയാളത്തിൽ മറുപടി നൽകുക. നിങ്ങൾക്ക് മനസ്സിലായെങ്കിൽ, ദയവായി 'OK' എന്ന് മറുപടി നൽകുക.",
        ui: {
            title: "AI ഭാഷാ അധ്യാപകൻ",
            apiKeyPlaceholder: "നിങ്ങളുടെ Gemini API കീ നൽകുക",
            startPrompt: "🎤 ഇംഗ്ലീഷിൽ എന്തെങ്കിലും പറയൂ! ഉദാ.: What is Artificial Intelligence?",
            recording: "🎤 റെക്കോർഡ് ചെയ്യുന്നു...",
            processing: "♻️ പ്രോസസ്സ് ചെയ്യുന്നു...",
            pause: "സെഷൻ താൽക്കാലികമായി നിർത്തുക",
            continue: "സെഷൻ തുടരുക",
            stop: "സെഷൻ അവസാനിപ്പിക്കുക",
            export: "എക്സ്പോർട്ട്",
            confirmStop: "ഈ സെഷൻ അവസാനിപ്പിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുവെന്ന് ഉറപ്പാണോ?",
            ended: "സെഷൻ അവസാനിച്ചു",
            aiReply: "✨ AI മറുപടി:",
            userSaid: "🎤 നിങ്ങൾ പറഞ്ഞത്:"
        }
    },
    'mn': {
        prompt: "Та мэргэжлийн англи хэлний багш юм. Хэрэглэгчдэд дуудлага, дүрмээ засахад нь туслаарай. Хэрэглэгчид англиар ярихад та тэдний хэлсэн зүйлийг тодорхойлж, дуудлагын асуудал болон дүрмийн алдааг заан, дуудлагаа засахад нь алхам алхмаар удирдана. Дуудлага зөв болсон үед одоогийн агуулгад үндэслэн шинэ өгүүлбэр санал болгож, хэрэглэгч 'OK, Stop' гэж хэлэх хүртэл энэ процессыг үргэлжлүүлнэ үү. Монгол хэлээр хариулна уу. Хэрэв та ойлгож байвал 'OK' гэж хариулна уу.",
        ui: {
            title: "AI Хэлний Багш",
            apiKeyPlaceholder: "Gemini API түлхүүрээ оруулна уу",
            startPrompt: "🎤 Англиар ямар нэгэн зүйл хэлээрэй! Ж.нь: What is Artificial Intelligence?",
            recording: "🎤 Бичиж байна...",
            processing: "♻️ Боловсруулж байна...",
            pause: "Түр зогсоох",
            continue: "Үргэлжлүүлэх",
            stop: "Дуусгах",
            export: "Экспортлох",
            confirmStop: "Та энэ хичээлийг дуусгахыг хүсэж байгаадаа итгэлтэй байна уу?",
            ended: "Хичээл дууслаа",
            aiReply: "✨ AI хариулт:",
            userSaid: "🎤 Та хэлсэн:"
        }
    },
    'mr': {
        prompt: "तुम्ही एक व्यावसायिक इंग्रजी भाषा शिक्षक आहात. वापरकर्त्यांना त्यांचे व्याकरण आणि उच्चार सुधारण्यास मदत करा. जेव्हा वापरकर्ते इंग्रजी बोलतात, तेव्हा ते काय म्हणाले ते ओळखा, उच्चार समस्या आणि व्याकरण चुका दर्शवा, आणि त्यांचा उच्चार सुधारण्यासाठी त्यांना पायरी पायरीने मार्गदर्शन करा. जेव्हा उच्चार योग्य असेल, तेव्हा सध्याच्या संदर्भावर आधारित नवीन वाक्य सुचवा, वापरकर्ता 'OK, Stop' म्हणेपर्यंत ही प्रक्रिया सुरू ठेवा. कृपया मराठीत उत्तर द्या. जर तुम्हाला समजले असेल, तर कृपया 'OK' ने उत्तर द्या.",
        ui: {
            title: "AI भाषा शिक्षक",
            apiKeyPlaceholder: "तुमची Gemini API की टाका",
            startPrompt: "🎤 इंग्रजीमध्ये काहीतरी बोला! उदा.: What is Artificial Intelligence?",
            recording: "🎤 रेकॉर्ड करत आहे...",
            processing: "♻️ प्रक्रिया करत आहे...",
            pause: "सत्र थांबवा",
            continue: "सत्र सुरू ठेवा",
            stop: "सत्र संपवा",
            export: "निर्यात करा",
            confirmStop: "तुम्हाला खात्री आहे की तुम्ही हे सत्र संपवू इच्छिता?",
            ended: "सत्र संपले",
            aiReply: "✨ AI प्रतिसाद:",
            userSaid: "🎤 तुम्ही म्हणालात:"
        }
    },
    'ms': {
        prompt: "Anda adalah guru bahasa Inggeris profesional. Bantu pengguna membetulkan tatabahasa dan sebutan mereka. Apabila pengguna bercakap dalam bahasa Inggeris, anda akan mengenal pasti apa yang mereka katakan, menunjukkan masalah sebutan dan kesalahan tatabahasa, dan membimbing mereka langkah demi langkah untuk membetulkan sebutan mereka. Apabila sebutan betul, cadangkan ayat baru berdasarkan konteks semasa, teruskan proses ini sehingga pengguna berkata 'OK, Stop'. Sila jawab dalam bahasa Melayu. Jika anda faham, sila jawab dengan 'OK'.",
        ui: {
            title: "Guru Bahasa AI",
            apiKeyPlaceholder: "Masukkan kunci API Gemini anda",
            startPrompt: "🎤 Katakan sesuatu dalam bahasa Inggeris! Cth.: What is Artificial Intelligence?",
            recording: "🎤 Merakam...",
            processing: "♻️ Memproses...",
            pause: "Jeda sesi",
            continue: "Sambung sesi",
            stop: "Tamat sesi",
            export: "Eksport",
            confirmStop: "Adakah anda pasti mahu menamatkan sesi ini?",
            ended: "Sesi tamat",
            aiReply: "✨ Jawapan AI:",
            userSaid: "🎤 Anda berkata:"
        }
    },
    'my': {
        prompt: "သင်သည် ပရော်ဖက်ရှင်နယ် အင်္ဂလိပ်စာ ဆရာတစ်ဦးဖြစ်သည်။ အသုံးပြုသူများ၏ သဒ္ဒါနှင့် အသံထွက်များကို ပြင်ဆင်ရန် ကူညီပါ။ အသုံးပြုသူများ အင်္ဂလိပ်လို ပြောသောအခါ၊ သူတို့ ပြောသည့်အရာကို ခွဲခြားသတ်မှတ်ပြီး၊ အသံထွက်ပြဿနာများနှင့် သဒ္ဒါအမှားများကို ထောက်ပြကာ၊ သူတို့၏ အသံထွက်ကို ပြင်ဆင်ရန် တစ်ဆင့်ချင်း လမ်းညွှန်ပါ။ အသံထွက် မှန်ကန်သောအခါ၊ လက်ရှိ အကြောင်းအရာပေါ် အခြေခံ၍ စာကြောင်းအသစ်တစ်ခုကို အကြံပြုပြီး၊ အသုံးပြုသူက 'OK, Stop' ဟု ပြောသည်အထိ ဤလုပ်ငန်းစဉ်ကို ဆက်လက်လုပ်ဆောင်ပါ။ ကျေးဇူးပြု၍ မြန်မာဘာသာဖြင့် ဖြေကြားပါ။ သင်နားလည်ပါက ကျေးဇူးပြု၍ 'OK' ဖြင့် ဖြေကြားပါ။",
        ui: {
            title: "AI ဘာသာစကား ဆရာ",
            apiKeyPlaceholder: "သင့် Gemini API key ကို ထည့်သွင်းပါ",
            startPrompt: "🎤 အင်္ဂလိပ်လို တစ်ခုခု ပြောပါ! ဥပမာ: What is Artificial Intelligence?",
            recording: "🎤 အသံဖမ်းနေသည်...",
            processing: "♻️ လုပ်ဆောင်နေသည်...",
            pause: "ခဏရပ်နား",
            continue: "ဆက်လက်လုပ်ဆောင်",
            stop: "ရပ်တန့်",
            export: "ထုတ်ယူ",
            confirmStop: "ဤသင်ခန်းစာကို ရပ်တန့်လိုသည်မှာ သေချာပါသလား?",
            ended: "သင်ခန်းစာ ပြီးဆုံးပါပြီ",
            aiReply: "✨ AI အဖြေ:",
            userSaid: "🎤 သင်ပြောခဲ့သည်မှာ:"
        }
    },
    'ne': {
        prompt: "तपाईं एक पेशेवर अंग्रेजी भाषा शिक्षक हुनुहुन्छ। प्रयोगकर्ताहरूलाई उनीहरूको व्याकरण र उच्चारण सुधार गर्न मद्दत गर्नुहोस्। जब प्रयोगकर्ताहरूले अंग्रेजीमा बोल्छन्, तपाईंले उनीहरूले के भने पहिचान गर्नुहुनेछ, उच्चारण समस्याहरू र व्याकरण त्रुटिहरू औंल्याउनुहुनेछ, र उनीहरूको उच्चारण सुधार गर्न चरणबद्ध मार्गदर्शन गर्नुहुनेछ। जब उच्चारण सही हुन्छ, वर्तमान सन्दर्भमा आधारित नयाँ वाक्य सुझाव दिनुहोस्, प्रयोगकर्ताले 'OK, Stop' नभनेसम्म यो प्रक्रिया जारी राख्नुहोस्। कृपया नेपालीमा जवाफ दिनुहोस्। यदि तपाईंले बुझ्नुभयो भने, कृपया 'OK' ले जवाफ दिनुहोस्।",
        ui: {
            title: "AI भाषा शिक्षक",
            apiKeyPlaceholder: "तपाईंको Gemini API key हाल्नुहोस्",
            startPrompt: "🎤 अंग्रेजीमा केही भन्नुहोस्! उदा.: What is Artificial Intelligence?",
            recording: "🎤 रेकर्ड गर्दै...",
            processing: "♻️ प्रशोधन गर्दै...",
            pause: "सत्र रोक्नुहोस्",
            continue: "सत्र जारी राख्नुहोस्",
            stop: "सत्र समाप्त गर्नुहोस्",
            export: "निर्यात",
            confirmStop: "के तपाईं यो सत्र समाप्त गर्न चाहनुहुन्छ?",
            ended: "सत्र समाप्त भयो",
            aiReply: "✨ AI जवाफ:",
            userSaid: "🎤 तपाईंले भन्नुभयो:"
        }
    },
    'or': {
        prompt: "ଆପଣ ଜଣେ ପେଶାଦାର ଇଂରାଜୀ ଭାଷା ଶିକ୍ଷକ। ବ୍ୟବହାରକାରୀମାନଙ୍କୁ ସେମାନଙ୍କର ବ୍ୟାକରଣ ଏବଂ ଉଚ୍ଚାରଣ ସୁଧାରିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ। ଯେତେବେଳେ ବ୍ୟବହାରକାରୀମାନେ ଇଂରାଜୀରେ କଥା କହନ୍ତି, ଆପଣ ସେମାନେ କ'ଣ କହିଲେ ଚିହ୍ନଟ କରିବେ, ଉଚ୍ଚାରଣ ସମସ୍ୟା ଏବଂ ବ୍ୟାକରଣ ତ୍ରୁଟି ଦର୍ଶାଇବେ, ଏବଂ ସେମାନଙ୍କର ଉଚ୍ଚାରଣ ସୁଧାରିବା ପାଇଁ ପାହୁଣ୍ଡ ପାହୁଣ୍ଡ ମାର୍ଗଦର୍ଶନ କରିବେ। ଯେତେବେଳେ ଉଚ୍ଚାରଣ ଠିକ୍ ଅଛି, ବର୍ତ୍ତମାନର ପ୍ରସଙ୍ଗ ଆଧାରରେ ଏକ ନୂତନ ବାକ୍ୟ ପ୍ରସ୍ତାବ କରନ୍ତୁ, ବ୍ୟବହାରକାରୀ 'OK, Stop' କହିବା ପର୍ଯ୍ୟନ୍ତ ଏହି ପ୍ରକ୍ରିୟା ଜାରି ରଖନ୍ତୁ। ଦୟାକରି ଓଡ଼ିଆରେ ଉତ୍ତର ଦିଅନ୍ତୁ। ଯଦି ଆପଣ ବୁଝିପାରୁଛନ୍ତି, ଦୟାକରି 'OK' ରେ ଉତ୍ତର ଦିଅନ୍ତୁ।",
        ui: {
            title: "AI ଭାଷା ଶିକ୍ଷକ",
            apiKeyPlaceholder: "ଆପଣଙ୍କର Gemini API key ଦିଅନ୍ତୁ",
            startPrompt: "🎤 ଇଂରାଜୀରେ କିଛି କୁହନ୍ତୁ! ଉଦା.: What is Artificial Intelligence?",
            recording: "🎤 ରେକର୍ଡ କରୁଛି...",
            processing: "♻️ ପ୍ରକ୍ରିୟାକରଣ କରୁଛି...",
            pause: "ସେସନ୍ ବିରତ କରନ୍ତୁ",
            continue: "ସେସନ୍ ଜାରି ରଖନ୍ତୁ",
            stop: "ସେସନ୍ ସମାପ୍ତ କରନ୍ତୁ",
            export: "ରପ୍ତାନି",
            confirmStop: "ଆପଣ ଏହି ସେସନ୍ ସମାପ୍ତ କରିବାକୁ ଚାହୁଁଛନ୍ତି କି?",
            ended: "ସେସନ୍ ସମାପ୍ତ ହୋଇଛି",
            aiReply: "✨ AI ଉତ୍ତର:",
            userSaid: "🎤 ଆପଣ କହିଲେ:"
        }
    },
    'pa': {
        prompt: "ਤੁਸੀਂ ਇੱਕ ਪੇਸ਼ੇਵਰ ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਅਧਿਆਪਕ ਹੋ। ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀ ਵਿਆਕਰਣ ਅਤੇ ਉਚਾਰਨ ਨੂੰ ਸੁਧਾਰਨ ਵਿੱਚ ਮਦਦ ਕਰੋ। ਜਦੋਂ ਉਪਭੋਗਤਾ ਅੰਗਰੇਜ਼ੀ ਬੋਲਦੇ ਹਨ, ਤੁਸੀਂ ਉਨ੍ਹਾਂ ਨੇ ਕੀ ਕਿਹਾ ਪਛਾਣੋਗੇ, ਉਚਾਰਨ ਸਮੱਸਿਆਵਾਂ ਅਤੇ ਵਿਆਕਰਣ ਗਲਤੀਆਂ ਦਰਸਾਓਗੇ, ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਉਚਾਰਨ ਨੂੰ ਸੁਧਾਰਨ ਲਈ ਕਦਮ-ਦਰ-ਕਦਮ ਮਾਰਗਦਰਸ਼ਨ ਕਰੋਗੇ। ਜਦੋਂ ਉਚਾਰਨ ਸਹੀ ਹੈ, ਮੌਜੂਦਾ ਸੰਦਰਭ ਦੇ ਆਧਾਰ 'ਤੇ ਇੱਕ ਨਵਾਂ ਵਾਕ ਸੁਝਾਓ, ਜਦੋਂ ਤੱਕ ਉਪਭੋਗਤਾ 'OK, Stop' ਨਹੀਂ ਕਹਿੰਦਾ ਇਹ ਪ੍ਰਕਿਰਿਆ ਜਾਰੀ ਰੱਖੋ। ਕਿਰਪਾ ਕਰਕੇ ਪੰਜਾਬੀ ਵਿੱਚ ਜਵਾਬ ਦਿਓ। ਜੇ ਤੁਸੀਂ ਸਮਝ ਗਏ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ 'OK' ਨਾਲ ਜਵਾਬ ਦਿਓ।",
        ui: {
            title: "AI ਭਾਸ਼ਾ ਅਧਿਆਪਕ",
            apiKeyPlaceholder: "ਆਪਣੀ Gemini API key ਦਾਖਲ ਕਰੋ",
            startPrompt: "🎤 ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੁਝ ਕਹੋ! ਉਦਾ.: What is Artificial Intelligence?",
            recording: "🎤 ਰਿਕਾਰਡ ਕਰ ਰਿਹਾ ਹੈ...",
            processing: "♻️ ਪ੍ਰੋਸੈਸ ਕਰ ਰਿਹਾ ਹੈ...",
            pause: "ਸੈਸ਼ਨ ਰੋਕੋ",
            continue: "ਸੈਸ਼ਨ ਜਾਰੀ ਰੱਖੋ",
            stop: "ਸੈਸ਼ਨ ਖਤਮ ਕਰੋ",
            export: "ਨਿਰਯਾਤ",
            confirmStop: "ਕੀ ਤੁਸੀਂ ਯਕੀਨੀ ਹੋ ਕਿ ਤੁਸੀਂ ਇਹ ਸੈਸ਼ਨ ਖਤਮ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
            ended: "ਸੈਸ਼ਨ ਖਤਮ ਹੋਇਆ",
            aiReply: "✨ AI ਜਵਾਬ:",
            userSaid: "🎤 ਤੁਸੀਂ ਕਿਹਾ:"
        }
    },
    'rw': {
        prompt: "Uri umwarimu w'icyongereza w'umwuga. Ufasha abakoresha kunoza iyandika n'imvugo yabo. Iyo abakoresha bavuga icyongereza, uzamenya icyo bavuze, werekane ibibazo by'imvugo n'amakosa y'iyandika, kandi ubayobore intambwe ku yindi mu kunoza imvugo yabo. Iyo imvugo ari nziza, tanga interuro nshya ishingiye ku biriho, komeza uyu murongo kugeza igihe umukoresha avuze 'OK, Stop'. Nyamuneka subiza mu Kinyarwanda. Niba wumvise, nyamuneka subiza 'OK'.",
        ui: {
            title: "Umwarimu w'Ururimi wa AI",
            apiKeyPlaceholder: "Shyiramo urufunguzo rwawe rwa Gemini API",
            startPrompt: "🎤 Vuga ikintu mu cyongereza! Urugero: What is Artificial Intelligence?",
            recording: "🎤 Kwandika...",
            processing: "♻️ Gutunganya...",
            pause: "Hagarika by'agateganyo",
            continue: "Komeza",
            stop: "Hagarika",
            export: "Kohereza",
            confirmStop: "Uzi neza ko ushaka guhagarika iyi somo?",
            ended: "Isomo rirangiye",
            aiReply: "✨ Igisubizo cya AI:",
            userSaid: "🎤 Wavuze:"
        }
    },
    'si': {
        prompt: "ඔබ වෘත්තීය ඉංග්‍රීසි භාෂා ගුරුවරයෙකි. පරිශීලකයින්ගේ ව්‍යාකරණ හා උච්චාරණය වැඩිදියුණු කිරීමට උපකාර කරන්න. පරිශීලකයින් ඉංග්‍රීසි භාෂාවෙන් කතා කරන විට, ඔවුන් කියූ දේ හඳුනාගෙන, උච්චාරණ ගැටළු සහ ව්‍යාකරණ වැරදි පෙන්වා දී, ඔවුන්ගේ උච්චාරණය වැඩිදියුණු කිරීමට පියවරෙන් පියවර මග පෙන්වන්න. උච්චාරණය නිවැරදි විට, වත්මන් සන්දර්භය මත පදනම්ව නව වාක්‍යයක් යෝජනා කරන්න, පරිශීලකයා 'OK, Stop' කියන තෙක් මෙම ක්‍රියාවලිය දිගටම කරගෙන යන්න. කරුණාකර සිංහලෙන් පිළිතුරු දෙන්න. ඔබට තේරුණා නම්, කරුණාකර 'OK' යනුවෙන් පිළිතුරු දෙන්න.",
        ui: {
            title: "AI භාෂා ගුරුවරයා",
            apiKeyPlaceholder: "ඔබේ Gemini API යතුර ඇතුළත් කරන්න",
            startPrompt: "🎤 ඉංග්‍රීසියෙන් යමක් කියන්න! උදා: What is Artificial Intelligence?",
            recording: "🎤 පටිගත කරමින්...",
            processing: "♻️ සකසමින්...",
            pause: "තාවකාලිකව නවතන්න",
            continue: "ඉදිරියට යන්න",
            stop: "නවත්වන්න",
            export: "අපනයනය",
            confirmStop: "ඔබට මෙම සැසිය අවසන් කිරීමට අවශ්‍ය බව විශ්වාසද?",
            ended: "සැසිය අවසන් විය",
            aiReply: "✨ AI පිළිතුර:",
            userSaid: "🎤 ඔබ කීවේ:"
        }
    },
    'su': {
        prompt: "Anjeun téh guru basa Inggris profésional. Bantuan pangguna ngaroméh tata basa jeung ucapan maranéhanana. Nalika pangguna ngomong dina basa Inggris, anjeun bakal ngaidéntifikasi naon anu maranéhna omongkeun, nunjukkeun masalah ucapan jeung kasalahan tata basa, sarta ngabimbing maranéhanana léngkah-léngkah pikeun ngaroméh ucapanana. Nalika ucapan bener, nyarankeun kalimah anyar dumasar kana kontéks ayeuna, teruskeun prosés ieu nepi ka pangguna ngomong 'OK, Stop'. Mangga jawab dina basa Sunda. Lamun anjeun ngarti, mangga jawab ku 'OK'.",
        ui: {
            title: "Guru Basa AI",
            apiKeyPlaceholder: "Asupkeun konci API Gemini anjeun",
            startPrompt: "🎤 Omong naon waé dina basa Inggris! Conto: What is Artificial Intelligence?",
            recording: "🎤 Ngarekam...",
            processing: "♻️ Ngolah...",
            pause: "Eureun saheula",
            continue: "Teruskeun",
            stop: "Eureun",
            export: "Ékspor",
            confirmStop: "Yakin rék eureun sési ieu?",
            ended: "Sési geus réngsé",
            aiReply: "✨ Jawaban AI:",
            userSaid: "🎤 Anjeun ngomong:"
        }
    },
    'ta': {
        prompt: "நீங்கள் ஒரு தொழில்முறை ஆங்கில மொழி ஆசிரியர். பயனர்களின் இலக்கணம் மற்றும் உச்சரிப்பை மேம்படுத்த உதவுங்கள். பயனர்கள் ஆங்கிலத்தில் பேசும்போது, அவர்கள் என்ன சொன்னார்கள் என்பதை அடையாளம் கண்டு, உச்சரிப்பு சிக்கல்கள் மற்றும் இலக்கண பிழைகளைச் சுட்டிக்காட்டி, அவர்களின் உச்சரிப்பை மேம்படுத்த படிப்படியாக வழிகாட்டுங்கள். உச்சரிப்பு சரியாக இருக்கும்போது, தற்போதைய சூழலின் அடிப்படையில் ஒரு புதிய வாக்கியத்தை பரிந்துரைக்கவும், பயனர் 'OK, Stop' என்று சொல்லும் வரை இந்த செயல்முறையைத் தொடரவும். தயவுசெய்து தமிழில் பதிலளிக்கவும். நீங்கள் புரிந்துகொண்டால், தயவுசெய்து 'OK' என்று பதிலளிக்கவும்.",
        ui: {
            title: "AI மொழி ஆசிரியர்",
            apiKeyPlaceholder: "உங்கள் Gemini API விசையை உள்ளிடவும்",
            startPrompt: "🎤 ஆங்கிலத்தில் ஏதாவது சொல்லுங்கள்! எ.கா.: What is Artificial Intelligence?",
            recording: "🎤 பதிவு செய்கிறது...",
            processing: "♻️ செயலாக்குகிறது...",
            pause: "இடைநிறுத்து",
            continue: "தொடர்க",
            stop: "நிறுத்து",
            export: "ஏற்றுமதி",
            confirmStop: "இந்த அமர்வை நிறுத்த விரும்புகிறீர்களா?",
            ended: "அமர்வு முடிந்தது",
            aiReply: "✨ AI பதில்:",
            userSaid: "🎤 நீங்கள் சொன்னது:"
        }
    },
    'te': {
        prompt: "మీరు ప్రొఫెషనల్ ఇంగ్లీష్ భాషా ఉపాధ్యాయులు. వినియోగదారుల వ్యాకరణం మరియు ఉచ్ఛారణను మెరుగుపరచడంలో సహాయపడండి. వినియోగదారులు ఇంగ్లీష్‌లో మాట్లాడినప్పుడు, వారు ఏమి చెప్పారో గుర్తించి, ఉచ్ఛారణ సమస్యలు మరియు వ్యాకరణ లోపాలను చూపించి, వారి ఉచ్ఛారణను మెరుగుపరచడానికి దశల వారీగా మార్గనిర్దేశం చేయండి. ఉచ్ఛారణ సరైనప్పుడు, ప్రస్తుత సందర్భం ఆధారంగా కొత్త వాక్యాన్ని సూచించండి, వినియోగదారు 'OK, Stop' అనే వరకు ఈ ప్రక్రియను కొనసాగించండి. దయచేసి తెలుగులో సమాధానం ఇవ్వండి. మీరు అర్థం చేసుకుంటే, దయచేసి 'OK'తో సమాధానం ఇవ్వండి.",
        ui: {
            title: "AI భాషా ఉపాధ్యాయుడు",
            apiKeyPlaceholder: "మీ Gemini API కీని నమోదు చేయండి",
            startPrompt: "🎤 ఇంగ్లీష్‌లో ఏదైనా చెప్పండి! ఉదా.: What is Artificial Intelligence?",
            recording: "🎤 రికార్డ్ చేస్తోంది...",
            processing: "♻️ ప్రాసెస్ చేస్తోంది...",
            pause: "విరామం",
            continue: "కొనసాగించు",
            stop: "ఆపు",
            export: "ఎగుమతి",
            confirmStop: "మీరు ఈ సెషన్‌ను ముగించాలనుకుంటున్నారా?",
            ended: "సెషన్ ముగిసింది",
            aiReply: "✨ AI సమాధానం:",
            userSaid: "🎤 మీరు చెప్పింది:"
        }
    },
    'tg': {
        prompt: "Шумо муаллими касбии забони англисӣ ҳастед. Ба корбарон дар беҳтар кардани грамматика ва талаффузи онҳо кӯмак кунед. Вақте ки корбарон бо забони англисӣ ҳарф мезананд, шумо он чизеро, ки онҳо гуфтанд, муайян мекунед, мушкилоти талаффуз ва хатоҳои грамматикиро нишон медиҳед ва барои беҳтар кардани талаффузи онҳо қадам ба қадам роҳнамоӣ мекунед. Вақте ки талаффуз дуруст аст, дар асоси матни ҳозира ҷумлаи навро пешниҳод кунед, то даме ки корбар 'OK, Stop' нагӯяд, ин раванд идома диҳед. Лутфан бо забони тоҷикӣ ҷавоб диҳед. Агар шумо фаҳмидед, лутфан бо 'OK' ҷавоб диҳед.",
        ui: {
            title: "Муаллими забони AI",
            apiKeyPlaceholder: "Калиди API Gemini-и худро ворид кунед",
            startPrompt: "🎤 Бо забони англисӣ чизе бигӯед! Мисол: What is Artificial Intelligence?",
            recording: "🎤 Сабт мекунад...",
            processing: "♻️ Коркард мекунад...",
            pause: "Таваққуф",
            continue: "Идома додан",
            stop: "Истодан",
            export: "Содирот",
            confirmStop: "Оё шумо мутмаин ҳастед, ки мехоҳед ин ҷаласаро хотима диҳед?",
            ended: "Ҷаласа ба охир расид",
            aiReply: "✨ Ҷавоби AI:",
            userSaid: "🎤 Шумо гуфтед:"
        }
    },
    'tk': {
        prompt: "Siz professional iňlis dili mugallymysyňyz. Ulanyjylaryň grammatikasyny we aýdylyşyny gowulandyrmaga kömek ediň. Ulanyjylar iňlis dilinde gepleýän wagty, olaryň näme aýdanyny kesgitläň, aýdylyş meseleleri we grammatika ýalňyşlaryny görkeziň we olaryň aýdylyşyny gowulandyrmak üçin ädimme-ädim görkezme beriň. Aýdylyş dogry bolanda, häzirki kontekste esaslanyp täze sözlem teklip ediň, ulanyjy 'OK, Stop' diýýänçä bu prosesi dowam etdiriň. Türkmen dilinde jogap beriň. Düşünseňiz, 'OK' bilen jogap beriň.",
        ui: {
            title: "AI Dil Mugallymy",
            apiKeyPlaceholder: "Gemini API açaryňyzy giriziň",
            startPrompt: "🎤 Iňlis dilinde bir zat aýdyň! Mysal: What is Artificial Intelligence?",
            recording: "🎤 Ýazgy edýär...",
            processing: "♻️ Işleýär...",
            pause: "Arakesme",
            continue: "Dowam et",
            stop: "Dur",
            export: "Eksport",
            confirmStop: "Bu sessiýany bes etmek isleýäniňize ynanýarsyňyzmy?",
            ended: "Sessiýa tamamlandy",
            aiReply: "✨ AI jogaby:",
            userSaid: "🎤 Siz aýtdyňyz:"
        }
    },
    'tl': {
        prompt: "Ikaw ay isang propesyonal na guro ng Ingles. Tulungan ang mga user na mapabuti ang kanilang gramatika at pagbigkas. Kapag ang mga user ay nagsasalita sa Ingles, kikilalanin mo kung ano ang kanilang sinabi, ituturo ang mga problema sa pagbigkas at mga pagkakamali sa gramatika, at gabayan sila hakbang-hakbang para mapabuti ang kanilang pagbigkas. Kapag tama na ang pagbigkas, magmungkahi ng bagong pangungusap batay sa kasalukuyang konteksto, ipagpatuloy ang prosesong ito hanggang sabihin ng user ang 'OK, Stop'. Mangyaring sumagot sa Tagalog. Kung naiintindihan mo, mangyaring sumagot ng 'OK'.",
        ui: {
            title: "AI Language Teacher",
            apiKeyPlaceholder: "Ilagay ang iyong Gemini API key",
            startPrompt: "🎤 Magsalita ng kahit ano sa Ingles! Halimbawa: What is Artificial Intelligence?",
            recording: "🎤 Nagrerekord...",
            processing: "♻️ Pinoproseso...",
            pause: "I-pause",
            continue: "Magpatuloy",
            stop: "Ihinto",
            export: "I-export",
            confirmStop: "Sigurado ka bang gusto mong ihinto ang session na ito?",
            ended: "Natapos na ang session",
            aiReply: "✨ Sagot ng AI:",
            userSaid: "🎤 Sinabi mo:"
        }
    },
    'ur': {
        prompt: "آپ ایک پیشہ ور انگریزی زبان کے استاد ہیں۔ صارفین کی گرامر اور تلفظ کو بہتر بنانے میں مدد کریں۔ جب صارفین انگریزی میں بات کرتے ہیں، تو آپ ان کی کہی گئی باتوں کی شناخت کریں گے، تلفظ کے مسائل اور گرامر کی غلطیوں کی نشاندہی کریں گے، اور ان کے تلفظ کو بہتر بنانے کے لیے مرحلہ وار رہنمائی کریں گے۔ جب تلفظ درست ہو، تو موجودہ سیاق و سباق کی بنیاد پر ایک نیا جملہ تجویز کریں، اس عمل کو جاری رکھیں جب تک صارف 'OK, Stop' نہ کہے۔ براہ کرم اردو میں جواب دیں۔ اگر آپ سمجھ گئے ہیں، تو براہ کرم 'OK' کے ساتھ جواب دیں۔",
        ui: {
            title: "AI زبان کا استاد",
            apiKeyPlaceholder: "اپنی Gemini API کلید درج کریں",
            startPrompt: "🎤 انگریزی میں کچھ بھی کہیں! مثال: What is Artificial Intelligence?",
            recording: "🎤 ریکارڈ کر رہا ہے...",
            processing: "♻️ پروسیس کر رہا ہے...",
            pause: "روکیں",
            continue: "جاری رکھیں",
            stop: "بند کریں",
            export: "برآمد کریں",
            confirmStop: "کیا آپ واقعی اس سیشن کو ختم کرنا چاہتے ہیں؟",
            ended: "سیشن ختم ہو گیا",
            aiReply: "✨ AI کا جواب:",
            userSaid: "🎤 آپ نے کہا:"
        }
    },
    'uz': {
        prompt: "Siz professional ingliz tili o'qituvchisisiz. Foydalanuvchilarga grammatika va talaffuzlarini yaxshilashga yordam bering. Foydalanuvchilar ingliz tilida gaplashganda, ular nima deganini aniqlang, talaffuz muammolari va grammatik xatolarni ko'rsating va ularning talaffuzini yaxshilash uchun bosqichma-bosqich yo'l-yo'riq ko'rsating. Talaffuz to'g'ri bo'lganda, hozirgi kontekstga asoslangan yangi jumla taklif qiling, foydalanuvchi 'OK, Stop' demaguncha bu jarayonni davom ettiring. Iltimos, o'zbek tilida javob bering. Agar tushungan bo'lsangiz, iltimos 'OK' bilan javob bering.",
        ui: {
            title: "AI Til O'qituvchisi",
            apiKeyPlaceholder: "Gemini API kalitingizni kiriting",
            startPrompt: "🎤 Ingliz tilida biror narsa ayting! Masalan: What is Artificial Intelligence?",
            recording: "🎤 Yozib olinmoqda...",
            processing: "♻️ Qayta ishlanmoqda...",
            pause: "To'xtatib turish",
            continue: "Davom etish",
            stop: "To'xtatish",
            export: "Eksport",
            confirmStop: "Haqiqatan ham bu seansni tugatmoqchimisiz?",
            ended: "Seans tugadi",
            aiReply: "✨ AI javobi:",
            userSaid: "🎤 Siz aytdingiz:"
        }
    },
    'yi': {
        prompt: "איר זענט אַ פראָפעסיאָנעל ענגליש שפּראַך לערער. העלפֿן די ניצערס פֿאַרבעסערן זייער גראַמאַטיק און אויסשפּראַך. ווען די ניצערס רעדן אין ענגליש, וועט איר אידענטיפֿיצירן וואָס זיי האָבן געזאָגט, ווייַזן אויסשפּראַך פּראָבלעמען און גראַמאַטיק טעותים, און פֿירן זיי שריט-דורך-שריט צו פֿאַרבעסערן זייער אויסשפּראַך. ווען די אויסשפּראַך איז ריכטיק, פֿאָרשלאָגן אַ נייַע זאַץ באַזירט אויף דעם איצטיקן קאָנטעקסט, פֿאָרזעצן דעם פּראָצעס ביז דער ניצער זאָגט 'OK, Stop'. ביטע ענטפֿערן אין ייִדיש. אויב איר פֿאַרשטייט, ביטע ענטפֿערן מיט 'OK'.",
        ui: {
            title: "AI שפּראַך לערער",
            apiKeyPlaceholder: "אַרייַנלייגן אייער Gemini API שליסל",
            startPrompt: "🎤 זאָג עפּעס אין ענגליש! למשל: What is Artificial Intelligence?",
            recording: "🎤 רעקאָרדירן...",
            processing: "♻️ פּראָצעסירן...",
            pause: "פּויזע",
            continue: "פֿאָרזעצן",
            stop: "אָפּשטעלן",
            export: "עקספּאָרט",
            confirmStop: "זענט איר זיכער איר ווילט ענדיקן די סעסיע?",
            ended: "סעסיע געענדיקט",
            aiReply: "✨ AI ענטפֿער:",
            userSaid: "🎤 איר האָט געזאָגט:"
        }
    },
    'zu': {
        prompt: "Unguthisha wolimi lwesiNgisi oqeqeshiwe. Siza abasebenzisi ukuthuthukisa uhlelomisho nokuphimisa kwabo. Uma abasebenzisi bekhuluma ngesiNgisi, uzobona ukuthi bathini, ukhombe izinkinga zokuphimisa namaphutha ohlelomisho, futhi ubahole ngezinyathelo ukuthuthukisa ukuphimisa kwabo. Uma ukuphimisa kulungile, phakamisa umusho omusha ngokususela esimweni samanje, qhubeka nalolu hlelo kuze kuthi umsebenzisi athi 'OK, Stop'. Sicela uphendule ngesiZulu. Uma uqonda, sicela uphendule ngo-'OK'.",
        ui: {
            title: "Uthisha Wolimi we-AI",
            apiKeyPlaceholder: "Faka ikhodi yakho ye-Gemini API",
            startPrompt: "🎤 Yisho noma yini ngesiNgisi! Isibonelo: What is Artificial Intelligence?",
            recording: "🎤 Iyarekhoda...",
            processing: "♻️ Iyacubungula...",
            pause: "Phumula",
            continue: "Qhubeka",
            stop: "Misa",
            export: "Thumela",
            confirmStop: "Uqinisekile ukuthi ufuna ukumisa lesi sikhathi?",
            ended: "Isikhathi siphelile",
            aiReply: "✨ Impendulo ye-AI:",
            userSaid: "🎤 Usho ukuthi:"
        }
    }
};

const PROMPT_EXAMPLES = [
    "What's your favorite hobby and why do you enjoy it?",
    "Could you describe your ideal vacation destination?",
    "How do you usually spend your weekends?",
    "What's the most interesting movie you've watched recently?",
    "Can you tell me about your family members?",
    "What kind of food do you like to eat?",
    "How do you think technology will change in the future?",
    "What's your opinion about social media?",
    "Could you describe your daily routine?",
    "What would you do if you won a million dollars?",
    "I love watching the sunset at the beach.",
    "My morning routine includes a cup of coffee.",
    "The weather is perfect for a picnic today.",
    "I'm planning to redecorate my bedroom next month.",
    "Public transportation in my city is very convenient.",
    "Let me tell you about the interesting person I met yesterday.",
    "I've been trying to expand my social circle lately.",
    "Would you mind giving me some advice about this situation?",
    "I'm organizing a surprise party for my best friend.",
    "It's important to maintain a good work-life balance.",
    "I would like to discuss the possibility of a promotion.",
    "Our team has achieved significant progress this quarter.",
    "I'm preparing a presentation for next week's meeting.",
    "Could you elaborate on the project requirements?",
    "We need to establish clear communication channels.",
    "The research findings suggest a correlation between these variables.",
    "I'm pursuing a master's degree in environmental science.",
    "The professor's lecture on quantum physics was fascinating.",
    "Could you explain the methodology used in this study?",
    "We must consider multiple perspectives when analyzing this issue.",
    "This Netflix series has an intriguing plot development.",
    "I'm learning to appreciate different types of music.",
    "The art exhibition showcased local talent beautifully.",
    "Have you tried the new fusion restaurant downtown?",
    "I enjoy exploring different cultural traditions.",
    "Artificial intelligence is revolutionizing various industries.",
    "I recently upgraded my smart home system.",
    "The latest smartphone features are quite impressive.",
    "Digital privacy is becoming increasingly important.",
    "We should discuss the ethical implications of this technology.",
    "Environmental sustainability should be our top priority.",
    "The community initiative has shown promising results.",
    "We must address these social inequalities.",
    "Local businesses need more support during these times.",
    "Renewable energy sources are becoming more accessible.",
    "I've started practicing yoga every morning.",
    "Regular exercise helps me maintain good mental health.",
    "The new fitness app has really motivated me.",
    "I'm trying to incorporate more vegetables into my diet.",
    "Swimming is my favorite form of exercise.",
    "My backpacking trip through Europe was life-changing.",
    "I love discovering hidden gems in new cities.",
    "The local cuisine was the highlight of my trip.",
    "Cultural differences make traveling so interesting.",
    "I prefer to travel off the beaten path.",
    "The quarterly report indicates substantial growth.",
    "We should schedule a meeting with stakeholders.",
    "Our marketing strategy needs some adjustments.",
    "Customer feedback has been overwhelmingly positive.",
    "Let's discuss the implementation timeline.",
    "Online learning platforms have transformed education.",
    "Critical thinking skills are essential in today's world.",
    "The new curriculum emphasizes practical applications.",
    "Student engagement has improved significantly.",
    "We should focus on developing soft skills.",
    "I really appreciate your support during difficult times.",
    "It's important to express our feelings honestly.",
    "Sometimes actions speak louder than words.",
    "Family relationships require constant nurturing.",
    "True friendship is built on trust and understanding.",
    "I'm considering a career transition.",
    "Professional development is crucial for growth.",
    "Networking has opened many opportunities.",
    "The industry landscape is rapidly changing.",
    "What are your long-term career aspirations?",
    "It's important to maintain a positive outlook.",
    "Small changes can make a big difference.",
    "I believe in living life to the fullest.",
    "Sometimes we need to step out of our comfort zone.",
    "Every challenge is an opportunity for growth.",
    "Recent global events have changed our perspective.",
    "The economic impact has been significant.",
    "Social media influences public opinion considerably.",
    "We need to verify information from reliable sources.",
    "International cooperation is crucial for progress.",
    "Gardening helps me relax after a busy day.",
    "I've started learning to play the guitar.",
    "Photography captures beautiful moments in life.",
    "Cooking is my creative outlet.",
    "Reading before bed helps me unwind.",
    "I have ambitious plans for the next five years.",
    "The future of work looks very different.",
    "We should prepare for upcoming changes.",
    "Innovation drives progress forward.",
    "What are your hopes for the future?",
    "Let's analyze this problem systematically.",
    "We need to consider alternative solutions.",
    "What factors should we take into account?",
    "The situation requires immediate attention.",
    "How can we prevent this from recurring?",
    "The empirical evidence strongly supports this hypothesis.",
    "Let's examine this phenomenon from multiple angles.",
    "Recent studies have yielded fascinating results.",
    "The methodology requires further refinement.",
    "Academic integrity is non-negotiable in research.",
    "I believe we can reach a mutually beneficial agreement.",
    "The terms of the contract need clarification.",
    "Our proposal offers significant cost advantages.",
    "We should consider the long-term implications.",
    "The market conditions favor this investment.",
    "Regular check-ups are essential for preventive care.",
    "The symptoms suggest a minor allergic reaction.",
    "Maintaining a balanced lifestyle prevents many diseases.",
    "Mental wellness is just as important as physical health.",
    "Alternative medicine complements traditional treatments.",
    "Have you tried restarting the system?",
    "The latest update includes several bug fixes.",
    "Your data is automatically backed up to the cloud.",
    "The interface has been redesigned for better usability.",
    "Security features have been significantly enhanced.",
    "The chef's special exceeded my expectations.",
    "This recipe has been passed down for generations.",
    "The fusion of flavors creates a unique taste.",
    "Farm-to-table dining ensures fresh ingredients.",
    "Food presentation is an art form in itself.",
    "The property market shows promising growth potential.",
    "Location remains the key factor in real estate.",
    "The renovation has increased the property's value.",
    "Urban development is transforming this neighborhood.",
    "Investment in commercial property requires careful analysis.",
    "The artist's use of color evokes strong emotions.",
    "Classical music soothes my mind after a long day.",
    "Modern architecture challenges traditional concepts.",
    "This sculpture represents the human condition.",
    "Street art brings life to urban spaces.",
    "Team sports teach valuable life lessons.",
    "The championship game was absolutely thrilling.",
    "Practice makes progress, not perfection.",
    "Good sportsmanship matters more than winning.",
    "Athletes inspire us to push our limits.",
    "Each destination has its unique charm.",
    "Local markets reveal a city's true character.",
    "Spontaneous adventures create the best memories.",
    "Travel insurance saved me from disaster once.",
    "Slow travel allows deeper cultural immersion.",
    "Family dinner time is sacred in our house.",
    "Parenting requires endless patience and love.",
    "Home improvements never seem to end.",
    "Creating family traditions brings us closer.",
    "Balancing work and family life is challenging.",
    "The feedback session was constructive.",
    "Team collaboration drives innovation.",
    "Clear communication prevents misunderstandings.",
    "Remote meetings require different protocols.",
    "Professional boundaries are essential.",
    "Small eco-friendly changes add up over time.",
    "Zero-waste living is challenging but rewarding.",
    "Corporate sustainability initiatives are expanding.",
    "Climate action requires global cooperation.",
    "Green technology is becoming more accessible.",
    "Diversifying investments reduces risk.",
    "Cryptocurrency is reshaping financial markets.",
    "Early retirement requires careful planning.",
    "Financial literacy should be taught in schools.",
    "Emergency funds provide peace of mind.",
    "Volunteer work enriches both sides.",
    "Local initiatives strengthen community bonds.",
    "Neighborhood watch programs increase safety.",
    "Community gardens bring people together.",
    "Social support networks are invaluable.",
    "Sustainable fashion is gaining momentum.",
    "Personal style evolves with confidence.",
    "Quality pieces are worth the investment.",
    "Fashion cycles are becoming shorter.",
    "Vintage clothing tells unique stories.",
    "Legal documentation protects all parties involved.",
    "Intellectual property rights need protection.",
    "Consumer rights vary by jurisdiction.",
    "Mediation often beats litigation.",
    "Legal advice prevents future complications.",
    "Therapy helped me understand myself better.",
    "Mindfulness practice reduces anxiety.",
    "Setting boundaries is crucial for mental health.",
    "Emotional intelligence impacts relationships.",
    "Self-care isn't selfish, it's necessary.",
    "Digital detox weekends refresh my mind.",
    "Online privacy requires constant vigilance.",
    "Virtual reality opens new possibilities.",
    "Social media influence keeps growing.",
    "Digital literacy is a modern necessity.",
    "Public speaking skills open many doors.",
    "Time management determines productivity.",
    "Leadership involves continuous learning.",
    "Negotiation skills serve you everywhere.",
    "Adaptability is the key to career longevity.",
    "Minimalism brings unexpected freedom.",
    "Work-life integration beats work-life balance.",
    "Morning routines set the day's tone.",
    "Quality sleep is non-negotiable.",
    "Hobbies keep life interesting and fulfilling.",
    "What's up with you today?",
    "How's it going with your new project?",
    "Long time no see! How have you been?",
    "Fancy meeting you here! What a coincidence!",
    "What have you been up to lately?",
    "No way! You got the job?",
    "You're kidding! Did she really say that?",
    "That's awesome! Congratulations!",
    "That's a bummer. I'm sorry to hear that.",
    "I'm so stoked about the concert next week!",
    "I'm beat. I need to get some rest.",
    "I'm feeling under the weather today.",
    "I'm on cloud nine! I just got engaged!",
    "I'm down in the dumps because my cat ran away.",
    "I'm in a pickle; I locked my keys in my car.",
    "Could you give me a hand with these groceries?",
    "Can you lend me a hand moving this sofa?",
    "I'd be happy to help you with your homework.",
    "I'm afraid I can't make it to your party.",
    "No problem, I can do that for you.",
    "It's my pleasure to help you out.",
    "Don't mention it, it was nothing.",
    "You're welcome, anytime.",
    "Sure thing! I'll get right on it.",
    "I'm all ears, tell me everything.",
    "Spill the beans! What's the big news?",
    "Let's get down to business; we have a lot to discuss.",
    "Let's call it a day; I'm exhausted.",
    "It's on the tip of my tongue; I'll remember it in a second.",
    "I'm drawing a blank; I can't remember her name.",
    "It completely slipped my mind; I forgot to call you back.",
    "That rings a bell, but I can't quite place it.",
    "This task is a piece of cake; I can finish it quickly.",
    "Don't worry, fixing this is a walk in the park.",
    "Figuring this out isn't rocket science.",
    "Choosing to help is a no-brainer.",
    "I'm broke until payday.",
    "I'm rolling in dough after winning the lottery!",
    "That's a rip-off! It's way too expensive.",
    "This is a steal! It's such a good deal.",
    "Let's go Dutch on the meal.",
    "Dinner is on me tonight.",
    "It's my treat; I'll pay for the movie tickets.",
    "Can I take a rain check? I'm busy tonight.",
    "I'll take a rain check on that coffee; maybe next week?",
    "Let's play it by ear and see how the weather is.",
    "I'm on the fence about going to the party.",
    "I'm having second thoughts about quitting my job.",
    "I'm dead set on going to Europe this summer.",
    "It's a long shot, but I might win the lottery.",
    "Keep your fingers crossed that I get the job!",
    "Break a leg! I know you'll do great in the play.",
    "Hang in there! Things will get better.",
    "Don't give up! You're almost there.",
    "You can do it! I believe in you.",
    "I'm pulling for you to win the race.",
    "I'm rooting for you to succeed.",
    "Keep up the good work! You're doing amazing.",
    "You're doing great! Keep it up.",
    "That's the spirit! Don't let anything stop you.",
    "That's the way to go! You're on the right track.",
    "Attaboy! You scored the winning goal!",
    "Attagirl! You aced the test!",
    "I'm sorry to hear that your grandmother passed away.",
    "My condolences on the loss of your loved one.",
    "I'm here for you if you need anything.",
    "Take care of yourself, okay?",
    "Get well soon! I hope you feel better.",
    "I'm running late for my appointment.",
    "I'll be there in a jiffy, just wait for me.",
    "I'll be right back; I need to grab something.",
    "What's the matter? You look upset.",
    "Are you okay? You seem a little down.",
    "Is everything alright? You've been quiet all day.",
    "What's going on? Why is everyone shouting?",
    "What happened? Did you hear the news?",
    "What's new with you and your family?",
    "What's the deal with the new policy?",
    "What's the catch? It sounds too good to be true.",
    "What's the point of arguing about it?",
    "What's the big idea interrupting me like that?",
    "What are you talking about? That doesn't make sense.",
    "What do you mean by that?",
    "I don't get it. Can you explain it again?",
    "I'm not following. Could you go over that again?",
    "Could you explain that in more detail?",
    "Could you elaborate on your proposal?",
    "Could you clarify what you meant by 'soon'?",
    "In other words, you're saying we should postpone the launch?",
    "For instance, you could try using a different approach.",
    "For example, we could offer a discount to attract more customers.",
    "Such as what? Give me some specific examples.",
    "Like what? What other options do we have?",
    "By the way, did you send that email?",
    "Speaking of which, have you finished the report?",
    "On another note, I wanted to ask about your vacation plans.",
    "That reminds me, I need to pick up milk on the way home.",
    "Anyway, where were we?",
    "So, where were we? Oh, right, the budget.",
    "To get back on track, let's focus on the main issue.",
    "To make a long story short, we didn't get the contract.",
    "To cut to the chase, we need to make a decision now.",
    "The bottom line is, we need more money.",
    "In a nutshell, the project was a success.",
    "All things considered, it was a pretty good day.",
    "At the end of the day, it's just not worth it.",
    "It is hereby resolved that the meeting be adjourned until tomorrow.",
    "Pursuant to the agreement, payment is due on the first of the month.",
    "In accordance with the law, all citizens must pay taxes.",
    "Notwithstanding the foregoing, the contract remains valid.",
    "The undersigned hereby agrees to the terms and conditions.",
    "Have you heard the news? Sarah is getting married!",
    "Did you catch the game last night? It was incredible!",
    "What do you think about this weather? It's so unpredictable.",
    "It's freezing! I can't feel my toes.",
    "It's scorching hot! I'm sweating buckets.",
    "It's pouring rain! I'm soaked to the bone.",
    "I can't believe how much traffic there is today.",
    "This line is taking forever! I'm going to be late.",
    "Excuse me, do you know where the restroom is?",
    "I'm lost. Can you help me find my way back to the hotel?",
    "How far is it to the nearest gas station? I'm running low on fuel.",
    "Do you mind if I sit here? All the other seats are taken.",
    "Would you please pass the salt? Thank you.",
    "Could you turn down the music, please? It's a bit too loud.",
    "I'm having a party on Saturday. Would you like to come?",
    "What are your plans for the weekend? Anything fun?",
    "Do you have any hobbies? What do you do in your free time?",
    "What kind of music do you like? I'm always looking for new recommendations.",
    "Have you seen any good movies lately? I need something to watch.",
    "What's your favorite book? I'm an avid reader.",
    "Do you like to travel? I love exploring new places.",
    "Where's the best place you've ever been? I'm looking for travel inspiration.",
    "What's your dream vacation? Mine is to go to the Maldives.",
    "What do you do for a living? I'm a software engineer.",
    "Where did you go to school? I graduated from Oxford University.",
    "What's your major? I'm studying computer science.",
    "I'm taking a course in advanced calculus this semester.",
    "The professor gave a compelling lecture on quantum physics today.",
    "My research is focused on the socio-economic impact of climate change.",
    "The defendant is hereby charged with a misdemeanor, specifically, shoplifting.",
    "The plaintiff seeks damages for breach of contract, totaling $10,000.",
    "The court ruled in favor of the prosecution, and the defendant was found guilty.",
    "We need to reach a consensus on this issue before we can move forward.",
    "Let's brainstorm some ideas for the new marketing campaign.",
    "The company is experiencing a period of exponential growth, thanks to our new product.",
    "Our market share has increased by 15% in the last quarter.",
    "We need to cut costs to improve profitability; any suggestions?",
    "The meeting is adjourned; we'll reconvene next week.",
    "The quarterly earnings report will be released next week, so be prepared.",
    "This is a hostile work environment; I'm constantly being harassed.",
    "I'm going to file a complaint with HR about my manager's behavior.",
    "He was fired for gross misconduct, including falsifying company records.",
    "She received a promotion for her outstanding performance this year.",
    "I'm taking a sabbatical next year to travel and write a book.",
    "I'm going on maternity leave in June; my due date is in July.",
    "I'm resigning from my position, effective immediately; here is my two weeks' notice.",
    "I'd like to apply for the position of Senior Software Engineer, as advertised on your website.",
    "I have a job interview tomorrow morning; I'm so nervous!",
    "What are your salary expectations for this role?",
    "The company offers a comprehensive benefits package, including health insurance and paid time off.",
    "I'm so nervous about my presentation to the board of directors.",
    "I need to finish this report by the end of the day; it's urgent.",
    "Can we schedule a meeting for next week to discuss the new project?",
    "I'll be out of the office tomorrow on a business trip.",
    "Please RSVP by Friday so we can get a headcount for the event.",
    "FYI, the deadline for the proposal has been extended to Monday.",
    "Let's touch base next week to see how things are progressing.",
    "I'll keep you in the loop and let you know if anything changes.",
    "Thanks for the heads-up about the potential issue; I appreciate it.",
    "I appreciate your input on this matter; it's very helpful.",
    "Just to be clear, we're all in agreement on the next steps?",
    "To reiterate, the main goal is to increase customer satisfaction.",
    "As I mentioned earlier, we need to address this problem immediately.",
    "In conclusion, I believe this is the best course of action.",
    "Good morning, everyone. Thanks for coming to the meeting.",
    "Good afternoon, class. Please open your textbooks to page 42.",
    "Good evening, ladies and gentlemen. Welcome to the annual gala.",
    "May I have your attention, please? The flight is about to board.",
    "Please take your seats; the show is about to begin.",
    "Let's begin the meeting; we have a lot to cover.",
    "Today, we're going to be talking about the history of the Roman Empire.",
    "First, I'd like to introduce our guest speaker, Dr. Smith.",
    "Next, we'll discuss the main causes of World War I.",
    "Finally, we'll cover the events leading up to the American Revolution.",
    "Are there any questions about what we've discussed so far?",
    "Does anyone have any comments they'd like to share?",
    "Let's open it up for discussion; what are your thoughts on this topic?",
    "I'd like to hear your thoughts on this proposal; please share your feedback.",
    "Thank you for your participation; your insights were very valuable.",
    "That's all for today. Have a great afternoon!",
    "See you next time. Don't forget to do your homework!",
    "Have a great day! Enjoy the sunshine.",
    "Have a good weekend! Relax and recharge.",
    "Take it easy! Don't work too hard.",
    "Catch you later! I'm off to the gym.",
    "I'm outta here! See you tomorrow.",
    "Peace out! Have a good one.",
    "Good morning! How did you sleep last night?",
    "Could you please pass me the salt?",
    "I can't believe the weekend is already over!",
    "What time does the next train to London depart?",
    "She's been studying French for five years.",
    "Do you know where I can find a good coffee shop nearby?",
    "Excuse me, could you tell me the way to the museum?",
    "I absolutely love this song!",
    "Is it going to rain tomorrow?",
    "They haven't decided on a name for the baby yet.",
    "Congratulations on your new job!",
    "Would you like to join us for dinner tonight?",
    "I'm feeling a bit under the weather today.",
    "Please make sure to submit the report by Friday.",
    "How exciting it is to travel to new places!",
    "I've never seen such a beautiful sunset.",
    "Could you explain that concept to me one more time?",
    "What a fantastic performance that was!",
    "The more you practice, the better you'll become.",
    "He was promoted to manager after only a year.",
    "Do you mind if I open the window?",
    "I wish I could go on vacation right now.",
    "The meeting has been postponed until next week.",
    "How much does this item cost?",
    "She's not only intelligent but also very kind.",
    "Have you finished your homework yet?",
    "Let's grab a coffee sometime soon.",
    "It's been ages since we last met!",
    "Why don't we try that new restaurant downtown?",
    "I'm afraid I can't agree with you on that point.",
    "This is the best day of my life!",
    "Can you believe how fast time flies?",
    "Please accept my sincere apologies for the mistake.",
    "He must have left before we arrived.",
    "If you need any assistance, feel free to ask.",
    "What an incredible journey that was!",
    "I'm looking forward to the concert next month.",
    "Did you remember to lock the door?",
    "The book was more interesting than I expected.",
    "We should consider all the options before deciding.",
    "Have you ever been to Paris?",
    "I wonder what the weather will be like today.",
    "It's too late to change our plans now.",
    "She can't possibly finish all that work by herself.",
    "Could I get a refill, please?",
    "They were delighted with the surprise party.",
    "I appreciate your help with this project.",
    "How about we go for a walk in the park?",
    "Don't forget to bring your umbrella!",
    "He drives as if he owns the road.",
    "What time is your appointment tomorrow?",
    "She sings beautifully, doesn't she?",
    "The package should arrive by Thursday.",
    "I'm not sure I understand what you mean.",
    "You won't believe what happened to me today!",
    "The more I think about it, the less I understand.",
    "Is there anything else I can do for you?",
    "Thank you so much for your kindness.",
    "Let's meet at the café at noon.",
    "Please keep this information confidential.",
    "What a pity you couldn't join us!",
    "I haven't the slightest idea where she went.",
    "Could you please speak a bit slower?",
    "He's as strong as an ox.",
    "I'm sorry to bother you, but could you help me?",
    "She always arrives early for meetings.",
    "It's important to stay hydrated in hot weather.",
    "Do you feel like watching a movie tonight?",
    "I've been working here since 2010.",
    "Don't be late for the class.",
    "Would you mind closing the window?",
    "The test results were better than expected.",
    "I can't wait to see you again!",
    "What do you think about this proposal?",
    "Despite the rain, we enjoyed our picnic.",
    "Time is money.",
    "He studied hard so that he could pass the exam.",
    "Please turn off your mobile phones during the performance.",
    "If I were you, I would apologize.",
    "Can you help me move this table?",
    "I need to book a flight to New York.",
    "She has a lot of experience in this field.",
    "This tastes delicious!",
    "Do you happen to have a spare pen?",
    "It's not as easy as it looks.",
    "We're planning to renovate our kitchen.",
    "Could you tell me more about your proposal?",
    "I feel like I'm forgetting something.",
    "You should take an umbrella in case it rains.",
    "He's very knowledgeable about history.",
    "Let's not make any hasty decisions.",
    "What a lovely dress you're wearing!",
    "I'll have finished the project by Monday.",
    "Should we call a doctor?",
    "Their team won the match last night.",
    "It's high time we addressed this issue.",
    "She can't be serious!",
    "Would you like some more tea?",
    "He rarely goes to the gym.",
    "If only I had known earlier!",
    "Where did you buy that jacket?",
    "Please feel free to contact me if you have any questions.",
    "I didn't realize it was so late.",
    "She's been to Japan twice.",
    "Have you heard the latest news?",
    "Let's hope for the best.",
    "I regret to inform you that your application was unsuccessful.",
    "How far is it to the nearest gas station?",
    "Is there a bank around here?",
    "Why are you making that face?",
    "He ran as fast as he could.",
    "It's been a pleasure meeting you.",
    "We'll need to check the schedule.",
    "I hope you have a safe journey.",
    "Do you prefer coffee or tea?",
    "She needs to submit her thesis by next month.",
    "What an extraordinary idea!",
    "I'm afraid I can't make it to the party.",
    "Can you play any musical instruments?",
    "They might have missed the train.",
    "Keep up the good work!",
    "He was absent due to illness.",
    "Please ensure all doors are locked.",
    "Do you want me to pick up anything from the store?",
    "It's not worth arguing over.",
    "I completely forgot about our appointment!",
    "That sounds like a great plan.",
    "The conference was very informative.",
    "Could we reschedule our meeting?",
    "She looks forward to starting her new job.",
    "I need to charge my phone.",
    "What would you do if you won the lottery?",
    "He suggested that we take a different route.",
    "You must be very proud of your achievement.",
    "I haven't seen him since last summer.",
    "Could you tell me how to get to the train station?",
    "It's essential that we address this problem immediately.",
    "She can't have left already.",
    "Do you know what time the movie starts?",
    "I'm so glad you came!",
    "That's the funniest joke I've ever heard.",
    "Where did I put my keys?",
    "Let's meet up sometime next week.",
    "He doesn't like coffee, does he?",
    "Mind the gap between the train and the platform.",
    "I was wondering if you could help me.",
    "It's been a tough year for everyone.",
    "She managed to finish the race despite her injury.",
    "Could I borrow your calculator?",
    "That's exactly what I was thinking!",
    "Would you mind if I joined you?",
    "The cost of living keeps rising.",
    "I've heard so much about you.",
    "What are your plans for the weekend?",
    "He denied any involvement in the scandal.",
    "Please let me know if you're available.",
    "She appears to be unhappy.",
    "How dare you speak to me like that!",
    "This is a matter of utmost importance.",
    "I can neither confirm nor deny those allegations.",
    "Is everything okay with you?",
    "They intend to expand their business overseas.",
    "Let's keep our fingers crossed.",
    "Do you have any dietary restrictions?",
    "He took the news surprisingly well.",
    "It's not every day that you get an opportunity like this.",
    "She's the one who called earlier.",
    "Don't interrupt me while I'm speaking.",
    "We must comply with all the regulations.",
    "Time heals all wounds.",
    "I strongly recommend that you read this book.",
    "Could you please clarify what you mean?",
    "I can't thank you enough.",
    "It's crucial that we arrive on time.",
    "She barely noticed the time passing.",
    "What a small world!",
    "I thought you might say that.",
    "The company reported a significant loss.",
    "He appears to have lost his way.",
    "The show starts promptly at 8 PM.",
    "She whispered something in his ear.",
    "Do not lean out of the window.",
    "I wish you all the best.",
    "He's always been kind to me.",
    "It's so cold outside!",
    "Can you keep a secret?",
    "We would be grateful for your support.",
    "I need to get this done before noon.",
    "That's none of your business.",
    "She did it all by herself.",
    "Is that the time? I must be going.",
    "He never expected to win the prize.",
    "What's your favorite book?",
    "They have yet to announce the results.",
    "I saw her just the other day.",
    "Please be patient while we process your request.",
    "This calls for a celebration!",
    "Do you come here often?",
    "I can't imagine life without music.",
    "He admitted to making a mistake.",
    "What seems to be the problem?",
    "Let's agree to disagree.",
    "I can pick you up from the airport.",
    "She has a keen eye for detail.",
    "Could you please tell me where the nearest gas station is?",
    "I'm afraid I can't make it to the meeting this afternoon.", 
    "What a gorgeous day it is today!", 
    "I've been trying to get in touch with you for days.", 
    "Would you mind if I borrowed your pen for a moment?", 
    "I'm thinking about going on a trip to Europe this summer.", 
    "How do you like your new job so far?", 
    "I'm sorry, but I don't understand what you're trying to say.", 
    "Could you please speak a little more slowly?", 
    "I'm running a bit late, but I'll be there as soon as I can.", 
    "What do you think about the new restaurant that just opened up?", 
    "I'm having trouble deciding what to wear to the party tonight.", 
    "Would you like to go for a walk in the park with me?", 
    "I can't believe how much traffic there is on the roads today!", 
    "I'm not sure if I'll be able to make it to your birthday party.", 
    "Could you please pass the salt and pepper?", 
    "I'm really looking forward to the weekend.", 
    "What do you usually do on your days off?", 
    "I'm trying to eat healthier, so I've been cooking more at home.", 
    "Would you be interested in going to see a movie with me tonight?", 
    "I'm sorry to hear that you're not feeling well.", 
    "Could you please tell me how to get to the nearest subway station?", 
    "I'm thinking about adopting a dog from the local animal shelter.", 
    "What's your favorite thing to do when you're on vacation?", 
    "I've been trying to learn how to play the guitar, but it's harder than I thought.", 
    "Would you mind if I turned up the heat a bit? I'm feeling a bit chilly.", 
    "I'm really excited about the new project I'm working on at work.", 
    "What do you think is the best way to learn a new language?", 
    "I can't believe how quickly this year has gone by!", 
    "Could you please recommend a good book for me to read?", 
    "I'm thinking about taking a cooking class to improve my skills in the kitchen.", 
    "What's the weather supposed to be like tomorrow?", 
    "I've been having trouble sleeping lately, so I'm trying to establish a better bedtime routine.", 
    "I'm sorry, but I'm not able to help you with that.", 
    "Could you please tell me where the nearest post office is?", 
    "I'm really impressed by your dedication to your work.", 
    "What do you think is the biggest challenge facing our society today?", 
    "I've been trying to cut back on my caffeine intake, but it's been tough.", 
    "Would you mind if I opened the window? It's getting a bit stuffy in here.", 
    "I'm really grateful for all the support you've given me.", 
    "What's your favorite type of cuisine?", 
    "I can't believe how much my kids have grown over the past year!", 
    "Could you please help me carry these bags to the car?", 
    "I'm thinking about taking a trip to the beach this summer.", 
    "What do you think is the key to a successful relationship?", 
    "I've been trying to get more exercise lately, but it's been hard to find the time.", 
    "Would you be willing to give me some feedback on my presentation?", 
    "I'm sorry, but I don't have any change on me at the moment.", 
    "Could you please tell me how to get to the nearest hospital?", 
    "I'm really excited to see what the future holds for our company.", 
    "What's your favorite thing to do when you're feeling stressed out?", 
    "I can't believe how much work I have to do this week!", 
    "Would you mind if I borrowed your car for a quick errand?", 
    "I'm thinking about taking a course to learn a new skill.", 
    "What do you think is the most important quality in a friend?", 
    "I've been trying to eat more fruits and vegetables, but it's been a challenge.", 
    "Could you please pass me the remote control?", 
    "I'm really sorry for the misunderstanding earlier.", 
    "What's the best piece of advice you've ever received?", 
    "I can't believe how quickly the holidays are approaching!", 
    "Would you be interested in joining me for a game of tennis this weekend?", 
    "I'm having trouble understanding this legal document. Could you please explain it to me?", 
    "What do you think is the most effective way to manage stress?", 
    "I've been trying to save money for a down payment on a house, but it's been tough.", 
    "Could you please tell me where the nearest ATM is?", 
    "I'm really impressed by your ability to stay calm under pressure.", 
    "What's your favorite thing to do when you're hanging out with friends?", 
    "I can't believe how much my energy bills have gone up this month!", 
    "Would you mind if I took a quick break? I need to stretch my legs.", 
    "I'm thinking about volunteering at a local charity organization.", 
    "What do you think is the biggest challenge facing our education system today?", 
    "I've been trying to cut back on my sugar intake, but it's been difficult.", 
    "Could you please help me move this heavy piece of furniture?", 
    "I'm really sorry for being late to our meeting.", 
    "What's the most interesting place you've ever traveled to?", 
    "I can't believe how much paperwork I have to fill out for this job application!", 
    "Would you be willing to give me a ride to the airport next week?", 
    "I'm thinking about starting my own business, but I'm not sure where to begin.", 
    "What do you think is the most important factor in achieving success?", 
    "I've been trying to get more organized, but it's been a struggle.", 
    "Could you please pass me the ketchup?", 
    "I'm really grateful for your help with this project.", 
    "What's your favorite way to relax after a long day at work?", 
    "I can't believe how quickly this semester has flown by!", 
    "Would you mind if I used your phone charger for a few minutes?", 
    "I'm thinking about adopting a cat from the local animal shelter.", 
    "What do you think is the most important issue facing our country right now?", 
    "I've been trying to drink more water throughout the day, but I often forget.", 
    "Could you please tell me where the nearest public restroom is?", 
    "I'm really sorry for the inconvenience this may have caused you.", 
    "What's the most memorable concert you've ever been to?", 
    "I can't believe how much my rent has increased this year!", 
    "Would you be interested in going for a bike ride with me this afternoon?", 
    "I'm having trouble deciding which college to attend next year.", 
    "What do you think is the most important skill to have in today's job market?", 
    "I've been trying to reduce my carbon footprint, but it's been challenging.", 
    "Could you please pass me the butter?", 
    "I'm really excited to see what the future holds for our relationship.", 
    "What's your favorite thing to do when you're on a long car ride?", 
    "I can't believe how much my phone bill has gone up this month!", 
    "Would you mind if I sat next to you on the plane?", 
    "I'm thinking about taking a gap year before starting college.", 
    "What do you think is the most important factor in maintaining good health?", 
    "I've been trying to learn how to meditate, but it's been difficult to quiet my mind.", 
    "Could you please tell me where the nearest grocery store is?", 
    "I'm really sorry for the misunderstanding earlier. It won't happen again.", 
    "What's the most interesting book you've read recently?", 
    "I can't believe how much my car insurance premiums have increased!", 
    "Would you be willing to give me some advice on how to handle this situation?", 
    "I'm thinking about taking a solo trip to a foreign country.", 
    "What do you think is the most important thing to consider when choosing a career?", 
    "I've been trying to get more involved in my local community, but it's been tough to find the time.", 
    "Could you please pass me the pepper?", 
    "I'm really grateful for your friendship and support.", 
    "What's your favorite way to stay active and healthy?", 
    "I can't believe how quickly this year has flown by!", 
    "Would you mind if I borrowed your umbrella? It looks like it might rain.", 
    "I'm thinking about taking a cooking class to learn some new recipes.", 
    "What do you think is the most important factor in building strong relationships?", 
    "I've been trying to reduce my screen time, but it's been a challenge.", 
    "Could you please tell me where the nearest pharmacy is?", 
    "I'm really sorry for the delay in getting back to you.", 
    "What's the most interesting documentary you've watched recently?", 
    "I can't believe how much my student loan payments are each month!", 
    "Would you be interested in going for a hike with me this weekend?", 
    "I'm having trouble deciding which job offer to accept.", 
    "What do you think is the most important factor in achieving work-life balance?", 
    "I've been trying to get more involved in my children's school activities, but it's been tough to find the time.", 
    "Could you please pass me the salad dressing?", 
    "I'm really excited to see what the future holds for our family.", 
    "What's your favorite thing to do when you're on a beach vacation?", 
    "I can't believe how much my health insurance premiums have gone up this year!", 
    "Would you mind if I asked for your opinion on something?", 
    "I'm thinking about starting a garden in my backyard this spring.", 
    "What do you think is the most important factor in maintaining a healthy diet?", 
    "I've been trying to get more sleep each night, but it's been a struggle.", 
    "Could you please tell me where the nearest library is?", 
    "I'm really sorry for the confusion earlier. Let me try to explain it again.", 
    "What's the most interesting podcast you've listened to recently?", 
    "I can't believe how much my property taxes have increased this year!", 
    "Would you be willing to give me a hand with this project?", 
    "I'm thinking about taking a photography class to improve my skills.", 
    "What do you think is the most important factor in building a successful team?", 
    "I've been trying to reduce my plastic waste, but it's been challenging.", 
    "Could you please pass me the bread basket?", 
    "I'm really grateful for your patience and understanding.", 
    "What's your favorite way to spend a lazy Sunday afternoon?", 
    "I can't believe how much my cable bill has gone up this month!", 
    "Would you mind if I turned down the music a bit? It's a bit loud.", 
    "I'm thinking about volunteering at a local animal shelter.", 
    "What do you think is the most important factor in maintaining good mental health?", 
    "I've been trying to get more organized with my finances, but it's been tough.", 
    "Could you please tell me where the nearest coffee shop is?", 
    "I'm really sorry for the short notice, but I won't be able to make it to the party tonight.", 
    "What's the most interesting exhibit you've seen at a museum recently?", 
    "I can't believe how much my grocery bill has gone up this month!", 
    "Would you be interested in going for a swim with me this afternoon?", 
    "I'm having trouble deciding which college major to pursue.", 
    "What do you think is the most important factor in building a successful career?", 
    "I've been trying to get more involved in my local politics, but it's been challenging.", 
    "Could you please pass me the sugar?", 
    "I'm really excited to see what the future holds for our friendship.", 
    "What's your favorite thing to do when you're visiting a new city?", 
    "I can't believe how much my utility bills have gone up this winter!", 
    "Would you mind if I borrowed your calculator for a moment?", 
    "I'm thinking about taking a dance class to try something new.", 
    "What do you think is the most important factor in maintaining a positive attitude?", 
    "I've been trying to get more creative with my hobbies, but it's been tough to find inspiration.", 
    "Could you please tell me where the nearest bank is?", 
    "I'm really sorry for the inconvenience this may have caused you. Please let me know if there's anything I can do to help.", 
    "What's the most interesting TED talk you've watched recently?", 
    "I can't believe how much my internet bill has gone up this year!", 
    "Would you be willing to give me some feedback on my resume?", 
    "I'm thinking about starting a book club with some friends.", 
    "What do you think is the most important factor in building a strong sense of community?", 
    "I've been trying to get more involved in my local volunteer opportunities, but it's been challenging to find the right fit.", 
    "Could you please pass me the napkins?", 
    "I'm really grateful for your honesty and openness.", 
    "What's your favorite way to unwind after a stressful day?", 
    "I can't believe how much my gym membership fees have increased this year!", 
    "Would you mind if I asked for your advice on a personal matter?", 
    "I'm thinking about taking a road trip across the country this summer.", 
    "What do you think is the most important factor in maintaining strong family relationships?", 
    "I've been trying to get more involved in my local arts scene, but it's been tough to find the time.", 
    "Could you please tell me where the nearest gas station is? I'm running low on fuel.", 
    "I'm really sorry for the misunderstanding earlier. I should have communicated more clearly.", 
    "What's the most interesting article you've read in the news recently?", 
    "I can't believe how much my prescription medication costs have gone up this year!", 
    "Would you be interested in going for a picnic in the park this weekend?", 
    "I'm having trouble deciding which job offer to accept. They both have their pros and cons.", 
    "What do you think is the most important factor in building a successful romantic relationship?", 
    "I've been trying to get more involved in my local sports leagues, but it's been challenging to find the right team.", 
    "Could you please pass me the salt?", 
    "I'm really excited to see what the future holds for our business partnership.", 
    "What's your favorite thing to do when you're exploring a new hiking trail?", 
    "I can't believe how much my car repair bills have added up this year!", 
    "Would you mind if I asked for your input on this project?", 
    "I'm thinking about taking a yoga class to help with stress management.", 
    "What do you think is the most important factor in maintaining good physical health?", 
    "I've been trying to get more involved in my local environmental groups, but it's been tough to find the right opportunity.", 
    "Could you please tell me where the nearest post office is? I need to mail a package.", 
    "I'm really sorry for the delay in responding to your email. It got buried in my inbox.", 
    "What's the most interesting podcast episode you've listened to recently?", 
    "I can't believe how much my pet's veterinary bills have gone up this year!", 
    "Would you be willing to give me a ride to the airport next week? I have an early flight.", 
    "I'm thinking about starting a side hustle to earn some extra income.", 
    "What do you think is the most important factor in building a fulfilling life?",
    "I've been meaning to ask you, how did your presentation go?",
    "If I'm not mistaken, you're quite the expert in photography, aren't you?",
    "I gather you're originally from London, is that right?",
    "Correct me if I'm wrong, but didn't you used to work at Google?",
    "I'm under the impression that you're a vegetarian. Is that accurate?",
    "Am I right in thinking that you've climbed Mount Everest?",
    "You wouldn't happen to know a good place to get sushi around here, would you?",
    "Would you mind terribly if I asked you for some advice on investing?",
    "I'd be ever so grateful if you could proofread my essay.",
    "You couldn't possibly give me a lift to the station, could you?",
    "I don't suppose you've seen my keys anywhere, have you?",
    "If it's not too much trouble, could you possibly explain this concept again?",
    "I'm terribly sorry to bother you, but would you mind keeping an eye on my bag for a moment?",
    "I wonder if you could shed some light on this issue for me.",
    "It's a bit of a long shot, but you don't have a spare charger, do you?",
    "I'm absolutely knackered; I think I'll turn in early tonight.",
    "She's a bit miffed that she wasn't invited to the party.",
    "He's been feeling a bit rough lately; I think he's coming down with something.",
    "I'm absolutely gutted that I missed the concert; I heard it was amazing.",
    "She's chuffed to bits about her promotion; she's been working really hard for it.",
    "I'm easy; we can do whatever you want to do.",
    "I'm easy either way; it's up to you.",
    "I'm easy-going; I'm happy to go with the flow.",
    "I'm easy to please; just a simple meal and good company are enough for me.",
    "I'm easy like Sunday morning; nothing bothers me too much.",
    "Fair enough; I see your point.",
    "That's fair enough; I can't argue with that.",
    "Fair enough; you've convinced me.",
    "Fair enough; let's do it your way.",
    "It's a fair cop; I was speeding.",
    "It's only fair to share the credit with everyone involved.",
    "It's only fair that we split the bill equally.",
    "It's only fair to give them a chance to explain.",
    "It's only fair to warn you that the traffic is terrible today.",
    "He's not playing fair; he's bending the rules.",
    "That's a bit rich, coming from him!",
    "That's a bit rich, considering she's the one who's always late.",
    "That's a bit rich, accusing me of being selfish!",
    "That's rich! You're telling me to be quiet?",
    "Oh, that's rich! Now he's blaming me for his mistake.",
    "I'm skint; can you lend me twenty quid?",
    "I'm a bit short this month; could you spot me until payday?",
    "I'm strapped for cash at the moment; could you cover me?",
    "I'm a bit hard up; can I take a rain check on dinner?",
    "I'm completely brassic; I can't even afford a cup of coffee.",
    "Fancy a cuppa?",
    "Fancy going for a pint later?",
    "Fancy seeing that film everyone's talking about?",
    "Fancy trying that new Thai place?",
    "Fancy a bit of a gamble?",
    "He's a bit of a dodgy character; I wouldn't trust him.",
    "That's a bit dodgy; I don't think it's safe.",
    "The food tasted a bit dodgy; I think I might be sick.",
    "The brakes on my bike are a bit dodgy; I need to get them fixed.",
    "He gave me a dodgy excuse for being late.",
    "I'm not sure about this; it seems a bit iffy to me.",
    "The weather looks a bit iffy; we might get rained on.",
    "He's been acting a bit iffy lately; I wonder what's wrong.",
    "The milk smells a bit iffy; I think it's gone off.",
    "I'm feeling a bit iffy about the whole situation.",
    "Bob's your uncle!",
    "Just follow the instructions, and Bob's your uncle!",
    "Add a bit of salt, and Bob's your uncle!",
    "Ask that guy over there; he'll tell you where to go. Bob's your uncle!",
    "Just tell them I sent you, and Bob's your uncle!",
    "Fanny's your aunt!",
    "Stick a fork in me, I'm done!",
    "I'm so tired, I could sleep for a week. Stick a fork in me, I'm done!",
    "This project has been exhausting. Stick a fork in me, I'm done!",
    "I've had it up to here with this. Stick a fork in me, I'm done!",
    "That's me done for the day. Stick a fork in me, I'm done!",
    "I'm absolutely stuffed; I couldn't eat another bite.",
    "I'm full as a tick; I can't even look at food right now.",
    "I'm fit to burst; that meal was enormous.",
    "I'm absolutely bursting at the seams; I need to loosen my belt.",
    "I'm packed tighter than a sardine; I can't move.",
    "Right as rain.",
    "Don't you worry about me, I'm right as rain.",
    "After a good night's sleep, I'll be right as rain.",
    "Give me a few minutes, and I'll be right as rain.",
    "Once this headache goes away, I'll be right as rain.",
    "You're barking up the wrong tree if you think I'm going to help you cheat.",
    "He's barking up the wrong tree asking me for money; I'm broke.",
    "She's barking up the wrong tree trying to convince him to change his mind.",
    "If you think she's going to apologize, you're barking up the wrong tree.",
    "They're barking up the wrong tree blaming the new guy; he wasn't even here when it happened.",
    "That's a load of codswallop!",
    "Don't listen to him; he's talking a load of codswallop.",
    "That story sounds like a load of codswallop to me.",
    "You don't actually believe that codswallop, do you?",
    "He's full of codswallop; don't take him seriously.",
    "He's a right tosser; don't pay him any attention.",
    "She's a right cow; she's always so rude to everyone.",
    "That bloke's a right muppet; he hasn't got a clue what he's doing.",
    "He's a right numpty; he can't even do the simplest tasks.",
    "She's a right plonker; she's always making silly mistakes.",
    "Don't get me started on politics.",
    "Don't get me started on the traffic this morning.",
    "Don't get me started on my boss; he's driving me mad.",
    "Don't get me started on the price of houses these days.",
    "Don't get me started on reality TV; it's all rubbish.",
    "You're winding me up!",
    "Stop it; you're winding me up!",
    "Are you doing this on purpose? You're winding me up!",
    "He's just winding you up; don't take it seriously.",
    "I can tell you're winding me up, and it's not funny.",
    "I'm not in the mood for this; stop winding me up.",
    "That's just what I needed.",
    "Ah, a cup of tea, that's just what I needed.",
    "A nice relaxing bath, that's just what I needed.",
    "That's just what I needed to hear; thank you.",
    "A weekend away, that's just what I needed.",
    "Well, that's just great, isn't it?",
    "Oh, that's just great, I've lost my keys again.",
    "That's just great, the car's broken down in the middle of nowhere.",
    "That's just great, now I'm going to be late for my appointment.",
    "Well, that's just great, another Monday morning.",
    "That's just great, isn't it? It's starting to rain now.",
    "I've had it up to here with your complaining!",
    "I've had it up to here with this job; I'm quitting!",
    "I've had it up to here with the noise; I can't concentrate.",
    "I've had it up to here with the mess; I'm cleaning this house from top to bottom.",
    "I've had it up to here with your excuses; just get it done!",
    "Mind your own beeswax!",
    "What I do on the weekends is none of your beeswax.",
    "How much money I make is none of your beeswax.",
    "Who I date is none of your beeswax.",
    "Why don't you mind your own beeswax for once?",
    "Butt out, this is none of your beeswax.",
    "Have you got a screw loose? What were you thinking?",
    "He's got a screw loose; I would steer clear of him.",
    "You must have a screw loose if you think that's acceptable.",
    "She's clearly got a screw loose; there's no reasoning with her.",
    "Are you sure you want to do that? You've probably got a screw loose.",
    "The decision to lay off half the staff was met with widespread disapproval.",
    "Experts are divided on the effectiveness of this new policy.",
    "The data clearly demonstrates a trend towards urbanization.",
    "Further research is needed to determine the long-term effects of this drug.",
    "The committee will reconvene in two weeks to discuss the matter further.",
    "The proposed amendment has sparked a heated debate.",
    "The evidence suggests a correlation, but not necessarily causation.",
    "The results of the study were inconclusive.",
    "The government has pledged to invest more in renewable energy.",
    "The new regulations will come into effect next month.",
    "She delivered a compelling argument in favor of the initiative.",
    "The report highlights the need for increased transparency.",
    "The organization is committed to promoting sustainable development.",
    "The investigation revealed a pattern of misconduct.",
    "The project is still in the preliminary stages of development.",
    "The court's decision was unprecedented.",
    "The company has announced plans to expand its operations overseas.",
    "The agreement is legally binding.",
    "The negotiations reached an impasse.",
    "The law requires all citizens to report any suspicious activity.",
    "The new policy has been met with resistance from some stakeholders.",
    "The research provides valuable insights into consumer behavior.",
    "The findings have significant implications for the industry.",
    "The university offers a wide range of undergraduate and postgraduate programs.",
    "The professor is a leading authority in the field of astrophysics.",
    "The library contains an extensive collection of rare books and manuscripts.",
    "The laboratory is equipped with state-of-the-art technology.",
    "The student body is diverse and represents a multitude of cultures.",
    "Academic freedom is a cornerstone of higher education.",
    "The institution is renowned for its rigorous academic standards.",
    "Plagiarism is a serious offense and will result in expulsion.",
    "The seminar will cover topics such as critical thinking and research methodology.",
    "The university provides numerous opportunities for extracurricular activities.",
    "The campus offers a variety of dining options, from fast food to fine dining.",
    "The dormitories are conveniently located within walking distance of the main campus buildings.",
    "The university has a strong alumni network that provides valuable career support.",
    "The research grant will fund groundbreaking studies in the field of genetics.",
    "The conference will bring together leading experts from around the world.",
    "The new stadium will be a world-class venue for sporting events.",
    "The museum's collection includes artifacts from ancient civilizations.",
    "The gallery features works by both established and emerging artists.",
    "The theater company is known for its innovative and thought-provoking productions.",
    "The orchestra will perform a selection of classical masterpieces.",
    "The festival will showcase a diverse range of musical genres.",
    "The city is a vibrant hub for arts and culture.",
    "The historic district is home to numerous architectural landmarks.",
    "The park offers a tranquil escape from the hustle and bustle of city life.",
    "The botanical garden is a beautiful oasis filled with exotic plants and flowers.",
    "The zoo is home to a wide variety of animals from around the world.",
    "The aquarium features an impressive collection of marine life.",
    "The science center offers interactive exhibits that are both educational and entertaining.",
    "The observation deck provides stunning panoramic views of the city.",
    "The amusement park is a popular destination for thrill-seekers.",
    "The water park offers a refreshing way to cool off on a hot day.",
    "The shopping mall features a wide selection of stores, restaurants, and entertainment options.",
    "The market is a great place to find fresh produce, local crafts, and unique souvenirs.",
    "The city offers a wide range of dining options, from casual eateries to Michelin-starred restaurants.",
    "The nightlife scene is vibrant and diverse, with something to suit every taste.",
    "The city is a melting pot of cultures, with a rich and diverse history.",
    "The public transportation system is efficient and affordable.",
    "The city is bike-friendly, with numerous bike lanes and paths.",
    "The city is known for its friendly and welcoming atmosphere.",
    "The locals are always happy to share their insider tips on the best places to eat, drink, and explore.",
    "The city offers a high quality of life, with excellent schools, healthcare, and public services.",
    "The city is a great place to raise a family, with plenty of parks, playgrounds, and family-friendly activities.",
    "The city is a popular destination for tourists from around the world.",
    "Let's get this show on the road; we're already running late.",
    "I'm going to hit the road early tomorrow to beat the traffic.",
    "He decided to take the road less traveled, and it made all the difference.",
    "She's had a bumpy road, but she's finally achieving her goals.",
    "We've reached the end of the road; there's nowhere else to go from here.",
    "I'm going to take a load off and relax for a bit.",
    "Why don't you take a load off your feet? You've been standing all day.",
    "He's got a heavy load on his mind with all these family issues.",
    "She's carrying a load of groceries; can you help her?",
    "That's a load of rubbish; don't believe a word of it.",
    "I need to catch some Z's; I'm exhausted.",
    "He's going to hit the hay early tonight; he has a big day tomorrow.",
    "I'm going to grab forty winks before the party.",
    "She's a night owl; she does her best work after midnight.",
    "He's an early bird; he's always up before the sun.",
    "I'm going to put my feet up and watch some TV.",
    "After a long day at work, all I want to do is put my feet up.",
    "He finally put his feet up and retired after 40 years of service.",
    "She likes to put her feet up with a good book on the weekends.",
    "Why don't you put your feet up and let me make you a cup of tea?",
    "I'm going to run this idea by my boss and see what she thinks.",
    "Could you run that by me one more time? I didn't quite catch it.",
    "Let me run some numbers and get back to you with an estimate.",
    "He's going to run for mayor in the next election.",
    "She's always running late; it's so frustrating.",
    "I'm going to pick up where we left off yesterday.",
    "Let's pick up the pace; we're falling behind schedule.",
    "Sales have started to pick up after a slow start to the year.",
    "He picked up a few words of Spanish while he was in Mexico.",
    "Could you pick up some milk on your way home?",
    "I'm going to put in a good word for you with the manager.",
    "She put in long hours to get the project finished on time.",
    "He put in a lot of effort to make the party a success.",
    "I need to put in some extra hours this week to meet the deadline.",
    "She put in a stellar performance in the play.",
    "I'm going to get to the bottom of this mystery.",
    "He's always trying to get out of doing work.",
    "She got away with cheating on the test.",
    "I need to get around to organizing my closet.",
    "He got ahead in his career by working hard and networking.",
    "Could you hold on a moment? I'll be right back.",
    "Hold on tight; this is going to be a bumpy ride.",
    "They decided to hold off on buying a house until the market improves.",
    "Hold on to your hat; this is going to be exciting!",
    "I can't hold out much longer; I'm starving.",
    "I'm going to look into that matter and get back to you.",
    "She's looking forward to her vacation.",
    "He's looking after his elderly mother.",
    "Could you look over this report for me?",
    "I'm looking for a new job.",
    "Let's take it easy tonight; I'm exhausted.",
    "He needs to take it down a notch; he's getting too worked up.",
    "I'm going to take a break from social media for a while.",
    "She decided to take a chance and start her own business.",
    "He took advantage of the opportunity to travel the world.",
    "I'm going to keep an eye on the kids while you're out.",
    "Could you keep me in the loop on this project?",
    "I'll keep my fingers crossed for you.",
    "He's always trying to keep up with the Joneses.",
    "She needs to keep her chin up; things will get better.",
    "Let's face it; we're not going to win this game.",
    "He's finally facing up to his responsibilities.",
    "She couldn't face the thought of going back to her old job.",
    "I can't face another day of this; I need a change.",
    "It's time to face the music; you made a mistake.",
    "I'm going to put off doing my taxes until the last minute.",
    "She always puts others before herself.",
    "He's really putting himself out there by performing on stage.",
    "Could you put me through to the manager, please?",
    "I'm not going to put up with this behavior any longer.",
    "Let's get together soon for a coffee.",
    "He's always trying to get out of doing his chores.",
    "She managed to get through the difficult exam.",
    "I need to get rid of some old clothes.",
    "He's trying to get his foot in the door in the film industry.",
    "Could you give me a ride to the airport?",
    "She gave up smoking last year.",
    "He's always giving off negative vibes.",
    "I'm not going to give in to his demands.",
    "She gave it her all in the competition.",
    "I'm going to check out that new restaurant downtown.",
    "Could you check in with me later?",
    "He's always checking up on his ex-girlfriend.",
    "I need to check out of the hotel by noon.",
    "She's going to check into a rehab facility.",
    "Let's go over the details one more time.",
    "He went against his parents' wishes and dropped out of college.",
    "She went along with the plan, even though she disagreed.",
    "I don't know what's going on with him lately.",
    "The meeting went off without a hitch.",
    "I need to brush up on my Spanish before my trip to Mexico.",
    "She's trying to break into the fashion industry.",
    "He broke down in tears when he heard the news.",
    "Could you break down the costs for me?",
    "The negotiations broke off without an agreement.",
    "I'm going to bring up the issue at the next meeting.",
    "She was brought up by her grandparents.",
    "He's always trying to bring others down.",
    "The scandal brought down the government.",
    "Could you bring me back a souvenir from your trip?",
    "Let's call off the meeting; I'm not feeling well.",
    "He called on his friends for support during the difficult time.",
    "She called out his bad behavior.",
    "I'm going to call around and see if anyone has seen my lost dog.",
    "He called for a change in leadership.",
    "I'm going to carry on with my work, despite the distractions.",
    "She carried out the plan perfectly.",
    "He's always carrying on about his accomplishments.",
    "The tradition has been carried down through generations.",
    "The research was carried out over a period of five years.",
    "I need to cut back on my spending.",
    "She cut in line at the grocery store.",
    "He cut off the conversation abruptly.",
    "Could you cut out that noise? It's distracting.",
    "I'm trying to cut down on sugar.",
    "Let's do away with the old rules and start fresh.",
    "He did well in his exams, considering he was sick.",
    "She did up the old house and made it look beautiful.",
    "I could do with a vacation.",
    "He was done in by his own greed.",
    "I'm going to fall back on my savings if I lose my job.",
    "She fell behind on her rent payments.",
    "He fell for her tricks again.",
    "They fell out over a silly argument.",
    "The deal fell through at the last minute.",
    "I'm going to figure out a way to solve this problem.",
    "She filled in for me while I was on vacation.",
    "Could you fill me in on what happened at the meeting?",
    "He filled up the car with gas.",
    "I need to fill out this application form.",
    "I'm going to find out what's going on.",
    "She finally found her calling as a teacher.",
    "He found himself in a difficult situation.",
    "I need to find my way back to the hotel.",
    "She found out the truth about his past.",
    "Let's see this through to the end.",
    "I can't see eye to eye with him on this issue.",
    "She finally saw through his lies.",
    "He's trying to see about getting tickets to the concert.",
    "Could you see to the arrangements for the party?",
    "I'm going to take on more responsibility at work.",
    "She took off her coat and hung it up.",
    "He took to gardening after he retired.",
    "The business really took off after the new marketing campaign.",
    "She was taken aback by his sudden outburst.",
    "I'm going to turn down that job offer; it's not right for me.",
    "Could you turn up the volume? I can't hear the TV.",
    "He turned in early last night because he was tired.",
    "She turned into a different person after she won the lottery.",
    "The investigation turned up some interesting evidence.",
    "I'm going to wear out these shoes before I buy new ones.",
    "She wore down her opponents with her persistence.",
    "He's trying to work off his debt.",
    "I need to work out more often to stay in shape.",
    "Things will work out in the end; just be patient.",
    "I'm going to try my hand at baking this weekend.",
    "She has a knack for fixing things.",
    "He's a jack-of-all-trades, but a master of none.",
    "I need to bone up on my history before the exam.",
    "She's got a green thumb; everything she plants flourishes.",
    "I'm going to let my hair down and relax this weekend.",
    "He spilled the beans about the surprise party.",
    "She's the spitting image of her mother.",
    "I'm going to take a rain check on that movie; I'm too tired tonight.",
    "He kicked the bucket last year.",
    "I'm going to jump on the bandwagon and start investing in cryptocurrency.",
    "She's always trying to steal my thunder.",
    "He's a wolf in sheep's clothing.",
    "I'm going to keep my nose to the grindstone and finish this project.",
    "She's got a heart of gold.",
    "He's a real pain in the neck.",
    "I'm going to hit the books and study for my exam.",
    "She's got a lot on her plate right now.",
    "He's always trying to get a rise out of me.",
    "I'm going to take the plunge and start my own business.",
    "She's got a chip on her shoulder about not getting the promotion.",
    "He's a couch potato; he spends all day watching TV.",
    "I'm going to make a mountain out of a molehill if I keep worrying about this.",
    "She's always trying to stir the pot.",
    "He's got a bee in his bonnet about that new policy.",
    "I'm going to play it by ear and see how things go.",
    "She's always trying to get the upper hand.",
    "He's a dark horse in this competition.",
    "I'm going to throw caution to the wind and go skydiving.",
    "She's always trying to get under my skin.",
    "He's a loose cannon; you never know what he's going to do.",
    "I'm going to bite the bullet and apologize to her.",
    "She's always trying to rock the boat.",
    "He's got a bone to pick with me about something.",
    "I'm going to take a page out of her book and start exercising more.",
    "She's always trying to push my buttons.",
    "He's a wet blanket; he always ruins the fun.",
    "I'm going to keep my ear to the ground and see what I can find out.",
    "She's always trying to get the better of me.",
    "He's a snake in the grass; you can't trust him.",
    "I'm going to roll with the punches and see what happens.",
    "She's always trying to make a scene.",
    "He's got a lot of nerve to say that to me.",
    "I'm going to take a stab at writing a novel.",
    "She's always trying to one-up me.",
    "He's a bull in a china shop; he's always breaking things.",
    "I'm going to let sleeping dogs lie and not bring up that old argument.",
    "She's always trying to get a word in edgewise.",
    "He's a cheapskate; he never wants to spend any money.",
    "I'm going to put my best foot forward and make a good impression.",
    "She's always trying to get her own way.",
    "He's a creature of habit; he does the same thing every day.",
    "I'm going to go out on a limb and say that I think this is a bad idea.",
    "She's always trying to get me to do her dirty work.",
    "He's a bad egg; you should stay away from him.",
    "I'm going to turn over a new leaf and start living a healthier lifestyle.",
    "She's always trying to get a rise out of people.",
    "He's a big fish in a small pond.",
    "I'm going to take the bull by the horns and deal with this problem head-on.",
    "She's always trying to get me to spill the beans.",
    "He's a busybody; he's always meddling in other people's affairs.",
    "I'm going to bury the hatchet and make peace with her.",
    "She's always trying to get me to change my mind.",
    "He's a bad apple; he's always causing trouble.",
    "I'm going to go the extra mile and make sure this project is a success.",
    "She's always trying to get me to see her point of view.",
    "He's a backseat driver; he's always telling me how to drive.",
    "I'm going to bite my tongue and not say anything.",
    "She's always trying to get me to take sides.",
    "He's a big shot; he thinks he's better than everyone else.",
    "I'm going to take it with a grain of salt.",
    "She's always trying to get me to go along with her plans.",
    "He's a cold fish; he's not very friendly.",
    "I'm going to get this monkey off my back and finally quit smoking.",
    "She's always trying to get me to open up to her.",
    "He's a daredevil; he loves to take risks.",
    "I'm going to hit the nail on the head and say exactly what I think.",
    "She's always trying to get me to do things her way.",
    "He's a doubting Thomas; he never believes anything unless he sees it with his own eyes.",
    "I'm going to kill two birds with one stone and run some errands while I'm out.",
    "She's always trying to get me to lighten up.",
    "He's a fair-weather friend; he's only around when things are going well.",
    "I'm going to make a clean break and start over.",
    "She's always trying to get me to try new things.",
    "He's a go-getter; he's always striving to achieve more.",
    "I'm going to nip this in the bud before it gets out of hand.",
    "She's always trying to get me to take a break.",
    "He's a good egg; he's always willing to help out.",
    "I'm going to play devil's advocate and argue the other side.",
    "She's always trying to get me to see things from a different perspective.",
    "He's a happy camper; he's always in a good mood.",
    "I'm going to put all my eggs in one basket and hope for the best.",
    "She's always trying to get me to go out more.",
    "He's a jack of all trades; he can do a little bit of everything.",
    "I'm going to read between the lines and figure out what she really means.",
    "She's always trying to get me to take it easy.",
    "He's a know-it-all; he thinks he knows everything.",
    "I'm going to see eye to eye with her on this issue.",
    "She's always trying to get me to be more spontaneous.",
    "He's a lone wolf; he prefers to work alone.",
    "I'm going to sit on the fence and not take sides.",
    "She's always trying to get me to think before I act.",
    "He's a man of his word; he always keeps his promises.",
    "I'm going to take a back seat and let her handle this.",
    "She's always trying to get me to be more patient.",
    "He's a night owl; he stays up late and sleeps in.",
    "I'm going to throw in the towel and give up.",
    "She's always trying to get me to be more understanding.",
    "He's a people person; he loves to socialize.",
    "I'm going to turn a blind eye to that mistake.",
    "She's always trying to get me to be more assertive.",
    "He's a penny pincher; he's always trying to save money.",
    "I'm going to work my fingers to the bone to get this done.",
    "She's always trying to get me to be more organized.",
    "He's a stick in the mud; he doesn't like to try new things.",
    "I'm going to wrap my head around this concept.",
    "She's always trying to get me to be more adventurous.",
    "He's a smooth talker; he can talk his way out of anything.",
    "I need to stop beating around the bush and get to the point.",
    "Could you spell it out for me? I'm not following.",
    "I'm on a tight budget this month.",
    "She's got her hands full with those three kids.",
    "He's always willing to lend a helping hand.",
    "I'm drawing a blank on his name.",
    "She's got a memory like a sieve.",
    "He's as stubborn as a mule.",
    "I'm feeling on top of the world today!",
    "She's got a heart of stone.",
    "He's a real go-getter.",
    "I'm going to have to play it by ear.",
    "She's got a silver tongue.",
    "He's a diamond in the rough.",
    "I'm going to take it one day at a time.",
    "She's got a way with words.",
    "He's a breath of fresh air.",
    "I'm going to go with the flow.",
    "She's got a mind like a steel trap.",
    "He's a force to be reckoned with.",
    "I'm going to keep my options open.",
    "She's got a good head on her shoulders.",
    "He's a man of few words.",
    "I'm going to put my money where my mouth is.",
    "She's got a lot of irons in the fire.",
    "He's a tough cookie.",
    "I'm going to take the high road.",
    "She's got a can-do attitude.",
    "He's a straight shooter.",
    "I'm going to keep my feet on the ground.",
    "She's got a bubbly personality.",
    "He's a mover and shaker.",
    "I'm going to take a leap of faith.",
    "She's got a heart of gold.",
    "He's a loose cannon.",
    "I'm going to bite the bullet.",
    "She's always rocking the boat.",
    "He's got a bone to pick with me.",
    "I'm going to take a page out of her book.",
    "She's always pushing my buttons.",
    "He's a wet blanket.",
    "I'm going to keep my ear to the ground.",
    "She's always trying to get the better of me.",
    "He's a snake in the grass.",
    "I'm going to roll with the punches.",
    "She's always trying to make a scene.",
    "He's got a lot of nerve.",
    "I'm going to take a stab at it.",
    "She's always trying to one-up me.",
    "He's a bull in a china shop.",
    "I'm going to let sleeping dogs lie.",
    "She's always trying to get a word in edgewise.",
    "He's a cheapskate.",
    "I'm going to put my best foot forward.",
    "She's always trying to get her own way.",
    "He's a creature of habit.",
    "I'm going to go out on a limb.",
    "She's always trying to get me to do her dirty work.",
    "He's a bad egg.",
    "I'm going to turn over a new leaf.",
    "She's always trying to get a rise out of people.",
    "He's a big fish in a small pond.",
    "I'm going to take the bull by the horns.",
    "She's always trying to get me to spill the beans.",
    "He's a busybody.",
    "I'm going to bury the hatchet.",
    "She's always trying to get me to change my mind.",
    "He's a bad apple.",
    "I'm going to go the extra mile.",
    "She's always trying to get me to see her point of view.",
    "He's a backseat driver.",
    "I'm going to bite my tongue.",
    "She's always trying to get me to take sides.",
    "He's a big shot.",
    "I'm going to take it with a grain of salt.",
    "She's always trying to get me to go along with her plans.",
    "He's a cold fish.",
    "I'm going to get this monkey off my back.",
    "She's always trying to get me to open up to her.",
    "He's a daredevil.",
    "I'm going to hit the nail on the head.",
    "She's always trying to get me to do things her way.",
    "He's a doubting Thomas.",
    "I'm going to kill two birds with one stone.",
    "She's always trying to get me to lighten up.",
    "He's a fair-weather friend.",
    "I'm going to make a clean break.",
    "She's always trying to get me to try new things.",
    "He's a go-getter.",
    "I'm going to nip this in the bud.",
    "She's always trying to get me to take a break.",
    "He's a good egg.",
    "I'm going to play devil's advocate.",
    "She's always trying to get me to see things from a different perspective.",
    "He's a happy camper.",
    "I'm going to put all my eggs in one basket.",
    "She's always trying to get me to go out more.",
    "He's a jack of all trades.",
    "I'm going to read between the lines.",
    "She's always trying to get me to take it easy.",
    "He's a know-it-all.",
    "I'm going to see eye to eye with her on this.",
    "She's always trying to get me to be more spontaneous.",
    "He's a lone wolf.",
    "I'm going to sit on the fence.",
    "She's always trying to get me to think before I act.",
    "He's a man of his word.",
    "I'm going to take a back seat.",
    "She's always trying to get me to be more patient.",
    "He's a night owl.",
    "I'm going to throw in the towel.",
    "She's always trying to get me to be more understanding.",
    "He's a people person.",
    "I'm going to turn a blind eye to that.",
    "She's always trying to get me to be more assertive.",
    "He's a penny pincher.",
    "I'm going to work my fingers to the bone.",
    "She's always trying to get me to be more organized.",
    "He's a stick in the mud.",
    "What are your thoughts on the current political climate?",
    "I'm considering taking a sabbatical to travel and write.",
    "Have you ever been to a live concert?",
    "She's really into sustainable living these days.",
    "What's the most challenging thing you've ever done?",
    "I find that meditating helps me manage stress.",
    "How do you typically handle disagreements with friends?",
    "He's always been passionate about environmental conservation.",
    "What's your take on the gig economy?",
    "I'm trying to learn a new language in my spare time.",
    "Have you had any experience with online dating?",
    "She's a firm believer in the power of positive thinking.",
    "What's your favorite way to stay active?",
    "I'm not sure I agree with that assessment.",
    "How do you feel about working from home?",
    "He's got a real knack for storytelling.",
    "What's the most valuable lesson you've learned in life?",
    "I'm always up for trying new foods.",
    "Have you ever had a paranormal experience?",
    "She's a big advocate for mental health awareness.",
    "What's your opinion on artificial intelligence?",
    "I'm trying to cut back on my sugar intake.",
    "How do you stay motivated when you're feeling down?",
    "He's got a great sense of humor.",
    "What's the most beautiful place you've ever visited?",
    "I'm a firm believer in lifelong learning.",
    "Have you ever volunteered for a cause you care about?",
    "She's really into vintage fashion.",
    "What's your favorite way to unwind after a long day?",
    "I'm not sure I can make it to your party on Saturday.",
    "How do you deal with difficult people?",
    "He's got a real passion for photography.",
    "What's the most interesting book you've read recently?",
    "I'm always on the lookout for new opportunities.",
    "Have you ever been to a protest or demonstration?",
    "She's a big fan of independent films.",
    "What's your favorite way to spend a rainy day?",
    "I'm not sure I understand what you mean by that.",
    "How do you handle stress at work?",
    "He's got a real talent for playing the guitar.",
    "What's the most memorable trip you've ever taken?",
    "I'm a strong supporter of local businesses.",
    "Have you ever had a near-death experience?",
    "She's really into organic gardening.",
    "What's your favorite way to celebrate your birthday?",
    "I'm not sure I agree with your opinion on that matter.",
    "How do you stay focused when you're working on a project?",
    "He's got a real gift for public speaking.",
    "What's the most important thing you've learned from your parents?",
    "I'm always interested in learning about other cultures.",
    "Have you ever been to a music festival?",
    "She's a big believer in karma.",
    "What's your favorite way to help others?",
    "I'm not sure I can trust him after what he did.",
    "How do you handle criticism?",
    "He's got a real passion for cooking.",
    "What's the most adventurous thing you've ever done?",
    "I'm a big advocate for animal rights.",
    "Have you ever met a celebrity?",
    "She's really into minimalist living.",
    "What's your favorite way to express your creativity?",
    "I'm not sure I understand your point of view.",
    "How do you stay positive when things are tough?",
    "He's got a real talent for writing.",
    "What's the most important quality in a friend?",
    "I'm always looking for ways to improve myself.",
    "Have you ever been to a sporting event?",
    "She's a big fan of documentaries.",
    "What's your favorite way to connect with nature?",
    "I'm not sure I agree with the way things are going.",
    "How do you handle rejection?",
    "He's got a real passion for history.",
    "What's the most valuable thing you own?",
    "I'm a strong believer in the importance of education.",
    "Have you ever had a life-changing experience?",
    "She's really into upcycling and repurposing old items.",
    "What's your favorite way to give back to your community?",
    "I'm not sure I can forgive her for what she said.",
    "How do you stay organized when you're busy?",
    "He's got a real gift for making people laugh.",
    "What's the most important lesson you've learned from a mistake?",
    "I'm always open to new ideas and perspectives.",
    "Have you ever been to a live theater performance?",
    "She's a big advocate for gender equality.",
    "What's your favorite way to challenge yourself?",
    "I'm not sure I understand the rules of the game.",
    "How do you handle peer pressure?",
    "He's got a real passion for technology.",
    "What's the most important thing you look for in a partner?",
    "I'm a firm believer in the power of teamwork.",
    "Have you ever had a premonition that came true?",
    "She's really into alternative medicine.",
    "What's your favorite way to stay informed about current events?",
    "I'm not sure I agree with that decision.",
    "How do you stay motivated to achieve your goals?",
    "He's got a real talent for problem-solving.",
    "What's the most important thing you've learned about yourself?",
    "I'm always striving to be a better person.",
    "Have you ever been to a historical reenactment?",
    "She's a big fan of podcasts.",
    "What's your favorite way to learn new things?",
    "I'm not sure I can handle this situation on my own.",
    "How do you deal with disappointment?",
    "He's got a real passion for social justice.",
    "What's the most important piece of advice you've ever received?",
    "I'm a strong supporter of the arts.",
    "Have you ever had a spiritual experience?",
    "She's really into DIY projects.",
    "What's your favorite way to make a difference in the world?",
    "I'm not sure I understand the instructions.",
    "How do you stay true to yourself when facing adversity?",
    "He's got a real gift for leadership.",
    "What's the most important thing you've learned from traveling?",
    "I'm always looking for ways to expand my horizons.",
    "Have you ever been to a political rally?",
    "She's a big believer in the importance of family.",
    "What's your favorite way to de-stress?",
    "I'm not sure I agree with your interpretation of events.",
    "How do you handle difficult conversations?",
    "He's got a real passion for human rights.",
    "What's the most important thing you've learned from a relationship?",
    "I'm a firm believer in the power of positive change.",
    "Have you ever had a supernatural experience?",
    "She's really into holistic health.",
    "What's your favorite way to show someone you care?",
    "I'm not sure I can do this anymore.",
    "How do you stay focused on your long-term goals?",
    "He's got a real talent for negotiation.",
    "What's the most important thing you've learned from a mentor?",
    "I'm always trying to be more mindful of my impact on the environment.",
    "Have you ever been to a religious ceremony from a different faith?",
    "She's a big advocate for LGBTQ+ rights.",
    "What's your favorite way to boost your creativity?",
    "I'm not sure I understand your reasoning.",
    "How do you handle failure?",
    "He's got a real passion for education.",
    "What's the most important thing you've learned from a different culture?",
    "I'm a strong believer in the importance of self-care.",
    "Have you ever had an experience that changed your perspective on life?",
    "She's really into ethical fashion.",
    "What's your favorite way to resolve conflict?",
    "I'm not sure I agree with the way this is being handled.",
    "How do you stay motivated to learn new things?",
    "He's got a real gift for connecting with people.",
    "What's the most important thing you've learned from a difficult situation?",
    "I'm always looking for ways to make a positive impact on the world.",
    "Have you ever been to a cultural festival?",
    "She's a big fan of audiobooks.",
    "What's your favorite way to break out of your comfort zone?",
    "I'm not sure I can support that decision.",
    "How do you deal with difficult emotions?",
    "He's got a real passion for sustainable development.",
    "What's the most important thing you've learned from a personal struggle?",
    "I'm a firm believer in the power of forgiveness.",
    "Have you ever had an experience that challenged your beliefs?",
    "She's really into body positivity.",
    "What's your favorite way to foster meaningful connections?",
    "I'm not sure I understand the implications of this.",
    "How do you stay grounded when things are chaotic?",
    "He's got a real talent for diplomacy.",
    "What's the most important thing you've learned from a leadership role?",
    "I'm always striving to be more open-minded.",
    "Have you ever been to a traditional ceremony?",
    "She's a big advocate for social responsibility.",
    "What's your favorite way to spark joy in your life?",
    "I'm not sure I agree with that policy.",
    "How do you handle difficult decisions?",
    "He's got a real passion for community building.",
    "What's the most important thing you've learned from a personal failure?",
    "I'm a strong believer in the power of resilience.",
    "Have you ever had an experience that made you question everything?",
    "She's really into slow living.",
    "What's your favorite way to cultivate gratitude?",
    "I'm not sure I can get on board with that idea.",
    "How do you stay motivated to make a difference in the world?",
    "He's got a real gift for inspiring others.",
    "What's the most important thing you've learned from a major life change?",
    "I'm always looking for ways to live more intentionally.",
    "Have you ever been to a historical landmark?",
    "She's a big fan of online learning platforms.",
    "What's your favorite way to promote positive change in your community?",
    "I'm not sure I understand the purpose of this.",
    "How do you deal with uncertainty about the future?",
    "He's got a real passion for advocating for marginalized communities.",
    "What's the most important thing you've learned about building trust?",
    "I'm a firm believer in the importance of empathy.",
    "Have you ever participated in a research study?",
    "She's very interested in the concept of mindfulness.",
    "What's your preferred method for brainstorming new ideas?",
    "I'm not entirely convinced that's the best approach.",
    "How do you maintain a healthy work-life balance?",
    "He has an amazing ability to diffuse tense situations.",
    "What's been your most significant accomplishment to date?",
    "I try to approach every situation with an open mind.",
    "Have you ever taken a personality test, like the Myers-Briggs?",
    "She's an avid supporter of the farm-to-table movement.",
    "What's your favorite way to practice self-compassion?",
    "I'm having a hard time understanding the rationale behind this decision.",
    "How do you cultivate a positive mindset?",
    "He's exceptionally skilled at conflict resolution.",
    "What's the most important lesson you've learned about effective communication?",
    "I'm always seeking opportunities for personal growth.",
    "Have you ever participated in a debate or public speaking event?",
    "She's a staunch advocate for human rights and equality.",
    "I've got a splitting headache. Have you got any painkillers?",
    "Could you keep an eye out for my package? It should be delivered today.",
    "I'm snowed under with work at the moment. Can we reschedule?",
    "Heads up! The boss is in a bad mood today.",
    "I'm going to play hooky today and go to the beach.",
    "What do you say we grab a bite to eat later?",
    "No worries, I've got this covered.",
    "That's a bit steep for a cup of coffee, don't you think?",
    "I'm easy, whatever you want to do is fine by me.",
    "Sorry, I didn't catch that. Could you repeat it?",
    "Long story short, I ended up missing my flight.",
    "Let's cut to the chase. What's your offer?",
    "I'm on a tight budget, so I can't afford to splurge.",
    "Can you give me a ballpark figure for the repairs?",
    "I'm not going to sugarcoat it. This is going to be tough.",
    "I'm going to level with you. I'm not happy with your performance.",
    "Let's touch base next week and see where we're at.",
    "Keep me posted on any developments.",
    "I'm going to have to burn the midnight oil to finish this project.",
    "She's a real go-getter. She's always one step ahead.",
    "He's a bit of a slacker. He never pulls his weight.",
    "I'm going to take a wild guess and say it's about 50.",
    "That's a shot in the dark, but it might just work.",
    "I'm going to go out on a limb here and say we should invest.",
    "Let's think outside the box and come up with some new ideas.",
    "We need to get our ducks in a row before the meeting.",
    "I'm going to have to wing it; I didn't have time to prepare.",
    "Let's just play it by ear and see how it goes.",
    "I'm going to take a stab at fixing it, but no promises.",
    "He threw me under the bus to save his own skin.",
    "She's always trying to weasel out of doing her chores.",
    "I'm not going to beat around the bush. I'm breaking up with you.",
    "Let's address the elephant in the room.",
    "I'm going to have to face the music sooner or later.",
    "He's got a chip on his shoulder about not being promoted.",
    "She's always trying to stir the pot and cause drama.",
    "I'm going to nip this in the bud before it gets out of hand.",
    "Let's bury the hatchet and move on.",
    "I'm going to take the high road and not stoop to their level.",
    "He's a loose cannon; you never know what he's going to do.",
    "She's a snake in the grass; you can't trust her.",
    "I'm going to roll with the punches and adapt to the situation.",
    "He's a bull in a china shop; he's always making a mess.",
    "I'm going to let sleeping dogs lie and not bring up that old argument.",
    "She's a busybody; she's always meddling in other people's affairs.",
    "He's a bad apple; he's always causing trouble.",
    "I'm going to go the extra mile to make sure this is a success.",
    "She's a backseat driver; she's always telling me how to do things.",
    "He's a big shot; he thinks he's better than everyone else.",
    "I'm going to take it with a grain of salt.",
    "He's a cold fish; he's not very friendly or approachable.",
    "I'm going to get this monkey off my back and finally quit smoking.",
    "He's a daredevil; he loves to take risks.",
    "I'm going to hit the nail on the head and say exactly what I think.",
    "He's a doubting Thomas; he needs to see it to believe it.",
    "I'm going to kill two birds with one stone and run errands on my way home.",
    "He's a fair-weather friend; he's only around when things are good.",
    "I'm going to make a clean break and start over.",
    "He's a go-getter; he's always striving to achieve more.",
    "I'm going to nip this problem in the bud before it gets worse.",
    "He's a good egg; he's always willing to help out.",
    "I'm going to play devil's advocate here and offer a different perspective.",
    "He's a happy camper; he's always in a good mood.",
    "I'm going to put all my eggs in one basket and hope for the best.",
    "He's a jack of all trades; he knows a little bit about everything.",
    "I'm going to read between the lines and figure out what's really going on.",
    "He's a know-it-all; he thinks he knows everything about everything.",
    "I'm going to have to see eye to eye with her on this issue.",
    "He's a lone wolf; he prefers to work independently.",
    "I'm going to sit on the fence and not take sides on this issue.",
    "He's a man of his word; you can always count on him.",
    "I'm going to take a back seat on this project and let her lead.",
    "He's a night owl; he prefers to work late at night.",
    "I'm going to throw in the towel; I've had enough.",
    "He's a people person; he's great at building relationships.",
    "I'm going to turn a blind eye to that minor infraction.",
    "He's a penny pincher; he's always looking for ways to save money.",
    "I'm going to work my fingers to the bone to get this done on time.",
    "He's a stick in the mud; he's resistant to change.",
    "I'm trying to wrap my head around this complex issue.",
    "He's a smooth talker; he can be very persuasive.",
    "I need to stop beating around the bush and get to the point.",
    "Could you spell it out for me? I'm not quite grasping it.",
    "I'm on a tight budget this month, so no extravagant spending.",
    "She's got her hands full with those three kids.",
    "He's always willing to lend a helping hand.",
    "I'm drawing a blank on his name. Can you remind me?",
    "She's got a memory like a sieve; she forgets everything.",
    "He's as stubborn as a mule; he won't change his mind.",
    "I'm feeling on top of the world today! Everything is going my way.",
    "She's got a heart of stone; she's completely unfeeling.",
    "He's a real go-getter; he's always pursuing his goals.",
    "I'm going to have to play it by ear; I don't have a set plan.",
    "She's got a silver tongue; she's very eloquent.",
    "He's a diamond in the rough; he has a lot of potential.",
    "I'm going to take it one day at a time and not get overwhelmed.",
    "She's got a way with words; she's great at expressing herself.",
    "He's a breath of fresh air; he brings a new perspective.",
    "I'm just going to go with the flow and see what happens.",
    "She's got a mind like a steel trap; she remembers everything.",
    "He's a force to be reckoned with; he's very powerful.",
    "I'm going to keep my options open and not commit just yet.",
    "She's got a good head on her shoulders; she's very sensible.",
    "He's a man of few words; he doesn't talk much.",
    "I'm going to put my money where my mouth is and invest in this project.",
    "She's got a lot of irons in the fire; she's involved in many things.",
    "He's a tough cookie; he's very resilient.",
    "I'm going to take the high road and not engage in that negativity.",
    "She's got a can-do attitude; she's always positive and proactive.",
    "He's a straight shooter; he's very direct and honest.",
    "I'm going to keep my feet on the ground and stay realistic.",
    "She's got a bubbly personality; she's very cheerful and outgoing.",
    "He's a mover and shaker; he's influential and gets things done.",
    "I'm going to take a leap of faith and trust that it will work out.",
    "Doctor, I've been having these persistent headaches lately.",
    "I think I might have pulled a muscle in my back.",
    "Could you refill my prescription, please?",
    "What are the side effects of this medication?",
    "I'd like to schedule a check-up appointment.",
    "Do you accept my insurance?",
    "I'm here to see Dr. Smith. I have a 2 PM appointment.",
    "The pain is a dull ache, and it's been getting worse.",
    "I'm allergic to penicillin.",
    "How long will it take to get the test results back?",
    "Excuse me, where can I find the gift shop?",
    "I'm looking for a shirt, size medium, preferably in blue.",
    "Do you have this in a different color?",
    "Could you tell me where the fitting rooms are?",
    "How much is this item?",
    "Is this on sale?",
    "Do you offer any discounts?",
    "I'd like to return this item, please. It's faulty.",
    "Can I get a refund or store credit?",
    "Could you gift wrap this for me, please?",
    "Hi, I'd like to order a large pepperoni pizza for delivery.",
    "Can I get a table for two, please?",
    "Could we see the menu, please?",
    "What are your specials today?",
    "I'll have the steak, medium rare, please.",
    "Could we get some more water, please?",
    "Is it possible to split the bill?",
    "Everything was delicious, thank you.",
    "Could we have the check, please?",
    "Excuse me, I think there's a mistake on the bill.",
    "Do you have any vegetarian options?",
    "I'm allergic to peanuts. Could you make sure there are none in this dish?",
    "Is it spicy?",
    "Could I get this to go, please?",
    "What do you recommend?",
    "This is on the house.",
    "Keep the change.",
    "I'd like to make a reservation for Friday night at 7 PM.",
    "Could I get a wake-up call at 6 AM, please?",
    "Is there Wi-Fi in the rooms?",
    "What time is check-out?",
    "Could you please call me a taxi?",
    "Where is the nearest ATM?",
    "I need to report a lost passport.",
    "My flight has been delayed. What are my options?",
    "Where is the baggage claim area?",
    "Can I help you with your luggage?",
    "Is there a direct flight to London?",
    "I'd like to upgrade to business class.",
    "What's the exchange rate for Euros today?",
    "I need to rent a car. What are my options?",
    "Is this the right way to the train station?",
    "Could you recommend a good place to get souvenirs?",
    "What are the local customs here?",
    "I'm here on vacation/business.",
    "Could you take a picture of us, please?",
    "I need to report an accident. There's been a collision.",
    "Can you help me? I've lost my wallet.",
    "I need to call the police.",
    "Is there a doctor nearby? I'm not feeling well.",
    "Fire! Please evacuate the building immediately.",
    "Help! I'm being robbed!",
    "Call an ambulance! He's having a heart attack!",
    "Watch out! That car is speeding!",
    "I've locked myself out of my house. Can you help?",
    "My phone's been stolen. What should I do?",
    "Don't panic. Everything will be alright.",
    "Stay calm and tell me what happened.",
    "I need to file a police report.",
    "Please send someone right away. It's an emergency.",
    "I've been mugged. They took my bag and ran off.",
    "Can I use your phone? It's an emergency.",
    "Where's the nearest police station/hospital?",
    "I need to contact my embassy.",
    "There's been a break-in at my neighbor's house.",
    "I smell gas. I think there's a leak.",
    "The traffic is a nightmare today.",
    "I'm stuck in a traffic jam.",
    "We're going to be late. Is there a shortcut?",
    "There's been a road closure up ahead.",
    "I got a speeding ticket yesterday.",
    "Could you pull over here, please?",
    "I need to fill up the tank. Where's the nearest gas station?",
    "My car broke down. Can you help me?",
    "I think I have a flat tire.",
    "Do you know how to change a tire?",
    "I need to call a tow truck.",
    "Is there a mechanic nearby?",
    "How much will it cost to fix the car?",
    "I need to get my car serviced.",
    "The engine is making a strange noise.",
    "The brakes are squeaking.",
    "My car insurance is up for renewal.",
    "I need to parallel park. Can you guide me?",
    "Watch out for pedestrians!",
    "You can park over there.",
    "I'm not feeling so hot today. Think I'll stay in.",
    "Feeling a bit rough. Might need a day off.",
    "I'm totally wiped out. Going to bed early.",
    "Just feeling a tad under the weather, nothing major.",
    "I'm not up to going out tonight. Feeling blah.",
    "This weather is nuts! What's it like your way?",
    "It's chucking it down out there! Don't forget your brolly.",
    "What's the damage for that?",
    "That's a rip-off! No way I'm paying that.",
    "Could you spot me a fiver? I'll pay you back later.",
    "The aforementioned study provides compelling evidence in support of the hypothesis.",
    "Furthermore, the data suggests a significant correlation between the two variables.",
    "Therefore, we can conclude that further research is warranted in this area.",
    "Moreover, the implications of these findings are far-reaching and merit further investigation.",
    "Notwithstanding the limitations of the study, the results are statistically significant.",
    "In addition to the points already discussed, it is important to consider the ethical implications.",
    "Consequently, the committee has decided to postpone the implementation of the new policy.",
    "Hence, it is imperative that we address this issue in a timely and efficient manner.",
    "Thus, the proposed solution offers a viable alternative to the current approach.",
    "Accordingly, the following recommendations are hereby submitted for your consideration.",
    "Pursuant to our agreement, the payment is due on the first of the month.",
    "Heretofore, the company has maintained a consistent record of growth.",
    "Insofar as the budget allows, we will allocate additional resources to the project.",
    "The undersigned hereby certifies that the information provided is true and accurate.",
    "The defendant is hereby charged with a misdemeanor, to wit, violation of section 42 of the penal code.",
    "The plaintiff seeks compensatory damages in the amount of ten thousand dollars.",
    "The court hereby grants the motion to dismiss.",
    "The contract is null and void due to a breach of terms.",
    "The evidence is inadmissible on the grounds of hearsay.",
    "The witness is deemed unreliable due to prior inconsistent statements.",
    "The prosecution has failed to prove beyond a reasonable doubt that the defendant is guilty.",
    "The burden of proof rests with the plaintiff.",
    "The jury has reached a verdict.",
    "The judge has issued a restraining order against the defendant.",
    "The case is currently under appeal.",
    "This matter is subject to judicial review.",
    "The law is quite explicit on this point.",
    "We need to ascertain the veracity of these claims.",
    "The company is in full compliance with all applicable regulations.",
    "We must adhere to the terms stipulated in the contract.",
    "The board of directors has convened to deliberate on the matter.",
    "The company has issued a formal apology for the incident.",
    "We are committed to upholding the highest ethical standards.",
    "The merger is contingent upon regulatory approval.",
    "The company is seeking to acquire a controlling interest in its competitor.",
    "The firm specializes in mergers and acquisitions.",
    "The company is undergoing a period of restructuring.",
    "The report provides an in-depth analysis of market trends.",
    "We need to develop a comprehensive strategy to address this issue.",
    "The company's assets are valued at over one billion dollars.",
    "The firm represents clients in a wide range of legal matters.",
    "This document serves as an addendum to the original contract.",
    "The company has a fiduciary responsibility to its shareholders.",
    "The court has issued a subpoena for the documents.",
    "The witness testified under oath.",
    "The company is facing a class-action lawsuit.",
    "We need to conduct a thorough due diligence investigation.",
    "The company has filed for bankruptcy protection.",
    "The court has appointed a receiver to oversee the company's assets.",
    "The parties have reached a settlement agreement.",
    "The company has retained legal counsel to represent them in this matter.",
    "The defendant has entered a plea of not guilty.",
    "The judge has recused himself from the case due to a conflict of interest.",
    "The appellate court has overturned the lower court's decision.",
    "The Supreme Court has agreed to hear the case.",
    "This is a landmark decision that will have significant legal ramifications.",
    "The case sets a new precedent for future litigation.",
    "We need to ensure that all our actions are in strict accordance with the law.",
    "The company is committed to operating with the utmost integrity and transparency.",
    "We must exercise due diligence in all our business dealings.",
    "This matter requires careful consideration and should not be taken lightly.",
    "The evidence presented strongly corroborates the plaintiff's claims.",
    "The defendant's actions constitute a clear violation of the law.",
    "We will pursue all available legal remedies to protect our client's interests.",
    "The court's decision is binding and must be adhered to.",
    "We need to formulate a comprehensive legal strategy to address this issue.",
    "The company is facing a hostile takeover attempt.",
    "We are seeking an injunction to prevent the defendant from taking further action."
    ];

class AudioChat {
    constructor() {
        this.host = "generativelanguage.googleapis.com";
        this.model = "gemini-2.0-flash-exp";
        
        this.CHUNK_SIZE = 512;
        this.SAMPLE_RATE = 16000;
        this.CHANNELS = 1;
        this.volumeThreshold = 80;  

        this.apiKey = '';
        this.ws = null;
        this.mediaStream = null;
        this.audioContext = null;
        this.scriptProcessor = null;
        this.isInitialized = false;
        this.isPaused = false;
        this.currentResponse = [];
        this.runningStep = 0;
        
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

        this.apiKeyInput = document.getElementById('apiKey');
        this.statusDiv = document.getElementById('status');
        this.chatHistory = document.getElementById('chatHistory');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.exportBtn = document.getElementById('exportBtn');
        this.languageSelect = document.getElementById('languageSelect');
        this.volumeCanvas = document.getElementById('volumeMeter');
        this.volumeCtx = this.volumeCanvas.getContext('2d');

        const ui = LANGUAGE_CONFIG[this.currentLanguage].ui;
        this.pauseBtn.textContent = ui.pause;
        this.stopBtn.textContent = ui.stop;
        this.exportBtn.textContent = ui.export;
        this.apiKeyInput.placeholder = ui.apiKeyPlaceholder;
        this.statusDiv.textContent = ui.startPrompt;

        if (this.languageSelect) {
            this.languageSelect.value = this.currentLanguage;
            document.documentElement.lang = this.currentLanguage;
        }

        this.languageSelect.addEventListener('change', async (e) => {
            this.currentLanguage = e.target.value;
            localStorage.setItem('preferredLanguage', this.currentLanguage);
            document.documentElement.lang = this.currentLanguage;
            
            if (this.ws) {
                this.ws.close();
                this.ws = null;
            }
    
            this.chatHistory.innerHTML = '';
            
            await this.connectWebSocket();
        });
    

        this.descriptions = {
            'en': "Free AI-powered English language tutor. Practice pronunciation, improve grammar, and get real-time feedback. Perfect for ESL learners and language enthusiasts.",
            'ar': "مدرس لغة إنجليزية مدعوم بالذكاء الاصطناعي. تدرب على النطق وحسن قواعد اللغة واحصل على ملاحظات فورية. مثالي لمتعلمي اللغة الإنجليزية.",
            'bn': "AI-পাওয়ার্ড ইংরেজি ভাষা টিউটর। উচ্চারণ অনুশীলন করুন, ব্যাকরণ উন্নত করুন এবং রিয়েল-টাইম ফিডব্যাক পান। ESL শিক্ষার্থীদের জন্য আদর্শ।",
            'bg': "AI учител по английски език. Практикувайте произношение, подобрете граматиката и получете обратна връзка в реално време. Идеален за изучаващи английски език.",
            'hr': "AI tutor za engleski jezik. Vježbajte izgovor, poboljšajte gramatiku i dobijte povratne informacije u stvarnom vremenu. Idealno za učenike engleskog jezika.",
            'cs': "AI tutor anglického jazyka. Procvičujte výslovnost, zlepšete gramatiku a získejte zpětnou vazbu v reálném čase. Ideální pro studenty angličtiny.",
            'da': "AI-drevet engelsk sprogtutot. Øv udtale, forbedre grammatik og få realtids feedback. Perfekt til engelskstuderende og sprogentusiaster.",
            'nl': "AI-aangedreven Engelse taaltutor. Oefen uitspraak, verbeter grammatica en ontvang realtime feedback. Perfect voor Engels lerenden.",
            'et': "AI-põhine inglise keele tutor. Harjutage hääldust, parandage grammatikat ja saage reaalajas tagasisidet. Ideaalne inglise keele õppijatele.",
            'fi': "Tekoälyyn perustuva englannin kielen tutor. Harjoittele ääntämistä, paranna kielioppia ja saa reaaliaikaista palautetta. Täydellinen englannin opiskelijoille.",
            'fr': "Tuteur d'anglais alimenté par l'IA. Pratiquez la prononciation, améliorez la grammaire et obtenez des retours en temps réel. Parfait pour les apprenants d'anglais.",
            'de': "KI-gestützter Englisch-Tutor. Üben Sie Aussprache, verbessern Sie Grammatik und erhalten Sie Echtzeit-Feedback. Perfekt für Englischlernende.",
            'el': "Καθηγητής αγγλικών με τεχνητή νοημοσύνη. Εξασκήστε την προφορά, βελτιώστε τη γραμματική και λάβετε άμεση ανατροφοδότηση. Ιδανικό για μαθητές αγγλικών.",
            'he': "מורה פרטי לאנגלית מבוסס בינה מלאכותית. תרגול הגייה, שיפור דקדוק וקבלת משוב בזמן אמת. מושלם ללומדי אנגלית.",
            'hi': "AI-संचालित अंग्रेजी भाषा ट्यूटर। उच्चारण का अभ्यास करें, व्याकरण में सुधार करें और रीयल-टाइम फीडबैक प्राप्त करें। अंग्रेजी सीखने वालों के लिए एकदम सही।",
            'hu': "AI-alapú angol nyelvi tutor. Gyakorolja a kiejtést, javítsa a nyelvtant és kapjon valós idejű visszajelzést. Tökéletes angol tanulóknak.",
            'id': "Tutor bahasa Inggris berbasis AI. Latih pengucapan, tingkatkan tata bahasa, dan dapatkan umpan balik real-time. Sempurna untuk pelajar bahasa Inggris.",
            'it': "Tutor di inglese basato su AI. Pratica la pronuncia, migliora la grammatica e ricevi feedback in tempo reale. Perfetto per studenti di inglese.",
            'ja': "AI搭載の英語家庭教師。発音を練習し、文法を改善し、リアルタイムのフィードバックを得られます。英語学習者に最適です。",
            'ko': "AI 기반 영어 튜터. 발음 연습, 문법 향상, 실시간 피드백을 받으세요. 영어 학습자에게 완벽한 학습 도구입니다.",
            'lv': "AI angļu valodas pasniedzējs. Praktizējiet izrunu, uzlabojiet gramatiku un saņemiet atgriezenisko saiti reālajā laikā. Ideāli piemērots angļu valodas apguvējiem.",
            'lt': "AI anglų kalbos mokytojas. Praktikuokite tarimą, tobulinkite gramatiką ir gaukite grįžtamąjį ryšį realiu laiku. Puikiai tinka anglų kalbos mokiniams.",
            'no': "AI-drevet engelsk språktutor. Øv på uttale, forbedre grammatikk og få tilbakemelding i sanntid. Perfekt for engelskstudenter.",
            'pl': "Korepetytor języka angielskiego oparty na AI. Ćwicz wymowę, popraw gramatykę i otrzymuj informacje zwrotne w czasie rzeczywistym. Idealny dla uczących się angielskiego.",
            'pt-pt': "Tutor de inglês com IA. Pratique pronúncia, melhore gramática e receba feedback em tempo real. Perfeito para estudantes de inglês.",
            'pt-br': "Tutor de inglês com inteligência artificial. Pratique pronúncia, melhore gramática e receba feedback em tempo real. Perfeito para estudantes de inglês.",
            'ro': "Tutor de limba engleză bazat pe AI. Practică pronunția, îmbunătățește gramatica și primește feedback în timp real. Perfect pentru studenții la engleză.",
            'ru': "Репетитор английского языка на базе ИИ. Практикуйте произношение, улучшайте грамматику и получайте обратную связь в реальном времени. Идеально для изучающих английский язык.",
            'sr': "AI тутор за енглески језик. Вежбајте изговор, побољшајте граматику и добијте повратне информације у реалном времену. Идеално за студенте енглеског језика.",
            'sk': "AI tútor anglického jazyka. Precvičujte výslovnosť, zlepšite gramatiku a získajte spätnú väzbu v reálnom čase. Ideálne pre študentov angličtiny.",
            'sl': "AI tutor za angleški jezik. Vadite izgovorjavo, izboljšajte slovnico in prejemajte povratne informacije v realnem času. Idealno za učence angleščine.",
            'es-es': "Tutor de inglés impulsado por IA. Practica pronunciación, mejora gramática y recibe retroalimentación en tiempo real. Perfecto para estudiantes de inglés.",
            'es-419': "Tutor de inglés con inteligencia artificial. Practica pronunciación, mejora gramática y recibe retroalimentación en tiempo real. Perfecto para estudiantes de inglés.",
            'sw': "Mwalimu wa Kiingereza anayetumia AI. Fanya mazoezi ya matamshi, boresha sarufi na upate maoni ya moja kwa moja. Inafaa kwa wanafunzi wa Kiingereza.",
            'sv': "AI-driven engelsk språktutor. Öva uttal, förbättra grammatik och få feedback i realtid. Perfekt för engelskstudenter.",
            'th': "ติวเตอร์ภาษาอังกฤษด้วย AI ฝึกการออกเสียง ปรับปรุงไวยากรณ์ และรับข้อเสนอแนะแบบเรียลไทม์ เหมาะสำหรับผู้เรียนภาษาอังกฤษ",
            'tr': "AI destekli İngilizce dil öğretmeni. Telaffuz pratik yapın, dilbilgisini geliştirin ve gerçek zamanlı geri bildirim alın. İngilizce öğrenenler için mükemmel.",
            'uk': "Репетитор англійської мови на базі ШІ. Практикуйте вимову, покращуйте граматику та отримуйте зворотний зв'язок у реальному часі. Ідеально для тих, хто вивчає англійську.",
            'vi': "Gia sư tiếng Anh được hỗ trợ bởi AI. Luyện phát âm, cải thiện ngữ pháp và nhận phản hồi theo thời gian thực. Hoàn hảo cho người học tiếng Anh.",
            'zh-Hans': "AI驱动的英语语言导师。练习发音，提高语法，获得实时反馈。完美适合英语学习者和语言爱好者。",
            'zh-Hant': "AI驅動的英文語言導師。練習發音，提高文法，獲得即時反饋。完美適合英文學習者和語言愛好者。",
            'zh-hk': "AI驅動嘅英語語言導師。練習發音，提高文法，獲得即時反饋。完美適合英語學習者同語言愛好者。",
            'af': "AI-aangedrewe Engelse taaltutor. Oefen uitspraak, verbeter grammatika en ontvang intydse terugvoer. Perfek vir Engels-leerders.",
            'sq': "Tutor i gjuhës angleze i mundësuar nga AI. Praktikoni shqiptimin, përmirësoni gramatikën dhe merrni reagime në kohë reale. Perfekt për nxënësit e gjuhës angleze.",
            'am': "በአይ የሚጠቀም የእንግሊዝኛ ቋንቋ አስተማሪ። የንግግር ልምምድ፣ ሰዋስው ማሻሻል እና ወቅታዊ ግብረመልስ ማግኘት። ለእንግሊዝኛ ተማሪዎች ፍጹም ተስማሚ።",
            'hy': "AI-ով աշխատող անգլերենի ուսուցիչ։ Վարժվեք արտասանության մեջ, բարելավեք քերականությունը և ստացեք իրական ժամանակում հետադարձ կապ։ Կատարյալ է անգլերեն սովորողների համար։",
            'az': "AI tərəfindən idarə olunan İngilis dili müəllimi. Tələffüzü məşq edin, qrammatikanı təkmilləşdirin və real vaxt ərzində rəy alın. İngilis dili öyrənənlər üçün mükəmməldir.",
            'be': "Рэпетытар англійскай мовы на базе ШІ. Практыкуйце вымаўленне, паляпшайце граматыку і атрымлівайце зваротную сувязь у рэальным часе. Ідэальна для тых, хто вывучае англійскую мову.",
            'bo': "AI ཡིས་བཟོས་པའི་དབྱིན་སྐད་སློབ་དཔོན། སྒྲ་གདངས་སྦྱོང་བརྡར་དང་། བརྡ་སྤྲོད་ཡར་རྒྱས། དུས་ཐོག་ཏུ་བསམ་ཚུལ་འབྱོར་བ། དབྱིན་སྐད་སློབ་མཁན་ཚོར་ཏག་ཏག་རེད།",
            'bs': "AI tutor engleskog jezika. Vježbajte izgovor, poboljšajte gramatiku i dobijte povratne informacije u stvarnom vremenu. Idealno za učenike engleskog jezika.",
            'ca': "Tutor d'anglès impulsat per IA. Practica la pronunciació, millora la gramàtica i rep retroalimentació en temps real. Perfecte per a estudiants d'anglès.",
            'ckb': "مامۆستای زمانی ئینگلیزی بە AI. ڕاهێنان لەسەر دەربڕین، باشترکردنی ڕێزمان و وەرگرتنی فیدباکی ڕاستەوخۆ. تەواو گونجاوە بۆ فێرخوازانی ئینگلیزی.",
            'cy': "Tiwtor iaith Saesneg wedi'i bweru gan AI. Ymarfer ynganu, gwella gramadeg a derbyn adborth amser real. Perffaith ar gyfer dysgwyr Saesneg.",
            'eo': "AI-funkciigita angla lingvo-tutoro. Praktiku prononcon, plibonigu gramatikon kaj ricevu realtempan respondon. Perfekta por anglaj lernantoj.",
            'eu': "AI bidez bultzatutako ingeleseko tutorea. Praktikatu ahoskera, hobetu gramatika eta jaso denbora errealeko feedbacka. Ezin hobea ingelesa ikasten ari direnentzat.",
            'fa': "مربی زبان انگلیسی مبتنی بر هوش مصنوعی. تلفظ را تمرین کنید، دستور زبان را بهبود بخشید و بازخورد بلادرنگ دریافت کنید. عالی برای یادگیرندگان زبان انگلیسی.",
            'fo': "AI-rikin enskur mállærari. Venja úttaluna, betra málfrøði og fáa afturboðan í veruligari tíð. Fullkomin fyri enskar næmingar.",
            'fy': "AI-oandreaune Ingelsk taaltutor. Oefenje útspraak, ferbetterje grammatika en krij realtime feedback. Perfekt foar Ingelsk learlingen.",
            'ga': "Múinteoir Béarla cumhachtaithe ag AI. Cleachtaigh fuaimniú, feabhsaigh gramadach agus faigh aiseolas fíor-ama. Foirfe d'fhoghlaimeoirí Béarla.",
            'gl': "Titor de inglés impulsado por IA. Practica a pronunciación, mellora a gramática e recibe retroalimentación en tempo real. Perfecto para estudantes de inglés.",
            'gu': "AI-સંચાલિત અંગ્રેજી ભાષા ટ્યુટર. ઉચ્ચારણનો અભ્યાસ કરો, વ્યાકરણ સુધારો અને રીયલ-ટાઇમ પ્રતિસાદ મેળવો. અંગ્રેજી શીખનારાઓ માટે સંપૂર્ણ.",
            'haw': "He kumu ʻōlelo Pelekania i hoʻokele ʻia e AI. E hoʻomaʻamaʻa i ka puana, hoʻomaikaʻi i ke kāmela a loaʻa ka pane koke. Maikaʻi loa no nā haumāna ʻōlelo Pelekania.",
            'ht': "Pwofesè lang angle ki itilize AI. Pratike pwononsyasyon, amelyore gramè epi jwenn fidbak an tan reyèl. Pafè pou moun kap aprann angle.",
            'ig': "Onye nkuzi asụsụ Bekee nke AI na-akwado. Mụọ mkpọpụta okwu, meziwanye ụtọasụsụ ma nweta nzaghachi ozugbo. Zuru oke maka ndị na-amụ asụsụ Bekee.",
            'is': "AI-knúin enskukennari. Æfðu framburð, bættu málfræði og fáðu svörun í rauntíma. Fullkomið fyrir enskunema.",
            'jv': "Tutor basa Inggris sing digerakake AI. Latihan pangucapan, ningkatake tata basa, lan nampa umpan balik real-time. Sampurna kanggo sing sinau basa Inggris.",
            'ka': "AI-ზე დაფუძნებული ინგლისური ენის რეპეტიტორი. ივარჯიშეთ გამოთქმაში, გააუმჯობესეთ გრამატიკა და მიიღეთ უკუკავშირი რეალურ დროში. იდეალურია ინგლისურის შემსწავლელთათვის.",
            'kk': "AI негізіндегі ағылшын тілі мұғалімі. Айтылымды жаттығыңыз, грамматиканы жақсартыңыз және нақты уақыттағы кері байланыс алыңыз. Ағылшын тілін үйренушілер үшін тамаша.",
            'km': "គ្រូបង្រៀនភាសាអង់គ្លេសដែលដំណើរការដោយ AI។ អនុវត្តការបញ្ចេញសំឡេង កែលម្អវេយ្យាករណ៍ និងទទួលបានមតិត្រឡប់ភ្លាមៗ។ ល្អឥតខ្ចោះសម្រាប់អ្នករៀនភាសាអង់គ្លេស។",
            'kn': "AI ಆಧಾರಿತ ಇಂಗ್ಲಿಷ್ ಭಾಷಾ ಟ್ಯೂಟರ್. ಉಚ್ಚಾರಣೆಯನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ, ವ್ಯಾಕರಣವನ್ನು ಸುಧಾರಿಸಿ ಮತ್ತು ನೈಜ-ಸಮಯದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಪಡೆಯಿರಿ. ಇಂಗ್ಲಿಷ್ ಕಲಿಯುವವರಿಗೆ ಪರಿಪೂರ್ಣ.",
            'ky': "AI менен иштеген англис тили мугалими. Айтууну машыктырыңыз, грамматиканы жакшыртыңыз жана реалдуу убакытта кайтарым байланыш алыңыз. Англис тилин үйрөнүүчүлөр үчүн идеалдуу.",
            'la': "Magister linguae Anglicae AI instructus. Exercete pronuntiationem, meliorare grammaticam et accipite responsum in tempore reali. Perfectum pro discentibus Anglicam.",
            'lb': "AI-gesteierte Englesch Sproochtutor. Übt Aussproch, verbessert Grammatik a kritt Echtzäit-Feedback. Perfekt fir Englesch-Léierer.",
            'lo': "ຄູສອນພາສາອັງກິດທີ່ຂັບເຄື່ອນດ້ວຍ AI. ຝຶກການອອກສຽງ, ປັບປຸງໄວຍາກອນ ແລະ ຮັບຄຳຕິຊົມແບບທັນທີ. ເໝາະສຳລັບຜູ້ຮຽນພາສາອັງກິດ.",
            'mk': "AI-воден тутор за англиски јазик. Вежбајте изговор, подобрете ја граматиката и добијте повратни информации во реално време. Совршено за изучувачи на англиски јазик.",
            'ml': "AI പ്രവർത്തിത ഇംഗ്ലീഷ് ഭാഷാ ട്യൂട്ടർ. ഉച്ചാരണം പരിശീലിക്കുക, വ്യാകരണം മെച്ചപ്പെടുത്തുക, റിയൽ-ടൈം ഫീഡ്‌ബാക്ക് ലഭിക്കുക. ഇംഗ്ലീഷ് പഠിതാക്കൾക്ക് തികഞ്ഞത്.",
            'mn': "AI-д суурилсан англи хэлний багш. Дуудлага дадлага хийж, дүрэм сайжруулж, бодит цагийн санал хүлээн авах. Англи хэл сурагчдад төгс тохирно.",
            'mr': "AI-संचलित इंग्रजी भाषा शिक्षक. उच्चारणाचा सराव करा, व्याकरण सुधारा आणि रिअल-टाइम फीडबॅक मिळवा. इंग्रजी शिकणाऱ्यांसाठी परफेक्ट.",
            'ms': "Tutor bahasa Inggeris berdasarkan AI. Berlatih sebutan, tingkatkan tatabahasa dan dapatkan maklum balas masa nyata. Sesuai untuk pelajar bahasa Inggeris.",
            'my': "AI မောင်းနှင်သော အင်္ဂလိပ်စာ ဆရာ။ အသံထွက်လေ့ကျင့်ပါ၊ သဒ္ဒါကို တိုးတက်စေပြီး အချိန်နှင့်တပြေးညီ တုံ့ပြန်ချက်များရယူပါ။ အင်္ဂလိပ်စာသင်ယူသူများအတွက် ပerfectကျသည်။",
            'ne': "AI-सञ्चालित अङ्ग्रेजी भाषा ट्युटर। उच्चारण अभ्यास गर्नुहोस्, व्याकरण सुधार्नुहोस् र रियल-टाइम प्रतिक्रिया प्राप्त गर्नुहोस्। अङ्ग्रेजी सिक्नेहरूका लागि उत्तम।",
            'or': "AI-ଚାଳିତ ଇଂରାଜୀ ଭାଷା ଶିକ୍ଷକ। ଉଚ୍ଚାରଣ ଅଭ୍ୟାସ କରନ୍ତୁ, ବ୍ୟାକରଣ ଉନ୍ନତ କରନ୍ତୁ ଏବଂ ରିଅଲ-ଟାଇମ୍ ପ୍ରତିକ୍ରିୟା ପାଆନ୍ତୁ। ଇଂରାଜୀ ଶିକ୍ଷାର୍ଥୀଙ୍କ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ।",
            'pa': "AI-ਸੰਚਾਲਿਤ ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਟਿਊਟਰ। ਉਚਾਰਨ ਦਾ ਅਭਿਆਸ ਕਰੋ, ਵਿਆਕਰਣ ਵਿੱਚ ਸੁਧਾਰ ਕਰੋ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਫੀਡਬੈਕ ਪ੍ਰਾਪਤ ਕਰੋ। ਅੰਗਰੇਜ਼ੀ ਸਿੱਖਣ ਵਾਲਿਆਂ ਲਈ ਬਿਲਕੁਲ ਸਹੀ।",
            'rw': "Umwarimu w'icyongereza ukoreshwa na AI. Imenyereze kuvuga, kunoza iyandikwa no kubona ibisubizo mu gihe nyacyo. Byiza cyane ku biga icyongereza.",
            'si': "AI-බලගැන්වූ ඉංග්‍රීසි භාෂා ගුරුවරයා. උච්චාරණය පුහුණු වන්න, ව්‍යාකරණ වැඩිදියුණු කරන්න සහ තත්‍ය-කාලීන ප්‍රතිපෝෂණ ලබා ගන්න. ඉංග්‍රීසි ඉගෙන ගන්නන්ට සම්පූර්ණයි.",
            'su': "Tutor basa Inggris anu dijalankeun ku AI. Latihan ngucapkeun, ningkatkeun tata basa, jeung nampa eupan balik real-time. Sampurna pikeun nu diajar basa Inggris.",
            'ta': "AI இயக்கப்படும் ஆங்கில மொழி ஆசிரியர். உச்சரிப்பை பயிற்சி செய்யுங்கள், இலக்கணத்தை மேம்படுத்துங்கள் மற்றும் நேரடி பின்னூட்டத்தைப் பெறுங்கள். ஆங்கிலம் கற்பவர்களுக்கு சரியானது.",
            'te': "AI ఆధారిత ఇంగ్లీష్ భాషా ట్యూటర్. ఉచ్ఛారణను అభ్యాసం చేయండి, వ్యాకరణాన్ని మెరుగుపరచండి మరియు రియల్-టైమ్ ఫీడ్‌బ్యాక్ పొందండి. ఇంగ్లీష్ నేర్చుకునేవారికి సరిపోతుంది.",
            'tg': "Омӯзгори забони англисӣ дар асоси AI. Талаффузро машқ кунед, грамматикаро беҳтар кунед ва бозхӯрди фаврӣ гиред. Барои омӯзандагони забони англисӣ комил аст.",
            'tk': "AI esasly iňlis dili mugallymy. Aýdylyşy türgenleşdiriň, grammatikany gowulandyryň we hakyky wagt sesini alyň. Iňlis dilini öwrenýänler üçin ajaýyp.",
            'tl': "AI-powered na tutor ng wikang Ingles. Magsanay sa pagbigkas, pagbutihin ang balarila at kumuha ng real-time na feedback. Perpekto para sa mga nag-aaral ng Ingles.",
            'ur': "AI سے چلنے والا انگریزی زبان کا ٹیوٹر۔ تلفظ کی مشق کریں، گرامر کو بہتر بنائیں اور ریئل ٹائم فیڈ بیک حاصل کریں۔ انگریزی سیکھنے والوں کے لیے بالکل مناسب۔",
            'uz': "AI tomonidan quvvatlanadigan ingliz tili o'qituvchisi. Talaffuzni mashq qiling, grammatikani yaxshilang va real vaqtda fikr-mulohaza oling. Ingliz tilini o'rganuvchilar uchun mukammal.",
            'yi': "AI-געטריבענער ענגליש שפּראַך לערער. איבן אויסשפּראַך, פאַרבעסערן גראַמאַטיק און באַקומען עכט-צייט פידבעק. פּערפעקט פֿאַר ענגליש לערנער.",
            'zu': "Uthisha wolimi lwesiNgisi oqhutshwa nge-AI. Zijwayeze ukuphimisa, thuthukisa uhlelomisho futhi uthole impendulo yangempela. Kulungele abafundi besiNgisi."
        };

        this.promptDisplay = document.getElementById('promptDisplay');
        this.updatePromptDisplay();
        this.startPromptRotation();

        this.themeToggle = document.getElementById('themeToggle');
        this.initTheme();
        this.setupThemeToggle();

        this.init();
    }

    updatePromptDisplay() {
        const randomPrompt = PROMPT_EXAMPLES[Math.floor(Math.random() * PROMPT_EXAMPLES.length)];
        this.promptDisplay.textContent = `🌟 ${randomPrompt}`;
    }
    
    startPromptRotation() {
        setInterval(() => {
            this.updatePromptDisplay();
        }, 10000); 
    }
    
    getCurrentLanguage() {
        return document.getElementById('languageSelect').value || 'en';
    }

    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme(savedTheme);
    }

    setupThemeToggle() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                this.applyTheme(newTheme);
            });
        }
    }

    applyTheme(theme) {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        this.themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', theme);
    }

    async init() {
        try {
            this.apiKey = localStorage.getItem('geminiApiKey') || '';
            if (this.apiKey) {
                this.apiKeyInput.value = this.apiKey;
                await this.start();
            }

            this.apiKeyInput.addEventListener('change', async (e) => {
                this.apiKey = e.target.value.trim();
                localStorage.setItem('geminiApiKey', this.apiKey);
                if (!this.isInitialized) {
                    await this.start();
                }
            });

            this.languageSelect.addEventListener('change', (e) => {
                this.handleLanguageChange(e.target.value);
            });

            this.pauseBtn.addEventListener('click', () => this.togglePause());
            this.stopBtn.addEventListener('click', () => this.stopSession());
            this.exportBtn.addEventListener('click', () => this.exportHistory());

        } catch (error) {
            console.error('Initialization error:', error);
            this.updateStatus('Initialization failed: ' + error.message, 'red');
        }
    }

    async start() {
        if (!this.apiKey) {
            this.updateStatus(LANGUAGE_CONFIG[this.currentLanguage].ui.apiKeyPlaceholder, 'red');
            return;
        }

        try {
            this.mediaStream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    channelCount: this.CHANNELS,
                    sampleRate: this.SAMPLE_RATE
                } 
            });
            
            this.audioContext = new AudioContext({ sampleRate: this.SAMPLE_RATE });
            const source = this.audioContext.createMediaStreamSource(this.mediaStream);
            this.scriptProcessor = this.audioContext.createScriptProcessor(this.CHUNK_SIZE, 1, 1);
            source.connect(this.scriptProcessor);
            this.scriptProcessor.connect(this.audioContext.destination);

            await this.connectWebSocket();
            
            this.isInitialized = true;
            this.updateStatus(LANGUAGE_CONFIG[this.currentLanguage].ui.startPrompt, 'green');
        } catch (err) {
            console.error('Startup error:', err);
            this.updateStatus('Startup failed: ' + err.message, 'red');
        }
    }

    async connectWebSocket() {
        const uri = `wss://${this.host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key=${this.apiKey}`;
        
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(uri);
            
            this.ws.onopen = () => {
                console.log('WebSocket connected');
                const setupMsg = {
                    setup: {
                        model: `models/${this.model}`,
                        generation_config: {
                            response_modalities: ["TEXT"]
                        }
                    }
                };
                this.ws.send(JSON.stringify(setupMsg));
            };

            this.ws.onmessage = async (event) => {
                try {
                    const data = event.data instanceof Blob ? 
                        await event.data.text() : 
                        event.data;
                    
                    const response = JSON.parse(data);
                    console.log('Received response:', response);

                    if (response.setupComplete) {
                        console.log('Setup complete, sending initial prompt');
                        const initialMsg = {
                            client_content: {
                                turns: [{
                                    role: "user",
                                    parts: [{
                                        text: LANGUAGE_CONFIG[this.currentLanguage].prompt
                                    }]
                                }],
                                turn_complete: true
                            }
                        };
                        this.ws.send(JSON.stringify(initialMsg));
                        resolve();
                        return;
                    }

                    if (response.serverContent) {
                        if (response.serverContent.modelTurn?.parts) {
                            for (const part of response.serverContent.modelTurn.parts) {
                                if (part.text) {
                                    this.currentResponse.push(part.text);
                                }
                            }
                        }

                        if (response.serverContent.turnComplete) {
                            const text = this.currentResponse.join('');
                            console.log('Turn complete:', text);

                            if (text.trim() === 'OK') {
                                console.log('Initialization complete, starting recording');
                                this.startAudioProcessing();
                                this.updateStatus(LANGUAGE_CONFIG[this.currentLanguage].ui.recording, 'green');
                            } else {
                                this.addMessage('assistant', text);
                                if (this.runningStep === 1) {
                                    this.updateStatus(LANGUAGE_CONFIG[this.currentLanguage].ui.startPrompt, 'green');
                                    this.runningStep = 0;
                                }
                            }
                            this.currentResponse = [];
                        }
                    }

                    if (response.speech_recognition_result) {
                        if (response.speech_recognition_result.transcript) {
                            this.addMessage('user', response.speech_recognition_result.transcript);
                            this.updateStatus(LANGUAGE_CONFIG[this.currentLanguage].ui.processing, 'yellow');
                            this.runningStep = 1;
                        }
                    }
                } catch (error) {
                    console.error('Error processing WebSocket message:', error);
                }
            };

            this.ws.onerror = (error) => {
                console.error('WebSocket error:', error);
                this.updateStatus('WebSocket connection error', 'red');
                reject(error);
            };

            this.ws.onclose = () => {
                console.log('WebSocket closed');
                this.isInitialized = false;
                this.updateStatus('Connection closed', 'red');
            };
        });
    }

    startAudioProcessing() {
        console.log('Starting audio processing');
        this.scriptProcessor.onaudioprocess = (e) => {
            if (this.isPaused) return;

            const inputData = e.inputBuffer.getChannelData(0);
            const pcmData = new Int16Array(inputData.length);
            
            let volume = 0;
            for (let i = 0; i < inputData.length; i++) {

                pcmData[i] = Math.max(-32768, Math.min(32767, inputData[i] * 32768));
                volume += Math.abs(pcmData[i]);
            }
            volume = volume / inputData.length;  

            this.drawVolumeMeter(volume);


            if (volume > this.volumeThreshold) {
                if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        realtime_input: {
                            media_chunks: [{
                                data: btoa(String.fromCharCode.apply(null, new Uint8Array(pcmData.buffer))),
                                mime_type: "audio/pcm"
                            }]
                        }
                    };
                    this.ws.send(JSON.stringify(msg));
                    
                    if (this.runningStep === 0) {
                        this.updateStatus(LANGUAGE_CONFIG[this.currentLanguage].ui.recording, 'green');
                        this.runningStep = 1;
                    }
                }
            }
        };
    }

    drawVolumeMeter(volume) {
        const ctx = this.volumeCtx;
        const width = this.volumeCanvas.width;
        const height = this.volumeCanvas.height;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = volume > this.volumeThreshold ? '#4CAF50' : '#E0E0E0';
        
        const barWidth = width * (Math.min(volume / 32768, 1));  
        ctx.fillRect(0, 0, barWidth, height);
    }

    handleLanguageChange(newLanguage) {
        this.currentLanguage = newLanguage;
        
        try {
            document.documentElement.lang = newLanguage;
            
            document.documentElement.dir = ['ar', 'he', 'fa', 'ur', 'ckb', 'yi'].includes(newLanguage) ? 'rtl' : 'ltr';
            
            const pageTitle = document.getElementById('pageTitle');
            if (pageTitle && LANGUAGE_CONFIG[newLanguage]) {
                pageTitle.textContent = LANGUAGE_CONFIG[newLanguage].ui.title;
            }
            
            if (this.apiKeyInput && LANGUAGE_CONFIG[newLanguage]) {
                this.apiKeyInput.placeholder = LANGUAGE_CONFIG[newLanguage].ui.apiKeyPlaceholder;
            }
            
            if (this.pauseBtn && LANGUAGE_CONFIG[newLanguage]) {
                this.pauseBtn.textContent = this.isPaused ? 
                    LANGUAGE_CONFIG[newLanguage].ui.continue : 
                    LANGUAGE_CONFIG[newLanguage].ui.pause;
            }
            
            if (this.stopBtn && LANGUAGE_CONFIG[newLanguage]) {
                this.stopBtn.textContent = LANGUAGE_CONFIG[newLanguage].ui.stop;
            }
            
            if (this.exportBtn && LANGUAGE_CONFIG[newLanguage]) {
                this.exportBtn.textContent = LANGUAGE_CONFIG[newLanguage].ui.export;
            }
            
            if (LANGUAGE_CONFIG[newLanguage]) {
                this.updateStatus(LANGUAGE_CONFIG[newLanguage].ui.startPrompt);
            }
            
            this.updateMetaDescription(newLanguage);

        } catch (error) {
            console.error('Error in handleLanguageChange:', error);
        }
    }

    updateMetaDescription(language) {
        try {
            const mainDescription = document.querySelector('meta[name="description"]:not([lang])');
            if (mainDescription && this.descriptions[language]) {
                mainDescription.setAttribute('content', this.descriptions[language]);
            }
        } catch (error) {
            console.error('Error updating meta description:', error);
        }
    }


    togglePause() {
        this.isPaused = !this.isPaused;
        this.updateStatus(
            this.isPaused ? 
            LANGUAGE_CONFIG[this.currentLanguage].ui.continue : 
            LANGUAGE_CONFIG[this.currentLanguage].ui.recording, 
            this.isPaused ? 'yellow' : 'green'
        );
        this.pauseBtn.textContent = this.isPaused ? 
            LANGUAGE_CONFIG[this.currentLanguage].ui.continue : 
            LANGUAGE_CONFIG[this.currentLanguage].ui.pause;
    }

    async stopSession() {
        if (confirm(LANGUAGE_CONFIG[this.currentLanguage].ui.confirmStop)) {
            if (this.mediaStream) {
                this.mediaStream.getTracks().forEach(track => track.stop());
            }
            if (this.ws) {
                this.ws.close();
            }
            if (this.audioContext) {
                await this.audioContext.close();
            }
            this.isInitialized = false;
            this.updateStatus(LANGUAGE_CONFIG[this.currentLanguage].ui.ended, 'red');
        }
    }

    addMessage(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'mb-4';
        
        const header = document.createElement('div');
        header.className = 'text-sm text-gray-500 mb-1';
        header.textContent = type === 'assistant' ? 
            LANGUAGE_CONFIG[this.currentLanguage].ui.aiReply : 
            LANGUAGE_CONFIG[this.currentLanguage].ui.userSaid;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'p-3 rounded-lg bg-white/50';
        contentDiv.textContent = content;
        
        messageDiv.appendChild(header);
        messageDiv.appendChild(contentDiv);
        this.chatHistory.appendChild(messageDiv);
        this.chatHistory.scrollTop = this.chatHistory.scrollHeight;
    }

    updateStatus(message, color = 'black') {
        this.statusDiv.textContent = message;
        this.statusDiv.className = `text-center mb-4 text-${color}-600`;
    }

    exportHistory() {
        const text = Array.from(this.chatHistory.children)
            .map(div => `${div.firstChild.textContent}\n${div.lastChild.textContent}`)
            .join('\n\n---\n\n');
        
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chat-history-${new Date().toLocaleString()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

new AudioChat();