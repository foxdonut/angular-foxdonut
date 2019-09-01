# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Pipes

Pipes are functions through which we can pass and transform data. Angular provides some built-in
pipes, and we can write our own.

To use a pipe, simply use `|` in a template expression followed by the name of the pipe. To pass
parameters, separate them with `:`. For example:

```html
{{ someValue | pipeName:param1:param2 }}
```

Pipes can be chained, where the output of one pipe is passed to the next pipe:

```html
{{ someValue | pipeName1:param1:param2 | pipeName2:param1:param2 }}
```

## Built-in Pipes

Some of the built-in pipes include:

- `currency`
- `date`
- `number`
- `percent`
- `lowercase`
- `uppercase`
- `json`

A complete list of built-in pipes is available in the
[documentation](https://angular.io/api?type=pipe).

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/pipes?file=src%2Fapp%2Fpipes%2Fpipe-demo%2Fpipe-demo.component.ts)

## Custom Pipes

You can create a custom pipe using the CLI:

```
ng g p --skipTests=true pipes/phone-number
```

This generates:

- `pipes/phone-number.pipe.ts`
- a `PhoneNumberPipe` class that is annotated with `@Pipe({ name: 'phoneNumber' })`
- the class implements `PipeTransform` with the `transform(value: any, ...args: any[]): any`
- the class is added to the `declarations` array in `AppModule`.

Implement the pipe in the `transform` method. For example:

```typescript
transform(value: string, format?: string): string {
  if (format === 'dashes') {
    return value.substring(0, 3) + '-' + value.substring(3, 6) + '-' + value.substring(6);
  }
  return '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6);
}
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/pipes?file=src%2Fapp%2Fpipes%2Fphone-number.pipe.ts)

[Contents](../README.md#angular-foxdonut)
