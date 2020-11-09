---
id: installation
title: Installation
sidebar_label: Installation
---

There are a couple of ways how you can install FBAC on your project. You might want to use few of them in order to provide the best result.

## Installing FBAC in your boilerplate

If you are using some boilerplate to cut-up your project you should copy the file with FBAC and put it inside of your repository.

> Keep in mind, you should not inject it into your production js script. [Read about using FBAC in Matrix CMS](#installing-fbac-in-matrix-cms)

1. Download FBAC from `global/lib` respository and place it inside of your repository.
2. Put a script tag with FBAC above your main JS script in a footer of website.

## Installing FBAC in Matrix CMS

If you are using Matrix CMS to implement autocomplete and/or concierge with FBAC you should create a Git Bridge asset and put the script tag with the library from the repository above the main JS script.

> You will need to add a deploy key into the repository to be able to pull the repository in Matrix.

1. Create a Git Bridge asset in the Matrix CMS.
2. Add Matrix's public key to Deploy Keys in the Gitlab Repository.
3. Add `global/lib` repository to the Git Bridge.
4. Pull `fbac` folder from repository inside of the Git Bridge.
5. Put the script tag with library from the repository above main JS script.

```js
<script
  defer
  type="text/javascript"
  src="%globals_asset_url_with_hash:<GIT_BRIDGE_ID>:fbac/latest/fbac.min.latest.js%"
></script>
```

5. Replace `<GIT_BRIDGE_ID>` with the ID of your Git Bridge in Matrix.
