const cartData = (state = [], action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return [...state, action.payload];
		case "REMOVE_ITEM":
			return [...state, action.remove];
		default:
			return state;
	}
};

export default cartData;
