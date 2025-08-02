import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Paper,
  PasswordInput,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import LoginBackgroundImage from "../../assets/images/login.jpg";
import useLogin from "./useLogin";
function Login() {
  const {
    form: { getInputProps },
    handleSubmit,
    isPending
  } = useLogin();
  return (
    <SimpleGrid cols={{base:1,md:2}}>
      <Box visibleFrom="md">
        <Image src={LoginBackgroundImage} radius="sm" h={"100vh"} fit="cover" />
      </Box>
      <Center h={'100vh'}>
        <Paper shadow="sm" p="xl">
          <Flex
            align={"center"}
            justify={"center"}
            direction={"column"}
            mb={"xl"}
          >
            <Title>Welcome Back!</Title>
            <Text ta={'center'}>
              Please log in to access your dashboard and manage your account
              securely.
            </Text>
          </Flex>

          <TextInput
            label="Email"
            placeholder="Enter Your Email"
            {...getInputProps("email")}
            required
            mb={"xs"}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            {...getInputProps("password")}
            required
            mb={"xs"}
          />

          <Button loading={isPending} fullWidth bg={"#5d70ff"} onClick={() => handleSubmit()} mt={'md'}>
            Login
          </Button>
        </Paper>
      </Center>
    </SimpleGrid>
  );
}

export default Login;
