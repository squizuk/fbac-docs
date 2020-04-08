const mySearch = new Search.default({
    url: 'https://showcase.funnelback.com/s/search.json',
    collections: ['showcase-faceted-navigation'],
    additionalFBparams: {
      profile: '_default',
    },
    query: {
      // value: 'contact', // Add this value if you want to hardcode starting query for search
      // canBeChanged: false, // define if it can be changed by user or not
    },
    activeFacetsOnStart: {
      // 'f.Audience%7Ce': 'Investor', // add active facets  for starting search
      // 'f.Category|locationTags': 'Care Home',
    },
    shouldFacetsFromUrlOverwriteActiveFacets: true,
    results: {
      numRanks: 10,
      highlight: false,
    },
    pagination: {
      pages: 1,
      loadMore: false,
      edgePages: true,
      showDots: true
    },
    sort: {
      type: 'prox',
    },
    facets: {
      items: [
        {
          name: 'Type',
          type: 'select',
          options: {
          }
        },
        {
          name: 'Functions',
          type: 'checkbox',
          options: {
            singleChoice: false,
            facetsRestricted: true,
          }
        },
      ]
    },
    contextualNavigation: {
      items: ['topic', 'type']
    },
    templates: {
      articleTemplate: (fields, highlightFields) => {
        return `
            <div>
                <h1>${fields.metaData.title}</h1>
                <p>${fields.metaData.description}</p>
                <p><a href="${fields.liveUrl}">Read more</a></p>
            </div>
        `;
      },
      sortTemplate: (value) => {
        return `
            <label for="sort">Sort by: </label>
            <select data-function="sorting" id="sort" selected=${value}>
                <option value="relevance">Relevance</option>
                <option value="metatitle">A-Z</option>
                <option value="dmetatitle">Z-A</option>
                <option value="date">Date Ascending</option>
                <option value="adate">Date Descending</option>
            </select>
        `;
      },
      facetSelect: ({ name, categories }, options, activeFacets, h) => {
        const header = `<label>${name}</label>`;
        let selectItems = '';
    
        if (options.defaultValue) selectItems += `<option disabled selected>${options.defaultValue}</option>`;
        selectItems += '<option value=""> all</option>';
        console.log(categories);
        categories.forEach((category) => {
          category.values.forEach((item) => {
            selectItems += `<option ${item.selected} value="${item.data}">
                          ${item.label} (${item.count})
                      </option>`;
          });
        });
    
        return `<div class="select-facet">
                    ${header}
                    <select data-facet="${name}" data-fparam="${h.queryStringParamName}">
                        ${selectItems}
                    </select>
                </div>`;
    }
    },
  });
  
  setTimeout(() => {
    mySearch.init();
  }, 10);
  