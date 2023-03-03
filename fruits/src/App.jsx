import { useState } from "react";
import "./App.css";
import Fruit from "./components/Fruit";

function App() {
	//Array of fruit
	const fruits = [
		{ name: "Apple", color: "red" },
		{ name: "Banana", color: "yellow" },
		{ name: "Cherry", color: "red" },
		{ name: "Grape", color: "purple" },
	];

	return (
		<div className='container'>
			{fruits.map((fruit) => {
				return <Fruit name={fruit.name} color={fruit.color} />;
			})}
		</div>
	);
}

export default App;
