//lesson 11
//object 
const club = {
    //info 
    name: "Tech Wiz",
    meetingRm: 240,
    numOfMembers: 15,
    budget: 134.5, 
    acceptingMembers: true,

    //methods
    showName() {
        console.log(this.name);
    },
    updateMembers(value) {
        this.numOfMembers = value;   
    },
};

console.log(club); //this logs every info to console
console.log(club.name);

club.theme = "dark"; //adding to info
console.log(club.theme);

console.log(club);

club.executives = ["Jack", "Lily", "Ian", "Rose"];
console.log(club);

club.showName();
club.updateMembers(7);
console.log(club.numOfMembers);
