# Solar Icon 치트시트

총 **5000**개 아이콘 | **4**개의 스타일

[https://grxvityhj.github.io/solar-icon](https://grxvityhj.github.io/solar-icon)

## Solar Icon Set

Solar Icon은 [480 Design](https://www.figma.com/@480design)가 제작한 오픈 소스 라이브러리로, 7000+ 이상의 아이콘과 총 6개의 스타일로 구성돼 있습니다. 더 다양한 스타일과 타 플랫폼에서 사용 가능한 버전은 다음 사이트를 참고해주세요. [https://github.com/480-Design/Solar-Icon-Set](https://github.com/480-Design/Solar-Icon-Set)

## 시작하기

HTML의 `<head>` 안에 다음의 코드를 넣어주세요.

```html
<script src="https://grxvityhj.github.io/solar-icon/script.js"></script>
```

코드는 모두 순수 JavaScript(바닐라 JavaScript)로 작성되었으므로 jQuery와 같은 외부 라이브러리가 필요 없습니다.

## 사용 방법

[치트시트 페이지](https://grxvityhj.github.io/solar-icon)로 이동해 아이콘 이름을 복사하여 다음과 같은 형식으로 필요한 곳에 코드를 붙여넣어주세요.

```html
<i class="solar-icon" type="linear" stroke-width="1.5" icon="(icon name)"></i>
```

## 사용 방법: 단순화하기

코드의 타입이 `linear`이고 `stroke-width`가 `1.5`일 경우에는 다음과 같이 코드를 단순화할 수 있습니다.

```html
<i class="solar-icon" icon="(icon name)"></i>
```

`linear` 타입에 `stroke-width`가 `2`일 때의 코드 예시입니다:

```html
<i class="solar-icon" stroke-width="2" icon="(icon name)"></i>
```

`stroke-width`는 아이콘의 타입이 `linear`이거나 `duotone`일 때만 해당됩니다.

## 속성

| 속성         | 타입                             | 필수 여부 | 기본값          |
| ------------ | -------------------------------- | --------- | --------------- |
| type         | `linear` `bold` `duotone` `bulk` | X         | `linear`        |
| stroke-width | `문자열`                         | X         | `1.5`           |
| icon         | `문자열`                         | O         | `(아이콘 이름)` |

👉 **stroke**과 **fill**은 디폴트로 `currentColor`로 설정돼 있습니다.\
👉 기타 스타일링은 전혀 포함돼 있지 않습니다.

## 스타일 가이드

```html
<div class="(your-class)">
  <i class="solar-icon (custom-class)" stroke-width="1.5" icon="sun-1"></i>
</div>
```

필요에 의해서 코드를 외부 컨테이너로 감싼 후 커스텀 클래스를 부여할 수 있습니다.\
예를 들어, 이 경우에는 아이콘을 선택할 수 있는 세 가지 방법이 있습니다.
\
\
(1) 외부 컨테이너에 부여한 커스텀 클래스

```css
.your-class svg {
  width: 16px;
  height: 16px;
  color: #1c274c;
}
```

(2) 아이콘 코드에 다이렉트로 넣은 커스텀 클래스

```css
.custom-class svg {
  width: 16px;
  height: 16px;
  color: #1c274c;
}
```

(3) 아이콘 이름으로 선택하기

```css
.solar-icon[icon='sun-1'] svg {
  width: 16px;
  height: 16px;
  color: #1c274c;
}
```

👉 아이콘을 스타일링하기 위해서는 **반드시** `svg` 태그를 선택해야 합니다.

### 필수 안내

**이 프로젝트는 아이콘의 출처 및 사용 범위와는 전혀 무관합니다.** 아이콘과 관련된 모든 저작권은 480 Design에게 있습니다.
