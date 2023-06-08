
// INK layout UI javascript

// ink datepicker load
// import first_setting from './ink_datepicker';
// document.write('<script src="/assets/ink_css/js/ink_datepicker.js"></script>');
// console.log(window.location.protocol+'//'+window.location.hostname+'/'+);
//
window.addEventListener('DOMContentLoaded', function() {
  // setting for functions
  ui_setting();

});

function ui_setting(){
  ready_for_select();
  ready_for_file();
  path_dawing_animation();
  dropdown_ani();
  dropdown_select();
  progress_bar_func();
  progress_circle_func();
  progress_gauge_func();
}

// progress bar 기능
function progress_bar_func() {
  const progress_bar = document.querySelectorAll('.progress_bar');

  // 기능 삽입
  for (let i = 0; i < progress_bar.length; i++) {    
    progress_bar_option(progress_bar[i]);
  }
  // 기능 옵션
  function progress_bar_option(e){
    // 기본 게이지 바 생성
    let progress_bar_gauge = document.createElement("div");
    progress_bar_gauge.className = 'progress_bar_gauge';
    progress_bar_gauge.style.width = e.getAttribute('value') + '%';
    e.append(progress_bar_gauge);


    
    // 라벨(수치)
    let progress_bar_gauge_val_label = document.createElement("div");
    if (e.classList.contains('label')){
      progress_bar_gauge_val_label.className = 'progress_bar_gauge_val_label';
      progress_bar_gauge_val_label.innerHTML = e.getAttribute('value') + '%';
      progress_bar_gauge.append(progress_bar_gauge_val_label);
    }
    
    // 라벨(이미지)
    let progress_bar_gauge_img_label = document.createElement("div");
    if (e.getAttribute('src')){
      progress_bar_gauge_val_label.remove();
      let progress_bar_gauge_img = document.createElement("img");
      progress_bar_gauge_img_label.append(progress_bar_gauge_img);
      progress_bar_gauge_img.setAttribute('src', e.getAttribute('src'));
      progress_bar_gauge_img_label.className = 'progress_bar_gauge_img_label';
      progress_bar_gauge.append(progress_bar_gauge_img_label);
    }
  }
}

function progress_circle_func(){
  const progress_circle = document.querySelectorAll('.progress_circle');
  
  for (let i = 0; i < progress_circle.length; i++) {
    progress_circle_option(progress_circle[i]);
  }

  // 기능 옵션
  function progress_circle_option(e){
    // svg 생성
    let progress_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    progress_svg.setAttribute('class', 'progress_svg');
    progress_svg.setAttribute('width', '120');
    progress_svg.setAttribute('height', '120');
    progress_svg.setAttribute('viewBox', '0 0 120 120');
    e.append(progress_svg);
    
    // 기본 베이스 생성
    const progress_circle_gauge_bar = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    var stroke_r =  60 - (e.getAttribute('stroke') / 2);
    progress_circle_gauge_bar.setAttribute('class', 'progress_circle_gauge_bar');
    progress_circle_gauge_bar.setAttribute('cx', '60');
    progress_circle_gauge_bar.setAttribute('cy', '60');
    progress_circle_gauge_bar.setAttribute('r', stroke_r);
    progress_circle_gauge_bar.setAttribute('fill', 'none');
    progress_circle_gauge_bar.setAttribute('stroke-width', e.getAttribute('stroke'));
    progress_svg.append(progress_circle_gauge_bar);

    // 기본 게이지 바 생성
    const progress_circle_gauge = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    progress_circle_gauge.setAttribute('class', 'progress_circle_gauge');
    progress_circle_gauge.setAttribute('cx', '60');
    progress_circle_gauge.setAttribute('cy', '60');
    progress_circle_gauge.setAttribute('r', stroke_r);
    progress_circle_gauge.setAttribute('fill', 'none');
    progress_circle_gauge.setAttribute('stroke-width', e.getAttribute('stroke'));
   
    progress_svg.append(progress_circle_gauge);
    progress(Number(e.getAttribute('value')));
    // 수치 적용
    function progress(per){
      var circumference =  2 * Math.PI * stroke_r;
      var gauge_per = circumference * (1 - (per / 100));
      // if(value){
      //   value.innerHTML = per + '%';
      // }
      progress_circle_gauge.style.strokeDasharray = circumference;
      progress_circle_gauge.style.strokeDashoffset = gauge_per;

      progress_circle_gauge.animate(
        [
          // keyframes
          { strokeDashoffset: circumference },
          { strokeDashoffset: gauge_per },
        ],
        {
          // timing options
          duration: 1000,
          fill: "forwards",
        }
      );

    }
    // 라벨(수치)
    let progress_circle_gauge_val_label = document.createElement("span");
    if (e.classList.contains('label')) {
      progress_circle_gauge_val_label.className = 'progress_circle_gauge_val_label';
      progress_circle_gauge_val_label.innerHTML = e.getAttribute('value') + '%';
      e.append(progress_circle_gauge_val_label);
    }
  }
}


