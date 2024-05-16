import { useState } from "react";
import { Helmet } from "@redwoodjs/web";

export default function Medecine({ name, description, image, prix }) {
    const descriptionWords = description.split(" ");
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const fullDescription = descriptionWords.join(" ");
    const shortenedDescription = descriptionWords.length > 10 ? descriptionWords.slice(0, 10).join(" ") + "..." : description;

    return (
        <>
            <Helmet>
                <title>Medecine | Xenon Pharmacy</title>
            </Helmet>

            <div className="relative my-5">
                <img src={image} alt="Product" className="w-full h-50" />
                <div className="absolute bottom-0 left-0 w-full px-5 py-4 bg-white bg-opacity-50 dark:bg-opacity-80 mx-5 ">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">
                        {showFullDescription ? fullDescription : shortenedDescription}
                        {descriptionWords.length > 13 && (
                            <span className="text-blue-500 cursor-pointer" onClick={toggleDescription}>
                                {showFullDescription ? " voir moins" : " voir plus"}
                            </span>
                        )}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">{prix}</span>
                        <a href="#" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Acheter</a>

                    </div>
                </div>
            </div>

        </>
    );
}
