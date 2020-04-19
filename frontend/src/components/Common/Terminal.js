import React from 'react';
import $ from 'jquery';
import text from '../../data/terminal_output';

export default function Terminal(props) {
  return (
    <p className="terminal">
      <span className="terminal-output" data-output={props.data_output}></span>
      <span className="cursor">_</span>
    </p>
  );
}

$(() => {
  const drawLetter = letter => {
    $('.terminal-output').html($('.terminal-output').html() + letter);
  }

  const parseOutput = data => {
    const lines = data.split('\n');
    let offsetTime = 0;
    lines.forEach(line => {
      if (line && !line.startsWith('#')) {
        const values = line.split('|');
        const perLetter = values[0].startsWith('/');
        const time = parseInt(perLetter ? values[0].substring(1) : values[0]);
        const letters = perLetter ? values[1].split('') : [values[1]];
        letters.forEach(letter => {
          setTimeout(drawLetter, offsetTime += time, letter);
        });
      }
    });
    // setTimeout(prepareCallback, offsetTime);
  }

  // const terminal_output = $('.terminal-output');

  parseOutput(text);

  // const prepareCallback = () => {
  //   $(document).keyup(event => {
  //     if (event.keyCode == 13) {
  //       const method = $('.terminal-output').attr('data-input-callback');
  //       window[method](event);
  //     }
  //   });
  // }
});