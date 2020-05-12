---
id: overview
title: Overview
---

Configuration is an object that you add in your JavaScript file. It allows you to initialize FBAC and customise it to your needs. It is split to few different categories, which makes it easier to understand the concept behind it. Most of the fields within configuration has it's default state, which you don't need to update or overwrite unless you want to change it.

In next chapters, you will learn about each of the fields that you may use for your configuration.

| Parameter                                                                                   | Type               | Default value                  | Required |
| --------------------------------------------------------------------------------------------| ------------------ | ------------------------------ | -------- |
| **General**                                                                                 |                    |                                |          |
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
| [`globalTemplates`](1-configuration-1-general.md#globalTemplates)                           | `object`           | `{}`                           | no       |
| **Url Parts**                                                                               |                    |                                |          |
| [`urlParts > collection`](1-configuration-2-url-parts.md#collection)                        | `string`           | `''`                           | no       |
| [`urlParts > profile`](1-configuration-2-url-parts.md#profile)                              | `string`           | `'_default'`                   | no       |
| [`urlParts > show`](1-configuration-2-url-parts.md#show)                                    | `string/number`    | `10`                           | no       |
| [`urlParts > sort`](1-configuration-2-url-parts.md#sort)                                    | `string/number`    | `0`                            | no       |
| **Target Class**                                                                            |                    |                                |          |
| [`targetClass > results`](1-configuration-3-target-class.md#results)                        | `string`           | `'fbac__results'`              | no       |
| [`targetClass > conciergeResult`](1-configuration-3-target-class.md#conciergeResult)        | `string`           | `'fbac__result--concierge'`    | no       |
| [`targetClass > autocompleteResult`](1-configuration-3-target-class.md#autocompleteResult)  | `string`           | `'fbac__result--autocomplete'` | no       |
| [`targetClass > onOpen`](1-configuration-3-target-class.md#onOpen)                          | `string`           | `'fbac__active'`               | no       |
| [`targetClass > onFocus`](1-configuration-3-target-class.md#onFocus)                        | `string`           | `'fbac__focus'`                | no       |
| [`targetClass > onHover`](1-configuration-3-target-class.md#onHover)                        | `string`           | `'fbac__hover'`                | no       |
| **Behaviour**                                                                               |                    |                                |          |
| [`behaviour > autocompleteClick`](1-configuration-4-behaviour.md#autocompleteClick)         | `string`           | `'submit'`                     | no       |
| [`behaviour > autocompleteEnter`](1-configuration-4-behaviour.md#autocompleteEnter)         | `string`           | `'submit'`                     | no       |
| [`behaviour > hoverIsFocus`](1-configuration-4-behaviour.md#hoverIsFocus)                   | `boolean`          | `true`                         | no       |
| **Display**                                                                                 |                    |                                |          |
| [`display > scaffoldOnNoResults`](1-configuration-5-display.md#scaffoldOnNoResults)         | `boolean`          | `true`                         | no       |
| [`display > headerOnNoResults`](1-configuration-5-display.md#headerOnNoResults)             | `boolean`          | `true`                         | no       |
| [`display > footerOnNoResults`](1-configuration-5-display.md#footerOnNoResults)             | `boolean`          | `true`                         | no       |
| **Events**                                                                                  |                    |                                |          |
| [`events > beforeInit`](1-configuration-6-events.md#beforeInit)                             | `function`         | `() => {}`                     | no       |
| [`events > beforeFetch`](1-configuration-6-events.md#beforeFetch)                           | `function`         | `(query) => {}`                | no       |
| [`events > afterFetch`](1-configuration-6-events.md#afterFetch)                             | `function`         | `(query, data) => {}`          | no       |
| [`events > onResults`](1-configuration-6-events.md#onResults)                               | `function`         | `(query, data) => {}`          | no       |
| [`events > onComplete`](1-configuration-6-events.md#onComplete)                             | `function`         | `(query, data) => {}`          | no       |


#### Example of full default FBAC configuration

```js
const globalConfig = {
    input: "",
    inject: "",
    url: "",
    showOnFront: "",
    trigger: 3,
    threshold: 200,
    highlight: false,
    accessibility: true,
    loader: false,

    urlParts: {
        collection: "",
        profile: "_default",
        show: "10",
        sort: "0",
    },
    targetClass: {
        results: "fbac__results",
        conciergeResult: "fbac__result--concierge",
        autocompleteResult: "fbac__result--autocomplete",
        onOpen: "fbac__active",
        onFocus: "fbac__focus",
        onHover: "fbac__hover",
    },
    behaviour: {  
        autocompleteClick: "submit",
        autocompleteEnter: "submit",
        hoverIsFocus: true,
    },
    display: {  
        scaffoldOnNoResults: true,
        headerOnNoResults: true,
        footerOnNoResults: true,
    },
    bindEvents: false,
    events: {
        beforeInit() {},
        beforeFetch(query) {},
        afterFetch(query, data) {},
        onResults(query, data) {},
        onComplete(query, data) {},
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
    globalTemplates: globalTemplates,
    fb: [],
};

```

#### Example of simple FBAC configuration

```js
const concierge = new FBAC.default({
    input: "#search",
    inject: "#fbac",
    url: "https://mercator3-search01.squiz.co.uk/s/suggest.json",
    urlParts: {
        collection: "push-global-port-strategy"
    },
    scaffold(templates) {
        return `
            ${templates.noResults}

            ${templates.header}

            <div class="fbac__headers">
                ${templates.mercator_1.header}
            </div>

            <div class="fbac__all-results">
                ${templates.mercator_1.results}
            </div>

            <div class="fbac__footers">
                ${templates.mercator_1.footer}
            </div>

            ${templates.footer}
        `;
    },
    fb: [
        {
            id: "mercator_1",
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
    ]
});

concierge.init();

```
