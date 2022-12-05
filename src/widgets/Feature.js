import React, { useState } from "react";

import { featureImage } from "../utils/assets";
import Modal from "../components/modal";

const Feature = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeImage, setActiveImage] = useState("");

    /**
     * @param {*} image string - location of the image to be clicked
     */
    const modalHandler = (image) => {
        console.log("Image has been clicked");
        /**
         * Set active image to be placed in the modal and sets modal visibility
         */
        setActiveImage(image);
        setShowModal(!showModal);
    };

    return (
        <div className="featured">
            <div className="feature-content">
                {/** Use div tag to be able to capture varying image sizes  */}
                <div
                    className="image-lg"
                    style={{ backgroundImage: `url(${featureImage[0].thumb})` }}
                    onClick={() => modalHandler(featureImage[0].large)}
                />
            </div>
            <div className="feature-content">
                <div
                    className="image-md"
                    style={{ backgroundImage: `url(${featureImage[1].thumb})` }}
                    onClick={() => modalHandler(featureImage[1].large)}
                />
                <div
                    className="image-md"
                    style={{ backgroundImage: `url(${featureImage[2].thumb})` }}
                    onClick={() => modalHandler(featureImage[2].large)}
                />
            </div>
            <div className="feature-content">
                <h4>ANSWER YOUR BODY'S NEEDS</h4>
                <p>
                    The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes
                    our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that
                    articial flavourings are getting in the way. This can be reversed by focusing on high-quality
                    ingredients and being mindful as your appetite guides you to consume according to your body's needs.
                </p>

                <div className="feature-subcontent">
                    <span>BE MINDFUL</span>
                    <p>
                        Sourcing local or organic food is a good way to start being more mindful about you're cooking
                        and eating.
                    </p>
                </div>
            </div>

            <Modal show={showModal} closeHandler={() => modalHandler("")}>
                <div className="image-md" style={{ backgroundImage: `url(${activeImage})` }} />
            </Modal>
        </div>
    );
};

export default Feature;
