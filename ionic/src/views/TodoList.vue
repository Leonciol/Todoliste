<template>
  <ion-page
    class="ion-text-center ion-justify-content-center"
    style="display: flex; justify-content: center; align-items: center"
  >
    <ion-header>
      <ion-toolbar>
        <ion-title>TodoList</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content
      :fullscreen="true"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
      "
    >
      <ion-button @click="removeToken">Déconnexion</ion-button>

      <ion-item
        class="ion-margin-top ion-margin-bottom"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        "
      >
        <div>
          <ion-label position="floating">Produit</ion-label>
          <ion-input type="text" v-model="name"></ion-input>
        </div>
      </ion-item>
      <ion-button color="primary" @click="addTodo">Ajouter</ion-button>

      <div
        id="todo__list"
        style="align-items: center; justify-content: center; text-align: center"
      >
        <todo-list
          v-for="(todo, index) in todos"
          :key="index"
          :name="todo.name"
        />
      </div>
      <ion-button color="warning" @click="deleteTodo">Supprimer</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";
import TodoList from "@/components/TodoList";

export default defineComponent({
  name: "Tab3Page",
  components: {
    TodoList,
    IonInput,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonItem,
    IonLabel,
  },
  setup() {
    // vérification du token sinon redirection vers la page login
    if (localStorage.getItem("token") == null) {
      window.location.href = "/";
    } else {
      console.log("tout va bien");
    }
    let todos = ref([]);
    let name = ref("");
    // supprimer le token pour la déconnexion
    const removeToken = () => {
      localStorage.removeItem("token");
      window.location.href = "/";
    };
    // ajouter un nouveau produit de la todolist
    const addTodo = () => {
      todos.value.push({
        name: name.value,
      });
      console.log(todos);
      // reset la valeur de l'input
      name.value = "";
    };
    // supprimer tous les produits de la todolist
    const deleteTodo = () => {
      todos.value = [];
    };

    return { todos, name, addTodo, deleteTodo, removeToken, localStorage };
  },
});
</script>
