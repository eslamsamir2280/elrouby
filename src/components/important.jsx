import React from 'react'
import imageelrouby from '../WhatsApp Image 2023-08-24 at 16.51.07121.jpg'
import elrouby from '../IMG-20221112-WA0269.jpg'
import execution from '../resize.jpeg'
 const important = () => {
  return (
    <div className="important_row">
        <div className="container">
            <div className="main_title">
                <h2>احدث الاخبار والمقالات</h2>
                <div></div>
            </div>
            <div className="important_content">
                <div className="box">
                    <div className="img_box">
                        <img src={imageelrouby} alt="" />
                    </div>
                    <div className="text">
                        <h2>الروبي : الحوار الوطني فرصة ذهبية ليشارك الجميع بأفكاره لخدمة الوطن</h2>
                        <a href="https://rosaelyoussef.com/1086418/%D8%AE%D8%A8%D9%8A%D8%B1-%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A-%D8%A7%D9%84%D8%AD%D9%88%D8%A7%D8%B1-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%81%D8%B1%D8%B5%D8%A9-%D8%B0%D9%87%D8%A8%D9%8A%D8%A9-%D9%84%D9%8A%D8%B4%D8%A7%D8%B1%D9%83-%D8%A7%D9%84%D8%AC%D9%85%D9%8A%D8%B9-%D8%A8%D8%A3%D9%81%D9%83%D8%A7%D8%B1%D9%87-%D9%84%D8%AE%D8%AF%D9%85%D8%A9-%D8%A7%D9%84%D9%88%D8%B7%D9%86"><button>عرض المقالة</button></a>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src={execution} alt="" />
                    </div>
                    <div className="text">
                        <h2>النقض تؤيد إعدام نجار اعتدى على سيدة وقتلها بالإسكندرية</h2>
                        <a href="https://www.elwatannews.com/news/details/6530644"><button>عرض المقالة</button></a>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src={elrouby} alt="" />
                    </div>
                    <div className="text">
                        <h2>محمود الروبي :يطالب الامم المتحدة بالوقوف إلى جوار الدول النامية</h2>
                        <a href="https://algomhuriaalyoum.com/260896"><button>عرض المقالة</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default important