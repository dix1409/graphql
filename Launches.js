import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';


const GET_LAUNCHES = gql`
  query {
    launches(limit: 5) {
      mission_name
      launch_date_utc
    }
  }
`;

export default function Launches() {
    const { loading, error, data } = useQuery(GET_LAUNCHES);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :</Text>;

    return (
        <View>
            {data.launches.map(launch => (
                <View key={launch.mission_name} >
                    <Text style={styles.text}>{launch.mission_name}</Text>
                    <Text style={styles.time}>{launch.launch_date_utc}</Text>
                </View>
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "red",
        textAlign: "center",

    },
    time: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 140,
        borderRadius: 5,
        borderColor: "blue",
        backgroundColor: "steelblue",
        width: 120,

    }
})