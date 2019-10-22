const salon={
    name:"Fashion pets",
    phone:"8675309",
    address:{
        street:"Hope Ave",
        number:"1313-5"
    },
    workingHours:{
        days:'Mon-Fri',
        open:'8:00 am',
        close:'5:00 pm'
    },
    pets:[],
    count:function(){
        // alert("you have registered " + this.pets.length);
    }
    
}

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

document.querySelector('.info').innerHTML =`<h1> Welcome to ${name} Salon </h1> <br> <p> Contact us ${phone}, ${street} ${number} <br> It is open from ${open} to ${close} </p>`;

/* document.querySelector('footer .info').innerHTML = `<p> Contact us ${phone}, ${street} ${number} <br> It is open from ${open} to ${close} </p>`;
var petc=0; */

class Pet {
    constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {
        this.hunger=10;
        this.happiness=5;
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;  
        this.id="pet"+ petc; 
        petc =+ 1; // incrementing 1x1 
    }
    status=function(){
        console.log("happiness:" + this.happiness + "hunger:"+this.hunger);
    }
    feed=function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding...");
    }
    ownerContact=function(){
        console.log("Owner Name: " +  this.ownerName + "\n" + "Contact phone:" + this.contactPhone);
    }
    
}

var txtName = document.getElementById('name');
var txtAge = document.getElementById('age');
var txtType = document.getElementById('type');
var txtGender = document.getElementById('gender');
var txtBreed = document.getElementById('breed');
var txtService = document.getElementById('service');
var txtOwnerName = document.getElementById('ownerName');
var txtContactPhone = document.getElementById('contactPhone');

function register(){
    const pet1 = new Pet(txtName.value, txtAge.value, txtType.value, txtGender.value, txtBreed.value, txtService.value, txtOwnerName.value, txtContactPhone.value);

    console.log(txtName.value);
    displayTable(pet1);

}
function clean(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtType.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwnerName.value="";
    txtContactPhone.value="";
}


function displayTable(aPet){
    var tBody = document.getElementById('listBody');
    var row = `<tr id = "${aPet.id}">
    <td>${aPet.name}</td>
    <td>${aPet.age}</td>
    <td>${aPet.type}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.service}</td>
    <td>${aPet.ownerName}</td>
    <td>${aPet.contactPhone}</td>
    <td> <button onclick='remove("${aPet.id}");'> Delete </button> </td>
</tr>;`  

tBody.innerHTML+=row;

console.log('add' + aPet);

}

function remove(petId){
    console.log('You want to delete ' + petId);
    var tr = document.getElementById(petId);
    var indexDelete=0;

    for( var i=0; i<salon.pets.length;i++)
    {
        var indexPets = salon.pets[i];

        if(indexPets.id==petId)
        {
           indexDelete=i;
        }
    }
    salon.pets.splice(index.Delete,1);
    tr.remove();
}
function search(){
    var searchString = document.getElementById('search').value;
    var theFoundPet;

    for( var j=0; j<salon.pets.length;j++)
    {
        var selectedPet = salon.pets[j];

        if(selectedPet.id==searchString)
        {
           theFoundPet=j;
           document.getElementById('pet'+theFoundPet).setAttribute('class','selected');
        }
    }
}


salon.count();




/* !!Commented Lines of Code!! */

/* const pet2 = new Pet("Ozzy",7,"dog","Male","boxer","shower","Samantha","987684");
const pet3 = new Pet("Janis",2,"dog","female","boxer","shower","Sabrina","0490554");

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3); */

//document.getElementById('petsInfo').innerHTML=`You have ${salon.pets.length} pets: ${salon.pets[0].name}, ${salon.pets[1].name}, ${salon.pets[2].name}`;

//pet1.status();
//pet1.feed();
//pet1.status();
//pet1.ownerContact();
//console.table(salon.pets);

/* function display(aPet){
    var list=document.getElementById('petList');
    var li = document.createElement('li');
    li.innerText=`${apet.name}  ${aPet.age}  ${aPet.type}  ${aPet.gender}  ${aPet.breed}  ${aPet.service}`;
    li.setAttribute('class',)
    list.appendChild(li);
} */