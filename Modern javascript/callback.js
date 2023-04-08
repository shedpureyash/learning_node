const datas = [
    {name:"Yash", profession :"software engineer"},
    {name:"Anuj", profession :"software engineer"}
];
function getdatas(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
        })
        document.body.innerHTML=output;
    },1000);
    
}
function createdata(newdata,callback){
    setTimeout(()=>{
        datas.push(newdata);
        callback();
    },2000);
}
createdata({name:"Ram",profession:"SDE"},getdatas);

