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
<<<<<<< HEAD
      $.post('/api/users/', $(this).serialize(), function (respond) {
        console.log('all good', respond)
=======
      $.post('/api/users/login', $(this).serialize(), function (html) {
        console.log('all good', html)
>>>>>>> 44790796d99a83941c23adc52f518ae31892b9f1

       window.location.href = '/'

      }, 'respond')
    });



});
