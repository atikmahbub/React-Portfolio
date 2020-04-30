import React from 'react'
import '../assets/css/portfolio.css'
import Paper from '@material-ui/core/Paper';
import covid from '../assets/Images/covid.png'
import blood from '../assets/Images/blood.png'
import data from '../assets/Images/data.png'
import voice from '../assets/Images/voice.jpeg'
import retina from '../assets/Images/retina.png'
import blog from '../assets/Images/blog.png'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ScrollAnimation from 'react-animate-on-scroll';
import Modal from 'react-modal';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import LabelIcon from '@material-ui/icons/Label';






function Portfolio() {
    const [openModalFirst,setOpenModalFirst] = React.useState(false);
    const[openModalSecond , setOpenModalSecond] = React.useState(false)
    const[openModalThird , setOpenModalThird] = React.useState(false)
    const[openModalForth , setOpenModalForth] = React.useState(false)
    const[openModalFifth , setOpenModalFifth] = React.useState(false)
    const[openModalSixth , setOpenModalSixth] = React.useState(false)

    function openModal(e) {
        if(e=== "one"){
            setOpenModalFirst(true);
        }
        if(e=== "two"){
            setOpenModalSecond(true);
        }
        if(e === "three"){
            setOpenModalThird(true)
        }
        if(e ==="four"){
            setOpenModalForth(true)
        }
        if(e ==="five"){
            setOpenModalFifth(true)
        }
        if(e ==="six"){
            setOpenModalSixth(true)
        }
      }
      function closeModal(e){
            if(e=== "one"){
                setOpenModalFirst(false);
            }
            if(e=== "two"){
                setOpenModalSecond(false);
            }
            if(e=== "three"){
                setOpenModalThird(false);
            }
            if(e ==="four"){
                setOpenModalForth(false)
            }
            if(e ==="five"){
                setOpenModalFifth(false)
            }
            if(e ==="six"){
                setOpenModalSixth(false)
            }
      }


    return (
        <div className="portfolio-section">
            <div className="portfolio-title">
            <ScrollAnimation animateIn="bounce" animateOnce={true}>
                My Portfolio
            </ScrollAnimation>
                <hr/>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            
            <div className="portfolio-content">
                <div className="portfolio-card-container">
                    <Paper elevation={2} className="portfolio-card">
                        <img src ={covid} width="100%"  height ="280px" className="portfolio-image"/>
                        <div className="portfolio-card-header">Covid-19 Dashboard</div>
                        <div className="portfolio-card-desc">A real time covid 19 update application with some great feature's</div>
                        <div className="portfolio-card-button-container">
                            <div className="portfolio-card-button" onClick={() =>openModal("one")}>See Details </div>
                            <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                        </div>
                    </Paper>
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={blood} width="100%"  height ="280px" className="portfolio-image"/>
                        <div className="portfolio-card-header">Blood Donor Network</div>
                        <div className="portfolio-card-desc">Professional Blood donating web application with post, comment & notifications feature</div>
                        <div className="portfolio-card-button-container">
                            <div className="portfolio-card-button" onClick={() =>openModal("two")}>See Details </div>
                            <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                        </div>
                    </Paper>
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={data} width="100%"  height ="280px" className="portfolio-image"/>
                        <div className="portfolio-card-header">Data Compression App</div>
                        <div className="portfolio-card-desc">Improved Piecewise Constant Approximation Method on Data Streams</div>
                        <div className="portfolio-card-button-container">
                            <div className="portfolio-card-button" onClick ={() => openModal("three")}>See Details </div>
                            <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                        </div>
                    </Paper>
                </div>

                <div className="portfolio-card-container">
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={voice} width="100%"  height ="280px" className="portfolio-image"/>
                    <div className="portfolio-card-header">Voice Assistant</div>
                    <div className="portfolio-card-desc">A windows application that can perform tasks for an individual task via voice command</div>
                    <div className="portfolio-card-button-container">
                        <div className="portfolio-card-button" onClick={()=> openModal("four")}>See Details </div>
                        <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                    </div>
                    </Paper>
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={blog} width="100%"  height ="280px" className="portfolio-image"/>
                    <div className="portfolio-card-header">Full Fetaured Blog App</div>
                    <div className="portfolio-card-desc">Django Blog app with multiple type user role & permissions</div>
                    <div className="portfolio-card-button-container">
                        <div className="portfolio-card-button" onClick={() => openModal("five")}>See Details </div>
                        <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                    </div>
                    </Paper>
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={retina} width="100%"  height ="280px" className="portfolio-image"/>
                    <div className="portfolio-card-header">Smart Retina</div>
                    <div className="portfolio-card-desc">Smart Retina is a screening software, which helps for detecting eye diseases.</div>
                    <div className="portfolio-card-button-container">
                        <div className="portfolio-card-button" onClick={() => openModal("six")}>See Details </div>
                        <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                    </div>
                    </Paper>
                </div>
            </div>
            </ScrollAnimation>



            <Modal
                isOpen={openModalFirst}
                onRequestClose={()=>closeModal("one")}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
                >
                <div className="modal-one">
                   
                    <div className="modal-one-header">Features:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Real Time Data</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Extra Section for Bangladesh Covid-19 update</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Data table for all affected countries</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Dark/Light Mode</div>
                            </div>
                        </div>

                        <div className="modal-one-header">Tools Used:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>React Js</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Axios for Api handling</div>
                            </div>
                        </div>
                        <Paper elevation = {3} className="portfolio-live-link">Link&nbsp;:&nbsp;<a href="https://recovid19.netlify.app/" target="_BLANK">Covid 19 Update</a> </Paper>
                </div>
            </Modal>

            <Modal
                isOpen={openModalSecond}
                onRequestClose={()=>closeModal("two")}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
                >
                <div className="modal-one">
                   
                    <div className="modal-one-header">Features:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Sign Up , Sign In for donar & user</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Dedicated Forum Page</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Notifications & Message features</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Search donor by location</div>
                            </div>
                        </div>

                        <div className="modal-one-header">Tools Used:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Bootstrap 4</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>PHP</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>MYSQL</div>
                            </div>
                        </div>
                        <Paper elevation = {3} className="portfolio-live-link">Link&nbsp;:&nbsp;<a href="https://github.com/atikmahbub/backendDevelopment01" target="_BLANK">Blood Donor Network</a> </Paper>
                </div>
            </Modal>

            <Modal
                isOpen={openModalThird}
                onRequestClose={()=>closeModal("three")}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
                >
                <div className="modal-one">
                   
                    <div className="modal-one-header">Features:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Improved piecewise linear constant Approximation method </div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Modifed version of Piecewise & Adaptive Piecewise Constant Approximation</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Gives better result than PCA & APCA</div>
                            </div>
                        </div>

                        <div className="modal-one-header">Tools Used:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Python3</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Different Dataset's</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Tkinter for frontend</div>
                            </div>
                        </div>
                        <Paper elevation = {3} className="portfolio-live-link">Link&nbsp;:&nbsp;<a href="https://github.com/atikmahbub/dataCompression" target="_BLANK">Improved Data Compression Method</a> </Paper>
                </div>
            </Modal>

            <Modal
                isOpen={openModalForth}
                onRequestClose={()=>closeModal("four")}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
                >
                <div className="modal-one">
                   
                    <div className="modal-one-header">Features:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Voice Command Recognisation</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Can perform on individual task</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Save unknown command / word to work on next time</div>
                            </div>
                        </div>

                        <div className="modal-one-header">Tools Used:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Python3</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Natural Language Processing</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Tkinter for frontend</div>
                            </div>
                        </div>
                        <Paper elevation = {3} className="portfolio-live-link">Link&nbsp;:&nbsp;<a href="https://github.com/atikmahbub/VoiceAssistant" target="_BLANK">Voice Assistant</a> </Paper>
                </div>
            </Modal>

            <Modal
                isOpen={openModalFifth}
                onRequestClose={()=>closeModal("five")}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
                >
                <div className="modal-one">
                   
                    <div className="modal-one-header">Features:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Different User Role</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Permissions for all type of user's</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Add, Edit or Delete post</div>
                            </div>
                        </div>

                        <div className="modal-one-header">Tools Used:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Python3</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Django</div>
                            </div>
                        </div>
                        <Paper elevation = {3} className="portfolio-live-link">Link&nbsp;:&nbsp;<a href="https://github.com/atikmahbub/Full-Featured-App-Django" target="_BLANK">Django Blog App</a> </Paper>
                </div>
            </Modal>

            <Modal
                isOpen={openModalSixth}
                onRequestClose={()=>closeModal("six")}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
                >
                <div className="modal-one">
                   
                    <div className="modal-one-header">Features:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Dashboard page for patients & Doctor</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>ML model to detect diabetic retinopathy</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Different user with permisiion</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Register patients</div>
                            </div>
                            <div className="modal-one-content-item">
                                <DoneAllIcon style={{color: "#ff4a57"}}/>
                                <div>Notifications system</div>
                            </div>
                        </div>

                        <div className="modal-one-header">Tools Used:</div>
                        <div className="modal-one-content">
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Python3</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Django</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Django Rest Framework</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>ReactJS</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>Redux</div>
                            </div>
                            <div className="modal-one-content-item">
                                <LabelIcon style={{color: "#ff4a57"}}/>
                                <div>SQL</div>
                            </div>
                        </div>
                </div>
            </Modal>



        </div>
    )
}

export default Portfolio
