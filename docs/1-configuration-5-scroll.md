---
id: scroll
title: Scroll
---

In this object you can set up options for scrolling top, when user clicks on pagination or facets.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`enable`](#enable-decide-if-you-want-to-use-the-feature)         | `boolean` | `false`        	    | no       |
| [`target`](#target-fbjs-will-scroll-up-to-the-top-of-target-element)         | `string` | `'.results'`        	    | no       |
| [`offset`](#offset-offset-on-scroll)         | `string` | `'50'`        	    | no       |
| [`animation`](#animation-type-of-animation)         | `string` | `'smooth'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    scroll: {
        enable: false,
        target: '.results',
        offset: '50',
        animation: 'smooth',
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `enable` - decide if you want to use the feature

By setting `enable` to `true`, you are enabling feature in your search.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `enable`        | `boolean` | `false`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    scroll: {
        enable: false,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - FBJS will scroll up to the top of target element

By choosing the target class, you are deciding where FBJS should scroll to. It will scroll to the very top of the given element.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.results'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    scroll: {
        target: '.results',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `offset` - Offset on scroll

By setting offset you can decide to scroll a bit higher or lower than the target element's top.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `offset`        | `string` | `'50'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    scroll: {
        offset: '50',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `animation` - Type of animation

Type of animation (best to keep 'smooth'), check window.scroll behavior option in general JS docs for more information

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `animation`        | `string` | `'smooth'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    scroll: {
        animation: 'smooth',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```