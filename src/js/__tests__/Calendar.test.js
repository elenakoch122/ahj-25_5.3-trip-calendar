import moment from 'moment/moment';
import Calendar from '../Calendar';

document.body.innerHTML = `
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

describe('Calendar class', () => {
  const calendar = new Calendar();
  calendar.init();
  calendar.dateThere.value = calendar.dateThere.min;

  test('minimal date there should be more or equal today date', () => {
    const now = Number(moment().startOf('date').format('x'));
    const there = Number(moment(calendar.dateThere.value, 'YYYY-MM-DD').format('x'));

    expect(there >= now).toBeTruthy();
  });

  test('minimal date back should be more than date there', () => {
    const there = Number(moment(calendar.dateThere.value, 'YYYY-MM-DD').format('x'));
    const back = Number(moment(calendar.dateBack.min, 'YYYY-MM-DD').format('x'));

    expect(back > there).toBeTruthy();
  });
});
