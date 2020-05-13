---
id: urlParts
title: Url Parts
---

The whole object of configuration should be injected below the fbjs library file.

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
| [`urlParts > collection`](1-configuration-2-url-parts.md#collection)                        | `string`           | `''`                           | no       |
| [`urlParts > profile`](1-configuration-2-url-parts.md#profile)                              | `string`           | `'_default'`                   | no       |
| [`urlParts > show`](1-configuration-2-url-parts.md#show)                                    | `string/number`    | `10`                           | no       |
| [`urlParts > sort`](1-configuration-2-url-parts.md#sort)                                    | `string/number`    | `0`                            | no       |

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    urlParts: {
        collection: "collection-name",
        profile: "_default",
        show: "10",
        sort: "0",
    },
    // ... some other configuration fields
});

concierge.init();
```


## `collection`

Collection name.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| urlParts > collection | `string`           | `''`                           | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    urlParts: {
        collection: "collection-name",
    },
    // ... some other configuration fields
});

concierge.init();
```

## `profile`

Profile name.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| urlParts > profile | `string`           | `'_default'`                   | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    urlParts: {
        profile: "_default",
    },
    // ... some other configuration fields
});

concierge.init();
```

## `show`

Number which indicates how many results should be displayed.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| urlParts > show | `string/number`    | `10`                           | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    urlParts: {
        show: "10", // or 10
    },
    // ... some other configuration fields
});

concierge.init();
```

## `sort`

Sort types:
* "0" => score
* "1" => length
* "2" => alphabetic

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| urlParts > sort | `string/number`    | `0`                            | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    urlParts: {
        sort: "0",
    },
    // ... some other configuration fields
});

concierge.init();
```