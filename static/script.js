function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
            $uploadedImg.attr('style', 'background-image:url(' + e.target.result + ')');
    };
    reader.readAsDataURL(input.files[0]);
  }
}
var $form = $("#imageUploadForm"),
    $file = $("#file"),
    $uploadedImg = $("#uploadedImg"),
    $helpText = $("#helpText");
    // $download-file = $("#download-file")

$file.on("change", function() {
  readURL(this);
  $form.addClass('loading');
});
$uploadedImg.on('webkitAnimationEnd MSAnimationEnd oAnimationEnd animationend', function(){
  $form.addClass('loaded');
});
$helpText.on('webkitAnimationEnd MSAnimationEnd oAnimationEnd animationend', function(){
  setTimeout(function() {
    $file.val('');  $form.removeClass('loading').removeClass('loaded');
  }, 5000);
});
$