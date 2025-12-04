function Lista({props}) {
    console.log(props);
    return (
        <ul>
          {props.map(libro => 
            <li>
                {libro.volumeInfo.title}
                <a href={libro.volumeInfo.infoLink}>
                {"imageLinks" in libro.volumeInfo &&
                    <img src={libro.volumeInfo.imageLinks.smallThumbnail}></img>
                }
                </a>  
            </li>
          )}
        </ul>
    );
}
export default Lista;
//module.exports = Lista;