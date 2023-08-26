import React from 'react'
import elrouby from '../IMG-20221112-WA0269.jpg'
import amr_azt from '../عمرو عزت.jpg'
import kareem_hassen from '../كريم حسين.jpg'
import mahmoud from '../محمود عفارة.jpg'
import radwa from '../رضوي صلاح.jpg'
import alaaRamadan from '../الاء رمضان.jpg'
import alaaSalah from '../الاء صالح.jpg'
import sarah from '../سارة هشام.jpg'
import omarAbdElrahim from '../عمر عبدالرحيم.jpg'
import nada from "../ندي مجدي.jpg"
import ahmedMohamedy from '../احمد المحمدي.jpg'
import { Link } from 'react-router-dom'
let data = [{
    name:" عمرو عزت",
    Image:amr_azt,
    title:"المحامي بالاستئناف والتخصص في مجال البنوك"
},
{
    name:'كريم حسين',
    Image:kareem_hassen,
    title :"المحامي المتخصص في قضايا الاسرة والجرائم الالكترونية"
},
{
    name:'محمود عفارة',
    Image:mahmoud,
    title:"المحامي المتخصص بالقانون الجنائي"
},
{
    name:"رضوي صلاح",
    Image:radwa,
    title:"محامية متخصصة في مجال العقارات"
},
{
    name:"الاء رمضان",
    Image:alaaRamadan,
    title:"المحامية المتخصصة في القانون المدني وقانون الاسرة"
},
{
    name:"الاء صلاح",
    Image:alaaSalah,
    title:"المحامية المتخصصة في القانون الجنائي والشركات"
},
{
    name:"سارة هشام",
    Image:sarah,
    title:"المحامية والمترجمة القانونية المتخصصة في عقود الاستثمار"
},
{
    name:"عمر عبدالرحيم",
    Image:omarAbdElrahim,
    title:"محامي متخصص في القانون الاداري والقضايا العمالية"
},
{
    name:"ندي مجدي ",
    Image:nada,
    title:"المحامية المتخصصة في مجال الشركات ومنازعات الاستثمار"
},
{
    name:"احمد المحمدي",
    Image:ahmedMohamedy,
    title:"المتخصص فى العقود والقانون المدنى"
}
]
 
 const Lawyers = () => {
  return (
    <div className='law_row'>
        <div className="container">
            <div className="main_title">
                <h2>محامين المؤسسة</h2>
                <div></div>
            </div>
            <div className="law_content">
                <div className="main_lawyer">
                    <div className="box">
                        <div className="img_box">
                            <img src={elrouby} alt="" />
                            <h2>المنطقة الزرقاء للامم المتحدة</h2>
                        </div>
                            <div className="text">
                                <h2>محمود اشرف الروبي</h2>
                                <h3>مدير المؤسسة</h3>
                                <p>محاضر بكلية الحقوق جامعة الاسكندرية 
 و المحامى المتخصص بالقانون الجنائى والمحاكم العسكرية ومحاكم امن الدولة طوارئ والمتخصص فى ادارة الشئون القانونية للشركات
 <br/> انشأ مؤسسة محمود الروبى فى عام 2017 باختيار نخبة من افضل المحامون المتخصصون فى جميع فروع القانون</p>
                                <p>كان مساعداً لعضو مجلس نواب فترة دراسته بالجامعة وحصل على جائزة الطالب المثالى وجائزة افضل مقال وافضل امين اتحاد طلاب  ورئيس تحرير مجلة الكلية ورئيس لجنة حقوق الانسان باتحاد طلاب بجامعة الاسكندرية وسفيراً للجامعة بوزارة التعليم العالى ضمن سفراء النوايا الحسنة للجامعات المصرية ثم حصل على جائزة الطالب المثالى لجامعات مصر  من وزارة التعليم العالى و تخرج من جامعة الاسكندرية  وحصل منها على درع التفوق الدراسى ثم التحق بماجستير القانون العام عام ٢٠١٧ ....</p>
                              <Link to="/محموداشرف_الروبي"><button>عرض المزيد</button></Link>
                            </div>
                    </div>
                </div>
                <div className="sub_lawyer">
                    <div className="main_title">
                <h2>فريق العمل</h2>
                <div></div>
            </div>
                    <div className="box">
                        {data.length >= 1 ? (data.map((item) => {
        return (
           <div className="sub_img_box">
            <img src={item.Image} alt='*'/>
            <h2>{item.name}</h2>
            <p>{item.title}</p>
           </div>
        )
      })) : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Lawyers
