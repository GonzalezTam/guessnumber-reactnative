import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Card } from '../../components';
import colors from '../../constants/colors';
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;
	if (randomNumber === exclude) {
		return generateRandomNumber(min, max, exclude);
	} else {
		return randomNumber;
	}
};

const Game = ({selectedNumber}) => {
	const [current, setCurrent] = useState(generateRandomNumber(1, 100, selectedNumber));
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Is it.. ?</Text>
			<Card style={styles.card}>
				<Text style={styles.thinkingEmoji}>🤔 🤨</Text>
				<Text style={styles.generatedNumber}>{current}</Text>
				<View style={styles.buttonContainer}>
					<Button title="LOWER 👇🏻" color={colors.third} onPress={() => {}} />
					<Button title="GREATER 👆🏻" color={colors.third} onPress={() => {}} />
				</View>
			</Card>
		</View>
	);
};

export default Game;