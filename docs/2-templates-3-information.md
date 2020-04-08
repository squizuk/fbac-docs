---
id: informationtemplate
title: Information Template
---

Template for information box (where you can put information about how many results there is, what query user searches for etc.).

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `fields` | `object` | Whole funnelback endpoint. |
| `resultsSummary` | `object` | Information from funnelback resultsSummary object. |
| `h` | `object` | `totalPages` and `currentPage` - helpers. |

> `totalPage` will return you total ammount of pages available in current search, `currentPage` will return information about current page of pagination you are at.

## Default template

```js
informationTemplate: (fields, resultsSummary, h) => {
    return `
        <p>
          Here is ${h.currentPage} page of total ${h.totalPages} pages for 
          <em>${fields.question.query}</em> (${resultsSummary.totalMatching} results total)
        </p>
      `;
  },
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.information` and should be used as long as you won't change it inside of configuration.

```html
<div class="information"></div>
```

##### [Read how to change default target class name](1-configuration-6-information.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Information`](1-configuration-6-information.md) - Read about configuration of information box