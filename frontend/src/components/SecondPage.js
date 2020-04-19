import React from 'react';
import tridentLine from '../images/tridentLine.svg';
import iconExperience from '../images/iconExperience.svg';
import iconProfessionalism from '../images/iconProfessionalism.svg';
import iconReliability from '../images/iconReliability.svg';
import Card from './Card';

export default function SecondPage() {
  return (
    <div className="page column">
      <h1 className="centered">
        What is so interesting about me?
      </h1>
      <img src={tridentLine} alt="Line" className="centered trident"/>
      <div className="row">
        <Card className="column square-small spread">
          <span className="centered" styles="font-size: 10px">Experience</span>
          <img src={iconExperience} alt="Line" className="centered"/>
        </Card>
        <Card className="column square-small spread">
          <span className="centered" styles="font-size: 10px">Professionalism</span>
          <img src={iconProfessionalism} alt="Line" className="centered"/>
        </Card>
        <Card className="column square-small spread">
          <span className="centered" styles="font-size: 10px">Reliability</span>
          <img src={iconReliability} alt="Line" className="centered"/>
        </Card>
      </div>
    </div>
  );
}