
import Button from '@mui/material/Button';

import { useTranslation } from 'react-i18next'
import cookie from 'react-cookies';

import React, { useEffect } from 'react'
import { COOKIES } from '../utils/constants';
import { DEFAULT_THEME } from '../utils/theme';



function LanguageButton(props) {

    const { i18n } = useTranslation();
    const { style } = props

    const styles = {
        buttonStyle: {
            width: '64px',
            height: '32px',
            backgroundColor: "transparent",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.white,
            fontSize: "1.3rem",
            "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
            },
            ...style,

        }
    }

    let language = "en"
    const changeLanguageHandler = () => {
        i18n.language === "en" ? language = "de" : i18n.language === "tr" ? language = "en" : language = "tr"
        // if (i18n.language === "en") {
        //     language = "de"
        //     return
        // }
        // else if (i18n.language === "de") {
        //     language = "tr"
        //     return
        // }
        // else if (i18n.language === "tr") {
        //     language = "en"
        //     return
        // }

        // change the i18n language
        i18n.changeLanguage(language)
        cookie.save(COOKIES.LANGUAGE, language, { path: '/' })

    }
    useEffect(() => {
        // get language from the cookie
        const lang = cookie.load(COOKIES.LANGUAGE)
        // check cookie language
        if (lang === undefined) {
            cookie.save(COOKIES.LANGUAGE, i18n.language, { path: '/' })
        } else {
            language = lang
        }
        i18n.changeLanguage(language)
    }, [])


    return <Button
        onClick={changeLanguageHandler}
        sx={{ ...styles.buttonStyle }}
        variant="contained"
        color="primary"
        disableElevation
        disableRipple
        {...props} />;
}

export default LanguageButton;