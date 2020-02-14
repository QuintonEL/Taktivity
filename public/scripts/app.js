// import { addFavourite } from "../../routes/database";

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
    console.log('hello')
    const data = $(this).serialize();
    $.post('/api/users/login', data, function (html) {
      console.log('login all good', html)

      window.location.href = '/'

    }, 'html')
  });

  $(".modal").on('click', `.add-to-favorites`, function(event) {
    event.preventDefault()
    console.log('favorite has been clicked')
    let resource_id = this.id;
    resource_id = resource_id.replace('add', '');
    console.log('Resource ID is', resource_id);
    $.post('/api/resources/myResources', { resource_id }, function (html) {


      window.location.href = '/'

    },'html')
  });

  


})
