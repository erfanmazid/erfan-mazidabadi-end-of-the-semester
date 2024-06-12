const languageIcon = document.getElementById("languageicon");

const navBars = document.getElementById("nav-bars");
const navLinks = document.getElementById("nav-links");
const navClose = document.getElementById("nav-close");
const aLink = document.querySelectorAll(".a-link");

// --- get html tag ---
const form = document.querySelector("form");
const body = document.querySelector("body");
const p = document.querySelectorAll("p");

const start = document.getElementById("start");
const namee = document.getElementById("name");
const whoIm1 = document.getElementById("who-im1");
const whoIm2 = document.getElementById("who-im2");
const about = document.getElementById("about");
const about2 = document.getElementById("about2");
const aboutT = document.getElementById("about-t");
const aboutB = document.getElementById("about-b");
const aboutBtn = document.getElementById("about-btn");
const services = document.getElementById("services");
const services2 = document.getElementById("services2");
const services1T = document.getElementById("services1-t");
const services1B = document.getElementById("services1-b");
const services2T = document.getElementById("services2-t");
const services2B = document.getElementById("services2-b");
const services3T = document.getElementById("services3-t");
const services3B = document.getElementById("services3-b");
const skils = document.getElementById("skils");
const skils2 = document.getElementById("skils2");
const Portfolio = document.getElementById("Portfolio");
const ContactT = document.getElementById("ContactT");
const Contact1 = document.getElementById("Contact1");
const Contact2 = document.getElementById("Contact2");
const Contact3 = document.getElementById("Contact3");
const Contact4 = document.getElementById("Contact4");
const Contact5 = document.getElementById("Contact5");
const ContactB = document.getElementById("ContactB");

languageIcon.addEventListener("click", (e) => {
  if (
    languageIcon.src == "http://127.0.0.1:5500/src/img/iran-flag-icon-256.png"
  ) {
    languageIcon.src = "http://127.0.0.1:5500/src/img/gb.svg";
    languageIcon.setAttribute("lang", "fa");
  } else {
    languageIcon.src = "http://127.0.0.1:5500/src/img/iran-flag-icon-256.png";
    languageIcon.setAttribute("lang", "en");
  }
  console.log(e);
  changLang();
});

navBars.addEventListener("click", () => {
  navLinks.classList.toggle("left-0");
  navLinks.classList.toggle("left-[-700px]");
});

navClose.addEventListener("click", () => {
  navLinks.classList.toggle("left-0");
  navLinks.classList.toggle("left-[-700px]");
});

aLink.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.toggle("left-0");
    navLinks.classList.toggle("left-[-700px]");
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
    who_im1: "من یه",
    who_im2: "فرانت دولوپر هستم",
    about: "درباره ",
    about2: "من",
    about_t: "دولوپر فرات اند و طراح گرافیک",
    about_b:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
    about_btn: "بیشتر بخوانید",
    services: "سرویس",
    services2: "من",
    services1_t: "طراحی وب",
    services1_b:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    services2_t: "طراحی برنامه",
    services2_b:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    services3_t: "طراح وب",
    services3_b:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    skils: "مهارت های",
    skils2: "من",
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

function changLang() {
  if (languageIcon.getAttribute("lang") == "en") {
    form.dir = "ltr";
    start.innerHTML = changeLanguage.en.start;
    namee.innerHTML = changeLanguage.en.name;
    whoIm1.innerHTML = changeLanguage.en.who_im1;
    whoIm2.innerHTML = changeLanguage.en.who_im2;
    about.innerHTML = changeLanguage.en.about;
    about2.innerHTML = changeLanguage.en.about2;
    aboutT.innerHTML = changeLanguage.en.about_t;
    aboutB.innerHTML = changeLanguage.en.about_b;
    aboutBtn.innerHTML = changeLanguage.en.about_btn;
    services.innerHTML = changeLanguage.en.services;
    services2.innerHTML = changeLanguage.en.services2;
    services1T.innerHTML = changeLanguage.en.services1_t;
    services1B.innerHTML = changeLanguage.en.services1_b;
    services2T.innerHTML = changeLanguage.en.services2_t;
    services2B.innerHTML = changeLanguage.en.services2_b;
    services3T.innerHTML = changeLanguage.en.services3_t;
    services3B.innerHTML = changeLanguage.en.services3_b;
    skils.innerHTML = changeLanguage.en.skils;
    skils2.innerHTML = changeLanguage.en.skils2;
    Portfolio.innerHTML = changeLanguage.en.Portfolio;
    ContactT.innerHTML = changeLanguage.en.ContactT;
    Contact1.placeholder = changeLanguage.en.Contact1;
    Contact2.placeholder = changeLanguage.en.Contact2;
    Contact3.placeholder = changeLanguage.en.Contact3;
    Contact4.placeholder = changeLanguage.en.Contact4;
    Contact5.placeholder = changeLanguage.en.Contact5;
    ContactB.value = changeLanguage.en.ContactB;
  } else {
    form.dir = "rtl";
    start.innerHTML = changeLanguage.fa.start;
    namee.innerHTML = changeLanguage.fa.name;
    whoIm1.innerHTML = changeLanguage.fa.who_im1;
    whoIm2.innerHTML = changeLanguage.fa.who_im2;
    about.innerHTML = changeLanguage.fa.about;
    about2.innerHTML = changeLanguage.fa.about2;
    aboutT.innerHTML = changeLanguage.fa.about_t;
    aboutB.innerHTML = changeLanguage.fa.about_b;
    aboutBtn.innerHTML = changeLanguage.fa.about_btn;
    services.innerHTML = changeLanguage.fa.services;
    services2.innerHTML = changeLanguage.fa.services2;
    services1T.innerHTML = changeLanguage.fa.services1_t;
    services1B.innerHTML = changeLanguage.fa.services1_b;
    services2T.innerHTML = changeLanguage.fa.services2_t;
    services2B.innerHTML = changeLanguage.fa.services2_b;
    services3T.innerHTML = changeLanguage.fa.services3_t;
    services3B.innerHTML = changeLanguage.fa.services3_b;
    skils.innerHTML = changeLanguage.fa.skils;
    skils2.innerHTML = changeLanguage.fa.skils2;
    Portfolio.innerHTML = changeLanguage.fa.Portfolio;
    ContactT.innerHTML = changeLanguage.fa.ContactT;
    Contact1.placeholder = changeLanguage.fa.Contact1;
    Contact2.placeholder = changeLanguage.fa.Contact2;
    Contact3.placeholder = changeLanguage.fa.Contact3;
    Contact4.placeholder = changeLanguage.fa.Contact4;
    Contact5.placeholder = changeLanguage.fa.Contact5;
    ContactB.value = changeLanguage.fa.ContactB;
  }
}
