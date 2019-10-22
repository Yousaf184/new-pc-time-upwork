const $body = document.getElementById('body');
const $hamburgerOpen = document.getElementById('hamburger-menu');
const $hamburgerClose = document.getElementById('hamburger-close');
const $navItemsContainer = document.getElementById('nav-items-container');
const $collapsedNavContainer = document.getElementById('collapsed-nav-container');
const $nav = document.getElementById('nav');

$hamburgerOpen.addEventListener('click', (e) => {
    // disable scrolling
    $body.classList.add('hide-overflow');
    showSideMenu();
});

$hamburgerClose.addEventListener('click', (e) => {
    // enable scrolling
    $body.classList.remove('hide-overflow');
    hideSideMenu();
});

$collapsedNavContainer.addEventListener('click', (e) => {
    // if nav-item is clicked, close side menu
    if (e.target.classList.contains('nav-item')) {
        // toggle scrolling
        $body.classList.remove('hide-overflow');
        hideSideMenu();
    }
});

function changeHamburgerMenuIcon() {
    $hamburgerClose.classList.toggle('hide');
    $hamburgerOpen.classList.toggle('hide');
}

function hideSideMenu() {
    changeHamburgerMenuIcon();
    $navItemsContainer.classList.add('slideOut');

    // let slideOut animation play
    setTimeout(() => {
        // hide collapsedNavContainer
        $collapsedNavContainer.classList.add('hide');
        // move nav items back in header inside nav tag
        $nav.insertAdjacentElement('afterbegin', $navItemsContainer);
        // remove animation classes from navItemcContainer
        $navItemsContainer.classList.remove('slideOut');
        $navItemsContainer.classList.remove('slideIn');
    }, 350);
}

function showSideMenu() {
    changeHamburgerMenuIcon();
    // move nav items in div with class of 'collapsed-nav-container'
    $collapsedNavContainer.insertAdjacentElement('afterbegin', $navItemsContainer);
    // show collapsedNavContainer
    $collapsedNavContainer.classList.remove('hide');
    $navItemsContainer.classList.add('slideIn');
}