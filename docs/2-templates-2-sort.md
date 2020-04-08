---
id: sorttemplate
title: Sort Template
---

Template for sort functionality. By default it's select field, but you can change it to set of buttons.

If you are using sort by select, you need to add `data-function="sorting"` to your select field.

If you are using set of buttons, each of buttons needs to have `sort-value="<SORT_NAME>"`, where you replace `<SORT_NAME>` with the name of sort.

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `value` | `string` | Value of currently selected sort type. |

> You can use the parameter to present currently selected sort type in select field, or adding active class to one of buttons, if sort is set of buttons.

## Default template

```js
sortTemplate: (value) => {
    return `
        <label for="sort">Sort by: </label>
        <select data-function="sorting" id="sort" selected=${value}>
            <option value="relevance">Relevance</option>
            <option value="title">A-Z</option>
            <option value="dtitle">Z-A</option>
            <option value="date">Date Ascending</option>
            <option value="adate">Date Descending</option>
        </select>
    `;
},
```

## Example of sort template with buttons

```js
sortTemplate: (value) => {
    let list = '';
    const sortOptions = [
        {
            value: 'dmetaviews',
            label: 'Most viewed'
        }, {
            value: 'dmetadateAddedTimestamp',
            label: 'Recently added'
        }, {
            value: 'dmetalikes',
            label: 'Most likes'
        }
    ];

    sortOptions.forEach((option) => {
        const active = option.value === value ? 'checked="checked"' : '';
        list += `<li>
                    <label>
                    <input
                        type="checkbox"
                        ${active}
                        sort-value="${option.value}"
                    />
                    <span>${option.label}</span>
                    </label>
                </li>`;
    });

    return `
        <ul>
            ${list}
        </ul>
    `;
},
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.sort` and should be used as long as you won't change it inside of configuration.

```html
<div class="sort"></div>
```

##### [Read how to change default target class name](1-configuration-7-sort.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Sort`](1-configuration-7-sort.md) - Read about sorting of results