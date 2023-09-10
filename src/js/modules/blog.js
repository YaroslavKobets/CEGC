// function initFilter() {
// 	document.addEventListener('click', documentActions);
// 	function documentActions(e) {
// 		const targetElement = e.target;
// 		if (targetElement.classList.contains('tag-btn')) {
// 			document.querySelector('.blog-tags').classList.toggle('active')
// 			document.querySelector('.tag-btn').classList.toggle('active')
// 		} else if (!targetElement.closest('.blog-tags') && document.querySelector('.blog-tags.active')) {
// 			document.querySelector('.blog-tags').classList.remove('active')
// 			document.querySelector('.tag-btn').classList.remove('active')

// 		}
// 	}
// }
// export const initBlog = () => {
// 	initFilter()
// }