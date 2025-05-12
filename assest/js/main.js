// document.addEventListener("DOMContentLoaded", function () {

//     // منوهای اصلی (برای زیرمنوها)
//     const mainMenuItems = document.querySelectorAll('.menu > li');
  
//     mainMenuItems.forEach(item => {
//         item.addEventListener('click', function () {
//             item.classList.toggle('open');
//         });
//     });

//     const submenuItems = document.querySelectorAll('.submenu li');
//     submenuItems.forEach(subItem => {
//         subItem.addEventListener('click', function (e) {
//             e.stopPropagation(); // جلوگیری از تاثیر روی رویداد اصلی
//         });
//     });




//     // همبرگر منو
//     let hambid = document.getElementById('hambid');
//     let divid = document.getElementById('divid');

//     hambid.addEventListener('click', function () {
//         if (divid.style.right === '0px') {
//             divid.style.right = '-300px';
//         } else {
//             divid.style.right = '0px';
//         }
//     });

//     let closeid = document.getElementById('closeid');
//     closeid.addEventListener('click', function () {
//         divid.style.right = '-300px';
//     });

//     let new_postsid = document.getElementById('new_postsid');
//     new_postsid.addEventListener('click', function () {
//         divid.style.right = '-300px';
//     });




// // // دیدگاه کاربران توضیحات کتاب


// const btn3 = document.getElementById("toggleButton3");
// const textContent3 = document.getElementById("textContent3");
// const commentsContent3 = document.getElementById("commentsContent3");
// const lines3 = document.querySelectorAll(".text-line3");
// const box3 = document.getElementById("infoBox3");
// let expanded3 = false;

// // تنظیم اولیه
// textContent3.style.maxHeight = "175px";
// box3.style.height = "auto";
// lines3.forEach(line => line.style.color = "#ccc"); // رنگ اولیه خاکستری روشن

// btn3.addEventListener("click", () => {
//   expanded3 = !expanded3;

//   if (expanded3) {
//     textContent3.style.maxHeight = "1000px";
//     lines3.forEach(line => line.style.color = "#000"); // همه مشکی
//     btn3.textContent = "مشاهده کمتر";
//   } else {
//     textContent3.style.maxHeight = "175px";
//     lines3.forEach(line => line.style.color = "#ccc"); // همه خاکستری روشن
//     btn3.textContent = " مشاهده بیشتر";
  
//   }
// });

// const tabs3 = document.querySelectorAll(".tab3");
// tabs3.forEach(tab => {
//   tab.addEventListener("click", () => {
//     tabs3.forEach(t => t.classList.remove("active3"));
//     tab.classList.add("active3");

//     const selected = tab.dataset.tab;
//     if (selected === "description") {
//       textContent3.classList.remove("hidden3");
//       btn3.classList.remove("hidden3");
//       commentsContent3.classList.add("hidden3");

//       if (!expanded3) {
//         textContent3.style.maxHeight = "100px";
//         lines3.forEach(line => line.style.color = "#ccc");
//       }

//       box3.style.height = "auto";
//     } else if (selected === "comments") {
//       textContent3.classList.add("hidden3");
//       btn3.classList.add("hidden3");
//       commentsContent3.classList.remove("hidden3");

//       box3.style.height = "auto";
//     }
//   });
// });

// // posts slider :
// const catContainer1 = document.getElementById("cat-container1");
// const catPrev1 = document.getElementById("cat-prev1");
// const catNext1 = document.getElementById("cat-next1");

// catPrev1.addEventListener("click", () => {
//   catContainer1.scrollBy({ left: -100, behavior: "smooth" });
// });

// catNext1.addEventListener("click", () => {
//   catContainer1.scrollBy({ left: 100, behavior: "smooth" });
// });



// // نمایش دکمه  بازگشت به اول صفحه هنگام اسکرول
// window.onscroll = function() {
//     const btn = document.getElementById("backToTopBtn");
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         btn.style.display = "block";
//     } else {
//         btn.style.display = "none";
//     }
// };


// // اسکرول نرم به بالا
// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// }


// // document.getElementById("backToTopBtn").addEventListener("click", scrollToTop);



// // منو سوالات
// document.querySelectorAll('.question').forEach(q => {
//     q.addEventListener('click', () => {
//         q.classList.toggle('active1');
//     });
// });










