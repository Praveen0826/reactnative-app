import {View,TextInput,Button, StyleSheet,Modal,Image} from 'react-native'
import { useState } from 'react';


function Goalinput(props){

  const[goaltext,setgoaltext]=useState();
    function handletextinput(text){
        setgoaltext(text)
    }
  
        function Addgoalhandler(){
            props.onAddgoal(goaltext)
            props.onclose()
        }
    return(
        <Modal onPress={props.startgoalhandler}>
 <View style={styles.textareacontainer}>
<Image style={styles.images} source={require('../../assets/images/black.png')}/>
<TextInput 
style={styles.textarea}
onChangeText={handletextinput} 
placeholder="Enter your name"/>
<View style={styles.Buttoncontainer}>
 <View style={styles.buttonchild}><Button  color="#277575"
  title="submit"
 onPress={Addgoalhandler}>
</Button></View>
 <View  style={styles.buttonchild}><Button color="#277575"
    title='cancel'
    onPress={props.onclose}
    ></Button>
</View></View>



    


</View>

        </Modal>
    
    )
}

const styles=StyleSheet.create({
    textarea:{
        borderWidth:2,
        borderColor:"#cccccc",
        width:"80%",
        marginRight:8,
        padding:8,
        color:"white"
      
      },
      textareacontainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"black"
        

      },
      Buttoncontainer:{
        flexDirection:'row',
        justifyContent:'center',
        width:"100%",
        gap:39,
        marginTop:24
      },
      buttonchild:{
            padding:4,
            borderRadius:40,
            // backgroundColor:"white"
            

      },
      images:{
        width:"60%",
        height:"50%",
        
      
        
      }

})

module.exports=Goalinput;