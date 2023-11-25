import LandingPagePharmaciesInfo from "@/components/landingPagePharmaciesInfo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-screen md:h-screen flex flex-col  bg-white">
        <div className="py-3 px-10 flex space-between w-full h-15">
          <div className=" w-full flex flex-row justify-between items-center">
            <div className="text-black font-bold text-xl">
              <span className="font-bold text-green-500 t">Open</span>Pharma
            </div>
            <Link
              href="/app"
              className="bg-green-500 text-white p-2 rounded-md"
            >
              Ouvrir l'application
            </Link>
          </div>
        </div>

        <div className=" w-full px-10 pt-12">
          <h1 className="text-5xl text-orange-300 font-bold">
            Votre Santé, Bien-Être à Portée de Main{" "}
            <span className="text-green-500">!</span>
          </h1>

          <div className=" flex flex-1 flex-col md:flex-row w-full  text-white ">
            <div className="md:w-1/2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl text-gray-900">
                  Localisez Instantanément Votre Pharmacie
                </h1>
                <div className="w-full md:w-1/2">
                  <Image
                    className="sm:hidden"
                    alt="logo"
                    src={"/appOnPhone.png"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <p className="text-gray-800">
                  Nous vous donnons le pouvoir de localiser rapidement et
                  d'accéder aux pharmacies à proximité, surtout lorsque vous en
                  avez le plus besoin.
                </p>
                <p className="text-gray-800">
                  Notre application vous assure de trouver des pharmacies
                  ouvertes pour répondre à vos besoins de santé immédiats,
                  plaçant votre bien-être au premier plan.
                </p>
              </div>

              <Link
                href="/app"
                className="border-2 border-green-500 shadow-md hover:shadow-lg text-green-500 p-2 rounded-2xl w-[12rem] self-center "
              >
                Accéder à l'application
              </Link>
            </div>

            <div className="hidden md:block w-full md:w-1/2">
              <Image
                className=""
                alt="logo"
                src={"/appOnPhone.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <LandingPagePharmaciesInfo />
        </div>
        <div className="w-full text-center mt-5">
          Made with ❤️ by <Link href={"https://google.fr"}>this guy</Link>
        </div>
      </div>
    </>
  );
}
