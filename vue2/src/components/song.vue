<template>
	<div id="song">
		<div id="preloader">
			<div id="status">
				<p class="center-text"><span>拼命加载中···</span></p>
			</div>
		</div>
		<div class="blur">
			<img :src="albumpic_big" id="albumpic_big" />
			<div class="blurbox"></div>
		</div>
		<div class="wrap">
			<div class="upside">
				<div class="up_btns clearfloat" style="display:block">
					<router-link :to="{name:'home.index'}">
						<a class="home fl"></a>
					</router-link>
					<a class="share fr" id="sharebtn"></a>
					<a class="openApp fr" id="openApp">打开APP</a>
				</div>
				<div class="tabbox">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="lyric__box">
									<div class="lyric__text" id="lyric__text">
										<!--<p id='lyric0'>凉凉 (《三生三世十里桃花》电视剧片尾曲) - 杨宗纬/张碧晨
										</p>
										<p id='lyric2'>词：刘畅
										</p>
										<p id='lyric2'>曲：谭旋
										</p>
										<p id='lyric2'>编曲：韦国赟
										</p>
										<p id='lyric3'>
										</p>
										<p id='lyric46'>女：
										</p>
										<p id='lyric46'>
										</p>
										<p id='lyric48'>入夜渐微凉
										</p>
										<p id='lyric49'>繁花落地成霜
										</p>
										<p id='lyric52'>你在远方眺望
										</p>
										<p id='lyric55'>耗尽所有暮光
										</p>
										<p id='lyric57'>
										</p>
										<p id='lyric58'>不思量自难相忘
										</p>
										<p id='lyric64'>
										</p>
										<p id='lyric67'>男：
										</p>
										<p id='lyric68'>
										</p>
										<p id='lyric69'>夭夭桃花凉
										</p>
										<p id='lyric70'>
										</p>
										<p id='lyric71'>前世你怎舍下
										</p>-->
									</div>
								</div>
							</div>
							<div class="swiper-slide">

								<div class="simibox">
									<div class="simigedan">
										<h3>包含这首歌的歌单</h3>
										<ul>
											<li class="clearfloat">
												<a class="simigedanpic fl"><img src="../imgs/1489190329751_468483195_150.jpg" /></a>
												<div class="simigedaninfo fl">
													<p class="single_sname gedanname">蒙面唱将猜猜猜 现场音源全集</p>
													<p class="single_aname gedannum"><span>100</span>首歌</p>
												</div>
											</li>

											<li class="clearfloat">
												<a class="simigedanpic fl"><img src="../imgs/1489197896397_125467636_150.jpg" /></a>
												<div class="simigedaninfo fl">
													<p class="single_sname gedanname">Jam</p>
													<p class="single_aname gedannum"><span>100</span>首歌</p>
												</div>
											</li>
										</ul>
									</div>
									<div class="simisongs">
										<h3>相似歌曲</h3>
										<div class="ssinfo">
											<ul>
												<li class="clearfloat">
													<span class="single_sname fl">别想她</span>
													<span class="single_aname fl">&nbsp;—&nbsp;高进</span>
												</li>
												<li class="clearfloat">
													<span class="single_sname fl">眉间雪</span>
													<span class="single_aname fl">&nbsp;—&nbsp;HITA</span>
												</li>
												<li class="clearfix">
													<span class="single_sname fl">好梦如旧</span>
													<span class="single_aname fl">&nbsp;—&nbsp;HITA&&林斜阳</span>
												</li>
												<li class="clearfix">
													<span class="single_sname fl">昔言</span>
													<span class="single_aname fl">&nbsp;—&nbsp;HITA</span>
												</li>
												<li class="clearfix">
													<span class="single_sname fl">采薇</span>
													<span class="single_aname fl">&nbsp;—&nbsp;HITA</span>
												</li>
											</ul>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<!--tabbox结束-->

			</div>

			<div class="downside" id="downside">
				<div class="singleinfo clearfloat">
					<div class="single_pic fl">
						<img :src="albumpic_small" id="imgUrl" />
					</div>
					<div class="single_detail fl">
						<p class="single_sname" id="down_single_sname">{{songname}}</p>
						<p class="single_aname" id="down_single_aname">{{singername}}</p>
						<div class="playbox">
							<div class="playbar fl">
								<div class="playline">
									<div class="playline_clone" id="playline_clone"></div>
								</div>
							</div>
							<span class="currtime fl" id="currtime">00:00</span>
							<span class="fenge fl">/</span>
							<span class="totaltime fl" id="totaltime" v-text="seconds"></span>
						</div>
					</div>
					<div class="single_playbtn fr" id="single_playbtn" @click="play1"></div>
				</div>
				<div class="singleother clearfloat">
					<a class="single_list fl" id="single_list" @click="show1"></a>
					<a class="single_down fl">免费下载这首歌</a>

					<a class="single_artist fr" style="display:block" href="###"></a>

				</div>
			</div>
			<div class="single_queue" id="single_queue">
				<h3 id="queue_title">播放队列（<span>190</span>首）</h3>
				<div class="queue_content" id="queue_content">
					<ul class="single_playlist" id="single_playlist">
						<li class="lists clearfloat" v-for="(s,index) in list" :data-url="s.url" :data-imgUrl="s.albumpic_small" :data-albumpic_big="s.albumpic_big" :data-songid="s.songid" :data-songname="s.songname" :data-singername="s.singername" :data-seconds="s.seconds" @click="playing(index)" :class="{playing:!index}">
							<!--:class="{playing:!index}"给第一项加playing样式-->
							<span class="sing_sname fl">{{s.songname}}</span>
							<span class="sing_aname fl"> - {{s.singername}}</span>
							<span class="state fr"></span>
						</li>
					</ul>
				</div>
				<div class="queue_close" id="queue_close" @click="hide1">关闭</div>
			</div>

			<!--share box start-->
			<!--<div class="sharebox" id="sharebox">
				<span class="close" id="close"></span>
							<div class="shareinfo clearfloat">
								<a class="sharepic fl">
									<img src="http://img1.kwcdn.kuwo.cn/star/albumcover/240/45/21/19331829.jpg" />
								</a>
								<div class="sharetxt fl">
									<p>分享给你的朋友，</p>
									<p>用歌曲感染你的小伙伴</p>
								</div>
							</div>
				</div>-->

		</div>
		<audio id="audio" :src="url1"></audio>
	</div>
