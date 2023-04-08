const datas = [
    {name:"Yash", profession :"software engineer"},
    {name:"Anuj", profession :"software engineer"}
];
function getdatas(msg){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
        })
        document.body.innerHTML=output;
    },1000);
    console.log(msg[0]);
    console.log(msg[1]);
}
//change the value of error to see different output
function createdata(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let error=false;
            if(!error){
                resolve(["sab kuch sahi hai","ha bilkul shai hai"]);
            }
            else{
                reject("kuch sahi nahi hai");
            }
        },2000);
    })
}
//getdatas is called during resolve(only one argument) and is defined in next line
createdata({name:"Ram",profession:"SDE"}).then(getdatas).catch((err)=>{console.log(err)});

