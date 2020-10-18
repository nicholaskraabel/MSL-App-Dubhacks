import React, { Component } from 'react';
import { TextInput } from 'react-native';

//generate random sentence
var sentences = [
    "The cat stretched."
    ,
    
    "Jacob stood on his tiptoes."
    ,
    
    "The car turned the corner."
    ,
    
    "Kelly twirled in circles."
    ,
    
    "She opened the door."
    ,
    
    "Aaron made a picture."
    ,
    
    "I'm sorry.",
    
    "I danced."
    ,
    
    "Run!"
    ,
    
    "Open the jar carefully."
    ,
    
    "Read the directions."
    ,
    
    "Don't cry."
    ,
    
    "Use common sense."
    ,
    
    "Make the best of things."
    ,
    
    "Catch up!"
    ,
    
    "Misha walked and looked around."
    ,
    
    "My mother hemmed and hawed over where to go for dinner."
    ,
    
    "He was eating and talking."
    ,
    
    "I rinsed and dried the dishes."
    ,
    
    "Joe stood up and spoke to the crowd."
    ,
    
    "The leaves turn orange and yellow in the fall."
    ,
    
    "The fan cools the air in the room."
    ,
    
    "Every summer he visited his grandparents on the farm."
    ,
    
    "You can tell that the horse is fast."
    ,
    
    "The feather is light."
    ,
    
    "The fence went around the land."
    ,
    
    "The baby is grabbing her finger."
    ,
    
    "Let's cook hot dogs over the fire."
    ,
    
    "She caught a fish that was bigger than a dog."
    ,
    
    "He pounded his fist on the table."
    ,
    
    "He ran in lane five."
    ,
     
    "She held the babies tiny foot."
     ,
     
    "The boys enjoyed playing football every Saturday."
     ,
     
    "Many trees are in the forest."
     ,
     
    "You will need a fork and knife to eat dinner."
     ,
     
    "She will be four years old in October."
     ,
     
    "What does the fox say?"
     ,
     
    "Give me a phone call in 10 minutes."
     ,
     
    "atie can say the letters of the alphabet in order."
     ,
     
    "I love bacon, eggs, and orange juice for breakfast."
     ,
     
    "We saw buffalo at Yellowstone National Park."
     ,
     
    "We caught six catfish in the pond."
     ,
     
    "This coffee is too hot!"
     ,
     
    "The dolphin smiled at me."
     ,
     
    "The elephant is washing himself."
     ,
     
    "The goldfish has a white tail."
     ,
     
    "He put the golf ball on the tee."
     ,
    "Turn the music down in your headphones."
    ,
     
    "The lifeguard blew his whistle."
     ,
     
    "Turn on your microphone."
     ,
     
    "That chocolate muffin looks good."
     ,
     
    "The office workers were all gone."
     ,
     
    "I have played the saxophone for three years."
     ,
     
    "There is heavy traffic on the highway."
     ,
     
    "He won a trophy for his science project."
     ,
     
    "I want waffles for breakfast."
     ,
     
    "The baby calf was close to its mother."
     ,
     
    "The chef made the best pasta."
     ,
     
    "The Indian chief was the leader."
     ,
     
    "Be careful, you don't want to fall off the cliff."
     ,
     
    "I have a cough and a runny nose."
     ,
     
    "My shirt cuff got food on it during lunch."
     ,
     
    "The elf was a beautiful princess."
     ,
     
    "The giraffe has a long neck."
     ,
     
    "We ate half of the pizza."
     ,
     
    "A horse's foot is called a hoof."
     ,
     
    "The knife is made of metal."
     ,
     
    "I laugh every time I see him on TV."
     ,
     
    "The leaf fell from the tree."
     ,
     
    "Turn off the TV and go to bed."
     ,
     
    "The roof was made of clay tiles."
     ,
     
    "We have colorful books on our shelf."
     ,
     
    "The sheriff took the robber to jail."
     ,
     
    "All we could hear was a wolf howling."
     ,
     
    "You are going too fast."
     ,
     
    "Come with me."
     ,
     
    "Good afternoon."
     ,
     
    "Good morning."
     ,
     
    "Good night."
     ,
     
    "Have a good trip."
     ,
     
    "Have a good weekend."
     ,
     
    "I admire you."
     ,
     
    "I apologize."
     ,
     
    "I can’t wait."
     ,
     
    "I don’t have time."
     ,
     
    "I got it."
     ,
     
    "I hate to see you so sad."
     ,
     
    "I hope so."
     ,
     
    "I knew it."
     ,
     
    "I love you."
     ,
     
    "Let’s catch up!"
     ,
     
    "Let’s do it."
     ,
     
    "Nice to meet you."
     ,
     
    "It is polite to shake hands."
     ,
     
    "She bought a cut, color, and shampoo."
     ,
     
    "She is nice to share her ice cream."
     ,
     
    "Be careful the thorn is sharp."
     ,
     
    "I shave my face in the morning."
     ,
     
    "The sheep is standing in the grass."
     ,
     
    "He gives them a good shine every day."
     ,
     
    "The ship will be gone for 10 days."
     ,
     
    "He wore his gray shirt."
     ,
     
    "This type of shoe is for hiking."
     ,
     
    "I need to shop for groceries."
     ,
     
    "The doctor needs to give you a shot."
     ,
     
    "They massaged his sore shoulder."
     ,
     
    "He went to shovel his driveway."
     ,
     
    "She washes her hair in the shower."
     ,
     
    "She is shy around new people."
     ,
     
    "Don't put too much sugar in the lemonade."
     ,
     
    "The detective listened to her tales with a wooden face."
     ,
     
    "She was fairly certain that life was a fashion show."
     ,
     
    "The typical teenage boy’s room is a disaster area."
     ,
     
    "What storms then shook the ocean of my sleep."
     ,
     
    "The children were roses grown in concrete gardens, beautiful and forlorn."
     ,
     
    "Kisses are the flowers of love in bloom."
     ,
     
    "His cotton candy words did not appeal to her taste."
     ,
     
    "Kathy arrived at the grocery store with an army of children."
     ,
     
    "Her eyes were fireflies."
     ,
     
    "He wanted to set sail on the ocean of love but he just wasted away in the desert."];

    //function to randomly generate the sentece
function random_sentence(sentences) {
    return sentences[Math.floor(Math.random()*sentences.length)];
}

window.alert(random_sentence(sentences));
  

//user typing box
const UserTextInput = () => {
  const [value, onChangeText] = React.useState('Type in what you see');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default UserTextInput;
