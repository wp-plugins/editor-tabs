jQuery(document).ready(function() { 
	
	
	tabBoxes = jQuery('#post-body .postbox');
	
	jQuery('#post-body .postbox:first').addClass('active').show(); //show the first one 
	
	//create the menu with javascript
	
	function build_menu() {
	
	jQuery(tabBoxes).hide().removeClass('hide-if-no-js'); 
	
	menu_items = jQuery('#post-body .hndle'); //build the list of menu items
		
	for (var a = 0, b = tabBoxes.length; a < b; a++ )
		{
			newClass = 'editor-tab' + a;
			jQuery(tabBoxes[a]).addClass(newClass);
		}
		
	menu_html = '<ul id="editor-tabs" class="clearfix">\n';
//	menu_html = menu_html + '<li id="li-content"><a href="#" rel="editor-tab-999">Content</a></li>';
	
	for (var i = 0, n = tabBoxes.length; i < n; i++ )
		{
			target_id = jQuery(tabBoxes[i]).attr('id');
			status = jQuery('#' + target_id + '-hide');  
			if (jQuery(status + ':checked')) {
				menu_html = menu_html + '\n<li id="li-'+ target_id +'"><a href="#" rel="editor-tab' + i + '">' + jQuery(menu_items[i]).text() + '</a></li>';
			} else { 
				menu_html = menu_html + '\n<li id="li-'+ target_id +'" style="display:none;"><a href="#" rel="editor-tab' + i + '">' + jQuery(menu_items[i]).text() + '</a></li>';	
			}
			
		}
	menu_html = menu_html + '\n</ul>';
	jQuery('#normal-sortables').before(menu_html);
	jQuery('#editor-tabs a:first').addClass('active');
			
	tabBoxes = jQuery('#post-body .postbox');
	
	}
	
	build_menu();
	
	/* behavior */
	
	jQuery('#editor-tabs a').click(function() {
		
		jQuery(tabBoxes).removeClass('active').hide();
		jQuery('#editor-tabs a').removeClass('active');
		
		target = jQuery(this).attr('rel');
		
		jQuery(this).addClass('active');
		jQuery('.' + target).addClass('active').show();
		
		return false;
		
	});
	
	jQuery('.hide-postbox-tog').click(function() { 
						
		if (jQuery(this).is(':checked')) { 
			
			target = $(this).attr('value');
			$('#li-' + target).show(); 
			
			} else {
			
			target = $(this).attr('value');
			
			$('#li-' + target).hide();
			
			}
			
		return true;
		
	});

	
});