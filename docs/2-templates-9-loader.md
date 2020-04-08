---
id: loadertemplate
title: Loader Template
---

Template for a loader, which is visible when FBJS is processing requests from Funnelback.

> In configuration on loader, you can check the default styles that we usually use for it, to look consistent across different projects.

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Default template

```js
loaderTemplate: () => {
    return `
        <div class='loader-cloak'>
            <div class="loader">Loading...</div>
        </div>
    `;
}
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.results` and should be used as long as you won't change it inside of configuration.

```html
<div class="results"></div>
```

> Loader is attached to HTML class of results, so make sure not to duplicate it!

##### [Read how to change default target class name](1-configuration-12-contextualNavigation.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Loader`](1-configuration-13-loader.md) - Read about configuration of Loader.
2. [`Results`](1-configuration-3-results.md) - Read about results, where you can change target class