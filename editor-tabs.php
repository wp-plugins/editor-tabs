<?php 

/*
Plugin Name: Editor Tabs
Plugin URI: http://workshop.37designs.com/
Description: Rather than tons of sortable boxes and an endless interface, some accessible javascript tabs
Author: Ross Johnson
Version: 1.75
Author URI: http://www.stylizedweb.com/
*/

// Create the function to output the contents of our Dashboard Widget

function editor_tabs_function() {
	
	/** WordPress Administration Bootstrap */
?>

	
<?php	
} 


function editor_admin_register_head_editor_37() {
    $siteurl = get_option('siteurl');
    $css_url = $siteurl . '/wp-content/plugins/' . basename(dirname(__FILE__)) . '/editor-tabs.css';
	$js_url = $siteurl . '/wp-content/plugins/' . basename(dirname(__FILE__)) . '/editor-tabs.js';
    echo "<link rel='stylesheet' type='text/css' href='$css_url' />\n";
//	echo "<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js'></script>\n";
	echo "<script type='text/javascript' src='$js_url'></script>\n";


}

function on_load_page() {
	
	add_action('admin_head', 'editor_admin_register_head_editor_37');
	
}

//add_action('admin_footer', 'editor_admin_register_head_editor_37');
 //	add_action('load-'.$this->pagehook, array(&$this, 'on_load_page'));

	add_action('admin_menu', 'on_load_page');

?>