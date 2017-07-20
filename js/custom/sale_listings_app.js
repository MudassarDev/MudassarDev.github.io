// Initialize Firebase
var config = {
  apiKey: "AIzaSyAVYROy14AZ6SVFN3Lo0yx_-fkXfZ0KYtY",
  authDomain: "mudassar-developers.firebaseapp.com",
  databaseURL: "https://mudassar-developers.firebaseio.com",
  projectId: "mudassar-developers",
  storageBucket: "mudassar-developers.appspot.com",
  messagingSenderId: "860276395972"
};
firebase.initializeApp(config);

for(m = 0; m <12; m++){

//Create Listings Dynamically
// First div having classes column-1_3 column_padding_bottom
var column13 = document.createElement('div');
column13.className = 'column-1_3 column_padding_bottom';
document.getElementById('listings_column').appendChild(column13);

//Second div having class sc_property_item
var scProperty = document.createElement('div');
scProperty.className = 'sc_property_item';
var idNo = m+1;
var theID = "saleProp" + idNo;
scProperty.id = theID;
//Giv Id Here
column13.appendChild(scProperty);

//Third div having class sc_property_image
var scPropertyImage = document.createElement('div');
scPropertyImage.className = 'sc_property_image';
scProperty.appendChild(scPropertyImage);

//Link
var scPropertyLink = document.createElement('a');
scPropertyLink.href = 'property_detail.html';
scPropertyImage.appendChild(scPropertyLink);

//Price Box
var priceBox = document.createElement('div');
priceBox.className = 'property_price_box';
scPropertyLink.appendChild(priceBox);

//Price Unit
var unitTag = document.createElement('span');
unitTag.className = 'property_price_box_sign';
priceBox.appendChild(unitTag);
unitTag.innerText = "PKR";

//Price Amount
var amount = document.createElement('span');
amount.className = 'property_price_box_price';
priceBox.appendChild(amount);

//Image
var imagesrc = document.createElement('img');
imagesrc.src = 'images/image-12-1-770x460.jpg';
scPropertyLink.appendChild(imagesrc);

//Details
var info = document.createElement('div');
info.className = 'sc_property_info';
scProperty.appendChild(info);

//Description
var description = document.createElement('div');
description.className = 'sc_property_description';
info.appendChild(description);

//empty div
var empty = document.createElement('div');
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

//link
var address1Link = document.createElement('a');
address1Link.href = 'property_detail.html';
address1.appendChild(address1Link);

//Address 2
var address2 = document.createElement('div');
address2.className = 'sc_property_title_address_2';
title.appendChild(address2);

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

//Beds
var bedIcon = document.createElement('span');
bedIcon.className = 'icon-bed';
infoList.appendChild(bedIcon);

//Baths
var bathIcon = document.createElement('span');
bathIcon.className = 'icon-bath';
infoList.appendChild(bathIcon);

//WareHouse
var wareIcon = document.createElement('span');
wareIcon.className = 'icon-warehouse';
infoList.appendChild(wareIcon);

}

