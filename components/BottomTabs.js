import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs(city) {
  const navigation = useNavigation()
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" onPress={() => navigation.navigate("Home")}/>
      <Icon icon="search" text="Browse" onPress={() => navigation.navigate("Restaurants", {city: city})}/>
      <Icon icon="shopping-bag" text="Grocery" onPress={() => navigation.navigate("OrderCompleted")}/>
      <Icon icon="receipt" text="Orders" onPress={() => navigation.navigate("OrderCompleted")}/>
      <Icon icon="user" text="Account" onPress={() => navigation.navigate("Home")}/>
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        onPress={props.onPress}
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

