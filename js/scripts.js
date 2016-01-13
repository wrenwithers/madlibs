$(document).ready(function(){
 $('#blanks form').submit(function(event){
   var person1Input = $("input#person1").val();
   var person2Input = $("input#person2").val();
   var animalInput = $("input#animal").val();
   var townInput = $("input#town").val();


   $("person1").text(person1Input);
   $("person2").text(person2Input);
   $("animal").text(animalInput);
   $("town").text(townInput);

   $("#story").show();

   event.preventDefault();
 });
 });
