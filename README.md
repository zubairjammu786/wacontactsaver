# WA Contacts Saver Chrome Extension

![GitHub repo size](https://img.shields.io/github/repo-size/zubairjammu786/wacontactsaver?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/zubairjammu786/wacontactsaver?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/zubairjammu786/wacontactsaver?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/zubairjammu786/wacontactsaver?style=for-the-badge)

## Overview

WA Contacts Saver is a Chrome extension that allows you to manually save phone numbers by editing the `content.js` file. It enhances your WhatsApp experience by providing a convenient way to replace phone numbers with custom names.

## Features

- **Custom Contact Names:** Replace phone numbers with personalized names in your WhatsApp chats.
- **Manual Number Saving:** Users need to manually edit the `content.js` file to save custom names for phone numbers.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zubairjammu786/wacontactsaver.git
2. Open Chrome and navigate to chrome://extensions/.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the folder where you cloned the repository.

## Usage

After installation, open WhatsApp Web in your Chrome browser.
To save a custom name for a phone number, manually edit the content.js file in the extension folder.

```
let name = phoneNumber;
switch (phoneNumber) {
  case '+92 321 1331252':
    name = 'Zubair';
    break;
  // Add more cases for other phone numbers
}
```

Add more cases to the switch statement for other phone numbers you want to customize.
Save the changes to content.js.
Refresh your WhatsApp Web page, and the custom names should be applied.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the extension.
