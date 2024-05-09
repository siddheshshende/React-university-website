import React, { useEffect, useState } from "react";
import img4 from '../images/img4.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img7 from '../images/img7.png';
import Card from "./Card";
import '../Css/NewsStyle.css';
import { NavLink } from "react-router-dom";

const News = () => {
    const [sportsNews, setSportsNews] = useState([]);

    useEffect(() => {
        async function getSportsNews() {
            try {
                const response = await fetch("https://api.thenewsapi.com/v1/news/top?api_token=SdoCZ2b3ZLvnFF7QW8HgS1aVtvnOVc7dkaqguUVe&locale=us,in&limit=3&categories=sports");
                const data = await response.json();
                const newsList = data.data;
                setSportsNews(newsList);
            } catch (error) {
                console.log('Error fetching sports news:', error);
            }
        }
        getSportsNews();
    }, []);

    return (
        <>
            <div className="main-section">
                <div className="img-container">
                    <img src={img4} alt="carnews img" />
                    <div className="content-box">
                        <h1> Join Our <br /> <i> Sage Community</i></h1>
                        <h2>Experience Sage and Stay Engaged: Your News Oasis</h2>
                        <p>Sage University's news section keeps you up to date on the newest changes, events, and activities, offering a full glimpse of our vibrant community and educational endeavours.</p>
                        <div className="btn-box">
                            <div className="btn">
                                <NavLink to="/Contact" className="read-more know-nore"> Contact Us </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-event-container">
                <h2> <u>   News and Events</u></h2>
                <h4> <u>Top News </u></h4>
                <div className="news-container">
                    {sportsNews.map((news, index) => (
                        <Card key={index} news={news} />
                    ))}
                </div>
                <h4> <u>All About Events </u></h4>
                <div className="event-container">
                    <div className="textfield">
                        <h2> On May 7,2024 <br />Robert Vargas: Barriers And Facilitators Of Public Safety Innovation</h2>
                        <p>The killing of George Floyd in 2020 ignited an unprecedented outpouring of support for municipal investment in policing alternatives.
                            In this presentation, I share findings from several papers in progress describing underestimated barriers to public safety innovation stemming from academia and philanthropy....</p>
                        <div className="btn-box">
                            <div className="btn">
                                <a href="https://events.uchicago.edu/event/227878-robert-vargas-barriers-and-facilitators-of-public-saf" target="_blank" rel="noreferrer" className="explore-more"> Read More </a>
                            </div>
                        </div>
                    </div>
                    <div className="textfield1img">
                        <img src={img8} className="event1img" alt="event img" />
                    </div>


                </div>
                <div className="event-container1">
                    <div className="textfield1img">
                        <img src={img9} className="event1img" alt="event img" />
                    </div>
                    <div className="textfield">
                        <h2> On April 28,2023 <br />Equinox Took Place</h2>
                        <p>The event ‘Equinox 2023’ was organized by Computer and CSD Engineering Department on 28th April, 2023 in association with CSI Students’ Branch and Debuggers Club. We had over 400 participants in all from which 300 participants
                            were from KKWIEER and 100 participants from other colleges around Nashik, Pune and Mumbai.....</p>
                        <div className="btn-box">
                            <div className="btn">
                                <a href="https://kkwagh.edu.in/engineering/news-detail/equinox-2023-home/226" target="_blank" rel="noreferrer" className="explore-more"> Read More </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-container2">

                    <div className="textfield">
                        <h2>On May 2,2024<br /> University Level Seminar with Stéfan van der Walt, PhD</h2>
                        <p>The scientific Python ecosystem includes essential libraries like NumPy and SciPy, along with specialized ones like NetworkX and scikit-image.
                            The Scientific Python project aims to coordinate and support developers within this ecosystem
                            It's part of the broader open transformation in data science, addressing challenges in growth and maintenance....</p>
                        <div className="btn-box">
                            <div className="btn">
                                <a href="https://events.berkeley.edu/BIDS/event/240871-bids-seminar-with-stfan-van-der-walt-phd" target="_blank" rel="noreferrer" className="explore-more"> Read More </a>
                            </div>
                        </div>

                    </div>
                    <div className="textfield1img">
                        <img src={img7} className="event1img" alt="event img" />
                    </div>
                </div>
                <div className="event-container3">
                    <div className="textfield1img">
                        <img src={img10} className="event1img" alt="event img" />
                    </div>
                    <div className="textfield">

                        <h2>On May 9,2024<br /> Chorale, spring rehearsals begin</h2>
                        <p>Join the Women’s Chorale! We're a concert choir open to all women at MIT. Rehearsals are Wednesdays, 7-9 pm in building 4 starting January 17. Our music director, Nhung Truong, fosters a love for music while aiming for excellence. 
                            Prepare for our May program featuring works by Delibes, Handel, and Elaine Hagenberg....</p>
                        <div className="btn-box">
                            <div className="btn">
                                <a href="https://calendar.mit.edu/event/mit_chorale_spring_rehearsals_begin" target="_blank" rel="noreferrer" className="explore-more"> Read More </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <div className="btn">
                        <a href="./News.js"  rel="noreferrer" className="explore-more"> Browse More </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;
