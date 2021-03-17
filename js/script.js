$(document).ready(function() {
    $("#des").click(function() {
      $("#design").show();
      $("#des").hide();
    })});  
      $("#develop").click(function(){
      $("#dev").show();
      $("#develop").hide();
      });
    $("#product").click(function(){
      $("#manage").show();
      $("#product").hide();
    });
  $(document).ready(function () {
    $("#design").click(function () {
      $("#design").hide();
      $("#des").show();
    })});
    $("#dev").click(function () {
      $("#dev").hide();
      $("#develop").show();
    });
    $("#manage").click(function () {
      $("#manage").hide();
      $("#product").show();
    });
  $('#pic1').hover(function () {
    $(".gallery1",this).fadeToggle(1000);
  });
  $('#pic2').hover(function () {
    $(".gallery2", this).fadeToggle(1000);
  });
  $('#pic3').hover(function () {
    $(".gallery3", this).fadeToggle(1000);
  });
  $('#pic4').hover(function () {
    $(".gallery4", this).fadeToggle(1000);
  });
  $('#pic5').hover(function () {
    $(".gallery5", this).fadeToggle(1000);
  });
  $('#pic6').hover(function () {
    $(".gallery6", this).fadeToggle(1000);
  });
  $('#pic7').hover(function () {
    $(".gallery7", this).fadeToggle(1000);
  });
  $('#pic8').hover(function () {
    $(".gallery8", this).fadeToggle(1000);
  });
  function getName(){ 
  let name = document.getElementById("mce-FNAME");
  let email = document.getElementById("mce-EMAIL");
  let text = document.getElementById("mce-MMERGE2");
    let form = document.getElementById("mc-embedded-subscribe-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(name.value && email.value && text.value){
      alert(`${name.value} Thank you for reaching out to us`);
    }
  })
  };