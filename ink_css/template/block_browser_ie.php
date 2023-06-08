<?php
    function getBrowser() {
    	$broswerList = array('MSIE', 'Chrome', 'Firefox', 'iPhone', 'iPad', 'Android', 'PPC', 'Safari', 'Trident', 'none');
    	$browserName = 'none';

    	foreach ($broswerList as $userBrowser){
    		if($userBrowser === 'none') break;
    		if(strpos($_SERVER['HTTP_USER_AGENT'], $userBrowser)) {
    			$browserName = $userBrowser;
    			break;
    		}
    	}
    	return $browserName;
    }
    function isBlockBrowser() {
      $browserName = getBrowser();
      if ($browserName === 'MSIE' || $browserName === 'Trident') {
        return true;
      }else {
        return false;
      }
    }
    if (!isBlockBrowser()) {
      ?>

      <!-- 모달창 -->
      <div class="modal_wrap block_ie" i-modal i-cookie="block_ie">
        <div class="modal">
          <div class="title_wrap">
            <span class="tit">브라우저 지원 종료 안내</span>
            <button class="btn_close modal_close" type="button" name="button" title="모달창 닫기"><span class="text-hide">닫기</span></button>
          </div>

          <div class="content_wrap">
            <div class="cnt_box mb ie_title_img">
              <div class="img_box cross">
                <img width="120px" height="auto" src="<? echo $base_URL; ?>/assets/ink_css/img/IE_logo.png" alt="">
              </div>
              <p>인터넷익스플로러<br />서비스 종료</p>
            </div>
            <p>
              본 웹페이지는<br />
              MS 인터넷익스플로러(IE) 브라우저의<br />
              <span class="point">서비스 지원이 2022년 06월 15일 종료됨</span>에 따라 안전하고 원활한 서비스 접속을 위해 구글 크롬, MS 엣지 브라우저를 사용을 권장합니다.<br />
              <br />
              <span class="point">※ 기존 IE를 계속 사용할 경우 이미지 깨짐, 사이즈 이상 현상 및 접속 오류를 비롯하여 보안에 취약할 수 있으니 최신 웹브라우저로 지금 바로 바꿔보세요!</span><br />
            </p>
            <div class="btn_wrap">
              <a class="btn" href="https://www.google.com/intl/ko/chrome/" target="_blank">
                <img src="<? echo $base_URL; ?>/assets/ink_css/img/Chrome_logo.png" alt="">
                크롬 다운로드
              </a>
              <a class="btn" href="https://www.microsoft.com/ko-kr/edge" target="_blank">
                <img src="<? echo $base_URL; ?>/assets/ink_css/img/Edge_logo.png" alt="">
                엣지 다운로드
              </a>
            </div>

          </div>
          <div class="close_wrap">
            <div class="input_box checkbox">
              <input id="check_today_close" class="check_today_close" type="checkbox" name="check_today_close" value='Y'>
              <label for="check_today_close">
                <span class="design"></span>
                오늘 하루 다시 열지 않음
              </label>
            </div>
            <!-- <button class="btn_close" type="button" name="button" title="모달창 닫기"><span class="text-hide">닫기</span></button> -->
          </div>
        </div>
      </div>

      <?php
    }
?>
