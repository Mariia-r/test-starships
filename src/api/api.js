import * as axios from "axios";

const headersRequest = {'Content-Type': 'application/json'};
const swapUrl = 'https://swapi.dev/api/starships';
const proxyServer = 'https://cors-anywhere.herokuapp.com/';
const qwantUrl = 'api.qwant.com/api/search/';

export const getStarshipsData = () => {
    return axios.get(swapUrl, {headers: headersRequest})
        .then(response => {
            return response.data.results;
        })
        .catch(error => console.log(error));
};

export const getStarshipsImg = (nameStarship) => {
    return axios.get(`${proxyServer}${qwantUrl}images?q=${nameStarship}&t=images&safesearch=1&locale=en_US&uiv=4&count=1`, {
        headers: {
            'Content-type': 'text/plain',
            'Access-Control-Allow-Origin' : 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET, OPTIONS'
        }}).then(response => {
            return response.data.data.result.items[0].media;
        }).catch(error => {
            console.log(error);
    });
}