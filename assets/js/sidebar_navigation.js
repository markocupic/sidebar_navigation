jQuery(document).ready(function () {
    jQuery('.sidebar-navigation li.trail, .sidebar-navigation li.active').addClass('expanded');
    jQuery('.sidebar-navigation li.active, .sidebar-navigation li.active li').removeClass('expanded');

    var elToggler = jQuery('<i class="toggle-submenu" role="button"> </i>');
    jQuery(elToggler).click(function (e) {
        // Close opened submenus of each sibling
        jQuery(this).closest('li').find('li.expanded').removeClass('expanded').children('ul').slideUp();
        // Close opened sibling
        jQuery(this).closest('li').siblings('li.expanded').removeClass('expanded').children('ul').slideUp();
        // open/close item
        jQuery(this).closest('li').toggleClass('expanded').children('ul').slideToggle();
    });
    jQuery(elToggler).insertAfter(".sidebar-navigation li.submenu > a, .sidebar-navigation li.submenu > span");
});
