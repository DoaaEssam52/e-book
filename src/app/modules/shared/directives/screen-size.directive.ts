import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScreenSize]',
})
export class ScreenSizeDirective {
  @Output() sizeChange = new EventEmitter<boolean>();

  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    this.checkScreenSize();
  }
  onResize(event: Event) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    const isLargeScreen = window.innerWidth > 768;
    this.sizeChange.emit(isLargeScreen);
  }
}
