$(() => {
    const terminal_output = $('.terminal-output');
    $.get(terminal_output.attr('data-output'), (data) => {
        parseOutput(data);
    });
    const drawLetter = (letter) => {
        $('.terminal-output').html($('.terminal-output').html() + letter);
    };
    const parseOutput = (data) => {
        const lines = data.split('\n');
        let offsetTime = 0;
        lines.forEach((line) => {
            if (line && !line.startsWith('#')) {
                const values = line.split('|');
                const perLetter = values[0].startsWith('/');
                const time = parseInt(perLetter ? values[0].substring(1) : values[0]);
                const letters = perLetter ? values[1].split('') : [values[1]];
                letters.forEach((letter) => {
                    setTimeout(drawLetter, offsetTime += time, letter);
                });
            }
        });
        setTimeout(prepareCallback, offsetTime);
    };
    const prepareCallback = () => {
        $(document).keyup((event) => {
            if (event.keyCode == 13) {
                const method = $('.terminal-output').attr('data-input-callback');
                window[method](event);
            }
        });
    };
});
