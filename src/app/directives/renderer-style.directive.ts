import { Directive, ElementRef, Inject, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRendererStyle]'
})
export class RendererStyleDirective implements OnInit {

  // @Inject is only for StackBlitz
  constructor(@Inject(ElementRef) private elementRef: ElementRef,
              @Inject(Renderer2) private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',  'orange');
  }

  @HostListener('mouseenter', ['$event']) mouseenter(event: Event) {
    const mouseEvent = event as MouseEvent;
    const [x, y] = [ mouseEvent.clientX, mouseEvent.clientY ];
    console.log('mouse entered at x:', x, 'y:', y);
  }
}
