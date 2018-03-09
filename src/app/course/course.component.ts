import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../models';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';
import {combineLatest} from 'rxjs/operators';
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

  private options = this.recommendationService.recommendations$;

  nameControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private recommendationService: RecommendationService) {
  }

  ngOnInit() {

    console.log('this.course', this.course);
    this.nameControl.setValue(this.course.name);

    const nameChanges$ = this.nameControl.valueChanges;

    this.filteredOptions = nameChanges$
      .pipe(combineLatest(this.options, this.filter));

    nameChanges$.subscribe(value => this.onNameChanged(value));
  }

  filter(value: string, options: string[]): string[] {
    if (value.length < 3) return [];
    return options.filter(option => option.toLowerCase().includes(value.toLowerCase()));
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
  }

  onBlur() {
    if (!this.course.name) return;

    this.save();
    this.recommendationService.addRecommendation(this.course.name);
  }
}

