import Image from "next/image";

function Brands() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="brand group">
        <Image src="/image/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/image/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/image/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/image/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/image/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Brands;