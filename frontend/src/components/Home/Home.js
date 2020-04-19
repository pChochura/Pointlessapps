import React from 'react';
import LandingPage from './LandingPage';
import SecondPage from './SecondPage';
import MainTopBar from '../TopBar/MainTopBar';

export default function Home() {
  return (
    <div>
      <MainTopBar />
      <LandingPage />
      <SecondPage />
    </div>
  );
}