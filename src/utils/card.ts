import { reactive,  toRaw } from "vue";


export const sampleText = "this ask will be don by development team this ask will be don by development team this askwill be don by development team this ask will be don by development team this ask will be don by development team this ask will be don by development team this ask will be don by development teamgh gfh fgh fgh fgh fgh            gffgh h fgh fgh fgh this ask will by fsdasd sdg gh gh fh ghll by fsdasd sdg gh gh fh ghll by fsdasd sdg gh gh fh gh"


export const topbr = ["js8-006", "In Progress", "Medium", "..."];
export const dotsValue = ["In Progress", "Pending", "Done", "Edit", "Delete"];

export const wordsLimit =(text:string, limit:number )=>{
if(limit<=0) return "";
if(text.length<=limit) return text;
if(text.length>limit) return text.slice(0,limit+1)+"..."

}



export const menueTack=(task:string)=>{
    console.log("lll", task)
    if(task=== 'In Progress') return "delete";
    if(task==='Pending') return "edit"
    if(task==='Done') return "edit"
    if(task==='Edit') return "edit"
    if(task==='Delete') return "edit"

}

export const columns = [
    { status: "In Progress" },
    { status: "Pending" },
    { status: "Done" }
  ];

  export const priorities=[
    {priority:"High",},
    {priority:"Medium",},
    {priority:"Low",}
  ]

  export const status=[
    {status:"In Progress",},
    {status:"Pending",},
    {status:"Done",}
  ]

  export const taskData = reactive({
    taskName:"",
    taskDesc:"",
    taskPriority:"",
    taskStatus:"",
    cardType:"",
})



export function onSubmit(){
console.log("llllllll",toRaw(taskData))
}