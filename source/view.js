import { createElement } from './helpers.js';

class View {
    constructor() {
        this.form = document.getElementById('todo-form');
        this.input = document.getElementById('add-input');    
        this.list = document.getElementById('todo-list'); 
        
        this.form.addEventListener('submit', this.handleAdd.bind(this));
    }  

    createElement(todo) {
        const checkbox = createElement('input', {type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : ''});
        const label = createElement('label',{className:'title'}, todo.title);
        const editInput = createElement('input', { type:'type', className: 'textfield' });
        const editButton = createElement('button', {className: 'edit' }, 'Изменить');
        const removeButton = createElement('button',{ className: 'remove'}, 'Удалить');
        const item = createElement('li', { className: `todo-item${todo.completed ? ' completed' : ''}`, 'data-id': todo.id }, 
            checkbox, label, editInput, editButton, removeButton );

            return this.addEventListener(item);
    }

    addEventListener() {
        const checkbox = listItem.querySelector('.checkbox');
        const editButton = listItem.querySelector('button.edit');
        const removeButton = listItem.querySelector('button.remove');

        checkbox.addEventListener('change', this.handleToggle.bind(this));
        editButton.addEventListener('click', this.handleEdit.bind(this));
        removeButton.addEventListener('click', this.handleRemove.bind(this));

        return item;
    }

    handleAdd(event) {
        event.preventDefault();
        if(!this.input.value) return alert('Необходимо ввести название задачи');
    }

    handleToggle({target}) {
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');
        const completed = target.completed;
    }

    handleEdit({ target }) {
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');
        const label = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('button.edit');
        const title = input.value;
        const isEditing = listItem.classList.contains('editing');

        if(isEditing) {
            
        } else{
            input.value = label.textContent;
            editButton.textContent = 'Сохранить';
            listItem.classItem.add('editing');

        }
    }

    handleRemove({ target }) {
        const listItem = target.parentNode;

    }

    findListItem(id) {
        return this.list.querySelector(`[data-id="${id}"]`);
    }

    addItem(todo) {
        const listItem = this.createElement(todo.title);
        this.input.value = '';
        this.list.appendChild(listItem);
    }

    toggleItem(todo) {
        const listItem = this.findListItem(todo.id);
        const checkbox = listItem.querySelector('.checkbox');
    
        checkbox.checked = todo.completed;

        if (checkbox.checked) {
            listItem.classList.add('completed');
        }
        else  {
            listItem.classList.remove('completed');
        }
    }

    editItem(todo) {
        const listItem = this.findListItem(todo.id);
        const label = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('button.edit');

        label.textContent = todo.title;
        editButton.textContent = 'Имзенить';
        listItem.classList.remove('editing');     
    }

    removeItem(){
        const listItem = this.findListItem(todo.id);
        this.list.removeChild() 
    }
}

export default View;