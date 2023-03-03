import "./Fruit.css";

const Fruit = ({ name, color }) => {
	return (
		<div className='card'>
			<h1 className='fruit-name'>{name}</h1>
			<div
				style={{
					backgroundColor: color,
				}}
				className='fruit-color'
			/>
		</div>
	);
};

export default Fruit;