//Genereate Featured Listings Column Dynamically
for(n = 0; n <3; n++){

//Create Listings Dynamically
// First div having classes column-1_3 column_padding_bottom
var column13 = document.createElement('div');
column13.className = 'column-1_3 column_padding_bottom';
document.getElementById('featured_listings_column').appendChild(column13);

//Second div having class sc_property_item
var scProperty = document.createElement('div');
scProperty.className = 'sc_property_item';
var idNo = n+1;
var theID = "featuredProp" + idNo;
scProperty.id = theID;
//Giv Id Here
column13.appendChild(scProperty);

//Third div having class sc_property_image
var scPropertyImage = document.createElement('div');
scPropertyImage.className = 'sc_property_image';
scProperty.appendChild(scPropertyImage);

//Link
var scPropertyLink = document.createElement('a');
scPropertyLink.href = 'property_detail.html';
scPropertyImage.appendChild(scPropertyLink);

//Price Box
var priceBox = document.createElement('div');
priceBox.className = 'property_price_box';
scPropertyLink.appendChild(priceBox);

//Price Unit
var unitTag = document.createElement('span');
unitTag.className = 'property_price_box_sign';
priceBox.appendChild(unitTag);
unitTag.innerText = "PKR";

//Price Amount
var amount = document.createElement('span');
amount.className = 'property_price_box_price';
priceBox.appendChild(amount);

//Image
var imagesrc = document.createElement('img');
imagesrc.src = 'images/image-12-1-770x460.jpg';
scPropertyLink.appendChild(imagesrc);

//Details
var info = document.createElement('div');
info.className = 'sc_property_info';
scProperty.appendChild(info);

//Description
var description = document.createElement('div');
description.className = 'sc_property_description';
info.appendChild(description);

//empty div
var empty = document.createElement('div');
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

//link
var address1Link = document.createElement('a');
address1Link.href = 'property_detail.html';
address1.appendChild(address1Link);

//Address 2
var address2 = document.createElement('div');
address2.className = 'sc_property_title_address_2';
title.appendChild(address2);

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

//Beds
var bedIcon = document.createElement('span');
bedIcon.className = 'icon-bed';
infoList.appendChild(bedIcon);

//Baths
var bathIcon = document.createElement('span');
bathIcon.className = 'icon-bath';
infoList.appendChild(bathIcon);

//WareHouse
var wareIcon = document.createElement('span');
wareIcon.className = 'icon-warehouse';
infoList.appendChild(wareIcon);

}

//Property Display
// Listing Classes Array
var classes = ['property_price_box_price', 
    'sc_property_description',
    'sc_property_title_address_2',
    'icon-building113',
    'icon-bed',
    'icon-bath',
    'icon-warehouse'];

//Listings Code
// For Sale Property 1 Database Reference
    forSale1DB = firebase.database().ref("forSale/property1");

// For Sale Property 1 Setting Values
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 2 Database Reference
    forSale2DB = firebase.database().ref("forSale/property2");

// For Sale Property 2 Setting Values
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 3 Database Reference
    forSale3DB = firebase.database().ref("forSale/property3");

// For Sale Property 3 Setting Values
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

    // For Sale Property 4 Database Reference
    forSale4DB = firebase.database().ref("forSale/property4");

// For Sale Property 4 Setting Values
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 5 Database Reference
    forSale5DB = firebase.database().ref("forSale/property5");

// For Sale Property 5 Setting Values
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 6 Database Reference
    forSale6DB = firebase.database().ref("forSale/property6");

// For Sale Property 6 Setting Values
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 7 Database Reference
    forSale7DB = firebase.database().ref("forSale/property7");

// For Sale Property 1 Setting Values
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 1 Database Reference
    forSale8DB = firebase.database().ref("forSale/property8");

// For Sale Property 8 Setting Values
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 9 Database Reference
    forSale9DB = firebase.database().ref("forSale/property9");

// For Sale Property 1 Setting Values
    forSale9DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 10 Database Reference
    forSale10DB = firebase.database().ref("forSale/property10");

// For Sale Property 10 Setting Values
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 11 Database Reference
    forSale11DB = firebase.database().ref("forSale/property11");

// For Sale Property 11 Setting Values
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 12 Database Reference
    forSale12DB = firebase.database().ref("forSale/property12");

// For Sale Property 12 Setting Values
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    forSale12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);


// Featured Property 1 Database Reference
    featured1DB = firebase.database().ref("featured/property1");

// Featured Property 1 Setting Values
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// Featured Property 2 Database Reference
    featured2DB = firebase.database().ref("featured/property2");

// Featured Property 2 Setting Values
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// Featured Property 3 Database Reference
    featured3DB = firebase.database().ref("featured/property3");

// Featured Property 3 Setting Values
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);
