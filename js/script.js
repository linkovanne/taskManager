$('.js-drop-down').on('click', function () {
    let card = $(this).closest('.card');

    // console.log('dropdown');
    card.toggleClass('active');
        // .find('.card__content').toggle(400);
});

$('.js-card-remove').on('click', function () {
    // console.log('remove');
});

let listStyling = function (toHide, toPlace) {
    toHide.css({
        display: 'none',
    });
    toPlace.css({
        display: 'block',
    });
};

$(function () {
    let taskEmpty = $('.js-list-empty');
    let taskFilled = $('.js-list-filled');
    let taskCount = taskFilled.children.length;

    if (taskCount > 0) {
        listStyling(taskEmpty, taskFilled);
    } else {
        listStyling(taskFilled, taskEmpty);
    }
});
