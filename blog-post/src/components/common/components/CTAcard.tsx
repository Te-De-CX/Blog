
interface CTAcardProp {
    name: string,
    text: string
}

type CTAcardType = React.FC<CTAcardProp>

const CTAcard: CTAcardType = ({
    name,
    text
}) => {

    return (
        <>
            <div>
                <h6>
                    {name}
                </h6>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}

export default CTAcard;