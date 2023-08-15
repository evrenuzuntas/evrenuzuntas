import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import Title from '../components/Title';


const Index = (props) => {
    const isSm = useMediaQuery(getTheme().breakpoints.down('sm'));
    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));

    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = ' EVREN U '
    const navigate = useNavigate();

    const style = {
        root: {
            minHeight: "900px",
            backgroundColor: "#FFFFFF",
            padding: isSm ? "1rem" : isMd ? "2rem" : "3rem"
        },
        lorem: {
            // fontSize: "40px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black

        },

    }
    return (
        <Grid container sx={{ ...style.root }}>
            <Grid xs={12}>
                <Title title={t("welcome")} />
            </Grid>
            <MainCard> <Typography sx={{ ...style.lorem }}>{t("aboutMe")}</Typography>  </MainCard>
            <Grid item xs={12} sm={4}>
                <MainCard> <Typography sx={{ ...style.lorem }}>{t("loremipsum")}</Typography> </MainCard>
            </Grid>
            <Grid item xs={12} sm={4}>
                <MainCard> <Typography sx={{ ...style.lorem }}>{t("loremipsum")}</Typography> </MainCard>
            </Grid>
            <Grid item xs={12} sm={4}>
                <MainCard><Typography sx={{ ...style.lorem }}>{t("loremipsum")}</Typography> </MainCard>
            </Grid>
        </Grid>
    )
}

export default Index;