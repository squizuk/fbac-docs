---
id: configuration
title: Configuration
---

The whole configuration object should be injected below the FBAC library file.

```js
const concierge = new FBAC.default({
    // your configuration
});

concierge.init();
```

There are some general config fields that you will use to configure your FBAC instance. The whole set of them is called `globalConfig` - they determine all global templates (like header and footer) and global fields that are cascaded to `individualConfig`s (like collection name). `individualConfig` is a set of fields, which are used to overwrite global configuration fields (like collection name) and to create individual templates (like own headers or result lists).

`globalConfig` values are meant to be determined once, while `individualConfig` values - as many times, as many individual outputs are required.

## Summary of `globalConfig`

`*` - this sign means that the value is required, but can be determined either by `globalConfig` or `individualConfig` values. `individualConfig` values are **always** more important than `globalConfig` values - in other words they overwrite global ones.

| Parameter 	  | Type 	     | Default value 	| Required 	| Description |
|-------------	|----------- |--------------	|----------	|-------- |
| [`input`](#input)                                               | `string/object`    | `''`                           | yes      | A string or a DOM element used to trigger the Autocomplete/Concierge fetch. |
| [`inject`](#inject)                                             | `string/object`    | `''`                           | yes      | A string or a DOM element used to inject the Autocomplete/Concierge parsed results. |
| [`url`](#url-global)                                                   | `string`           | `''`                           | yes*      | Global Funnelback core URL. If individual `url` is not set, global one will be used (see: `individualConfig.url`) |
| [`showOnFront`](#showonfront-global)                                   | `string/number`    | `''`                           | no       | Number which indicates how many results should be displayed on front-end. |
| [`urlParts`](#urlparts-global)                                   | `object`    | `{...}`                           | yes*       | Holds all global URL parameters. If individual `urlParts` are not set, global ones will be used (see: `individualConfig.urlParts` ). |
| [`trigger`](#trigger)                                           | `string/number`    | `3`                            | no       | A string or a number used to define an amount of signs to trigger the Autocomplete/ Concierge fetch. |
| [`threshold`](#threshold)                                       | `number`           | `200`                          | no       | A milisecond representation of the threshold between inputting/removing signs and fetching the data from FB. |
| [`highlight`](#highlight)                                       | `boolean`          | `false`                        | no       | Highlights all `query` occurrences in results. |
| [`accessibility`](#accessibility)                               | `boolean`          | `true`                         | no       | Accessibility tags, which are added only if they are not added manually. |
| [`loader`](#loader)                                             | `boolean`          | `false`                        | no       | Changes last loaded result for a loader upon searching new phrase. |
| [`targetClass`](#targetClass)                                   | `object`    | `{...}`                           | no       | Stores all interactive classes. |
| [`behaviour`](#behaviour)                                   | `object`    | `{...}`                           | no       | Stores default behaviours. |
| [`display`](#display-global)                                   | `object`    | `{...}`                           | no       | Holds boolean variables for conditional displaying. |
| [`bindEvents`](#bindevents)                                     | `boolean`          | `false`                        | no       | Gives access to the global `this` core object by changing scope. **Warning!** Mutating core can cause issues. |
| [`events`](#events)                                   | `object`    | `{...}`                           | no       | Holds events that can be used by user in specific moments. |
| [`scaffold`](#scaffold)                                         | `function`         | `(templates) => {}`            | yes      | Wraps all other templates into one scaffold template. |
| [`globalTemplates`](#globaltemplates)                           | `object`           | `{...}`                           | no       | Stores global templates. |
| [`fb`](#fb)                                                     | `array of objects` | `[{}, {}, ...]`                           | yes      | Holds individual FBAC configurations - `individualConfig`s. |



## `input`

A string or a DOM element used to trigger the Autocomplete/Concierge fetch.

Examples:

* `"#search"`
* `document.querySelector('#search')`

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `input`     | `string/object`    | `''`  | yes      |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    input: "#search",
    // ... some other configuration fields
});

concierge.init();
```

## `inject`

A string or a DOM element used to inject the Autocomplete/Concierge parsed results.

Examples:

* `"#fbac"`
* `document.querySelector('#fbac')`

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `inject` | `string/object`    | `''`  | yes      |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    inject: "#fbac",
    // ... some other configuration fields
});

concierge.init();
```

## `url (global)`

Global Funnelback core URL. 

> It passes a value to every individual instance, making it inheritable.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `url` | `string`           | `''`     | yes*      |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    url: "https://mercator3-search01.squiz.co.uk/s/suggest.json",
    // ... some other configuration fields
});

concierge.init();
```

## `showOnFront (global)`

Number which indicates how many results should be displayed on front-end.

Importance rules (what's prioritized if set up): 

`individualConfig.showOnFront` > `globalConfig.showOnFront` > `individualConfig.urlParts.show` > `globalConfig.urlParts.show`

Examples:

* `"10"`
* `10`

> It passes a value to every individual instance, making it inheritable.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `showOnFront` | `string/number`    | `''`                           | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    showOnFront: 10,
    // ... some other configuration fields
});

concierge.init();
```

## `urlParts (global)`

Holds all Global URL parameters. If individual `urlParts` are not set, global ones will be used.

> It passes a value to every individual instance, making it inheritable.

| Parameter 	                  | Type 	           | Default value 	                | Required 	| Inheritance | Description |
|-------------------------------- |------------------- |------------------------------- |----------	| ----------- |---------- |
| `collection`         | `string`           | `''`                           | no        | yes         | Collection name. |
| `profile`            | `string`           | `'_default'`                   | no        | yes         | Profile name. |
| `show`               | `string/number`    | `'10'`                           | no        | yes         | Number which indicates how many results should be fetched. |
| `sort`               | `string/number`    | `'0'`                            | no        | yes         | Sort type. <br>`'0' => score`<br> `'1' => length`<br> `'2' => alphabetic` |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    urlParts: {
        collection: "push-global-port-strategy",
        profile: "_custom",
        show: 5,
        sort: 1
    },
    // ... some other configuration fields
});

concierge.init();
```

## `trigger`

A string or a number used to define an amount of signs to trigger the Autocomplete/Concierge fetch.

Examples:

* `"3"`
* `3`

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `trigger` | `string/number`    | `3`         | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    trigger: 3,
    // ... some other configuration fields
});

concierge.init();
```

## `threshold`

A milisecond representation of the threshold between inputting/removing signs.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `threshold` | `number`           | `200`          | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    threshold: 200,
    // ... some other configuration fields
});

concierge.init();
```

## `highlight`

Highlights all `query` occurrences in results.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `highlight` | `boolean`          | `false`       | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    highlight: true,
    // ... some other configuration fields
});

concierge.init();
```


## `accessibility`

Accessibility tags, which are added only if they are not added manually.

Tag list:
* `tabindex="0"` (iterable result)
* `role="search"` (form)
* `role="searchbox"` (input)
* `aria-expanded="false"` (input)
* `aria-live="polite"` (results wrapper)
* `aria-label="Search"` (input)
* `aria-haspopup="menu"` (input)
* `autocomplete="off"` (input)
* `autocorrect="off"` (input)
* `autocapitalize="off"` (input)
* `spellcheck="false"` (input)
* `maxlength="1000"` (input)
* `autofocus="autofocus"` (input)

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `accessibility` | `boolean`          | `true`                         | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    accessibility: false,
    // ... some other configuration fields
});

concierge.init();
```


## `loader`

Changes last loaded result for a loader upon searching new phrase.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `loader` | `boolean`          | `false`                        | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    loader: true,
    // ... some other configuration fields
});

concierge.init();
```

## `targetClass`

Stores all interactive classes.

| Parameter 	                  | Type 	           | Default value 	                | Required | Description |
|-------------------------------- |------------------- |------------------------------- |---------- |---------- |
| `results`         | `string`           | `'fbac__results'`                           | no        | Class that has to be added to the results template. Should be added to the wrapper. Only that way arrows events will imitate focus moving. |
| `conciergeResult`            | `string`           | `'fbac__result--concierge'`                   | no        | Class that has to be added to the concierge result template. Should be added to the anchor. Only that way onEnter event will imitate click behaviour. |
| `autocompleteResult`               | `string`    | `'fbac__result--autocomplete'`                           | no        | Class that has to be added to the autocomplete result template. |
| `onOpen`               | `string`    | `'fbac__active'`    | no        | Class added to the injection DOM place when the Autocomplete/Concierge is ready to be displayed. |
| `onFocus`               | `string`    | `'fbac__focus'`    | no        | Class that is added to the result when it's focused. |
| `onHover`               | `string`    | `'fbac__hover'`    | no        | Class that is added to the result when it's hovered. |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    targetClass: {
        results: "fb__results",
        conciergeResult: "fb__result--concierge",
        autocompleteResult: "fb__result--autocomplete",
        onOpen: "fb__active",
        onFocus: "fb__focus",
        onHover: "fbac__hover"
    },
    // ... some other configuration fields
});

concierge.init();
```

## `behaviour`

Stores default behaviours.

| Parameter 	                  | Type 	           | Default value 	                | Required | Description |
|-------------------------------- |------------------- |------------------------------- |---------- |---------- |
| `autocompleteClick`         | `string`           | `'submit'`                           | no        | Action on autocomplete result click.<br> `"none" => do nothing`<br> `"fill" => fill the input`<br> `"submit" => fill the input and submit a form` |
| `autocompleteEnter`            | `string`           | `'submit'`                   | no        | Action on autocomplete result enter.<br> `"none" => do nothing`<br> `"fill" => fill the input`<br> `"submit" => fill the input and submit a form` |
| `hoverIsFocus`               | `boolean`    | `true`                           | no        | Boolean which indicates wether hovering on elements should be treated as focusing element. |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    behaviour: {
        autocompleteClick: "submit",
        autocompleteEnter: "fill",
        hoverIsFocus: false
    },
    // ... some other configuration fields
});

concierge.init();
```

## `display (global)`

Holds boolean variables for conditional displaying.

| Parameter 	                  | Type 	           | Default value 	                | Required | Description |
|-------------------------------- |------------------- |------------------------------- |---------- |---------- |
| `scaffoldOnNoResults`         | `boolean`           | `true`                           | no        | Displays scaffold (master template) when there are no results combined from all autocompletes and concierges. |
| `headerOnNoResults`            | `boolean`           | `true`                   | no        | Displays header when there are no results combined from all autocompletes and concierges. |
| `footerOnNoResults`               | `boolean`    | `true`                           | no        | Displays footer when there are no results combined from all autocompletes and concierges.|

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    display: {
        scaffoldOnNoResults: false,
        headerOnNoResults: true,
        hoverIsFocus: false
    },
    // ... some other configuration fields
});

concierge.init();
```

## `bindEvents`

Gives access to the global `this` core object by changing scope.

> **Warning!** Mutating core can cause issues.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `bindEvents` | `boolean`          | `false`                        | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    bindEvents: false,
    // ... some other configuration fields
});

concierge.init();
```

## `events`

Holds events that can be used by user in specific moments.

> When `bindEvents` is enabled, user has access to the global `this` object.

| Parameter 	                  | Type 	           | Default value 	                | Required | Description |
|-------------------------------- |------------------- |------------------------------- |---------- |---------- |
| `beforeInit`         | `function`           | `() => {}`                           | no        | Fires before the initialization. |
| `beforeFetch`            | `function`           | `(query) => {}`                   | no        | Fires before any data is fetched from Funnelback. |
| `afterFetch`               | `function`    | `(query, data) => {}`                           | no        | Fires right after data is fetched from Funnelback. |
| `onResults`               | `function`    | `(query, data) => {}`                           | no        | Fires after data is fetched from Funnelback and built on the front-end. |
| `onComplete`               | `function`    | `(query, data) => {}`                           | no        | Fires after every action is completed. |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    events: {
        beforeInit() {
            // some code
        },
        beforeFetch(query) {
            // some code
        },
        afterFetch(query, data) {
            // some code
        },
        onResults(query, data) {
            // some code
        },
        onComplete(query, data) {
            // some code
        }
    },
    // ... some other configuration fields
});

concierge.init();
```

## `scaffold`

Wraps all other templates into one scaffold template.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `scaffold` | `function`          | `(templates) => {...}`                        | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    scaffold(templates) {
        return `
        ${templates.noResults}

        ${templates.header}

        <div class="fbac__headers">
            ${templates.unique_id1.header}
            ${templates.unique_id2.header}
        </div>

        <div class="fbac__all-results">

          <div class="fbac__autocomplete">
            <div class="fbac__results">
                ${templates.unique_id1.results}
                ${templates.unique_id1.noResults}
            </div>
          </div>

          <div class="fbac__divider"></div>

          <div class="fbac__concierge">
            <div class="fbac__results">
                ${templates.unique_id2.results}
                ${templates.unique_id2.noResults}
            </div>
          </div>

        </div>

        <div class="fbac__footers">
            ${templates.unique_id1.footer}
            ${templates.unique_id2.footer}
        </div>

        ${templates.footer}
      `;
    },
    // ... some other configuration fields
});

concierge.init();
```

## `globalTemplates`

Stores global templates.

> Hint: you can define a template object outside the config and refer to it multiple times, having it defined only once!

| Parameter 	                  | Type 	           | Default value 	                | Required | Description |
|-------------------------------- |------------------- |------------------------------- |---------- |---------- |
| `highlight`         | `function`           | `(query) => {...}`                           | no        | Highlight template. |
| `footer`            | `function`           | `(query) => {...}`                   | no        | Global footer template. |
| `header`               | `function`    | `(query) => {...}`                           | no        | Global header template. |
| `noResults`               | `function`    | `(query) => {...}`                           | no        | No results template. |
| `loader`               | `function`    | `() => {...}`                           | no        | Loder template. |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    globalTemplates: {
        highlight(query) {
            return `
                <strong>${query}</strong>
            `;
        },
        footer(query) {
            return `
                <div class="fbac__global-footer">
                    Check out our <a target="blank" href="https://fbac.netlify.app/">documentation</a>.
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
    },
    // ... some other configuration fields
});

concierge.init();
```

## `fb`

Holds individual Funnelback configurations - `individualConfig`s.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `fb` | `array of objects`          | `[]`                        | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    fb: [
        {
            // individual config no. 1
        },
        {
            // individual config no. 2
        }
    ],
    // ... some other configuration fields
});

concierge.init();
```




## Summary of `individualConfig`

`*` - this sign means that the value is required, but can be determined either by `globalConfig` or `individualConfig` values. `individualConfig` values are **always** more important than `globalConfig` values - in other words they overwrite global ones.

| Parameter 	  | Type 	     | Default value 	| Required 	| Description |
|-------------	|----------- |--------------	|----------	|-------- |
| [`id`](#id)                                               | `string`    | `''`                           | yes      | Unique, required identificator. |
| [`url`](#url-individual)                                                   | `string`           | `''`                           | yes*      | Required Funnelback core URL. If individual `url` is not set, global one will be used (see: `globalConfig.url`) |
| [`showOnFront`](#showonfront-individual)                                   | `string/number`    | `''`                           | no       | Number which indicates how many results should be displayed on front-end. |
| [`urlParts`](#urlparts-individual)                                   | `object`    | `{...}`                           | yes*       | Holds all individual URL parameters. If individual `urlParts` are not set, global ones will be used (see: `globalConfig.urlParts` ). |
| [`templates`](#templates)                           | `object`           | `{...}`                           | no       | Stores individual templates. |
| [`display`](#display-individual)                                   | `object`    | `{...}`                           | no       | Holds boolean variables for conditional displaying. |


## `id`

Unique, required identificator.

> You refer to this ID in the `scaffold` template, eg. `${templates.example_id.header}`

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `id` | `string`          | `''`                        | no       |


#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    fb: [
        // ... some individual configuration objects
        {
            // ... some individual configuration fields
            id: "example_id",
            // ... some other configuration fields
        },
        // ... some other individual configuration objects
    ],
    // ... some other configuration fields
});

concierge.init();
```

## `url (individual)`

Required Funnelback core URL.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `url` | `string`           | `''`     | yes*      |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    fb: [
        // ... some individual configuration objects
        {
            // ... some individual configuration fields
            url: "https://mercator3-search01.squiz.co.uk/s/suggest.json",
            // ... some other configuration fields
        },
        // ... some other individual configuration objects
    ],
    // ... some other configuration fields
});

