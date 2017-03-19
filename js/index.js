// JavaScript Document



$('.nan').find('li').mouseover(function()
{
	$('.nan').find('li').attr('class','');
	$('.na1').css('display','none');
	$(this).attr('class','active');
	$('.na1').eq($(this).index()).css('display','block');
	$('.nan').css('cursor','pointer');
});


$('.in1').find('li').mouseover(function(){
	$('.in1').find('li').attr('id','');
	$('.con5').css('display','none');
	$(this).attr('id','active');
	$('.con5').eq($(this).index()).css('display','block');
	$(this).css('cursor','pointer');
});





$('.con6_left').find('li').mouseover(function()
{
	$('.con6_left').find('li').attr('id','');
	$('.con6_right').css('display','none');
	$(this).attr('id','active');
	$('.con6_right').eq($(this).index()).css('display','block');
});
$('.con6_left').find('a').mouseover(function()
{
	$('.con6_left').find('a').attr('id','');
	$('.con6_right').css('display','none');
	$(this).attr('id','active');
	$('.con6_right').eq($(this).index()).css('display','block');
});