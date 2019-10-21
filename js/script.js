const $body = document.getElementById('body');
const $hamburgerToggle = document.getElementById('hamburger-toggle');
const $navItemsContainer = document.getElementById('nav-items-container');
const $collapsedNavContainer = document.getElementById('collapsed-nav-container');
const $nav = document.getElementById('nav');

// will be used to idenitify whether to show close image or hamburger menu image
const hamburgerCloseClass = 'hamburger-menu-close';

$hamburgerToggle.addEventListener('click', (e) => {
    // toggle scrolling
    $body.classList.toggle('hide-overflow');

    if (isCloseMenuIcon()) {
        hideSideMenu();
    } else {
        showSideMenu();
    }
});

$collapsedNavContainer.addEventListener('click', (e) => {
    // if nav-item is clicked, close side menu
    if (e.target.classList.contains('nav-item')) {
        // toggle scrolling
        $body.classList.remove('hide-overflow');
        hideSideMenu();
    }
});

// returns true if clicked image is hamburger close image
function isCloseMenuIcon() {
    return $hamburgerToggle.classList.contains(hamburgerCloseClass);
}

function changeHamburgerMenuIcon() {
    let iconPath = '';

    if (isCloseMenuIcon()) {
        iconPath = './assets/hamburger-menu.svg';
    } else {
        iconPath = './assets/close.svg';
    }

    $hamburgerToggle.classList.toggle(hamburgerCloseClass);
    $hamburgerToggle.setAttribute('src', iconPath);
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
    }, 400);
}

function showSideMenu() {
    changeHamburgerMenuIcon();
    // move nav items in div with class of 'collapsed-nav-container'
    $collapsedNavContainer.insertAdjacentElement('afterbegin', $navItemsContainer);
    // show collapsedNavContainer
    $collapsedNavContainer.classList.remove('hide');
    $navItemsContainer.classList.add('slideIn');
}