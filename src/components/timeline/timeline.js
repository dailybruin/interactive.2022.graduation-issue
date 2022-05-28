//This is where the code for the timeline will eventually go

import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css'
import Duke from './images/Duke.jpg';
import sitIn from './images/murphy_sit_in.png';
import gymControversy from './images/gymnastics_controversy.png';
import breaking from './images/breaking.png'
import superbowl from './images/superbowl.png';
import ukraine from './images/ukraine.png';
import maskMandate from './images/mask-mandate.png';
import danceMarathon from './images/dance-marathon.png';
import abortionProtest from './images/abortion-protest.png';
import springSing from './images/spring-sing.png';
import icon1 from './images/caterpillar.png';
import icon2 from './images/cocoon.png';
import icon3 from './images/oragami-butterfly-01.png';
import icon4 from './images/oragami-butterfly-03.png';


const Timeline = () => {
    const oddStyle={
        background: '#9CA987',
        color: '#F6F8EA',
        'font-size': '20px',
        'font-family': "'Courier Prime', Courier, monospace"
    };
    const oddArrow = {
        borderRight: '7px solid #9CA987'
    }
    const evenStyle={
        background: '#F6F8EA',
        color: '#524F40',
        'font-size': '20px',
        'font-family': "'Courier Prime', Courier, monospace"
    };
    const evenArrow = {
        borderRight: '7px solid #F6F8EA'
    }
    return (
        <div className='total-container'>
        <div className = 'timeline-container'>
            <div className = 'intro'>Throughout the 2021-2022 school year, the return to campus has brought highs with the revival of on-campus events as well as lows with continued challenges with COVID-19 protocols. There have been concerts, protests, athletic events and more. Scroll through our timeline to see some of the notable events from this school year. </div>
            <VerticalTimeline
            lineColor = {'#795663'}
            >
                {(window.innerWidth < 1170)? <span className = 'date'>September</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={oddStyle}
                    contentArrowStyle={oddArrow}
                    date={(window.innerWidth > 1170)? "September" : null}
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
                {(window.innerWidth < 1170)? <span className = 'date'>October</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={evenStyle}
                    contentArrowStyle={evenArrow}
                    date={(window.innerWidth > 1170)? "October" : null}
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
                {(window.innerWidth < 1170)? <span className = 'date'>November</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={oddStyle}
                    contentArrowStyle={oddArrow}
                    date={(window.innerWidth > 1170)? "November" : null}
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
                    <h3 className="vertical-timeline-element-title">Lecturers proposed strike</h3>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                    <img src = {Duke} className = 'photo'></img>
                </VerticalTimelineElement>
                {(window.innerWidth < 1170)? <span className = 'date'>December</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={evenStyle}
                    contentArrowStyle={evenArrow}
                    date={(window.innerWidth > 1170)? "December" : null}
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
                {(window.innerWidth < 1170)? <span className = 'date'>January</span> : null}
                {/*THIS IS WHERE THE NEW YEAR STARTS NEW YEAR NEW YEAR NEW YEAR NEW YEAR NEW YEAR*/}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={oddStyle}
                    contentArrowStyle={oddArrow}
                    date={(window.innerWidth > 1170)? "January" : null}
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    icon={<img src = {icon1} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Sit in at Murphy Hall</h3>
                    <p>
                    The Disabled Student Union, the Mother Organizations coalition and the Undergraduate Students Association Council staged a protest at Murphy Hall to demand remote learning options for all classes due to the risk of COVID-19 and further support for marginalized students. The sit-in, which ended on Feb. 16 and lasted more than two weeks, resulted in most of the student organizers' demands being met.
                    </p>
                    <img src = {sitIn} className = 'photo'></img>
                    <p className = 'photo-byline'>(Justin Jung/Daily Bruin senior staff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2022/01/31/ucla-community-members-stage-sit-in-to-demand-hybrid-learning-options' target='_blank'>Read more about the sit in at Murphy Hall</a>
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
                    Some UCLA gymnasts called for the firing of then-coach Chris Waller because of what they saw as poor handling of conflict within the program. Senior gymnast Margzetta Frazier said that gymnasts of color on the team did not feel respected or comfortable during an appearance on a podcast in which she also called for Waller to be fired. Waller resigned in April and will be replaced by Janelle McDonald.
                    </p>
                    <img src = {gymControversy} className = 'photo'></img>
                    <p className = 'photo-byline'>(Marc-Anthony Rosas/Daily Bruin)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2022/01/26/ucla-gymnast-margzetta-frazier-calls-for-coaching-change-amid-hostile-environment' target="_blank">Read more about the allegations of racism within UCLA Gymnastics</a>
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
                    A former UCLA philosophy lecturer, Matthew Harris, sent emails to members of the philosophy department implying threats of a mass shooting on Jan. 31. He was taken into custody on Feb. 1 in Boulder, Colorado.
                    </p>
                    <img src = {breaking} className = 'photo'></img>
                    <a className = 'readMore' href = 'https://dailybruin.com/tag/philosophy-lecturer-investigation' target='_blank'>Read more about the threat to campus by former philospohy lecturer</a>
                </VerticalTimelineElement>
                {(window.innerWidth < 1170)? <span className = 'date'>February</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={evenStyle}
                    contentArrowStyle={evenArrow}
                    date={(window.innerWidth > 1170)? "February" : null}
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    icon={<img src = {icon4} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Super Bowl LVI</h3>
                    <p>
                    The Los Angeles Rams beat the Cincinnati Bengals 23-20 in Super Bowl LVI on Feb. 13. Leading up to the Super Bowl, the Bengals stayed on UCLA’s campus at the Meyer and Renee Luskin Conference Center. 
                    </p>
                    <img src = {superbowl} className = 'photo'></img>
                    <p className = 'photo-byline'>(David Rimer, Daily Bruin Senior Staff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2022/02/12/gallery-los-angeles-rams-and-cincinnati-bengals-speak-to-press-before-super-bowl-lvi' target='_blank'>Read more about Super Bowl LVI</a>
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
                    The Russian invasion of Ukraine began on Feb. 24 and is still ongoing as of publication. The same day, protesters gathered on Wilshire Boulevard to demand an end to the war.
                    </p>
                    <img src = {ukraine} className = 'photo'></img>
                    <p className = 'photo-byline'>(Finn Chitwood/Daily Bruin)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2022/02/24/protesters-gather-on-wilshire-in-response-to-russian-invasion-of-ukraine' target='_blank'>Read more about the protests of the Russian invasion of Ukraine</a>
                </VerticalTimelineElement>
                {(window.innerWidth < 1170)? <span className = 'date'>March</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={oddStyle}
                    contentArrowStyle={oddArrow}
                    date={(window.innerWidth > 1170)? "March" : null}
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    icon={<img src = {icon2} className = 'icon2'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Lifting of mask mandate</h3>
                    <p>
                    Lifting of mask mandate: In March, UCLA announced that it would lift the indoor masking mandate for fully vaccinated individuals starting April 11. Earlier in March, the LA County Department of Public Health lifted its indoor masking requirement.
                    </p>
                    <img src = {maskMandate} className = 'photo'></img>
                    <p className = 'photo-byline'>(Ashley Kenney/Daily Bruin Senior staff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2022/03/11/ucla-to-lift-on-campus-masking-testing-requirements-beginning-april-11' target='_blank'>Read more about the lifting of the mask mandate</a>
                </VerticalTimelineElement>
                {(window.innerWidth < 1170)? <span className = 'date'>April</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={evenStyle}
                    contentArrowStyle={evenArrow}
                    date={(window.innerWidth > 1170)? "April" : null}
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    icon={<img src = {icon3} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Dance Marathon</h3>
                    <p>
                    Dance Marathon, a fundraiser organized by the Pediatric AIDS Coalition at UCLA, returned in person this year. The event was only 13 hours instead of its normal 26 due to COVID-19 protocols, but it still raised $112,805.42. 
                    </p>
                    <img src = {danceMarathon} className = 'photo'></img>
                    <p className = 'photo-byline'>(David Rimer/Daily Bruin Senior staff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2022/04/04/dance-marathon-2022-fights-pediatric-aids-with-in-person-fundraising-event' target='_blank'>Read more about Dance Marathon</a>
                </VerticalTimelineElement>
                {(window.innerWidth < 1170)? <span className = 'date'>May</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={oddStyle}
                    contentArrowStyle={oddArrow}
                    date={(window.innerWidth > 1170)? "May" : null}
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    icon={<img src = {icon4} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Protests for abortion rights</h3>
                    <p>
                    Protests for abortion rights: A leaked draft opinion from the United States Supreme Court indicated that the decision in Roe v. Wade may be overturned. Thousands of protestors gathered throughout LA to protest in support of legalized abortion.
                    </p>
                    <img src = {abortionProtest} className = 'photo'></img>
                    <p className = 'photo-byline'>(Seth Van Matre/Daily Bruin)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2022/05/03/protesters-gather-in-support-of-abortion-access-following-leaked-draft-opinion' target='_blank'>Read more about the protests for abortion rights</a>
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
                    After two virtual years, the 77th Spring Sing returned in person at the LATC. The event featured 16 student performances with skits by student sketch comedy group Company between acts.
                    </p>
                    <img src = {springSing} className = 'photo'></img>
                    <p className = 'photo-byline'>(Anika Chakrabarti/Photo editor)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/tag/spring-sing-2022' target='_blank'>Read more about Spring Sing</a>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        <div className='byLine'>Graphic Reporting and Interactive by Lindsey Parungo, Data editor and Priya Kanneboyina, assistant Data editor.</div>
        </div>
    );
};

export default Timeline;