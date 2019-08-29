# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Custom Directives

## Creating a Directive

To create a directive manually:

- Create a class for the directive
- Add `@Directive({ selector: '[appBasicHighlight]' })`
- Add the directive class to `declarations` in `AppModule`.

## Generating a Directive

You can also generate a directive:

```
ng g d directives/basic-style --skipTests=true
```

This generates `src/app/directives/basic-style.directive.ts` with:

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBasicStyle]'
})
export class BasicStyleDirective {

  constructor() { }

}
```

It also adds `BasicStyleDirective` to the array of `declarations` in `app.module.ts`.

## Writing a basic attribute directive

To manipulate the element on which the directive is placed, obtain a reference in the constructor,
and use it in `ngOnInit`:

```typescript
@Directive({
  selector: '[appBasicStyle]'
})
export class BasicStyleDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.color = 'orange';
  }
}
```

## Using the directive

Because the selector is `[appBasicStyle]`, we can use it by adding the `appBasicStyle` attribute to
an element.

> The selector should be camelCased, not `kebab-case`.

## Using the Renderer

You can (and should) use the renderer instead to set the style:

```typescript
constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

ngOnInit() {
  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',  'orange');
}
```

Using the renderer will make the code work even when it is running in environments other than the
browser.

For the complete `Renderer2` API, see the [documentation](https://angular.io/api/core/Renderer2).

## Listening to DOM events

You can listen to DOM events by annotating a method with `@HostListener`. The first argument is the
event name, and the second is an array of parameters to pass to the method, such as `'$event'` or
`'$event.target'`. For example:

```typescript
@HostListener('mouseenter', ['$event']) mouseenter(event: Event) {
  const mouseEvent = event as MouseEvent;
  const [x, y] = [ mouseEvent.clientX, mouseEvent.clientY ];
  console.log('mouse entered at x:', x, 'y:', y);
}
```

This listens to events on the element, but you can also listen outside by using
`@HostListener('document:eventName')`. Note that **all** elements using the directive will be
notified, so you may want to use `this.elementRef.nativeElement.contains(event.target)` to determine
if the event occured on the element or somewhere else.

## Binding to properties

Instead of using `Renderer2` and `ElementRef`, you can also bind to properties with `@HostBinding`.
This binds to a property of the native element, such as `style.backgroundColor` or `class.active`.
You can then change the value programmatically. For example:

```typescript
export class BindingStyleDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.backgroundColor = 'orange';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'transparent';
  }
}
```

## Passing data to the Directive

Using `@Input()`, we can pass data to the directive from the template. Continuing the example above,
let's make the `mouseenter` color configurable:

```typescript
@Input() mouseenterColor = 'orange';

@HostListener('mouseenter') mouseenter() {
  this.backgroundColor = this.mouseenterColor;
}
```

This defaults the color to `orange`, but we can change it in the template:

```html
<p appBindingStyle mouseenterColor="lightgreen">This is using appBindingStyle</p>
```

Note that we are passing a string value here, but we can also bind to an expression using:

```html
<p appBindingStyle [mouseenterColor]="getColor()">This is using appBindingStyle</p>
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/custom-directives?file=src%2Fapp%2Fdirectives%2Fbinding-style.directive.ts)

## Structural Directives

Structural directives transform the structure of the template. Examples include `*ngIf` and
`*ngFor`. Now, the `*` is actually a convenience shortcut; the same can be achieved with `[]` and
`<ng-template>`. That is, the equivalent of this:

```html
<div *ngIf="condition">
  <!-- content -->
</div>
```

is:

```html
<ng-template [ngIf]="condition">
  <div>
    <!-- content -->
  </div>
</ng-template>
```

Behind the scenes, Angular transforms the former into the latter.

We can write our own structural directive using `TemplateRef` and `ViewContainerRef`:

```typescript
@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}
}
```

It is important that the `@Input()` set method name matches the selector, `appIf`. Now, we can use
`*appIf`:

```html
<div *appIf="someCondition">
  <!-- content -->
</div>
```

[Contents](../README.md#angular-foxdonut)
