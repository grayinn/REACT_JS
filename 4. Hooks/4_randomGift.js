import { useState } from "react" 

const gifts = [
    'Teddy bear',
    'Key chains',
    'Flowers',
    'Mickey mouse'
]

function App() {
    const [gift, setGift] = useState()

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        //console.log(gifts[index])
        setGift(gifts[index])
    }

    return (
        <div style={{ padding: 30 }}>
          <h1>{gift || 'No reward yet'}</h1>
          <button onClick={randomGift}>Get rewarded</button>
        </div>
    )
}

export default App