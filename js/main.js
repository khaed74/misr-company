
/* =========================================================
   PRODUCT DATA
========================================================= */

const productData = [

    {
        id: 'B104',
        size: '100 ML',
        image: 'assets/images/100ml.webp',
        label: '18 g',
        height: '110 mm',
        thread: '37.5 mm',
        volume: '100 ml',
        material: 'HDPE/COEX',
        diameter: '47.1 mm'
    },

{
        id: 's105',
        size: '100 ML',
        image: 'assets/images/100ml-1.webp',
        label: '18 g',
        height: '75.7 mm',
        thread: '46 mm',
        volume: '100 ml',
        material: 'HDPE/COEX',
        diameter: '56 mm'
    },


{
        id: 's108',
        size: '100 ML',
        image: 'assets/images/100ml-2.webp',
        label: '18 g',
        height: '90 mm',
        thread: '44.2 mm',
        volume: '100 ml',
        material: 'HDPE/COEX',
        diameter: '50 mm'
    },










    

    {
        id: 'B103',
        size: '250 ML',
        image: 'assets/images/250ml.webp',
        label: '30 g',
        height: '145.3 mm',
        thread: '37.7 mm',
        volume: '250 ml',
        material: 'HDPE/COEX',
        diameter: '61 mm'
    },

    {
        id: 'S107',
        size: '250 ML',
        image: 'assets/images/250ml-1.webp',
        label: '35 g',
        height: '135 mm',
        thread: '46 mm',
        volume: '250 ml',
        material: 'HDPE/COEX',
        diameter: '62 mm'
    },

    {
        id: 'IS102',
        size: '250 ML',
        image: 'assets/images/250ml-2.webp',
        label: '35 g',
        height: '135 mm',
        thread: '62 mm',
        volume: '250 ml',
        material: 'HDPE/COEX',
        diameter: '62 mm'
    },

    {
        id: 'B102',
        size: '500 ML',
        image: 'assets/images/500ml.webp',
        label: '50 g',
        height: '186 mm',
        thread: '37.4 mm',
        volume: '500 ml',
        material: 'HDPE/COEX',
        diameter: '73 mm'
    },

    {
        id: 'S106',
        size: '500 ML',
        image: 'assets/images/500ml-1.webp',
        label: '55 g',
        height: '188 mm',
        thread: '46 mm',
        volume: '500 ml',
        material: 'HDPE/COEX',
        diameter: '68.6 mm'
    },

    {
        id: 'B101',
        size: '1000 ML',
        image: 'assets/images/1000ml.webp',
        label: '95 g',
        height: '240 mm',
        thread: '37.3 mm',
        volume: '1000 ml',
        material: 'HDPE/COEX',
        diameter: '90 mm'
    },

   
    {
        id: 'BS105',
        size: '1000 ML',
        image: 'assets/images/1000ml-2.webp',
        label: '95 g',
        height: '240 mm',
        thread: '37.3 mm',
        volume: '1000 ml',
        material: 'HDPE/COEX',
        diameter: '90 mm'
    },

 
    {
        id: 'S101',
        size: '1000 ML',
        image: 'assets/images/1000ml-3.webp',
        label: '95 g',
        height: '225 mm',
        thread: '46 mm',
        volume: '1000 ml',
        material: 'HDPE/COEX',
        diameter: '88.5 mm'
    },




    {
        id: 'J1000',
        size: '5000 ML',
        image: 'assets/images/5000ml.webp',
        label: '300 g',
        height: '300 mm',
        thread: '62 mm',
        volume: '5000 ml',
        material: 'HDPE/COEX',
        diameter: ''
    }

    
];

/* =========================================================
   TRANSLATIONS
========================================================= */

