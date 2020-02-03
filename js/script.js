$(document).ready(function () {
    initialState();

    function initialState() {
        console.log(localStorage.getItem('tasks'));
        if (!localStorage.getItem('tasks')) {
            $('.js-list-empty').show();
        } else {
            $('.js-list-empty').hide();
            $('.js-list').html(localStorage.getItem('tasks'));
        }
    }
    function updateStorage () {
        localStorage.setItem('tasks', $('.js-list').html());
    }
    function addTask() {
        let titleInput = $('input'),
            taskTitle = titleInput.val(),
            textInput = $('textarea'),
            taskText = textInput.val();
        console.log(taskTitle, taskText);
        if (taskTitle.length !== 0 && taskText.length !== 0) {
            $('.js-list-empty').hide();
            titleInput.removeClass('form__input_error');
            textInput.removeClass('form__input_error');
            $('.js-list').append(`
                <li class="section__item">
                    <article class="card active">
                        <header class="card__header">
                            <h3 class="card__title">${taskTitle}</h3>
                            <button class="card__remove js-card-remove" type="button" aria-label="удалить">
                                <img class="card__svg" src="img/remove.svg" alt="удалить">
                            </button>
                            <button class="card__arrow js-drop-down" type="button" aria-label="свернуть">
                                <img class="card__svg" src="img/back.svg" alt="свернуть">
                            </button>
                        </header>
                        <p class="card__content">${taskText}</p>
                    </article>
                </li>
            `);

            $('.section__item')
                .on('click', '.js-card-remove', removeTask)
                .on('click', '.js-drop-down', dropDown);

            updateStorage();
            taskTitle = titleInput.val('');
            taskText = textInput.val('');
        } else {
            titleInput.addClass('form__input_error');
            textInput.addClass('form__input_error');
        }
    }

    $('.section__item')
        .on('click', '.js-card-remove', removeTask)
        .on('click', '.js-drop-down', dropDown);

    $('.js-add-btn').on('click', addTask);

    function removeTask(e) {
        e.preventDefault();
        let tasks = $('.section__item');
        $(this).closest('.section__item').remove();

        updateStorage();

        if (tasks.length - 1 === 0) {
            $('.js-list-empty').show();
            localStorage.removeItem('tasks');
        }
    }
    function dropDown() {
        $(this).closest('.card').toggleClass('active');
    }
})
