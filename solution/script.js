$(document).ready(function() {
  var index = 0;
  displayImageAt(index);

  $("#back").click(function() {
    if (index > 0) {
      index -= 1;
      displayImageAt(index);
    }
  });

  $("#next").click(function() {
    if (index < images.length - 1) {
      index += 1;
      displayImageAt(index);
    }
  });
});

var images = [
  ['https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/20836932_485963461767174_1666773247326158848_n.jpg', "50 Bowery"],
  ['https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/20184715_1565051943565722_6141347867962376192_n.jpg',"Dinosaur"],
  ['https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/20066831_1718487931525040_7534917524035469312_n.jpg',"Tonks visit"],
  ['https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/19955754_149567945599997_8486544996789387264_n.jpg', "West Side"]
]

function displayImageAt(index){
  $('img').attr('src', images[index][0]);
  $('#caption').html(images[index][1]);
}
