import React from 'react';
import iconNotFound from '../../images/iconNotFound.svg';
import Button from '../Common/Button';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <img src={iconNotFound} alt="Sorry. Not found!" className="centered iconNotFound" style={{ width: '40%' }} />
      <h1 className="centered">Sorry. Not found!</h1>
      <Link to="/">
        <Button style={{ width: '30%', flexBasis: 'auto' }}>
          Take me back!
        </Button>
      </Link>
    </div>
  );
}