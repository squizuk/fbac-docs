---
id: display
title: Display
---

The whole object of configuration should be injected below the fbac library file.

```js
const concierge = new FBAC.default({
    // your configuration
});

concierge.init();
```

There are some general config fields that you will use to configure your fbac instance.

>It passes a value to every individual instance, making it inheritable.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`display > scaffoldOnNoResults`](1-configuration-5-display.md#scaffoldonnoresults)         | `boolean`          | `true`                         | no       |
| [`display > headerOnNoResults`](1-configuration-5-display.md#headeronnoresults)             | `boolean`          | `true`                         | no       |
| [`display > footerOnNoResults`](1-configuration-5-display.md#footeronnoresults)             | `boolean`          | `true`                         | no       |

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    display: {  
        scaffoldOnNoResults: true,
        headerOnNoResults: true,
        footerOnNoResults: true,
    },
    // ... some other configuration fields
});

concierge.init();
```


## `scaffoldOnNoResults`

Displays scaffold (master template) when there are no results combined from all autocompletes and concierges.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| display > scaffoldOnNoResults | `boolean`          | `true`                         | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    display: {  
        scaffoldOnNoResults: true,
    },
    // ... some other configuration fields
});

concierge.init();
```

## `headerOnNoResults`

Displays header when there are no results combined from all autocompletes and concierges.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| display > headerOnNoResults | `boolean`          | `true`                         | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    display: {  
        headerOnNoResults: true,
    },
    // ... some other configuration fields
});

concierge.init();
```

## `footerOnNoResults`

* Displays footer when there are no results combined from all autocompletes and concierges.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| display > footerOnNoResults | `boolean`          | `true`                         | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    display: {  
        footerOnNoResults: true,
    },
    // ... some other configuration fields
});

concierge.init();
```

 