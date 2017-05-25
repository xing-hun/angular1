<template>
	<div class="artistbang">
		<ul class="artist_banglist">
			<li class="clearfloat boldbottom">
				<span class="artist_fenlei fl">热门歌手</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat">
				<span class="artist_fenlei fl">华语男</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat">
				<span class="artist_fenlei fl">华语女</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat boldbottom">
				<span class="artist_fenlei fl">华语组合</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat">
				<span class="artist_fenlei fl">日韩男</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat">
				<span class="artist_fenlei fl">日韩女</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat boldbottom">
				<span class="artist_fenlei fl">日韩组合</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat">
				<span class="artist_fenlei fl">欧美男</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat">
				<span class="artist_fenlei fl">欧美女</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat boldbottom">
				<span class="artist_fenlei fl">欧美组合</span>
				<span class="artist_toright fr"></span>
			</li>
			<li class="clearfloat">
				<span class="artist_fenlei fl">其他</span>
				<span class="artist_toright fr"></span>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.artistbang {
    width: 100%;
    margin-bottom: 40px;
    overflow: hidden;
    .artist_banglist {
        margin-top: 0.1rem solid #f2f2f2;
        li {
            border-bottom: 1px solid #e5e5e5;
            color: #333;
            padding-left: 0.1rem;
            background: #fff;
            .artist_fenlei {
                height: 0.45rem;
                line-height: 0.45rem;
                font-size: 0.14rem;
            }
        }
        .boldbottom {
            margin-bottom: 0.1rem;
            padding-left: 0.1rem;
            margin-left: 0;
        }
        .artist_toright {
            width: 0.2rem;
            height: 0.45rem;
            background: url(../imgs/arrow_r.png) no-repeat center center;
            background-size: 40%;
            margin-right: 0.1rem;
        }
    }
}
</style>