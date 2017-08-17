(function() {

// ...

  function detectCenter() {
    //Detect start position of images in '.animation-type-1'
    var at1 = document.getElementsByClassName('animation-type-1');
    if ( at1.length ) {
      for (var i = 0; i < at1.length; ++i) {
          var block  = at1[i],
              center = ( block.offsetHeight / 2 ),
              items  = ( block.getElementsByClassName('el') );

          for (var i = 0; i < items.length; ++i) {
            var item = items[i],
                itemTop = item.offsetTop + (item.offsetHeight / 2),
                percent =  (center - itemTop) / item.offsetHeight;

            item.setAttribute("data-y", Math.round((percent * 100)) + "%");
          }
      }
    }
  }

  window.onload = function() {

    detectCenter();

    var animationType1 = anime({
      targets: '.animation-type-1 .el',
      direction: 'alternate',
      easing: 'linear',
      autoplay: false,
      translateX: function(el) {
        return el.getAttribute('data-x');
      },
      translateY: function(el) {
        return el.getAttribute('data-y');
      },
      duration: function(el, i, l) {
        return 700 - (i * (600 / l))
      },
      delay: function(el, i, l) {
        return i * (80 / l) ;
      },
      scale: [1, function(el, i, l) {
        return 0;
      }],
    });

    document.querySelector('#play').onclick = function() {
      animationType1.restart();
    }
  }

  // ...

})()
