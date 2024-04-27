$(document).ready(function () {
  //profile dropdown
  $("#dropdown-open").click(function () {
    $(".profile-dropdown-menu").toggleClass("profile-dropdown-menu-open");

    let caretIcon = $(".profile-dropdown-icon");

    if (caretIcon.hasClass("fa-caret-down")) {
      caretIcon.removeClass("fa-caret-down");
      caretIcon.addClass("fa-caret-up");
    } else {
      caretIcon.addClass("fa-caret-down");
      caretIcon.removeClass("fa-caret-up");
    }
  });

  //toggle icon
  $("#toggle-icon").click(function () {
    let navLinks = $(".nav-links");
    navLinks.toggleClass("nav-links-open");

    let toggleIcon = $(".toggle-icon");

    if (toggleIcon.hasClass("fa-bars")) {
      toggleIcon.removeClass("fa-bars");
      toggleIcon.addClass("fa-x");
    } else {
      toggleIcon.removeClass("fa-x");
      toggleIcon.addClass("fa-bars");

      if ($(".profile-dropdown-menu").hasClass("profile-dropdown-menu-open")) {
        $(".profile-dropdown-menu").removeClass("profile-dropdown-menu-open");
      }
    }
  });

  //card mouse enter and mouse leave
  for (let i = 0; i <= 4; i++) {
    //cards mouse enter
    $(`.card-${i}`).mouseenter(function () {
      $(`.card-${i}`)
        .children(`.card-text-container-${i}`)
        .css("display", "block");
      $(`.card-image-container-${i}`).css("display", "none");
      $(`card-title-container-${i}`).css("display", "none");
    });

    //cards mouse leave
    $(`.card-${i}`).mouseleave(function () {
      $(`.card-${i}`)
        .children(`.card-text-container-${i}`)
        .css("display", "none");
      $(`.card-image-container-${i}`).css("display", "block");
      $(`card-title-container-${i}`).css("display", "block");
    });
  }

  //filter price (high and low)
  $("#price-filter").click(function () {
    let filterToggleIcon = $(this).find(".fa-solid");
    let filterText = $(this).find("#price-filter-text");

    if (filterToggleIcon.hasClass("fa-arrow-up")) {
      filterToggleIcon.removeClass("fa-arrow-up");
      filterToggleIcon.addClass("fa-arrow-down");
      filterText.text("Price Low to High");
    } else {
      filterToggleIcon.removeClass("fa-arrow-down");
      filterToggleIcon.addClass("fa-arrow-up");
      filterText.text("Price High to Low");
    }
  });

  //car tabs
  $("#car-accessories-header").click(function () {
    $(this).addClass("tab-item-header-active");
    $("#car-description-header").removeClass("tab-item-header-active");
    $("#car-description-content").hide();
    $("#car-accessories-content").show();
  });

  $("#car-description-header").click(function () {
    $(this).addClass("tab-item-header-active");
    $("#car-accessories-header").removeClass("tab-item-header-active");
    $("#car-accessories-content").hide();
    $("#car-description-content").show();
  });

  //carousel
  $('#carousel-button-next').click(function () {
    let curImg = $(".active-carousel-car-image");
    let nextImg = curImg.next();

    if (nextImg.length) {
      $(this).css('cursor', 'pointer');
      curImg.removeClass("active-carousel-car-image");
      nextImg.addClass("active-carousel-car-image");
    }
  });

  $('#carousel-button-prev').click(function () {
    let curImg = $(".active-carousel-car-image");
    let prevImg = curImg.prev();

    if (prevImg.length) {
      $(this).css('cursor', 'pointer');
      curImg.removeClass("active-carousel-car-image");
      prevImg.addClass("active-carousel-car-image");
    }
  });

  //Rent Car Modal
  $(".rent-car-btn").click(function () {

    $(".rent-car-modal").show();
  });

  $(".rent-car-modal-close").click(function () {

    $(".rent-car-modal").hide();
  });
});
