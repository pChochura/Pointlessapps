function input(event: { keyCode: number; }) {
    if (event.keyCode == 13) {
        window.location.pathname = '/projects';
    }
}