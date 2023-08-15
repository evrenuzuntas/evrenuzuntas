import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import { CenterFocusStrong } from '@mui/icons-material';


const Evren = (props) => {
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
            padding: isMd ? "2rem" : "4rem"
        },
        typography0: {
            textAlign: "center",
            fontSize: isMd ? "20px" : "30px",
            letterSpacing: isMd ? "10px" : "30px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.black

        },

        typography2: {
            textAlign: "center",
            pb: "4rem",
            fontSize: isMd ? "18px" : "20px",
            letterSpacing: isMd ? "10px" : "30px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black

        },
        typography3: {
            textAlign: "center",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black

        },
        imageName: {
            mb: "4rem"
        },
        image: {
            padding: "1rem",
            alignSelf: "center"
        },


        typographyTitle: {
            textAlign: "center",
            padding: "1rem",
            pb: "0.7rem",
            fontSize: "20px",
            letterSpacing: "4px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
        },
        typographyDate: {
            textAlign: "center",
            placeSelf: "center",
            pb: "1rem",
            fontSize: "16px",
            letterSpacing: "3px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
        },
        typographyText: {
            textAlign: "center",
            padding: "1rem",
            pb: "0.5rem",
            // fontSize: "40px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black

        },

    }
    return (
        <Grid container sx={{ ...style.root }}>

            <Grid container sx={{ ...style.imageName }}>
                <Grid item xs={12} md={4}
                    sx={{ ...style.image }}>
                    <img
                        alt={'evrenUzuntas'}
                        src={IMAGES.VESIKALIK}
                        width="100%"
                    />
                </Grid>
                <Grid item xs={12} md={8} container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="center"
                    sx={{ ...style.part1 }}>
                    <Typography sx={{ ...style.typography0 }}>{t("evrenUzuntas")}</Typography>
                    {/* <Typography sx={{ ...style.typography }}>evoloper</Typography> */}
                    <Typography sx={{ ...style.typography2 }}>{t("softwareDeveloper")}</Typography>
                    <MainCard>
                        <Typography sx={{ ...style.typography3 }}>{t("aboutMe")}</Typography>
                    </MainCard>
                </Grid>
            </Grid>


            <MainCard>

                <Grid item sx={{ ...style.image }} xs={12} md={2} textAlign={"center"} >
                    <Button onClick={() => window.open(`https://www.ambeent.ai/`)}>
                        <img alt={'yurdakullogo'} src={IMAGES.AMBEENT_LOGO} width="100%" />
                    </Button>
                    <Button onClick={() => window.open(`https://www.renault.com.tr/`)}>
                        <img alt={'yurdakullogo'} src={IMAGES.MAIS_LOGO} width="100%" />
                    </Button>
                </Grid>
                <Grid item xs={12} md={8} >
                    <Typography sx={{ ...style.typographyTitle }}>{t("ambeent0")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("ambeent1")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("ambeent2")}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography sx={{ ...style.typographyDate }}>{t("Apr 2021 -")}</Typography>
                    <Typography sx={{ ...style.typographyDate, color: "green" }}>{t("ongoing")}</Typography>
                </Grid>
            </MainCard>

            <MainCard>
                <Grid item sx={{ ...style.image }} xs={12} md={2} textAlign={"center"} >
                    <Button onClick={() => window.open(`http://www.yurdakul.com/`)} >
                        <img alt={'yurdakullogo'} src={IMAGES.YURDAKUL_LOGO} width="100%" />
                    </Button>
                </Grid>
                <Grid item xs={12} md={8} >
                    <Typography sx={{ ...style.typographyTitle }}>{t("yurdakul0")}</Typography>
                    <Typography sx={{ ...style.typographyTitle }}>{t("yurdakul1")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("yurdakul2")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("yurdakul3")}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography sx={{ ...style.typographyDate }}>{t("Jul 2018 - Aug 2018")}</Typography>
                </Grid>
            </MainCard>

            <MainCard>
                <Grid item sx={{ ...style.image }} xs={12} md={2} textAlign={"center"}>
                    <Button onClick={() => window.open(`https://www.yatagantermik.com.tr/`)}>
                        <img alt={'yataganlogo'} src={IMAGES.YATAGAN_LOGO} width="100%" />
                    </Button>
                </Grid>
                <Grid item xs={12} md={8} >
                    <Typography sx={{ ...style.typographyTitle }}>{t("yatagan0")}</Typography>
                    <Typography sx={{ ...style.typographyTitle }}>{t("yatagan1")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("yatagan2")}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography sx={{ ...style.typographyDate }}>{t("Jul 2017 - Aug 2017")}</Typography>
                </Grid>
            </MainCard>



            <MainCard>
                <Grid item sx={{ ...style.image }} xs={12} md={2} textAlign={"center"}>
                    <Button onClick={() => window.open(`http://mf.kku.edu.tr/Fakulte`)}>
                        <img alt={'kirikkaleunivercity'} src={IMAGES.KKU_LOGO} width="100%" />
                    </Button>
                </Grid>
                <Grid item xs={12} md={8} >
                    <Typography sx={{ ...style.typographyTitle }}>{t("kku0")}</Typography>
                    <Typography sx={{ ...style.typographyTitle }}>{t("kku1")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("GPA 2.80")}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography sx={{ ...style.typographyDate }}>{t("Sep 2015 - Dec 2021")}</Typography>
                </Grid>
            </MainCard>

            <Typography sx={{ ...style.typographyTitle }}>Cv örneğini indirmek için
                <a href="EvrenUzuntas - Cv.pdf" download="EvrenUzuntas - Cv">
                    {t(" tıklayınız.")}
                </a>
            </Typography>


        </Grid>
    )
}

export default Evren;