var config = {
  apiKey: "AIzaSyAVYROy14AZ6SVFN3Lo0yx_-fkXfZ0KYtY",
  authDomain: "mudassar-developers.firebaseapp.com",
  databaseURL: "https://mudassar-developers.firebaseio.com",
  projectId: "mudassar-developers",
  storageBucket: "mudassar-developers.appspot.com",
  messagingSenderId: "860276395972"
};
firebase.initializeApp(config);

function populateListings(thisIsSaleType, putChildData, IDofSection){
          var column13 = document.createElement('div');
          column13.className = 'column-1_3 column_padding_bottom';
          document.getElementById(IDofSection).appendChild(column13);

          //Element's onclick behaviour
          column13.onclick = function(){
            var modal = document.getElementById('myModal');
            document.getElementById('clickedListing').innerHTML = '';
            modal.style.display = "block";
        
            var clickedListingTitle = this.getElementsByClassName('sc_property_title_address_1')[0].innerHTML;
            var titleForModal = document.createElement('h4');
            titleForModal.innerText = clickedListingTitle;
            document.getElementById('clickedListing').appendChild(titleForModal);
        
            var clickedListingAddress = this.getElementsByClassName('sc_property_title_address_2')[0].innerHTML;
            var addressForModal = document.createElement('p');
            addressForModal.innerText = clickedListingAddress;
            document.getElementById('clickedListing').appendChild(addressForModal);
        
            var clickedListingPrice = this.getElementsByClassName('property_price_box_price')[0].innerHTML;
            var clickedListingPriceSign = this.getElementsByClassName('property_price_box_sign')[0].innerHTML;
            var priceForModal = document.createElement('h5');
            priceForModal.innerHTML = clickedListingPriceSign + ' ' + clickedListingPrice;
            document.getElementById('clickedListing').appendChild(priceForModal);
            
            return false;
          }

              //Second div having class sc_property_item
              var scProperty = document.createElement('div');
              scProperty.className = 'sc_property_item';
              column13.appendChild(scProperty);

              //Details
              var info = document.createElement('div');
              info.className = 'sc_property_info';
              scProperty.appendChild(info);

              //Description
              var description = document.createElement('div');
              description.className = 'sc_property_description';
              info.appendChild(description);
              description.innerText = putChildData.type;

              //Not empty div
              var empty = document.createElement('div');
              empty.className = 'sc_listing_content';
              info.appendChild(empty);

              //icon
              var icon = document.createElement('div');
              icon.className = 'sc_property_icon';
              empty.appendChild(icon);

              //Icon Location
              var iconLocation = document.createElement('span');
              iconLocation.className = 'icon-location';
              icon.appendChild(iconLocation);

              //Title
              var title = document.createElement('div');
              title.className = 'sc_property_title';
              empty.appendChild(title);

              //Address1
              var address1 = document.createElement('div');
              address1.className = 'sc_property_title_address_1';
              title.appendChild(address1);
              address1.innerText = putChildData.name;

              //Address 2
              var address2 = document.createElement('div');
              address2.className = 'sc_property_title_address_2';
              title.appendChild(address2);
              address2.innerText = putChildData.address;

              //Price Box
              var priceBox = document.createElement('div');
              priceBox.className = 'property_price_box';
              info.appendChild(priceBox);

              //Price Unit
              var unitTag = document.createElement('span');
              unitTag.className = 'property_price_box_sign';
              priceBox.appendChild(unitTag);
              unitTag.innerText = "PKR";

              //Price Amount
              var amount = document.createElement('span');
              amount.className = 'property_price_box_price';
              priceBox.appendChild(amount);
              // Price in the Price Box (From Database)
              amount.innerText = putChildData.price;

              //Line
              var line = document.createElement('div');
              line.className = 'cL';
              empty.appendChild(address2);

              //Info List
              var infoList = document.createElement('div');
              infoList.className = 'sc_property_info_list';
              scProperty.appendChild(infoList);

              //Area
              var areaIcon = document.createElement('span');
              areaIcon.className = 'icon-building113';
              infoList.appendChild(areaIcon);
              areaIcon.innerText = putChildData.area;
}

function showRentlistings(saletype, sectionid){
  if (saletype == 'featured'){
      var query = firebase.database().ref('featured');
      query.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        var queryAgain = firebase.database().ref(childData);
        queryAgain.once("value")
        .then(function(snapshot) {
          var childData = snapshot.val();
          populateListings(saletype, childData, sectionid);
          });
      });
  });
}else{
    var i = 0;
    var query = firebase.database().ref(saletype);
    query.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        populateListings(saletype, childData, sectionid);

      });
  });
  }
}

//Modal Behaviuor
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function(){
  showRentlistings('onRent', 'listings_column');
  showRentlistings('featured', 'featured_listings_column');
}

var Observer = new MutationObserver(function(mutations) {
  document.querySelectorAll('.loader')[0].style.display = 'none';
});
Observer.observe(document.querySelector('#listings_column'), { childList: true });

var featuredObserver = new MutationObserver(function(mutations) {
  document.querySelectorAll('.loader')[1].style.display = 'none';
});
featuredObserver.observe(document.querySelector('#featured_listings_column'), { childList: true });
