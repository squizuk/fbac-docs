---
id: paginationtemplate
title: Pagination Template
---

Pagination has so many configuration options and elements, that it's divided to few different templates. First of all, it's important to remember that there are two types of pagination you can choose of, and the templates you are editing have to match selected pagination type.

### Classic pagination

There's classic numeric pagination, which pages listed. It has few different templates for each element of the pagination feature.

### Load More

You can choose to use "load more" button to load additional chunk of results on click.

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Pagination Number Template

Template for single pagination number. Use `start-rank=${startrank}` to pass starting number for a page.

> Works only when Classic Pagination is selected in configuration

### Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `number` | `number` | Number of current page |
| `startrank` | `number` | StartRank of the page |

### Default template

```js
paginationNumberTemplate: (number, startrank) => {
    return `<li data-startrank=${startrank} tabindex="0">${number}</li>`;
},
```

## Active Pagination Number Template

Template for single pagination number which is active.

> Works only when Classic Pagination is selected in configuration

### Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `number` | `number` | Number of current page |

### Default template

```js
activePaginationNumberTemplate: (number) => {
    return `<li class="active-page">${number}</li>`;
},
```

## Dots Pagination Template

Template for dots that are usually between pages close to current and the last or first page

Example:

`<  1   ...   6   7   8   9   10   ...   99 >`

> Works only when Classic Pagination is selected in configuration

### Default template

```js
dotsPaginationTemplate: () => {
    return '<li class="dots-page">...</li>';
},
```

## Arrow Next Template

Template for arrow next (or any other kind of element that represents going to the next page). Use `start-rank=${startrank}` to pass starting number for a page.

> Works only when Classic Pagination is selected in configuration

### Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `startrank` | `number` | StartRank of the page |

### Default template

```js
arrowNextTemplate: (startrank) => {
    if (startrank) {
        return `<li class="next-page" tabindex="0" data-startrank=${startrank}>></li>`;
    }

    return '<li class="next-page disabled" tabindex="0">></li>';
},
```

## Arrow Prev Template

Template for arrow prev (or any other kind of element that represents going to the previous page). Use `start-rank=${startrank}` to pass starting number for a page.

> Works only when Classic Pagination is selected in configuration

### Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `startrank` | `number` | StartRank of the page |

### Default template

```js
arrowPrevTemplate: (startrank) => {
    if (startrank) {
        return `<li class="prev-page" tabindex="0" data-startrank=${startrank}><</li>`;
    }

    return '<li class="prev-page disabled" tabindex="0"><</li>';
},
```

## Pagination Template

Template that wrapps all the other pagination templates.

> Works only when Classic Pagination is selected in configuration

### Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `pages` | `object` | Object with all fields used in template |

### Default template

```js
paginationTemplate: (pages) => {
    return `<ol>${pages}</ol>`;
},
```

## Load More Template

Template for load more button. You need to set `loadMore: true` in your pagination configuration in order for this to work.

> Works only when Load More Pagination is selected in configuration

### Default template

```js
loadMoreTemplate: () => {
    return `<button id="search-loadmore" type="button" title="Load more results">
                Load More
            </button>`;
},
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.pagination` and should be used as long as you won't change it inside of configuration.

```html
<div class="pagination"></div>
```

##### [Read how to change default target class name](1-configuration-4-pagination.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Pagination`](1-configuration-4-pagination.md) - Read about configuration of pagination.d