<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <ion-grid style="height: 100%">
        <ion-row style="height: 100%" class="ion-align-items-center ion-justify-content-center">
          <ion-col 
            size="12"
            size-xs="12"
            size-sm="8"
            size-md="7"
            size-lg="6"
            size-xl="5">
                   <ion-card class="card">
                     <ion-card-header>
                       <ion-card-title>ثبت نام</ion-card-title>
                     </ion-card-header>
                     <ion-card-content>
                       <form novalidate @submit.prevent="register">
                         <ion-list>
                           <ion-item>
                             <ion-label color="danger">*
                             </ion-label>
                             <ion-input
                               v-model="name"
                               name="name"
                               type="text"
                               color="new"
                               spellcheck="true"
                               autocapitalize="off"
                               required
                               placeholder="نام و نام خانوادگی"
                             ></ion-input>
                           </ion-item>
                           <ion-text id="nameValidationText" color="danger">
                             <p v-show="!nameValid()" padding-left v-text="errorName"></p>
                           </ion-text>
             
                           <ion-item>
                             <ion-label color="danger">*</ion-label>
                             <ion-input color="new" type="tel" placeholder="کدملی"></ion-input>
                           </ion-item>
             
                           <ion-item>
                             <!-- <ion-label position="stacked" color="primary"> </ion-label> -->
                             <ion-input
                               placeholder="پست الکترونیک"
                               clearOnEdit="true"
                               v-model="email"
                               name="email"
                               type="email"
                               spellcheck="false"
                               autocapitalize="off"
                               required
                               color="new"
                             ></ion-input>
                           </ion-item>
             
                           <ion-text id="emailValidationText" color="danger">
                             <p v-show="!emailValid()" padding-left v-text="errorEmail"></p>
                           </ion-text>
             
                           <ion-item>
                             <ion-label color="danger">*</ion-label>
                             <ion-input
                               placeholder="کلمه عبور"
                               clearOnEdit="true"
                               v-model="password"
                               name="password"
                               type="password"
                               required
                               color="new"
                             ></ion-input>
                           </ion-item>
                           <ion-text id="passwordValidationText" color="danger">
                             <p
                               v-show="!passwordValid()"
                               padding-left
                               v-text="errorPassword"
                             ></p>
                           </ion-text>
             
                           <ion-item>
                             <ion-label color="danger">*</ion-label>
                             <ion-input
                               placeholder=" کلمه عبور را تایید کنید"
                               clearOnEdit="true"
                               v-model="passwordconfirm"
                               name="passwordconfirm"
                               type="password"
                               required
                               color="new"
                             ></ion-input>
                           </ion-item>
                           <div class="action-buttons" style="padding-top:5%">
                             <ion-button
                               color="new"
                               id="registerBtn"
                               type="submit"
                               expand="block"
                               shape="round"
                               >ثبت نام</ion-button
                             >
                           </div>
             
                           <ion-text id="passwordConfirmValidationText" color="danger">
                             <p
                               v-show="!passwordconfirmValid()"
                               padding-left
                               v-text="errorPasswordconfirm"
                             ></p>
                           </ion-text>
                         </ion-list>
             
                         <ion-row responsive-sm>
                           <ion-col size="12" class="ion-text-center">
                             <ion-button
                               color="new"
                               shape="round"
                               expand="block"
                               fill="outline"
                               @click="redirectToLogin"
                               >بازگشت به صفحه ورود؟</ion-button
                             >
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
 // IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonText,
  IonButton,
  IonCol,
  IonRow,
  loadingController,
} from "@ionic/vue";
import { defineComponent } from "vue";

//import { register } from "@/service/AuthService";
//import { showToast } from "@/utils";

export default defineComponent({
  name: "Register_app",
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
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
      name: "",
      email: "",
      password: "",
      passwordconfirm: "",
      errorName: "",
      errorEmail: "",
      errorPassword: "",
      errorPasswordconfirm: "",
      onceSubmitted: false,
    };
  },
  methods: {
    nameValid() {
      var re = /^([ا-ی ]){2,30}$/;

      if (this.onceSubmitted) {
        if (this.name == null || this.name == "" || !this.name.trim()) {
          this.errorName = "لطفا یک نام وارد کنید";
          return false;
        } else if (!re.test(this.name)) {
          this.errorName = "لطفا نامتان را به فارسی وارد کنید";
          return false;
        }
      }

      this.errorName = "";
      return true;
    },
    emailValid() {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.onceSubmitted) {
        if (this.email == null || this.email == "" || !this.email.trim()) {
          this.errorEmail = "ایمیل مورد نیاز است";
          return false;
        } else if (!re.test(this.email)) {
          this.errorEmail = "لطفا یک ایمیل معتبر وارد کنید";
          return false;
        }
      }

      this.errorEmail = "";
      return true;
    },
    passwordValid() {
      if (this.onceSubmitted) {
        if (this.password == null || this.password == "") {
          this.errorPassword = "رمز عبور مورد نیاز است";
          return false;
        } else if (this.password.length < 6) {
          this.errorPassword = "رمز عبور خیلی کوتاه است. (حداقل طول 6 عدد است)";
          return false;
        }
      }

      this.errorPassword = "";
      return true;
    },
    passwordconfirmValid() {
      if (this.onceSubmitted) {
        if (this.password != this.passwordconfirm) {
          this.errorPasswordconfirm = "تایید رمز عبور با رمز عبور مطابقت ندارد";
          return false;
        }
      }

      this.errorPasswordconfirm = "";
      return true;
    },
    async showLoading() {
      const loading = await loadingController.create({
        message: "لطفا صبر کنید...",
      });

      await loading.present();
    },
    // async register() {
    //   this.onceSubmitted = true;

    //   if (
    //     !this.nameValid() ||
    //     !this.emailValid() ||
    //     !this.passwordValid() ||
    //     !this.passwordconfirmValid()
    //   ) {
    //     return;
    //   }

    //   await this.showLoading();

    //   let name = this.name;
    //   let email = this.email;
    //   let password = this.password;
    //   let password_confirmation = this.passwordconfirm;

    //   let registerSuccessful = await register({
    //     name,
    //     email,
    //     password,
    //     password_confirmation,
    //   });

    //   loadingController.dismiss();
    //   if (registerSuccessful) {
    //     this.$router.push("/login");
    //     showToast('top',"ثبت نام موفقیت آمیز بود!");
    //     this.onceSubmitted = false;
    //     this.name = "";
    //     this.email = "";
    //     this.password = "";
    //     this.passwordconfirm = "";
    //   } else {
    //     showToast('top',"ثبت نام انجام نشد!");
    //   }
    // },
    redirectToLogin() {
      this.$router.push("/login");
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

.action-buttons {
  text-align: center;
}
.container {
  margin: 10% 20% 0 0;
  font-weight: bold;
  /*  padding-top: 2px; */
  /* --background: #f9b801; */
  width: 200px;
}
.card {
  border-radius: 25px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
}
</style>
