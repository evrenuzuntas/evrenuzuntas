

const DEFAULT_LANGUAGE = 'en';

const ROUTES = {
    ASLI: 'asli',
    EVREN: 'evren',
    CONNECT: 'connect',
    BLOG: 'blog',
    PORTFOLİO: 'portfolio',
    INDEX: '/',
    NOT_FOUND: '/404',
    LINK_NOT_FOUND: '/',
}
const NAVBAR_ROUTES = ["evren", "connect", "blog", "portfolio",]


const IMAGES = {
    VESIKALIK: 'images/vesikalik.jpeg',
    KKU_LOGO: 'images/kku_logo.jpeg',
    YATAGAN_LOGO: 'images/yatagan_logo.png',
    YURDAKUL_LOGO: 'images/yurdakul_logo.png',
    AMBEENT_LOGO: 'images/ambeent_logo.jpg',
    MAIS_LOGO: 'images/mais_logo.png',
    NOT_FOUND: 'images/404_page.webp',
    COMING_SOON: 'images/coming-soon.jpg',
    // connect
    YT_LOGO: 'images/youtube_318-183441.avif',
    INSTA_LOGO: 'images/insta.png',
    TW_LOGO: 'images/twitter.png',
    WP_LOGO: 'images/wp.png',
    // PagePreviews
    DACIA_SPRING_PW: 'images/preview/dacia_spring_pw.jpeg',

}
const COOKIES = {
    AUTHORIZATION: 'authorization',
    LANGUAGE: 'language',
    DEVICE: 'device-id',
};

export {
    IMAGES,
    DEFAULT_LANGUAGE,
    ROUTES,
    COOKIES,
    NAVBAR_ROUTES,
}