
import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, FlatList } from 'react-native';
import { WeatherService } from '../services/weather.service';
import { Ionicons } from '@expo/vector-icons'; 

interface Props {
    navigation: any
}

let weatherTDInteface: WeatherTenDaysInteface[] = [];

const WeatherTenDaysList = (props: any) => {

    const [isLoading, setLoading] = useState(false);
    const [weatherList, setWeather] = useState<WeatherTenDaysInteface[]>([]);

    let weatherService = new WeatherService();

    useEffect(() => {
        setLoading(true);
        weatherService.getWeatherTenDays()
            .then(
                (result: any) => {
                    for (let index = 0; index < result.data.calendarDayTemperatureMax.length; index++) {
                        let model: WeatherTenDaysInteface = {
                            temperatureMax: result.data.calendarDayTemperatureMax[index],
                            temperatureMin: result.data.calendarDayTemperatureMin[index],
                            day: result.data.dayOfWeek[index],
                            narrative: result.data.narrative[index],
                        }
                        weatherTDInteface.push(model);
                    }
                    if (weatherTDInteface.length) {
                        setWeather(weatherTDInteface);
                    }
                    setLoading(false);
                }
            )
            .catch(
                e => {
                    setLoading(false);
                }
            );

    }, []);

    return (
        <View style={{ width: "auto", flex: 5, padding: 10 }}>
            {
                isLoading ? <Text style={{ color: 'white', textAlign: 'center' }}>Loading...</Text> :
                    <FlatList
                        data={weatherList}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
                                <View style={{ flex: 1 }}>
                                <Ionicons name="ios-thunderstorm-sharp" size={24} color="white" />
                    
                                </View>
                                <View style={{ flex: 3 }}>
                                    <Text style={{ color: "white", fontSize: 18 }}>
                                        {item.day}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: "white", fontSize: 18 }}>
                                        {item.temperatureMax} / {item.temperatureMin}
                                    </Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
            }

        </View>
    );
}

export default WeatherTenDaysList;