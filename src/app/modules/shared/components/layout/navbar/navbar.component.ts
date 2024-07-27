import {
  Component,
  OnDestroy,
  Renderer2,
  ViewChild,
  OnInit,
} from '@angular/core';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import { State } from '../../../../../store/models/state-model';

import { clearUserTokenAndData } from '../../../../..//store/actions/auth-action';
import { BasketSelector } from 'src/app/store/selectors/basket-selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('logoutModal') logoutModal: any;

  isBannerPage = true;
  isLoggedInUser = false;

  navbarHeight = 0;

  totalCartItems = 0;

  private routerEventsSubscription!: Subscription;
  private scrollEventListener!: () => void;

  navTabs = [
    { title: 'Home', routeTo: '/home' },
    { title: 'Shop', routeTo: '/shop' },
    { title: 'Categories', routeTo: '/categories' },
    { title: 'About', routeTo: '/about-us' },
    { title: 'Contact', routeTo: '/contact-us' },
  ];

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedInUser = localStorage.getItem('token') ? true : false;

    this.getTotalCartItems();
    this.setupNavbarHeight();
    this.subscribeToEvents();
  }

  setupNavbarHeight(): void {
    const navbar = document.getElementById('navbar');

    if (navbar) {
      this.navbarHeight = navbar.offsetHeight;
    }
  }

  subscribeToEvents(): void {
    // Subscribe to router events to update navbar style based on route
    this.routerEventsSubscription = this.routerEventsSubscription =
      this.router.events.subscribe(() => {
        const navbar = document.getElementById('navbar');

        if (navbar) {
          const currentPath = this.router.url;

          this.isBannerPage = ![
            '/contact-us',
            '/details',
            '/categories',
            'about-us',
          ].some((path) => currentPath.includes(path));

          if (this.isBannerPage) {
            this.handleBannerPageScroll();
          } else {
            this.handleNonBannerPageScroll();
          }
        }
      });

    // Subscribe to scroll events to update navbar style based on scroll position
    this.scrollEventListener = this.renderer.listen('window', 'scroll', () => {
      if (this.isBannerPage) {
        this.handleBannerPageScroll();
      } else {
        this.handleNonBannerPageScroll();
      }
    });
  }

  getTotalCartItems(): void {
    this.store.select(BasketSelector).subscribe({
      next: ({ totalItemsCount }) => (this.totalCartItems = totalItemsCount),
    });
  }

  handleBannerPageScroll(): void {
    const navbar = document.getElementById('navbar');

    if (navbar) {
      if (window.scrollY + 20 > this.navbarHeight) {
        this.renderer.addClass(navbar, 'position-fixed');
        this.renderer.addClass(navbar, 'defaultNavbar');
      } else {
        this.renderer.removeClass(navbar, 'defaultNavbar');
      }
    }
  }

  handleNonBannerPageScroll(): void {
    const navbar = document.getElementById('navbar');

    if (navbar) {
      this.renderer.addClass(navbar, 'defaultNavbar');

      if (window.scrollY > this.navbarHeight) {
        this.renderer.addClass(navbar, 'position-fixed');

        this.renderer.removeClass(navbar, 'position-relative');
      } else {
        this.renderer.addClass(navbar, 'position-relative');

        this.renderer.removeClass(navbar, 'position-fixed');
      }
    }
  }

  login(): void {
    this.router.navigateByUrl('/auth');
  }

  openDialog(): void {
    this.dialog.open(this.logoutModal);
  }

  logout(): void {
    this.store.dispatch(clearUserTokenAndData());

    this.dialog.closeAll();
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }

    if (this.scrollEventListener) {
      this.scrollEventListener();
    }
  }
}
