import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Grid, Button, Typography, useMediaQuery } from '@mui/material';

// Utils
import { DEFAULT_THEME, getTheme } from "../utils/theme";
import { useNavigate } from 'react-router-dom';


const Title = (props) => {
    const { title } = props
    const { t } = useTranslation()
    const isSm = useMediaQuery(getTheme().breakpoints.down('sm'));
    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));

    const style = {

        typography0: {
            textAlign: "center",
            fontSize: isSm ? "20px" : isMd ? "40px" : "80px",
            letterSpacing: isSm ? "14px" : "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.orange,
            pb: isSm ? "2rem" : "6rem",
        },
    }
    return (
        <Grid xs={12}>
            <Typography sx={{ ...style.typography0 }}>
                {(title)}
            </Typography>
        </Grid>
    )
}

export default Title;