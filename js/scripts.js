//Buisness logic
function Account (firstName, initDeposit) {
  this.firstName = firstName;
  this.initDeposit = initDeposit;
}

Account.prototype.depositAdd = function(){
  initDeposit + depositInput
}


//User Interface
$(function() {
  $("#account-setup").submit(function(event) {
    event.preventDefault();

    var nameInput = $("#first-name").val();
    var initDeposit = parseInt($("#init-deposit").val());

    newAccount = new Account(nameInput, initDeposit);

    console.log(newAccount);
  });

  $("#operations").submit(function(event) {
    event.preventDefault();

    var depositInput = parseInt($("#deposit").val());
    var withdrawalInput = parseInt($("#withdrawal").val());



    console.log(depositInput, withdrawalInput);
  });





});
