function initHomeTabs() {
	const homeTabs = document.querySelector('.services-tabs')

	if (homeTabs) {
		const tabsBtn = document.querySelectorAll('.services-tabs__btn')
		const tabsItems = document.querySelectorAll('.services-tabs__item')

		tabsBtn.forEach(function (item) {
			item.addEventListener('click', function () {
				let currentBtn = item
				let tabId = currentBtn.getAttribute('data-tab')
				let currentTab = document.querySelector(tabId)

				if (!currentBtn.classList.contains('active')) {
					tabsBtn.forEach(function (item) {
						item.classList.remove('active')
					})
					tabsItems.forEach(function (item) {
						item.classList.remove('active')
					})

					currentBtn.classList.add('active')
					currentTab.classList.add('active')
				}

			})
		})
		document.querySelector('.services-tabs__btn').click()
	}
}
function initShowMore() {
	const showMoreFiles = document.querySelector('.read-more__text');
	if (showMoreFiles) {
		const showMore = document.querySelector('.more-btn');
		showMore.addEventListener('click', function (e) {
			showMore.classList.add('active');
			showMoreFiles.classList.add('active');
			showMoreFiles.style.maxHeight = showMoreFiles.scrollHeight + 'px';;
		});
	}

}

function initLang() {
	const lang = document.querySelector('.lang')
	if (lang) {
		const langBnt = lang.querySelector('.lang__current')
		langBnt.addEventListener('click', function (e) {
			langBnt.classList.toggle('active')
			lang.querySelector('.lang__dropdown').classList.toggle('active')
		})
	}
}

function initHeaderNav() {
	const iconMenu = document.querySelector('.menu-icon');
	if (iconMenu) {
		const menuBody = document.querySelector('.menu');
		iconMenu.addEventListener('click', function (e) {
			document.body.classList.toggle('lock')
			iconMenu.classList.toggle('open')
			menuBody.classList.toggle('open')
		})
	}
}

export const initHome = () => {
	initHomeTabs()
	initShowMore()
	initLang()
	initHeaderNav()
}