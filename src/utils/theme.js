import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const DEFAULT_THEME = {
    palette: {
        white: "#FFFFFF",
        black: "#000000",
        darkGray: "#3E3F40",
        gray: "#8C8C8B",
        lightGray: "#D9D9D6",
        super_primary: "#EFDF00",
        super_primary_hover: "#F8EB4C",
        primary: "#000",
        primary_hover: "#EFDF00",
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
                // large
                lg: 1377,
                // extra-large
                xl: 1300,
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
