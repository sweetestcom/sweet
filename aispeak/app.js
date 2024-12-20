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


class AudioChat {
    constructor() {
        this.host = "generativelanguage.googleapis.com";
        this.model = "gemini-2.0-flash-exp";
        
        this.CHUNK_SIZE = 512;
        this.SAMPLE_RATE = 16000;
        this.CHANNELS = 1;
        this.volumeThreshold = 200;  

        this.apiKey = '';
        this.ws = null;
        this.mediaStream = null;
        this.audioContext = null;
        this.scriptProcessor = null;
        this.isInitialized = false;
        this.isPaused = false;
        this.currentResponse = [];
        this.runningStep = 0;
        this.currentLanguage = 'en';

        this.apiKeyInput = document.getElementById('apiKey');
        this.statusDiv = document.getElementById('status');
        this.chatHistory = document.getElementById('chatHistory');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.exportBtn = document.getElementById('exportBtn');
        this.languageSelect = document.getElementById('languageSelect');
        this.volumeCanvas = document.getElementById('volumeMeter');
        this.volumeCtx = this.volumeCanvas.getContext('2d');

        this.languageSelect.addEventListener('change', async (e) => {
            this.currentLanguage = e.target.value;
            
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

        this.themeToggle = document.getElementById('themeToggle');
        this.initTheme();
        this.setupThemeToggle();

        this.init();
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

                    // 处理语音识别结果
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