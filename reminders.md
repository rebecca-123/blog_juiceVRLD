---
layout: post
description: 
categories: [pbl]
permalink: /pbl/reminders
---

<style>
/* (A) ENTIRE PAGE */
#cal-wrap * { font-family: arial, sans-serif; }
.ninja { display: none !important; }
body {
			font-family: helvetica, arial, 'sans-serif';
			font-size: 62.5%;
      line-height:125%;
			background-color: #fff;
			color:#d6d6d6;
}

#container {width:40%; margin:0 auto; font-size:4em;}
input {
  background:transparent;
  border:none;
  border-bottom:1px solid #767676;
  width:100%;
  font-size:0.9em;
  margin-top:0.5em;
  padding:0.25em 0;
  box-sizing:content-box;
}

ul li {
  line-height:150%;
}

.error {
  color:red;
}

</style>

<html>
  <div id="container">
  <h1>myList</h1>
  <input type="text" placeholder="Add some items" name="listMaker" />
  <p class="charCount">character count: <em></em></p>
  <ul class="list"></ul>
</div>
    <script>
   $(function(){
  var maxChar = 39;
  $('.list').sortable();
  
  // List maker
  $(document).keypress(function(e){
    if(e.which == 13) {
      var toAdd = $('input[name=listMaker]').val();
      $('.list').prepend('<li>' +toAdd+ '</li>');
      $('input').val('');
      e.preventDefault();
    }
  });
  
  
  // Character counter
  $('.charCount em').append(maxChar);
  $('input').bind('keyup keydown', function(){
    var currentChar = $('input').val().length;
    var remainingChar = maxChar - currentChar;
    console.log(currentChar);
    $('.charCount em').text(remainingChar);
  
    if(currentChar > maxChar) {
      $('.charCount').addClass('error'); 
    }
  });   
});
</script>
