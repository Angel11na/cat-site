
interface MainImageProps {
    imgPath: string;
    text?: string;
}

const MainImage = (
    { imgPath, text }: MainImageProps
) => {
    return (
        <div className="hero">
            <img src={imgPath}></img>
            
            {text && (
                <h1>{text.toUpperCase()}</h1>
            )}
            
        </div>

    )
}
export default MainImage;