(function() {

    var stopSovetnik = function() {

        /////////////////////////////////////////////////////////////////////
        // Common

        var hash = window.location.hash || false;

        function log(p1, p2) {
            if (hash && hash === '#ssdebug') console.log(p1, p2 || '');
        };

        if (!window['MutationObserver']) {
            log('MutationObserver not supported!');
            return false;
        }

        if (navigator.userAgent.indexOf("MSIE") != -1 ||
            navigator.userAgent.indexOf("Trident") != -1 ||
            navigator.userAgent.indexOf("Edge") != -1) {
            log('IE or Edge');
            return false;
        }

        var marker = {
          yaD: false,
          yaM: false,
          smB: false
        };

       function analytic() {
         return;
       }


/////////////////////////////////////////////////////////////////////
// Rules

function yandex(m) {

  var YandexDesktopFound = false;

  var YandexDesktopCheck = {
      'display': 'table',
      'opacity': '1',
      'position': 'fixed',
      'min-width': '800px',
      'border-collapse': 'collapse'
  };

  if (m && m.tagName === 'DIV') {
    for (var c in YandexDesktopCheck) {

        if (window.getComputedStyle(m).getPropertyValue(c) === YandexDesktopCheck[c]) {
            log('YandexDesktopFound-' + c + ' true');
            YandexDesktopFound = true;
        } else {
            log('YandexDesktopFound-' + c + ' false');
            YandexDesktopFound = false;
            break;
        }
    }
  }


  if (m && YandexDesktopFound) {
	  m.remove();
      if (marker.yaD === false) {
        marker.yaD = true;
      }
  }

  return;
}

function superMegabest(m) {
  return;
}


        /////////////////////////////////////////////////////////////////////
        // Mutations

        var stopSovetnikObserver = new MutationObserver(function(allmutations) {
            allmutations.map(function(mr) {
                var m = mr.addedNodes[0];

                yandex(m);
                superMegabest(m);

                analytic();

            });
        });


        var marginAnimationHTMLObserver = new MutationObserver(function() {
            var mt = document.documentElement.style.marginTop;
            if (mt && parseInt(mt) > 0) {
                document.documentElement.style.marginTop = '';
            }
        });

        var marginAnimationBODYObserver = new MutationObserver(function() {
            var mt = document.body.style.marginTop;
            if (mt && parseInt(mt) > 0) {
                document.body.style.marginTop = '';
            }
        });

        var runObserver = function() {
            if (!document.body) {
                setTimeout(runObserver, 100);
                return;
            }

            if (stopSovetnikObserver) {
                stopSovetnikObserver.observe(document.body, {
                    'childList': true,
                    'subtree': true,
                });
            }

            if (marginAnimationHTMLObserver) {
                marginAnimationHTMLObserver.observe(document.documentElement, {
                    'attributes': true,
                    'attributeFilter': ['style']
                });
            }

            if (marginAnimationBODYObserver) {
                marginAnimationBODYObserver.observe(document.body, {
                    'attributes': true,
                    'attributeFilter': ['style']
                });
            }
        }


        if (!(hash && hash === '#ssoff')) {
            runObserver();
        }

    };


    stopSovetnik();

})();
