import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, Link, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME } from '../utils/theme';
import MainCard from '../components/MainCard';


const Portfolio = (props) => {
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
            padding: "4rem"
        },

    }



    const links = [

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
    ]

    return (
        <Grid container sx={{ ...style.root }}>

            {
                links.map((item, i) => {
                    let name = item.name
                    let link = item.link
                    let img = item.img
                    return <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center" xs={4}>
                        <MainCard>
                            <Grid item container
                                direction="column"
                                justifyContent="center"
                                alignItems="center" xs={12} >
                                <img alt={'Preview'} src={img} height="200px" />
                            </Grid>
                            <Grid item container
                                direction="column"
                                justifyContent="center"
                                alignItems="center" xs={12}>
                                <Button onClick={() => window.open(link, '_blank').focus()}>
                                    {name}
                                </Button>
                            </Grid>
                        </MainCard>
                    </Grid>
                })
            }



        </Grid>
    )
}

export default Portfolio;