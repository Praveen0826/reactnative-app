import { useState } from "react";
import { Text, View,Button, StyleSheet,TextInput,ScrollView,FlatList } from "react-native";
import Goalitem from "./components/Goalitem";
import Goalinput  from "./components/Goalinput" 
import { StatusBar } from "expo-status-bar";

export default function Index() {


  const [goals,setgoals]=useState([]);
  const[isvisible,setisvisible]=useState(false);


 
  
  

  function handlesubmit(goaltext){
   setgoals((currentgoal)=>[...currentgoal,goaltext])
    
  }

  function handledelete(index){
   const newgoals=goals.filter((el,i)=>i!=index)
   setgoals(newgoals);
    
  }
function startgoalhandler(){
  setisvisible(true)
}
function closegoalhandler(){
  setisvisible(false)
}


  return (
  <>
    {/* <StatusBar/> */}
    <View style={styles.appcontainer}>

      <Button title="Add New Goal" color="black" onPress={startgoalhandler} ></Button>
      {isvisible && <Goalinput onAddgoal={handlesubmit} onclose={closegoalhandler} onopen={startgoalhandler} />}
     
      <View style={styles.bottomcontainer}>
        <FlatList
        data={goals}
        renderItem={(itemdata)=>{


          return(
            <Goalitem text={itemdata.item} onDelete={()=>handledelete(itemdata.index)}/>
          )
          
        }
        }
        
        />

        <ScrollView>
        
        </ScrollView>
      </View>
      
    </View>
    </>
  );
}

const styles=StyleSheet.create({
  appcontainer:{
   paddingHorizontal:16,
   paddingTop:30,
   flex:1
  },

bottomcontainer:{
  flex:4
},




  
})