// app/contact/page.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormInputs>();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none restart reset",
      },
    });

    tl.fromTo(titleRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2");
    tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2");
    tl.fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");

    return () => { tl.kill(); };
  }, []);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 border-3 border-[var(--border-brutal)] bg-[var(--background)] text-[var(--foreground)] font-[family-name:var(--font-ibm-plex-mono)] text-sm focus:outline-none focus:shadow-[3px_3px_0_var(--accent)] transition-shadow duration-100 placeholder:text-[var(--muted-foreground)]";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="flex flex-col items-center px-0 py-8 w-full min-w-0"
    >
      <div className="w-full max-w-2xl space-y-6 min-w-0">
        <div className="text-center md:text-left">
          <span className="mono-label">CONTACT_FORM</span>
          <h2 ref={titleRef} className="section-title mt-2">Contact Me</h2>
          <p ref={subtitleRef} className="mt-3 text-sm text-[var(--muted-foreground)] font-[family-name:var(--font-ibm-plex-mono)] uppercase tracking-wider">
            QUERY: SEND_MESSAGE → RESPONSE: ASAP
          </p>
        </div>

        <div ref={formRef} className="brutal-box p-4 sm:p-6 md:p-8 bg-[var(--surface)] w-full min-w-0">
          {submitSuccess && (
            <div className="flex items-center border-3 border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-3 mb-6 font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-widest font-bold">
              <CheckCircle className="mr-3 h-5 w-5 shrink-0" />
              MESSAGE_SENT — SUCCESS
            </div>
          )}

          {submitError && (
            <div className="flex items-center border-3 border-[var(--destructive)] bg-[var(--destructive)] text-white px-4 py-3 mb-6 font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-widest font-bold">
              <AlertTriangle className="mr-3 h-5 w-5 shrink-0" />
              ERROR: {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-[family-name:var(--font-ibm-plex-mono)] text-[0.65rem] font-bold uppercase tracking-widest mb-2">
                FIELD: NAME *
              </label>
              <input
                id="name"
                type="text"
                {...register('name', {
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
                className={inputClass}
                placeholder="YOUR_NAME"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-[var(--destructive)] font-[family-name:var(--font-ibm-plex-mono)] uppercase">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-[family-name:var(--font-ibm-plex-mono)] text-[0.65rem] font-bold uppercase tracking-widest mb-2">
                FIELD: EMAIL *
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={inputClass}
                placeholder="EMAIL@DOMAIN.COM"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-[var(--destructive)] font-[family-name:var(--font-ibm-plex-mono)] uppercase">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block font-[family-name:var(--font-ibm-plex-mono)] text-[0.65rem] font-bold uppercase tracking-widest mb-2">
                FIELD: MESSAGE *
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className={`${inputClass} resize-none`}
                rows={4}
                placeholder="YOUR_MESSAGE_HERE..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-[var(--destructive)] font-[family-name:var(--font-ibm-plex-mono)] uppercase">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="brutal-btn w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  TRANSMITTING...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
