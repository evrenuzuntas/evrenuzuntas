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

        { name: "dacia-spring-survey", link: `egitimmemnuniyetanketi.dacia.com.tr` },
        { name: "library-official", link: `http://kurumsal.mais.com.tr/buyolculuksenin` },
        { name: "library-brochure", link: `https://qrbrosur.mais.com.tr/` },
        { name: "port-web", link: `https://port.renault.com.tr/login` },
        { name: "leasing-web", link: `https://www.maisfilo.com/` },
        { name: "renault2-frontend", link: `https://www.renewturkiye.com/` },
        { name: "digital-week", link: `https://digitalweekonline.mais.com.tr/` },
        { name: "library-web", link: `http://renaultkutuphane.mais.com.tr/` },
        { name: "intern-web", link: `https://regeneration.mais.com.tr/` },
        { name: "emergency-case-survey", link: `https://renaultdinliyor.renault.com.tr/` },
        { name: "renault-radiocode-web", link: `http://radyokod.renault.com.tr/` },
        { name: "MS Power", link: `https://www.mspower.com.tr/` },
    ]

    return (
        <Grid container sx={{ ...style.root }}>

            {
                links.map((item, i) => {
                    let name = item.name
                    let link = item.link
                    return <Grid item xs={4}>
                        <MainCard>
                            <Button
                                onClick={() => window.open(link, '_blank').focus()}
                            >
                                {name}
                            </Button>
                        </MainCard>
                    </Grid>
                })
            }



        </Grid>
    )
}

export default Portfolio;