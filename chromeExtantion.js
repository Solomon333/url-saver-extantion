
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEL = document.getElementById("ul-el")
let leadsStorage = JSON.parse(localStorage.getItem("myLeads"))



tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })  
})


if(leadsStorage){
    myLeads = leadsStorage
    render(myLeads)
}
function render(leads){
    let listItems = ""
    for(let i=0; i< leads.length; i++){
        // listItems += "<li><a target='_blank' href=
        //'"+ myLeads + "'>" + myLeads[i] + "</a></li>"       
        //two wayes to write the link ::
      
        listItems += ` 
        <li>
            <a target='_blank' href=' ${leads[i]}'>
            ${leads[i]}
            </a>
        
        </li> `
    }
    ulEL.innerHTML = listItems
    }
    

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = "";
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []

    render(myLeads)
})









// const li = document.createElement("li")
// li.textContent += myLeads[i]
// ulEL.append(li)



// const buyEl = document.getElementById("buy-el")

// buyEl.innerHTML = "<button BUY</button>" 

// function buy(){
//     buyEl.innerHTML += "<p>thaks for buying!!!</p>"
// }
