//This is where the code for the timeline will eventually go

import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css'
import Duke from './Duke.jpg';
import icon1 from './caterpillar.png'
import icon2 from './cocoon.png'
import icon3 from './oragami-butterfly-01.png'
import icon4 from './oragami-butterfly-03.png'


const Timeline = () => {
    const oddStyle={
        background: '#9CA987',
        color: '#F6F8EA'
    };
    const oddArrow = {
        borderRight: '7px solid #9CA987'
    }
    const evenStyle={
        background: '#F6F8EA',
        color: '#524F40'
    };
    const evenArrow = {
        borderRight: '7px solid #F6F8EA'
    }
    return (
        <div className = 'timeline-container'>
        <VerticalTimeline
         lineColor = {'#795663'}
         >
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date="September"
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon1} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Bruin Bash</h3>
                <p>
                Text here
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date=""
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon2} className = 'icon2'></img>}
            >
                <h3 className="vertical-timeline-element-title">Staffing Shortage</h3>
                <p>
                text
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={evenStyle}
                contentArrowStyle={evenArrow}
                date="October"
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon3} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Roebling Block Party</h3>
                
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date="November"
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon4} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">UCLA-USC football game</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date=""
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon1} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Large crowds for UCLA-Villanova men's basketball game</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date=""
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon2} className = 'icon2'></img>}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={evenStyle}
                contentArrowStyle={evenArrow}
                date="December"
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon3} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Holiday bowl dropout</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={evenStyle}
                contentArrowStyle={evenArrow}
                date=""
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon4} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">COVID-19 surge</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date="January"
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon1} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Sit in at Murphy Hall</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date=""
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon2} className = 'icon2'></img>}
            >
                <h3 className="vertical-timeline-element-title">Allegations of racism within UCLA Gymnastics</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date=""
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon3} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Threat to campus by former philosophy lecturer</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={evenStyle}
                contentArrowStyle={evenArrow}
                date="February"
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon4} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Super Bowl LVI</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={evenStyle}
                contentArrowStyle={evenArrow}
                date=""
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon1} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Protests of Russian invasion of Ukraine</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date="March"
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon2} className = 'icon2'></img>}
            >
                <h3 className="vertical-timeline-element-title">Lifting of mask mandate</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={evenStyle}
                contentArrowStyle={evenArrow}
                date="April"
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon3} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Dance Marathon</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date="May"
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon4} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Protests for abortion rights</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="event-odd"
                contentStyle={oddStyle}
                contentArrowStyle={oddArrow}
                date=""
                dateClassName="date"
                iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                icon={<img src = {icon1} className = 'icon'></img>}
            >
                <h3 className="vertical-timeline-element-title">Spring Sing</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <img src = {Duke} className = 'photo'></img>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    );
};

export default Timeline;