import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import { useState } from 'react'

export function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState('')
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText)
	}

	function addGoalHandler() {
		if (enteredGoalText.trim() !== '') {
			props.onAddGoal(enteredGoalText.trim())
			setEnteredGoalText('')
		}
	}

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goalimage.png')}
				/>
				<TextInput
					placeholderTextColor='#c1c1c1'
					style={styles.textInput}
					placeholder='What are your goals?'
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title='Cancel'
							color='#9B9B9B'
							onPress={props.onCancel}
						/>
					</View>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 16,
		alignItems: 'center',
		backgroundColor: '#3F437E',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 16,
	},
	textInput: {
		borderWidth: 1,
		backgroundColor: '#fff',
		width: '100%',
		borderRadius: 10,
		fontSize: 20,
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderColor: '#fff',
		color: '#313131',
	},
	button: {
		width: 100,
		marginHorizontal: 20,
	},
})
