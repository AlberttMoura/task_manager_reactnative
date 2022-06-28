import { StyleSheet, View, Button, FlatList, Text } from 'react-native'
import { GoalItem } from './components/GoalItem'
import { GoalInput } from './components/GoalInput'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false)
	const [courseGoals, setCourseGoals] = useState([])

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => {
			return [
				...currentCourseGoals,
				{ text: enteredGoalText, id: Math.random().toString() },
			]
		})
		endAddGoalHandler()
	}

	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id != id)
		})
	}

	function startAddGoalHandler() {
		setModalIsVisible(true)
	}

	function endAddGoalHandler() {
		setModalIsVisible(false)
	}

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<View style={styles.addNewGoalContainer}>
					<Button
						title='Add New Goal'
						color='#2B8FFF'
						onPress={startAddGoalHandler}
					/>
				</View>
				{modalIsVisible && (
					<GoalInput
						onAddGoal={addGoalHandler}
						onCancel={endAddGoalHandler}
						visible={modalIsVisible}
					/>
				)}
				<View style={styles.goalsContainer}>
					<Text style={styles.tasksTitle}>
						Tasks: {courseGoals.length}
					</Text>
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
		</>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: '#3F437E',
	},
	addNewGoalContainer: {
		marginVertical: 20,
	},
	tasksTitle: {
		color: '#fff',
		fontSize: 40,
		marginBottom: 20,
	},
	goalsContainer: {
		flex: 5,
		alignItems: 'center',
	},
})
