"use client";

import React, { useState } from "react";
import { 
  TextField, 
  Button, 
  Box, 
  CircularProgress,
  Snackbar,
  Alert
} from "@mui/material";

// PRD Section 3.9 — CTA Section Contact Form
// Layout: Box grid for maximum compatibility and clean production build.
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      
      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, 
          gap: 3 
        }}
      >
        {/* Name Input */}
        <TextField
          fullWidth
          required
          name="name"
          label="NAME"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
        
        {/* Email Input */}
        <TextField
          fullWidth
          required
          name="email"
          type="email"
          label="EMAIL"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />

        {/* Message Input */}
        <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
          <TextField
            fullWidth
            required
            multiline
            rows={5}
            name="message"
            label="MESSAGE"
            value={form.message}
            onChange={handleChange}
            placeholder="How can I help you?"
          />
        </Box>

        {/* Submit Button */}
        <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            size="large"
            sx={{ 
              px: 6, 
              py: 2, 
              backgroundColor: "#3B82F6",
              width: { xs: '100%', sm: 'auto' },
              "&:hover": { backgroundColor: "#2563EB" }
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "SEND MESSAGE —"}
          </Button>
        </Box>
      </Box>

      {/* Success/Error Alerts */}
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Message sent successfully! I&apos;ll get back to you soon.
        </Alert>
      </Snackbar>

      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert severity="error" sx={{ width: "100%" }}>
          Failed to send message. Please try again or email me directly at kevalmistry5927@gmail.com
        </Alert>
      </Snackbar>
    </Box>
  );
}
