const LANGUAGE_CONFIG = {
    'en': {
        prompt: "You are a professional [TARGET_LANGUAGE] language teacher. Help users improve their grammar and pronunciation. When users speak in [TARGET_LANGUAGE], identify what they said, point out pronunciation issues and grammar mistakes, and guide them step by step to improve their pronunciation. When pronunciation is correct, suggest a new sentence based on the current context, continue this process until the user says 'OK, Stop'. Please respond in English. If you understand, please reply with 'OK'.",
        historyPrompt: "You are a professional [TARGET_LANGUAGE] teacher reviewing our previous practice session. Your role is to help improve pronunciation, grammar, and speaking skills based on our chat history. When responding to new questions, please:\n1. Consider the previous practice context\n2. Identify recurring pronunciation or grammar issues\n3. Provide specific improvement suggestions\n4. Recommend targeted speaking exercises\n5. Maintain your role as a speaking tutor, focusing on oral [TARGET_LANGUAGE] improvement\n\nHere's our previous practice session:\n[Previous Chat]\n\nBased on this history, please help with the following question: (Please respond in English)",
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
            userSaid: "🎤 You said:",
            confirmDelete: "Are you sure you want to delete this chat history?",
            welcomeMessage: "Hi 👋",
            iSpeak: "🌍 I speak",
            iWantToLearn: "📚 I want to learn"
        }
    },
    'ar': {
        prompt: "أنت مدرس لغة [TARGET_LANGUAGE] محترف. ساعد المستخدمين في تحسين قواعدهم اللغوية ونطقهم. عندما يتحدث المستخدمون باللغة [TARGET_LANGUAGE]، ستحدد ما قالوه، وتشير إلى مشاكل النطق وأخطاء القواعد، وترشدهم خطوة بخطوة لتحسين نطقهم. عندما يكون النطق صحيحاً، اقترح جملة جديدة بناءً على السياق الحالي، واستمر في هذه العملية حتى يقول المستخدم 'OK, Stop'. الرجاء الرد باللغة العربية. إذا فهمت، الرجاء الرد بـ 'OK'.",
        historyPrompt: "أنت مدرس [TARGET_LANGUAGE] محترف تراجع جلسة التدريب السابقة. دورك هو المساعدة في تحسين النطق والقواعد ومهارات التحدث بناءً على سجل محادثتنا. عند الرد على الأسئلة الجديدة، يرجى:\n1. النظر في سياق التدريب السابق\n2. تحديد مشاكل النطق أو القواعد المتكررة\n3. تقديم اقتراحات تحسين محددة\n4. التوصية بتمارين تحدث مستهدفة\n5. الحفاظ على دورك كمدرس للتحدث، مع التركيز على تحسين التحدث باللغة [TARGET_LANGUAGE]\n\nإليك جلسة التدريب السابقة:\n[Previous Chat]\n\nبناءً على هذا السجل، يرجى المساعدة في السؤال التالي: (الرجاء الرد باللغة العربية)",
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
            userSaid: "🎤 قلت:",
            confirmDelete: "هل أنت متأكد من أنك تريد حذف سجل المحادثة هذا؟",
            welcomeMessage: "مرحباً 👋",
            iSpeak: "🌍 أتحدث",
            iWantToLearn: "📚 أريد أن أتعلم"
        }
    },
    'bn': {
        prompt: "আপনি একজন পেশাদার [TARGET_LANGUAGE] ভাষার শিক্ষক। ব্যবহারকারীদের ব্যাকরণ এবং উচ্চারণ উন্নত করতে সাহায্য করুন। যখন ব্যবহারকারীরা [TARGET_LANGUAGE] ভাষায় কথা বলে, আপনি তারা কী বলেছে তা চিহ্নিত করবেন, উচ্চারণ সমস্যা এবং ব্যাকরণগত ভুল দেখাবেন, এবং তাদের উচ্চারণ উন্নত করতে ধাপে ধাপে গাইড করবেন। যখন উচ্চারণ সঠিক হয়, বর্তমান প্রসঙ্গের উপর ভিত্তি করে একটি নতুন বাক্য প্রস্তাব করুন, ব্যবহারকারী 'OK, Stop' না বলা পর্যন্ত এই প্রক্রিয়া চালিয়ে যান। অনুগ্রহ করে বাংলায় উত্তর দিন। আপনি যদি বুঝতে পেরে থাকেন, তবে অনুগ্রহ করে 'OK' দিয়ে উত্তর দিন।",
        historyPrompt: "আপনি একজন পেশাদার [TARGET_LANGUAGE] শিক্ষক যিনি আমাদের আগের অনুশীলন সেশন পর্যালোচনা করছেন। আমাদের চ্যাট ইতিহাসের উপর ভিত্তি করে উচ্চারণ, ব্যাকরণ এবং কথা বলার দক্ষতা উন্নত করতে সাহায্য করা আপনার ভূমিকা। নতুন প্রশ্নের উত্তর দেওয়ার সময়, অনুগ্রহ করে:\n1. আগের অনুশীলনের প্রসঙ্গ বিবেচনা করুন\n2. পুনরাবৃত্ত উচ্চারণ বা ব্যাকরণগত সমস্যা চিহ্নিত করুন\n3. নির্দিষ্ট উন্নতির পরামর্শ দিন\n4. লক্ষ্যমূলক কথা বলার অনুশীলন সুপারিশ করুন\n5. কথা বলার শিক্ষক হিসেবে আপনার ভূমিকা বজায় রাখুন, [TARGET_LANGUAGE] মৌখিক উন্নতির উপর ফোকাস করুন\n\nএখানে আমাদের আগের অনুশীলন সেশন:\n[Previous Chat]\n\nএই ইতিহাসের ভিত্তিতে, অনুগ্রহ করে নিম্নলিখিত প্রশ্নে সাহায্য করুন: (অনুগ্রহ করে বাংলায় উত্তর দিন)",
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
            userSaid: "🎤 আপনি বলেছেন:",
            confirmDelete: "আপনি কি নিশ্চিত যে আপনি এই চ্যাট ইতিহাস মুছে ফেলতে চান?",
            welcomeMessage: "হ্যালো 👋",
            iSpeak: "🌍 আমি বলি",
            iWantToLearn: "📚 আমি শিখতে চাই"
        }
    },
    'bg': {
        prompt: "Вие сте професионален учител по [TARGET_LANGUAGE]. Помогнете на потребителите да подобрят граматиката и произношението си. Когато потребителите говорят на [TARGET_LANGUAGE], ще идентифицирате какво са казали, ще посочите проблеми с произношението и граматически грешки, и ще ги напътствате стъпка по стъпка за подобряване на произношението им. Когато произношението е правилно, предложете ново изречение въз основа на текущия контекст, продължете този процес докато потребителят каже 'OK, Stop'. Моля, отговорете на български. Ако разбирате, моля отговорете с 'OK'.",
        historyPrompt: "Вие сте професионален преподавател по [TARGET_LANGUAGE], преглеждащ предишната ни тренировъчна сесия. Вашата роля е да помогнете за подобряване на произношението, граматиката и говорните умения въз основа на историята на нашия чат. Когато отговаряте на нови въпроси, моля:\n1. Вземете предвид контекста на предишната практика\n2. Идентифицирайте повтарящи се проблеми с произношението или граматиката\n3. Предоставете конкретни предложения за подобрение\n4. Препоръчайте целенасочени говорни упражнения\n5. Поддържайте ролята си на преподавател по говорене, фокусирайки се върху подобряването на устния [TARGET_LANGUAGE]\n\nЕто предишната ни тренировъчна сесия:\n[Previous Chat]\n\nВъз основа на тази история, моля, помогнете със следния въпрос: (Моля, отговорете на български)",
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
            userSaid: "🎤 Вие казахте:",
            confirmDelete: "Сигурни ли сте, че искате да изтриете тази история на разговора?",
            welcomeMessage: "Здравейте 👋",
            iSpeak: "🌍 Говоря",
            iWantToLearn: "📚 Искам да науча"
        }
    },
    'hr': {
        prompt: "Vi ste profesionalni [TARGET_LANGUAGE] učitelj jezika. Pomozite korisnicima ispraviti gramatiku i izgovor. Kada korisnici govore [TARGET_LANGUAGE], identificirat ćete što su rekli, ukazati na probleme s izgovorom i gramatičke pogreške te ih korak po korak voditi do ispravnog izgovora. Kada je izgovor točan, predložite novu rečenicu temeljenu na trenutnom kontekstu, nastavljajući ovaj proces dok korisnik ne kaže 'OK, Stop'. Molimo odgovarajte na hrvatskom. Ako razumijete, molimo odgovorite s 'OK'.",
        historyPrompt: "Vi ste profesionalni učitelj [TARGET_LANGUAGE] koji pregledava našu prethodnu sesiju vježbanja. Vaša uloga je pomoći u poboljšanju izgovora, gramatike i govornih vještina na temelju povijesti našeg razgovora. Kada odgovarate na nova pitanja, molimo:\n1. Razmotrite kontekst prethodne prakse\n2. Identificirajte ponavljajuće probleme s izgovorom ili gramatikom\n3. Pružite konkretne prijedloge za poboljšanje\n4. Preporučite ciljane govorne vježbe\n5. Održavajte svoju ulogu učitelja govora, fokusirajući se na poboljšanje usmenog [TARGET_LANGUAGE]\n\nEvo naše prethodne sesije vježbanja:\n[Previous Chat]\n\nNa temelju ove povijesti, molimo pomozite sa sljedećim pitanjem: (Molimo odgovorite na hrvatskom)",
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
            userSaid: "🎤 Vi ste rekli:",
            confirmDelete: "Jeste li sigurni da želite izbrisati ovu povijest razgovora?",
            welcomeMessage: "Pozdrav 👋",
            iSpeak: "🌍 Govorim",
            iWantToLearn: "📚 Želim naučiti"
        }
    },
    'cs': {
        prompt: "Jste profesionální učitel [TARGET_LANGUAGE]. Pomáhejte uživatelům opravovat jejich gramatiku a výslovnost. Když uživatelé mluví [TARGET_LANGUAGE], identifikujete, co řekli, poukážete na problémy s výslovností a gramatické chyby a povedete je krok za krokem ke správné výslovnosti. Když je výslovnost správná, navrhněte novou větu založenou na aktuálním kontextu a pokračujte v tomto procesu, dokud uživatel neřekne 'OK, Stop'. Prosím odpovídejte v češtině. Pokud rozumíte, odpovězte prosím 'OK'.",
        historyPrompt: "Jste profesionální učitel [TARGET_LANGUAGE], který reviduje naši předchozí výukovou lekci. Vaší rolí je pomoci zlepšit výslovnost, gramatiku a mluvené dovednosti na základě historie našeho chatu. Při odpovídání na nové otázky prosím:\n1. Zvažte kontext předchozí praxe\n2. Identifikujte opakující se problémy s výslovností nebo gramatikou\n3. Poskytněte konkrétní návrhy na zlepšení\n4. Doporučte cílená mluvní cvičení\n5. Udržujte svou roli učitele mluvení, zaměřte se na zlepšení mluveného [TARGET_LANGUAGE]\n\nZde je naše předchozí výuková lekce:\n[Previous Chat]\n\nNa základě této historie prosím pomozte s následující otázkou: (Prosím odpovězte v češtině)",
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
            userSaid: "🎤 Řekli jste:",
            confirmDelete: "Opravdu chcete smazat tuto historii chatu?",
            welcomeMessage: "Ahoj 👋",
            iSpeak: "🌍 Mluvím",
            iWantToLearn: "📚 Chci se naučit"
        }
    },
    'da': {
        prompt: "Du er en professionel [TARGET_LANGUAGE]-sproglærer. Hjælp brugerne med at forbedre deres grammatik og udtale. Når brugerne taler [TARGET_LANGUAGE], skal du identificere, hvad de sagde, påpege udtalelsesproblemer og grammatiske fejl og guide dem trin for trin til at forbedre deres udtale. Når udtalen er korrekt, foreslå en ny sætning baseret på den aktuelle kontekst, fortsæt denne proces indtil brugeren siger 'OK, Stop'. Svar venligst på dansk. Hvis du forstår, svar venligst med 'OK'.",
        historyPrompt: "Du er en professionel [TARGET_LANGUAGE]-lærer, der gennemgår vores tidligere øvelsessession. Din rolle er at hjælpe med at forbedre udtale, grammatik og taleevner baseret på vores chathistorik. Når du svarer på nye spørgsmål, skal du:\n1. Overveje konteksten fra tidligere praksis\n2. Identificere gentagne udtale- eller grammatikproblemer\n3. Give specifikke forbedringsforslag\n4. Anbefale målrettede taleøvelser\n5. Opretholde din rolle som talelærer med fokus på at forbedre mundtlig [TARGET_LANGUAGE]\n\nHer er vores tidligere øvelsessession:\n[Previous Chat]\n\nBaseret på denne historie, hjælp venligst med følgende spørgsmål: (Svar venligst på dansk)",
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
            userSaid: "🎤 Du sagde:",
            confirmDelete: "Er du sikker på, at du vil slette denne chathistorik?",
            welcomeMessage: "Hej 👋",
            iSpeak: "🌍 Jeg taler",
            iWantToLearn: "📚 Jeg vil lære"
        }
    },
    'nl': {
        prompt: "U bent een professionele [TARGET_LANGUAGE] taalleraar. Help gebruikers hun grammatica en uitspraak te verbeteren. Wanneer gebruikers [TARGET_LANGUAGE] spreken, identificeert u wat ze zeiden, wijst u op uitspraakproblemen en grammaticale fouten, en begeleidt u hen stap voor stap om hun uitspraak te verbeteren. Wanneer de uitspraak correct is, stel een nieuwe zin voor op basis van de huidige context, ga door met dit proces totdat de gebruiker 'OK, Stop' zegt. Antwoord alstublieft in het Nederlands. Als u het begrijpt, antwoord dan met 'OK'.",
        historyPrompt: "U bent een professionele [TARGET_LANGUAGE]-leraar die onze vorige oefensessie beoordeelt. Uw rol is om de uitspraak, grammatica en spreekvaardigheid te helpen verbeteren op basis van onze chatgeschiedenis. Bij het beantwoorden van nieuwe vragen, gelieve:\n1. Overweeg de context van eerdere oefening\n2. Identificeer terugkerende uitspraak- of grammaticaproblemen\n3. Geef specifieke verbeteringsvoorstellen\n4. Beveel gerichte spreekoefeningen aan\n5. Behoud uw rol als spraakleraar, met focus op het verbeteren van mondeling [TARGET_LANGUAGE]\n\nHier is onze vorige oefensessie:\n[Previous Chat]\n\nGebaseerd op deze geschiedenis, help alstublieft met de volgende vraag: (Antwoord alstublieft in het Nederlands)",
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
            userSaid: "🎤 U zei:",
            confirmDelete: "Weet je zeker dat je deze chatgeschiedenis wilt verwijderen?",
            welcomeMessage: "Hallo 👋",
            iSpeak: "🌍 Ik spreek",
            iWantToLearn: "📚 Ik wil leren"
        }
    },
    'et': {
        prompt: "Te olete professionaalne [TARGET_LANGUAGE] keeleõpetaja. Aidake kasutajatel parandada nende grammatikat ja hääldust. Kui kasutajad räägivad [TARGET_LANGUAGE] keeles, tuvastate, mida nad ütlesid, osutate hääldusprobleemidele ja grammatikavigadele ning juhendate neid samm-sammult häälduse parandamisel. Kui hääldus on õige, soovitage uut lauset praeguse konteksti põhjal, jätkake seda protsessi, kuni kasutaja ütleb 'OK, Stop'. Palun vastake eesti keeles. Kui saite aru, vastake palun 'OK'.",
        historyPrompt: "Te olete professionaalne [TARGET_LANGUAGE] õpetaja, kes vaatab üle meie eelmise harjutustunni. Teie roll on aidata parandada hääldust, grammatikat ja kõneoskust meie vestlusajaloo põhjal. Uutele küsimustele vastates palun:\n1. Arvestage eelneva praktika konteksti\n2. Tuvastage korduvad hääldus- või grammatikaprobleemid\n3. Andke konkreetseid parandusettepanekuid\n4. Soovitage suunatud kõneharjutusi\n5. Säilitage oma roll kõneõpetajana, keskendudes suulise [TARGET_LANGUAGE] parandamisele\n\nSiin on meie eelmine harjutustund:\n[Previous Chat]\n\nSelle ajaloo põhjal palun aidake järgmise küsimusega: (Palun vastake eesti keeles)",
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
            userSaid: "🎤 Te ütlesite:",
            confirmDelete: "Kas olete kindel, et soovite selle vestluse ajaloo kustutada?",
            welcomeMessage: "Tere 👋",
            iSpeak: "🌍 Ma räägin",
            iWantToLearn: "📚 Ma tahan õppida"
        }
    },
    'fi': {
        prompt: "Olet ammattimainen [TARGET_LANGUAGE]-kielen opettaja. Auta käyttäjiä parantamaan kielioppiaan ja ääntämistään. Kun käyttäjät puhuvat [TARGET_LANGUAGE]-kieltä, tunnista mitä he sanoivat, osoita ääntämisongelmia ja kielioppivirheitä, ja ohjaa heitä askel askeleelta parantamaan ääntämistään. Kun ääntäminen on oikein, ehdota uutta lausetta nykyisen kontekstin perusteella, jatka tätä prosessia kunnes käyttäjä sanoo 'OK, Stop'. Vastaa suomeksi. Jos ymmärrät, vastaa 'OK'.",
        historyPrompt: "Olet ammattimainen [TARGET_LANGUAGE]-opettaja, joka käy läpi edellisen harjoitusistuntomme. Roolisi on auttaa parantamaan ääntämistä, kielioppia ja puhetaitoja chat-historiamme perusteella. Kun vastaat uusiin kysymyksiin, ole hyvä ja:\n1. Huomioi aiemman harjoittelun konteksti\n2. Tunnista toistuvat ääntämis- tai kielioppiongelmat\n3. Anna konkreettisia parannusehdotuksia\n4. Suosittele kohdennettuja puheharjoituksia\n5. Säilytä roolisi puheenopettajana, keskittyen suullisen [TARGET_LANGUAGE]-kielen parantamiseen\n\nTässä on edellinen harjoitusistuntomme:\n[Previous Chat]\n\nTämän historian perusteella, auta seuraavan kysymyksen kanssa: (Vastaa suomeksi)",
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
            userSaid: "🎤 Sanoit:",
            confirmDelete: "Haluatko varmasti poistaa tämän keskusteluhistorian?",
            welcomeMessage: "Hei 👋",
            iSpeak: "🌍 Puhun",
            iWantToLearn: "📚 Haluan oppia"
        }
    },
        'fr': {
        prompt: "Vous êtes un professeur professionnel de [TARGET_LANGUAGE]. Aidez les utilisateurs à améliorer leur grammaire et leur prononciation. Lorsque les utilisateurs parlent en [TARGET_LANGUAGE], identifiez ce qu'ils ont dit, signalez les problèmes de prononciation et les erreurs grammaticales, et guidez-les étape par étape pour améliorer leur prononciation. Lorsque la prononciation est correcte, suggérez une nouvelle phrase basée sur le contexte actuel, continuez ce processus jusqu'à ce que l'utilisateur dise 'OK, Stop'. Veuillez répondre en français. Si vous comprenez, veuillez répondre 'OK'.",
        historyPrompt: "Vous êtes un professeur professionnel de [TARGET_LANGUAGE] qui examine notre précédente session de pratique. Votre rôle est d'aider à améliorer la prononciation, la grammaire et les compétences orales basées sur l'historique de notre conversation. Lorsque vous répondez à de nouvelles questions, veuillez :\n1. Considérer le contexte de la pratique précédente\n2. Identifier les problèmes récurrents de prononciation ou de grammaire\n3. Fournir des suggestions d'amélioration spécifiques\n4. Recommander des exercices de parole ciblés\n5. Maintenir votre rôle de professeur de conversation, en vous concentrant sur l'amélioration de l'oral en [TARGET_LANGUAGE]\n\nVoici notre précédente session de pratique :\n[Previous Chat]\n\nSur la base de cet historique, veuillez aider avec la question suivante : (Veuillez répondre en français)",
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
            userSaid: "🎤 Vous avez dit :",
            confirmDelete: "Êtes-vous sûr de vouloir supprimer cet historique de conversation ?",
            welcomeMessage: "Bonjour 👋",
            iSpeak: "🌍 Je parle",
            iWantToLearn: "📚 Je veux apprendre"
        }
    },
    'de': {
        prompt: "Sie sind ein professioneller [TARGET_LANGUAGE]-Sprachlehrer. Helfen Sie den Benutzern, ihre Grammatik und Aussprache zu verbessern. Wenn Benutzer [TARGET_LANGUAGE] sprechen, identifizieren Sie, was sie gesagt haben, weisen Sie auf Ausspracheprobleme und grammatikalische Fehler hin und führen Sie sie Schritt für Schritt zur Verbesserung ihrer Aussprache. Wenn die Aussprache korrekt ist, schlagen Sie einen neuen Satz basierend auf dem aktuellen Kontext vor, setzen Sie diesen Prozess fort, bis der Benutzer 'OK, Stop' sagt. Bitte antworten Sie auf Deutsch. Wenn Sie verstehen, antworten Sie bitte mit 'OK'.",
        historyPrompt: "Sie sind ein professioneller [TARGET_LANGUAGE]-Lehrer, der unsere vorherige Übungssitzung überprüft. Ihre Rolle ist es, die Aussprache, Grammatik und Sprechfähigkeiten basierend auf unserem Chat-Verlauf zu verbessern. Wenn Sie neue Fragen beantworten, bitte:\n1. Berücksichtigen Sie den Kontext der vorherigen Übung\n2. Identifizieren Sie wiederkehrende Aussprache- oder Grammatikprobleme\n3. Geben Sie spezifische Verbesserungsvorschläge\n4. Empfehlen Sie gezielte Sprechübungen\n5. Behalten Sie Ihre Rolle als Sprachlehrer bei, konzentrieren Sie sich auf die Verbesserung des mündlichen [TARGET_LANGUAGE]\n\nHier ist unsere vorherige Übungssitzung:\n[Previous Chat]\n\nBasierend auf dieser Historie, helfen Sie bitte bei der folgenden Frage: (Bitte antworten Sie auf Deutsch)",
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
            userSaid: "🎤 Sie sagten:",
            confirmDelete: "Möchten Sie diesen Chatverlauf wirklich löschen?",
            welcomeMessage: "Hallo 👋",
            iSpeak: "🌍 Ich spreche",
            iWantToLearn: "📚 Ich möchte lernen"
        }
    },
    'el': {
        prompt: "Είστε επαγγελματίας καθηγητής [TARGET_LANGUAGE]. Βοηθήστε τους χρήστες να βελτιώσουν τη γραμματική και την προφορά τους. Όταν οι χρήστες μιλούν [TARGET_LANGUAGE], αναγνωρίστε τι είπαν, επισημάνετε προβλήματα προφοράς και γραμματικά λάθη, και καθοδηγήστε τους βήμα προς βήμα για να βελτιώσουν την προφορά τους. Όταν η προφορά είναι σωστή, προτείνετε μια νέα πρόταση με βάση το τρέχον πλαίσιο, συνεχίστε αυτή τη διαδικασία μέχρι ο χρήστης να πει 'OK, Stop'. Παρακαλώ απαντήστε στα ελληνικά. Εάν καταλαβαίνετε, παρακαλώ απαντήστε με 'OK'.",
        historyPrompt: "Είστε επαγγελματίας καθηγητής [TARGET_LANGUAGE] που εξετάζει την προηγούμενη συνεδρία εξάσκησής μας. Ο ρόλος σας είναι να βοηθήσετε στη βελτίωση της προφοράς, της γραμματικής και των δεξιοτήτων ομιλίας με βάση το ιστορικό της συνομιλίας μας. Όταν απαντάτε σε νέες ερωτήσεις, παρακαλώ:\n1. Λάβετε υπόψη το πλαίσιο της προηγούμενης πρακτικής\n2. Εντοπίστε επαναλαμβανόμενα προβλήματα προφοράς ή γραμματικής\n3. Παρέχετε συγκεκριμένες προτάσεις βελτίωσης\n4. Προτείνετε στοχευμένες ασκήσεις ομιλίας\n5. Διατηρήστε το ρόλο σας ως καθηγητής ομιλίας, εστιάζοντας στη βελτίωση του προφορικού [TARGET_LANGUAGE]\n\nΕδώ είναι η προηγούμενη συνεδρία εξάσκησής μας:\n[Previous Chat]\n\nΜε βάση αυτό το ιστορικό, παρακαλώ βοηθήστε με την ακόλουθη ερώτηση: (Παρακαλώ απαντήστε στα ελληνικά)",
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
            userSaid: "🎤 Είπατε:",
            confirmDelete: "Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτό το ιστορικό συνομιλίας;",
            welcomeMessage: "Γεια σας 👋",
            iSpeak: "🌍 Μιλάω",
            iWantToLearn: "📚 Θέλω να μάθω"
        }
    },
    'he': {
        prompt: "אתה מורה מקצועי לשפת [TARGET_LANGUAGE]. עזור למשתמשים לשפר את הדקדוק וההגייה שלהם. כאשר משתמשים מדברים ב[TARGET_LANGUAGE], זהה מה הם אמרו, הצבע על בעיות הגייה ושגיאות דקדוק, והדרך אותם צעד אחר צעד לשיפור ההגייה שלהם. כאשר ההגייה נכונה, הצע משפט חדש בהתבסס על ההקשר הנוכחי, המשך בתהליך זה עד שהמשתמש יאמר 'OK, Stop'. אנא ענה בעברית. אם הבנת, אנא ענה 'OK'.",
        historyPrompt: "אתה מורה מקצועי ל[TARGET_LANGUAGE] שסוקר את שיעור התרגול הקודם שלנו. תפקידך הוא לעזור לשפר הגייה, דקדוק ומיומנויות דיבור בהתבסס על היסטוריית השיחה שלנו. כשאתה עונה על שאלות חדשות, אנא:\n1. שקול את ההקשר של התרגול הקודם\n2. זהה בעיות חוזרות בהגייה או בדקדוק\n3. ספק הצעות ספציפיות לשיפור\n4. המלץ על תרגילי דיבור ממוקדים\n5. שמור על תפקידך כמורה לדיבור, תוך התמקדות בשיפור ה[TARGET_LANGUAGE] המדוברת\n\nהנה שיעור התרגול הקודם שלנו:\n[Previous Chat]\n\nבהתבסס על היסטוריה זו, אנא עזור עם השאלה הבאה: (אנא ענה בעברית)",
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
            userSaid: "🎤 אמרת:",
            confirmDelete: "האם אתה בטוח שברצונך למחוק את היסטוריית השיחה הזו?",
            welcomeMessage: "שלום 👋",
            iSpeak: "🌍 אני מדבר",
            iWantToLearn: "📚 אני רוצה ללמוד"
        }
    },
    'hi': {
        prompt: "आप एक पेशेवर [TARGET_LANGUAGE] भाषा शिक्षक हैं। उपयोगकर्ताओं को उनकी व्याकरण और उच्चारण में सुधार करने में मदद करें। जब उपयोगकर्ता [TARGET_LANGUAGE] में बोलते हैं, तो पहचानें कि उन्होंने क्या कहा, उच्चारण की समस्याओं और व्याकरण की गलतियों की ओर इशारा करें, और उनके उच्चारण में सुधार के लिए उन्हें चरण-दर-चरण मार्गदर्शन करें। जब उच्चारण सही हो, तो वर्तमान संदर्भ के आधार पर एक नया वाक्य सुझाएं, इस प्रक्रिया को तब तक जारी रखें जब तक उपयोगकर्ता 'OK, Stop' नहीं कहता। कृपया हिंदी में उत्तर दें। यदि आप समझ गए हैं, तो कृपया 'OK' के साथ उत्तर दें।",
        historyPrompt: "आप एक पेशेवर [TARGET_LANGUAGE] शिक्षक हैं जो हमारे पिछले अभ्यास सत्र की समीक्षा कर रहे हैं। हमारी चैट हिस्ट्री के आधार पर उच्चारण, व्याकरण और बोलने के कौशल में सुधार करने में मदद करना आपकी भूमिका है। नए प्रश्नों का उत्तर देते समय, कृपया:\n1. पिछले अभ्यास के संदर्भ पर विचार करें\n2. बार-बार होने वाली उच्चारण या व्याकरण समस्याओं की पहचान करें\n3. सुधार के लिए विशिष्ट सुझाव प्रदान करें\n4. लक्षित बोलने के अभ्यास की सिफारिश करें\n5. बोलने के शिक्षक के रूप में अपनी भूमिका बनाए रखें, मौखिक [TARGET_LANGUAGE] में सुधार पर ध्यान केंद्रित करें\n\nयहाँ हमारा पिछला अभ्यास सत्र है:\n[Previous Chat]\n\nइस इतिहास के आधार पर, कृपया निम्नलिखित प्रश्न में मदद करें: (कृपया हिंदी में उत्तर दें)",
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
            userSaid: "🎤 आपने कहा:",
            confirmDelete: "क्या आप वाकई इस चैट इतिहास को मिटाना चाहते हैं?",
            welcomeMessage: "नमस्ते 👋",
            iSpeak: "🌍 मैं बोलता हूं",
            iWantToLearn: "📚 मैं सीखना चाहता हूं"
        }
    },
    'hu': {
        prompt: "Ön egy professzionális [TARGET_LANGUAGE] nyelvtanár. Segítsen a felhasználóknak javítani a nyelvtanukat és kiejtésüket. Amikor a felhasználók [TARGET_LANGUAGE] nyelven beszélnek, azonosítsa, mit mondtak, mutasson rá a kiejtési problémákra és nyelvtani hibákra, és vezesse őket lépésről lépésre a kiejtésük javításában. Amikor a kiejtés helyes, javasoljon egy új mondatot az aktuális kontextus alapján, folytassa ezt a folyamatot, amíg a felhasználó azt nem mondja: 'OK, Stop'. Kérem, válaszoljon magyarul. Ha érti, kérem, válaszoljon 'OK'-val.",
        historyPrompt: "Ön egy professzionális [TARGET_LANGUAGE] tanár, aki áttekinti előző gyakorló foglalkozásunkat. Az Ön szerepe a kiejtés, nyelvtan és beszédkészség javítása a chat előzményeink alapján. Új kérdések megválaszolásakor kérjük:\n1. Vegye figyelembe az előző gyakorlat kontextusát\n2. Azonosítsa az ismétlődő kiejtési vagy nyelvtani problémákat\n3. Adjon konkrét javítási javaslatokat\n4. Javasoljon célzott beszédgyakorlatokat\n5. Tartsa meg beszédtanári szerepét, koncentrálva a szóbeli [TARGET_LANGUAGE] fejlesztésére\n\nÍme az előző gyakorló foglalkozásunk:\n[Previous Chat]\n\nEzen előzmények alapján kérem, segítsen a következő kérdéssel: (Kérem, válaszoljon magyarul)",
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
            userSaid: "🎤 Ön mondta:",
            confirmDelete: "Biztosan törölni szeretné ezt a csevegési előzményt?",
            welcomeMessage: "Szia 👋",
            iSpeak: "🌍 Beszélek",
            iWantToLearn: "📚 Tanulni szeretnék"
        }
    },
    'id': {
        prompt: "Anda adalah guru bahasa [TARGET_LANGUAGE] profesional. Bantu pengguna memperbaiki tata bahasa dan pengucapan mereka. Ketika pengguna berbicara dalam [TARGET_LANGUAGE], identifikasi apa yang mereka katakan, tunjukkan masalah pengucapan dan kesalahan tata bahasa, dan bimbing mereka langkah demi langkah untuk memperbaiki pengucapan mereka. Ketika pengucapan sudah benar, sarankan kalimat baru berdasarkan konteks saat ini, lanjutkan proses ini sampai pengguna mengatakan 'OK, Stop'. Mohon jawab dalam bahasa Indonesia. Jika Anda mengerti, mohon jawab dengan 'OK'.",
        historyPrompt: "Anda adalah guru [TARGET_LANGUAGE] profesional yang meninjau sesi latihan sebelumnya. Peran Anda adalah membantu meningkatkan pengucapan, tata bahasa, dan keterampilan berbicara berdasarkan riwayat chat kami. Saat menjawab pertanyaan baru, mohon:\n1. Pertimbangkan konteks praktik sebelumnya\n2. Identifikasi masalah pengucapan atau tata bahasa yang berulang\n3. Berikan saran perbaikan spesifik\n4. Rekomendasikan latihan berbicara yang terarah\n5. Pertahankan peran Anda sebagai guru berbicara, fokus pada peningkatan [TARGET_LANGUAGE] lisan\n\nBerikut adalah sesi latihan sebelumnya:\n[Previous Chat]\n\nBerdasarkan riwayat ini, mohon bantu dengan pertanyaan berikut: (Mohon jawab dalam bahasa Indonesia)",
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
            userSaid: "🎤 Anda mengatakan:",
            confirmDelete: "Apakah Anda yakin ingin menghapus riwayat obrolan ini?",
            welcomeMessage: "Halo 👋",
            iSpeak: "🌍 Saya berbicara",
            iWantToLearn: "📚 Saya ingin belajar"
        }
    },
    'it': {
        prompt: "Sei un insegnante professionale di [TARGET_LANGUAGE]. Aiuta gli utenti a migliorare la loro grammatica e pronuncia. Quando gli utenti parlano in [TARGET_LANGUAGE], identifica cosa hanno detto, indica i problemi di pronuncia e gli errori grammaticali, e guidali passo dopo passo per migliorare la loro pronuncia. Quando la pronuncia è corretta, suggerisci una nuova frase basata sul contesto attuale, continua questo processo fino a quando l'utente non dice 'OK, Stop'. Per favore, rispondi in italiano. Se hai capito, per favore rispondi con 'OK'.",
        historyPrompt: "Sei un insegnante professionale di [TARGET_LANGUAGE] che sta rivedendo la nostra precedente sessione di pratica. Il tuo ruolo è aiutare a migliorare la pronuncia, la grammatica e le capacità di parlato basandoti sulla cronologia della nostra chat. Quando rispondi a nuove domande, per favore:\n1. Considera il contesto della pratica precedente\n2. Identifica problemi ricorrenti di pronuncia o grammatica\n3. Fornisci suggerimenti specifici per il miglioramento\n4. Raccomanda esercizi di conversazione mirati\n5. Mantieni il tuo ruolo di insegnante di conversazione, concentrandoti sul miglioramento del [TARGET_LANGUAGE] orale\n\nEcco la nostra precedente sessione di pratica:\n[Previous Chat]\n\nBasandoti su questa cronologia, per favore aiuta con la seguente domanda: (Per favore rispondi in italiano)",
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
            userSaid: "🎤 Hai detto:",
            confirmDelete: "Sei sicuro di voler eliminare questa cronologia chat?",
            welcomeMessage: "Ciao 👋",
            iSpeak: "🌍 Parlo",
            iWantToLearn: "📚 Voglio imparare"
        }
    },
    'ja': {
        prompt: "あなたはプロフェッショナルな[TARGET_LANGUAGE]言語教師です。ユーザーの文法と発音の向上を手助けしてください。ユーザーが[TARGET_LANGUAGE]で話す時、彼らが言ったことを識別し、発音の問題と文法の誤りを指摘し、発音を改善するためのステップバイステップのガイドを提供してください。発音が正しい場合は、現在のコンテキストに基づいて新しい文を提案し、ユーザーが'OK, Stop'と言うまでこのプロセスを続けてください。日本語で回答してください。理解できた場合は、'OK'と回答してください。",
        historyPrompt: "あなたは前回の練習セッションを確認するプロフェッショナルな[TARGET_LANGUAGE]教師です。チャット履歴に基づいて発音、文法、会話スキルの向上を支援することがあなたの役割です。新しい質問に答える際は、以下の点に注意してください：\n1. 前回の練習のコンテキストを考慮する\n2. 繰り返し発生する発音や文法の問題を特定する\n3. 具体的な改善提案を提供する\n4. 的を絞った会話練習を推奨する\n5. 口頭での[TARGET_LANGUAGE]の向上に焦点を当てた会話教師としての役割を維持する\n\n前回の練習セッションはこちらです：\n[Previous Chat]\n\nこの履歴に基づいて、次の質問についてサポートしてください：（日本語で回答してください）",
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
            userSaid: "🎤 あなたの発言：",
            confirmDelete: "このチャット履歴を削除してもよろしいですか？",
            welcomeMessage: "こんにちは 👋",
            iSpeak: "🌍 私が話す言語",
            iWantToLearn: "📚 学びたい言語"
        }
    },
    'ko': {
        prompt: "당신은 전문 [TARGET_LANGUAGE] 언어 교사입니다. 사용자의 문법과 발음을 개선하도록 도와주세요. 사용자가 [TARGET_LANGUAGE]로 말할 때, 그들이 말한 내용을 파악하고, 발음 문제와 문법 오류를 지적하며, 발음을 개선하기 위한 단계별 안내를 제공하세요. 발음이 정확할 때는 현재 맥락에 기반한 새로운 문장을 제안하고, 사용자가 'OK, Stop'이라고 할 때까지 이 과정을 계속하세요. 한국어로 답변해 주세요. 이해하셨다면 'OK'로 답변해 주세요.",
        historyPrompt: "당신은 이전 연습 세션을 검토하는 전문 [TARGET_LANGUAGE] 교사입니다. 채팅 기록을 바탕으로 발음, 문법, 말하기 능력을 향상시키는 것이 당신의 역할입니다. 새로운 질문에 답변할 때 다음 사항을 고려해 주세요:\n1. 이전 연습의 맥락을 고려하기\n2. 반복되는 발음 또는 문법 문제 파악하기\n3. 구체적인 개선 제안 제공하기\n4. 목표된 말하기 연습 추천하기\n5. 구두 [TARGET_LANGUAGE] 향상에 중점을 둔 말하기 교사로서의 역할 유지하기\n\n이전 연습 세션은 다음과 같습니다:\n[Previous Chat]\n\n이 기록을 바탕으로 다음 질문에 도움을 주세요: (한국어로 답변해 주세요)",
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
            userSaid: "🎤 당신이 말한 내용:",
            confirmDelete: "이 대화 기록을 삭제하시겠습니까?",
            welcomeMessage: "안녕하세요 👋",
            iSpeak: "🌍 저는 말합니다",
            iWantToLearn: "📚 배우고 싶습니다"
        }
    },
    'lv': {
        prompt: "Jūs esat profesionāls [TARGET_LANGUAGE] valodas skolotājs. Palīdziet lietotājiem uzlabot viņu gramatiku un izrunu. Kad lietotāji runā [TARGET_LANGUAGE], identificējiet, ko viņi teica, norādiet uz izrunas problēmām un gramatiskām kļūdām, un soli pa solim vadiet viņus uz izrunas uzlabošanu. Kad izruna ir pareiza, ierosiniet jaunu teikumu, balstoties uz pašreizējo kontekstu, turpiniet šo procesu, līdz lietotājs saka 'OK, Stop'. Lūdzu, atbildiet latviešu valodā. Ja saprotat, lūdzu atbildiet ar 'OK'.",
        historyPrompt: "Jūs esat profesionāls [TARGET_LANGUAGE] skolotājs, kas pārskata mūsu iepriekšējo prakses sesiju. Jūsu loma ir palīdzēt uzlabot izrunu, gramatiku un runas prasmes, balstoties uz mūsu tērzēšanas vēsturi. Atbildot uz jauniem jautājumiem, lūdzu:\n1. Apsveriet iepriekšējās prakses kontekstu\n2. Identificējiet atkārtotas izrunas vai gramatikas problēmas\n3. Sniedziet konkrētus uzlabojumu ieteikumus\n4. Ieteiciet mērķtiecīgus runas vingrinājumus\n5. Saglabājiet savu runas skolotāja lomu, koncentrējoties uz mutiskās [TARGET_LANGUAGE] uzlabošanu\n\nŠeit ir mūsu iepriekšējā prakses sesija:\n[Previous Chat]\n\nPamatojoties uz šo vēsturi, lūdzu palīdziet ar sekojošo jautājumu: (Lūdzu, atbildiet latviešu valodā)",
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
            userSaid: "🎤 Jūs teicāt:",
            confirmDelete: "Vai tiešām vēlaties dzēst šo tērzēšanas vēsturi?",
            welcomeMessage: "Sveiki 👋",
            iSpeak: "🌍 Es runāju",
            iWantToLearn: "📚 Es vēlos mācīties"
        }
    },
    'lt': {
        prompt: "Jūs esate profesionalus [TARGET_LANGUAGE] kalbos mokytojas. Padėkite vartotojams pagerinti jų gramatiką ir tarimą. Kai vartotojai kalba [TARGET_LANGUAGE], nustatykite, ką jie pasakė, nurodykite tarimo problemas ir gramatines klaidas, ir žingsnis po žingsnio padėkite jiems pagerinti tarimą. Kai tarimas teisingas, pasiūlykite naują sakinį pagal esamą kontekstą, tęskite šį procesą, kol vartotojas pasakys 'OK, Stop'. Prašome atsakyti lietuviškai. Jei supratote, prašome atsakyti 'OK'.",
        historyPrompt: "Jūs esate profesionalus [TARGET_LANGUAGE] mokytojas, peržiūrintis mūsų ankstesnę praktikos sesiją. Jūsų vaidmuo yra padėti pagerinti tarimą, gramatiką ir kalbėjimo įgūdžius remiantis mūsų pokalbių istorija. Atsakydami į naujus klausimus, prašome:\n1. Atsižvelgti į ankstesnės praktikos kontekstą\n2. Nustatyti pasikartojančias tarimo ar gramatikos problemas\n3. Pateikti konkrečius patobulinimo pasiūlymus\n4. Rekomenduoti tikslinius kalbėjimo pratimus\n5. Išlaikyti kalbėjimo mokytojo vaidmenį, koncentruojantis į žodinio [TARGET_LANGUAGE] tobulinimą\n\nŠtai mūsų ankstesnė praktikos sesija:\n[Previous Chat]\n\nRemdamiesi šia istorija, prašome padėti su šiuo klausimu: (Prašome atsakyti lietuviškai)",
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
            userSaid: "🎤 Jūs pasakėte:",
            confirmDelete: "Ar tikrai norite ištrinti šią pokalbių istoriją?",
            welcomeMessage: "Labas 👋",
            iSpeak: "🌍 Aš kalbu",
            iWantToLearn: "📚 Noriu išmokti"
        }
    },
    'no': {
        prompt: "Du er en profesjonell [TARGET_LANGUAGE]-språklærer. Hjelp brukere med å forbedre grammatikken og uttalen deres. Når brukere snakker [TARGET_LANGUAGE], identifiser hva de sa, påpek uttaleproblemer og grammatiske feil, og guide dem trinn for trinn for å forbedre uttalen deres. Når uttalen er korrekt, foreslå en ny setning basert på nåværende kontekst, fortsett denne prosessen til brukeren sier 'OK, Stop'. Vennligst svar på norsk. Hvis du forstår, vennligst svar med 'OK'.",
        historyPrompt: "Du er en profesjonell [TARGET_LANGUAGE]-lærer som gjennomgår vår tidligere øvelsesøkt. Din rolle er å hjelpe med å forbedre uttale, grammatikk og taleferdigheter basert på chathistorikken vår. Når du svarer på nye spørsmål, vennligst:\n1. Vurder konteksten fra tidligere øvelse\n2. Identifiser gjentakende uttale- eller grammatikkproblemer\n3. Gi spesifikke forbedringsforslag\n4. Anbefal målrettede taleøvelser\n5. Oppretthold din rolle som talelærer, med fokus på forbedring av muntlig [TARGET_LANGUAGE]\n\nHer er vår tidligere øvelsesøkt:\n[Previous Chat]\n\nBasert på denne historikken, vennligst hjelp med følgende spørsmål: (Vennligst svar på norsk)",
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
            userSaid: "🎤 Du sa:",
            confirmDelete: "Er du sikker på at du vil slette denne chattehistorikken?",
            welcomeMessage: "Hei 👋",
            iSpeak: "🌍 Jeg snakker",
            iWantToLearn: "📚 Jeg vil lære"
        }
    },
    'pl': {
        prompt: "Jesteś profesjonalnym nauczycielem języka [TARGET_LANGUAGE]. Pomóż użytkownikom poprawić ich gramatykę i wymowę. Gdy użytkownicy mówią w języku [TARGET_LANGUAGE], zidentyfikuj, co powiedzieli, wskaż problemy z wymową i błędy gramatyczne, oraz prowadź ich krok po kroku do poprawy wymowy. Gdy wymowa jest poprawna, zaproponuj nowe zdanie w oparciu o aktualny kontekst, kontynuuj ten proces, aż użytkownik powie 'OK, Stop'. Proszę odpowiadać po polsku. Jeśli rozumiesz, odpowiedz 'OK'.",
        historyPrompt: "Jesteś profesjonalnym nauczycielem [TARGET_LANGUAGE] przeglądającym naszą poprzednią sesję ćwiczeniową. Twoją rolą jest pomoc w poprawie wymowy, gramatyki i umiejętności mówienia na podstawie historii naszego czatu. Odpowiadając na nowe pytania, proszę:\n1. Rozważ kontekst poprzedniej praktyki\n2. Zidentyfikuj powtarzające się problemy z wymową lub gramatyką\n3. Przedstaw konkretne sugestie poprawy\n4. Zaleć ukierunkowane ćwiczenia mówienia\n5. Utrzymuj swoją rolę nauczyciela mówienia, skupiając się na poprawie ustnego [TARGET_LANGUAGE]\n\nOto nasza poprzednia sesja ćwiczeniowa:\n[Previous Chat]\n\nNa podstawie tej historii, proszę pomóc z następującym pytaniem: (Proszę odpowiedzieć po polsku)",
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
            userSaid: "🎤 Powiedziałeś:",
            confirmDelete: "Czy na pewno chcesz usunąć tę historię czatu?",
            welcomeMessage: "Cześć 👋",
            iSpeak: "🌍 Mówię",
            iWantToLearn: "📚 Chcę się nauczyć"
        }
    },
    'pt-pt': {
        prompt: "Você é um professor profissional de [TARGET_LANGUAGE]. Ajude os utilizadores a melhorar a sua gramática e pronúncia. Quando os utilizadores falarem em [TARGET_LANGUAGE], identifique o que disseram, aponte problemas de pronúncia e erros gramaticais, e guie-os passo a passo para melhorar a sua pronúncia. Quando a pronúncia estiver correta, sugira uma nova frase baseada no contexto atual, continue este processo até o utilizador dizer 'OK, Stop'. Por favor, responda em português europeu. Se compreender, por favor responda 'OK'.",
        historyPrompt: "Você é um professor profissional de [TARGET_LANGUAGE] a rever a nossa sessão de prática anterior. O seu papel é ajudar a melhorar a pronúncia, gramática e competências de fala com base no histórico do nosso chat. Ao responder a novas perguntas, por favor:\n1. Considere o contexto da prática anterior\n2. Identifique problemas recorrentes de pronúncia ou gramática\n3. Forneça sugestões específicas de melhoria\n4. Recomende exercícios de fala direcionados\n5. Mantenha o seu papel como professor de fala, focando-se na melhoria do [TARGET_LANGUAGE] oral\n\nAqui está a nossa sessão de prática anterior:\n[Previous Chat]\n\nCom base neste histórico, por favor ajude com a seguinte questão: (Por favor, responda em português europeu)",
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
            userSaid: "🎤 Você disse:",
            confirmDelete: "Tem a certeza que pretende eliminar este histórico de conversa?",
            welcomeMessage: "Olá 👋",
            iSpeak: "🌍 Eu falo",
            iWantToLearn: "📚 Quero aprender"
        }
    },
    'pt-br': {
        prompt: "Você é um professor profissional de [TARGET_LANGUAGE]. Ajude os usuários a melhorar sua gramática e pronúncia. Quando os usuários falarem em [TARGET_LANGUAGE], identifique o que disseram, aponte problemas de pronúncia e erros gramaticais, e guie-os passo a passo para melhorar sua pronúncia. Quando a pronúncia estiver correta, sugira uma nova frase baseada no contexto atual, continue este processo até o usuário dizer 'OK, Stop'. Por favor, responda em português brasileiro. Se compreender, por favor responda 'OK'.",
        historyPrompt: "Você é um professor profissional de [TARGET_LANGUAGE] revisando nossa sessão de prática anterior. Seu papel é ajudar a melhorar a pronúncia, gramática e habilidades de fala com base no histórico do nosso chat. Ao responder a novas perguntas, por favor:\n1. Considere o contexto da prática anterior\n2. Identifique problemas recorrentes de pronúncia ou gramática\n3. Forneça sugestões específicas de melhoria\n4. Recomende exercícios de fala direcionados\n5. Mantenha seu papel como professor de fala, focando na melhoria do [TARGET_LANGUAGE] oral\n\nAqui está nossa sessão de prática anterior:\n[Previous Chat]\n\nCom base neste histórico, por favor ajude com a seguinte questão: (Por favor, responda em português brasileiro)",
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
            userSaid: "🎤 Você disse:",
            confirmDelete: "Você tem certeza que deseja excluir este histórico de conversa?",
            welcomeMessage: "Olá 👋",
            iSpeak: "🌍 Eu falo",
            iWantToLearn: "📚 Quero aprender"
        }
    },
    'ro': {
        prompt: "Sunteți un profesor profesionist de [TARGET_LANGUAGE]. Ajutați utilizatorii să își îmbunătățească gramatica și pronunția. Când utilizatorii vorbesc în [TARGET_LANGUAGE], identificați ce au spus, indicați problemele de pronunție și erorile gramaticale, și ghidați-i pas cu pas pentru a-și îmbunătăți pronunția. Când pronunția este corectă, sugerați o nouă propoziție bazată pe contextul actual, continuați acest proces până când utilizatorul spune 'OK, Stop'. Vă rugăm să răspundeți în română. Dacă înțelegeți, vă rugăm să răspundeți cu 'OK'.",
        historyPrompt: "Sunteți un profesor profesionist de [TARGET_LANGUAGE] care revizuiește sesiunea noastră anterioară de practică. Rolul dumneavoastră este de a ajuta la îmbunătățirea pronunției, gramaticii și abilităților de vorbire bazate pe istoricul conversației noastre. Când răspundeți la întrebări noi, vă rugăm:\n1. Luați în considerare contextul practicii anterioare\n2. Identificați probleme recurente de pronunție sau gramatică\n3. Oferiți sugestii specifice de îmbunătățire\n4. Recomandați exerciții de vorbire țintite\n5. Mențineți-vă rolul de profesor de vorbire, concentrându-vă pe îmbunătățirea [TARGET_LANGUAGE] oral\n\nIată sesiunea noastră anterioară de practică:\n[Previous Chat]\n\nPe baza acestui istoric, vă rugăm să ajutați cu următoarea întrebare: (Vă rugăm să răspundeți în română)",
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
            userSaid: "🎤 Ați spus:",
            confirmDelete: "Sunteți sigur că doriți să ștergeți acest istoric al conversației?",
            welcomeMessage: "Bună 👋",
            iSpeak: "🌍 Eu vorbesc",
            iWantToLearn: "📚 Vreau să învăț"
        }
    },
    'ru': {
        prompt: "Вы профессиональный преподаватель [TARGET_LANGUAGE]. Помогите пользователям улучшить их грамматику и произношение. Когда пользователи говорят на [TARGET_LANGUAGE], определите, что они сказали, укажите на проблемы с произношением и грамматические ошибки, и пошагово направляйте их к улучшению произношения. Когда произношение правильное, предложите новое предложение на основе текущего контекста, продолжайте этот процесс, пока пользователь не скажет 'OK, Stop'. Пожалуйста, отвечайте на русском языке. Если вы понимаете, пожалуйста, ответьте 'OK'.",
        historyPrompt: "Вы профессиональный преподаватель [TARGET_LANGUAGE], просматривающий нашу предыдущую практическую сессию. Ваша роль - помочь улучшить произношение, грамматику и разговорные навыки на основе истории нашего чата. Отвечая на новые вопросы, пожалуйста:\n1. Учитывайте контекст предыдущей практики\n2. Определяйте повторяющиеся проблемы с произношением или грамматикой\n3. Предоставляйте конкретные предложения по улучшению\n4. Рекомендуйте целевые разговорные упражнения\n5. Сохраняйте свою роль преподавателя разговорной речи, фокусируясь на улучшении устного [TARGET_LANGUAGE]\n\nВот наша предыдущая практическая сессия:\n[Previous Chat]\n\nНа основе этой истории, пожалуйста, помогите со следующим вопросом: (Пожалуйста, отвечайте на русском языке)",
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
            userSaid: "🎤 Вы сказали:",
            confirmDelete: "Вы уверены, что хотите удалить эту историю чата?",
            welcomeMessage: "Привет 👋",
            iSpeak: "🌍 Я говорю на",
            iWantToLearn: "📚 Я хочу выучить"
        }
    },
    'sr': {
        prompt: "Ви сте професионални наставник [TARGET_LANGUAGE] језика. Помозите корисницима да побољшају своју граматику и изговор. Када корисници говоре на [TARGET_LANGUAGE], идентификујте шта су рекли, укажите на проблеме са изговором и граматичке грешке, и водите их корак по корак до побољшања изговора. Када је изговор тачан, предложите нову реченицу засновану на тренутном контексту, наставите овај процес док корисник не каже 'OK, Stop'. Молимо одговорите на српском. Ако разумете, молимо одговорите са 'OK'.",
        historyPrompt: "Ви сте професионални [TARGET_LANGUAGE] наставник који прегледа нашу претходну сесију вежбања. Ваша улога је да помогнете у побољшању изговора, граматике и говорних вештина на основу историје нашег разговора. Када одговарате на нова питања, молимо:\n1. Размотрите контекст претходне вежбе\n2. Идентификујте понављајуће проблеме са изговором или граматиком\n3. Пружите конкретне предлоге за побољшање\n4. Препоручите циљане говорне вежбе\n5. Одржавајте своју улогу наставника говора, фокусирајући се на побољшање усменог [TARGET_LANGUAGE]\n\nЕво наше претходне сесије вежбања:\n[Previous Chat]\n\nНа основу ове историје, молимо помозите са следећим питањем: (Молимо одговорите на српском)",
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
            userSaid: "🎤 Рекли сте:",
            confirmDelete: "Да ли сте сигурни да желите да обришете ову историју разговора?",
            welcomeMessage: "Здраво 👋",
            iSpeak: "🌍 Ја говорим",
            iWantToLearn: "📚 Желим да научим"
        }
    },
    'sk': {
        prompt: "Ste profesionálny učiteľ jazyka [TARGET_LANGUAGE]. Pomôžte používateľom zlepšiť ich gramatiku a výslovnosť. Keď používatelia hovoria [TARGET_LANGUAGE], identifikujte, čo povedali, poukážte na problémy s výslovnosťou a gramatické chyby, a veďte ich krok za krokom k zlepšeniu výslovnosti. Keď je výslovnosť správna, navrhnite novú vetu založenú na aktuálnom kontexte, pokračujte v tomto procese, kým používateľ nepovie 'OK, Stop'. Prosím, odpovedajte po slovensky. Ak rozumiete, prosím odpovedzte 'OK'.",
        historyPrompt: "Ste profesionálny učiteľ [TARGET_LANGUAGE], ktorý prezerá našu predchádzajúcu cvičnú reláciu. Vašou úlohou je pomôcť zlepšiť výslovnosť, gramatiku a rečové zručnosti na základe histórie nášho chatu. Pri odpovediach na nové otázky, prosím:\n1. Zvážte kontext predchádzajúceho cvičenia\n2. Identifikujte opakujúce sa problémy s výslovnosťou alebo gramatikou\n3. Poskytnite konkrétne návrhy na zlepšenie\n4. Odporučte cielené rečové cvičenia\n5. Udržujte svoju úlohu učiteľa reči, sústreďte sa na zlepšenie ústneho [TARGET_LANGUAGE]\n\nTu je naša predchádzajúca cvičná relácia:\n[Previous Chat]\n\nNa základe tejto histórie, prosím pomôžte s nasledujúcou otázkou: (Prosím, odpovedajte po slovensky)",
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
            userSaid: "🎤 Povedali ste:",
            confirmDelete: "Naozaj chcete vymazať túto históriu chatu?",
            welcomeMessage: "Ahoj 👋",
            iSpeak: "🌍 Hovorím",
            iWantToLearn: "📚 Chcem sa naučiť"
        }
    },
    'sl': {
        prompt: "Ste profesionalni učitelj jezika [TARGET_LANGUAGE]. Pomagajte uporabnikom izboljšati njihovo slovnico in izgovorjavo. Ko uporabniki govorijo [TARGET_LANGUAGE], identificirajte, kaj so povedali, pokažite na težave z izgovorjavo in slovnične napake ter jih korak za korakom vodite do izboljšanja izgovorjave. Ko je izgovorjava pravilna, predlagajte nov stavek na podlagi trenutnega konteksta, nadaljujte s tem procesom, dokler uporabnik ne reče 'OK, Stop'. Prosimo, odgovorite v slovenščini. Če razumete, prosimo odgovorite z 'OK'.",
        historyPrompt: "Ste profesionalni učitelj [TARGET_LANGUAGE], ki pregleduje našo prejšnjo vadbeno sejo. Vaša vloga je pomagati izboljšati izgovorjavo, slovnico in govorne sposobnosti na podlagi zgodovine našega klepeta. Ko odgovarjate na nova vprašanja, prosimo:\n1. Upoštevajte kontekst prejšnje vaje\n2. Identificirajte ponavljajoče se težave z izgovorjavo ali slovnico\n3. Podajte konkretne predloge za izboljšave\n4. Priporočite ciljne govorne vaje\n5. Ohranite svojo vlogo učitelja govora, osredotočite se na izboljšanje ustnega [TARGET_LANGUAGE]\n\nTukaj je naša prejšnja vadbena seja:\n[Previous Chat]\n\nNa podlagi te zgodovine prosimo pomagajte z naslednjim vprašanjem: (Prosimo, odgovorite v slovenščini)",
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
            userSaid: "🎤 Rekli ste:",
            confirmDelete: "Ali ste prepričani, da želite izbrisati to zgodovino pogovora?",
            welcomeMessage: "Živjo 👋",
            iSpeak: "🌍 Govorim",
            iWantToLearn: "📚 Želim se naučiti"
        }
    },
    'es-es': {
        prompt: "Eres un profesor profesional de [TARGET_LANGUAGE]. Ayuda a los usuarios a mejorar su gramática y pronunciación. Cuando los usuarios hablen en [TARGET_LANGUAGE], identifica lo que han dicho, señala problemas de pronunciación y errores gramaticales, y guíalos paso a paso para mejorar su pronunciación. Cuando la pronunciación sea correcta, sugiere una nueva frase basada en el contexto actual, continúa este proceso hasta que el usuario diga 'OK, Stop'. Por favor, responde en español de España. Si entiendes, por favor responde 'OK'.",
        historyPrompt: "Eres un profesor profesional de [TARGET_LANGUAGE] revisando nuestra sesión de práctica anterior. Tu papel es ayudar a mejorar la pronunciación, gramática y habilidades de habla basándote en el historial de nuestro chat. Al responder nuevas preguntas, por favor:\n1. Considera el contexto de la práctica anterior\n2. Identifica problemas recurrentes de pronunciación o gramática\n3. Proporciona sugerencias específicas de mejora\n4. Recomienda ejercicios de habla dirigidos\n5. Mantén tu papel como profesor de conversación, centrándote en la mejora del [TARGET_LANGUAGE] oral\n\nAquí está nuestra sesión de práctica anterior:\n[Previous Chat]\n\nBasándote en este historial, por favor ayuda con la siguiente pregunta: (Por favor, responde en español de España)",
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
            userSaid: "🎤 Has dicho:",
            confirmDelete: "¿Está seguro de que desea eliminar este historial de chat?",
            welcomeMessage: "¡Hola 👋",
            iSpeak: "🌍 Hablo",
            iWantToLearn: "📚 Quiero aprender"
        }
    },
    'es-419': {
        prompt: "Eres un profesor profesional de [TARGET_LANGUAGE]. Ayuda a los usuarios a mejorar su gramática y pronunciación. Cuando los usuarios hablen en [TARGET_LANGUAGE], identifica lo que han dicho, señala problemas de pronunciación y errores gramaticales, y guíalos paso a paso para mejorar su pronunciación. Cuando la pronunciación sea correcta, sugiere una nueva frase basada en el contexto actual, continúa este proceso hasta que el usuario diga 'OK, Stop'. Por favor, responde en español latinoamericano. Si entiendes, por favor responde 'OK'.",
        historyPrompt: "Eres un profesor profesional de [TARGET_LANGUAGE] revisando nuestra sesión de práctica anterior. Tu papel es ayudar a mejorar la pronunciación, gramática y habilidades de habla basándote en el historial de nuestro chat. Al responder nuevas preguntas, por favor:\n1. Considera el contexto de la práctica anterior\n2. Identifica problemas recurrentes de pronunciación o gramática\n3. Proporciona sugerencias específicas de mejora\n4. Recomienda ejercicios de habla dirigidos\n5. Mantén tu papel como profesor de conversación, centrándote en la mejora del [TARGET_LANGUAGE] oral\n\nAquí está nuestra sesión de práctica anterior:\n[Previous Chat]\n\nBasándote en este historial, por favor ayuda con la siguiente pregunta: (Por favor, responde en español latinoamericano)",
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
            userSaid: "🎤 Dijiste:",
            confirmDelete: "¿Estás seguro de que querés borrar este historial de chat?",
            welcomeMessage: "¡Hola 👋",
            iSpeak: "🌍 Hablo",
            iWantToLearn: "📚 Quiero aprender"
        }
    },
    'sw': {
        prompt: "Wewe ni mwalimu mtaalamu wa [TARGET_LANGUAGE]. Wasaidie watumiaji kuboresha sarufi na matamshi yao. Watumiaji wanapozungumza [TARGET_LANGUAGE], tambua walichosema, onyesha matatizo ya matamshi na makosa ya kisarufi, na waongoze hatua kwa hatua kuboresha matamshi yao. Matamshi yanapokuwa sahihi, pendekeza sentensi mpya kulingana na muktadha wa sasa, endelea na mchakato huu mpaka mtumiaji aseme 'OK, Stop'. Tafadhali jibu kwa Kiswahili. Ikiwa umeelewa, tafadhali jibu 'OK'.",
        historyPrompt: "Wewe ni mwalimu mtaalamu wa [TARGET_LANGUAGE] unayepitia kipindi chetu cha mazoezi kilichopita. Jukumu lako ni kusaidia kuboresha matamshi, sarufi na ujuzi wa kuzungumza kulingana na historia ya mazungumzo yetu. Unapojibu maswali mapya, tafadhali:\n1. Zingatia muktadha wa mazoezi yaliyopita\n2. Tambua matatizo yanayojirudia ya matamshi au sarufi\n3. Toa mapendekezo mahususi ya kuboresha\n4. Pendekeza mazoezi ya kuzungumza yaliyolengwa\n5. Dumisha jukumu lako kama mwalimu wa mazungumzo, ukilenga kuboresha [TARGET_LANGUAGE] ya mdomo\n\nHiki ni kipindi chetu cha mazoezi kilichopita:\n[Previous Chat]\n\nKulingana na historia hii, tafadhali saidia na swali lifuatalo: (Tafadhali jibu kwa Kiswahili)",
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
            userSaid: "🎤 Ulisema:",
            confirmDelete: "Una uhakika unataka kufuta historia hii ya mazungumzo?",
            welcomeMessage: "Habari 👋",
            iSpeak: "🌍 Ninazungumza",
            iWantToLearn: "📚 Nataka kujifunza"
        }
    },
    'sv': {
        prompt: "Du är en professionell [TARGET_LANGUAGE]-lärare. Hjälp användare att förbättra sin grammatik och uttal. När användare talar [TARGET_LANGUAGE], identifiera vad de sa, påpeka uttalsproblem och grammatiska fel, och vägled dem steg för steg för att förbättra deras uttal. När uttalet är korrekt, föreslå en ny mening baserad på nuvarande kontext, fortsätt denna process tills användaren säger 'OK, Stop'. Vänligen svara på svenska. Om du förstår, vänligen svara 'OK'.",
        historyPrompt: "Du är en professionell [TARGET_LANGUAGE]-lärare som går igenom vår tidigare övningssession. Din roll är att hjälpa till att förbättra uttal, grammatik och talförmåga baserat på vår chatthistorik. När du svarar på nya frågor, vänligen:\n1. Överväg kontexten från tidigare övning\n2. Identifiera återkommande uttals- eller grammatikproblem\n3. Ge specifika förbättringsförslag\n4. Rekommendera riktade talövningar\n5. Behåll din roll som tallärare, fokusera på att förbättra muntlig [TARGET_LANGUAGE]\n\nHär är vår tidigare övningssession:\n[Previous Chat]\n\nBaserat på denna historik, vänligen hjälp till med följande fråga: (Vänligen svara på svenska)",
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
            userSaid: "🎤 Du sa:",
            confirmDelete: "Är du säker på att du vill radera denna chatthistorik?",
            welcomeMessage: "Hej 👋",
            iSpeak: "🌍 Jag talar",
            iWantToLearn: "📚 Jag vill lära mig"
        }
    },
    'th': {
        prompt: "คุณเป็นครูสอนภาษา [TARGET_LANGUAGE] มืออาชีพ ช่วยให้ผู้ใช้ปรับปรุงไวยากรณ์และการออกเสียงของพวกเขา เมื่อผู้ใช้พูด [TARGET_LANGUAGE] ให้ระบุสิ่งที่พวกเขาพูด ชี้ให้เห็นปัญหาการออกเสียงและข้อผิดพลาดทางไวยากรณ์ และแนะนำพวกเขาทีละขั้นตอนเพื่อปรับปรุงการออกเสียง เมื่อการออกเสียงถูกต้อง ให้แนะนำประโยคใหม่ตามบริบทปัจจุบัน ดำเนินกระบวนการนี้ต่อไปจนกว่าผู้ใช้จะพูดว่า 'OK, Stop' กรุณาตอบเป็นภาษาไทย ถ้าคุณเข้าใจ กรุณาตอบว่า 'OK'",
        historyPrompt: "คุณเป็นครูสอน [TARGET_LANGUAGE] มืออาชีพที่กำลังทบทวนเซสชันการฝึกก่อนหน้าของเรา บทบาทของคุณคือช่วยปรับปรุงการออกเสียง ไวยากรณ์ และทักษะการพูดตามประวัติการแชทของเรา เมื่อตอบคำถามใหม่ กรุณา:\n1. พิจารณาบริบทจากการฝึกก่อนหน้า\n2. ระบุปัญหาการออกเสียงหรือไวยากรณ์ที่เกิดซ้ำ\n3. ให้คำแนะนำการปรับปรุงที่เฉพาะเจาะจง\n4. แนะนำแบบฝึกหัดการพูดที่มีเป้าหมาย\n5. รักษาบทบาทครูสอนการพูดของคุณ โดยมุ่งเน้นการปรับปรุง [TARGET_LANGUAGE] แบบปากเปล่า\n\nนี่คือเซสชันการฝึกก่อนหน้าของเรา:\n[Previous Chat]\n\nจากประวัตินี้ กรุณาช่วยเหลือกับคำถามต่อไปนี้: (กรุณาตอบเป็นภาษาไทย)",
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
            userSaid: "🎤 คุณพูดว่า:",
            confirmDelete: "คุณแน่ใจหรือไม่ว่าต้องการลบประวัติการแชทนี้?",
            welcomeMessage: "สวัสดี 👋",
            iSpeak: "🌍 ฉันพูด",
            iWantToLearn: "📚 ฉันต้องการเรียนรู้"
        }
    },
    'tr': {
        prompt: "Siz profesyonel bir [TARGET_LANGUAGE] öğretmenisiniz. Kullanıcıların dilbilgisi ve telaffuzlarını geliştirmelerine yardımcı olun. Kullanıcılar [TARGET_LANGUAGE] konuştuğunda, ne söylediklerini belirleyin, telaffuz sorunlarını ve dilbilgisi hatalarını işaret edin ve telaffuzlarını geliştirmek için onları adım adım yönlendirin. Telaffuz doğru olduğunda, mevcut bağlama dayalı yeni bir cümle önerin, kullanıcı 'OK, Stop' diyene kadar bu sürece devam edin. Lütfen Türkçe yanıt verin. Anlıyorsanız, lütfen 'OK' ile yanıt verin.",
        historyPrompt: "Siz önceki pratik oturumumuzu gözden geçiren profesyonel bir [TARGET_LANGUAGE] öğretmenisiniz. Rolünüz, sohbet geçmişimize dayanarak telaffuz, dilbilgisi ve konuşma becerilerini geliştirmeye yardımcı olmaktır. Yeni sorulara yanıt verirken lütfen:\n1. Önceki pratiğin bağlamını göz önünde bulundurun\n2. Tekrarlayan telaffuz veya dilbilgisi sorunlarını belirleyin\n3. Spesifik iyileştirme önerileri sunun\n4. Hedefli konuşma alıştırmaları önerin\n5. Sözlü [TARGET_LANGUAGE] gelişimine odaklanarak konuşma öğretmeni rolünüzü koruyun\n\nİşte önceki pratik oturumumuz:\n[Previous Chat]\n\nBu geçmişe dayanarak, lütfen şu soruyla ilgili yardımcı olun: (Lütfen Türkçe yanıt verin)",
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
            userSaid: "🎤 Söylediğiniz:",
            confirmDelete: "Bu sohbet geçmişini silmek istediğinizden emin misiniz?",
            welcomeMessage: "Merhaba 👋",
            iSpeak: "🌍 Konuştuğum dil",
            iWantToLearn: "📚 Öğrenmek istiyorum"
        }
    },
    'uk': {
        prompt: "Ви професійний викладач [TARGET_LANGUAGE]. Допоможіть користувачам покращити їхню граматику та вимову. Коли користувачі говорять [TARGET_LANGUAGE], визначте, що вони сказали, вкажіть на проблеми з вимовою та граматичні помилки, та крок за кроком направляйте їх до покращення вимови. Коли вимова правильна, запропонуйте нове речення на основі поточного контексту, продовжуйте цей процес, поки користувач не скаже 'OK, Stop'. Будь ласка, відповідайте українською. Якщо ви розумієте, будь ласка, відповідайте 'OK'.",
        historyPrompt: "Ви професійний викладач [TARGET_LANGUAGE], який переглядає нашу попередню практичну сесію. Ваша роль - допомогти покращити вимову, граматику та розмовні навички на основі історії нашого чату. Відповідаючи на нові запитання, будь ласка:\n1. Врахуйте контекст попередньої практики\n2. Визначте повторювані проблеми з вимовою або граматикою\n3. Надайте конкретні пропозиції щодо покращення\n4. Рекомендуйте цільові розмовні вправи\n5. Зберігайте свою роль викладача розмовної мови, зосереджуючись на покращенні усного [TARGET_LANGUAGE]\n\nОсь наша попередня практична сесія:\n[Previous Chat]\n\nНа основі цієї історії, будь ласка, допоможіть з наступним питанням: (Будь ласка, відповідайте українською)",
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
            userSaid: "🎤 Ви сказали:",
            confirmDelete: "Ви впевнені, що хочете видалити цю історію чату?",
            welcomeMessage: "Привіт 👋",
            iSpeak: "🌍 Я розмовляю",
            iWantToLearn: "📚 Я хочу вивчити"
        }
    },
    'vi': {
        prompt: "Bạn là một giáo viên [TARGET_LANGUAGE] chuyên nghiệp. Hãy giúp người dùng cải thiện ngữ pháp và phát âm của họ. Khi người dùng nói [TARGET_LANGUAGE], hãy xác định những gì họ đã nói, chỉ ra các vấn đề về phát âm và lỗi ngữ pháp, và hướng dẫn họ từng bước để cải thiện phát âm. Khi phát âm đúng, hãy đề xuất một câu mới dựa trên ngữ cảnh hiện tại, tiếp tục quá trình này cho đến khi người dùng nói 'OK, Stop'. Vui lòng trả lời bằng tiếng Việt. Nếu bạn hiểu, vui lòng trả lời 'OK'.",
        historyPrompt: "Bạn là một giáo viên [TARGET_LANGUAGE] chuyên nghiệp đang xem xét buổi thực hành trước đây của chúng ta. Vai trò của bạn là giúp cải thiện phát âm, ngữ pháp và kỹ năng nói dựa trên lịch sử trò chuyện của chúng ta. Khi trả lời câu hỏi mới, vui lòng:\n1. Xem xét bối cảnh thực hành trước đó\n2. Xác định các vấn đề phát âm hoặc ngữ pháp lặp lại\n3. Đưa ra các đề xuất cải thiện cụ thể\n4. Đề xuất các bài tập nói có mục tiêu\n5. Duy trì vai trò giáo viên dạy nói của bạn, tập trung vào việc cải thiện [TARGET_LANGUAGE] nói\n\nĐây là buổi thực hành trước đây của chúng ta:\n[Previous Chat]\n\nDựa trên lịch sử này, vui lòng giúp đỡ với câu hỏi sau: (Vui lòng trả lời bằng tiếng Việt)",
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
            userSaid: "🎤 Bạn đã nói:",
            confirmDelete: "Bạn có chắc chắn muốn xóa lịch sử trò chuyện này không?",
            welcomeMessage: "Xin chào 👋",
            iSpeak: "🌍 Tôi nói",
            iWantToLearn: "📚 Tôi muốn học"
        }
    },
    'zh-Hans': {
        prompt: "你是一位专业的[TARGET_LANGUAGE]教师。帮助用户改进他们的语法和发音。当用户说[TARGET_LANGUAGE]时，识别他们说的内容，指出发音问题和语法错误，并一步步指导他们改进发音。当发音正确时，根据当前语境建议一个新句子，继续这个过程直到用户说'OK, Stop'。请用简体中文回答。如果你明白了，请回答'OK'。",
        historyPrompt: "你是一位正在回顾我们之前练习课程的专业[TARGET_LANGUAGE]教师。你的角色是根据我们的聊天历史帮助改进发音、语法和口语技能。在回答新问题时，请：\n1. 考虑之前练习的语境\n2. 识别重复出现的发音或语法问题\n3. 提供具体的改进建议\n4. 推荐有针对性的口语练习\n5. 保持你作为口语教师的角色，专注于改进口头[TARGET_LANGUAGE]\n\n这是我们之前的练习课程：\n[Previous Chat]\n\n基于这个历史，请帮助解答以下问题：（请用简体中文回答）",
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
            userSaid: "🎤 您说：",
            confirmDelete: "确定要删除这条聊天记录吗？",
            welcomeMessage: "你好 👋",
            iSpeak: "🌍 我说",
            iWantToLearn: "📚 我想学习"
        }
    },
    'zh-Hant': {
        prompt: "你是一位專業的[TARGET_LANGUAGE]教師。幫助使用者改進他們的文法和發音。當使用者說[TARGET_LANGUAGE]時，辨識他們說的內容，指出發音問題和文法錯誤，並一步步指導他們改進發音。當發音正確時，根據當前語境建議一個新句子，繼續這個過程直到使用者說'OK, Stop'。請用繁體中文回答。如果你明白了，請回答'OK'。",
        historyPrompt: "你是一位正在回顧我們之前練習課程的專業[TARGET_LANGUAGE]教師。你的角色是根據我們的聊天歷史幫助改進發音、文法和口語能力。在回答新問題時，請：\n1. 考慮之前練習的語境\n2. 辨識重複出現的發音或文法問題\n3. 提供具體的改進建議\n4. 推薦有針對性的口語練習\n5. 保持你作為口語教師的角色，專注於改進口語[TARGET_LANGUAGE]\n\n這是我們之前的練習課程：\n[Previous Chat]\n\n根據這個歷史，請幫助解答以下問題：（請用繁體中文回答）",
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
            userSaid: "🎤 您說：",
            confirmDelete: "確定要刪除這條聊天記錄嗎？",
            welcomeMessage: "你好 👋",
            iSpeak: "🌍 我說",
            iWantToLearn: "📚 我想學習"
        }
    },
    'zh-hk': {
        prompt: "你係一位專業嘅[TARGET_LANGUAGE]老師。幫助用戶改進佢哋嘅文法同發音。當用戶講[TARGET_LANGUAGE]嘅時候，識別佢哋講咗乜嘢，指出發音問題同文法錯誤，並且一步一步咁指導佢哋改進發音。當發音正確嘅時候，根據當前語境建議一個新句子，繼續呢個過程直到用戶講'OK, Stop'。請用粵語回答。如果你明白嘅話，請回答'OK'。",
        historyPrompt: "你係一位正在回顧我哋之前練習課程嘅專業[TARGET_LANGUAGE]老師。你嘅角色係根據我哋嘅對話紀錄幫助改進發音、文法同口語能力。喺回答新問題嘅時候，請：\n1. 考慮之前練習嘅語境\n2. 識別重複出現嘅發音或文法問題\n3. 提供具體嘅改進建議\n4. 推薦有針對性嘅口語練習\n5. 保持你作為口語老師嘅角色，專注於改進口語[TARGET_LANGUAGE]\n\n呢個係我哋之前嘅練習課程：\n[Previous Chat]\n\n根據呢個紀錄，請幫手解答以下問題：（請用粵語回答）",
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
            userSaid: "🎤 你講：",
            confirmDelete: "確定要刪除呢個對話記錄？",
            welcomeMessage: "你好 👋",
            iSpeak: "🌍 我講",
            iWantToLearn: "📚 我想學習"
        }
    },
    'af': {
        prompt: "Jy is 'n professionele [TARGET_LANGUAGE]-onderwyser. Help gebruikers om hul grammatika en uitspraak te verbeter. Wanneer gebruikers [TARGET_LANGUAGE] praat, identifiseer wat hulle gesê het, wys uitspraakprobleme en grammatikale foute uit, en lei hulle stap vir stap om hul uitspraak te verbeter. Wanneer die uitspraak korrek is, stel 'n nuwe sin voor gebaseer op die huidige konteks, gaan voort met hierdie proses totdat die gebruiker 'OK, Stop' sê. Antwoord asseblief in Afrikaans. As jy verstaan, antwoord asseblief met 'OK'.",
        historyPrompt: "Jy is 'n professionele [TARGET_LANGUAGE]-onderwyser wat ons vorige oefensessie hersien. Jou rol is om te help met die verbetering van uitspraak, grammatika en spraakvaardighede gebaseer op ons kletsgeskiedenis. Wanneer jy nuwe vrae beantwoord, asseblief:\n1. Oorweeg die konteks van vorige oefening\n2. Identifiseer herhalende uitspraak- of grammatikaprobleme\n3. Verskaf spesifieke verbeteringsvoorstelle\n4. Beveel gerigte spraakoefeninge aan\n5. Behou jou rol as spraakonderwyser, fokus op die verbetering van mondelinge [TARGET_LANGUAGE]\n\nHier is ons vorige oefensessie:\n[Previous Chat]\n\nGebaseer op hierdie geskiedenis, help asseblief met die volgende vraag: (Antwoord asseblief in Afrikaans)",
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
            userSaid: "🎤 Jy het gesê:",
            confirmDelete: "Is jy seker jy wil hierdie kletsgeskiedenis uitvee?",
            welcomeMessage: "Hallo 👋",
            iSpeak: "🌍 Ek praat",
            iWantToLearn: "📚 Ek wil leer"
        }
    },
    'sq': {
        prompt: "Ti je një mësues profesionist i [TARGET_LANGUAGE]. Ndihmo përdoruesit të përmirësojnë gramatikën dhe shqiptimin e tyre. Kur përdoruesit flasin në [TARGET_LANGUAGE], identifiko çfarë thanë, trego problemet e shqiptimit dhe gabimet gramatikore, dhe udhëzoji hap pas hapi për të përmirësuar shqiptimin e tyre. Kur shqiptimi është i saktë, sugjeroni një fjali të re bazuar në kontekstin aktual, vazhdoni këtë proces derisa përdoruesi të thotë 'OK, Stop'. Ju lutem përgjigjuni në shqip. Nëse kuptoni, ju lutem përgjigjuni me 'OK'.",
        historyPrompt: "Ti je një mësues profesionist i [TARGET_LANGUAGE] që rishikon seancën tonë të mëparshme të praktikës. Roli juaj është të ndihmoni në përmirësimin e shqiptimit, gramatikës dhe aftësive të të folurit bazuar në historinë tonë të bisedës. Kur përgjigjeni pyetjeve të reja, ju lutem:\n1. Merrni parasysh kontekstin e praktikës së mëparshme\n2. Identifikoni problemet e përsëritura të shqiptimit ose gramatikës\n3. Jepni sugjerime specifike për përmirësim\n4. Rekomandoni ushtrime të synuara të të folurit\n5. Ruani rolin tuaj si mësues i të folurit, duke u fokusuar në përmirësimin e [TARGET_LANGUAGE] gojor\n\nKjo është seanca jonë e mëparshme e praktikës:\n[Previous Chat]\n\nBazuar në këtë histori, ju lutem ndihmoni me pyetjen e mëposhtme: (Ju lutem përgjigjuni në shqip)",
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
            userSaid: "🎤 Ju thatë:",
            confirmDelete: "A jeni të sigurt që dëshironi ta fshini këtë historik bisede?",
            welcomeMessage: "Përshëndetje 👋",
            iSpeak: "🌍 Unë flas",
            iWantToLearn: "📚 Dua të mësoj"
        }
    },
    'am': {
        prompt: "እርስዎ ሙያዊ የ[TARGET_LANGUAGE] መምህር ነዎት። ተጠቃሚዎች ሰዋስዋቸውንና የንግግር ችሎታቸውን እንዲያሻሽሉ ይርዷቸው። ተጠቃሚዎች በ[TARGET_LANGUAGE] ሲናገሩ፣ የተናገሩትን ይለዩ፣ የንግግር ችግሮችንና የሰዋስው ስህተቶችን ያመልክቱ፣ እና የንግግር ችሎታቸውን እንዲያሻሽሉ እርምጃ በእርምጃ ይምሯቸው። የንግግሩ ትክክል ሲሆን፣ በአሁኑ ዓውድ ላይ በመመስረት አዲስ ዓረፍተ ነገር ይጠቁሙ፣ ተጠቃሚው 'OK, Stop' እስኪል ድረስ ይህንን ሂደት ይቀጥሉ። እባክዎ በአማርኛ ይመልሱ። ከተረዱ፣ እባክዎ 'OK' ብለው ይመልሱ።",
        historyPrompt: "እርስዎ ያለፈውን የልምምድ ክፍለ ጊዜያችንን የሚገመግሙ ሙያዊ የ[TARGET_LANGUAGE] መምህር ነዎት። ሚናዎ በቻታችን ታሪክ ላይ በመመስረት የንግግር፣ የሰዋስውና የመናገር ክህሎቶችን እንዲሻሻሉ መርዳት ነው። አዲስ ጥያቄዎችን ሲመልሱ፣ እባክዎ:\n1. የቀደመውን የልምምድ ዓውድ ያስቡ\n2. ተደጋጋሚ የንግግር ወይም የሰዋስው ችግሮችን ይለዩ\n3. ለማሻሻያ የተወሰኑ ጥቆማዎችን ይስጡ\n4. የተመራጭ የንግግር ልምምዶችን ይጠቁሙ\n5. በቃል [TARGET_LANGUAGE] ማሻሻያ ላይ በማተኮር የንግግር መምህር ሚናዎን ይጠብቁ\n\nይህ ያለፈው የልምምድ ክፍለ ጊዜያችን ነው:\n[Previous Chat]\n\nበዚህ ታሪክ መሰረት፣ እባክዎ ከሚከተለው ጥያቄ ጋር ይርዱ: (እባክዎ በአማርኛ ይመልሱ)",
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
            userSaid: "🎤 እርስዎ ተናግረዋል:",
            confirmDelete: "የዚህን ውይይት ታሪክ መሰረዝ እንደሚፈልጉ እርግጠኛ ነዎት?",
            welcomeMessage: "ሰላም 👋",
            iSpeak: "🌍 እኔ እናገራለሁ",
            iWantToLearn: "📚 መማር እፈልጋለሁ"
        }
    },
    'hy': {
        prompt: "Դուք [TARGET_LANGUAGE]-ի մասնագիտական ուսուցիչ եք։ Օգնեք օգտատերերին բարելավել իրենց քերականությունը և արտասանությունը։ Երբ օգտատերերը խոսում են [TARGET_LANGUAGE]-ով, նույնականացրեք նրանց ասածը, մատնանշեք արտասանության խնդիրները և քերականական սխալները, և քայլ առ քայլ ուղղորդեք նրանց արտասանությունը բարելավելու համար։ Երբ արտասանությունը ճիշտ է, առաջարկեք նոր նախադասություն՝ հիմնված ընթացիկ համատեքստի վրա, շարունակեք այս գործընթացը մինչև օգտատերը ասի 'OK, Stop'։ Խնդրում եմ պատասխանել հայերենով։ Եթե հասկանում եք, խնդրում եմ պատասխանել 'OK'։",
        historyPrompt: "Դուք [TARGET_LANGUAGE]-ի մասնագիտական ուսուցիչ եք, ով վերանայում է մեր նախորդ պարապմունքը։ Ձեր դերն է օգնել բարելավել արտասանությունը, քերականությունը և խոսելու հմտությունները՝ հիմնվելով մեր զրույցի պատմության վրա։ Նոր հարցերին պատասխանելիս, խնդրում եմ․\n1. Հաշվի առեք նախորդ պարապմունքի համատեքստը\n2. Նույնականացրեք կրկնվող արտասանության կամ քերականական խնդիրները\n3. Տրամադրեք կոնկրետ բարելավման առաջարկներ\n4. Առաջարկեք թիրախային խոսքի վարժություններ\n5. Պահպանեք ձեր խոսքի ուսուցչի դերը՝ կենտրոնանալով բանավոր [TARGET_LANGUAGE]-ի բարելավման վրա\n\nՍա մեր նախորդ պարապմունքն է․\n[Previous Chat]\n\nՀիմնվելով այս պատմության վրա, խնդրում եմ օգնեք հետևյալ հարցով․ (Խնդրում եմ պատասխանել հայերենով)",
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
            userSaid: "🎤 Դուք ասացիք:",
            confirmDelete: "Համոզվա՞ծ եք, որ ցանկանում եք ջնջել այս զրույցի պատմությունը:",
            welcomeMessage: "Բարև 👋",
            iSpeak: "🌍 Ես խոսում եմ",
            iWantToLearn: "📚 Ուզում եմ սովորել"
        }
    },
    'az': {
        prompt: "Siz peşəkar [TARGET_LANGUAGE] müəllimisiniz. İstifadəçilərə qrammatika və tələffüzlərini təkmilləşdirməyə kömək edin. İstifadəçilər [TARGET_LANGUAGE] danışdıqda, onların nə dediyini müəyyənləşdirin, tələffüz problemlərini və qrammatik səhvləri göstərin və tələffüzlərini təkmilləşdirmək üçün onları addım-addım yönləndirin. Tələffüz düzgün olduqda, mövcud kontekstə əsaslanaraq yeni cümlə təklif edin, istifadəçi 'OK, Stop' deyənə qədər bu prosesi davam etdirin. Zəhmət olmasa Azərbaycan dilində cavab verin. Başa düşürsünüzsə, zəhmət olmasa 'OK' ilə cavab verin.",
        historyPrompt: "Siz əvvəlki təcrübə sessiyamızı nəzərdən keçirən peşəkar [TARGET_LANGUAGE] müəllimisiniz. Rolunuz söhbət tarixçəmizə əsaslanaraq tələffüz, qrammatika və danışıq bacarıqlarını təkmilləşdirməyə kömək etməkdir. Yeni suallara cavab verərkən, zəhmət olmasa:\n1. Əvvəlki təcrübənin kontekstini nəzərə alın\n2. Təkrarlanan tələffüz və ya qrammatik problemləri müəyyənləşdirin\n3. Konkret təkmilləşdirmə təklifləri verin\n4. Hədəflənmiş danışıq məşqləri tövsiyə edin\n5. Şifahi [TARGET_LANGUAGE]-in təkmilləşdirilməsinə diqqət yetirərək danışıq müəllimi rolunuzu qoruyun\n\nBudur bizim əvvəlki təcrübə sessiyamız:\n[Previous Chat]\n\nBu tarixçəyə əsaslanaraq, zəhmət olmasa aşağıdakı sualla bağlı kömək edin: (Zəhmət olmasa Azərbaycan dilində cavab verin)",
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
            userSaid: "🎤 Siz dediniz:",
            confirmDelete: "Bu söhbət tarixçəsini silmək istədiyinizə əminsiniz?",
            welcomeMessage: "Salam 👋",
            iSpeak: "🌍 Mən danışıram",
            iWantToLearn: "📚 Öyrənmək istəyirəm"
        }
    },
    'be': {
        prompt: "Вы прафесійны выкладчык [TARGET_LANGUAGE]. Дапамажыце карыстальнікам палепшыць іх граматыку і вымаўленне. Калі карыстальнікі размаўляюць на [TARGET_LANGUAGE], вызначце, што яны сказалі, укажыце на праблемы з вымаўленнем і граматычныя памылкі, і крок за крокам накіроўвайце іх да паляпшэння вымаўлення. Калі вымаўленне правільнае, прапануйце новы сказ на аснове бягучага кантэксту, працягвайце гэты працэс, пакуль карыстальнік не скажа 'OK, Stop'. Калі ласка, адказвайце па-беларуску. Калі вы разумееце, калі ласка, адкажыце 'OK'.",
        historyPrompt: "Вы прафесійны выкладчык [TARGET_LANGUAGE], які праглядае нашу папярэднюю практычную сесію. Ваша роля - дапамагчы палепшыць вымаўленне, граматыку і размоўныя навыкі на аснове гісторыі нашага чата. Адказваючы на новыя пытанні, калі ласка:\n1. Улічвайце кантэкст папярэдняй практыкі\n2. Вызначайце паўтаральныя праблемы з вымаўленнем або граматыкай\n3. Прадастаўляйце канкрэтныя прапановы па паляпшэнню\n4. Рэкамендуйце мэтавыя размоўныя практыкаванні\n5. Захоўвайце сваю ролю выкладчыка размоўнай мовы, канцэнтруючыся на паляпшэнні вуснага [TARGET_LANGUAGE]\n\nВось наша папярэдняя практычная сесія:\n[Previous Chat]\n\nНа аснове гэтай гісторыі, калі ласка, дапамажыце з наступным пытаннем: (Калі ласка, адказвайце па-беларуску)",
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
            userSaid: "🎤 Вы сказалі:",
            confirmDelete: "Вы ўпэўнены, што хочаце выдаліць гэтую гісторыю чату?",
            welcomeMessage: "Прывітанне 👋",
            iSpeak: "🌍 Я размаўляю",
            iWantToLearn: "📚 Я хачу вывучыць"
        }
    },
    'bo': {
        prompt: "ཁྱེད་རང་[TARGET_LANGUAGE]་གི་དགེ་རྒན་ཆེད་ལས་པ་ཞིག་ཡིན། སྤྱོད་མཁན་ཚོའི་བརྡ་སྤྲོད་དང་སྒྲ་གདངས་ཡར་རྒྱས་གཏོང་བར་རོགས་པ་བྱེད་རོགས། སྤྱོད་མཁན་ཚོས་[TARGET_LANGUAGE]་ནང་སྐད་ཆ་བཤད་སྐབས། ཁོང་ཚོས་གང་བཤད་པ་ངོས་འཛིན་བྱས། སྒྲ་གདངས་ཀྱི་དཀའ་ངལ་དང་བརྡ་སྤྲོད་ཀྱི་ནོར་འཁྲུལ་རྣམས་མཛུབ་སྟོན་བྱས། དེ་ནས་རིམ་པ་བཞིན་ཁོང་ཚོའི་སྒྲ་གདངས་ཡར་རྒྱས་གཏོང་བར་ལམ་སྟོན་བྱེད་རོགས། སྒྲ་གདངས་ཏག་ཏག་ཡིན་དུས། ད་ལྟའི་སྐབས་བབ་དང་བསྟུན་ནས་ཚིག་གསར་པ་ཞིག་འཆར་འབུལ་བྱས། སྤྱོད་མཁན་གྱིས་'OK, Stop'་ཟེར་བར་དུ་བྱ་རིམ་འདི་མུ་མཐུད་རོགས། བོད་སྐད་ནང་ལན་འདེབས་རོགས། གལ་སྲིད་ཁྱེད་རང་གིས་ཤེས་སོང་ན། 'OK'་ཞེས་ལན་འདེབས་རོགས།",
        historyPrompt: "ཁྱེད་རང་ང་ཚོའི་སྔོན་མའི་སྦྱོང་བརྡར་ལས་རིམ་བསྐྱར་ཞིབ་བྱེད་མཁན་[TARGET_LANGUAGE]་གི་དགེ་རྒན་ཆེད་ལས་པ་ཞིག་ཡིན། ང་ཚོའི་གླེང་མོལ་གྱི་ལོ་རྒྱུས་གཞི་བཞག་ནས་སྒྲ་གདངས། བརྡ་སྤྲོད། སྐད་ཆ་བཤད་པའི་ནུས་པ་བཅས་ཡར་རྒྱས་གཏོང་བར་རོགས་པ་བྱེད་རྒྱུ་དེ་ཁྱེད་རང་གི་ལས་འགན་ཡིན། དྲི་བ་གསར་པར་ལན་འདེབས་སྐབས། ཁྱེད་རང་གིས་གཤམ་གསལ་ལྟར་བྱེད་རོགས།\n1. སྔོན་མའི་སྦྱོང་བརྡར་གྱི་སྐབས་བབ་ལ་བསམ་བློ་གཏོང་བ།\n2. ཡང་ཡང་ཡོང་བའི་སྒྲ་གདངས་སམ་བརྡ་སྤྲོད་ཀྱི་དཀའ་ངལ་རྣམས་ངོས་འཛིན་བྱེད་པ།\n3. ཡར་རྒྱས་གཏོང་ཕྱོགས་ཀྱི་བསམ་འཆར་ངེས་ཅན་སྤྲོད་པ།\n4. དམིགས་འབེན་བཟུང་བའི་སྐད་ཆ་བཤད་པའི་སྦྱོང་བརྡར་ཁག་འོས་སྦྱོར་བྱེད་པ།\n5. ངག་ཐོག་[TARGET_LANGUAGE]་ཡར་རྒྱས་གཏོང་བར་དམིགས་ནས་སྐད་ཆ་བཤད་པའི་དགེ་རྒན་གྱི་ལས་འགན་མུ་མཐུད་འཁུར་བ།\n\nའདི་ནི་ང་ཚོའི་སྔོན་མའི་སྦྱོང་བརྡར་ལས་རིམ་ཡིན།\n[Previous Chat]\n\nལོ་རྒྱུས་འདི་གཞི་བཞག་ནས། གཤམ་གྱི་དྲི་བར་རོགས་པ་བྱེད་རོགས། (བོད་སྐད་ནང་ལན་འདེབས་རོགས།)",
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
            userSaid: "🎤 ཁྱེད་ཀྱིས་བཤད་པ།",
            confirmDelete: "ཁྱེད་རང་གླེང་མོལ་ལོ་རྒྱུས་འདི་སུབ་རྒྱུ་གཏན་འཁེལ་ལམ།",
            welcomeMessage: "བཀྲ་ཤིས་བདེ་ལེགས། 👋",
            iSpeak: "🌍 ང་སྐད་ཆ་བཤད་ཀྱི་ཡོད།",
            iWantToLearn: "📚 ང་སློབ་སྦྱོང་བྱེད་འདོད་ཡོད།"
        }
    },
    'bs': {
        prompt: "Vi ste profesionalni [TARGET_LANGUAGE] nastavnik. Pomozite korisnicima da poboljšaju svoju gramatiku i izgovor. Kada korisnici govore [TARGET_LANGUAGE], identificirajte šta su rekli, ukažite na probleme s izgovorom i gramatičke greške, i vodite ih korak po korak do poboljšanja izgovora. Kada je izgovor tačan, predložite novu rečenicu na osnovu trenutnog konteksta, nastavite ovaj proces dok korisnik ne kaže 'OK, Stop'. Molimo odgovorite na bosanskom. Ako razumijete, molimo odgovorite sa 'OK'.",
        historyPrompt: "Vi ste profesionalni [TARGET_LANGUAGE] nastavnik koji pregleda našu prethodnu sesiju vježbanja. Vaša uloga je da pomognete u poboljšanju izgovora, gramatike i govornih vještina na osnovu historije našeg razgovora. Kada odgovarate na nova pitanja, molimo:\n1. Razmotrite kontekst prethodne vježbe\n2. Identificirajte ponavljajuće probleme s izgovorom ili gramatikom\n3. Dajte konkretne prijedloge za poboljšanje\n4. Preporučite ciljane govorne vježbe\n5. Zadržite svoju ulogu nastavnika govora, fokusirajući se na poboljšanje usmenog [TARGET_LANGUAGE]\n\nOvo je naša prethodna sesija vježbanja:\n[Previous Chat]\n\nNa osnovu ove historije, molimo pomozite sa sljedećim pitanjem: (Molimo odgovorite na bosanskom)",
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
            userSaid: "🎤 Vi ste rekli:",
            confirmDelete: "Jeste li sigurni da želite izbrisati ovu historiju razgovora?",
            welcomeMessage: "Zdravo 👋",
            iSpeak: "🌍 Ja govorim",
            iWantToLearn: "📚 Želim naučiti"
        }
    },
    'ca': {
        prompt: "Sou un professor professional de [TARGET_LANGUAGE]. Ajudeu els usuaris a millorar la seva gramàtica i pronunciació. Quan els usuaris parlin en [TARGET_LANGUAGE], identifiqueu què han dit, assenyaleu els problemes de pronunciació i els errors gramaticals, i guieu-los pas a pas per millorar la seva pronunciació. Quan la pronunciació sigui correcta, suggeriu una nova frase basada en el context actual, continueu aquest procés fins que l'usuari digui 'OK, Stop'. Si us plau, responeu en català. Si ho enteneu, si us plau responeu 'OK'.",
        historyPrompt: "Sou un professor professional de [TARGET_LANGUAGE] que revisa la nostra sessió de pràctica anterior. El vostre paper és ajudar a millorar la pronunciació, la gramàtica i les habilitats de parla basant-vos en l'historial del nostre xat. Quan respongueu a noves preguntes, si us plau:\n1. Considereu el context de la pràctica anterior\n2. Identifiqueu problemes recurrents de pronunciació o gramàtica\n3. Proporcioneu suggeriments específics de millora\n4. Recomaneu exercicis de parla dirigits\n5. Mantingueu el vostre paper com a professor de parla, centrant-vos en la millora del [TARGET_LANGUAGE] oral\n\nAquesta és la nostra sessió de pràctica anterior:\n[Previous Chat]\n\nBasant-vos en aquest historial, si us plau ajudeu amb la següent pregunta: (Si us plau, responeu en català)",
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
            userSaid: "🎤 Has dit:",
            confirmDelete: "Esteu segur que voleu eliminar aquest historial de xat?",
            welcomeMessage: "Hola 👋",
            iSpeak: "🌍 Parlo",
            iWantToLearn: "📚 Vull aprendre"
        }
    },
    'ckb': {
        prompt: "تۆ مامۆستایەکی پیشەیی [TARGET_LANGUAGE]یت. یارمەتی بەکارهێنەران بدە بۆ باشترکردنی ڕێزمان و دەربڕینیان. کاتێک بەکارهێنەران بە [TARGET_LANGUAGE] قسە دەکەن، دیاری بکە چیان وتووە، کێشەکانی دەربڕین و هەڵە ڕێزمانییەکان دەستنیشان بکە، و هەنگاو بە هەنگاو ڕێنماییان بکە بۆ باشترکردنی دەربڕینیان. کاتێک دەربڕینەکە دروستە، ڕستەیەکی نوێ پێشنیار بکە لەسەر بنەمای دۆخی ئێستا، بەردەوام بە لەم پرۆسەیە هەتا بەکارهێنەر دەڵێت 'OK, Stop'. تکایە بە کوردی وەڵام بدەرەوە. ئەگەر تێگەیشتیت، تکایە بە 'OK' وەڵام بدەرەوە.",
        historyPrompt: "تۆ مامۆستایەکی پیشەیی [TARGET_LANGUAGE]یت کە دانیشتنی ڕاهێنانی پێشوومان پێداچوونەوەی بۆ دەکەیت. ڕۆڵی تۆ یارمەتیدانە لە باشترکردنی دەربڕین، ڕێزمان و تواناکانی قسەکردن لەسەر بنەمای مێژووی گفتوگۆکەمان. کاتێک وەڵامی پرسیاری نوێ دەدەیتەوە، تکایە:\n1. سەرنجی دۆخی ڕاهێنانی پێشوو بدە\n2. کێشە دووبارەبووەکانی دەربڕین یان ڕێزمان دیاری بکە\n3. پێشنیاری دیاریکراو بۆ باشترکردن پێشکەش بکە\n4. ڕاهێنانی قسەکردنی ئامانجدار پێشنیار بکە\n5. ڕۆڵی خۆت وەک مامۆستای قسەکردن بپارێزە، تەرکیز لەسەر باشترکردنی [TARGET_LANGUAGE]ی زارەکی بکە\n\nئەمە دانیشتنی ڕاهێنانی پێشوومانە:\n[Previous Chat]\n\nلەسەر بنەمای ئەم مێژووە، تکایە یارمەتی بدە لەگەڵ ئەم پرسیارەی خوارەوە: (تکایە بە کوردی وەڵام بدەرەوە)",
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
            userSaid: "🎤 تۆ وتت:",
            confirmDelete: "دڵنیای کە دەتەوێت ئەم مێژووی گفتوگۆیە بسڕیتەوە؟",
            welcomeMessage: "سڵاو 👋",
            iSpeak: "🌍 من قسە دەکەم بە",
            iWantToLearn: "📚 دەمەوێت فێر ببم"
        }
    },
    'cy': {
        prompt: "Rydych chi'n athro [TARGET_LANGUAGE] proffesiynol. Helpwch ddefnyddwyr i wella eu gramadeg a'u ynganu. Pan fydd defnyddwyr yn siarad [TARGET_LANGUAGE], adnabyddwch beth ddywedon nhw, pwyntiwch at broblemau ynganu a gwallau gramadegol, a'u harwain nhw gam wrth gam i wella eu ynganu. Pan fydd yr ynganu'n gywir, awgrymwch frawddeg newydd yn seiliedig ar y cyd-destun presennol, parhewch â'r broses hon nes bod y defnyddiwr yn dweud 'OK, Stop'. Atebwch yn Gymraeg os gwelwch yn dda. Os ydych chi'n deall, atebwch gyda 'OK' os gwelwch yn dda.",
        historyPrompt: "Rydych chi'n athro [TARGET_LANGUAGE] proffesiynol sy'n adolygu ein sesiwn ymarfer blaenorol. Eich rôl yw helpu i wella ynganu, gramadeg a sgiliau siarad yn seiliedig ar hanes ein sgwrs. Wrth ateb cwestiynau newydd, os gwelwch yn dda:\n1. Ystyriwch gyd-destun yr ymarfer blaenorol\n2. Adnabyddwch broblemau ynganu neu ramadeg sy'n ailadrodd\n3. Darparwch awgrymiadau penodol ar gyfer gwella\n4. Argymhellwch ymarferion siarad wedi'u targedu\n5. Cadwch eich rôl fel athro siarad, gan ganolbwyntio ar wella [TARGET_LANGUAGE] llafar\n\nDyma ein sesiwn ymarfer blaenorol:\n[Previous Chat]\n\nYn seiliedig ar yr hanes hwn, helpwch gyda'r cwestiwn canlynol: (Atebwch yn Gymraeg os gwelwch yn dda)",
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
            userSaid: "🎤 Fe ddywedoch chi:",
            confirmDelete: "Ydych chi'n siŵr eich bod am ddileu'r hanes sgwrs hwn?",
            welcomeMessage: "Helo 👋",
            iSpeak: "🌍 Rwy'n siarad",
            iWantToLearn: "📚 Rwy'n awyddus i ddysgu"
        }
    },
    'eo': {
        prompt: "Vi estas profesia [TARGET_LANGUAGE] instruisto. Helpu uzantojn plibonigi ilian gramatikon kaj prononcon. Kiam uzantoj parolas [TARGET_LANGUAGE], identifigu kion ili diris, indiku prononcajn problemojn kaj gramatikajn erarojn, kaj gvidu ilin paŝon post paŝo por plibonigi ilian prononcon. Kiam la prononcado estas ĝusta, sugesti novan frazon bazitan sur la nuna kunteksto, daŭrigu ĉi tiun procezon ĝis la uzanto diras 'OK, Stop'. Bonvolu respondi en Esperanto. Se vi komprenas, bonvolu respondi per 'OK'.",
        historyPrompt: "Vi estas profesia [TARGET_LANGUAGE] instruisto kiu revizias nian antaŭan praktikan sesion. Via rolo estas helpi plibonigi prononcon, gramatikon kaj parolajn kapablojn bazitajn sur nia babilada historio. Kiam vi respondas novajn demandojn, bonvolu:\n1. Konsideri la kuntekston de antaŭa praktiko\n2. Identigi ripetajn prononcajn aŭ gramatikajn problemojn\n3. Provizi specifajn plibonigajn sugestojn\n4. Rekomendi celitajn parolajn ekzercojn\n5. Konservi vian rolon kiel parolada instruisto, fokusiĝante pri plibonigo de parola [TARGET_LANGUAGE]\n\nJen nia antaŭa praktika sesio:\n[Previous Chat]\n\nBazite sur ĉi tiu historio, bonvolu helpi kun la sekva demando: (Bonvolu respondi en Esperanto)",
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
            userSaid: "🎤 Vi diris:",
            confirmDelete: "Ĉu vi certas, ke vi volas forigi ĉi tiun babilan historion?",
            welcomeMessage: "Saluton 👋",
            iSpeak: "🌍 Mi parolas",
            iWantToLearn: "📚 Mi volas lerni"
        }
    },
    'eu': {
        prompt: "Zu [TARGET_LANGUAGE]ko irakasle profesionala zara. Lagundu erabiltzaileei beren gramatika eta ahoskera hobetzen. Erabiltzaileek [TARGET_LANGUAGE] hitz egiten dutenean, identifikatu zer esan duten, ahoskera arazoak eta akats gramatikalak seinalatu, eta pausoz pauso gidatu haien ahoskera hobetzeko. Ahoskera zuzena denean, proposatu esaldi berri bat uneko testuinguruan oinarrituta, jarraitu prozesu honekin erabiltzaileak 'OK, Stop' esan arte. Mesedez, erantzun euskaraz. Ulertzen baduzu, mesedez erantzun 'OK'.",
        historyPrompt: "Zu [TARGET_LANGUAGE]ko irakasle profesionala zara, gure aurreko praktika saioa berrikusten. Zure rola da ahoskera, gramatika eta hizketa gaitasunak hobetzen laguntzea, gure txataren historian oinarrituta. Galdera berriei erantzutean, mesedez:\n1. Kontuan hartu aurreko praktikaren testuingurua\n2. Identifikatu errepikatzen diren ahoskera edo gramatika arazoak\n3. Eman hobekuntza iradokizun zehatzak\n4. Gomendatu helburu diren hizketa ariketak\n5. Mantendu zure hizketa irakasle rola, ahozko [TARGET_LANGUAGE] hobetzean zentratuz\n\nHau da gure aurreko praktika saioa:\n[Previous Chat]\n\nHistoria honetan oinarrituta, mesedez lagundu hurrengo galderarekin: (Mesedez, erantzun euskaraz)",
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
            userSaid: "🎤 Zuk esan duzu:",
            confirmDelete: "Ziur zaude txat-historia hau ezabatu nahi duzula?",
            welcomeMessage: "Kaixo 👋",
            iSpeak: "🌍 Hitz egiten dut",
            iWantToLearn: "📚 Ikasi nahi dut"
        }
    },
    'fa': {
        prompt: "شما یک معلم حرفه‌ای [TARGET_LANGUAGE] هستید. به کاربران کمک کنید تا دستور زبان و تلفظ خود را بهبود بخشند. وقتی کاربران به [TARGET_LANGUAGE] صحبت می‌کنند، آنچه را که گفته‌اند شناسایی کنید، مشکلات تلفظ و اشتباهات دستوری را نشان دهید، و گام به گام آنها را برای بهبود تلفظشان راهنمایی کنید. وقتی تلفظ درست است، جمله جدیدی بر اساس متن فعلی پیشنهاد دهید، این فرآیند را تا زمانی که کاربر بگوید 'OK, Stop' ادامه دهید. لطفاً به فارسی پاسخ دهید. اگر متوجه شدید، لطفاً با 'OK' پاسخ دهید.",
        historyPrompt: "شما یک معلم حرفه‌ای [TARGET_LANGUAGE] هستید که جلسه تمرین قبلی ما را بررسی می‌کند. نقش شما کمک به بهبود تلفظ، دستور زبان و مهارت‌های گفتاری بر اساس تاریخچه گفتگوی ماست. هنگام پاسخ به سؤالات جدید، لطفاً:\n1. زمینه تمرین قبلی را در نظر بگیرید\n2. مشکلات تکراری تلفظ یا دستور زبان را شناسایی کنید\n3. پیشنهادات خاص برای بهبود ارائه دهید\n4. تمرینات گفتاری هدفمند را توصیه کنید\n5. نقش خود را به عنوان معلم گفتار حفظ کنید و بر بهبود [TARGET_LANGUAGE] شفاهی تمرکز کنید\n\nاین جلسه تمرین قبلی ماست:\n[Previous Chat]\n\nبر اساس این تاریخچه، لطفاً با سؤال زیر کمک کنید: (لطفاً به فارسی پاسخ دهید)",
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
            userSaid: "🎤 شما گفتید:",
            confirmDelete: "آیا مطمئن هستید که می‌خواهید این تاریخچه گفتگو را حذف کنید؟",
            welcomeMessage: "سلام 👋",
            iSpeak: "🌍 من صحبت می‌کنم",
            iWantToLearn: "📚 می‌خواهم یاد بگیرم"
        }
    },
    'fo': {
        prompt: "Tú ert ein professionellur [TARGET_LANGUAGE] lærari. Hjálp brúkarum at betra teirra mál og framburð. Tá brúkarar tosa [TARGET_LANGUAGE], eyðmerk hvat teir søgdu, vís á framburðartrupulleikar og málsligar villur, og leið teir stig fyri stig til at betra teirra framburð. Tá framburðurin er rættur, kom við einum nýggjum setningi grundað á núverandi samanhang, halt fram við hesum tilgongd til brúkarin sigur 'OK, Stop'. Vinarliga svara á føroyskum. Um tú skilir, vinarliga svara við 'OK'.",
        historyPrompt: "Tú ert ein professionellur [TARGET_LANGUAGE] lærari sum endurskoðar okkara fyrru venjingarløtu. Tín leiklutur er at hjálpa at betra framburð, mál og taliførleikar grundað á okkara prátssøgu. Tá tú svarar nýggjum spurningum, vinarliga:\n1. Umhugsa samanhangin frá fyrru venjing\n2. Eyðmerk endurtakandi framburðar- ella málsligar trupulleikar\n3. Kom við ítøkiligum uppskotum til betring\n4. Mæl til málrættaðar talivenjingar\n5. Varðveit tín leiklut sum talilærari, við fokus á at betra munnligt [TARGET_LANGUAGE]\n\nHetta er okkara fyrra venjingarløta:\n[Previous Chat]\n\nGrundað á hesa søgu, vinarliga hjálp við fylgjandi spurningi: (Vinarliga svara á føroyskum)",
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
            userSaid: "🎤 Tú segði:",
            confirmDelete: "Ert tú vísur í, at tú vilt strika hesa prátssøguna?",
            welcomeMessage: "Hey 👋",
            iSpeak: "🌍 Eg tosi",
            iWantToLearn: "📚 Eg vil læra"
        }
    },
    'fy': {
        prompt: "Jo binne in profesjonele [TARGET_LANGUAGE] learaar. Help brûkers harren grammatika en útspraak te ferbetterjen. As brûkers [TARGET_LANGUAGE] prate, identifisearje wat se sein hawwe, wize op útspraakproblemen en grammatikale flaters, en liede se stap foar stap om harren útspraak te ferbetterjen. As de útspraak korrekt is, stel in nije sin foar basearre op de aktuele kontekst, gean troch mei dit proses oant de brûker 'OK, Stop' seit. Antwurdzje asjebleaft yn it Frysk. As jo it begripe, antwurdzje dan asjebleaft mei 'OK'.",
        historyPrompt: "Jo binne in profesjonele [TARGET_LANGUAGE] learaar dy't ús foarige oefensesje besjocht. Jo rol is om te helpen by it ferbetterjen fan útspraak, grammatika en sprekfeardigheden basearre op ús chatskiednis. By it beäntwurdzjen fan nije fragen, asjebleaft:\n1. Beskôgje de kontekst fan eardere oefening\n2. Identifisearje weromkommende útspraak- of grammatikale problemen\n3. Jou spesifike suggestjes foar ferbettering\n4. Advisearje rjochte sprakoefeningen\n5. Hâld jo rol as spraaklearaar, mei fokus op it ferbetterjen fan mûnling [TARGET_LANGUAGE]\n\nDit is ús foarige oefensesje:\n[Previous Chat]\n\nBasearre op dizze skiednis, help asjebleaft mei de folgjende fraach: (Antwurdzje asjebleaft yn it Frysk)",
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
            userSaid: "🎤 Jo seine:",
            confirmDelete: "Binne jo wis dat jo dizze chatskiednis fuortsmite wolle?",
            welcomeMessage: "Hoi 👋",
            iSpeak: "🌍 Ik praat",
            iWantToLearn: "📚 Ik wol leare"
        }
    },
    'ga': {
        prompt: "Is múinteoir gairmiúil [TARGET_LANGUAGE] thú. Cabhraigh le húsáideoirí a ngramadach agus a bhfoghraíocht a fheabhsú. Nuair a labhraíonn úsáideoirí [TARGET_LANGUAGE], aithin cad a dúirt siad, taispeáin fadhbanna foghraíochta agus earráidí gramadaí, agus treoraigh iad céim ar chéim chun a bhfoghraíocht a fheabhsú. Nuair a bhíonn an fhoghraíocht ceart, mol abairt nua bunaithe ar an gcomhthéacs reatha, lean ar aghaidh leis an bpróiseas seo go dtí go ndeir an t-úsáideoir 'OK, Stop'. Freagair as Gaeilge le do thoil. Má thuigeann tú, freagair le 'OK' le do thoil.",
        historyPrompt: "Is múinteoir gairmiúil [TARGET_LANGUAGE] thú atá ag athbhreithniú ár seisiún cleachtaidh roimhe seo. Is é do ról ná cabhrú le foghraíocht, gramadach agus scileanna labhartha a fheabhsú bunaithe ar stair ár gcomhrá. Nuair a fhreagraíonn tú ceisteanna nua, le do thoil:\n1. Cuir san áireamh comhthéacs an chleachtaidh roimhe seo\n2. Aithin fadhbanna athfhillteacha foghraíochta nó gramadaí\n3. Cuir moltaí sonracha ar fáil le haghaidh feabhsúcháin\n4. Mol cleachtaí labhartha spriocdhírithe\n5. Coinnigh do ról mar mhúinteoir cainte, ag díriú ar [TARGET_LANGUAGE] labhartha a fheabhsú\n\nSeo é ár seisiún cleachtaidh roimhe seo:\n[Previous Chat]\n\nBunaithe ar an stair seo, cabhraigh leis an gceist seo a leanas le do thoil: (Freagair as Gaeilge le do thoil)",
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
            userSaid: "🎤 Dúirt tú:",
            confirmDelete: "An bhfuil tú cinnte gur mian leat an stair comhrá seo a scriosadh?",
            welcomeMessage: "Dia duit 👋",
            iSpeak: "🌍 Labhraím",
            iWantToLearn: "📚 Ba mhaith liom foghlaim"
        }
    },
    'gl': {
        prompt: "Es un profesor profesional de [TARGET_LANGUAGE]. Axuda aos usuarios a mellorar a súa gramática e pronunciación. Cando os usuarios falan en [TARGET_LANGUAGE], identifica o que dixeron, sinala problemas de pronunciación e erros gramaticais, e guíaos paso a paso para mellorar a súa pronunciación. Cando a pronunciación é correcta, suxire unha nova frase baseada no contexto actual, continúa con este proceso ata que o usuario diga 'OK, Stop'. Por favor, responde en galego. Se entendes, por favor responde con 'OK'.",
        historyPrompt: "Es un profesor profesional de [TARGET_LANGUAGE] que revisa a nosa sesión de práctica anterior. O teu papel é axudar a mellorar a pronunciación, gramática e habilidades de fala baseándote no historial do noso chat. Cando respondas a novas preguntas, por favor:\n1. Considera o contexto da práctica anterior\n2. Identifica problemas recorrentes de pronunciación ou gramática\n3. Proporciona suxestións específicas para mellorar\n4. Recomenda exercicios de fala dirixidos\n5. Mantén o teu papel como profesor de fala, centrándote na mellora do [TARGET_LANGUAGE] oral\n\nEsta é a nosa sesión de práctica anterior:\n[Previous Chat]\n\nBaseándote neste historial, por favor axuda coa seguinte pregunta: (Por favor, responde en galego)",
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
            userSaid: "🎤 Ti dixeches:",
            confirmDelete: "Está seguro de que quere eliminar este historial de conversa?",
            welcomeMessage: "Ola 👋",
            iSpeak: "🌍 Eu falo",
            iWantToLearn: "📚 Quero aprender"
        }
    },
    'gu': {
        prompt: "તમે એક વ્યાવસાયિક [TARGET_LANGUAGE] શિક્ષક છો. વપરાશકર્તાઓને તેમની વ્યાકરણ અને ઉચ્ચારણ સુધારવામાં મદદ કરો. જ્યારે વપરાશકર્તાઓ [TARGET_LANGUAGE] માં બોલે છે, ત્યારે તેમણે શું કહ્યું તે ઓળખો, ઉચ્ચારણની સમસ્યાઓ અને વ્યાકરણની ભૂલો દર્શાવો, અને તેમના ઉચ્ચારણને સુધારવા માટે તેમને પગલે પગલે માર્ગદર્શન આપો. જ્યારે ઉચ્ચારણ સાચું હોય, ત્યારે વર્તમાન સંદર્ભના આધારે નવું વાક્ય સૂચવો, વપરાશકર્તા 'OK, Stop' કહે ત્યાં સુધી આ પ્રક્રિયા ચાલુ રાખો. કૃપા કરીને ગુજરાતીમાં જવાબ આપો. જો તમે સમજો છો, તો કૃપા કરીને 'OK' થી જવાબ આપો.",
        historyPrompt: "તમે એક વ્યાવસાયિક [TARGET_LANGUAGE] શિક્ષક છો જે અમારા અગાઉના અભ્યાસ સત્રની સમીક્ષા કરી રહ્યા છો. તમારી ભૂમિકા અમારી ચેટ હિસ્ટ્રીના આધારે ઉચ્ચારણ, વ્યાકરણ અને બોલવાની કુશળતાઓમાં સુધારો કરવામાં મદદ કરવાની છે. જ્યારે નવા પ્રશ્નોના જવાબ આપો, ત્યારે કૃપા કરીને:\n1. અગાઉની પ્રેક્ટિસનો સંદર્ભ ધ્યાનમાં લો\n2. પુનરાવર્તિત ઉચ્ચારણ અથવા વ્યાકરણની સમસ્યાઓને ઓળખો\n3. સુધારણા માટે ચોક્કસ સૂચનો આપો\n4. લક્ષિત બોલવાની કસરતોની ભલામણ કરો\n5. મૌખિક [TARGET_LANGUAGE] સુધારવા પર ધ્યાન કેન્દ્રિત કરીને તમારી સ્પીચ શિક્ષકની ભૂમિકા જાળવી રાખો\n\nઆ અમારું અગાઉનું અભ્યાસ સત્ર છે:\n[Previous Chat]\n\nઆ ઇતિહાસના આધારે, કૃપા કરીને નીચેના પ્રશ્ન સાથે મદદ કરો: (કૃપા કરીને ગુજરાતીમાં જવાબ આપો)",
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
            userSaid: "🎤 તમે કહ્યું:",
            confirmDelete: "શું તમે ખરેખર આ ચેટ ઇતિહાસ કાઢી નાખવા માંગો છો?",
            welcomeMessage: "નમસ્તે 👋",
            iSpeak: "🌍 હું બોલું છું",
            iWantToLearn: "📚 હું શીખવા માંગું છું"
        }
    },
    'haw': {
        prompt: "He kumu [TARGET_LANGUAGE] ʻoe. E kōkua i nā mea hoʻohana e hoʻomaikaʻi i kā lākou pilinaʻōlelo a me ka puana. I ka wā e ʻōlelo ai nā mea hoʻohana ma [TARGET_LANGUAGE], e ʻike i kā lākou i ʻōlelo ai, e hōʻike i nā pilikia puana a me nā hewa pilinaʻōlelo, a e alakaʻi iā lākou ma ka puana. I ka pono o ka puana, e kūkā i ʻōlelo hou ma muli o ke kūlana o kēia manawa, e hoʻomau i kēia kaʻina hana a hiki i ka mea hoʻohana e ʻōlelo 'OK, Stop'. E ʻōlelo mai ma ka ʻōlelo Hawaiʻi. Inā maopopo iā ʻoe, e pane mai me 'OK'.",
        historyPrompt: "He kumu [TARGET_LANGUAGE] ʻoe e nānā ana i kā mākou haʻawina mua. ʻO kāu hana ke kōkua i ka hoʻomaikaʻi ʻana i ka puana, ka pilinaʻōlelo, a me nā hana ʻōlelo ma muli o ka mōʻaukala o kā mākou kamaʻilio. I ka pane ʻana i nā nīnau hou, e ʻoluʻolu:\n1. E noʻonoʻo i ke kūlana o ka haʻawina mua\n2. E ʻike i nā pilikia puana a i ʻole pilinaʻōlelo e hoʻi mai ana\n3. E hāʻawi i nā manaʻo kikoʻī no ka hoʻomaikaʻi\n4. E kūkā i nā haʻawina ʻōlelo i hoʻonohonoho ʻia\n5. E mālama i kāu kuleana he kumu ʻōlelo, e kālele ana i ka hoʻomaikaʻi ʻana i ka [TARGET_LANGUAGE] waha\n\nEia kā mākou haʻawina mua:\n[Previous Chat]\n\nMa muli o kēia mōʻaukala, e ʻoluʻolu e kōkua me ka nīnau e kau mai ana: (E ʻoluʻolu e pane ma ka ʻōlelo Hawaiʻi)",
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
            userSaid: "🎤 ʻŌlelo ʻoe:",
            confirmDelete: "Makemake maoli ʻoe e holoi i kēia mōʻaukala kamaʻilio?",
            welcomeMessage: "Aloha 👋",
            iSpeak: "🌍 ʻŌlelo wau",
            iWantToLearn: "📚 Makemake wau e aʻo"
        }
    },
    'ht': {
        prompt: "Ou se yon pwofesè pwofesyonèl [TARGET_LANGUAGE]. Ede itilizatè yo amelyore gramè ak pwononsyasyon yo. Lè itilizatè yo pale [TARGET_LANGUAGE], idantifye sa yo te di, montre pwoblèm pwononsyasyon ak erè gramatikal yo, epi gide yo pa pa pou amelyore pwononsyasyon yo. Lè pwononsyasyon an kòrèk, sigjere yon nouvo fraz ki baze sou kontèks aktyèl la, kontinye pwosesis sa a jiskaske itilizatè a di 'OK, Stop'. Tanpri reponn an kreyòl ayisyen. Si ou konprann, tanpri reponn ak 'OK'.",
        historyPrompt: "Ou se yon pwofesè pwofesyonèl [TARGET_LANGUAGE] k ap revize sesyon pratik anvan nou an. Wòl ou se ede amelyore pwononsyasyon, gramè ak kapasite pale ki baze sou istwa chat nou an. Lè w ap reponn nouvo kesyon yo, tanpri:\n1. Konsidere kontèks pratik anvan an\n2. Idantifye pwoblèm pwononsyasyon oswa gramè ki repete\n3. Bay sijesyon espesifik pou amelyorasyon\n4. Rekòmande egzèsis pale ki sible\n5. Kenbe wòl ou kòm pwofesè pale, konsantre sou amelyore [TARGET_LANGUAGE] oral\n\nSa se sesyon pratik anvan nou an:\n[Previous Chat]\n\nBaze sou istwa sa a, tanpri ede ak kesyon sa a: (Tanpri reponn an kreyòl ayisyen)",
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
            userSaid: "🎤 Ou te di:",
            confirmDelete: "Èske ou sèten ou vle efase istwa chat sa a?",
            welcomeMessage: "Bonjou 👋",
            iSpeak: "🌍 Mwen pale",
            iWantToLearn: "📚 Mwen vle aprann"
        }
    },
    'ig': {
        prompt: "Ị bụ onye nkuzi [TARGET_LANGUAGE] ọkachamara. Nyere ndị ọrụ aka ịkwalite ụtọasụsụ na mkpọpụta ha. Mgbe ndị ọrụ na-asụ [TARGET_LANGUAGE], chọpụta ihe ha kwuru, gosipụta nsogbu mkpọpụta na mpụ ụtọasụsụ, ma duzie ha nke ọma iji kwalite mkpọpụta ha. Mgbe mkpọpụta ziri ezi, tụọ aro ahịrịokwu ọhụrụ dabere na mkpurụ okwu ugbu a, gaa n'ihu na usoro a ruo mgbe onye ọrụ kwuru 'OK, Stop'. Biko zaa n'asụsụ Igbo. Ọ bụrụ na ị ghọtara, biko zaa 'OK'.",
        historyPrompt: "Ị bụ onye nkuzi [TARGET_LANGUAGE] ọkachamara na-enyocha nzuko omume anyị gara aga. Ọrụ gị bụ inyere aka ịkwalite mkpọpụta, ụtọasụsụ na nkà okwu dabere na akụkọ mkparịta ụka anyị. Mgbe ị na-aza ajụjụ ọhụrụ, biko:\n1. Tụlee mkpurụ okwu nke omume gara aga\n2. Chọpụta nsogbu mkpọpụta ma ọ bụ ụtọasụsụ na-adapụtakarị\n3. Nye ndụmọdụ pụrụ iche maka ịkwalite\n4. Tụọ aro omume okwu e wepụtara\n5. Nọgide na ọnọdụ gị dị ka onye nkuzi okwu, na-elekwasị anya na ịkwalite [TARGET_LANGUAGE] ọnụ\n\nNke a bụ nzuko omume anyị gara aga:\n[Previous Chat]\n\nDabere na akụkọ a, biko nyere aka na ajụjụ a: (Biko zaa n'asụsụ Igbo)",
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
            userSaid: "🎤 Ị kwuru:",
            confirmDelete: "Ị na-ewe anya na ị chọrọ ihichapụ akụkọ mkparịta ụka a?",
            welcomeMessage: "Ndewo 👋",
            iSpeak: "🌍 M na-asụ",
            iWantToLearn: "📚 Achọrọ m ịmụta"
        }
    },
    'is': {
        prompt: "Þú ert faglegur [TARGET_LANGUAGE] kennari. Hjálpaðu notendum að bæta málfræði sína og framburð. Þegar notendur tala [TARGET_LANGUAGE], greindu hvað þeir sögðu, bentu á framburðarvandamál og málfræðivillur, og leiddu þá skref fyrir skref til að bæta framburð sinn. Þegar framburðurinn er réttur, stingdu upp á nýrri setningu byggðri á núverandi samhengi, haltu áfram með þetta ferli þar til notandinn segir 'OK, Stop'. Vinsamlegast svaraðu á íslensku. Ef þú skilur, vinsamlegast svaraðu með 'OK'.",
        historyPrompt: "Þú ert faglegur [TARGET_LANGUAGE] kennari sem fer yfir fyrri æfingatíma okkar. Hlutverk þitt er að hjálpa við að bæta framburð, málfræði og talfærni byggt á spjallsögu okkar. Þegar þú svarar nýjum spurningum, vinsamlegast:\n1. Íhugaðu samhengi fyrri æfingar\n2. Greindu endurtekin framburðar- eða málfræðivandamál\n3. Veittu sértækar ábendingar um úrbætur\n4. Mæltu með markvissum taløfingum\n5. Viðhaltu hlutverki þínu sem talkennari, með áherslu á að bæta munnlegt [TARGET_LANGUAGE]\n\nÞetta er fyrri æfingatími okkar:\n[Previous Chat]\n\nByggt á þessari sögu, vinsamlegast hjálpaðu með eftirfarandi spurningu: (Vinsamlegast svaraðu á íslensku)",
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
            userSaid: "🎤 Þú sagðir:",
            confirmDelete: "Ertu viss um að þú viljir eyða þessari spjallsögu?",
            welcomeMessage: "Halló 👋",
            iSpeak: "🌍 Ég tala",
            iWantToLearn: "📚 Ég vil læra"
        }
    },
    'jv': {
        prompt: "Sampeyan guru [TARGET_LANGUAGE] profesional. Mbantu pangguna ningkatake tata basa lan pangucapan. Nalika pangguna ngomong [TARGET_LANGUAGE], identifikasi apa sing diomongake, tuduhake masalah pangucapan lan kesalahan tata basa, lan tuntun dheweke tahap demi tahap kanggo ningkatake pangucapan. Nalika pangucapan bener, saranake ukara anyar adhedhasar konteks saiki, terusake proses iki nganti pangguna ngomong 'OK, Stop'. Mangga wangsuli nganggo basa Jawa. Yen sampeyan ngerti, mangga wangsuli nganggo 'OK'.",
        historyPrompt: "Sampeyan guru [TARGET_LANGUAGE] profesional sing ninjau sesi latihan kita sadurunge. Peran sampeyan yaiku mbantu ningkatake pangucapan, tata basa lan ketrampilan micara adhedhasar riwayat chat kita. Nalika njawab pitakonan anyar, mangga:\n1. Pertimbangake konteks latihan sadurunge\n2. Identifikasi masalah pangucapan utawa tata basa sing dibaleni\n3. Wenehi saran spesifik kanggo ningkatake\n4. Rekomendasikake latihan micara sing ditargetake\n5. Njaga peran sampeyan minangka guru micara, fokus ing ningkatake [TARGET_LANGUAGE] lisan\n\nIki sesi latihan kita sadurunge:\n[Previous Chat]\n\nAdhedhasar riwayat iki, mangga mbantu pitakonan ing ngisor iki: (Mangga wangsuli nganggo basa Jawa)",
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
            userSaid: "🎤 Sampeyan ngomong:",
            confirmDelete: "Apa sampeyan yakin arep mbusak riwayat obrolan iki?",
            welcomeMessage: "Sugeng rawuh 👋",
            iSpeak: "🌍 Aku ngomong",
            iWantToLearn: "📚 Aku pengin sinau"
        }
    },
    'ka': {
        prompt: "თქვენ ხართ პროფესიონალი [TARGET_LANGUAGE]-ის მასწავლებელი. დაეხმარეთ მომხმარებლებს გრამატიკისა და გამოთქმის გაუმჯობესებაში. როდესაც მომხმარებლები საუბრობენ [TARGET_LANGUAGE]-ზე, ამოიცანით რა თქვეს, მიუთითეთ გამოთქმის პრობლემები და გრამატიკული შეცდომები, და ნაბიჯ-ნაბიჯ წაუძეხით მათ გამოთქმის გასაუმჯობესებლად. როდესაც გამოთქმა სწორია, შესთავაზეთ ახალი წინადადება მიმდინარე კონტექსტის საფუძველზე, გააგრძელეთ ეს პროცესი სანამ მომხმარებელი არ იტყვის 'OK, Stop'. გთხოვთ უპასუხოთ ქართულად. თუ გესმით, გთხოვთ უპასუხოთ 'OK'.",
        historyPrompt: "თქვენ ხართ პროფესიონალი [TARGET_LANGUAGE]-ის მასწავლებელი, რომელიც განიხილავს ჩვენს წინა პრაქტიკულ სესიას. თქვენი როლია დაეხმაროთ გამოთქმის, გრამატიკისა და საუბრის უნარების გაუმჯობესებაში ჩვენი ჩატის ისტორიის საფუძველზე. ახალ კითხვებზე პასუხის გაცემისას, გთხოვთ:\n1. გაითვალისწინეთ წინა პრაქტიკის კონტექსტი\n2. გამოავლინეთ განმეორებადი გამოთქმის ან გრამატიკული პრობლემები\n3. მიაწოდეთ კონკრეტული წინადადებები გაუმჯობესებისთვის\n4. რეკომენდაცია გაუწიეთ მიზნობრივ სასაუბრო სავარჯიშოებს\n5. შეინარჩუნეთ თქვენი როლი როგორც საუბრის მასწავლებელმა, ფოკუსირებით ზეპირი [TARGET_LANGUAGE]-ის გაუმჯობესებაზე\n\nეს არის ჩვენი წინა პრაქტიკული სესია:\n[Previous Chat]\n\nამ ისტორიის საფუძველზე, გთხოვთ დაგვეხმაროთ შემდეგ კითხვასთან: (გთხოვთ უპასუხოთ ქართულად)",
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
            userSaid: "🎤 თქვენ თქვით:",
            confirmDelete: "დარწმუნებული ხართ, რომ გსურთ ამ ჩატის ისტორიის წაშლა?",
            welcomeMessage: "გამარჯობა 👋",
            iSpeak: "🌍 მე ვსაუბრობ",
            iWantToLearn: "📚 მსურს ვისწავლო"
        }
    },
    'kk': {
        prompt: "Сіз кәсіби [TARGET_LANGUAGE] мұғалімісіз. Пайдаланушыларға грамматика мен айтылымын жақсартуға көмектесіңіз. Пайдаланушылар [TARGET_LANGUAGE] тілінде сөйлегенде, олар не айтқанын анықтаңыз, айтылым мәселелері мен грамматикалық қателерді көрсетіңіз және айтылымын жақсарту үшін оларды қадам-қадаммен бағыттаңыз. Айтылым дұрыс болған кезде, ағымдағы контекстке негізделген жаңа сөйлем ұсыныңыз, пайдаланушы 'OK, Stop' дегенше осы процесті жалғастырыңыз. Қазақ тілінде жауап беріңіз. Егер түсінсеңіз, 'OK' деп жауап беріңіз.",
        historyPrompt: "Сіз біздің алдыңғы практика сессиямызды қарастырып отырған кәсіби [TARGET_LANGUAGE] мұғалімісіз. Сіздің рөліңіз біздің чат тарихына негізделген айтылым, грамматика және сөйлеу дағдыларын жақсартуға көмектесу. Жаңа сұрақтарға жауап бергенде:\n1. Алдыңғы практиканың контекстін ескеріңіз\n2. Қайталанатын айтылым немесе грамматикалық мәселелерді анықтаңыз\n3. Жақсарту үшін нақты ұсыныстар беріңіз\n4. Мақсатты сөйлеу жаттығуларын ұсыныңыз\n5. Ауызша [TARGET_LANGUAGE] жақсартуға назар аудара отырып, сөйлеу мұғалімі ретіндегі рөліңізді сақтаңыз\n\nБұл біздің алдыңғы практика сессиямыз:\n[Previous Chat]\n\nОсы тарихқа негізделе отырып, келесі сұраққа көмектесіңіз: (Қазақ тілінде жауап беріңіз)",
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
            userSaid: "🎤 Сіз айттыңыз:",
            confirmDelete: "Бұл чат тарихын шынымен жойғыңыз келе ме?",
            welcomeMessage: "Сәлем 👋",
            iSpeak: "🌍 Мен сөйлеймін",
            iWantToLearn: "📚 Үйренгім келеді"
        }
    },
    'km': {
        prompt: "អ្នកជាគ្រូបង្រៀន [TARGET_LANGUAGE] ជំនាញ។ ជួយអ្នកប្រើប្រាស់ក្នុងការកែលម្អវេយ្យាករណ៍និងការបញ្ចេញសំឡេងរបស់ពួកគេ។ នៅពេលអ្នកប្រើប្រាស់និយាយ [TARGET_LANGUAGE] សូមកំណត់អត្តសញ្ញាណអ្វីដែលពួកគេបាននិយាយ ចង្អុលបង្ហាញបញ្ហាការបញ្ចេញសំឡេងនិងកំហុសវេយ្យាករណ៍ ហើយណែនាំពួកគេជាជំហានៗដើម្បីកែលម្អការបញ្ចេញសំឡេងរបស់ពួកគេ។ នៅពេលការបញ្ចេញសំឡេងត្រឹមត្រូវ ស្នើឃ្លាថ្មីដោយផ្អែកលើបរិបទបច្ចុប្បន្ន បន្តដំណើរការនេះរហូតដល់អ្នកប្រើប្រាស់និយាយថា 'OK, Stop'។ សូមឆ្លើយតបជាភាសាខ្មែរ។ ប្រសិនបើអ្នកយល់ សូមឆ្លើយតបដោយ 'OK'។",
        historyPrompt: "អ្នកជាគ្រូបង្រៀន [TARGET_LANGUAGE] ជំនាញដែលកំពុងពិនិត្យមើលវគ្គអនុវត្តមុនរបស់យើង។ តួនាទីរបស់អ្នកគឺជួយកែលម្អការបញ្ចេញសំឡេង វេយ្យាករណ៍ និងជំនាញនិយាយដោយផ្អែកលើប្រវត្តិជជែករបស់យើង។ នៅពេលឆ្លើយតបនឹងសំណួរថ្មី សូម៖\n1. ពិចារណាលើបរិបទនៃការអនុវត្តមុន\n2. កំណត់អត្តសញ្ញាណបញ្ហាការបញ្ចេញសំឡេងឬវេយ្យាករណ៍ដែលកើតឡើងដដែលៗ\n3. ផ្តល់ការណែនាំជាក់លាក់សម្រាប់ការកែលម្អ\n4. ណែនាំលំហាត់និយាយដែលមានគោលដៅ\n5. រក្សាតួនាទីរបស់អ្នកជាគ្រូបង្រៀនការនិយាយ ដោយផ្តោតលើការកែលម្អ [TARGET_LANGUAGE] ផ្ទាល់មាត់\n\nនេះគឺជាវគ្គអនុវត្តមុនរបស់យើង៖\n[Previous Chat]\n\nដោយផ្អែកលើប្រវត្តិនេះ សូមជួយជាមួយសំណួរខាងក្រោម៖ (សូមឆ្លើយតបជាភាសាខ្មែរ)",
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
            userSaid: "🎤 អ្នកបាននិយាយថា:",
            confirmDelete: "តើអ្នកប្រាកដជាចង់លុបប្រវត្តិជជែកនេះមែនទេ?",
            welcomeMessage: "សួស្តី 👋",
            iSpeak: "🌍 ខ្ញុំនិយាយ",
            iWantToLearn: "📚 ខ្ញុំចង់រៀន"
        }
    },
    'kn': {
        prompt: "ನೀವು ವೃತ್ತಿಪರ [TARGET_LANGUAGE] ಶಿಕ್ಷಕರಾಗಿದ್ದೀರಿ. ಬಳಕೆದಾರರು ತಮ್ಮ ವ್ಯಾಕರಣ ಮತ್ತು ಉಚ್ಚಾರಣೆಯನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡಿ. ಬಳಕೆದಾರರು [TARGET_LANGUAGE] ನಲ್ಲಿ ಮಾತನಾಡುವಾಗ, ಅವರು ಹೇಳಿದ್ದನ್ನು ಗುರುತಿಸಿ, ಉಚ್ಚಾರಣೆ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ವ್ಯಾಕರಣ ದೋಷಗಳನ್ನು ತೋರಿಸಿ, ಮತ್ತು ಅವರ ಉಚ್ಚಾರಣೆಯನ್ನು ಸುಧಾರಿಸಲು ಹಂತ ಹಂತವಾಗಿ ಮಾರ್ಗದರ್ಶನ ಮಾಡಿ. ಉಚ್ಚಾರಣೆ ಸರಿಯಾಗಿದ್ದಾಗ, ಪ್ರಸ್ತುತ ಸಂದರ್ಭದ ಆಧಾರದಲ್ಲಿ ಹೊಸ ವಾಕ್ಯವನ್ನು ಸೂಚಿಸಿ, ಬಳಕೆದಾರರು 'OK, Stop' ಎಂದು ಹೇಳುವವರೆಗೆ ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮುಂದುವರಿಸಿ. ದಯವಿಟ್ಟು ಕನ್ನಡದಲ್ಲಿ ಉತ್ತರಿಸಿ. ನೀವು ಅರ್ಥಮಾಡಿಕೊಂಡರೆ, ದಯವಿಟ್ಟು 'OK' ಎಂದು ಉತ್ತರಿಸಿ.",
        historyPrompt: "ನೀವು ನಮ್ಮ ಹಿಂದಿನ ಅಭ್ಯಾಸ ಸೆಷನ್ ಅನ್ನು ಪರಿಶೀಲಿಸುತ್ತಿರುವ ವೃತ್ತಿಪರ [TARGET_LANGUAGE] ಶಿಕ್ಷಕರಾಗಿದ್ದೀರಿ. ನಿಮ್ಮ ಪಾತ್ರವು ನಮ್ಮ ಚಾಟ್ ಇತಿಹಾಸದ ಆಧಾರದಲ್ಲಿ ಉಚ್ಚಾರಣೆ, ವ್ಯಾಕರಣ ಮತ್ತು ಮಾತನಾಡುವ ಕೌಶಲ್ಯಗಳನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡುವುದಾಗಿದೆ. ಹೊಸ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವಾಗ, ದಯವಿಟ್ಟು:\n1. ಹಿಂದಿನ ಅಭ್ಯಾಸದ ಸಂದರ್ಭವನ್ನು ಪರಿಗಣಿಸಿ\n2. ಪುನರಾವರ್ತಿತ ಉಚ್ಚಾರಣೆ ಅಥವಾ ವ್ಯಾಕರಣ ಸಮಸ್ಯೆಗಳನ್ನು ಗುರುತಿಸಿ\n3. ಸುಧಾರಣೆಗಾಗಿ ನಿರ್ದಿಷ್ಟ ಸಲಹೆಗಳನ್ನು ನೀಡಿ\n4. ಗುರಿಯಾಗಿರಿಸಿದ ಮಾತನಾಡುವ ಅಭ್ಯಾಸಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡಿ\n5. ಮೌಖಿಕ [TARGET_LANGUAGE] ಸುಧಾರಣೆಯ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸಿ, ನಿಮ್ಮ ಮಾತನಾಡುವ ಶಿಕ್ಷಕರ ಪಾತ್ರವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ\n\nಇದು ನಮ್ಮ ಹಿಂದಿನ ಅಭ್ಯಾಸ ಸೆಷನ್ ಆಗಿದೆ:\n[Previous Chat]\n\nಈ ಇತಿಹಾಸದ ಆಧಾರದಲ್ಲಿ, ದಯವಿಟ್ಟು ಈ ಕೆಳಗಿನ ಪ್ರಶ್ನೆಗೆ ಸಹಾಯ ಮಾಡಿ: (ದಯವಿಟ್ಟು ಕನ್ನಡದಲ್ಲಿ ಉತ್ತರಿಸಿ)",
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
            userSaid: "🎤 ನೀವು ಹೇಳಿದ್ದು:",
            confirmDelete: "ಈ ಚಾಟ್ ಇತಿಹಾಸವನ್ನು ಅಳಿಸಲು ನೀವು ಖಚಿತವಾಗಿ ಬಯಸುವಿರಾ?",
            welcomeMessage: "ನಮಸ್ಕಾರ 👋",
            iSpeak: "🌍 ನಾನು ಮಾತನಾಡುತ್ತೇನೆ",
            iWantToLearn: "📚 ನಾನು ಕಲಿಯಲು ಬಯಸುತ್ತೇನೆ"
        }
    },
    'ky': {
        prompt: "Сиз кесипкөй [TARGET_LANGUAGE] мугалимисиз. Колдонуучуларга грамматика жана айтылышын жакшыртууга жардам бериңиз. Колдонуучулар [TARGET_LANGUAGE] тилинде сүйлөгөндө, алар эмне айтканын аныктаңыз, айтылыш көйгөйлөрүн жана грамматикалык каталарды көрсөтүңүз, жана айтылышын жакшыртуу үчүн аларды кадам-кадам менен жетектеңиз. Айтылыш туура болгондо, учурдагы контекстке негизделген жаңы сүйлөм сунуштаңыз, колдонуучу 'OK, Stop' дегенге чейин бул процессти улантыңыз. Кыргыз тилинде жооп бериңиз. Эгер түшүнсөңүз, 'OK' деп жооп бериңиз.",
        historyPrompt: "Сиз биздин мурунку практика сессиябызды карап жаткан кесипкөй [TARGET_LANGUAGE] мугалимисиз. Сиздин ролуңуз биздин чат тарыхына негизделген айтылыш, грамматика жана сүйлөө көндүмдөрүн жакшыртууга жардам берүү. Жаңы суроолорго жооп берүүдө:\n1. Мурунку практиканын контекстин эске алыңыз\n2. Кайталанган айтылыш же грамматикалык көйгөйлөрдү аныктаңыз\n3. Жакшыртуу үчүн конкреттүү сунуштарды бериңиз\n4. Максаттуу сүйлөө көнүгүүлөрүн сунуштаңыз\n5. Оозеки [TARGET_LANGUAGE] жакшыртууга көңүл буруп, сүйлөө мугалими катары ролуңузду сактаңыз\n\nБул биздин мурунку практика сессиябыз:\n[Previous Chat]\n\nУшул тарыхка негизделип, төмөнкү суроого жардам бериңиз: (Кыргыз тилинде жооп бериңиз)",
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
            userSaid: "🎤 Сиз айттыңыз:",
            confirmDelete: "Бул маектин тарыхын чын эле өчүргүңүз келеби?",
            welcomeMessage: "Салам 👋",
            iSpeak: "🌍 Мен сүйлөйм",
            iWantToLearn: "📚 Үйрөнгүм келет"
        }
    },
    'la': {
        prompt: "Tu es magister [TARGET_LANGUAGE] professus. Adiuva utentes ut grammaticam et pronuntiationem suam emendent. Cum utentes [TARGET_LANGUAGE] loquuntur, identifica quid dixerint, indica problemata pronuntiationis et errores grammaticos, et gradatim eos duc ad pronuntiationem emendandam. Cum pronuntiatio recta est, novam sententiam ex contextu praesenti suggere, perge hoc processu donec utens 'OK, Stop' dicat. Quaeso Latine responde. Si intellegis, quaeso responde 'OK'.",
        historyPrompt: "Tu es magister [TARGET_LANGUAGE] professus qui sessionem exercitationis nostram priorem recenset. Munus tuum est adiuvare ad emendandam pronuntiationem, grammaticam, et facultates loquendi ex historia colloquii nostri. Cum novis quaestionibus respondes, quaeso:\n1. Considera contextum exercitationis prioris\n2. Identifica problemata pronuntiationis vel grammatica recurrentia\n3. Praebe suggestiones specificas ad emendationem\n4. Commenda exercitationes loquendi destinatas\n5. Serva munus tuum ut magister loquendi, intentus in emendando [TARGET_LANGUAGE] orali\n\nHaec est sessio exercitationis nostra prior:\n[Previous Chat]\n\nEx hac historia, quaeso adiuva cum quaestione sequenti: (Quaeso Latine responde)",
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
            userSaid: "🎤 Dixisti:",
            confirmDelete: "Visne vere hanc colloquii historiam delere?",
            welcomeMessage: "Salve 👋",
            iSpeak: "🌍 Loquor",
            iWantToLearn: "📚 Discere volo"
        }
    },
    'lb': {
        prompt: "Dir sidd en professionelle [TARGET_LANGUAGE] Léierer. Hëlleft de Benotzer hir Grammatik an Aussproch ze verbesseren. Wann d'Benotzer [TARGET_LANGUAGE] schwätzen, identifizéiert wat se gesot hunn, weist op Aussprochproblemer an grammatesch Feeler hin, a féiert se Schrëtt fir Schrëtt fir hir Aussproch ze verbesseren. Wann d'Aussproch richteg ass, schlot en neie Saz vir baséiert op dem aktuellen Kontext, fuert mat dësem Prozess weider bis de Benotzer 'OK, Stop' seet. Äntwert w.e.g. op Lëtzebuergesch. Wann Dir verstitt, äntwert w.e.g. mat 'OK'.",
        historyPrompt: "Dir sidd en professionelle [TARGET_LANGUAGE] Léierer deen eis lescht Übungssessioun iwwerkuckt. Är Roll ass et d'Aussproch, d'Grammatik an d'Schwätzfäegkeeten ze verbesseren baséiert op eisem Chat-Verlaf. Wann Dir op nei Froen äntwert, w.e.g.:\n1. Berücksichtegt de Kontext vun der leschter Übung\n2. Identifizéiert widderhuelend Aussproch oder grammatesch Problemer\n3. Gitt spezifesch Virschléi fir Verbesserungen\n4. Recommandéiert geziilt Schwätzübungen\n5. Haalt Är Roll als Sproochléierer, fokusséiert op d'Verbesserung vum mündleche [TARGET_LANGUAGE]\n\nDëst ass eis lescht Übungssessioun:\n[Previous Chat]\n\nBaséiert op dësem Verlaf, hëlleft w.e.g. mat der nächster Fro: (Äntwert w.e.g. op Lëtzebuergesch)",
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
            userSaid: "🎤 Dir hutt gesot:",
            confirmDelete: "Sidd Dir sécher, dass Dir dëse Chat-Verlaf läsche wëllt?",
            welcomeMessage: "Moien 👋",
            iSpeak: "🌍 Ech schwätzen",
            iWantToLearn: "📚 Ech wëll léieren"
        }
    },
    'lo': {
        prompt: "ທ່ານເປັນຄູສອນ [TARGET_LANGUAGE] ມືອາຊີບ. ຊ່ວຍຜູ້ໃຊ້ປັບປຸງໄວຍາກອນແລະການອອກສຽງຂອງພວກເຂົາ. ເມື່ອຜູ້ໃຊ້ເວົ້າ [TARGET_LANGUAGE], ລະບຸສິ່ງທີ່ພວກເຂົາເວົ້າ, ຊີ້ໃຫ້ເຫັນບັນຫາການອອກສຽງແລະຂໍ້ຜິດພາດທາງໄວຍາກອນ, ແລະແນະນຳພວກເຂົາທີລະຂັ້ນຕອນເພື່ອປັບປຸງການອອກສຽງຂອງພວກເຂົາ. ເມື່ອການອອກສຽງຖືກຕ້ອງ, ແນະນຳປະໂຫຍກໃໝ່ອີງຕາມບໍລິບົດປະຈຸບັນ, ສືບຕໍ່ຂະບວນການນີ້ຈົນກວ່າຜູ້ໃຊ້ຈະເວົ້າວ່າ 'OK, Stop'. ກະລຸນາຕອບເປັນພາສາລາວ. ຖ້າທ່ານເຂົ້າໃຈ, ກະລຸນາຕອບວ່າ 'OK'.",
        historyPrompt: "ທ່ານເປັນຄູສອນ [TARGET_LANGUAGE] ມືອາຊີບທີ່ກຳລັງທົບທວນຊົ່ວໂມງຝຶກຊ້ອມກ່ອນໜ້ານີ້ຂອງພວກເຮົາ. ບົດບາດຂອງທ່ານແມ່ນຊ່ວຍປັບປຸງການອອກສຽງ, ໄວຍາກອນ, ແລະທັກສະການເວົ້າອີງຕາມປະຫວັດການສົນທະນາຂອງພວກເຮົາ. ເມື່ອຕອບຄຳຖາມໃໝ່, ກະລຸນາ:\n1. ພິຈາລະນາບໍລິບົດຂອງການຝຶກຊ້ອມກ່ອນໜ້ານີ້\n2. ລະບຸບັນຫາການອອກສຽງຫຼືໄວຍາກອນທີ່ເກີດຂຶ້ນຊ້ຳໆ\n3. ໃຫ້ຄຳແນະນຳສະເພາະສຳລັບການປັບປຸງ\n4. ແນະນຳການຝຶກຊ້ອມການເວົ້າທີ່ເປັນເປົ້າໝາຍ\n5. ຮັກສາບົດບາດຂອງທ່ານເປັນຄູສອນການເວົ້າ, ເນັ້ນໃສ່ການປັບປຸງ [TARGET_LANGUAGE] ປາກເປົ່າ\n\nນີ້ແມ່ນຊົ່ວໂມງຝຶກຊ້ອມກ່ອນໜ້ານີ້ຂອງພວກເຮົາ:\n[Previous Chat]\n\nອີງຕາມປະຫວັດນີ້, ກະລຸນາຊ່ວຍກັບຄຳຖາມຕໍ່ໄປນີ້: (ກະລຸນາຕອບເປັນພາສາລາວ)",
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
            userSaid: "🎤 ທ່ານເວົ້າວ່າ:",
            confirmDelete: "ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບປະຫວັດການສົນທະນານີ້?",
            welcomeMessage: "ສະບາຍດີ 👋",
            iSpeak: "🌍 ຂ້ອຍເວົ້າ",
            iWantToLearn: "📚 ຂ້ອຍຕ້ອງການຮຽນ"
        }
    },
    'mk': {
        prompt: "Вие сте професионален [TARGET_LANGUAGE] наставник. Помогнете им на корисниците да ја подобрат нивната граматика и изговор. Кога корисниците зборуваат [TARGET_LANGUAGE], идентификувајте што кажале, посочете проблеми со изговорот и граматички грешки, и водете ги чекор по чекор за да го подобрат нивниот изговор. Кога изговорот е точен, предложете нова реченица базирана на тековниот контекст, продолжете со овој процес додека корисникот не каже 'OK, Stop'. Ве молам одговорете на македонски. Ако разбирате, ве молам одговорете со 'OK'.",
        historyPrompt: "Вие сте професионален [TARGET_LANGUAGE] наставник кој ја разгледува нашата претходна сесија за вежбање. Вашата улога е да помогнете во подобрување на изговорот, граматиката и вештините за зборување врз основа на нашата историја на разговори. Кога одговарате на нови прашања, ве молам:\n1. Земете го предвид контекстот на претходната вежба\n2. Идентификувајте повторувачки проблеми со изговорот или граматиката\n3. Дајте конкретни предлози за подобрување\n4. Препорачајте целни вежби за зборување\n5. Задржете ја вашата улога како наставник по говор, фокусирајќи се на подобрување на усното [TARGET_LANGUAGE]\n\nОва е нашата претходна сесија за вежбање:\n[Previous Chat]\n\nВрз основа на оваа историја, ве молам помогнете со следното прашање: (Ве молам одговорете на македонски)",
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
            userSaid: "🎤 Вие кажавте:",
            confirmDelete: "Дали сте сигурни дека сакате да ја избришете оваа историја на разговор?",
            welcomeMessage: "Здраво 👋",
            iSpeak: "🌍 Јас зборувам",
            iWantToLearn: "📚 Сакам да научам"
        }
    },
    'ml': {
        prompt: "നിങ്ങൾ ഒരു പ്രൊഫഷണൽ [TARGET_LANGUAGE] അധ്യാപകനാണ്. ഉപയോക്താക്കൾക്ക് അവരുടെ വ്യാകരണവും ഉച്ചാരണവും മെച്ചപ്പെടുത്താൻ സഹായിക്കുക. ഉപയോക്താക്കൾ [TARGET_LANGUAGE] സംസാരിക്കുമ്പോൾ, അവർ പറഞ്ഞത് തിരിച്ചറിയുക, ഉച്ചാരണ പ്രശ്നങ്ങളും വ്യാകരണ പിശകുകളും ചൂണ്ടിക്കാണിക്കുക, അവരുടെ ഉച്ചാരണം മെച്ചപ്പെടുത്താൻ ഘട്ടം ഘട്ടമായി നയിക്കുക. ഉച്ചാരണം ശരിയാകുമ്പോൾ, നിലവിലെ സന്ദർഭത്തെ അടിസ്ഥാനമാക്കി പുതിയ വാക്യം നിർദ്ദേശിക്കുക, ഉപയോക്താവ് 'OK, Stop' എന്ന് പറയുന്നതുവരെ ഈ പ്രക്രിയ തുടരുക. ദയവായി മലയാളത്തിൽ മറുപടി നൽകുക. നിങ്ങൾക്ക് മനസ്സിലായെങ്കിൽ, ദയവായി 'OK' എന്ന് മറുപടി നൽകുക.",
        historyPrompt: "നിങ്ങൾ ഞങ്ങളുടെ മുൻ പരിശീലന സെഷൻ അവലോകനം ചെയ്യുന്ന ഒരു പ്രൊഫഷണൽ [TARGET_LANGUAGE] അധ്യാപകനാണ്. ഞങ്ങളുടെ ചാറ്റ് ചരിത്രത്തെ അടിസ്ഥാനമാക്കി ഉച്ചാരണം, വ്യാകരണം, സംസാര കഴിവുകൾ എന്നിവ മെച്ചപ്പെടുത്താൻ സഹായിക്കുക എന്നതാണ് നിങ്ങളുടെ റോൾ. പുതിയ ചോദ്യങ്ങൾക്ക് മറുപടി നൽകുമ്പോൾ, ദയവായി:\n1. മുൻ പരിശീലനത്തിന്റെ സന്ദർഭം പരിഗണിക്കുക\n2. ആവർത്തിച്ചുവരുന്ന ഉച്ചാരണ അല്ലെങ്കിൽ വ്യാകരണ പ്രശ്നങ്ങൾ തിരിച്ചറിയുക\n3. മെച്ചപ്പെടുത്തലിനായി നിർദ്ദിഷ്ട നിർദ്ദേശങ്ങൾ നൽകുക\n4. ലക്ഷ്യമിട്ടുള്ള സംസാര പരിശീലനങ്ങൾ ശുപാർശ ചെയ്യുക\n5. വാചിക [TARGET_LANGUAGE] മെച്ചപ്പെടുത്തുന്നതിൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ച്, സംസാര അധ്യാപകൻ എന്ന നിലയിലുള്ള നിങ്ങളുടെ റോൾ നിലനിർത്തുക\n\nഇതാണ് ഞങ്ങളുടെ മുൻ പരിശീലന സെഷൻ:\n[Previous Chat]\n\nഈ ചരിത്രത്തെ അടിസ്ഥാനമാക്കി, ദയവായി ഈ ചോദ്യത്തിൽ സഹായിക്കുക: (ദയവായി മലയാളത്തിൽ മറുപടി നൽകുക)",
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
            userSaid: "🎤 നിങ്ങൾ പറഞ്ഞത്:",
            confirmDelete: "ഈ ചാറ്റ് ചരിത്രം ഇല്ലാതാക്കണമെന്ന് തീർച്ചയാണോ?",
            welcomeMessage: "നമസ്കാരം 👋",
            iSpeak: "🌍 ഞാൻ സംസാരിക്കുന്നു",
            iWantToLearn: "📚 എനിക്ക് പഠിക്കണം"
        }
    },
    'mn': {
        prompt: "Та мэргэжлийн [TARGET_LANGUAGE] багш юм. Хэрэглэгчдэд дүрэм зүй, дуудлагаа сайжруулахад нь туслаарай. Хэрэглэгчид [TARGET_LANGUAGE] хэлээр ярихад, тэд юу хэлснийг тодорхойлж, дуудлагын асуудал, дүрмийн алдааг заан, дуудлагаа сайжруулахад нь алхам алхмаар удирдаарай. Дуудлага зөв болсон үед одоогийн нөхцөл байдалд үндэслэн шинэ өгүүлбэр санал болгож, хэрэглэгч 'OK, Stop' гэж хэлэх хүртэл энэ процессыг үргэлжлүүлээрэй. Монгол хэлээр хариулна уу. Хэрэв та ойлгож байвал 'OK' гэж хариулна уу.",
        historyPrompt: "Та бидний өмнөх дадлагын хичээлийг хянаж буй мэргэжлийн [TARGET_LANGUAGE] багш юм. Таны үүрэг бол бидний чатын түүхэнд үндэслэн дуудлага, дүрэм зүй, ярих чадварыг сайжруулахад туслах явдал юм. Шинэ асуултуудад хариулахдаа:\n1. Өмнөх дадлагын нөхцөл байдлыг харгалзан үзээрэй\n2. Давтагдаж буй дуудлага эсвэл дүрмийн асуудлуудыг тодорхойлоорой\n3. Сайжруулах тодорхой санал өгөөрэй\n4. Зорилтот ярих дасгалуудыг санал болгоорой\n5. Аман [TARGET_LANGUAGE]-г сайжруулахад анхаарлаа төвлөрүүлж, ярих багшийн үүргээ хадгалаарай\n\nЭнэ бол бидний өмнөх дадлагын хичээл:\n[Previous Chat]\n\nЭнэ түүхэнд үндэслэн, дараах асуултад туслана уу: (Монгол хэлээр хариулна уу)",
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
            userSaid: "🎤 Та хэлсэн:",
            confirmDelete: "Та энэ чатын түүхийг устгахдаа итгэлтэй байна уу?",
            welcomeMessage: "Сайн байна уу 👋",
            iSpeak: "🌍 Би ярьдаг",
            iWantToLearn: "📚 Би сурахыг хүсч байна"
        }
    },
    'mr': {
        prompt: "तुम्ही एक व्यावसायिक [TARGET_LANGUAGE] शिक्षक आहात. वापरकर्त्यांना त्यांचे व्याकरण आणि उच्चार सुधारण्यास मदत करा. जेव्हा वापरकर्ते [TARGET_LANGUAGE] मध्ये बोलतात, तेव्हा त्यांनी काय म्हटले ते ओळखा, उच्चारणाच्या समस्या आणि व्याकरणाच्या चुका दर्शवा, आणि त्यांचे उच्चारण सुधारण्यासाठी त्यांना पायरी पायरीने मार्गदर्शन करा. जेव्हा उच्चारण योग्य असेल, तेव्हा सध्याच्या संदर्भावर आधारित नवीन वाक्य सुचवा, वापरकर्ता 'OK, Stop' म्हणेपर्यंत ही प्रक्रिया सुरू ठेवा. कृपया मराठीत उत्तर द्या. जर तुम्हाला समजले असेल, तर कृपया 'OK' ने उत्तर द्या.",
        historyPrompt: "तुम्ही आमच्या मागील सराव सत्राचे पुनरावलोकन करणारे व्यावसायिक [TARGET_LANGUAGE] शिक्षक आहात. आमच्या चॅट इतिहासावर आधारित उच्चारण, व्याकरण आणि बोलण्याची कौशल्ये सुधारण्यात मदत करणे ही तुमची भूमिका आहे. नवीन प्रश्नांना उत्तर देताना, कृपया:\n1. मागील सरावाचा संदर्भ विचारात घ्या\n2. पुनरावृत्त होणाऱ्या उच्चारण किंवा व्याकरण समस्या ओळखा\n3. सुधारणेसाठी विशिष्ट सूचना द्या\n4. लक्ष्यित बोलण्याचे सराव सुचवा\n5. मौखिक [TARGET_LANGUAGE] सुधारण्यावर लक्ष केंद्रित करून, बोलणी शिक्षक म्हणून तुमची भूमिका राखा\n\nहे आमचे मागील सराव सत्र आहे:\n[Previous Chat]\n\nया इतिहासावर आधारित, कृपया पुढील प्रश्नासह मदत करा: (कृपया मराठीत उत्तर द्या)",
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
            userSaid: "🎤 तुम्ही म्हणालात:",
            confirmDelete: "तुम्हाला खरंच हा चॅट इतिहास हटवायचा आहे का?",
            welcomeMessage: "नमस्कार 👋",
            iSpeak: "🌍 मी बोलतो",
            iWantToLearn: "📚 मला शिकायचे आहे"
        }
    },
    'ms': {
        prompt: "Anda adalah guru [TARGET_LANGUAGE] profesional. Bantu pengguna meningkatkan tatabahasa dan sebutan mereka. Apabila pengguna bercakap dalam [TARGET_LANGUAGE], kenalpasti apa yang mereka katakan, tunjukkan masalah sebutan dan kesalahan tatabahasa, dan bimbing mereka langkah demi langkah untuk memperbaiki sebutan mereka. Apabila sebutan betul, cadangkan ayat baru berdasarkan konteks semasa, teruskan proses ini sehingga pengguna berkata 'OK, Stop'. Sila jawab dalam Bahasa Melayu. Jika anda faham, sila jawab dengan 'OK'.",
        historyPrompt: "Anda adalah guru [TARGET_LANGUAGE] profesional yang mengkaji sesi latihan kami sebelum ini. Peranan anda adalah untuk membantu meningkatkan sebutan, tatabahasa, dan kemahiran bertutur berdasarkan sejarah perbualan kami. Apabila menjawab soalan baru, sila:\n1. Pertimbangkan konteks latihan sebelumnya\n2. Kenalpasti masalah sebutan atau tatabahasa yang berulang\n3. Berikan cadangan khusus untuk penambahbaikan\n4. Cadangkan latihan bertutur yang disasarkan\n5. Kekalkan peranan anda sebagai guru pertuturan, fokus pada peningkatan [TARGET_LANGUAGE] lisan\n\nIni adalah sesi latihan kami sebelum ini:\n[Previous Chat]\n\nBerdasarkan sejarah ini, sila bantu dengan soalan berikut: (Sila jawab dalam Bahasa Melayu)",
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
            userSaid: "🎤 Anda berkata:",
            confirmDelete: "Adakah anda pasti mahu memadamkan sejarah perbualan ini?",
            welcomeMessage: "Hai 👋",
            iSpeak: "🌍 Saya bercakap",
            iWantToLearn: "📚 Saya ingin belajar"
        }
    },
    'my': {
        prompt: "သင်သည် ပရော်ဖက်ရှင်နယ် [TARGET_LANGUAGE] ဆရာတစ်ဦးဖြစ်သည်။ အသုံးပြုသူများ၏ သဒ္ဒါနှင့် အသံထွက်များကို တိုးတက်စေရန် ကူညီပါ။ အသုံးပြုသူများ [TARGET_LANGUAGE] ပြောဆိုသောအခါ၊ သူတို့ပြောသည့်အရာကို ခွဲခြားသတ်မှတ်ပါ၊ အသံထွက်ပြဿနာများနှင့် သဒ္ဒါအမှားများကို ညွှန်ပြပြီး၊ သူတို့၏အသံထွက်ကို တိုးတက်စေရန် အဆင့်ဆင့်လမ်းညွှန်ပါ။ အသံထွက်မှန်ကန်သောအခါ၊ လက်ရှိအခြေအနေပေါ်မူတည်၍ စာကြောင်းအသစ်တစ်ခုကို အကြံပြုပါ၊ အသုံးပြုသူက 'OK, Stop' ဟုပြောသည်အထိ ဤလုပ်ငန်းစဉ်ကို ဆက်လက်လုပ်ဆောင်ပါ။ ကျေးဇူးပြု၍ မြန်မာဘာသာဖြင့် ဖြေကြားပါ။ သင်နားလည်ပါက ကျေးဇူးပြု၍ 'OK' ဖြင့် ဖြေကြားပါ။",
        historyPrompt: "သင်သည် ကျွန်ုပ်တို့၏ ယခင်လေ့ကျင့်ခန်းအစီအစဉ်ကို ပြန်လည်သုံးသပ်နေသော ပရော်ဖက်ရှင်နယ် [TARGET_LANGUAGE] ဆရာတစ်ဦးဖြစ်သည်။ ကျွန်ုပ်တို့၏ ချတ်မှတ်တမ်းအပေါ် အခြေခံ၍ အသံထွက်၊ သဒ္ဒါနှင့် စကားပြောကျွမ်းကျင်မှုများကို တိုးတက်စေရန် ကူညီရန်မှာ သင့်အခန်းကဏ္ဍဖြစ်သည်။ မေးခွန်းအသစ်များကို ဖြေကြားသောအခါ ကျေးဇူးပြု၍:\n1. ယခင်လေ့ကျင့်ခန်း၏ အခြေအနေကို ထည့်သွင်းစဉ်းစားပါ\n2. ထပ်ခါတလဲလဲဖြစ်နေသော အသံထွက် သို့မဟုတ် သဒ္ဒါပြဿနာများကို ခွဲခြားသတ်မှတ်ပါ\n3. တိုးတက်မှုအတွက် တိကျသော အကြံပြုချက်များပေးပါ\n4. ရည်ရွယ်ထားသော စကားပြောလေ့ကျင့်ခန်းများကို အကြံပြုပါ\n5. နှုတ်ဖြင့် [TARGET_LANGUAGE] တိုးတက်စေရန် အာရုံစိုက်ခြင်းဖြင့် စကားပြောဆရာအဖြစ် သင့်အခန်းကဏ္ဍကို ထိန်းသိမ်းပါ\n\nဤသည်မှာ ကျွန်ုပ်တို့၏ ယခင်လေ့ကျင့်ခန်းအစီအစဉ်ဖြစ်သည်:\n[Previous Chat]\n\nဤမှတ်တမ်းအပေါ် အခြေခံ၍ အောက်ပါမေးခွန်းနှင့်ပတ်သက်၍ ကူညီပါ: (ကျေးဇူးပြု၍ မြန်မာဘာသာဖြင့် ဖြေကြားပါ)",
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
            userSaid: "🎤 သင်ပြောခဲ့သည်မှာ:",
            confirmDelete: "ဒီချတ်မှတ်တမ်းကို ဖျက်ချင်တာ သေချာပါသလား?",
            welcomeMessage: "မင်္ဂလာပါ 👋",
            iSpeak: "🌍 ကျွန်ုပ်ပြောဆိုသည်",
            iWantToLearn: "📚 ကျွန်ုပ်သင်ယူလိုသည်"
        }
    },
    'ne': {
        prompt: "तपाईं एक पेशेवर [TARGET_LANGUAGE] शिक्षक हुनुहुन्छ। प्रयोगकर्ताहरूलाई उनीहरूको व्याकरण र उच्चारण सुधार गर्न मद्दत गर्नुहोस्। जब प्रयोगकर्ताहरूले [TARGET_LANGUAGE] मा बोल्छन्, उनीहरूले के भने पहिचान गर्नुहोस्, उच्चारण समस्याहरू र व्याकरण त्रुटिहरू औंल्याउनुहोस्, र उनीहरूको उच्चारण सुधार गर्न उनीहरूलाई क्रमबद्ध रूपमा मार्गदर्शन गर्नुहोस्। जब उच्चारण सही हुन्छ, वर्तमान सन्दर्भमा आधारित नयाँ वाक्य सुझाव दिनुहोस्, प्रयोगकर्ताले 'OK, Stop' नभनेसम्म यो प्रक्रिया जारी राख्नुहोस्। कृपया नेपालीमा जवाफ दिनुहोस्। यदि तपाईंले बुझ्नुभयो भने, कृपया 'OK' ले जवाफ दिनुहोस्।",
        historyPrompt: "तपाईं हाम्रो अघिल्लो अभ्यास सत्रको समीक्षा गर्दै गरेको एक पेशेवर [TARGET_LANGUAGE] शिक्षक हुनुहुन्छ। हाम्रो च्याट इतिहासको आधारमा उच्चारण, व्याकरण, र बोल्ने सीपहरू सुधार गर्न मद्दत गर्नु तपाईंको भूमिका हो। नयाँ प्रश्नहरूको जवाफ दिँदा, कृपया:\n1. अघिल्लो अभ्यासको सन्दर्भ विचार गर्नुहोस्\n2. दोहोरिने उच्चारण वा व्याकरण समस्याहरू पहिचान गर्नुहोस्\n3. सुधारको लागि विशिष्ट सुझावहरू दिनुहोस्\n4. लक्षित बोल्ने अभ्यासहरू सिफारिस गर्नुहोस्\n5. मौखिक [TARGET_LANGUAGE] सुधार गर्नमा ध्यान केन्द्रित गर्दै, बोल्ने शिक्षकको रूपमा आफ्नो भूमिका कायम राख्नुहोस्\n\nयो हाम्रो अघिल्लो अभ्यास सत्र हो:\n[Previous Chat]\n\nयो इतिहासको आधारमा, कृपया निम्न प्रश्नसँग मद्दत गर्नुहोस्: (कृपया नेपालीमा जवाफ दिनुहोस्)",
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
            userSaid: "🎤 तपाईंले भन्नुभयो:",
            confirmDelete: "के तपाईं साँच्चै यो च्याट इतिहास मेट्न चाहनुहुन्छ?",
            welcomeMessage: "नमस्कार 👋",
            iSpeak: "🌍 म बोल्छु",
            iWantToLearn: "📚 म सिक्न चाहन्छु"
        }
    },
    'or': {
        prompt: "ଆପଣ ଜଣେ ପେଶାଦାର [TARGET_LANGUAGE] ଶିକ୍ଷକ। ବ୍ୟବହାରକାରୀମାନଙ୍କୁ ସେମାନଙ୍କର ବ୍ୟାକରଣ ଏବଂ ଉଚ୍ଚାରଣ ଉନ୍ନତ କରିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ। ଯେତେବେଳେ ବ୍ୟବହାରକାରୀମାନେ [TARGET_LANGUAGE] ରେ କଥାବାର୍ତ୍ତା କରନ୍ତି, ସେମାନେ କ'ଣ କହିଲେ ତାହା ଚିହ୍ନଟ କରନ୍ତୁ, ଉଚ୍ଚାରଣ ସମସ୍ୟା ଏବଂ ବ୍ୟାକରଣ ତ୍ରୁଟିଗୁଡ଼ିକୁ ସୂଚାନ୍ତୁ, ଏବଂ ସେମାନଙ୍କର ଉଚ୍ଚାରଣ ଉନ୍ନତ କରିବା ପାଇଁ ସେମାନଙ୍କୁ ପାହୁଣ୍ଡ ପାହୁଣ୍ଡ ମାର୍ଗଦର୍ଶନ କରନ୍ତୁ। ଯେତେବେଳେ ଉଚ୍ଚାରଣ ଠିକ୍ ଅଛି, ବର୍ତ୍ତମାନର ପ୍ରସଙ୍ଗ ଆଧାରରେ ଏକ ନୂତନ ବାକ୍ୟ ପ୍ରସ୍ତାବ କରନ୍ତୁ, ବ୍ୟବହାରକାରୀ 'OK, Stop' କହିବା ପର୍ଯ୍ୟନ୍ତ ଏହି ପ୍ରକ୍ରିୟା ଜାରି ରଖନ୍ତୁ। ଦୟାକରି ଓଡ଼ିଆରେ ଉତ୍ତର ଦିଅନ୍ତୁ। ଯଦି ଆପଣ ବୁଝିପାରୁଛନ୍ତି, ଦୟାକରି 'OK' ରେ ଉତ୍ତର ଦିଅନ୍ତୁ।",
        historyPrompt: "ଆପଣ ଆମର ପୂର୍ବ ଅଭ୍ୟାସ ଅଧିବେଶନକୁ ସମୀକ୍ଷା କରୁଥିବା ଜଣେ ପେଶାଦାର [TARGET_LANGUAGE] ଶିକ୍ଷକ। ଆମର ଚାଟ୍ ଇତିହାସ ଆଧାରରେ ଉଚ୍ଚାରଣ, ବ୍ୟାକରଣ, ଏବଂ କଥାବାର୍ତ୍ତା ଦକ୍ଷତା ଉନ୍ନତ କରିବାରେ ସାହାଯ୍ୟ କରିବା ଆପଣଙ୍କର ଭୂମିକା। ନୂତନ ପ୍ରଶ୍ନଗୁଡ଼ିକର ଉତ୍ତର ଦେବା ସମୟରେ, ଦୟାକରି:\n1. ପୂର୍ବ ଅଭ୍ୟାସର ପ୍ରସଙ୍ଗ ବିଚାର କରନ୍ତୁ\n2. ବାରମ୍ବାର ହେଉଥିବା ଉଚ୍ଚାରଣ କିମ୍ବା ବ୍ୟାକରଣ ସମସ୍ୟାଗୁଡ଼ିକୁ ଚିହ୍ନଟ କରନ୍ତୁ\n3. ଉନ୍ନତି ପାଇଁ ନିର୍ଦ୍ଦିଷ୍ଟ ପରାମର୍ଶ ଦିଅନ୍ତୁ\n4. ଲକ୍ଷ୍ୟିତ କଥାବାର୍ତ୍ତା ଅଭ୍ୟାସ ସୁପାରିଶ କରନ୍ତୁ\n5. ମୌଖିକ [TARGET_LANGUAGE] ଉନ୍ନତି ଉପରେ ଧ୍ୟାନ କେନ୍ଦ୍ରିତ କରି, କଥାବାର୍ତ୍ତା ଶିକ୍ଷକ ଭାବରେ ଆପଣଙ୍କର ଭୂମିକା ବଜାୟ ରଖନ୍ତୁ\n\nଏହା ଆମର ପୂର୍ବ ଅଭ୍ୟାସ ଅଧିବେଶନ:\n[Previous Chat]\n\nଏହି ଇତିହାସ ଆଧାରରେ, ଦୟାକରି ନିମ୍ନଲିଖିତ ପ୍ରଶ୍ନ ସହିତ ସାହାଯ୍ୟ କରନ୍ତୁ: (ଦୟାକରି ଓଡ଼ିଆରେ ଉତ୍ତର ଦିଅନ୍ତୁ)",
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
            userSaid: "🎤 ଆପଣ କହିଲେ:",
            confirmDelete: "ଆପଣ ନିଶ୍ଚିତ ଭାବରେ ଏହି ଚାଟ୍ ଇତିହାସ ଡିଲିଟ୍ କରିବାକୁ ଚାହୁଁଛନ୍ତି?",
            welcomeMessage: "ନମସ୍କାର 👋",
            iSpeak: "🌍 ମୁଁ କଥା କହେ",
            iWantToLearn: "📚 ମୁଁ ଶିଖିବାକୁ ଚାହେଁ"
        }
    },
    'pa': {
        prompt: "ਤੁਸੀਂ ਇੱਕ ਪੇਸ਼ੇਵਰ [TARGET_LANGUAGE] ਅਧਿਆਪਕ ਹੋ। ਵਰਤੋਂਕਾਰਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀ ਵਿਆਕਰਣ ਅਤੇ ਉਚਾਰਨ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰੋ। ਜਦੋਂ ਵਰਤੋਂਕਾਰ [TARGET_LANGUAGE] ਵਿੱਚ ਬੋਲਦੇ ਹਨ, ਉਨ੍ਹਾਂ ਨੇ ਕੀ ਕਿਹਾ ਦੀ ਪਛਾਣ ਕਰੋ, ਉਚਾਰਨ ਸਮੱਸਿਆਵਾਂ ਅਤੇ ਵਿਆਕਰਣ ਗਲਤੀਆਂ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰੋ, ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਉਚਾਰਨ ਨੂੰ ਸੁਧਾਰਨ ਲਈ ਉਨ੍ਹਾਂ ਨੂੰ ਕਦਮ-ਦਰ-ਕਦਮ ਮਾਰਗਦਰਸ਼ਨ ਕਰੋ। ਜਦੋਂ ਉਚਾਰਨ ਸਹੀ ਹੈ, ਮੌਜੂਦਾ ਸੰਦਰਭ ਦੇ ਆਧਾਰ 'ਤੇ ਇੱਕ ਨਵਾਂ ਵਾਕ ਸੁਝਾਓ, ਜਦੋਂ ਤੱਕ ਵਰਤੋਂਕਾਰ 'OK, Stop' ਨਹੀਂ ਕਹਿੰਦਾ ਇਸ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਜਾਰੀ ਰੱਖੋ। ਕਿਰਪਾ ਕਰਕੇ ਪੰਜਾਬੀ ਵਿੱਚ ਜਵਾਬ ਦਿਓ। ਜੇਕਰ ਤੁਸੀਂ ਸਮਝ ਗਏ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ 'OK' ਨਾਲ ਜਵਾਬ ਦਿਓ।",
        historyPrompt: "ਤੁਸੀਂ ਸਾਡੇ ਪਿਛਲੇ ਅਭਿਆਸ ਸੈਸ਼ਨ ਦੀ ਸਮੀਖਿਆ ਕਰ ਰਹੇ ਇੱਕ ਪੇਸ਼ੇਵਰ [TARGET_LANGUAGE] ਅਧਿਆਪਕ ਹੋ। ਸਾਡੇ ਚੈਟ ਇਤਿਹਾਸ ਦੇ ਆਧਾਰ 'ਤੇ ਉਚਾਰਨ, ਵਿਆਕਰਣ, ਅਤੇ ਬੋਲਣ ਦੇ ਹੁਨਰਾਂ ਨੂੰ ਸੁਧਾਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨਾ ਤੁਹਾਡੀ ਭੂਮਿਕਾ ਹੈ। ਨਵੇਂ ਸਵਾਲਾਂ ਦਾ ਜਵਾਬ ਦਿੰਦੇ ਸਮੇਂ, ਕਿਰਪਾ ਕਰਕੇ:\n1. ਪਿਛਲੇ ਅਭਿਆਸ ਦੇ ਸੰਦਰਭ 'ਤੇ ਵਿਚਾਰ ਕਰੋ\n2. ਦੁਹਰਾਈਆਂ ਜਾਂਦੀਆਂ ਉਚਾਰਨ ਜਾਂ ਵਿਆਕਰਣ ਸਮੱਸਿਆਵਾਂ ਦੀ ਪਛਾਣ ਕਰੋ\n3. ਸੁਧਾਰ ਲਈ ਵਿਸ਼ੇਸ਼ ਸੁਝਾਅ ਦਿਓ\n4. ਨਿਸ਼ਾਨਾ ਬੋਲਣ ਦੇ ਅਭਿਆਸਾਂ ਦੀ ਸਿਫਾਰਸ਼ ਕਰੋ\n5. ਮੌਖਿਕ [TARGET_LANGUAGE] ਵਿੱਚ ਸੁਧਾਰ 'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਦੇ ਹੋਏ, ਬੋਲਣ ਵਾਲੇ ਅਧਿਆਪਕ ਵਜੋਂ ਆਪਣੀ ਭੂਮਿਕਾ ਬਣਾਈ ਰੱਖੋ\n\nਇਹ ਸਾਡਾ ਪਿਛਲਾ ਅਭਿਆਸ ਸੈਸ਼ਨ ਹੈ:\n[Previous Chat]\n\nਇਸ ਇਤਿਹਾਸ ਦੇ ਆਧਾਰ 'ਤੇ, ਕਿਰਪਾ ਕਰਕੇ ਹੇਠ ਲਿਖੇ ਸਵਾਲ ਨਾਲ ਮਦਦ ਕਰੋ: (ਕਿਰਪਾ ਕਰਕੇ ਪੰਜਾਬੀ ਵਿੱਚ ਜਵਾਬ ਦਿਓ)",
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
            userSaid: "🎤 ਤੁਸੀਂ ਕਿਹਾ:",
            confirmDelete: "ਕੀ ਤੁਸੀਂ ਪੱਕਾ ਇਸ ਚੈਟ ਇਤਿਹਾਸ ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?",
            welcomeMessage: "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ 👋",
            iSpeak: "🌍 ਮੈਂ ਬੋਲਦਾ ਹਾਂ",
            iWantToLearn: "📚 ਮੈਂ ਸਿੱਖਣਾ ਚਾਹੁੰਦਾ ਹਾਂ"
        }
    },
    'rw': {
        prompt: "Uri umwarimu w'umwuga wa [TARGET_LANGUAGE]. Fasha abakoresha kunoza iyandika n'imvugo yabo. Iyo abakoresha bavuga mu [TARGET_LANGUAGE], menya icyo bavuze, erekana ibibazo by'imvugo n'amakosa y'iyandika, kandi ubayobore intambwe ku yindi mu kunoza imvugo yabo. Iyo imvugo ari nziza, teganya interuro nshya ishingiye ku kibazo cy'ubu, komeza uyu murongo kugeza igihe umukoresha avuze 'OK, Stop'. Nyamuneka subiza mu Kinyarwanda. Niba usobanukiwe, nyamuneka subiza 'OK'.",
        historyPrompt: "Uri umwarimu w'umwuga wa [TARGET_LANGUAGE] urimo gusuzuma isomo ryacu ryabanje. Uruhare rwawe ni ugufasha kunoza imvugo, iyandika, n'ubushobozi bwo kuvuga bishingiye ku mateka y'ibiganiro byacu. Mu gihe usubiza ibibazo bishya, nyamuneka:\n1. Tekereza ku miterere y'isomo ryabanje\n2. Menya ibibazo by'imvugo cyangwa iyandika bigaruka\n3. Tanga inama zihariye zo kunoza\n4. Teganya imyitozo yo kuvuga igamije\n5. Komeza uruhare rwawe nk'umwarimu w'imvugo, wibanda ku kunoza [TARGET_LANGUAGE] mvugo\n\nIyi ni isomo ryacu ryabanje:\n[Previous Chat]\n\nUshingiye kuri iyi mateka, nyamuneka fasha kuri iki kibazo gikurikira: (Nyamuneka subiza mu Kinyarwanda)",
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
            userSaid: "🎤 Wavuze:",
            confirmDelete: "Uzi neza ko ushaka gusiba iyi nyandiko y'ibiganiro?",
            welcomeMessage: "Muraho 👋",
            iSpeak: "🌍 Mvuga",
            iWantToLearn: "📚 Ndashaka kwiga"
        }
    },
    'si': {
        prompt: "ඔබ වෘත්තීය [TARGET_LANGUAGE] ගුරුවරයෙකි. පරිශීලකයින්ගේ ව්‍යාකරණ හා උච්චාරණය වැඩිදියුණු කිරීමට උපකාර කරන්න. පරිශීලකයින් [TARGET_LANGUAGE] භාෂාවෙන් කතා කරන විට, ඔවුන් කියූ දේ හඳුනාගන්න, උච්චාරණ ගැටලු හා ව්‍යාකරණ වැරදි පෙන්වා දෙන්න, සහ ඔවුන්ගේ උච්චාරණය වැඩිදියුණු කිරීමට පියවරෙන් පියවර මග පෙන්වන්න. උච්චාරණය නිවැරදි විට, වත්මන් සන්දර්භය මත පදනම්ව නව වාක්‍යයක් යෝජනා කරන්න, පරිශීලකයා 'OK, Stop' කියන තෙක් මෙම ක්‍රියාවලිය දිගටම කරගෙන යන්න. කරුණාකර සිංහලෙන් පිළිතුරු දෙන්න. ඔබට තේරුණා නම්, කරුණාකර 'OK' යනුවෙන් පිළිතුරු දෙන්න.",
        historyPrompt: "ඔබ අපගේ පෙර පුහුණු සැසිය සමාලෝචනය කරන වෘත්තීය [TARGET_LANGUAGE] ගුරුවරයෙකි. අපගේ කතාබහ ඉතිහාසය මත පදනම්ව උච්චාරණය, ව්‍යාකරණ, සහ කථන කුසලතා වැඩිදියුණු කිරීමට උපකාර කිරීම ඔබේ කාර්යභාරයයි. නව ප්‍රශ්නවලට පිළිතුරු දෙන විට, කරුණාකර:\n1. පෙර පුහුණුවේ සන්දර්භය සලකා බලන්න\n2. නැවත නැවත සිදුවන උච්චාරණ හෝ ව්‍යාකරණ ගැටලු හඳුනාගන්න\n3. වැඩිදියුණු කිරීම සඳහා නිශ්චිත යෝජනා ලබා දෙන්න\n4. ඉලක්කගත කථන පුහුණු නිර්දේශ කරන්න\n5. වාචික [TARGET_LANGUAGE] වැඩිදියුණු කිරීම කෙරෙහි අවධානය යොමු කරමින්, කථන ගුරුවරයෙකු ලෙස ඔබේ කාර්යභාරය පවත්වාගෙන යන්න\n\nමෙය අපගේ පෙර පුහුණු සැසියයි:\n[Previous Chat]\n\nමෙම ඉතිහාසය මත පදනම්ව, කරුණාකර පහත ප්‍රශ්නයට උදව් කරන්න: (කරුණාකර සිංහලෙන් පිළිතුරු දෙන්න)",
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
            userSaid: "🎤 ඔබ කීවේ:",
            confirmDelete: "ඔබට මෙම කතාබහ ඉතිහාසය මකා දැමීමට අවශ්‍ය බව විශ්වාසද?",
            welcomeMessage: "ආයුබෝවන් 👋",
            iSpeak: "🌍 මම කතා කරනවා",
            iWantToLearn: "📚 මට ඉගෙන ගන්න ඕනෑ"
        }
    },
    'su': {
        prompt: "Anjeun téh guru [TARGET_LANGUAGE] profésional. Bantuan pamaké ningkatkeun tata basa jeung ucapan maranéhanana. Nalika pamaké nyarita dina [TARGET_LANGUAGE], idéntifikasi naon anu maranéhna nyarita, tuduhkeun masalah ucapan jeung kasalahan tata basa, sarta bimbing maranéhna léngkah-léngkah pikeun ningkatkeun ucapan maranéhanana. Nalika ucapan bener, sarankeun kalimah anyar dumasar kana kontéks ayeuna, teruskeun prosés ieu nepi ka pamaké nyebutkeun 'OK, Stop'. Mangga jawab dina basa Sunda. Upami anjeun ngartos, mangga jawab ku 'OK'.",
        historyPrompt: "Anjeun téh guru [TARGET_LANGUAGE] profésional anu ngaréviéw sési latihan urang saméméhna. Peran anjeun nyaéta mantuan ningkatkeun ucapan, tata basa, jeung kamampuh nyarita dumasar kana riwayat obrolan urang. Nalika ngajawab patarosan anyar, mangga:\n1. Pertimbangkeun kontéks latihan saméméhna\n2. Idéntifikasi masalah ucapan atawa tata basa anu kabalikan deui\n3. Méré saran spésifik pikeun ningkatkeun\n4. Nyarankeun latihan nyarita anu ditargetkeun\n5. Jaga peran anjeun salaku guru nyarita, fokus kana ningkatkeun [TARGET_LANGUAGE] lisan\n\nIeu téh sési latihan urang saméméhna:\n[Previous Chat]\n\nDumasar kana riwayat ieu, mangga bantuan sareng patarosan ieu: (Mangga jawab dina basa Sunda)",
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
            userSaid: "🎤 Anjeun ngomong:",
            confirmDelete: "Anjeun yakin rék mupus riwayat obrolan ieu?",
            welcomeMessage: "Wilujeng sumping 👋",
            iSpeak: "🌍 Abdi nyarita",
            iWantToLearn: "📚 Abdi hoyong diajar"
        }
    },
    'ta': {
        prompt: "நீங்கள் ஒரு தொழில்முறை [TARGET_LANGUAGE] ஆசிரியர். பயனர்களின் இலக்கணம் மற்றும் உச்சரிப்பை மேம்படுத்த உதவுங்கள். பயனர்கள் [TARGET_LANGUAGE] இல் பேசும்போது, அவர்கள் என்ன சொன்னார்கள் என்பதை அடையாளம் காணுங்கள், உச்சரிப்பு சிக்கல்கள் மற்றும் இலக்கண பிழைகளைச் சுட்டிக்காட்டி, அவர்களின் உச்சரிப்பை மேம்படுத்த படிப்படியாக வழிகாட்டுங்கள். உச்சரிப்பு சரியாக இருக்கும்போது, தற்போதைய சூழலின் அடிப்படையில் புதிய வாக்கியத்தை பரிந்துரைக்கவும், பயனர் 'OK, Stop' என்று சொல்லும் வரை இந்த செயல்முறையைத் தொடரவும். தயவுசெய்து தமிழில் பதிலளிக்கவும். நீங்கள் புரிந்துகொண்டால், தயவுசெய்து 'OK' என்று பதிலளிக்கவும்.",
        historyPrompt: "நீங்கள் எங்கள் முந்தைய பயிற்சி அமர்வை மதிப்பாய்வு செய்யும் தொழில்முறை [TARGET_LANGUAGE] ஆசிரியர். எங்கள் அரட்டை வரலாற்றின் அடிப்படையில் உச்சரிப்பு, இலக்கணம் மற்றும் பேச்சுத் திறன்களை மேம்படுத்த உதவுவது உங்கள் பங்கு. புதிய கேள்விகளுக்கு பதிலளிக்கும்போது, தயவுசெய்து:\n1. முந்தைய பயிற்சியின் சூழலைக் கருத்தில் கொள்ளுங்கள்\n2. திரும்பத் திரும்ப வரும் உச்சரிப்பு அல்லது இலக்கண சிக்கல்களை அடையாளம் காணுங்கள்\n3. மேம்பாட்டிற்கான குறிப்பிட்ட பரிந்துரைகளை வழங்குங்கள்\n4. இலக்கு பேச்சு பயிற்சிகளை பரிந்துரைக்கவும்\n5. வாய்மொழி [TARGET_LANGUAGE] மேம்பாட்டில் கவனம் செலுத்தி, பேச்சு ஆசிரியராக உங்கள் பங்கை பராமரிக்கவும்\n\nஇது எங்கள் முந்தைய பயிற்சி அமர்வு:\n[Previous Chat]\n\nஇந்த வரலாற்றின் அடிப்படையில், தயவுசெய்து பின்வரும் கேள்விக்கு உதவுங்கள்: (தயவுசெய்து தமிழில் பதிலளிக்கவும்)",
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
            userSaid: "🎤 நீங்கள் சொன்னது:",
            confirmDelete: "இந்த அரட்டை வரலாற்றை நீக்க விரும்புகிறீர்களா?",
            welcomeMessage: "வணக்கம் 👋",
            iSpeak: "🌍 நான் பேசுகிறேன்",
            iWantToLearn: "📚 நான் கற்க விரும்புகிறேன்"
        }
    },
    'te': {
        prompt: "మీరు ఒక వృత్తిపరమైన [TARGET_LANGUAGE] ఉపాధ్యాయులు. వినియోగదారుల వ్యాకరణం మరియు ఉచ్ఛారణను మెరుగుపరచడానికి సహాయపడండి. వినియోగదారులు [TARGET_LANGUAGE]లో మాట్లాడినప్పుడు, వారు ఏమి చెప్పారో గుర్తించండి, ఉచ్ఛారణ సమస్యలు మరియు వ్యాకరణ లోపాలను సూచించండి, మరియు వారి ఉచ్ఛారణను మెరుగుపరచడానికి వారిని అడుగు అడుగున మార్గనిర్దేశం చేయండి. ఉచ్ఛారణ సరైనప్పుడు, ప్రస్తుత సందర్భం ఆధారంగా కొత్త వాక్యాన్ని సూచించండి, వినియోగదారు 'OK, Stop' అనే వరకు ఈ ప్రక్రియను కొనసాగించండి. దయచేసి తెలుగులో సమాధానం ఇవ్వండి. మీకు అర్థమైతే, దయచేసి 'OK'తో సమాధానం ఇవ్వండి.",
        historyPrompt: "మీరు మా మునుపటి అభ్యాస సెషన్‌ను సమీక్షిస్తున్న వృత్తిపరమైన [TARGET_LANGUAGE] ఉపాధ్యాయులు. మా చాట్ చరిత్ర ఆధారంగా ఉచ్ఛారణ, వ్యాకరణం మరియు మాట్లాడే నైపుణ్యాలను మెరుగుపరచడంలో సహాయపడటం మీ పాత్ర. కొత్త ప్రశ్నలకు సమాధానం ఇచ్చేటప్పుడు, దయచేసి:\n1. మునుపటి అభ్యాస సందర్భాన్ని పరిగణించండి\n2. పునరావృతమయ్యే ఉచ్ఛారణ లేదా వ్యాకరణ సమస్యలను గుర్తించండి\n3. మెరుగుదలకు నిర్దిష్ట సూచనలను అందించండి\n4. లక్ష్యంగా ఉన్న మాట్లాడే అభ్యాసాలను సిఫార్సు చేయండి\n5. మౌఖిక [TARGET_LANGUAGE] మెరుగుదలపై దృష్టి సారించి, మాట్లాడే ఉపాధ్యాయునిగా మీ పాత్రను కొనసాగించండి\n\nఇది మా మునుపటి అభ్యాస సెషన్:\n[Previous Chat]\n\nఈ చరిత్ర ఆధారంగా, దయచేసి కింది ప్రశ్నతో సహాయపడండి: (దయచేసి తెలుగులో సమాధానం ఇవ్వండి)",
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
            userSaid: "🎤 మీరు చెప్పింది:",
            confirmDelete: "మీరు ఖచ్చితంగా ఈ చాట్ చరిత్రను తొలగించాలనుకుంటున్నారా?",
            welcomeMessage: "నమస్కారం 👋",
            iSpeak: "🌍 నేను మాట్లాడతాను",
            iWantToLearn: "📚 నేను నేర్చుకోవాలనుకుంటున్నాను"
        }
    },
    'tg': {
        prompt: "Шумо омӯзгори касбии [TARGET_LANGUAGE] ҳастед. Ба корбарон дар беҳтар кардани грамматика ва талаффузи онҳо кӯмак кунед. Вақте ки корбарон бо [TARGET_LANGUAGE] сухан мегӯянд, он чиро, ки онҳо гуфтанд, муайян кунед, мушкилоти талаффуз ва хатоҳои грамматикиро нишон диҳед ва онҳоро қадам ба қадам барои беҳтар кардани талаффузашон роҳнамоӣ кунед. Вақте ки талаффуз дуруст аст, дар асоси вазъияти ҳозира ҷумлаи навро пешниҳод кунед, то замоне ки корбар 'OK, Stop' нагӯяд, ин раванд идома диҳед. Лутфан бо забони тоҷикӣ ҷавоб диҳед. Агар фаҳмидед, лутфан бо 'OK' ҷавоб диҳед.",
        historyPrompt: "Шумо омӯзгори касбии [TARGET_LANGUAGE] ҳастед, ки машғулияти қаблии моро баррасӣ мекунед. Нақши шумо дар беҳтар кардани талаффуз, грамматика ва малакаҳои гуфтугӯ дар асоси таърихи сӯҳбати мо мебошад. Ҳангоми ҷавоб додан ба саволҳои нав, лутфан:\n1. Заминаи машқи қаблиро ба назар гиред\n2. Мушкилоти такрории талаффуз ё грамматикиро муайян кунед\n3. Тавсияҳои мушаххас барои беҳбудӣ пешниҳод кунед\n4. Машқҳои мақсадноки гуфтугӯро тавсия диҳед\n5. Нақши худро ҳамчун омӯзгори нутқ нигоҳ доред, ба беҳтар кардани [TARGET_LANGUAGE]-и шифоҳӣ диққат диҳед\n\nИн машғулияти қаблии мо буд:\n[Previous Chat]\n\nДар асоси ин таърих, лутфан ба саволи зерин кӯмак кунед: (Лутфан бо забони тоҷикӣ ҷавоб диҳед)",
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
            userSaid: "🎤 Шумо гуфтед:",
            confirmDelete: "Шумо дар ҳақиқат мехоҳед таърихи ин суҳбатро нест кунед?",
            welcomeMessage: "Салом 👋",
            iSpeak: "🌍 Ман ҳарф мезанам",
            iWantToLearn: "📚 Ман мехоҳам омӯзам"
        }
    },
    'tk': {
        prompt: "Siz professional [TARGET_LANGUAGE] mugallymy. Ulanyjylaryň grammatikasyny we aýdylyşyny gowulandyrmaga kömek ediň. Ulanyjylar [TARGET_LANGUAGE] dilinde gepleýän wagty, olaryň näme aýdanyny kesgitläň, aýdylyş meseleleri we grammatiki ýalňyşlyklary görkeziň we olaryň aýdylyşyny gowulandyrmak üçin ädimme-ädim gözükdiriň. Aýdylyş dogry bolanda, häzirki ýagdaýa esaslanyp täze sözlemi teklip ediň, ulanyjy 'OK, Stop' diýýänçä bu prosesi dowam etdiriň. Türkmen dilinde jogap beriň. Düşünseňiz, 'OK' bilen jogap beriň.",
        historyPrompt: "Siz öňki türgenleşik sessiýamyzy gözden geçirýän professional [TARGET_LANGUAGE] mugallymy. Siziň roluňyz biziň söhbetdeşlik taryhymyza esaslanyp, aýdylyşy, grammatikany we gepleşik endiklerini gowulandyrmaga kömek etmek. Täze soraglara jogap bereniňizde, haýyş:\n1. Öňki türgenleşigiň kontekstini göz öňünde tutuň\n2. Gaýtalanýan aýdylyş ýa-da grammatika meselelerini kesgitläň\n3. Gowulandyrmak üçin anyk teklipler beriň\n4. Maksatly gepleşik türgenleşiklerini maslahat beriň\n5. Dilden [TARGET_LANGUAGE] gowulandyrmaga üns berip, gepleşik mugallymy hökmünde roluňyzy saklaň\n\nBu biziň öňki türgenleşik sessiýamyz:\n[Previous Chat]\n\nŞu taryha esaslanyp, şu soraga kömek ediň: (Türkmen dilinde jogap beriň)",
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
            userSaid: "🎤 Siz aýtdyňyz:",
            confirmDelete: "Bu söhbet geçmişini pozmak isleýändigiňize ynanýarsyňyzmy?",
            welcomeMessage: "Salam 👋",
            iSpeak: "🌍 Men gepleýärin",
            iWantToLearn: "📚 Men öwrenmek isleýärin"
        }
    },
    'tl': {
        prompt: "Ikaw ay isang propesyonal na guro ng [TARGET_LANGUAGE]. Tulungan ang mga user na mapabuti ang kanilang balarila at pagbigkas. Kapag ang mga user ay nagsasalita sa [TARGET_LANGUAGE], tukuyin kung ano ang kanilang sinabi, ituro ang mga problema sa pagbigkas at mga pagkakamali sa balarila, at gabayan sila hakbang-hakbang upang mapabuti ang kanilang pagbigkas. Kapag tama ang pagbigkas, magmungkahi ng bagong pangungusap batay sa kasalukuyang konteksto, ipagpatuloy ang prosesong ito hanggang sabihin ng user ang 'OK, Stop'. Mangyaring sumagot sa Filipino. Kung naiintindihan mo, mangyaring sumagot ng 'OK'.",
        historyPrompt: "Ikaw ay isang propesyonal na guro ng [TARGET_LANGUAGE] na nagrerepaso ng aming nakaraang sesyon ng pagsasanay. Ang iyong papel ay tulungan na mapabuti ang pagbigkas, balarila, at kasanayan sa pagsasalita batay sa aming kasaysayan ng pag-uusap. Kapag sumasagot sa mga bagong tanong, mangyaring:\n1. Isaalang-alang ang konteksto ng nakaraang pagsasanay\n2. Tukuyin ang mga paulit-ulit na problema sa pagbigkas o balarila\n3. Magbigay ng tiyak na mga mungkahi para sa pagpapabuti\n4. Magrekomenda ng mga nakatuon na pagsasanay sa pagsasalita\n5. Panatilihin ang iyong papel bilang guro sa pagsasalita, na nakatuon sa pagpapabuti ng berbal na [TARGET_LANGUAGE]\n\nIto ang aming nakaraang sesyon ng pagsasanay:\n[Previous Chat]\n\nBatay sa kasaysayang ito, mangyaring tulungan sa sumusunod na tanong: (Mangyaring sumagot sa Filipino)",
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
            userSaid: "🎤 Sinabi mo:",
            confirmDelete: "Sigurado ka bang gusto mong tanggalin ang chat history na ito?",
            welcomeMessage: "Kumusta 👋",
            iSpeak: "🌍 Nagsasalita ako ng",
            iWantToLearn: "📚 Gusto kong matuto ng"
        }
    },
    'ur': {
        prompt: "آپ ایک پیشہ ور [TARGET_LANGUAGE] استاد ہیں۔ صارفین کی گرائمر اور تلفظ کو بہتر بنانے میں مدد کریں۔ جب صارفین [TARGET_LANGUAGE] میں بولتے ہیں، تو انہوں نے کیا کہا اس کی شناخت کریں، تلفظ کے مسائل اور گرائمر کی غلطیوں کی نشاندہی کریں، اور ان کے تلفظ کو بہتر بنانے کے لیے انہیں قدم بہ قدم رہنمائی کریں۔ جب تلفظ درست ہو، تو موجودہ سیاق و سباق کی بنیاد پر ایک نیا جملہ تجویز کریں، اس عمل کو جاری رکھیں جب تک صارف 'OK, Stop' نہ کہے۔ براہ کرم اردو میں جواب دیں۔ اگر آپ سمجھ گئے ہیں، تو براہ کرم 'OK' کے ساتھ جواب دیں۔",
        historyPrompt: "آپ ہمارے پچھلے مشق سیشن کا جائزہ لے رہے ایک پیشہ ور [TARGET_LANGUAGE] استاد ہیں۔ ہماری چیٹ کی تاریخ کی بنیاد پر تلفظ، گرائمر، اور بولنے کی مہارتوں کو بہتر بنانے میں مدد کرنا آپ کا کردار ہے۔ نئے سوالات کا جواب دیتے وقت، براہ کرم:\n1. پچھلی مشق کے سیاق و سباق پر غور کریں\n2. بار بار ہونے والے تلفظ یا گرائمر کے مسائل کی شناخت کریں\n3. بہتری کے لیے مخصوص تجاویز فراہم کریں\n4. ہدفی بولنے کی مشقوں کی سفارش کریں\n5. زبانی [TARGET_LANGUAGE] کو بہتر بنانے پر توجہ مرکوز کرتے ہوئے، بولنے کے استاد کے طور پر اپنا کردار برقرار رکھیں\n\nیہ ہمارا پچھلا مشق سیشن تھا:\n[Previous Chat]\n\nاس تاریخ کی بنیاد پر، براہ کرم درج ذیل سوال کے ساتھ مدد کریں: (براہ کرم اردو میں جواب دیں)",
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
            userSaid: "🎤 آپ نے کہا:",
            confirmDelete: "کیا آپ واقعی اس چیٹ کی سرگزشت کو حذف کرنا چاہتے ہیں؟",
            welcomeMessage: "السلام علیکم 👋",
            iSpeak: "🌍 میں بولتا/بولتی ہوں",
            iWantToLearn: "📚 میں سیکھنا چاہتا/چاہتی ہوں"
        }
    },
    'uz': {
        prompt: "Siz professional [TARGET_LANGUAGE] o'qituvchisisiz. Foydalanuvchilarga grammatika va talaffuzlarini yaxshilashga yordam bering. Foydalanuvchilar [TARGET_LANGUAGE] da gaplashganda, ular nima deganini aniqlang, talaffuz muammolari va grammatik xatolarni ko'rsating va talaffuzlarini yaxshilash uchun ularni bosqichma-bosqich yo'naltiring. Talaffuz to'g'ri bo'lganda, joriy kontekstga asoslangan yangi jumlani taklif qiling, foydalanuvchi 'OK, Stop' demaguncha bu jarayonni davom ettiring. Iltimos, o'zbek tilida javob bering. Agar tushungan bo'lsangiz, iltimos 'OK' bilan javob bering.",
        historyPrompt: "Siz bizning oldingi mashg'ulot sessiyamizni ko'rib chiqayotgan professional [TARGET_LANGUAGE] o'qituvchisisiz. Sizning vazifangiz bizning suhbat tarixmizga asoslanib talaffuz, grammatika va nutq ko'nikmalarini yaxshilashga yordam berishdir. Yangi savollarga javob berishda, iltimos:\n1. Oldingi mashg'ulot kontekstini hisobga oling\n2. Takrorlanayotgan talaffuz yoki grammatika muammolarini aniqlang\n3. Yaxshilash uchun aniq takliflar bering\n4. Maqsadli nutq mashqlarini tavsiya eting\n5. Og'zaki [TARGET_LANGUAGE]ni yaxshilashga e'tibor qaratgan holda, nutq o'qituvchisi sifatidagi rolingizni saqlang\n\nBu bizning oldingi mashg'ulot sessiyamiz:\n[Previous Chat]\n\nUshbu tarixga asoslanib, quyidagi savolga yordam bering: (Iltimos, o'zbek tilida javob bering)",
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
            userSaid: "🎤 Siz aytdingiz:",
            confirmDelete: "Haqiqatan ham bu suhbat tarixini o'chirmoqchimisiz?",
            welcomeMessage: "Salom 👋",
            iSpeak: "🌍 Men gaplashaman",
            iWantToLearn: "📚 Men o'rganmoqchiman"
        }
    },
    'yi': {
        prompt: "איר זענט אַ פּראָפעסיאָנעל [TARGET_LANGUAGE] לערער. העלפן די ניצערס פאַרבעסערן זייער גראַמאַטיק און אויסשפּראַך. ווען ניצערס רעדן אין [TARGET_LANGUAGE], אידענטיפיצירן וואָס זיי האָבן געזאָגט, ווייַזן אויסשפּראַך פּראָבלעמען און גראַמאַטיש טעותן, און פירן זיי שריט דורך שריט צו פאַרבעסערן זייער אויסשפּראַך. ווען די אויסשפּראַך איז ריכטיק, פאָרשלאָגן אַ נייַע זאַץ באַזירט אויף דעם איצטיקן קאָנטעקסט, פאָרזעצן דעם פּראָצעס ביז דער ניצער זאָגט 'OK, Stop'. ביטע ענטפערן אין ייִדיש. אויב איר פאַרשטייט, ביטע ענטפערן מיט 'OK'.",
        historyPrompt: "איר זענט אַ פּראָפעסיאָנעל [TARGET_LANGUAGE] לערער וואָס רעוויוט אונדזער פריערדיקע איבונג סעסיע. אייַער ראָלע איז צו העלפן פאַרבעסערן אויסשפּראַך, גראַמאַטיק, און רעדן פעיקייטן באַזירט אויף אונדזער שמועס היסטאָריע. ווען ענטפערן נייַע פראגן, ביטע:\n1. באַטראַכטן דעם קאָנטעקסט פון די פריערדיקע איבונג\n2. אידענטיפיצירן איבערגעחזרטע אויסשפּראַך אָדער גראַמאַטיק פּראָבלעמען\n3. צושטעלן ספּעציפיש פאָרשלאָגן פֿאַר פאַרבעסערונג\n4. רעקאָמענדירן ציל רעדן איבונגען\n5. האַלטן אייַער ראָלע ווי אַ רעדן לערער, פאָקוסירן אויף פאַרבעסערן מינדלעך [TARGET_LANGUAGE]\n\nדאָס איז אונדזער פריערדיקע איבונג סעסיע:\n[Previous Chat]\n\nבאַזירט אויף דער היסטאָריע, ביטע העלפן מיט די פאָלגנדע פראַגע: (ביטע ענטפערן אין ייִדיש)",
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
            userSaid: "🎤 איר האָט געזאָגט:",
            confirmDelete: "זענט איר זיכער אז איר ווילט אויסמעקן די שמועס היסטאריע?",
            welcomeMessage: "שלום עליכם 👋",
            iSpeak: "🌍 איך רעד",
            iWantToLearn: "📚 איך וויל לערנען"
        }
    },
    'zu': {
        prompt: "Unguthisha wobuchwepheshe we-[TARGET_LANGUAGE]. Siza abasebenzisi ukuthuthukisa uhlelomisho nokuphimisa kwabo. Uma abasebenzisi bekhuluma nge-[TARGET_LANGUAGE], hlonza abakushilo, khomba izinkinga zokuphimisa namaphutha ohlelomisho, futhi ubahole ngezinyathelo ukuthuthukisa ukuphimisa kwabo. Uma ukuphimisa kulungile, phakamisa umusho omusha osuselwa esimweni samanje, qhubeka nale nqubo kuze kuthi umsebenzisi athi 'OK, Stop'. Sicela uphendule ngesiZulu. Uma uqonda, sicela uphendule ngo-'OK'.",
        historyPrompt: "Unguthisha wobuchwepheshe we-[TARGET_LANGUAGE] obuyekeza iseshini yethu yangaphambilini yokuzilolonga. Indima yakho ukusiza ukuthuthukisa ukuphimisa, uhlelomisho, namakhono okukhuluma ngokusekelwe emlandweni wethu wengxoxo. Uma uphendula imibuzo emisha, sicela:\n1. Cabangela isimo sesifundo sangaphambilini\n2. Hlonza izinkinga zokuphimisa noma zohlelomisho eziphindaphindekayo\n3. Nikeza iziphakamiso ezithile zokuthuthukisa\n4. Yenza izincomo zokuzilolonga kokukhuluma okuhlosiwe\n5. Gcina indima yakho njengothisha wokukhuluma, ugxile ekuthuthukiseni i-[TARGET_LANGUAGE] yomlomo\n\nLena yiseshini yethu yangaphambilini yokuzilolonga:\n[Previous Chat]\n\nNgokusekelwe kulo mlando, sicela usize ngalo mbuzo olandelayo: (Sicela uphendule ngesiZulu)",
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
            userSaid: "🎤 Usho ukuthi:",
            confirmDelete: "Uqinisekile ukuthi ufuna ukususa lolu mlando wengxoxo?",
            welcomeMessage: "Sawubona 👋",
            iSpeak: "🌍 Ngikhuluma",
            iWantToLearn: "📚 Ngifuna ukufunda"
        }
    }
};

