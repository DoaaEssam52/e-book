import {
  Component,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { State } from '../../../../../store/models/state-model';
import { clearUserTokenAndData } from '../../../../..//store/actions/auth-action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('navbar') navbar: any;
  @ViewChild('logoutModal') logoutModal: any;

  isDefaultStyle = false;
  navbarHeight = 0;
  isDefaultNavbarPath = false;

  isBannerPage = true;

  private routerEventsSubscription!: any;
  private scrollEventsSubscription!: any;

  navTabs = [
    { title: 'Home', routeTo: '/home' },
    { title: 'Shop', routeTo: '/shop' },
    { title: 'Contact Us', routeTo: '/contact-us' },
  ];

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit(): void {
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
    this.routerEventsSubscription = this.router.events.subscribe(() => {
      const navbar = document.getElementById('navbar');

      if (navbar) {
        const currentPath = this.router.url;

        this.isBannerPage = !['/contact-us', '/details'].some((path) =>
          currentPath.includes(path)
        );

        if (this.isBannerPage) {
          this.handleBannerPageScroll();
        } else {
          this.handleNonBannerPageScroll();
        }
      }
    });

    // Subscribe to scroll events to update navbar style based on scroll position
    this.scrollEventsSubscription = this.renderer.listen(
      'window',
      'scroll',
      () => {
        if (this.isBannerPage) {
          this.handleBannerPageScroll();
        } else {
          this.handleNonBannerPageScroll();
        }
      }
    );
  }

  handleBannerPageScroll(): void {
    const navbar = document.getElementById('navbar');

    if (navbar) {
      if (window.scrollY > this.navbarHeight) {
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

      if (window.scrollY + 20 > this.navbarHeight) {
        this.renderer.addClass(navbar, 'position-fixed');

        this.renderer.removeClass(navbar, 'position-relative');
      } else {
        this.renderer.addClass(navbar, 'position-relative');

        this.renderer.removeClass(navbar, 'position-fixed');
      }
    }
  }

  openDialog(): void {
    this.dialog.open(this.logoutModal);
  }

  logout(): void {
    this.store.dispatch(clearUserTokenAndData());
    this.dialog.closeAll();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to prevent memory leaks
    // if (this.routerEventsSubscription) {
    //   this.routerEventsSubscription.unsubscribe();
    // }
    // if (this.scrollEventsSubscription) {
    //   this.scrollEventsSubscription.unsubscribe();
    // }
  }
}
