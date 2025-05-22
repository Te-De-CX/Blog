

import Image from "next/image";

interface HomeResoucesCardProp {
    name: string,
    nameText: string,
    buttonData: string,
    variety: string,
    varietyData: string,
    imageSrc: string,
    total: string,
    expertiseData: string,
}

type HomeBlogCardType = React.FC<HomeResoucesCardProp>

const HomeResoucesCard: HomeBlogCardType = ({
    name,
    nameText,
    buttonData,
    variety,
    varietyData,
    imageSrc,
    total,
    expertiseData,
}) => {

    return (
        <>
            <div>
                <div>
                    <h6>
                        {name}
                    </h6>
                    <p>
                        {nameText}
                    </p>
                    <button>
                        {buttonData}
                    </button>
                    <div>
                        download data
                    </div>
                </div>
                <div>
                    <div>
                        <h6>
                            {variety}
                        </h6>
                        <p>
                            {varietyData}
                        </p>
                    </div>
                    <Image
                        src={imageSrc}
                        alt={variety}
                    />
                </div>
                <div>
                    <div>
                        <p>
                            total {variety}
                        </p>
                        <p>
                            {total}
                        </p>
                    </div>
                    <div>
                        <p>
                            download formats
                        </p>
                        <p>psd format for access</p>
                        <button>
                            preview
                        </button>
                    </div>
                    <div>
                        <p>
                            average author expertise
                        </p>
                        <p>
                            {expertiseData}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeResoucesCard;