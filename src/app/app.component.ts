import {Component, OnInit} from '@angular/core';
import {Menu} from './models';
import {MenuService} from './menu.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

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

  constructor(private menuService: MenuService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/add_icon.svg'))
      .addSvgIcon('person', sanitizer.bypassSecurityTrustResourceUrl('assets/person_icon.svg'))
      .addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('assets/close_icon.svg'))
      .addSvgIcon('child', sanitizer.bypassSecurityTrustResourceUrl('assets/child_icon.svg'));
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
