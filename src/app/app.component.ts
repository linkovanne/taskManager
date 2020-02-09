import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<div class="container row">
        <section class="section section_first">
            <h2 class="section__title">Список дел:</h2>
            <p class="section__no-list js-list-empty">Список пуст...</p>
            <ul class="section__list js-list">
            </ul>
        </section>
        <section class="section section_second">
            <h2 class="section__title">Добавить новое дело</h2>
            <form class="section__form form">
                <label class="form__label">
                    * Название
                    <input class="form__input" type="text" name="taskTitle">
                </label>
                <label class="form__label">
                    * Описание
                    <textarea class="form__input form__input_lg" name="taskDescr" cols="30" rows="10"></textarea>
                </label>
                <button class="section__btn js-add-btn" type="button">Добавить дело</button>
            </form>
        </section>
    </div>`
})

export class AppComponent {
    
}