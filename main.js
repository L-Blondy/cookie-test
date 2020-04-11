$(".get-cookie").click(function () {
	$.ajax({
		url: "http://localhost:3000/cookie",
	});
});

$("get-whatever").click(function () {
	$.ajax({
		url: "http://localhost:3000/whatever",
	});
});