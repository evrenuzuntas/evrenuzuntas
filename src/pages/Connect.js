import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import Title from '../components/Title';


const Connect = (props) => {
    const isTablet = useMediaQuery(getTheme().breakpoints.down('tablet'));

    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = 'CONNECT'
    const navigate = useNavigate();

    const style = {
        root: {
            minHeight: "900px",
            backgroundColor: "#FFFFFF",
            padding: isTablet ? "2rem" : "4rem 3rem"
        },
        typography0: {
            textAlign: "center",
            fontSize: isTablet ? "30px" : "50px",
            letterSpacing: isTablet ? "14px" : "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.orange,
            pb: isTablet ? "2rem" : "10rem",
        },

        button: {
            backgroundColor: "#FFFFFF",
            "&:hover": {
                backgroundColor: DEFAULT_THEME.palette.yellow,
                textDecoration: "underline",
            },
        },

        titleTypography: {
            fontSize: "24px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black,
            pb: "1rem"
        },
    }


    const accounts = [

        { title: "Youtube", text: `@evoloperr`, link: "https://www.youtube.com/channel/UC4Qqz2xYQ7qQDQ9nQfJyOlg", icon: IMAGES.KKU_LOGO },
        { title: "Instagram", text: `@evoloperr`, link: "https://www.youtube.com/channel/UC4Qqz2xYQ7qQDQ9nQfJyOlg", icon: IMAGES.KKU_LOGO },
        { title: "X", text: `@evoloperr`, link: "https://www.youtube.com/channel/UC4Qqz2xYQ7qQDQ9nQfJyOlg", icon: IMAGES.KKU_LOGO },
        { title: "Whatsapp", text: `@evoloperr`, link: "https://www.youtube.com/channel/UC4Qqz2xYQ7qQDQ9nQfJyOlg", icon: IMAGES.KKU_LOGO },

    ]
    return (
        <Grid container sx={{ ...style.root }}>
            <Title title={t("connect")} />
            {accounts.map((item, i) => {
                return <Grid xs={12} xl={6}>
                    <MainCard>
                        <Button sx={{ ...style.button }} onClick={() => window.open(item.link, '_blank').focus()}>
                            <Grid container direction="row" justifyContent="space-around" alignItems="center"  >
                                <Grid >
                                    <img src={item.icon} alt="icon" style={{ width: "100px", height: "100px" }} />
                                </Grid>
                                <Grid >
                                    <Typography sx={{ ...style.titleTypography }}>{item.title}</Typography>
                                    <Typography >{item.text}</Typography>
                                </Grid>
                            </Grid>
                        </Button>
                    </MainCard>
                </Grid>
            })}
        </Grid>
    )
}

export default Connect;