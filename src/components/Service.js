import React from 'react'
import '../assets/css/Service.css'
import Paper from '@material-ui/core/Paper';
import ExtensionIcon from '@material-ui/icons/Extension';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import NoteIcon from '@material-ui/icons/Note';
import ExploreIcon from '@material-ui/icons/Explore';
import ScrollAnimation from 'react-animate-on-scroll';

function Service() {
    return (
        <div className="service-section-min">
            <div className="service-title">
                <ScrollAnimation animateIn="bounce" animateOnce={true}>
                My Services
                </ScrollAnimation>
                <hr/>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="service-content">
                <Paper elevation={3} className="service-item1">
                    <div className="service-item-icon">
                        <ExtensionIcon
                        style={{fontSize : "40px"}}
                        />
                    </div>
                    <div className="service-item-title">Frontend Development</div>
                    <div className="service-item-desc">
                        Full Functional application with state management, decrease loading time
                        ,handle any asynchronus call & responsive design is my highest priority.
                    </div>
                </Paper>

                <Paper elevation={3} className="service-item2">
                <div className="service-item-icon">
                        <ExploreIcon
                        style={{fontSize : "40px"}}
                        />
                    </div>
                    <div className="service-item-title">Backend Development</div>
                    <div className="service-item-desc">
                        Dynamic application with multiple type user role, permission for all type of user's,
                        handle security loophole,Database normalization to prevent redundancy are strong preference.
                    </div>
                </Paper>
                <Paper elevation={3} className="service-item3">
                <div className="service-item-icon">
                        <AppsIcon
                        style={{fontSize : "40px"}}
                        />
                    </div>
                    <div className="service-item-title">App Development</div>
                    <div className="service-item-desc">
                        Full stack dynamic application Development with Machine Learning & 
                        Artificial intelligence Integration if needed.
                    </div>
                </Paper>
            </div>

            <div className="service-content">
                <Paper elevation={3} className="service-item1">
                    <div className="service-item-icon">
                        <GraphicEqIcon
                        style={{fontSize : "40px"}}
                        />
                    </div>
                    <div className="service-item-title">Api Integration</div>
                    <div className="service-item-desc">
                    Create API & handle all API data .Using the API layer of two or more applications to make them talk to each other.
                    
                    </div>
                </Paper>

                <Paper elevation={3} className="service-item2">
                <div className="service-item-icon">
                        <SettingsSystemDaydreamIcon
                        style={{fontSize : "40px"}}
                        />
                    </div>
                    <div className="service-item-title">Microsoft Azure Service</div>
                    <div className="service-item-desc">
                        Dockerize app & run the container with Microsoft Azure Container Service.
                    </div>
                </Paper>
                <Paper elevation={3} className="service-item3">
                <div className="service-item-icon">
                        <NoteIcon
                        style={{fontSize : "40px"}}
                        />
                    </div>
                    <div className="service-item-title">Wordpress Development</div>
                    <div className="service-item-desc">
                        Theme customization for professional site , Develop website from scratch,
                        Plugin Integration , payment method Integration.
                    </div>
                </Paper>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default Service
