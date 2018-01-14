function openBio(event, member) // Function when button is clicked
{
  var i, tabcontent, buttons; //Declare variables for later use
  tabcontent = document.getElementsByClassName("tabcontent"); //Create an array of elements under class "tabcontent"
  for (i = 0; i < tabcontent.length; i++)  //Iterate through array
  {tabcontent[i].style.display = "none";}  //Hide all elements.
  buttons = document.getElementsByClassName("teamButtons"); // Create array of elements under class "teamButtons"
  for (i = 0; i < buttons.length; i++) //Iterate through array
  {buttons[i].className = buttons[i].className.replace(" active", "");} //remove active classes so buttons go back to original colour
  event.currentTarget.className += " active";//Make selected member button active to change colour
  document.getElementById(member).style.display = "block"; //Display selected team member in block style
}