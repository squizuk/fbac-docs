---
id: search
title: Search
---

Object defines settings for main search input.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.form'`        	    | no       |
| [`inputId`](#inputid-id-of-the-main-search-input)         | `string` | `'search-queryinput'`        	    | no       |
| [`resetFacets`](#resetfacets-resets-selected-facets-on-new-search)         | `boolean` | `true`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    search: {
        target: '.form',
        inputId: 'search-queryinput',
        resetFacets: true
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach search form to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.form'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    search: {
        target: '.form',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `inputId` - id of the main search input

Id of the input field with query in template. JavaScript is using it to detect when user makes a new search via input.

> It has to match the id of input in template.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `inputId`        | `string` | `'search-queryinput'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    search: {
        inputId: 'search-queryinput',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `resetFacets` - resets selected facets on new search

Defines if selected facets should be cleared when new search query is made.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `resetFacets`        | `boolean` | `true`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    search: {
        resetFacets: true,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});