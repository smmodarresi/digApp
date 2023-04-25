<template>
  <ion-header id="app-shop-list">
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
        <ion-menu-button auto-hide="false"></ion-menu-button>
      </ion-buttons>

      <ion-title>{{ activeShopName }}</ion-title>

      <ion-buttons slot="end">
        <ion-button @click="openSetting()">
          <ion-icon slot="icon-only" :icon="settingsOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-menu side="start" content-id="app-shop-list">
    <ion-header>
      <ion-toolbar color="primary">
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
  </ion-menu>

  <ion-menu side="end" content-id="app-shop-list">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>تنظیمات</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
        <ion-item button>
          <ion-icon :icon="personSharp" side="start"></ion-icon>
          <ion-label class="ion-margin-start">اطلاعات کاربر</ion-label>
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
        <ion-item @click="logout" button>
          <ion-icon :icon="powerSharp" side="start"></ion-icon>
          <ion-label class="ion-margin-start" >خروج</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

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
} from "ionicons/icons";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonMenu,
  menuController,
  toastController,
  alertController,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
  IonBadge,
} from "@ionic/vue";



export default defineComponent({
  name: "MainHeader",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonMenu,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonToggle,
    IonBadge,
  },
  mounted() {
    this.setActiveShop();
  },
  setup() {
    let darkMode = false;
    const activeShopName = ref();
    let shopList = ref([
      {
        shopName: "مغازه تست",
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
