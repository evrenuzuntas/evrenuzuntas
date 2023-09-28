import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import Title from '../components/Title';
import SendIcon from '@mui/icons-material/Send';


const Card = (props) => {
    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));

    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    const [mailSubject, setMailSubject] = useState('');
    const [mailText, setMailText] = useState('');

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = 'Business Card'
    const navigate = useNavigate();

    const style = {
        root: {
            minHeight: "900px",
            backgroundColor: "#FFFFFF",
            padding: isMd ? "2rem" : "4rem 3rem"
        },
        typography0: {
            textAlign: "center",
            fontSize: isMd ? "30px" : "50px",
            letterSpacing: isMd ? "14px" : "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.orange,
            pb: isMd ? "2rem" : "10rem",
        },
        button: {
            backgroundColor: "#FFFFFF",
            "&:hover": {
                textDecoration: "underline",
                backgroundColor: "#FFFFFF",
            },
        },
        MailButton: {
            fontSize: "22px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.orange,
        },
        titleTypography: {
            fontSize: "16px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black,
            pb: "1rem"
        },
        textTypography: {
            fontSize: "16px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.orange,
            pb: "1rem",
            "&:hover": {
                color: DEFAULT_THEME.palette.orange,
            },
        },
        textMailTypography: {
            fontSize: "22px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.orange,
            pl: "4rem",
        },
        textHead: {
            fontSize: "22px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black,
            pb: "4rem",
            mx: "auto",
        },
    }


    const accounts = [

        { title: "Whatsapp", text: `Evren U.`, link: "https://wa.me/+905532028484", icon: IMAGES.WP_LOGO },
        { title: "callme", text: `Evren Uzuntas`, link: "tel://+6199942413", icon: IMAGES.WP_LOGO },

    ]
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ ...style.root }}>
            <Title title={t("card")} />
            <Grid item container xs={12} justifyContent="center" alignItems="center" >
                <Typography sx={{ ...style.textHead }}>{t("neededwebsite")}</Typography>
            </Grid>

            {accounts.map((item, i) => {
                return <Grid xs={12} sm={6} md={4} >
                    <MainCard >
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Button sx={{ ...style.button }} onClick={() => window.open(item.link, '_blank').focus()}>
                                <Grid container>
                                    <Grid xs={12} xl={6} sx={{ padding: "1rem" }}>
                                        <img src={item.icon} alt="icon" disable style={{ width: "100px", height: "100px" }} />
                                    </Grid>
                                    <Grid xs={12} xl={6} container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Typography sx={{ ...style.titleTypography }}>{t(item.title)}</Typography>
                                        <Typography sx={{ ...style.textTypography }}>{item.text}</Typography>
                                    </Grid>
                                </Grid>
                            </Button>
                        </Grid>
                    </MainCard>
                </Grid >
            })}
            <Grid xs={12}  >
                <MainCard >
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <img src={IMAGES.EMAIL_LOGO} alt="icon" disable style={{ width: "100px", height: "100px" }} />
                        <Typography sx={{ ...style.textMailTypography }}>Bana Mail Gönder.</Typography>
                        <TextField color="warning" fullWidth type='text' variant="standard" placeholder="Konu" inputProps={{ maxLength: 1000 }}
                            onChange={(event) => {
                                setMailSubject(event.target.value)
                            }} />
                        <TextField color="warning" fullWidth type='text' variant="standard" multiline minRows={4} placeholder="Metin..." inputProps={{ maxLength: 1000 }}
                            onChange={(event) => {
                                setMailText(event.target.value)
                            }} />
                        <Button sx={{ ...style.MailButton }} endIcon={<SendIcon />} onClick={() => window.open(`mailto:evrenuzuntas@gmail.com?subject=${mailSubject}&body=${mailText}`, '_blank').focus()}>MAIL GONDER</Button>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid >
    )
}

export default Card;