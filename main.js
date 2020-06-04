const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

//-----------------------------------------------------------------------------------------------
//local storage::??

if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
console.log(todosEX)
var todos = JSON.parse(todosEX);
console.log(todos)
console.log(window.localStorage.length)

//------------------------------------------------------------------------------------------------
class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){

        //creates a new div element and gives it a class item
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');


        //the input space:: creates a new input element and gives it some properties
    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name.toUpperCase();
        input.classList.add('item_input');
        
        //edit button:: creates a new button element adds a class edit and some properties
        //an edit function is run on click
    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
        edit.addEventListener('click', () => this.edit(input, name));
        
        //remove button:: creates a new button adds a class remove and some properties
        //a remove function is called on click
    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "DELETE";
        remove.addEventListener('click', () => this.remove(itemBox, name));
/*-----------------------------------------------------------------------------------------------------------------*/
        //time picker feature


        var timePick =document.createElement('button')
        timePick.classList.add('timePick');
        timePick.innerHTML="Remaining time";


      
/*------------------------------------------------------------------------------------------------------------------- */
        //the timer feature::
        var timer = document.createElement('meter')
        timer.classList.add('timer');
        var date1= new Date("2020-06-04")
        var date2 = new Date("2020-06-05"); 
        var Difference_In_Time = date2.getTime() - date1.getTime(); 
        var differenceinHours = Difference_In_Time / 3600000
        var fullDuration = differenceinHours;
console.log(fullDuration);var timeRightNow = new Date();var remainingTimeMilliseconds = (date2- timeRightNow);var remainingTimeInHours = Math.floor(remainingTimeMilliseconds /(3600000));
console.log(remainingTimeInHours);var valuePercent = (remainingTimeInHours/fullDuration)*100;

        timer.max = 100
        timer.value = valuePercent;
        timer.low = 20;
        timer.high = 70;

        if(remainingTimeInHours<=0){
            timePick.innerHTML="EXPIRED";

        }


 
        //allows list to appear on the screen
        //appendChild:: ??
    	container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);
        itemBox.appendChild(timePick);


        itemBox.appendChild(timer)

    }


    //indexOf::??
    // = !   ::??
    //splice ::??
    edit(input, name){
        if(input.disabled == true){
           input.disabled =!input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
        var indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
    var index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}


//----------------------------------------------------------------------------------------------------------------


//addEventListener::??
//window.addEventListener
add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})



function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}

//-----------------------------------------------------------------------------------------------

//creates a new item everytime what happens::?
//creates a new item for every object stored in the local storage:: !!

for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


//new item("");