import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img2 from '../images/img2.jpg';
import '../Css/HomeAbout.css';


const Home = () => {
    const [isOpen, setIsOpen] = useState([false, false, false]);
    const [departmentOpen, setDepartmentOpen] = useState([false, false, false]);

    const toggleAccordion = (index, type) => {
        if (type === 'course') {
            const updatedState = isOpen.map((state, i) => i === index ? !state : false);
            setIsOpen(updatedState);
        } else if (type === 'department') {
            const updatedState = departmentOpen.map((state, i) => i === index ? !state : false);
            setDepartmentOpen(updatedState);
        }
    };

    return (
        <>
    <div className="main-section">
                <div className="img-container">
                    <img src={img2} alt="home img" />
                    <div className="content-box">
                        <h1>Welcome to<br/> <i> Sage University</i></h1>
                        <h2>Learn At The Leading University of India</h2>
                        <p>Sage University is one of the frontrunner university imparting quality technical education in the State of Maharashtra. </p>
                        <div className="btn-box">
                            <div className="btn">
                                <NavLink to="/about" className="read-more"> Read More </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_container">
                <div className="course">
                    <h3 className="course-offered"> <u>Courses Offered At Sage university </u></h3>
                    <ul>
                        <li onClick={() => toggleAccordion(0, 'course')} className={isOpen[0] ? "accordion-item active" : "accordion-item"}>
                            UG Program
                            {isOpen[0] && (
                                <div className="accordion-content">
                                    <p>B.Tech in Robotics and Automation Engineering (Duration: 4 Years).</p>
                                    <p>B.Tech in  Computer Science and Design (Duration: 4 Years).</p>
                                    <p>B.Tech in Information Technology (Duration: 4 Years).</p>
                                    <p>B.Tech in Mechanical Engineering (Duration: 4 Years).</p>
                                    <p>B.Tech in Computer Engineering (Duration: 4 Years).</p>
                                </div>
                            )}
                        </li>
                        <li onClick={() => toggleAccordion(1, 'course')} className={isOpen[1] ? "accordion-item active" : "accordion-item"}>
                            PG Program
                            {isOpen[1] && (
                                <div className="accordion-content">
                                    <p>M.Tech in Civil (Structures) (Duration: 2 Years).</p>
                                    <p>Master in Business Administration (Duration: 2 Years).</p>
                                    <p>Master in Computer Application (Duration: 2 Years).</p>
                                    <p>M.Tech in Electrical (Power System) (Duration: 2 Years).</p>
                                </div>
                            )}
                        </li>
                        <li onClick={() => toggleAccordion(2, 'course')} className={isOpen[2] ? "accordion-item active" : "accordion-item"}>
                            Other Program
                            {isOpen[2] && (
                                <div className="accordion-content">
                                    <p>Ph.D in Civil Engineering (Duration: 3 Years).</p>
                                    <p>Ph.D in Electronics & Telecommunication (Duration: 3 Years).</p>
                                    <p>Ph.D in Electrical Engineering (Duration: 3 Years).</p>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="department">
                    <h3 className="department-available"> <u> Departments At Sage university </u></h3>
                    <ul>
                        <li onClick={() => toggleAccordion(0, 'department')} className={departmentOpen[0] ? "accordion-item active" : "accordion-item"}>
                            Departments
                            {departmentOpen[0] && (
                                <div className="accordion-content">
                                    <p>Department of Robotics and Automation Engineering.</p>
                                    <p>Department of Electrical Engineering.</p>
                                    <p>Department of Computer Engineering.</p>
                                    <p>Department of Master in Computer Application.</p>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="recruitment">
                <h3 className="recruiter"> <u> Our Recruiters </u></h3>
                <div className="footer-cols">
                    <ul>
                        <li>Tata Motors Ltd</li>
                        <li>Lupin Ltd</li>
                        <li>IBM India Pvt Ltd</li>
                    </ul>
                    <ul>
                        <li>Nvidia</li>
                        <li>EQ Technologies</li>
                        <li>Hexaware Technologies</li>
                    </ul>
                    <ul>
                        <li>Deloitte India</li>
                        <li>Datamatics Pvt. Ltd.</li>
                        <li>CGI Power Ltd</li>
                    </ul>
                    <ul>
                        <li>Crompton Greaves Ltd.</li>
                        <li>BOSCH Ltd</li>
                        <li>ABB India Ltd.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home;
