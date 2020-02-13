const searchResources = function () {
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
}

// for userresources page
const filterResources = function (topic) {
  const filter = topic.toUpperCase();
  const mason = document.getElementsByClassName('masonry-item');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < mason.length; i++) {
    const h6 = mason[i].getElementsByTagName("h6")[0];
    const txtValue = h6.textContent || h6.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      mason[i].style.display = "";
    } else {
      mason[i].style.display = "none";
    }
  }
}
