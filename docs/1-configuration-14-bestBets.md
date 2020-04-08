---
id: bestbets
title: Best Bets
---

In this object you can set up options for Best Bet.

[Read more about Best Bet in Funnelback Docs](https://docs.funnelback.com/15.20/customise/standard-options/best-bets.html)

## Summary

| Parameter 	  | Type 	     | Default value 	| Required 	|
|-------------	|----------- |--------------	|----------	|
| [`target`](#target-location-of-results-in-dom)         | `string` | `'.best-bets'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    bestBets: {
        target: '.information',
    },
    // ... some other configuration fields
});

mySearch.init();
```

## `target` - location of results in DOM

It's adviced to keep the target classes default (to make it simplier), but if you need to attach Best Bet to some particular class (i.e. if you can't change HTML) you can add the class name here.

| Parameter 	         | Type 	    | Default value | Required 	|
|--------------------- |----------- |--------------	|----------	|
| `target`        | `string` | `'.best-bets'`        	    | no       |

```js
const mySearch = new Search.default({
    // ... some configuration fields
    bestBets: {
        target: '.best-bets',
        // ... some other configuration fields
    },
    // ... some other configuration fields
});

mySearch.init();
```