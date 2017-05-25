<template>
	<div>
		<header class="header">
			<div class="header_top">
				<div class="search">
					<a href="###">
						<span class="searchbtn"></span>
					</a>
				</div>
				<div class="logo">
					<a href="###">
						<span class="logopic"></span>
					</a>
				</div>
				<div class="download">
					<a class="downapp" href="###">下载APP</a>
				</div>
			</div>
			<nav class="header_nav clearfloat">
				<span class="navitem"><router-link :to="{name:'home.index'}">推荐</router-link></span>
				<span class="navitem"><router-link :to="{name:'home.chartbang'}">排行</router-link></span>
				<span class="navitem"><router-link :to="{name:'home.classify'}">分类</router-link></span>
				<span class="navitem"><router-link :to="{name:'home.artistbang'}">歌手</router-link></span>
				<span class="navitem"><router-link :to="{name:'home.mvbang'}">MV</router-link></span>
			</nav>
		</header>
	</div>
</template>

<script>
	export default {
								
	}
</script>

<style lang="scss" scoped>
	.header {
		height: 0.72rem;
		.header_top {
			background: #1da0ef;
			height: 0.37rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.search {
				height: 100%;
				width: 0.38rem;
				display: flex;
				justify-content: center;
				align-items: center;
				.searchbtn {
					display: block;
					width: .17rem;
					height: .17rem;
					background-image: url(../imgs/pics.png);
					background-repeat: no-repeat;
					background-position: 0 0;
					background-size: 950%;
				}
			}
			.logo {
				flex: 1;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.logopic {
					width: 1rem;
					height: 0.3rem;
					display: block;
					background: url('../imgs/logo.png') no-repeat;
					background-size: cover;
				}
			}
			.download {
				display: flex;
				margin-right: 0.1rem;
				.downapp {
					width: 0.68rem;
					border-radius: 0.4rem;
					text-align: center;
					color: #fff;
					font-size: .12rem;
					background: #1470a7;
					padding: 0.03rem 0;
				}
			}
		}
		.header_nav {
			position: fixed;
			top: 0.37rem;
			left: 0;
			width: 100%;
			height: 0.33rem;
			border-bottom: 1px solid #ddd;
			background: #fff;
			z-index: 10;
			.navitem {
				float: left;
				width: 20%;
				font-size: 0.14rem;
				text-align: center;
				line-height: 0.33rem;
				color: #333;
				border-bottom: 2px solid transparent;
			}
		}
	}
	
	.router-link-active {
		display: inline-block;
		width: 100%;
		height: 100%;
		color: #2095dd;
		border-bottom: 2px solid #2095dd;
	}
</style>