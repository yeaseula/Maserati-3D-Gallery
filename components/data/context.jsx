import { createContext, useContext, useState } from "react";
const ShowroomContext = createContext(null)

export function ShowroomProvider({ children }) {
  const [loadState,setLoadState] = useState(0)
  const [currentProduct,setCurrentProduct] = useState('cielo');
  const [colors,setColors] = useState('#DDDDDD')
  const [windowState,setWindowState] = useState('/image/tree-background.jpg')
  const [calliper,setCalliper] = useState('#314aad')

  return (
    <ShowroomContext.Provider
    value={{
        loadState, setLoadState,
        currentProduct, setCurrentProduct,
        colors, setColors,
        windowState,setWindowState,
        calliper, setCalliper
    }}>
        {children}
    </ShowroomContext.Provider>
  )
}

export function useShowroom() {
    const ctx = useContext(ShowroomContext)
    if (!ctx) {
        throw new Error('useShowroom must be used inside ShowroomProvider') }

        return ctx;
}