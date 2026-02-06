import React from "react";
import { CONFIG } from "@/src/constants/config";
import { Metadata } from "next";
import ContactClient from "@/src/components/sections/contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with MK Enterprises for sales queries, import/export questions, or feedback regarding our timber products.",
};

export default function ContactPage() {
  return <ContactClient />;
}