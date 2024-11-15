import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Tab2() {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>어디서 주워온 쇼파</Heading>
                    <Text>
                        좋은거야..살꺼면사.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        450,000원
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        살래?
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        카트에 널래?
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}