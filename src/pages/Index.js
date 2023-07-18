import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME } from '../utils/theme';
import MainCard from '../components/MainCard';


const Index = (props) => {
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
            padding: "8rem 4rem"
        },
        typography0: {
            fontSize: "60px",
            letterSpacing: "40px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.black

        },
        typography: {
            fontSize: "200px",
            letterSpacing: "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.black

        },
        typography2: {
            fontSize: "40px",
            letterSpacing: "40px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black

        },
        part1: {
            mb: "12rem"
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

            <Grid item container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ ...style.part1 }}>
                <Typography sx={{ ...style.typography0 }}>{t("evrenUzuntas")}</Typography>
                {/* <Typography sx={{ ...style.typography }}>evoloper</Typography> */}
                <Typography sx={{ ...style.typography2 }}>{t("softwareDeveloper")}</Typography>
            </Grid>

            <Grid item container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ ...style.part2 }}>

                <Grid item xs={12}>
                    <MainCard>
                        <Typography sx={{ ...style.lorem }}>{t("aboutMe")}</Typography>
                    </MainCard>
                </Grid>

            </Grid>

            <Grid item container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ ...style.part3 }}>

                <Grid item xs={4}>
                    <MainCard>
                        <Typography sx={{ ...style.lorem }}>{t("loremipsum")}</Typography>
                    </MainCard>
                </Grid>
                <Grid item xs={4}>
                    <MainCard>
                        <Typography sx={{ ...style.lorem }}>{t("loremipsum")}</Typography>
                    </MainCard>
                </Grid>
                <Grid item xs={4}>
                    <MainCard>
                        <Typography sx={{ ...style.lorem }}>{t("loremipsum")}</Typography>
                    </MainCard>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Index;