import React from 'react'
import جنائي from '../جنائي.avif'
import احوال from '../احوال .avif'
import المدني from '../المدني.avif'
import ترجمة from '../ترجمة.avif'
import شركات from '../شركات.avif'
import عمال from '../عمال.avif'
import عقارات from '../عقارات.avif'


 const Services = () => {
  return (
    <div className='services_row'>
        <div className="container">
            <div className="main_title">
                <h2>الخدمات</h2>
                <div></div>
            </div>
            <div className="services_content">
                <div className="box">
                    <img src={جنائي} alt="" />
                    <div className='text'>
                    <h2>المجال الجنائي</h2>
                    <p>احد اهم تخصصات المؤسسة وهو الدفاع عن المتهمين امام محاكم الجنح والجنايات وتولت المؤسسة قضايا قتل واموال عامة شهيرة ونجح فيها نجاحاً باهراً ويتميز المجال الجنائى بالحساسية الشديدة والخطورة البالغة ولذلك يختار المكتب المحامين بهذا القسم بعناية شديدة</p>
                    </div>                
            </div>
                <div className="box">
                    <img src={المدني} alt="" />
                    <div className='text'>
                    <h2>المجال المدنى والادارى</h2>
                    <p>النزاعات المدنية جزء من عمل مكتبنا ويمتاز بالنفس الطويل وثقة الموكلين فينا تجعلنا نكون بارعين فى هذا المجال ولذلك حصلنا على اهم الاحكام فى هذا المجال كذلك النزاعات الادارية مع الدولة باجهزتها</p>
                    </div>                
            </div>
                <div className="box">
                    <img src={احوال} alt="" />
                    <div className='text'>
                    <h2>مجال الاحوال الشخصية</h2>
                    <p>يقبل المكتب قضايا الاحوال الشخصية الشائكة فقط والتى تتميز بامور فنية جديدة تضيف للمجال القانونى ولا يقبل القضايا العادية فى مجال الاسرة والاحوال الشخصية ولذلك حصل المكتب على احكام فى طلاق المسيحيين واحكام جديدة من نوعها</p>
                    </div>                
            </div>
                <div className="box">
                    <img src={شركات} alt="" />
                    <div className='text'>
                    <h2>مجال الاستثمار والشركات</h2>
                    <p> تعد مؤسسة الروبى للمحاماة مستشاراً قانونياً لكبرى الشركات والمستشفيات والمؤسسات وذلك عن طريق المكتب وتتولى جميع ملفات الشركة القانونية كالعقود ومراجعتها وصياغتها والتحقيقات الداخلية والقضايا العمالية والتجارية للشركات</p>
                    </div>                
            </div>
                <div className="box">
                    <img src={عقارات} alt="" />
                    <div className='text'>
                    <h2>المجال العقارى</h2>
                    <p>لدى المكتب مستشار عقارى يستطيع مساعدة العملاء فى كافة اختياراته ومساعدته القانونية والفنية</p>
                    </div>                
            </div>
                <div className="box">
                    <img src={عمال} alt="" />
                    <div className='text'>
                    <h2> المجال العمالى</h2>
                    <p> يقتصر المكتب على قبول القضايا العمالية امام الشركات الاجنبية فقط او القضايا التى يتبناها المكتب بشكل تطوعى لمساعدة العميل المحتاج</p> 
                   </div>                
            </div>
                <div className="box">
                    <img src={ترجمة} alt="" />
                    <div className='text'>
                    <h2>مجال الترجمة القانونية</h2>
                    <p>يمتاز المكتب بتعاقده مع مترجمين قانونيين على اعلى مستوى لكى نكون قادرين على تقديم خدمات متكاملة للمستثمرين</p>
                    </div>                
            </div>
        </div>
    </div>
    </div>
  )
}
export default Services
