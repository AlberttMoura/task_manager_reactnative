import { View, Text, StyleSheet, Pressable } from 'react-native'

export function GoalItem(props) {
	return (
		<Pressable
			onPress={() => {
				props.onDeleteItem(props.id)
			}}>
			<View style={styles.goalItem}>
				<Text style={styles.goalItemText}>{props.text}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	goalItem: {
		minWidth: '70%',
		borderRadius: 10,
		paddingVertical: 8,
		marginBottom: 20,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	goalItemText: {
		color: '#2B8FFF',
		fontSize: 20,
	},
})
