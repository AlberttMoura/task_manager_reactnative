import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

export function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState('')
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText)
	}

	function addGoalHandler() {
		if (enteredGoalText.trim() != '') {
			props.onAddGoal(enteredGoalText.trim())
			setEnteredGoalText('')
		}
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholderTextColor='#c1c1c1'
				style={styles.textInput}
				placeholder='Your course goal'
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>
			<Button title='Add Goal' onPress={addGoalHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		backgroundColor: '#753cdf',
		borderRadius: 10,
		fontSize: 20,
		marginRight: 8,
		flex: 1,
		paddingVertical: 5,
		paddingHorizontal: 20,
		color: '#fff',
	},
})
