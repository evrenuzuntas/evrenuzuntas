import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import Title from '../components/Title';


const Index = (props) => {
    const isSm = useMediaQuery(getTheme().breakpoints.down('sm'));
    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));
    const isLg = useMediaQuery(getTheme().breakpoints.down('lg'));

    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = ' EVREN U '
    const navigate = useNavigate();

    const style = {
        root: {

            backgroundColor: "#FFFFFF",
            padding: isSm ? "1rem" : isMd ? "2rem" : "3rem"
        },
        textTypography: {
            fontSize: "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.black,
            backgroundColor: DEFAULT_THEME.palette.orange,
            letterSpacing: "20px",
            mb: "3rem",
            "&:hover": {
                color: DEFAULT_THEME.palette.orange,
                backgroundColor: DEFAULT_THEME.palette.black,
            },
        },
    }
    return (
        <Grid container
            direction="column"
            justifyContent="flex-start"
            alignItems="center" sx={{ ...style.root }}>

            <Title title={t("3D Baskılar İçin")} />
            <Button variant='contained' sx={{ ...style.textTypography, }} onClick={() => window.open("https://www.instagram.com/piflow3d/", '_blank').focus()}>PiFlow3D.com</Button>
            <img width="150rem" src='./images/piflow-qrcode.png'></img>
        </Grid>
    )
}

export default Index;