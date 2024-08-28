document.addEventListener('DOMContentLoaded', function () {
	const navMenu = document.querySelector('.nav-items')
	const burgerIcon = document.querySelector('.burger-btn')
	const allNavItems = document.querySelectorAll('.nav-link')
	const xIcon = document.querySelector('.fa-xmark')

	burgerIcon.addEventListener('click', function () {
		navMenu.classList.toggle('show-menu')
	})
	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			navMenu.classList.remove('show-menu')
			xIcon.classList.remove('x-active')
			burgerIcon.classList.remove('b-deactive')
		})
	)

	function removeBurger() {
		burgerIcon.classList.add('b-deactive')
		xIcon.classList.add('x-active')
	}

	burgerIcon.addEventListener('click', removeBurger)

	function removeX() {
		burgerIcon.classList.remove('b-deactive')
		xIcon.classList.remove('x-active')
		navMenu.classList.remove('show-menu')
	}

	xIcon.addEventListener('click', removeX)

})
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY
//         let offset = sec.offsetTop
//         let height = sec.offsetHeight
//         let id = sec.getAttribute('id')

//         if(top > offset && top < offset + height){
//             navLinks.classList.remove('active');
//             document.querySelector('nav a [href*=' + id +']').classList.add('active')
//         }
//     })
// }
