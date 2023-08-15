import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../utils/constants';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import Title from '../components/Title';
import { getTheme } from '../utils/theme';



const NotFound = (props) => {
    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")
    const isSm = useMediaQuery(getTheme().breakpoints.down('sm'));

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = ' NotFound PAGE '

    const style = {
        root: {
            minHeight: "900px",
            backgroundColor: "#FFFFFF",
            padding: isSm ? "2rem" : "4rem 3rem"
        },
    }

    return (
        <Grid container sx={{ ...style.root }}>
            <Title title={t("404")} />


            <img alt={'Preview'} src={IMAGES.NOT_FOUND} width="100%" />
        </Grid>
    )
}

export default NotFound;