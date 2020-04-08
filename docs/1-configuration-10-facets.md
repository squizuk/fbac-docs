---
id: facets
title: Facets
---

`Facets` object is responsible for configuration of all the facets. By default FBJS is not printing any of the facets. You need to pick which facets you want to present to the user and add them to items array.

#### Available types of facets

There are two types of facets that are currently supported by FBJS. Checkboxes and Selects — both of them work really similarly to each other. Select field allows user to select only one option inside of the facet. In checkboxes you can configure it both ways (single and multiple choice).

> Remember that you have to set single/multiple choice for facet in Funnelback as well as in FBJS configuration. They should be the same.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#onfiltersupdate-when-user-changes-filters)         | `string` | `'.facets'`        	    | no       |
| [`items`](#onnoresultspageupdate-when-there-are-no-results-for-query)         | `array` | `[]`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    target: '.facets',
    items: [],
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach facets section to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.facets'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    facets: {
        target: '.facets',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `items` - array of objects with facets

This is array of object where each of objects contains configuration for single facet.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `items`        | `array` | `[]`        	    | no       |

### Settings for single object in array

| Parameter 	         | Type 	    | Required 	| Value |
|--------------------- |----------- |----------	|----------	|
| [`name`](#name-name-of-facet)        | `string` | yes       | — |
| [`type`](#type-type-of-facet) | `string` | yes | `checkbox` or `select` |
| [`options`](#options-options-for-facet) | `object` | no | defined list of properties |
| [`options > target`](#options-target-target-for-facet) | `string` | no | — |
| [`options > template`](#options-template-template-for-facet) | `string` | no | — |
| [`options > subcategoryName`](#options-subcategoryname-subcategory-of-facet) | `string` | no | — |
| [`options > defaultValue`](#options-defaultvalue-default-value-for-select) | `string` | no | — |
| [`options > sort`](#options-sort-a-z-sorting) | `boolean` | no | `true` or `false` |
| [`options > sortDesc`](#options-sortdesc-z-a-sorting) | `boolean` | no | `true` or `false` |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    facets: {
        items: [
            {
                name: "Source",
                type: "checkbox",
                options: {
                    target: '.source-facet',
                    template: (facet, activeFacets, h) => {
                        // return your template literal here
                    },
                    singleChoice: true,
                    subcategoryName: 'shortCourse'
                }
            },
            {
                name: "Elected",
                type: "select",
                options: {
                    defaultValue: "--- choose one ---",
                    sort: true,
                }
            }
        ]
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `name` - name of facet

This has to be exactly the same name as in Funnelback endpoint.

## `type` - type of facet

You can choose between `checkbox` or `select`. Checkbox allows to be single or multiple choice. Select is always single choice.

> Remember that you have to set single/multiple choice for facet in Funnelback as well as in FBJS configuration. They should be the same.

## `options` - options for facet

You can add properties to configure single facet here.

## `options > target` - target for facet

You can add target to specific facet, to locate it in different place then other facets

## `options > template` - template for facet

You can add own template for single facet to differentiate it from other.

Protip: Copy/paste your default template for facet and edit it to save time.

> Make sure that facet's `type` is correct for chosen template.
>
> `type: checkbox` for `facetCheckbox` template and `type: select` for `facetSelect` template.

## `options > subcategoryName` - subcategory of facet

If facet has subcategory, put the name in here.

## `options > defaultValue` - default value for select

If you chosen `select` in `type` property, then you can define it's default value here.

## `options > sort` - A-Z sorting

Define if options in select sort field should be sorted alphabetically in ascending direction.

## `options > sortDesc` - Z-A sorting

Define if options in select sort field should be sorted alphabetically in descending direction.