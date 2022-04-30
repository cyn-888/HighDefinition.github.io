import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCalendarAlt, faHotdog } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import FadeInSection from '../components/fadeinsection';
import Collapse from '../components/collapse';

export default function Events() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  return (
    <>
      <Header title="Events" page="Events" description="Join us at our various events!" />
      
      <div className="Events">
        <FadeInSection><div className="section">
          <Title name="Upcoming or Current Events" />
          <div className="flex"><iframe src="https://calendar.google.com/calendar/embed?src=9l8bq35qskdac9jls6a0bf04gc%40group.calendar.google.com&ctz=America%2FLos_Angeles&showCalendars=0&showTabs=0&showPrint=0&color=%23000000" style={{borderWidth: 0}} width="800" height="600" frameborder="0" scrolling="no"></iframe></div>


          <br />

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div style={{display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column'}} className="upcomingEvents">
            {/*<span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href=""><b>World Championship</b>: April 20 - 24</a></span>*/}
          </div></div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="Past Events" />
          <div id="outreaches">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20}}><a className="purplebutton" href="https://www.youtube.com/c/EverstemEducation" target="_blank">Watch Our CWP Events Here</a></div>
            
            <div className="eventsection">STEM Advocacy</div>
            <div className="eventsection">CADTable</div>
            <div className="eventsection">Washington Tech Invitationals (Co-Hosted with Saints Robotics)</div>
            <div className="eventsection">Robotics Reactor Meetup</div>
            <div className="eventsection">FTC Programming Bootcamp</div>
            <div className="eventsection">FIRST Demonstration</div>
            <div className="eventsection">Chipotle Fundraiser</div>
            <div className="eventsection">Python Workshop</div>
            <div className="eventsection">
              <Collapse title="Connecting with Professionals">
                <br />
                {width < 800 ? (
                  <>
                    <ul style={{fontWeight: 300}}>
                      <li>Self Taught Airplane Building and Pilot</li>
                      <li>Wearable Technology Workshop</li>
                      <li>Intelligent Transportation Systems</li>
                      <li>Careers at iRobot</li>
                      <li>Careers in the Gaming Industry</li>
                      <li>Startup Life Cycle and Business Funding</li>
                      <li>Robotics Industry in Japan</li>
                      <li>The Art of Business and Inventing</li>
                      <li>Mixed Reality & Robotics</li>
                      <li>Robotics in Medicine</li>
                      <li>Business and Entrepreneurship in Robotics</li>
                      <li>Gravitational Waves in Astronomy</li>
                      <li>AI Applications in Transportation Engineering</li>
                      <li>Connected Automated Vehicles</li>
                      <li>Leveraging Scale Designs for Connected Automated Vehicles Research</li>
                      <li>Artificial Intelligence and Robotics</li>
                      <li>Science & Education: Indoors and Out</li>
                      <li>IP Protection in Robotics and Smart Transportation</li>
                      <li>Business at Everyday Robots</li>
                    </ul>
                  </>   
                ) : (
                  <table id="professionals">
                    <tr id="firstrow">
                      <th>EVENT</th>
                      <th>PROFESSIONALS</th>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Self Taught Airplane Building and Pilot</td>
                      <td>Walter Haag</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Wearable Technology Workshop</td>
                      <td>Kitty Yeung</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Computer Vision for Intelligent Transportation Systems</td>
                      <td>Ruimin Ke</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Careers at iRobot</td>
                      <td>iRobot</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Careers in the Gaming Industry</td>
                      <td>Robert Neckorcuk & Kirk Williford</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Startup Life Cycle and Business Funding</td>
                      <td>Howie Xu</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Robotics Industry in Japan</td>
                      <td>Shiyu Xia</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>The Art of Business and Inventing</td>
                      <td>Ryfka Schafer</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Mixed Reality & Robotics</td>
                      <td>Jeff Delmerico</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Robotics in Medicine</td>
                      <td>Chumyan Wu</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Business and Entrepreneurship in Robotics</td>
                      <td>Fab Qian, Meera Rajagopalan, & Hannah Liu</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Gravitational Waves in Astronomy</td>
                      <td>Gwynne Crowder</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>AI Applications in Transportation Engineering</td>
                      <td>Yinhai Wang</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Connected Automated Vehicles</td>
                      <td>Xiaopeng (Shaw) Li</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Leveraging Scale Designs for Connected Automated Vehicles Research</td>
                      <td>Osama Osman</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Artificial Intelligence and Robotics</td>
                      <td>Anne Kao</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Science & Education: Indoors and Out</td>
                      <td>Laura LeBlanc</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>IP Protection in Robotics and Smart Transportation</td>
                      <td>Shaobin Zhu</td>
                    </tr>

                    <tr style={{fontWeight: 300}}>
                      <td>Business at Everyday Robots</td>
                      <td>Jasmine Lawrence</td>
                    </tr>
                  </table>
                )}
              </Collapse>
            </div>
          </div>
        </div></FadeInSection>
      </div>
      
      <Footer />
    </>
  );
};