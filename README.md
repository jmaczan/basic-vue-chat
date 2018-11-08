# basic-vue-chat

[![Build Status](https://api.travis-ci.com/jmaczan/basic-vue-chat.svg?branch=master)](https://travis-ci.com/jmaczan/basic-vue-chat)

<img src="https://raw.githubusercontent.com/jmaczan/basic-vue-chat/master/preview.png" width="506" height="406" class="center">

Implementation of Vue-based chat.

- [basic-vue-chat](#basic-vue-chat)
  * [Installation](#installation)
  * [Usage](#usage)
    + [Pushing messages](#pushing-messages)
    + [Handling messages from user](#handling-messages-from-user)
    + [Mock data](#mock-data)
  * [Customization](#customization)
    + [Title](#title)
    + [Initial data](#initial-data)
    + [Styling](#styling)
  * [Code structure](#code-structure)
  * [Technologies used](#technologies-used)

## Installation

You can install the component using package managers, such as npm or yarn or install component from the repository.

### npm
```bash
npm i basic-vue-chat
```

### yarn
```bash
yarn add basic-vue-chat
```

### using repository
```bash
git clone https://github.com/jmaczan/basic-vue-chat.git
cd basic-vue-chat
npm i
```

## Usage

Chat is a single Vue component, which you can find in `/src/components/basic-vue-chat/`. To start, just import BasicVueChat component and put the following line into your html code:
```html
<basic-vue-chat />
```

## Dependencies

Components uses only two dependencies - Vue (`vue` package)and Moment.js for Vue (`vue-moment`).

### Pushing messages

To push message to chat, just **pass newMessage prop to BasicVueChat**. Example:
```html
<basic-vue-chat :new-message="message" />
```

The `message` object above may be part of `data` in your Vue component in which you will use BasicVueChat.

Example of correct message structure:
```javascript
{
  id: 0,
  author: 'Person',
  contents: 'hi there',
  date: '16:30'
}
```

You can find example of message pushing in `App.vue` file.

### Handling messages from user

When user sends message, **the message is propagated to BasicVueChat component** and **event newOwnMessage is emitted**.  To handle this event, you can for example do this:
```html
<basic-vue-chat @newOwnMessage="onNewOwnMessage" />
```
where `onNewOwnMessage(message)` is a method in your Vue component in which you will use BasicVueChat.

Example of correct event payload structure:
```javascript
{
  id: 1,
  contents: 'hello',
  date: '16:31'
}
```

To start development, you can use hot reload mode:
```
npm run serve
```

To build production version:
```
npm run build
```

To run tests:
```
npm test
```

For demo purposes, there's a `Push message` button, which pushes another person's mock message to chat.

### Mock data

To attach mock data, just pass logic prop `attachMock` to BasicVueChat.

## Customization

### Title

Pass prop `title` to BasicVueChat component.
```html
<basic-vue-chat :title="'My Best Team'" />
```

### Initial data

Pass prop `initialFeed` to BasicVueChat component.
```html
<basic-vue-chat :initial-feed="feed" />
```
Example of correct data structure:
```javascript
const feed = [
  {
    id: 0,
    author: 'Person',
    contents: 'hi there',
    date: '16:30'
  },
  {
    id: 1,
    author: 'Me',
    contents: 'hello',
    date: '16:30'
  }
]
```

### Styling

Chat uses SCSS, so you can easily override variables used in project. You can find them in `/src/assets/scss/modules/_variables.scss`. All variables have default values.

| Description | Variable | Default value |
|---|---|---|
| Primary color | $primary | $slate-blue (#6B63D8) |
| Secondary color | $secondary | $lavender (#B284ED) |
| Header color | $header-color | $ghost-white (#FAF9FF) |
| Input background color | $input-background-color | $alice-blue (#F2EFFF) |
| Font family | $font-family | 'Source Sans Pro', sans-serif |
| Font weight | $font-weight | 400 |
| Font size | $font-size | 14px |
| Dark text color | $dark-text-color | $madison (#2C3E50) |
| Light text color | $light-text-color | $ghost-white (#FAF9FF) |
| Dark background color | $dark-bg | $madison (#2C3E50) |
| Light background color | $light-bg | $white (#FFFFFF) |
| Chat window width | $window-width | 500px |
| Chat window height | $window-height | 400px |
| Message max width | $message-max-width | 200px |

## Code structure

1. assets
    - Sass standard CSS code structure
    - Components styles in `partials` directory
    - Variables and settings in `modules` directory
2. components
    - chat's components are in subdirectories of `basic-vue-chat` directory
3. helpers
    - reusable helpers for scrolling functionalities
4. App.vue - runner file
5. main.js - project config


## Technologies used

1. JavaScript
    * Vue
    * Moment.js
2. HTML5
3. CSS
    * SCSS
    * BEM
4. Tests
    * Jest
    * Vue test utils
5. Tooling
    * npm
6. Continuous Integration
    * Travis CI
7. Linting
    * ESLint standard config

Developed and tested under macOS High Sierra 10.13 and Google Chrome 69.