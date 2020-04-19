import React from 'react';
import TopBar from './TopBar';
import LandingPage from './LandingPage';
import SecondPage from './SecondPage';

export default function App() {
  return (
    <div>
      <TopBar className="dark">
        <a className="navbar-link" href="./">home</a>
        <a className="navbar-link" href="./projects">projects</a>
        <a className="navbar-link" href="./about">about</a>
        <a className="navbar-link logo" href="./">PointlessApps</a>
      </TopBar>
      <LandingPage />
      <SecondPage />
    </div>
  );
}