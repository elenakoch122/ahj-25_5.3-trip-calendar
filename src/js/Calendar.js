import moment from "moment/moment";

moment.locale('ru');

export default class Calendar {
  constructor() {
    this.setDateBack = this.setDateBack.bind(this);
  }

  init() {
    this.dateThere = document.getElementById('date-there');
    this.dateBack = document.getElementById('date-back');

    this.dateThere.min = moment().format('YYYY-MM-DD');

    if (this.dateBack) {
      this.dateBack.min = moment().add(1, 'day').format('YYYY-MM-DD');
      this.dateThere.addEventListener('change', this.setDateBack);
    }
  }

  setDateBack() {
    this.dateBack.min = moment(this.dateThere.value, 'YYYY-MM-DD').add(1, 'day').format('YYYY-MM-DD');

    if (this.dateBack.value) {
      const idThere = Number(moment(this.dateThere.value, 'YYYY-MM-DD').format('x'));
      const idBack = Number(moment(this.dateBack.value, 'YYYY-MM-DD').format('x'));

      if (idBack < idThere) {
        this.dateBack.value = this.dateBack.min;
      }
    }
  }
}
