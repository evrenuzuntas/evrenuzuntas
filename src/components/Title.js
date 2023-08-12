import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Grid, Button, Typography, useMediaQuery } from '@mui/material';

// Utils
import { DEFAULT_THEME, getTheme } from "../utils/theme";
import { useNavigate } from 'react-router-dom';


const Title = (props) => {
    const { title } = props
    const { t } = useTranslation()
    const isTablet = useMediaQuery(getTheme().breakpoints.down('tablet'));

    const style = {

        typography0: {
            textAlign: "center",
            fontSize: isTablet ? "30px" : "45px",
            letterSpacing: isTablet ? "14px" : "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.orange,
            pb: isTablet ? "2rem" : "6rem",
        },
    }
    return (
        <Grid container>
            <Grid xs={12}>
                <Typography sx={{ ...style.typography0 }}>
                    {(title)}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Title;