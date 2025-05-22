
import React from "react";

interface FeaturesComponentCardProp {
    title: string,
    text: string,
}

type FeaturesComponentCardTpe = React.FC<FeaturesComponentCardProp>

const FeaturesComponentCard: FeaturesComponentCardTpe = ({ title, text }) => {

    return (
        <>
            <div>
                <p>
                    {title}
                </p>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}

export default FeaturesComponentCard;