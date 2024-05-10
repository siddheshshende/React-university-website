import React from "react";
import img3 from '../images/img3.jpg';
import { NavLink } from "react-router-dom";
import '../Css/ContactStyle.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';

const Contact = () => {
    return (
        <>
            <div className="main-section">
                <div className="img-container">
                    <img src={img3} alt="carnews img" />
                    <div className="content-box">
                        <h1> Get in <br /> <i> Touch</i></h1>
                        <h2>Connect with us and let's make things happen!!</h2>
                        <p> whether you're a student, a member of our community or just curious. We are available to assist with any inquiries or suggestions.</p>
                        <div className="btn-box">
                            <div className="btn">
                                <NavLink to="/Contact" className="read-more know-nore"> Fill Below Form! </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-container">
                <h2> <u> Contact Details </u></h2>
                <div className="college-details">
                    <div className="address">

                        <div className="contact-item">
                            <LocationOnIcon className="contacticon" />
                            <h3> <u>  Locate Us </u></h3>
                            <p>Sage University, Survey No. - 9/1/3. <br /> Ambegaon,Budruk, <br /> Institute Road Pune 411041</p>
                        </div>
                        <div className="contact-item">
                            <LocalPhoneIcon className="contacticon" />
                            <h3><u> Call Us </u></h3>
                            <p>Phone: +91-495-2809101</p>
                        </div>
                        <div className="contact-item">
                            <FaxIcon className="contacticon" />
                            <h3><u> Fax Us </u></h3>
                            <p>Fax: +91-495-2803010-12</p>
                        </div>
                        <div className="contact-item">
                            <EmailIcon className="contacticon" />
                            <h3> <u>Mail Us  </u></h3>
                            <p>info@sageuniversity.edu</p>
                        </div>

                    </div>
                </div>
                <div className="form-section">
                
                    <Card style={{ maxWidth: 450, padding: "15px 5px ", margin: "0 auto" }}>
                        <CardContent>
                            <Typography gutterBottom  align ="center" variant="h5"> Contact Us </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                Fill up the form and our team will get back to you within 24 hours.
                            </Typography>
                            <form>
                                <Grid container spacing={1}>

                                    <Grid xs={12} sm={6} item >
                                        <TextField label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item >
                                        <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item >
                                        <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item >
                                        <TextField type="number" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item >
                                        <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item >
                                        <Button type="submit" color="secondary" variant="contained" fullWidth> Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Contact;
