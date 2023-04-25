<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="new">
        <ion-title>{{rt('APP_TITLE')}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid style="height: 100%">
        <ion-row>
          <div class="ion-text-center ion-padding">
            {{rt('DESCRIPTION_SETUP')}}
          </div>
        </ion-row>
        <ion-row class="ion-align-items-center ion-justify-content-center">
          <ion-col
            size="12"
            size-xs="8"
            size-sm="6"
            size-md="2"
            size-lg="2"
            size-xl="2"
          >
            <ion-card class="card" color="success" @click="redirectToLogin('Arzyab')">
              <ion-grid>
                <ion-row>
                  <ion-col>
              <ion-card-header>
                <ion-card-title> راهور</ion-card-title>
                <ion-card-subtitle> ورود  </ion-card-subtitle>
              </ion-card-header>
              </ion-col>
              <ion-col>
              <ion-img src="/images/UserRoles/rahvar.jpg"></ion-img>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card>
          </ion-col>
          <ion-col
            size="12"
            size-xs="8"
            size-sm="6"
            size-md="2"
            size-lg="2"
            size-xl="2"
          >
            <ion-card class="card" color="new" @click="redirectToLogin('Eng')">
              <ion-grid>
                <ion-row>
                  <ion-col>
              <ion-card-header>
                <ion-card-title > ناظر</ion-card-title>
                <ion-card-subtitle> ورود  </ion-card-subtitle>
              </ion-card-header>
              </ion-col>
              <ion-col>
              <ion-img src="/images/UserRoles/monitoring.png"></ion-img>
                  </ion-col>
                  </ion-row>
                  </ion-grid>
            </ion-card>
          </ion-col>
          <ion-col
            size="12"
            size-xs="8"
            size-sm="6"
            size-md="2"
            size-lg="2"
            size-xl="2"
          >
            <ion-card class="card" color="new" @click="redirectToLogin('Citizen')">
              <ion-grid>
                <ion-row>
                  <ion-col>
              <ion-card-header>
                <ion-card-title> شهروند</ion-card-title>
                <ion-card-subtitle> ورود  </ion-card-subtitle>
              </ion-card-header>
            </ion-col>
            <ion-col>
              <ion-img src="/images/UserRoles/Citizen.jpg"></ion-img>
              </ion-col>
              </ion-row>
              </ion-grid>
            </ion-card>
          </ion-col>
          <ion-col
            size="12"
            size-xs="8"
            size-sm="6"
            size-md="2"
            size-lg="2"
            size-xl="2"
          >
            <ion-card
              fill="clear"
              class="card"
              color="new"
              @click="redirectToLogin('Company')"
            >
              <ion-grid >
                <ion-row >
                  <ion-col>
                    <ion-card-header>
                      <ion-card-title> شرکت خدماتی</ion-card-title>
                      <ion-card-subtitle> ورود  </ion-card-subtitle>
                    </ion-card-header>
                     
                  </ion-col>
                  <ion-col >
                    <ion-img src="/images/UserRoles/company.png"></ion-img>
                  </ion-col>
                </ion-row>
              </ion-grid>
             
            </ion-card>
          </ion-col>

          <!-- <v-col cols="auto">
                 <icon-card caption="شهروند" @click="redirectToLogin">
                 <v-img src="/images/UserRoles/company.jpg" width="64" />
               </icon-card>
               </v-col> -->
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import { showToast } from "@/utils";

import {
  IonCard,
  IonCardHeader,
  //IonCardContent,
  IonCol,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  // IonItem,
  // IonIcon,
  //IonList,
  // IonButton,
  IonRow,
  IonPage,
  IonContent,
  IonHeader,
  // IonToolbar,
  IonImg,
} from "@ionic/vue";
//import { FaUserSecret, LaUserSecretSolid } from "oh-vue-icons/icons";
// import iconCard from "@/components/iconCard.vue";

export default defineComponent({
  name: "Cartable_page",
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonCol,
    // IonToolbar,
    IonImg,
    //iconCard,
    //IonIcon,
    IonCard,
    IonCardHeader,
    //IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonGrid,
    // IonItem,
    //IonList,
    // IonButton,
    IonRow,
  },
  methods: {
     
    redirectToLogin(key:string) {
      
      switch (key) {
        case "Company":
        this.$router.push("/loginCP");
          break;
        case 'Arzyab':
        this.$router.push("/loginArzyab");
          break;
        case 'Eng':
        this.$router.push("/loginEng");
          break;
        default:
          this.$router.push("/Login");
          break;
      }
      
    },
  },
  setup() {
    return {
      // LaUserSecretSolid,
      // FaUserSecret,
    };
  },
});
</script>

<style scoped>
ion-card.ion-color .ion-inherit-color, ion-card-header.ion-color .ion-inherit-color {
  font-size: 15px;
    width: 98px;
    padding-right: 2px;
    /* height: 109px; */
    text-align: center;
    color: black
}

</style>
