---
id: overviewtemplate
title: Overview
---

Templates is an object that is part of configuration, but because it's a whole additional layer of configuration, it's worth to dedicate it the whole section. With templates, you are able to adjust and configure each part of search page with your own HTML and CSS. It gives a lot of flexibility, but you have to make sure you are using them in a right way. Otherwise your search can work with bugs.

## Adding new templates

To add new template to your project you need to create property in your configuration named `templates`.

> You should add only those templates that you want to change from default. Otherwise, there will be default version of template used.

```js
const mySearch = new Search.default({
    // ... some configuration fields
    templates: {
        articleTemplate: (fields, highlightFields) => {
            return `
            <div>
                <h1>${highlightFields.title}</h1>
                <div>${fields.kmFromOrigin}</div>
                <p><a href="${fields.clickTrackingUrl}">Read more</a></p>
            </div>
            `;
        },
    },
    // ... some other configuration fields
});

mySearch.init();
```

## Global templates

Let's assume, that you are using 3 different searches on your website. Each of them has different template for `single article`, but all the rest of the search looks exactly the same across all 3 searches. In addition, the only other template that you changed is `informationTemplate` and `paginationTemplate`. In order to keep it simple and easy to change, you can combine global templates together and concat them with the rest of templates in each of the searches. Here's how could we do it:

1. First, we create object with templates that are same for all searches.

    ```js
    /**
    * @description Object with global templates used across all searches
    */
    const globalTemplates = {
        informationTemplate: (fields, resultsSummary, h) => {
            return `
                <p>
                    Here is ${h.currentPage} page of total ${h.totalPages} pages your query: <em>${fields.question.query}</em>.
                </p>
            `;
        },
        paginationTemplate: (pages) => {
            return `<h2>Pagination</h2><ul>${pages}</ul>`;
        },
    };
    ```
2. Then we create our configurations, which will work only on particular pages (where we want search).

    ```js
    if(document.getElementById('some-search')) {
        const mySearch = new Search.default({
            url: 'https://example.funnelback.co.uk/s/search.json',
            collections: ['courses'],
            templates: {
                articleTemplate: (fields, highlightFields) => {
                    return `
                    <div>
                        <h1>${highlightFields.title}</h1>
                        <p><a href="${fields.clickTrackingUrl}">Read more</a></p>
                    </div>
                    `;
                },
                ...globalTemplates
            }
        });
    }

    if(document.getElementById('some-other-search')) {
        const mySearch = new Search.default({
            url: 'https://example.funnelback.co.uk/s/search.json',
            collections: ['courses'],
            templates: {
                articleTemplate: (fields, highlightFields) => {
                    return `
                    <div>
                        <h1>${highlightFields.title}</h1>
                        <img src="${fields.image}" alt="${fields.title}" />
                        <p><a href="${fields.clickTrackingUrl}">Read more</a></p>
                    </div>
                    `;
                },
                ...globalTemplates
            }
        });
    }

    mySearch.init();
    ```