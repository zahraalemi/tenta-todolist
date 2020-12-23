
import App from './app.js';
/*import UI from './ui.js'; */


class Data{
    
    static getData(){
        const request =  new XMLHttpRequest;
        request.open('GET', api.apiAdress , true);
        request.onload = function(){
            if(this.status == 200){
                let data =  this.responseText
                data = JSON.parse(data);
                console.log(data)
            

                data.todolist.forEach(task => {
                    const title = task.title;
                    const done = task.done;
                    console.log(title , done)
                    
                });      
                
                UI.renderHtml(title);          
                /* const app =new App(); */

                /* this.showList(title , done);  */
                
                /* for(let i = 0; i< data.todolist.length; i++){
                    const title = data.todolist[i].title;
                    const done = data.todolist[i].done;
                    console.log(title)
                    
                } */
                
                
                
            }
        }
    
        request.send()
    }

        
    
}




export default Data; 