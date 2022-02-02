import { Component } from "react";
import { ProductConsumer } from "../ProdProCon";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";



class Details extends Component {
    render(){
        return(
            <ProductConsumer>
                {value =>{
                    const {id, title, img, price, company, info, inCart} = value.detailProduct
                    return (
                        <div className="container py-5 ">
                            {/* begin title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product detail */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    {/* image */}
                                    <img src={img} className='img-fluid' alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    {/* product info */}
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>price : <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        information about the product
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* buttons */}
                                  <div>
                                      <ButtonContainer>
                                          <Link to = '/'>
                                            back to products
                                          </Link>
                                      </ButtonContainer>
                                      <ButtonContainer cart disabled = {inCart?true:false} onClick={()=>{
                                          value.addToCart(id);
                                          value.openModal(id);
                                      }}>
                                          {inCart ? 'inCart':'add to cart'}
                                      </ButtonContainer>
                                  </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Details;