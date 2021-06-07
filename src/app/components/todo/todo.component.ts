import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { v4 as id } from 'uuid';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

		//input 
		todoInput:string;
		
	
		// Mock Data
		todoList: any [] = [
			{
				id: id().slice(0, 3),
				title: "eat",
				complete: false
			},
			{
				id: id().slice(0, 3),
				title: "drink",
				complete: false
			},
			{
				id: id().slice(0, 3),
				title: "Chow",
				complete: false
			},
			{
				id: id().slice(0, 3),
				title: "Sleep",
				complete: true
			},
			{
				id: id().slice(0, 3),
				title: "Listen to music",
				complete: false
			},
			{
				id: id().slice(0, 3),
				title: "Finish the food",
				complete: false
			},
			{
				id: id().slice(0, 3),
				title: "Excrete the food",
				complete: false
			}
		]
	
	constructor() { }
	
	ngOnInit(): void {}

	submit():void {

		let listItem:any ={
			id: id().slice(0, 3),
			title: this.todoInput,
			complete: true
		};

		this.todoList.push(listItem);
		
		this.todoInput ='';
	}
    
	//delete 
	deleteItem(itemIndex:number):void {
		this.todoList.splice(itemIndex,1);
	}

	// deleteItem(todo: any){
	// 	// console.log(todo);
	// 	this.todoList = this.todoList.filter(my_todo => my_todo.id !== todo.id)
	// }

	completedTask(todo:any){
		
		todo.complete = !todo.complete;
		console.log(todo);
	}

	
}
