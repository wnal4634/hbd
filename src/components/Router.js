import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Create from "routes/Create";
import ClickPage from "routes/ClickPage";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {/* <Route path="/user/:id">
                <ClickPage />
            </Route> */}
                <Route path="/">
                    <Create />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
