import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import ContactFormProps from "types/contact-form";

export const ContactEmail = (formData: ContactFormProps) => {
  const { firstname, lastname, email, message, serviceType, dedicatedStaff, phone, location } = formData;
  return (
    <Html>
      <Head />
      <Preview>{firstname} {lastname} contacted Ambit</Preview>
      <Tailwind>
        <Body className="bg-[#f9f9f9] font-sans mx-auto my-auto p-4">
          <Container className="bg-white border border-solid border-[#eaeaea] rounded shadow-sm max-w-[600px] mx-auto p-[40px]">
            <Heading className="text-black text-[28px] font-semibold text-center mb-[30px]">
              New Contact Request from {firstname} {lastname}
            </Heading>
            <Text className="text-gray-700 text-[16px] leading-[28px] mb-[24px]">
              Hello,
            </Text>
            <Text className="text-gray-700 text-[16px] leading-[28px] mb-[24px]">
              {firstname} {lastname} has submitted an inquiry on the website:
            </Text>
            <Section className="bg-gray-100 p-[20px] rounded mb-[30px]">
              <Text className="text-gray-800 text-[16px] leading-[28px] mb-[10px]">
                <strong>First Name:</strong> {firstname}
              </Text>
              <Text className="text-gray-800 text-[16px] leading-[28px] mb-[10px]">
                <strong>Last Name:</strong> {lastname}
              </Text>
              <Text className="text-gray-800 text-[16px] leading-[28px] mb-[10px]">
                <strong>Email:</strong> {email}
              </Text>
              {phone &&
              <Text className="text-gray-800 text-[16px] leading-[28px] mb-[10px]">
                <strong>Phone:</strong> {phone}
              </Text>
              }
              {location &&
              <Text className="text-gray-800 text-[16px] leading-[28px] mb-[10px]">
                <strong>Location:</strong> {location}
              </Text>
              }
              <Text className="text-gray-800 text-[16px] leading-[28px] mb-[10px]">
                <strong>Message:</strong> {message}
              </Text>
              {serviceType &&
                <Text className="text-gray-800 text-[16px] leading-[28px] mb-[10px]">
                  <strong>Service Type:</strong> {serviceType}
                </Text>
              }
              {dedicatedStaff &&
                <Text className="text-gray-800 text-[16px] leading-[28px] mb-[10px]">
                  <strong>Dedicated Offshore Staff:</strong> {dedicatedStaff}
                </Text>
              }
            </Section>
            <Text className="text-gray-700 text-[16px] leading-[28px] mb-[24px]">
              Thank you
            </Text>
            <Section className="text-center mt-[40px]">
              <Text className="text-gray-500 text-[12px]">
                This is an automated message. Please do not reply to this email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
