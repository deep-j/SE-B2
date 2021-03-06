$(document).ready(function () {
    /* Do not disturb below lines */
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.navbar-collapse.in').toggleClass('in');
        // $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#navbarCollapseBtn').on('shown.bs.collapse', function () {
        console.log("Toggled!");
        $("#navbarCollapseBtnLink").children('.fa-align-justify').remove();
        $("#navbarCollapseBtnLink").empty();
        $("#navbarCollapseBtnEnv").empty();
        $("#navbarCollapseBtnBell").empty();
        $("#navbarCollapseBtnUser").empty();
        
        
        
        $("#navbarCollapseBtnLink").append("<span><i class='fas fa-sliders-h'></i>&nbsp;&nbsp;&nbsp;Options</span>");
        $("#navbarCollapseBtnEnv").append("<span><i class='far fa-envelope'></i>&nbsp;&nbsp;&nbsp;Messages</span>");
        $("#navbarCollapseBtnBell").append("<span><i class='far fa-bell'></i>&nbsp;&nbsp;&nbsp;Notifications</span>");
        $("#navbarCollapseBtnUser").append("<span><i class='far fa-user'></i>&nbsp;&nbsp;&nbsp;Account</span>");
    
    });
    /* Do not disturb above lines */
    /* Start Adding your javascript here */
    $('#notifications').hide();
    function toggleNotif(){
        $('#notifications').toggle("slow");
    }
    $("#notifContainerCloseBtn").on("click",function(){
        toggleNotif();
    });
    $("#notifToggler").on("click",function(){
        toggleNotif();
    });

    $('#userInfo').hide();
    function toggleUserInfo(){
        $('#userInfo').toggle("slow");
    }
    $("#userInfoCloseBtn").on("click",function(){
        toggleUserInfo();
    });
    $("#userInfoToggler").on("click",function(){
        toggleUserInfo();
    });

    /* End Adding your javascript here */
});
