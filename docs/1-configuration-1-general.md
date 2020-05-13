---
id: general
title: General configuration
---

The whole object of configuration should be injected below the fbjs library file.

```js
const concierge = new FBAC.default({
    // your configuration
});

mySearch.init();
```

There are some general config fields that you will use to configure your fbac instance.

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`input`](1-configuration-1-general.md#input)                                               | `string/object`    | `''`                           | yes      |
| [`inject`](1-configuration-1-general.md#inject)                                             | `string/object`    | `''`                           | yes      |
| [`url`](1-configuration-1-general.md#url)                                                   | `string`           | `''`                           | yes      |
| [`fb`](1-configuration-1-general.md#fb)                                                     | `array of objects` | `[]`                           | yes      |
| [`scaffold`](1-configuration-1-general.md#scaffold)                                         | `function`         | `(templates) => {}`            | yes      |
| [`showOnFront`](1-configuration-1-general.md#showOnFront)                                   | `string/number`    | `''`                           | no       |
| [`trigger`](1-configuration-1-general.md#trigger)                                           | `string/number`    | `3`                            | no       |
| [`threshold`](1-configuration-1-general.md#threshold)                                       | `number`           | `200`                          | no       |
| [`highlight`](1-configuration-1-general.md#highlight)                                       | `boolean`          | `false`                        | no       |
| [`accessibility`](1-configuration-1-general.md#accessibility)                               | `boolean`          | `true`                         | no       |
| [`loader`](1-configuration-1-general.md#loader)                                             | `boolean`          | `false`                        | no       |
| [`bindEvents`](1-configuration-1-general.md#bindEvents)                                     | `boolean`          | `false`                        | no       |
| [`globalTemplates`](1-configuration-1-general.md#globaltemplates)                           | `object`           | `{}`                           | no       |

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    input: "#search",
    inject: "#fbac",
    url: "https://mercator3-search01.squiz.co.uk/s/suggest.json",
    fb: [
        {
            id: "test_name",
            urlParts: {
                collection: "push-meta-port-strategy"
            },
            display: {
                headerOnNoResults: false,
                footerOnNoResults: false
            },
            templates: {
                results(iteratedResults, resultsClass) {
                    return `
                    <div class="fbac__autocomplete">
                        <div class="${resultsClass}">
                            ${iteratedResults}
                        </div>
                    </div>
                    <div class="fbac__divider"></div>
                  `;
                }
            }
        }
    ],
    scaffold(templates) {
        return `
            ${templates.noResults}

            ${templates.header}

            <div class="fbac__headers">
                ${templates.test_name.header}
            </div>

            <div class="fbac__all-results">
                ${templates.test_name.results}
                ${templates.test_name.noResults}
            </div>

            <div class="fbac__footers">
                ${templates.test_name.footer}
            </div>

            ${templates.footer}
        `;
    },
    showOnFront: 10,
    trigger: 3,
    threshold: 200,
    highlight: true,
    accessibility: true,
    loader: false,
    bindEvents: false,
    globalTemplates: globalTemplates
    // ... some other configuration fields
});

mySearch.init();
```


## `input`

A string or a DOM element used to trigger the Autocomplete/Concierge fetch.
    @example "#search"
    @example document.querySelector('#search')

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| input     | `string/object`    | `''`  | yes      |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    input: "#search", //or "document.querySelector('#search')"
    // ... some other configuration fields
});

mySearch.init();
```

## `inject`

A string or a DOM element used to inject the Autocomplete/Concierge parsed results.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| inject | `string/object`    | `''`  | yes      |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    inject: "#fbac", //or document.querySelector('#fbac')
    // ... some other configuration fields
});

mySearch.init();
```

## `url`

Global Funnelback core URL.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| url | `string`           | `''`                           | yes      |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    url: "https://mercator3-search01.squiz.co.uk/s/suggest.json",
    // ... some other configuration fields
});

mySearch.init();
```

 

## `fb`

Holds individual Funnelback configurations.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| fb | `array of objects` | `[]`                           | yes      |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    fb: [
        {
            id: "test_name",
            urlParts: {
                collection: "push-meta-port-strategy"
            },
            display: {
                headerOnNoResults: false,
                footerOnNoResults: false
            },
            templates: {
                results(iteratedResults, resultsClass) {
                    return `
                    <div class="fbac__autocomplete">
                        <div class="${resultsClass}">
                            ${iteratedResults}
                        </div>
                    </div>
                    <div class="fbac__divider"></div>
                  `;
                }
            }
        },
        {
            id: "test_name_2"
        },
        {
            id: "test_name_3",
            templates: {
                result(data, eventClass) {
                    return `
                    <a href="${data.action}" class="fbac__result ${eventClass}" target="_blank">
                        ${data.disp.name}
                    </a>
                  `;
                }
            }
        }
    ],
    // ... some other configuration fields
});

mySearch.init();
```

All objects from fb are inherits valuse of global config.
So if we have one global URL and two collections to display, we need only put URL in global configuration
and two separate collection on each of fb objects.

This is a table of propertis that can be used in fb.

| Parameter 	                  | Type 	           | Default value 	                | Required 	| Inheritance |
|-------------------------------- |------------------- |------------------------------- |----------	| ----------- |
| **fb globals**                  |                    |                                |           |             |
| `id`                            | `string`           | `''`                           | yes       | no          |
| `url`                           | `string`           | `''`                           | no        | yes         |
| `showOnFront`                   | `string/number`    | `''`                           | no        | yes         |
| `templates`                     | `object`           | `individualTemplates`          | no        | no          |
| **Url Parts**                   |                    |                                |           |             |
| `urlParts > collection`         | `string`           | `''`                           | no        | yes         |
| `urlParts > profile`            | `string`           | `'_default'`                   | no        | yes         |
| `urlParts > show`               | `string/number`    | `10`                           | no        | yes         |
| `urlParts > sort`               | `string/number`    | `0`                            | no        | yes         |
| **Display**                     |                    |                                |           |             |
| `display > scaffoldOnNoResults` | `boolean`          | `true`                         | no        | yes         |
| `display > headerOnNoResults`   | `boolean`          | `true`                         | no        | yes         |
| `display > footerOnNoResults`   | `boolean`          | `true`                         | no        | yes         |


On template part we can use those templates:

```js
export const individualTemplates = {
    /**
     * Individual footer template.
     * @function
     * @param {object} data - Data containing several informations about results.
     *  @param {string} query - Partial query typed by user.
     *  @param {number} results - Amount of results that are found.
     */
    footer(data) {
        return `
        <div class="fbac__footer">
          ${data.results} results found.
        </div>
      `;
    },
    /**
     * Individual header template.
     * @function
     * @param {object} data - Data containing several informations about results.
     *  @param {string} query - Partial query typed by user.
     *  @param {number} results - Amount of results that are found.
     */
    header(data) {
        return `
        <div class="fbac__header">
          Searching for \`${data.query}\`...
        </div>
      `;
    },
    /**
     * Template to handle results.
     * @function
     * @param {string} iteratedResults - Parsed results.
     *  @see individualTemplates.result
     */
    results(iteratedResults, resultsClass) {
        return `
        <div class="${resultsClass}">
          ${iteratedResults}
        </div>
      `;
    },
    /**
     * Template of individual result.
     * @function
     * @param {object} data - Data returned from Funnelback.
     * @param {string} eventClass - Class required for events to fire.
     */
    result(data, eventClass) {
        return `
        <a href="${data.action ||
            "#"}" class="fbac__result ${eventClass}" target="_blank">
            ${
                data.disp.name
                    ? `${data.disp.name}
            <div class="fbac__category">
              ${data.disp.category}
            </div>
            `
                    : data.disp
            }
        </a>
      `;
    },
    /**
     * No results template.
     * @function
     */
    noResults(query) {
        return `
        <div class="fbac__results">
          <div class="fbac__no-result">
            No results were found.
          </div>
        </div>
      `;
    }
};

```

 

## `scaffold`

Wraps all other templates into one scaffold template.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| scaffold | `function`         | `(templates) => {}`            | yes      |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    scaffold(templates) {
        return `
            ${templates.noResults}

            ${templates.header}

            <div class="fbac__headers">
                ${templates.test_name.header}
                ${templates.test_name_2.header}
                ${templates.test_name_3.header}
            </div>

            <div class="fbac__all-results">


            <div class="fbac__concierge fbac__concierge--no-border">
            ${templates.test_name_2.results}
            ${templates.test_name_2.noResults}
            </div>
            ${templates.test_name.results}

                <div class="fbac__divider"></div>

                <div class="fbac__concierge">
                    ${templates.test_name_3.results}
                    ${templates.test_name_3.noResults}
                </div>

            </div>

            <div class="fbac__footers">
                ${templates.test_name.footer}
                ${templates.test_name_2.footer}
                ${templates.test_name_3.footer}
            </div>

            ${templates.footer}
        `;
    },
    // ... some other configuration fields
});

mySearch.init();
```

Templates able to use on this part:

```js
const globalTemplates = {
    /**
     * Highlight template.
     * @function
     * @param {string} query - Partial query typed by user.
     */
    highlight(query) {
        return `
        <strong>${query}</strong>
      `;
    },
    /**
     * Global footer template.
     * @function
     * @param {string} query - Partial query typed by user.
     */
    footer(query) {
        return `
        <div class="fbac__global-footer">
          Visit our <a href="#">site</a>.
        </div>
      `;
    },
    /**
     * Global header template.
     * @function
     * @param {string} query - Partial query typed by user.
     */
    header(query) {
        return `
        <div class="fbac__global-header">
          Best Autocomplete/Concierge library for FB!
        </div>
      `;
    },
    /**
     * No results template.
     * @function
     */
    noResults(query) {
        return `
        <div class="fbac__no-results">
            No results were found in both searches for \`${query}\`.
        </div>
      `;
    },
    /**
     * Loder template.
     * @function
     */
    loader() {
        return `
          <div class="fbac__loader--wrapper">
            <div class="fbac__loader"></div>
          </div>
        `;
    }
};
```

 

## `showOnFront`

Number which indicates how many results should be displayed on front-end.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| showOnFront | `string/number`    | `''`                           | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    showOnFront: 10, //or "10"
    // ... some other configuration fields
});

mySearch.init();
```

 

## `trigger`

A string or a number used to define an amount of signs to trigger the Autocomplete/Concierge fetch.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| trigger | `string/number`    | `3`                            | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    trigger: 3, //or "3"
    // ... some other configuration fields
});

mySearch.init();
```

 

## `threshold`

A milisecond representation of the threshold between inputting/removing signs.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| threshold | `number`           | `200`                          | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    threshold: 200,
    // ... some other configuration fields
});

mySearch.init();
```

 

## `highlight`

Highlight all "query" occurs in results.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| highlight | `boolean`          | `false`                        | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    highlight: true,
    // ... some other configuration fields
});

mySearch.init();
```

 

## `accessibility`

Accessibility tags, which are added only if they are not added manually.
Tag list:

1. tabindex="0" (iterable result)
2. role="search" (form)
3. role="combobox" (input)
4. role="listbox" (results wrapper)
5. role="option" (iterable result)
6. aria-owns="inject" (input) id="inject" (results wrapper)
7. aria-controls="idref" (input)
8. aria-selected="true" (focused/hovered iterable result)
9. aria-expanded="false" (input)
10. aria-live="polite" (results wrapper)
11. aria-activedescendant="idref1" (input) and id="idref1" (iterable result)
12. aria-autocomplete="list" (input)
13. aria-label="Search" (input)
14. aria-haspopup="listbox" (input)
15. autocomplete="off" (input)
16. autocorrect="off" (input)
17. autocapitalize="off" (input)
18. spellcheck="false" (input)
19. maxlength="1000" (input)
20. autofocus="autofocus" (input)

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| accessibility | `boolean`          | `true`                         | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    accessibility: true,
    // ... some other configuration fields
});

mySearch.init();
```

 

## `loader`

Changes last loaded result for a loader upon searching new phrase.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| loader | `boolean`          | `false`                        | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    loader: true,
    // ... some other configuration fields
});

mySearch.init();
```

 

## `bindEvents`

Gives access to the global "this" core object by changing scope.

>Mutating core can cause issues.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| bindEvents | `boolean`          | `false`                        | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    bindEvents: false,
    // ... some other configuration fields
});

mySearch.init();
```

 

## `globalTemplates`

Stores global templates.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| globalTemplates | `object`           | `{}`                           | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    globalTemplates: globalTemplates,
    // ... some other configuration fields
});

// Example of globalTemplates
const globalTemplates = {
    highlight(query) {
        return `
        <strong>${query}</strong>
      `;
    },
    footer(query) {
        return `
        <div class="fbac__global-footer">
          Visit our <a href="#">site</a>.
        </div>
      `;
    },
    header(query) {
        return `
        <div class="fbac__global-header">
          Best Autocomplete/Concierge library for FB!
        </div>
      `;
    },
    noResults(query) {
        return `
        <div class="fbac__no-results">
            No results were found in both searches for \`${query}\`.
        </div>
      `;
    },
    loader() {
        return `
          <div class="fbac__loader--wrapper">
            <div class="fbac__loader"></div>
          </div>
        `;
    }
};

mySearch.init();
```
