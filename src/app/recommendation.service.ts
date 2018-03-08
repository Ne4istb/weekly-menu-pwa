import { Injectable } from '@angular/core';

@Injectable()
export class RecommendationService {

  constructor() { }

  getReccomendations(): string[]{
    return [
      'One',
      'Two',
      'Three',
      'OneTwo'
    ];
  }
}
