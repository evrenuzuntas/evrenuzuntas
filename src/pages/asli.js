import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../utils/constants';
import { Grid, Typography } from '@mui/material';



const Asli = (props) => {
    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = ' RENAULT AUSTRAL '



    return (
        <Grid >
            <Typography>ASLI'YI COK SEVIYORUM kalp</Typography>
        </Grid>
    )
}

export default Asli;