import faString from './fa';
import enString from './en';
import stores from '../stores';

export default () => {
    if (stores.home.currentLanguage === 'en') {
        return enString;
    } else {
        return faString;
    };
};