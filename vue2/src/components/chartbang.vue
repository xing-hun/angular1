<template>
	<div>

		<div class="chartbang">
			<router-link :to="{name:'song', query:{id:26}}">
				<li class="chart_li clearfloat" data-id="26">
					<a class="chart_pic">
						<img src="../imgs/1444901415971_.jpg" />
					</a>
					<div class="chart_con">
						<h3>酷我热歌榜</h3>
						<p><span class="chart_num">1</span><span class="chart_songname">刚好遇见你</span><span class="chart_artname"> - 李玉刚</span></p>
						<p><span class="chart_num">2</span><span class="chart_songname">凉凉-(电视剧《三生三世十里桃花》片尾曲)</span><span class="chart_artname"> - 张碧晨&杨宗纬</span></p>
						<p><span class="chart_num">3</span><span class="chart_songname">逆流成河</span><span class="chart_artname"> - 金南玲</span></p>
					</div>

					<span class="chart_toright"></span>
				</li>
			</router-link>
			<router-link :to="{name:'song',query:{id:3}}">
			<li class="chart_li clearfloat" data-id="3">
				<a class="chart_pic">
					<img src="../imgs/1444901154727_.jpg" />
				</a>
				<div class="chart_con">
					<h3>酷我欧美榜</h3>
					<p><span class="chart_num">1</span><span class="chart_songname">Faded</span><span class="chart_artname"> - Alan </span></p>
					<p><span class="chart_num">2</span><span class="chart_songname">Sugar</span><span class="chart_artname"> - Maroo</span></p>
					<p><span class="chart_num">3</span><span class="chart_songname">See Yo</span><span class="chart_artname"> - Wiz K…</span></p>
				</div>

				<span class="chart_toright"></span>
			</li>
			</router-link>
			<router-link :to="{name:'song',query:{id:5}}">
			<li class="chart_li clearfloat" data-id="5">
				<a class="chart_pic">
					<img src="../imgs/1444898280212_.jpg" />
				</a>
				<div class="chart_con">
					<h3>酷我内地榜</h3>
					<p><span class="chart_num">1</span><span class="chart_songname">HUMBLE</span><span class="chart_artname"> - Kendr</span></p>
					<p><span class="chart_num">2</span><span class="chart_songname">Shape</span><span class="chart_artname"> - Ed Sh</span></p>
					<p><span class="chart_num">3</span><span class="chart_songname">That’s</span><span class="chart_artname"> - Bruno</span></p>
				</div>

				<span class="chart_toright"></span>
			</li>
			</router-link>
			<router-link :to="{name:'song',query:{id:6}}">
			<li class="chart_li clearfloat" data-id="6">
				<a class="chart_pic">
					<img src="../imgs/1444898328021_.jpg" />
				</a>
				<div class="chart_con">
					<h3>酷我港台榜</h3>
					<p><span class="chart_num">1</span><span class="chart_songname">希望</span><span class="chart_artname"> - 庄鹃瑛</span></p>
					<p><span class="chart_num">2</span><span class="chart_songname">脱胎换骨</span><span class="chart_artname"> - 谭咏麟</span></p>
					<p><span class="chart_num">3</span><span class="chart_songname">Change</span><span class="chart_artname"> - 林明祯</span></p>
				</div>

				<span class="chart_toright"></span>
			</li>
			</router-link>
			<router-link :to="{name:'song',query:{id:16}}">
			<li class="chart_li clearfloat" data-id="16">
				<a class="chart_pic">
					<img src="../imgs/1444901473245_.jpg" />
				</a>
				<div class="chart_con">
					<h3>酷我韩国榜</h3>
					<p><span class="chart_num">1</span><span class="chart_songname">If You</span><span class="chart_artname"> - BIGBA</span></p>
					<p><span class="chart_num">2</span><span class="chart_songname">Bang B</span><span class="chart_artname"> - BIGBA</span></p>
					<p><span class="chart_num">3</span><span class="chart_songname">咆哮</span><span class="chart_artname"> - EXO</span></p>
				</div>

				<span class="chart_toright"></span>
			</li>
			</router-link>
			<router-link :to="{name:'song',query:{id:17}}">
			<li class="chart_li clearfloat" data-id="17">
				<a class="chart_pic">
					<img src="../imgs/1444906280786_.jpg" />
				</a>
				<div class="chart_con">
					<h3>日本公信榜</h3>
					<p><span class="chart_num">1</span><span class="chart_songname">不協和音</span><span class="chart_artname"> - 欅坂46</span></p>
					<p><span class="chart_num">2</span><span class="chart_songname">インフルエン</span><span class="chart_artname"> - 乃木坂46</span></p>
					<p><span class="chart_num">3</span><span class="chart_songname">バグっていい</span><span class="chart_artname"> - HKT48</span></p>
				</div>

				<span class="chart_toright"></span>
			</li>
			</router-link>
			<router-link :to="{name:'song',query:{id:18}}">
			<li class="chart_li clearfloat" data-id="18">
				<a class="chart_pic">
					<img src="../imgs/1444898390073_.jpg" />
				</a>
				<div class="chart_con">
					<h3>酷我民谣榜</h3>
					<p><span class="chart_num">1</span><span class="chart_songname">That’s…</span><span class="chart_artname"> - Bruno</span></p>
					<p><span class="chart_num">2</span><span class="chart_songname">Body L</span><span class="chart_artname"> - Sam H</span></p>
					<p><span class="chart_num">3</span><span class="chart_songname">Someth</span><span class="chart_artname"> - The C</span></p>
				</div>

				<span class="chart_toright"></span>
			</li>
			</router-link>

		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.chartbang {
		margin-top: 0.1rem;
		margin-right: 0.1rem;
		overflow: hidden;
		.chart_li {
			margin-bottom: 0.1rem;
			padding-left: 0.1rem;
			padding-bottom: 0.05rem;
			background: #fff;
			.chart_pic {
				float: left;
				width: 1.06rem;
				height: 1.06rem;
			}
			.chart_con {
				float: left;
				width: 1.58rem;
				margin-left: 0.1rem;
				h3 {
					margin: 0.14rem 0 0.09rem 0;
					font-size: 0.15rem;
					color: #333;
				}
				p {
					width: 100%;
					font-size: 0.14rem;
					margin-bottom: 0.03rem;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					.chart_num {
						margin-right: 0.1rem;
						color: #999;
					}
					.chart_artname {
						color: #999;
					}
				}
			}
			.chart_toright {
				float: right;
				width: 0.15rem;
				height: 1.06rem;
				background: url(../imgs/arrow_r.png) no-repeat center center;
				background-size: 40%;
				margin-right: 0.1rem;
			}
		}
	}
</style>