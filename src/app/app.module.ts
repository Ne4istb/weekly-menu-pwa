import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';


import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {WeekComponent} from './week/week.component';
import {DayComponent} from './day/day.component';
import {MealTimeComponent} from './meel-time/meel-time.component';
import {CourseComponent} from './course/course.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule,
  MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuService} from './menu.service';
import {Menu} from './models';
import {RecommendationService} from './recommendation.service';
import {LocalStorageService, NgxLocalStorageModule} from 'ngx-localstorage';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    DayComponent,
    MealTimeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLocalStorageModule.forRoot({prefix: 'weeklyMenu'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [MenuService, RecommendationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
