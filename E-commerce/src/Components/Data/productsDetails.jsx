import './productsDetails.css'
import { MdAddShoppingCart } from "react-icons/md";



export default function ProductsDetails ({details}) { 



    const {title , image , price} = details


    return (<section className='products-conatainer'>
    <div className='container'>
        <div className='add-container'>
            <button className='add-to-buy'><MdAddShoppingCart className='add-to-buy-icone'/></button>
        </div>
        <img src={image}/>
        <div className='product-details'>
            <div className='product-title'>
                <h1>{title}</h1>
            </div>
        <div className='products-price'>
            <p>{price}$</p>
        </div>
        </div>

        
   
    </div>
    </section>)

    
}