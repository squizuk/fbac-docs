---
id: contextualnavigation
title: Contextual Navigation
---

In this object you can set up options for Funnelback's Contextual Navigation.

[Read more about Contextual Navigation in Funnelback Docs](https://docs.funnelback.com/customise/standard-options/contextual-navigation.html)

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.context-nav'`        	    | no       |
| [`items`](#items-clusters-names) | `array of strings` | `[]` | no

```js
const mySearch = new Search.default({
    // ... some configuration fields
    contextualNavigation: {
        target: '.context-nav',
        items: [],
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach contextual navigation section to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.context-nav'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    contextualNavigation: {
        target: '.context-nav',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `items` - clusters names

Array of strings with contextual navigation clusters names to be printed from Funnelback.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `items`        | `array of strings` | `[]`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    contextualNavigation: {
        items: ['topic', 'type'],
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```
