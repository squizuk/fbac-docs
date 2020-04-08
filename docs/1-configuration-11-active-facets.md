---
id: activefacets
title: Active Facets
---

In this object you can set up options for active facets section (which can print all the currently selected facets).

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.active-facets'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    activeFacets: {
        target: '.active-facets',
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach active facets section to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.active-facets'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    activeFacets: {
        target: '.active-facets',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```