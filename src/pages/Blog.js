import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Blog = (props) => {
    const isTablet = useMediaQuery(getTheme().breakpoints.down('tablet'));

    const [expanded, setExpanded] = useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const { t } = useTranslation()
    const favicon = document.getElementById("favicon")
    const title = document.getElementById("title")

    favicon.href = IMAGES.FAVICON_AUSTRAL
    document.title = 'BLOG'
    const navigate = useNavigate();

    const style = {
        root: {
            minHeight: "900px",
            backgroundColor: "#FFFFFF",
            padding: isTablet ? "2rem" : "8rem 4rem"
        },
        typography0: {
            textAlign: "center",
            fontSize: isTablet ? "30px" : "50px",
            letterSpacing: isTablet ? "14px" : "20px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            color: DEFAULT_THEME.palette.orange,
            pb: isTablet ? "2rem" : "10rem",
        },
        titleTypography: {
            fontSize: "24px",
            fontFamily: DEFAULT_THEME.typography.fontFamily,
            color: DEFAULT_THEME.palette.black,
            pb: "1rem"
        },
    }
    const blogs = [

        { title: "Kuryeye qr kod", text: `Multinet ile kapıda ödeme yaparken telefon çekmiyo, Onları hemen wifi nin misafir moduna bağlıyorum multinet çekiyo sonra modem atıyo onları` },
        { title: "2222222222222", text: `Mtest sajıhfadhkfjkdkjlfskdjfslunsfasfsdfdem atdaıyo odasdasddasasdasdasdnları` },
    ]
    return (
        <Grid container sx={{ ...style.root }}>
            <Grid xs={12}><Typography sx={{ ...style.typography0 }}>{t("blog")}</Typography></Grid>
            {blogs.map((item, i) => {
                return <Grid container xs={12}>
                    <MainCard>
                        <Accordion expanded={expanded === i} onChange={handleChange(i)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.text}
                                </Typography>
                            </AccordionDetails>
                            {/* <MainCard>
                        <Typography sx={{ ...style.titleTypography }}>{item.title}</Typography>
                        <Typography>{item.text}</Typography>
                    </MainCard> */}
                        </Accordion>
                    </MainCard>
                </Grid>
            })}
        </Grid>
    )
}
export default Blog;