import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import Title from '../components/Title';


const Drone = (props) => {
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
            backgroundColor: "#FFFFFF",
            padding: "4rem ",
        },

        textTypography: {
            fontSize: "36px",
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
            <img src={IMAGES.COMING_SOON} width="100%"></img>
        </Grid>
    )
}

export default Drone;