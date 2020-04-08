---
id: pagination
title: Pagination
---

Object `pagination` allows you to set up the pagination for your Search Engine Results Page.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.pagination'`        	    | no       |
| [`loadMore`](#loadmore-change-loading-type-to-load-more) | `boolean` | `false`   | no       |
| [`arrows`](#arrows-show-arrows-on-pagination-sides) | `boolean` | `true`   | no       |
| [`arrowsOnEdgePages`](#arrowsonedgepages-show-arrows-on-pagination-when-being-on-1st-or-last-page) | `boolean` | `false`   | no       |
| [`dots`](#dots-show-dots-between-pages) | `boolean` | `true`   | no       |
| [`edgePages`](#edgepages-show-first-and-last-page-if-there-s-a-lot-of-pages) | `boolean` | `true`   | no       |
| [`pages`](#pages-amount-of-pages-on-sides-of-active-page) | `number` | `2`   | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    pagination: {
        target: '.pagination',
        loadMode: false,
        arrows: true,
        arrowsOnEdgePages: false,
        dots: true,
        edgePages: true,
        pages: 2,
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach search pagination to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.pagination'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    pagination: {
        target: '.pagination',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `loadMore` - change loading type to load more

There are two types of pagination available on FBJS. Default pagination type is a list of pages that you can select. The other type is 'load more' button which adds additional results each time you click on it.

> If you decide to use `load more` pagination, all the settings below `loadMore` in `pagination` object are irrelevant

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `loadMore`        | `boolean` | `false`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    pagination: {
        loadMore: false,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `arrows` - show arrows on pagination sides

If set to `true`, FBJS will print arrows on sides of pagination which allow to go one page back or forward.

> This will be ignored if `loadMore` is set to true.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `arrows`        | `boolean` | `true`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    pagination: {
        arrows: true,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `arrowsOnEdgePages` - show arrows on pagination when being on 1st or last page

Usually it should be set to `false` (as it is by default). It means that if you are on the first or the last page of pagination you won't see the arrow on one of the sides.

Example:

<code>< 1  2  <b>3</b>  4 ></code>

<code>< 1  2  3 <b>4</b></code>

<code><b>1</b>  2  3  4 ></code>

If this is set to `true` you will see the `prev` arrow even on first page.

> This will be ignored if `loadMore` is set to true.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `arrowsOnEdgePages`        | `boolean` | `false`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    pagination: {
        arrowsOnEdgePages: false,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `dots` - show dots between pages

If there is a lot of pages in the pagination it doesn't make sense to print them all. You can print just few pages further then your current one, then just present the last page. You can use `dots` as a divider between last page and the pages close to your current page.

Example for `true`

<code><  1  ...  7  8  <b>9</b>  10  11  ...  100  ></code>

Example for `false` (you can remove the first (1) and the last (100) page with `edgePages` setting)

<code><  1  7  8  <b>9</b>  10  11  100  ></code>

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `dots`        | `boolean` | `true`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    pagination: {
        dots: true,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `edgePages` - show first and last page if there's a lot of pages

If there's more then few pages it makes sense to inform user how many pages does the search result have.

Example for `true`

<code><  1  ...  7  8  <b>9</b>  10  11  ...  100  ></code>

Example for `false` (you can remove the dots width `dots` setting)

<code><  ...  7  8  <b>9</b>  10  11  ...  ></code>

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `edgePages`        | `boolean` | `true`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    pagination: {
        edgePages: true,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `pages` - amount of pages on sides of active page

You can define how many pages should be visible on the sides of currently active page.

Example for `2`

<code><  1  ...  7  8  <b>9</b>  10  11  ...  100  ></code>

Example for `3`

<code><  1  ...  6  7  8  <b>9</b>  10  11  12  ...  100  ></code>

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `pages`        | `number` | `2`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    pagination: {
        pages: 2,
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```