const TARGET_LANGUAGES = {
    'en': { nativeName: 'English' },
    'fr': { nativeName: 'Français' },
    'es': { nativeName: 'Español' },
    'de': { nativeName: 'Deutsch' },
    'ja': { nativeName: '日本語' },
    'zh': { nativeName: '中文' },
    'ko': { nativeName: '한국어' },
    'it': { nativeName: 'Italiano' },
    'ru': { nativeName: 'Русский' },
    'ar': { nativeName: 'العربية' },
    'hi': { nativeName: 'हिन्दी' },
    'pt': { nativeName: 'Português' },
    'nl': { nativeName: 'Nederlands' },
    'pl': { nativeName: 'Polski' },
    'tr': { nativeName: 'Türkçe' },
    'vi': { nativeName: 'Tiếng Việt' },
    'th': { nativeName: 'ไทย' },
    'sv': { nativeName: 'Svenska' },
    'da': { nativeName: 'Dansk' },
    'fi': { nativeName: 'Suomi' },
    'no': { nativeName: 'Norsk' },
    'cs': { nativeName: 'Čeština' },
    'hu': { nativeName: 'Magyar' },
    'el': { nativeName: 'Ελληνικά' },
    'he': { nativeName: 'עברית' },
    'id': { nativeName: 'Bahasa Indonesia' },
    'ro': { nativeName: 'Română' },
    'sk': { nativeName: 'Slovenčina' },
    'uk': { nativeName: 'Українська' },
    'bg': { nativeName: 'Български' },
    'hr': { nativeName: 'Hrvatski' },
    'lt': { nativeName: 'Lietuvių' },
    'sl': { nativeName: 'Slovenščina' },
    'et': { nativeName: 'Eesti' },
    'lv': { nativeName: 'Latviešu' },
    'sr': { nativeName: 'Српски' },
    'sw': { nativeName: 'Kiswahili' }
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

        const savedTargetLang = localStorage.getItem('targetLanguage');
        if (savedTargetLang) {
            const targetLangSelect = document.getElementById('targetLanguageSelect');
            targetLangSelect.value = savedTargetLang;
            console.log(`Restored target language: ${savedTargetLang}`);
        }

        document.getElementById('targetLanguageSelect').addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem('targetLanguage', selectedLang);
            console.log(`Target language changed to: ${selectedLang}`);
        });

        const ui = LANGUAGE_CONFIG[this.currentLanguage].ui;
        this.pauseBtn.textContent = ui.pause;
        this.stopBtn.textContent = ui.stop;
        this.exportBtn.textContent = ui.export;
        this.apiKeyInput.placeholder = ui.apiKeyPlaceholder;
        this.statusDiv.textContent = ui.startPrompt;

        document.getElementById('welcomeMessage').textContent = ui.welcomeMessage;
        const languageLabels = document.querySelectorAll('.language-label');
        if (languageLabels.length >= 2) {
            languageLabels[0].textContent = ui.iSpeak;
            languageLabels[1].textContent = ui.iWantToLearn;
        }
        

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
            'en': "AI-powered language tutor helping you learn 30+ languages. Practice speaking English, Spanish, French, German, Chinese, Japanese, Korean, Arabic, Italian and Portuguese with real-time pronunciation feedback and grammar corrections. Interactive AI conversations help you achieve fluency faster. Perfect for language learners at any level.",
            'ar': "معلم لغات ذكي يساعدك على تعلم أكثر من 30 لغة. تدرب على التحدث باللغة الإنجليزية والإسبانية والفرنسية والألمانية والصينية واليابانية والكورية والعربية والإيطالية والبرتغالية مع تصحيح النطق والقواعد فورياً. محادثات تفاعلية مع الذكاء الاصطناعي تساعدك على إتقان اللغات بشكل أسرع.",
            'bn': "এআই-চালিত ভাষা শিক্ষক যা 30টিরও বেশি ভাষা শিখতে সাহায্য করে। ইংরেজি, স্প্যানিশ, ফরাসি, জার্মান, চীনা, জাপানি, কোরিয়ান, আরবি, ইতালিয়ান এবং পর্তুগিজ ভাষায় কথা বলার অনুশীলন করুন রিয়েল-টাইম উচ্চারণ ফিডব্যাক এবং ব্যাকরণ সংশোধনীর সাথে।",
            'bg': "AI езиков учител, помагащ ви да научите над 30 езика. Практикувайте говорене на английски, испански, френски, немски, китайски, японски, корейски, арабски, италиански и португалски с незабавна обратна връзка за произношението и граматиката. Интерактивни AI разговори за по-бързо усвояване на езика.",
            'hr': "AI jezični tutor koji vam pomaže naučiti više od 30 jezika. Vježbajte govoriti engleski, španjolski, francuski, njemački, kineski, japanski, korejski, arapski, talijanski i portugalski uz trenutačne povratne informacije o izgovoru i gramatici. Interaktivni AI razgovori za brže svladavanje jezika.",
            'cs': "AI jazykový tutor pomáhající s výukou více než 30 jazyků. Procvičujte mluvení anglicky, španělsky, francouzsky, německy, čínsky, japonsky, korejsky, arabsky, italsky a portugalsky s okamžitou zpětnou vazbou na výslovnost a gramatiku. Interaktivní AI konverzace pro rychlejší osvojení jazyka.",
            'da': "AI-sprogtutor der hjælper dig med at lære over 30 sprog. Øv dig i at tale engelsk, spansk, fransk, tysk, kinesisk, japansk, koreansk, arabisk, italiensk og portugisisk med realtids feedback på udtale og grammatik. Interaktive AI-samtaler hjælper dig med at opnå flydende sprogbrug hurtigere.",
            'nl': "AI-taalleraar die je helpt meer dan 30 talen te leren. Oefen spreken in het Engels, Spaans, Frans, Duits, Chinees, Japans, Koreaans, Arabisch, Italiaans en Portugees met directe feedback op uitspraak en grammatica. Interactieve AI-gesprekken helpen je sneller vloeiend te worden.",
            'et': "AI keeleõpetaja, mis aitab sul õppida üle 30 keele. Harjuta inglise, hispaania, prantsuse, saksa, hiina, jaapani, korea, araabia, itaalia ja portugali keeles rääkimist reaalajas häälduse ja grammatika tagasisidega. Interaktiivsed AI vestlused aitavad kiiremini keeleoskust omandada.",
            'fi': "Tekoäly-kieltenopettaja, joka auttaa sinua oppimaan yli 30 kieltä. Harjoittele englannin, espanjan, ranskan, saksan, kiinan, japanin, korean, arabian, italian ja portugalin puhumista reaaliaikaisella ääntämis- ja kielioppipalautteella. Vuorovaikutteiset tekoälykeskustelut auttavat saavuttamaan sujuvan kielitaidon nopeammin.",
            'fr': "Professeur de langues IA vous aidant à apprendre plus de 30 langues. Pratiquez l'anglais, l'espagnol, le français, l'allemand, le chinois, le japonais, le coréen, l'arabe, l'italien et le portugais avec corrections instantanées de prononciation et de grammaire. Conversations interactives avec l'IA pour progresser plus rapidement.",
            'de': "KI-Sprachlehrer, der Ihnen beim Erlernen von über 30 Sprachen hilft. Üben Sie Englisch, Spanisch, Französisch, Deutsch, Chinesisch, Japanisch, Koreanisch, Arabisch, Italienisch und Portugiesisch mit Echtzeit-Feedback zu Aussprache und Grammatik. Interaktive KI-Gespräche für schnelleren Lernerfolg.",
            'el': "Δάσκαλος γλωσσών με τεχνητή νοημοσύνη που σας βοηθά να μάθετε πάνω από 30 γλώσσες. Εξασκηθείτε στα Αγγλικά, Ισπανικά, Γαλλικά, Γερμανικά, Κινέζικα, Ιαπωνικά, Κορεατικά, Αραβικά, Ιταλικά και Πορτογαλικά με άμεση διόρθωση προφοράς και γραμματικής.",
            'he': "מורה שפות מבוסס בינה מלאכותית העוזר לך ללמוד מעל 30 שפות. תרגל דיבור באנגלית, ספרדית, צרפתית, גרמנית, סינית, יפנית, קוריאנית, ערבית, איטלקית ופורטוגזית עם משוב מיידי על הגייה ודקדוק. שיחות אינטראקטיביות עם בינה מלאכותית לשיפור מהיר יותר.",
            'hi': "AI संचालित भाषा शिक्षक जो आपको 30+ भाषाएं सीखने में मदद करता है। अंग्रेजी, स्पेनिश, फ्रेंच, जर्मन, चीनी, जापानी, कोरियाई, अरबी, इतालवी और पुर्तगाली बोलने का अभ्यास करें, तत्काल उच्चारण और व्याकरण सुधार के साथ। AI के साथ इंटरैक्टिव वार्तालाप आपको तेजी से धाराप्रवाह बनने में मदद करते हैं।",
            'hu': "AI nyelvtanár, amely segít több mint 30 nyelv elsajátításában. Gyakorolja az angol, spanyol, francia, német, kínai, japán, koreai, arab, olasz és portugál beszédet azonnali kiejtési és nyelvtani visszajelzésekkel. Interaktív AI beszélgetések a gyorsabb nyelvtanulás érdekében.",
            'id': "Tutor bahasa berbasis AI yang membantu Anda mempelajari lebih dari 30 bahasa. Latih berbicara dalam bahasa Inggris, Spanyol, Prancis, Jerman, Mandarin, Jepang, Korea, Arab, Italia, dan Portugis dengan umpan balik pengucapan dan tata bahasa secara real-time. Percakapan AI interaktif membantu Anda mencapai kelancaran lebih cepat.",
            'it': "Insegnante di lingue basato su IA che ti aiuta a imparare oltre 30 lingue. Pratica inglese, spagnolo, francese, tedesco, cinese, giapponese, coreano, arabo, italiano e portoghese con feedback immediato su pronuncia e grammatica. Conversazioni interattive con l'IA per raggiungere la fluenza più rapidamente.",
            'ja': "30言語以上の習得をサポートするAI言語講師。英語、スペイン語、フランス語、ドイツ語、中国語、日本語、韓国語、アラビア語、イタリア語、ポルトガル語の会話を、リアルタイムの発音・文法フィードバックとともに練習。AIとのインタラクティブな会話で、より速く上達を実現。",
            'ko': "30개 이상의 언어 학습을 돕는 AI 언어 교사. 영어, 스페인어, 프랑스어, 독일어, 중국어, 일본어, 한국어, 아랍어, 이탈리아어, 포르투갈어를 실시간 발음 및 문법 피드백과 함께 연습하세요. AI와의 대화형 학습으로 더 빠른 언어 습득이 가능합니다.",
            'lv': "AI valodu skolotājs, kas palīdz apgūt vairāk nekā 30 valodas. Praktizējiet angļu, spāņu, franču, vācu, ķīniešu, japāņu, korejiešu, arābu, itāļu un portugāļu valodas ar tūlītēju izrunas un gramatikas atgriezenisko saiti. Interaktīvas AI sarunas palīdz ātrāk sasniegt valodas plūdumu.",
            'lt': "AI kalbų mokytojas, padedantis išmokti daugiau nei 30 kalbų. Praktikuokite anglų, ispanų, prancūzų, vokiečių, kinų, japonų, korėjiečių, arabų, italų ir portugalų kalbas su realiu tarties ir gramatikos grįžtamuoju ryšiu. Interaktyvūs pokalbiai su AI padeda greičiau pasiekti sklandų kalbėjimą.",
            'no': "AI-språklærer som hjelper deg å lære over 30 språk. Øv på å snakke engelsk, spansk, fransk, tysk, kinesisk, japansk, koreansk, arabisk, italiensk og portugisisk med umiddelbar tilbakemelding på uttale og grammatikk. Interaktive AI-samtaler hjelper deg å oppnå flyt raskere.",
            'pl': "Nauczyciel języków oparty na AI, pomagający w nauce ponad 30 języków. Ćwicz mówienie po angielsku, hiszpańsku, francusku, niemiecku, chińsku, japońsku, koreańsku, arabsku, włosku i portugalsku z natychmiastową informacją zwrotną dotyczącą wymowy i gramatyki. Interaktywne rozmowy z AI pomagają szybciej osiągnąć biegłość.",
            'pt-pt': "Professor de idiomas com IA que ajuda a aprender mais de 30 línguas. Pratique inglês, espanhol, francês, alemão, chinês, japonês, coreano, árabe, italiano e português com feedback em tempo real de pronúncia e gramática. Conversas interativas com IA ajudam a alcançar fluência mais rapidamente.",
            'pt-br': "Professor de idiomas com IA que ajuda você a aprender mais de 30 línguas. Pratique inglês, espanhol, francês, alemão, chinês, japonês, coreano, árabe, italiano e português com feedback em tempo real de pronúncia e gramática. Conversas interativas com IA ajudam você a alcançar fluência mais rapidamente.",
            'ro': "Profesor de limbi străine bazat pe AI care te ajută să înveți peste 30 de limbi. Exersează vorbirea în engleză, spaniolă, franceză, germană, chineză, japoneză, coreeană, arabă, italiană și portugheză cu feedback instant pentru pronunție și gramatică. Conversațiile interactive cu AI te ajută să atingi fluența mai rapid.",
            'ru': "AI-преподаватель языков, помогающий изучить более 30 языков. Практикуйте английский, испанский, французский, немецкий, китайский, японский, корейский, арабский, итальянский и португальский с мгновенной обратной связью по произношению и грамматике. Интерактивные разговоры с ИИ помогают быстрее достичь беглости речи.",
            'sr': "AI језички тутор који вам помаже да научите преко 30 језика. Вежбајте говор на енглеском, шпанском, француском, немачком, кинеском, јапанском, корејском, арапском, италијанском и португалском уз тренутне повратне информације о изговору и граматици. Интерактивни разговори са AI помажу вам да брже постигнете течност у говору.",
            'sk': "AI jazykový učiteľ pomáhajúci naučiť sa viac ako 30 jazykov. Precvičujte si angličtinu, španielčinu, francúzštinu, nemčinu, čínštinu, japončinu, kórejčinu, arabčinu, taliančinu a portugalčinu s okamžitou spätnou väzbou na výslovnosť a gramatiku. Interaktívne AI konverzácie pomáhajú dosiahnuť plynulosť rýchlejšie.",
            'sl': "AI jezikovni učitelj, ki vam pomaga pri učenju več kot 30 jezikov. Vadite govorjenje v angleščini, španščini, francoščini, nemščini, kitajščini, japonščini, korejščini, arabščini, italijanščini in portugalščini s takojšnjo povratno informacijo o izgovorjavi in slovnici. Interaktivni pogovori z AI vam pomagajo hitreje doseči tekoče govorjenje.",
            'es-es': "Profesor de idiomas con IA que te ayuda a aprender más de 30 lenguas. Practica inglés, español, francés, alemán, chino, japonés, coreano, árabe, italiano y portugués con correcciones instantáneas de pronunciación y gramática. Conversaciones interactivas con IA para alcanzar fluidez más rápidamente.",
            'es-419': "Profesor de idiomas con IA que te ayuda a aprender más de 30 idiomas. Practica inglés, español, francés, alemán, chino, japonés, coreano, árabe, italiano y portugués con correcciones instantáneas de pronunciación y gramática. Conversaciones interactivas con IA para lograr fluidez más rápido.",
            'sw': "Mwalimu wa lugha wa AI anayekusaidia kujifunza zaidi ya lugha 30. Fanya mazoezi ya kuzungumza Kiingereza, Kihispania, Kifaransa, Kijerumani, Kichina, Kijapani, Kikorea, Kiarabu, Kiitaliano na Kireno na maoni ya papo hapo kuhusu matamshi na sarufi. Mazungumzo ya kuingiliana na AI yanakusaidia kufikia ufasaha kwa haraka zaidi.",
            'sv': "AI-språklärare som hjälper dig lära dig över 30 språk. Öva på att tala engelska, spanska, franska, tyska, kinesiska, japanska, koreanska, arabiska, italienska och portugisiska med direkt feedback på uttal och grammatik. Interaktiva AI-konversationer hjälper dig uppnå flyt snabbare.",
            'th': "ครูสอนภาษา AI ที่ช่วยคุณเรียนรู้มากกว่า 30 ภาษา ฝึกพูดภาษาอังกฤษ สเปน ฝรั่งเศส เยอรมัน จีน ญี่ปุ่น เกาหลี อาหรับ อิตาลี และโปรตุเกสพร้อมข้อเสนอแนะด้านการออกเสียงและไวยากรณ์แบบเรียลไทม์ การสนทนาเชิงโต้ตอบกับ AI ช่วยให้คุณพูดคล่องเร็วขึ้น",
            'tr': "30'dan fazla dili öğrenmenize yardımcı olan AI dil öğretmeni. İngilizce, İspanyolca, Fransızca, Almanca, Çince, Japonca, Korece, Arapça, İtalyanca ve Portekizce konuşma pratiği yapın, anında telaffuz ve dilbilgisi geri bildirimi alın. AI ile interaktif konuşmalar akıcılığa daha hızlı ulaşmanıza yardımcı olur.",
            'uk': "AI-викладач мов, який допомагає вивчити понад 30 мов. Практикуйте англійську, іспанську, французьку, німецьку, китайську, японську, корейську, арабську, італійську та португальську з миттєвим зворотним зв'язком щодо вимови та граматики. Інтерактивні розмови з ШІ допомагають швидше досягти вільного володіння мовою.",
            'vi': "Giáo viên ngôn ngữ AI giúp bạn học hơn 30 ngôn ngữ. Luyện tập nói tiếng Anh, Tây Ban Nha, Pháp, Đức, Trung, Nhật, Hàn, Ả Rập, Ý và Bồ Đào Nha với phản hồi phát âm và ngữ pháp theo thời gian thực. Các cuộc hội thoại tương tác với AI giúp bạn đạt được sự thành thạo nhanh hơn.",
            'zh-Hans': "AI语言教师帮助您学习30多种语言。通过实时发音和语法反馈练习英语、西班牙语、法语、德语、中文、日语、韩语、阿拉伯语、意大利语和葡萄牙语。与AI的互动对话帮助您更快达到流利水平。",
            'zh-Hant': "AI語言教師幫助您學習30多種語言。透過即時發音和文法反饋練習英文、西班牙文、法文、德文、中文、日文、韓文、阿拉伯文、義大利文和葡萄牙文。與AI的互動對話幫助您更快達到流利水平。",
            'zh-hk': "AI語言教師幫助你學習30種以上嘅語言。透過實時發音同文法反饋練習英文、西班牙文、法文、德文、中文、日文、韓文、阿拉伯文、意大利文同葡萄牙文。同AI嘅互動對話幫助你更快達到流利水平。",
            'af': "AI-taalonderwyser wat jou help om meer as 30 tale te leer. Oefen Engels, Spaans, Frans, Duits, Chinees, Japannees, Koreaans, Arabies, Italiaans en Portugees met onmiddellike uitspraak- en grammatikaterugvoer. Interaktiewe gesprekke met AI help jou om vinniger vlot te raak.",
            'sq': "Mësues gjuhësor AI që ju ndihmon të mësoni më shumë se 30 gjuhë. Praktikoni anglisht, spanjisht, frëngjisht, gjermanisht, kinezisht, japonisht, koreanisht, arabisht, italisht dhe portugalisht me reagime të menjëhershme për shqiptimin dhe gramatikën. Bisedat interaktive me AI ju ndihmojnë të arrini rrjedhshmëri më shpejt.",
            'am': "ከ30 በላይ ቋንቋዎችን እንዲማሩ የሚያግዝዎት የAI ቋንቋ አስተማሪ። እንግሊዝኛ፣ ስፓኒሽኛ፣ ፈረንሳይኛ፣ ጀርመንኛ፣ ቻይንኛ፣ ጃፓንኛ፣ ኮሪያኛ፣ ዐረብኛ፣ ጣልያንኛ እና ፖርቱጋልኛን በቅጽበታዊ የንግግር እና የሰዋስው ግብረመልስ ይለማመዱ። ከAI ጋር የሚደረጉ ተግባቦታዊ ውይይቶች በፍጥነት ቋንቋውን እንዲያውቁ ይረዳዎታል።",
            'hy': "AI լեզվի ուսուցիչ, որն օգնում է սովորել ավելի քան 30 լեզու։ Պարապեք անգլերեն, իսպաներեն, ֆրանսերեն, գերմաներեն, չինարեն, ճապոներեն, կորեերեն, արաբերեն, իտալերեն և պորտուգալերեն՝ արտասանության և քերականության անմիջական հետադարձ կապով։ AI-ի հետ ինտերակտիվ զրույցները օգնում են ավելի արագ հասնել հմտության։",
            'az': "30-dan çox dili öyrənməyə kömək edən AI dil müəllimi. İngilis, ispan, fransız, alman, çin, yapon, koreya, ərəb, italyan və portuqal dillərini real vaxt tələffüz və qrammatika rəyi ilə təcrübə edin. AI ilə interaktiv söhbətlər daha tez səlis danışmağa kömək edir.",
            'be': "AI-выкладчык моў, які дапамагае вывучыць больш за 30 моў. Практыкуйце англійскую, іспанскую, французскую, нямецкую, кітайскую, японскую, карэйскую, арабскую, італьянскую і партугальскую мовы з імгненнай зваротнай сувяззю па вымаўленні і граматыцы. Інтэрактыўныя размовы з AI дапамагаюць хутчэй дасягнуць свабоднага валодання мовай.",
            'bo': "སྐད་རིགས་༣༠ལྷག་སློབ་སྦྱོང་བྱེད་པར་རོགས་རམ་བྱེད་པའི་AI སྐད་ཡིག་དགེ་རྒན། དབྱིན་ཡིག་དང་། སི་པན་སྐད། ཧྥ་རན་སིའི་སྐད། འཇར་མན་གྱི་སྐད། རྒྱ་སྐད། ཉི་ཧོང་སྐད། ཀོ་རི་ཡའི་སྐད། ཨ་རབ་ཀྱི་སྐད། ཨི་ཀྲར་ལིའི་སྐད། པོར་ཐུ་གྷལ་གྱི་སྐད་བཅས་ཀྱི་སྒྲ་གདངས་དང་བརྡ་སྤྲོད་ལ་དུས་ཐོག་ཏུ་དག་བཅོས་བྱེད་ཐུབ། AI དང་མཉམ་དུ་སྦྱོང་བརྡར་བྱས་ཏེ་མགྱོགས་པོར་སྐད་ཡིག་ལ་མཁས་པ་ཆགས་ཐུབ།",
            'bs': "AI jezički tutor koji vam pomaže da naučite više od 30 jezika. Vježbajte engleski, španski, francuski, njemački, kineski, japanski, korejski, arapski, italijanski i portugalski uz trenutne povratne informacije o izgovoru i gramatici. Interaktivni razgovori sa AI pomažu vam da brže postignete tečnost.",
            'ca': "Professor d'idiomes amb IA que t'ajuda a aprendre més de 30 llengües. Practica anglès, espanyol, francès, alemany, xinès, japonès, coreà, àrab, italià i portuguès amb retroalimentació instantània de pronunciació i gramàtica. Les converses interactives amb IA t'ajuden a assolir fluïdesa més ràpidament.",
            'ckb': "مامۆستای زمانی AI کە یارمەتیت دەدات لە فێربوونی زیاتر لە ٣٠ زمان. ڕاهێنان لە ئینگلیزی، ئیسپانی، فەڕەنسی، ئەڵمانی، چینی، ژاپۆنی، کۆری، عەرەبی، ئیتاڵی و پورتوگالی بکە لەگەڵ فیدباکی دەربڕین و ڕێزمانی ڕاستەوخۆ. گفتوگۆی کارلێکی لەگەڵ AI یارمەتیت دەدات خێراتر شارەزایی بەدەست بهێنیت.",
            'cy': "Athro iaith AI sy'n eich helpu i ddysgu dros 30 o ieithoedd. Ymarfer siarad Saesneg, Sbaeneg, Ffrangeg, Almaeneg, Tsieinëeg, Japaneeg, Corëeg, Arabeg, Eidaleg a Phortiwgaleg gydag adborth ynganu a gramadeg ar unwaith. Mae sgyrsiau rhyngweithiol gydag AI yn eich helpu i gyrraedd rhuglder yn gyflymach.",
            'eo': "AI-lingvoinstruisto helpanta vin lerni pli ol 30 lingvojn. Praktiku la anglan, hispanan, francan, germanan, ĉinan, japanan, korean, araban, italan kaj portugalan kun tuja elparola kaj gramatika retroefiko. Interagaj konversacioj kun AI helpas vin atingi fluecon pli rapide.",
            'eu': "30 hizkuntza baino gehiago ikasten laguntzen dizun AI hizkuntza-irakaslea. Praktikatu ingelesa, gaztelania, frantsesa, alemana, txinera, japoniera, koreera, arabiera, italiera eta portugesa ahoskera eta gramatika berehalako feedbackarekin. AIrekin elkarrizketa interaktiboak jariotasuna azkarrago lortzen laguntzen dizu.",
            'fa': "معلم زبان مبتنی بر هوش مصنوعی که به شما در یادگیری بیش از ۳۰ زبان کمک می‌کند. تمرین مکالمه به زبان‌های انگلیسی، اسپانیایی، فرانسوی، آلمانی، چینی، ژاپنی، کره‌ای، عربی، ایتالیایی و پرتغالی با بازخورد فوری تلفظ و دستور زبان. گفتگوهای تعاملی با هوش مصنوعی به شما کمک می‌کند سریع‌تر به روانی برسید.",
            'fo': "AI málalærari sum hjálpir tær at læra meira enn 30 mál. Venja enskt, spanskt, franskt, týskt, kinesiskt, japanskt, koreanskt, arabiskt, italskt og portugisiskt við beinleiðis afturboðan um framburð og mállæru. Interaktiv samrøður við AI hjálpa tær at gerast flótari skjótari.",
            'fy': "AI-taallearaar dy't jo helpt mear as 30 talen te learen. Oefenje Ingelsk, Spaansk, Frânsk, Dútsk, Sineesk, Japansk, Koreaansk, Arabysk, Italiaansk en Portugeesk mei direkte feedback oer útspraak en grammatika. Ynteraktive petearen mei AI helpe jo flugger fluency te berikken.",
            'ga': "Múinteoir teanga AI a chabhraíonn leat níos mó ná 30 teanga a fhoghlaim. Cleachtaigh Béarla, Spáinnis, Fraincis, Gearmáinis, Sínis, Seapáinis, Cóiréis, Araibis, Iodáilis agus Portaingéilis le haiseolas láithreach ar fhuaimniú agus ar ghramadach. Cabhraíonn comhráite idirghníomhacha le AI leat líofacht a bhaint amach níos tapúla.",
            'gl': "Profesor de idiomas con IA que che axuda a aprender máis de 30 linguas. Practica inglés, español, francés, alemán, chinés, xaponés, coreano, árabe, italiano e portugués con retroalimentación instantánea de pronunciación e gramática. As conversas interactivas con IA axúdanche a alcanzar fluidez máis rapidamente.",
            'gu': "30થી વધુ ભાષાઓ શીખવામાં મદદ કરતો AI ભાષા શિક્ષક. અંગ્રેજી, સ્પેનિશ, ફ્રેન્ચ, જર્મન, ચાઇનીઝ, જાપાનીઝ, કોરિયન, અરબી, ઇટાલિયન અને પોર્ટુગીઝ તાત્કાલિક ઉચ્ચારણ અને વ્યાકરણ પ્રતિસાદ સાથે પ્રેક્ટિસ કરો. AI સાથેની ઇન્ટરેક્ટિવ વાતચીત તમને ઝડપથી પ્રવાહિતા મેળવવામાં મદદ કરે છે.",
            'haw': "He kumu ʻōlelo AI e kōkua iā ʻoe e aʻo i nā ʻōlelo he 30 a ʻoi. E hoʻomaʻamaʻa i ka ʻōlelo Pelekānia, Paniolo, Palani, Kepemānia, Pākē, Kepanī, Kōlea, ʻAlapia, ʻĪkālia a me Pukiki me ka loiloi koke ʻana i ka puana a me ke kāmela. Kōkua nā kūkākūkā AI iā ʻoe e maʻa wikiwiki i ka ʻōlelo.",
            'ht': "Pwofesè lang AI ki ede w aprann plis pase 30 lang. Pratike angle, panyòl, franse, alman, chinwa, japonè, koreyen, arab, italyen ak pòtigè ak fidbak imedya sou pwononsyasyon ak gramè. Konvèsasyon entèraktif ak AI ede w rive pale lang nan pi vit.",
            'ig': "Onye nkuzi asụsụ AI na-enyere gị aka ịmụta ihe karịrị asụsụ 30. Mụọ ịsụ Bekee, Spanish, French, German, Chinese, Japanese, Korean, Arabic, Italian na Portuguese site na ngwa ngwa mkpọpụta na grammar feedback. Mkparịta ụka na-eme ka AI nyere gị aka ịmụta ngwa ngwa.",
            'is': "AI tungumálakennari sem hjálpar þér að læra yfir 30 tungumál. Æfðu ensku, spænsku, frönsku, þýsku, kínversku, japönsku, kóresku, arabísku, ítölsku og portúgölsku með rauntíma framburðar- og málfræðiendurgjöf. Gagnvirk samtöl við AI hjálpa þér að ná betri tökum á tungumálinu hraðar.",
            'jv': "Guru basa AI sing mbantu sampeyan sinau luwih saka 30 basa. Latihan ngomong basa Inggris, Spanyol, Prancis, Jerman, Cina, Jepang, Korea, Arab, Italia lan Portugis kanthi umpan balik pangucapan lan tata basa langsung. Obrolan interaktif karo AI mbantu sampeyan entuk kelancaran luwih cepet.",
            'ka': "AI ენის მასწავლებელი, რომელიც გეხმარებათ 30-ზე მეტი ენის შესწავლაში. ივარჯიშეთ ინგლისურ, ესპანურ, ფრანგულ, გერმანულ, ჩინურ, იაპონურ, კორეულ, არაბულ, იტალიურ და პორტუგალიურ ენებზე წარმოთქმისა და გრამატიკის მყისიერი უკუკავშირით. AI-სთან ინტერაქტიული საუბრები გეხმარებათ უფრო სწრაფად მიაღწიოთ თავისუფალ ფლობას.",
            'kk': "30-дан астам тілді үйренуге көмектесетін AI тіл мұғалімі. Ағылшын, испан, француз, неміс, қытай, жапон, корей, араб, итальян және португал тілдерін айтылым мен грамматика бойынша жедел кері байланыспен жаттығыңыз. AI-мен интерактивті әңгімелесулер тілді жылдам меңгеруге көмектеседі.",
            'km': "គ្រូបង្រៀនភាសា AI ដែលជួយអ្នកឱ្យរៀនភាសាច្រើនជាង 30។ អនុវត្តការនិយាយភាសាអង់គ្លេស អេស្ប៉ាញ បារាំង អាល្លឺម៉ង់ ចិន ជប៉ុន កូរ៉េ អារ៉ាប់ អ៊ីតាលី និងព័រទុយហ្គាល់ ជាមួយនឹងមតិត្រឡប់ការបញ្ចេញសំឡេង និងវេយ្យាករណ៍ភ្លាមៗ។ ការសន្ទនាអន្តរកម្មជាមួយ AI ជួយឱ្យអ្នកសម្រេចបានភាពស្ទាត់ជំនាញលឿនជាងមុន។",
            'kn': "30 ಕ್ಕೂ ಹೆಚ್ಚು ಭಾಷೆಗಳನ್ನು ಕಲಿಯಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುವ AI ಭಾಷಾ ಶಿಕ್ಷಕ. ಇಂಗ್ಲಿಷ್, ಸ್ಪ್ಯಾನಿಷ್, ಫ್ರೆಂಚ್, ಜರ್ಮನ್, ಚೈನೀಸ್, ಜಪಾನೀಸ್, ಕೊರಿಯನ್, ಅರೇಬಿಕ್, ಇಟಾಲಿಯನ್ ಮತ್ತು ಪೋರ್ಚುಗೀಸ್ ಅನ್ನು ತಕ್ಷಣದ ಉಚ್ಚಾರಣೆ ಮತ್ತು ವ್ಯಾಕರಣ ಪ್ರತಿಕ್ರಿಯೆಯೊಂದಿಗೆ ಅಭ್ಯಾಸ ಮಾಡಿ. AI ಯೊಂದಿಗಿನ ಸಂವಾದಾತ್ಮಕ ಸಂಭಾಷಣೆಗಳು ನಿಮ್ಮನ್ನು ವೇಗವಾಗಿ ಪ್ರವೀಣತೆ ಸಾಧಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
            'ky': "30дан ашык тилди үйрөнүүгө жардам берген AI тил мугалими. Англис, испан, француз, немис, кытай, жапон, корей, араб, итальян жана португал тилдерин айтуу жана грамматика боюнча дароо кайтарым байланыш менен машыгыңыз. AI менен интерактивдүү баарлашуулар тилди тезирээк өздөштүрүүгө жардам берет.",
            'la': "Magister linguarum AI qui te plus quam 30 linguas discere adiuvat. Exercita Anglicam, Hispanicam, Gallicam, Germanicam, Sinicam, Iaponicam, Coreanam, Arabicam, Italicam et Lusitanam cum immediato pronuntiationis et grammaticae responso. Colloquia interactiva cum AI te ad fluentiorem usum celerius pervenire adiuvant.",
            'lb': "AI Sproochproff deen dir hëlleft méi wéi 30 Sproochen ze léieren. Übt Englesch, Spuenesch, Franséisch, Däitsch, Chinesesch, Japanesch, Koreanesch, Arabesch, Italienesch a Portugisesch mat direktem Feedback zu Aussprooch a Grammatik. Interaktiv Gespréicher mat AI hëllefen dir méi séier fléissend ze ginn.",
            'lo': "ຄູສອນພາສາ AI ທີ່ຊ່ວຍທ່ານຮຽນຫຼາຍກວ່າ 30 ພາສາ. ຝຶກເວົ້າພາສາອັງກິດ, ສະເປນ, ຝຣັ່ງ, ເຢຍລະມັນ, ຈີນ, ຍີ່ປຸ່ນ, ເກົາຫຼີ, ອາຣັບ, ອິຕາລີ ແລະ ປອກຕຸຍການ ພ້ອມກັບຄຳຕິຊົມທັນທີກ່ຽວກັບການອອກສຽງ ແລະ ໄວຍາກອນ. ການສົນທະນາແບບໂຕ້ຕອບກັບ AI ຊ່ວຍໃຫ້ທ່ານບັນລຸຄວາມຄ່ອງແຄ້ວໄວຂຶ້ນ.",
            'mk': "AI јазичен наставник кој ви помага да научите повеќе од 30 јазици. Вежбајте англиски, шпански, француски, германски, кинески, јапонски, корејски, арапски, италијански и португалски со моментални повратни информации за изговор и граматика. Интерактивните разговори со AI ви помагаат побрзо да постигнете течност.",
            'ml': "30-ലധികം ഭാഷകൾ പഠിക്കാൻ സഹായിക്കുന്ന AI ഭാഷാ അധ്യാപകൻ. ഇംഗ്ലീഷ്, സ്പാനിഷ്, ഫ്രഞ്ച്, ജർമ്മൻ, ചൈനീസ്, ജാപ്പനീസ്, കൊറിയൻ, അറബിക്, ഇറ്റാലിയൻ, പോർച്ചുഗീസ് എന്നിവ ഉച്ചാരണത്തിലും വ്യാകരണത്തിലും തത്സമയ ഫീഡ്‌ബാക്കോടെ പരിശീലിക്കുക. AI-യുമായുള്ള ഇന്ററാക്ടീവ് സംഭാഷണങ്ങൾ നിങ്ങൾക്ക് വേഗത്തിൽ പ്രാവീണ്യം നേടാൻ സഹായിക്കുന്നു.",
            'mn': "30 гаруй хэл сурахад тань туслах AI хэлний багш. Англи, испани, франц, герман, хятад, япон, солонгос, араб, итали болон португал хэлээр ярих дадлага хийж, дуудлага, дүрмийн талаар шууд санал хүлээн авах боломжтой. AI-тай харилцан яриа өрнүүлснээр та илүү хурдан ярьж сурах болно.",
            'mr': "30 पेक्षा जास्त भाषा शिकण्यास मदत करणारा AI भाषा शिक्षक. इंग्रजी, स्पॅनिश, फ्रेंच, जर्मन, चीनी, जपानी, कोरियन, अरबी, इटालियन आणि पोर्तुगीज यांसारख्या भाषा वास्तविक-वेळ उच्चारण आणि व्याकरण प्रतिसादासह सराव करा. AI सोबतच्या संवादात्मक संभाषणांमुळे तुम्हाला जलद गती प्राप्त करण्यास मदत होते.",
            'ms': "Guru bahasa AI yang membantu anda mempelajari lebih daripada 30 bahasa. Berlatih berbicara dalam bahasa Inggeris, Sepanyol, Perancis, Jerman, Cina, Jepun, Korea, Arab, Itali dan Portugis dengan maklum balas sebutan dan tatabahasa masa nyata. Perbualan interaktif dengan AI membantu anda mencapai kefasihan dengan lebih cepat.",
            'my': "ဘာသာစကား ၃၀ ကျော်ကို သင်ယူရန် ကူညီပေးသော AI ဘာသာစကားဆရာ။ အင်္ဂလိပ်၊ စပိန်၊ ပြင်သစ်၊ ဂျာမန်၊ တရုတ်၊ ဂျပန်၊ ကိုရီးယား၊ အာရပ်၊ အီတလီနှင့် ပေါ်တူဂီ စကားပြောလေ့ကျင့်ခန်းများကို အသံထွက်နှင့် သဒ္ဒါ တုံ့ပြန်ချက်များဖြင့် လေ့ကျင့်ပါ။ AI နှင့် အပြန်အလှန် စကားပြောဆိုခြင်းဖြင့် ပိုမိုမြန်ဆန်စွာ ကျွမ်းကျင်မှုရရှိစေပါသည်။",
            'ne': "30 भन्दा बढी भाषाहरू सिक्न मद्दत गर्ने AI भाषा शिक्षक। अंग्रेजी, स्पेनिश, फ्रेन्च, जर्मन, चिनियाँ, जापानी, कोरियाली, अरबी, इटालियन र पोर्तुगाली भाषाहरूको वास्तविक-समय उच्चारण र व्याकरण प्रतिक्रियासँग अभ्यास गर्नुहोस्। AI सँगको अन्तरक्रियात्मक कुराकानीले तपाईंलाई छिटो दक्षता हासिल गर्न मद्दत गर्छ।",
            'or': "30 ରୁ ଅଧିକ ଭାଷା ଶିଖିବାରେ ସାହାଯ୍ୟ କରୁଥିବା AI ଭାଷା ଶିକ୍ଷକ। ଇଂରାଜୀ, ସ୍ପାନିଶ, ଫ୍ରେଞ୍ଚ, ଜର୍ମାନ, ଚାଇନିଜ, ଜାପାନୀ, କୋରିଆନ, ଆରବିକ, ଇଟାଲୀୟ ଏବଂ ପର୍ତ୍ତୁଗୀଜ ଭାଷାରେ ବାସ୍ତବ-ସମୟ ଉଚ୍ଚାରଣ ଏବଂ ବ୍ୟାକରଣ ପ୍ରତିକ୍ରିୟା ସହିତ ଅଭ୍ୟାସ କରନ୍ତୁ। AI ସହିତ ପାରସ୍ପରିକ କଥୋପକଥନ ଆପଣଙ୍କୁ ଶୀଘ୍ର ଦକ୍ଷତା ହାସଲ କରିବାରେ ସାହାଯ୍ୟ କରେ।",
            'pa': "30 ਤੋਂ ਵੱਧ ਭਾਸ਼ਾਵਾਂ ਸਿੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰਨ ਵਾਲਾ AI ਭਾਸ਼ਾ ਅਧਿਆਪਕ। ਅੰਗਰੇਜ਼ੀ, ਸਪੈਨਿਸ਼, ਫ਼ਰੈਂਚ, ਜਰਮਨ, ਚੀਨੀ, ਜਾਪਾਨੀ, ਕੋਰੀਆਈ, ਅਰਬੀ, ਇਤਾਲਵੀ ਅਤੇ ਪੁਰਤਗਾਲੀ ਨੂੰ ਰੀਅਲ-ਟਾਈਮ ਉਚਾਰਨ ਅਤੇ ਵਿਆਕਰਣ ਫੀਡਬੈਕ ਨਾਲ ਅਭਿਆਸ ਕਰੋ। AI ਨਾਲ ਇੰਟਰਐਕਟਿਵ ਗੱਲਬਾਤ ਤੁਹਾਨੂੰ ਤੇਜ਼ੀ ਨਾਲ ਨਿਪੁੰਨਤਾ ਹਾਸਲ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।",
            'rw': "Umwarimu w'indimi wa AI ugufasha kwiga indimi zirenga 30. Imenyereze kuvuga icyongereza, icyesipanyole, igifaransa, ikidage, igishinwa, ikiyapani, igikoreya, icyarabu, igitaliyani n'igiporutugali hamwe n'ibisubizo by'ako kanya ku mavuga n'ikibonezamvugo. Ibiganiro mpanabyumvikane na AI bigufasha kugera ku buhanga vuba.",
            'si': "භාෂා 30කට වැඩි ප්‍රමාණයක් ඉගෙන ගැනීමට උපකාර කරන AI භාෂා ගුරුවරයා. තත්‍ය කාලීන උච්චාරණ සහ ව්‍යාකරණ ප්‍රතිපෝෂණ සමඟ ඉංග්‍රීසි, ස්පාඤ්ඤ, ප්‍රංශ, ජර්මන්, චීන, ජපන්, කොරියානු, අරාබි, ඉතාලි සහ පෘතුගීසි භාෂා පුහුණු වන්න. AI සමඟ අන්තර්ක්‍රියාකාරී සංවාද ඔබට වඩා වේගයෙන් ප්‍රවීණත්වයට ළඟා වීමට උපකාර වේ.",
            'su': "Guru basa AI anu ngabantu anjeun diajar leuwih ti 30 basa. Latihan nyarita dina basa Inggris, Spanyol, Prancis, Jerman, Cina, Jepang, Korea, Arab, Italia, jeung Portugis kalawan umpan balik ucapan jeung tata basa real-time. Obrolan interaktif jeung AI ngabantu anjeun ngahontal kelancaran leuwih gancang.",
            'ta': "30க்கும் மேற்பட்ட மொழிகளைக் கற்க உதவும் AI மொழி ஆசிரியர். ஆங்கிலம், ஸ்பானிஷ், பிரெஞ்சு, ஜெர்மன், சீனம், ஜப்பானிய, கொரிய, அரபு, இத்தாலிய மற்றும் போர்த்துகீசிய மொழிகளை நேரடி உச்சரிப்பு மற்றும் இலக்கண பின்னூட்டத்துடன் பயிற்சி செய்யுங்கள். AI உடனான இடைவினை உரையாடல்கள் நீங்கள் விரைவாக தேர்ச்சி பெற உதவுகிறது.",
            'te': "30 కంటే ఎక్కువ భాషలు నేర్చుకోవడంలో సహాయపడే AI భాషా ఉపాధ్యాయుడు. ఆంగ్లం, స్పానిష్, ఫ్రెంచ్, జర్మన్, చైనీస్, జపనీస్, కొరియన్, అరబిక్, ఇటాలియన్ మరియు పోర్చుగీస్ భాషలను రియల్-టైమ్ ఉచ్ఛారణ మరియు వ్యాకరణ ప్రతిస్పందనతో అభ్యసించండి. AI తో ఇంటరాక్టివ్ సంభాషణలు మీరు త్వరగా ప్రావీణ్యం సాధించడానికి సహాయపడతాయి.",
            'tg': "Омӯзгори забони AI, ки ба шумо дар омӯхтани зиёда аз 30 забон кумак мекунад. Англисӣ, испанӣ, фаронсавӣ, олмонӣ, хитоӣ, ҷопонӣ, кореягӣ, арабӣ, итолиёӣ ва португалиро бо фидбеки фаврии талаффуз ва грамматика машқ кунед. Суҳбатҳои интерактивӣ бо AI ба шумо кумак мекунанд, ки зудтар ба малака ноил шавед.",
            'tk': "30-dan gowrak dili öwrenmäge kömek edýän AI dil mugallymy. Iňlis, ispan, fransuz, nemes, hytaý, ýapon, koreý, arap, italian we portugal dillerini derrew aýdylyş we grammatika seslenmeleri bilen türgenleşiň. AI bilen interaktiw söhbetdeşlikler size has çalt başarjaňlyk gazanmaga kömek edýär.",
            'tl': "AI language teacher na tumutulong sa iyo na matuto ng higit sa 30 wika. Magsanay sa pagsasalita ng Ingles, Espanyol, Pranses, Aleman, Tsino, Hapon, Koreano, Arabe, Italyano at Portuges na may real-time na feedback sa pagbigkas at gramatika. Ang mga interactive na pag-uusap sa AI ay tumutulong sa iyo na makamit ang kahusayan nang mas mabilis.",
            'ur': "30 سے زیادہ زبانیں سیکھنے میں مدد کرنے والا AI زبان کا استاد۔ انگریزی، ہسپانوی، فرانسیسی، جرمن، چینی، جاپانی، کوریائی، عربی، اطالوی اور پرتگالی کی فوری تلفظ اور گرامر کی رائے کے ساتھ مشق کریں۔ AI کے ساتھ تعاملی گفتگو آپ کو تیزی سے مہارت حاصل کرنے میں مدد کرتی ہے۔",
            'uz': "30 dan ortiq tilni o'rganishga yordam beradigan AI til o'qituvchisi. Ingliz, ispan, fransuz, nemis, xitoy, yapon, koreys, arab, italyan va portugal tillarini talaffuz va grammatika bo'yicha tezkor fikr-mulohaza bilan mashq qiling. AI bilan interaktiv suhbatlar tezroq mahoratga erishishga yordam beradi.",
            'yi': "אַן AI שפּראַך לערער וואָס העלפט דיר לערנען מער ווי 30 שפּראַכן. פּראַקטיצירן ענגליש, שפּאַניש, פראנצויזיש, דייַטש, כינעזיש, יאַפּאַניש, קאָרעיִש, אַראַביש, איטאַליעניש און פּאָרטוגעזיש מיט באַלדיק אויסשפּראַך און גראַמאַטיק פידבעק. אינטעראַקטיוו שמועסן מיט AI העלפן דיר דערגרייכן פליסיקייט שנעלער.",
            'zu': "Uthisha wezilimi we-AI okusiza ukufunda izilimi ezingaphezu kuka-30. Zijwayeze ukukhuluma isiNgisi, isiSpanishi, isiFulentshi, isiJalimani, isiShayina, isiJapani, isiKorea, isi-Arabhu, isi-Italiyane nesiPutukezi ngempendulo esheshayo yokuphimisa kanye negrama. Izingxoxo ezihlukahlukene ne-AI zikusiza ufinyelele ekukhulumeni kahle ngokushesha."
          };

        this.promptDisplay = document.getElementById('promptDisplay');
        this.updatePromptDisplay();
        this.startPromptRotation();

        this.themeToggle = document.getElementById('themeToggle');
        this.initTheme();
        this.setupThemeToggle();

        this.init();

        this.historyBtn = document.getElementById('historyBtn');
        this.historyPanel = document.getElementById('historyPanel');
        this.historyList = document.getElementById('historyList');
        this.historyDetail = document.getElementById('historyDetail');
        this.historyMessages = document.getElementById('historyMessages');
        this.historyInput = document.getElementById('historyInput');
        this.historySend = document.getElementById('historySend');
        this.currentHistorySession = null;
        this.isHistoryMode = false;
        this.historyWs = null;
        this.historyResponse = '';
    
        this.setupHistoryHandlers();
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

    getTargetLanguage() {
        const targetLang = document.getElementById('targetLanguageSelect').value || 'en';
        console.log(`Current target language: ${targetLang}`);
        return targetLang;
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

    setupHistoryHandlers() {
        this.historyBtn.addEventListener('click', () => this.toggleHistoryPanel());
        this.historySend.addEventListener('click', () => this.sendHistoryMessage());
        this.historyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendHistoryMessage();
        });
    }
    
    toggleHistoryPanel() {
        const isHidden = this.historyPanel.classList.contains('hidden');
        this.historyPanel.classList.toggle('hidden');
        
        if (isHidden) {
            this.loadHistoryList();
        }
    }
    
    loadHistoryList() {
        const sessions = JSON.parse(localStorage.getItem('chatSessions') || '[]');
        this.historyList.innerHTML = '';
        
        sessions.reverse().forEach(session => {
            const date = new Date(session.timestamp);
            const item = document.createElement('div');
            item.className = 'apple-card p-3 cursor-pointer hover:bg-opacity-90 flex justify-between items-center';
            
            const dateText = document.createElement('div');
            dateText.textContent = date.toLocaleString();
            dateText.addEventListener('click', () => this.showHistoryDetail(session));
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'text-red-500 hover:text-red-700 ml-2';
            deleteBtn.innerHTML = '✕';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteHistorySession(session.id);
            });
            
            item.appendChild(dateText);
            item.appendChild(deleteBtn);
            this.historyList.appendChild(item);
        });
    }
    
    deleteHistorySession(sessionId) {
        if (confirm(LANGUAGE_CONFIG[this.currentLanguage].ui.confirmDelete)) {
            let sessions = JSON.parse(localStorage.getItem('chatSessions') || '[]');
            sessions = sessions.filter(s => s.id !== sessionId);
            localStorage.setItem('chatSessions', JSON.stringify(sessions));
            
            if (this.currentHistorySession?.id === sessionId) {
                this.currentHistorySession = null;
                this.historyDetail.classList.add('hidden');
            }
            
            this.loadHistoryList();
        }
    }
    
    showHistoryDetail(session) {
        this.currentHistorySession = session;
        this.historyDetail.classList.remove('hidden');
        this.historyMessages.innerHTML = '';
        
        this.historyDetail.dataset.targetLanguage = document.getElementById('targetLanguageSelect').value;
        
        session.messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.type}-message`;
            
            const bubble = document.createElement('div');
            bubble.className = 'message-bubble';
            bubble.textContent = msg.content;
            
            messageDiv.appendChild(bubble);
            this.historyMessages.appendChild(messageDiv);
        });
        
        this.historyMessages.scrollTop = this.historyMessages.scrollHeight;
    }

    updateUITexts() {
        const language = this.getCurrentLanguage();
        const ui = LANGUAGE_CONFIG[language].ui;
        
        document.getElementById('welcomeMessage').textContent = ui.welcomeMessage;
        
        const labels = document.querySelectorAll('.language-label');
        labels.forEach(label => {
            if (label.textContent.includes('I speak')) {
                label.textContent = ui.iSpeak;
            } else if (label.textContent.includes('I want to learn')) {
                label.textContent = ui.iWantToLearn;
            }
        });
    }
    
    async connectHistoryWebSocket() {
        const uri = `wss://${this.host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key=${this.apiKey}`;
        
        return new Promise((resolve, reject) => {
            this.historyWs = new WebSocket(uri);
            
            this.historyWs.onopen = () => {
                console.log('History WebSocket connected');
                const setupMsg = {
                    setup: {
                        model: `models/${this.model}`,
                        generation_config: {
                            response_modalities: ["TEXT"]
                        }
                    }
                };
                this.historyWs.send(JSON.stringify(setupMsg));
            };
    
            this.historyWs.onmessage = async (event) => {
                try {
                    const data = event.data instanceof Blob ? 
                        await event.data.text() : 
                        event.data;
                    
                    const response = JSON.parse(data);
                    console.log('History received response:', response);
    
                    if (response.setupComplete) {
                        resolve();
                        return;
                    }
    
                    if (response.serverContent) {
                        if (response.serverContent.modelTurn?.parts) {
                            for (const part of response.serverContent.modelTurn.parts) {
                                if (part.text) {
                                    this.historyResponse = (this.historyResponse || '') + part.text;
                                }
                            }
                        }
    
                        if (response.serverContent.turnComplete) {
                            const text = this.historyResponse;
                            console.log('History turn complete:', text);
    
                            const aiDiv = document.createElement('div');
                            aiDiv.className = 'message assistant-message';
                            const aiBubble = document.createElement('div');
                            aiBubble.className = 'message-bubble';
                            aiBubble.textContent = text;
                            aiDiv.appendChild(aiBubble);
                            this.historyMessages.appendChild(aiDiv);
    
                            this.currentHistorySession.messages.push({
                                type: 'assistant',
                                content: text
                            });
                            
                            let sessions = JSON.parse(localStorage.getItem('chatSessions') || '[]');
                            const sessionIndex = sessions.findIndex(s => s.id === this.currentHistorySession.id);
                            if (sessionIndex !== -1) {
                                sessions[sessionIndex] = this.currentHistorySession;
                                localStorage.setItem('chatSessions', JSON.stringify(sessions));
                            }
    
                            this.historyMessages.scrollTop = this.historyMessages.scrollHeight;
                            this.historyResponse = '';
                        }
                    }
                } catch (error) {
                    console.error('Error processing history WebSocket message:', error);
                }
            };
    
            this.historyWs.onerror = (error) => {
                console.error('History WebSocket error:', error);
                reject(error);
            };
    
            this.historyWs.onclose = () => {
                console.log('History WebSocket closed');
            };
        });
    }
    
    async sendHistoryMessage() {
        const userMessage = this.historyInput.value.trim();
        if (!userMessage || !this.currentHistorySession) return;
        
        this.historyInput.value = '';
        
        const userDiv = document.createElement('div');
        userDiv.className = 'message user-message';
        const userBubble = document.createElement('div');
        userBubble.className = 'message-bubble';
        userBubble.textContent = userMessage;
        userDiv.appendChild(userBubble);
        this.historyMessages.appendChild(userDiv);
    
        this.currentHistorySession.messages.push({
            type: 'user',
            content: userMessage
        });
    
        try {
            if (!this.historyWs || this.historyWs.readyState !== WebSocket.OPEN) {
                await this.connectHistoryWebSocket();
            }
    
            const previousChat = this.currentHistorySession.messages
                .slice(0, -1) 
                .map(msg => `${msg.type === 'user' ? 'Student' : 'Tutor'}: ${msg.content}`)
                .join('\n');
    
            const targetLang = this.historyDetail.dataset.targetLanguage || document.getElementById('targetLanguageSelect').value;
            const targetLangName = TARGET_LANGUAGES[targetLang].nativeName;
            const fullPrompt = LANGUAGE_CONFIG[this.currentLanguage].historyPrompt
                .replace(/\[TARGET_LANGUAGE\]/g, targetLangName)
                .replace('[Previous Chat]', previousChat) + '\n' + userMessage;
    
            const message = {
                client_content: {
                    turns: [{
                        role: "user",
                        parts: [{
                            text: fullPrompt
                        }]
                    }],
                    turn_complete: true
                }
            };
    
            this.historyWs.send(JSON.stringify(message));
            
            let sessions = JSON.parse(localStorage.getItem('chatSessions') || '[]');
            const sessionIndex = sessions.findIndex(s => s.id === this.currentHistorySession.id);
            if (sessionIndex !== -1) {
                sessions[sessionIndex] = this.currentHistorySession;
                localStorage.setItem('chatSessions', JSON.stringify(sessions));
            }
    
            this.historyMessages.scrollTop = this.historyMessages.scrollHeight;
        } catch (error) {
            console.error('Error sending history message:', error);
        }
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

                            if (text.trim() === 'OK' || text.trim() === 'OK OK') {
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
            
            const welcomeMessage = document.getElementById('welcomeMessage');
            if (welcomeMessage && LANGUAGE_CONFIG[newLanguage]) {
                welcomeMessage.textContent = LANGUAGE_CONFIG[newLanguage].ui.welcomeMessage;
            }
            
            const languageLabels = document.getElementsByClassName('language-label');
            if (languageLabels.length >= 2 && LANGUAGE_CONFIG[newLanguage]) {
                languageLabels[0].textContent = LANGUAGE_CONFIG[newLanguage].ui.iSpeak;
                languageLabels[1].textContent = LANGUAGE_CONFIG[newLanguage].ui.iWantToLearn;
            }

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

            if (this.welcomeMessageEl) {
                this.welcomeMessageEl.textContent = LANGUAGE_CONFIG[newLanguage].ui.welcomeMessage;
            }

            if (this.iSpeakLabel) {
                this.iSpeakLabel.textContent = LANGUAGE_CONFIG[newLanguage].ui.iSpeak;
            }
            
            if (this.iWantToLearnLabel) {
                this.iWantToLearnLabel.textContent = LANGUAGE_CONFIG[newLanguage].ui.iWantToLearn;
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
        messageDiv.className = `message ${type}-message`;
        
        const header = document.createElement('div');
        header.className = 'message-header';
        header.textContent = type === 'assistant' ? 
            LANGUAGE_CONFIG[this.currentLanguage].ui.aiReply : 
            LANGUAGE_CONFIG[this.currentLanguage].ui.userSaid;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = content;
        
        messageDiv.appendChild(header);
        messageDiv.appendChild(bubble);
        this.chatHistory.appendChild(messageDiv);
        this.chatHistory.scrollTop = this.chatHistory.scrollHeight;
    
        const currentSession = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            messages: Array.from(this.chatHistory.children).map(div => ({
                type: div.classList.contains('user-message') ? 'user' : 'assistant',
                content: div.querySelector('.message-bubble').textContent
            }))
        };
        
        let sessions = JSON.parse(localStorage.getItem('chatSessions') || '[]');
        sessions.push(currentSession);
        localStorage.setItem('chatSessions', JSON.stringify(sessions));
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

    generatePrompt() {
        const userLanguage = this.getCurrentLanguage();
        const targetLanguage = this.getTargetLanguage();
        const targetLangName = TARGET_LANGUAGES[targetLanguage].nativeName;
        
        console.log(`Generating prompt for:
            User Interface Language: ${userLanguage}
            Target Learning Language: ${targetLanguage}
            Native Name: ${targetLangName}`);
        
        return LANGUAGE_CONFIG[userLanguage].prompt
            .replace(/\[TARGET_LANGUAGE\]/g, targetLangName);
    }

    generateHistoryPrompt(chatHistory) {
        const userLanguage = this.getCurrentLanguage();
        const targetLanguage = document.getElementById('targetLanguageSelect').value;
        const targetLangName = TARGET_LANGUAGES[targetLanguage].nativeName;
        
        console.log(`Generating history prompt for:
            User Interface Language: ${userLanguage}
            Target Learning Language: ${targetLanguage}
            Native Name: ${targetLangName}`);
        
        return LANGUAGE_CONFIG[userLanguage].historyPrompt
            .replace(/\[TARGET_LANGUAGE\]/g, targetLangName)
            .replace('[Previous Chat]', chatHistory);
    }
}

new AudioChat();