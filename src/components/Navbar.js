import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Grid, Button } from '@mui/material';

// Utils
import { DEFAULT_THEME } from "../utils/theme";
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AiFillGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Navbar = (props) => {
    const { t } = useTranslation()
    const navigate = useNavigate();

    const style = {
        root: {
            backgroundColor: "#383E42",
            height: "50px",
        },
        buttons: {
            color: "#FFFFFF",
        },

    }

    return (
        <Grid container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ ...style.root }}>

            <Grid item>
                <Button
                    sx={{ ...style.buttons }}
                    onClick={() => navigate(`${ROUTES.EVREN}`)}
                >Evren Page</Button>
            </Grid>

            <Grid item>
                <Button
                    sx={{ ...style.buttons }}
                    onClick={() => navigate(`${ROUTES.EVREN}`)}
                >2ns Page</Button>
            </Grid>
            <Grid item>
                <Button
                    sx={{ ...style.buttons }}
                    onClick={() => navigate(`${ROUTES.EVREN}`)}
                >3rd Page</Button>
            </Grid>

            <Grid item>
                <Button
                    sx={{ ...style.buttons }}
                    onClick={() => navigate(`${ROUTES.ASLI}`)}
                >ASLI</Button>
            </Grid>

        </Grid>
    )
}

export default Navbar;