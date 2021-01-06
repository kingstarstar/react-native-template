import * as React from 'react';
import { StyleSheet,Button,View,Text } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import { increment,asyncLogin,setToken } from '../../model/authSlice' 
import Toast from 'react-native-easy-toast';
import Spinner from 'react-native-loading-spinner-overlay';
import { storeToken } from '../../storage/storage'


const Login = ({navigation})=>{
    const dispatch = useDispatch()
    const token = useSelector(state => {
        return state.auth.token
    })
    const toastRef = React.useRef();
    const [showSpinner, setshowSpinner] = React.useState(false)
 
    function loginFun(){
        setshowSpinner(true)
        setTimeout(()=>{  
            dispatch(setToken('fake token'))
            storeToken('fake token')
            setshowSpinner(false)
        },2000)
    }
    return(
        <View>
            {/* <Button title="Login" onPress={()=>dispatch(asyncLogin('fake token'))}></Button> */}
            <Button title="Login" onPress={()=>loginFun()}></Button>
            <Text>
              token:{token}
            </Text>
            <Button title="跳转注册" onPress={()=>navigation.navigate('Register')}></Button>
            <Button title="show Loading" onPress={() => toastRef.current.show('loaidng',0)}  />
            <Toast ref={toastRef} position='center' />
            <Spinner visible={showSpinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}/>
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#000',
      fontSize:14
    }
  });