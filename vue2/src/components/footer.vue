<template>
	<footer class="footerarea">
			<div class="footer clearfloat">
				<a class="logo2 fl"></a>
				<a class="download2 fr">下载APP</a>
			</div>
		</footer>
</template>

<script>
</script>

<style lang="scss" scoped>
	.footerarea {
    position: fixed;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: -40px;
    background: #e8e8e8;
    z-index: 200;
    .footer {
        .logo2 {
            width: 0.8rem;
            height: 0.3rem;
            margin: 0.06rem 0 0 0.1rem;
            background: url(../imgs/logo2.png) no-repeat;
            background-size: 100%;
        }
        .download2 {
            width: 0.68rem;
            height: 0.26rem;
            margin: 0.06rem 0.1rem 0 0;
            border-radius: 0.3rem;
            text-align: center;
            color: #fff;
            font-size: 0.12rem;
            line-height: 0.26rem;
            background: #1da0ef;
        }
    }
}
</style>