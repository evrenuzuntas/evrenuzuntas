import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageButton from './LanguageButton';




const Left = (props) => {



    const { t, i18n } = useTranslation();


    return (
        <Grid container sx={{ ...styles.root }}>
            <Grid item container >
                <Typography variant="h2" gutterBottom sx={{ ...styles.topName }}>
                    {t('nameSurname')}
                </Typography>
            </Grid >
            <Grid item container>
                <Typography variant="h4" sx={{ ...styles.topName }}>
                    {t('job')}
                </Typography>
            </Grid >
        </Grid >
    )
}

export default Left;

const styles = {
    root: {
        mt: '10vh',

    },
    topName: {
        mx: 'auto',
        fontSize: "2rem",


    },

}