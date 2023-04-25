//import store from "@/store/index";

export default function rt(key:string) {
    // store.dispatch("resourceText");
   
    const rt = {
      APP_TITLE: "سامانه جامع حفاری مشهد",
      DESCRIPTION_SETUP: "سامانه جامع حفاری با هدف ایجاد یکپارچگی و سهولت در امر مدیریت و نظارت بر اجرای پروژه های حفاری، نگهداری و مستندسازی سوابق پروژه ها، ارائه گزارشهای مدیریتی و بطور کلی ارتقاء سطح خدمات رسانی واحد فنی و عمرانی شهرداری در حوزه خدمات حفاری، تولید و پیاده سازی شده است.",
      TITLE_DESCRIPTION: "ورود به سامانه جامع حفاری",
      APP_LKM: "سامانه حفاری"
    } as any;
    

    return key!== null ? rt[key]:null
  }

