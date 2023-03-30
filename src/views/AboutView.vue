<template>
  <div class="toDo">
    <div class="title has-text-centered">ToDo List</div>
    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input
            v-model="newTodoContent"
            class="input"
            type="text"
            placeholder="Add ToDo"
          />
        </p>
        <p class="control">
          <button :disabled="!newTodoContent" class="button is-info">
            Add
          </button>
        </p>
      </div>
    </form>
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="card mb-5"
      :class="{ 'has-background-success-light': todo.done }"
    >
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div
              class="column"
              :class="{ 'has-text-success line-through': todo.done }"
            >
              {{ todo.content }}
            </div>
            <div class="column is-5 has-text-right">
              <button
                @click="toggleDone(todo.id)"
                class="button"
                :class="todo.done ? 'is-success' : 'is-light'"
              >
                &check;
              </button>
              <button
                @click="deleteTodo(todo.id)"
                class="button is-danger ml-2"
              >
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/main";
import { collection, getDocs } from "firebase/firestore";

/*
  todos
*/

const todos = ref([]);
/*
    get todos
*/
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "/Users/User1/ToDo"));
  let fbTodos = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    const todo = {
      id: doc.id,
      content: doc.data().content,
      done: doc.data().done,
    };
    fbTodos.push(todo);
  });
  todos.value = fbTodos;
});

/*
  add todos
*/
const newTodoContent = ref("");

const addTodo = () => {
  const newTodo = {
    id: uuidv4(),
    content: newTodoContent.value,
    done: false,
  };
  todos.value.unshift(newTodo);
  newTodoContent.value = "";
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

const toggleDone = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id);
  todos.value[index].done = !todos.value[index].done;
};
</script>

<style>
@import "../../node_modules/bulma/css/bulma.min.css";
.toDo {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
.line-through {
  text-decoration: line-through;
}
</style>
