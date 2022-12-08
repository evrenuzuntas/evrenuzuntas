import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageButton from './LanguageButton';




const Left = (props) => {



    const { t, i18n } = useTranslation();


    return (
        <Grid container justifyContent="flex-end">
            <Grid item>
                <img
                    width="300"
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