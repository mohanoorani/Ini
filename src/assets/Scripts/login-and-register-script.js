var returnPageUrl = '';
var initialModalPage = 0; 

function onOpenLoginAndRegisterClicked(element) {
	if (element != null || element != undefined) {
		let link = $(element).attr('return-url');
		if (link != undefined || link != null) {
			returnPageUrl = link;
		}

		let page = $(element).attr('inital-page');
		if (page != undefined || page != null) {
			initialModalPage = page;
		}
	}
	
	console.log(`return Url  is '${returnPageUrl}'`);
	console.log(`Initial  Page is  '${initialModalPage}'`);
	//showAccountModal(0, window.location.href.replace(window.location.origin, ''), '');
	showAccountModal(initialModalPage, returnPageUrl, '');
}

function showAccountModal(targetSlide, returnUrl, email) {
	showAlert('');
	$('#loginform').trigger("reset");
	$('#EmployerForm').trigger("reset");
	$('#EmployeeForm').trigger("reset");

	returnPageUrl = returnUrl;
	$("#EmailEmployee").val(email);
	$("#ConfirmEmailEmployee").val(email);
	$("#LoginEmail").val(email);

	if (targetSlide == 2) {
		refreshCaptcha('imgCaptchaEmployee');
	}

	if (targetSlide == 3) {
		refreshCaptcha('imgCaptchaEmployer');
	}

	$('#AccountModal').modal({"backdrop": "static"});
	//$('#AccountModal').carousel(targetSlide);
	navigateToPage(targetSlide);
	//refreshCaptcha('imgCaptchaEmployee');
	//if (targetSlide === 2) {
	//	refreshCaptcha('imgCaptchaEmployee');
	//}
}

function refreshCaptcha(img) {
	$('#' + img).attr('src', "/Home/CaptchaImage" + "?t=" + new Date().getTime());
}

function postAccountForm(form, model, url) {
	showAlert('');
	if ($(form).valid() == false) {
		return;
	}
	accountLoading(true);

	$.ajax({
		type: "POST",
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		url: url,
		data: JSON.stringify(model),
		success: function (response) {
			if (response.result == "ok") {
				console.log('PostAccount is successfull  url :' + response.returnUrl);
				if ( returnPageUrl == '' || returnPageUrl == '/' || returnPageUrl.toLowerCase() == '/home' || returnPageUrl.toLowerCase() == '/home/home') {
					console.log('PostAccount is successfull  custom return url is :' + response.returnUrl);
					if (response.returnUrl == '') {
					
						window.location.reload();
					}
					else {
						window.location.replace( returnValidUrl(response.returnUrl));
					}
				}
				else {
					window.location.replace(returnValidUrl(returnPageUrl));
				}
			}
			else if (response.result == "error") {
				console.log('PostAccount is failed' + response.result);
				accountLoading(false);
				showAlert(response.message);
			}
			else if (response.result == "RequiresVerification") {
				console.log('PostAccount is RequiresVerification' + response.result);
				window.location.replace(response.returnUrl);
			}
			else if (response.result == "Confirm") {

				console.log('PostAccount is Confirm' + response.result);
				accountLoading(false);

				//$('#AccountModal').carousel(5);
				navigateToPage(5);

				$('#confirmEmailMessage').html($('#confirmEmailMessage').html().replace('jvb', response.result));
			}
			else if (response.result == "ConfirmEmail") {

				console.log('PostAccount is ConfirmEmail' + response.result);
				accountLoading(false);
				showAlert(response.message, 'success');
			}
		}
	});
}

function accountLoading(isShow) {
	try {
		if (isShow) {
			$("#accountLoading").fadeIn();
			preventloadinPage();
		}
		else {
			$("#accountLoading").fadeOut();
			$(".container").removeClass('overlay');
			$('.jv-pre-loader').hide();
		}
	}
catch (err) {
		console.log('accountLoading errors : ' + err);
	}

	
}

function preventloadinPage() {
	$('.jv-pre-loader').attr("data-prevent", "yes");
}

function showAlert(message, type = 'danger') {
	if (message == '') {
		$('#alert').hide();
	}
	else {
		$('#alert').html('<div class="alert alert-' + type + ' text-center">' + message + '</div>');
		if ($('#AccountModal').length > 0) {
			$('#AccountModal').animate({ scrollTop: $('#alert').offset().top - 110 }, 'slow');
		}
		else {
			$('html').animate({ scrollTop: $('#alert').offset().top - 110 }, 'slow');
		}
		$('#alert').fadeIn();
	}
}

