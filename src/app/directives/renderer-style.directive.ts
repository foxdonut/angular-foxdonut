import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRendererStyle]'
})
export class RendererStyleDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',  'orange');
  }

  @HostListener('mouseenter', ['$event']) mouseenter(event: Event) {
    const mouseEvent = event as MouseEvent;
    const [x, y] = [ mouseEvent.clientX, mouseEvent.clientY ];
    console.log('mouse entered at x:', x, 'y:', y);
  }
}
