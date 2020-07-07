import React, { useState } from "react";
import { Icon } from '@iconify/react';

import trashBin from '@iconify/icons-ion/trash-bin';


const Card = ({ day, createTask, toggleTask, removeCard, removeTask }) => {
	const [task, setTask] = useState("");


	return (
		<div className="each-day">
			<h2>{day.title}</h2>
			<p onClick={removeCard}>
				<span><Icon icon={trashBin} /></span>
			</p>

			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button
				onClick={(_) => {
					createTask(task);
					setTask("");
				}}
			>
				Create Task
      		</button>

			<div className="task-wrapper">
				{day.tasks.map((task, taskIndex) => {
					return (
						<div
							className="each-task"
							key={taskIndex}

						>
							<h3 className={task.completed === true ? "line" : ""}>
								<p onClick={() => toggleTask(taskIndex)}>{task.title}</p>
								<p onClick={() => removeTask(taskIndex)}>
									<span><Icon icon={trashBin} /></span>
								</p>
							</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};


export default Card;
