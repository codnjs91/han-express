jQuery(document).ready(function(){

  // 메인 메뉴
  $('#main_menu>li').hover(function(){
    $(this).children('.sub_menu').stop().slideToggle();
  });

  
  // 비주얼 영역 배경 이미지 넣기
  for(i=0;i<4;i++){
    $('#visual .slide>div').eq(i).css(
      'background-image',`url(img/slider${i+1}.png)`);
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


  //          메인
  $('#menu').click(function(){
    $('.mobile_bg').fadeToggle(300);
    $('.main_menu_molist').stop().slideToggle(300);
  });

  $('.sub_menu_mo').hide();
  $('.main_menu_molist>ul>li>a').click(function(){
    $('.sub_menu_mo').stop().slideUp();
    $(this).next('.sub_menu_mo').stop().slideToggle(300);
    return false;
  });


  //          사업영역
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 3000,
    // 슬라이드가 움직이는 시간
    smartSpeed: 500,
    // 슬라이드가 바뀌는 스피트
    responsive: {
      // 반응형 코드
      430: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });


}); // 끝