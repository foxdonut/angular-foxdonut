import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBindingStyle]'
})
export class BindingStyleDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() mouseenterColor = 'orange';

  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.backgroundColor = this.mouseenterColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'transparent';
  }
}
