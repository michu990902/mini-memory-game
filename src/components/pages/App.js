import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Header from "../molecules/Header/Header";

import Game from './Game';
import Home from './Home';
import Scoreboard from './Scoreboard';

import AppWrapper from '../atoms/AppWrapper/AppWrapper';

function App() {
    return (
        <Router>
            <AppWrapper>
                <Header/>
                <Switch>
                    <Route exact path="/scoreboard">
                        <Scoreboard/>
                    </Route>
                    <Route exact path="/game">
                        <Game/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </AppWrapper>
        </Router>
    );
}

export default App;
