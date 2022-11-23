const concierge = new FBAC.default({
    input: "#search",
    inject: "#fbac",
    highlight: false,
    bindEvents: true,
    focusTrap: {
        focusTrapSelector: "", // #fbac-focustrap
        closeButtonSelector: "" // #fbac__close
    },
    behaviour: {
        autocompleteClick: "none",
        autocompleteEnter: "none"
    },
    events: {
        beforeFetch(query) {
            this.query = query.replace(/-/g, " ");
        }
    },
    scaffold(templates) {
        return `
            ${templates.noResults}

            ${templates.header}

            <div class="fbac__headers">
                ${templates.test_1.header}
                ${templates.test_2.header}
                ${templates.test_3.header}
            </div>

            <div class="fbac__all-results">

                ${templates.test_1.results}

                <div class="fbac__concierge fbac__concierge--no-border">
                ${templates.test_2.results}
                ${templates.test_2.noResults}
                </div>
            

                <div class="fbac__divider"></div>

                <div class="fbac__concierge">
                    ${templates.test_3.results}
                    ${templates.test_3.noResults}
                </div>

            </div>

            <div class="fbac__footers">
                ${templates.test_1.footer}
                ${templates.test_2.footer}
                ${templates.test_3.footer}
            </div>

            ${templates.footer}
        `;
    },
    url: "https://wood-search01.squiz.co.uk/s/suggest.json",
    urlParts: {
        collection: "wood-meta",
        profile: "autocomplete",
    },
    fb: [
        {
            id: "test_1",
            display: {
                headerOnNoResults: false,
                footerOnNoResults: false,
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
                },
            },
        },
        {
            id: "test_2",
            url: "https://damod-search.clients.uk.funnelback.com/s/suggest.json",
            urlParts: {
                collection: "dare-topics",
                profile: "auto-completion"
            },
            templates: {
                result(data, eventClass, baseUrl) {
                    return `
                    <a href="${
                        baseUrl + data.action || "#"
                    }" class="fbac__result ${eventClass}" target="_blank">
                        ${
                            data.disp.title
                                ? `${data.disp.title}
                        <div class="fbac__category">
                          ${data.disp.metaData.assetID}
                        </div>
                        `
                                : data.disp
                        }
                    </a>
                  `;
                }
            }
        },
        {
            id: "test_3",
            urlParts: {
                collection: "push-wood-financial-news",
            },
            templates: {
                header(data) {
                    return `
                    <div class="fbac__header">
                      Searching for \`${data.query}\` in different collection
                    </div>
                  `;
                },
                result(data, eventClass, baseUrl) {
                    return `
                    <a href="${baseUrl + data.action}" class="fbac__result ${eventClass}" target="_blank">
                        ${data.disp}
                    </a>
                  `;
                },
            },
        },
    ],
});

concierge.init();
