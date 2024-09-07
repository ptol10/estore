import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    category: 'Men',
    items: ['Coats', 'Shirts', 'Boots', 'Party Wear']
  },
  {
    category: 'Women',
    items: ['Coats', 'Shirts', 'Boots', 'Party Wear']
  },
  {
    category: 'Kids',
    items: ['Coats', 'Shirts', 'Boots', 'Party Wear']
  },
]

const accordionSlice = createSlice({
  name: "AccordionSlice",
  initialState
})

export default accordionSlice;