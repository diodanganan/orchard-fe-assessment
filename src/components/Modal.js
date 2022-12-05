import React from "react";
import { closeIconPNG } from "../utils/assets";

const Modal = (props) => {
    const closeHandler = () => {
        // returns the functions to set visibility of modal to none
        return props.closeHandler(false);
    };
    return props.show ? (
        <div className="modal" style={{ display: "block" }}>
            <div className="close" onClick={() => closeHandler()}>
                <img src={closeIconPNG} alt = "close button" />
            </div>
            {props.children}
        </div>
    ) : null;
};

export default Modal;
