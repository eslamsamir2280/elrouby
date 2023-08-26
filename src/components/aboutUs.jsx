import React from 'react'
import aboutimg from '../about.png'

 const AboutUs = () => {
  return (
    <div className='about_row'>
        <div className="container">
            <div className="main_title">
                <h2>نبذة عن المؤسسة</h2>
                <div></div>
            </div>
         <div className="about_content">
               <div className="right">
                <img src={aboutimg} alt="" />
            </div>
            <div className="left" data-aos-duration="2000"
            data-aos="fade-right">
                <h2>يديرها محمود اشرف الروبي</h2>
                <p> الذائع سيطه فى المحاكم الجنائية والعسكرية ومحاكم امن الدولة طوارئ كما هو المستشار القانونى لعدد من اكبر الشركات والمستشفيات والمستثمرين ويتكون فريق عمله من نخبة من اكفأ المحامين المتخصصون فى كافة فروع القانون و تشارك المؤسسة فى صناعة القوانين بمقترحاتها وارائها للبرلمان المصرى والتى تؤخذ بعين الاعتبار حيث يشارك مدير المؤسسة فى العديد من جلسات الاستماع لابداء الاراء القانونية وكذلك اهم المؤتمرات لمواكبة التطور التكنولوجى الهائل للمجال القانونى ونسعى فى ذلك لان نقوم بتلبية احتياجات عملائنا وكسب ثقتهم وراحتهم وتمثيلهم بشكل مشرف داخل مصر وخارجها</p>
            </div>
         </div>
        </div>
    </div>
  )
}
export default AboutUs