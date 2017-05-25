<template>
	<div class="mvbang_1">
		<ul class="mvbang" id="messDivId">

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1464249583559_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">首播</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1458287114515_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">排行</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1464249796657_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">华语</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1464249879617_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">欧美</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1464249661441_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">日韩</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1464839621489_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">网络</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1464839832154_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">热舞</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1465292690057_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">经典</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1464839381409_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">伤感</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1443004086391_.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">禁播</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1458286960632_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">美女</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1441868226984_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">性感</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1442987148880_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">现场</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

			<li class="clearfloat">
				<div class="mvbang_pic">
					<img src="../imgs/1464840077040_66069973_120.jpg" />
				</div>
				<div class="mvbang_txt">
					<span class="fl">剧情</span>
					<span class="mv_toright fr"></span>
				</div>
			</li>

		</ul>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
.mvbang_1 {
    overflow: hidden;
    background: #fff;
    .mvbang {
        margin-top: 0.05rem;
        li {
            font-size: 0.14rem;
            color: #333;
            display: flex;
            .mvbang_pic {
               
               width: 0.51rem;
                height: 0.51rem;
                border-bottom: 1px solid transparent;
                padding: 0.05rem 0.1rem;
            }
            .mvbang_txt {
               flex: 1;
               display: flex;
                min-width: 2.4rem;
                height: 0.6rem;
                border-bottom: 1px solid #e5e5e5;               
                line-height: 0.6rem;
                justify-content: space-between;
                .mv_toright {
                    margin-right: 0.1rem;
                    width: 0.2rem;
                    height: 0.6rem;
                    background: url(../imgs/arrow_r.png) no-repeat center center;
                    background-size: 40%;
                }
            }
        }
    }
}

</style>