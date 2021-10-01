const openMenu = document.querySelector(".open-menu");
const deleteBtn = document.querySelector(".deleteBtn");
const navList = document.querySelector(".nav-list");

openMenu.addEventListener("click", () => {
  navList.classList.add("active");
});

deleteBtn.addEventListener("click", () => {
  navList.classList.remove("active");
});
 
const navLInk = document.querySelectorAll('.navLInk')

function deleteNavLink(){
  navList.classList.remove("active");
}

navLInk.forEach((n) => n.addEventListener("click",  deleteNavLink));

function bacNav() {
  const WindowValue = window.scrollY;
  const header = document.querySelector(".header-container");
  if (WindowValue < 150) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }
}

window.addEventListener("scroll", bacNav)

let BannerText = document.querySelector('.banner-title')
let decsTitle = document.querySelector('.desc-title')
let decsP = document.querySelector('.decs-p')
let whyTitle = document.querySelector('.why-title')
let whyDes = document.querySelector('.des-1')
let whyDes2 = document.querySelector('.des-2')
let Whytitle2 = document.querySelector('.why-title-1')
let navLink1 = document.getElementsByClassName("nav-link")[0]
let navLink2 = document.getElementsByClassName("nav-link")[1]
let navLink3 = document.getElementsByClassName("nav-link")[2]
let navLink4 = document.getElementsByClassName("nav-link")[3]
let sliderTitle = document.querySelector('.slider-title')
let LastTitle = document.querySelector('.last-title')
let LastP1 = document.querySelector('.p-1')
let LastP2 = document.querySelector('.p-2')
let LastP3 = document.querySelector('.p-3')
let LastP4 = document.querySelector('.p-4')
let LastP5 = document.querySelector('.p-5')
let footerTitle = document.querySelector('.footer-title')
let createTitle = document.querySelector('.create-title')
let FooterLastItem = document.querySelector('.footer-last-item')

