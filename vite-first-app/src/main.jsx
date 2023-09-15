import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card  from './Tailwincss.jsx'
import './index.css';
import DevUiCard from './devui.jsx';
import MultiCard from './components/card.jsx';
import BgChanger from './components/bgChanger.jsx';




const anotherElement  = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },

  "Visit Google"

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
   {/* <App/> */}
  {/* <Card/>
  <br /> */}
  {/* <MultiCard productName="Macbook" img="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" />
  <MultiCard productName="Asus TUF Gaming"img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDwY9UTMvAjgz7Gg9gjofVHiNYVsz3OULZw&usqp=CAU"  />
  <MultiCard productName="Hp 15s" img="https://cdn.mos.cms.futurecdn.net/b32trTVFwh2mJvDhXWJnFa.jpg" />
  <MultiCard productName="Vivo V20" img="https://www.coverscart.com/image/cache//data/Aesthetic_Yellow_Telephone_Back_Case_for_Vivo_V20-600x600.jpg" />
  <MultiCard productName="Boat Stone 200" img="https://5.imimg.com/data5/SELLER/Default/2021/6/WZ/PE/UQ/116004060/boat-bluetooth-speaker-500x500.jpg" />
  <MultiCard productName="Sony Led" img="https://www.digitaltrends.com/wp-content/uploads/2022/03/sony-x95k-review-db-36.jpg?p=1" />
  <MultiCard productName="Boat Rockerz 450" img="https://rb.gy/zr70i" />
  <MultiCard productName="Airpod 131" img="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/n/y/tr:w-480,/nyfboat000133_1_5104ad8a.jpg?rnd=20200526195200" /> */}
 
 <DevUiCard/>
 {/* <BgChanger bgColor=''/> */}
  </>
 

)
