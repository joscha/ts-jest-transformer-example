# Example: Custom transformer & module mapper with jest & ts-jest

This repository shows how to use custom transformers and module mappers with [jest](https://facebook.github.io/jest/) when using [ts-jest](https://github.com/kulshekhar/ts-jest).

It also shows especially how this works when there is a custom tsconfig to be used for the test environment.

## Examples

Have a look at
* `./tools/fileTransformer.js` to see how to write a transformer
* `./tools/stubProxy.ts` to see how to write a module mapper
* `./tools/identityProxy.ts` to see how to use the `identity-obj-proxy` in a module mapper

### Caveats
* Transformers can not be written in TypeScript, because they are picked up by ts-jest and are not transpiled
* Module mappers have to be written in TypeScript, so the exports end up in the right place
* Put your transformers *before* the `ts-jest` preprocessor

## Development

Run `yarn dev` to run the sample test with a disabled jest cache. Have a look at `./tmp` to see the generated files (helps you with debugging)