//     // دسته‌بندی‌ها (برای منوی دسته‌بندی‌ها)
//     const categoryMenuItems = document.querySelectorAll('.dasteh_bandi ul li');
//     const sections = document.querySelectorAll('.dasteh_dini'); // فرض شده که بخش‌ها کلاس dasteh_dini دارند.

//     // استفاده از IntersectionObserver برای اسکرول
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             const menuItem = categoryMenuItems[Array.from(sections).indexOf(entry.target)];

//             if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
//                 categoryMenuItems.forEach(item => item.classList.remove('active'));
//                 menuItem.classList.add('active');
//             }
//         });
//     }, {
//         rootMargin: "0px 0px -50% 0px", // وقتی 50% از بخش وارد نمای صفحه شد
//         threshold: 0.5 // زمانی که 50% از بخش در نمای صفحه دیده می‌شود
//     });

//     // فعال کردن observer برای هر بخش
//     sections.forEach(section => {
//         observer.observe(section);
//     });

//     // افزودن event listener برای کلیک منوها
//     categoryMenuItems.forEach(item => {
//         item.addEventListener('click', function (e) {
//             e.preventDefault(); // جلوگیری از پیوند و انجام رویدادهای پیش‌فرض

//             // پاک کردن کلاس active از همه آیتم‌ها
//             categoryMenuItems.forEach(menuItem => menuItem.classList.remove('active'));

//             // اضافه کردن کلاس active به آیتم فعلی
//             item.classList.add('active');

//             // رفتن به بخش مربوطه
//             const targetId = item.querySelector('a').getAttribute('href').split('#')[1];
//             const targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 targetElement.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });

//     // اسلایدر
//     const slides = document.getElementById('slides');
//     const dots = document.querySelectorAll('.dot');
//     const prev = document.getElementById('prev');
//     const next = document.getElementById('next');
//     let currentIndex = 0;
//     const totalSlides = dots.length;
//     let slideInterval = setInterval(nextSlide, 4000); // خودکار

//     function goToSlide(index) {
//       slides.style.transform = `translateX(-${index * 100}%)`;
//       dots.forEach(dot => dot.classList.remove('active'));
//       dots[index].classList.add('active');
//       currentIndex = index;
//     }

//     function nextSlide() {
//       currentIndex = (currentIndex + 1) % totalSlides;
//       goToSlide(currentIndex);
//     }

//     function prevSlide() {
//       currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//       goToSlide(currentIndex);
//     }

//     dots.forEach((dot, index) => {
//       dot.addEventListener('click', () => {
//         clearInterval(slideInterval);
//         goToSlide(index);
//         slideInterval = setInterval(nextSlide, 4000);
//       });
//     });

//     next.addEventListener('click', () => {
//       clearInterval(slideInterval);
//       nextSlide();
//       slideInterval = setInterval(nextSlide, 4000);
//     });

//     prev.addEventListener('click', () => {
//       clearInterval(slideInterval);
//       prevSlide();
//       slideInterval = setInterval(nextSlide, 4000);
//     });


// //     document.querySelectorAll('.video-slide').forEach(video => {
// //   video.addEventListener('click', () => {
// //     if (video.muted) {
// //       video.muted = false;       // اگر بی‌صدا بود، صدا را روشن کن
// //       video.volume = 1.0;        // اطمینان از اینکه صدا ۱ است
// //       if (video.paused) video.play(); // اگر ویدیو متوقفه، پخش کن
// //     } else {
// //       video.muted = true;        // اگر صدا روشن بود، خاموش کن
// //     }
// //   });
// // });
// const video = document.getElementById("myVideo");
// const playBtn = document.getElementById("playBtn");
// const pauseBtn = document.getElementById("pauseBtn");

// // فعال‌سازی ویدیو و صدا با کلیک روی پلی
// playBtn.addEventListener("click", () => {
// video.src = "assest/images/adver-video.mp4"; // فقط بارگذاری وقتی کاربر کلیک کرد
// video.play();
// video.muted = false;
// video.volume = 1;
// playBtn.style.display = "none";
// pauseBtn.style.display = "block";
// playBtn.classList.remove("blinking");
// });

// // توقف ویدیو با پاز
// pauseBtn.addEventListener("click", () => {
// video.pause();
// video.muted = true;
// pauseBtn.style.display = "none";
// playBtn.style.display = "block";
// playBtn.classList.add("blinking");
// });

