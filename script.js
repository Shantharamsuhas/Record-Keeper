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
    // Retrieve the data from local storage
    const peopleList = JSON.parse(localStorage.getItem('pplList'));
  
    // Access the item to be updated
    const personToUpdate = pplList[index];
  
    // Create a form or modal to edit the person's data
    // ... (implementation of the editing interface)
  
    // Handle form submission or modal closure
    // ... (implementation of data update logic)
  
    // Update the pplList array
    pplList[index] = updatedPerson;
  
    // Save the updated data back to local storage
    localStorage.setItem('pplList', JSON.stringify(pplList));
  
    // Update the table display
    showData();
  }
  