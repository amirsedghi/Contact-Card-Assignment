$(document).ready(function(){

	$(document).on('submit','form',function(){
		$('.rightC').append("<div desc='"+ $('#description').val()+"'><h3>"+$('#firstName').val() + " " +$('#lastName').val()+"</h3><p>Click for description!</p></div>");
		$('.rightC div').click(function(){
			$(this).html("<p>"+ $(this).attr('desc') +"</p>");
		});
		$('.rightC div').css("text-align","center");
		$('.rightC div').css("width","200px");
		$('.rightC div').css("height","100px");
		$('.rightC div').css("border","1px solid black");
		$('.rightC div').css("margin-bottom","20px");
		return false;
	});

	
	
})