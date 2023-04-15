import { createContext, useState, useEffect } from 'react'

export const CardContext = createContext({})

export function CardContextProvider({ children }) {
  const [cardExternal, setCardExternal] = useState([{}])
  const [cards, setCards] = useState([{}])

  // Fetch API data
  useEffect(() => {
    async function fetchCard() {
      const response = await fetch(
        'https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1',
      )
      const data = await response.json()
      setCards(data)
      setCardExternal(data)
    }
    fetchCard()
  }, [])

  function OrderAlphabet() {
    const newCard = [...cards].sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
    setCards(newCard)
  }

  function OrderPrice() {
    const newCard = [...cards].sort((a, b) => {
      if (parseFloat(a.salePrice) < parseFloat(b.salePrice)) {
        return -1
      }
      if (parseFloat(a.salePrice) > parseFloat(b.salePrice)) {
        return 1
      }
      return 0
    })
    setCards(newCard)
  }

  function OrderPriceDesc() {
    const newCard = [...cards].sort((a, b) => {
      if (parseFloat(a.salePrice) > parseFloat(b.salePrice)) {
        return -1
      }
      if (parseFloat(a.salePrice) < parseFloat(b.salePrice)) {
        return 1
      }
      return 0
    })
    setCards(newCard)
  }

  function OrderDiscount() {
    const newCard = [...cards].sort((a, b) => {
      const percentA =
        (parseFloat(a.salePrice) / parseFloat(a.normalPrice)) * 100
      const percentB =
        (parseFloat(b.salePrice) / parseFloat(b.normalPrice)) * 100
      if (percentA < percentB) {
        return -1
      }
      if (percentA > percentB) {
        return 1
      }
      return 0
    })
    setCards(newCard)
  }

  function FilterTitle(title) {
    const newCard = cardExternal.filter((card) => {
      return card.title.toLowerCase().includes(title.toLowerCase())
    })
    setCards(newCard)
  }

  return (
    <CardContext.Provider
      value={{
        cards,
        FilterTitle,
        OrderAlphabet,
        OrderPrice,
        OrderPriceDesc,
        OrderDiscount,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
