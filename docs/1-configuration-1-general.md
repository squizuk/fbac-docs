---
id: general
title: General configuration
---

The whole object of configuration should be injected below the fbjs library file.

```js
const mySearch = new Search.default({
    // your configuration
});

mySearch.init();
```

There are some general config fields that you will use to configure your fbjs instance.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`url`](#url-funnelback-url)         | `string` | `''`        	    | yes       |
| [`collections`](#collections-funnelback-collection) | `array of strings` | `[]`   | yes       |
| [`additionalFBparams`](#additionalfbparams-additional-parameters) | `object`   | `{}`          | no        |
| [`activeFacetsOnStart`](#activefacetsonstart-active-facets-on-start) | `object`   | `{}`          | no        |
| [`shouldFacetsFromUrlOverwriteActiveFacets`](#shouldfacetsfromurloverwriteactivefacets-active-facets-priority) | `boolean`   | `false`          | no        |
| [`updateUrlOnSearch`](#updateurlonsearch-update-url-after-new-search) | `boolean`   | `true`          | no        |
| [`keepSearchHistory`](#keepsearchhistory-keep-history-of-search-in-browser) | `boolean`   | `true`          | no        |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    url: 'http://showcase.funnelback.com/s/search.json',
    collections: ['general-search'],
    additionalFBparams: {
      'profile': '_default',
    },
    activeFacetsOnStart: {
      'f.Category|category': 'Videos',
      'f.Keyword|keyword': 'short',
    },
    shouldFacetsFromUrlOverwriteActiveFacets: true,
    updateUrlOnSearch: false,
    keepSearchHistory: false
    // ... some other configuration fields
});

mySearch.init();
```


## `url` - Funnelback url

In this field you should paste the url of your funnelback endpoint.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `url`         | `string` | `''`        	    | yes       |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    url: 'http://showcase.funnelback.com/s/search.json',
    // ... some other configuration fields
});

mySearch.init();
```

> Make sure the url has no parameters and it finishes with .json extention (not html)

## `collections` - Funnelback collection

In this field you should paste the name of collection from funnelback.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `collections` | `array of strings` | `[]`   | yes       |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    collections: ['general-search'],
    // ... some other configuration fields
});

mySearch.init();
```

> As a legacy code, this field is still an array, but you should add only one collection inside


## `additionalFBparams` - Additional parameters

If you want to pass some additional parameters in the url of your funnelback you can do it using `additionalFBparams` field.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `additionalFBparams` | `object`   | `{}`          | no        |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    additionalFBparams: {
      'profile': '_default',
    },
    // ... some other configuration fields
});

mySearch.init();
```

> Each parameter's name should be a key. Put value of parameter as a value of the attribute in `additionalFBparams` object.

## `activeFacetsOnStart` - Active facets on start

Sometimes you may need to make sure that some of the facets are preselected before user see search page. With this parameter you can set starting facets.

| Parameter 	          | Type 	     | Default value | Required  |
|---------------------- |----------- |-------------- |---------- |
| `activeFacetsOnStart` | `object`   | `{}`          | no        |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    activeFacetsOnStart: {
      'f.Category|category': 'Videos',
      'f.Keyword|keyword': 'short',
    },
    // ... some other configuration fields
});

mySearch.init();
```

> The easiest way to find the correct key name is to go to your's endpoints html version, select the facet you need and copy the name of it from url

## `shouldFacetsFromUrlOverwriteActiveFacets` - Active facets priority

You can decide if facets selected in `activeFacetsOnStart` should always overwrite the ones selected by user after refresh.

| Parameter 	          | Type 	     | Default value | Required  |
|---------------------- |----------- |-------------- |---------- |
| `shouldFacetsFromUrlOverwriteActiveFacets` | `boolean`   | `false`          | no        |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    shouldFacetsFromUrlOverwriteActiveFacets: true
    // ... some other configuration fields
});

mySearch.init();
```

## `updateUrlOnSearch` - Update url after new search

If set to `true`, each time you make change in facets or query, url in browser will update with those parameters.

| Parameter 	          | Type 	     | Default value | Required  |
|---------------------- |----------- |-------------- |---------- |
| `updateUrlOnSearch` | `boolean`   | `true`          | no        |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    updateUrlOnSearch: false
    // ... some other configuration fields
});

mySearch.init();
```

## `keepSearchHistory` - Keep history of search in browser

If user will search for multiple queries, history of that search will be stored in browser.

| Parameter 	          | Type 	     | Default value | Required  |
|---------------------- |----------- |-------------- |---------- |
| `keepSearchHistory` | `boolean`   | `true`          | no        |

#### Example

```js
const mySearch = new Search.default({
    // ... some configuration fields
    keepSearchHistory: false
    // ... some other configuration fields
});

mySearch.init();
```