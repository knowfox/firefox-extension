function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url, tab.title);
  }
}

function fetchForm(tabs) {
  let url = 'http://knowfox.test/bookmark?url='
      + encodeURIComponent(tabs[0].url)
      + '&title=' + encodeURIComponent(tabs[0].title);

  location.href = url;
  return;

  browser.cookies.get({
    url,
    name: 'laravel_session'
  })
    .then((cookie) => {
      console.log(url, cookie);
      fetch(url, {
          credentials: 'include',
          headers: new Headers({
            'Cookie': cookie
          })
        })
        .then((response) => {
          return response.text();
        })
        .then((html) => {
          console.log(html);
        });
    });
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.query({active: true, currentWindow: true})
  .then(fetchForm, onError);
