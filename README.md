# datastudio-visualizations

This repo is to help mature the Google DataStudio Community Visualizations feature.

Follow the Google Developers codelab [here](https://codelabs.developers.google.com/codelabs/community-visualization/#0)

# Overview

* Uses npm and webpack scripts to combine/uglify/minify javascript dependencies.
* Add packages and libraries via npm or create locally in ./src, then use regular require/import in javascript to pull in dependencies.
* Pushes your 'built' code to Google Cloud Storage bucket
* Support provided for development and production separation.

# Dependencies

* [npm](https://www.npmjs.com/get-npm)
* [gsutil](https://cloud.google.com/storage/docs/gsutil_install)

# Configuration

1. The configurable options are in the top level package.json. Modify the two Google cloud storage bucket paths (dev and prod) at a minimum.

    **NOTE:** The default filenames for the top level javascript, json, and css files are specified here - with the index.* naming convention.

    `${EDITOR} src/package.json`

    ```
    # package.json
    ...
    "config": {
        "comment": "---- Edit these config values as needed ----",
        "gcs_dev_bucket": "[YOUR GCS DEV BUCKET]",
        "gcs_prod_bucket": "[YOUR GCS PROD BUCKET]",
        "js_file": "index.js",
        "json_file": "index.json",
        "css_file": "index.css",
        "manifest_file": "manifest.json"
    },
    ...
    ```

2. Modify the src/manifest.json file to include your bucket path and ensure uniform file naming convention for the filetypes. Eg: if you change top level index.js file to be custom name myViz.js change here and in package.json as mentioned above.

    `${EDITOR} src/manifest.json`


# Installation

`npm install # do once`

# Write your Visualization

```
${EDITOR} src/index.js      # visualization code
${EDITOR} src/index.css     # visualization styling
${EDITOR} src/index.json    # visualization config
```
# Build

```
# development
npm run build:dev

# production (minifies code, etc)
npm run build:prod
```

Build phase will run webpack to parse your javascript files and imported libraries to package everything into a single file in ./dist/index.js. The other files from ./src (eg: index.css/index.json/manifest.json) are copied over to ./dist as well.

# Push

```
# development
npm run push:dev

# production
npm run push:prod
```

Push phase copies the four required files from ./dist (index.js/index.json/index.css/manifest.json) up to your Google Cloud Storage bucket.

# Use Datastudio to See Visualization

Import the visualization by referencing your GCS bucket per instructions from the codelab above.
