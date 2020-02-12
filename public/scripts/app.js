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

