
import React from "react";
import FeaturesComponentCard from "./FeaturesComponentCard";

interface FeaturesCardProp {
    icon: string,
    name: string,
    description: string,
    card: {
        id: number,
        name: string,
        text: string
    }[],
}

type FeaturesCardType = React.FC<FeaturesCardProp>

const FeaturesCard: FeaturesCardType = ({ icon, name, description, card }) => {

    return (
        <>
            <div>
                <div>
                    {icon}
                    <h5>
                        {name}
                    </h5>
                    <p>
                        {description}
                    </p>
                </div>
                <div>
                    {
                        card.map( value => (
                            <div key={value.id} >
                                <FeaturesComponentCard title={value.name} text={value.text} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FeaturesCard;