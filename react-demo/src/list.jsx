import React from 'react'

function List() {
    const tempData = ["apple", "banana", "kiwi", "mango", "grapes"];

  return (
    <div>
        {
            (tempData.length === 0) ? <h1>no data</h1> :

            tempData.map((item, i) => {
                if (i ==1) {
                    return <i>{item}</i>
                }
                else {
                    return <h1>{item}</h1>
                }
            })
        }
    </div>
  )
}

export default List