concierge.init();
```

## `showOnFront (individual)`

Number which indicates how many results should be displayed on front-end.

Importance rules (what's prioritized if set up): 

`individualConfig.showOnFront` > `globalConfig.showOnFront` > `individualConfig.urlParts.show` > `globalConfig.urlParts.show`

Examples:

* `"10"`
* `10`

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| `showOnFront` | `string/number`    | `''`    | no       |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    fb: [
        // ... some individual configuration objects
        {
            // ... some individual configuration fields
            showOnFront: 10,
            // ... some other configuration fields
        },
        // ... some other individual configuration objects
    ],
    // ... some other configuration fields
});

concierge.init();
```

## `urlParts (individual)`

Holds all Global URL parameters. If individual `urlParts` are not set, global ones will be used.

| Parameter 	                  | Type 	           | Default value 	                | Required 	| Description |
|-------------------------------- |------------------- |------------------------------- |----------	| ----------- |
| `collection`         | `string`           | `''`                           | no        | Collection name. |
| `profile`            | `string`           | `'_default'`                   | no        | Profile name. |
| `show`               | `string/number`    | `'10'`                           | no        | Number which indicates how many results should be fetched. |
| `sort`               | `string/number`    | `'0'`                            | no        | Sort type. <br>`'0' => score`<br> `'1' => length`<br> `'2' => alphabetic` |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    fb: [
        // ... some individual configuration objects
        {
            // ... some individual configuration fields
            urlParts: {
                collection: "push-global-port-strategy",
                profile: "_custom",
                show: 5,
                sort: 1
            },
            // ... some other configuration fields
        },
        // ... some other individual configuration objects
    ],
    // ... some other configuration fields
});

