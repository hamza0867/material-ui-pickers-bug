## What is this ?

This is a repo that shows a simlpe reproducible example of a bug in the @material-ui/pickers library with typescript.

### Description

When using a bundler such as Parcel or webpack this repo does build and shows the UI correctly in the browser.  
When trying to compile with tsc however is another story. I get the following error:
```bash
node_modules/@material-ui/core/styles/overrides.d.ts:101:64 - error TS2344: Type 'ComponentNameToClassKey[Name]' does not satisfy the constraint 'string'.
  Type '"fixed" | "required" | "rtl" | "square" | "active" | "disabled" | "track" | "default" | "error" | "progress" | "message" | "middle" | "media" | "hidden" | "body" | "button" | "caption" | ... 400 more ... | undefined' is not assignable to type 'string'.
    Type 'undefined' is not assignable to type 'string'.

101   [Name in keyof ComponentNameToClassKey]?: Partial<StyleRules<ComponentNameToClassKey[Name]>>
                                                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error.
```

### How to run the example ?

To run the example you should run the following commands in your terminal:
```bash
yarn install && yarn run # or use npm if you want to
```
then open your browser on `localhost:1234`

### How to reproduce the error ?

Simply compile the project using this command:
```bash
yarn build
```
