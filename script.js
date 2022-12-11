/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== DOWNLOAD CV ===============*/
$("#GetFile").on("click", function () {
  $.ajax({
    url: "./resume/Mehedi Hasan Siam.pdf",
    method: "GET",
    xhrFields: {
      responseType: "blob",
    },
    success: function (data) {
      var a = document.createElement("a");
      var url = window.URL.createObjectURL(data);
      a.href = url;
      a.download = "Mehedi Hasan Siam.pdf";
      document.body.append(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    },
  });
});

/*=============== TEXT TYPING ===============*/
var typed = new Typed(".typing-text", {
  strings: ["", "Web Designer", "web developer", "Content Writer", "Blogger"],
  loop: true,
  typeSpeed: 150,
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true,
});

sr.reveal(
  `.home--content,.home--contact--icon,
            .home--img,.about--img,
            .about-content, .about--btn,
             .skill--bar,
            .skill--content .skill-img,.portfolio-des .box,
            .team--des .column, .service--des .column,
            .icons-container .cont--icons, .contact-img, .contact--input  `,
  {
    interval: 200,
  }
);

/*===============CONTACT FORM ===============*/

function sendEmail() {
  Email.send({
    SecureToken: "0cc3ca76-137a-4c19-ab29-a4d940563441",

    To: "mehedihasansiam.com@gmail.com",
    From: "programmersiam.com@gmail.com ",
    Subject: "new contact form enquiry",
    Body:
      "Name:" +
      document.getElementById("name").value +
      "<br/> Email :" +
      document.getElementById("email").value +
      "<br/> Subject :" +
      document.getElementById("subject").value +
      "<br/> Textarea: " +
      document.getElementById("textarea").value,
  }).then((message) => alert("Message Sent Successfully"));
}
