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
      console.log('register all good', html)

      window.location.href = '/'

    }, 'html')
  });


  $("#login").submit(function (event) {
    event.preventDefault()
    const data = $(this).serialize();
    $.post('/api/users/login', data, function (html) {
      console.log('login all good', html)

      window.location.href = '/'

    }, 'html')
  });
});


const searchResources = function () {
  // if (event.keyCode === 13) {
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const mason = document.getElementsByClassName('masonry-item');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < mason.length; i++) {
      const h3 = mason[i].getElementsByTagName("h3")[0];
      const txtValue = h3.textContent || h3.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        mason[i].style.display = "";
      } else {
        mason[i].style.display = "none";
      }
    }
  // }
}
