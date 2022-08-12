<? php
<!-- jquery დაიმპორტება  -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script  >
    //                                  ძებნის ფუნქცია
// javascript start
function onReady() {
  // coding start


  var search_icon = document.querySelector('.wd-close-search')

search_icon.classList.remove('wd-close-search')
search_icon.classList.add('dato-close-search')
search_icon = document.querySelector('.dato-close-search a')
a = true
search_icon.addEventListener('click', () => {
  if (a == true) {
    a = false
    document.querySelectorAll('form').forEach(function (el) {
      el.reset()
    })
    search_icon.click()
  }
  const myTimeout = setTimeout(clicked, 100)

  function clicked() {
    clearTimeout(myTimeout)
    document.querySelectorAll('form').forEach(function (el) {
      el.reset()
    })

    if (a == false) {
    }
    
  }
  search_icon.click()
  a == true

})


// coding end
  
}
if (document.readyState !== "loading") {
    onReady(); // Or setTimeout(onReady, 0); if you want it consistently async
} else {
    document.addEventListener("DOMContentLoaded", onReady);
}


// javascript end
</script>
  ?>