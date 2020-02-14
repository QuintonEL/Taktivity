// import { addFavourite } from "../../routes/database";

jQuery(function($){
  // for the register
  $("#signUp").submit(function (event) {
    event.preventDefault()
    $.post('/api/users/', $(this).serialize(), function (html) {
      console.log('register all good', html)

      window.location.href = '/'

    }, 'html')
  });

  // for the login
  $("#login").submit(function (event) {
    event.preventDefault()
    console.log('hello')
    const data = $(this).serialize();
    $.post('/api/users/login', data, function (html) {
      console.log('login all good', html)

      window.location.href = '/'

    }, 'html')
  });

  //for the favourite button
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

  // for the ratings
  $("form#ratingForm").submit(function(event) {
      event.preventDefault(); // prevent the default click action from being performed
      if ($("#ratingForm :radio:checked").length == 0) {
          $('#status').html("nothing checked");
          return false;
      } else {
          $('#status').html( 'You picked ' + $('input:radio[name=rating]:checked').val() );
      }
  });

  // for the comments
  // $("#commentform").submit(function(event) {
  //   event.preventDefault();
  //   console.log('comentssssss')
  //   data = $("#comment").val();
  //   $.post("/api/resources/new", data);
  // })

})
