import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

class App extends Component {
	state = {
        courseGoals: [],
        modalVisible: false,
	};

	deleteGoalHandler = (id) => {
		this.setState((prevState) => {
			const courseGoalsCopy = [...prevState.courseGoals];
			const indexToDelete = courseGoalsCopy.findIndex((goal) => {
				return goal.id === id;
			});
            
			courseGoalsCopy.splice(indexToDelete, 1);
            
			return {
				courseGoals: courseGoalsCopy,
			};
		}); 
	};  
 
	addGoalHandler = (inputValue) => {
        if(inputValue.length === 0) 
        {
            return;
        }

		this.setState((prevState) => {
			const courseGoalsCopy = [...prevState.courseGoals];
			courseGoalsCopy.push({
				id: Math.random().toString(),
				value: inputValue,
            }); 

			return {
                courseGoals: courseGoalsCopy,
                modalVisible: false,
			}; 
		}); 
	};

    openCourseGoalModal = () => {
        this.setState({
            modalVisible: true,
        });
    };

    closeCourseGoalModal() {
        this.setState({
            modalVisible: false,
        })
    }
 
	render() {
		return (
			<View style={styles.screen}>
                <Button title="ADD COURSE GOAL" onPress={this.openCourseGoalModal}/>
				<GoalInput isVisible={this.state.modalVisible} addGoalHandler={this.addGoalHandler} closeModal = {this.closeCourseGoalModal.bind(this)} />
				<FlatList
					data={this.state.courseGoals}
					renderItem={(itemData) => (
						<GoalItem
							onDelete={() => this.deleteGoalHandler(itemData.item.id)}
							title={itemData.item.value}
						/>
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
		flex: 1,
	},
});

export default App;
