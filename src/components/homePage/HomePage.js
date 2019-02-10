import React, { Component } from 'react';
import eoc from '../../Img/eoc.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div class="page-header">
          <h1>Welcome to the Bibb County Georgia ARES.</h1>
        </div>
        <div align="left">
          <p>
            <img
              border="0"
              height="200"
              src={eoc}
              width="160"
              alt="EOC"
              align="left"
            />{' '}
            Bibb County GA Amateur Radio Emergency Service{' '}
            <a href="http://www.arrl.org/ares">ARES</a> is a group of dedicated
            Amateur Radio volunteers "Hams" that provide emergency
            communications{' '}
            <a href="http://www.arrl.org/emergency-communications">EmComm</a>{' '}
            for various public safety agencies in the Middle GA area in a time
            of disaster and infrastructure failure. Our National Weather Service{' '}
            <a href="http://www.weather.gov">NWS</a> trained members also
            provide weather related information for the Central Georgia Area
            through the NWS{' '}
            <a href="http://www.weather.gov/skywarn/">SkyWarn</a> spotter
            program.
          </p>
          <p>
            The{' '}
            <a href="http://www.maconbibb.us/emergency-management-agency/">
              Macon-Bibb County Emergency Management Agency
            </a>{' '}
            Spencer Hawkins - Macon/Bibb EMA Director provides us with state of
            the art amateur radio equipment at the Emergency Operations Center
            (EOC) located in beautiful downtown Macon.<span> </span>This
            equipment enables us to establish communications with Georgia
            Emergency Management Agency{' '}
            <a href="http://www.gema.state.ga.us">GEMA</a> and various other
            state and national organizations during the time of need.
            <span> </span>We also work in conjunction with the EMA to staff the
            EOC and its mobile command post for communications with our
            volunteers allowing the EMA staff to concentrate on damage
            assessments and other important duties assisting the public in the
            time of need.
          </p>
          <p>
            Other agencies we serve are the{' '}
            <a href="http://www.bibbsheriff.org/">
              Macon-Bibb County Sheriff's Office
            </a>
            ,{' '}
            <a href="http://www.maconbibb.us/fire-department/">
              Macon-Bibb Co. Fire Department
            </a>
            ,{' '}
            <a href="https://www.facebook.com/MaconBibbEMA">
              Macon-Bibb Emergency Management Agency Facebook page
            </a>
            , various EMS agencies, and the{' '}
            <a href="http://www.centralga-redcross.org">American Red Cross</a>.
            <span> </span>Our volunteers also provide emergency communications
            for hospitals located in Region 5 or (F) area when needed.
          </p>
          <p>
            Anyone holding a valid FCC issued{' '}
            <a href="http://wireless.fcc.gov/services/index.htm?job=service_home&amp;id=amateur">
              Amateur Radio license
            </a>{' '}
            in Bibb County, or surrounding counties, is encouraged to
            participate and become a member of the{' '}
            <a href="http://www.bibbgaares.org/teams">
              Macon-Bibb County ARES team
            </a>
            .<span> </span>To learn more contact <i>Matt Butterworth</i> W4JMB,
            the Emergency Coordinator for Bibb County ARES.
          </p>
          <p>When all else fails-- Amateur Radio works!</p>
        </div>
      </div>
    );
  }
}
export default HomePage;
