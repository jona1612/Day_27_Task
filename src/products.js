import React from 'react'

function Products(props) {
    return (
        <div class="col mb-5">
            <div class="card h-100">
                {/* <!-- Sale badge--> */}
                <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }} >{props.items.sale}</div>
                {/* <!-- Product image--> */}
                <img class="card-img-top" src="https://picsum.photos/200/150" alt="..." />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                    <div class="text-center">
                        {/* <!-- Product name--> */}
                        <h5 class="fw-bolder">{props.items.name}</h5>
                        {/* <!-- Product reviews--> */}
                        <div class="d-flex justify-content-center small text-warning mb-2">
                            <i class={props.items.star ? `fa-solid fa-star` : ``}></i>
                            <i class={props.items.star ? `fa-solid fa-star` : ``}></i>
                            <i class={props.items.star ? `fa-solid fa-star` : ``}></i>
                            <i class={props.items.star ? `fa-solid fa-star` : ``}></i>
                            <i class={props.items.star ? `fa-solid fa-star` : ``}></i>


                        </div>
                        {/* <!-- Product price--> */}
                        <span class="text-muted text-decoration-line-through">Rs.{props.items.ratecut}</span>
                        Rs.{props.items.rate}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div onClick={() => props.shopCart(props.items)} class="text-center"><button disabled={props.cartItems.some(obj => obj.id === props.items.id)} class="btn btn-outline-dark mt-auto" >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products