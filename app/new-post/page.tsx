import InputForm from "@/components/InputForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <main className="w-full">
      <h1 className="font-extrabold text-2xl md:text-4xl pt-2">
        Generate Your AI Image
      </h1>
      <p className="pt-2 font-m">
        Create through a collection of imaginative and visually stunning images
        generated by DALL-E AI and share them with the Community
      </p>
      <Separator className="my-4 " />
      <InputForm />
    </main>
  );
};

export default page;