const i18n = {

    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        /* Navigation */

        
        navHome: 'Home',
        navTechnology: 'Technology',
        navProducts: 'Products',
        navProcess: 'Process',
        navQuality: 'Quality',
        navAbout: 'About Us',
        navContact: 'Contact',
        quote: 'Request a Quote',


        /* Product Specifications */

        labelArea: 'Label Area',
        height: 'Height',
        thread: 'External Thread',
        volume: 'Volume',
        material: 'Material',
        diameter: 'Diameter',


        /* Products */

        productEyebrow:
            'AGRO-SHIELD / Product Range',

        productTitle:
            'Packaging engineered around the product it protects.',

        productText:
            'Explore the AGRO-SHIELD range through individual product views. The supplied bottle forms and technical values are presented exactly as provided.',

        prev: 'Previous',
        next: 'Next',

        explore: 'Explore Products',
        technology: 'Explore Technology',


        /* Contact */

        quoteTitle:
            'Tell us what you need to package.',

        quoteText:
            'Share the product, packaging requirement, and application. Our team can support the selection of the appropriate packaging solution.',

        phone: 'Phone / Fax',
        mobile: 'Mobile',
        address: 'Address',

        addressValue:
            'New Salhia — First Industrial Zone',

        formName: 'Name',
        formCompany: 'Company',
        formEmail: 'Email',
        formMessage: 'Packaging requirement',
        formSend: 'Send Request',

        formNote:
            'Your request will be sent directly to the MISR Company email.',


        /* Footer */

        footerProducts:
            'Products',

        footerProductRange:
            'Product Range',

        footerProcess:
            'Production Process',

        footerCompany:
            'Company',

        footerAbout:
            'About ',

        footerQuality:
            'Quality',

        footerContact:
            'Contact Us',

        footerTag:
            'Smart Packaging Solutions',

        footerText:
            'Advanced plastic packaging solutions for demanding applications, with a focus on protection, reliability and product value.'

    },


    /* =====================================================
       ARABIC
    ===================================================== */

    ar: {

        /* Navigation */

        navHome: 'الرئيسية',
        navTechnology: 'التقنيات',
        navProducts: 'المنتجات',
        navProcess: 'مراحل التصنيع',
        navQuality: 'الجودة',
        navAbout: 'من نحن',
        navContact: 'تواصل معنا',
        quote: 'اطلب عرض سعر',


        /* Product Specifications */

        labelArea: 'مساحة الملصق',
        height: 'الارتفاع',
        thread: 'القلاوظ الخارجي',
        volume: 'السعة',
        material: 'الخامة',
        diameter: 'القطر',


        /* Products */

        productEyebrow:
            'AGRO-SHIELD / مجموعة المنتجات',

        productTitle:
            'عبوات مصممة حول المنتج الذي تحميه.',

        productText:
            'استكشف مجموعة AGRO-SHIELD من خلال عرض مستقل لكل مقاس. تم الحفاظ على أشكال العبوات والقيم الفنية الواردة في المواد الأصلية كما هي.',

        prev: 'السابق',
        next: 'التالي',

        explore: 'استكشف المنتجات',
        technology: 'استكشف التقنيات',


        /* Contact */

        quoteTitle:
            'أخبرنا بما تحتاج إلى تعبئته.',

        quoteText:
            'شاركنا طبيعة المنتج ومتطلبات العبوة والاستخدام، وسيقدم فريقنا الدعم الفني لاختيار الحل المناسب.',

        phone: 'هاتف / فاكس',
        mobile: 'موبايل',
        address: 'العنوان',

        addressValue:
            'الصالحية الجديدة — المنطقة الصناعية الأولى',

        formName: 'الاسم',
        formCompany: 'الشركة',
        formEmail: 'البريد الإلكتروني',
        formMessage: 'متطلبات التعبئة',
        formSend: 'إرسال الطلب',

        formNote:
            'سيتم إرسال طلبك مباشرة إلى البريد الإلكتروني الخاص بشركة مصر.',


        /* Footer */

        footerProducts:
            'المنتجات',

        footerProductRange:
            'مجموعة المنتجات',

        footerProcess:
            'مراحل التصنيع',

        footerCompany:
            'الشركة',

        footerAbout:
            'من نحن',

        footerQuality:
            'الجودة',

        footerContact:
            'تواصل معنا',

        footerTag:
            'حلول تعبئة وتغليف ذكية',

        footerText:
            'حلول متقدمة للتعبئة والتغليف البلاستيكي للتطبيقات التي تتطلب الحماية والاعتمادية والحفاظ على قيمة المنتج.'

    }

};


/* =========================================================
   LANGUAGE
========================================================= */

