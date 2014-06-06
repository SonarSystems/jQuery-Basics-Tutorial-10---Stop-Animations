$(document).ready(function()
{
	$("#start").click(function()
	{
		$("div").animate
		({
			"margin-left": "250px",
			"opacity": "0.5",
			"height": "150px",
			"width": "150px"
		}, 10000);
	});

	$("#stop").click(function()
	{
		$("div").stop();
	});
});