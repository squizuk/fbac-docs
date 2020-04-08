---
id: overview
title: Overview
---

Configuration is an object that you add in your JavaScript file. It allows you to initialize FBJS and customise it to your needs. It is split to few different categories, which makes it easier to understand the concept behind it. Most of the fields within configuration has it's default state, which you don't need to update or overwrite unless you want to change it.

In next chapters, you will learn about each of the fields that you may use for your configuration.

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| **General** | | | |
| [`url`](1-configuration-1-general.md#url-funnelback-url)         | `string` | `''`        	    | yes       |
| [`collections`](1-configuration-1-general.md#collections-funnelback-collection) | `array of strings` | `[]`   | yes       |
| [`additionalFBparams`](1-configuration-1-general.md#additionalfbparams-additional-parameters) | `object`   | `{}`          | no        |
| [`activeFacetsOnStart`](1-configuration-1-general.md#activefacetsonstart-active-facets-on-start) | `object`   | `{}`          | no        |
| [`shouldFacetsFromUrl OverwriteActiveFacets`](1-configuration-1-general.md#shouldfacetsfromurloverwriteactivefacets-active-facets-priority) | `boolean`   | `false`          | no        |
| [`updateUrlOnSearch`](1-configuration-1-general.md#updateurlonsearch-update-url-after-new-search) | `boolean`   | `true`          | no        |
| [`keepSearchHistory`](1-configuration-1-general.md#keepsearchhistory-keep-history-of-search-in-browser) | `boolean`   | `true`          | no        |
| **Query** | | | |
| [`query > value`](1-configuration-2-query.md#value-value-of-query)         | `string` | `'!nullsearch'`        	    | no       |
| [`query > canBeChanged`](1-configuration-2-query.md#canbechanged-can-the-query-be-changed) | `bollean` | `true`   | no       |
| **Results** | | | |
| [`results > target`](1-configuration-3-results.md#target-location-of-results-in-dom)         | `string` | `'.results'`        	    | no       |
| [`results > numRanks`](1-configuration-3-results.md#numranks-number-of-results-per-page) | `number` | `15`   | no       |
| [`results > startRank`](1-configuration-3-results.md#startrank-starting-search-result) | `number` | `1`   | no       |
| [`results > highlight`](1-configuration-3-results.md#highlight-highlight-query-in-search-results) | `bollean` | `true`   | no       |
| [`results > highlightClass`](1-configuration-3-results.md#highlightclass-class-for-highlight-span) | `string` | `highlight`   | no       |
| **Pagination** | | | |
| [`pagination > target`](1-configuration-4-pagination.md#target-location-of-results-in-dom)         | `string` | `'.pagination'`        	    | no       |
| [`pagination > loadMore`](1-configuration-4-pagination.md#loadmore-change-loading-type-to-load-more) | `boolean` | `false`   | no       |
| [`pagination > arrows`](1-configuration-4-pagination.md#arrows-show-arrows-on-pagination-sides) | `boolean` | `true`   | no       |
| [`pagination > arrowsOnEdgePages`](1-configuration-4-pagination.md#arrowsonedgepages-show-arrows-on-pagination-when-being-on-1st-or-last-page) | `boolean` | `false`   | no       |
| [`pagination > dots`](1-configuration-4-pagination.md#dots-show-dots-between-pages) | `boolean` | `true`   | no       |
| [`pagination > edgePages`](1-configuration-4-pagination.md#edgepages-show-first-and-last-page-if-there-s-a-lot-of-pages) | `boolean` | `true`   | no       |
| [`pagination > pages`](1-configuration-4-pagination.md#pages-amount-of-pages-on-sides-of-active-page) | `number` | `2`   | no       |
| **Scroll** | | | |
| [`scroll > enable`](1-configuration-5-scroll.md#enable-decide-if-you-want-to-use-the-feature)         | `boolean` | `false`        	    | no       |
| [`scroll > target`](1-configuration-5-scroll.md#target-fbjs-will-scroll-up-to-the-top-of-target-element)         | `string` | `'.results'`        	    | no       |
| [`scroll > offset`](1-configuration-5-scroll.md#offset-offset-on-scroll)         | `string` | `'50'`        	    | no       |
| [`scroll > animation`](1-configuration-5-scroll.md#animation-type-of-animation)         | `string` | `'smooth'`        	    | no       |
| **Information** | | | |
| [`information > target`](1-configuration-6-information.md#target-location-of-results-in-dom)         | `string` | `'.information'`        	    | no       |
| **Sort** | | | |
| [`sort > target`](1-configuration-7-sort.md#target-location-of-results-in-dom)         | `string` | `'.sort'`        	    | no       |
| [`sort > type`](1-configuration-7-sort.md#type-default-sort-type)         | `string` | `'relevance'`        	    | no       |
| **Search** | | | |
| [`search > target`](1-configuration-8-search.md/#target-location-of-results-in-dom)         | `string` | `'.form'`        	    | no       |
| [`search > inputId`](1-configuration-8-search.md/#inputid-id-of-the-main-search-input)         | `string` | `'search-queryinput'`        	    | no       |
| [`search > resetFacets`](1-configuration-8-search.md/#resetfacets-resets-selected-facets-on-new-search)         | `boolean` | `true`        	    | no       |
| **Location** | | | |
| [`location > target`](1-configuration-9-location.md#target-location-of-results-in-dom)         | `string` | `'.location-form'`        	    | no       |
| [`location > inputId`](1-configuration-9-location.md#inputid-id-of-the-location-search-input)         | `string` | `'search-locationquery'`        	    | no       |
| [`location > buttonId`](1-configuration-9-location.md#buttonid-id-of-the-button-for-current-location)    | `string` | `get-location-btn`        | no       |
| [`location > maxDist`](1-configuration-9-location.md#maxdist-max-distance-of-result)         | `number` | `18000000`        	    | no       |
| **Facets** | | | |
| [`facets > target`](1-configuration-10-facets.md#onfiltersupdate-when-user-changes-filters)         | `string` | `'.facets'`        	    | no       |
| [`facets > items`](1-configuration-10-facets.md#onnoresultspageupdate-when-there-are-no-results-for-query)         | `array` | `[]`        	    | no       |
| **Active Facets** | | | |
| [`activeFacets > target`](1-configuration-11-active-facets.md#target-location-of-results-in-dom)         | `string` | `'.active-facets'`        	    | no       |
| **Contextual Navigation** | | | |
| [`contextualNavigation > target`](1-configuration-12-contextualNavigation.md#target-location-of-results-in-dom)         | `string` | `'.context-nav'`        	    | no       |
| [`contextualNavigation > items`](1-configuration-12-contextualNavigation.md#items-clusters-names) | `array of strings` | `[]` | no
| **Loader** | | | |
| [`loader > target`](1-configuration-13-loader.md#target-location-of-results-in-dom)         | `string` | `'.results'`        	    | no       |
| [`loader > class`](1-configuration-13-loader.md#class-css-class-attached-to-loader) | `string` | `'.loader-cloak'` | no
| **Best Bets** | | | |
| [`bestBets: target`](1-configuration-14-bestBets.md#target-location-of-results-in-dom)         | `string` | `'.best-bets'`        	    | no       |
| **No results** | | | |
| [`noResults: target`](1-configuration-15-noResults.md#target-location-of-results-in-dom)         | `string` | `'.no-results'`        	    | no       |
| **Events** | | | |
| [`onFiltersUpdate`](1-configuration-16-events.md#onfiltersupdate-when-user-changes-filters)         | `function` | `() => {}`        	    | no       |
| [`onNoResultsPageUpdate`](1-configuration-16-events.md#onnoresultspageupdate-when-there-are-no-results-for-query)         | `function` | `() => {}`        	    | no       |
| [`onSearch`](1-configuration-16-events.md#onsearch-when-user-searches-for-query)         | `function` | `() => {}`        	    | no       |

#### Example of full default FBJS configuration

```js
const defaultConfig = {
  templates: {},
  url: '',
  query: {
    value: '!nullsearch',
    canBeChanged: true,
  },
  collections: [],
  /**
   * updateUrlOnSearch:
   *  when searching or changing result pages - should the URL update to reflect changes?
   */
  additionalFBparams: {},
  activeFacetsOnStart: {},
  shouldFacetsFromUrlOverwriteActiveFacets: false,
  updateUrlOnSearch: true,
  keepSearchHistory: true,
  results: {
    target: '.results',
    numRanks: 15,
    startRank: 1,
    highlight: true,
    highlightClass: 'highlight',
  },
  pagination: {
    target: '.pagination',
    loadMore: false,
    arrows: true,
    arrowsOnEdgePages: false,
    dots: true,
    edgePages: true,
    pages: 2,
  },
  information: {
    target: '.information',
  },
  sort: {
    target: '.sort',
    type: 'relevance',
  },
  search: {
    target: '.form',
    inputId: 'search-queryinput',
    resetFacets: true,
  },
  location: {
    target: '.location-form',
    inputId: 'search-locationquery',
    buttonId: 'get-location-btn',
    maxDist: 18000000,
  },
  facets: {
    target: '.facets',
    items: [],
  },
  activeFacets: {
    target: '.active-facets',
  },
  contextualNavigation: {
    target: '.context-nav',
    items: []
  },
  loader: {
    class: '.loader-cloak',
    target: '.results',
  },
  bestBets: {
    target: '.best-bets',
  },
  noResults: {
    target: '.no-results',
  },
  onFiltersUpdate: () => {},
  onNoResultsPageUpdate: () => {},
  onSearch: () => {},
};
```

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