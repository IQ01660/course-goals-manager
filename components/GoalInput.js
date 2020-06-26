import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, ScrollView } from 'react-native';

class GoalInput extends Component {
	state = {
		inputText: '',
	};

	inputChangeHandler = (updatedText) => {
		this.setState({
			inputText: updatedText,
		});
	};

	addGoalHandler = () => {
		this.setState((prevState) => {
			this.props.addGoalHandler(prevState.inputText);
			return {
				inputText: '',
			};
		});
	};

	render() {
		return (
			<Modal animationType="slide" visible={this.props.isVisible}>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder="Course Goal"
						onChangeText={this.inputChangeHandler}
						value={this.state.inputText}
						style={styles.input}
					/>
					<View style={styles.inputBtns}>
						<View style={styles.btn} >
							<Button
								title="CANCEL"
								color="red"
								onPress={() => {
									this.props.closeModal();
									this.setState({
										inputText: '',
									});
								}}
							/>
						</View>
						<View style={styles.btn} >
							<Button title="ADD" onPress={this.addGoalHandler} />
						</View>
					</View>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
		borderRadius: 10,
	},

	inputBtns: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '60%',
	},

	btn: {
		width: '40%',
	},
});

export default GoalInput;
