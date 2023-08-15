import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Header = () => {
    const  [nav,setNav] = useState(true)
    const handleNav = ()=>{
        setNav(!nav)
    }

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
      // Выполнение запроса при загрузке компонента
      fetchMenuData();
    }, []);
  
    const fetchMenuData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/menu/?format=json');
        setMenuData(response.data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };
  
    const handleUpdateClick = () => {
      fetchMenuData();
    };




  return (
    <div>
        <header>
            <div className="container">
                <div className="row maybe">
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6 col-xs-6  animate__animated animate__backInLeft ">
                        <img src="лого.png" alt="" />
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-xs-6 animate__animated animate__backInRight float-right ">
                        <ul className='list'>
                            {menuData.map(item => (
                            <li key={item.id}><a href="">{item.item}</a></li>
                            ))}
                        </ul>
                        <div onClick={handleNav} className='menu'>
                        {!nav ? <AiOutlineClose size={20} color='white'/> : <AiOutlineMenu size={20} color='white'/>}
                        </div>

                    </div>
                    <div className={!nav ? 'fixed left-0 top-0 w-[180px] h-screen border-r border-gray-900 bg-black text-white ease-in-out duration-500 lg:hidden': 'fixed left-[-100%] ease-in-out duration-500'}>

                    <ul className='pt-12 uppercase'>
                        {menuData.map(item => (
                            <li className='p-4 border-b border-gray-600' key={item.id}>{item.item}</li>
                        ))}

                    </ul>

                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header