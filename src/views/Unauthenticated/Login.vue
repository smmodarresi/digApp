<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="new">
        <ion-title>{{rt('APP_TITLE')}}</ion-title>
        <!-- <database></database> -->
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid style="height: 100%">
        <ion-row style="height: 100%" class="ion-align-items-center ion-justify-content-center">
            <ion-col
            size="12"
            size-xs="12"
            size-sm="12"
            size-md="7"
            size-lg="7"
            size-xl="7"
          >
            <ion-card-header>
              <div
                style=" width: 100%;
                  text-align: center;
                  align-content: center;
                  align-self: center;
                "
              >
                <img src="/images/mashhad.png" style="max-width: 30%" />
              </div>
              <div class="ion-text-center ion-padding">
      
                <h2>{{rt('TITLE_DESCRIPTION')}}  </h2>
                <ion-row style="padding-top: inherit;">امکانات سامانه :</ion-row>
                <ion-row> -مکانیزه کردن روند نظارت و کنترل پروژه</ion-row>
                <ion-row> -ارائه گزارشهای جامع و کاربردی</ion-row>
                <ion-row> -کنترل بر عملکرد کاربران ذیربط</ion-row>
                <ion-row>-مدیریت برنامه های زمانی و کارکردی شرکت های اجرایی</ion-row>
              </div>
            </ion-card-header>
            <ion-row style="justify-content: space-around;">
              <ion-label  color="new">{{title}} </ion-label>
            </ion-row>
            
          </ion-col>

          <ion-col
            class="ion-padding"
            size="5"
            size-xs="12"
            size-sm="12"
            size-md="5"
            size-lg="5"
            size-xl="5"
          >

           
            <ion-card  >
              <ion-card-content>
                <form novalidate id="loginform" @submit.prevent="login">
                  <column :xs="12" :md="12" :lg="3">
                    <ion-item >
                      <ion-input 
                        color="new"
                        placeholder="شماره همراه خود را وارد نمایید."
                        id="phone"
                        v-model="phone"
                        :clear-input="true"
                        name="phone"
                         type="tel"
                         maxlength="11"
                        spellcheck="false"
                        autocapitalize="off"
                        required
                      ></ion-input>
                    </ion-item>

                    <ion-text id="phoneValidationText" color="danger">
                      <p
                        v-show="!phoneValid()"
                        v-text="errorPhone"
                        padding-left
                      ></p>
                    </ion-text>
                  </column>

                  <row :gutter="50">
                    <column :xs="12" :md="12" :lg="3">
                      <ion-item >
                        <ion-input
                        color="new"
                          placeholder="رمز عبور خود را وارد نمایید."
                          clearOnEdit="true"
                          id="password"
                          v-model="password"
                          name="password"
                          type="password"
                          spellcheck="false"
                          autocapitalize="off"
                          required
                        ></ion-input>
                      </ion-item>

                      <ion-text id="passwordValidationText" color="danger">
                        <p
                          v-show="!passwordValid()"
                          v-text="errorPassword"
                          padding-left
                        ></p>
                      </ion-text>
                    </column>

                    <ion-grid :fixed="true" style="width: 300px">
                        <ion-row class="ion-align-items-center ion-justify-content-center">
                          <ion-col>
                          <ion-button
                          @click="redirectToSetup"
                          shape="round"
                          color="new"
                          fill="outline"
                          expand="block"
                          >بازگشت
                          </ion-button>
                        </ion-col>
                        <ion-col >
                          <ion-button
                            id="loginBtn"
                            type="submit"
                            expand="block"
                            :disabled="disableSend"
                            shape="round"
                            color="new"
                            >ورود</ion-button>

                        </ion-col>
                         
                        </ion-row>
                        <ion-row>
                          <ion-col>
                          <ion-button
                            @click="redirectToForgot"
                            shape="round"
                            color="new"
                            fill="outline"
                            expand="block"
                            >رمز عبور را فراموش کرده اید؟</ion-button>
                        </ion-col>
                      </ion-row>
                      <ion-row class="ion-align-items-center ion-justify-content-center">
                        <ion-col>
                          <ion-button
                          @click="redirectToRegister"
                          shape="round"
                          color="new"
                          fill="outline"
                          expand="block"
                          >حساب کاربری ندارید؟ ثبت نام کن!
                          </ion-button>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </row>
                </form>
              </ion-card-content>
            </ion-card>
            
          </ion-col>
          
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-card{
  border-radius: 25px;
   box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}
ion-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
}
</style>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardContent,
  //IonCardTitle,
  IonLabel,
  IonInput,
  IonItem,
  // IonList,
  IonText,
  IonButton,
  IonCol,
  //IonRow,
  loadingController,
} from "@ionic/vue";

import { defineComponent } from "vue";
import { showToast } from "@/utils";
// import database from "@/helper/database.vue";
//import { login } from "@/service/AuthService";

export default defineComponent({
  name: "Login_app",
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardContent,
    // IonCardTitle,
     IonLabel,
    IonInput,
    IonItem,
    //IonList,
    IonText,
    IonButton,
    IonCol,
    //IonRow,
    // database
  },
  data() {
    return {
      phone: "",
      errorPhone: "",
      password: "",
      errorPassword: "",
      onceSubmitted: false,
      disableSend: false,
    };
  },
  computed: {
    
    title() {
      let trans : any = {
        Citizen: "ورود به حساب شهروندی",
        Eng: "ورود به حساب مهندسین ناظر",
        Company: "ورود به حساب شرکت خدماتی ",
        Arzyab: "ورود به حساب کارشناس راهور"
      };
      let mode : any = this.mode();
      return trans [mode];
    },
  },
  methods: {
    mode() : any { 
     return   this.$route.meta.mode;
   },
      redirectToSetup() {
      this.$router.push("/setup");
    },
    phoneValid() {
      var re = /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/gm;

      // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.phone == null || this.phone == "" || !this.phone.trim()) {
        if (this.onceSubmitted) {
          this.errorPhone = "شماره موبایل مورد نیاز است";
          return false;
        }
      } else if (!re.test(this.phone)) {
        this.errorPhone = "لطفا یک شماره موبایل معتبر وارد کنید";
        return false;
      }

      this.errorPhone = "";
      return true;
    },
    passwordValid() {
      if (this.password == null || this.password == "") {
        if (this.onceSubmitted) {
          this.errorPassword = "رمز عبور مورد نیاز است";
          return false;
        }
      }

      this.errorPassword = "";
      return true;
    },
    async showLoading() {
      const loading = await loadingController.create({
        message: "لطفا صبر کنید...",
      });

      await loading.present();
    },
     async login() {
    //   this.onceSubmitted = true;

    //   let phone = this.phone;
    //   let password = this.password;

      if (!this.phoneValid() || !this.passwordValid()) {
        return;
      }

       await this.showLoading();
       this.disableSend = true;
     //   let loginSuccessful = await login({ phone, password });
       this.disableSend = false;
     //  loginSuccessful = false;
       loadingController.dismiss();

      let loginSuccessful = true // بعد از ارتبات با بک اند باید برداشته شود
      if (loginSuccessful) {
        
        this.$router.push("/tabs/Cartable");
        showToast( "bottom" , "ورود با موفقیت");
        this.onceSubmitted = false;
        this.phone = "";
        this.password = "";
      } else {
        this.password = "";
        showToast( "top" ,"ورود ناموفق بود!");
      }
    
     },
    redirectToRegister() {
      this.$router.push("/register");
    },
    redirectToForgot() {
      this.$router.push("/forgotPassword");
    },
  },
});
</script>


