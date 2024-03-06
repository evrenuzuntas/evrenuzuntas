import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import Title from '../components/Title';


const PiFlow3D = (props) => {
    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));

    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    const [mailSubject, setMailSubject] = useState('');
    const [mailText, setMailText] = useState('');

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = 'PiFlow3D'
    const navigate = useNavigate();

    const style = {
        root: {
            minHeight: "900px",
            backgroundColor: "#FFFFFF",
            padding: "4rem ",
        },

        textTypography: {
            fontSize: "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.orange,
            letterSpacing: "20px",
            pb: "1rem",
            "&:hover": {
                color: DEFAULT_THEME.palette.orange,
            },
        },
    }




    return (
        <Grid container direction="row" justifyContent="center" alignItems="flex-start" sx={{ ...style.root }}>
            <Title title={t("PiFlow 3D")} />
            <Button sx={{ ...style.textTypography }} onClick={() => window.open("https://www.instagram.com/piflow3d/", '_blank').focus()}>PiFlow3D.com</Button>
            {/* <Button sx={{ ...style.textTypography }} onClick={() => window.open("https://www.instagram.com/piflow3d/", '_blank').focus()}>PiFlow3D.com</Button> */}
        </Grid>
    )
}

export default PiFlow3D;