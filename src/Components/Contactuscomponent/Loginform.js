import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Loginform = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    //companyName: '',
    email: "",
    phone: "",
    //projectDetails: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      flexDir={{ base: "column", lg: "row" }}
      w={{ base: "100%", lg: "190%" }}
      mx="auto"
      borderWidth="1px"
      mt={{ base: "140px", lg: "60px" }}
      mb="20px"
      ml={{ base: "0px", lg: "10px" }}
      boxShadow="base"
      p="6"
      bg="white"
    >
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            boxShadow="base"
            bg="#ffffff"
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            boxShadow="base"
            bg="#ffffff"
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Phone</FormLabel>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            boxShadow="base"
            bg="#ffffff"
          />
        </FormControl>

        <Box textAlign="center">
          <Button type="submit" size="lg" bg="#1a237e" colorScheme="#2d6686">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Loginform;










