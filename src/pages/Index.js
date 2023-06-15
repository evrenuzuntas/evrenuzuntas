import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Index = (props) => {
    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = ' RENAULT AUSTRAL '
    const navigate = useNavigate();


    return (
        <Grid >
            <Typography>asdf</Typography>
            <Button
                onClick={() => navigate(`${ROUTES.EVREN}`)}
            >Evren Page</Button>
        </Grid>
    )
}

export default Index;