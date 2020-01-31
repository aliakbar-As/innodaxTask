import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';


export default class LoginStores {
    @persist @observable token = '';

    @observable userImageUploaded = [];
    @observable userImage = '';




    // actions
    @action setUserImageUploaded(images) {
        this.userImage = images;
        this.userImageUploaded = this.setUserImageUploaded.concat(images);
    };
}
