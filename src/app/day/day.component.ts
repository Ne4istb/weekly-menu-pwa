import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Day, Meal, MealTime} from '../models';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day: Day;

  @Output() update = new EventEmitter();

  mealTimes: MealTime[] = [
    {name: 'Завтрак', time: '10:00', type: Meal.Breakfast},
    {name: 'Завтрак 2', time: '12:00', type: Meal.Brunch},
    {name: 'Обед', time: '15:00', type: Meal.Lunch},
    {name: 'Полудник', time: '17:00', type: Meal.Afternoon},
    {name: 'Ужин', time: '20:00', type: Meal.Dinner}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  updateCourses(event) {
    this.day[event.mealType] = event.courses;
    this.update.emit(this.day);
  }
}
