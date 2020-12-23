import api from './api.js';

class UI{
    constructor(){
        this.doneClass = document.querySelector('.far')
        this.listTask = document.querySelector('.list-group')
    }
    getData() {
        const res = fetch(api.apiAdress).then((res) => res.json());
        return res;
      }

    renderHtml(title){
        this.getData().then((data) => {
        let html='';
    
        data.todolist.forEach(task => {
            const title = task.title;
             if(task.done) { 
                html += `
                <li class="list-group-item d-flex justify-content-between">
                    <div class="align-items-center">
                    <i class="far fa-check-circle"></i>
                        <span class="ml-2">${task.title}</span> 
                    </div>
                    <div>
                        <i class="far fa-trash-alt"></i>
                    </div>
                </li>
            `;

             } 
             else{
                html += `
                <li class="list-group-item d-flex justify-content-between">
                    <div class="align-items-center">
                    <i class="far fa-circle"></i>
                        <span class="ml-2">${task.title}</span> 
                    </div>
                    <div>
                        <i class="far fa-trash-alt"></i>
                    </div>
                </li>
            `;
             }
            
            
        });    
        
        this.listTask.innerHTML = html;
        
        });
        
    }
}


/* const ui = new UI;
ui.renderHtml();  */

export default UI;


