import { NativeBaseProvider, Center, HStack, Button, Text, Switch } from "native-base";
import { setCounter,increaseOne,decreaseOne } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter } from "../redux/counterSlice";


const CountScreen = () => {
    const counter =useSelector(selectCounter);
    const dispatch=useDispatch();
    return (
      <NativeBaseProvider>
        <Center flex={1}>
          <HStack space={20}>
            <Button borderRadius={0} width={70} onPress={() => dispatch(increaseOne())}>
              <Text fontSize={40} >+</Text>
            </Button>
            <Button borderRadius={0} width={70} onPress={() => dispatch(decreaseOne())}>
              <Text fontSize={40} >-</Text>
            </Button>
          </HStack>
          <Text fontSize={40} mt={20} >
            {counter}
          </Text>
        </Center>
      </NativeBaseProvider>
    );
  }

  export default CountScreen;