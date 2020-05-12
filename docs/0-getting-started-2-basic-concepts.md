---
id: basicconcepts
title: Basic Concepts
---

There are two basic concepts related with FBAC that help you to create your own Search Engine Results Page.

In order to make FBAC work you need to [install FBAC](0-getting-started-0-installation.md), create HTML markup for sections of search page and create configuration with settings and templates.

## Configuration

Configuration is an object that has properties with their default values in FBAC. You need to provide some of them as required fields for FBAC, rest of them is not mandatory.

#### Example of simple FBAC configuration

```js
const concierge = new FBAC.default({
    input: "#search",
    inject: "#fbac",
    highlight: true,
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
    url: "https://mercator3-search01.squiz.co.uk/s/suggest.json",
    urlParts: {
        collection: "push-global-port-strategy"
    },
    fb: [
        {
            id: "test_name",
            urlParts: {
                collection: "push-meta-port-strategy"
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
    ]
});

concierge.init();

```

> You will learn more about configuration in dedicated chapter

