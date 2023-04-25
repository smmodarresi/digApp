<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>بازنشانی رمز عبور</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form novalidate @submit.prevent="resetPassword">
            <ion-list>
              <ion-item>
                <ion-label position="stacked" color="primary"
                  >پست الکترونیک</ion-label
                >
                <ion-input
                  v-model="email"
                  name="email"
                  type="email"
                  disabled
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked" color="primary"
                  >کلمه عبور</ion-label
                >
                <ion-input
                  v-model="password"
                  name="password"
                  type="password"
                  required
                ></ion-input>
              </ion-item>

              <ion-text color="danger">
                <p
                  v-show="!passwordValid()"
                  padding-left
                  v-text="errorPassword"
                ></p>
              </ion-text>

              <ion-item>
                <ion-label position="stacked" color="primary"
                  >رمز عبور را تایید کنید</ion-label
                >
                <ion-input
                  v-model="passwordconfirm"
                  name="passwordconfirm"
                  type="password"
                  required
                ></ion-input>
              </ion-item>

              <ion-text color="danger">
                <p
                  v-show="!passwordconfirmValid()"
                  padding-left
                  v-text="errorPasswordconfirm"
                ></p>
              </ion-text>

              <ion-item>
                <ion-label position="stacked" color="primary"
                  >کد امنیتی</ion-label
                >
                <ion-input
                  v-model="token"
                  name="token"
                  type="text"
                  spellcheck="false"
                  autocapitalize="off"
                  required
                ></ion-input>
              </ion-item>
              <ion-item>
                <p>صندوق ورودی خود را برای کد امنیتی خود بررسی کنید!</p>
              </ion-item>
            </ion-list>

            <ion-row responsive-sm>
              <ion-col>
                <ion-button type="submit" expand="block">
                  رمز عبور را به روز کنید
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row responsive-sm>
              <ion-col size="12" class="ion-text-center">
                <ion-label><a href="/login">بازگشت به صفحه ورود؟</a></ion-label>
              </ion-col>
            </ion-row>
          </form>
        </ion-card-content>
      </ion-card>
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
  IonLabel,
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

//import { resetPassword } from "@/service/AuthService";
//import { showToast } from "@/utils";

export default defineComponent({
  name: "ResetPassword",
  components: {
    IonContent,

    IonPage,

    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonLabel,
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
      token: "",
      email: "",
      password: "",
      passwordconfirm: "",
      errorPassword: "",
      errorPasswordconfirm: "",
      onceSubmitted: false,
    };
  },
  created() {
    this.email = decodeURIComponent(this.$route.query.email as string);
  },
  methods: {
    async showLoading() {
      const loading = await loadingController.create({
        message: "لطفا صبر کنید...",
      });

      await loading.present();
    },
    emailValid() {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.email == null || this.email == "") {
        if (this.onceSubmitted) {
          return false;
        }
      } else if (!re.test(this.email)) {
        return false;
      }

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
    // async resetPassword() {
    //   this.onceSubmitted = true;

    //   if (
    //     !this.emailValid() ||
    //     !this.passwordValid() ||
    //     !this.passwordconfirmValid()
    //   ) {
    //     return;
    //   }

    //   await this.showLoading();
    //   const resetSuccess = await resetPassword({
    //     email: this.email,
    //     password: this.password,
    //     password_confirmation: this.passwordconfirm,
    //     token: this.token,
    //   });
    //   loadingController.dismiss();

    //   if (resetSuccess) {
    //     this.$router.push("/login");
    //     showToast('top',"رمز عبور شما بازنشانی شده است!");
    //   } else {
    //     showToast('top',"رمز عبور بازنشانی نشد! لطفا دوباره تلاش کنید.");
    //   }
    // },
  },
});
</script>
