import React, {useEffect, useState} from 'react';
import './App.css';
import TabsContainer from "./components/tabs/Tabs"
import {compose} from "redux";
import {connect} from "react-redux";
import {acGetStarships} from "./store/starships-reducer";
import StarshipsContainer from "./components/starships/Starships";
import SearchInput from "./components/SearchInput/SearchInput";

export const starshipsPage = "Starships";
export const savedStarshipsPage = "Saved";

const App = ({starships, savedStarships, acGetStarships}) => {
    let [activeTab, setActiveTab] = useState(starshipsPage);
    let isAllStarships = activeTab == starshipsPage;

    const [isLoaded, setIsLoaded] = useState(false);

    let [filterName, setFilterName] = useState("");

    let filterStarships = savedStarships.filter((el) => el.name.indexOf(filterName) !== -1);

    useEffect(() => {
        acGetStarships();
        setTimeout(() => {
            setIsLoaded(true);}, 2000);
        }, []
    );
  return (
      <div className="App">
        <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab}/>
        {!isAllStarships && <SearchInput filterName={filterName} setFilterName={setFilterName}/>}
        {isLoaded
            ? <StarshipsContainer starships={isAllStarships ? starships : filterStarships} isAllStarships={isAllStarships}/>
            : <div className="loading">Loading data...</div>}
      </div>
  );
}

let mapStateToProps = (state) => {
    return {
        starships: state.starships.starships,
        savedStarships: state.starships.savedStarships
    }
}

export default compose(
    connect(mapStateToProps, {acGetStarships}),
    React.memo
)(App);;
