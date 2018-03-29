
import React from 'react';
import { StyleSheet, Button, View, Alert,Text } from 'react-native';

export default class App extends React.Component {
  home() {
    Alert.alert('Home!')
  }
  call() {
    Alert.alert('call!')
  }
  setting() {
    Alert.alert('setting!')
  }

  render() {
    return (
      <View style={styles.bg}>
      <View style={styles.container}>        
        <Button
          onPress={this.home}
          title="Home"
        />
        <Button
          onPress={this.call}
          title="Call"
        />
        <Button
          onPress={this.setting}
          title="login"
        />
      </View>
      <Text>jahskdjha</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:60,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  bg: {
    backgroundColor:'#fffae6',
  }
});
