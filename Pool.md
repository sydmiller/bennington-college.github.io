
---
layout: page
title: Pool
permalink: /pool/
heading: 
---
<script type="text/javascript">
	$("#new_text").click(
		function() {
			var newText = Object.create(content.text);
			newText.define(prompt('enter your text'));
			newText.place();
		}
	);
  $("#new_ele").click(
    function() {
      var newEle = Object.create(content.ele);
      newEle.birth;
      newEle.follow();
    }
  );
</script>

<style>
.text {
	display:block;
    position: absolute;
    z-index: 2;
}
</style>

