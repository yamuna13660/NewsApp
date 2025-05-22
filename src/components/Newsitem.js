import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
   let {title,description,imageurl,newsurl,date}=this.props;
    return (
      <div className='my-3'>
        <div className="card">
  <img src={imageurl} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
        <p rel="noreferrer"><small class="text-muted">{date}</small></p>
    <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
