import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../utils/constants';
import { Grid, Typography } from '@mui/material';



const Communication = (props) => {
    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = ' Communication PAGE '

    const style = {
        root: {
            backgroundColor: "#FFFFFF",
        },
    }

    return (
        <Grid container sx={{ ...style.root }}>
            <img alt={'Preview'} src={IMAGES.COMING_SOON} width="100%" />

        </Grid>
    )
}

export default Communication;