import React from 'react';
import TodoItemCreator from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoListFilter from './components/TodoListFilter';
import TodoListStats from './components/TodoListStats';
import './style.css';

export default function App() {
  return (
    <div>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />
      <TodoList />
    </div>
  );
}
