import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  navTabs = [
    { title: 'Home', routeTo: '/home' },
    { title: 'Books', routeTo: '/books' },
    // { title: 'Contact', routeTo: '/contact' },
    { title: 'Cart', routeTo: '/cart' },
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', () => {
      const navbar = document.getElementById('navbar');
      const navbarHeight = navbar?.offsetHeight ?? 0;

      if (window.scrollY > navbarHeight) {
        this.renderer.addClass(navbar, 'scrolledNavbar');
      } else {
        this.renderer?.removeClass(navbar, 'scrolledNavbar');
      }
    });
  }

  ngOnDestroy(): void {}
}
