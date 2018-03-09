import {Injectable} from '@angular/core';
import {Menu} from './models';
import {LocalStorageService} from 'ngx-localstorage';

@Injectable()
export class MenuService {

  private key = 'menu';
  private dateKey = 'startWeekDate';

  constructor(private storageService: LocalStorageService) {
  }

  getMenu(): Menu {

    let menu = JSON.parse(this.storageService.get(this.key)) || {
      current: null,
      next: null,
      previous: null
    };

    if (this.isWeekChange())
      menu = this.shiftWeeks(menu);

    return menu;
  }

  save(menu: Menu) {
    console.log('menu', menu);
    this.storageService.set(this.key, JSON.stringify(menu));
  }

  private shiftWeeks(menu: Menu) {
    const shiftedMenu = <Menu>{
      previous: menu.current,
      current: menu.next,
      next: null
    };

    const newDate = this.calculateCurrentWeekMondayDate();
    this.storageService.set(this.dateKey, JSON.stringify(newDate));

    return shiftedMenu;
  }

  private isWeekChange() {
    const storedDate = this.getCurrentWeekMondayDate();
    const calculatedDate = this.calculateCurrentWeekMondayDate();

    return !storedDate || calculatedDate > storedDate;
  }

  private getCurrentWeekMondayDate() {
    return JSON.parse(this.storageService.get(this.dateKey));
  }

  private calculateCurrentWeekMondayDate() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), (date.getDate() - (date.getDay() - 1)));
  }
}
