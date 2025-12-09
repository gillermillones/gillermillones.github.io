function Lista({props}) {
    return (
        <ul>
          {props.map(libro => 
            <li class="elem">
                <div class="innerElem">
                  <a href={libro.volumeInfo.infoLink}>
                  {"imageLinks" in libro.volumeInfo &&
                    <img src={libro.volumeInfo.imageLinks.smallThumbnail}></img>
                  }
                  </a>
                </div>
                
                <div class="innerElem">
                  <h1 class="title">{libro.volumeInfo.title}</h1>
                  {"authors" in libro.volumeInfo &&
                    <h2 class="author">Autor: {libro.volumeInfo.authors[0]}</h2>
                  }
                  {"description" in libro.volumeInfo &&
                    <p class="smallText">{libro.volumeInfo.description}</p>
                  }
                </div>
            </li>
          )}
        </ul>
    );
}
export default Lista;
//module.exports = Lista;