function progress_gauge_func(){
  const progress_gauge = document.querySelectorAll('.progress_gauge');
  
  for (let i = 0; i < progress_gauge.length; i++) {
    progress_gauge_option(progress_gauge[i]);
  }

  // 기능 옵션
  function progress_gauge_option(e){
    // svg 생성
    let progress_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    progress_svg.setAttribute('class', 'progress_svg');
    progress_svg.setAttribute('width', '120');
    progress_svg.setAttribute('height', '60');
    progress_svg.setAttribute('viewBox', '0 0 120 120');
    e.append(progress_svg);
    
    var stroke_r =  120 - (e.getAttribute('stroke') / 2);
    // 기본 베이스 생성
    if(e.getAttribute('split')){
      // 분할 베이스
      for (let i = e.getAttribute('split'); i > 0; i--) {
        const progress_gauge_bar = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        progress_gauge_bar.setAttribute('class', 'progress_gauge_bar split');
        progress_gauge_bar.setAttribute('cx', '60');
        progress_gauge_bar.setAttribute('cy', '0');
        progress_gauge_bar.setAttribute('r', stroke_r);
        progress_gauge_bar.setAttribute('fill', 'none');
        progress_gauge_bar.setAttribute('stroke-width', e.getAttribute('stroke'));
        progress_svg.append(progress_gauge_bar);
        progress(progress_gauge_bar, i * (50 / e.getAttribute('split')));
      }
    }else {
      // 일반 베이스
      const progress_gauge_bar = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      progress_gauge_bar.setAttribute('class', 'progress_gauge_bar');
      progress_gauge_bar.setAttribute('cx', '60');
      progress_gauge_bar.setAttribute('cy', '0');
      progress_gauge_bar.setAttribute('r', stroke_r);
      progress_gauge_bar.setAttribute('fill', 'none');
      progress_gauge_bar.setAttribute('stroke-width', e.getAttribute('stroke'));
      progress_svg.append(progress_gauge_bar);
      progress(progress_gauge_bar, 50);  
    }
  
    // 기본 게이지 바 생성
    const progress_gauge = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    progress_gauge.setAttribute('class', 'progress_gauge');
    progress_gauge.setAttribute('cx', '60');
    progress_gauge.setAttribute('cy', '0');
    progress_gauge.setAttribute('r', stroke_r);
    progress_gauge.setAttribute('fill', 'none');
    progress_gauge.setAttribute('stroke-width', e.getAttribute('stroke'));
    progress_svg.append(progress_gauge);
    // 수지적용
    progress(progress_gauge, Number(e.getAttribute('value')));

    // 게이지 수치 적용
    function progress(e, per){
      var circumference =  2 * Math.PI * stroke_r;
      var gauge_per = e.classList.contains('progress_gauge') ? circumference * (1 - (per / 200)) : circumference * (1 - (per / 100));
      // if(value){
      //   value.innerHTML = per + '%';
      // }
      e.style.strokeDasharray = circumference;
      e.style.strokeDashoffset = gauge_per;
      if (e.classList.contains('progress_gauge')){
        e.animate(
          [
            // keyframes
            { strokeDashoffset: circumference },
            { strokeDashoffset: gauge_per },
          ],
          {
            // timing options
            duration: 1000,
            fill: "forwards",
          }
        );
      }

    }
    // 라벨(수치)
    let progress_gauge_val_label = document.createElement("span");
    if (e.classList.contains('label')) {
      progress_gauge_val_label.className = 'progress_gauge_val_label';
      progress_gauge_val_label.innerHTML = e.getAttribute('value') + '%';
      e.append(progress_gauge_val_label);
    }

    // 게이지 바늘 생성
    if(e.getAttribute('needle')){
      // svg 생성
      let progress_svg_needle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      progress_svg_needle.setAttribute('class', 'progress_svg_needle');
      progress_svg_needle.setAttribute('width', '100');
      progress_svg_needle.setAttribute('height', '8');
      progress_svg_needle.setAttribute('viewBox', '0 0 100 8');
      progress_svg_needle.style.cssText = 'transform: translate(-90px, -4px) rotate(0); transform-origin: 90px center;';
      e.append(progress_svg_needle);

      const progress_gauge_needle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      progress_gauge_needle.setAttribute('class', 'progress_gauge_needle');
      // progress_gauge_needle.setAttribute('points', '4,0 8,90 4,100 0,90');
      progress_gauge_needle.setAttribute('points', '0,4 90,8 100,4 90,0');
      progress_gauge_needle.style.cssText = '';
      progress_svg_needle.append(progress_gauge_needle);

      // 수치 적용
      gauge_needle_progress(progress_svg_needle, Number(e.getAttribute('value')));
    }
    // 게이지 바늘 수치 적용
    function gauge_needle_progress(e, per){
      // 백분율 연산
      let re_per = 180 * per / 100;
      e.animate(
        [
          // keyframes
          { transform: 'translate(-90px, -4px) rotate(0deg)' },
          { transform: 'translate(-90px, -4px) rotate('+ re_per +'deg)' },
        ],
        {
          // timing options
          duration: 1000,
          fill: "forwards",
        }
      );
    }
    
  }
}

