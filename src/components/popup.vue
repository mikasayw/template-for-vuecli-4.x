<!--
 * @Description: file content
 * @Author: wei.Yin
 * @Date: 2020-11-24 18:48:02
 * @LastEditors: wei.Yin
 * @LastEditTime: 2020-11-25 11:28:22
-->
<template>
	<section>
		<transition name="left-enter">
			<section v-if="isShow" class="popup">
				<!-- <section class="popup transition position-left"> -->
				<slot></slot>
			</section>
		</transition>

		<section v-if="isShow" class="overlay"></section>
	</section>
</template>

<script>
export default {
	name: 'Popup',
	props: {
		isShow: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="less" scoped>
.overlay {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: transparent;
	z-index: 9;
}
.popup {
	position: fixed;
	top: 0;
	bottom: 0;
	overflow: auto;
	z-index: 10;
	width: 50%;
	background-color: #ffffff;
}
.left-enter-enter,
.left-enter-leave-to {
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	opacity: 0;
}
.left-enter-leave-active {
	-webkit-transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
	transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.left-enter-enter-active {
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}
</style>
