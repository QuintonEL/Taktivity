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
      $.post('/api/users/', $(this).serialize(), function (respond) {
        console.log('all good', respond)

       window.location.href = '/'

      }, 'respond')
    });



});
