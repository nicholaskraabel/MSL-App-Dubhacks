import { Video } from 'expo-av';
import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';


//user typing box
function UserTextInput () {
    var sentences = ["The cat stretched.",
      "Jacob stood on his tiptoes.",
      "The car turned the corner.",
      "Kelly twirled in circles.",
      "She opened the door.",
      "Aaron made a picture.",
      "I'm sorry.",
      "I danced.",
      "Run!",
      "Open the jar carefully.",
      "Read the directions.",
      "Don't cry.",
      "Use common sense.",
      "Make the best of things.",
      "Catch up!",
      "Misha walked and looked around.",
      "My mother hemmed and hawed over where to go for dinner.",
      "He was eating and talking.",
      "I rinsed and dried the dishes.",
      "Joe stood up and spoke to the crowd.",
      "The leaves turn orange and yellow in the fall.",
      "The fan cools the air in the room.",
      "Every summer he visited his grandparents on the farm.",
      "You can tell that the horse is fast.",
      "The feather is light.",
      "The fence went around the land.",
      "The baby is grabbing her finger.",
      "Let's cook hot dogs over the fire.",
      "She caught a fish that was bigger than a dog.",
      "He pounded his fist on the table.",
      "He ran in lane five.",
      "She held the babies tiny foot.",
      "The boys enjoyed playing football every Saturday.",
      "Many trees are in the forest.",
      "You will need a fork and knife to eat dinner.",
      "She will be four years old in October.",
      "What does the fox say?",
      "Give me a phone call in 10 minutes.",
      "Atie can say the letters of the alphabet in order.",
      "I love bacon, eggs, and orange juice for breakfast.",
      "We saw buffalo at Yellowstone National Park.",
      "We caught six catfish in the pond.",
      "This coffee is too hot!",
      "The dolphin smiled at me.",
      "The elephant is washing himself.",
      "The goldfish has a white tail.",
      "He put the golf ball on the tee.",
      "Turn the music down in your headphones.",
      "The lifeguard blew his whistle.",
      "Turn on your microphone.",
      "That chocolate muffin looks good."];
    var textDisplay = sentences[Math.floor(Math.random()*sentences.length)];

    const [value, onChangeText] = React.useState('Type in what you see');

  return (
    <View style={styles.inputbox}>
      {/* generate text  */}
      <Text>{textDisplay}</Text>
      {/* user input */}
      <TextInput
        style={{ textSize: 14, textAlign: "center", flex: 0.5, height: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  inputbox:{
      flex: 1,
      alignContent: "center",
      padding: 20,
      backgroundColor: "#fc5c65",

  },
});


export default UserTextInput;
