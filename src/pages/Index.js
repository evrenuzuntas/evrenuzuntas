import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';


const Index = (props) => {
    const isTablet = useMediaQuery(getTheme().breakpoints.down('tablet'));

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
            padding: isTablet ? "1rem" : "8rem 4rem"
        },
        typography0: {
            textAlign: "center",
            fontSize: isTablet ? "26px" : "80px",
            letterSpacing: isTablet ? "14px" : "40px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.orange,

        },

        typography2: {
            textAlign: "center",
            fontSize: isTablet ? "24px" : "40px",
            letterSpacing: isTablet ? "6px" : "40px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black

        },
        part1: {
            mb: isTablet ? "2rem" : "12rem"
        },
        part2: {
            mb: "4rem"
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
                <Typography sx={{ ...style.typography0 }}>{t("welcome")}</Typography>
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