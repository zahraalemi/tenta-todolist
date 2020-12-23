

import ZZ from './data.js';


class UI{
    constructor(){
        this.list = document.querySelector('.list-group');
    }

    renderHtml(){
        const zz = new ZZ;
        let html='';
        
        html += `
            <li class="list-group-item d-flex justify-content-between">
                <div class="align-items-center">
                    <i class="far fa-check-circle"></i>
                    <span class="ml-2">tas</span> 
                </div>
                <div>
                    <i class="far fa-trash-alt"></i>
                </div>
            </li>
        `;

        this.list.innerHTML = html;
    }
}

const ui = new UI;
ui.renderHtml();


