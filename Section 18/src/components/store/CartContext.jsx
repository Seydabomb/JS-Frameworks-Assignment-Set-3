import { createContext, useReducer } from "react";

// Only spreads data to components
const CartContext = createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (id) => {},
	clearCart: () => {},
});

// The state and action is already provided from React
function cartReducer(state, action) {
	if (action.type === "ADD_ITEM") {
		// updated the state to add a meal item
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id,
		);

		// Creating a copy of the original array
		const updatedItems = [...state.items];

		// We know the item already exists in the items array if the index is > -1
		if (existingCartItemIndex > -1) {
			const existingItem = state.items[existingCartItemIndex];
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity + 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems.push({ ...action.item, quantity: 1 });
		}

		return { ...state, items: updatedItems };
	}

	// Remove an item from the state
	if (action.type === "REMOVE_ITEM") {
		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
		const existingCartItem = state.items[existingCartItemIndex];

		const updatedItems = [...state.items];

		if (existingCartItem.quantity === 1) {
			// Takes an index and the number of items to remove
			updatedItems.splice(existingCartItemIndex, 1);
		} else {
			const updatedItem = {
				...existingCartItem,
				quantity: existingCartItem.quantity - 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return { ...state, items: updatedItems };
	}

	if (action.type === "CLEAR_CART") {
		return { ...state, items: [] };
	}

	return state;
}

// Manages the data
export function CartContextProvider({ children }) {
	// Specify that our state has an initial value as a block item with an empty items array
	const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

	function addItem(item) {
		dispatchCartAction({ type: "ADD_ITEM", item });
	}

	function removeItem(id) {
		dispatchCartAction({ type: "REMOVE_ITEM", id });
	}

	function clearCart() {
		dispatchCartAction({ type: "CLEAR_CART" });
	}

	const cartContext = {
		items: cart.items,
		addItem,
		removeItem,
		clearCart,
	};

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
