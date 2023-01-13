import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodos($id: String) {
    todos(where: { user_id: { _eq: $id } }) {
      id
      task
      completed
    }
  }
`;

export const GET_TODOS_BY_FREQUENCY = gql`
  query getTodosByFrequency($id: String, $time: String = "") {
    todos(
      where: { user_id: { _eq: $id }, _and: { frequency: { _eq: $time } } }
    ) {
      id
      task
      completed
      due_at
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo(
    $task: String!
    $id: String!
    $time: String!
    $dueDate: date
  ) {
    insert_todos_one(
      object: { task: $task, user_id: $id, frequency: $time, due_at: $dueDate }
    ) {
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
  mutation toggleTodoCompleted($id: Int!, $completed: Boolean!) {
    update_todos_by_pk(
      pk_columns: { id: $id }
      _set: { completed: $completed }
    ) {
      id
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation removeTodo($id: Int!) {
    delete_todos_by_pk(id: $id) {
      id
    }
  }
`;

export const GET_WATER = gql`
  query getWater($date: date, $id: String) {
    water(
      where: { created_at: { _eq: $date }, _and: { user_id: { _eq: $id } } }
    ) {
      ounces
    }
  }
`;

export const INSERT_WATER = gql`
  mutation insertWater($ounces: Int, $id: String) {
    insert_water(objects: { ounces: $ounces, user_id: $id }) {
      returning {
        ounces
        created_at
      }
    }
  }
`;

export const UPDATE_WATER = gql`
  mutation updateWater($id: String, $date: date, $ounces: Int) {
    update_water(
      _set: { ounces: $ounces }
      where: { user_id: { _eq: $id }, _and: { created_at: { _eq: $date } } }
    ) {
      returning {
        ounces
      }
    }
  }
`;
