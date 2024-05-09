jQuery(document).ready(function(){

  // 메인 메뉴
  $('#main_menu>li').hover(function(){
    $(this).children('.sub_menu').stop().slideToggle();
  });

  
  // 비주얼 영역 배경 이미지 넣기
  for(i=0;i<4;i++){
    $('#visual .slide>div').eq(i).css(
      'background-image',`url(img/slider${i+1}.png)`);
      // 백그라운드 이미지 추가  
  }  
  // visual 영역 img 페이드 in out 프로그램
  let img_num=$('#visual .slide div').length; // img 갯수
  console.log(img_num); // 브라우저에 잘 나타나는지 확인
  let current_num=0; // 1번 img부터 start
  
  setInterval(auto,3000);
  
  function auto(){
    // 현재 img 0 1 2
    // 다음 img 1 2 0
    let next_num=(current_num+1) % 4;
    // console.log(`현재 이미지 번호는 ${current_num}
    // 다음 이미지 번호는 ${next_num}`);
    
    $('#visual .slide>div').eq(current_num).fadeOut(300);
    $('#visual .slide>div').eq(next_num).fadeIn(300);
    $('#visual .slide>div').eq(next_num).addClass('active');
    current_num=next_num;
  }


  // 메인 콘텐츠 모바일
  let current_n=0;
  let textNum=$('.main_mo_title>li').length;
  //                                  갯수
  console.log(textNum); // 브라우저 확인용

  setInterval(text_auto,3000);
  // 함수를 일정시간마다 반복실행해라

  function text_auto(){
    let next_n=(current_n+1) % textNum;
    console.log();

    $('#main_mo .fade').eq(current_n).fadeOut(300);
    $('#main_mo .fade').eq(next_n).fadeIn(300);
    current_n=next_n;
  }

  // 햄버거 메뉴 2번
 $('.sub_mobile_bg').hide() // 모달창 숨김
 $('.sub_menu_moblist').hide(); // 메인 메뉴 리스트 숨김
  
  // 메인
  $('#menu_sub').click(function(){
    // 햄버거 메뉴 클릭하면

    // $('.mobile_bg').toggle();
    $('.sub_mobile_bg').fadeToggle(300);
    // 모달창 보임
    $('.sub_menu_moblist').stop().slideToggle(300);
    // 메뉴창 3초동안 슬라이드 되어 나타남
  });

  $('.sub_menu_mob').hide();
  // 서브 메뉴 숨김
  $('.sub_menu_moblist>ul>li>a').click(function(){
    $('.sub_menu_mob').stop().slideUp();
    $(this).next('.sub_menu_mob').stop().slideToggle(300);
  });

});