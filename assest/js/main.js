document.addEventListener("DOMContentLoaded", function () {

    // منوهای اصلی (برای زیرمنوها)
    const mainMenuItems = document.querySelectorAll('.menu > li');
  
    mainMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('open');
        });
    });

    const submenuItems = document.querySelectorAll('.submenu li');
    submenuItems.forEach(subItem => {
        subItem.addEventListener('click', function (e) {
            e.stopPropagation(); // جلوگیری از تاثیر روی رویداد اصلی
        });
    });




    // همبرگر منو
    let hambid = document.getElementById('hambid');
    let divid = document.getElementById('divid');

    hambid.addEventListener('click', function () {
        if (divid.style.right === '0px') {
            divid.style.right = '-300px';
        } else {
            divid.style.right = '0px';
        }
    });

    let closeid = document.getElementById('closeid');
    closeid.addEventListener('click', function () {
        divid.style.right = '-300px';
    });

    let new_postsid = document.getElementById('new_postsid');
    new_postsid.addEventListener('click', function () {
        divid.style.right = '-300px';
    });






// نمایش دکمه  بازگشت به اول صفحه هنگام اسکرول
window.onscroll = function() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};


// اسکرول نرم به بالا
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.getElementById("backToTopBtn").addEventListener("click", scrollToTop);



// منو سوالات
document.querySelectorAll('.question').forEach(q => {
    q.addEventListener('click', () => {
        q.classList.toggle('active1');
    });
});










    // دسته‌بندی‌ها (برای منوی دسته‌بندی‌ها)
    const categoryMenuItems = document.querySelectorAll('.dasteh_bandi ul li');
    const sections = document.querySelectorAll('.dasteh_dini'); // فرض شده که بخش‌ها کلاس dasteh_dini دارند.

    // استفاده از IntersectionObserver برای اسکرول
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const menuItem = categoryMenuItems[Array.from(sections).indexOf(entry.target)];

            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                categoryMenuItems.forEach(item => item.classList.remove('active'));
                menuItem.classList.add('active');
            }
        });
    }, {
        rootMargin: "0px 0px -50% 0px", // وقتی 50% از بخش وارد نمای صفحه شد
        threshold: 0.5 // زمانی که 50% از بخش در نمای صفحه دیده می‌شود
    });

    // فعال کردن observer برای هر بخش
    sections.forEach(section => {
        observer.observe(section);
    });

    // افزودن event listener برای کلیک منوها
    categoryMenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // جلوگیری از پیوند و انجام رویدادهای پیش‌فرض

            // پاک کردن کلاس active از همه آیتم‌ها
            categoryMenuItems.forEach(menuItem => menuItem.classList.remove('active'));

            // اضافه کردن کلاس active به آیتم فعلی
            item.classList.add('active');

            // رفتن به بخش مربوطه
            const targetId = item.querySelector('a').getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // اسلایدر
    const slides = document.getElementById('slides');
    const dots = document.querySelectorAll('.dot');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let currentIndex = 0;
    const totalSlides = dots.length;
    let slideInterval = setInterval(nextSlide, 4000); // خودکار

    function goToSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      currentIndex = index;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      goToSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      goToSlide(currentIndex);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        goToSlide(index);
        slideInterval = setInterval(nextSlide, 4000);
      });
    });

    next.addEventListener('click', () => {
      clearInterval(slideInterval);
      nextSlide();
      slideInterval = setInterval(nextSlide, 4000);
    });

    prev.addEventListener('click', () => {
      clearInterval(slideInterval);
      prevSlide();
      slideInterval = setInterval(nextSlide, 4000);
    });


//     document.querySelectorAll('.video-slide').forEach(video => {
//   video.addEventListener('click', () => {
//     if (video.muted) {
//       video.muted = false;       // اگر بی‌صدا بود، صدا را روشن کن
//       video.volume = 1.0;        // اطمینان از اینکه صدا ۱ است
//       if (video.paused) video.play(); // اگر ویدیو متوقفه، پخش کن
//     } else {
//       video.muted = true;        // اگر صدا روشن بود، خاموش کن
//     }
//   });
// });
const video = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

// فعال‌سازی ویدیو و صدا با کلیک روی پلی
playBtn.addEventListener("click", () => {
video.src = "assest/images/adver-video.mp4"; // فقط بارگذاری وقتی کاربر کلیک کرد
video.play();
video.muted = false;
video.volume = 1;
playBtn.style.display = "none";
pauseBtn.style.display = "block";
playBtn.classList.remove("blinking");
});

// توقف ویدیو با پاز
pauseBtn.addEventListener("click", () => {
video.pause();
video.muted = true;
pauseBtn.style.display = "none";
playBtn.style.display = "block";
playBtn.classList.add("blinking");
});

// دسته بندی اسلایدر

// const catContainer = document.getElementById("cat-container");
// const catPrev = document.getElementById("cat-prev");
// const catNext = document.getElementById("cat-next");

// catPrev.addEventListener("click", () => {
//   catContainer.scrollBy({ left: -100, behavior: "smooth" });
// });

// catNext.addEventListener("click", () => {
//   catContainer.scrollBy({ left: 100, behavior: "smooth" });
// });

const catContainer = document.getElementById("cat-container");
const catPrev = document.getElementById("cat-prev");
const catNext = document.getElementById("cat-next");

catPrev.addEventListener("click", () => {
  catContainer.scrollBy({ left: -100, behavior: "smooth" });
});

catNext.addEventListener("click", () => {
  catContainer.scrollBy({ left: 100, behavior: "smooth" });
});

// لمس برای سوایپ
let isDown = false;
let startX;
let scrollLeft;

catContainer.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - catContainer.offsetLeft;
  scrollLeft = catContainer.scrollLeft;
});

catContainer.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - catContainer.offsetLeft;
  const walk = (startX - x); // جهت حرکت
  catContainer.scrollLeft = scrollLeft + walk;
});

catContainer.addEventListener('touchend', () => {
  isDown = false;
});
});
