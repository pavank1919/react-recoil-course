import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../recoil/atoms.js';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
