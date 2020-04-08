---
id: installation
title: Installation
sidebar_label: Installation
---

There are couple of ways how you can install FBJS on your project. You might want to use few of them in order to provide the best result.

## Installing FBJS in your boilerplate

If you are using some boilerplate to cut-up your project you should copy the file with FBJS and put it inside of your repository.

> Keep in mind, you should not inject it into your production js script. [Read about using FBJS in Matrix CMS](#installing-fbjs-in-matrix-cms)

1. Download FBJS from `global/lib` respository and place it inside of your repository
2. Put a script tag with FBJS above your main js script in footer of website.

## Installing FBJS in Matrix CMS

If you are using Matrix CMS to implement search engine results page with FBJS you should create Git Bridge and put the script tag with library from repository above main js script.

> You will need to add deploy key in repository to be able to pull the repo in Matrix.

1. Create Git Bridge in Matrix CMS
2. Add Matrix's public key to Deploy Keys in Gitlab Repository.
3. Add `global/lib` repository to Git Bridge.
3. Pull `fbjs` folder from repository inside of Git Bridge.
4. Put the script tag with library from repository above main js script.

```js
<script defer type="text/javascript" src="%globals_asset_url_with_hash:<GIT_BRIDGE_ID>:fbjs/v1/fbjs-stable.js%"></script>
```

5. Replace `<GIT_BRIDGE_ID>` with ID of your Git Bridge in Matrix