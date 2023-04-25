<template>
 <ion-card>
  <ion-grid style="padding:0px">
      <ion-row >
         <ion-col>
            <ion-button @click="presentAlert" color="light">نقشه مصوب </ion-button>
        </ion-col>
        <ion-col>
            <ion-button @click="presentAlert" color="light">درز انقطاع </ion-button>
        </ion-col>
        <ion-col>
            <ion-button @click="presentAlert" color="light">بنای موجود استحکام و تطابق با نقشه سازه  </ion-button>
        </ion-col>
        <ion-col>
            <ion-button @click="presentAlert" color="light">تطابق نوع سقف با نقشه </ion-button>
        </ion-col>
       </ion-row>
  </ion-grid>
 </ion-card>
 <ion-card style="height:auto;">
  <ion-slides pager="true" :options="slideOpts" style="    margin: -5px -5px 40px 0px;">
    <ion-slide>
     
               <ion-radio-group allow-empty-selection value="anchovies">
            <ion-list-header>
              <ion-label>تطابق نوع سقف با نقشه </ion-label>
            </ion-list-header>
            <ion-item>
              <ion-text>کاربرد ندارد</ion-text>
              <ion-radio slot="end" color="primary" value="beef"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-text>بله</ion-text>
              <ion-radio slot="end" color="secondary" value="anchovies"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-text>خیر</ion-text>
              <ion-radio slot="end" color="tertiary" value="sausage"></ion-radio>
            </ion-item>
          </ion-radio-group>
        
    </ion-slide>
    <ion-slide>
     
               <ion-radio-group allow-empty-selection value="anchovies">
            <ion-list-header>
              <ion-label>درز انقطاع </ion-label>
            </ion-list-header>
            <ion-item>
              <ion-text>کاربرد ندارد</ion-text>
              <ion-radio slot="end" color="primary" value="beef"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-text>بله</ion-text>
              <ion-radio slot="end" color="secondary" value="anchovies"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-text>خیر</ion-text>
              <ion-radio slot="end" color="tertiary" value="sausage"></ion-radio>
            </ion-item>
          </ion-radio-group>
       
    </ion-slide>
    <ion-slide>
      
               <ion-radio-group allow-empty-selection value="anchovies">
            <ion-list-header>
              <ion-label>نقشه مصوب</ion-label>
            </ion-list-header>
            <ion-item>
              <ion-text>کاربرد ندارد</ion-text>
              <ion-radio slot="end" color="primary" value="beef"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-text>بله</ion-text>
              <ion-radio slot="end" color="secondary" value="anchovies"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-text>خیر</ion-text>
              <ion-radio slot="end" color="tertiary" value="sausage"></ion-radio>
            </ion-item>
          </ion-radio-group>
         
    </ion-slide>
    <ion-slide>
     
               <ion-radio-group allow-empty-selection value="anchovies">
            <ion-list-header>
              <ion-label>بنای موجود استحکام وتطابق  با نقشه سازه </ion-label>
            </ion-list-header>
            <ion-item>
              <ion-text>کاربرد ندارد</ion-text>
              <ion-radio slot="end" color="primary" value="beef"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-text>بله</ion-text>
              <ion-radio slot="end" color="secondary" value="anchovies"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-text>خیر</ion-text>
              <ion-radio slot="end" color="tertiary" value="sausage"></ion-radio>
            </ion-item>
          </ion-radio-group>
      
    </ion-slide>
  </ion-slides>
