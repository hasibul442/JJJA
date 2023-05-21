import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'

function ProductCard(props) {
  return (
    <>
        <div className="card product_card border-0">
        <div className="card_custom">
            <div className="imgBx">
                <img src={props.image} alt="nike-air-shoe" />
            </div>

            <div className="contentBx">

                <p className='title'>{props.title_en}</p>

                {/* <div className="size">
                    <h3>Size :</h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div> */}

                <div className="price">
                    <p>{props.price}/Unit</p>
                </div>
                <div className="price">
                    <p>
                        {props.user.map((item, index) => (
                            <span key={index}>
                                {item} {index === props.user.length - 1 ? "" : " / "}
                            </span>
                        ))}
                    </p>
                </div>
                <div className="price">
                    {[...Array(5)].map((item, index) => (
                        <span key={index}>
                            {index < props.rating ? (
                                <BsStarFill className="rating" />
                            ) : (
                                <BsStar className="rating" />
                            )}

                        </span>
                    ))}
                </div>
            </div>

        </div>
        </div>
    </>
  )
}

export default ProductCard