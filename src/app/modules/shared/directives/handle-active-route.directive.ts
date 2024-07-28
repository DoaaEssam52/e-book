import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Directive({
  selector: '[appHandleActiveRoute]',
})
export class HandleActiveRouteDirective implements OnDestroy {
  @Input('appHandleActiveRoute') activeClass!: string;
  @Input() navigateTo!: string;

  routerEventsSubscription!: Subscription;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveRoute();
      }
    });
  }

  updateActiveRoute(): void {
    const currentUrl = this.router.url;

    if (currentUrl.includes(this.navigateTo)) {
      this.renderer.addClass(this.elementRef.nativeElement, this.activeClass);
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement,
        this.activeClass
      );
    }
  }

  ngAfterViewInit(): void {
    this.updateActiveRoute();
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }
}
