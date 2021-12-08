import AsyncStorage from "@react-native-community/async-storage";

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("passage", value);
  } catch (e) {
    console.log(e);
  }
};
// get item
export const getData = async (setText) => {
  try {
    const value = await AsyncStorage.getItem("passage");
    if (value !== null) {
      console.log("async", value);
      setText(value);
    }
  } catch (e) {
    console.log(e);
  }
};
