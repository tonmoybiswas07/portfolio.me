"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "tonmoybiswas13900@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.info("Email copied to clipboard! 📋");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || !formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_d4kbme1",
        "template_zbitgit",
        formRef.current,
        "V1YUuKLLEw6rslv9W"
      );

      toast.success("Message sent successfully! 🚀 I will get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Could not send message automatically. Please reach out directly to tonmoybiswas13900@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope size={16} className="text-[#22D3EE]" />,
      label: "Direct Email",
      value: email,
      action: "copy",
    },
    {
      icon: <FaMapMarkerAlt size={16} className="text-[#22D3EE]" />,
      label: "Current Location",
      value: "Dhaka, Bangladesh",
      action: "none",
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Start a Conversation"
          description="Have a question, full-time opportunity, freelance inquiry, or just want to discuss software engineering? I would love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
          {/* LEFT: Contact Information & Availability */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR FULL-TIME &amp; CONTRACT ROLES</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#F8FAFC] sm:text-3xl">
              Ready to create performant web experiences together?
            </h3>

            <p className="text-sm leading-relaxed text-[#94A3B8] sm:text-base">
              Whether you need frontend engineering, complete full-stack MERN
              applications, or performance tuning, I bring dedication and attention to detail to every commit.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  onClick={method.action === "copy" ? handleCopyEmail : undefined}
                  className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-[#151F32] p-4 transition-all hover:border-[#22D3EE]/30 cursor-pointer shadow-lg"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-[#0B1220]">
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        {method.label}
                      </p>
                      <p className="text-sm font-semibold text-[#F8FAFC]">
                        {method.value}
                      </p>
                    </div>
                  </div>

                  {method.action === "copy" && (
                    <button
                      type="button"
                      aria-label="Copy Email Address"
                      className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#0B1220] px-2.5 py-1 text-xs text-[#94A3B8] transition-colors hover:border-[#22D3EE]/40 hover:text-[#22D3EE]"
                    >
                      {copied ? (
                        <>
                          <FaCheck size={11} className="text-emerald-400" />
                          <span className="font-mono text-[10px] text-emerald-400">
                            Copied
                          </span>
                        </>
                      ) : (
                        <>
                          <FaCopy size={11} />
                          <span className="font-mono text-[10px]">Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Response Time Guarantee */}
            <div className="rounded-xl border border-slate-800/80 bg-[#151F32]/60 p-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8]">
                <span className="text-[#22D3EE] font-bold">&gt;</span>
                <span>Response turnaround: usually within 24 hours.</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-slate-800/90 bg-[#151F32] p-6 sm:p-8">
              {/* Terminal Title Bar */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                </div>

                <span className="font-mono text-xs text-[#94A3B8]">
                  send_message.sh
                </span>

                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              <form ref={formRef} onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="user_name"
                    className="mb-1.5 block font-mono text-xs font-medium text-[#94A3B8]"
                  >
                    Your Name
                  </label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-800 bg-[#0B1220] px-4 py-3 text-sm text-[#F8FAFC] outline-none transition-colors placeholder:text-slate-600 focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="mb-1.5 block font-mono text-xs font-medium text-[#94A3B8]"
                  >
                    Email Address
                  </label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-[#0B1220] px-4 py-3 text-sm text-[#F8FAFC] outline-none transition-colors placeholder:text-slate-600 focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block font-mono text-xs font-medium text-[#94A3B8]"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full rounded-xl border border-slate-800 bg-[#0B1220] px-4 py-3 text-sm text-[#F8FAFC] outline-none transition-colors placeholder:text-slate-600 focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-xs font-medium text-[#94A3B8]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project, timeline, and requirements..."
                    className="w-full resize-none rounded-xl border border-slate-800 bg-[#0B1220] px-4 py-3 text-sm text-[#F8FAFC] outline-none transition-colors placeholder:text-slate-600 focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full py-3.5 gap-2 text-sm font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner size={14} className="animate-spin text-[#0B1220]" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane size={13} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
