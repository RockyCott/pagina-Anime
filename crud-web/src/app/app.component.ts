import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router } from '@angular/router';
import { NavList, NavListItem } from './models/sidebar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NavbarComponent) child: any;
  title = 'crud-web';
  width: any;
  height: any;
  mode = 'side';
  open = 'true';
  navList: NavList[];
  constructor(public ngZone: NgZone, public route: Router) {
    this.navList = [
      {
        categoryName: 'User config',
        icon: 'person',
        dropDown: false,
        subCategory: [
          {
            subCategoryName: 'Submenu',
            subCategoryLink: '/link',
            visable: true,
          },
        ],
      },
    ];
    this.changeMode();
    window.onresize = (e) => {
      ngZone.run(() => {
        this.changeMode();
      });
    };
  }

  ngOnInit() {}

  changeMode() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (this.width <= 800) {
      this.mode = 'over';
      this.open = 'false';
    }
    if (this.width > 800) {
      this.mode = 'side';
      this.open = 'true';
    }
  }
}


