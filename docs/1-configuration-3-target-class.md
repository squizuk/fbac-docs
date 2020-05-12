---
id: target-class
title: Target Class
---

The whole object of configuration should be injected below the fbjs library file.

```js
const concierge = new FBAC.default({
    // your configuration
});

mySearch.init();
```

There are some general config fields that you will use to configure your fbac instance.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`targetClass > results`](1-configuration-3-target-class.md#results)                        | `string`           | `'fbac__results'`              | no       |
| [`targetClass > conciergeResult`](1-configuration-3-target-class.md#conciergeresult)        | `string`           | `'fbac__result--concierge'`    | no       |
| [`targetClass > autocompleteResult`](1-configuration-3-target-class.md#autocompleteresult)  | `string`           | `'fbac__result--autocomplete'` | no       |
| [`targetClass > onOpen`](1-configuration-3-target-class.md#onopen)                          | `string`           | `'fbac__active'`               | no       |
| [`targetClass > onFocus`](1-configuration-3-target-class.md#onfocus)                        | `string`           | `'fbac__focus'`                | no       |
| [`targetClass > onHover`](1-configuration-3-target-class.md#onhover)                        | `string`           | `'fbac__hover'`                | no       |

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    targetClass: {
        results: "fbac__results",
        conciergeResult: "fbac__result--concierge",
        autocompleteResult: "fbac__result--autocomplete",
        onOpen: "fbac__active",
        onFocus: "fbac__focus",
        onHover: "fbac__hover",
    },
    // ... some other configuration fields
});

mySearch.init();
```


## `results`

Class that has to be added to the results template. Should be added to the wrapper. 
Only that way arrows events will imitate focus moving.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| targetClass > results | `string`           | `'fbac__results'`              | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    targetClass: {
        results: "fbac__results",
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `conciergeResult`

Class that has to be added to the concierge result template. Should be added to the anchor.
Only that way onEnter event will imitate the click.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| targetClass > conciergeResult | `string`           | `'fbac__result--concierge'`    | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    targetClass: {
        conciergeResult: "fbac__result--concierge",
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `autocompleteResult`

Class that has to be added to the autocomplete result template.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| targetClass > autocompleteResult | `string`           | `'fbac__result--autocomplete'` | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    targetClass: {
        autocompleteResult: "fbac__result--autocomplete",
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `onOpen`

Class added to the injection DOM place when the Autocomplete/Concierge is ready to be displayed.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| targetClass > onOpen | `string`           | `'fbac__active'`               | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    targetClass: {
        onOpen: "fbac__active",
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `onFocus`

Class that is added to the result when it's focused.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| targetClass > onFocus | `string`           | `'fbac__focus'`                | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    targetClass: {
        onFocus: "fbac__focus",
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `onHover`

Class that is added to the result when it's hovered.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| targetClass > onHover | `string`           | `'fbac__hover'`                | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    targetClass: {
        onHover: "fbac__hover",
    },
    // ... some other configuration fields
});

mySearch.init();
```
