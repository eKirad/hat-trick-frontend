// Model imports
// import User from '../models/User';

export default class UserService {
    constructor() { }

    static getCurrentUser(): any {
        const token = window.localStorage['jwtToken'];
        if (!token) {
            return undefined;
        }

        const base64Url = token
            .split(`.`)[1];
        
        const base64 = base64Url
            .replace(`-`, `+`)
            .replace(`_`, `/`);

        // Replace with class
        const userObj = {
            id : JSON.parse(window.atob(base64)).id,
            username: JSON.parse(window.atob(base64)).username,
            role: undefined
        }

        return userObj;
    }

    static isAuthenticated() {
        return window.localStorage['jwtToken'] ? true : false;
    }
}
