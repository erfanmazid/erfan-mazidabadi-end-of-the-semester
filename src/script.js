const languageIcon = document.getElementById("languageicon");

const navBars = document.getElementById("nav-bars");
const navLinks = document.getElementById("nav-links");
const navClose = document.getElementById("nav-close");
const aLink = document.querySelectorAll(".a-link");

languageIcon.addEventListener("click", (e) => {
  if (
    languageIcon.src == "http://127.0.0.1:5500/src/img/iran-flag-icon-256.png"
  ) {
    languageIcon.src = "http://127.0.0.1:5500/src/img/gb.svg";
  } else {
    languageIcon.src = "http://127.0.0.1:5500/src/img/iran-flag-icon-256.png";
  }
});

navBars.addEventListener("click", () => {
  navLinks.classList.toggle("left-0");
  navLinks.classList.toggle("left-[-500px]");
});

navClose.addEventListener("click", () => {
  navLinks.classList.toggle("left-0");
  navLinks.classList.toggle("left-[-500px]");
});

aLink.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.toggle("left-0");
    navLinks.classList.toggle("left-[-500px]");
  });
});

// ---- languege ---- //

const changeLanguage = {
  en: {
    start: "Hi, It's me",
    name: "Erfan Mazidabadi",
    who_im1: "And I'm a ",
    who_im2: "Frontend Developer",
    about: "About",
    about2: "Me",
    about_t: "Frontend Developer & Graphic Designer",
    about_b:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum quisquam explicabo minus dolore, vel ducimus debitis adipisci! Quis officia veritatis asperiores non nemo nisi at vero id voluptatibus aliquam.",
    about_btn: "Read More ...",
    services: "My",
    services2: "Services",
    services1_t: "Web Developement",
    services1_b:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda repudiandae architecto sit ut quo ad accusamus hic distinctio pariatur laudantium, tempore, repellendus ex dignissimos facere cum? Alias, aut incidunt?",
    services2_t: "Apps Developement",
    services2_b:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda repudiandae architecto sit ut quo ad accusamus hic distinctio pariatur laudantium, tempore, repellendus ex dignissimos facere cum? Alias, aut incidunt?",
    services3_t: "Web Developement",
    services3_b:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda repudiandae architecto sit ut quo ad accusamus hic distinctio pariatur laudantium, tempore, repellendus ex dignissimos facere cum? Alias, aut incidunt?",
    skils: "My",
    skils2: "Skills",
    Portfolio: "Portfolio",
    ContactT: "Contact",
    Contact1: "Full name",
    Contact2: "Email Address",
    Contact3: "Phone Number",
    Contact4: "Subject",
    Contact5: "Your Message",
    ContactB: "Send",
  },
  fa: {
    start: "سلام این منم",
    name: "عرفان مزیدآبادی",
    who_im: "و من یه فرانت دولوپر هستم",
    about: "درباره من",
    about_t: "دولوپر فرات اند و طراح گرافیک",
    about_b:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
    about_btn: "بیشتر بخوانید",
    services: "سرویس های من",
    services1_t: "طراحی وب",
    services1_b:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    services2_t: "طراحی برنامه",
    services2_b:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    services3_b:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    skils: "مهارت های من",
    Portfolio: "نمونه کار ها",
    ContactT: "ارتباط با من",
    Contact1: "نام و نام خانوادگی",
    Contact2: "آدرس ایمیل",
    Contact3: "شماره تماس",
    Contact4: "موضوع",
    Contact5: "پیام شما",
    ContactB: "ارسال",
  },
};
