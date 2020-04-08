---
id: locationtemplate
title: Location Template
---

Template for location search box. It allows user to sort and/or filter results by the distance from their current location or location they ask for.

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Location Form Template

This template is responsible purely for search form, where user can type in the location.

### Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `search` | `object` | Object with search configuration, which includes settings send over to Funnelback. |
| `inputId` | `string` | ID of input for search. Make sure to use it as id of search input in your template! |

### Default template

```js
locationFormTemplate: (search, inputId) => {
    return `
        <div>
            <form id="location-form">
                <label for="${inputId}">
                    Location search:
                </label>
                <input
                    id="${inputId}"
                    type="text"
                    name="searchquery"
                    placeholder="Postcode"/>
                <input
                    type="submit"
                    value="Search!" />
            </form>
        </div>
    `;
},
```

## Current Location Button Template

This template allows to print button, which can ask users for returning their location.

> This template is appended after `locationFormTemplate`, and if you need the order of those two to be changed, you might consider using flexbox or additional JS.

### Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `buttonId` | `string` | ID of button that checks user's location |

### Default template

```js
currentLocationButtonTemplate: (buttonId) => {
    return `
        <div>
            <button id="${buttonId}">Get Location</button>
        </div>
    `;
},
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.location-form` and should be used as long as you won't change it inside of configuration.

```html
<div class="location-form"></div>
```

##### [Read how to change default target class name](1-configuration-9-location.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Location`](1-configuration-9-location.md) - Read about configuration of location form box.