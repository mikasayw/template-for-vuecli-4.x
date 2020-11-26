<template>
	<header class="headers flex">
		<section class="logo">
			<img
				class="logo-img"
				src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/architecturer/demo/wp-content/uploads/2018/08/logo@2x.png"
				alt=""
			/>
		</section>

		<nav class="pc-nav visible-md-block visible-lg-block">
			<ul class="flex">
				<li class="nav-item" v-for="item in navList" :key="item.label">
					<a>{{ item.label }}</a>
				</li>
			</ul>
		</nav>
		<!-- <section @click="isShow = !isShow">11111</section> -->

		<popup :isShow="isShow">
			<nav class="wap-nav">
				<ul>
					<li class="nav-item" v-for="item in navList" :key="item.label">
						<a>{{ item.label }}</a>
					</li>
				</ul>
			</nav>
		</popup>
	</header>
</template>

<script>
import Popup from '@/components/popup';

export default {
	name: 'Headers',
	data() {
		return {
			isShow: false,
			navList: [
				{ label: 'HOME', path: '' },
				{ label: 'ABOUT US', path: '' },
				{ label: 'SERVICES', path: '' },
				{ label: 'ROJECTS', path: '' },
				{ label: 'PARTNERS', path: '' },
				{ label: 'CONTACT US', path: '' },
			],
		};
	},
	components: {
		Popup,
	},
};
</script>

<style lang="less" scoped>
.headers {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;
	.logo {
		width: 173px;
		height: 37px;
	}
	.pc-nav {
		.nav-item {
			display: inline-block;
			margin: 0;
			padding: 10px 8px;
			font-weight: 400;
			font-size: 14px;
			a {
				color: #ffffff;
				position: relative;
				&::before {
					content: '';
					display: block;
					position: absolute;
					bottom: 0;
					left: 0;
					height: 1px;
					width: 100%;
					background-color: #ffffff;
					transform-origin: right bottom;
					transform: scale(0, 1);
					transition: color 0.1s, transform 0.15s ease-out;
				}
				&:hover::before {
					transform-origin: left bottom;
					transform: scale(1, 1);
				}
			}
		}
	}
}
@media (max-width: 480px) {
	.headers {
		// .pc-nav {
		// 	display: none;
		// }
		.wap-nav {
		}
	}
}
</style>
