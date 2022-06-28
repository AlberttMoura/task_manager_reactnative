import { View, Text, StyleSheet } from 'react-native'

export function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalItemText}>{props.text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	goalItem: {
		minWidth: '60%',
		borderRadius: 10,
		padding: 15,
		marginBottom: 10,
		backgroundColor: '#652ad3',
		alignItems: 'center',
		justifyContent: 'center',
	},
	goalItemText: {
		color: '#fff',
		fontSize: 20,
	},
})
