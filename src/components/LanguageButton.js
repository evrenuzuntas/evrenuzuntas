
import Button from '@mui/material/Button';

import { useTranslation } from 'react-i18next'
import cookie from 'react-cookies';

import React, { useEffect } from 'react'
import { COOKIES } from '../utils/constants';



function LanguageButton(props) {

    const { i18n } = useTranslation();
    const { style } = props

    const styles = {
        buttonStyle: {
            width: '64px',
            height: '32px',
            backgroundColor: "transparent",
            color: "#FFFFFF",
            fontSize: "1.3rem",
            "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
            },
            ...style,

        }
    }

    const changeLanguageHandler = () => {
        language = i18n.language === "en" ? "tr" : "en"

        // change the i18n language
        i18n.changeLanguage(language)
        cookie.save(COOKIES.LANGUAGE, language, { path: '/' })

    }
    let language = 'tr';
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