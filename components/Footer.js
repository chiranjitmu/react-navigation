import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Footer() {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable>
        <Text
          onPress={() => navigation.navigate("Status")}
          style={{
            marginTop: 20,
            height: 45,
            padding: 10,
            width: 120,
            position: "relative",
            left: 115,
            color: 'black',
            backgroundColor: 'yellow',
            borderWidth: 0.5,
            borderColor: 'white',
           
          }}
        >
          CHECK STATUS
        </Text>
      </Pressable>
    </View>
  );
}

export default Footer;