// // دسته بندی اسلایدر

// // const catContainer = document.getElementById("cat-container");
// // const catPrev = document.getElementById("cat-prev");
// // const catNext = document.getElementById("cat-next");

// // catPrev.addEventListener("click", () => {
// //   catContainer.scrollBy({ left: -100, behavior: "smooth" });
// // });

// // catNext.addEventListener("click", () => {
// //   catContainer.scrollBy({ left: 100, behavior: "smooth" });
// // });

// const catContainer = document.getElementById("cat-container");
// const catPrev = document.getElementById("cat-prev");
// const catNext = document.getElementById("cat-next");

// catPrev.addEventListener("click", () => {
//   catContainer.scrollBy({ left: -100, behavior: "smooth" });
// });

// catNext.addEventListener("click", () => {
//   catContainer.scrollBy({ left: 100, behavior: "smooth" });
// });

// // لمس برای سوایپ
// let isDown = false;
// let startX;
// let scrollLeft;

// catContainer.addEventListener('touchstart', (e) => {
//   isDown = true;
//   startX = e.touches[0].pageX - catContainer.offsetLeft;
//   scrollLeft = catContainer.scrollLeft;
// });

// catContainer.addEventListener('touchmove', (e) => {
//   if (!isDown) return;
//   const x = e.touches[0].pageX - catContainer.offsetLeft;
//   const walk = (startX - x); // جهت حرکت
//   catContainer.scrollLeft = scrollLeft + walk;
// });

// catContainer.addEventListener('touchend', () => {
//   isDown = false;
// });



// });



////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {


// تم
    const main = document.querySelector(".main");
    if (!main) return;

    const savedTheme = localStorage.getItem("theme") || "day";
    main.classList.add(savedTheme);

    const buttons = document.querySelectorAll(".theme-buttons button");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const theme = btn.className;
        main.classList.remove("day", "night", "semi");
        main.classList.add(theme);
        localStorage.setItem("theme", theme);
      });
    });




// 
const thembuttons = document.querySelectorAll(".theme-buttons button");
const saved = localStorage.getItem("activeThemeButton");

