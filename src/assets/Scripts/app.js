function onOpenLoginAndRegisterClicked() {
	$('#AccountModal').modal({ "backdrop": "static" });

	setTimeout(() => {
		$('#mobileNumber').focus();
	}, 500);
}

var isMobile = false;
var employerImage, employeeImage;
function hideHomeLoading() {
	setTimeout(function () {
		$('.jv-pre-loader').attr('data-prevent', 'no').fadeOut(320);
		$('#overlayHomeLoading').fadeOut(320);
		$(".container").removeClass('overlay');
	}, 1);
}

function showHomeLoading() {
	$('.jv-pre-loader').attr('data-prevent', 'yes').css('display', 'block');
	$('#overlayHomeLoading').css('display', 'block');
}

function loadEmployeeImage() {
	var src = '1.jpg';
	employeeImage = document.createElement('img');
	employeeImage.onload = function () {
		if (employerImage.complete) {
			hideHomeLoading();
		}
	};
	employeeImage.onerror = function () {
		if (employerImage.complete) {
			hideHomeLoading();
		}
	};
	employeeImage.src = src;
}

function loadEmployerImage() {
	var src = '2.jpg';
	employerImage = document.createElement('img');
	employerImage.onload = function () {
		if (employeeImage.complete) {
			hideHomeLoading();
		}
	};
	employerImage.onerror = function () {
		if (employeeImage.complete) {
			hideHomeLoading();
		}
	};
	employerImage.src = src;
}

$(document).ready(function () {
	showHomeLoading();
	loadEmployeeImage();
	loadEmployerImage();
});