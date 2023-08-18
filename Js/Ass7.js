
let slidewidth=  $(".slide").outerWidth(true)
      $(".slide").css({left:-slidewidth})
      $(window).scroll(function (){
        let heightsection=$("#Duration").offset().top;
        console.log(heightsection);
        let windowscrol=$(window).scrollTop();
        console.log(windowscrol);
       
        if(windowscrol>heightsection-250 ){
          $(".slidei").hide();
          $(".contentslide").hide();
          $(".slide").hide();
          $(".slidebar").hide();
        }
        else{ $(".slidei").show()
        $(".slidei").show();
        $(".contentslide").show();
        $(".slide").show();
        $(".slidebar").show();}
      })
      
         $(".slidei1").click(function(){
     console.log("hello")
    {  $(".slide").animate({left:-slidewidth},1000)
  }})
      
      $(".slideii").click(function(){ $(".slide").animate({left:"0px"},1000)
 
    
    })
    
    
    




 $("a").click(function(einfo){
    let ahref=einfo.target.getAttribute(`href`)
    console.log(ahref)
     let officetahref=$("ahref").offset();
     $("body").animate({scrollTop:officetahref},8000)



 })
 //Section Singer
$("p").hide();


 $(document).ready(function(){$(function(){
  $("p:first").css({display:"block"})
  $("h2").click(function(){
    $(this).next().slideToggle(500);
    
      $("p").not($(this).next()).slideUp(500)
  })
})})
//counetr
$(function(){
  
  "use strict";
  
  $(".count").countTo();







})
