import * as axios from "axios";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
    accessKey: "DL9x0rIqUjeiJxSTus8LBMSkhfvalJUyukVG-xhXiwU",
});

const headersRequest = {'Content-Type': 'application/json'};
const swapUrl = 'https://swapi.dev/api/starships';

export const getStarshipsData = () => {
    return axios.get(swapUrl, {headers: headersRequest})
        .then(response => {
            return response.data.results;
        })
        .catch(error => console.log(error));
};

export const getStarshipsImg = (nameStarship) => {
    return unsplash.photos.getRandomPhoto({query: nameStarship, count: 1})
        .then(toJson)
        .then(json => {
            return json[0].urls.small;
        })
        .catch(error => console.log(error));
}