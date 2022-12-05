import React, { Suspense } from "react";
import Feature from "../widgets/feature";
import Articles from "../widgets/articles";

const App = () => {
    return (
        // Suspense for waiting the UI images to load.
        <Suspense fallback={<div>Loading...</div>}>
            {/** Broke down UI into two components encapsulated with a div
             * Feature for the first component - comprises of image, modal and text
             * Articles for the 2nd components - comprises of image, text and links
             * 
            */}
            <div className="container">
                <Feature /> 
                <Articles />
            </div>
        </Suspense>
    );
};

export default App;
