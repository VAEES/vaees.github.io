---
---

const url = '{{site.url}}';

function navigateArticlePage(path) {
    const navigationData = { url, path };
    const navigationString = JSON.stringify(navigationData);
    sessionStorage.setItem('last__page', navigationString);
    window.location.href = `${url}${path}`;
}

function lastArticlePage() {
    let navigationUrl;
    const navigationString = sessionStorage.getItem('last__page');

    if (navigationString) {
        navigationData = JSON.parse(navigationString);
        navigationUrl = `${navigationData.url}${navigationData.path}`;
    } else {
        navigationUrl = `${url}/articles/`;
    }

    window.location.href = navigationUrl;
}
