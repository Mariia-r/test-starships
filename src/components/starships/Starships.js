import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import './Starships.scss';
import {acSaveStarships} from "../../store/starships-reducer";

const Starships = ({starships, savedStarships, isAllStarships, acSaveStarships}) => {
    const saveStarship = (starship) => {
        let hasSavedStarship = savedStarships.some(el => el.name === starship.name);
        if (!hasSavedStarship) {
            acSaveStarships(starship);
            alert(`The starship "${starship.name}" was saved`);
        } else {
            alert(`You saved the starship "${starship.name}" earlier`);
        }
    };

    return (
        <div className="starships-list">
            {starships.map((starship, index) => {
                return (
                    <div key={index} className={`starship-item starship-${index+1} ${isAllStarships && "all-starship"}`}
                         onClick={isAllStarships ? () => {saveStarship(starship)} : null}>
                        <p className="starship-name">{starship.name}</p>
                        <div className={`starship-img-wrapper`}>
                            <img src={starship.img} alt={starship.name}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        savedStarships: state.starships.savedStarships
    }
}

const StarshipsContainer = compose(
    connect(mapStateToProps, {acSaveStarships}),
    React.memo
)(Starships);

export default StarshipsContainer;