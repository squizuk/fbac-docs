---
id: tutorial
title: Tutorial
---

This is a simple tutorial, a step by step guidance on how to set up basic FBAC config.

## Step 1: Download FBAC

1. Download FBAC from `global/lib` respository and place it inside of your repository.
2. Put a script tag with FBAC above your main JS script in a footer of website.

Example

```html
<footer>
  <!--
        other libraries go here
    -->
  <script src="./latest/fbac.min.latest.js" type="text/javascript"></script>
  <!--
        main.js goes here
    -->
</footer>
```

## Step 2: Add HTML markup

```html
<!--
    rest of your HTML page
-->
  <form>
    <input type="text" name="query" id="search" autocomplete="off" />
    <button type="submit">Submit</button>
  </form>
  <div id="fbac"></div>
<!--
    rest of your HTML page
-->
```

## Step 3: Add configuration

A next step would be to add the configuration of your FBAC instance. For that, we will need an additional JS file (or you can add the configuration to your currently existing global main JS file). Add only those properties that are different from default configuration - rest is filled automatically by the library.

Make sure that a file that contains the configuration is located below FBAC script like so:

```html
<footer>
  <!--
        some other scripts here
    -->
  <script src="./latest/fbac.min.latest.js" type="text/javascript"></script>
  <script src="./js/global.js" type="text/javascript"></script>
  <!--
        some other scripts here
    -->
</footer>
```

## Step 4: Change static FBAC script for the one from Git Bridge

If you are implementing your autocomplete in Matrix CMS, change your FBAC static file to the one from Git Bridge.

[Read how to do it here](0-getting-started-1-installation.md#installing-fbac-in-matrix-cms)
