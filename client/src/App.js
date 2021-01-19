import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navibar from "./components/Navibar";
import Header from "./components/Header"
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
    return (
        <Router>
        <Navibar/>
        <Header/>
            <Switch>
            <Route exact path={["/", "/search"]}>
                        <Search />
                    </Route>
                    <Route exact path={["/", "/saved"]}>
                        <Saved />
                    </Route>
            </Switch>
        </Router>
    );
}


export default App;
