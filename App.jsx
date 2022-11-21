import {
  SafeAreaView,
  StatusBar,

} from "react-native";
import React from "react";
import Main from "./Main";
import { DrugsProvider } from "./context/context-store";
import Test from "./screens/Test";



const App = () => {

  return (
    <DrugsProvider>
      <StatusBar />
      <SafeAreaView style={{flex: 1 }}>
        {/* <Test/> */}
        <Main/>
      </SafeAreaView>
    </DrugsProvider>
  );
};

export default App;
