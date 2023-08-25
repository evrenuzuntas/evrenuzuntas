import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Grid, Button, useMediaQuery, Typography } from '@mui/material';

// Utils
import { DEFAULT_THEME, getTheme } from "../utils/theme";
import { useNavigate } from 'react-router-dom';


const Footer = (props) => {
    const { t } = useTranslation()
    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));


    const style = {
        root: {
            backgroundColor: DEFAULT_THEME.palette.darkgray,
            minHeight: "6vw",
            padding: "1rem",
            zIndex: 1,
            position: "relative",
            // position: "absolute",
            // bottom: "0",
        },
        leftButton: {
            fontSize: "22px",
            letterSpacing: "5px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.white
        },
    }

    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="center" sx={{ ...style.root }}>

            <Typography variant="h6" sx={{ color: DEFAULT_THEME.palette.white, textAlign: "center" }}> {t('continues')}</Typography>

        </Grid>
    )
}

export default Footer;