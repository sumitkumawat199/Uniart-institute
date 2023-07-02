const software = [
    {
      img: "images/software-1.svg",
      title: "Adobe PhotoShop",
      desc: "Learning top skills can bring an extra in a career",
    },
    {
      img: "images/software-2.svg",
      title: "Adobe Illustrator",
      desc: "Learning top skills can bring an extra in a career",
    },
    {
      img: "images/software-3.svg",
      title: "Figma",
      desc: "Learning top skills can bring an extra in a career",
    },
    {
      img: "images/software-4.svg",
      title: "HTML",
      desc: "Learning top skills can bring an extra in a career",
    },
    {
      img: "images/software-5.svg",
      title: "CSS3",
      desc: "Learning top skills can bring an extra in a career",
    },
    {
      img: "images/software-6.svg",
      title: "JavaScript",
      desc: "Learning top skills can bring an extra in a career",
    },
  ],
  testimonials = [
    {
      desc: "There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "images/teacher-3.png",
      title: "Rakin Rackle",
      subtitle: "Developer At Apple lnc",
    },
    {
      desc: "There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "images/teacher-3.png",
      title: "Rakin Rackle",
      subtitle: "Developer At Apple lnc",
    },
  ];
for (
  var buttons = document.getElementById("things-you-learn"), i = 0;
  i < software.length;
  i++
)
  buttons.innerHTML +=
    "<li><img src=" +
    software[i].img +
    " alt='image'/><div><h3>" +
    software[i].title +
    "</h3><p>" +
    software[i].desc +
    "</p></div></li>";
$(document).ready(function () {
  $(".register-btn").click(function () {
    $(".register-popup").fadeIn(500),
      $(".register-popup-overlay").fadeIn(500),
      $body.addClass(".no-scroll");
  }),
    $(".popup-close").click(function () {
      $(".register-popup").fadeOut(500),
        $(".register-popup-overlay").fadeOut(500),
        $body.removeClass(".no-scroll");
    });
}),
  $(document).on("click", 'a[href^="#"]', function (e) {
    e.preventDefault(),
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top },
        1500
      );
  });
