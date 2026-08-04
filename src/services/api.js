import axios from "axios"

async function getData(){
 const res = await axios.get('https://fakestoreapi.com/products')
 return res.data
} 

export {getData}