import { createContext, useState, useEffect } from 'react'

export const CardContext = createContext({})

export function CardContextProvider({ children }) {
  const [cardExternal, setCardExternal] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function fetchCard() {
      const response = await fetch('https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1')
      const data = await response.json()
      setCardExternal(data)
      console.log(data)
    }

    fetchCard()
    
  },[]);

  return (
    <CardContext.Provider value={{ 
      cardExternal
    }}>
      {children}
    </CardContext.Provider>
  )
}