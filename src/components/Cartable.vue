<template>

  <ion-accordion-group expand="inset">
        <ion-accordion   >
          <ion-item slot="header" color="new1">
            <ion-grid style="padding : 0px">
              <ion-row >
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6" ><ion-text>شماره درخواست: <ion-text color="new2">115</ion-text> |  کد حفاری : <ion-text color="new2"> 2-11--65</ion-text></ion-text></ion-col>
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6"><ion-text>فرایند :
                  <ion-text color="new2"> ثبت درخواست طرح توسعه</ion-text> | تاریخ مجوز : <ion-text color="new2">1401/05/02</ion-text> </ion-text></ion-col>
              </ion-row>
            </ion-grid>
            
          </ion-item>
          
          
          <div  slot="content" >
              <div v-for="count in counter" :key="count" >
              <ion-accordion-group expand="inset" >
                 <ion-accordion value="first" >
                   <ion-item slot="header" color="new2" >
                     <ion-grid style="padding :0px">
                       <ion-row>
                         <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6" ><ion-text>تاریخ نظارت : <ion-text color="new">1401/07/02</ion-text> | مرحله بازدید : <ion-text color="new">ثبت درخواست طرح توسعه</ion-text></ion-text></ion-col>
                         <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6"><ion-text>نمره نظارت : <ion-text color="new">25</ion-text> |امتیاز پروژه: <ion-text color="new">  100</ion-text> </ion-text></ion-col>
                       </ion-row>
                       <ion-row>
                        <ion-text> توضیحات : </ion-text>
                       </ion-row>
                     </ion-grid>
                   </ion-item>
                  
              
            
                   <div  slot="content">
                                   <ion-accordion-group expand="inset">
                                          <ion-accordion  value="first">
                                            <ion-item slot="header" color="light">
                                                <ion-label >  وضعیت ایمنی</ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                                <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                          <ion-accordion value="second">
                                            <ion-item slot="header" color="light">
                                              <ion-label >  مطابقت با مشخصات مندرج </ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                             <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                          <ion-accordion value="third">
                                            <ion-item slot="header" color="light">
                                              <ion-label >  مرمت</ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                               <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                          <ion-accordion value="four">
                                            <ion-item slot="header" color="light">
                                              <ion-label >  استقرار</ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                             <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                        </ion-accordion-group>
                                </div>
                                
                                 <ion-row style="margin: 10px; " slot="content">
                                     <ion-col style="text-align-last: center;" @click="showLoading"><ion-button color="new2">آپلود عکس</ion-button></ion-col>
                                 </ion-row>

                 </ion-accordion>
               </ion-accordion-group>   
             </div>   
          </div>
       
    
          
                     <ion-row style="margin: 10px; " slot="content">

                        <ion-col ><ion-button shape="round" @click="counter++" color="new1">نظارت جدید</ion-button></ion-col>
                        <ion-col style="text-align-last: end;"><ion-button shape="round" color="new1" @click="counter--">حذف نظارت</ion-button></ion-col>
                     </ion-row>
                     
        </ion-accordion>   
        <ion-accordion   >
          <ion-item slot="header" color="new1">
            <ion-grid style="padding : 0px">
              <ion-row >
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6" ><ion-text>شماره درخواست: <ion-text color="new2">115</ion-text> |  کد حفاری : <ion-text color="new2"> 2-11--65</ion-text></ion-text></ion-col>
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6"><ion-text>فرایند :
                  <ion-text color="new2"> ثبت درخواست طرح توسعه</ion-text> | تاریخ مجوز : <ion-text color="new2">1401/05/02</ion-text> </ion-text></ion-col>
              </ion-row>
            </ion-grid>
            
          </ion-item>
          
          
          <div  slot="content" >
              <div v-for="count in counter" :key="count" >
              <ion-accordion-group expand="inset" >
                 <ion-accordion value="first" >
                   <ion-item slot="header" color="new2" >
                     <ion-grid style="padding :0px">
                       <ion-row>
                         <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6" ><ion-text>تاریخ نظارت : <ion-text color="new">1401/07/02</ion-text> | مرحله بازدید : <ion-text color="new">ثبت درخواست طرح توسعه</ion-text></ion-text></ion-col>
                         <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6"><ion-text>نمره نظارت : <ion-text color="new">25</ion-text> |امتیاز پروژه: <ion-text color="new">  100</ion-text> </ion-text></ion-col>
                       </ion-row>
                       <ion-row>
                        <ion-text> توضیحات : </ion-text>
                       </ion-row>
                     </ion-grid>
                   </ion-item>
                  
              
            
                   <div  slot="content">
                                   <ion-accordion-group expand="inset">
                                          <ion-accordion  value="first">
                                            <ion-item slot="header" color="light">
                                                <ion-label >  وضعیت ایمنی</ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                                <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                          <ion-accordion value="second">
                                            <ion-item slot="header" color="light">
                                              <ion-label >  مطابقت با مشخصات مندرج </ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                             <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                          <ion-accordion value="third">
                                            <ion-item slot="header" color="light">
                                              <ion-label >  مرمت</ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                               <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                          <ion-accordion value="four">
                                            <ion-item slot="header" color="light">
                                              <ion-label >  استقرار</ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                             <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                        </ion-accordion-group>
                                </div>
                                
                                 <ion-row style="margin: 10px; " slot="content">
                                     <ion-col style="text-align-last: center;" @click="showLoading"><ion-button color="new2">آپلود عکس</ion-button></ion-col>
                                 </ion-row>

                 </ion-accordion>
               </ion-accordion-group>   
             </div>   
          </div>
       
    
          
                     <ion-row style="margin: 10px; " slot="content">

                        <ion-col ><ion-button shape="round" @click="counter++" color="new1">نظارت جدید</ion-button></ion-col>
                        <ion-col style="text-align-last: end;"><ion-button shape="round" color="new1" @click="counter--">حذف نظارت</ion-button></ion-col>
                     </ion-row>
                     
        </ion-accordion>   
        <ion-accordion   >
          <ion-item slot="header" color="new1">
            <ion-grid style="padding : 0px">
              <ion-row >
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6" ><ion-text>شماره درخواست: <ion-text color="new2">115</ion-text> |  کد حفاری : <ion-text color="new2"> 2-11--65</ion-text></ion-text></ion-col>
                <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6"><ion-text>فرایند :
                  <ion-text color="new2"> ثبت درخواست طرح توسعه</ion-text> | تاریخ مجوز : <ion-text color="new2">1401/05/02</ion-text> </ion-text></ion-col>
              </ion-row>
            </ion-grid>
            
          </ion-item>
          
          
          <div  slot="content" >
              <div v-for="count in counter" :key="count" >
              <ion-accordion-group expand="inset" >
                 <ion-accordion value="first" >
                   <ion-item slot="header" color="new2" >
                     <ion-grid style="padding :0px">
                       <ion-row>
                         <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6" ><ion-text>تاریخ نظارت : <ion-text color="new">1401/07/02</ion-text> | مرحله بازدید : <ion-text color="new">ثبت درخواست طرح توسعه</ion-text></ion-text></ion-col>
                         <ion-col style="padding :0px" size="14" size-md="6" size-lg="6" size-sm="6"><ion-text>نمره نظارت : <ion-text color="new">25</ion-text> |امتیاز پروژه: <ion-text color="new">  100</ion-text> </ion-text></ion-col>
                       </ion-row>
                       <ion-row>
                        <ion-text> توضیحات : </ion-text>
                       </ion-row>
                     </ion-grid>
                   </ion-item>
                  
              
            
                   <div  slot="content">
                                   <ion-accordion-group expand="inset">
                                          <ion-accordion  value="first">
                                            <ion-item slot="header" color="light">
                                                <ion-label >  وضعیت ایمنی</ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                                <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                          <ion-accordion value="second">
                                            <ion-item slot="header" color="light">
                                              <ion-label >  مطابقت با مشخصات مندرج </ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                             <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                          <ion-accordion value="third">
                                            <ion-item slot="header" color="light">
                                              <ion-label >  مرمت</ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                               <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                          <ion-accordion value="four">
                                            <ion-item slot="header" color="light">
                                              <ion-label >  استقرار</ion-label>
                                            </ion-item>
                                            <div  slot="content">
                                             <check-list></check-list>
                                            </div>
                                          </ion-accordion>
                                        </ion-accordion-group>
                                </div>
                                
                                 <ion-row style="margin: 10px; " slot="content">
                                     <ion-col style="text-align-last: center;" @click="showLoading"><ion-button color="new2">آپلود عکس</ion-button></ion-col>
                                 </ion-row>

                 </ion-accordion>
               </ion-accordion-group>   
             </div>   
          </div>
       
    
          
                     <ion-row style="margin: 10px; " slot="content">

                        <ion-col ><ion-button shape="round" @click="counter++" color="new1">نظارت جدید</ion-button></ion-col>
                        <ion-col style="text-align-last: end;"><ion-button shape="round" color="new1" @click="counter--">حذف نظارت</ion-button></ion-col>
                     </ion-row>
                     
        </ion-accordion>   
  </ion-accordion-group>   
 </template>
   
   
   <style scoped>
  

 ion-card {
    height: 100%;
    padding: 4px;
    margin: 0px;
  }
 
 
 ion-accordion-group {
  margin : 2%;
 }
  
  ion-text {
    font-size: 12px;
  }

  ion-loading.custom-loading {
    --background: #b2d7f5;
    --spinner-color: #b2d7f5;
    
    color: #b2d7f5;
  }

   </style>
   
   <script lang="ts">
   import { defineComponent } from "vue";
  
   import {
    IonAccordion,
    IonItem,
    IonGrid,
    IonRow,
    IonButton,
    IonCol,
    //IonLabel,
    IonAccordionGroup,
    loadingController ,
   } from "@ionic/vue";
   
  import CheckList from "@/components/CheckList.vue";


   export default defineComponent({
     name: "CarTableComponent",
     components: {
        IonAccordion,
        IonItem,
        IonGrid,
        IonRow,
        IonCol,
        IonButton,
        //IonLabel,
        IonAccordionGroup,
        CheckList
     },
      setup() {
      const showLoading = async () => {
        const loading = await loadingController.create({
          message: 'آپلود عکس بعد از 3 ثانیه...',
          duration: 3000
        });
        
        loading.present();
      }
      
      return { showLoading }
    },
     data() {
       return {
       counter: 1
       };
     },
     methods: {
      
   
     },
        
   });
   </script>
   
 