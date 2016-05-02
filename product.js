
$(document).ready(function() {
   // $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
   // $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
   var str1= '';
	function additem(img,title,features,discount){
		var str1 =  $("<div class='item  col-xs-4 col-lg-4'><div class='thumbnail'><img class='group list-group-image' src='");
		var str1 = str1 + img;
		var str1 = str1 + $(" alt='' /><div class='caption'><h4 class='group inner list-group-item-heading'>) ");
		var str1 = str1 + title;
		var str1 = str1 + $("</h4><p class='group inner list-group-item-text'>)");
		var str1 = str1 + features;
		var str1 = str1 + $("</p><div class='row'><div class='col-xs-12 col-md-6'><p class='lead'>");
		var str1 = str1 + discount;
		var str1 = str1 + $("</p></div></div></div></div></div>");
	}
	$('#products').append(additem("http://placehold.it/400x250/000/fff","product title","Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,","$120"));
});

