---
id: contextualnavigationtemplate
title: Contextual Navigation Template
---

[Read more about Contextual Navigation in Funnelback Docs](https://docs.funnelback.com/customise/standard-options/contextual-navigation.html)

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Parameters
| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `navGroup` | `object` | All information about cluster from Funnelback endpoint |
| `searchParams` | `object` | Search parameters |

## Default template

```js
contextualNavigation: (navGroup, searchParams) => {
    const header = `<h1>${navGroup.name} for ${decodeURIComponent(searchParams.query)}</h1>`;
    let list = '';

    navGroup.clusters.forEach((item) => {
      list += `<li>
                    <a data-query="${item.query}" href="?query=${item.query}">
                    ${item.label}
                    </a>
              </li>`;
    });

    return `<div>
                ${header}
                <ul>
                    ${list}
                </ul>
            </div>`;
}
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.context-nav` and should be used as long as you won't change it inside of configuration.

```html
<div class="context-nav"></div>
```

##### [Read how to change default target class name](1-configuration-12-contextualNavigation.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Contextual Navigation`](1-configuration-12-contextualNavigation.md) - Read about configuration of Contextual Navigation.
2. [`Events`](1-configuration-16-events.md#onfiltersupdate-when-user-changes-filters) - Read about adding additional scripts after facet is selected