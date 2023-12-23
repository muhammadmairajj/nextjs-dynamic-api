"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const DeleteBtn = ({productId}) => {
    const router = useRouter();

    const deleteProduct = async () => {
        let res = await fetch(`http://localhost:8080/api/products/${productId}`, {
            method: "DELETE"
        });
        res = await res.json();
        if(res.success) {
            alert('DELETE PRODUCT');
            // router.push('/products');
        }
    }

  return (
    <div>
        <button onClick={deleteProduct}>Delete</button>
    </div>
  )
}

export default DeleteBtn