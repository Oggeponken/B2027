
// Code for  checklist saving
for (let i = 1; i <= 10; i++){
    const task = document.getElementById("task" + i);
    const savedTask = localStorage.getItem("task" + i);
    if (task){

        task.addEventListener("change", function(){
            localStorage.setItem("task" + i,task.checked);
        });

        
        task.checked = savedTask === "true";

    }
}