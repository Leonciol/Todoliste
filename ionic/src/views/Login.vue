<template>
  <ion-page
    class="ion-text-center ion-justify-content-center"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
    "
  >
    <ion-header style="width: 50%">
      <ion-toolbar style="border-radius: 5px">
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" style="width: 40%">
      <ion-item class="ion-margin-top">
        <ion-input
          style="border-radius: 5px"
          class="ion-text-center"
          placeholder="Adresse mail"
          type="text"
          v-model="email"
        ></ion-input>
      </ion-item>
      <ion-item class="ion-margin-top ion-margin-bottom">
        <ion-input
          style="border-radius: 5px"
          class="ion-text-center"
          type="password"
          placeholder="Mot de Passe"
          v-model="password"
        ></ion-input>
      </ion-item>
      <div>
        <ion-button @click="login">valider</ion-button>
      </div>
      <a style="text-decoration: none; color: white" href="/register">
        Inscription</a
      >
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
} from "@ionic/vue";
import axios from "axios";

export default defineComponent({
  name: "LoginPage",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonItem,
  },
  setup() {
    let email = ref("");
    let password = ref("");

    const login = () => {
      // requete axios pour se connecter
      axios
        .post(
          // url de l'api
          `http://127.0.0.1:8000/api/auth/login`,
          {
            // valeur envoyé en bdd
            email: email.value,
            password: password.value,
          },
          {}
        )
        .then((response) => {
          // reponse de la bdd dans la console
          console.log(response.data);
          // condition si le token existe user peut se connecter
          if (response.data.access_token) {
            localStorage.setItem("token", response.data.access_token);
            window.location.href = "/todolist";
          }
        })
        // retourne une erreur dans la console si les informations rentrer sont fausses
        .catch((error) => {
          console.log(error.status);
          console.log(error.error); // error message as string
        });
    };

    return { login, email, password, localStorage };
  },
});
</script>
