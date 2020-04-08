---
id: noresults
title: No Results Page
---

In this object you can set up options for no results page.


## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.no-results'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    noResults: {
        target: '.no-results',
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach no results page to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.no-results'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    noResults: {
        target: '.no-results',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```