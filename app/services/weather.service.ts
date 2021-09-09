import { Alert } from "react-native";
import env from "../environments/env";
import { fetchApi } from "../helpers/fetch-api.helper"

export class WeatherService {

    getWeatherTenDays = async () => {
        try {
            const result = await fetchApi(
                env.apiWeather10Days,
                'GET',
                {},
                {}
            );
            return result;
        } catch (error) {
            Alert.alert('Error', 'Error service');
        }

    }

}