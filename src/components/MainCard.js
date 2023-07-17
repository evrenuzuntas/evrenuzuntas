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

    const isTablet = useMediaQuery(getTheme().breakpoints.down('tablet'));

    const { style } = props
    const params = useLocation()
    const { t } = useTranslation()

    const styles = {
        paper: {
            width: "stretch",
            // minHeight: '730px',
            boxShadow: '0px 0px 2px 4px #FFBF00',
            borderRadius: '20px',
            border: '1px solid #FFBF00',
            // backgroundColor: '#F5F5F5',
            margin: isTablet ? "0.3rem" : "1rem"

        },


        ...style

    }


    return (
        <Paper sx={{ ...styles.paper }}>
            <Grid container sx={{ ...styles.root }}>
                <Grid container sx={{ padding: isTablet ? '20px' : '50px', }}>
                    {props.children}
                </Grid>
            </Grid>
        </Paper>

    )
}


export default MainCard

