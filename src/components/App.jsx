import React from "react";
import { Route, useLocation} from "react-router-dom";
//Components
import HomeComponent from "./home";
import NavbarComponent from "./navbar";
import DestinationComponent from "./destination";
import CrewComponent from "./crew";
import TechnologyComponent from "./technology"
import ReservateComponent from "./reservate";
//Data
import data_json from "./data.json"
// Styles
import "../scss/index.scss";

const App = () => {
    const getData = async () => {
        const data = data_json;
        return data
    }
    const location = useLocation().pathname;
    const newClass = location.split("/")[1];
    
    return (
        <div className={"main "+ newClass}>
            <NavbarComponent currentRoute ={newClass} />
            <Route exact path="/">
                <HomeComponent />
            </Route>
            <Route path="/destination">
                <DestinationComponent data={getData()}/>
            </Route>
            <Route path="/crew">
                <CrewComponent data={getData()} />
            </Route>
            <Route path="/technology">
                <TechnologyComponent data={getData()} />
            </Route>
            <Route path="/reservate">
                <ReservateComponent />
            </Route>
        </div>
    );
};

export default App;