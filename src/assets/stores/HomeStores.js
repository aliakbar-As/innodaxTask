import { observable, action } from 'mobx';
import { create, persist } from 'mobx-persist';


export default class HomeStores {



    @persist    @observable     currentLanguage = 'en';
    @persist    @observable     currentTheme = 0; //light


    @action setLanguages(value) {
        this.currentLanguage = value;
    };

    
    @action setTheme(theme) {
        this.currentTheme = theme;
    };
}
