<template>
	<section>
		<swiper ref="mySwiper" class="swiper" :options="swiperOptions">
			<swiper-slide>
				<img
					class="swiper-img"
					src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/architecturer/demo/wp-content/uploads/2018/08/minecraft-wood-and-stone-house-exterior-home-design-houzz-best-architecture-house-excerpt-nice-of-minecraft-wood-and-stone-house.jpg"
					alt=""
				/>

				<section class="text">
					<p
						class="ani"
						swiper-animate-effect="fadeInRight"
						swiper-animate-duration="1s"
						swiper-animate-delay=".3s"
					>
						内容
					</p>
					<p
						class="ani"
						swiper-animate-effect="fadeInRight"
						swiper-animate-duration="1s"
						swiper-animate-delay=".6s"
					>
						内容
					</p>
					<p
						class="ani"
						swiper-animate-effect="fadeInRight"
						swiper-animate-duration="1s"
						swiper-animate-delay=".9s"
					>
						内容
					</p>
				</section>
			</swiper-slide>
			<swiper-slide>
				<img
					class="swiper-img"
					src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/architecturer/demo/wp-content/uploads/2018/08/140658719663200.jpg"
					alt=""
				/>
				<div
					class="text ani"
					swiper-animate-effect="slideInRight"
					swiper-animate-duration="2s"
				>
					222222
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination">
				<span class="swiper-pagination-bullet" role="button" aria-label="Go to slide 1">
					2018
				</span>
				<span class="swiper-pagination-bullet" role="button" aria-label="Go to slide 2">
					2019
				</span>
			</div>
		</swiper>

		<figure class="figure">
			<!-- <div class="mask row">
		<div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
		<div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
		<div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
		</div> -->
			<section class="mask container-fluid">
				<ul class="row">
					<li class="li col-xs-6 col-md-4">111</li>
					<li class="li col-xs-6 col-md-4">222</li>
					<li class="li col-xs-6 col-md-4">333</li>
					<li class="li col-xs-6 col-md-4">444</li>
					<li class="li col-xs-6 col-md-4">555</li>
					<li class="li col-xs-6 col-md-4">666</li>
				</ul>
			</section>

			<img
				class="swiper-img"
				src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/architecturer/demo/wp-content/uploads/2018/08/140658719663200.jpg"
				alt=""
			/>
		</figure>
	</section>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
import 'swiper/swiper-bundle.css';
import * as swiperAni from '@/assets/js/swiper.animate.min.js';
import '@/assets/css/animate.min.css';

export default {
	name: 'Home',
	data() {
		return {
			swiperOptions: {
				speed: 1500,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					renderBullet: function(index, className) {
						if (index == 0) {
							return '<span class="' + className + '">' + 11 + '</span>';
						}
						if (index == 1) {
							return '<span class="' + className + '">perfect beautiful</span>';
						}
					},
					clickable: true,
				},
				keyboard: {
					enabled: true,
					onlyInViewport: false,
				},
				// grabCursor: true,
				paginationClickable: true,
				parallax: true,
				autoplay: false,
				effect: 'slide',
				on: {
					init: function() {
						console.log(this);
						swiperAni.swiperAnimateCache(this);
						swiperAni.swiperAnimate(this);
					},
					slideChangeTransitionEnd: function() {
						swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
						//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
					},
					// transitionStart: function() {
					// 	swiperAni.swiperAnimate(this);
					// },
				},
				// mousewheel: {
				// 	invert: false,
				// },
				// Some Swiper option/callback...
			},
		};
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	computed: {
		// var mySwiper = new Swiper(".swiper-container", {

		// 	  pagination: {
		// 		  el: '.swiper-pagination',
		// 		  type: 'bullets',
		// 		  clickable: true
		// 	  },
		// 	  keyboard: {
		// 	    enabled: true,
		// 	    onlyInViewport: false,
		// 	  },
		// 	  grabCursor: true,
		// 	  speed: 1000,
		// 	  paginationClickable: true,
		// 	  parallax: true,
		// 	  autoplay: false,
		// 	  effect: "slide",
		// 	  mousewheel: {
		// 	    invert: false,
		// 	  },
		// 	});
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	},
	created() {},
};
</script>

<style lang="less">
.home {
}

.swiper-pagination-bullet::before {
	background-color: #ffffff;
}

.swiper-pagination-bullet:before {
	content: '';
	position: absolute;
	top: 8px;
	left: -32.5px;
	width: 6px;
	height: 6px;
	border-radius: 100%;
	background-color: #fff;
	-webkit-transform: scale(0);
	transform: scale(0);
	transition: 0.2s;
}
.swiper-pagination-bullet-active:before {
	-webkit-transform: scale(1);
	transform: scale(1);
}
.swiper-pagination:before {
	content: '';
	position: absolute;
	left: -30px;
	top: 0;
	height: 100%;
	width: 1px;
	background-color: rgba(255, 255, 255, 0.2);
}
.swiper-pagination-bullet {
	width: auto;
	height: auto;
	text-align: center;
	opacity: 0.6;
	background: 0 0;
	color: #fff;
	margin: 15px 0 !important;
	position: relative;
}
.swiper-pagination {
	display: flex;
	right: 100px !important;
	height: 100%;
	left: auto !important;
	width: auto !important;
	flex-direction: column;
	justify-content: center;
	z-index: 1;
}
.swiper {
	width: 100%;
	height: 700px;
	.swiper-img {
		object-fit: cover;
	}
}

.figure {
	position: relative;
	width: 100%;
	height: 600px;
	img {
		object-fit: cover;
	}
	.mask {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		overflow: hidden;
		.li {
			box-sizing: border-box;
		}
	}
}
@media only screen and (max-width: 768px) {
	.figure .mask .li {
		height: calc(600px / 3);
		&:nth-child(2n - 1) {
			border-right: 1px solid blue;
		}
		&:nth-child(1),
		&:nth-child(2),
		&:nth-child(3),
		&:nth-child(4) {
			border-bottom: 1px solid blue;
		}
	}
}
@media only screen and (min-width: 768px) {
	.figure .mask .li {
		height: calc(600px / 2);
		&:nth-child(1),
		&:nth-child(2),
		&:nth-child(4),
		&:nth-child(5) {
			border-right: 1px solid blue;
		}
		&:nth-child(1),
		&:nth-child(2),
		&:nth-child(3) {
			border-bottom: 1px solid blue;
		}
	}
}

.swiper-wrapper {
	/* 通过改变animation-timing-function 制作弹性切换效果 */
	transition: 2s cubic-bezier(0.68, -0.4, 0.27, 1.34) 0.2s;
}
.text {
	position: absolute;
	top: 0;
	right: 0;
	color: red;
	font-size: 20px;
}
</style>
