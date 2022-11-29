import Calendar from './Calendar';

export default class TicketSearchForm {
  constructor(element) {
    this.element = element;
    this.blockRoundtrip = element.querySelector('.block-roundtrip');
    this.calendar = new Calendar();

    this.onRoundtrip = this.onRoundtrip.bind(this);
  }

  static get date() {
    return `
    <div class="block-date">
      <label for="date-there" class="">Дата</label>
      <input id="date-there" class="input" type="date" required>
    </div>
    `;
  }

  static get dateRoundtrip() {
    return `
    <div class="block-date-roundtrip">
      <div class="block-date-there">
        <label for="date-there" class="">Туда:</label>
        <input id="date-there" class="input" type="date" required>
      </div>
      <div class="block-date-back">
        <label for="date-back" class="">Обратно:</label>
        <input id="date-back" class="input" type="date" required>
      </div>
    </div>
    `;
  }

  init() {
    this.show('date');

    const roundtrip = document.getElementById('roundtrip');
    roundtrip.addEventListener('change', this.onRoundtrip);

    this.calendar.init();
  }

  onRoundtrip(e) {
    this.blockRoundtrip.nextElementSibling.remove();

    if (e.target.checked) {
      this.show('dateRoundtrip');
    } else {
      this.show('date');
    }

    this.calendar.init();
  }

  show(funcName) {
    const elem = TicketSearchForm[funcName];
    this.blockRoundtrip.insertAdjacentHTML('afterend', elem);
  }
}
