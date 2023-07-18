import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';


const Evren = (props) => {
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
            padding: isTablet ? "2rem" : "4rem"
        },
        typography0: {
            textAlign: "center",
            fontSize: isTablet ? "20px" : "30px",
            letterSpacing: isTablet ? "10px" : "30px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.black

        },

        typography2: {
            textAlign: "center",
            pb: "4rem",
            fontSize: isTablet ? "18px" : "20px",
            letterSpacing: isTablet ? "10px" : "30px",
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
                <Grid item xs={12} sm={4} container direction="column"
                    justifyContent="flex-end"
                    alignItems="center"
                    sx={{ ...style.image }}>

                    <img
                        alt={'evrenUzuntas'}
                        src={IMAGES.VESIKALIK}
                        width="100%"
                    />
                </Grid>
                <Grid item xs={12} sm={8} container
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
                <Grid item sx={{ ...style.image }} xs={12} sm={2}>
                    <img alt={'yurdakullogo'} src={IMAGES.AMBEENT_LOGO} width="100%" />
                    <img alt={'yurdakullogo'} src={IMAGES.MAIS_LOGO} width="100%" />
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Typography sx={{ ...style.typographyTitle }}>{t("AMBEENT INC. (FRONT END DEVELOPER)")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("Developing front end website and applications for Renault Mais. ")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("Technologies used: React JS, TypeScript, JavaScript, HTML & CSS, Redux, Mui, Jira, Git, Figma, Bitbucket, Postman, Azure")}</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography sx={{ ...style.typographyDate }}>{t("Apr 2021 -")}</Typography>
                    <Typography sx={{ ...style.typographyDate, color: "green" }}>{t("Ongoing")}</Typography>
                </Grid>
            </MainCard>

            <MainCard>
                <Grid item sx={{ ...style.image }} xs={12} sm={2}><img alt={'yurdakullogo'} src={IMAGES.YURDAKUL_LOGO} width="100%" /></Grid>
                <Grid item xs={12} sm={8} >
                    <Typography sx={{ ...style.typographyTitle }}>{t("YURDAKUL ELECTRIC")}</Typography>
                    <Typography sx={{ ...style.typographyTitle }}>{t("ELECTRICAL ELECTRONICS ENGINEERING (INTERN)")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("Made electrical project drawings of shopping mall and city hospitals.")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("Technologies used: AutoCad")}</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography sx={{ ...style.typographyDate }}>{t("Jul 2018 - Aug 2018")}</Typography>
                </Grid>
            </MainCard>

            <MainCard>
                <Grid item sx={{ ...style.image }} xs={12} sm={2}><img alt={'yataganlogo'} src={IMAGES.YATAGAN_LOGO} width="100%" /></Grid>
                <Grid item xs={12} sm={8} >
                    <Typography sx={{ ...style.typographyTitle }}>{t("YATAGAN THERMAL POWER PLANT")}</Typography>
                    <Typography sx={{ ...style.typographyTitle }}>{t("ELECTRICAL ELECTRONICS ENGINEERING (INTERN)")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("As an engineer in charge of the electrical production facility")}</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography sx={{ ...style.typographyDate }}>{t("Jul 2017 - Aug 2017")}</Typography>
                </Grid>
            </MainCard>



            <MainCard>
                <Grid item sx={{ ...style.image }} xs={12} sm={2}><img alt={'kirikkaleunivercity'} src={IMAGES.KKU_LOGO} width="100%" /></Grid>
                <Grid item xs={12} sm={8} >
                    <Typography sx={{ ...style.typographyTitle }}>{t("KIRIKKALE UNIVERSITY")}</Typography>
                    <Typography sx={{ ...style.typographyTitle }}>{t("ElectrIcal ElectronIcs EngIneerIng ")}</Typography>
                    <Typography sx={{ ...style.typographyText }}>{t("GPA 2.80")}</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
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