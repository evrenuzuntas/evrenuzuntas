import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const DEFAULT_THEME = {
    palette: {
        white: "#FFFFFF",
        black: "#000000",
        yellow: "#FFBF00",
        orange: "#FFA505",

    },
    typography: {
        fontFamily: "DaciaBlock-Regular",
        fontFamilyBold: "DaciaBlock-Bold",
        fontFamilyBook: "DaciaBlock-Regular",
    },
};

function getTheme() {
    const theme = createTheme({

        breakpoints: {
            values: {
                // extra-small
                xs: 0,
                // small
                sm: 740,
                // medium
                md: 900,
                // extra-large
                xl: 1300,
                // large
                lg: 1377,
                // for-devices
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

export { getTheme, DEFAULT_THEME };
