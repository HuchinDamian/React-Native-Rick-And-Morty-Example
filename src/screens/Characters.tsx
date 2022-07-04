import { useEffect, useState } from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { AllCharacter } from "../utils/types";
import { CharacterStackScreens } from "../navigators/CharacterStack";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

const Characters = () => {
  const [result, setResult] = useState<AllCharacter>({
    info: {
      count: 826,
      pages: 42,
      next: "https://rickandmortyapi.com/api/character/?page=2",
      prev: null,
    },
    results: [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          " https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      },
    ],
  });
  const navigation = useNavigation<CharacterStackScreens>()

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((value: AllCharacter) => {
        setResult(value);
      });
  }, []);

  return (
    <View>
      <List.Section>
        <FlatList
          data={result.results}
          renderItem={({ item }) => (
            <List.Item
            onPress={() => navigation.navigate('CharacterDesc', {character: item})}
              title={item.name}
              left={(props) => (
                <Image
                  source={{ uri: item.image }}
                  resizeMode="contain"
                  style={styles.photo}
                />
              )}
              right={props => <List.Icon icon={'arrow-right'}/>}
            />
          )}
          keyExtractor={(props) => props.id.toString()}
        />
      </List.Section>
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  photo: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
});
