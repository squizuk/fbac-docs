---
id: results
title: Results
---

Object `results` is responsible for configuring the looks and behaviour of presenting results on your search page.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.results'`        	    | no       |
| [`numRanks`](#numranks-number-of-results-per-page) | `number` | `15`   | no       |
| [`startRank`](#startrank-starting-search-result) | `number` | `1`   | no       |
| [`highlight`](#highlight-highlight-query-in-search-results) | `bollean` | `true`   | no       |
| [`highlightClass`](#highlightclass-class-for-highlight-span) | `string` | `highlight`   | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    results: {
        target: '.results',
        numRanks: 15,
        startRank: 1,
        highlight: true,
        highlightClass: 'highlight',
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach search results to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.results'`        	    | no       |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    results: {
        target: '.results',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `numRanks` - number of results per page

It defines how many results should be visible per single page.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `numRanks`        | `number` | `15`        	    | no       |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    results: {
        numRanks: 15,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `startRank` - starting search result

It's recommended to keep it as `1`, but if you want to start your search results from different item, you can adjust the starting point.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `startRank`        | `number` | `1`        	    | no       |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    results: {
        startRank: 1,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `highlight` - highlight query in search results

You can tell FBJS to wrap searched query into span element, which you can style in your CSS later.

> Later on, in `templates` section you'll learn about `articleTemplate`. You'll have a choice of using data from funnelback wrapped in highlight class or not, so you don't have to worry about not being able to show parts of the search results without highlight. You can easily highlight query only in title, or only in body if you like to.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `highlight`        | `boolean` | `true`        	    | no       |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    results: {
        highlight: true,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `highlightClass` - class for highlight span

You can choose the name of the class that is attached to span that wraps query.

> You need to set `highlight` to `true` in order for this setting to work.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `highlight`        | `string` | `highlight`        	    | no       |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    results: {
        highlightClass: 'highlight',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```