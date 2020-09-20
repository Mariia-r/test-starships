import { getStarshipsData, getStarshipsImg } from "../api/api";
import { all, call, takeLatest, put } from "redux-saga/effects";
import {GET_STARSHIPS, acSetStarships} from "../store/starships-reducer";

function* getArrayStarShipsWithImg(starshipsData) {
    try {
        let starshipsWithImg = [];
        yield all(starshipsData.map(function* (item, index) {
            let starshipImg = yield call(getStarshipsImg, item.name);
            starshipsWithImg.push({name: item.name, img: starshipImg});
        }));
        return starshipsWithImg;
    } catch(e) {
        console.log(e);
    }
}

export function* getStarships(action) {
    try {
        let starshipsWithImg;
        if (localStorage.getItem('starshipsWithImg') !== null) {
            starshipsWithImg = JSON.parse(localStorage.getItem("starshipsWithImg"));
        } else {
            let starshipsData = yield call(getStarshipsData);
            starshipsWithImg = yield call(getArrayStarShipsWithImg, starshipsData);
            localStorage.setItem("starshipsWithImg", JSON.stringify(starshipsWithImg));
        }
        yield put(acSetStarships(starshipsWithImg));
    } catch(e) {
        console.log(e);
    }
}

export function* rootSaga() {
    yield takeLatest(GET_STARSHIPS, getStarships);
}