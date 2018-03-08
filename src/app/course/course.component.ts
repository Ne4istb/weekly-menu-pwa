import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../models';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {RecommendationService} from '../recommendation.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;
  @Input() index: number;

  @Output() update = new EventEmitter();
  @Output() remove = new EventEmitter();

  nameControl: FormControl = new FormControl();

  options = this.recommendationService.getReccomendations();

  filteredOptions: Observable<string[]>;

  constructor(private recommendationService: RecommendationService) {
  }

  ngOnInit() {

    console.log('this.course', this.course);
    this.nameControl.setValue(this.course.name);

    const nameChanges$ = this.nameControl.valueChanges;

    this.filteredOptions = nameChanges$
      .pipe(map(val => this.filter(val)));

    nameChanges$.subscribe(value => this.onNameChanged(value));
  }

  filter(val: string): string[] {
    if (val.length < 3) return [];
    return this.options.filter(option => option.toLowerCase().includes(val.toLowerCase()));
  }

  changeForBabyFlag() {
    this.course.forBaby = !this.course.forBaby;
    this.save();
  }

  private save() {
    this.update.emit({index: this.index, course: this.course});
  }

  private onNameChanged(value) {
    this.course.name = value;
    this.save();
  }
}

