'use client';
import React, {useId, useState} from 'react';
import Link from 'next/link';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Button} from '@/components/temp/Button';
import {Container} from '@/components/temp/Container';
import {FadeIn, FadeInStagger} from '@/components/temp/FadeIn';
import {SocialMedia} from '@/components/temp/SocialMedia';
import FAQ from "@/components/FAQ";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {sendEmail} from '@/libs/mailgun';

function TextInput({label, ...props}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    let id = useId();

    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                type="text"
                id={id}
                {...props}
                placeholder=" "
                className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
            >
                {label}
            </label>
        </div>
    );
}

function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            instagram: '',
            onlyfans: '',
            phone: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            instagram: Yup.string().required('Instagram is required'),
            onlyfans: Yup.string().required('OnlyFans is required'),
            phone: Yup.string().required('Phone is required'),
        }),
        onSubmit: async (values, {resetForm}) => {
            setIsSubmitting(true);
            try {
                await sendEmail({
                    to: 'grzegorz.wojtak@gmail.com',
                    subject: 'Contact Form Submission',
                    text: JSON.stringify(values, null, 2),
                });
                toast.success('Message sent successfully!');
                resetForm();
            } catch (error) {
                toast.error('Failed to send message.');
            } finally {
                setIsSubmitting(false);
            }
        },
    });

    return (
        <FadeIn className="lg:order-last">
            <form onSubmit={formik.handleSubmit}>
                <h2 className=" text-3xl font-medium text-slate-800">
                    Join Us!
                </h2>
                <p className="mt-6 text-base text-neutral-600">
                    Interested in partnering with us or learning more about our products? Fill out the form below, and
                    we’ll get back to you shortly. Join our growing network of influencers and take the next step in
                    connecting with your audience.
                </p>

                <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                    <TextInput label="Name" name="name" autoComplete="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                    {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
                    <TextInput label="Email" type="email" name="email" autoComplete="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
                    <TextInput label="Instagram" name="instagram" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.instagram} />
                    {formik.touched.instagram && formik.errors.instagram ? <div className="text-red-500">{formik.errors.instagram}</div> : null}
                    <TextInput label="OnlyFans" name="onlyfans" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.onlyfans} />
                    {formik.touched.onlyfans && formik.errors.onlyfans ? <div className="text-red-500">{formik.errors.onlyfans}</div> : null}
                    <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                    {formik.touched.phone && formik.errors.phone ? <div className="text-red-500">{formik.errors.phone}</div> : null}
                    <TextInput label="Message" name="message" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} />
                </div>
                <Button type="submit" className="mt-10" disabled={isSubmitting}>
                    {isSubmitting ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Send message'}
                </Button>
            </form>
            <ToastContainer />
        </FadeIn>
    );
}

function ContactDetails() {
    return (
        <FadeIn>
            <h2 className=" text-3xl font-medium text-slate-800">
                Quick contact
            </h2>
            <p className="mt-6 text-base text-neutral-600">
                If you prefer direct communication, feel free to reach out to us via email. Our team is ready to assist
                you with any inquiries or support you may need. Don’t hesitate to get in touch—we’re here to help you
                every step of the way.
            </p>

            <dl className="mt-12 grid grid-cols-1 gap-12 text-sm sm:grid-cols-2">
                {[
                    ['General', 'contact@coneflesh.com'],
                    ['Support', 'support@coneflesh.com'],
                    ['Shop', 'shop@coneflesh.com'],
                    ['B2B', 'b2b@coneflesh.com'],
                ].map(([label, email]) => (
                    <div key={email}>
                        <dt className="font-semibold text-neutral-950">{label}</dt>
                        <dd>
                            <Link
                                href={`mailto:${email}`}
                                className="text-neutral-600 hover:text-neutral-950"
                            >
                                {email}
                            </Link>
                        </dd>
                    </div>
                ))}
            </dl>

            <h2 className="mt-12 font-display text-base font-semibold text-neutral-950">
                Follow us
            </h2>
            <SocialMedia className="mt-6" />
        </FadeIn>
    );
}



export default function Contact() {
    return (
        <>
            <Container>
                <FadeInStagger>
                    <div className={'py-12 mb-12 space-y-6 border-b'}>
                        <h1 className={'text-6xl font-bold  max-w-3xl -tracking-wider'}>Let’s work <span
                            className={'text-teal-500'}>together</span></h1>
                        <p className={'text-slate-600 pr-12 text-lg max-w-xl'}>Earn extra income effortlessly—let us handle everything from production to discreet delivery. No extra work for you, just a seamless process that turns your influence into additional revenue.</p>
                    </div>
                </FadeInStagger>
            </Container>
            <Container className="mb-24 ">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </Container>
            <FAQ />
        </>
    );
}
