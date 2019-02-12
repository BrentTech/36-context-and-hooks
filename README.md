![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## 36 Context and Hooks

### Author: Brent Woodward

### Links and Resources
* [repo](https://github.com/BrentTech/36-context-and-hooks)

### Modules

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events

###### `index.js`
Renders app.js to the DOM
###### `src/components/app.js`
Wraps components in Context Provider.
###### `src/components/counter.js`
Component that provides render function with JSX markup showing Counter state.
###### `src/components/decrementer.js`
Component that provides render function with JSX markup for button to change state
###### `src/components/imcrementer.js`
Component that provides render function with JSX markup for button to change state
###### `src/settings/context.js`
Manages and updates state. Gives children access to state as consumers.
