let one = {
  photo: "Images/1.jpg",
  title: "The Crown",
  description: "The girl is holding a black crown",
};

let two = {
  photo: "Images/2.jpg",
  title: "Elvis Presley",
  description: "Elvis Presley is singing on a birthday party",
};

let three = {
  photo: "Images/3.jpg",
  title: "Balloon",
  description: "The girl is holding a pink balloon",
};

let four = {
  photo: "Images/4.jpg",
  title: "Pancakes",
  description: "Somebody made delicious pancakes",
};

let five = {
  photo: "Images/5.jpg",
  title: "Birthday Pie",
  description: "THe firecrackers have just been lit on the pie",
};

let six = {
  photo: "Images/6.jpg",
  title: "Orchestra",
  description: "The orchestra is practising for the concert",
};

let currentPhoto = 0;
let imagesData = [one, two, three, four, five, six];

imagesData.forEach((element, index) => {
  
  $('#thumbnails').append('<div></div>');
  var wrapperChildren = $('#thumbnails').children();
for (let i = 0; i < wrapperChildren.length; i++) {
  $(wrapperChildren[i]).attr('data-number', i);
  $(wrapperChildren[i]).attr('class', 'thumbContainer');
};
var img = new Image();
  img.src = element.photo;
  img.setAttribute("class", "thumb");
  img.setAttribute("data-no", index);
  $('*[data-number= '+index+']').append(img);
  $('*[data-number= '+index+']').append('<p class="thumbHover">'+element.title+'</p>');
});



// imagesData.forEach((element, index) => {
//     var img = new Image();
//     img.src = element.photo;
//     img.setAttribute("class", "thumb");
//     img.setAttribute("data-number", index);
//     $("#thumbnails").append(img);
//   });

let loadPhoto = (photoNumber) => {
  $("#photo").attr("src", imagesData[photoNumber].photo);
  $("#photo-title").text(imagesData[photoNumber].title);
  $("#photo-description").text(imagesData[photoNumber].description);
  $(".thumb[data-no=" + photoNumber + "]").attr("id", "active");
};

loadPhoto(currentPhoto);


$("#forward").click(() => {
  if (currentPhoto < imagesData.length) {
      $('.thumb').attr('id', '')
    currentPhoto++;
    loadPhoto(currentPhoto);
  } else if (currentPhoto === imagesData.length) {
    $('.thumb').attr('id', '')
    currentPhoto = 0;
    loadPhoto(currentPhoto);
  }
});

$("#backwards").click(() => {
  if (currentPhoto > 0) {
    $('.thumb').attr('id', '')
    currentPhoto--;
    loadPhoto(currentPhoto);
  } else if (currentPhoto === 0) {
    $('.thumb').attr('id', '')
    currentPhoto = imagesData.length;
    loadPhoto(currentPhoto);
  }
});

$(".thumb").click(() => {
  $('.thumb').attr('id', '');
  var target = $(event.target).attr("data-no");
  loadPhoto(target);
  currentPhoto = target;
  // $("#photo").attr("src", imagesData[target].photo);
  // $("#photo-title").text(imagesData[target].title);
  // $("#photo-description").text(imagesData[target].description);
});

$('.thumb').append('<p>title</p>');



