---
id: tutorial
title: Tutorial
---

This is simple tutorial, showing step by step how to set up basic FBAC.

## Step 1: Download FBAC

1. Download FBAC from `global/lib` respository and place it inside of your repository.
2. Put a script tag with FBAC above your main js script in footer of website.

Example

```html
<footer>
  <!--
        Some other scripts here
    -->
  <script src="./latest/fbac.min.latest.js" type="text/javascript"></script>
  <!--
        Some other scripts here
    -->
</footer>
```

## Step 2: Add HTML markup

```html
<!--
    Rest of your HTML page
-->
<main>
  <form>
    <input type="text" name="query" id="search" autocomplete="off" />
    <button type="submit">Submit</button>
  </form>
  <div id="fbac"></div>
</main>
<!--
    Rest of your HTML page
-->
```

## Step 3: Add configuration

Next step would be to add configuration of your FBAC instance. For that we will need additional js file (or you can add configuration to your currently existing global javascript file). Add only those properties that are different from default configuration.

Make sure that file that contains the configuration is located below FBAC script like so:

```html
<footer>
  <!--
        Some other scripts here
    -->
  <script src="./latest/fbac.min.latest.js" type="text/javascript"></script>
  <script src="./js/global.js" type="text/javascript"></script>
  <!--
        Some other scripts here
    -->
</footer>
```

Example

```js
// rest of JS file
const concierge = new FBAC.default({
  input: '#search',
  inject: '#fbac',
  url: 'https://mercator3-search01.squiz.co.uk/s/suggest.json',
  urlParts: {
    collection: 'push-global-port-strategy',
  },
  scaffold(templates) {
    return `
      ${templates.noResults}

      ${templates.header}

      <div class="fbac__headers">
          ${templates.defaultName.header}
      </div>

      <div class="fbac__all-results">
          ${templates.defaultName.results}
      </div>

      <div class="fbac__footers">
          ${templates.defaultName.footer}
      </div>

      ${templates.footer}
    `;
  },
  fb: [
    {
      id: 'defaultName',
      urlParts: {
        collection: 'push-meta-port-strategy',
      },
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
  ],
});

concierge.init();
// rest of JS file
```

## Step 4: Change static FBAC for Git Bridge

If you are implementing your autocomplete in Matrix CMS, change your fbac file to use Git Bridge.

[Read how to do it here](0-getting-started-0-installation.md#installing-fbac-in-matrix-cms)
