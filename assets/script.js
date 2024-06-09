//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './assets/img/slide1.png'},
				{ src: './assets/img/slide2.png'},
				{ src: './assets/img/slide3.png'},
                { src: './assets/img/slide4.png'},
                { src: './assets/img/slide5.png'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
			{ src: './assets/img/slide1.png'},
			{ src: './assets/img/slide2.png'},
			{ src: './assets/img/slide3.png'},
			{ src: './assets/img/slide4.png'},
			{ src: './assets/img/slide5.png'}
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burn、burn2、blur、blur2、flash、flash2が設定可能。
		transitionDuration: 1500,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 10000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
		//timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
	});


$(function(){
		$('#js-hamburger-menu, .navigation__link').on
		('click', function(){
			$('.navigation').slideToggle(700)
			$('.hamburger-menu').toggleClass
			('hamburger-menu--open')
		});
});
	

// スライドショーが開始されるときに、テキストを表示する
$('#slider').on('vegasstart', function() {
    $('.slide-text').addClass('active');
});


$('.slider1').slick({
	arrows: false,//左右の矢印はなし
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
	speed: 390000,//スライドのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
	pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
	cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
	slidesToShow: 4,//スライドを画面に4枚見せる
	slidesToScroll: 1,//1回のスライドで動かす要素数
	responsive: [
		{
		breakpoint: 769,//モニターの横幅が769px以下の見せ方
		settings: {
			slidesToShow: 2,//スライドを画面に2枚見せる
		}
	},
	{
		breakpoint: 426,//モニターの横幅が426px以下の見せ方
		settings: {
			slidesToShow: 1.5,//スライドを画面に1.5枚見せる
		}
	}
]
});


$('.slider2').slick({
	arrows: false,//左右の矢印はなし
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
	speed: 390000,//スライドのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
	pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
	cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
	slidesToShow: 4,//スライドを画面に4枚見せる
	slidesToScroll: 1,//1回のスライドで動かす要素数
	responsive: [
		{
		breakpoint: 769,//モニターの横幅が769px以下の見せ方
		settings: {
			slidesToShow: 2,//スライドを画面に2枚見せる
		}
	},
	{
		breakpoint: 426,//モニターの横幅が426px以下の見せ方
		settings: {
			slidesToShow: 1.5,//スライドを画面に1.5枚見せる
		}
	}
]
});