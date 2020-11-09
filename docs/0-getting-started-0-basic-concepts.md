---
id: basicconcepts
title: Basic Concepts
---

## What is FBAC?

FBAC is an acronym for `Funnelback Autocomplete/Concierge`.

FBAC is a standalone, vanilla JS library for Funnelback's autocomplete and concierge, making it a competition for `Funnelback Auto-completion` and `Typeahead/ Bloodhound`.

## FBAC in numbers

|  	  | Typeahead/ Bloodhound  | Funnelback Auto-completion	| Funnelback Autocomplete/Concierge 	|
|-------------	|----------- |--------------	|----------	|
| Dependencies (other libraries) | <span style="color: red;">jQuery, Typeahead, Bloodhound, (Handlebars)</span>    | <span style="color: red;">jQuery, Funnelback Auto-completion, Typeahead Bloodhound, (Handlebars)</span>  | <span style="color: green;">None</span>   |
| Support | <span style="color: green;">IE11+ (or earlier)</span>    | <span style="color: green;">IE11+ (or earlier)</span>  | <span style="color: green;">IE11+ (or earlier)</span>   |
| Documentation | <span style="color: green;">Good</span>    | <span style="color: red;">Poor</span>  | <span style="color: green;">Good</span>   |
| What is the size of the bundle? | <span style="color: orange;">41KB (T&B) + 249KB (jQuery)</span>    | <span style="color: red;">41KB (T&B) + 249KB (jQuery) + ~50KB (FA)</span>  | <span style="color: green;">79KB</span>   |
| Easy in use | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Can use different endpoints? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Can use the same endpoint many times? | <span style="color: orange;">Yes, but is fetched many times</span>    | <span style="color: orange;">Yes, but is fetched many times</span>  | <span style="color: green;">Yes, and is fetched once</span>   |
| Can display one global header? | <span style="color: red;">No</span>    | <span style="color: red;">No</span>  | <span style="color: green;">Yes</span>   |
| Can display one header per endpoint? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Can display one global footer? | <span style="color: red;">No</span>    | <span style="color: red;">No</span>  | <span style="color: green;">Yes</span>   |
| Can display footer on each endpoint? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Can wrap results in another template? | <span style="color: orange;">Yes, on the client HTML side</span>    | <span style="color: orange;">Yes, on the client HTML side</span>  | <span style="color: green;">Yes</span>   |
| Can display both autocomplete and concierge? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Is for Funnelback only? | <span style="color: green;">No</span>    | <span style="color: orange;">Yes (well, it’s in the name)</span>  | <span style="color: orange;">Yes (well, it’s in the name)</span>   |
| Can set amount of signs to trigger autocomplete? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Can set amount of results to render? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Can set amount of results to fetch? | <span style="color: red;">No, it fetches amount to render</span>    | <span style="color: red;">No, it fetches amount to render</span>  | <span style="color: green; text-decoration: underline;" title="This means you are able to fetch more data (eg. 20 results) and display less (eg. 5 results).">Yes</span>   |
| Can define events, eg. afterFetch or beforeRender? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| How many events can you define? | <span style="color: green;">12</span>    | <span style="color: green;">12</span>  | <span style="color: orange; text-decoration: underline;" title="This will be changed only if the need comes up. For now, 5 events is enough.">5</span>   |
| Can use events outside of the scope? | <span style="color: green;">Yes</span>    | <span style="color: red;">No</span>  | <span style="color: red; text-decoration: underline;" title="For now, there is no need to have events defined out of the scope. Nevertheless, in the future, it probably will be added.">No</span>   |
| Can manipulate fetched data before displaying? | <span style="color: red;">No</span>    | <span style="color: orange;">Yes, in one place (callback dataset function)</span>  | <span style="color: green;">Yes</span>   |
| Can highlight data? | <span style="color: orange;">Yes, uses &lt;strong&gt; element with class</span>    | <span style="color: orange;">Yes, uses &lt;strong&gt; element with class</span>  | <span style="color: green;">Yes, uses a template for highlighting</span>   |
| How many fixed classNames does it have? | <span style="color: orange;">9</span>    | <span style="color: orange;">9</span>  | <span style="color: green;">6</span>   |
| Can I use loader? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Can I set a threshold between fetching and typing? | <span style="color: red;">No</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| What is the behaviour for autocomplete result click? | <span style="color: orange;">Sends form with chosen query</span>    | <span style="color: orange;">Sends form with chosen query</span>  | <span style="color: green;">Sends the form with chosen query OR fills the input with the chosen query</span>   |
| What is the behaviour for autocomplete enter? | <span style="color: orange;">Sends form with chosen query</span>    | <span style="color: orange;">Sends form with chosen query</span>  | <span style="color: green;">Sends the form with chosen query OR fills the input with the chosen query</span>   |
| What is the behaviour for concierge result click? | <span style="color: green;">Goes to a page</span>    | <span style="color: green;">Goes to a page</span>  | <span style="color: green;">Goes to a page</span>   |
| What is the behaviour for concierge enter? | <span style="color: green;">Goes to a page</span>    | <span style="color: green;">Goes to a page</span>  | <span style="color: green;">Goes to a page</span>   |
| What is the tab behaviour? | <span style="color: orange;">Fills the input with the first suggestion</span>    | <span style="color: orange;">Fills the input with the first suggestion</span>  | <span style="color: green;">Iterates through results (WCAG compatible)</span>   |
| What is the behaviour of arrow-down? | <span style="color: green;">Iterates through results</span>    | <span style="color: green;">Iterates through results</span>  | <span style="color: green;">Iterates through results (rows)</span>   |
| What is the behaviour of side-arrows? | <span style="color: red;">None</span>    | <span style="color: red;">None</span>  | <span style="color: green;">Iterates through results (columns)</span>   |
| Can hide if no results are fetched? | <span style="color: orange;">Yes, via “ifology” in the template</span>    | <span style="color: orange;">Yes, via “ifology” in the template</span>  | <span style="color: green;">Yes, via one variable</span>   |
| Can hide global header and footer on no results? | <span style="color: red;">No</span>    | <span style="color: red;">No</span>  | <span style="color: green;">Yes, via one variable</span>   |
| Can hide individual headers and footers on no results? | <span style="color: orange;">Yes, via “ifology” in the template</span>    | <span style="color: orange;">Yes, via “ifology” in the template</span>  | <span style="color: green;">Yes, via one variable</span>   |
| Can display hints in the input? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: red; text-decoration: underline;" title="We decided we won't add it, as it is not user friendly and not accessibility friendly.">No</span>   |
| Can destroy events and relations which were defined? | <span style="color: green;">Yes</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Can add an URL parameter which has not been defined by creators? | <span style="color: red;">No</span>    | <span style="color: green;">Yes</span>  | <span style="color: green;">Yes</span>   |
| Can define default results to show when nothing is typed? | <span style="color: red;">No</span>    | <span style="color: green;">Yes</span>  | <span style="color: orange;">Yes, via “No results” template</span>   |
| Can group items by some category? | <span style="color: orange;">Yes, via “ifology” in the template</span>    | <span style="color: green;">Yes</span>  | <span style="color: orange; text-decoration: underline;" title="It won't be changed, as it is a crucial thing, that templates should be flexible. It's marked to yellow, as it's a bit harder to achieve than in another library.">Yes, via “ifology” in the template</span>   |
| Can control data source which comes from Funnelback (JSON/JSONP)? | <span style="color: red;">No</span>    | <span style="color: green;">Yes</span>  | <span style="color: red; text-decoration: underline;" title="JSON that is returned is enough. We won't add any other types in the future.">No</span>   |
| Can transform data which comes from the endpoint? | <span style="color: red;">No</span>    | <span style="color: green;">Yes, via special template</span>  | <span style="color: green;">Yes, via events</span>   |
| Does it add functional accessibility attributes (eg. wai-aria attributes)? | <span style="color: red;">No</span>    | <span style="color: red;">No</span>  | <span style="color: green;">Yes</span>   |
| <strong>Positive</strong> | <span style="color: green;">19</span>    | <span style="color: green;">22</span>  | <span style="color: green;">🏆 &nbsp;&nbsp;<strong>36</strong></span>   |
| <strong>Neutral</strong> | <span style="color: orange;">10</span>    | <span style="color: orange;">11</span>  | <span style="color: orange;">🏆 &nbsp;&nbsp;<strong>4</strong></span>   |
| <strong>Negative</strong> | <span style="color: red;">13</span>    | <span style="color: red;">10</span>  | <span style="color: red;">🏆 &nbsp;&nbsp;<strong>3</strong></span>   |

## Basic concepts

There are two basic concepts related with FBAC that help you to create your own Funnelback autocomplete/concierge.

In order to make FBAC work you need to [install FBAC](0-getting-started-1-installation.md), create HTML markup for an input bar and FBAC container, and create a configuration JavaScript with settings and templates.

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

