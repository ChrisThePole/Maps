var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.545481, lng: -1.933713},
          zoom: 15
        });
      }