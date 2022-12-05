import React from "react";

import { featureImage } from "../utils/assets";

const Feature = () => {
    const modalHandler = (image) => {
        console.log("Image has been clicked ", image);
    };

    return (
        <div>
            <div>
                <img src={featureImage[0].thumb} onClick={() => modalHandler(featureImage[0].large)} />
            </div>
            <div>
                <img src={featureImage[1].thumb} onClick={() => modalHandler(featureImage[1].large)} />
                <img src={featureImage[2].thumb} onClick={() => modalHandler(featureImage[2].large)} />
            </div>
            <div>
                <h4>ANSWER YOUR BODY'S NEEDS</h4>
                <p>
                    The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes
                    our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that
                    articial flavourings are getting in the way. This can be reversed by focusing on high-quality
                    ingredients and being mindful as your appetite guides you to consume according to your body's needs.
                </p>

                <div>
                    <span>BE MINDFUL</span>
                    <p>
                        Sourcing local or organic food is a good way to start being more mindful about you're cooking
                        and eating.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Feature;
