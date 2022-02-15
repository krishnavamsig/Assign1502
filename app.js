$(document).ready(function () {
    
    // Validate Username
        $('#usercheck').hide();   
        let usernameError = true;
        $('#usernames').keyup(function () {
            validateUsername();
        });
         
        function validateUsername() {
          let usernameValue = $('#usernames').val();
          if (usernameValue.length == '') {
          $('#usercheck').show();
              usernameError = false;
              return false;
          }
          else if((usernameValue.length < 3)||
                  (usernameValue.length > 10)) {
              $('#usercheck').show();
              $('#usercheck').html
    ("**length of username must be between 3 and 10");
              usernameError = false;
              return false;
          }
          else {
              $('#usercheck').hide();
          }
        }

        // Validate Phoneno
        $('#phonecheck').hide();   
        let phonenoError = true;
        $('#phoneno').keyup(function () {
            validatephoneno();
        });
         
        function validatephoneno() {
          let PhonenoValue = $('#phoneno').val();
          if (PhonenoValue.length == '') {
          $('#phonecheck').show();
              phonenoError = false;
              return false;
          }
          else if((PhonenoValue.length < 10)||
                  (PhonenoValue.length > 10)) {
              $('#phonecheck').show();
              $('#phonecheck').html
    ("**length of phone must be 10");
              phonenoError = false;
              return false;
          }
          else {
              $('#phonecheck').hide();
          }
        }
    //Radio buttons Gender
        $(function () {
            $("#submitbtn").click(function () {
                //Set the Valid Flag to True if one RadioButton from the Group of RadioButtons is checked.
                var isValid = $("input[name=Gender]").is(":checked");
     
                //Display error message if no RadioButton is checked.
                $("#spnError")[0].style.display = isValid ? "none" : "block";
            });
        });

    //CheckBox Validations
    $(document).ready(function() {
        $('input[type="checkbox"]').click(function() {
            if($(this).prop("checked") == true) {
              alert("Checkbox is checked.");
            }
            else if($(this).prop("checked") == false) {
              alert("Checkbox is unchecked.");
            }
          });
      });;

    //Select Dropdown 
    $(function () {
        $("#submitbtn").click(function () {
            var Department = $("#Department");
            if (Department.val() == "") {
                alert("Please select a branch!");
                return false;
            }
            return true;
        });
    });

    // Submit button
        $('#submitbtn').click(function () {
            validateUsername();
            validatephoneno();
            if ((usernameError == true) &&
                (phonenoError == true)) {
                return true;
                document.getElementById("displayarea").innerHTML = document.getElementById("usernames").value; 
                document.getElementById("usernames").value = "";
            } else {
                return false;
            }
        });
    });

// Display elements
function display()
{
document.getElementById("displayarea").innerHTML = document.getElementById("usernames").value; 
document.getElementById("usernames").value = "";
document.getElementById("displayarea1").innerHTML = document.getElementById("phoneno").value; 
document.getElementById("phoneno").value = "";
document.getElementById("displayarea2").innerHTML = document.getElementById("Gender").value; 
document.getElementById("Gender").value = "";
document.getElementById("displayarea3").innerHTML = document.getElementById("checkbox").value; 
document.getElementById("checkbox").value = "";
document.getElementById("displayarea4").innerHTML = document.getElementById("Department").value; 
document.getElementById("Department").value = "";




}










