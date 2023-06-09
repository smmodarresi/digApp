
import { toastController } from "@ionic/vue";

export async function showToast(position: 'top' | 'middle' | 'bottom' , msg: string) {
    const toast = await toastController.create({
        message: msg,
        duration: 2000,
        position: position
    });
    toast.present();
}

// <style>
//   ion-toast.custom-toast {
//     --background: #F4F4FA;
//     --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
//     --color: #4b4a50;
//   }
    
//   ion-toast.custom-toast::part(message) {
//     font-style: italic;
//   }

//   ion-toast.custom-toast::part(button) {
//     border-left: 1px solid #d2d2d2;
//     color: #030207;
//     font-size: 15px;
//   }
// </style>
