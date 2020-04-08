---
id: configupdate
title: configUpdate
---

This event can be useful for changing some parts of current state of FBJS configuration. For example, it will allow you to change sort value or amount of results on some particular event.

```
const mySearch = new Search.default({
    // ... some configuration fields
    onSearch: () => {
        mySearch.configUpdate('sort', 'title');
    }
    // ... some other configuration fields
});

mySearch.configUpdate(<configAttributeName>, <configAttributeValue>)
```

### Parameters

| Parameter 	  | Type 	     | Description |
|-------------	|----------- |--------------	|
| `configAttributeName` | `string` | Name of attribute you want to change (list of available attributes below) |
| `configAttributeValue` | `any` | Value of attribute you want to change (make sure that value will make sense for the configuration you are changing) |

### Supported configuration fields

| Attribute | Type |
|-----------------|------|
| `collection` | `string` |
| `location` | `string` |
| `numRanks` | `number` |
| `query` | `string` |
| `sort` | `string` |
| `startRank` | `number` |

```
const mySearch = new Search.default({
    // ... some configuration fields
    onSearch: () => {
        mySearch.configUpdate('sort', 'title');
    }
    // ... some other configuration fields
});

// Changing sort
mySearch.configUpdate('sort', 'title');

// Changing startRank
mySearch.configUpdate('startRank', 20);
```


### How to use

#### Example 1

You can access this event from external function to change sort value on some listener

```
/* This part is irrelevant, just a simple configuration of fbjs */
const mySearch = new Search.default({
    // ... some configuration fields
    url: 'http://showcase.funnelback.com/s/search.json',
    collections: ['general-search'],
    additionalFBparams: {
      'profile': '_default',
    },
    activeFacetsOnStart: {
      'f.Category|category': 'Videos',
      'f.Keyword|keyword': 'short',
    },
    shouldFacetsFromUrlOverwriteActiveFacets: true,
    updateUrlOnSearch: false,
    keepSearchHistory: false
    // ... some other configuration fields
});

mySearch.init();

/* This part is important */

const target = document.getElementById('some-btn')
target.addEventListener('click', () => {
    mySearch.configUpdate('sort', 'title');
});
```

#### Example 1

You can access this event from inside of configuration events. In this example, we are changing the sort type after each search happens.

```
const mySearch = new Search.default({
    // ... some configuration fields
    onSearch: () => {
        mySearch.configUpdate('sort', 'title');
    }
    // ... some other configuration fields
});

mySearch.init();
```