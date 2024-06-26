import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Box, Button, Grid, Link, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import Title from '../components/Title';


const Portfolio = (props) => {
    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")
    const isSm = useMediaQuery(getTheme().breakpoints.down('sm'));

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = ' PORTFOLIO '
    const navigate = useNavigate();

    const style = {
        root: {
            backgroundColor: "#FFFFFF",
            padding: isSm ? "2rem" : "4rem 3rem"
        },
        button: {
            backgroundColor: "#FFFFFF",
            color: DEFAULT_THEME.palette.orange,
            "&:hover": {
                backgroundColor: DEFAULT_THEME.palette.yellow,
                textDecoration: "underline",
                color: DEFAULT_THEME.palette.black,
            },
        },
        buttonTypography: {
            textAlign: "center",
            color: DEFAULT_THEME.palette.black,
            fontSize: "20px",

        },
        typographyTitle: {
            textAlign: "center",
            pb: "0.7rem",
            fontSize: "20px",
            letterSpacing: "4px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
        },
        typographyText: {
            textAlign: "center",
            pb: "0.5rem",
            // fontSize: "40px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black

        },

    }



    const links = [

        { name: "MB Health Tourism", link: `https://mbhealthtourism.com/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "dacia-spring-survey", link: `egitimmemnuniyetanketi.dacia.com.tr`, img: IMAGES.DACIA_SPRING_PW },
        { name: "library-official", link: `http://kurumsal.mais.com.tr/buyolculuksenin`, img: IMAGES.DACIA_SPRING_PW },
        { name: "library-brochure", link: `https://qrbrosur.mais.com.tr/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "port-web", link: `https://port.renault.com.tr/login`, img: IMAGES.DACIA_SPRING_PW },
        { name: "leasing-web", link: `https://www.maisfilo.com/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "renault2-frontend", link: `https://www.renewturkiye.com/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "digital-week", link: `https://digitalweekonline.mais.com.tr/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "library-web", link: `http://renaultkutuphane.mais.com.tr/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "intern-web", link: `https://regeneration.mais.com.tr/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "emergency-case-survey", link: `https://renaultdinliyor.renault.com.tr/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "renault-radiocode-web", link: `http://radyokod.renault.com.tr/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "MS Power", link: `https://www.mspower.com.tr/`, img: IMAGES.DACIA_SPRING_PW },
        { name: "MS Power", link: `https://www.mspower.com.tr/`, img: IMAGES.DACIA_SPRING_PW },
    ]

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ ...style.root }}>
            <Title title={t("referenceWebsites")} />
            {links.map((item, i) => {
                return <Grid container xs={12} md={6} xl={4}>
                    <MainCard>
                        <Button sx={{ ...style.button }} onClick={() => window.open(item.link, '_blank').focus()}>
                            <Grid item container direction="column" justifyContent="center" alignItems="center" >
                                <Grid sx={{ opacity: 0.9, "&:hover": { opacity: 1 }, }}>
                                    <img alt={'Preview'} src={item.img} width="100%" />
                                </Grid>
                                <Typography sx={{ ...style.buttonTypography }}>{item.name}</Typography>
                            </Grid>
                        </Button>
                    </MainCard>
                </Grid>
            })}

            {/* references */}
            <MainCard>
                <Typography sx={{ ...style.typographyTitle }}>{t("references")}</Typography>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <MainCard>
                            <Grid container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <Typography sx={{ ...style.typographyTitle }}>{t("ha1")}</Typography>
                                <Typography sx={{ ...style.typographyText }}>{t("ha0")}</Typography>
                                <Typography sx={{ ...style.typographyText }}>halilakgun17@gmail.com</Typography>
                                <Button sx={{ ...style.button }} onClick={() => window.open(`https://www.linkedin.com/in/halilakgun17/`)}>
                                    <Typography sx={{ ...style.typographyText }}>linkedin</Typography>
                                </Button>
                            </Grid>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MainCard>
                            <Grid container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <Typography sx={{ ...style.typographyTitle }}>{t("hh1")}</Typography>
                                <Typography sx={{ ...style.typographyText }}>{t("hh0")}</Typography>
                                <Typography sx={{ ...style.typographyText }}>halilhicyilmaz_@hotmail.com</Typography>
                                <Button sx={{ ...style.button }} onClick={() => window.open(`https://www.linkedin.com/in/halilhicyilmaz/`)}>
                                    <Typography sx={{ ...style.typographyText }}>linkedin</Typography>
                                </Button>
                            </Grid>
                        </MainCard>
                    </Grid>

                </Grid>
            </MainCard>
        </Grid>
    )
}

export default Portfolio;