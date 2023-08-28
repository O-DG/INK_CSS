# INK_CSS

## 목차

- [프로젝트 설명](#프로젝트-설명)
- [사용법](#사용법)
- [라이선스](#라이선스)

## 프로젝트 설명

CSS를 마크업 단계에서 곧바로 사용 및 적용하기 위해 미리 정의된 CSS 코드를 활용합니다.
StyleSheet를 작성할 때에 가장 먼저 작성되고, 가장 많이 작성되는 코드들의 집합체로서 반복되는 초기의 코드작성 단계를 건너뛰며 바로 디자인 코드를 작성할 수 있습니다.
또한, 빠른 프로토타입을 작성할 수 있도록 합니다.

SCSS로 작성되었으며, 각각의 분류별로 모듈화되었습니다.
하나의 컴포넌트 디자인이 필요하여 전부를 설치 및 적용하는 작업에서 별도로 필요한 부분만 적용할 수 있습니다.

추가로 기능적인 부분을 다루기 위해 Javascript를 이용하였습니다.

<div align="left">
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/SASS-CC6699?style=flat&logo=SASS&logoColor=white" />
  	<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
</div>


## 사용법

link 코드와 함께 Class를 추가 입력하는 것으로 적용됩니다.

```sh
    // ink_css
    <link rel="stylesheet" href="./ink_css/css_reset.css">
    <link rel="stylesheet" href="./ink_css/icons.css">
    <link rel="stylesheet" href="./ink_css/standard.css">

    // ink_css html
    <div class="input_box radio">
      <input type="radio" id="radio1" name="radios" value="1">
      <label for="radio1">
        <span class="design"></span>
        <span class="text">text</span>
      </label>
    </div>
```

가이드 사이트를 통하여 코드를 확인하고 바로 적용하여 추가적인 디자인 코드 작업을 진행할 수 있습니다.

더 많은 정보는 <a href="http://ink.pe.kr/ink_guide">http://ink.pe.kr/</a>에서 확인할 수 있습니다.

## 라이선스
모두가 원하는대로 무엇이든 할 수 있습니다.
다만, 출처만 남겨주세요.

Everyone can do whatever they want.
However, please leave only the source.


- **변경 내역** :
-2023-07-21 : 초기 작성

- **크레딧** : INK - ODG

- **FAQ** : lubiallu@naver.com
