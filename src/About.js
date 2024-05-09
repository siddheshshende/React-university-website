import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../images/img1.jpg';
import '../Css/HomeAbout.css';


const About = () => {
    return (
        <>
   <div className="main-section">
                <div className="img-container">
                    <img src={img1} alt="about img" />
                    <div className="content-box">
                        <h1> Join the<br /><i> World Changer</i> </h1>
                        <h2>Learning Made Easy </h2>
                        <p>Experience and engage with the Sage University as we continue to contribute to nation development by building human capacity.
                        </p>
                        <div className="btn-box">
                            <div className="btn">
                                <NavLink to="/News" className="read-more know-nore"> Know More </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-container">
                <div className="info">
                    <h1 className="about-text"> <u> About University </u></h1>
                    <h4>Sage University is one of the frontrunner university imparting quality technical education in the State of Maharashtra. The final degree is awarded by Savitribai Phule Pune University. The university is promoting technical education among the rural masses who were not having easy access to higher education. The objective of the university is to develop engineers who can be a
                        valuable asset for the industry and contribute to the technical and socio-economic development of the country.</h4>
                    <p>
                        The university was established at Nashik City in September 1986. A land of 8.2 hectares was handed over on a long-term lease.

                        The building of university having built-up area of 32,199 sq. mts. is one of the largest buildings in the city. All laboratories, classrooms and necessary infrastructural facilities are designed as per the needs of the students and following the AICTE norms. The University library has a good
                        collection of reference books, textbooks, periodicals, E-resources and journals.
                    </p>
                    <p>The university is adjudged as Grade 'A' by Government of Maharashtra. It is the only university in Nashik to be grouped four times under the “Platinum Category” by the AICTE-CII Survey of Industry Linked university.The teaching
                        and non-teaching staff of the university is a
                        blend of senior, experienced, and young dynamic faculty members devoted to the noble cause of education. Till date, 09 students topped the final year Engineering examination in various branches and were awarded Gold Medals and other Prizes by the University.
                        Total 165 students got the Rank between 1 to 10 at the University level in various examinations. Students of the university are in great demand from multinational companies in India and abroad. </p>

                    <p> In addition to academics, the students are engaged in sports and cultural activities to get a healthy relief from rigorous routines.
                        The university has a spacious playground with modern facilities for both indoor and outdoor games besides an ultra-modern Gymnasium for bodybuilding and fitness. Due to able guidance and motivation of expert and dedicated sport instructors, many of our students
                        have topped the sports events at University, National, and International levels.
                    </p>
                    <h2>The university has also established Research Centers for the PhD program in Production, Electrical, Civil, Electronics & Telecommunication and Computer Engineering Departments.</h2>
                </div>

                <div className="vision_mission">
                    <div className="vision">
                        <h3 className="vision-text"> Our Vision</h3>
                        <ul>
                            <li>To be a valuable resource for industry and society through quality education and research in engineering and management</li>
                            <li>fostering a multicultural community that honours tolerance, cross-cultural understanding and global views.</li>
                        </ul>
                    </div>
                    <div className="mission">
                        <h3 className="mission-text"> Our Mission</h3>
                        <ul>
                            <li>Impart quality education by nurturing a conducive learning environment through continuous improvement</li>
                            <li>Promote socially relevant research and development (R&D) in collaboration with industry and research institutes.</li>
                            <li>Facilitate R&D based innovation to meet emerging needs of society.</li>
                            <li>To equip the students with 21st century competencies and character qualities for their holistic development.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
export default About;