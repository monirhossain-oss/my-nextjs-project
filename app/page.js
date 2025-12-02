// app/page.jsx (Server Component)
import slider1 from "@/public/image/female.jpg";
import slider2 from "@/public/image/female.jpg";
import slider3 from "@/public/image/female.jpg";
import SliderClient from "./components/SliderClient";

export default function Page() {
  const images = [slider1.src, slider2.src, slider3.src];
  console.log(images);

  return (
    <div className="p-6">
      <SliderClient images={images} />
    </div>
  );
}
