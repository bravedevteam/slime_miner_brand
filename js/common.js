$(function(){
  var win_w = $(window).width();
  
  if(767 < win_w){ // PC 이벤트
    $(".lang").on("click", "ul li a", function(e){
      e.preventDefault();
      var lang_li = $(this).parent();
  
      if($(".lang").hasClass("is--open")){
        lang_li.remove();
        $(".lang ul").prepend(lang_li);
        $(".lang").removeClass("is--open");
      }else{
        $(".lang").addClass("is--open");
      }
    });
  }else{ // Mobile 이벤트
    $(".btnLang").on("click", function(){
      $(".lang").toggleClass("is--open");
    });

    $(".lang ul li a").on("click", function(){
      $(".lang").removeClass("is--open");
    });
  }

  // 팝업
  $(".open--popup").click(function(){
    var target = $(this).attr("data-pop");
    $(".popBasic").hide();
    $("#"+target).css("display", "flex");
    $("html").css("overflow", "hidden");
  });

  $(".close--popup").click(function(){
    $(this).parents(".popBasic").hide();
    $("html").css("overflow", "auto");
  });

  $("#btnGnb").click(function(){
    $("#header").addClass("is--gnb");
    $("#gnb").addClass("is--open");
    $("html").css("overflow", "hidden");
  });

  $("#gnb .btnClose").click(function(){
    $("#header").removeClass("is--gnb");
    $("#gnb").removeClass("is--open");
    $("html").css("overflow", "auto");
  });

  $("#header").on("click", function(event){
    var target = event.target.id;

    if(target == 'header'){
      $("#btnGnb").removeClass("is--open");
      $("#header").removeClass("is--gnb");
      $("#gnb").removeClass("is--open");
    }
  });

  function gnbSet(){
    win_w = $(window).width();
    
    if(767 < win_w){
      $("#btnGnb").removeClass("is--open");
      $("#header").removeClass("is--gnb");
      $("#gnb").removeClass("is--open");
      $(".boxMouse .bubble").show();
    }

    $("html").css("overflow", "auto");
  };
  
  gnbSet();

  $(window).resize(function(){
    gnbSet();
  });
});