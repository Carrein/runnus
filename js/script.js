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
      scrollTop: $(".volunteer-body").offset().top
    },
      'slow');
  });
});