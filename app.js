$(document).ready(function(){



    $('.result').hide()

    $('#pathbutton').click((e) => {

        var m = $('#m').val();

        var n = $('#n').val();

        $(".result").text(romanToInteger(input));

        $('.result').show()

    })



  });