function googleInit() {
	console.log('googleInti is called'); 
	gapi.load('auth2', function () {
		var auth = gapi.auth2.init({
			//Publish
			client_id: '1079887782391-06lr19le33rkhmo4e5do2bijj3g4gt16.apps.googleusercontent.com'

			//Dev
			//client_id: '607859026385-n3ipk9kraem7jeh1vhclgus0c2k7o64e.apps.googleusercontent.com'

			// Dev_RezaPouya
			//client_id: '575677997901-gd95nuhnhjttnutqt6ehm300uin43rkr.apps.googleusercontent.com' 
		});

		auth.then(
			function () { // On init
				if (!isAuthenticated && gapi.auth2.getAuthInstance().isSignedIn.get()) {
					googleSignout();
					window.location.reload();
				}

				var options = new gapi.auth2.SigninOptionsBuilder();
				//options.setAppPackageName('com.example.app');
				//options.setFetchBasicProfile(true);
				//options.setPrompt('select_account');
				//options.setScope('profile').setScope('email');

				auth.attachClickHandler('googleLoginButton', options, onGoogleSuccessSignInForSignin);
				auth.attachClickHandler('googleLoginButton1', options, onGoogleSuccessSignInForSignin);
				auth.attachClickHandler('googleLoginButton2', options, onGoogleSuccessSignInForSignin);
			},
			function (details) { // On error
				console.log(details);
			});
	});
}

function onGoogleSuccessSignInForSignin(googleUser) {
	if (isAuthenticated)
		return;

	var id_token = googleUser.getAuthResponse().id_token;

	var signinForm = $('#googleSigninForm');

	signinForm.find('[name="idToken"]').val(id_token);
	signinForm.find('[name="rememberMe"]').val(true);

	$.ajax({
		url: signinForm.attr('action'),
		type: signinForm.attr('method'),
		data: signinForm.serializeArray(),
		success: function (data, status, xhr) {
			$('#alert').empty();

			if (data.result == "ok") {
				accountLoading(true);
				$(".container").addClass('overlay');
				$('.jv-pre-loader').show();

				if (returnPageUrl == '' || returnPageUrl == '/' || returnPageUrl.toLowerCase() == '/home' || returnPageUrl.toLowerCase() == '/home/home') {
					if (data.returnUrl == '') {
						window.location.reload();
					}
					else {
						window.location.replace(data.returnUrl);
					}
				}
				else {
					window.location.replace(returnPageUrl);
				}
			}
			else if (data.result == "error") {
				accountLoading(false);
				showAlert(data.message);
			}
			else if (data.result == "RequiresVerification") {
				window.location.replace(data.returnUrl);
			}
			else if (data.result == "Confirm") {
				accountLoading(false);
				//$('#AccountModal').carousel(5);
				navigateToPage(5);
				$('#confirmEmailMessage').html($('#confirmEmailMessage').html().replace('jvb', data.message));
			}
			else if (data.result == "ConfirmEmail") {
				accountLoading(false);
				showAlert(data.message, 'success');
			}
		},
		error: function (jqXhr, textStatus, errorMessage) {
			alert(errorMessage);
		}
	});
}

function googleSignout() {
	var auth = gapi.auth2.getAuthInstance();

	auth.signOut();
	auth.disconnect();
}

function linkedInInit() {
	var authWindowWidth = 500;
	var authWindowHeight = 600;

	var authWindowLeft = (screen.width / 2) - (authWindowWidth / 2);
	var authWindowTop = (screen.height / 2) - (authWindowHeight / 2);

	$(document).on('click', '#linkedInSigninButton', function () {
		var linkedInSigninWindow = window.open(`/AccountApi/LinkedInSignin`, 'LinkedIn Signin', `width=${authWindowWidth}, height=${authWindowHeight}, top=${authWindowTop}, left=${authWindowLeft}`);

		if (linkedInSigninWindow.focus)
			linkedInSigninWindow.focus();
	});
}

function linkedInSigninCallback(data) {
	data = JSON.parse(data);

	$('#alert').empty();

	if (data.result == "ok") {
		accountLoading(true);
		$(".container").addClass('overlay');
		$('.jv-pre-loader').show();

		if (returnPageUrl == '' || returnPageUrl == '/' || returnPageUrl.toLowerCase() == '/home' || returnPageUrl.toLowerCase() == '/home/home') {
			if (data.returnUrl == '') {
				window.location.reload();
			}
			else {
				window.location.replace(data.returnUrl);
			}
		}
		else {
			window.location.replace(returnPageUrl);
		}
	}
	else if (data.result == "error") {
		//googleSignout();
		accountLoading(false);
		showAlert(data.message);
	}
	else if (data.result == "RequiresVerification") {
		window.location.replace(data.returnUrl);
	}
	else if (data.result == "Confirm") {
		//googleSignout();
		accountLoading(false);
		//$('#AccountModal').carousel(5);
		navigateToPage(5);
		$('#confirmEmailMessage').html($('#confirmEmailMessage').html().replace('jvb', data.message));
	}
	else if (data.result == "ConfirmEmail") {
		accountLoading(false);
		showAlert(data.message, 'success');
	}
}


function returnValidUrl(url) {
	try {
		let link = url; 
		if (url.indexOf("#") != -1) {
			link = url.substr(0, url.indexOf('#'));
		} 
		return link;
	}
	catch (err) {
		console.log('return Valid Url error ' + err);
	}
	
}

