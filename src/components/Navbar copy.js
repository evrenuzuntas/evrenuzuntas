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
            // backgroundColor: "#383E42",
            backgroundColor: DEFAULT_THEME.palette.orange,
            minHeight: "50px",
        },
        buttons: {
            color: DEFAULT_THEME.palette.black,
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
                // fontSize: "15px",
                // letterSpacing: "20px",
            },
        },

    }
    // TODO hangi sayfada isem nevbarda onun altına bir işaret ya da underline koy
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
                >{t("evrenpage")}</Button>
            </Grid>


            <Grid item>
                <Button
                    sx={{ ...style.buttons }}
                    onClick={() => navigate(`${ROUTES.PORTFOLİO}`)}
                >{t("portfolio")}</Button>
            </Grid>
            <Grid item>
                <Button
                    sx={{ ...style.buttons }}
                    onClick={() => navigate(`${ROUTES.CONNECT}`)}
                >{t("connect")}</Button>
            </Grid>
            <Grid item>
                <Button
                    sx={{ ...style.buttons }}
                    onClick={() => navigate(`${ROUTES.BLOG}`)}
                >{t("blog")}</Button>
            </Grid>

        </Grid>
    )
}

export default Navbar;