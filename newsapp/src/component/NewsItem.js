 import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://th.bing.com/th/id/OIP.SltANmnG1MdwtdVFgVe_twHaEo?rs=1&pid=ImgDetMain":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'90%', zindex: '3'}}>{source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href= {newsUrl} targt = "_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
