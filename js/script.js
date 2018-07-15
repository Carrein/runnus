const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Sep 9, 2018 08:00:00').getTime(),
  x = setInterval(function () {

    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
  }, second)

$(document).ready(function () {
  $(".about").click(function () {
    $('html,body').animate({
      scrollTop: $(".about-body").offset().top
    },
      'slow');
  });

  $(".categories").click(function () {
    $('html,body').animate({
      scrollTop: $(".categories-body").offset().top
    },
      'slow');
  });

  $(".runner").click(function () {
    $('html,body').animate({
      scrollTop: $(".runner-body").offset().top
    },
      'slow');
  });

  $(".pack").click(function () {
    $('html,body').animate({
      scrollTop: $(".pack-body").offset().top
    },
      'slow');
  });

  $(".routes").click(function () {
    $('html,body').animate({
      scrollTop: $(".routes-body").offset().top
    },
      'slow');
  });

  $(".volunteer").click(function () {
    $('html,body').animate({
      scrollTop: $(".volunteer-body").offset().top
    },
      'slow');
  });
  $(".sponsors").click(function () {
    $('html,body').animate({
      scrollTop: $(".sponsors-body").offset().top
    },
      'slow');
  });

  // $("#form").submit(function (e) {
  //   e.preventDefault();
  // }).validate({
  //   rules: {
  //     name: {
  //       required: true,
  //     },
  //     email: {
  //       required: true,
  //       email: true
  //     },
  //     subject: {
  //       required: true,
  //     },
  //     message: {
  //       required: true,
  //     },
  //     submitHandler: function (form) { // for demo
  //       alert("added");

  //       // // var name = $("#name").val();
  //       // // var email = $("#email").val();
  //       // // var subject = $("#subject").val();
  //       // // var message = $("#message").val();
  //       // var form = $('#form');
  //       // var formData = $(form).serialize();

  //       // // Submit the form using AJAX.
  //       // $.ajax({
  //       //   type: 'POST',
  //       //   url: $(form).attr('action'),
  //       //   data: formData
  //       // }).done(function (response) {
  //       //   // // Make sure that the formMessages div has the 'success' class.
  //       //   // $(formMessages).removeClass('error');
  //       //   // $(formMessages).addClass('success');

  //       //   // // Set the message text.
  //       //   // $(formMessages).text(response);

  //       //   // Clear the form.
  //       //   $('#name').val('');
  //       //   $('#email').val('');
  //       //   $('#message').val('');
  //       // })
  //       return false;
  //     },
  //   }
  // });
  $("#form").submit(function (e) {
    e.preventDefault();
  }).validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    submitHandler: function () {
      // alert("enter");
      var form = $('#form');
      var formData = $(form).serialize();
      $.ajax({
        type: 'POST',
        url: 'http://localhost/php/form.php',
        data: formData
      }).done(function (response) {
        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#subject').val('');
        $('#message').val('');
      });
            
      return false;  //This doesn't prevent the form from submitting.
    }
  });

  // $('#target').submit(function (e) {
  //   e.preventDefault();
  // }).validate({
  // $('#target').validate({ // initialize the plugin
  //   rules: {
  //     field1: {
  //       required: true,
  //     },
  //     field2: {
  //       required: true,
  //       email: true
  //     },
  //     field3: {
  //       required: true,
  //     },
  //     field4: {
  //       required: true,
  //     },
  //     submitHandler: function () { // for demo
  //       alert("Submitted!"); // for demo

  //       // var name = $("#name").val();
  //       // var email = $("#email").val();
  //       // var subject = $("#subject").val();
  //       // var message = $("#message").val();

  //       // // Let's disable the inputs for the duration of the Ajax request.
  //       // // Note: we disable elements AFTER the form data has been serialized.
  //       // // Disabled form elements will not be serialized.
  //       // $inputs.prop("disabled", true);

  //       // request = $.ajax({
  //       //   url: form.action,
  //       //   type: form.method,
  //       //   dataType: "json",
  //       //   // data: { name: name, email: email, subject: subject, message: message },
  //       //   // success: function (data) {
  //       //   //   if (data.code == "200") {
  //       //   //     alert("Success: " + data.msg);
  //       //   //   } else {
  //       //   //     $(".display-error").html("<ul>" + data.msg + "</ul>");
  //       //   //     $(".display-error").css("display", "block");
  //       //   //   }
  //       //   // }
  //       //   data: $(form).serialize(),
  //       //   success: function (response) {
  //       //     $('#answers').html(response);
  //       //   }
  //       // });

  //       // request.always(function () {
  //       //   // Re-enable the inputs
  //       //   $inputs.prop("disabled", false);
  //       // });
  //     }
  //   }
  // });
});