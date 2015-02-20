$("legend").each(function() {

    var clip = new ZeroClipboard.Client();
    var thisObj = $(this);
    clip.glue(thisObj[0]);
    var txt = $(this).parent().find("textarea").text();
    clip.setText(txt);

    clip.addEventListener('complete', function(client, text) {
        $("#copied-notice").fadeIn(500, function(){
          $(this).delay(2000).fadeOut(500);
        });
    });

});

// duplicate code to preview
$( "textarea" ).each(function() {
  var text = $(this).text();
  var previewer = $('<div class="previewer"/>').append(text);
  $(this).after(previewer);
});
