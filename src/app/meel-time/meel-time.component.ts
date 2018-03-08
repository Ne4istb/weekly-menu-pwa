import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course, MealTime} from '../models';

@Component({
  selector: 'app-meel-time',
  templateUrl: './meel-time.component.html',
  styleUrls: ['./meel-time.component.css']
})
export class MealTimeComponent implements OnInit {

  @Input() mealTime: MealTime;
  @Input() courses: Course[];

  @Output() updateCourses = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addCourse() {
    if (!this.courses)
      this.courses = [];

    this.courses.push(new Course());

    this.save();
  }

  removeCourse(event) {
    this.courses.splice(event, 1);
    this.save();
  }

  updateCourse(event: any) {
    this.courses.splice(event.index, 1, event.course);
    this.save();
  }

  private save() {
    this.updateCourses.emit({mealType: this.mealTime.type, courses: this.courses});
  }
}

