import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageButton from './LanguageButton';




const Left = (props) => {



    const { t, i18n } = useTranslation();


    return (
        <Grid container >
            <Grid item
            >
                <img
                    width={"100%"}
                    src={"evrenUzuntasVesikalik.jpg"}
                    alt={"Evren_UZUNTAS_vesikalik"}
                    loading="lazy"
                />
            </Grid >
        </Grid >
    )
}

export default Left;

const styles = {
    root: {

    },

}