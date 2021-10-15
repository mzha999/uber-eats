import { useNavigation } from "@react-navigation/core";
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {YELP_API_KEY} from "@env"

export const localRestaurants = [
  {
    name: "The Coffee Club Glenfield Mall",
    image_url:
    "https://www.thecoffeeclub.co.nz/media/1803/903-after-refurb.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 14,
    rating: 4.1,
  },
  {
    name: "The Shelf",
    image_url: "https://theshelfcafe.co.nz/wp-content/uploads/2020/04/about1-1024x796.png",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 33,
    rating: 4.7,
  },
  {
    name: "Hansan Newmarket",
    image_url: "https://www.google.com/maps/uv?pb=!1s0x6d0d4879e4801d8b%3A0x42797b8899bf5dd4!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNEY4zFJxpMeeZMtWFvSmZm_YwZXyz7aLhy6H5q%3Dw239-h160-k-no!5sHansan%20(Newmarket)%20-%20Google%20%E6%90%9C%E7%B4%A2!15sCgIgAQ&imagekey=!1e10!2sAF1QipNEY4zFJxpMeeZMtWFvSmZm_YwZXyz7aLhy6H5q&hl=zh-CN&sa=X&ved=2ahUKEwjr3OOvg8vzAhXpzTgGHeJIBOcQoip6BAhuEAM#",
    categories: ["Vietnamese", "Restaurant"],
    price: "$$",
    reviews: 406,
    rating: 4.7,
  },
];
export default function Restaurants (props){
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
  const navigation = useNavigation();
  let city = props.route.params.city.city
  
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantsData(
          json.businesses
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);
  return (
    <ScrollView>
      {restaurantsData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
const RestaurantImage = ({ image }) => (
  <View>
    <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />

    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color={"white"} />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
