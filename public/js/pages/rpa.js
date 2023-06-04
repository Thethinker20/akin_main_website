var b01 = document.getElementById('content_b_txt1');
var b02 = document.getElementById('content_b_txt2');
var b03 = document.getElementById('content_b_txt3');

var change_text1 = document.getElementById('change_1');
var change_text2 = document.getElementById('change_2');

$('#change_1').on('click', function () {
    if ($("#change_2").hasClass("b_active")) {
        document.getElementById('ben_txt_2_p').innerHTML = "Cost-Effective";
        document.getElementById('content_b_txt1').innerHTML = "It has been estimated that using robotics cuts operational costs by as much as 25-50%. Robots canoperate 24/7 and take no vacation when compared to humans, who work 8/5 and have a pre-fixed number of annual leaves each year. Having robots take over some of the manually intensive work from humans could result in visible gains for the business. Automation can help you recover thecost within a short time span and from then on, it is all only about gains!";
        $("#change_2").removeClass('b_active');
        $("#change_1").addClass('b_active');
    }else if($("#change_3").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Cost-Effective";
        document.getElementById('content_b_txt1').innerHTML = "It has been estimated that using robotics cuts operational costs by as much as 25-50%. Robots canoperate 24/7 and take no vacation when compared to humans, who work 8/5 and have a pre-fixed number of annual leaves each year. Having robots take over some of the manually intensive work from humans could result in visible gains for the business. Automation can help you recover thecost within a short time span and from then on, it is all only about gains!";
        $("#change_3").removeClass('b_active');
        $("#change_1").addClass('b_active');
    }else if($("#change_4").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Cost-Effective";
        document.getElementById('content_b_txt1').innerHTML = "It has been estimated that using robotics cuts operational costs by as much as 25-50%. Robots canoperate 24/7 and take no vacation when compared to humans, who work 8/5 and have a pre-fixed number of annual leaves each year. Having robots take over some of the manually intensive work from humans could result in visible gains for the business. Automation can help you recover thecost within a short time span and from then on, it is all only about gains!";
        $("#change_4").removeClass('b_active');
        $("#change_1").addClass('b_active');
    }else if($("#change_5").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Cost-Effective";
        document.getElementById('content_b_txt1').innerHTML = "It has been estimated that using robotics cuts operational costs by as much as 25-50%. Robots canoperate 24/7 and take no vacation when compared to humans, who work 8/5 and have a pre-fixed number of annual leaves each year. Having robots take over some of the manually intensive work from humans could result in visible gains for the business. Automation can help you recover thecost within a short time span and from then on, it is all only about gains!";
        $("#change_5").removeClass('b_active');
        $("#change_1").addClass('b_active');
    }
});

$('#change_2').on('click', function () {
    if ($("#change_1").hasClass("b_active")) {
        document.getElementById('ben_txt_2_p').innerHTML = "Accuracy & Quality";
        document.getElementById('content_b_txt1').innerHTML = "RPA offers improved services to processes that have a high probability of human error, thereby increasing accuracy. Robots are reliable, and consistent and do not whine when expected to work tirelessly. They also reduce the cases of re-works and improve the output quality, drastically. The best part here is that robots follow all rules to the dot, thereby producing 100% accuracy in the process results and let’s not forget what adds more sweetness to this deal – the fast implementation of this technology.";
        $("#change_1").removeClass('b_active');
        $("#change_2").addClass('b_active');
    }else if($("#change_3").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Accuracy & Quality";
        document.getElementById('content_b_txt1').innerHTML = "RPA offers improved services to processes that have a high probability of human error, thereby increasing accuracy. Robots are reliable, and consistent and do not whine when expected to work tirelessly. They also reduce the cases of re-works and improve the output quality, drastically. The best part here is that robots follow all rules to the dot, thereby producing 100% accuracy in the process results and let’s not forget what adds more sweetness to this deal – the fast implementation of this technology.";
        $("#change_3").removeClass('b_active');
        $("#change_2").addClass('b_active');
    }else if($("#change_4").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Accuracy & Quality";
        document.getElementById('content_b_txt1').innerHTML = "RPA offers improved services to processes that have a high probability of human error, thereby increasing accuracy. Robots are reliable, and consistent and do not whine when expected to work tirelessly. They also reduce the cases of re-works and improve the output quality, drastically. The best part here is that robots follow all rules to the dot, thereby producing 100% accuracy in the process results and let’s not forget what adds more sweetness to this deal – the fast implementation of this technology.";
        $("#change_4").removeClass('b_active');
        $("#change_2").addClass('b_active');
    }else if($("#change_5").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Accuracy & Quality";
        document.getElementById('content_b_txt1').innerHTML = "RPA offers improved services to processes that have a high probability of human error, thereby increasing accuracy. Robots are reliable, and consistent and do not whine when expected to work tirelessly. They also reduce the cases of re-works and improve the output quality, drastically. The best part here is that robots follow all rules to the dot, thereby producing 100% accuracy in the process results and let’s not forget what adds more sweetness to this deal – the fast implementation of this technology.";
        $("#change_5").removeClass('b_active');
        $("#change_2").addClass('b_active');
    }
});

