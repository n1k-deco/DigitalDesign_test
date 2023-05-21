// кнопка скрола наверх
function setupScroll() {
	const scrollToTopBtn = document.querySelector('.btn__scroll')

	function scrollTop() {
		//// Добавление или удаление класса 'show' в зависимости от скролла страницы
		scrollToTopBtn.classList.toggle('show', window.pageYOffset > 0)
	}

	window.addEventListener('scroll', scrollTop)

	scrollToTopBtn.addEventListener('click', () => {
		// Прокрутка страницы до определенных координат с плавной анимацией
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
}

setupScroll()


// плавная прокрутка по категориям

const menuLinks = document.querySelectorAll('.navigate__category');
// Получаем высоту закрепленного меню 
const headerHeight = document.querySelector('.menu').offsetHeight + 20; 

// Обработчик события для плавного перехода к выбранной категории
function navigateToCategory(e) {
	e.preventDefault();
	// Получаем идентификатор категории без символа "#"
	const targetId = this.getAttribute('href').substring(1); 
	const targetElement = document.getElementById(targetId);
	if (targetElement) {
		// Прокручиваем страницу плавно до выбранной категории с учетом высоты меню
		window.scrollTo({
			top: targetElement.offsetTop - headerHeight,
			behavior: 'smooth'
		});
	}
}

menuLinks.forEach(function(link) {
  	link.addEventListener('click', navigateToCategory);
});


// вывод даты
function getMonthName(monthNumber) {
	const monthNames = [
	  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
	  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
	]
	return monthNames[monthNumber]
}

function getDayInfo(dateString, elementId) {
	const date = new Date(dateString)
	const dayOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  
	// Определяем номер первой недели месяца
	const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
	const firstWeekStart = 1 - (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1)
  
	// Определяем номер текущей недели, месяца и года
	const weekNumber = Math.floor((date.getDate() - firstWeekStart) / 7) + 1
	const month = getMonthName(date.getMonth())
	const year = date.getFullYear()
	
	const formattedDate = `${dayOfWeek[date.getDay()]}, ${weekNumber} неделя ${month} ${year} года`

	// const dateElement = document.getElementById(elementId)
	// dateElement.textContent = formattedDate
	document.getElementById(elementId).textContent = formattedDate;
}

const data = [
	{ date: '2023-01-01', id: 'Acer-Aspire-7' },
	{ date: '2023-03-13', id: 'ASUS-TUF-Gaming-F15' },
	{ date: '2023-07-09', id: 'HONOR-MagicBook-16' },
	{ date: '2023-05-01', id: 'HUAWEI-MateBook-D-16' },
	{ date: '2023-04-01', id: 'MSI-GF63-218XRU' },
	{ date: '2023-01-28', id: 'Polarline 24PL12TC LED' },
	{ date: '2023-02-04', id: 'Samsung-UE43AU7100U-2021' },
	{ date: '2023-02-16', id: 'SkyLine-40LT5900-2019' },
	{ date: '2023-03-11', id: 'TCL-50P637-2022' },
	{ date: '2023-03-23', id: 'Xiaomi-TV-A2-43' },

	{ date: '2023-03-23', id: 'Bosch PGP6B5O93R' },
	{ date: '2023-03-23', id: 'MAUNFELD EGHE.43.3STS-EW' },
	{ date: '2023-03-23', id: 'Simfer H45V30M411' },
	{ date: '2023-03-23', id: 'Weissgauff HGG 640 XB' },
	{ date: '2023-03-23', id: 'Beko WRE 55P2 BWW' },
	{ date: '2023-03-23', id: 'Candy SGV 44128TWB3' },
	{ date: '2023-03-23', id: 'Hotpoint VMUL 501 B' },
	{ date: '2023-03-23', id: 'Indesit EWSD 51031 BK CIS' },
	{ date: '2023-03-23', id: 'Beko BIE 21300 W' },
	{ date: '2023-03-23', id: 'Candy FCP 502 XE1' },
	{ date: '2023-03-23', id: 'Krona BREVE 45 WH' },

	{ date: '2023-03-23', id: 'Диван прямой EDLEN Поло Эконом' },
	{ date: '2023-03-23', id: 'Диван прямой Арджуна Морис' },
	{ date: '2023-03-23', id: 'Диван прямой ИКЕА КЛИППАН' },
	{ date: '2023-03-23', id: 'Кресло ИКЕА ТУЛЬСТА' },
	{ date: '2023-03-23', id: 'Кресло мягкое Честер' },
	{ date: '2023-03-23', id: 'Кресло-кровать Salotti Альфа' },
	{ date: '2023-03-23', id: 'Стол кухонный ИКЕА ОЛМСТАД' },
	{ date: '2023-03-23', id: 'Стол обеденный SV-Мебель СО-1' },
	{ date: '2023-03-23', id: 'Стол обеденный TetChair Claire' },
	{ date: '2023-03-23', id: 'Стул M CITY Comfort' },
	{ date: '2023-03-23', id: 'Стул ИКЕА СТЕФАН' }
]

data.forEach(({ date, id }) => {
	getDayInfo(date, id);
});


// модальное окно

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector),
		  commentTextarea  = modal.querySelector('textarea[name="comment"]'),
		  RadioButton = modal.querySelector('#green')
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''

	if (commentTextarea) {
        commentTextarea.value = ''
    }

    RadioButton.checked = true

	resetCounter()
}

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector)

    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

