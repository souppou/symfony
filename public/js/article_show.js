/*$(document).ready(function() {
    $('.js-like-article').on('click', function(e) {
        e.preventDefault();

        var $link = $(e.currentTarget);
        $link.toggleClass('fa-heart-o').toggleClass('fa-heart');

        $.ajax({
            method: 'POST',
            url: $link.attr('href')
        }).done(function(data) {
            $('.js-like-article-count').html(data.hearts);
        })
    });
});*/


$(document).ready(function(){
	$('.js-like-article').on('click',function(e){
		e.preventDefault();
		alert('ssdsd');
		var $link = $(e.currentTarget);
		alert($link.attr('href'));
        $link.toggleClass('fa-heart-o').toggleClass('fa-heart');
		
		$.ajax({
			method:'POST',
			url:$link.attr('href'),
			
		}).done(function(data){
			$('.js-like-article-count').html(data);
		})
		
	});
});