function signout() {
	if (checkCookie('Login_Provider') && getCookie('Login_Provider') === 'Google') {
		googleSignout();
	}

	$('#logoutForm').submit();
}

var resetLoginModal = function () {
	if ($('body').hasClass('modal-open') == false) {
		navigateToPage(initialModalPage);
	}
}

$(document).ready(function () {
	if ($('#AccountModal').length > 0) {
		$('#AccountModal').carousel({
			pause: true,
			interval: false
		});
	}

	$("body").bind("click", function () {
		try {
			setTimeout(resetLoginModal, 500); // check again in a second

		
			addExtraStyleToAccounModalDiv();
		}
		catch (err) {
			console.log('body.bind(click) errors : ' + err);
		}
	});

	$('#ConfirmEmailEmployee').bind("cut copy paste", function (e) {
		e.preventDefault();
	});

	$('#ConfirmEmailEmployer').bind("cut copy paste", function (e) {
		e.preventDefault();
	});

	linkedInInit();
});

//$('#login-register-modal-btn').click(function () {
//    showAccountModal(0, window.location.href.replace(window.location.origin, ''), '');
//});

function navigateToPage(number) {
	var activeItem = $('.item.active');
	activeItem.removeClass('active');
	var id = '#modal-carousel-item-id-' + number;
	$(id).addClass('active');
}
$('.navigate-account').click(function (e) {
	try {
		showAlert('');
		navigateToPage($(this).attr('data-slide-to'));
		//showAlert('');
		//$('#AccountModal').carousel(parseInt($(this).attr('data-slide-to')));
	}
	catch (err) {
		console.log('navigate-account.click() errors : ' + err);
	}
});

$('.setCaptcha').on('click', function () {
	refreshCaptcha($(this).attr('data-img'));
});

$(".loginregisterlogo").click(function () {
	window.open($(this).attr("data-href"));
});

$('#ForgetPasswordForm').submit(function (e) {
	e.preventDefault();

	var model = {};
	model.Email = $("#EmailForgetPassword").val();

	postAccountForm($(this), model, '/AccountApi/ForgotPassword');
});

$('#EmployeeForm').submit(function (e) {
	e.preventDefault();

	var model = {};
	model.IsEmployer = $("#IsEmployerEmployee").val();
	model.Email = $("#EmailEmployee").val();
	model.Password = $("#PasswordEmployee").val();
	model.ConfirmEmail = $("#ConfirmEmailEmployee").val();
	model.CaptchaInputText = $("#CaptchaInputTextEmployee").val();
	model.IntroductionMethodId = $("#IntroductionMethodIdEmployee").val();

	postAccountForm($(this), model, '/AccountApi/register');
});

$('#EmployerForm').submit(function (e) {
	e.preventDefault();
	var model = {};
	model.IsEmployer = $("#IsEmployerEmployer").val();
	model.Email = $("#EmailEmployer").val();
	model.Password = $("#NewPasswordEmployer").val();
	model.ConfirmEmail = $("#ConfirmEmailEmployer").val();
	model.CaptchaInputText = $("#CaptchaInputTextEmployer").val();

	postAccountForm($(this), model, '/AccountApi/register');
});

$('#loginform').submit(function (e) {
	e.preventDefault();

	var model = {};
	model.Email = $("#LoginEmail").val();
	model.Password = $("#Password").val();

	postAccountForm($(this), model, '/AccountApi/Login');
});

//-----------------------------------------------------------------

//این برای احراز هویت با گوگل نوشته شده تا وقتی که از گوگل استفاده میشه نباید پاک بشه
var isAuthenticated = '@(User.Identity.IsAuthenticated)' === 'True' ? true : false;

var isMobile = false;
Persian2EnglishNumbers = function (str) {
	persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
	arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
	if (typeof str === 'string') {
		for (var i = 0; i < 10; i++) {
			str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
		}
	}
	return str;
};

function ReplaceNumbersToPersian(t) {
	var e = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
	return t.toString().replace(/[0-9]/g,
		function (t) {
			return e[+t];
		});
}

$('.dropdown').on('show.bs.dropdown', function () {
	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function () {
	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$(".toggle-password").click(function () {
	try {
		$(this).toggleClass("fa-eye fa-eye-slash");
		let input = $(`#${$(this).data("input-id")}`);

		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	} catch (err) {
		console.log('.toggle-password clicked has error :' + err.message);
	}
});

function showPassword(element, inputId) {
	inputId.split(',').forEach(function (item, index, arr) {
		var id = item.trim();
		var input = $(element).parents('form').find('input[id="' + id + '"]');
		if ($(element)[0].checked) {
			input.attr('type', 'text');
		} else {
			input.attr('type', 'password');
		}
	});
}

function addExtraStyleToAccounModalDiv() {
	let hasExtraPadding = $('body').attr('add-extra-padding-to-login-modal');
	if (hasExtraPadding == true || hasExtraPadding == 'true') {
		if ($('#AccountModal').hasClass('modal-body-pad-200') == false) {
			$('#AccountModal').addClass('modal-body-pad-200');
		}
	}
}