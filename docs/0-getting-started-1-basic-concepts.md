---
id: basicconcepts
title: Basic Concepts
---

There are two basic concepts related with FBAC that help you to create your own Funnelback autocomplete/concierge.

In order to make FBAC work you need to [install FBAC](0-getting-started-0-installation.md), create HTML markup for an input bar and FBAC container, and create a configuration JavaScript with settings and templates.

## Configuration

Configuration is an object that has properties with their default values in FBAC. You need to provide some of them as required fields - rest is filled automatically by the library.

## Example of a simple FBAC configuration

> The presented configuration has two different endpoints and three outputs. FBAC fetches the suggest.json only once per collection - in this case two times.

```js
const concierge = new FBAC.default({
  input: "#search",
  inject: "#fbac",
  highlight: true,
  bindEvents: true,
  events: {
      beforeFetch(query) {
          this.query = query.replace(/-/g, ' ');
      }
  },
  scaffold(templates) {
      return `
          ${templates.noResults}

          ${templates.header}

          <div class="fbac__headers">
              ${templates.mercator_1.header}
              ${templates.mercator_2.header}
              ${templates.mercator_3.header}
          </div>

          <div class="fbac__all-results">

              ${templates.mercator_1.results}

              <div class="fbac__concierge fbac__concierge--no-border">
              ${templates.mercator_2.results}
              ${templates.mercator_2.noResults}
              </div>
          
              <div class="fbac__divider"></div>

              <div class="fbac__concierge">
                  ${templates.mercator_3.results}
                  ${templates.mercator_3.noResults}
              </div>

          </div>

          <div class="fbac__footers">
              ${templates.mercator_1.footer}
              ${templates.mercator_2.footer}
              ${templates.mercator_3.footer}
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
      {
          id: "mercator_2"
      },
      {
          id: "mercator_3",
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
  ]
});

concierge.init();
```

> You will learn more about configuration in dedicated chapter.

