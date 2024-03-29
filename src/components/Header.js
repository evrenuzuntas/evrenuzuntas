import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Grid, Button, Typography, useMediaQuery } from '@mui/material';

// Utils
import { DEFAULT_THEME, getTheme } from "../utils/theme";
import { useNavigate } from 'react-router-dom';

import LanguageButton from './LanguageButton';

const Header = (props) => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const isSm = useMediaQuery(getTheme().breakpoints.down('sm'));
    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));

    const style = {
        root: {
            backgroundColor: DEFAULT_THEME.palette.darkgray,
            minHeight: "6vw",
            padding: "1rem"
        },
        leftButton: {
            fontSize: "20px",
            letterSpacing: "0px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.white
        },
    }

    return (
        <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center" sx={{ ...style.root }}>
            {/* Left */}
            <Grid item md={2} xs={3}>
                <Button sx={{ ...style.leftButton }} onClick={() => navigate(`${ROUTES.INDEX}`)}>evoloper</Button>
            </Grid>



            {/* Right */}
            <Grid item md={2} xs={3} sx={{ textAlign: "right" }}>
                {/* Language Button */}
                <LanguageButton >
                    {t('languageButton')}
                </LanguageButton>
            </Grid>
        </Grid>
    )
}

export default Header;