import GoalItem from './GoalItem.jsx';

function GoalList() {
	return (
		<ul>
			<GoalItem title="Teach React in a highly-understandable way">
				Some goal text…
			</GoalItem>
			<GoalItem title="Allow you to practice what you learned">
				Some goal text…
			</GoalItem>
			<GoalItem title="Motivate you to continue learning">
				Some goal text…
			</GoalItem>
		</ul>
	);
}

export default GoalList;

