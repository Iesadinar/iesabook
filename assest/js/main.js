

//  بدون اسکرول خودکار
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

//     // دسته‌بندی‌ها (برای منوی دسته‌بندی‌ها)
//     const categoryMenuItems = document.querySelectorAll('.dasteh_bandi ul li');
//     const sections = document.querySelectorAll('.dasteh_dini'); // فرض شده که بخش‌ها کلاس section دارند.

//     // استفاده از IntersectionObserver برای مشاهده بخش‌ها
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             const id = entry.target.id;
//             const menuItem = document.querySelector(`.dasteh_bandi ul li a[href="#${id}"]`).parentElement;

//             // بررسی اینکه بخش وارد نمای صفحه می‌شود
//             if (entry.isIntersecting) {
//                 // فعال کردن منو و اضافه کردن خط زیر فقط وقتی که این بخش دیده می‌شود
//                 categoryMenuItems.forEach(item => item.classList.remove('active'));
//                 menuItem.classList.add('active');
//             }
//         });
//     }, {
//         rootMargin: "0px 0px -80% 0px", // بخش زمانی فعال می‌شود که 80% آن وارد نمای صفحه شد
//         threshold: 0.5 // هنگامی که 50% از بخش در نمای صفحه دیده شد
//     });

//     // فقط بخش‌های اصلی (نه زیر بخش‌ها) را برای مشاهده به observer اضافه می‌کنیم
//     sections.forEach(section => {
//         observer.observe(section);
//     });

//     // اضافه کردن event listener برای کلیک منوها
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
// });









// با اسکرول خود کار


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
});
