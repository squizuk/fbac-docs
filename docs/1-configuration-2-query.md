---
id: query
title: Query
---

Object `query` inside configuration has two attributes that you can change. You can define starting value for query and decide if user can overwrite this value

> This can be useful when you want to present results - not the full search page, and you need to hardcode parameters and settings for search so it always presents what you really need.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`value`](#value-value-of-query)         | `string` | `'!nullsearch'`        	    | no       |
| [`canBeChanged`](#canbechanged-can-the-query-be-changed) | `bollean` | `true`   | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    query: {
      value: 'dog',
      canBeChanged: false
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `value` - Value of query

Add a predefined value of search at start (when the user hits the search page without defined query).

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `value`        | `string` | `'!nullsearch'`        	    | no       |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    query: {
      value: 'dog',
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `canBeChanged` - Can the query be changed

You can disallow user from changing query in search results.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `canBeChanged`      | `bollean` | `true`   | no       |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    query: {
      canBeChanged: false,
    },
    // ... some other configuration fields
});

mySearch.init();
```