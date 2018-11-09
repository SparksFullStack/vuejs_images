import qs from 'qs';

const CLIENT_ID = 'f99e528c1e8aad5';
const ROOT_URL = 'https://api.imgur.com'

export default {
    login(){
        const queryString = {
            client_id: CLIENT_ID,
            response_type: "token",
        }

        // here we're using qs to stringify all the values in the queryString object and the forcing a programatic navigation to the URL
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    }
}

