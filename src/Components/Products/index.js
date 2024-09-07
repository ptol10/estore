import productSlice from '../../store/slices/productSlice/productSlice';
import './_products.scss';
import {useSelector} from 'react-redux'

const Products = () => {

  const productData = useSelector(productSlice.getInitialState);
  return (
    <div className='products-container'>
      {
        productData.map((product, key) => {
          return (
            <div className='mx-5 p-3 product-card'>
              <div className='product-img-container'>
                <img src={require('../../assets/img/shop/' + product.img)} alt='img' />
              </div>
              <div className='product-info'>
                <h5><a href='/'>{product.pName}</a></h5>
                <p className='product-price'>${product.price}</p>
                <div className='product-rating'>
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products;  