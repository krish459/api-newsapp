import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsurl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem;" }}>
                    <img src={!imageUrl ? "https://kubrick.htvapps.com/vidthumb/images/person-getting-vaccine-1632345741.jpg?crop=1xw:1xh;center,top&resize=1200:*" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <button type="button" class="btn btn-primary my-2">
                            {!source ? "Unknown" : source} <span class="badge bg-secondary"></span>
                        </button>
                        <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
