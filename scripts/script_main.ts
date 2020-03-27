$(document).scroll((event) => {
    $('.navbar').toggleClass('shadow', $(document).scrollTop() !== 0);
});