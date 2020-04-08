---
id: formtemplate
title: Search Form Template
---

Template for information box (where you can put information about how many results there is, what query user searches for etc.).

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `search` | `object` | Object with search configuration, which includes settings send over to Funnelback. |
| `query` | `string` | Query that user searches for. |
| `inputId` | `string` | ID of input for search. Make sure to use it as id of search input in your template! |

## Default template

```js
formTemplate: (search, query, inputId) => {
    return `
        <div>
            <form id="search-form">
                <label for="${inputId}">
                    Search for:
                </label>
                <input
                    id="${inputId}"
                    type="text"
                    value="${query}"
                    name="searchquery"
                    placeholder="Type your query"/>
                <input
                    type="submit"
                    value="Search!" />
            </form>
        </div>
    `;
},
```

> Make sure you are not using `name="query"` for your search input. Use any other name, otherwise FBJS will not work properly.

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.form` and should be used as long as you won't change it inside of configuration.

```html
<div class="form"></div>
```

##### [Read how to change default target class name](1-configuration-8-search.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Search`](1-configuration-8-search.md) - Read about configuration of search form