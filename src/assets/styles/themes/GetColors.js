import darkColors from './dark';
import lightColors from './light';
import stores from '../../../assets/stores';

export default () => {
    if (stores.home.currentTheme === 1) {
        return darkColors;
    } else {
        return lightColors;
    };
};