import React, { useEffect} from 'react'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productAction'
import Loader from '../components/Loader'
import Message from '../components/Message'

function HomeScreen(){
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList
   
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    //this last [] will make update the component only componet loads up not when state 
    return (
        <div>
            <h1>Newest Arrivals</h1>
            { loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
            <Row>
            {products.map(product => (
            <Col key = {product._id} sm={12} md={6} lg= {4} xl= {3}>
                <Product product={product}/>
            </Col>
            ))}
            </Row>
            }
            
        </div>
    )
}

export default HomeScreen