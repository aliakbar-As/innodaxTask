import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';


export default class LoginStores {
    @persist @observable token = 'J7w3gTSRsAYSUD6SgbRemz+KntVILwPmYGGfZJ1HTeH7tVyjzOmspVBmR3c7KqjQ';

    @observable methodsList = [];

    @observable name = '';
    @observable mobile = '';
    @observable year = '';
    @observable month = '';
    @observable day = '';





    // actions
    @action setToken(token) {
        this.token = token;
    };
}
