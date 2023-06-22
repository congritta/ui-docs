# @congritta-ui/base

__@congritta-ui/base__ is required module for all Congritta UI libs working.

## Let's install it

```shell
yarn add @congritta-ui/base
```

after this, import it once into entry point of your project (that file where `ReactDOM.render` or `ReactDOM.createRoot`):

```javascript
import '@congritta-ui/base';
```

If you need, you can import your CSS files AFTER importing @congritta-ui libs

## CSS Vars

Provide these CSS vars to apply some styles. What value to use as var value - you decide ("px" or "em" or "%" and so on)

<table>
  <tr>
    <th>CSS Variable</th>
    <th>CSS property when used</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>--cui-css-transition</code></td>
    <td><code>transition</code>, <code>animation</code></td>
    <td>
      Default CSS transition duration
    </td>
  </tr>
  <tr>
    <td><code>--cui-accent-color-...</code></td>
    <td><code>background</code>, <code>color</code>, <code>border-color</code> and more...</td>
    <td>
      Accent color shades (<code>--cui-accent-color-50</code>, <code>--cui-accent-color-100</code>,... <code>--cui-accent-color-900</code>) (step 100)
    </td>
  </tr>
  <tr>
    <td><code>--cui-inputs-height</code></td>
    <td><code>min-height</code>, <code>height</code></td>
    <td>
      Base height in pixels for text inputs, buttons, one-row textareas and so on
    </td>
  </tr>
  <tr>
    <td><code>--cui-inputs-horizontal-padding</code></td>
    <td><code>padding</code></td>
    <td>
      Horizontal padding between inputs edges and their contents
    </td>
  </tr>
  <tr>
    <td><code>--cui-buttons-gap</code></td>
    <td><code>gap</code></td>
    <td>
      Gap between elements in buttons
    </td>
  </tr>
  <tr>
    <td><code>--cui-gap-between-inputs</code></td>
    <td><code>gap</code>, <code>margin</code></td>
    <td>
      Gap between form elements (inputs, buttons and so on)
    </td>
  </tr>
</table>

### How to provide CSS Vars

Just create your own CSS file and fill it with code like below.

```css
:root {
  --cui-inputs-height: 50px;
}
```

All CSS vars have default values so you don't need to specify them all.

__Important:__ Import CSS with your vars AFTER importing `@congritta-ui/base`.

## How to make additional styles

Just write your CSS files with your own styles. You can learn source code of all Congritta UI libs. You also can provide CSS for Congritta UI components (read more in them docs).

## How to change page fonts

1. Import fonts from any CDN if needed;
2. In your CSS file, create `body` selector and give them `font` property with neccessary value

## What is @congritta-ui/base

This is basic CSS styles for all Congritta components; so it's no need to repeat same CSS across Congritta-UI compoents.

### Base HTML styles

There are basic styles for `html`, `body`, `svg`, `img`, `audio`, `video`, `iframe` elements

### Inputs styles

There are basic styles for input elements like `input`, `button` and `textarea`. All inputs are `display: block` and `width: 100%` in default.

Buttons may have class `_isDuctile` for making button auto width'ed and class `_isZeroed` for removing all styles from button (in this case, we get transparent button with no background, padding, borders and so on.).

There are basic `form` element styles with 100% width, display block and margin top 1em.

There is `.form-label` class for making input labels.

There is `.fields-wrapper` class for making responsive forms. There are some cases:

```
form
  .fields-wrapper
    input input input
    input input
  .fields-wrapper
    input
  .fields-wrapper
    .form-label
    input
  .fields-wrapper
    .fields-wrapper
      .form-label
      input
    .fields-wrapper
      .form-label
      input
  .fields-wrapper
    button
```

### Typography

There are basic styles for `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `ul`, `ol`, `li`, `a` elements

### Classes

There are most used in web helpful classes:

__Flex__: `.flex`, `.flex-ais`, `.flex-aic`, `.flex-aifs`, `.flex-aie`, `.flex-jcfs`, `.flex-jcfe`, `.flex-jcsb`, `.flex-jcc`, `.flex-jcsa`, `.flex-wrap`, `flex-nowrap`

In future @congritta-ui/base releases, there will be more classes

## Source code

You can learn [source code](https://github.com/congritta/ui-base) to find CSS selectors. You can write you CSS with same selectors and overwrtie existing or add styles
