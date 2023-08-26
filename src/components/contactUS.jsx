import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eoqxwax', 'template_53i2umj', form.current, 'XHaZ7QSOYFbY384uu')
      .then((result) => {
        alert("تم حجز الموعد بنجاح وسيتم التواصل معكم من قبل المؤسسة")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact">
        <div className="container">
        <div className="main_title">
                <h2>تواصل معنا</h2>
                <div></div>
            </div>
            <div className="contact_content">
                 <div className="contact_right">
                    <h2>عناوين الفروع :</h2>
                    <h3>الإسكندرية :</h3>
                    <div className="location">
                        <i class="uil uil-map-marker"></i>
                        <p>19 البلينا _ محرم بك بالقرب من محكمة محرم بك ومبنى خبراء وزارة العدل والطب الشرعى والشهر العقارى</p>
                        </div>
                    <div className="location">
                        <i class="uil uil-map-marker"></i>
                        <p>34 ش عبد الحميد بدوى _ الازاريطة</p>
                        </div>
                        <h3>القاهرة :</h3>
                    <div className="location">
                        <i class="uil uil-map-marker"></i>
                        <p>
                        التجمع الخامس _الحى الأول ،(بداخل كابيتال مول Capital Mall) الدور الثانى  
                        خلف المحكمة </p> 
                        </div>
                        <div className="hours">
                            <h3>مواعيد العمل</h3>
                        <p>طوال أيام الأسبوع عدا الخميس والجمعة من الساعة 7 مساءا حتي الساعة 9 مساءا
                          <br/>الحضور بمعاد مسبق
                        </p>
                        </div>
                        <div className="contact_way">
                            <h3>التواصل</h3>
                       <div className="way">
                         <i class="uil uil-phone-volume"></i>
                        <p>01557622000</p>
                       </div>
                       <div className="way">
                         <i class="uil uil-phone-volume"></i>
                        <p>01023343014</p>
                       </div>
                       <div className="way">
                        <i class="uil uil-envelope-alt"></i>
                        <p>mahmoudelrouby17@gmail.com</p>
                       </div>
                        <div className="social">
                        <i class="uil uil-facebook"></i>
                        <i class="uil uil-whatsapp-alt"></i></div>
                        </div>
                    </div>

    <div className="form_left">
        <form ref={form} onSubmit={sendEmail}>
      <label>الأسم بالكامل</label>
      <input type="text" name="name" />
      <label>رقم التليفون</label>
      <input type="text" name="number" />
      <label>تاريخ الزيارة</label>
      <input type='date' name="date" />
      <label>تفاصيل الزيارة</label>
      <textarea name="message" resize='none' />
      <button type='submit'>send</button>
    </form>
    </div>
    </div>
            </div>
        </div>
  );
};
export default ContactUs