# Solar Icon Cheat Sheet

:[https://grxvityhj.github.io/solar-icon](https://grxvityhj.github.io/solar-icon)

## Solar Icon Set

Solar Icon is an open-source library made by [480 Design](https://www.figma.com/@480design), containing 1000 icons with 6 different styles. Check out [https://github.com/480-Design/Solar-Icon-Set](https://github.com/480-Design/Solar-Icon-Set) for more details and icons for other platforms.

## Getting started

Include the script inside the `<head>`.

```html
<script src="https://grxvityhj.github.io/solar-icon/script.js"></script>
```

(Codes are all written in vanillaJS so no need for jQuery.)

## Usage

Head to [cheat sheet page](https://grxvityhj.github.io/solar-icon) to retrieve icons by name, and paste your code by the following rules below:

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

## Attributes

| Attributes   | Type     | Required | Default           |
| ------------ | -------- | -------- | ----------------- |
| type         | `string` | no       | `linear`          |
| stroke-width | `string` | no       | `1.5`             |
| icon         | `string` | yes      | `(its icon name)` |

👉 **stroke** and **fill** is set to `currentColor` by default.\
👉 No styles are applied.

### Disclaimer

**I do not own any of the icons**. All rights belong to Vuesax.

This project fully supports `linear` and `bold` style only.
