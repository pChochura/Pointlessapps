import React from 'react';

export default function Button(props) {
  return (
    <button className="button-primary" style={props.style && props.style}>
      {props.children}
    </button>
  );
}