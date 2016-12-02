
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
</script>

<style>
.text {
	display:block;
    position: absolute;
    z-index: 2;
}
</style>

