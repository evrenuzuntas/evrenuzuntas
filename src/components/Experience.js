import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageButton from './LanguageButton';




const Experience = (props) => {



    const { t, i18n } = useTranslation();


    return (
        <Grid container >

            <Grid item xs={12}>
                <Typography>
                    Apr 2021 - Ongoing
                    FRONT END DEVELOPER AMBEENT INC.
                    • Developing front end website and applications for Renault Mais.
                    • Technologies used: React JS, TypeScript, JavaScript, HTML &CSS, Mui, Jira, Git, Bitbucket, Azure
                    Jul 2018- Aug 2018
                    ELECTRICAL ELECTRONICS ENGINEERING (INTERN) YURDAKUL ELECTRIC
                    • Made electrical project drawings of shopping mall and city hospitals.
                    • Technologiesused: AutoCad
                    Jul 2017 -Aug 2017
                    ELECTRICAL ELECTRONICS ENGINEERING (INTERN) YATAGAN THERMAL POWER PLANT
                    • As an engineer in charge of the electrical production facility
                </Typography>

            </Grid >
        </Grid >
    )
}

export default Experience;

const styles = {
    root: {

    },

}