const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICEID as string,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID as string,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY as string,
};

export default emailConfig;