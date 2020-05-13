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

setTimeout(() => {
  concierge.init();
}, 10);
