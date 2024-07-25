import React from 'react'

const ItemListContainer = ({ greetings }) => {
      return (
            <>
                  <h3 style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        height: "50vh",

                  }}>{greetings}</h3>
            </>
      )
}

export default ItemListContainer