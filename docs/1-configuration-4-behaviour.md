---
id: behaviour
title: Behaviour
---

The whole object of configuration should be injected below the fbjs library file.

```js
const concierge = new FBAC.default({
    // your configuration
});

concierge.init();
```

There are some general config fields that you will use to configure your fbac instance.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`behaviour > autocompleteClick`](1-configuration-4-behaviour.md#autocompleteclick)         | `string`           | `'submit'`                     | no       |
| [`behaviour > autocompleteEnter`](1-configuration-4-behaviour.md#autocompleteenter)         | `string`           | `'submit'`                     | no       |
| [`behaviour > hoverIsFocus`](1-configuration-4-behaviour.md#hoverisfocus)                   | `boolean`          | `true`                         | no       |

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    behaviour: {  
        autocompleteClick: "submit",
        autocompleteEnter: "submit",
        hoverIsFocus: true,
    },
    // ... some other configuration fields
});

concierge.init();
```


## `autocompleteClick`

Action on autocomplete result click:
* "none" => do nothing
* "fill" => fill the input
* "submit" => fill the input and submit a form

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| behaviour > autocompleteClick | `string`           | `'submit'`                     | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    behaviour: {  
        autocompleteClick: "submit",
    },
    // ... some other configuration fields
});

concierge.init();
```

## `autocompleteEnter`

Action on autocomplete result enter.
* "none" => do nothing
* "fill" => fill the input
* "submit" => fill the input and submit a form

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| behaviour > autocompleteEnter | `string`           | `'submit'`                     | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    behaviour: {  
        autocompleteEnter: "submit",
    },
    // ... some other configuration fields
});

concierge.init();
```

## `hoverIsFocus`

Boolean which indicates wether hovering on elements should be treated as focusing element.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| behaviour > hoverIsFocus | `boolean`          | `true`                         | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    behaviour: {  
        hoverIsFocus: true,
    },
    // ... some other configuration fields
});

concierge.init();
```

 
