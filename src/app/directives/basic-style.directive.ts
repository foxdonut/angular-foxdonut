import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicStyle]'
})
export class BasicStyleDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.color = 'orange';
  }
}
