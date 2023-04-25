<template>
  <ion-header id="app-shop-list">
    <ion-toolbar  color="new">

       <ion-grid>
                  <ion-row style="justify-content: start;">
                    <ion-col size = 45px>
                      <img src="/images/shahrdarimashhad.png"  style=" max-width: 35px ; " id="imgPlacement">
                    </ion-col>
                    <ion-col>
                      <div style="line-height: 20px">
                        <span style="font-weight: bold; font-size: large">سامانه حفاری</span>
                        <br />
                        <span style="font-size: small">شهرداری مشهد</span>
                      </div>
                   </ion-col>
                  </ion-row>
           
         </ion-grid>
         
       <!-- <ion-buttons slot="start">
        <ion-menu-button auto-hide="false"></ion-menu-button>
      </ion-buttons>   -->

      <ion-buttons slot="end">
        <ion-button @click="openSetting()">
         <ion-icon slot="icon-only" :icon="gridOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <!-- <ion-menu side="start" content-id="app-shop-list">
    <ion-header>
      <ion-toolbar color="success">
        <ion-title>لیست مغازه ها</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item
          button
          v-for="item in shopList"
          :key="item.shopName"
          @click="setActiveShop(item.shopName)"
        >
          <ion-icon :icon="storefront" side="start"></ion-icon>
          <ion-label class="ion-margin-start">{{ item.shopName }}</ion-label>
          <ion-badge v-if="item.active" color="success">فعال</ion-badge>
        </ion-item>
      </ion-list>
      <ion-button
        color="primary"
        expand="block"
        class="ion-padding"
        @click="newShop()"
      >
        <ion-icon :icon="addOutline"></ion-icon>
        مغازه جدید
      </ion-button>
    </ion-content>
  </ion-menu> -->

  <ion-menu side="end" content-id="app-shop-list" class="width:200px">
    <ion-header>
      <ion-toolbar color="new">
        <ion-title>تنظیمات</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
        <ion-item button>
          <ion-icon :icon="personSharp" side="start"></ion-icon>
          <ion-label class="ion-margin-start" @click="redirectToProfile">اطلاعات کاربر</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="moon" side="start"></ion-icon>
          <ion-label class="ion-margin-start">حالت شب</ion-label>
          <ion-toggle
            slot="end"
            v-model="darkMode"
            @click="modeChange()"
          ></ion-toggle>
        </ion-item>
        <ion-item button>
          <ion-icon :icon="powerSharp" side="start"></ion-icon>
          <ion-label class="ion-margin-start" @click="redirectToSetup">خروج</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>


<style scoped>

/* ion-content{
  --width: 200px !important;
}   */
  ion-menu::part(backdrop) {
    background-color: rgba(223, 68, 223, 0.5);
  }

  ion-menu::part(container) {
    border-radius: 0 20px 20px 0;

    box-shadow: 4px 0px 16px rgba(125, 37, 192, 0.18);
  }
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  settingsOutline,
  personSharp,
  moon,
  powerSharp,
  storefront,
  addOutline,
  alertCircleSharp,
  gridOutline,
  grid

} from "ionicons/icons";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
 // IonButtons,
 // IonButton,
 // IonMenuButton,
  IonMenu,
  menuController,
  toastController,
  alertController,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
  //IonBadge,
} from "@ionic/vue";

export default defineComponent({
  name: "MainHeader",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    //IonButtons,
    //IonButton,
    //IonMenuButton,
    IonMenu,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonToggle,
    //IonBadge,
  },
  data() {
    return {
    
    };
  },
  methods: {

      redirectToSetup() {
      this.$router.push("/setup");
    },
      redirectToProfile() {
      this.$router.push("/tabs/Profile");
      menuController.close("end");
    },

  },
  mounted() {
    this.setActiveShop();
  },
  setup() {
    let darkMode = false;
    const activeShopName = ref();
    let shopList = ref([
      {
        shopName: "سامانه حفاری مشهد",
        active: true,
      },
    ]);
    const setActiveShop = async (shopName = null) => {
      if (shopName) {
        shopList.value.forEach((item) => {
          item.active = false;
          if (item.shopName == shopName) item.active = true;
        });
      }
      shopList.value.forEach((item) => {
        if (item.active) activeShopName.value = item.shopName;
      });
    };
    const newShop = async () => {
      const alert = await alertController.create({
        header: "نام مغازه را وارد کنید.",
        buttons: [
          {
            text: "ثبت",
            handler: (data) => {
              if (data.shopName) {
                const shop: { shopName: string; active: boolean } = {
                  shopName: data.shopName,
                  active: false,
                };
                shopList.value.push(shop);
              } else {
                toast("نام مغازه نمی تواند خالی باشد.");
              }
            },
          },
        ],
        inputs: [
          {
            placeholder: "نام مغازه",
            name: "shopName",
          },
        ],
      });
      await alert.present();
    };
    const openSetting = () => {
      menuController.open("end");
    };
 
    const modeChange = () => {
      darkMode = !darkMode;
      document.body.classList.toggle("dark", darkMode);
    };
    const toast = async (msg: string) => {
      const toast = await toastController.create({
        mode: "ios",
        duration: 1500,
        icon: alertCircleSharp,
        message: msg,
      });
      await toast.present();
    };
    return {
      openSetting,
      modeChange,
      setActiveShop,
      newShop,

      darkMode,
      shopList,
      activeShopName,
      grid,
      gridOutline,
      settingsOutline,
      personSharp,
      moon,
      powerSharp,
      storefront,
      addOutline,
    };
  },
     
});
</script>
