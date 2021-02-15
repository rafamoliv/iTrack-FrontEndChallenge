import React from "react";
import { View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

export default function MapVehicle() {
  const { lastPosition } = useRoute().params;

  return (
    <View>
      <MapView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        loadingEnabled={true}
        region={{
          latitude: lastPosition.latitude,
          longitude: lastPosition.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          title={lastPosition.address}
          coordinate={{
            latitude: lastPosition.latitude,
            longitude: lastPosition.longitude,
          }}
          isPreselected={true}
        />
      </MapView>
    </View>
  );
}
