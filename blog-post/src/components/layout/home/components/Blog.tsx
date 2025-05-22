import React from "react";

interface HomeBlogCardProp {
    img: string,
    username: string,
    speciality: string,
    date: string,
    topic: string,
    text: string

};

type HomeBlogCardType = React.FC<HomeBlogCardProp>

const HomeBlogCard: HomeBlogCardType = ({ img, username, speciality, date, topic, text }) => {

    return (
        <>
            <div>
                <div>
                    {img}
                    <div>
                        <h5>{username}</h5>
                        <p>{speciality}</p>
                    </div>
                </div>
                <div>
                    {date}
                    <h5>
                        {topic}
                    </h5>
                    <p>
                        {text}
                    </p>
                    <p>analytics</p>
                </div>
                <button>
                    view blog
                </button>
            </div>
        </>
    )
}

export default HomeBlogCard;