function setLanguage(lang) {

    /* -----------------------------------------------------
       Validate Language
    ----------------------------------------------------- */

    if (!i18n[lang]) {
        lang = 'en';
    }


    /* -----------------------------------------------------
       HTML Language + Direction
    ----------------------------------------------------- */

    document.documentElement.lang = lang;

    document.documentElement.dir =
        lang === 'ar'
            ? 'rtl'
            : 'ltr';


    document.body.classList.toggle(
        'rtl',
        lang === 'ar'
    );


    /* -----------------------------------------------------
       Translate data-i18n Elements
    ----------------------------------------------------- */

    document
        .querySelectorAll('[data-i18n]')
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (
                i18n[lang][key] !== undefined
            ) {

                element.textContent =
                    i18n[lang][key];

            }

        });


    /* -----------------------------------------------------
       Translate data-en / data-ar Elements
    ----------------------------------------------------- */

    document
        .querySelectorAll('[data-en][data-ar]')
        .forEach(element => {

            element.textContent =
                lang === 'ar'
                    ? element.dataset.ar
                    : element.dataset.en;

        });


    /* -----------------------------------------------------
       FOOTER AUTO TRANSLATION
    ----------------------------------------------------- */

    document
        .querySelectorAll('footer a')
        .forEach(link => {

            const href =
                link.getAttribute('href') || '';

            const text =
                link.textContent
                    .trim()
                    .toLowerCase();


            /* Products */

            if (
                href.includes('products.html') ||
                href.includes('#products') ||
                text === 'product range' ||
                text === 'مجموعة المنتجات'
            ) {

                link.textContent =
                    lang === 'ar'
                        ? 'مجموعة المنتجات'
                        : 'Product Range';

            }


            /* Process */

            else if (
                href.includes('process.html') ||
                href.includes('#process') ||
                text === 'production process' ||
                text === 'مراحل التصنيع'
            ) {

                link.textContent =
                    lang === 'ar'
                        ? 'مراحل التصنيع'
                        : 'Production Process';

            }


            /* About */

            else if (
                href.includes('about.html') ||
                href.includes('#about') ||
                text === 'about' ||
                text === 'about ' ||
                text === 'من نحن'
            ) {

                link.textContent =
                    lang === 'ar'
                        ? 'من نحن'
                        : 'About';

            }


            /* Quality */

            else if (
                href.includes('quality.html') ||
                href.includes('#quality') ||
                text === 'quality' ||
                text === 'الجودة'
            ) {

                link.textContent =
                    lang === 'ar'
                        ? 'الجودة'
                        : 'Quality';

            }


            /* Contact */

            else if (
                href.includes('contact.html') ||
                href.includes('#contact') ||
                text === 'contact' ||
                text === 'contact us' ||
                text === 'تواصل معنا'
            ) {

                link.textContent =
                    lang === 'ar'
                        ? 'تواصل معنا'
                        : 'Contact Us';

            }

        });


    /* -----------------------------------------------------
       Language Buttons
    ----------------------------------------------------- */

    document
        .querySelectorAll('[data-lang]')
        .forEach(button => {

            button.classList.toggle(
                'active',
                button.dataset.lang === lang
            );

        });


    /* -----------------------------------------------------
       Save Language
    ----------------------------------------------------- */

    localStorage.setItem(
        'misr-lang',
        lang
    );


    /* -----------------------------------------------------
       Notify Website
    ----------------------------------------------------- */

    window.dispatchEvent(
        new Event('languagechange')
    );

}


/* =========================================================
   INITIALIZE LANGUAGE
========================================================= */

