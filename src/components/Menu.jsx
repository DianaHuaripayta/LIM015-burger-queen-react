import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config.js';
import { collection, getDocs } from "firebase/firestore";
import { ProductsCard } from './ProductsCard.jsx';
/* import {CardProducts} from "./CardProducts.jsx"
import { Card } from './Card.jsx'; */
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
        {console.log(demoMenu)}
        <div>
        <button className="btnBreakFast" onClick={() => { setType('breakfast'); } }>Desayuno</button>
        <button className="btnLuch" onClick={() => { setType('lunch'); } }>Fuerte</button>
        </div>

        <section className="containerBox">
              <section className="cards">
                {
                  demoMenu.map((product) => (
                    <ProductsCard
                        key={product.id}
                        product={product}
                    />
                  ))
                }
              </section>
            </section>
        
        </>   
    )
}