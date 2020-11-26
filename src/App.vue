<template>
	<div id="app">
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		<Headers></Headers>
		<router-view />
		<footer></footer>
	</div>
</template>

<script>
import Headers from '@/components/headers.vue';
// import Footers from '@/components/Footer.vue';
export default {
	components: {
		Headers,
	},
};
</script>
