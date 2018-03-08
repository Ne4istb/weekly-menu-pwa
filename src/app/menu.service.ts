import {Injectable} from '@angular/core';
import {Menu} from './models';
import {LocalStorageService} from 'ngx-localstorage';

@Injectable()
export class MenuService {

  constructor(private storageService: LocalStorageService) {
  }

  getMenu(): Menu {

    const menu = JSON.parse(this.storageService.get('menu'));

    return menu || {
      current: null,
      next: null,
      previous: null
    };
  }

  save(menu: Menu) {
    console.log('menu', menu);
    this.storageService.set('menu', JSON.stringify(menu));
  }
}
