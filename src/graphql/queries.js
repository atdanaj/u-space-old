import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodos($id: String) {
    todos(where: {user_id: {_eq: $id}}) {
    id
    task
    completed
  }
  }
`;

export const GET_TODOS_BY_FREQUENCY = gql`
query getTodosByFrequency($id: String, $time: String = "") {
  todos(where: {user_id: {_eq: $id}, _and: {frequency: {_eq: $time}}}) {
    id
    task
    completed
    due_at
  }
}
`;

export const ADD_TODO = gql`
mutation ($task: String!, $id: String!, $time: String!, $dueDate: date) {
  insert_todos_one(object: {task: $task, user_id: $id, frequency: $time, due_at: $dueDate}) {
    id
    task
    completed
    user_id
    frequency
    due_at
  }
}
`;

export const TOGGLE_COMPLETED = gql`
  mutation($id: Int!, $completed: Boolean!) {
    update_todos_by_pk(
      pk_columns: { id: $id }
      _set: { completed: $completed }
    ) {
      id
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation($id: Int!) {
    delete_todos_by_pk(id: $id) {
      id
    }
  }
`;