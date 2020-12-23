import UI from './ui.js';




class App{
    constructor(){
        
        this.ui = new UI;
        this.listTask = document.querySelector('.list-group');
        this.form = document.querySelector('.form');
        this.taskInput = document.querySelector('.form-control');


    }
    loadpage(){
        this.ui.renderHtml(); 
        this.listTask.addEventListener('click', this.iconClick);
        this.form.addEventListener('submit', this.addTask)
    }

    addTask(e){
        e.preventDefault();
        let html = '';
        console.log(this.taskInput.value)
        html += `
                <li class="list-group-item d-flex justify-content-between">
                    <div class="align-items-center">
                    <i class="far fa-circle"></i>
                        <span class="ml-2">${this.input.value}</span> 
                    </div>
                    <div>
                        <i class="far fa-trash-alt"></i>
                    </div>
                </li>
            `;
            console.log(this.input)
             this.listTask.innerHTML = html;
     }

    iconClick(event){
        
        if(event.target.classList.contains('fa-trash-alt')){
            console.log(event.target.parentElement.parentElement)
            this.listTask.removeChild(delTask)
        }

        if(event.target.classList.contains('fa-circle')){
            event.target.classList.toggle('fa-check-circle')
            event.target.classList.remove('fa-circle')
        }else{
            event.target.classList.toggle('fa-circle')
            event.target.classList.remove('fa-check-circle')
        }
    }

}

const app = new App();
app.loadpage();

export default App;