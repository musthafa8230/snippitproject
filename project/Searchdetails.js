import React from 'react';
import {StyleSheet,  Text, View, StatusBar, Image, Button, ScrollView,TouchableOpacity   } from 'react-native';





export default class Searchdetails extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <StatusBar hidden />
        <View Style={{ backgroundColor: '#ee5253' }}>
          <Button
            title="Go to searchlist"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('List')
            }
            }
          />
        </View>
        <TouchableOpacity style={{ height: 50, width: '100%', elevation: 3, backgroundColor: 'white', alignItems: 'center', flexDirection: 'row' }}>
          <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 20 }} source={require('./assets/menu.png')} />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30, color: '#ee5253' }}>Docter's Profile</Text>
        </TouchableOpacity>
        
        <ScrollView vertical={true} style={styles.container}>
          <View style={{ backgroundColor: 'white', paddingLeft: 10, paddingTop: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: 'white', }}>
              <View style={{ width: '50%', height: '100%', backgroundColor: '#ee5253', borderRadius: 10, marginRight: 10, }}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                  <Image style={{ width: 10, height: 10, resizeMode: 'contain', marginLeft: 5, marginTop: 5 }} source={require('./assets/star.png')} />
                  <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 5, color: 'white' }}>4.5/5.0</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Dr.John Doe</Text>
                <Text style={{ fontSize: 9 }}>Dentist</Text>
                <Text style={{ fontSize: 10 }}>BDS, MBBS</Text>
                <Text style={{ fontSize: 9 }} >5 years of experience</Text>
                <Text style={{ fontSize: 9 }} >120 Consultatons</Text>
                <Text style={{ fontSize: 9, color: '#bbe7d5' }}>XYZ Hospital</Text>
                <Text style={{ fontSize: 7 }}>vasant vihar,Delhi</Text>
                <View style={{flexDirection:'row'}}>
                <Image style={{height:7,width:5}} source={require('./assets/calendar.png')}/>
                <Text style={{ fontSize: 7 }}> 28/10/2018</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Image style={{height:7,width:7}}  source={require('./assets/rupees.png')}/>
                <Text style={{ fontSize: 7 }}>700</Text>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#ee5253' }}>About the hospital</Text>
              <Text style={{ fontSize: 10, marginTop: 10 }}>Lorem ipsum dolor sit amet,consecterur adpiscing elit,sed{'\n'}do eiusmod tempor incididunt ut labore et dolore magna{'\n'}aliqua. Ut enim ad minim veniam,quis nostrud exercitation{'\n'}ullamco laboris nisi ut aliquip ex ea commondo consequat.</Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 20, color: '#ee5253' }}>XYZ Hospital</Text>
            </View>
            <ScrollView horizontal={true}
              style={{ flexDirection: 'row', height: 100, marginTop: 10, marginRight: 10 }}>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', borderRadius: 10 }}>
              </View>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }}>
              </View>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }}>
              </View>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }} />
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }}>
              </View>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }}>
              </View>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }}>
              </View>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }}>
              </View>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }}>
              </View>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }}>
              </View>
              <View style={{ height: 80, width: 80, backgroundColor: '#ee5253', marginLeft: 30, borderRadius: 10 }}>
              </View>
            </ScrollView>
            <View style={{ paddingTop: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#ee5253' }}>Reviews</Text>
            </View>
            <View style={{ width: '100%', height: 100, flexDirection: 'row', paddingTop: 10, alignItems: 'center' }}>
              <View style={{ height: 75, width: 75, borderRadius: 40, backgroundColor: '#ee5253' }}>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 5 }}>XYZ Person</Text>
              </View>
            </View>
            <Text style={{ fontSize: 10, marginTop: 10 }}>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed{'\n'}do eiusmod tempor incididunt ut labore et dlore magna{'\n'}aliquaa.Ut enim ad minim venia, quis nostrud exercitation{'\n'}ullam laboris nisi ut alliquip ex ea commodo consequat.</Text>
          </View>
        </ScrollView>
        <View style={{ height: 60, width: '100%', elevation: 3, backgroundColor: 'white', alignItems: 'center',justifyContent:'center', flexDirection: 'row', backgroundColor: 'white',padding:10 }}>
          <TouchableOpacity style={{ flexDirection: 'row', width: '40%', height: 40, borderRadius: 30, backgroundColor: '#ee5253', justifyContent: 'center', alignItems: 'center',marginRight:20 }}>
            <Text style={{ fontSize: 10, color: 'white' }}>Book online consultation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', width: '40%', height: 40, borderRadius: 30, backgroundColor: '#ee5253', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 10, color: 'white' }}>Book online consultation</Text>
          </TouchableOpacity>
        </View>
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

