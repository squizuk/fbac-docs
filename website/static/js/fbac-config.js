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

setTimeout(() => {
  concierge.init();
}, 10);
