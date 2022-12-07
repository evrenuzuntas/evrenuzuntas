import { createTheme, responsiveFontSizes } from "@mui/material/styles";


function getTheme() {
    const theme = createTheme({
        typography: {
            fontFamily: "montserrat"
        },

        breakpoints: {
            values: {
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
