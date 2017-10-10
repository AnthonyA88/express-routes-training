console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');
});


$.ajax ({
	method: POST,
	url: localhost:3000,
	data: JSON, 
	success: onSuccess,
	error: err, 
})