let LangSelect = document.querySelector('#lang').addEventListener('change',function(e){
  if(e.target.value==="en"){
    BannerText.innerHTML = " Green Card <br> For real dreams"
    navLink1.innerHTML = ` Home  `
    navLink2.innerHTML = ` About us `
    navLink3.innerHTML = ` Services `
    navLink4.innerHTML = ` Contact `
    decsTitle.innerHTML = ` About registration `
    decsP.innerHTML = `This lottery, which is registered every year in all countries of the world, is registered in Azerbaijan this year as every year.  If you also want to live in the beautiful as well as magnificent nature of America, contact our company and win.`
    whyTitle.innerHTML = ` Why us? `
    whyDes.innerHTML = `Every year, 100,000 people in Azerbaijan register for the greencard lottery.  Unfortunately, many companies give out winning codes in a big money deal once they become citizens. `
    Whytitle2.innerHTML = `Our difference from other companies  `
    whyDes2.innerHTML = `
        <p class="des-1 des-2">
        • Your registration information is recorded completely and accurately. <br>
        • No additional charge. <br>
        • You will be given your case number code, whether you are a Greencard winner or not. <br>
        • The company can check the case number upon request</p> <br>
    `
    sliderTitle.innerHTML = `Those accepted through our company `
    LastTitle.innerHTML = ` Contact Us   `
    LastP1.innerHTML = `Apply`
    LastP2.innerHTML = ` let you know the results `
    LastP3.innerHTML = `Interviews  `
    LastP4.innerHTML = ` Obtain a visa from the embassy `
    LastP5.innerHTML = `Departure to the United States `
    footerTitle.innerHTML = ` Contact `
    createTitle.innerHTML = ` Contact Us `
    formName = document.querySelector('#name').placeholder = "Enter your name and surname" 
    formEmail = document.querySelector('#email').placeholder = "Enter your email address"
    forsText = document.querySelector('#user-text').placeholder = "Write down your questions"
    formBtn = document.querySelector('#form-btn').innerHTML =  `Send`
    FooterLastItem.innerHTML = `All rights reserved`
  }
  else if(e.target.value === "az"){
    BannerText.innerHTML = ` Green Card <br> Gerçək xəyallar üçün `
    navLink1.innerHTML = ` Ana Səhifə  `
    navLink2.innerHTML = ` Haqqımızda  `
    navLink3.innerHTML = ` Xidmətlərimiz  `
    navLink4.innerHTML = ` Əlaqə `
    decsTitle.innerHTML = ` Qeydiyyat haqqında `
    decsP.innerHTML = ` Hər il Dünyanın bütün ölkələrində qeydiyyat olunan bu lotereya, bu il də hər ilki kimi Azərbaycan'da qeydiyyatı aparılır. Əgər siz də Amerika'nın gözəl eləcə də möhtəşəm təbiətində yaşamaq istəyirsizsə, bizim şirkətə müraciət edin və qazanın. <br>`
    whyTitle.innerHTML = `Bizim digər şirkətlərdən fərqimiz `
    whyDes.innerHTML = `<p class="des-1">Hər il azərbaycan üzrə 100 min nəfər greencard lotereyası üçün qeydiyyatdam keçir. Təəssüf ki, bir çox şirkətlər vətəndaş qəbul olduqdan sonra uduş kodlarını onlara böyük pul müqavilində verir.  `
    whyDes2.innerHTML = ` <p class="des-1 des-2"> • Qeydiyyat məlumatınız tam və dəqiq olaraq qeyd edilir. <br> • Heç bir əlavə ödəniş tələb olunmur. <br>• Greencard qalibi olsanız və ya olmasanız belə case number kodunuz sizə verilir. <br>• İstəkdən asılı olaraq case number-i şirkət yoxlaya bilər</p> <br> `
    LastTitle.innerHTML = ` Bizimlə əlaqə qurun  `
    LastP1.innerHTML = `Müraciət(ərizə forması, şəkil)`
    LastP2.innerHTML = ` Nəticələri sizə bildiririk `
    LastP3.innerHTML = `  <p class="p-3"> Müsahibələr</p>`
    LastP4.innerHTML = `  <p class="p-4">Səfirlikdən <br>vizanı almaq</p> `
    LastP5.innerHTML = ` <p class="p-5">ABŞ-a <br> yola düşmə</p> `
    sliderTitle.innerHTML = `     <h3 class="slider-title"> Şirkətimiz vasitəsilə qəbul olanlar </h3> `
    footerTitle.innerHTML = ` Əlaqə `
    createTitle.innerHTML = ` Bizimlə əlaqə qurun `
    formName = document.querySelector('#name').placeholder = "adınız soyadınız "
    formEmail = document.querySelector('#email').placeholder = "mail unvanınız"
    forsText = document.querySelector('#user-text').placeholder = "suallarınızı qeyd edin..."
    formBtn = document.querySelector('#form-btn').innerHTML =  `Göndər`
    FooterLastItem.innerHTML = `Bütün hüquqlar muhafizə olunur`

  }
  else if(e.target.value === "ru"){
    BannerText.innerHTML = ` Green Card <br> Для настоящих мечтаний `
    navLink1.innerHTML = ` Домашняя страница  `
    navLink2.innerHTML = ` О нас  `
    navLink3.innerHTML = ` Наши сервисы `
    navLink4.innerHTML = ` Контакт   `
    decsTitle.innerHTML = ` О регистрации `
    decsP.innerHTML = ` <p class="decs-p">
    Эта лотерея, которая ежегодно регистрируется во всех странах мира, регистрируется в Азербайджане в этом году, как и каждый год.  Если вы тоже хотите жить не только в прекрасной, но и в великолепной природе Америки, свяжитесь с нашей компанией и выиграйте.
    </p> `
    whyTitle.innerHTML = ` Почему нас? `
    whyDes.innerHTML = ` Ежегодно 100 тысяч человек в Азербайджане регистрируются для участия в лотерее грин-карт.  К сожалению, многие компании, став гражданами, раздают выигрышные коды за большие деньги. `
    Whytitle2.innerHTML = ` Наше отличие от других компаний `
    whyDes2.innerHTML = `• Ваша регистрационная информация записывается полностью и точно. • Без дополнительной оплаты.• Вам будет предоставлен номер вашего дела, независимо от того, являетесь ли вы победителем Greencard или нет.При желании компания может уточнить номер дела  <br>`
    sliderTitle.innerHTML = ` Те, которые принимаются через нашу компанию `
    LastTitle.innerHTML = ` Шаги для получения Greencard `
    LastP1.innerHTML = `Форма заявки`
    LastP2.innerHTML = ` Сообщаем вам о результатах `
    LastP3.innerHTML = ` Подготовка к собеседованию `
    LastP4.innerHTML = ` Получение визы в посольстве `
    LastP5.innerHTML = ` Мужчина отправлен в США `
    footerTitle.innerHTML = ` Контакт `
    createTitle.innerHTML = ` Связаться с нами `
    formName = document.querySelector('#name').placeholder = "Введите свое имя и фамилию"; 
    formEmail = document.querySelector('#email').placeholder = "Введите ваш адрес электронной почты"
    forsText = document.querySelector('#user-text').placeholder = "Запишите свои вопросы"
    formBtn = document.querySelector('#form-btn').innerHTML =  `послать`
    FooterLastItem.innerHTML = `Все права защищены`
  }
})