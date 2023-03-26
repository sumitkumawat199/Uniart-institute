// const menu = [
//   {
//     title: "Home",
//   },
//   {
//     title: "About Us",
//   },
//   {
//     title: "Courses",
//   },
//   {
//     title: "Portfolio",
//   },
//   {
//     title: "Teacher",
//   },
//   {
//     title: "Blog",
//   },
//   {
//     title: "Contact Us",
//   },
//   {
//     title: "Get in Touch",
//   },
//   {
//     title: "Register Now",
//   },
// ];
// const items = [
//   {
//     img: "images/course-1.svg",
//     title: "Front-end Development",
//     desc: "printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry text of dummy text industry text of dummy text industry text of dummy text",
//     anchor: "Read More",
//   },
//   {
//     img: "images/course-2.svg",
//     title: "Graphic Design",
//     desc: "printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry text of dummy text industry text of dummy text industry text of dummy text",
//     anchor: "Read More",
//   },
//   {
//     img: "images/course-3.svg",
//     title: "Website Design",
//     desc: "printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry text of dummy text industry text of dummy text industry text of dummy text",
//     anchor: "Read More",
//   },
// ];
// const software = [
//   {
//     img: "images/software-1.svg",
//     title: "Adobe PhotoShop",
//     desc: "Learning top skills can bring an extra in a career",
//   },
//   {
//     img: "images/software-2.svg",
//     title: "Adobe Illustrator",
//     desc: "Learning top skills can bring an extra in a career",
//   },
//   {
//     img: "images/software-3.svg",
//     title: "Figma",
//     desc: "Learning top skills can bring an extra in a career",
//   },
//   {
//     img: "images/software-4.svg",
//     title: "HTML",
//     desc: "Learning top skills can bring an extra in a career",
//   },
//   {
//     img: "images/software-5.svg",
//     title: "CSS3",
//     desc: "Learning top skills can bring an extra in a career",
//   },
//   {
//     img: "images/software-6.svg",
//     title: "JavaScript",
//     desc: "Learning top skills can bring an extra in a career",
//   },
// ];
// const teachers = [
//   {
//     img: "images/teacher-1.png",
//     title: "GEORGE DANNY",
//     desc: "CEO & Founder At Kidum",
//   },
//   {
//     img: "images/teacher-2.png",
//     title: "GEORGE DANNY",
//     desc: "CEO & Founder At Kidum",
//   },
//   {
//     img: "images/teacher-3.png",
//     title: "GEORGE DANNY",
//     desc: "CEO & Founder At Kidum",
//   },
//   {
//     img: "images/teacher-4.png",
//     title: "GEORGE DANNY",
//     desc: "CEO & Founder At Kidum",
//   },
// ];
// const testimonials = [
//   {
//     desc: "There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     img: "images/teacher-3.png",
//     title: "Rakin Rackle",
//     subtitle: "Developer At Apple lnc",
//   },
//   {
//     desc: "There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     img: "images/teacher-3.png",
//     title: "Rakin Rackle",
//     subtitle: "Developer At Apple lnc",
//   },
// ];
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
// });

// document.addEventListener('click', e => {
//     cursor.classList.add("expand");
//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500);
// });

// window.onload = function () {
//   // var buttons = document.getElementById("menu");
//   // for (var i = 0; i < menu.length; i++) {
//   //   buttons.innerHTML += "<li><a href='#'>" + menu[i].title + "</a></li>";
// };

// var buttons = document.getElementById("our-courses");
// for (var i = 0; i < items.length; i++) {
//   buttons.innerHTML +=
//     "<li><img src=" +
//     items[i].img +
//     " alt='image'/><h3>" +
//     items[i].title +
//     "</h3><p>" +
//     items[i].desc +
//     "</p><a href='#'>" +
//     items[i].anchor +
//     "</a></li>";
// }

// var buttons = document.getElementById("things-you-learn");
// for (var i = 0; i < software.length; i++) {
//   buttons.innerHTML +=
//     "<li><img src=" +
//     software[i].img +
//     " alt='image'/><div><h3>" +
//     software[i].title +
//     "</h3><p>" +
//     software[i].desc +
//     "</p></div></li>";
// }

// var buttons = document.getElementById("teachers");
// for (var i = 0; i < teachers.length; i++) {
//   buttons.innerHTML +=
//     "<li><img src=" +
//     teachers[i].img +
//     " alt='image'/><h3>" +
//     teachers[i].title +
//     "</h3><p>" +
//     teachers[i].desc +
//     "</p></li>";
// }

$(document).ready(function () {
  $(".register-btn").click(function () {
    $(".register-popup").fadeIn(500);
    $(".register-popup-overlay").fadeIn(500);
    // $body.addClass(".no-scroll");
  });
  $(".popup-close").click(function () {
    $(".register-popup").fadeOut(500);
    $(".register-popup-overlay").fadeOut(500);
    // $body.removeClass(".no-scroll");
  });
  // $(".nav-bar").click(function () {
  //   $(".mobile-menu").Show("slow");
  // });
});

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1500
  );
});
