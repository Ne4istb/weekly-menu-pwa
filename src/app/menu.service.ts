import {Injectable} from '@angular/core';
import {Menu} from './models';
import {LocalStorageService} from 'ngx-localstorage';

@Injectable()
export class MenuService {

  private key = 'menu';
  constructor(private storageService: LocalStorageService) {
  }

  getMenu(): Menu {

    const menu = JSON.parse(this.storageService.get(this.key));

    return menu || {
      current: null,
      next: null,
      previous: null
    };
  }

  save(menu: Menu) {
    console.log('menu', menu);
    this.storageService.set(this.key, JSON.stringify(menu));
  }
}
