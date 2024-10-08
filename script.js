//Check input correctness
function validateForm(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if(name==""){
        alert("Name is required");
        return false;
    }

    if(address==""){
        alert("Name is required");
        return false;
    }

    if(email==""){
        alert("Name is required");
        return false;
    }

    if(age<0){
        alert("Age is negative");
        return false;
    }
    else if (age == "") {
        alert("Age is required");
        return false;
    }


    return true;

}

// It shows data in localStorage
function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList=[];
    }
    else{
        peopleList=JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";
    peopleList.forEach(function (element,index){
        html += "<tr>";
        html += "<td>"+element.name+"</td>";
        html += "<td>"+element.age+"</td>";
        html += "<td>"+element.address+"</td>";
        html += "<td>"+element.email+"</td>";
        html += `<td>
  <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
  <button onclick="updateData(${index})" class="btn btn-warning m-2">Edit</button>
</td></tr>`;

             });
        
       

    document.querySelector("#crudTable tbody").innerHTML = html;
}

//Load all data at start
document.onload = showData();

//func to add data

function AddData(){
    if(validateForm()== true){
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        var peopleList;

        if(localStorage.getItem("peopleList")==null){
            peopleList=[];
        }
        else{
            peopleList=JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name: name,
            age:age,
            address:address,
            email:email

        });

        localStorage.setItem("peopleList",JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";


    }
}

// function deleteData(${index}){
//     var peopleList;

//         if(localStorage.getItem("peopleList")==null){
//             peopleList=[];
//         }
//         else{
//             peopleList=JSON.parse(localStorage.getItem("peopleList"));
//         }
    
//     peopleList.splice(index,1);
//     localStorage.setItem("peopleList",JSON.stringify(peopleList));
//     showData();



// }

function deleteData(index) {
    // Get the pplList array from local storage
    var peopleList = JSON.parse(localStorage.getItem("peopleList"));
  
    // Remove the item at the specified index from the pplList array
    peopleList.splice(index, 1);
  
    // Save the updated pplList array back to local storage
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
  
    // Call the showData function to update the table
    showData();
  }
  


  function updateData(index) {

    document.getElementById("Submit").style.display="none";
    document.getElementById("Update").style.display="block";

    var peopleList;

    if(localStorage.getItem("peopleList")==null){
        peopleList=[];
    }
    else{
        peopleList=JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("address").value = peopleList[index].address;
    document.getElementById("email").value = peopleList[index].email;

    document.querySelector("#Update").onclick = function() {
        if(validateForm()== true){
            peopleList[index].name= document.getElementById("name").value;
            peopleList[index].age= document.getElementById("age").value;
            peopleList[index].address= document.getElementById("address").value;
            peopleList[index].email= document.getElementById("email").value;

            localStorage.setItem("peopleList",JSON.stringify(peopleList));

            showData();

            document.getElementById("name").value="";
            document.getElementById("age").value="";
            document.getElementById("address").value="";
            document.getElementById("email").value="";
            
            //Update hides and add shows on screen
            document.getElementById("Submit").style.display="none";
            document.getElementById("Update").style.display="block";



        }
    }

  }
  