import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./colors";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
        marginRight: 5,
        borderBottomWidth: 0.6,
        borderColor: "white",
      }}
    >
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={require("../assets/cars/telsa-logo.png")}
                style={styles.image}
              />
              <View style={{position: 'absolute', top: '50%'}}>
                <Button title="Sign-in with Google"/>
              </View>

              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <MaterialCommunityIcons
                  name="window-close"
                  color={colors.light}
                  style={styles.windowclose}
                />
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons
            name="menu"
            color={colors.light}
            style={{ fontSize: 40, position: "relative", right: 120, top: -25 }}
          />
        </Pressable>
      </View>

      <LinearGradient
        style={{
          height: 40,
          width: 40,
          marginRight: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        colors={[colors.light, colors["dark-gray"]]}
      >
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            backgroundColor: colors.black,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/cars/telsa-logo.png")}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
     </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    height: 550,
    width: 300,
  },
  View: {
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    height: 600,
    width: 300,
  },

  image: {
    resizeMode: "contain",
    width: 400,
    height: 400,
    position: "absolute",
    top: -50,
  },

  windowclose: {
    color: "black",
    textAlign: "center",
    position: "absolute",
    fontSize: 35,
    left: 90,
    top: 10,
  },
});

export default Header;
