import { getStarshipsData, getStarshipsImg } from "../api/api";
import { all, call, takeLatest, put } from "redux-saga/effects";
import {GET_STARSHIPS, acSetStarships} from "../store/starships-reducer";

function* getStarshipsWithImg(starshipsData) {
    try {
        let starshipsWithImg = [];
        yield all(starshipsData.map(function* (item, index) {
            let starshipImg;
            if (localStorage.getItem(`${item.name}-img`) !== (null || "undefined")) {
                starshipImg = localStorage.getItem(`${item.name}-img`);
            } else {
                let starshipImg = yield call(getStarshipsImg, item.name);
                localStorage.setItem(`${item.name}-img`, starshipImg);
            }
            starshipsWithImg.push({name: item.name, img: starshipImg});
        }));
        return starshipsWithImg;
    } catch(e) {
        console.log(e);
    }
}

export function* getStarships(action) {
    try {
        let starshipsData = yield call(getStarshipsData);
        let starshipsWithImg = yield call(getStarshipsWithImg, starshipsData);
        yield put(acSetStarships(starshipsWithImg));
    } catch(e) {
        console.log(e);
    }
}

export function* rootSaga() {
    yield takeLatest(GET_STARSHIPS, getStarships);
}