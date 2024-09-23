function ImageShow({url, altDescription}) {
    return (
        <div>
            <img src={url} alt={altDescription}></img>
        </div>
    );
}

export default ImageShow;

