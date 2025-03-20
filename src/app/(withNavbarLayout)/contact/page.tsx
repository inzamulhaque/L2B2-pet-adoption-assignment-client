"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  Paper,
  InputAdornment,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Subject as SubjectIcon,
  Message as MessageIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material";

import React, { useState } from "react";

// Office hours data
const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

// FAQ data
const faqs = [
  {
    question: "How can I adopt a pet?",
    answer:
      "To adopt a pet, browse our available animals online, submit an application form, and our team will contact you to schedule a meet and greet with your potential new family member.",
  },
  {
    question: "What are the adoption fees?",
    answer:
      "Adoption fees vary depending on the animal. Dogs typically range from $150-$300, cats from $75-$150. All adoption fees include spay/neuter, vaccinations, and microchipping.",
  },
  {
    question: "Can I volunteer at the shelter?",
    answer:
      "Yes! We welcome volunteers. Please fill out our volunteer application form, and we'll contact you about orientation sessions and available opportunities.",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, this would be an API call to send the message
      console.log("Contact form data:", formData);

      // Show success message
      setSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        {/* Hero Section */}
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
            textAlign: "center",
          }}
        >
          <Container>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                maxWidth: 800,
                mx: "auto",
                mb: 4,
                color: "text.secondary",
              }}
            >
              We&apos;d love to hear from you. Reach out with questions,
              feedback, or to learn more about our adoption process.
            </Typography>
          </Container>
        </Box>

        {/* Main Content */}
        <Container sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={7}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ mb: 4, fontWeight: 600 }}
              >
                Send Us a Message
              </Typography>

              {submitted ? (
                <Paper
                  sx={{
                    p: 4,
                    bgcolor: "success.light",
                    color: "success.contrastText",
                    mb: 4,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Thank you for your message!
                  </Typography>
                  <Typography variant="body1">
                    We&apos;ve received your inquiry and will get back to you as
                    soon as possible.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </Paper>
              ) : (
                <Card sx={{ p: 4 }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      margin="normal"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      margin="normal"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      margin="normal"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SubjectIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      margin="normal"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ alignSelf: "flex-start", mt: 1.5 }}
                          >
                            <MessageIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ mt: 3, px: 4, py: 1.5 }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Card>
              )}
            </Grid>

            {/* Contact Information */}
            <Grid item xs={5}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ mb: 4, fontWeight: 600 }}
              >
                Get in Touch
              </Typography>

              <Card sx={{ p: 4, mb: 4 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <LocationIcon
                      sx={{
                        color: "primary.main",
                        fontSize: 24,
                        mr: 2,
                        mt: 0.5,
                      }}
                    />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Our Location
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        123 Adoption Street
                        <br />
                        Pet City, PC 12345
                        <br />
                        United States
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <PhoneIcon
                      sx={{
                        color: "primary.main",
                        fontSize: 24,
                        mr: 2,
                        mt: 0.5,
                      }}
                    />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Phone Number
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Main: (123) 456-7890
                        <br />
                        Adoption Hotline: (123) 456-7891
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <EmailIcon
                      sx={{
                        color: "primary.main",
                        fontSize: 24,
                        mr: 2,
                        mt: 0.5,
                      }}
                    />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Email Address
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        General Inquiries: info@pawsforever.com
                        <br />
                        Adoption: adopt@pawsforever.com
                        <br />
                        Volunteer: volunteer@pawsforever.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <TimeIcon
                      sx={{
                        color: "primary.main",
                        fontSize: 24,
                        mr: 2,
                        mt: 0.5,
                      }}
                    />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Office Hours
                      </Typography>
                      {officeHours.map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ fontWeight: 500 }}
                          >
                            {item.day}:
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {item.hours}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Card>

              {/* Map */}
              <Card sx={{ p: 0, overflow: "hidden" }}>
                <Box
                  component="img"
                  src="/placeholder.svg?height=300&width=500&text=Map"
                  alt="Location Map"
                  sx={{ width: "100%", height: 300, objectFit: "cover" }}
                />
              </Card>
            </Grid>
          </Grid>

          {/* FAQs Section */}
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 4, fontWeight: 600, textAlign: "center" }}
            >
              Frequently Asked Questions
            </Typography>

            <Grid container spacing={4}>
              {faqs.map((faq, index) => (
                <Grid item xs={4} key={index}>
                  <Card sx={{ p: 4, height: "100%" }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      {faq.question}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body1" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
