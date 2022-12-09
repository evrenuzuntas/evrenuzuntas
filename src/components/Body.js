import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'
import Experience from './Experience';
import LanguageButton from './LanguageButton';
import Left from './Left';
import Right from './Right';




const Body = (props) => {



    const { t, i18n } = useTranslation();


    return (
        <Grid container >
            <Grid item xs={4} sx={{ ...styles.left }}>
                <Left />
            </Grid >
            <Grid item xs={8}>
                <Right />
                {/* <Experience /> */}

            </Grid >
        </Grid >
    )
}

export default Body;

const styles = {
    left: {



    },

}