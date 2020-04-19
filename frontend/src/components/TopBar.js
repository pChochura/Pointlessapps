import React from 'react';

export default function TopBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children.map((Child, index) => (
          <li className="navbar-item" key={index}>
            {Child}
          </li>
        ))}
      </ul>
    </nav>
  );
}

document.onscroll = () => {
  const classes = document.getElementsByClassName('navbar')[0].classList;
  if (window.pageYOffset === 0) {
    classes.remove('shadow');
    classes.remove('background');
  } else {
    classes.add('shadow');
    classes.add('background');
  }
};