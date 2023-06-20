import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Grid, Button } from '@mui/material';

// Utils
import { DEFAULT_THEME } from "../utils/theme";
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AiFillGithub } from "react-icons/ai";

const Header = (props) => {
    const { t } = useTranslation()
    const navigate = useNavigate();

    const style = {
        root: {
            backgroundColor: "#000000",
            height: "6vw",
            padding: "1rem"
        },
        leftButton: {
            fontSize: "22px",
            letterSpacing: "5px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: "#ffffff"
        },
    }

    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="center" sx={{ ...style.root }}>
            {/* Left */}
            <Grid item container xs={6}>
                <Button disableRipple sx={{ ...style.leftButton }} onClick={() => navigate(`${ROUTES.INDEX}`)}>Evren U.</Button>
            </Grid>

            {/* Right */}
            <Grid item container
                direction="row"
                justifyContent="flex-end"
                alignItems="center" xs={6}>

                <Button onClick={() => window.open(`https://www.instagram.com/evrnznts.js`)}  >

                    <InstagramIcon sx={{ color: '#ffffff', fontSize: "30px" }} />
                </Button>


                <Button onClick={() => window.open(`https://github.com/evrenuzuntas`)}>TW</Button>

                <Button onClick={() => window.open(`https://github.com/evrenuzuntas`)}>
                    <AiFillGithub color='#ffffff' fontSize="30px" sx={{}} />
                </Button>
            </Grid>
        </Grid>
    )
}

export default Header;