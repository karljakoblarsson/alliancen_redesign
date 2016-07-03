/* Ugly script to cycle images during the design phase.
 * Had a lot more bug than I imagined this should have.
 * Probably stil has a few.
 *
 * And why don't document.onload work?
 */

var images = [];
for (var i = 1; i < 22; i++) {
  images.push("images/" + i + ".png");
}

cycleImage = function(e) {
  console.log(e.target.src);
  var no = e.target.src.match(/(\d?\d).png/)[1];
  no = parseInt(no);
  no = ((no) % 21 );
  console.log(images[no]);
  e.target.src = images[no];
};

window.onload = function() {
  console.log("cycle images");

  imgEls = document.querySelectorAll('img');

  for (i = 0; i < imgEls.length; i += 1) {
    if (imgEls[i].src.match(/(\d?\d).png/) !== null) {
      imgEls[i].onclick = cycleImage;
    }
  }

};
