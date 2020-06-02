---
id: events
title: Events
---

The whole object of configuration should be injected below the fbac library file.

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
| [`events > beforeInit`](1-configuration-6-events.md#beforeinit)                             | `function`         | `() => {}`                     | no       |
| [`events > beforeFetch`](1-configuration-6-events.md#beforefetch)                           | `function`         | `(query) => {}`                | no       |
| [`events > afterFetch`](1-configuration-6-events.md#afterfetch)                             | `function`         | `(query, data) => {}`          | no       |
| [`events > onResults`](1-configuration-6-events.md#onresults)                               | `function`         | `(query, data) => {}`          | no       |
| [`events > onComplete`](1-configuration-6-events.md#oncomplete)                             | `function`         | `(query, data) => {}`          | no       |

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    events: {
        beforeInit() {},
        beforeFetch(query) {},
        afterFetch(query, data) {},
        onResults(query, data) {},
        onComplete(query, data) {},
    },
    // ... some other configuration fields
});

concierge.init();
```


## `beforeInit`

A string or a DOM element used to trigger the Autocomplete/Concierge fetch.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| events > beforeInit | `function`         | `() => {}`                     | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    events: {
        beforeInit() {},
    },
    // ... some other configuration fields
});

concierge.init();
```


## `beforeFetch`

A string or a DOM element used to trigger the Autocomplete/Concierge fetch.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| events > beforeFetch | `function`         | `(query) => {}`                | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    events: {
        beforeFetch(query) {},
    },
    // ... some other configuration fields
});

concierge.init();
```


## `afterFetch`

A string or a DOM element used to trigger the Autocomplete/Concierge fetch.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| events > afterFetch | `function`         | `(query, data) => {}`          | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    events: {
        afterFetch(query, data) {},
    },
    // ... some other configuration fields
});

concierge.init();
```


## `onResults`

A string or a DOM element used to trigger the Autocomplete/Concierge fetch.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| events > onResults | `function`         | `(query, data) => {}`          | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    events: {
        onResults(query, data) {},
    },
    // ... some other configuration fields
});

concierge.init();
```


## `onComplete`

A string or a DOM element used to trigger the Autocomplete/Concierge fetch.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| events > onComplete | `function`         | `(query, data) => {}`          | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    events: {
        onComplete(query, data) {},
    },
    // ... some other configuration fields
});

concierge.init();
```