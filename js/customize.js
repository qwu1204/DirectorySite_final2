// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});




   // $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
   // $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
   var str1= '';
   var str2= '';
   var str3 = '';
   var img, title, features,oldprice,newprice,link,id;
  function additem(img,title,features,oldprice,newprice,link, date){
      str1 =  "<div class='item  col-xs-4 col-lg-4 grid-group-item list-group-item'><div class='thumbnail'><img class='group list-group-image' src='";
      str1 = str1 + img;
      str1 = str1 + "' /><div class='caption'><h4 class='group inner list-group-item-heading'> ";
      str1 = str1 + title;
      str1 = str1 + "</h4><br><p class='group inner list-group-item-text'>";
      str1 = str1 + features;
      str1 = str1 + "</p><div class='row'><div class='col-xs-8 col-md-4'><p class='lead'><strike>";
      str1 = str1 + oldprice + "</strike>" + newprice;
      str1 = str1 + "</p></div><div class='col-xs-8 col-md-4'><a class='btn btn-success' href='";
      str1 = str1 + "#" + id + "' rel = 'modal:open'>View More</a></div><br></div></div>";
      str1 = str1 + "<div class = 'row'><p class = 'expiration'> Expires in " + date + " days. </p>"; 
      str1 = str1 + "</div></div></div>";
      console.log(str1);
  }

  function createmodel(id,link,title,features,img){
    str2 = "<div id= '" + id + "' style='display:none;'>"; 
    str2 = str2 + " <h3><a href = '" + link + "'>" + title + "</a></h3>";
    str2 = str2 + "<p>" + features + "</p>";
    str2 = str2 + "<h4><strong><strike>" + oldprice + "</strike>" + newprice + "</strong></h4>";
    str2 = str2 + "<img src='" + img + "'> </div>"
  }

  function addhotitem(img,link,title,oldprice,newprice ){
    str3 = "<div class='item  col-xs-4 col-lg-4 grid-group-item list-group-item'><div class='thumbnail'><img class='group list-group-image' src='";
    str3 = str3 + img;
    str3 = str3 + "' /><div class='caption'><a href = '" + link + "'><h4 class='group inner list-group-item-heading'>";
    str3 = str3 + title + "</h4></a><div class='row'><div class='col-xs-12 col-md-12'><p class='lead'><strike>";
    str3 = str3 + oldprice + "</strike>" + newprice + "</p></div></div></div></div></div>";

  }




  img = "images/001.jpg";
  title = "Dell Inspiron 15 i5555-2866SLV Signature Edition Laptop";
  features = "Super Hot! Dell offers Up to $500 off on Select Dell Alienware Gaming System & More Computer and Tablet hot deals";
  oldprice = "$460";
  newprice = "$399";
  link = "http://www.microsoftstore.com/store/msusa/en_US/pdp/Dell-XPS-15-9550-Signature-Edition-Laptop/productID.326871600";
  id = "img001";
  date = "10";
  additem(img,title,features,oldprice,newprice,link);

  createmodel(id,link,title,features,img);

  $('#laptops').append(str1);
  $(".allmodels").append(str2);


  img = "images/002.jpg";
  title = "ASUS Transformer Book Flip TP200SA-UHBF";
  features = "For 11.6 in HD WXGA touchscreen (1366 x 768) and 10-finger multi-touch support and 32GB eMMC, this laptop for this price is highly recommended";
  oldprice = "$360";
  newprice = "$200";
  link = "http://www.microsoftstore.com/store/msusa/en_US/pdp/Dell-XPS-13-9350-Signature-Edition-Laptop/productID.326871500";
  id = "img002";
  date = "9";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#laptops').append(str1);
  $(".allmodels").append(str2);


  img = "images/003.jpg";
  title = "HP Pavilion 13-s128nr x360 13.3-Inch Full-HD 2-in-1 Laptop (Core i5, 8GB RAM, 128GB SSD) with Windows 10";
  features = "For household needs this laptop is more than sufficient, but be careful not to use it for academic or business purposes.";
  oldprice = "$980";
  newprice = "$700";
  link = "http://www.microsoftstore.com/store/msusa/en_US/pdp/ASUS-Transformer-Book-Flip-TP200SA-UHBF-Signature-Edition-2-in-1-PC/productID.326870700";
  id = "img003";
  date = "9";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#laptops').append(str1);
  $(".allmodels").append(str2);

  img = "images/004.jpg";
  title = "Apple MacBook Pro MJLQ2LL/A 15.4-Inch Laptop with Retina Display";
  features = "Classic MacBook, gauranteed perfection, trustworth laptop.";
  oldprice = "$120";
  newprice = "$100";
  link = "http://www.amazon.com/Apple-MacBook-MJLQ2LL-15-4-Inch-Display/dp/B00XZGMBVC";
  id = "img004";
  date = "9";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
    addhotitem(img,link,title,oldprice,newprice);
  $('#hot').append(str3);
  $('#laptops').append(str1);
  $(".allmodels").append(str2);

  img = "images/005.jpg";
  title = "Apple MacBook Pro MJLQ2LL/A 15.4-Inch Laptop with Retina Display";
  features = "Would recommend anything from Apple, especially their MacBook Pro!";
  oldprice = "$870";
  newprice = "$600";
  link = "http://www.amazon.com/Apple-MacBook-MJLQ2LL-15-4-Inch-Display/dp/B00XZGMBVC";
  id = "img004";
  date = "9";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#laptops').append(str1);
  $(".allmodels").append(str2);

  img = "images/006.jpg";
  title = "Refurb HP Split x2 Touchscreen Laptop";
  features = "Although factory refurbished, the performance would not disappoint. Best choice for affordable, high-performance laptop.";
  oldprice = "$590";
  newprice = "$320";
  link = "http://www.amazon.com/HP-Split-13-g210dx-Blluetooth-Refurbished/dp/B00N26UO6E";
  id = "img006";
  date = "8";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#laptops').append(str1);
  $(".allmodels").append(str2);

  img = "images/007.jpg";
  title = "Lenovo IdeaPad G50 5.6' Touch Laptop Intel Core i5-5200U";
  features = "Their best series of all. Even beats the thinkPad. This laptop is for ";
  oldprice = "$590";
  newprice = "$300";
  link = "http://shop.lenovo.com/us/en/laptops/lenovo/g-series/g50/?cid=us:sem|se|google|All_Products|NX_Lenovo_All_Products_DSA&ef_id=Vq-NiAAABOeUF5nc:20160211051348:s";
  id = "img007";
  date = "8";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#laptops').append(str1);
  $(".allmodels").append(str2);

  img = "images/008.jpg";
  title = "New HP Zbook 14-G1 14' i7-4600U 750GB 2.1GHz W8Pro/W7Pro UltraBook Laptop PC";
  features = "What you get is not only a laptop, but also a desktop and a tablet; This wonderful 11.6' IPS HD screen supports 178-degree wide viewing angles with touchscreen display";
  oldprice = "$420";
  newprice = "$210";
  link = "http://www.ebay.com/itm/New-HP-Zbook-14-G1-14-Mobile-Workstation-i7-4600U-750GB-W8Pro-W7Pro-UltraBook-/231791552953";
  id = "img008";
  date = "8";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#laptops').append(str1);
  $(".allmodels").append(str2);

  img = "images/009.jpg";
  title = "HP 250 G4 15.6' Core i5-5200U Laptop";
  features = "The fantastic computational power makes it the go-to for customers who need professional performance.";
  oldprice = "$540";
  newprice = "$400";
  link = "http://www.newegg.com/Product/Product.aspx?Item=N82E16834261573";
  id = "img009";
  date = "8";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
    addhotitem(img,link,title,oldprice,newprice);
  $('#hot').append(str3);
  $('#laptops').append(str1);
  $(".allmodels").append(str2);

  img = "images/010.jpg";
  title = "Computer Loudspeaker System with Built-in Amplifier";
  features = "Equipped Wi-Fi 802.11ac. This is almost 3x faster than the typical 802.11n.";
  oldprice = "$87";
  newprice = "$40";
  link = "http://www.jbl.com/computer-speakers/JBL+JEMBE.html";
  id = "img010";
  date = "7";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#laptops').append(str1);
  $(".allmodels").append(str2);


  img = "images/015.jpg";
  title = "AT&T GoPhone Asus ZenFone 2E 4G LTE w/ 8GB Memory No-Contract Cell Phone";
  features = "64GB SSD caters to game players who also needs multi-tasking properties.";
  oldprice = "$240";
  newprice = "$100";
  link = "https://www.att.com/cellphones/asus/zenfone-2e-prepaid.html#sku=sku7660272";
  id = "img015";
  date = "9";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
    addhotitem(img,link,title,oldprice,newprice);
  $('#hot').append(str3);
  $('#cellphones').append(str1);
  $(".allmodels").append(str2);

  img = "images/016.jpg";
  title = "AT&T GoPhone ZTE Zmax 2 4G with 16GB Memory No-Contract Cell Phone - Black";
  features = "This unlocked phone will work on all US carriers including AT&T, Verizon, T-Mobile and Sprint, as well as most international carriers";
  oldprice = "$120";
  newprice = "$100";
  link = "http://www.bestbuy.com/site/at-t-gophone-zte-zmax-2-4g-with-16gb-memory-no-contract-cell-phone-black/4421800.p?id=1219745390060&skuId=4421800";
  id = "img016";
  date = "8";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#cellphones').append(str1);
  $(".allmodels").append(str2);




  img = "images/019.jpg";
  title = "Motorola 8GB Moto E 4G No-Contract Cell Phone (Sprint Prepaid)";
  features = "Tired of having the same phone with everybody else? Try an Android phone with the latest Android 6.0 Marshmallow";
  oldprice = "$230";
  newprice = "$100";
  link = "http://www.bestbuy.com/site/sprint-prepaid-motorola-moto-e-4g-with-8gb-memory-no-contract-cell-phone-black/2729581.p?id=1219563946201";
  id = "img019";
  date = "6";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
    addhotitem(img,link,title,oldprice,newprice);
  $('#hot').append(str3);
  $('#cellphones').append(str1);
  $(".allmodels").append(str2);

  img = "images/020.jpg";
  title = "Verizon LG Transpyre Prepaid Smartphone";
  features = "Pure Android Experience: Android 6.0 Marshmallow";
    oldprice = "$120";
  newprice = "$100";
  link = "http://www.techbargains.com/lg-transpyre-mobile-deals";
  id = "img020";
  date = "5";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#cellphones').append(str1);
  $(".allmodels").append(str2);

  img = "images/010.jpg";
  title = "Computer Loudspeaker System with Built-in Amplifier";
  features = "The most innovative technology that you will ever see on a loudspeaker: fingerprint sensor for enhanced and simplified security. Yes, every electronic is getting the fingerprint technology now!";
  oldprice = "$390";
  newprice = "$240";
  link = "http://www.jbl.com/computer-speakers/JBL+JEMBE.html";
  id = "img010";
  date = "9";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
    addhotitem(img,link,title,oldprice,newprice);
  $('#hot').append(str3);
  $('#other').append(str1);
  $(".allmodels").append(str2);

  img = "images/017.jpg";
  title = "Samsung 64GB or 64GB EVO Class 10 microSD Card with Adapter";
  features = "For a second generation microSD card the features are not bad, but they are certainly not the best available from the market.";
  oldprice = "$680";
  newprice = "$400";
  link = "http://www.amazon.com/Samsung-Class-Adapter-MB-MP64DA-AM/dp/B00IVPU7AO";
  id = "img017";
  date = "8";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#other').append(str1);
  $(".allmodels").append(str2);

  img = "images/018.jpg";
  title = "Motorola 8GB Moto E 4G No-Contract Cell Phone (Sprint Prepaid)";
  features = "Compared to other Sprint prepaid phones, this is the best for the price you pay. Another bonus is after the contract ends the phone will be unlocked.";
  oldprice = "$430";
  newprice = "$220";
  link = "http://www.bestbuy.com/site/at-t-gophone-microsoft-lumia-640-4g-lte-with-8gb-memory-no-contract-cell-phone-black/9231014.p?id=1219701750248&skuId=9231014";
  id = "img018";
  date = "7";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
    addhotitem(img,link,title,oldprice,newprice);
  $('#hot').append(str3);
  $('#other').append(str1);
  $(".allmodels").append(str2);

  img = "images/011.jpg";
  title = "Masione Power Socket With 5 Outlet 2 X USB Charging";
  features = "Twice as fast as regular USB charging. Great for traveling.";
  oldprice = "$32";
  newprice = "$25";
  link = "http://www.amazon.com/Masione-Power-Socket-Outlet-Charging/dp/B00SB7QB2K";
  id = "img011";
  date = "8";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#other').append(str1);
  $(".allmodels").append(str2);

  img = "images/012.jpg";
  title = "Harman Kardon HKTS 15 5.1-Channel Home Theater Speaker System";
  features = "Adapt to various Samsung phone modles such as N9000 N9002 N9005 N900A N900V N900T";
   oldprice = "$450";
  newprice = "$300";
  link = "http://www.amazon.com/Harman-Kardon-High-Performance-Discontinued-Manufacturer/dp/B000K818SA";
  id = "img012";
  date = "7";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
    addhotitem(img,link,title,oldprice,newprice);
  $('#hot').append(str3);
  $('#others').append(str1);
  $(".allmodels").append(str2);

  img = "images/013.jpg";
  title = "Texas Instruments TI-84 Plus CE Graphing Calculator";
  features = "Familiar Ti-84 but surprisingly slimmer and 30% lighter. Approved for most exams.";
  oldprice = "$120";
  newprice = "$100";
  link = "http://www.amazon.com/Texas-Instruments-TI-84-Graphing-Calculator/dp/B00TFYYWQA/ref=sr_1_1?ie=UTF8&qid=1455168889&sr=8-1&keywords=ti+84+plus+ce+calculator";
  id = "img013";
  date = "6";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#other').append(str1);
  $(".allmodels").append(str2);

  img = "images/014.jpg";
  title = "Transcend 128GB MLC SATA III 6Gb/s 2.5' Solid State Drive 370 ";
  features = "Bost your laptop performance on speed and capacity with maximum read/write speed of 570MB/s and 470MB/s.";
  oldprice = "$450";
  newprice = "$250";
  link = "http://www.amazon.com/Transcend-128GB-Solid-State-TS128GSSD370S/dp/B00VX82P2E%3Fpsc%3D1%26SubscriptionId%3D07PVPGV9KPJSRT8N9GG2%26tag%3Ddealmoon-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00VX82P2E";
  id = "img014";
  date = "5";
  additem(img,title,features,oldprice,newprice,link,date);
  createmodel(id,link,title,features,img);
  $('#other').append(str1);
  $(".allmodels").append(str2);

  
//console.log(str1);

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
});

$("a[href='#cellPhones']").click(function() {
  $("html, body").animate({ scrollTop: 1500 }, "fast");
  return false;
});

