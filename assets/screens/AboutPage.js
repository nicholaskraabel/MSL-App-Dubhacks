import React from 'react';
import { StyleSheet, Text, View, Image, Platform, ScrollView, ImageBackground} from 'react-native';

import Style from "../styles/stylesheet"
import Card from '../components/AboutPageCard';
import InfoCard from '../components/AboutPageInfoCard';


function AboutPage({navigation}){
    return(
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../img/vector-pastel-background.jpg')}>
                    <View  style={styles.heading}>
                        <Text style={Style.h1}>Mission Statement</Text>
                    </View>
                    <InfoCard
                        heading="Purpose"
                        content="This project aims to build a Multi-Sensory Learning web application for use with children who have learning disabilities and struggle to read and write."
                    />
                    <InfoCard
                        heading="What is Multi-Sensory Learning?"
                        content="It is a technique that attempts to use all the senses (taste, smell, touch, sight, hearing, and movement). This is a broad term that ranges from having students spell words in shaving cream to making theatrical performances of historical events."
                    />
                    <InfoCard
                        heading="Audience"
                        content="Our target audience are kids in kindergarten to second grade. This for two reason. First, it is far more practical and easier to design tasks for younger kids as the tasks can be shorter and less involved. Secondly, this is who would benefit them most."
                    />
                    <View  style={styles.heading}>
                        <Text style={Style.h1}>Our Team</Text>
                    </View>
                    <Card 
                        heading="Anthony"
                        content="I'm actually developing an app with react native and i'm testing with my one plus 6 and it has a notch. The SafeAreaView is a solution for the iPhone X but for Android, it seems there is no solution."
                        image={require("../img/readingPage.jpg")}
                    />
                    <Card 
                        heading="Noah"
                        content="I'm actually developing an app with react native and i'm testing with my one plus 6 and it has a notch. The SafeAreaView is a solution for the iPhone X but for Android, it seems there is no solution."
                        image={require("../img/readingPage.jpg")}
                    />
                    <Card 
                        heading="Nicholas"
                        content="I'm actually developing an app with react native and i'm testing with my one plus 6 and it has a notch. The SafeAreaView is a solution for the iPhone X but for Android, it seems there is no solution."
                        image={require("../img/readingPage.jpg")}
                    />
                    <Card 
                        heading="Brian"
                        content="I'm actually developing an app with react native and i'm testing with my one plus 6 and it has a notch. The SafeAreaView is a solution for the iPhone X but for Android, it seems there is no solution."
                        image={require("../img/readingPage.jpg")}
                        
                    />
                    <Card 
                        heading="Frank"
                        content="I am a student at Washington State University in Tri-Cities, WA. I have studied languages like Python, Java, and C++ along with the small amount of HTML/Javascripti/CSS that has allowed me to create this about page."
                        image={require("../img/Frank_Profile.jpg")}
                    />
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#afe0ff",
        alignContent: "center",
    },
    backgroundImage:{
        width: "100%",
        height: '100%',
        flex: 1,
    },
    heading:{
        resizeMode: "cover",
        paddingTop: 100,
        alignContent: "center",
        alignItems: "center",
    },

    navigation:{
        paddingTop: 40,
        paddingLeft: 30,
        justifyContent: "flex-start",
        flexDirection: "row"
    }

});



export default AboutPage;