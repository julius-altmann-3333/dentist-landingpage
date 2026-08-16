    /* =========================================================
       SMOOTH SCROLL
       ========================================================= */

    function scrollToSection(sectionId) {

        const element = document.getElementById(sectionId);

        if (element) {

            element.scrollIntoView({
                behavior: 'smooth'
            });

        }

    }


    /* =========================================================
       DEMO REVIEW MESSAGE
       ========================================================= */

    function showDemoMessage(event) {

        event.preventDefault();

        const language =
            document.documentElement.lang || 'en';

        if (language === 'de') {

            alert(
                'Vielen Dank für Ihre Bewertung! (Demo)'
            );

        } else {

            alert(
                'Thank you for your kind words! (Demo)'
            );

        }

    }


    /* =========================================================
       LANGUAGE SYSTEM
       ========================================================= */

    const LANGUAGE_STORAGE_KEY = 'smile-haven-language';

    const languageSwitch =
        document.getElementById('languageSwitch');


    function setLanguage(language) {

        /*
         * Only English and German are supported.
         */
        if (language !== 'en' && language !== 'de') {
            language = 'en';
        }


        /*
         * Update HTML language attribute.
         */
        document.documentElement.lang = language;


        /*
         * Show the correct translation.
         */
        document.querySelectorAll('[data-lang]').forEach(function (element) {

            if (element.dataset.lang === language) {

                element.hidden = false;

            } else {

                element.hidden = true;

            }

        });


        /*
         * Update language button.
         */
        if (language === 'en') {

            languageSwitch.textContent = 'Deutsch';

            languageSwitch.setAttribute(
                'aria-label',
                'Switch website to German'
            );

        } else {

            languageSwitch.textContent = 'English';

            languageSwitch.setAttribute(
                'aria-label',
                'Website auf Englisch umschalten'
            );

        }


        /*
         * Update placeholders.
         */
        document
            .querySelectorAll('[data-placeholder-en]')
            .forEach(function (input) {

                if (language === 'en') {

                    input.placeholder =
                        input.dataset.placeholderEn;

                } else {

                    input.placeholder =
                        input.dataset.placeholderDe;

                }

            });


        /*
         * Save selected language.
         */
        localStorage.setItem(
            LANGUAGE_STORAGE_KEY,
            language
        );

    }


    function toggleLanguage() {

        const currentLanguage =
            document.documentElement.lang || 'en';

        const newLanguage =
            currentLanguage === 'en'
                ? 'de'
                : 'en';

        setLanguage(newLanguage);

    }


    languageSwitch.addEventListener(
        'click',
        toggleLanguage
    );


    /*
     * Load saved language.
     */
    const savedLanguage =
        localStorage.getItem(
            LANGUAGE_STORAGE_KEY
        );

    setLanguage(
        savedLanguage || 'en'
    );


    /* =========================================================
       APPOINTMENT FORM
       ========================================================= */

    const appointmentForm =
        document.getElementById('appointment-form');


    appointmentForm.addEventListener(
        'submit',
        function (event) {

            event.preventDefault();

            const language =
                document.documentElement.lang || 'en';


            if (language === 'de') {

                alert(
                    'Vielen Dank! Ihre Terminanfrage wurde empfangen.\n\n' +
                    'Wir werden uns in Kürze zur Bestätigung bei Ihnen melden. 🎉'
                );

            } else {

                alert(
                    'Thank you! Your appointment request has been received.\n\n' +
                    "We'll contact you shortly to confirm. 🎉"
                );

            }


            appointmentForm.reset();

            /*
             * Restore placeholders after form reset.
             */
            setLanguage(language);

        }
    );


    /* =========================================================
       MOBILE NAVBAR
       Close Bootstrap menu after clicking a navigation link.
       ========================================================= */

    document
        .querySelectorAll('#mainNavbar .nav-link')
        .forEach(function (link) {

            link.addEventListener(
                'click',
                function () {

                    const navbar =
                        document.getElementById('mainNavbar');

                    const collapse =
                        bootstrap.Collapse.getInstance(navbar);

                    if (collapse) {
                        collapse.hide();
                    }

                }
            );

        });


    /* =========================================================
       ESCAPE KEY
       ========================================================= */

    document.addEventListener(
        'keydown',
        function (event) {

            if (event.key === 'Escape') {

                const navbar =
                    document.getElementById('mainNavbar');

                const collapse =
                    bootstrap.Collapse.getInstance(navbar);

                if (collapse) {
                    collapse.hide();
                }

            }

        }
    );


    /* =========================================================
       READY
       ========================================================= */

    console.log(
        '%c✅ Smile Haven Bootstrap landing page ready!',
        'color:#eab308;font-weight:700'
    );
