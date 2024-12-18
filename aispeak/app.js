const LANGUAGE_CONFIG = {
    'en': {
        prompt: "You are a professional English speaking tutor. Help users correct their grammar and pronunciation. When users speak English, you'll identify what they said, point out pronunciation issues and grammatical errors, and guide them step by step to correct their pronunciation. When pronunciation is correct, suggest a new sentence based on the current context, continuing this process until the user says 'OK, I want to quit'. Please respond in English. If you understand, please reply with 'OK'.",
        ui: {
            title: "AI Language Tutor",
            apiKeyPlaceholder: "Enter your Gemini API Key",
            startPrompt: "🎤 Say something in English! e.g., What is AI?",
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
        prompt: "أنت مدرس محترف للغة الإنجليزية. ساعد المستخدمين في تصحيح قواعدهم ونطقهم. عندما يتحدث المستخدمون باللغة الإنجليزية، ستحدد ما قالوه، وتشير إلى مشاكل النطق والأخطاء النحوية، وترشدهم خطوة بخطوة لتصحيح نطقهم. عندما يكون النطق صحيحًا، اقترح جملة جديدة بناءً على السياق الحالي، واستمر في هذه العملية حتى يقول المستخدم 'حسناً، أريد الخروج'. يرجى الرد باللغة العربية. إذا فهمت، يرجى الرد بكلمة 'موافق'",
        ui: {
            title: "مساعد اللغة الذكي",
            apiKeyPlaceholder: "أدخل مفتاح Gemini API الخاص بك",
            startPrompt: "🎤 قل شيئًا باللغة الإنجليزية! مثال: What is AI?",
            recording: "🎤 جاري التسجيل...",
            processing: "♻️ جاري المعالجة...",
            pause: "إيقاف مؤقت للجلسة",
            continue: "متابعة الجلسة",
            stop: "إنهاء الجلسة",
            export: "تصدير",
            confirmStop: "هل أنت متأكد أنك تريد إنهاء هذه الجلسة؟",
            ended: "انتهت الجلسة",
            aiReply: "✨ رد الذكاء الاصطناعي:",
            userSaid: "🎤 قلت:"
        }
    },
    'bn': {
        prompt: "আপনি একজন পেশাদার ইংরেজি স্পিকিং টিউটর। ব্যবহারকারীদের ব্যাকরণ এবং উচ্চারণ সংশোধন করতে সাহায্য করুন। যখন ব্যবহারকারীরা ইংরেজিতে কথা বলবে, আপনি তারা কী বলেছে তা চিহ্নিত করবেন, উচ্চারণের সমস্যা এবং ব্যাকরণগত ত্রুটি নির্দেশ করবেন এবং ধাপে ধাপে তাদের উচ্চারণ সংশোধন করতে সাহায্য করবেন। যখন উচ্চারণ সঠিক হবে, বর্তমান প্রসঙ্গের উপর ভিত্তি করে একটি নতুন বাক্য প্রস্তাব করুন, এবং ব্যবহারকারী 'ঠিক আছে, আমি ছেড়ে যেতে চাই' না বলা পর্যন্ত এই প্রক্রিয়া চালিয়ে যান। অনুগ্রহ করে বাংলায় উত্তর দিন। যদি বুঝতে পারেন, তবে 'ঠিক আছে' লিখে উত্তর দিন",
        ui: {
            title: "AI ভাষা সহায়ক",
            apiKeyPlaceholder: "আপনার Gemini API কী লিখুন",
            startPrompt: "🎤 ইংরেজিতে কিছু বলুন! যেমন: What is AI?",
            recording: "🎤 রেকর্ডিং চলছে...",
            processing: "♻️ প্রক্রিয়াকরণ চলছে...",
            pause: "সেশন বিরতি",
            continue: "সেশন চালিয়ে যান",
            stop: "সেশন শেষ করুন",
            export: "রপ্তানি",
            confirmStop: "আপনি কি নিশ্চিত যে আপনি এই সেশন শেষ করতে চান?",
            ended: "সেশন শেষ হয়েছে",
            aiReply: "✨ AI উত্তর:",
            userSaid: "🎤 আপনি বলেছেন:"
        }
    },
    'bg': {
        prompt: "Вие сте професионален преподавател по английски език. Помогнете на потребителите да коригират граматиката и произношението си. Когато потребителите говорят на английски, вие ще идентифицирате какво са казали, ще посочите проблемите с произношението и граматическите грешки и ще ги напътствате стъпка по стъпка да коригират произношението си. Когато произношението е правилно, предложете ново изречение въз основа на текущия контекст, продължавайки този процес, докато потребителят каже 'OK, искам да изляза'. Моля, отговаряйте на български. Ако разбирате, моля отговорете с 'ОК'",
        ui: {
            title: "AI Езиков асистент",
            apiKeyPlaceholder: "Въведете вашия Gemini API ключ",
            startPrompt: "🎤 Кажете нещо на английски! Например: What is AI?",
            recording: "🎤 Записване...",
            processing: "♻️ Обработка...",
            pause: "Пауза на сесията",
            continue: "Продължаване на сесията",
            stop: "Край на сесията",
            export: "Експорт",
            confirmStop: "Сигурни ли сте, че искате да прекратите тази сесия?",
            ended: "Сесията приключи",
            aiReply: "✨ AI отговор:",
            userSaid: "🎤 Вие казахте:"
        }
    },
    'hr': {
        prompt: "Vi ste profesionalni tutor engleskog jezika. Pomozite korisnicima ispraviti gramatiku i izgovor. Kada korisnici govore engleski, identificirat ćete što su rekli, ukazati na probleme s izgovorom i gramatičke pogreške te ih korak po korak voditi do ispravnog izgovora. Kada je izgovor točan, predložite novu rečenicu temeljenu na trenutnom kontekstu, nastavljajući ovaj proces dok korisnik ne kaže 'OK, želim izaći'. Molimo odgovarajte na hrvatskom. Ako razumijete, molimo odgovorite s 'OK'",
        ui: {
            title: "AI Jezični Asistent",
            apiKeyPlaceholder: "Unesite vaš Gemini API ključ",
            startPrompt: "🎤 Recite nešto na engleskom! Npr: What is AI?",
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
        prompt: "Jste profesionální učitel anglického jazyka. Pomáhejte uživatelům opravovat jejich gramatiku a výslovnost. Když uživatelé mluví anglicky, identifikujete, co řekli, poukážete na problémy s výslovností a gramatické chyby a povedete je krok za krokem ke správné výslovnosti. Když je výslovnost správná, navrhněte novou větu založenou na aktuálním kontextu a pokračujte v tomto procesu, dokud uživatel neřekne 'OK, chci skončit'. Prosím odpovídejte v češtině. Pokud rozumíte, odpovězte prosím 'OK'",
        ui: {
            title: "AI Jazykový Asistent",
            apiKeyPlaceholder: "Zadejte váš Gemini API klíč",
            startPrompt: "🎤 Řekněte něco anglicky! Např.: What is AI?",
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
        prompt: "Du er en professionel engelsklærer. Hjælp brugere med at rette deres grammatik og udtale. Når brugere taler engelsk, skal du identificere, hvad de sagde, påpege udtalelsesproblemer og grammatiske fejl og guide dem trin for trin til at rette deres udtale. Når udtalen er korrekt, foreslå en ny sætning baseret på den aktuelle kontekst og fortsæt denne proces, indtil brugeren siger 'OK, jeg vil afslutte'. Svar venligst på dansk. Hvis du forstår, svar venligst med 'OK'",
        ui: {
            title: "AI Sprogassistent",
            apiKeyPlaceholder: "Indtast din Gemini API-nøgle",
            startPrompt: "🎤 Sig noget på engelsk! F.eks.: What is AI?",
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
        prompt: "U bent een professionele Engelse taalleraar. Help gebruikers hun grammatica en uitspraak te verbeteren. Wanneer gebruikers Engels spreken, identificeert u wat ze zeiden, wijst u op uitspraakproblemen en grammaticale fouten, en begeleidt u hen stap voor stap bij het verbeteren van hun uitspraak. Wanneer de uitspraak correct is, stel dan een nieuwe zin voor op basis van de huidige context en ga door met dit proces totdat de gebruiker zegt 'OK, ik wil stoppen'. Antwoord alstublieft in het Nederlands. Als u het begrijpt, antwoord dan met 'OK'",
        ui: {
            title: "AI Taalassistent",
            apiKeyPlaceholder: "Voer uw Gemini API-sleutel in",
            startPrompt: "🎤 Zeg iets in het Engels! Bijv.: What is AI?",
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
        prompt: "Te olete professionaalne inglise keele õpetaja. Aidake kasutajatel parandada nende grammatikat ja hääldust. Kui kasutajad räägivad inglise keelt, tuvastate, mida nad ütlesid, osutate hääldusprobleemidele ja grammatikavigadele ning juhendate neid samm-sammult õige häälduse suunas. Kui hääldus on õige, pakkuge välja uus lause praeguse konteksti põhjal ja jätkake seda protsessi, kuni kasutaja ütleb 'OK, ma tahan väljuda'. Palun vastake eesti keeles. Kui saite aru, vastake palun 'OK'",
        ui: {
            title: "AI Keeleabi",
            apiKeyPlaceholder: "Sisestage oma Gemini API võti",
            startPrompt: "🎤 Öelge midagi inglise keeles! Nt: What is AI?",
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
        prompt: "Olet ammattimainen englannin kielen opettaja. Auta käyttäjiä korjaamaan kielioppia ja ääntämistä. Kun käyttäjät puhuvat englantia, tunnistat mitä he sanoivat, osoitat ääntämisongelmia ja kielioppivirheitä, ja ohjaat heitä vaihe vaiheelta kohti oikeaa ääntämistä. Kun ääntäminen on oikein, ehdota uutta lausetta nykyisen kontekstin perusteella ja jatka tätä prosessia, kunnes käyttäjä sanoo 'OK, haluan lopettaa'. Vastaa suomeksi. Jos ymmärrät, vastaa 'OK'",
        ui: {
            title: "AI Kieliavustaja",
            apiKeyPlaceholder: "Syötä Gemini API-avaimesi",
            startPrompt: "🎤 Sano jotain englanniksi! Esim: What is AI?",
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
        prompt: "Vous êtes un professeur d'anglais professionnel. Aidez les utilisateurs à corriger leur grammaire et leur prononciation. Lorsque les utilisateurs parlent anglais, vous identifierez ce qu'ils ont dit, soulignerez les problèmes de prononciation et les erreurs grammaticales, et les guiderez étape par étape vers une prononciation correcte. Lorsque la prononciation est correcte, proposez une nouvelle phrase basée sur le contexte actuel et continuez ce processus jusqu'à ce que l'utilisateur dise 'OK, je veux quitter'. Veuillez répondre en français. Si vous comprenez, répondez par 'OK'",
        ui: {
            title: "Assistant Linguistique IA",
            apiKeyPlaceholder: "Entrez votre clé API Gemini",
            startPrompt: "🎤 Dites quelque chose en anglais ! Ex : What is AI?",
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
        prompt: "Sie sind ein professioneller Englischlehrer. Helfen Sie Benutzern, ihre Grammatik und Aussprache zu korrigieren. Wenn Benutzer Englisch sprechen, identifizieren Sie, was sie gesagt haben, weisen Sie auf Ausspracheprobleme und grammatikalische Fehler hin und führen Sie sie Schritt für Schritt zur korrekten Aussprache. Wenn die Aussprache korrekt ist, schlagen Sie einen neuen Satz basierend auf dem aktuellen Kontext vor und setzen Sie diesen Prozess fort, bis der Benutzer sagt 'OK, ich möchte beenden'. Bitte antworten Sie auf Deutsch. Wenn Sie verstehen, antworten Sie bitte mit 'OK'",
        ui: {
            title: "KI-Sprachassistent",
            apiKeyPlaceholder: "Geben Sie Ihren Gemini API-Schlüssel ein",
            startPrompt: "🎤 Sagen Sie etwas auf Englisch! Z.B.: What is AI?",
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
        prompt: "Είστε επαγγελματίας καθηγητής αγγλικών. Βοηθήστε τους χρήστες να διορθώσουν τη γραμματική και την προφορά τους. Όταν οι χρήστες μιλούν αγγλικά, θα αναγνωρίζετε τι είπαν, θα επισημαίνετε προβλήματα προφοράς και γραμματικά λάθη, και θα τους καθοδηγείτε βήμα προς βήμα προς τη σωστή προφορά. Όταν η προφορά είναι σωστή, προτείνετε μια νέα πρόταση με βάση το τρέχον πλαίσιο και συνεχίστε αυτή τη διαδικασία μέχρι ο χρήστης να πει 'OK, θέλω να φύγω'. Παρακαλώ απαντήστε στα ελληνικά. Αν καταλαβαίνετε, απαντήστε με 'OK'",
        ui: {
            title: "AI Γλωσσικός Βοηθός",
            apiKeyPlaceholder: "Εισάγετε το κλειδί API Gemini",
            startPrompt: "🎤 Πείτε κάτι στα αγγλικά! Π.χ.: What is AI?",
            recording: "🎤 Εγγραφή...",
            processing: "♻️ Επεξεργασία...",
            pause: "Παύση συνεδρίας",
            continue: "Συνέχεια συνεδρίας",
            stop: "Τέλος συνεδρίας",
            export: "Εξαγωγή",
            confirmStop: "Είστε σίγουροι ότι θέλετε να τερματίσετε αυτή τη συνεδρία;",
            ended: "Η συνεδρία τελείωσε",
            aiReply: "✨ Απάντηση AI:",
            userSaid: "🎤 Είπατε:"
        }
    },
    'he': {
        prompt: "אתה מורה מקצועי לאנגלית. עזור למשתמשים לתקן את הדקדוק וההגייה שלהם. כאשר משתמשים מדברים אנגלית, תזהה מה הם אמרו, תצביע על בעיות הגייה ושגיאות דקדוק, ותנחה אותם צעד אחר צעד להגייה נכונה. כאשר ההגייה נכונה, הצע משפט חדש בהתבסס על ההקשר הנוכחי והמשך בתהליך זה עד שהמשתמש יאמר 'בסדר, אני רוצה לצאת'. אנא ענה בעברית. אם הבנת, אנא ענה 'בסדר'",
        ui: {
            title: "עוזר שפה AI",
            apiKeyPlaceholder: "הכנס את מפתח ה-API של Gemini",
            startPrompt: "🎤 אמור משהו באנגלית! לדוגמה: What is AI?",
            recording: "🎤 מקליט...",
            processing: "♻️ מעבד...",
            pause: "השהה שיעור",
            continue: "המשך שיעור",
            stop: "סיים שיעור",
            export: "ייצוא",
            confirmStop: "האם אתה בטוח שברצונך לסיים את השיעור הזה?",
            ended: "השיעור הסתיים",
            aiReply: "✨ תשובת AI:",
            userSaid: "🎤 אמרת:"
        }
    },
    'hi': {
        prompt: "आप एक पेशेवर अंग्रेजी भाषा शिक्षक हैं। उपयोगकर्ताओं को उनकी व्याकरण और उच्चारण सुधारने में मदद करें। जब उपयोगकर्ता अंग्रेजी बोलते हैं, तो आप पहचानेंगे कि उन्होंने क्या कहा, उच्चारण की समस्याओं और व्याकरण की गलतियों को इंगित करेंगे, और उन्हें चरण-दर-चरण सही उच्चारण की ओर मार्गदर्शन करेंगे। जब उच्चारण सही हो, तो वर्तमान संदर्भ के आधार पर एक नया वाक्य सुझाएं और इस प्रक्रिया को तब तक जारी रखें जब तक उपयोगकर्ता 'ठीक है, मैं बाहर निकलना चाहता हूं' नहीं कहता। कृपया हिंदी में उत्तर दें। यदि आप समझ गए हैं, तो कृपया 'ठीक है' के साथ उत्तर दें",
        ui: {
            title: "AI भाषा सहायक",
            apiKeyPlaceholder: "अपनी Gemini API कुंजी दर्ज करें",
            startPrompt: "🎤 अंग्रेजी में कुछ कहें! उदाहरण: What is AI?",
            recording: "🎤 रिकॉर्डिंग...",
            processing: "♻️ प्रोसेसिंग...",
            pause: "सत्र रोकें",
            continue: "सत्र जारी रखें",
            stop: "सत्र समाप्त करें",
            export: "निर्यात",
            confirmStop: "क्या आप वाकई इस सत्र को समाप्त करना चाहते हैं?",
            ended: "सत्र समाप्त हुआ",
            aiReply: "✨ AI उत्तर:",
            userSaid: "🎤 आपने कहा:"
        }
    },
    'hu': {
        prompt: "Ön egy professzionális angol nyelvtanár. Segítsen a felhasználóknak javítani a nyelvtanukat és kiejtésüket. Amikor a felhasználók angolul beszélnek, azonosítsa, mit mondtak, mutasson rá a kiejtési problémákra és nyelvtani hibákra, és vezesse őket lépésről lépésre a helyes kiejtés felé. Amikor a kiejtés helyes, javasoljon új mondatot az aktuális kontextus alapján, és folytassa ezt a folyamatot, amíg a felhasználó azt nem mondja: 'OK, ki szeretnék lépni'. Kérem, válaszoljon magyarul. Ha érti, kérem válaszoljon 'OK'-val",
        ui: {
            title: "AI Nyelvi Asszisztens",
            apiKeyPlaceholder: "Adja meg a Gemini API kulcsát",
            startPrompt: "🎤 Mondjon valamit angolul! Pl.: What is AI?",
            recording: "🎤 Felvétel...",
            processing: "♻️ Feldolgozás...",
            pause: "Szünet",
            continue: "Folytatás",
            stop: "Befejezés",
            export: "Exportálás",
            confirmStop: "Biztosan be szeretné fejezni ezt a munkamenetet?",
            ended: "Munkamenet befejezve",
            aiReply: "✨ AI válasz:",
            userSaid: "🎤 Ön mondta:"
        }
    },
    'id': {
        prompt: "Anda adalah guru bahasa Inggris profesional. Bantu pengguna memperbaiki tata bahasa dan pengucapan mereka. Ketika pengguna berbicara bahasa Inggris, Anda akan mengidentifikasi apa yang mereka katakan, menunjukkan masalah pengucapan dan kesalahan tata bahasa, dan membimbing mereka langkah demi langkah menuju pengucapan yang benar. Ketika pengucapan sudah benar, sarankan kalimat baru berdasarkan konteks saat ini dan lanjutkan proses ini sampai pengguna mengatakan 'OK, saya ingin keluar'. Harap jawab dalam bahasa Indonesia. Jika Anda mengerti, harap jawab dengan 'OK'",
        ui: {
            title: "Asisten Bahasa AI",
            apiKeyPlaceholder: "Masukkan kunci API Gemini Anda",
            startPrompt: "🎤 Katakan sesuatu dalam bahasa Inggris! Mis.: What is AI?",
            recording: "🎤 Merekam...",
            processing: "♻️ Memproses...",
            pause: "Jeda Sesi",
            continue: "Lanjutkan Sesi",
            stop: "Akhiri Sesi",
            export: "Ekspor",
            confirmStop: "Apakah Anda yakin ingin mengakhiri sesi ini?",
            ended: "Sesi berakhir",
            aiReply: "✨ Jawaban AI:",
            userSaid: "🎤 Anda mengatakan:"
        }
    },
    'it': {
        prompt: "Sei un insegnante professionista di inglese. Aiuta gli utenti a correggere la loro grammatica e pronuncia. Quando gli utenti parlano inglese, identificherai ciò che hanno detto, indicherai problemi di pronuncia ed errori grammaticali, e li guiderai passo dopo passo verso la corretta pronuncia. Quando la pronuncia è corretta, suggerisci una nuova frase basata sul contesto attuale e continua questo processo fino a quando l'utente non dice 'OK, voglio uscire'. Per favore rispondi in italiano. Se hai capito, per favore rispondi con 'OK'",
        ui: {
            title: "Assistente Linguistico AI",
            apiKeyPlaceholder: "Inserisci la tua chiave API Gemini",
            startPrompt: "🎤 Di' qualcosa in inglese! Es.: What is AI?",
            recording: "🎤 Registrazione...",
            processing: "♻️ Elaborazione...",
            pause: "Pausa sessione",
            continue: "Continua sessione",
            stop: "Termina sessione",
            export: "Esporta",
            confirmStop: "Sei sicuro di voler terminare questa sessione?",
            ended: "Sessione terminata",
            aiReply: "✨ Risposta AI:",
            userSaid: "🎤 Hai detto:"
        }
    },
    'ja': {
        prompt: "あなたはプロの英語教師です。ユーザーの文法と発音の修正を手伝ってください。ユーザーが英語を話す時、彼らが言ったことを識別し、発音の問題と文法の誤りを指摘し、正しい発音へと段階的に導いてください。発音が正しい場合は、現在のコンテキストに基づいて新しい文を提案し、ユーザーが「OK、終わりたい」と言うまでこのプロセスを続けてください。日本語で回答してください。理解できた場合は「OK」と回答してください",
        ui: {
            title: "AI言語アシスタント",
            apiKeyPlaceholder: "Gemini APIキーを入力してください",
            startPrompt: "🎤 英語で何か話してください！例：What is AI?",
            recording: "🎤 録音中...",
            processing: "♻️ 処理中...",
            pause: "セッション一時停止",
            continue: "セッション再開",
            stop: "セッション終了",
            export: "エクスポート",
            confirmStop: "このセッションを終了してもよろしいですか？",
            ended: "セッションが終了しました",
            aiReply: "✨ AI回答：",
            userSaid: "🎤 あなたの発言："
        }
    },
    'ko': {
        prompt: "당신은 전문 영어 교사입니다. 사용자의 문법과 발음을 교정하는 것을 도와주세요. 사용자가 영어로 말할 때, 그들이 말한 내용을 식별하고, 발음 문제와 문법적 오류를 지적하며, 올바른 발음으로 단계별로 안내해 주세요. 발음이 정확할 때는 현재 맥락을 바탕으로 새로운 문장을 제안하고, 사용자가 '네, 종료하고 싶습니다'라고 할 때까지 이 과정을 계속하세요. 한국어로 답변해 주세요. 이해하셨다면 '네'라고 답변해 주세요",
        ui: {
            title: "AI 언어 도우미",
            apiKeyPlaceholder: "Gemini API 키를 입력하세요",
            startPrompt: "🎤 영어로 말해보세요! 예: What is AI?",
            recording: "🎤 녹음 중...",
            processing: "♻️ 처리 중...",
            pause: "세션 일시정지",
            continue: "세션 계속하기",
            stop: "세션 종료",
            export: "내보내기",
            confirmStop: "이 세션을 종료하시겠습니까?",
            ended: "세션이 종료되었습니다",
            aiReply: "✨ AI 답변:",
            userSaid: "🎤 당신이 말한 내용:"
        }
    },
    'lv': {
        prompt: "Jūs esat profesionāls angļu valodas skolotājs. Palīdziet lietotājiem labot viņu gramatiku un izrunu. Kad lietotāji runā angliski, jūs identificēsiet, ko viņi teica, norādīsiet uz izrunas problēmām un gramatiskām kļūdām, un soli pa solim vadīsiet viņus uz pareizu izrunu. Kad izruna ir pareiza, ierosiniet jaunu teikumu, balstoties uz pašreizējo kontekstu, un turpiniet šo procesu, līdz lietotājs saka 'OK, es vēlos beigt'. Lūdzu, atbildiet latviešu valodā. Ja saprotat, lūdzu atbildiet ar 'OK'",
        ui: {
            title: "AI Valodas Asistents",
            apiKeyPlaceholder: "Ievadiet savu Gemini API atslēgu",
            startPrompt: "🎤 Sakiet kaut ko angliski! Piem.: What is AI?",
            recording: "🎤 Ieraksta...",
            processing: "♻️ Apstrādā...",
            pause: "Pauzēt sesiju",
            continue: "Turpināt sesiju",
            stop: "Beigt sesiju",
            export: "Eksportēt",
            confirmStop: "Vai tiešām vēlaties beigt šo sesiju?",
            ended: "Sesija beigusies",
            aiReply: "✨ AI atbilde:",
            userSaid: "🎤 Jūs teicāt:"
        }
    },
    'lt': {
        prompt: "Jūs esate profesionalus anglų kalbos mokytojas. Padėkite vartotojams taisyti jų gramatiką ir tarimą. Kai vartotojai kalba angliškai, identifikuosite, ką jie pasakė, nurodysite tarimo problemas ir gramatines klaidas, ir žingsnis po žingsnio vesite juos link teisingo tarimo. Kai tarimas teisingas, pasiūlykite naują sakinį pagal esamą kontekstą ir tęskite šį procesą, kol vartotojas pasakys 'Gerai, noriu baigti'. Prašome atsakyti lietuvių kalba. Jei supratote, prašome atsakyti 'Gerai'",
        ui: {
            title: "AI Kalbos Asistentas",
            apiKeyPlaceholder: "Įveskite savo Gemini API raktą",
            startPrompt: "🎤 Pasakykite ką nors angliškai! Pvz.: What is AI?",
            recording: "🎤 Įrašoma...",
            processing: "♻️ Apdorojama...",
            pause: "Pristabdyti sesiją",
            continue: "Tęsti sesiją",
            stop: "Baigti sesiją",
            export: "Eksportuoti",
            confirmStop: "Ar tikrai norite baigti šią sesiją?",
            ended: "Sesija baigta",
            aiReply: "✨ AI atsakymas:",
            userSaid: "🎤 Jūs pasakėte:"
        }
    },
    'no': {
        prompt: "Du er en profesjonell engelsklærer. Hjelp brukere med å korrigere grammatikken og uttalen deres. Når brukere snakker engelsk, vil du identifisere hva de sa, påpeke uttaleproblemer og grammatiske feil, og guide dem trinn for trinn mot riktig uttale. Når uttalen er korrekt, foreslå en ny setning basert på nåværende kontekst og fortsett denne prosessen til brukeren sier 'OK, jeg vil avslutte'. Vennligst svar på norsk. Hvis du forstår, vennligst svar med 'OK'",
        ui: {
            title: "AI Språkassistent",
            apiKeyPlaceholder: "Skriv inn din Gemini API-nøkkel",
            startPrompt: "🎤 Si noe på engelsk! F.eks.: What is AI?",
            recording: "🎤 Tar opp...",
            processing: "♻️ Behandler...",
            pause: "Pause økt",
            continue: "Fortsett økt",
            stop: "Avslutt økt",
            export: "Eksporter",
            confirmStop: "Er du sikker på at du vil avslutte denne økten?",
            ended: "Økt avsluttet",
            aiReply: "✨ AI-svar:",
            userSaid: "🎤 Du sa:"
        }
    },
    'pl': {
        prompt: "Jesteś profesjonalnym nauczycielem języka angielskiego. Pomóż użytkownikom poprawić ich gramatykę i wymowę. Gdy użytkownicy mówią po angielsku, zidentyfikujesz, co powiedzieli, wskażesz problemy z wymową i błędy gramatyczne, oraz poprowadzisz ich krok po kroku do prawidłowej wymowy. Gdy wymowa jest poprawna, zaproponuj nowe zdanie w oparciu o aktualny kontekst i kontynuuj ten proces, aż użytkownik powie 'OK, chcę zakończyć'. Proszę odpowiadać po polsku. Jeśli rozumiesz, odpowiedz 'OK'",
        ui: {
            title: "Asystent Językowy AI",
            apiKeyPlaceholder: "Wprowadź swój klucz API Gemini",
            startPrompt: "🎤 Powiedz coś po angielsku! Np.: What is AI?",
            recording: "🎤 Nagrywanie...",
            processing: "♻️ Przetwarzanie...",
            pause: "Wstrzymaj sesję",
            continue: "Kontynuuj sesję",
            stop: "Zakończ sesję",
            export: "Eksportuj",
            confirmStop: "Czy na pewno chcesz zakończyć tę sesję?",
            ended: "Sesja zakończona",
            aiReply: "✨ Odpowiedź AI:",
            userSaid: "🎤 Powiedziałeś:"
        }
    },
    'pt-pt': {
        prompt: "Você é um professor profissional de inglês. Ajude os utilizadores a corrigir a sua gramática e pronúncia. Quando os utilizadores falarem inglês, identifique o que disseram, aponte problemas de pronúncia e erros gramaticais, e guie-os passo a passo para a pronúncia correta. Quando a pronúncia estiver correta, sugira uma nova frase baseada no contexto atual e continue este processo até que o utilizador diga 'OK, quero sair'. Por favor, responda em português de Portugal. Se compreender, responda com 'OK'",
        ui: {
            title: "Assistente de Línguas IA",
            apiKeyPlaceholder: "Introduza a sua chave API Gemini",
            startPrompt: "🎤 Diga algo em inglês! Ex.: What is AI?",
            recording: "🎤 A gravar...",
            processing: "♻️ A processar...",
            pause: "Pausar sessão",
            continue: "Continuar sessão",
            stop: "Terminar sessão",
            export: "Exportar",
            confirmStop: "Tem a certeza que quer terminar esta sessão?",
            ended: "Sessão terminada",
            aiReply: "✨ Resposta da IA:",
            userSaid: "🎤 Você disse:"
        }
    },
    'pt-br': {
        prompt: "Você é um professor profissional de inglês. Ajude os usuários a corrigir sua gramática e pronúncia. Quando os usuários falarem inglês, identifique o que disseram, aponte problemas de pronúncia e erros gramaticais, e guie-os passo a passo para a pronúncia correta. Quando a pronúncia estiver correta, sugira uma nova frase baseada no contexto atual e continue este processo até que o usuário diga 'OK, quero sair'. Por favor, responda em português do Brasil. Se compreender, responda com 'OK'",
        ui: {
            title: "Assistente de Idiomas IA",
            apiKeyPlaceholder: "Digite sua chave API Gemini",
            startPrompt: "🎤 Diga algo em inglês! Ex.: What is AI?",
            recording: "🎤 Gravando...",
            processing: "♻️ Processando...",
            pause: "Pausar sessão",
            continue: "Continuar sessão",
            stop: "Encerrar sessão",
            export: "Exportar",
            confirmStop: "Tem certeza que quer encerrar esta sessão?",
            ended: "Sessão encerrada",
            aiReply: "✨ Resposta da IA:",
            userSaid: "🎤 Você disse:"
        }
    },
    'ro': {
        prompt: "Sunteți un profesor profesionist de limba engleză. Ajutați utilizatorii să își corecteze gramatica și pronunția. Când utilizatorii vorbesc în engleză, veți identifica ce au spus, veți indica probleme de pronunție și erori gramaticale, și îi veți ghida pas cu pas spre pronunția corectă. Când pronunția este corectă, sugerați o nouă propoziție bazată pe contextul actual și continuați acest proces până când utilizatorul spune 'OK, vreau să ies'. Vă rugăm să răspundeți în română. Dacă înțelegeți, vă rugăm să răspundeți cu 'OK'",
        ui: {
            title: "Asistent Lingvistic AI",
            apiKeyPlaceholder: "Introduceți cheia API Gemini",
            startPrompt: "🎤 Spuneți ceva în engleză! Ex.: What is AI?",
            recording: "🎤 Înregistrare...",
            processing: "♻️ Procesare...",
            pause: "Pauză sesiune",
            continue: "Continuă sesiunea",
            stop: "Încheie sesiunea",
            export: "Exportă",
            confirmStop: "Sigur doriți să încheiați această sesiune?",
            ended: "Sesiune încheiată",
            aiReply: "✨ Răspuns AI:",
            userSaid: "🎤 Ați spus:"
        }
    },
    'ru': {
        prompt: "Вы профессиональный преподаватель английского языка. Помогите пользователям исправить их грамматику и произношение. Когда пользователи говорят по-английски, вы будете определять, что они сказали, указывать на проблемы с произношением и грамматические ошибки, и пошагово направлять их к правильному произношению. Когда произношение правильное, предложите новое предложение на основе текущего контекста и продолжайте этот процесс, пока пользователь не скажет 'OK, я хочу выйти'. Пожалуйста, отвечайте на русском языке. Если вы понимаете, ответьте 'OK'",
        ui: {
            title: "AI Языковой Ассистент",
            apiKeyPlaceholder: "Введите ваш ключ API Gemini",
            startPrompt: "🎤 Скажите что-нибудь по-английски! Например: What is AI?",
            recording: "🎤 Запись...",
            processing: "♻️ Обработка...",
            pause: "Приостановить сессию",
            continue: "Продолжить сессию",
            stop: "Завершить сессию",
            export: "Экспорт",
            confirmStop: "Вы уверены, что хотите завершить эту сессию?",
            ended: "Сессия завершена",
            aiReply: "✨ Ответ AI:",
            userSaid: "🎤 Вы сказали:"
        }
    },
    'sr': {
        prompt: "Ви сте професионални наставник енглеског језика. Помозите корисницима да исправе своју граматику и изговор. Када корисници говоре енглески, идентификоваћете шта су рекли, указати на проблеме са изговором и граматичке грешке, и водити их корак по корак до правилног изговора. Када је изговор тачан, предложите нову реченицу засновану на тренутном контексту и наставите овај процес док корисник не каже 'У реду, желим да изађем'. Молимо одговорите на српском. Ако разумете, одговорите са 'У реду'",
        ui: {
            title: "AI Језички Асистент",
            apiKeyPlaceholder: "Унесите ваш Gemini API кључ",
            startPrompt: "🎤 Реците нешто на енглеском! Нпр.: What is AI?",
            recording: "🎤 Снимање...",
            processing: "♻️ Обрада...",
            pause: "Паузирај сесију",
            continue: "Настави сесију",
            stop: "Заврши сесију",
            export: "Извези",
            confirmStop: "Да ли сте сигурни да желите да завршите ову сесију?",
            ended: "Сесија завршена",
            aiReply: "✨ AI одговор:",
            userSaid: "🎤 Рекли сте:"
        }
    },
    'sk': {
        prompt: "Ste profesionálny učiteľ angličtiny. Pomôžte používateľom opraviť ich gramatiku a výslovnosť. Keď používatelia hovoria po anglicky, identifikujete, čo povedali, poukážete na problémy s výslovnosťou a gramatické chyby, a povedete ich krok za krokom k správnej výslovnosti. Keď je výslovnosť správna, navrhnite novú vetu založenú na aktuálnom kontexte a pokračujte v tomto procese, kým používateľ nepovie 'OK, chcem skončiť'. Prosím, odpovedajte po slovensky. Ak rozumiete, odpovedzte prosím 'OK'",
        ui: {
            title: "AI Jazykový Asistent",
            apiKeyPlaceholder: "Zadajte váš Gemini API kľúč",
            startPrompt: "🎤 Povedzte niečo po anglicky! Napr.: What is AI?",
            recording: "🎤 Nahrávanie...",
            processing: "♻️ Spracovanie...",
            pause: "Pozastaviť reláciu",
            continue: "Pokračovať v relácii",
            stop: "Ukončiť reláciu",
            export: "Exportovať",
            confirmStop: "Naozaj chcete ukončiť túto reláciu?",
            ended: "Relácia ukončená",
            aiReply: "✨ AI odpoveď:",
            userSaid: "🎤 Povedali ste:"
        }
    },
    'sl': {
        prompt: "Vi ste profesionalni učitelj angleščine. Pomagajte uporabnikom popraviti njihovo slovnico in izgovorjavo. Ko uporabniki govorijo angleško, boste identificirali, kaj so rekli, pokazali na težave z izgovorjavo in slovnične napake ter jih korak za korakom vodili do pravilne izgovorjave. Ko je izgovorjava pravilna, predlagajte nov stavek na podlagi trenutnega konteksta in nadaljujte s tem procesom, dokler uporabnik ne reče 'V redu, želim končati'. Prosimo, odgovorite v slovenščini. Če razumete, prosimo odgovorite z 'V redu'",
        ui: {
            title: "AI Jezikovni Asistent",
            apiKeyPlaceholder: "Vnesite vaš Gemini API ključ",
            startPrompt: "🎤 Recite nekaj v angleščini! Npr.: What is AI?",
            recording: "🎤 Snemanje...",
            processing: "♻️ Obdelava...",
            pause: "Premor seje",
            continue: "Nadaljuj sejo",
            stop: "Končaj sejo",
            export: "Izvozi",
            confirmStop: "Ali ste prepričani, da želite končati to sejo?",
            ended: "Seja končana",
            aiReply: "✨ AI odgovor:",
            userSaid: "🎤 Rekli ste:"
        }
    },
    'es-es': {
        prompt: "Eres un profesor profesional de inglés. Ayuda a los usuarios a corregir su gramática y pronunciación. Cuando los usuarios hablen en inglés, identificarás lo que dijeron, señalarás problemas de pronunciación y errores gramaticales, y los guiarás paso a paso hacia la pronunciación correcta. Cuando la pronunciación sea correcta, sugiere una nueva frase basada en el contexto actual y continúa este proceso hasta que el usuario diga 'Vale, quiero salir'. Por favor, responde en español de España. Si entiendes, por favor responde con 'Vale'",
        ui: {
            title: "Asistente de Idiomas IA",
            apiKeyPlaceholder: "Introduce tu clave API de Gemini",
            startPrompt: "🎤 ¡Di algo en inglés! Ej.: What is AI?",
            recording: "🎤 Grabando...",
            processing: "♻️ Procesando...",
            pause: "Pausar sesión",
            continue: "Continuar sesión",
            stop: "Terminar sesión",
            export: "Exportar",
            confirmStop: "¿Estás seguro de que quieres terminar esta sesión?",
            ended: "Sesión terminada",
            aiReply: "✨ Respuesta IA:",
            userSaid: "🎤 Has dicho:"
        }
    },
    'es-419': {
        prompt: "Eres un profesor profesional de inglés. Ayuda a los usuarios a corregir su gramática y pronunciación. Cuando los usuarios hablen en inglés, identificarás lo que dijeron, señalarás problemas de pronunciación y errores gramaticales, y los guiarás paso a paso hacia la pronunciación correcta. Cuando la pronunciación sea correcta, sugiere una nueva frase basada en el contexto actual y continúa este proceso hasta que el usuario diga 'OK, quiero salir'. Por favor, responde en español latinoamericano. Si entiendes, por favor responde con 'OK'",
        ui: {
            title: "Asistente de Idiomas IA",
            apiKeyPlaceholder: "Ingresa tu clave API de Gemini",
            startPrompt: "🎤 ¡Di algo en inglés! Ej.: What is AI?",
            recording: "🎤 Grabando...",
            processing: "♻️ Procesando...",
            pause: "Pausar sesión",
            continue: "Continuar sesión",
            stop: "Terminar sesión",
            export: "Exportar",
            confirmStop: "¿Estás seguro que quieres terminar esta sesión?",
            ended: "Sesión terminada",
            aiReply: "✨ Respuesta IA:",
            userSaid: "🎤 Dijiste:"
        }
    },
    'sw': {
        prompt: "Wewe ni mwalimu mtaalamu wa Kiingereza. Wasaidie watumiaji kusahihisha sarufi na matamshi yao. Watumiaji wanapozungumza Kiingereza, utatambua walichosema, uonyeshe matatizo ya matamshi na makosa ya kisarufi, na uwaongoze hatua kwa hatua kuelekea matamshi sahihi. Matamshi yakiwa sahihi, pendekeza sentensi mpya kulingana na muktadha wa sasa na endelea na mchakato huu hadi mtumiaji aseme 'Sawa, nataka kuondoka'. Tafadhali jibu kwa Kiswahili. Ikiwa umeelewa, tafadhali jibu 'Sawa'",
        ui: {
            title: "Msaidizi wa Lugha wa AI",
            apiKeyPlaceholder: "Ingiza ufunguo wako wa API wa Gemini",
            startPrompt: "🎤 Sema kitu kwa Kiingereza! Mfano: What is AI?",
            recording: "🎤 Inarekodi...",
            processing: "♻️ Inachakata...",
            pause: "Simamisha kipindi",
            continue: "Endelea na kipindi",
            stop: "Maliza kipindi",
            export: "Hamisha",
            confirmStop: "Una uhakika unataka kumaliza kipindi hiki?",
            ended: "Kipindi kimeisha",
            aiReply: "✨ Jibu la AI:",
            userSaid: "🎤 Ulisema:"
        }
    },
    'sv': {
        prompt: "Du är en professionell engelsklärare. Hjälp användare att korrigera sin grammatik och uttal. När användare talar engelska kommer du att identifiera vad de sa, peka på uttalsproblem och grammatiska fel, och vägleda dem steg för steg mot korrekt uttal. När uttalet är korrekt, föreslå en ny mening baserad på nuvarande kontext och fortsätt denna process tills användaren säger 'OK, jag vill avsluta'. Vänligen svara på svenska. Om du förstår, vänligen svara med 'OK'",
        ui: {
            title: "AI Språkassistent",
            apiKeyPlaceholder: "Ange din Gemini API-nyckel",
            startPrompt: "🎤 Säg något på engelska! T.ex.: What is AI?",
            recording: "🎤 Spelar in...",
            processing: "♻️ Bearbetar...",
            pause: "Pausa session",
            continue: "Fortsätt session",
            stop: "Avsluta session",
            export: "Exportera",
            confirmStop: "Är du säker på att du vill avsluta denna session?",
            ended: "Session avslutad",
            aiReply: "✨ AI-svar:",
            userSaid: "🎤 Du sa:"
        }
    },
    'th': {
        prompt: "คุณเป็นครูสอนภาษาอังกฤษมืออาชีพ ช่วยผู้ใช้แก้ไขไวยากรณ์และการออกเสียงของพวกเขา เมื่อผู้ใช้พูดภาษาอังกฤษ คุณจะระบุสิ่งที่พวกเขาพูด ชี้ให้เห็นปัญหาการออกเสียงและข้อผิดพลาดทางไวยากรณ์ และแนะนำพวกเขาทีละขั้นตอนไปสู่การออกเสียงที่ถูกต้อง เมื่อการออกเสียงถูกต้อง ให้แนะนำประโยคใหม่ตามบริบทปัจจุบันและดำเนินกระบวนการนี้ต่อไปจนกว่าผู้ใช้จะพูดว่า 'ตกลง ฉันต้องการออก' กรุณาตอบเป็นภาษาไทย ถ้าคุณเข้าใจ กรุณาตอบว่า 'ตกลง'",
        ui: {
            title: "ผู้ช่วยด้านภาษา AI",
            apiKeyPlaceholder: "ใส่คีย์ API Gemini ของคุณ",
            startPrompt: "🎤 พูดอะไรบางอย่างเป็นภาษาอังกฤษ! เช่น: What is AI?",
            recording: "🎤 กำลังบันทึก...",
            processing: "♻️ กำลังประมวลผล...",
            pause: "หยุดชั่วคราว",
            continue: "ดำเนินการต่อ",
            stop: "จบเซสชัน",
            export: "ส่งออก",
            confirmStop: "คุณแน่ใจหรือไม่ว่าต้องการจบเซสชันนี้?",
            ended: "เซสชันจบแล้ว",
            aiReply: "✨ คำตอบ AI:",
            userSaid: "🎤 คุณพูดว่า:"
        }
    },
    'tr': {
        prompt: "Siz profesyonel bir İngilizce öğretmenisiniz. Kullanıcıların dilbilgisi ve telaffuzlarını düzeltmelerine yardımcı olun. Kullanıcılar İngilizce konuştuğunda, ne söylediklerini belirleyecek, telaffuz sorunlarını ve dilbilgisi hatalarını işaret edecek ve onları adım adım doğru telaffuza yönlendireceksiniz. Telaffuz doğru olduğunda, mevcut bağlama dayalı yeni bir cümle önerin ve kullanıcı 'Tamam, çıkmak istiyorum' diyene kadar bu süreci devam ettirin. Lütfen Türkçe yanıt verin. Anlıyorsanız, lütfen 'Tamam' ile yanıt verin",
        ui: {
            title: "AI Dil Asistanı",
            apiKeyPlaceholder: "Gemini API anahtarınızı girin",
            startPrompt: "🎤 İngilizce bir şeyler söyleyin! Örn.: What is AI?",
            recording: "🎤 Kaydediyor...",
            processing: "♻️ İşleniyor...",
            pause: "Oturumu duraklat",
            continue: "Oturuma devam et",
            stop: "Oturumu sonlandır",
            export: "Dışa aktar",
            confirmStop: "Bu oturumu sonlandırmak istediğinizden emin misiniz?",
            ended: "Oturum sonlandırıldı",
            aiReply: "✨ AI yanıtı:",
            userSaid: "🎤 Söylediğiniz:"
        }
    },
    'uk': {
        prompt: "Ви професійний викладач англійської мови. Допоможіть користувачам виправити їхню граматику та вимову. Коли користувачі говорять англійською, ви визначатимете, що вони сказали, вказуватимете на проблеми з вимовою та граматичні помилки, і крок за кроком направлятимете їх до правильної вимови. Коли вимова правильна, запропонуйте нове речення на основі поточного контексту і продовжуйте цей процес, поки користувач не скаже 'Добре, я хочу вийти'. Будь ласка, відповідайте українською мовою. Якщо ви розумієте, будь ласка, відповідайте 'Добре'",
        ui: {
            title: "AI Мовний Асистент",
            apiKeyPlaceholder: "Введіть ваш ключ API Gemini",
            startPrompt: "🎤 Скажіть щось англійською! Напр.: What is AI?",
            recording: "🎤 Запис...",
            processing: "♻️ Обробка...",
            pause: "Призупинити сесію",
            continue: "Продовжити сесію",
            stop: "Завершити сесію",
            export: "Експорт",
            confirmStop: "Ви впевнені, що хочете завершити цю сесію?",
            ended: "Сесію завершено",
            aiReply: "✨ Відповідь AI:",
            userSaid: "🎤 Ви сказали:"
        }
    },
    'vi': {
        prompt: "Bạn là một giáo viên tiếng Anh chuyên nghiệp. Giúp người dùng sửa ngữ pháp và phát âm của họ. Khi người dùng nói tiếng Anh, bạn sẽ xác định những gì họ đã nói, chỉ ra các vấn đề về phát âm và lỗi ngữ pháp, và hướng dẫn họ từng bước đến phát âm đúng. Khi phát âm đúng, hãy đề xuất một câu mới dựa trên ngữ cảnh hiện tại và tiếp tục quá trình này cho đến khi người dùng nói 'OK, tôi muốn thoát'. Vui lòng trả lời bằng tiếng Việt. Nếu bạn hiểu, vui lòng trả lời 'OK'",
        ui: {
            title: "Trợ lý Ngôn ngữ AI",
            apiKeyPlaceholder: "Nhập khóa API Gemini của bạn",
            startPrompt: "🎤 Nói gì đó bằng tiếng Anh! VD: What is AI?",
            recording: "🎤 Đang ghi âm...",
            processing: "♻️ Đang xử lý...",
            pause: "Tạm dừng phiên",
            continue: "Tiếp tục phiên",
            stop: "Kết thúc phiên",
            export: "Xuất",
            confirmStop: "Bạn có chắc muốn kết thúc phiên này không?",
            ended: "Phiên đã kết thúc",
            aiReply: "✨ Trả lời AI:",
            userSaid: "🎤 Bạn đã nói:"
        }
    },
    'zh-Hans': {
        prompt: "你是一名专业的英语口语指导老师，你需要帮助用户纠正语法发音，用户将会说一句英语，然后你会给出识别出来的英语是什么，并且告诉他发音中有什么问题，语法有什么错误，并且一步一步的纠正他的发音，当一次发音正确后，根据当前语句提出下一个场景的语句,然后一直循环这个过程，直到用户说OK，我要退出。你的回答永远要保持简体中文。如果明白了请回答OK两个字",
        ui: {
            title: "AI 语言助手",
            apiKeyPlaceholder: "请输入您的 Gemini API Key",
            startPrompt: "🎤 说一句英语吧！比如: What is AI?",
            recording: "🎤 正在录音...",
            processing: "♻️ 处理中...",
            pause: "暂停学习",
            continue: "继续学习",
            stop: "结束学习",
            export: "导出记录",
            confirmStop: "确定要结束本次学习吗？",
            ended: "学习已结束",
            aiReply: "✨ AI回复：",
            userSaid: "🎤 您说："
        }
    },
    'zh-Hant': {
        prompt: "你是一位專業的英文口說指導老師，你需要幫助用戶糾正文法發音，用戶將會說一句英文，然後你會給出識別出來的英文是什麼，並且告訴他發音中有什麼問題，文法有什麼錯誤，並且一步一步的糾正他的發音，當一次發音正確後，根據當前語句提出下一個場景的語句,然後一直循環這個過程，直到用戶說OK，我要退出。你的回答永遠要保持台灣繁體中文。如果明白了請回答OK兩個字",
        ui: {
            title: "AI 語言助手",
            apiKeyPlaceholder: "請輸入您的 Gemini API Key",
            startPrompt: "🎤 說一句英語吧！比如: What is AI?",
            recording: "🎤 正在錄音...",
            processing: "♻️ 處理中...",
            pause: "暫停學習",
            continue: "繼續學習",
            stop: "結束學習",
            export: "導出記錄",
            confirmStop: "確定要結束本次學習嗎？",
            ended: "學習已結束",
            aiReply: "✨ AI回覆：",
            userSaid: "🎤 您說："
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
            'zh-Hant': "AI驅動的英文語言導師。練習發音，提高文法，獲得即時反饋。完美適合英文學習者和語言愛好者。"
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
            
            document.documentElement.dir = ['ar', 'he'].includes(newLanguage) ? 'rtl' : 'ltr';
            
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