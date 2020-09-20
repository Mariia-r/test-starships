import React from "react";
import './Tabs.scss';
import {starshipsPage, savedStarshipsPage} from "../../App";

const Tabs = ({activeTab, setActiveTab}) => {
    const namesTabs = [starshipsPage, savedStarshipsPage];

    return (
        <div>
            <nav className="tabs">
                {namesTabs.map((tab, i) => (
                    <button
                        key={i}
                        className={`tab-item ${namesTabs[i] === activeTab ? 'active' : ''}`}
                        onClick={() => {setActiveTab(tab)}}>
                        {tab}
                    </button>
                ))}
            </nav>
        </div>
    );
}

const TabsContainer = React.memo(Tabs);

export default TabsContainer;