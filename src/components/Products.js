import React,{useEffect,useState} from 'react';
import Card from './Card';
export default function Products() {
    const [product, setProduct] = useState([{}])
    useEffect(() => {
      const fetchData = async () => {
        const data = await (
          await fetch("https://api.escuelajs.co/api/v1/products")
        ).json()
        setProduct(data)
      }
      fetchData()
    }, [])
  
    return (
      <div className=''>
        <h1 className='text-center text-[25px] my-5 '> <span className="text-green-700 font-bold"> All Products</span> </h1>
  
        <div className='container d-flex flex-wrap  justify-content-evenly '>
          {product.filter((item, idx) => idx < 16).map((p,index) => (
            <Card product={p} key={index}  />
          ))}
        </div>
      </div>
    )
  }