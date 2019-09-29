export default class HttpService {
    constructor() { }

    static baseUri() {
        return `http://localhost:3000/api/v1`;
    }

    static checkIfAuthorized(res: any): boolean {
        return res.status === 401 ? false : true;
    }

    static async get(uri: string, onSuccess: (res: any) => void, onError: (res: any) => void) {
        const token = window.localStorage[`jwtToken`];
        let header = new Headers();
        if (token) {
            header.append(`Authorization`, `JWT ${token}`);
        }

        try {
            const response = await fetch(uri, {
                method: `GET`,
                headers: header
            });

            const jsonResponse = await response.json();

            if (jsonResponse.error) {
                onError(jsonResponse.error);
            } else {
                onSuccess(jsonResponse);
            }
        } catch (e) {
            console.error(e);
        }
    }

    static async post(uri: string, data: any, onSuccess: (res: any) => void, onError: (res: any) => void) {
        const token = window.localStorage[`jwtToken`];
        let header = new Headers();
        if (token) {
            header.append(`Authorization`, `JWT ${token}`);
        }

        header.append(`Content-type`, `application/json`);

        try {
            const response = await fetch(uri, {
                method: `POST`,
                headers: header,
                body: JSON.stringify(data)
            });

            if (!this.checkIfAuthorized(response)) {
                window.location.assign(`/#login`);
                return;
            }

            const jsonResponse = await response.json();
            if (jsonResponse.error) {
                onError(jsonResponse.error);
            } else {
                if (jsonResponse.hasOwnProperty(`token`)) {
                    window.localStorage[`jwtToken`] = jsonResponse.token;
                }

                onSuccess(jsonResponse);
            }
        } catch (e) {
            console.error(e);
        }
    }

    static async put(uri: string, data: any, onSuccess: (res: any) => void, onError: (res: any) => void) {
        const token = window.localStorage[`jwtToken`];
        let header = new Headers();

        if (token) {
            header.append(`Authorization`, `JWT ${token}`);
        }

        header.append(`Content-type`, `application/json`);

        try {
            const response = await fetch(uri, {
                method: `PUT`,
                headers: header,
                body: JSON.stringify(data)
            });

            if (!this.checkIfAuthorized(response)) {
                window.location.assign(`/#login`);
                return;
            }

            const jsonResponse = await response.json();
            if (jsonResponse.error) {
                onError(jsonResponse);
            } else {
                if (jsonResponse.hasOwnProperty(`token`)) {
                    window.localStorage[`jwtToken`] = jsonResponse.token;
                }

                onSuccess(jsonResponse);
            }
        } catch (e) {
            console.error(e);
        }
    }

    static async delete(uri: string, onSuccess: (res: any) => void, onError: (res: any) => any) {
        const token = window.localStorage[`jwtToken`];
        let header = new Headers();

        if (token) {
            header.append(`Authorization`, `JWT ${token}`);
        }

        try {
            const response = await fetch(uri, {
                method: `DELETE`,
                headers: header
            })
    
            const jsonResponse = await response.json();
            if (jsonResponse.error) {
                onError(jsonResponse.error);
            } else {
                onSuccess(jsonResponse);
            }
        } catch (e) {
            console.error(e);
        }
    }
};