if (saved) {
  document.querySelector(`.theme-buttons .${saved}`)?.classList.add("active");
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    thembuttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    localStorage.setItem("activeThemeButton", btn.className);
  });
});














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
      e.stopPropagation();
    });
  });

  // همبرگر منو
  const hambid = document.getElementById('hambid');
  const divid = document.getElementById('divid');
  hambid?.addEventListener('click', () => {
    if (divid?.style.right === '0px') {
      divid.style.right = '-300px';
    } else {
      divid.style.right = '0px';
    }
  });

  document.getElementById('closeid')?.addEventListener('click', () => {
    if (divid) divid.style.right = '-300px';
  });

  document.getElementById('new_postsid')?.addEventListener('click', () => {
    if (divid) divid.style.right = '-300px';
  });

  // دیدگاه کاربران توضیحات کتاب
  const btn3 = document.getElementById("toggleButton3");
  const textContent3 = document.getElementById("textContent3");
  const commentsContent3 = document.getElementById("commentsContent3");
  const lines3 = document.querySelectorAll(".text-line3");
  const box3 = document.getElementById("infoBox3");
  let expanded3 = false;

  if (textContent3 && btn3 && box3 && commentsContent3) {
    textContent3.style.maxHeight = "175px";
    box3.style.height = "auto";
    lines3.forEach(line => line.style.color = "#ccc");

    btn3.addEventListener("click", () => {
      expanded3 = !expanded3;
      textContent3.style.maxHeight = expanded3 ? "1000px" : "175px";
      lines3.forEach(line => line.style.color = expanded3 ? "#000" : "#ccc");
      btn3.textContent = expanded3 ? "مشاهده کمتر" : " مشاهده بیشتر";
    });

    const tabs3 = document.querySelectorAll(".tab3");
    tabs3.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs3.forEach(t => t.classList.remove("active3"));
        tab.classList.add("active3");
        const selected = tab.dataset.tab;

        if (selected === "description") {
          textContent3.classList.remove("hidden3");
          btn3.classList.remove("hidden3");
          commentsContent3.classList.add("hidden3");
          if (!expanded3) {
            textContent3.style.maxHeight = "100px";
            lines3.forEach(line => line.style.color = "#ccc");
          }
        } else if (selected === "comments") {
          textContent3.classList.add("hidden3");
          btn3.classList.add("hidden3");
          commentsContent3.classList.remove("hidden3");
        }
        box3.style.height = "auto";
      });
    });
  }

  // اسلایدر پست‌ها
  // const catContainer1 = document.getElementById("cat-container1");
  // document.getElementById("cat-prev1")?.addEventListener("click", () => {
  //   catContainer1?.scrollBy({ left: -100, behavior: "smooth" });
  // });
  // document.getElementById("cat-next1")?.addEventListener("click", () => {
  //   catContainer1?.scrollBy({ left: 100, behavior: "smooth" });
  // });

  document.querySelectorAll('.category-slider1').forEach(slider => {
    const container = slider.querySelector('.cat-container1');
    const nextBtn = slider.querySelector('.cat-next1');
    const prevBtn = slider.querySelector('.cat-prev1');
  
    nextBtn?.addEventListener("click", () => {
      container?.scrollBy({ left: 100, behavior: "smooth" });
    });
  
    prevBtn?.addEventListener("click", () => {
      container?.scrollBy({ left: -100, behavior: "smooth" });
    });
  });
  

  // دکمه بازگشت به بالا
  window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (!btn) return;
    btn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
  };

  // اسکرول به بالا
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // منو سوالات
  document.querySelectorAll('.question').forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('active1');
    });
  });

  // دسته‌بندی‌ها
  const categoryMenuItems = document.querySelectorAll('.dasteh_bandi ul li');
  const sections = document.querySelectorAll('.dasteh_dini');
  if (categoryMenuItems.length && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = Array.from(sections).indexOf(entry.target);
        const menuItem = categoryMenuItems[index];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          categoryMenuItems.forEach(item => item.classList.remove('active'));
          menuItem?.classList.add('active');
        }
      });
    }, { rootMargin: "0px 0px -50% 0px", threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    categoryMenuItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        categoryMenuItems.forEach(menuItem => menuItem.classList.remove('active'));
        item.classList.add('active');
        const href = item.querySelector('a')?.getAttribute('href');
        const targetId = href?.split('#')[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // اسلایدر تصویر اصلی
  const slides = document.getElementById('slides');
  const dots = document.querySelectorAll('.dot');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let currentIndex = 0;
  const totalSlides = dots.length;
  let slideInterval = setInterval(nextSlide, 4000);

  function goToSlide(index) {
    if (!slides) return;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index]?.classList.add('active');
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

  next?.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 4000);
  });

  prev?.addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 4000);
  });

  // ویدیو تبلیغاتی
  const video = document.getElementById("myVideo");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  playBtn?.addEventListener("click", () => {
    if (video) {
      video.src = "assest/images/adver-video.mp4";
      video.play();
      video.muted = false;
      video.volume = 1;
    }
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    playBtn.classList.remove("blinking");
  });

  pauseBtn?.addEventListener("click", () => {
    if (video) {
      video.pause();
      video.muted = true;
    }
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
    playBtn.classList.add("blinking");
  });

  // اسلایدر دسته‌بندی
  const catContainer = document.getElementById("cat-container");
  document.getElementById("cat-prev")?.addEventListener("click", () => {
    catContainer?.scrollBy({ left: -100, behavior: "smooth" });
  });
  document.getElementById("cat-next")?.addEventListener("click", () => {
    catContainer?.scrollBy({ left: 100, behavior: "smooth" });
  });

  // لمس برای سوایپ
  if (catContainer) {
    let isDown = false, startX, scrollLeft;
    catContainer.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - catContainer.offsetLeft;
      scrollLeft = catContainer.scrollLeft;
    });
    catContainer.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - catContainer.offsetLeft;
      catContainer.scrollLeft = scrollLeft + (startX - x);
    });
    catContainer.addEventListener('touchend', () => {
      isDown = false;
    });
  }

// تصاویر گالری
  const thumbnails = document.querySelectorAll(".thumbnail-images img");
const mainImage = document.getElementById("current-image");

thumbnails.forEach(thumb => {
thumb.addEventListener("click", () => {
// عوض کردن عکس اصلی
mainImage.src = thumb.src;

// هایلایت فعال
thumbnails.forEach(t => t.classList.remove("active"));
thumb.classList.add("active");
});
});






  
});
