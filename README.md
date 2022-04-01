<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# untilAsync

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invoke a function until a test condition is true.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import untilAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-until@esm/index.mjs';
```

#### untilAsync( predicate, fcn, done\[, thisArg ] )

Invokes a `function` until a `predicate` function returns `true`.

```javascript
function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        console.log( 'beep: %d', i );
        next();
    }
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

untilAsync( predicate, fcn, done );
/* =>
    beep: 0
    beep: 1
    beep: 2
    beep: 3
    beep: 4
*/
```

The `predicate` function is provided two arguments:

-   `i`: iteration number (starting from zero)
-   `clbk`: a callback indicating whether to invoke `fcn`

The `clbk` function accepts two arguments:

-   `error`: error object
-   `bool`: test result

If the test result is falsy, the function invokes `fcn`; otherwise, the function invokes the `done` callback.

The function to invoke is provided two arguments:

-   `i`: iteration number (starting from zero)
-   `next`: a callback which must be invoked before proceeding to the next iteration

The first argument of both `clbk` and `next` is an `error` argument. If either function is called with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.

```javascript
function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( new Error( 'beep' ) );
    }
}

function done( error ) {
    console.error( error.message );
    // => beep
}

untilAsync( predicate, fcn, done );
```

The `done` callback is invoked with an `error` argument and any arguments passed to the final `next` callback.

```javascript
function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, i );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 4
}

untilAsync( predicate, fcn, done );
```

To set the function execution context for the invoked function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function fcn( i, next ) {
    this.count += 1;
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next();
    }
}

var context = {
    'count': 0
};

untilAsync( predicate, fcn, done, context );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( context.count );
    // => 5
}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Execution is **not** guaranteed to be asynchronous. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import repeatString from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs';
import untilAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-until@esm/index.mjs';

function predicate( i, clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, i >= 5 );
    }
}

function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, repeatString( 'beep', i+1 ) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

untilAsync( predicate, fcn, done );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/async/do-until`][@stdlib/utils/async/do-until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/async/do-while`][@stdlib/utils/async/do-while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/until`][@stdlib/utils/until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/async/while`][@stdlib/utils/async/while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-until.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-until

[test-image]: https://github.com/stdlib-js/utils-async-until/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-async-until/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-until/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-until?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-until.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-until/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-until/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-async-until/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-async-until/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-until/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/async/do-until]: https://github.com/stdlib-js/utils-async-do-until/tree/esm

[@stdlib/utils/async/do-while]: https://github.com/stdlib-js/utils-async-do-while/tree/esm

[@stdlib/utils/until]: https://github.com/stdlib-js/utils-until/tree/esm

[@stdlib/utils/async/while]: https://github.com/stdlib-js/utils-async-while/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
