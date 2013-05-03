function hook_titles() {
	$('.thread-title').each(function(index) {
		var t = $(this).parent()
		t.mouseenter(function() { grab_first_post($(this)); })
		t.mouseleave(function() { $('#tftv-preview-hover-div').css({ display: "none" }); $('#tftv-preview-hover-div').text("Loading...") } )
	})
}

function grab_first_post(thread) {
    // var page = document.implementation.createHTMLDocument("")
    // page.documentElement.innerHTML = this.responseText
    // var post = $('.post-body').first().text()
    // console.log(post)

	// page = document.implementation.createHTMLDocument("")
	// $.ajax("http://teamfortress.tv" + thread.attr('href')).done(function( text ){ page.documentElement.innerHTML = text })
	// console.log(page)
	// var post = page.querySelector(".post-body")
	// console.log(post)
	$('#tftv-preview-container-div').load("http://teamfortress.tv" + thread.attr('href'), function() {
		$('#tftv-preview-hover-div').html( $('#tftv-preview-container-div').find('.post').first().html() )})
	$('#tftv-preview-hover-div').css({ display: "block" })
}

function generate_hover_div() {
	$('<div id="tftv-preview-hover-div" class="post-body" style="display: none;background:#FFF;border:1px solid #000;position:absolute; z-index: 100; max-width:600px;">Loading...</div>').appendTo('body')
	$(document).bind('mousemove', function(e){
	    $('#tftv-preview-hover-div').css({ left: e.pageX, top: e.pageY + 20 })
	})
	$('<div id="tftv-preview-container-div" style="display:none;"></div>').appendTo('body')
}

hook_titles()
generate_hover_div()