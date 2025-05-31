import Greetings from "./Components/Greetings";
import Person from "./Components/Person";
import ProductInfo from "./Components/ProductInfo";
import ProductList from "./Components/ProductList";
import UserList from "./Components/UserList";
import Card from "./Components/Card";
import Weather from "./Components/Weather";
import { FiShoppingCart } from "react-icons/fi";
import StyleCard from "./Components/Styles/StyleCard";
import ProfileCard from "./Components/Styles/ProfileCard";
import IconComponents from "./Components/Styles/IconComponents";

import { useState, useEffect } from "react";

import ComponentOne from "./Components/ComponentOne";
import ComponentTwo from "./Components/ComponentTwo";
import Example from "./Components/Example";
import ShoppingList from "./Components/ShoppingList";
import CopyInput from "./Components/Portal/CopyInput";
import Switcher from "./Components/Portal/Switcher";
import BasicEffect from "./Components/useEffect/BasicEffect";
import CounterEffect from "./Components/useEffect/CounterEffect";
import FetchData from "./Components/useEffect/FetchData";

import { createContext } from "react";
import ComponentA from "./Components/Prop Drilling/ComponentA";
import UserProfile from "./Components/Prop Drilling/UserProfile";
export const Data = createContext();
export const Data1 = createContext();
import { UserProvider } from "./UserContext";
import UpdateUser from "./Components/Prop Drilling/UpdateUser";
import Counter from "./Components/useReducer/Counter";
import FocusInput from "./Components/useRef/FocusInput";
import Timer from "./Components/useRef/Timer";
import useFetch from "./Components/useFetch";
import UniqueId from "./Components/UniqueId";

// import "./index.css"

const App = () => {
  const myName = "Tikesh Sahu";
  const multiply = (a, b) => a * b;
  const specialClass = "anyhting-I-want";

  //Lists
  const numbers = [1, 2, 3, 4, 5];

  const usersInfo = [
    {
      username: "Tikesh",
      location: "India",
      email: "Tikesh@gmail.com",
    },
    {
      username: "HuXnh",
      location: "USA",
      email: "test@gmail.com",
    },
    {
      username: "Jhon",
      location: "Arab",
      email: "jd@gmail.com",
    },
  ];

  //useState() Hook
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const [friends, setFriends] = useState(["Alex", "Jhon"]);
  const addFriend = () => setFriends([...friends, "Tikesh"]);
  const removeFriend = () => setFriends(friends.filter((f)=> f !== "Jhon"));
  const updateOneFriend =() => setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));

  // Context Api
  const name = "Tikesh Sahu";
  const age = 20;

  //Custom Fetch
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return ( 
    <section>
      <p>2 + 2 = {2 + 2}</p>
      <h1>{myName}</h1>
      <p>My Friends List: {["Alex", "Jhon", "Waheed", "Jordan"]}</p>
      <p>2 * 2 = {multiply(2, 2)}</p>
      <p className={specialClass}>This is special class</p>
      <Greetings />
      <ProductInfo />
      <main>
        {/* Lists */}
        {numbers.map((number) => (
          <ul key={Math.random()}>
            <li>{number}</li>
          </ul>
        ))}

        {usersInfo.map(({ username, email, location }) => (
          <ul key={Math.random()}>
            <li>{username}</li>
            <li>{location}</li>
            <li>{email}</li>
          </ul>
        ))}

        <UserList />
        <ProductList />

        {/* Props */}
        <User
          img="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
          Name="Tikesh"
          age={20}
          isMarried={false}
          hobbies={["Coding", "Drawing", "Sleeping"]}
        />
      </main>
      <Person name="Tikesh" age={20} />

      <Card>
        <h1>My Card 1</h1>
        <p>This is some content for card.</p>
      </Card>
      <Card>
        <h1>My Card 2</h1>
        <p>This is some content for card.</p>
      </Card>

      {/* Conditional Rendering */}
      <Password isValid={true} />

      <Cart />

      <Weather />

      <StyleCard />
      
      <ProfileCard />

      <IconComponents />

      <Button />

      <Copy />

      <Move />

        {/* useState() Hook */}
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addFriend}>Add New Friend</button> 
      <button onClick={removeFriend}>Remove Friend</button> 
      <button onClick={updateOneFriend}>Update One Friend</button>

      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />

      <Example />

      <ShoppingList />

      {/* Portal */}
      <CopyInput />

      <Switcher />

      {/* useEffect */}
      <BasicEffect />
      <CounterEffect />
      <FetchData />

      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>

      {/* useReducer */}
      <Counter />

      {/* useRef */}
      <FocusInput />
      <Timer />

      {/* Custom Hooks */}
      <div> 
        {data && data.length > 0 && <p>{data[0].title}</p>}
      </div>

      {/* useID */}
      <UniqueId />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque commodi explicabo beatae magni modi eaque dolor necessitatibus, natus soluta, quaerat veniam iure ipsa corporis tenetur voluptates facere consequatur maiores?</div>
      <UniqueId />
    </section> 
  );
};

//Props
const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.Name} width={300} />
      <h1>Name: {props.Name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Is Married: {props.isMarried}</h1>
      <h1>Hobbies: {props.hobbies}</h1>
    </section>
  );
};

//Conditional Rendering
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Inavlid Password</h1>;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  }
  return <InvalidPassword />;
};
//or use
//return isValid ? <ValidPassword /> : <InvalidPassword />;

const Cart = () => {
  const items = ["Wireless Mouse", "Wireless Keyboard", "Wireless Headset", "Hoddie"];

  return (
    <div>
      <h1>Cart <FiShoppingCart /></h1>
      {items.length > 0 && <h2>You have {items.length} items in your cart.</h2>}

      <ul>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  )
};

const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random()*10));
  return <button onClick={handleClick}>Click</button>
}

const Copy = () => {
  const copyHandler = () => {
    console.log("Stop Stealing my Content");
  };

  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non veniam distinctio laudantium illo exercitationem unde ratione nobis necessitatibus? Voluptatibus nihil quidem eaque vel vitae natus unde, qui perferendis doloribus?
    </p>
  )
};

const Move = () => {
  const moveHandler = () => {
    alert("Mouse move event fired");
    console.log("Mouse move event fired");
  }

  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rem, soluta tempora sunt eaque earum! Illo eius nemo vel consectetur dicta, ipsa, soluta enim odio adipisci aliquam porro at nisi.
    </p>
  )
}


export default App;