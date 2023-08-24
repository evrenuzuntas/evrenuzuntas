import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import Title from '../components/Title';


const Youtube = (props) => {
    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));

    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    const [mailSubject, setMailSubject] = useState('');
    const [mailText, setMailText] = useState('');

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = 'YOUTUBE'
    const navigate = useNavigate();

    const style = {
        root: {
            minHeight: "900px",
            backgroundColor: "#FFFFFF",
            padding: isMd ? "2rem" : "4rem 3rem"
        },
        typography0: {
            textAlign: "center",
            fontSize: isMd ? "30px" : "50px",
            letterSpacing: isMd ? "14px" : "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.orange,
            pb: isMd ? "2rem" : "10rem",
        },
        button: {
            backgroundColor: "#FFFFFF",
            "&:hover": {
                textDecoration: "underline",
                backgroundColor: "#FFFFFF",
            },
        },
        titleTypography: {
            fontSize: "16px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black,
            pb: "1rem"
        },
        textTypography: {
            fontSize: "16px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.orange,
            pb: "1rem",
            "&:hover": {
                color: DEFAULT_THEME.palette.orange,
            },
        },
    }

    const videos = [

        { code: <iframe src="https://www.youtube.com/embed/Bq7XSuiMzU4?si=11ZftjIkKwZ6GqoN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> },
        { code: <iframe src="https://www.youtube.com/embed/Joqev42f5MQ?si=tumai3DnOFbzrB9K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> },
        { code: <iframe src="https://www.youtube.com/embed/zbKYPf29Y1s?si=SK6evi8Ur0YVa3ml" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> },
        { code: <iframe src="https://www.youtube.com/embed/ezsgBaZWves?si=v_APvfmUMOrfhlWl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> },
        { code: <iframe src="https://www.youtube.com/embed/vwb-7e__5sI?si=0psl85EOurZPInH-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> },
        { code: <iframe src="https://www.youtube.com/embed/ybbBJRDkoLo?si=0cm9kGVVG7H_WR5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> },
        { code: <iframe src="https://www.youtube.com/embed/Ru3Tpk3Cp8g?si=KQWx21Tqzx7W2-L_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> },



    ]


    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ ...style.root }}>
            <Title title={t("youtube")} />
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                {videos.map((item, i) => {
                    return <Grid sx={{ textAlign: "center", pb: "1rem" }} item sm={12} md={6} lg={4} >
                        {item.code}
                    </Grid>
                })}
            </Grid>
            <Grid xs={12}  >


                <Button sx={{ ...style.textTypography }} onClick={() => window.open("https://youtube.com/@evoloperr?si=7bLM1Sw5RgT5ebpw", '_blank').focus()}>Go To My Channel</Button>

            </Grid>
        </Grid>
    )
}

export default Youtube;