import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MyHeader from '../component/MyHeader';
import db from "../config";
import firebase from "firebase";

export default class medicineReminder extends React.Component{
    constructor(){
        super();
        this.state={
            userId : firebase.auth().currentUser.email,
            medicineName:'',
            medicineTime:''
        }
    }

    addMedicineReminder =(medicineName,medicineTime)=>{
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection('medicine_reminder').add({
            "user_id": userId,
            "medicine_name": medicineName,
            "medicine_time": medicineTime,
            "requested_id": randomRequestId
    })
    }       

    render(){
        return(
            <View>
                <MyHeader title="Medicine Reminder"/>
                <Image source={require('../assets/18016-medicine.gif')} style={{width: 80, height: 80}}></Image>
                <TextInput>
                    style ={[styles.formTextInput,{height:300}]}
                    placeholder={"Type the medicine"}
                    onChangeText ={(text)=>{
                        this.setState({
                            medicineName:text
                        })
                    }}
                </TextInput>
                <TextInput>
                    style ={[styles.formTextInput,{height:300}]}
                    placeholder={"Type the time of the medicine intake"}
                    onChangeText ={(text)=>{
                        this.setState({
                            medicineTime:text
                        })
                    }}
                </TextInput>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{this.addMedicineReminder(this.state.medicineName,this.state.medicineTime)}}
                    >
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
    }

const styles = StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
    },
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        width: 0,
        height: 8,
    },
})