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


// منو سوالات
document.querySelectorAll('.question').forEach(q => {
    q.addEventListener('click', () => {
        q.classList.toggle('active');
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



    // let loginMessage = document.getElementById('login-message');
    // let contactName = document.getElementById('contact_name');

    // let submitBtn = document.getElementById('submitBtn');

    // submitBtn.addEventListener('click', function() {
    //     loginMessage.textContent = `${contactName.value} عزیز، ثبت نامت انجام شد.`;
    // });



















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
