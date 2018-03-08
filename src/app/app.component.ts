import {Component, OnInit} from '@angular/core';
import {Menu} from './models';
import {MenuService} from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menu: Menu;

  ngOnInit(): void {
    this.menu = this.menuService.getMenu();
  }

  constructor(private menuService: MenuService) {
  }

  updateWeek(event: any, weekName: string) {
    this.menu[weekName] = event;
    this.menuService.save(this.menu);
  }

  getDefaultWeek() {
    return {
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null,
      sunday: null
    };
  }
}
