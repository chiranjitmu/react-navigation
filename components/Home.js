import { View, SafeAreaView } from "react-native";
import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Header from "./Header";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "black" }}>
        <Header />
        <Hero />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Home;