</template>

<script>
	export default {
		name: 'song',
		data: function() {
			return {
				id: this.$route.query.id,
				albumpic_small: '',
				albumpic_big: '',
				songname: '',
				singername: '',
				url1: '',
				seconds: '',
				songIndex: 0,
				list: []
			}
		},
		mounted() {
			this.getUser(),
				this.swiper()
				
		},
		methods: {
			loading() {
				$("#preloader").fadeOut();
				$("#status").fadeOut();
			},
			show1() {
				$('#single_queue').animate({
					bottom: "0"
				}, "fast");
				$('#downside').hide();

			},

			hide1() {

				$('#single_queue').animate({
					bottom: "-2.64rem"
				}, "fast");
				$('#downside').show();
			},

			play1() {

				if(audio.paused) {
					audio.play();
					$('#single_playbtn').addClass('off');
				} else {
					audio.pause();
					$('#single_playbtn').removeClass('off');
				}
			},

			playing(index) {
				console.log(122222)
				this.songIndex = index;
				console.log("this.songIndex="+this.songIndex)
				$('.lists').eq(index).find('.state').addClass('playstate').end().siblings().find('.state').removeClass('playstate');
				$('.lists').eq(index).addClass("playing").siblings().removeClass("playing");
				
				var url1 = $('.lists').eq(index).attr('data-url');
				console.log(url1)				
				var musicid = $('.lists').eq(index).attr('data-songid');
				var imgUrl = $('.lists').eq(index).attr('data-imgUrl');
				var albumpic_big = $('.lists').eq(index).attr('data-albumpic_big');
				var songname = $('.lists').eq(index).attr('data-songname');
				var singername = $('.lists').eq(index).attr('data-singername');
				var seconds = $('.lists').eq(index).attr('data-seconds');

				console.log(musicid)
				$('#audio').attr('src', url1);
				$('#imgUrl').attr('src', imgUrl);
				$('#albumpic_big').attr('src', albumpic_big);
				$('#down_single_sname').html(songname);
				$('#down_single_aname').html(singername);
				var second = this.format(seconds);
				$('#totaltime').html(second);
				this.play1();
				this.ajax(musicid);
			},
			format(time) {
				var time = parseInt(time);
				var m = parseInt(time / 60);
				var s = parseInt(time % 60);
				m = zero(m);
				s = zero(s);

				function zero(num) {
					if(num < 10) {
						num = "0" + num;
					}
					return num;
				}
				return m + ":" + s;
			},
			ajax(musicid) {

				$.get('http://route.showapi.com/213-2', {
					showapi_appid: 35031,
					showapi_sign: '3e30f2f2169e48ada8e931449b9e2503',
					musicid: musicid
				}, function(data) {
					console.log(data);
					if(data && data.showapi_res_code == 0) {
						var data = data.showapi_res_body.lyric;

						var lyricIndex = JSON.stringify(data);
						//					console.log("lyricIndex=" + lyricIndex);

						function unescapeHTML(str) {
							var t = document.createElement("div");
							t.innerHTML = str;
							return t.textContent || t.innerText;
						}
						var txt = unescapeHTML(lyricIndex);

						var lyric1 = lyric_ctrl(txt);

						$('#lyric__text').html(lyric1);

						function lyric_ctrl(lyricObj) {
							var temp = lyricObj.split("[");
							var html = "";
							for(var i = 0; i < temp.length; i++) {
								var arr = temp[i].split("]");
								var text = (arr[1]);
								var time = arr[0].split(",");
								var temp2 = time[0].split(".");
								var ms = temp2[1]; //毫秒
								var temp3 = temp2[0].split(":");
								var s = temp3[1]; //秒
								var m = temp3[0]; //分
								var s_sum = parseInt(m * 60) + parseInt(s);
								if(text) {
									html += "<p id='lyric" + s_sum + "' style='font-size: 0.16rem;line-height: 0.32rem;'>" + text + "</p>";
								}
							}
							return html;
						}

					}

				});
				var that = this;
				audio.addEventListener("timeupdate", function() {
					//console.log("allTime=" + audio.duration);
					//					var duration = that.format(audio.duration);
					//					console.log('duration='+duration)

					var currentTime = that.format(audio.currentTime);
					$('#currtime').text(currentTime);

					var id_num = parseInt(audio.currentTime);

					var bar_width = (audio.currentTime / audio.duration) * 100 + "%";
					$('#playline_clone').css("width", bar_width);
					
					if(bar_width=='100%'){
						that.songIndex++;
						console.log('songIndex='+that.songIndex);
						that.playing(that.songIndex);
					}
					//歌词滚动	
					var ly = $('.lyric__box').height();
					$('#lyric__text p').each(function(index, item) {
						var top1 = $(this).position().top;
						$(item).attr('data-top', top1);
					})
					//console.log('ly=' + ly);
					if($("#lyric" + id_num)) {
						$("#lyric" + id_num).css("color", "#52bcfd").siblings().css("color", "#cacaca");
						var t = ly / 2 - $("#lyric" + id_num).attr('data-top');
						//console.log("t=" + t)
						$('#lyric__text').css("top", t);
					}
				})

			},

			getUser() {
				this.$http.get("http://route.showapi.com/213-4?showapi_appid=35031&showapi_sign= 3e30f2f2169e48ada8e931449b9e2503&topid=" + this.id).then(function(data) {
					//console.log(data)
					//console.log(1)
					if(data.body && data.body.showapi_res_code == 0) {
						//console.log(2)
						this.loading();
						var data = data.body.showapi_res_body.pagebean.songlist;

						this.list = data;
						console.log(this.list)
						this.albumpic_small = data[0].albumpic_small;
						console.log("this.albumpic_small=" + this.albumpic_small)
						this.albumpic_big = data[0].albumpic_big;
						this.songname = data[0].songname;
						this.singername = data[0].singername;
						this.url1 = data[0].url;
						this.seconds = this.format(data[0].seconds);
						//						console.log(this.seconds)
						var musicid = data[0].songid;
						this.ajax(musicid);
					}
				})
			},
			swiper() {
				var mySwiper = new Swiper(".tabbox .swiper-container", {
					mode: "horizontal",
					loop: false,
					pagination: ".swiper-pagination"
				});

			}
		}
	}
