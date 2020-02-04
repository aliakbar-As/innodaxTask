import { observable, action } from 'mobx';
import { create, persist } from 'mobx-persist';
import lightColors from '../styles/themes/light';
import darkColors from '../styles/themes/dark';

export default class HomeStores {



    @persist @observable currentLanguage = 'en';
    @persist('object') @observable currentTheme = lightColors; //light



    @action setDarkTheme() {
        this.currentTheme = darkColors;
    };
    @action setLightTheme() {
        this.currentTheme = lightColors;
    };



    @action setLanguages(value) {
        this.currentLanguage = value;
    };


    @action setTheme(theme) {
        this.currentTheme = theme;
    };
}
