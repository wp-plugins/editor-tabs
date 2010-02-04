jQuery().ready(function() { 
	
	tabBoxes = jQuery('#post-body .postbox');
	jQuery(tabBoxes).hide().removeClass('closed'); 
	
	jQuery('#post-body .postbox:first').addClass('active').show(); //show the first one 
	
	//create the menu with javascript
	
	menu_items = jQuery('#post-body .hndle'); //build the list of menu items
		
	for (var a = 0, b = tabBoxes.length; a < b; a++ )
		{
			newClass = 'editor-tab' + a;
			jQuery(tabBoxes[a]).addClass(newClass);
		}
		
	menu_html = '<ul id="editor-tabs" class="clearfix">\n';
	
	for (var i = 0, n = tabBoxes.length; i < n; i++ )
		{
			target_id = jQuery(tabBoxes[i]).attr('id');
			menu_html = menu_html + '\n<li><a href="#" rel="editor-tab' + i + '">' + jQuery(menu_items[i]).text() + '</a></li>';	
		}
	
	menu_html = menu_html + '\n</ul>';
		
	jQuery('#normal-sortables').prepend(menu_html);
	jQuery('#editor-tabs a:first').addClass('active');
	
	/* behavior */
	
	jQuery('#editor-tabs a').click(function() {
		
		jQuery(tabBoxes).removeClass('active').hide();
		jQuery('#editor-tabs a').removeClass('active');
		
		target = jQuery(this).attr('rel');
		
		jQuery(this).addClass('active');
		jQuery('.' + target).addClass('active').show();
		
		return false;
		
	});

	
});