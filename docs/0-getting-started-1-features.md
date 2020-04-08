---
id: features
title: FBJS Features
---

Before you decide to use FBJS on your project, you should check if there's enough features available for your requirements.

## General
- It's possible to define starting query of search
- You can add starting parameters to funnelback endpoint request
- You can initialize your own functions when there's change in facets or when search happens
- Every single part of search page can have it's individual html template and declared place in DOM

## Search Bar

- You can have a input field on your search page which will reload the content of the page after typing the query.
- It's possible to replace the content of input fields after each search using JavaScript.

## Information Bar

- There's information bar which prints information about query, amount of results and most of the fields available in `resultsSummary` object in Funnelback endpoint.

## Location Bar

- You can print an input for location (address or postcode) which will sort results from closest to given location.

## Facets

- You can have two standard types of facets: `checkbox` and `select`.
- It's possible to add different template to each facet.
- You can have different Label for facet than the name in endpoint.
- Each facet can be located in different place around DOM.
- You can group them within same DOM parent or place them in separate parent nodes.
- It's possible to declare which facets should be selected on start

## Articles

- Single article can use all the fields available under `results` object.
- You can decide how many articles per page should be visible.
- You can create own styling of that element.


## Pagination

- You can choose between "load more" or "classic" pagination
- Load more pagination will load additionally same amount of items that is printed at the beggining
- Classic pagination has multiple settings that allow you to customise it

> If there are very specific requirements for pagination please read carefully section about [config of pagination](1-configuration-4-pagination.md)

## Active facets

- You can print facets that were selected as a list of buttons
- Clicking on one of the buttons can unselect particular facet

