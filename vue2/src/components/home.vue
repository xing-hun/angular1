<template>
	<div>
		<v-header></v-header>
		 <router-view></router-view>
	</div>
</template>
<script>import Header from './header.vue';

export default {

	components: {
		'v-header': Header
	}

}</script>

<style>

</style>