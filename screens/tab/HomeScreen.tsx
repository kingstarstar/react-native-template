import * as React from 'react';
import { StyleSheet,Button } from 'react-native';

import { Text, View } from '../../components/Themed';

import { useSelector,useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { increment } from '../../model/authSlice'
import { RootState } from '../../model/reducers'

function TabOneScreen(props:IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="+1s" onPress={()=>props.increment()} />
      <View>
        <Text>
          {props.count}
        </Text>
      <Text>{props.token}</Text>
      </View>
    </View>
  );
}
interface IProps{
  increment:any,
  count:number,
  navigation:any
}
function mapStateToProps(state:RootState){
  return{
    count:state.auth.count,
    token:state.auth.token
  }
}
const mapDispatchToProps = { increment }


export default connect(mapStateToProps,mapDispatchToProps)(TabOneScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
