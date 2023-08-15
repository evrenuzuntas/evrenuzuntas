import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const DEFAULT_THEME = {
    palette: {
        white: "#FFFFFF",
        black: "#000000",
        darkgray: "#232323",
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
            // const isSm = useMediaQuery(getTheme().breakpoints.down('sm'));
            // const isMd = useMediaQuery(getTheme().breakpoints.down('md'));

            values: {
                // extra-small
                xs: 0,
                // small
                sm: 600,
                // medium
                md: 900,
                // large
                lg: 1200,
                // extra-large
                xl: 1536,
                // for-devices
                mobile: 0,
                tablet: 640,
                laptop: 1024,
                desktop: 1200,
                // mobile displays from 360×640 through 414×896 >>>>> 360 to 500
                // tablet displays from 601×962 through 1280×800 >>>>> 500 to 1280
                // desktop displays from 1280×720 through 1920×1080  >>>>> 1280 to 1920
            }
        }
    });
    // return theme
    return responsiveFontSizes(theme);
}

export { getTheme, DEFAULT_THEME };
