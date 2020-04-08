---
id: location
title: Location
---

Funnelback allows to search through results filtering them by location. You can configure FBJS for that here.

> Add google maps to your website to use this feature. Do it like so: https://maps.googleapis.com/maps/api/js?key=<YOUR_KEY>

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.location-form'`        	    | no       |
| [`inputId`](#inputid-id-of-the-location-search-input)         | `string` | `'search-locationquery'`        	    | no       |
| [`buttonId`](#buttonid-id-of-the-button-for-current-location)         | `string` | `get-location-btn`        	    | no       |
| [`maxDist`](#maxdist-max-distance-of-result)         | `number` | `18000000`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    location: {
        target: '.location-form',
        inputId: 'search-locationquery',
        buttonId: 'get-location-btn',
        maxDist: 18000000,
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach location section to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.location-form'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    location: {
        target: '.location-form',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `inputId` - id of the location search input

Id of the input field with location in template. JavaScript is using it to detect when user makes a new location search via input.

> It has to match the id of location input in template.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `inputId`        | `string` | `'search-locationquery'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    location: {
        inputId: 'search-locationquery',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `buttonId` - id of the button for current location

Define id of the button which returns current location of user.

> It has to match the id of location button in template.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `buttonId`        | `string` | `'get-location-btn'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    location: {
        buttonId: 'get-location-btn',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `maxDist` - max distance of result

You can filter results by distance to show only ones that are near the location given by user. Distance is presented in km.

> Default size is big enough to present all the results (sorting by distance, not filtering)

```js
const mySearch = new Search.default({
    // ... some configuration fields
    location: {
        maxDist: 18000000,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```