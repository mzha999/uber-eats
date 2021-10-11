import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const HeaderTabs = () => {
   const [active, setActive] = useState('Delivery'); 
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" active={active} setActive={setActive}/>
      <HeaderButton text="Pickup" active={active} setActive={setActive}/>
    </View>
  );
};

export default HeaderTabs;
const HeaderButton = (props) => (
  <View
    style={{
      backgroundColor: props.active ===props.text ? 'black': 'white',
      paddingVertical: 5,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
  >
    <TouchableOpacity onPress={()=> props.setActive(props.text)}>
      <Text style={{ color: props.active===props.text  ? 'white': 'black', fontWeight:"800" }}>{props.text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 50,
  },
});
