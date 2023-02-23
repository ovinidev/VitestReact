import {
  Flex,
  Heading,
  Input,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "./components/Button";

export default function App() {
  const [list, setList] = useState(["Vini", "Maicon"]);
  const [input, setInput] = useState("");

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, input]);
    }, 500);
  }

  function removeFromList(itemList: string) {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== itemList));
    }, 500);
  }

  return (
    <Flex w="100%" h="100vh" align="center" justify="center" direction="column">
      <Input
        data-testid="input"
        w={200}
        onChange={(e) => setInput(e.target.value)}
      />

      <List spacing="8">
        {list.map((item) => {
          return (
            <Flex>
              <ListItem>{item}</ListItem>
              <Button onClick={() => removeFromList(item)} text="Remover" />
            </Flex>
          );
        })}
      </List>

      <Button text="Adicionar" onClick={addToList} />
    </Flex>
  );
}
