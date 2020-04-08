---
id: articletemplate
title: Article Template
---

Template for single result on search page.

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `fields` | `object` | Object with all the fields available for single result from Funnelback endpoint. |
| `highlightFields` | `object` | Same as `fields`, but if `highlight` set to true in configuration, the query will be wrapped with additional span. |

> Never use `highlightFields` inside of an html attribute like `alt="${highlightFields.title}"`. It can lead to HTML structure break!

## Default template

```js
articleTemplate: (fields, highlightFields) => {
    return `
        <div>
            <h1>${highlightFields.title}</h1>
            <img src="${fields.thumbnail}" alt="${fields.title} />
            <div>${fields.kmFromOrigin}</div>
            <p><a href="${fields.clickTrackingUrl}">Read more</a></p>
        </div>
    `;
},
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.results` and should be used as long as you won't change it inside of configuration.

```html
<div class="results"></div>
```

##### [Read how to change default target class name](1-configuration-3-results.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Results`](1-configuration-3-results.md) - Read about configuration of results
2. [`Sort`](1-configuration-7-sort.md) - Read about sorting of results