// 스크롤 200px 내릴때부터 내비게이션바 등장
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").fadeIn("slow");
    $("header").css("display", "block");
  } else {
    $("header").fadeOut("slow");
    $("header").css("display", "none");
  }
});

// 해당 href로 이동
$(document).ready(function () {
  $(".navlist a").click(function (event) {
    event.preventDefault();
    var targetSection = $(this).attr("href");
    var offset = $(targetSection).offset().top - 100;
    $("html, body").animate(
      {
        scrollTop: offset,
      },
      1000
    );
  });
});

// navlist 기본 숨김
$(document).ready(function () {
  if ($(window).width() < 761) {
    $(".navlist").hide();
  } else {
    $(".navlist").show();
  }

  // 햄버거 버튼을 클릭하면 메뉴를 토글
  $(".ham_img").click(function (event) {
    event.stopPropagation();
    $(".navlist").slideToggle();
  });

  // 메뉴 외의 영역을 클릭하면 메뉴를 닫음
  $(document).click(function (event) {
    var target = $(event.target);
    if (!target.closest(".navbar").length) {
      $(".navlist").slideUp();
    }
  });

  // 메뉴 항목을 클릭하면 메뉴를 닫음
  if ($(window).width() < 761) {
    $(".navlist").click(function (event) {
      event.stopPropagation();
      $(".navlist").slideUp();
    });
  }
});

// 스킬 섹션 waypoint
$(document).ready(function () {
  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).parent().parent().attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );
});

//포트폴리오 필터
$(document).ready(function () {
  $(".filter_box li[data-filter='*']").addClass("active");
  $(".filter_box li").on("click", function () {
    $(".filter_box li").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $(".portfolio_item").hide();
    if (filterValue === "*") {
      $(".portfolio_item").show();
    } else {
      $(filterValue).show();
    }
  });
});

// 탑 버튼
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".top_btn").fadeIn("slow");
  } else {
    $(".top_btn").fadeOut("slow");
  }
});
$(".top_btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});
