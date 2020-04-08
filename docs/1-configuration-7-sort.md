---
id: sort
title: Sort
---

This section allows you to select default type of sorting and target class for your sort selection select.

> Available types of sort are configurable via template

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.sort'`        	    | no       |
| [`type`](#type-default-sort-type)         | `string` | `'relevance'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    sort: {
        target: '.sort',
        type: 'relevance'
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach sort select to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.sort'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    sort: {
        target: '.sort',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `type` - default sort type

You can define which type of sorting should be default

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `type`        | `string` | `'relevance'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    sort: {
        type: 'relevance',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```