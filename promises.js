new Promise((resolve , reject)=>{
    
})
//Promise {<pending>}

new Promise((resolve , reject)=>{
    resolve();
})
//Promise {<fulfilled>: undefined}

new Promise((resolve , reject)=>{
    reject();
})
//Promise {<rejected>: undefined}

const fake = (url) =>{
    return new Promise((resolve , reject)=>{
        const rand = Math.random();
        setTimeout(() => {
            if (rand<0.7) {
                resolve('fake data')
            }
            else{
                reject();
            }
        }, 1000);
    })
}

fake('safhsfuufu')
    .then( () =>{
        console.log('you got it');
    })
    .catch( () => {
        console.log('errror!');
    })