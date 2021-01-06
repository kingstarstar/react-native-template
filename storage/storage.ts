import AsyncStorage from '@react-native-async-storage/async-storage';  

const storage_Key = 'storage_Key'

export const storeToken = async (token:string) => {
    try {
      await AsyncStorage.setItem(storage_Key, token)
    } catch (e) {
      // saving error
    }
  }
export const getStoreToken = async ()=>{
    try {
      return await AsyncStorage.getItem(storage_Key)
      } catch (e) {
        // saving error
      }
}