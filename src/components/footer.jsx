import React from 'react'
import { Link } from 'react-router-dom';
 const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="flex_box">

        <div className="about">
          <h2>نبذة عن المؤسسة</h2>
          <p>يديرها محمود اشرف الروبي
الذائع سيطه فى المحاكم الجنائية والعسكرية ومحاكم امن الدولة طوارئ كما هو المستشار القانونى لعدد من اكبر الشركات والمستشفيات والمستثمرين ويتكون فريق عمله من نخبة من اكفأ المحامين المتخصصون فى كافة فروع القانون و تشارك المؤسسة فى صناعة القوانين بمقترحاتها وارائها للبرلمان المصرى والتى تؤخذ بعين الاعتبار حيث يشارك مدير المؤسسة فى العديد من جلسات الاستماع لابداء الاراء القانونية وكذلك اهم المؤتمرات لمواكبة التطور التكنولوجى الهائل للمجال القانونى ونسعى فى ذلك لان نقوم بتلبية احتياجات عملائنا وكسب ثقتهم وراحتهم وتمثيلهم بشكل مشرف داخل مصر وخارجها</p>
        </div>
        <div className="links">
          <h2>روابط هامة</h2>
          <div className='linkss'>
             <Link to="/"><li className='"uil uil-angle-left'>الصفحة الرئيسية</li></Link>
          <Link to="/من_نحن"><li className='"uil uil-angle-left'>من نحن</li></Link>
          <Link to="/الخدمات"><li className='"uil uil-angle-left'>الخدمات</li></Link>
          <Link to="/محامين_المؤسسة"><li className='"uil uil-angle-left'>محامين المؤسسة</li></Link>
          <Link to="/تواصل_معنا"> <li className='uil uil-angle-left'>تواصل معنا</li></Link> 
          <a href="https://dar-eladalah.com/systemLoginClients.aspx"><li class="uil uil-angle-left">تابع قضيتك</li></a>
          </div>
        </div>
        <div className="adress_social">
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
                         
                        التجمع الخامس _الحى الأول(بداخل كابيتال مول Capital Mall) الدور الثانى  
                      خلف المحكمة</p> 
                        </div>
                        <div className="hours">
                            <h3>مواعيد العمل</h3>
                        <p>طوال أيام الأسبوع عدا الخميس والجمعة من الساعة 7 مساءا حتي الساعة 9 مساءا
                          <br />الحضور بمعاد مسبق
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
                       <a href="https://www.facebook.com/profile.php?id=100064144837296"><i class="uil uil-facebook"></i></a>
                        <a href="https://wa.me/+201023343014"><i class="uil uil-whatsapp-alt"></i></a>
                        </div>
                        </div>
        </div>
        </div>
        <div className="copywrite">
          <p>صمم ونفذ بواسطة <a href="https://www.facebook.com/profile.php?id=100049581704301">eslam samir</a></p>
          <p>جميع الحقوق محفوظة © 2023</p>
        </div>
      </div>
    </div>
  )
}
export default Footer;