// file 준비
function ready_for_file() {
  const input_file = document.querySelectorAll('.input_box input');
  // 기능 삽입
  for (let i = 0; i < input_file.length; i++) {
    if (input_file[i].getAttribute('type') == 'file') {
      input_file[i].setAttribute('onchange', 'file_name(this)');
    }
  }
}

// 파일 목록 컴포넌트 생성
function file_list_component(files, pos) {
  const file_wrap = document.createElement("div");
  const file_name = document.createElement("span");
  const file_count = document.createElement("span");

  // 클래스 추가(CSS 적용)
  file_wrap.className = 'file_wrap ellipsis clear';
  file_name.className = 'file_name ellipsis';
  file_count.className = 'file_count';
  let count = files.length - 1;
  // 파일명 및 개수 입력
  file_name.appendChild(document.createTextNode(files[0]));
  if (files.length > 1) {
    file_count.appendChild(document.createTextNode('[ 외 ' + count + ' ]'));
  }

  // 파일목록 출력
  pos.appendChild(file_wrap);
  file_wrap.appendChild(file_name);
  file_wrap.appendChild(file_count);

  // 추가 개수 표기(외)
  const file_name_wrap = document.createElement("span");
}

// input type file 파일 업로드 파일명 표기
function file_name(e) {
  const input_file = document.getElementById(e.getAttribute('id'));
  let file_list = new Array();
  let file_wrap;

  // 파일명 목록화
  for( let i = 0; i < input_file.files.length; i++ ){
    file_list.push(input_file.files[i].name);
  }

  // 파일목록 출력
  // 출력 준비 = 존재여부 확인
  for (let i = 0; i < input_file.parentElement.children.length; i++) {
    if (input_file.parentElement.children[i].classList.contains('file_wrap')) {
      file_wrap = input_file.parentElement.children[i];
    }
  }
  // file_wrap이 있으면 삭제
  if (file_wrap) {
    file_wrap.remove();
  }
  // 출력할 파일이 입력되면 출력
  if (file_list) {
    file_list_component(file_list, input_file.parentNode);
  }
}

// select 선택하세요 구분 (class for color)
function selected(obj) {
  const selected = obj.options[obj.selectedIndex].value;

  // 클래스 토글 - 선택하세요 (첫번째 - placeholder 화)
  if (selected == 'none' || selected == '') {
    obj.classList.add('choose');
  } else {
    if (obj.classList.contains('choose')) {
      obj.classList.remove('choose');
    }
  }
}

// select 선택하세요 구분
function ready_for_select() {
  const select_box = document.getElementsByTagName('select');
  let selected_val;

  // 기능 삽입
  for (let i = 0; i < select_box.length; i++) {
    // select_box[i].setAttribute('onchange', 'select_box(this)');
    select_box[i].addEventListener('change', f_select_box);

    // 기능 호출
    if (select_box[i].selectedIndex == 0) {
      selected(select_box[i]);
    }
  }
}

// select 값 변동시 - 선택하세요 인식 > 색상변경
function f_select_box() {
  // const select_box = document.getElementById(event.target.getAttribute('id'));
  const select_box = event.target;

  // 기능 호출
  selected(select_box);
}

