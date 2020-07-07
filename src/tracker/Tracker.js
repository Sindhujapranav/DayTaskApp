import React from 'react';

import Card from './Card';

const Tracker = ({ days, createTask, toggleTask, setDays, removeTask }) => {
	return (
		<div className="main-container">
			{days.map((day, index) => (
				<Card
					key={index}
					day={day}
					createTask={(value) => createTask(index, value)}
					toggleTask={(taskIndex) => toggleTask(index, taskIndex)}
					removeCard={() => setDays(days.filter((count, i1) => {
						return index !== i1
					}))}
					removeTask={(taskIndex) => removeTask(index, taskIndex)}
				/>
			))}
		</div>
	);
};

export default Tracker;
