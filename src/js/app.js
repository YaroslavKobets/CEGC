import { initLazyLoad } from './modules/lazyLoad.js'
import { initHome } from './modules/home.js'
import { initSliders } from './modules/sliders.js'
import { initVideo } from './modules/video.js'

initLazyLoad()

document.addEventListener('DOMContentLoaded', () => {

	initHome()
	initSliders()
	initVideo()

});

