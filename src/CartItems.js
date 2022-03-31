import React from 'react'

function CartItems(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.item.name}</div>
        {props.item.rate}
      </div>
      <button onClick={() => props.removeCart(props.item)} class="btn badge bg-danger rounded-pill">X</button>
    </li>
  )
}

export default CartItems;