var b01 = document.getElementById('akin_dev_box_c1');
var b02 = document.getElementById('akin_dev_box_c2');
var b03 = document.getElementById('akin_dev_box_c3');

$('#p_change_1').on('click', function () {
    if ($("#p_change_2").hasClass("active")) {
        $("#p_change_2").removeClass('active');
        $('#p_change_1').addClass('active');
        b02.style.display = 'none';
        b02.style.opacity = 0;
        b01.style.display = 'flex';
        b01.style.opacity = 1;
        b01.style.animation = "scroll_up 2s ease";
    } else if ($("#p_change_3").hasClass("active")) {
        $("#p_change_3").removeClass('active');
        $('#p_change_1').addClass('active');
        b03.style.display = 'none';
        b03.style.opacity = 0;
        b01.style.display = 'flex';
        b01.style.opacity = 1;
        b01.style.animation = "scroll_up 2s ease";
    }
});
$('#p_change_2').on('click', function () {
    if ($("#p_change_1").hasClass("active")) {
        $("#p_change_1").removeClass('active');
        $('#p_change_2').addClass('active');
        b01.style.display = 'none';
        b01.style.opacity = 0;
        b02.style.display = 'flex';
        b02.style.opacity = 1;
        b02.style.animation = "scroll_up 2s ease";
    } else if ($("#p_change_3").hasClass("active")) {
        $("#p_change_3").removeClass('active');
        $('#p_change_2').addClass('active');
        b03.style.display = 'none';
        b03.style.opacity = 0;
        b02.style.display = 'flex';
        b02.style.opacity = 1;
        b02.style.animation = "scroll_up 2s ease";
    }

});
$('#p_change_3').on('click', function () {
    if ($("#p_change_1").hasClass("active")) {
        $("#p_change_1").removeClass('active');
        $('#p_change_3').addClass('active');
        b01.style.display = 'none';
        b01.style.opacity = 0;
        b03.style.display = 'flex';
        b03.style.opacity = 1;
        b03.style.animation = "scroll_up 2s ease";
    } else if ($("#p_change_2").hasClass("active")) {
        $("#p_change_2").removeClass('active');
        $('#p_change_3').addClass('active');
        b02.style.display = 'none';
        b02.style.opacity = 0;
        b03.style.display = 'flex';
        b03.style.opacity = 1;
        b03.style.animation = "scroll_up 2s ease";
    }

});