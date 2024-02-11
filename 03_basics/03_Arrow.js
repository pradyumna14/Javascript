const user = {

username: "Pradyumna",
price: 999,

thisMessage: function(){
    console.log(`hello ${this.username}, welcome to the website`)

}
}

user.thisMessage()
user.username = "Sam";
user.thisMessage()

/*
function chai(){
    console.log(this.username);
    //..undefined,, this.username yesari only works in the Object@
}
chai()
*/
