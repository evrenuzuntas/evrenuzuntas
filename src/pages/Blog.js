import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IMAGES, ROUTES } from '../utils/constants';
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { DEFAULT_THEME, getTheme } from '../utils/theme';
import MainCard from '../components/MainCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Title from '../components/Title';


const Blog = (props) => {
    const isSm = useMediaQuery(getTheme().breakpoints.down('sm'));

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
            padding: isSm ? "2rem" : "4rem 3rem"
        },

        accordion: {
            boxShadow: '0px 0px 1px 2px #FFBF00',
            borderRadius: '10px',
            border: '1px solid #FFBF00',
            // backgroundColor: '#F5F5F5',
            margin: isSm ? "0.3rem" : "1rem"
        },
    }
    const blogs = [

        { title: "Kuryeye qr", text: `Multinet ile kapıda ödeme yaparken telefon çekmiyo, Onları hemen wifi nin misafir moduna bağlıyorum multinet çekiyo sonra modem atıyo onları || Multinet ile kapıda ödeme yaparken telefon çekmiyo, Onları hemen wifi nin misafir moduna bağlıyorum multinet çekiyo sonra modem atıyo onları ` },
        { title: "22222222", text: `Mtest sajıhfadhkfjkdkjlfskdjfslunsfasfsdfdem atdaıyo odasdasddasasdasdasdnları` },
    ]
    return (
        <Grid sx={{ ...style.root }}>
            <Title title={t("blog")} />
            {blogs.map((item, i) => {
                return <Grid width="100%">
                    <Accordion sx={{ ...style.accordion }} expanded={expanded === i} onChange={handleChange(i)}>

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header">
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{item.title}</Typography>
                        </AccordionSummary>

                        <AccordionDetails >
                            <Typography >
                                {item.text}
                            </Typography>
                        </AccordionDetails>

                    </Accordion>
                </Grid>
            })}

        </Grid>
    )
}
export default Blog;