function onOpenLoginAndRegisterClicked() {
	$('#AccountModal').modal({ "backdrop": "static" });
}

function openCreateRequestModel() {
	$('#RequestModal').modal({ "backdrop": "static" });
}

$(document).ready(function () {
	setInterval(() => {$('[data-toggle="tooltip"]').tooltip();}, 1000);
});