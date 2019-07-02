'use strict';

$(document).ready(function () {

	//  ADD files
	var testMin = $('[href*="critical"]').attr('href').split('.');

	var slickCss = "<link href='static/css/separate-css/slick-bundle.min.css' rel='stylesheet'  type='text/css'>" ;
	// var inputCss = "<link href='static/css/separate-css/intlTelInput.min.css' rel='stylesheet'  type='text/css'>" ;

	var mainCss = (testMin.includes('min')) ? "<link href='static/css/main.min.css' rel='stylesheet'  type='text/css'>"  : "<link href='static/css/main.css' rel='stylesheet'  type='text/css'>" ;

	// $("head").append(inputCss);
	$("head").append(slickCss);
	$("head").append(mainCss);
	//  ADD files
});



$(document).ready(function () {

	function ytInit() {
			$(".video").each(function(){
				$(this).find(".video_wrap").removeClass('video_wrap').addClass('video_wrap_pre');
			});
			$(".video_wrap_pre").each(function () {
				var yt = $(this).data('yt');
				if (yt) {
						$(this).html("<img src='https://img.youtube.com/vi/" + yt + "/0.jpg' style='width: 100%; display: block' class='go_yt' data-yt='" + yt + "'>");
				}
			});
	}
	ytInit();

	$(".video_wrap_pre").on("click", function () {
			ytInit();
			var yt = $(this).data('yt');
			$(this).removeClass("video_wrap_pre").addClass('video_wrap');
			$(this).html("<iframe src='https://www.youtube.com/embed/" + yt + "?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
	});

	$(".slick-arrow").on("click", function(){
			ytInit();
	});

	if (typeof window.document.createElement('div').style.webkitLineClamp !== 'undefined') {
		document.querySelector('html').classList.add('webkit-line-clamp');
	}

	var $prevArrow = '<button class="arrow arrow-left"   aria-label="arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></svg></button>';

	var $nextArrow = '<button class="arrow arrow-right"  aria-label="arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></svg></button>'

	// 	$('.phone').intlTelInput({
	// 		formatOnDisplay: true,
	// 		separateDialCode: true,
	// 		preferredCountries: [ "by", "ua", "ru" , "kz"],
	// 		// geoIpLookup: function (callback) {
	//   //                           $.get("https://ssl.geoplugin.net/json.gp?k=4d9e48e5db2709a6", function () {}, "json").always(function (resp) {
	//   //                               callback(resp.geoplugin_countryCode);
	//   //                           });
	//   //                       },
	// 		utilsScript: "/static/js/separate-js/utils.js"
	// 	});

	// navigator.geolocation.getCurrentPosition(function(position) {
	//   console.log(position);
	// });


	$('.phone').mask('+00000000000000');

	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $prevArrow,
		nextArrow: $nextArrow,
		swipe: false,
		responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 850,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						// adaptiveHeight: true
					}
				}
			]
	});

	$('.readl__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $prevArrow,
		nextArrow: $nextArrow,
		responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 850,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						adaptiveHeight: true
					}
				}
			]
	});


	$('.eventWide__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $prevArrow,
		nextArrow: $nextArrow,
		responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 850,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						adaptiveHeight: true
					}
				}
			]
	});

	$('.feedback__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $prevArrow,
		nextArrow: $nextArrow,
		responsive: [
				{
					breakpoint: 650,
					settings: {

						adaptiveHeight: true
					}
				}
			]
	});

	$('.osnovatel__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $prevArrow,
		nextArrow: $nextArrow,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	$('.slider-row').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $prevArrow,
		nextArrow: $nextArrow,
		swipe: false,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});



	$('.trigger').click(function(e){

		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
			$('.page').removeClass('menu-open');
		} else {
			$(this).addClass('is-active');
			$('.page').addClass('menu-open');
		}
	});

	$('.js-ppp').click(function(e){
		e.preventDefault();
		//close all popup
		$('.ppp').removeClass('is-active');
		$('.ppp__content').removeClass('is-active');
		//open my popup
		var getClass = $(this).data('ppp');
		$('.ppp').addClass('is-active');
		$('#' + getClass).addClass('is-active');

	});

	$('.js-close').click(function(e){
		e.preventDefault();
		//close all popup
		closePpp();
	});

	validate();

	filter();

	$(document).on('click touchstart', function(el){
		var childr = $('.filter').find('*');

		if($(el.target).is(childr) == false ){
			$('.filter').removeClass('is-active');
			$('.filter__list').slideUp('fast');
		}
	});


	$('.sort-by__hidden').slideUp();

	$('.sort-by__header').on('click touchstart', function () {
		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
			$('.sort-by__hidden').slideUp();
		} else {
			$(this).addClass('is-active');
			$('.sort-by__hidden').slideDown();
		}
	});

	$(document).on('click touchstart', function(el){
		var childr = $('.sort-by').find('*');

		if($(el.target).is(childr) == false ){
			$('.sort-by').removeClass('is-active');
			$('.sort-by__hidden').slideUp('fast');
		}
	});

	// window.Sharer.init();

	$('.js-validate input').focus(function() {
		$(this).parent('.js-validate fieldset').addClass('in_focus');
	});
	$('.js-validate input').focusout(function() {
		$(this).parent('.js-validate fieldset').removeClass('in_focus');
	});



	(function() {
		if (!String.prototype.trim) {
			(function() {
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( '.callback__inp ' ) ).forEach( function( inputEl ) {
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input--filled' );
			}
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'focus', addFocusClass );
			inputEl.addEventListener( 'blur', onInputBlur );
			inputEl.addEventListener( 'blur', removeFocusClass );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input--filled' );
		}
		function addFocusClass( ev ) {
			classie.add( ev.target.parentNode, 'input--focus' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--filled' );
			}
		}

		function removeFocusClass( ev ) {
			if( ev.target.value.trim() !== '' || ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--focus' );
			}
		}

	})();


});  // ready


