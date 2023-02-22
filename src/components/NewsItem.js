import React from 'react'

const NewsItem = (props) => {
  
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-2">
        <div className="card conatiner my-2" >

          <div  style={{right: '0',display: 'flex', justifyContent: 'flex-end', position: 'absolute'}}>

            <span className="position-absolute d-flex badge rounded-pill bg-danger">
              {source}
            </span>
          </div>

          <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2022/12/15/1600x900/IMG_4384_1659069368568_1671092052711_1671092052711.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* //here we are converting the date in gmt time  */}
            <p className="card-text"><small className="text-danger">By {!author?"unknown":author} On {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem