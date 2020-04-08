---
id: facetstemplate
title: Facets Template
---

There are two types of facets that are available in FBJS. It's checkboxes and selects. You should define type of the facet in [configuration](./facets).

### Checkboxes

Checkbox facet can be either single-select or multi-select and it needs to be set exactly the same way in FBJS and Funnelback settings.

### Selects

Select facet is always a single select field and should be set like that in Funnelback.

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Checkbox Facet Template

Template for all the checkbox facets.

> You can add additional template to specific facet in configuration if you want one of the facets to be different from others. [Read more](1-configuration-10-facets.md#options-template-template-for-facet)

### Parameters
| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `facets` | `object` | All information about facet from Funnelback endpoint |
| `activeFacets` | `object` | All currently active facets |
| `h` | `object` | `queryStringParamName` for name of facet |

> First parameter in default template uses ES6 destructuring, but you can change it to simple variable to console.log all available fields.

### Default template

```js
facetCheckbox: ({
    name, categories, singleChoice, label
  }, activeFacets, h) => {
    const header = label ? `<div>${label}</div>` : `<div>${name}</div>`;
    let list = '';

    categories[0].values.forEach((item) => {
      list += `<li>
                <label>
                    <input
                        type="checkbox"
                        ${item.checked}
                        value="${item.data}"
                        name="${item.label}"
                        data-fparam="${h.queryStringParamName}"
                        data-singlechoice="${singleChoice}"
                    />
                    ${item.label} (${item.count})
                </label>
            </li>`;
    });

    return `<div class="checkbox-facet">
                ${header}
                <ul>
                    ${list}
                </ul>
            </div>`;
}
```

## Select Facet Template

Template for all the select facets.

> You can add additional template to specific facet in configuration if you want one of the facets to be different from others. [Read more](1-configuration-10-facets.md#options-template-template-for-facet)

### Parameters
| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `facets` | `object` | All information about facet from Funnelback endpoint |
| `options` | `object` | options from configuration |
| `activeFacets` | `object` | All currently active facets |
| `h` | `object` | `queryStringParamName` for name of facet |

### Default template

```js
facetSelect: ({ name, categories }, options, activeFacets, h) => {
    const header = `<label>${name}</label>`;
    let selectItems = '';

    if (options.defaultValue) selectItems += `<option disabled selected>${options.defaultValue}</option>`;
    selectItems += '<option value=""> all</option>';

    categories[0].values.forEach((item) => {
      selectItems += `<option ${item.selected} value="${item.data}">
                    ${item.label} (${item.count})
                </option>`;
    });

    return `<div class="select-facet">
                ${header}
                <select data-facet="${name}" data-fparam="${h.queryStringParamName}">
                    ${selectItems}
                </select>
            </div>`;
}
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.facets` and should be used as long as you won't change it inside of configuration.

```html
<div class="facets"></div>
```

> You can add additional `target` property to facet's configuration to place each facet in different location.

##### [Read how to change default target class name](1-configuration-10-facets.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Facets`](1-configuration-10-facets.md) - Read about configuration of pagination.
2. [`Events`](1-configuration-16-events.md#onfiltersupdate-when-user-changes-filters) - Read about adding additional scripts after facet is selected