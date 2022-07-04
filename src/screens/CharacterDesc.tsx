import { ScrollView } from "react-native";
import { Card, List, Subheading } from "react-native-paper";
import { characterProps } from "../utils/types";

interface CharacterDescProps {
  route: {
    params: {
      character: characterProps;
    };
  };
}

const CharacterDesc = ({ route }: CharacterDescProps) => {
  const character = route.params.character;
  return (
    <ScrollView>
      <Card>
        <Card.Cover source={{ uri: character.image }} />
        <Card.Title title={character.name} />
      </Card>
      <List.Section>
        <List.Item
          title="Especie: "
          right={(props) => (
            <Subheading style={props.style}>{character.species}</Subheading>
          )}
        />
        {character.type !== "" && (<List.Item
          title="Subespecie: "
          right={(props) => (
            <Subheading style={props.style}>{character.type}</Subheading>
          )}
        />)}
        <List.Item
          title="Status: "
          right={(props) => (
            <Subheading style={props.style}>{character.status}</Subheading>
          )}
        />
        <List.Item
          title="Genero: "
          right={(props) => (
            <Subheading style={props.style}>{character.gender}</Subheading>
          )}
        />
        <List.Item
          title="Original locación: "
          right={(props) => (
            <Subheading style={props.style}>{character.origin.name}</Subheading>
          )}
        />
        <List.Item
          title="Ubicación actual: "
          right={(props) => (
            <Subheading style={props.style}>{character.location.name}</Subheading>
          )}
        />
        <List.Item
          title="Fecha de creación: "
          right={(props) => (
            <Subheading style={props.style}>{new Date(character.created).toLocaleString('es-mx', {dateStyle: "medium"})}</Subheading>
          )}
        />
      </List.Section>
    </ScrollView>
  );
};
export default CharacterDesc;
