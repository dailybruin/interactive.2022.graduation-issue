//This is where the code for the timeline will eventually go

import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css'
import sitIn from './images/murphy_sit_in.png';
import gymControversy from './images/gymnastics_controversy.png';
import breaking from './images/breaking.png'
import superbowl from './images/superbowl.png';
import ukraine from './images/ukraine.png';
import maskMandate from './images/mask-mandate.png';
import danceMarathon from './images/dance-marathon.png';
import abortionProtest from './images/abortion-protest.png';
import springSing from './images/spring-sing.png';
import bruinBash from './images/rico-nasty.png';
import staffingShortage from './images/dining-hall-shortages.png';
import roeblingBlockParty from './images/roebling-block-party.png';
import rivalGame from './images/usc-ucla.png';
import villanovaCrowd from './images/villanova-crowd.png';
import lecturerStrike from './images/lecture-strike.png'
import holidayBowl from './images/holiday-bowl.png';
import covidSurge from './images/ucla-remote.png';


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
            <div className = 'intro'>Throughout the 2021-2022 school year, the return to campus has brought highs with the revival of on-campus events as well as lows with continued challenges from COVID-19 protocols. There have been concerts, protests, athletic events and more. Scroll through our timeline to see some of the notable events from this year. </div>
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
                    //icon={<img src = {icon1} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Bruin Bash 2021</h3>
                    <p>
                    UCLA’s Cultural Affairs Commission and Campus Events Commission put on UCLA’s annual concert in which students gather to celebrate the start of the school year. This year, there were performances from Tkay Maidza, Yung Baby Tate and Rico Nasty. To accommodate for COVID-19 policies, the concert was held outdoors at the Los Angeles Tennis Center, and there was a synchronous screening for the performance at the Sunset Canyon Recreation Center. 
                    </p>
                    <img src = {bruinBash} className = 'photo' alt='Rico Nasty at Bruin Bash'></img>
                    <p className = 'photo-byline'>(Chelsea Westman/Daily Bruin)</p>
                    <a className = 'readMore' href = 'https://www.google.com/url?q=https://dailybruin.com/2021/09/21/bruin-bash-2021-shines-with-stellar-performances-from-rico-nasty-opening-artists&sa=D&source=docs&ust=1653859864886595&usg=AOvVaw3fdd2hA5QlnHvBA-0PxfOD' target='_blank'>Read more about Bruin Bash</a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={oddStyle}
                    contentArrowStyle={oddArrow}
                    date=""
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    //icon={<img src = {icon2} className = 'icon2'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Staffing shortage</h3>
                    <p>
                    Returning from the pandemic, UCLA’s dining halls faced a significantly decreased workforce. UCLA received several complaints from students and employees. While students dealt with long wait times and lines for meals, employees criticized UCLA for overworking and underpaying the current staff.
                    </p>
                    <img src = {staffingShortage} className = 'photo' alt = 'dining hall with outlines of workers illustrated in'></img>
                    <p className = 'photo-byline'>(Photo by Noah Danesh/Daily Bruin. Photo Illustration by Katelyn Dang/Daily Bruin senior staff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2021/11/11/dining-hall-labor-shortages-lead-to-longer-lines-low-quality-food-across-uc' target='_blank'>Read more about the dining hall labor shortage</a>
                </VerticalTimelineElement>
                {(window.innerWidth < 1170)? <span className = 'date'>October</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={evenStyle}
                    contentArrowStyle={evenArrow}
                    date={(window.innerWidth > 1170)? "October" : null}
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    //icon={<img src = {icon3} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Roebling block party</h3>
                    
                    <p>
                    This year’s annual Roebling block party on Oct. 1 resulted in two fires, multiple damaged scooters, burned furniture and multiple calls to the Los Angeles Fire Department. Although the event often results in set fires and calls to LAFD, an attendee noted that this year felt more extreme than those in the past. 
                    </p>
                    <img src = {roeblingBlockParty} className = 'photo' alt = 'firefighters at Roebling block party'></img>
                    <p className = 'photo-byline'>(Anika Chakrabarti/Photo editor)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2021/10/02/roebling-block-party-sees-multiple-blazes-as-firefighters-law-enforcement-respond' target='_blank'>Read more about the Roebling block party</a>
                </VerticalTimelineElement>
                {(window.innerWidth < 1170)? <span className = 'date'>November</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={oddStyle}
                    contentArrowStyle={oddArrow}
                    date={(window.innerWidth > 1170)? "November" : null}
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    //icon={<img src = {icon4} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">UCLA football vs. USC</h3>
                    <p>
                    In its highest-scoring win of the season, UCLA football beat USC 62-33, marking its first win against the Trojans since 2018. Senior quarterback Dorian Thompson-Robinson scored a season-high six touchdowns during the game.  
                    </p>
                    <img src = {rivalGame} className = 'photo' alt = 'game shot from UCLA USC football game'></img>
                    <p className = 'photo-byline'>(Ashley Kenney/Daily Bruin senior staff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2021/11/20/ucla-football-takes-down-usc-in-highest-scoring-win-of-2021-season' target='_blank'>Read more about the annual UCLA-USC football game</a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={oddStyle}
                    contentArrowStyle={oddArrow}
                    date=""
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    //icon={<img src = {icon1} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Large crowds for UCLA men’s basketball vs. Villanova</h3>
                    <p>
                    UCLA men’s basketball had a high audience turnout for the top-four showdown with Villanova on Nov. 12. Anticipation for the event led to large crowds, which turned into a mob as students swarmed to get wristbands. Many students who lined up early were unable to get wristbands, and many expressed fear for their safety during the event.
                    </p>
                    <img src = {villanovaCrowd} className = 'photo' alt = 'crowd before Villanova at UCLA basketball game'></img>
                    <p className = 'photo-byline'>(Courtesy of Sam Settleman)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2021/11/13/students-fear-for-safety-express-concern-over-conditions-to-enter-pauley-pavilion' target='_blank'>Read more about the UCLA-Villanova  basketball game</a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={oddStyle}
                    contentArrowStyle={oddArrow}
                    date=""
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    //icon={<img src = {icon2} className = 'icon2'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Lecturers' proposed strike</h3>
                    <p>
                    The University Council-American Federation of Teachers authorized a two-day unfair labor practice strike against the University of California. The strike – the first from UC-AFT since 2002 – was in response to the lack of consideration and conversation regarding union bargaining rights and negotiations. However, hours before the proposed strike, the union reached an agreement with the UC, calling off the original strike and gathering in Bruin Plaza to celebrate.
                    </p>
                    <img src = {lecturerStrike} className = 'photo' alt = 'speaker surrounded by signs in support of lecturers'></img>
                    <p className = 'photo-byline'>(Lauren Man/Daily Bruin senior staff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2021/11/17/uc-lecturers-cancel-planned-strike-after-reaching-new-contract-agreement' target='_blank'>Read more about the UC-AFT strike at UCLA</a>
                </VerticalTimelineElement>
                {(window.innerWidth < 1170)? <span className = 'date'>December</span> : null}
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={evenStyle}
                    contentArrowStyle={evenArrow}
                    date={(window.innerWidth > 1170)? "December" : null}
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    //icon={<img src = {icon3} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Holiday Bowl dropout</h3>
                    <p>
                    Because of COVID-19 protocols within the program, UCLA football was unable to participate in the Holiday Bowl five hours before the scheduled kickoff. The bowl was eventually canceled when a replacement team for UCLA could not be found.
                    </p>
                    <img src = {holidayBowl} className = 'photo' alt = "UCLA's football team"></img>
                    <p className = 'photo-byline'>(Kanishka Mehra/Daily Bruin senior staff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2021/12/28/holiday-bowl-canceled-because-of-covid-19-protocols-within-ucla-football-program' target='_blank'>Read more about last year's holiday bowl</a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={evenStyle}
                    contentArrowStyle={evenArrow}
                    date=""
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    //icon={<img src = {icon4} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">COVID-19 surge</h3>
                    <p>
                    With a rise in COVID-19 cases because of the omicron variant, UCLA announced a return to online instruction until Jan. 18. This announcement came along with the new requirement that all nonexempt employees and students would be required to receive the COVID-19 booster shot and would have to complete weekly testing. UCLA later extended remote instruction until Jan. 31.
                    </p>
                    <img src = {covidSurge} className = 'photo' alt = "Royce Hall with a campus is closed sign"></img>
                    <p className = 'photo-byline'>(Ashley Kenney/Daily Bruin senior staff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2021/12/21/ucla-to-operate-remotely-for-initial-weeks-amid-rising-covid-19-cases-due-to-omicron-variant' target='_blank'>Read more about how the Omicron variant impacted UCLA</a>
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
                    //icon={<img src = {icon1} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Sit-in protest at Murphy Hall</h3>
                    <p>
                    The Disabled Student Union, the Mother Organizations coalition and the Undergraduate Students Association Council staged a protest at Murphy Hall to demand remote learning options for all classes because of the risk of COVID-19 spread and further support for marginalized students. The sit-in, which lasted more than two weeks and ended on Feb. 16, resulted in most of the student organizers’ demands being met.
                    </p>
                    <img src = {sitIn} className = 'photo' alt = 'Door to Office of the Chancellor with signs from sit-in'></img>
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
                    //icon={<img src = {icon2} className = 'icon2'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Allegations of racism within UCLA gymnastics</h3>
                    <p>
                    Some UCLA gymnasts called for the firing of then-coach Chris Waller. Senior gymnast Margzetta Frazier said that gymnasts of color on the team did not feel respected or comfortable during an appearance on a podcast in which she also called for Waller to be fired. Waller resigned in April and will be replaced by Janelle McDonald.
                    </p>
                    <img src = {gymControversy} className = 'photo' alt ='Photo of then-coach Chris Waller'></img>
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
                    //icon={<img src = {icon3} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Threat to campus by former philosophy lecturer</h3>
                    <p>
                    Former UCLA philosophy lecturer Matthew Harris sent emails to members of the philosophy department implying threats of a mass shooting Jan. 31. UCLA transitioned in-person classes to remote instruction on Feb. 1 because of the threats. Harris was taken into custody on Feb. 1 in Boulder, Colorado. After the incident, students expressed concerns over UCLA’s response to the threats. On Feb. 7, UCLA announced a task force to review the university’s response to threats to campus safety.
                    </p>
                    <img src = {breaking} className = 'photo' alt = 'Breaking News graphic'></img>
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
                    //icon={<img src = {icon4} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Super Bowl LVI</h3>
                    <p>
                    The Los Angeles Rams beat the Cincinnati Bengals 23-20 in Super Bowl LVI on Feb. 13. Leading up to the Super Bowl, the Bengals stayed on UCLA’s campus at the Meyer and Renee Luskin Conference Center.
                    </p>
                    <img src = {superbowl} className = 'photo' alt = 'Bengals walking out of Drake Stadium'></img>
                    <p className = 'photo-byline'>(David Rimer, Daily Bruin senior sßtaff)</p>
                    <a className = 'readMore' href = 'https://dailybruin.com/2022/02/12/gallery-los-angeles-rams-and-cincinnati-bengals-speak-to-press-before-super-bowl-lvi' target='_blank'>Read more about Super Bowl LVI</a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="event-odd"
                    contentStyle={evenStyle}
                    contentArrowStyle={evenArrow}
                    date=""
                    dateClassName="date"
                    iconStyle={{ background: '#A7C5C6', color: '#795663', boxShadow: '0 0 0 4px #795663, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
                    //icon={<img src = {icon1} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Protests of Russia-Ukraine war</h3>
                    <p>
                    The Russian invasion of Ukraine began Feb. 24 and is still ongoing as of publication. The same day, protesters gathered on Wilshire Boulevard to demand an end to the war.
                    </p>
                    <img src = {ukraine} className = 'photo' alt = 'Protestors in support of Ukraine'></img>
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
                    //icon={<img src = {icon2} className = 'icon2'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Lifting of mask mandate</h3>
                    <p>
                    In March, UCLA announced that it would lift the indoor masking mandate for fully vaccinated individuals starting April 11. Earlier in March, the Los Angeles County Department of Public Health lifted its indoor masking requirement.
                    </p>
                    <img src = {maskMandate} className = 'photo' alt ='masks laying on the ground'></img>
                    <p className = 'photo-byline'>(Ashley Kenney/Daily Bruin senior staff)</p>
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
                    //icon={<img src = {icon3} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Dance Marathon</h3>
                    <p>
                    Dance Marathon, a fundraiser organized by the Pediatric AIDS Coalition at UCLA, returned in person this year. The event was only 13 hours instead of its usual 26 because of COVID-19 protocols, but it raised $112,805.42.
                    </p>
                    <img src = {danceMarathon} className = 'photo' alt ='dancers at dance marathon'></img>
                    <p className = 'photo-byline'>(David Rimer/Daily Bruin senior staff)</p>
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
                    //icon={<img src = {icon4} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Protests for abortion rights</h3>
                    <p>
                    A leaked draft opinion from the United States Supreme Court indicated that the decision on Roe v. Wade may be overturned. Thousands of protestors gathered throughout Los Angeles to protest in support of legalized abortion.
                    </p>
                    <img src = {abortionProtest} className = 'photo' alt = 'protestors in support of abortion rights'></img>
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
                    //icon={<img src = {icon1} className = 'icon'></img>}
                >
                    <h3 className="vertical-timeline-element-title">Spring Sing 2022</h3>
                    <p>
                    After two virtual years, the 77th Spring Sing returned in person at the Los Angeles Tennis Center. The event featured 16 student performances, with skits by student sketch comedy group Company included between acts.
                    </p>
                    <img src = {springSing} className = 'photo' alt = 'performers at spring sing'></img>
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