var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("date-feild").innerHTML = months[d.getMonth()]+' '+d.getDay()+ ' '+ d.getFullYear();
var btn=document.getElementById("submit");
var UlE1=document.getElementById("taskresult");
var task=[];
function Task(usertask,date)
{
    this.usertask=usertask;
    this.date=date;
    task.push(this);
}


btn.addEventListener("click",function(event){
event.preventDefault();
    var taskfeild = document.getElementById('task-feild').value;
    var date = document.getElementById('date').value;
     new Task(taskfeild , date); 
    savetask();
    addToHTML();
  
})
function addToHTML() {
    for(var i = 0; i < task.length; i++) {
      var taskresult = document.getElementById('#taskresult');
      var LiE1=document.createElement("li");
      taskresult.appendChild(LiE1);
    var deletebutton =document.createElement("a");

    taskresult.appendChild(deletebutton);

    deletebutton.addEventListener("click",function(){
        removeitem();
    })
      taskresult.textContent=task.taskfeild;

      deletebutton.addEventListener("click",function(){
removeitem();
      });
    }
  }
function savetask()
{
    var task=JSON.stringify(task);
    var task=localStorage.setItem('task',task);
}
function loadTask()
{
    var task=localStorage.getItem("task");
    JSON.parse(task);

}
function removeitem()
{
    localStorage.removeItem("task");
}