concierge.init();
```

## `templates`

Stores individual templates.

> Hint: you can define a template object outside the config and refer to it multiple times, having it defined only once!

| Parameter 	                  | Type 	           | Default value 	                | Required | Description |
|-------------------------------- |------------------- |------------------------------- |---------- |---------- |
| `footer`            | `function`           | `(data) => {...}`                   | no        | Individual footer template. |
| `header`               | `function`    | `(data) => {...}`                           | no        | Individual header template. |
| `results`               | `function`    | `(iteratedResults, resultsClass) => {...}`                           | no        | Template to handle results. |
| `result`               | `function`    | `(data, eventClass) => {...}`                           | no        | Template of individual result. |
| `noResults`               | `function`    | `(query) => {...}`                           | no        | No results template. |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    fb: [
        // ... some individual configuration objects
        {
            // ... some individual configuration fields
            templates: {
                footer(data) {
                    return `
                        <div class="fbac__footer">
                            ${data.results} results found.
                        </div>
                    `;
                },
                header(data) {
                    return `
                        <div class="fbac__header">
                            Searching for \`${data.query}\`...
                        </div>
                    `;
                },
                results(iteratedResults, resultsClass) {
                    return `
                        <div class="${resultsClass}">
                            ${iteratedResults}
                        </div>
                    `;
                },
                result(data, eventClass) {
                    return `
                        <a href="${data.action ||
                            "#"}" class="fbac__result ${eventClass}" target="_blank">
                            ${data.disp.name}
                        </a>
                    `;
                },
                noResults(query) {
                    return `
                        <div class="fbac__results">
                            <div class="fbac__no-result">
                                No results were found.
                            </div>
                        </div>
                    `;
                }
            },
            // ... some other configuration fields
        },
        // ... some other individual configuration objects
    ],
    // ... some other configuration fields
});

