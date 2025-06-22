import Image from "next/image";
import heroImage from "../../../public/dayli_main.jpg";

const About = () => {
  return (
    <Image
      src={heroImage}
      alt="dayli-main-image"
      sizes="100%"
      className="object-cover m-auto h-screen opacity-25"
    />
  );
};

export default About;
