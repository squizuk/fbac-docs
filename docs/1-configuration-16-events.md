---
id: events
title: Events
---

There are few functions that are initialized on particular events. Thanks to that you can run some additional functions while something happens in FBJS 

> For example: each time user searches for new query, you can reinitialize accordions in facets).

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`onFiltersUpdate`](#onfiltersupdate-when-user-changes-filters)                               | `function` | `() => {}`        	    | no       |
| [`onNoResultsPageUpdate`](#onnoresultspageupdate-when-there-are-no-results-for-query)         | `function` | `() => {}`        	    | no       |
| [`onSearch`](#onsearch-when-user-searches-for-query)                                          | `function` | `() => {}`        	    | no       |
| [`beforeSearch`](#onsearch-when-user-searches-for-query)                                      | `function` | `() => {}`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    onFiltersUpdate: () => {},
    onNoResultsPageUpdate: () => {},
    onSearch: () => {},
    beforeSearch: () => {},
    // ... some other configuration fields
});

mySearch.init();
```

## `onFiltersUpdate` - when user changes filters

Each time user selects or removes one of the filters, this function will be initialized.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `onFiltersUpdate`        | `function` | `() => {}`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    onFiltersUpdate: () => {
        customAccordion.init(); // you can run some external functions here
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `onNoResultsPageUpdate` - when there are no results for query

If user hits the no results page because of lack of results, this function will be initialized.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `onNoResultsPageUpdate`        | `function` | `() => {}`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    onNoResultsPageUpdate: () => {
        console.log('This console.log will be visible while you are on No Results Page');
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `onSearch` - when user searches for query

Each time user will search for new query, this function will be initialized.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `onSearch`        | `function` | `() => {}`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    onSearch: () => {
        clearQueryFromSearchInput.init(); // you can run some external functions here
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `beforeSearch` - before user searches for query

Each time user will search for new query, this function will be initialized before fetch.

| Parameter 	         | Type 	  | Default value | Required  |
|----------------------- |----------- |-------------- |---------- |
| `beforeSearch`         | `function` | `() => {}`    | no        |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    beforeSearch: () => {
        mySearch.configUpdate('sort', 'relevance'); // you can run some external functions here
    },
    // ... some other configuration fields
});

mySearch.init();
```