concierge.init();
```

## `display (individual)`

Holds boolean variables for conditional displaying.

| Parameter 	                  | Type 	           | Default value 	                | Required | Description |
|-------------------------------- |------------------- |------------------------------- |---------- |---------- |
| `headerOnNoResults`            | `boolean`           | `true`                   | no        | Displays header when no results template is visible. |
| `footerOnNoResults`               | `boolean`    | `true`                           | no        | Displays footer when no results template is visible. |

#### Example

```js
const concierge = new FBAC.default({
    // ... some configuration fields
    fb: [
        // ... some individual configuration objects
        {
            // ... some individual configuration fields
            display: {
                headerOnNoResults: true,
                hoverIsFocus: false
            },
            // ... some other configuration fields
        },
        // ... some other individual configuration objects
    ],
    // ... some other configuration fields
});

concierge.init();
```




## Example of the proper configuration

```js
const concierge = new FBAC.default({
    input: "#search",
    inject: "#fbac",
    url: "https://mercator3-search01.squiz.co.uk/s/suggest.json",
    showOnFront: 10,
    urlParts: {
        collection: "push-meta-port-strategy",
        profile: "_customprofile",
        show: 20,
        sort: 1
    },
    trigger: 4,
    threshold: 400,
    highlight: true,
    accessibility: false,
    loader: true,
    targetClass: {
        results: "fb__results",
        conciergeResult: "fb__result--concierge",
        autocompleteResult: "fb__result--autocomplete",
        onOpen: "fb__active",
        onFocus: "fb__focus",
        onHover: "fb__hover"
    },
    behaviour: {
        autocompleteClick: "fill",
        autocompleteEnter: "submit",
        hoverIsFocus: false
    },
    display: {
        scaffoldOnNoResults: false,
        headerOnNoResults: false,
        footerOnNoResults: false
    },
    bindEvents: true,
    events: {
        beforeInit() {
            this.query = "";
        },
        beforeFetch(query) {
            console.log(`This query: ${this.query} is equal to query: ${query}`);
        },
        afterFetch(query, data) {
            console.log(`This query: ${this.query} is equal to query: ${query}`);
            console.log(`This data: ${this.data} is equal to data: ${data}`);
        },
        onResults(query, data) {
            console.log(`This query: ${this.query} is equal to query: ${query}`);
            console.log(`This data: ${this.data} is equal to data: ${data}`);
        },
        onComplete(query, data) {
            console.log(`This query: ${this.query} is equal to query: ${query}`);
            console.log(`This data: ${this.data} is equal to data: ${data}`);
        }
    },
    scaffold(templates) {
        return `
            ${templates.noResults}

            ${templates.header}

            <div class="fbac__headers">
            </div>

            <div class="fbac__all-results">

            <div class="fbac__autocomplete">
                <div class="fbac__results">
                </div>
            </div>

            <div class="fbac__divider"></div>

            <div class="fbac__concierge">
                <div class="fbac__results">
                </div>
            </div>

            </div>

            <div class="fbac__footers">
            </div>

            ${templates.footer}
        `;
    },
    globalTemplates: {
        highlight(query) {
            return `
                <i>${query}</i>
            `;
        },
        footer(query) {
            return `
                <div class="fbac__global-footer">
                    This is the footer. We can use the ${query} here.
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
    },
    fb: [
        {
            id: "test_name1"
        },
        {
            id: "test_name2",
            url: "https://mercator3-search01.squiz.co.uk/s/suggest.json",
            showOnFront: 5,
            urlParts: {
                collection: "push-meta-port-strategy",
                profile: "_default",
                show: 15,
                sort: 0
            },
            templates: {
                footer(data) {
                    return `
                        <div class="fbac__footer">
                            ${data.results} results found.
                        </div>
                    `;
                },
                header(data) {
                    return `
                        <div class="fbac__header">
                            Searching for \`${data.query}\`...
                        </div>
                    `;
                },
                results(iteratedResults, resultsClass) {
                    return `
                        <div class="${resultsClass}">
                            ${iteratedResults}
                        </div>
                    `;
                },
                result(data, eventClass) {
                    return `
                        <a href="${data.action ||
                            "#"}" class="fbac__result ${eventClass}" target="_blank">
                            ${data.disp.name}
                        </a>
                    `;
                },
                noResults(query) {
                    return `
                        <div class="fbac__results">
                            <div class="fbac__no-result">
                                No results were found.
                            </div>
                        </div>
                    `;
                }
            },
            display: {
                headerOnNoResults: false,
                footerOnNoResults: false
            }
        }
    ]
});

concierge.init();
```



























