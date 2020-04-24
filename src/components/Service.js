import React from 'react'
import '../assets/css/Service.css'
import Paper from '@material-ui/core/Paper';
import ExtensionIcon from '@material-ui/icons/Extension';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import NoteIcon from '@material-ui/icons/Note';
import ExploreIcon from '@material-ui/icons/Explore';

function Service() {
    return (
        <div className="service-section-min">
            <div className="service-title">
                My Services
                <hr/>
            </div>
            <div className="service-content">
                <Paper elevation={3} className="service-item1">
                    <div className="service-item-icon">
                        <ExtensionIcon
                        style={{fontSize : "40px"}}
                        />
                    </div>
                    <div className="service-item-title">Frontend Development</div>
                    <div className="service-item-desc">
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s
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
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s
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
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s
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
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s
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
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s
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
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Service
