---
id: bestbettemplate
title: Best Bets Template
---

[Read more about Best Bet in Funnelback Docs](https://docs.funnelback.com/15.20/customise/standard-options/best-bets.html)

_Read more about [adding new templates](2-templates-0-overview.md#adding-new-templates)._

## Parameters
| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `bestBets` | `object` | Object with all best bets |

## Default Template

```js
bestBets: (bestBets) => {
    const header = '<h2>Best Bets</h2>';
    let body = '';
    bestBets.forEach((item) => {
        body += `<div class="best-bets__item">
                    <h3><a href="${item.linkUrl}">${item.titleHtml}</a></h3>
                    <p>${item.descriptionHtml}</p>
                </div>`;
    });

    return header + body;
},
```

## HTML

If you want this template to be printed on search page, you need to include HTML DOM element on your page. By default the class for that part of search is `.best-bets` and should be used as long as you won't change it inside of configuration.

```html
<div class="best-bets"></div>
```

##### [Read how to change default target class name](1-configuration-14-bestBets.md#target-location-of-results-in-dom)

## Configuration properties important for the template

1. [`Best Bets`](1-configuration-14-bestBets.md) - Read about best bets.