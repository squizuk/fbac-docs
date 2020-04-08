---
id: noresultstemplate
title: No Results Template
---

Template for No Results Page, which is visible when user searches for query that has no results.

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Parameters
| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `query` | `string` | Searched query |
| `spell` | `object` | Object with `text` and `url` strings, for "Did you mean" functionality |

## Default Template

```js
noResults: (query, spell) => {
    let spellSuggestion = '';
    if (spell.text) {
        spellSuggestion = `<div>Did you mean: <a href="?${spell.url}">${spell.text}</a>?</div>`;
    }
    return `<div>We're sorry, we couldn't find anything matching <strong>${query}</strong>.</div>${spellSuggestion}`;
}
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.no-results` and should be used as long as you won't change it inside of configuration.

```html
<div class="no-results"></div>
```

##### [Read how to change default target class name](1-configuration-15-noResults.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`No Results`](1-configuration-15-noResults.md) - Read about no results.
2. [`Events`](1-configuration-16-events.md#onfiltersupdate-when-user-changes-filters) - Read about adding additional scripts when no results page appears.