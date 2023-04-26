import { View, Text } from "react-native";
import React from "react";

const Status = () => {
  return (
    <View
      style={{
        alignSelf: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "black",
        height: '100%',

      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "white",
          marginLeft: 100
      
        }}
      >
        Updating....
      </Text>
    </View>
  );
};

export default Status;
