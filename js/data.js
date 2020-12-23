import api from './api.js';

class ZZ{
    constructor(){
        
    }
    getData(){
        const request =  new XMLHttpRequest;
        request.open('GET', api.apiAdress , true);
        request.onload = function(){
            if(this.status == 200){
                let data =  this.responseText
                data = JSON.parse(data) 

                
                return data;
            }
        }
    
        request.send()
    }

    
}
const zz = new ZZ;
zz.getData()
console.log(zz.getData())

export default ZZ;
 






/* export default Data; */