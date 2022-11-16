export default class Calendar {
  constructor(element) {
    this.parentEl = element;
    this.element = this.create();
  }

  static get calendarFrame() {
    return `
    <div class="calendar-header">
      <button class="btn-left"><img class="month-img" src="./img/less_than_icon.png" alt="Знак меньше"></button>
      <span class="month-name"></span>
      <button class="btn-right"><img class="month-img" src="./img/greater_than_icon.png" alt="Знак больше"></button>
    </div>

    <div class="calendar-body">
      <div class="calendar-body-header">
        <div class="day day1 days-name">Пн</div>
        <div class="day day2 days-name">Вт</div>
        <div class="day day3 days-name">Ср</div>
        <div class="day day4 days-name">Чт</div>
        <div class="day day5 days-name">Пт</div>
        <div class="day day6 days-name">Сб</div>
        <div class="day day7 days-name">Вс</div>
      </div>
    </div>
    `;
  }

  create() {
    const calendar = document.createElement('div');
    calendar.classList.add('calendar');

    const frame = Calendar.calendarFrame;
    calendar.insertAdjacentHTML('beforeend', frame);

    const month = calendar.querySelector('.month-name');
    // moment.locale('ru');
    month.textContent = moment().format('MMMM');

    console.log(calendar);
    console.dir(this.parentEl);
    return calendar;
  }

  show() {
    this.parentEl.parentElement.appendChild(this.element);

    const { offsetTop: top, offsetLeft: left, offsetWidth: width, offsetHeight: height } = this.parentEl;
    this.element.style.left = `${left + width - this.element.offsetWidth}px`;
    this.element.style.top = `${top + height}px`;

    const prev = this.calendar.querySelector('.btn-prev');
    const next = this.calendar.querySelector('.btn-next');

    prev.addEventListener('click', this.onPrev);
    next.addEventListener('click', this.onNext);

    console.log(moment().format());
  }

  hide() {

  }

  setNowDay() {

  }

  drawDays() {

  }

  onPrev() {

  }

  onNext() {

  }
}
