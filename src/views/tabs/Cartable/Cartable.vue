<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar></ion-toolbar>
      </ion-header>
     
        <ion-card-header style="padding:0px">
          <ion-searchbar style="padding: 20px 0 0 0;" placeholder="جستجوی کد حفاری"></ion-searchbar>
        </ion-card-header>
        <ion-accordion-group expand="inset">
          <LoadedComponent
          height="50px"
          width = "100%"
          borderRadius = '10px' />
           <ion-accordion value="first">
          <ion-item slot="header"  color="new1"  >
            <ion-grid style="padding:0px; height:auto;">
              <ion-row style="margin:auto">
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6" ><ion-text>شماره درخواست: <ion-text color="new">115</ion-text> |  کد حفاری : <ion-text color="new">65-54-52</ion-text></ion-text></ion-col>
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6"><ion-text>فرایند : <ion-text color="new">ثبت درخواست طرح توسعه</ion-text> |  <ion-text>وظیفه : </ion-text >  <ion-text color="new">بازدید درخواست </ion-text></ion-text></ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>
            <div class="padding-according" slot="content">
                 <ion-card style="height:200px;margin:0px;">
                     <div class="ion-text-center" >
                      <table-component></table-component>
                     </div>
                    </ion-card>                 
            </div>
          </ion-accordion>
           <ion-accordion value="second">
          <ion-item slot="header"  color="new1"  >
            <ion-grid style="padding:0px; height:auto;">
              <ion-row style="margin:auto">
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6" ><ion-text>شماره درخواست: <ion-text color="new">115</ion-text> |  کد حفاری : <ion-text color="new">65-54-52</ion-text></ion-text></ion-col>
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6"><ion-text>فرایند : <ion-text color="new">ثبت درخواست طرح توسعه</ion-text> |  <ion-text>وظیفه : </ion-text >  <ion-text color="new">بازدید درخواست </ion-text></ion-text></ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>
            <div class="padding-according" slot="content">
                 <ion-card style="height:200px;margin:0px;">
                     <div class="ion-text-center" >
                      <table-component></table-component>
                     </div>
                    </ion-card>                 
            </div>
          </ion-accordion>
           <ion-accordion value="third">
          <ion-item slot="header"  color="new1"  >
            <ion-grid style="padding:0px; height:auto;">
              <ion-row style="margin:auto">
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6" ><ion-text>شماره درخواست: <ion-text color="new">115</ion-text> |  کد حفاری : <ion-text color="new">65-54-52</ion-text></ion-text></ion-col>
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6"><ion-text>فرایند : <ion-text color="new">ثبت درخواست طرح توسعه</ion-text> |  <ion-text>وظیفه : </ion-text >  <ion-text color="new">بازدید درخواست </ion-text></ion-text></ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>
            <div class="padding-according" slot="content">
                 <ion-card style="height:200px;margin:0px;">
                     <div class="ion-text-center" >
                      <table-component></table-component>
                     </div>
                    </ion-card>                 
            </div>
          </ion-accordion>
        </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<style scoped>

 
  .padding-according {
    padding: 5px;
  }
  .list .item.item-accordion {
  line-height: 38px;
  padding-top: 0;
  padding-bottom: 0;
  transition: 0.09s all linear;
}

 
  ion-text {
    font-size: 12px;
    color: new;
  }
.action-buttons{
  
  text-align: center;
}
 ion-accordion-group {
  margin : 2%;
 }
.container {
margin: 3mm;
font-weight: bold;
/*  padding-top: 2px; */
/* --background: #f9b801; */
width: 80%;
}
/* .card{
  border-radius: 25px;
} */
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent, IonHeader, IonToolbar,IonAccordionGroup,IonAccordion } from "@ionic/vue";
import TableComponent from "@/components/TableComponent.vue" ;
import LoadedComponent from '@/components/LoadedComponent.vue';
export default defineComponent({
  name: "MonitoringPage",
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonAccordionGroup,
    IonAccordion,
    TableComponent,
    LoadedComponent
  },
});
</script>