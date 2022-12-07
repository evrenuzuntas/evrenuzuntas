
const isRenault = process.env.REACT_APP_BRAND === 'renault'
const BRAND = isRenault ? 'Renault' : 'Dacia'

const DEFAULT_LANGUAGE = 'tr';

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY
const API_KEY2 = process.env.REACT_APP_API_KEY2

const ROUTES = {
    INDEX: '/',
    NOT_FOUND: '/404',
    LINK_NOT_FOUND: '/',

}

const IMAGES = {
    LOGO_MAIN: isRenault ? 'renault_logo_white.png' : 'dacia_logo_black.jpg',
    FAVICON: isRenault ? 'favicon.png' : 'dacia_favicon.png',
    VEHICLE_PAGE_IMG: isRenault ? 'renault_vehicle_page_image.jpg' : 'dacia_vehicle_page_image.jpg',
    SERVICE_PAGE_IMG: isRenault ? 'renault_service_page_image.jpg' : 'dacia_service_page_image.jpg',
    COMMENT_PAGE_IMG: isRenault ? 'renault_comment_page_image.jpg' : 'dacia_comment_page_image.jpg',
    ERROR_PAGE_IMG: isRenault ? 'error_renault.jpg' : 'error_dacia.jpg',
}

const SURVEY_ID = isRenault ? 7 : 8
const PHONE = '(444 62 47)'

export {
    isRenault,
    BRAND,
    IMAGES,
    DEFAULT_LANGUAGE,
    ROUTES,
    API_URL,
    API_KEY,
    API_KEY2,
    SURVEY_ID,
    PHONE
}