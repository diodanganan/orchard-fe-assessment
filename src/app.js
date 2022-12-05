import React from "react";
import Feature from './widgets/features';
import Articles from "./widgets/articles";

const App = () => {
    return (
        <div className="container">
            <Feature />
            <Articles /> 
        </div>
    );
};

export default App;
