// React

// Libraries
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Utils

// MUI
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material"
import { getTheme } from "../utils/theme";

// Custom Components

// Redux

// Services

const MainCard = (props) => {

    const isSm = useMediaQuery(getTheme().breakpoints.down('sm'));
    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));

    const { style } = props
    const params = useLocation()
    const { t } = useTranslation()

    const styles = {
        paper: {
            width: "stretch",
            // minHeight: '730px',
            boxShadow: '0px 0px 1px 2px #FFBF00',
            borderRadius: '10px',
            border: '1px solid #FFBF00',
            // backgroundColor: '#F5F5F5',
            margin: isSm ? "0.3rem" : "1rem"

        },


        ...style

    }


    return (
        <Paper sx={{ ...styles.paper }}>
            <Grid container sx={{ ...styles.root }}>
                <Grid container sx={{ padding: isSm ? '10px' : isMd ? '15px' : '30px', }}>
                    {props.children}
                </Grid>
            </Grid>
        </Paper>

    )
}


export default MainCard

