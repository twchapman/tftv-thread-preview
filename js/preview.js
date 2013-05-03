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
		$('#tftv-preview-hover-div').text( $('#tftv-preview-container-div').find('.post-body').first().text() )})
	$('#tftv-preview-hover-div').css({ display: "block" })
}

function generate_hover_div() {
	$('<div id="tftv-preview-hover-div" style="display: none; color: #000; background: #FFF; font-size:10px; border:1px solid #000; padding:4px; position:absolute; z-index: 100; max-width:600px;">Loading...</div>').appendTo('body')
	$(document).bind('mousemove', function(e){
	    $('#tftv-preview-hover-div').css({ left: e.pageX, top: e.pageY + 20 })
	})
	$('<div id="tftv-preview-container-div" style="display:none;"></div>').appendTo('body')
}

hook_titles()
generate_hover_div()