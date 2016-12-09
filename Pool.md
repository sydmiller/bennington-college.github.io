---
layout: page
title: Pool
permalink: /pool/
heading: 
---
<div id="clickme">
  Click here
</div>
<script type="text/javascript">
$( document ).ready(function() {
    $('#clickme').click(
  		function() {
  			var newText = Object.create(content.text);
  			newText.define(prompt('enter your text'));
  			newText.place();
  		}
  	);

    $(document).click(
      function() {
        var newEle = Object.create(content.ele);
        newEle.birth();
        newEle.follow();
      }
    );
});
</script>

  <style>
  .text {
  	display:block;
      position: absolute;
      z-index: 2;
  }
</style>

