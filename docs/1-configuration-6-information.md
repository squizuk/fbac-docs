---
id: information
title: Information
---

In this object you can set up options for information box (which can print information about results and query).

> Most of the configuration for this part you can make inside of the template for information

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.information'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    information: {
        target: '.information',
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach information box to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.information'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    information: {
        target: '.information',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```