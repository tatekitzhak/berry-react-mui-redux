import { createTheme } from '@mui/material/styles';

// assets
import colors from '@/assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
    const color = colors;
    console.log('colors:',colors)
    const themeOption = {
        colors: color,
        heading: '#212121',
        paper: '#ffffff',
        backgroundDefault: '#ffffff',
        background: '#e3f2fd',
        darkTextPrimary: '#616161',
        darkTextSecondary: '#9e9e9e',
        textDark: '#212121',
        menuSelected: '#5e35b1',
        menuSelectedBack: '#ede7f6',
        divider: '#eeeeee',
        customization
    };

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
};

export default theme;
