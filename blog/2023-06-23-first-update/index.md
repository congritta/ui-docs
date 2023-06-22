---
slug: first-update
title: The First Update
authors: [ congritta ]
---

The update of some components is released

<!--truncate-->

## @congritta-ui/base v0.0.2

* Removed `.form-label` padding. Now this element has no padding;
* Textareas have padding now. Earlier text in textareas was been on element edges;
* `.fields-wrapper` now has 100% width and `flex: 1` styles so `.fields-wrapper` always takes 100% of it's parent
  width (or proportional width in flex containers);

## @congritta-ui/select v0.0.2

* Now type of Select option contents is `ReactNode` (instead of `JSX.Element | string`) so you can put numbers, boolean
  and other types as option contents;
* Removed `zIndex` prop. Now every Select element sets it's own zIndex to `999999` when opened so other elements on your
  app will not cover select element

## @congritta-ui/datepicker v0.0.2

* Fixed providing class names to elements;
* Now every DatePicker element sets it's own zIndex to `999999` when opened so other elements on your app will not cover
  select element

## @congritta-ui/timepicker v0.0.2

* Fixed providing class names to elements;
* Now every TimePicker element sets it's own zIndex to `999999` when opened so other elements on your app will not cover
  select element
