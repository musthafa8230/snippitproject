import React from 'react';
import {StyleSheet,  Text, View, StatusBar, Image, Button, ScrollView,Dimensions   } from 'react-native';


const { width } = Dimensions.get('window')





export default class Homescreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <View Style={{ backgroundColor: '#ee5253' }}>
          <Button
            title="Go to searchdetails"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Search')
            }
            }
          />
        </View>
        <View style={{ height: 50, width: '100%', elevation: 3, backgroundColor: 'white', alignItems: 'center', flexDirection: 'row' }}>
          <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 20 }} source={require('./assets/menu.png')} />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30, color: '#ee5253' }}>Home</Text>
        </View>
        <View Style={{ backgroundColor: 'white' }}>
        </View>
        <ScrollView vertical={true} contentContainerStyle={styles.content}>
          <View style={{ width: '100%', sjustifyContent: 'center', alignItems: 'center',paddingBottom:20 }}>
            <View style={{ height: 200, width: '120%', backgroundColor: '#ee5253', borderBottomRightRadius: width * 1, borderBottomLeftRadius: width * 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', height: '30%', width: '60%', borderRadius: 20, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 15 }}>Search</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 10, height: 100, width: '100%', paddingLeft: 30, paddingRight: 20 }}>
            <View style={{ width: '40%', height: '80%', backgroundColor: 'white', elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>Opthalmology</Text>
            </View>
            <View style={{ width: '40%', height: '80%', backgroundColor: 'white', elevation: 3, marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>Dental</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 10, height: 100, width: '100%', paddingLeft: 30, paddingRight: 20 }}>
            <View style={{ width: '40%', height: '80%', backgroundColor: 'white', elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>Cardiology</Text>
            </View>
            <View style={{ width: '40%', height: '80%', backgroundColor: 'white', elevation: 3, marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>Neurology</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 10, height: 100, width: '100%', paddingLeft: 30, paddingRight: 20 }}>
            <View style={{ width: '40%', height: '80%', backgroundColor: 'white', elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>Dermatology</Text>
            </View>
            <View style={{ width: '40%', height: '80%', backgroundColor: 'white', elevation: 3, marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>Pediatric</Text>
            </View>
          </View>
        </ScrollView>
      </View>










    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
    }
  });
