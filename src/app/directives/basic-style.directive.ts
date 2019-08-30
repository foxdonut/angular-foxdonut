import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicStyle]'
})
export class BasicStyleDirective implements OnInit {

  // @Inject is only for StackBlitz
  constructor(@Inject(ElementRef) private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.color = 'orange';
  }
}
