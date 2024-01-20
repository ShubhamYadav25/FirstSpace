import AsyncStorage from "@react-native-async-storage/async-storage";

export const setTextDataSession = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(`@${key}`, value);
    } catch (e) {
      console.log(e);
    }
};

export const setObjectDataSession = async (key: string, value: any) => {
    try {
      const parsedValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@${key}`, parsedValue);
    } catch (e) {
      console.log(e);
    }
};

export const getTextDataSession = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(`@${key}`);
      return value;
    } catch (e) {
      console.log(e);
    }
};

export const getObjectDataSession = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(`@${key}`);
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        return parsedValue;
      }
      return value;
    } catch (e) {
      console.log(e);
    }
};

export const removeSessionByKey = async (key: string) => {
    try {
      await AsyncStorage.removeItem(`@${key}`);
      console.log('removing:', key);
      return;
    } catch (e) {
      console.log(e);
    }
};