</ion-card>
 <ion-card>
  <ion-grid style="padding:0px">
      <ion-row >
        <ion-col size="5">
            <ion-grid>
                <ion-row>
                    <div style="padding:5px">
                       
                    </div>
                </ion-row>
              </ion-grid>
        </ion-col>
        <ion-col size="7">
              <ion-grid style="    /* size: 0; */
    /* padding: 0px; */
    position: absolute;
    inline-size: -webkit-fill-available;
    /* inline-size: 161px;">
                <ion-row>
                  <ion-col style="margin-inline: -30%" siaze="6"><ion-text>کاربرد ندارد</ion-text></ion-col>
                  <ion-col size="3"><ion-text>بله</ion-text></ion-col>
                  <ion-col size="3"><ion-text>خیر</ion-text></ion-col>
                </ion-row>
              </ion-grid>
        </ion-col>
      </ion-row>
      <ion-row >
        <ion-col  size="7">
            <ion-grid>
                <ion-row>
                    <div style="padding:5px">
                        <ion-label>نقشه مصوب</ion-label>
                    </div>
                </ion-row>
              </ion-grid>
        </ion-col>
        <ion-col  style="margin-inline: -19px" size="5">
              <ion-grid style="    inline-size: 110%;">
                <ion-row style="margin: -3px;">
                  <ion-col ><ion-checkbox></ion-checkbox></ion-col>
                  <ion-col><ion-checkbox></ion-checkbox></ion-col>
                  <ion-col><ion-checkbox></ion-checkbox></ion-col>
                </ion-row>
              </ion-grid>
        </ion-col>
      </ion-row>
      <ion-row >
        <ion-col  size="7">
            <ion-grid>
                <ion-row>
                    <div style="padding:5px">
                        <ion-label>درز انقطاع </ion-label>
                    </div>
                </ion-row>
              </ion-grid>
        </ion-col>
        <ion-col  style="margin-inline: -19px" size="5">
              <ion-grid style="    inline-size: 110%;">
                <ion-row style="margin: -3px;">
                  <ion-col ><ion-checkbox></ion-checkbox></ion-col>
                  <ion-col><ion-checkbox></ion-checkbox></ion-col>
                  <ion-col><ion-checkbox></ion-checkbox></ion-col>
                </ion-row>
              </ion-grid>
        </ion-col>
      </ion-row>
      <ion-row >
        <ion-col  size="7">
            <ion-grid>
                <ion-row>
                    <div style="padding:5px">
                      
                        <ion-label style="width: 130px;" >بنای موجود استحکام وتطابق  با نقشه سازه  </ion-label>
                    </div>
                    
                </ion-row>
              </ion-grid>
        </ion-col>
        <ion-col  style="margin-inline: -19px" size="5">
              <ion-grid style="    inline-size: 110%;">
                <ion-row style="margin: -3px;">
                  <ion-col ><ion-checkbox></ion-checkbox></ion-col>
                  <ion-col><ion-checkbox></ion-checkbox></ion-col>
                  <ion-col><ion-checkbox></ion-checkbox></ion-col>
                </ion-row>
              </ion-grid>
        </ion-col>
      </ion-row>
      <ion-row >
        <ion-col  size="7">
            <ion-grid>
                <ion-row>
                    <div style="padding:5px">
                        <ion-label>تطابق نوع سقف با نقشه </ion-label>
                    </div>
                </ion-row>
              </ion-grid>
        </ion-col>
        <ion-col  style="margin-inline: -19px" size="5">
              <ion-grid style="    inline-size: 110%;">
                <ion-row style="margin: -3px;">
                  <ion-col ><ion-checkbox></ion-checkbox></ion-col>
                  <ion-col><ion-checkbox></ion-checkbox></ion-col>
                  <ion-col><ion-checkbox></ion-checkbox></ion-col>
                </ion-row>
              </ion-grid>
        </ion-col>
      </ion-row>
      
  
  </ion-grid>
 </ion-card>

</template>

<style scoped>
 ion-card {
    height: auto;
    padding: 10px;
    margin: 10px;
  }
  ion-col{
   
    /* padding: -5%; */
    /* text-align: center; */
    /* align-self: center; */
    text-align: center;
    /* width: -1px; */
    display: inline-grid;
    align-content: center;
    /* justify-content: center; */
    /* align-items: center; */
    justify-items: center;
  }
  ion-text {
    font-size: 10px;
  }
  ion-label {
    font-size: 12px;
  }
  ion-row{
    margin: -11px;
    text-align: center;
  }

</style>

<script lang="ts">
  
 // import { defineComponent } from 'vue';
import { IonButton, alertController } from '@ionic/vue';
 


  export default {
    components: { IonButton },
  //   data() {
  // return {
  //   check: false,
  //   post: false
  // }
  //         },
    setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    // const slideOpts = {
    //   initialSlide: 1,
    //   speed: 400
    // };

      const presentAlert = async () => {
        const alert = await alertController.create({
          header: '',
           buttons: [
            {
              text: 'خیر',
              role: 'cancecl',
              
            },
            {
              text: 'بله',
              role: 'confirm',
              
              
            },
            {
              text: 'کاربرد ندارد',
              role: 'confirm',
              
              
            },
          ],
      
        });

        await alert.present();
      };
   return { presentAlert };
    },
  };

</script>