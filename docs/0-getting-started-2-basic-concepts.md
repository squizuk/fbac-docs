---
id: basicconcepts
title: Basic Concepts
---

There are two basic concepts related with FBJS that help you to create your own Search Engine Results Page.

In order to make FBJS work you need to [install FBJS](0-getting-started-0-installation.md), create HTML markup for sections of search page and create configuration with settings and templates.

## Configuration

Configuration is an object that has properties with their default values in FBJS. You need to provide some of them as required fields for FBJS, rest of them is not mandatory.

#### Example of simple FBJS configuration

```js
const mySearch = new Search.default({
    url: 'https://example.funnelback.co.uk/s/search.json',
    collections: ['courses'],
    results: {
        numRanks: 10,
    },
    facets: {
        items: [{
            name: 'Level',
            type: 'checkbox',
            options: {
                singleChoice: true,
                facetsRestricted: true,
            },
        },
        {
            name: 'College',
            type: 'checkbox',
            options: {
                singleChoice: false,
                facetsRestricted: true,
            },
        }],
    },
});

mySearch.init();
```

> You will learn more about configuration in dedicated chapter

## Templates

Each part of the search engine results page has it's own template which allows you to customise it to your needs. Each templates is represented by a function that you pass to object in configuration.

#### Example of template for single article in results list

```js
articleTemplate: (fields, highlightFields) => {
    return `
        <div>
            <h1>${highlightFields.title}</h1>
            <div>${fields.kmFromOrigin}</div>
            <p><a href="${fields.clickTrackingUrl}">Read more</a></p>
        </div>
    `;
  },
```

> You will learn more about templates in dedicated chapter
