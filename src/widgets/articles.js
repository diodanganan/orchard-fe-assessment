import React from "react";
import { articleImage } from "../utils/assets";

const posts = [
    {
        image: articleImage[0],
        title: "Summer Lunch Meny By Mark Best",
        content:
            "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    },
    {
        image: articleImage[1],
        title: "A Traditional Christmas Eve, Mark Best style",
        content:
            "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
    },
    {
        image: articleImage[2],
        title: "Taking Taste Further",
        content:
            "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
    },
];

const Articles = () => {
    const clickHandler = (event, index) => {
        event.preventDefault();
        console.log("Article " + (index + 1) + " has been clicked.");
    };
    return (
        <>
            <h1>ALL THE LATEST FROM AEG</h1>
            <div>
                {posts.map((post, index) => (
                    <div key={index}>
                        <img src = {post.image} />
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                        <a href="#" onClick={(event) => clickHandler(event, index)}>
                            READ MORE
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Articles;
