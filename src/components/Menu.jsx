import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config.js';
import { collection, getDocs } from "firebase/firestore";
import { ProductsCard } from './ProductsCard.jsx';
import './styleMenu.css'
export function Menu() {
  // Declara una nueva variable de estado, que llamaremos "menu".
  const [demoMenu, setDemoMenu] = useState([]); //useState es un Hook
  // Declara una nueva variable de estado, que llamaremos "products".
  const [Type, setType] = useState('breakfast')

  const getProductsFirebase = async () => {
    const arrayProduct = [];
    
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      arrayProduct.push({
        id: doc.id,
        idType: doc.data().type,
        img :doc.data().img,
        price: doc.data().price,
        name: doc.data().name
      })
      console.log(doc.id,'--',doc.data().img, '--',doc.data().type,'--', doc.data().price)
  
    });

    return arrayProduct;
  };

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProductsFirebase()
      // eslint-disable-next-line eqeqeq
      setDemoMenu(listMenu.filter(doc => doc.idType == Type));
     // eslint-disable-next-line eqeqeq
     console.log(listMenu.filter(doc => doc.idType == Type))//bien
    }
    fetchList();
  }, [Type])

  const [cart, setCart] = useState([])
    return (

        <>
        <section className="containerMenu">
          {console.log(demoMenu)}
          
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                <label className="btn btn-outline-primary" htmlFor="btnradio1"  onClick={() => { setType('breakfast'); } }>Desayuno</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={() => { setType('lunch'); } }>Almuerzo - Cena</label>
            </div>

            <section className="containerBox">
                  <section className="container-cards">
                    <div className="slider">
                    {
                      demoMenu.map((product) => (
                        <ProductsCard
                            key={product.id}
                            product={product}
                        />
                      ))
                    }
                    </div>
                  </section>
                  <section>
                    <h1>prueba con github</h1>
                  </section>
            </section>
          </section>
        
        </>   
    )
}