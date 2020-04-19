import React from 'react';
import TopBar from './TopBar';
import { Link } from 'react-router-dom';

export default function MainTopBar() {
  return (
    <TopBar>
      <Link className="navbar-link" to="/">home</Link>
      <Link className="navbar-link" to="/projects">projects</Link>
      <Link className="navbar-link" to="/about">about</Link>
      <Link className="navbar-link logo" to="/">PointlessApps</Link>
    </TopBar>
  );
}