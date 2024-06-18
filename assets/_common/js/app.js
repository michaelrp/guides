require('@uswds/uswds');

const sidenav = document.querySelector('.usa-sidenav');

window.addEventListener('scroll', setCurrentLink);

/**
 * Find the most recently passed heading and adds a usa-current
 * class to the correspoing link in the sidenav subnav
 */
function setCurrentLink(){
  if (sidenav) {
    const h2s = document.querySelectorAll('h2');
    const scrollPos = document.documentElement.scrollTop;
    let topHead = h2s[0];
    let i = 0;
    let found = false;
    while (!found && i < h2s.length) {
        if (scrollPos < h2s[i].offsetTop){
          found = true;
        } else {
          topHead = h2s[i];
        }
        i++;
    }

    const href = topHead.id;
    const oldLink = document.querySelector('.usa-sidenav__sublist .usa-current');

    if (oldLink) {
      oldLink.classList.remove('usa-current');
    }

    const currentLink = document.querySelector(`.usa-sidenav__sublist [href="#${href}"]`).parentElement;
    currentLink.classList.add('usa-current');
  }
}
