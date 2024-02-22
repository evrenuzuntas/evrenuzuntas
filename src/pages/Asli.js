import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../utils/constants';
import { Grid, Typography } from '@mui/material';
import Title from '../components/Title';



const Asli = (props) => {
    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = ' ASLI MmMm '



    return (
        <Grid >
            <Title title={t("Güzelimmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")} />
        </Grid>
    )
}

export default Asli;