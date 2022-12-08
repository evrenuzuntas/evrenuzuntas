import { LINKS } from "./constants"

const isRenault = process.env.REACT_APP_BRAND === 'renault'

const BRAND = isRenault ? 'Renault' : 'Dacia'

export default {

    tr: {
        translation: {
            languageButton: "TR",
            nameSurname: "EVREN UZUNTAŞ",
            job: "YAZILIM GELİŞTİRİCİ",


        }
    },
    en: {
        translation: {
            languageButton: "EN",
            nameSurname: "EVREN UZUNTAS",
            job: "SOFTWARE DEVELOPER",

        }
    }
}
