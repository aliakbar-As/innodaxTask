import axios from 'axios';
import BaseURL from './ApiHelper';
import { Alert } from 'react-native';
import stores from '../../assets/stores';
import getStrings from './GetString';
import { Actions } from 'react-native-router-flux';


class ApiClient {

    static instance = null

    static axiosInstance = axios.create({
        baseURL: BaseURL,
        timeout: 10000,
        headers: [
            {
                "key": "Content-Type",
                "value": "application/json",
                "description": ""
            },
            {
                "key": "token",
                "value": stores.login.token,
                "description": ""
            }
        ]
    });

    static getInstance() {
        this.axiosInstance.defaults.headers['token'] = stores.login.token;

        if (this.instance === null) {
            this.instance = new ApiClient()
        }
        return this.instance
    }

    get(apiName: String, callBack: Function, params: Object = {}): Function {
        console.log(' Request GET: ', apiName, params)
        ApiClient.axiosInstance.get(apiName, { params: params })
            .then(response => {
                this.responseHandler(response, callBack, apiName)
            })
            .catch(error =>
                this.errorHandler(error, callBack, apiName))
    }

    post(apiName, callBack, params): Function {
        ApiClient.axiosInstance.post(apiName, params)
            .then(response => {
                this.responseHandler(response, callBack, apiName)
            })
            .catch(error =>
                this.errorHandler(error, callBack, apiName))
    }

    postFile(apiName, callBack, data): Function {
        console.log(' Request : MULTIPART', apiName, data)
        ApiClient.axiosInstance.defaults.headers['Content-Type'] = 'multipart/form-data'
        ApiClient.axiosInstance.post(apiName, data)
            .then(response => {
                ApiClient.axiosInstance.defaults.headers['Content-Type'] = 'application/json'
                this.responseHandler(response, callBack, apiName)
            })
            .catch(error => {
                ApiClient.axiosInstance.defaults.headers['Content-Type'] = 'application/json'
                this.errorHandler(error, callBack, apiName)
            })
    }

    errorHandler(error, callBack, apiName) {
        console.log('---* Response Error: ', apiName, error.response.data)

        if (error.response) {

            callBack(true, error.response.data)
            //   this.errorActions(error.response.data.error.message, error.response.data.error.details)
            if (error.response.data.Error) {
                this.errorActions('', error.response.data.Error.Message)
            } else {
                this.errorActions('', error.response.data.data)
            }

        } else {
            callBack(true, null)
            this.errorActions('', getStrings.errorWithOk_title)
        }

    }

    responseHandler(response, callBack, apiName) {
        console.log('+++* Response Success: ', apiName, response)

        let error = false;
        let data = response.data;

        if (data.hasError) {

            error = true;

            // this.errorActions('', getStrings.errorWithOk_exception);
            console.log('exception', getStrings.errorWithOk_exception);
        } else if (data.hasError && data.errorCode === 4) {

            error = true;
            this.errorActions('', getStrings.username_pass_incorrect);
        } else if (data.hasError && data.errorCode === 2) {

            error = true;
            this.errorActions('', getStrings.activation_code_incorrect);
        } else if (data.hasError && data.errorCode === 53) {
            error = true;
            this.errorActions('', getStrings.yourAccessTokenIncorrect, () => Actions.replace('signUp'))

        } else if (data.hasError && typeof data.data === 'string') {
            error = true;
            this.errorActions(getStrings.error_code + data.errorCode,
                data.data)
        }

        callBack(error, data)
    }

    errorActions(title, message, onClose = undefined) {
        setTimeout(() => {
            // Alert.alert(title, message);
            Alert.alert(
                title,
                message,
                [
                    { text: 'باشه', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }, 4000);
    };

}

export { ApiClient }
