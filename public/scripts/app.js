// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

jQuery(function($){
  // const loggedInUserId = $('#modalBtn').data("userid");

  // if (!loggedInUserId) { $('#modalBtn').trigger('click') }

  $("#signUp").submit(function (event) {
    event.preventDefault()
    $.post('/api/users/', $(this).serialize(), function (html) {
      console.log('all good', html)

      window.location.href = '/'

    }, 'html')
  });


  $("#login").submit(function (event) {
    event.preventDefault()
    const data = $(this).serialize();
    $.post('/api/users/login', data, function (html) {
      console.log('all good', html)

      loadResources()

      window.location.href = '/'

    }, 'html')
  });

  // get resources and render
  const loadResources = function() {
    $.ajax('/', { method: 'GET' })
    .then(function (getResource) {
      renderResources(getResource)
    });
  }

    // loops through resources and calls createListing and appends to container
    const renderResources = function(resources) {
    resources.reverse();
    const $resourceContainer = $(".masonry");
    $resourceContainer.empty(); //empty out container so we don't see duplicates
    const $createdResources = $(resources.map(createListing).join(" "));
    return $resourceContainer.append($createdResources);
    }

    // takes in a resource object and returns resource element with html structure
    const createListing = function(resource) {
      const markup =
      `<div class="masonry-item">
        <div class="masonry-content">
          <img src="${resource.image_url}" alt="Resource Topic">
          <h3 class="masonry-title">${resource.title}</h3>
          <p class="masonry-description">${resource.description}</p>
        </div>
      </div>
      `
      return markup;
    }
});
