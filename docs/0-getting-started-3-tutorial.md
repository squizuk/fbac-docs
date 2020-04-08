---
id: tutorial
title: Tutorial
---

This is simple tutorial, showing step by step how to set up basic FBJS search page.

## Step 1: Download FBJS

1. Download FBJS from `global/lib` respository and place it inside of your repository.
2. Put a script tag with FBJS above your main js script in footer of website.

Example

```html
<footer>
    <!--
        Some other scripts here
    -->
    <script src="./js/fbjs-stable.js" type="text/javascript"></script>
    <!--
        Some other scripts here
    -->
</footer>
```

## Step 2: Add HTML markup

You can add HTML markup which is required for each of components to be rendered. 

> Remember that if you change any of `target` properties in FBJS configuration you will have to update those classes in your HTML markup.

```html
<!--
    Rest of your HTML page
-->
<main>
    <div class="flex-grid">
        <!-- Prints search form box -->
        <div class="form"></div>
        <!-- Prints location form box -->
        <div class="location-form"></div>
    </div>
    <div class="flex-grid info-bar">
        <!-- Prints information box -->
        <div class="information"></div>
        <!-- Prints sorting select -->
        <div class="sort"></div>
    </div>
    <!-- Prints no results page -->
    <div class="no-results"></div>
    <!-- Prints all the facets -->
    <div class="facets"></div>
    <div class="results-wrapper">
        <!-- Prints all active facets -->
        <div class="active-facets"></div>
        <!-- Prints all best bets -->
        <div class="best-bets"></div>
        <!-- Prints all results -->
        <div class="results"></div>
    </div>
    <!-- Prints pagination -->
    <div class="pagination"></div>
    <!-- Prints context navigation -->
    <div class="context-nav"></div>
</main>
<!--
    Rest of your HTML page
-->
```

## Step 3: Add configuration

Next step would be to add configuration of your FBJS instance. For that we will need additional js file (or you can add configuration to your currently existing global javascript file). Add only those properties that are different from default configuration.

Make sure that file that contains the configuration is located below FBJS script like so:

```html
<footer>
    <!--
        Some other scripts here
    -->
    <script src="./js/fbjs-stable.js" type="text/javascript"></script>
    <script src="./js/global.js" type="text/javascript"></script>
    <!--
        Some other scripts here
    -->
</footer>
```

Example

```js
// rest of JS file
const mySearch = new Search.default({
  url: 'https://showcase.funnelback.co.uk/s/search.json',
  collections: ['showcase-faceted-navigation'],
  additionalFBparams: {
    profile: '_default',
  },
  shouldFacetsFromUrlOverwriteActiveFacets: true,
  results: {
    numRanks: 10
  },
  pagination: {
    pages: 1,
    edgePages: true,
    showDots: true
  },
  sort: {
    type: 'prox',
  },
  facets: {
    items: [
      {
        name: 'Content type',
        type: 'checkbox',
        options: {
          singleChoice: true,
          facetsRestricted: true,
        }
      },
      {
        name: 'Keywords',
        type: 'checkbox',
        options: {
          singleChoice: true,
          facetsRestricted: true
        }
      },
    ]
  },
  contextualNavigation: {
    items: ['topic', 'type']
  },
  search: {
    resetFacets: false,
  },
});

mySearch.init();
// rest of JS file
```

## Step 4: Change static FBJS for Git Bridge

If you are implementing your search in Matrix CMS, change your fbjs file to use Git Bridge. 

[Read how to do it here](0-getting-started-0-installation.md#installing-fbjs-in-matrix-cms)