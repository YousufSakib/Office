import axios from "./baseUrl";

export default class Request{

    static getRequest = (url) => {
        return new Promise((resolve, reject) => {
            axios.get(url, {
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        })
    }

    static postRequest = (url, data) => {
        return new Promise((resolve, reject) => {
            axios.post(
                url,
                data
            ).then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            });
        })
    }

}