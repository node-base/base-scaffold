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

### [Scaffold](index.js#L227)

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

* [assemble](https://www.npmjs.com/package/assemble): Assemble is a powerful, extendable and easy to use static site generator for node.js. Used… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Assemble is a powerful, extendable and easy to use static site generator for node.js. Used by thousands of projects for much more than building websites, Assemble is also used for creating themes, scaffolds, boilerplates, e-books, UI components, API docum")
* [generate](https://www.npmjs.com/package/generate): Generate is a command line tool and developer framework for scaffolding out new GitHub projects… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Generate is a command line tool and developer framework for scaffolding out new GitHub projects. Generators are easy to create and combine. Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for gulp, assemble and Base plugins.")
* [update](https://www.npmjs.com/package/update): Be scalable! Update is a new, open source developer framework and CLI for automating updates… [more](https://github.com/update/update) | [homepage](https://github.com/update/update "Be scalable! Update is a new, open source developer framework and CLI for automating updates of any kind in code projects.")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

## About

### Related projects

related-list

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/node-base/base-scaffold/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 11, 2016._