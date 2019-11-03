jQuery(document).ready(function () {
    var elToggler = jQuery('<i class="toggle-submenu" role="button"> </i>');
    jQuery(elToggler).insertAfter(".sidebar-navigation li.submenu > a, .sidebar-navigation li.submenu > strong");
    jQuery('.sidebar-navigation li.submenu.trail, .sidebar-navigation li.active').addClass('opened');

    setTimeout(function () {
        jQuery('.sidebar-navigation .toggle-submenu').click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            jQuery(this).closest('li').find('li.opened').removeClass('opened').children('ul').slideUp();
            // Close opened sibling
            jQuery(this).closest('li').siblings('li.opened').removeClass('opened').children('ul').slideUp();
            // open/close item
            jQuery(this).closest('li').toggleClass('opened').children('ul').slideToggle();
        });
    }, 20);
});
