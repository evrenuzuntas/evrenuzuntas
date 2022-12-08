
import React from 'react'
import Button from '@mui/material/Button';
// import { isRenault } from '../../utils/theme'

import { useTranslation } from 'react-i18next'




function LanguageButton(props) {

    const { t, i18n } = useTranslation();
    const isRenault = process.env.REACT_APP_BRAND === 'renault'



    const { sx } = props
    const style = {
        buttonStyle: {
            width: '64px',
            height: '32px',
            color: "#000000",



            fontSize: "1.3rem",
            "&:hover": {
                color: "#000000",
                textDecoration: "underline",
            },
            ...props.style,

        }
    }

    const changeLanguageHandler = () => {
        language = i18n.language === "en" ? "tr" : "en"

        // change the i18n language
        i18n.changeLanguage(language)

    }
    let language = 'tr';
    // useEffect(() => {
    //     // get language from the cookie
    //     // check cookie language
    //     if (lang === undefined) {
    //         cookie.save(COOKIES.LANGUAGE, i18n.language, { path: '/' })
    //     } else {
    //         language = lang
    //     }
    //     i18n.changeLanguage(language)
    // }, [])


    return <Button

        onClick={changeLanguageHandler}
        sx={{ ...style.buttonStyle }}
        variant="text"
        // color="primary"
        disableElevation
        disableRipple
        {...props} />;
}

export default LanguageButton;