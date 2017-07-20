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

//Listings Code
// For Sale Property 1 Database Reference
    onRent1DB = firebase.database().ref("onRent/property1");

// For Sale Property 1 Setting Values
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent1DB.once("value", snapshot => document.getElementById('saleProp1')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 2 Database Reference
    onRent2DB = firebase.database().ref("onRent/property2");

// For Sale Property 2 Setting Values
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent2DB.once("value", snapshot => document.getElementById('saleProp2')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 3 Database Reference
    onRent3DB = firebase.database().ref("onRent/property3");

// For Sale Property 3 Setting Values
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent3DB.once("value", snapshot => document.getElementById('saleProp3')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

    // For Sale Property 4 Database Reference
    onRent4DB = firebase.database().ref("onRent/property4");

// For Sale Property 4 Setting Values
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent4DB.once("value", snapshot => document.getElementById('saleProp4')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 5 Database Reference
    onRent5DB = firebase.database().ref("onRent/property5");

// For Sale Property 5 Setting Values
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent5DB.once("value", snapshot => document.getElementById('saleProp5')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 6 Database Reference
    onRent6DB = firebase.database().ref("onRent/property6");

// For Sale Property 6 Setting Values
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent6DB.once("value", snapshot => document.getElementById('saleProp6')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 7 Database Reference
    onRent7DB = firebase.database().ref("onRent/property7");

// For Sale Property 1 Setting Values
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent7DB.once("value", snapshot => document.getElementById('saleProp7')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 1 Database Reference
    onRent8DB = firebase.database().ref("onRent/property8");

// For Sale Property 8 Setting Values
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp8')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 9 Database Reference
    onRent9DB = firebase.database().ref("onRent/property9");

// For Sale Property 1 Setting Values
    onRent9DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent8DB.once("value", snapshot => document.getElementById('saleProp9')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 10 Database Reference
    onRent10DB = firebase.database().ref("onRent/property10");

// For Sale Property 10 Setting Values
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent10DB.once("value", snapshot => document.getElementById('saleProp10')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 11 Database Reference
    onRent11DB = firebase.database().ref("onRent/property11");

// For Sale Property 11 Setting Values
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent11DB.once("value", snapshot => document.getElementById('saleProp11')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// For Sale Property 12 Database Reference
    onRent12DB = firebase.database().ref("onRent/property12");

// For Sale Property 12 Setting Values
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    onRent12DB.once("value", snapshot => document.getElementById('saleProp12')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);