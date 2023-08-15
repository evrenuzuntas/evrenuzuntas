import { Accordion, AccordionDetails, AccordionSummary, Grid, ListItem, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { NAVBAR_ROUTES } from '../utils/constants';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import { DEFAULT_THEME, getTheme, THEME } from '../utils/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    // const history = useHistory();

    const [selectedIndex, setSelectedIndex] = useState()
    const [expanded, setExpanded] = useState(false)

    const { t } = useTranslation()
    const navigate = useNavigate();

    const isMd = useMediaQuery(getTheme().breakpoints.down('md'));


    const navRoutes = NAVBAR_ROUTES

    const style = {
        root: {
            backgroundColor: DEFAULT_THEME.palette.orange,
        },
        expandMoreIcon: {
            color: DEFAULT_THEME.palette.orange,
        },
        general: {
            marginBottom: "10px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            fontSize: isMd ? "1rem" : "1.375rem",
            justifyContent: "center",
        },
        selected: {
            marginBottom: "10px",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            fontSize: isMd ? "1rem" : "1.375rem",
            textDecoration: isMd ? undefined : "underline",
            justifyContent: "center",
        },
        generalTablet: {
            marginBottom: "10px",
            color: DEFAULT_THEME.palette.orange,
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            fontSize: isMd ? "1rem" : "1.375rem",
            justifyContent: "center",
        },
        selectedTablet: {
            marginBottom: "10px",
            color: DEFAULT_THEME.palette.orange,
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            fontSize: isMd ? "1rem" : "1.375rem",
            textDecoration: isMd ? undefined : "underline",
            justifyContent: "center",
        },
        accordionSummary: {
            color: DEFAULT_THEME.palette.orange,
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            marginBottom: "4px",
        },
        bottomLine: {
            height: "2px",
            backgroundColor: DEFAULT_THEME.palette.orange,

        },
    }



    const DefaultNavbar = () => {
        return (
            // <Box display="inline-block" sx={{ ...style.root }}>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center" sx={{ ...style.root }}>

                {navRoutes.map((item, i) =>
                    <Grid item >
                        <ListItem
                            sx={i === selectedIndex ? { ...style.selected } : { ...style.general }}
                            button
                            disableRipple
                            disableTouchRipple
                            onClick={() => {
                                // history.push("/" + item)
                                navigate(`${item}`)
                                setSelectedIndex(i)
                                setExpanded(false)
                            }
                            }>
                            {t(`${item}`)}
                        </ListItem>
                    </Grid>
                )}
            </Grid>
            // </Box>
        )
    }
    const TabletNavbar = () => {

        return (

            <Grid item xs={12} >
                <Accordion
                    expanded={expanded}
                    onChange={(event, expanded) => {
                        setExpanded(expanded)
                    }}
                    elevation={0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ ...style.expandMoreIcon }} />}>
                        <Grid container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center" >
                            <Typography variant='h5' sx={{ ...style.accordionSummary }}>{t(`${window.location.pathname.replace("/", "")}`)}</Typography>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails disableRipple>
                        <Grid container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center" >

                            {navRoutes.map((item, i) =>
                                <Grid item xs={12}>
                                    <ListItem
                                        sx={i === selectedIndex ? { ...style.selectedTablet } : { ...style.generalTablet }}
                                        button
                                        disableRipple
                                        disableTouchRipple
                                        onClick={() => {
                                            // history.push("/" + item)
                                            navigate(`${item}`)
                                            setSelectedIndex(i)
                                            setExpanded(false)
                                        }
                                        }>
                                        {t(`${item}`)}
                                    </ListItem>
                                </Grid>
                            )}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Box sx={{ ...style.bottomLine }}></Box>
            </Grid>
        )
    }

    // useEffect(() => {
    //     navRoutes.map((route, i) => route === (history.location.pathname.split("/")[1]) ? setSelectedIndex(i) : "")
    // })

    return (
        <>
            {isMd ? TabletNavbar() : DefaultNavbar()}
        </>
    )
}

export default Navbar;