function modal(triggerSelector, modalSelector) {
    // Модальное окно
    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
		  buyButton = document.querySelector('.btn__modal'),
		  colorInputs = document.querySelectorAll('input[name="color"]')
	
	let selectedProductId = null;

    modalTrigger.forEach(function(btn) {
        btn.addEventListener('click', () => {
			selectedProductId = btn.getAttribute('data-product-id')
			openModal(modalSelector)
		})
    })

	buyButton.addEventListener('click', (e) => {
		e.preventDefault()
		let selectedColor = ''
		colorInputs.forEach((input) => {
			if (input.checked) {
			  selectedColor = input.value;
			}
		});
		if (selectedProductId && selectedColor) {
            alert(`Вы купили товар(ы) "${selectedProductId}" в ${selectedColor} цвете. Спасибо за покупку!`);
        }

		closeModal(modalSelector)
	})

    // делаем, чтоб окно закрывалось при нажатии в любом месте 
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector)
        }   
    })

    // делаем, что окно закрывалось через ESCAPE 
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector)
        }
    })
}

modal('[data-modal]', '.modal')


// счетчик в модальном окне

let counter = 1;
const counterValue = document.querySelector('.counter__value'),
	  incrementBtn = document.querySelector('.increment__btn'),
 	  decrementBtn = document.querySelector('.decrement__btn'),
 	  BuyBtn = document.querySelector('.btn__modal')

// Функция для обновления значения счетчика
function updateCounter(value) {
  	counter += value
  	counterValue.innerHTML = counter
	counterDisabled()
}

function resetCounter() {
    counter = 1
    counterValue.innerHTML = counter
	counterDisabled()
}

function counterDisabled() {
	if (counter === 0) {
        decrementBtn.disabled = true
        BuyBtn.disabled = true
        decrementBtn.classList.add('disabled')
        BuyBtn.classList.add('disabled')
    } else {
        decrementBtn.disabled = false
        BuyBtn.disabled = false
        decrementBtn.classList.remove('disabled')
        BuyBtn.classList.remove('disabled')
    }
}

// Обработчик клика на кнопке инкремента
decrementBtn.addEventListener('click', (e) => {
	e.preventDefault()
	if (counter > 0) {
		updateCounter(-1)
	}
});

// Обработчик клика на кнопке декремента
incrementBtn.addEventListener('click', (e) => {
	e.preventDefault()
  	updateCounter(1)
});


// Переключение темы
const btnDarkMode = document.querySelector(".switch__theme");

// 1. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("switch__theme__active");
    document.body.classList.add("dark__theme");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("switch__theme__active");
    document.body.classList.remove("dark__theme");
}

// 2. Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("switch__theme__active");
    const isDark = document.body.classList.toggle("dark__theme");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
		document.body.classList.remove("light__theme");
    } else {
        localStorage.setItem("darkMode", "light");
		document.body.classList.add("light__theme");
    }
};