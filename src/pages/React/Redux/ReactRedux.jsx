import React from "react";
import Code from "../../../components/Code";
import Dot from "../../../components/Dot";
import HorizontalSpace from "../../../components/HorizontalSpace";
import Highlight from "../../../components/Highlight";

const ReactRedux = () => {
  const one = `npm install @reduxjs/toolkit react-redux`;
  const two = `import { configureStore } from "@reduxjs/toolkit"
export const store = configureStore({ reducer: {} })`;
  const three = `import { store } from "./store"
import { Provider } from "react-redux"

    React.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"));
`;
  const four = `import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
})

export default cartSlice.reducer;
`;
  const five = `import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart/cartSlice"

export const store = configureStore({ 
    reducer: {
        cart: cartReducer,
    }
})`;
  const six = `import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;`;
  const seven = `const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems = [];
      },
    },
  });
  
  export const { clearCart } = cartSlice.actions;
  export default cartSlice.reducer;`;
  const eight = `import React from 'react';
  import CartItem from './CartItem';
  import { useDispatch, useSelector } from 'react-redux';
  
  const CartContainer = () => {
    const dispatch = useDispatch();
  
    return (
      <button
        className='btn clear-btn'
        onClick={() => { dispatch(clearCart()); }}
      >
        clear cart
      </button>
    );
  };
  
  export default CartContainer;`;

  const nine = `import { createSlice } from '@reduxjs/toolkit';
  import cartItems from '../../cartItems';
  
  const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems = [];
      },
      removeItem: (state, action) => {
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      },
      increase: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount + 1;
      },
      decrease: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount - 1;
      },
      calculateTotals: (state) => {
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((item) => {
          amount += item.amount;
          total += item.amount * item.price;
        });
        state.amount = amount;
        state.total = total;
      },
    },
  });
  
  export const { clearCart, removeItem, increase, decrease, calculateTotals } =
    cartSlice.actions;
  
  export default cartSlice.reducer;`;

  const ten = `import React from 'react';
  import { ChevronDown, ChevronUp } from '../icons';
  
  import { useDispatch } from 'react-redux';
  import { removeItem, increase, decrease } from '../features/cart/cartSlice';
  
  const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
  
    return (
      <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className='item-price'>\${price}</h4>
          {/* remove button */}
          <button
            className='remove-btn'
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            remove
          </button>
        </div>
        <div>
          {/* increase amount */}
          <button
            className='amount-btn'
            onClick={() => {
              dispatch(increase({ id }));
            }}
          >
            <ChevronUp />
          </button>
          {/* amount */}
          <p className='amount'>{amount}</p>
          {/* decrease amount */}
          <button
            className='amount-btn'
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <ChevronDown />
          </button>
        </div>
      </article>
    );
  };
  
  export default CartItem;`;
  const eleven = `import { useEffect } from 'react';
  import Navbar from './components/Navbar';
  import CartContainer from './components/CartContainer';
  import { useSelector, useDispatch } from 'react-redux';
  import { calculateTotals } from './features/cart/cartSlice';
  
  function App() {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(calculateTotals());
    }, [cartItems]);
  
    return (
      <main>
        <Navbar />
        <CartContainer />
      </main>
    );
  }
  
  export default App;`;
  return (
    <div>
      <h1 className="text-yellow-400 text-4xl md:text-6xl mb-10 md:mb-24 uppercase font-bold">
        React Redux
      </h1>
      <p className="p">
        Redux is a predictable state container for JavaScript apps.
      </p>
      <section>
        <HorizontalSpace num={1} />
        <p className="p">Installation</p>
        <Code code={one} />
        <p className="p">
          <Highlight text="@reduxjs/toolkit" /> installs the following
          libraries:
          <ul className="ml-8 mt-2">
            <li>
              <Dot /> redux ( core library for state management)
            </li>
            <li>
              <Dot /> immer ( allows to mutate state )
            </li>
            <li>
              <Dot /> redux-thunk ( handles async actions )
            </li>
            <li>
              <Dot /> reselect ( simplifies reducer functions )
            </li>
          </ul>
        </p>

        <HorizontalSpace num={2} />
        <p className="p">Creating a store</p>
        <p className="p">
          Create a <Highlight text="store.js" /> file in src folder
        </p>
        <Code code={two} />
        <p className="p">
          Then in <Highlight text="index.js" /> import the store and Provider
          and wrap everything in Provider tag with store as prop
        </p>
        <Code code={three} />

        <HorizontalSpace num={3} />
        <p className="p">Creating a slice</p>
        <p className="p">
          Create a file <Highlight text="features/cart/cartSlice.js" /> and add
          the following code
        </p>
        <Code code={four} />
        <p className="p">
          Then in <Highlight text="store.js" /> import cartReducer and add it to
          the reducer object
        </p>
        <Code code={five} />

        <HorizontalSpace num={4} />
        <p className="p">Access the state</p>
        <p className="p">
          We can access the state using the <Highlight text="useSelector" />{" "}
          hook
        </p>
        <Code code={six} />

        <HorizontalSpace num={5} />
        <p className="p">Change the state</p>
        <p className="p">We can create reducers in createSlice</p>
        <Code code={seven} />
        <p className="p">We can then dispatch using the useDispatch hook</p>
        <Code code={eight} />

        <p className="p">More examples</p>
        <Code code={nine} />
        <Code code={ten} />
        <Code code={eleven} />
      </section>
    </div>
  );
};

export default ReactRedux;
