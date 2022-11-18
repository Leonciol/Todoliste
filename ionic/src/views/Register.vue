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
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" style="width: 40%">
      <ion-item class="ion-margin-top ion-width">
        <ion-input
          class="ion-text-center"
          placeholder="Nom"
          type="text"
          v-model="nom"
        ></ion-input>
      </ion-item>
      <ion-item class="ion-margin-top ion-width">
        <ion-input
          class="ion-text-center"
          placeholder="Prénom"
          type="text"
          v-model="prenom"
        ></ion-input>
      </ion-item>

      <ion-item class="ion-margin-top ion-width">
        <ion-input
          class="ion-text-center"
          placeholder="Adresse mail"
          type="text"
          v-model="email"
        ></ion-input>
      </ion-item>
      <ion-item class="ion-margin-top ion-width">
        <ion-input
          class="ion-text-center"
          type="password"
          placeholder="Mot de Passe"
          v-model="password"
        ></ion-input>
      </ion-item>
      <div
        style="display: flex; flex-direction: column; justify-content: center"
      >
        <div>
          <ion-button class="ion-margin-top ion-margin-bottom" @click="register"
            >valider</ion-button
          >
        </div>
        <a style="text-decoration: none; color: white" href="/">
          Se connecter</a
        >
      </div>
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
  name: "RegisterPage",
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
    let nom = ref("");
    let prenom = ref("");

    const register = () => {
      // requete axios pour s'inscrire
      axios
        .post(
          // url de l'api
          `http://127.0.0.1:8000/api/auth/register`,
          {
            // valeur a envoyer en bdd
            fistname: prenom.value,
            lastname: nom.value,
            email: email.value,
            password: password.value,
          },
          {}
        )
        // reponse de la bdd dans la console
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.status); // status de l'erreur
          console.log(error.error); // message d'erreur en string
        });
    };

    return { register, nom, prenom, email, password };
  },
});
</script>
