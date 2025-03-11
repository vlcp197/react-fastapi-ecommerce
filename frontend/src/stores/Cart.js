import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({productId, quantity});
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action) {

        },
        toggleStatusTab(state) {

        }
    }
})

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;