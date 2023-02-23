import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  text: string;
}

export const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      data-testid="button"
      h="150px"
      w="300px"
      color="#222"
      bg="pink.700"
      {...rest}
    >
      {text}
    </ChakraButton>
  );
};
