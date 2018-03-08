export enum DayOfWeek {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday'
}

export enum Meal {
  Breakfast = 'breakfast',
  Brunch = 'brunch',
  Lunch = 'lunch',
  Afternoon = 'afternoon',
  Dinner = 'dinner'
}

export interface MealTime {
  name: string;
  time: string;
  type: Meal;
}

export class Course {
  name = '';
  forBaby: boolean;
}

export interface Day {
  breakfast: Course[];
  brunch: Course[];
  lunch: Course[];
  afternoon: Course[];
  dinner: Course[];
}

export interface Week {
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
  sunday: Day;
}

export interface Menu {
  previous: Week;
  current: Week;
  next: Week;
}
