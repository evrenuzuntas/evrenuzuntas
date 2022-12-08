import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'
import Experience from './Experience';
import LanguageButton from './LanguageButton';
import Left from './Left';




const Body = (props) => {



    const { t, i18n } = useTranslation();


    return (
        <Grid container >
            <Grid item xs={4}>
                <Left />
            </Grid >
            <Grid item xs={8}>
                <Typography>
                    {t('job')}
                </Typography>

                <Experience />

            </Grid >
        </Grid >
    )
}

export default Body;

const styles = {
    root: {

    },

}