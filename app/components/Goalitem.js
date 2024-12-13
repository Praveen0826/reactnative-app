import { Text,StyleSheet, Pressable } from "react-native";
function Goalitem(props) {
    return(
        <Pressable onPress={props.onDelete} style={({pressed})=>pressed && styles.presseditem}>
                  <Text style={styles.items}>{props.text}</Text>
        </Pressable>
       
    )
    
}

const styles=StyleSheet.create({
    items:{
        margin:8,
        padding:12,
        borderRadius:6,
        backgroundColor:"black",
       color:"white"
      
      },

      presseditem:{
        opacity:0.5
      }


})

module.exports=Goalitem;

