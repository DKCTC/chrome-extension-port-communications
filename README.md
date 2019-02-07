# chrome-extension-port-communications
Script to unify the broadcast, port, and tab messaging functionality, adds ability to use sendMessage syntax with portMessage, including callbacks

Full documentation coming soon! For now, there are js files with some samples in them. There are also notes in the code itself.

Tested through **Chrome 72**

## Usage

Include **unified-portcommunications.js** in the manifest entry for the content script and the background page, or as a regular script in an extension page.

**Suggested usage** - include this script on <all_urls> and the background page so that it'll be available to all content scripts. _This is required if you want to use **chrome-extension-codemirror-content-script** [GitHub](https://github.com/dkline03/chrome-extension-codemirror-content-script), **chrome-extension-unified-keydown** [GitHub](https://github.com/dkline03/chrome-extension-unified-keydown), or **chrome-extension-leap-motion-content-script** [GitHub](https://github.com/dkline03/chrome-extension-leap-motion-content-script)_

### Sample usage:

**Content script and browser action menu usage:**

Follow the examples in *contentscript-sample-portcommunications.js*


**Background page usage:**

Follow the examples in *background-sample-portcommunications.js*

## Support

Please submit an issue.


## License

Copyright (c) 2019 dkline03

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
