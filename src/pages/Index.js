import { Grid } from '@mui/material';
import React from 'react'
import Body from '../components/Body';
import Header from '../components/Header';




const Index = (props) => {





    return (
        <Grid sx={{ ...styles.root }}>
            <Header></Header>
            <Body></Body>
        </Grid >
    )
}

export default Index;

const styles = {
    root: {
        maxWidth: "1000px",
        height: "100vh",
        backgrounColor: "#232323",
        border: "1px solid #000000",
        mx: "auto",


    },

}