=== Plugin Name ===
Contributors: 3pointross
Tags: admin, administration, cms, client, pages, content management
Requires at least: 2.7
Tested up to: 3.1
Stable tag: 1.75

Clean up the editing pages in the administration panel by turning all of the modules and meta box's into dynamic javascript tabs. No more scrolling way up and down to edit content and page details.

== Description ==

This simple plugin is designed primarily for sites that are using Wordpress as a content management system, however it can be extremely useful for both. If you are using a more complex Wordpress install and theme you are likely to end up with a long list of dialog boxes on the edit pages to manage the different elements of your site. This can be a usability problem for two reasons, one being that a client may not know they have control over an element because it will be hidden way down the page. Additionally you can get to a point where you have to scroll way down and up to make changes and then publish the site. 

This is especially true if you are using CMS plug-ins like PODS or Flutter. 

I am currently working on finding a way to better work around moving meta boxes into the right hand column. Currently doing so will still give it the behavior of being a tabbed content area until you reload the edit page. IE: It will still show / hide the content and the tab will still appear in the menu as well. Any suggestions on the logic / behavior would be greatly appreciated as I am somewhat stumped at this point.

Changes

1.75 - Improved the styling of the tabs. Improved the handling with hidden / disabled fields. Fixed javascript conflicts for drag and drop menus in Wordpress 3.0


== Installation ==

To install, simply:

1. Upload to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Screenshots ==

1. Rather than having all the meta boxes listed vertically you now get one active and a javascript menu to show / hide boxes when clicked on.