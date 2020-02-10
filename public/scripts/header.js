$(() => {
  window.header = {};

  const $pageHeader = $('.topnav');
  let currentUser = null;
  function updateHeader(user) {
    currentUser = user;
    $pageHeader.find("#page-header__user-links").remove();
    let userLinks;

    if (!user) {
      userLinks = `
      <div class="topnav">
      <a class="home" href="/">
        <img class="logo" src="https://files.slack.com/files-pri/T2G8TE2E5-FTE1BNS91/output-onlinepngtools__3_.png" alt="logo">
      </a>
      <!-- Search form -->
      <input class="search" type="text" placeholder="Search">
        <a id="modalBtn" href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#darkModalForm">Login/Register</a>
      <a class="user" href="/user">
        <img class="user"src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"alt="user">
      </a>
    </div>
      `
    } else {
      userLinks = `
      <div class="topnav">
      <a class="home" href="/">
        <img class="logo" src="https://files.slack.com/files-pri/T2G8TE2E5-FTE1BNS91/output-onlinepngtools__3_.png" alt="logo">
      </a>
      <!-- Search form -->
      <input class="search" type="text" placeholder="Search">
      ${user.name}
      <a class="user" href="/user">
        <img class="user"src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"alt="user">
      </a>
    </div>
      `
    }

    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;


  $("header").on("click", '.home', function() {
    propertyListings.clearListings();
    getAllListings()
      .then(function(json) {
        propertyListings.addProperties(json.properties);
        views_manager.show('listings');
    });
  });

  $("header").on("click", '.my_profile', function() {
    propertyListings.clearListings();
    getAllListings(`owner_id=${currentUser.id}`)
      .then(function(json) {
        propertyListings.addProperties(json.properties);
        views_manager.show('listings');
    });
  });
});