function closePpp(){
	$('.ppp').removeClass('is-active');
	$('.ppp__content').removeClass('is-active');
	$('.page').removeClass('ppp-opened');
}

$(document).on('click', function(el){
	var childr = $('.ppp__shadow');

	if($(el.target).is(childr) == true ){
		closePpp();
	}
});


function validate() {
	$('.js-validate').each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: 'has-error',
				rules: {
					name: {
						minlength: 2,
						required: true
					},
					city: {
						minlength: 2
					},
					// password: {
					// 	minlength: 5
					// },
					// confirm_password: {
					// 	minlength: 5,
					// 	equalTo: '#password'
					// },
					email: {
						email: true,
						required: true
					},
					// phone: {
					// 	minlength: 17,
					// 	required: true
					// },
					// sallerTel: {
					// 	minlength: 17
					// },
					address: {
						minlength: 2
					},
					message: {
						minlength: 4
					},
					date: {
						minlength: 4
					},
					time: {
						minlength: 10
					},
					items: {
						minlength: 1
					},
					sallerName: {
						minlength: 2
					},
					sallerPost: {
						minlength: 2
					},
					square: {
						minlength: 1
					},
					garantUserComment:{
						minlength: 4
					},
					client: {
						required: true
					},
					agree: {
						required: true
					},
					obectYstanovki: {
						required: true
					},
					celZakypki: {
						required: true
					}
				},
				messages: {
					firstname: '* Вас так зовут?',
					lastname: '* У вас такая фамилия?',
					fathername: '* У вас такое отчество?',
					password: {
						required: '* Введите пароль',
						minlength: '* Минимум 5 символов'
					},
					confirm_password: {
						 required: '* Пароли не совпадают',
						 minlength: '* Минимум 5 символов',
						 equalTo: '* Пароли не совпадают'
					},
					email: 'Заполнено некорректно',
					address: '* Это Ваш адрес?',
					any: '* Заполните поле',
					time: 'Заполните поле',
					items: 'Заполните поле',
					company: '* Заполните поле',
					tel: {
						required: 'заполнено некорректно',
						minlength: 'заполнено некорректно'
					},
					phone: {
						required: 'заполнено некорректно',
						// minlength: 'заполнено некорректно'
					},
					name: {
						required: 'заполнено некорректно',
						minlength: 'Минимум 2 символa'
					},
					message: {
						required: '* Заполните поле',
						minlength: 'Заполните поле',
					},
					text_area: {
						required: '* Заполните поле',
						minlength: 'Заполните поле'
					}
				}
			});
		}
	});
}





function filter() {
	$(".js-filter").each(function(){
		var filter_list = $(this).children(".js-filter-list");
		var content = filter_list.find("li").first().html();

		$(this).click(function(event){
			var $self = $(this);

			if ($(this).hasClass("is-active")) {
					setTimeout(function () {
						$self.removeClass('is-active');
						// $(".js-filter-list").hide();
					}, 150);
					filter_list.slideUp("fast");
			} else {
					$(".js-filter").removeClass("is-active");
					$(".js-filter-list").hide();
					filter_list.slideDown("fast");
					$(this).addClass("is-active");
			}

			event.stopPropagation();
		});
		filter_list.find("li").click(function(event) {
			var id = $(this).attr("data-id");
			var content = $(this).html();
			$(this).parent().parent().find(".js-filter-text").html(content);
			$(this).parent().parent().find(".js-filter-input").val(id);
			$(this).parent().hide();
			$(this).parents(".js-filter").removeClass("is-active");
			event.stopPropagation();
		});
	});
}

// MAP
if($('#map').length) {
	var mymap
	if(document.width > 1100 ){
		mymap = L.map('map').setView([50.445974, 30.518605], 16);
	} else {
		mymap = L.map('map').setView([50.446185, 30.522274], 16);
	}
	// var mymap = L.map('map').setView([50.445974, 30.518605], 16);
	var marker = L.marker([50.446185, 30.522274]).addTo(mymap);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmVyZW1leSIsImEiOiJjanhpZ2hxaXQxNThpM3VvN2cwN2FoaWttIn0.7f5SQdXXxZeFEnVaOAC9_w', {
			attribution: ' ',
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'pk.eyJ1IjoidmVyZW1leSIsImEiOiJjanhpZ2hxaXQxNThpM3VvN2cwN2FoaWttIn0.7f5SQdXXxZeFEnVaOAC9_w'
	}).addTo(mymap);

}


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
	return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
	hasClass = function( elem, c ) {
		return elem.classList.contains( c );
	};
	addClass = function( elem, c ) {
		elem.classList.add( c );
	};
	removeClass = function( elem, c ) {
		elem.classList.remove( c );
	};
}
else {
	hasClass = function( elem, c ) {
		return classReg( c ).test( elem.className );
	};
	addClass = function( elem, c ) {
		if ( !hasClass( elem, c ) ) {
			elem.className = elem.className + ' ' + c;
		}
	};
	removeClass = function( elem, c ) {
		elem.className = elem.className.replace( classReg( c ), ' ' );
	};
}

function toggleClass( elem, c ) {
	var fn = hasClass( elem, c ) ? removeClass : addClass;
	fn( elem, c );
}

var classie = {
	// full names
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	toggleClass: toggleClass,
	// short names
	has: hasClass,
	add: addClass,
	remove: removeClass,
	toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
	// AMD
	define( classie );
} else {
	// browser global
	window.classie = classie;
}

})( window );
