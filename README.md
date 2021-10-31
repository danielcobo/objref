# objref

Get deep property of an object via a string path

## 🧭 Table of contents

- [✨ Benefits](#-benefits)
- [🎒 Requierments](#-requierments)
- [🚀 Quickstart](#-quickstart)
- [📘 Documentation](#-documentation)
- [🆘 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [🧪 Testing](#-testing)
- [⚖️ License](#️-license)

## ✨ Benefits

- [x] No loops for dynamic access to deep property values
- [x] Better readability than loops or even multiple brackets

## 🎒 Requierments

No requierments, just works.

## 🚀 Quickstart

### Install

#### NodeJS

Install using the terminal:

```cli
npm install @danielcobo/objref
```

Require the module:

```js
const objref = require('@danielcobo/objref');
```

<sub>**Note:** In case you're wondering, **@danielcobo/** is just a [namespace scope](https://docs.npmjs.com/about-scopes/) - an NPM feature. Scopes make it easier to name modules and improve [security](https://github.blog/2021-02-12-avoiding-npm-substitution-attacks/).</sub>

#### Browser

Declare it as a global variable named objref by including this script before any script you want to use it in:

```html
<script src="https://cdn.jsdelivr.net/npm/@danielcobo/objref@1/dist/iife/bundle.min.js"></script>
```

Or import it as an [ECMAScript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import):

```js
import * as objref from 'https://cdn.jsdelivr.net/npm/@danielcobo/objref@1/dist/esm/bundle.min.js';
```

Also, feel free to download the file if you prefer not to use [jsdelivr](https://www.jsdelivr.com). In that case just replace the url with the relative file path.

### Example use

```js
//Example object
const a = {
	b : {
		c : {
			d : 1,
			e : 2
		}
	}
}

//Basic example
const d = objRef(a, 'b/c/d'); //d === 1

//We can use a custom separator
const e = objRef(a, 'b-c-e', '-'); // e === 2

//Build an object reference	
let f = objRef(a, 'b/c/f', '/', true);
const abc = objRef(a, 'b/c');
abc.f = 100; //a.b.c.f === 100; 

//Keep in mind abc is an object reference, f is a variable
f = 200 //f === 200; a.b.c.f === 100

//Do not use a trailing separator
const d = objRef(a, 'b/c/d/'); //this will throw an error - Invalid path
```

For details see documentation below.

## 📘 Documentation
### objref()
Get deep property of an object via a string path

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| obj | `Object` |  | Data object |
| path | `string` |  | Reference path |
| [separator] | `string` | &#x27;/&#x27; | Separator used in path |
| [buildPath] | `boolean` | false | True/false to define undefined object subpaths |

#### Returns
| Type | Description |
| ---- | ----------- |
| `` |  |

<sub>**Source:** [src/index.js:1](https://github.com/danielcobo/objRef/blob/master/src/index.js?plain=1#L1)</sub>

## 🆘 Troubleshooting

If you run into trouble or have questions just [submit an issue](https://github.com/danielcobo/objRef/issues).

## 🤝 Contributing

### Anyone can contribute

Contributions come in many shapes and sizes. All are welcome.
You can contribute by:

- asking questions
- suggesting features
- sharing this repo with friends
- improving documentation (even fixing typos counts 😉)
- providing tutorials (if you do, please [let me know](https://twitter.com/danielcobocom), I would love to read them)
- improving tests
- contributing code (new features, performance boosts, code readability improvements..)

### Rules for contributions

**General guidelines:**

- there are no dumb questions
- be polite and respectful to others
- do good

**When coding remember:**

- working > maintainability > performance
- best code is no code
- be descriptive when naming
- keep it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- do test

**Contribution licence:**
All contributions are considered to be under same [license](#️-license) as this repository.

## 🧪 Testing

**Testing suite:** [🃏 Jest](https://jestjs.io) | **Test command:** `npm test`

**Mutation testing suite:** [👽 Stryker Mutator](https://stryker-mutator.io) | **Mutation test command:** `npm run mutation`

If you intend to develop further or contribute code, then please ensure to write and use testing. Strive for 100% code coverage and high mutation scores. Mutation score 100 is great, but it's not always neccessary (if there are valid reasons).

## ⚖️ License

[MIT License](https://github.com/danielcobo/objRef/blob/master/LICENSE.md)