// svg 그리기 애니메이션  기능 (path, line 태그만 가능)
function path_dawing_animation() {
  // svg 태그 하위로 path_dawing_ani 클래스가 적용된 요소 찾기
  let ani_elements_path = document.querySelectorAll('svg > path');
  let ani_elements_line = document.querySelectorAll('svg > line');

  if (ani_elements_path) {
    // 패스 총 길이 구하기
    for (let i = 0; i < ani_elements_path.length; i++) {
      getAndSet(ani_elements_path[i]);
    }
  }
  if (ani_elements_line) {
    // 라인 총 길이 구하기
    for (let i = 0; i < ani_elements_line.length; i++) {
      getAndSet(ani_elements_line[i]);
    }
  }

  // 길이 구하는 함수
  function getAndSet(e){
    // 전체 길이 구하기
    let total_length = e.getTotalLength();

    // 구한 길이 대입
    e.style.strokeDasharray = total_length;
    e.style.strokeDashoffset = total_length;
  }

}

// 드롭다운 슬라이딩 애니메이션 기능
function dropdown_ani(){
  const dropdown_btn = document.querySelectorAll('.dropdown_btn');
  const dropdown_list = document.querySelectorAll('.dropdown_list');
  for (let i = 0; i < dropdown_btn.length; i++) {
    // 클릭 이벤트
    dropdown_btn[i].addEventListener('click', function(){
      const dropdown_list = this.nextElementSibling.classList.contains('dropdown_list') ? this.nextElementSibling : null;
      // 드롭다운 목록 여부확인
      if (dropdown_list == null) {
        console.error('Not Found dropdown_list');
      }else {
        let result_height = 0;
        // 목록이 열려있는지 확인
        if (dropdown_list.classList.contains('on')) {
          // 닫기
          result_height = 0;
          dropdown_list.style.overflowY = 'hidden';
        }else {
          // 요소 높이와 화면 높이 비율로 맞추어 열기
          result_height = child_height(dropdown_list) > (window.innerHeight / 3) ? 'calc(100vh / 3)' : child_height(dropdown_list) + 'px';
          dropdown_list.style.overflowY = 'auto';
        }
        dropdown_list.classList.toggle('on');
        dropdown_list.style.height = result_height;
      }

    });
  }
  // 항목(자식)들의 높이 값 반환
  function child_height(el){
    const el_child = el.children;
    let height_val = 0;
    for (let i = 0; i < el_child.length; i++) {
      height_val += el_child[i].getHeight(true);
    }
    return height_val;
  }
}


// 마진을 포함한 요소의 높이 값
Element.prototype.getHeight = function(includeMargin) {
  includeMargin = includeMargin || false;
  let c = window.getComputedStyle(this);
  let margin = parseFloat(c.marginTop) + parseFloat(c.marginBottom),
  border = parseFloat(c.borderTopWidth) + parseFloat(c.borderBottomWidth);
  let scrollBar = this.offsetHeight - this.clientHeight - border;
  if(includeMargin) {
    if(c.boxSizing == "border-box") {
      return this.offsetHeight + margin;
    } else {
      return this.offsetHeight + margin - scrollBar;
    }
  }
  return this.offsetHeight;
}

// 셀렉트박스 드롭다운 커스텀
function dropdown_select(){
  const dropdown_wrap = document.querySelectorAll('.dropdown_wrap.select');

  for (let i = 0; i < dropdown_wrap.length; i++) {
    const dropdown_option_btn = dropdown_wrap[i].querySelectorAll('.dropdown_list button');
    const dropdown_list = dropdown_wrap[i].querySelector('.dropdown_list');
    const select_box = dropdown_wrap[i].querySelector('.dropdown_list_data_wrap');
    const dropdown_btn = dropdown_wrap[i].querySelector('.dropdown_btn');

    select_btn(dropdown_btn, dropdown_option_btn, select_box, dropdown_list);
  }

  // 드롭다운 버튼과 셀렉트박스 옵션 이벤트 결합
  function select_btn(dropdown_btn, option_btn, select_box, dropdown_list){
    const options = select_box.children;
    for (let i = 0; i < option_btn.length; i++) {
      let option_i = options[i];
      // 이벤트 추가
      option_btn[i].addEventListener('click', function(){
        // 동기화(같은 순서 매치)
        for (let i = 0; i < option_btn.length; i++) {
          // 매치여부
          if (option_btn[i] == this) {
            // 셀렉트 박스 동기화
            select_box.value = select_box[i].value;
            // 드롭다운 버튼 동기화
            dropdown_btn.innerText = select_box[i].text;
          }
        }

        // 드롭다운 닫기
        dropdown_list.classList.toggle('on');
        dropdown_list.style.height = 0;
        dropdown_list.style.overflowY = 'auto';
      });
    }
  }
}