function initLanguage() {

    const savedLanguage =
        localStorage.getItem('misr-lang') || 'en';


    document
        .querySelectorAll('[data-lang]')
        .forEach(button => {

            button.addEventListener(
                'click',
                () => {

                    setLanguage(
                        button.dataset.lang
                    );

                }
            );

        });


    setLanguage(
        savedLanguage
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMenu() {

    const toggle =
        document.querySelector(
            '.menu-toggle'
        );

    const nav =
        document.querySelector(
            '.site-nav'
        );


    if (!toggle || !nav) {
        return;
    }


    toggle.addEventListener(
        'click',
        () => {

            nav.classList.toggle(
                'open'
            );

        }
    );


    nav
        .querySelectorAll('a')
        .forEach(link => {

            link.addEventListener(
                'click',
                () => {

                    nav.classList.remove(
                        'open'
                    );

                }
            );

        });

}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

function initReveal() {

    const items =
        document.querySelectorAll(
            '.reveal'
        );


    if (!items.length) {
        return;
    }


    if (
        !(
            'IntersectionObserver'
            in window
        )
    ) {

        items.forEach(item => {

            item.classList.add(
                'visible'
            );

        });

        return;
    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    entry.target.classList.add(
                        'visible'
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },

            {
                threshold: 0.12
            }

        );


    items.forEach(item => {

        observer.observe(
            item
        );

    });

}


/* =========================================================
   PRODUCTS
========================================================= */

function initProducts() {

    const root =
        document.querySelector(
            '[data-product-showcase]'
        );


    if (!root) {
        return;
    }


    /* -----------------------------------------------------
       Product Elements
    ----------------------------------------------------- */

    const image =
        root.querySelector(
            '[data-product-image]'
        );

    const size =
        root.querySelector(
            '[data-product-size]'
        );

    const specs =
        root.querySelector(
            '[data-product-specs]'
        );

    const tabs =
        root.querySelector(
            '[data-product-tabs]'
        );

    const progress =
        root.querySelector(
            '[data-product-progress]'
        );

    const prevButton =
        root.querySelector(
            '[data-prev]'
        );

    const nextButton =
        root.querySelector(
            '[data-next]'
        );


    if (
        !image ||
        !size ||
        !specs ||
        !tabs
    ) {
        return;
    }


    /* -----------------------------------------------------
       Current Product
    ----------------------------------------------------- */

    let index =
        Number(
            root.dataset.start || 0
        );


    if (
        Number.isNaN(index) ||
        index < 0 ||
        index >= productData.length
    ) {

        index = 0;

    }


    /* -----------------------------------------------------
       Render Product
    ----------------------------------------------------- */

    function renderProduct() {

        const product =
            productData[index];


        const lang =
            document.documentElement.lang || 'en';


        const translation =
            i18n[lang] || i18n.en;


        if (!product) {
            return;
        }


        /* -------------------------------------------------
           Product Image
        ------------------------------------------------- */

        image.classList.add(
            'is-changing'
        );


        image.onload = () => {

            requestAnimationFrame(
                () => {

                    image.classList.remove(
                        'is-changing'
                    );

                }
            );

        };


        image.onerror = () => {

            console.error(
                `Product image could not be loaded: ${product.image}`
            );

            image.classList.remove(
                'is-changing'
            );

        };


        image.src =
            product.image;


        image.alt =
            `AGRO-SHIELD ${product.size}`;


        /* -------------------------------------------------
           Product Size
        ------------------------------------------------- */

        size.textContent =
            product.size;


        /* -------------------------------------------------
           Specifications
        ------------------------------------------------- */

        specs.innerHTML = `

            <div>

                <span>
                    ${translation.labelArea}
                </span>

                <strong>
                    ${product.label}
                </strong>

            </div>


            <div>

                <span>
                    ${translation.height}
                </span>

                <strong>
                    ${product.height}
                </strong>

            </div>


            <div>

                <span>
                    ${translation.thread}
                </span>

                <strong>
                    ${product.thread}
                </strong>

            </div>


            <div>

                <span>
                    ${translation.volume}
                </span>

                <strong>
                    ${product.volume}
                </strong>

            </div>


            <div>

                <span>
                    ${translation.material}
                </span>

                <strong>
                    ${product.material}
                </strong>

            </div>


            <div>

                <span>
                    ${translation.diameter}
                </span>

                <strong>
                    ${product.diameter}
                </strong>

            </div>

        `;


        /* -------------------------------------------------
           Active Product Tab
        ------------------------------------------------- */

        tabs
            .querySelectorAll('button')
            .forEach(
                (button, buttonIndex) => {

                    button.classList.toggle(
                        'active',
                        buttonIndex === index
                    );

                }
            );


        /* -------------------------------------------------
           Progress
        ------------------------------------------------- */

        if (progress) {

            const percentage =
                (
                    (index + 1) /
                    productData.length
                ) * 100;


            progress.style.width =
                `${percentage}%`;

        }

    }


    /* -----------------------------------------------------
       Create Product Tabs
    ----------------------------------------------------- */

    tabs.innerHTML =
        productData
            .map(
                (product, productIndex) => `

                    <button
                        type="button"
                        data-index="${productIndex}"
                    >
                        ${product.size}
                    </button>

                `
            )
            .join('');


    /* -----------------------------------------------------
       Product Tab Click
    ----------------------------------------------------- */

    tabs
        .querySelectorAll('button')
        .forEach(button => {

            button.addEventListener(
                'click',
                () => {

                    index =
                        Number(
                            button.dataset.index
                        );


                    renderProduct();

                }
            );

        });


    /* -----------------------------------------------------
       Previous Button
    ----------------------------------------------------- */

    if (prevButton) {

        prevButton.addEventListener(
            'click',
            () => {

                index =
                    (
                        index -
                        1 +
                        productData.length
                    ) %
                    productData.length;


                renderProduct();

            }
        );

    }


    /* -----------------------------------------------------
       Next Button
    ----------------------------------------------------- */

    if (nextButton) {

        nextButton.addEventListener(
            'click',
            () => {

                index =
                    (
                        index +
                        1
                    ) %
                    productData.length;


                renderProduct();

            }
        );

    }


    /* -----------------------------------------------------
       Language Change
    ----------------------------------------------------- */

    window.addEventListener(
        'languagechange',
        renderProduct
    );


    /* -----------------------------------------------------
       Initial Render
    ----------------------------------------------------- */

    renderProduct();

}


/* =========================================================
   TECHNOLOGY LAYER STACK
========================================================= */

function initLayerStack() {

    const buttons =
        document.querySelectorAll(
            '[data-layer-target]'
        );


    const panels =
        document.querySelectorAll(
            '[data-layer-panel]'
        );


    if (
        !buttons.length ||
        !panels.length
    ) {
        return;
    }


    buttons.forEach(button => {

        button.addEventListener(
            'click',
            () => {

                const target =
                    button.dataset.layerTarget;


                /* Active Button */

                buttons.forEach(item => {

                    item.classList.toggle(
                        'active',
                        item === button
                    );

                });


                /* Active Panel */

                panels.forEach(panel => {

                    panel.classList.toggle(
                        'active',
                        panel.dataset.layerPanel === target
                    );

                });

            }
        );

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

function initForm() {

    const forms =
        document.querySelectorAll(
            '.quote-form'
        );


    if (!forms.length) {
        return;
    }


    forms.forEach(form => {

        form.addEventListener(
            'submit',
            async event => {

                event.preventDefault();


                const status =
                    form.querySelector(
                        '.form-status'
                    );


                const submitButton =
                    form.querySelector(
                        'button[type="submit"]'
                    );


                const lang =
                    document.documentElement.lang || 'en';


                /* -------------------------------------------------
                   Sending State
                ------------------------------------------------- */

                if (status) {

                    status.textContent =
                        lang === 'ar'
                            ? 'جاري إرسال الطلب...'
                            : 'Sending your request...';


                    status.classList.add(
                        'show'
                    );

                }


                if (submitButton) {

                    submitButton.disabled =
                        true;


                    submitButton.textContent =
                        lang === 'ar'
                            ? 'جاري الإرسال...'
                            : 'Sending...';

                }


                try {

                    /* -------------------------------------------------
                       Form Data
                    ------------------------------------------------- */

                    const formData =
                        new FormData(form);


                    /* -------------------------------------------------
                       Submit Request
                    ------------------------------------------------- */

                    const response =
                        await fetch(
                            form.action,
                            {
                                method: 'POST',

                                body: formData,

                                headers: {
                                    Accept:
                                        'application/json'
                                }
                            }
                        );


                    /* -------------------------------------------------
                       Response
                    ------------------------------------------------- */

                    const result =
                        await response.json();


                    /* -------------------------------------------------
                       Success
                    ------------------------------------------------- */

                    if (response.ok) {

                        if (status) {

                            status.textContent =
                                lang === 'ar'
                                    ? 'تم إرسال طلبك بنجاح.'
                                    : 'Your request has been sent successfully.';


                            status.classList.add(
                                'show'
                            );

                        }


                        form.reset();

                    }


                    /* -------------------------------------------------
                       Server Error
                    ------------------------------------------------- */

                    else {

                        if (status) {

                            status.textContent =
                                result?.errors?.[0]?.message ||
                                (
                                    lang === 'ar'
                                        ? 'حدث خطأ أثناء إرسال الطلب.'
                                        : 'There was an error sending your request.'
                                );


                            status.classList.add(
                                'show'
                            );

                        }

                    }

                }


                /* -------------------------------------------------
                   Network / JavaScript Error
                ------------------------------------------------- */

                catch (error) {

                    console.error(
                        'Contact form error:',
                        error
                    );


                    if (status) {

                        status.textContent =
                            lang === 'ar'
                                ? 'تعذر إرسال الطلب. حاول مرة أخرى.'
                                : 'Could not send the request. Please try again.';


                        status.classList.add(
                            'show'
                        );

                    }

                }


                /* -------------------------------------------------
                   Restore Button
                ------------------------------------------------- */

                finally {

                    if (submitButton) {

                        submitButton.disabled =
                            false;


                        submitButton.textContent =
                            lang === 'ar'
                                ? 'إرسال الطلب'
                                : 'Send Request';

                    }

                }

            }
        );

    });

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {

        initLanguage();

        initMenu();

        initReveal();

        initProducts();

        initLayerStack();

        initForm();

    }
);
