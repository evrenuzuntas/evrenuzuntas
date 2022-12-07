import { LINKS } from "./constants"

const isRenault = process.env.REACT_APP_BRAND === 'renault'

const BRAND = isRenault ? 'Renault' : 'Dacia'

export default {

    tr: {
        translation: {
            languageButton: "TR",


        }
    },
    en: {
        translation: {
            languageButton: "EN",

        }
    }
}
