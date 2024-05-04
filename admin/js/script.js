$(document).ready(function () {

    //Toggle Icon
    let toggleIcon = $("#toggleIcon");
    let sideBarContainer = $(".sidebar-container");
    let brandName = $(".brand-name");
    let textLink = $(".text-link");

    toggleIcon.click(function () {
        sideBarContainer.toggleClass("sidebar-container-close");
        brandName.toggleClass("brand-name-hide");
        textLink.toggleClass("text-link-hide");
        $(this).toggleClass("fa-bars-staggered");

    });

    //User Dropdown
    let userDropdown = $("#user-dropdown");
    let userDropdownItems = $(".user-dropdown-items");

    userDropdown.click(function () {
        userDropdownItems.toggleClass("user-dropdown-show");
    });

    //Toggle Icon Small Device
    $("#toggleIconSmallDev").click(function () {
        let sideBarContainer = $(".sidebar-container");
        let mainContainer = $("main");

        sideBarContainer.css('display', 'inline-block');
        sideBarContainer.css('max-width', '100%');
        mainContainer.css('display', 'none');
    })

    //Close Sidebar on Mobile Device
    $("#closeSideBarMob").click(function () {
        let sideBarContainer = $(".sidebar-container");
        let mainContainer = $("main");

        sideBarContainer.css('display', 'none');
        mainContainer.css('display', 'inline-block');
    });

    //Close session message
    $(".session-message-container").on('click', '#closeSessionMessage', function () {
        let sessionMessageContainer = $('.session-message-container');

        sessionMessageContainer.toggleClass('show-session-message');
    });



});