import React from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import colors from "../../constants/colors";

const Over = ({rounds, selectedNumber, onRestart}) => {
	return (
		<ScrollView style={styles.containerScroll}>
			<View style={styles.container}>
				<Card style={styles.content}>
					<Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0160/2840/1712/products/bonk-cheems-min-ncdc.png?v=1635960897' }} style={styles.image} />
					<Text style={styles.selectedNumberText}>Selected Number: {selectedNumber}</Text>
					<Text style={styles.rounds}>{rounds} rounds played</Text>
					<View style={styles.buttonContainer}>
						<Button style={styles.buttonContainer} title="Restart" onPress={onRestart} color={colors.primary} />
					</View>
				</Card>
			</View>
		</ScrollView>
	);
};

export default Over;