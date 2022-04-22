export const productosInitialState = {
  productos: [],
};

export default function productosReducer(state, action) {
  let newState;
  switch (action.type) {
    case "addProductos":
      const { productos } = action;
      newState = { productos };
      break;
    default:
      newState = state;
  }

  return newState;
}
