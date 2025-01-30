function proceso(callback){
    setTimeout(()=>{
        callback()
    },Math.random() * 2000);
}

proceso(() =>{
    console.log("algo que necesio hacer despues de pproceso");
});

