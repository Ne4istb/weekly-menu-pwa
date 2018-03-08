import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DayOfWeek, Week} from '../models';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  @Input() week: Week;

  @Output() update = new EventEmitter();

  selectedDay: DayOfWeek;

  days = [
    {value: DayOfWeek.Monday, viewValue: 'Понедельник'},
    {value: DayOfWeek.Tuesday, viewValue: 'Вторник'},
    {value: DayOfWeek.Wednesday, viewValue: 'Среда'},
    {value: DayOfWeek.Thursday, viewValue: 'Четверг'},
    {value: DayOfWeek.Friday, viewValue: 'Пятница'},
    {value: DayOfWeek.Saturday, viewValue: 'Суббота'},
    {value: DayOfWeek.Sunday, viewValue: 'Воскресенье'}
  ];

  constructor() {
  }

  ngOnInit() {
    this.selectedDay = WeekComponent.toDayOfWeek(new Date().getDay());
  }

  updateSelectedDay(event) {
    this.week[this.selectedDay] = event;
    this.update.emit(this.week);
  }

  static toDayOfWeek(day: number) {
    switch (day) {
      case 1:
        return DayOfWeek.Monday;
      case 2:
        return DayOfWeek.Tuesday;
      case 3:
        return DayOfWeek.Wednesday;
      case 4:
        return DayOfWeek.Thursday;
      case 5:
        return DayOfWeek.Friday;
      case 6:
        return DayOfWeek.Saturday;
      case 7:
        return DayOfWeek.Sunday;
    }
  }

  getDefaultDay() {
    return {
      breakfast: null,
      brunch: null,
      lunch: null,
      afternoon: null,
      dinner: null
    };
  }
}