$('#change_3').on('click', function () {
    if ($("#change_1").hasClass("b_active")) {
        document.getElementById('ben_txt_2_p').innerHTML = "Customer Satisfaction";
        document.getElementById('content_b_txt1').innerHTML = "Delivering better quality of work with high accuracy and improved customer/client interaction leads to increased customer and client satisfaction. This only adds to the goodwill of the business.";
        $("#change_1").removeClass('b_active');
        $("#change_3").addClass('b_active');
    }else if($("#change_2").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Customer Satisfaction";
        document.getElementById('content_b_txt1').innerHTML = "Delivering better quality of work with high accuracy and improved customer/client interaction leads to increased customer and client satisfaction. This only adds to the goodwill of the business.";
        $("#change_2").removeClass('b_active');
        $("#change_3").addClass('b_active');
    }else if($("#change_4").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Customer Satisfaction";
        document.getElementById('content_b_txt1').innerHTML = "Delivering better quality of work with high accuracy and improved customer/client interaction leads to increased customer and client satisfaction. This only adds to the goodwill of the business.";
        $("#change_4").removeClass('b_active');
        $("#change_3").addClass('b_active');
    }else if($("#change_5").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Customer Satisfaction";
        document.getElementById('content_b_txt1').innerHTML = "Delivering better quality of work with high accuracy and improved customer/client interaction leads to increased customer and client satisfaction. This only adds to the goodwill of the business.";
        $("#change_5").removeClass('b_active');
        $("#change_3").addClass('b_active');
    }
});

$('#change_4').on('click', function () {
    if ($("#change_1").hasClass("b_active")) {
        document.getElementById('ben_txt_2_p').innerHTML = "Employee Productivity";
        document.getElementById('content_b_txt1').innerHTML = "RPA ultimately facilitates humans and robots to do just what they excel at. As RPA frees the employees from their mundane tasks, they can focus more on client and customer interaction, relationship management and other such activities where humans naturally excel at. Having satisfied clients and customers only mean better business.";
        $("#change_1").removeClass('b_active');
        $("#change_4").addClass('b_active');
    }else if($("#change_2").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Employee Productivity";
        document.getElementById('content_b_txt1').innerHTML = "RPA ultimately facilitates humans and robots to do just what they excel at. As RPA frees the employees from their mundane tasks, they can focus more on client and customer interaction, relationship management and other such activities where humans naturally excel at. Having satisfied clients and customers only mean better business.";
        $("#change_2").removeClass('b_active');
        $("#change_4").addClass('b_active');
    }else if($("#change_3").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Employee Productivity";
        document.getElementById('content_b_txt1').innerHTML = "RPA ultimately facilitates humans and robots to do just what they excel at. As RPA frees the employees from their mundane tasks, they can focus more on client and customer interaction, relationship management and other such activities where humans naturally excel at. Having satisfied clients and customers only mean better business.";
        $("#change_3").removeClass('b_active');
        $("#change_4").addClass('b_active');
    }else if($("#change_5").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Employee Productivity";
        document.getElementById('content_b_txt1').innerHTML = "RPA ultimately facilitates humans and robots to do just what they excel at. As RPA frees the employees from their mundane tasks, they can focus more on client and customer interaction, relationship management and other such activities where humans naturally excel at. Having satisfied clients and customers only mean better business.";
        $("#change_5").removeClass('b_active');
        $("#change_4").addClass('b_active');
    }
});

$('#change_5').on('click', function () {
    if ($("#change_1").hasClass("b_active")) {
        document.getElementById('ben_txt_2_p').innerHTML = "Boosted productivity";
        document.getElementById('content_b_txt1').innerHTML = "68% of global workers believe automation will make them more productive.";
        $("#change_1").removeClass('b_active');
        $("#change_5").addClass('b_active');
    }else if($("#change_2").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Boosted productivity";
        document.getElementById('content_b_txt1').innerHTML = "68% of global workers believe automation will make them more productive.";
        $("#change_2").removeClass('b_active');
        $("#change_5").addClass('b_active');
    }else if($("#change_3").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Boosted productivity";
        document.getElementById('content_b_txt1').innerHTML = "68% of global workers believe automation will make them more productive.";
        $("#change_3").removeClass('b_active');
        $("#change_5").addClass('b_active');
    }else if($("#change_4").hasClass("b_active")){
        document.getElementById('ben_txt_2_p').innerHTML = "Boosted productivity";
        document.getElementById('content_b_txt1').innerHTML = "68% of global workers believe automation will make them more productive.";
        $("#change_4").removeClass('b_active');
        $("#change_5").addClass('b_active');
    }
});