import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Grid, Icon, Link, Container } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaMobileAlt, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between" wrap="wrap">
            <Box flex={1} pr={8}>
              <Heading as="h1" size="2xl" mb={4}>
                Professional Web Development Services
              </Heading>
              <Text fontSize="xl" mb={8}>
                We build modern, responsive websites that drive business growth.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3MTMyMzEyNDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={12}>
            Our Services
          </Heading>
          <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={8}>
            <Box textAlign="center">
              <Icon as={FaCode} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Web Development
              </Heading>
              <Text>We develop custom websites tailored to your business needs.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaLaptopCode} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Responsive Design
              </Heading>
              <Text>Our websites are fully responsive and work seamlessly across devices.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaMobileAlt} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Mobile-Friendly
              </Heading>
              <Text>We optimize your website for mobile devices to enhance user experience.</Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={12}>
            Our Portfolio
          </Heading>
          <Grid templateColumns={["1fr", "1fr 1fr"]} gap={8}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjAxfGVufDB8fHx8MTcxMzIzMTI0MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Portfolio 1" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Project 1
              </Heading>
              <Text>Description of Project 1</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjAyfGVufDB8fHx8MTcxMzIzMTI0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Portfolio 2" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Project 2
              </Heading>
              <Text>Description of Project 2</Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={12}>
            What Our Clients Say
          </Heading>
          <Grid templateColumns={["1fr", "1fr 1fr"]} gap={8}>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text fontSize="xl" mb={4}>
                "The team at Web Development Company did an amazing job on our website. It looks great and functions perfectly."
              </Text>
              <Text fontWeight="bold">- John Doe, Company ABC</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text fontSize="xl" mb={4}>
                "We saw a significant increase in online sales after launching our new website. Thanks, Web Development Company!"
              </Text>
              <Text fontWeight="bold">- Jane Smith, Company XYZ</Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.500" py={20} color="white">
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={8}>
            Ready to Take Your Business Online?
          </Heading>
          <Button colorScheme="white" size="lg" mb={4}>
            Get Started
          </Button>
          <Text fontSize="lg">Contact us today to discuss your web development needs.</Text>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" py={8} color="white">
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Text>&copy; 2023 Web Development Company. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <Link href="#">Home</Link>
              <Link href="#">Services</Link>
              <Link href="#">Portfolio</Link>
              <Link href="#">Contact</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
