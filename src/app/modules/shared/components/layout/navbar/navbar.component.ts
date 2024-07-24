import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { State } from '../../../../../store/models/state-model';

import { clearUserTokenAndData } from '../../../../..//store/actions/auth-action';
import { setNavbarHeight } from 'src/app/store/actions/navbar-action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('logoutModal') logoutModal: any;

  isDefaultStyle = false;

  activeTab = 'Home';

  navTabs = [
    { title: 'Home', routeTo: '/home' },
    { title: 'Shop', routeTo: '/shop' },
    { title: 'Contact Us', routeTo: '/contact-us' },
  ];

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog,
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar?.offsetHeight ?? 0;

    this.store.dispatch(setNavbarHeight({ navbar: { height: navbarHeight } }));

    this.router.events.subscribe(() => {
      const navbar = document.getElementById('navbar');

      let isDefaultNavbarPath: Boolean = false;

      ['/contact-us', '/details'].forEach((path) => {
        if (this.router.url.includes(path)) {
          isDefaultNavbarPath = true;
        }
      });

      if (isDefaultNavbarPath) {
        this.isDefaultStyle = true;
        this.renderer.addClass(navbar, 'position-relative');
        this.renderer.addClass(navbar, 'defaultNavbar');
      } else {
        this.isDefaultStyle = false;
        this.renderer?.removeClass(navbar, 'defaultNavbar');
      }
    });

    this.renderer.listen('window', 'scroll', () => {
      const navbar = document.getElementById('navbar');

      if (window.scrollY > navbarHeight || this.isDefaultStyle) {
        this.renderer.addClass(navbar, 'position-fixed');
        this.renderer.addClass(navbar, 'defaultNavbar');
      } else {
        this.renderer?.removeClass(navbar, 'defaultNavbar');
      }
    });
  }

  openDialog() {
    this.dialog.open(this.logoutModal);
  }

  updateActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  logout(): void {
    this.store.dispatch(clearUserTokenAndData());

    this.dialog.closeAll();
  }

  ngOnDestroy(): void {}
}
