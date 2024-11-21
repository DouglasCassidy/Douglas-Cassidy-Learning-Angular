import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverOnFocus]',
  standalone: true
})
export class HoverOnFocusDirective implements AfterViewInit{

  @Input() appHoverOnFocus = ""
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

  @HostListener('focus') onFocus() {
    this.focusColor(this.appHoverOnFocus || "lightblue");
  }
  @HostListener('blur') onBlur() {
    this.focusColor("");
  }
  private focusColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
