import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList,
} from 'react-native'
import { GoalItem } from './components/GoalItem'
import { GoalInput } from './components/GoalInput'
import { useEffect, useState } from 'react'

export default function App() {
	const [courseGoals, setCourseGoals] = useState([])

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => {
			return [
				...currentCourseGoals,
				{ text: enteredGoalText, id: Math.random().toString() },
			]
		})
	}

	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id != id)
		})
		console.log('Deleting ', id)
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					alwaysBounceVertical={false}
					keyExtractor={(item, index) => {
						return item.id
					}}
					renderItem={(itemData) => {
						return (
							<GoalItem
								id={itemData.item.id}
								text={itemData.item.text}
								onDeleteItem={deleteGoalHandler}
							/>
						)
					}}
					data={courseGoals}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: '#330f77',
	},

	goalsContainer: {
		flex: 5,
		alignItems: 'center',
	},
})
