import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import ClickPage from "routes/ClickPage";
import Create from "components/Create";

const AppRouter = () => {
    const [isCreatedName, setIsCreatedName] = useState(false);

    return (
        <Router>
            <Switch>
                {isCreatedName ? (
                    <>
                        <Route exact path="/">
                            <ClickPage />
                        </Route>
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                            <Create />
                        </Route>
                    </>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
