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
import { HiOutlineMail } from "react-icons/hi";
import LanguageButton from './LanguageButton';

const Footer = (props) => {
    const { t } = useTranslation()
    const navigate = useNavigate();

    const style = {
        root: {
            backgroundColor: "#000000",
            minHeight: "4vw",
            padding: "1rem",
            // position: "absolute",
            // bottom: "0",
        },
        leftButton: {
            fontSize: "22px",
            letterSpacing: "5px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.white
        },
    }

    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="center" sx={{ ...style.root }}>


            {/* Right */}
            <Grid item container
                direction="row"
                justifyContent="center"
                alignItems="center">

                {/* instagram */}
                <Button onClick={() => window.open(`https://www.instagram.com/evrnznts.js`)}  >
                    <InstagramIcon sx={{ color: '#ffffff', fontSize: "30px" }} />
                </Button>

                {/* twitter */}
                <Button onClick={() => window.open(`https://twitter.com/evoloper`)}>
                    <FiTwitter color='#ffffff' fontSize="30px" sx={{}} />
                </Button>

                {/* github */}
                <Button onClick={() => window.open(`https://github.com/evrenuzuntas`)}>
                    <AiFillGithub color='#ffffff' fontSize="30px" sx={{}} />
                </Button>


                {/* email */}
                <Button onClick={() => window.open(`mailto:evrenuzuntas@gmail.com`)}>
                    <HiOutlineMail color='#ffffff' fontSize="30px" sx={{}} />
                </Button>

            </Grid>
        </Grid>
    )
}

export default Footer;