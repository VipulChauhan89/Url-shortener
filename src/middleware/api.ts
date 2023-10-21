import axios from 'axios';

export async function shortener(url:string): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', url);

    const options = {
        method: 'POST',
        url: 'https://url-shortener-service.p.rapidapi.com/shorten',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': import.meta.env.VITE_APP_X_RapidAPI_Key, 
            'X-RapidAPI-Host': import.meta.env.VITE_APP_X_RapidAPI_Host
        },
        data: encodedParams,
    };

    try {
	    const response = await axios.request(options);
	    return response.data;
    } catch (error) {
	    return {result_url:"Error in Shortening the url as it might be already short."};
    }
};