</script>

<style lang="scss" scoped>
	#song {
		height: 100%;
	}
	
	.blur {
		width: 100%;
		height: 100%;
		-webkit-filter: blur(15px);
		filter: blur(15px);
		position: relative;
		.blurbox {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.3);
		}
	}
	
	.wrap {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
		.upside {
			height: 100%;
			.up_btns {
				width: 100%;
				height: 0.4rem;
				background: rgba(0, 0, 0, 0.5);
				.home {
					display: block;
					width: 0.4rem;
					height: 0.4rem;
					background: url(../imgs/icon_home.png) no-repeat center center;
					background-size: 50%;
				}
				.share {
					display: block;
					width: 0.4rem;
					height: 0.4rem;
					background: url(../imgs/icon_share.png) no-repeat center center;
					background-size: 45%;
				}
				.openApp {
					width: 0.66rem;
					height: 0.2rem;
					border: 1px solid #fff;
					border-radius: 0.04rem;
					line-height: 0.2rem;
					text-align: center;
					font-size: 0.12rem;
					font-family: 'microsoft yahei';
					margin-top: 0.1rem;
					color: #fff;
				}
			}
			.tabbox {
				width: 100%;
				height: 56%;
				overflow: hidden;
				.swiper-container {
					width: 100%;
					height: 100%;
					margin: 0 auto;
					position: relative;
					z-index: 1;
					.swiper-wrapper {
						height: 80%;
						z-index: 1;
						.lyric__box {
							width: 100%;
							height: 96.6%;
							margin: 0 auto;
							overflow: hidden;
							position: relative;
							.lyric__text {
								position: absolute;
								left: 0;
								top: 0;
								width: 100%;
								height: 100%;
								margin: 0 auto;
								text-align: center;
								color: #cacaca;
								P {
									line-height: 0.32rem;
									font-size: 0.16rem;
								}
								p.active {
									color: #52bcfd;
								}
							}
						}
						.simibox {
							width: 100%;
							height: 100%;
							color: #fff;
							overflow-y: auto;
							h3 {
								height: .39rem;
								line-height: .39rem;
								font-size: .14rem;
								border-bottom: 1px solid rgba(255, 255, 255, 0.1);
								margin: 0 .1rem;
							}
						}
						.simigedanpic {
							display: block;
							width: 0.51rem;
							height: 0.51rem;
							margin: .1rem .1rem 0 .1rem;
							border-bottom: 1px solid transparent;
						}
						.simigedaninfo {
							width: 2.4rem;
							border-bottom: 1px solid rgba(255, 255, 255, 0.1);
							padding-bottom: .1rem;
							margin-top: .12rem;
							.single_sname {
								color: #fff;
								font-size: .14rem;
								line-height: 0.25rem;
								width: 0.93rem;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden
							}
							.single_aname {
								color: rgba(255, 255, 255, 0.5);
								font-size: .12rem;
							}
							.gedanname {
								font-size: .14rem;
							}
							.gedannum {
								font-size: .12rem;
							}
						}
						.simisongs {
							width: 100%;
							height: .39rem;
							position: relative;
							h3 {
								height: .39rem;
								line-height: .39rem;
								font-size: .14rem;
								border-bottom: 1px solid rgba(255, 255, 255, 0.1);
								margin: 0 .1rem;
							}
							.ssinfo {
								position: relative;
								margin: 0 .1rem;
								ul {
									width: 100%;
									height: 100%;
									position: absolute;
									left: 0;
									top: 0;
									li {
										height: .39rem;
										line-height: .39rem;
										border-bottom: 1px solid rgba(255, 255, 255, 0.1);
										.single_sname {
											color: #fff;
											font-size: .14rem;
											line-height: 0.25rem;
											width: 0.93rem;
											white-space: nowrap;
											text-overflow: ellipsis;
											overflow: hidden
										}
										.single_aname {
											color: #fff;
											font-size: .12rem;
										}
									}
								}
							}
						}
					}
					.swiper-pagination {
						position: absolute;
						height: 0.2rem;
						text-align: center;
						bottom: 0.4rem;
						left: 0;
						width: 100%;
						z-index: 1;
						.swiper-pagination-bullet {
							display: inline-block;
							width: 6px;
							height: 6px;
							border-radius: 50%;
							background: rgba(255, 255, 255, 0.5);
							position: relative;
							bottom: 0.6rem;
							margin: 0 7px;
						}
						.swiper-pagination-bullet-active {
							opacity: 1;
							background: #fff;
						}
					}
				}
			}
		}
		.downside {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 1.28rem;
			background: rgba(0, 0, 0, 0.3);
		}
		.singleinfo {
			margin-bottom: .08rem;
			position: relative;
		}
		.single_pic {
			width: 0.55rem;
			height: 0.55rem;
			margin: .08rem .12rem 0 .08rem;
		}
		.single_detail {
			width: 50%;
			height: 0.63rem;
			position: relative;
			padding-top: .1rem;
		}
		.single_sname {
			color: #fff;
			font-size: .14rem;
			line-height: .25rem;
			width: 1.6rem;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.single_aname {
			color: rgba(255, 255, 255, 0.5);
			font-size: .12rem;
			line-height: 0.17rem;
		}
		.single_detail p {
			width: 100%;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.playbox {
			position: absolute;
			left: 0;
			width: 2.47rem;
			height: .13rem;
			font-size: .10rem;
			color: #eee;
		}
		.playbar {
			width: 1.5rem;
			height: 100%;
			margin-right: .08rem;
		}
		.playline {
			width: 1.5rem;
			height: .03rem;
			background: #fff;
			position: relative;
			top: .08rem;
		}
		.fenge {
			margin: 0 .02rem;
		}
		.playline_clone {
			width: 0;
			height: 100%;
			background: #1da0ef;
		}
		.single_playbtn {
			width: 0.42rem;
			height: 0.42rem;
			background: url(../imgs/playbtn2.png) no-repeat center center;
			background-size: 70%;
			margin: .05rem .05rem 0 0;
			&.off {
				background: url(../imgs/pausebtn22.png) no-repeat center center;
				background-size: 70%;
			}
		}
		.single_list {
			width: .34rem;
			height: .34rem;
			background: url(../imgs/single_slist.png) no-repeat center center;
			background-size: 50%;
			margin-right: 0.5rem;
		}
		.single_down {
			width: 1.45rem;
			height: .34rem;
			border-radius: 0.2rem;
			text-align: center;
			line-height: .34rem;
			background: #1da0ef;
			color: #fff;
			font-size: .14rem;
		}
		.single_artist {
			width: .34rem;
			height: .34rem;
			background: url(../imgs/single_artist.png) no-repeat center center;
			background-size: 55%;
			margin-right: .02rem;
		}
		.single_queue {
			position: fixed;
			left: 0;
			bottom: -2.64rem;
			width: 100%;
			background: rgba(0, 0, 0, 0.7);
			z-index: 100;
			height: 2.64rem;
		}
		.queue_content {
			overflow: hidden;
			position: relative;
			width: 100%;
			height: 2.14rem;
		}
		.single_playlist {
			height: 1.64rem;
			position: absolute;
			left: 0;
			top: 0.5rem;
			width: 100%;
			overflow-y: auto;
		}
		.single_playlist li {
			border-top: 1px solid rgba(255, 255, 255, 0.1);
			height: 0.4rem;
			line-height: 0.4rem;
			padding-left: 0.1rem;
		}
		.single_playlist li.playing span {
			color: #1a90d7;
		}
		.single_playlist li .sing_sname {
			height: 0.4rem;
			line-height: 0.4rem;
			color: #fff;
			font-size: .12rem;
			line-height: 0.4rem;
			max-width: 1rem;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.single_playlist li .sing_aname {
			height: 0.4rem;
			line-height: 0.4rem;
			margin-left: 0.05rem;
			color: rgba(255, 255, 255, 0.5);
			font-size: .12rem;
			line-height: 0.4rem;
		}
		.single_playlist li span.playstate {
			width: 20px;
			height: 40px;
			background: url(../imgs/playing.png) no-repeat center center;
			background-size: 60%;
			margin-right: 0.15rem;
		}
		#queue_title {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 0.5rem;
			line-height: 0.5rem;
			font-size: 0.16rem;
			text-align: center;
			color: #fff;
			z-index: 200;
		}
		.queue_close {
			border-top: 1px solid #ccc;
			position: absolute;
			left: 0;
			bottom: 0;
			font-size: .14rem;
			width: 100%;
			height: 0.5rem;
			line-height: 0.5rem;
			text-align: center;
			color: #fff;
			z-index: 200;
		}
	}
</style>