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
                ${templates.testName1.header}
                ${templates.testName2.header}
            </div>

            <div class="fbac__all-results">
                ${templates.testName1.results}
                ${templates.testName1.noResults}

                <div class="fbac__concierge fbac__concierge--no-border">
                ${templates.testName2.results}
                ${templates.testName2.noResults}
                </div>

                <div class="fbac__divider"></div>
            </div>

            <div class="fbac__footers">
                ${templates.testName1.footer}
                ${templates.testName2.footer}
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
            id: "testName1",
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
            id: "testName2"
        }
    ]
});

concierge.init();

```

> You will learn more about configuration in dedicated chapter

