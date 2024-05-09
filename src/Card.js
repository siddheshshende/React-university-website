import React from "react";


const Card = ({ news }) => {
    return (
        <>
            <div className="card">
                <img src={news.image_url} alt="News" className="card-images" />
                <h4>{news.title}</h4><hr/>
                <p>{news.description}</p>
                <div className="btn-box">
                    <div className="btn">
                        <a href={news.url} target="_blank" rel="noreferrer" className="explore-more"> Explore More </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
