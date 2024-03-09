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
            minHeight: "1800px",
            backgroundColor: "#FFFFFF",
            padding: isSm ? "1rem" : isMd ? "2rem" : "3rem"
        },
        lorem: {
            // fontSize: "40px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black
        },
        textTypography: {
            fontSize: "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.orange,
            letterSpacing: "20px",
            "&:hover": {
                color: DEFAULT_THEME.palette.orange,
            },
        },
    }
    return (
        <Grid container sx={{ ...style.root }}>
            <Grid xs={12}>
                {!isLg && <Grid container sx={{ maxHeight: "1vw", opacity: 1, }}>
                    <img src={IMAGES.TITLE_IMAGE_DESKTOP} width="100%" ></img>
                </Grid>}
                <Title title={t("welcome")} />
                <Grid container direction="row" justifyContent="center" alignItems="flex-start" sx={{ ...style.root }}>
                    <Button sx={{ ...style.textTypography, justifyContent: "center", }} onClick={() => window.open("https://www.instagram.com/piflow3d/", '_blank').focus()}>PiFlow3D.com</Button>
                </Grid>
                {/* <Grid item xs={12} sm={4}>
                        <MainCard> <Typography sx={{ ...style.lorem }}>{t("loremipsum")}</Typography> </MainCard>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MainCard> <Typography sx={{ ...style.lorem }}>{t("loremipsum")}</Typography> </MainCard>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MainCard><Typography sx={{ ...style.lorem }}>{t("loremipsum")}</Typography> </MainCard>
                    </Grid> */}

            </Grid>
        </Grid>
    )
}

export default Index;