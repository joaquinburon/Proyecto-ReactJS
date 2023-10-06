import { createContext, useState } from 'react';


export const CartContext = createContext({})


export const CartProvider = ({children}) => {

    const [open, setOpen] = useState(false)
    const [items, setItems] = useState([])

    return (

        <CartContext.Provider value={ { open, setOpen, items, setItems } }>
            
            {children}

        </CartContext.Provider>

    )

} 