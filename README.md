# Solar Icon Cheat Sheet

Total **5000** icons with **4** different styles.

[https://grxvityhj.github.io/solar-icon](https://grxvityhj.github.io/solar-icon)
<br/>
<br/>

👉 [한국어 사용 방법](https://github.com/grxvityhj/solar-icon/blob/main/README-kr.md)

## Solar Icon Set

Solar Icon is an open-source library made by [480 Design](https://www.figma.com/@480design), containing 7000+ icons with 6 different styles. Check out [https://github.com/480-Design/Solar-Icon-Set](https://github.com/480-Design/Solar-Icon-Set) for more details and icons for other platforms.

## Getting started

Include the script inside the `<head>`.

```html
<script src="https://grxvityhj.github.io/solar-icon/script.js"></script>
```

Codes are all written in vanillaJS so no need for extra library such as jQuery.

## Usage

Head to the [cheat sheet page](https://grxvityhj.github.io/solar-icon) to retrieve icons by name, and paste your code by the following rules below:

```html
<i class="solar-icon" type="linear" stroke-width="1.5" icon="(icon name)"></i>
```

## Usage: Simplify

Attributes can be omitted for `linear` type with `1.5` of `stroke-width`.

```html
<i class="solar-icon" icon="(icon name)"></i>
```

Example for `linear` type with `stroke-width` `2`:

```html
<i class="solar-icon" stroke-width="2" icon="(icon name)"></i>
```

`stroke-width` is necessary only when the icon's type is `linear` or `duotone`.

## Attributes

| Attributes   | Type                             | Required | Default           |
| ------------ | -------------------------------- | -------- | ----------------- |
| type         | `linear` `bold` `duotone` `bulk` | no       | `linear`          |
| stroke-width | `string`                         | no       | `1.5`             |
| icon         | `string`                         | yes      | `(its icon name)` |

👉 **stroke** and **fill** is set to `currentColor` by default.\
👉 No prior styles are applied.

## Style Guide

```html
<div class="(your-class)">
  <i class="solar-icon (custom-class)" stroke-width="1.5" icon="sun-1"></i>
</div>
```

You can wrap the code with another container and add a custom class to it.\
For example, you have three options on selecting the icon.
\
\
(1) Custom class from the outer container.

```css
.your-class svg {
  width: 16px;
  height: 16px;
  color: #1c274c;
}
```

(2) Custom class to the code itself.

```css
.custom-class svg {
  width: 16px;
  height: 16px;
  color: #1c274c;
}
```

(3) Selecting by its icon name.

```css
.solar-icon[icon='sun-1'] svg {
  width: 16px;
  height: 16px;
  color: #1c274c;
}
```

👉 You **must** select the icon by `svg` tag or else your style won't be applied.

## Disclaimer

**I do not own any of the icons**. All rights belong to 480 Design.

## License

[MIT License](https://github.com/grxvityhj/solar-icon/blob/main/LICENSE)
