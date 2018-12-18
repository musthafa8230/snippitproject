import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Button, ScrollView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window')
export default class Searchlist extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <View style={{ height: 50, width: '100%', elevation: 3, backgroundColor: 'white', alignItems: 'center', flexDirection: 'row' }}>
                    <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 20 }} source={require('./assets/menu.png')} />
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30, color: '#ee5253' }}>Search</Text>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                 
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', padding: 10 }}>
                        <View style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 10, textAlign: 'center' }}>Sort By Stars</Text>
                        </View>
                        <View style={{ height: 30, width: 100, backgroundColor: '#00a662', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ fontSize: 10, color: 'white' }}>Ascending</Text>
                        </View>
                        <View style={{ height: 30, width: 100, borderColor: '#7fd2b0', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ fontSize: 10, color: '#7fd2b0' }}>Descending</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                        <View style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 10, textAlign: 'center' }}>Sort By Experience</Text>
                        </View>
                        <View style={{ height: 30, width: 100, backgroundColor: '#00a662', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ fontSize: 10, color: 'white' }}>Ascending</Text>
                        </View>
                        <View style={{ height: 30, width: 100, borderColor: '#7fd2b0', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ fontSize: 10, color: '#7fd2b0' }}>Descending</Text>
                        </View>
                    </View>
                    <View style={{ height: height * .3, width: '100%', elevation: 3, backgroundColor: 'white', paddingLeft: 10, paddingBottom: 10, paddingRight:10, paddingTop: 15, }}>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', height: '100%', }}>
                                <View style={{ height: 75, width: 75, borderRadius: 40, backgroundColor: '#ee5253' }}>
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Dr.John Doe</Text>
                                    <Text style={{ fontSize: 12 }}>Dentist(5 Years)</Text>
                                    <Text style={{ fontSize: 12 }}>MBBS,BDS</Text>
                                    <Text style={{ fontSize: 12, color: '#bbe7d5', paddingTop: 5 }}>XYZ Hospital</Text>
                                    <Text style={{ fontSize: 10 }}>vasant vihar,Delhi</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-start', height: '100%', justifyContent: 'flex-start', paddingRight: 15 }}>
                                <Text style={{ fontSize: 9 }}>first avilable date</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ height: 12, width: 5 }} source={require('./assets/calendar.png')} />
                                    <Text style={{ fontSize: 12 }}> 28/10/2018</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingRight: 15, paddingTop: 10 }}>
                                    <Image style={{ height: 12, width: 7, paddingTop: 5 }} source={require('./assets/rupees.png')} />
                                    <Text style={{ fontSize: 12, paddingLeft: 5 }}>700</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 60, width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white' }}>
                            <View style={{ flexDirection: 'row', width: '45%', height: 40, borderRadius: 30, backgroundColor: '#ee5253', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 10, color: 'white' }}>Book online consultation</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '45%', height: 40, borderRadius: 30, backgroundColor: '#ee5253', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 10, color: 'white' }}>Book Direct Visit</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: height * .3, width: '100%', elevation: 3, backgroundColor: 'white', paddingLeft: 10, paddingRight: 10, paddingTop: 15, paddingBottom: 10, marginTop: 10,  }}>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', height: '100%', }}>
                                <View style={{ height: 75, width: 75, borderRadius: 40, backgroundColor: '#ee5253' }}>
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Dr.John Doe</Text>
                                    <Text style={{ fontSize: 12 }}>Dentist(5 Years)</Text>
                                    <Text style={{ fontSize: 12 }}>MBBS,BDS</Text>
                                    <Text style={{ fontSize: 12, color: '#bbe7d5', paddingTop: 5 }}>XYZ Hospital</Text>
                                    <Text style={{ fontSize: 10 }}>vasant vihar,Delhi</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-start', height: '100%', justifyContent: 'flex-start', paddingRight: 15 }}>
                                <Text style={{ fontSize: 9 }}>first avilable date</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ height: 12, width: 5 }} source={require('./assets/calendar.png')} />
                                    <Text style={{ fontSize: 12 }}> 28/10/2018</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingRight: 15, paddingTop: 10 }}>
                                    <Image style={{ height: 12, width: 7, paddingTop: 5 }} source={require('./assets/rupees.png')} />
                                    <Text style={{ fontSize: 12, paddingLeft: 5 }}>700</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 60, width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white' }}>
                            <View style={{ flexDirection: 'row', width: '45%', height: 40, borderRadius: 30, backgroundColor: '#ee5253', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 10, color: 'white' }}>Book online consultation</Text>
                            </View>

                            <View style={{ flexDirection: 'row', width: '45%', height: 40, borderRadius: 30, backgroundColor: '#ee5253', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 10, color: 'white' }}>Book Direct Visit</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: height * .3, width: '100%', elevation: 3, backgroundColor: 'white', paddingLeft: 10, paddingRight: 10, paddingTop: 15, paddingBottom: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', height: '100%', }}>
                                <View style={{ height: 75, width: 75, borderRadius: 40, backgroundColor: '#ee5253' }}>
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Dr.John Doe</Text>
                                    <Text style={{ fontSize: 12 }}>Dentist(5 Years)</Text>
                                    <Text style={{ fontSize: 12 }}>MBBS,BDS</Text>
                                    <Text style={{ fontSize: 12, color: '#bbe7d5', paddingTop: 5 }}>XYZ Hospital</Text>
                                    <Text style={{ fontSize: 10 }}>vasant vihar,Delhi</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-start', height: '100%', justifyContent: 'flex-start', paddingRight: 15 }}>
                                <Text style={{ fontSize: 9 }}>first avilable date</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ height: 12, width: 5 }} source={require('./assets/calendar.png')} />
                                    <Text style={{ fontSize: 12 }}> 28/10/2018</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingRight: 15, paddingTop: 10 }}>
                                    <Image style={{ height: 12, width: 7, paddingTop: 5 }} source={require('./assets/rupees.png')} />
                                    <Text style={{ fontSize: 12, paddingLeft: 5 }}>700</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 60, width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white' }}>
                            <View style={{ flexDirection: 'row', width: '45%', height: 40, borderRadius: 30, backgroundColor: '#ee5253', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 10, color: 'white' }}>Book online consultation</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '45%', height: 40, borderRadius: 30, backgroundColor: '#ee5253', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 10, color: 'white' }}>Book Direct Visit</Text>
                            </View>
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
        padding: 10,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 10
      },

});