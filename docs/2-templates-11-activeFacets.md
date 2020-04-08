---
id: activefacetstemplate
title: Active Facets Template
---

Active facets is a section that shows facets selected by user. It allows users what they picked as well as removing facets by clicking on them.

> Use `param="${param}"` and `name="${name}"` for FBJS to work properly

> This template is for single selected facet and is multiplied with independent value for each of active facets

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Parameters
| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `name` | `string` | Name of selected facet |
| `param` | `string` | Parameter of selected facet |

## Default Template

```js
activeFacet: (name, param) => {
    return `
      <span param="${param}" name="${name}">
        ${name}
      </span>
    `;
}
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.active-facets` and should be used as long as you won't change it inside of configuration.

```html
<div class="active-facets"></div>
```

##### [Read how to change default target class name](1-configuration-11-active-facets.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Active Facets`](1-configuration-11-active-facets.md) - Read about active facets.