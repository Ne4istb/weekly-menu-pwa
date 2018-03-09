import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-localstorage';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class RecommendationService {

  private key = 'recommendations';

  public recommendations$: BehaviorSubject<string[]>;

  constructor(private storageService: LocalStorageService) {
    this.recommendations$ = new BehaviorSubject<string[]>([]);
    this.updateRecommendations();
  }

  private updateRecommendations() {
    const recommendations = JSON.parse(this.storageService.get(this.key)) || [];
    this.recommendations$.next(recommendations);
  }

  addRecommendation(value: string) {
    const recommendations = this.recommendations$.getValue();

    if (!value || value.length < 3 || recommendations.includes(value)) return;

    recommendations.push(value);

    this.storageService.set(this.key, JSON.stringify(recommendations));

    this.updateRecommendations();
  }
}
