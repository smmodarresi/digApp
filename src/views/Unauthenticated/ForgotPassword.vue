<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid style="height: 100%">
        <ion-row style="height: 100%" class="ion-align-items-center ion-justify-content-center">
          <ion-col 
            size="12"
            size-xs="10"
            size-sm="8"
            size-md="6"
            size-lg="5"
            size-xl="5">
                <ion-card class="card">
               <ion-card-header>
                 <ion-card-title>بازنشانی رمز عبور</ion-card-title>
               </ion-card-header>
               <ion-card-content>
                 <form novalidate @submit.prevent="resetPassword">
                   <ion-list>
                     <ion-item>
                       
                       
                       <ion-input
                         color="new"
                         placeholder="شماره همراه برای ارسال پیامک"
                         v-model="phone"
                         name="phone"
                         type="tel"
                         spellcheck="false"
                         autocapitalize="off"
                         required
                       ></ion-input>
                     </ion-item>
       
                     <ion-text color="danger">
                       <p v-show="!phoneValid()" v-text="errorPhone" padding-left></p>
                     </ion-text>
                   </ion-list>
       
                   <ion-row responsive-sm>
                     <ion-col>
                       <ion-button
                         color="new"
                         shape="round"
                         :disabled="sendDisabled"
                         type="submit"
                         expand="block">ارسال پیامک
                       </ion-button>
                     </ion-col>
                   </ion-row>
       
                   <ion-row responsive-sm>
                     <ion-col  class="ion-text-center">
                       <ion-button
                        color="new"
                         shape="round"
                         fill="outline"
                         expand="block"
                         @click="redirectToLogin"
                         >بازگشت به صفحه ورود؟</ion-button>
                     </ion-col>
                   </ion-row>
                 </form>
               </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  //IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonText,
  IonButton,
  IonCol,
  IonRow,
} from "@ionic/vue";
import { defineComponent } from "vue";

//import { forgotPassword } from "@/service/AuthService";
//import { showToast } from "@/utils";

export default defineComponent({
  name: "ForgotPassword",
  components: {
    IonContent,

    IonPage,

    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    //IonLabel,
    IonInput,
    IonItem,
    IonList,
    IonText,
    IonButton,
    IonCol,
    IonRow,
  },
  data() {
    return {
      phone: "",
      errorPhone: "",
      onceSubmitted: false,
      sendDisabled: false,
    };
  },
  methods: {
    phoneValid() {
      var re = /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/gm;

      if (this.phone == null || this.phone == "") {
        if (this.onceSubmitted) {
          this.errorPhone = "شماره همراه مورد نیاز است";
          return false;
        }
      } else if (!re.test(this.phone)) {
        this.errorPhone = "لطفا یک شماره همراه وارد کنید";
        return false;
      }

      this.errorPhone = "";
      return true;
    },
    // async resetPassword() {
    //   let phone = this.phone;

    //   this.onceSubmitted = true;
    //   if (!this.phoneValid()) {
    //     return;
    //   }

    //   this.sendDisabled = true;
    //   // const resetSuccess = await forgotPassword({
    //   //   phone: phone,
    //   // });
    //   this.sendDisabled = false;

    //   if (resetSuccess) {
    //     this.$router.push(
    //       "/resetPassword?phone=" + encodeURIComponent(this.email)
    //     );
    //   } else {
    //     showToast('top','ایمیل بازنشانی رمز عبور ارسال نشد!');
    //   }
    // },
    redirectToLogin() {
      this.$router.push("/login");
    },
  },
});
</script>

<style>
.container {
  margin: 2mm;
  font-weight: bold;
  /*  padding-top: 2px; */
  /* --background: #f9b801; */
  width: 80%;
}
.card {
  border-radius: 25px;
  /* margin: 30% 10% 10% 10%; */
 box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
}

code {
  white-space: pre-wrap;
}
</style>
