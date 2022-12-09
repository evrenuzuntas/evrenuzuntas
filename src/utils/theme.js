import { createTheme, responsiveFontSizes } from "@mui/material/styles";


function getTheme() {
    const theme = createTheme({
        typography: {
            fontFamily: "Roboto"
        },

        breakpoints: {
            values: {
                // extra-small
                xs: 0,
                // small
                sm: 600,
                // medium
                down800: 800,
                md: 900,
                // large
                lg: 1200,
                // extra-large
                xl: 1536,
                mobile: 0,
                tablet: 640,
                laptop: 1024,
                desktop: 1200,
            }
        }
    });



    // return theme
    return responsiveFontSizes(theme);
}

export { getTheme };
