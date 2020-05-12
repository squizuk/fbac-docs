const concierge = new FBAC.default({
  input: "#search",
  inject: "#fbac",
  highlight: true,
  scaffold(templates) {
    return `
          ${templates.noResults}

          ${templates.header}

          <div class="fbac__headers">
              ${templates.mercator_1.header}
          </div>

          <div class="fbac__all-results">
              ${templates.mercator_1.results}
              ${templates.mercator_1.noResults}

          </div>

          <div class="fbac__footers">
              ${templates.mercator_1.footer}
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
    }
  ]
});

concierge.init();