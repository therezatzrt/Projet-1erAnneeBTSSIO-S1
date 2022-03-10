const hamburger = document. querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document. querySelector('.header .nav-bar .nav-list ul');
const menu_item = document. querySelectorAll('.header .nav-bar .nav-list ul li a');
en-tête const = document. querySelector('.header.container');

hamburger. addEventListener('click', () => {
	hamburger. classList. bascule('active' );
	mobile_menu. classList. bascule('active' );
});

document. addEventListener('scroll', () => {
	var scroll_position = fenêtre. scrollY;
	if (scroll_position > 250) {
		en-tête. style. backgroundColor = '#29323c';
	} else {
		en-tête. style. backgroundColor = 'transparent';
	}
});

menu_item. forEach((article) => {
	élément. addEventListener('click', () => {
		hamburger. classList. bascule('active' );
		mobile_menu. classList. bascule('active' );
	});
});
