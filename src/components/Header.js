import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageButton from './LanguageButton';




const Header = (props) => {



    const { t, i18n } = useTranslation();


    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>
                    {t("languageButton")}
                </Typography>
            </Grid >
            <Grid item>
                <LanguageButton >
                    {t('languageButton')}
                </LanguageButton>
            </Grid >
        </Grid >
    )
}

export default Header;

const styles = {
    root: {

    },

}