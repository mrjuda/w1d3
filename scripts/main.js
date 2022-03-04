function loadJS(url) {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}

loadJS('scripts/jtScript.js');
loadJS('scripts/mobileMenu.js');
loadJS('script/dynamicCards.js');
loadJS('script/popup.js');
