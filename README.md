# base-scaffold [![NPM version](https://img.shields.io/npm/v/base-scaffold.svg?style=flat)](https://www.npmjs.com/package/base-scaffold) [![NPM downloads](https://img.shields.io/npm/dm/base-scaffold.svg?style=flat)](https://npmjs.org/package/base-scaffold) [![Build Status](https://img.shields.io/travis/node-base/base-scaffold.svg?style=flat)](https://travis-ci.org/node-base/base-scaffold)

Base plugin that adds support for generating files from a declarative scaffold configuration.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save base-scaffold
```

## Usage

Can be used with any [base](https://github.com/node-base/base) application. See example [base applications](#base-apps).

```js
var scaffold = require('base-scaffold');
```

## Example

This example shows [generate](https://github.com/generate/generate), but this plugin can be used with any [base](https://github.com/node-base/base) application.

```js
var Generate = require('generate');
var Scaffold = require('scaffold');
var scaffold = new Scaffold();
var app = generate();

/**
 * Add a basic "target" to our scaffold. Scaffolds are like
 * grunt "tasks" and can have any number of targets
 */

scaffold.addTarget('abc', {
  options: {
    pipeline: generate.renderFile,
    data: {
      site: { title: 'My Blog' }
    }
  },
  src: 'templates/*.hbs',
  dest: 'site',
});

/**
 * Template engine for rendering handlebars templates
 */

app.engine('hbs', require('engine-handlebars'));

/**
 * Generate the scaffold!
 */

app.scaffold(scaffold)
  .on('error', console.error)
  .on('data', console.log)
  .on('end', function() {
    console.log('done!');
  });
```

See the [scaffold](https://github.com/jonschlinkert/scaffold) library for additional information.

## API

### [.isScaffold](index.js#L50)

Returns true if the given value is a valid `Scaffold`.

**Params**

* `val` **{any}**
* `returns` **{Boolean}**

**Example**

```js
app.isScaffold('foo');
//=> false

var Scaffold = require('scaffold');
var scaffold = new Scaffold();
app.isScaffold(scaffold);
//=> true
```

### [.scaffold](index.js#L77)

Get scaffold `name` from `app.scaffolds`, or set scaffold `name` with the given `config`.

**Params**

* `name` **{String|Object|Function}**
* `config` **{Object|Fucntion}**
* `returns` **{Object}**: Returns the app instance when setting a scaffold, or the scaffold instance when getting a scaffold.

**Example**

```js
app.scaffold('foo', {
  docs: {
    options: {},
    files: {
      src: ['*'],
      dest: 'foo'
    }
  }
});

// or
var scaffold = app.scaffold('foo');
```

**Params**

* `name` **{String}**
* `config` **{Object|Function}**

**Example**

```js
app.addScaffold('foo', {
  docs: {
    options: {},
    files: {
      src: ['*'],
      dest: 'foo'
    }
  }
});
```

**Params**

* `name` **{String}**
* `options` **{Object}**

**Example**

```js
var scaffold = app.getScaffold('foo');

// or create an instance of `Scaffold` using the given object
var scaffold = app.getScaffold({
  docs: {
    options: {},
    files: {
      src: ['*'],
      dest: 'foo'
    }
  }
});
```

### [Scaffold](index.js#L226)

Get or set the `Scaffold` constructor. Exposed as a getter/setter to allow it to be customized before or after instantiation.

**Example**

```js
// set
app.Scaffold = CustomScaffoldFn;

// get
var scaffold = new app.Scaffold();
```

## Base apps

The following projects are built on [base](https://github.com/node-base/base).

* [update](https://www.npmjs.com/package/update): Easily keep anything in your project up-to-date by installing the updaters you want to use… [more](https://github.com/update/update) | [homepage](https://github.com/update/update "Easily keep anything in your project up-to-date by installing the updaters you want to use and running `update` in the command line! Update the copyright date, licence type, ensure that a project uses your latest eslint or jshint configuration, remove dep")
* [generate](https://www.npmjs.com/package/generate): The Santa Claus machine for GitHub projects. Scaffolds out new projects, or creates any kind… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "The Santa Claus machine for GitHub projects. Scaffolds out new projects, or creates any kind of required file or document from any given templates or source materials.")
* [assemble](https://www.npmjs.com/package/assemble): Assemble is a powerful, extendable and easy to use static site generator for node.js. Used… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Assemble is a powerful, extendable and easy to use static site generator for node.js. Used by thousands of projects for much more than building websites, Assemble is also used for creating themes, scaffolds, boilerplates, e-books, UI components, API docum")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

## Contributing

This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new). Or visit the [verb-readme-generator](https://github.com/verbose/verb-readme-generator) project to submit bug reports or pull requests for the readme layout template.

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/node-base/base-scaffold/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on June 27, 2016._