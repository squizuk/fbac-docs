---
id: loader
title: Loader
---

Loader is visible each time there's a fetch request to server and FBJS is waiting for response. It helps users understand that, there's some processing happening and they have to wait.

There's set of standarized CSS for loader to keep it consistant across FBJS instances, but feel free to create your own CSS loader if that's required in the project.

```scss

/* Loader */
.loader-cloak{
  background: rgba(255,255,255,.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999; // Change to appropriate z-index of your project
}

.loader,
.loader::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.loader {
  margin: 0;
  font-size: 10px;
  position: absolute;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255,37,35, 0.2);
  border-right: 1.1em solid rgba(255,37,35, 0.2);
  border-bottom: 1.1em solid rgba(255,37,35, 0.2);
  border-left: 1.1em solid #ff2523;
  -webkit-transform: translateZ(0), translateX(-50%), translateY(-50%);
  -ms-transform: translateZ(0), translateX(-50%), translateY(-50%);
  transform: translateZ(0), translateX(-50%), translateY(-50%);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  top: 50%;
  left: 50%;
}

@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
```

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.results'`        	    | no       |
| [`class`](#class-css-class-attached-to-loader) | `string` | `'.loader-cloak'` | no

```js
const mySearch = new Search.default({
    // ... some configuration fields
    loader: {
        target: '.results',
        class: '.loader-cloak',
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach loader to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.results'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    loader: {
        target: '.results',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `class` - CSS class attached to loader

CSS class which is added to a wrapping loader element.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `class`        | `string` | `'.loader-cloak'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    loader: {
        class: '.loader-cloak',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```