const bringTheBestAudioGear = () => {
  return (
    <div className="px-6 max-w-sm mx-auto md:max-w-5xl lg:w-[1000px] lg:my-auto lg:px-0 lg:flex lg:flex-row-reverse lg:justify-between">
      <div
        className="bg-cover bg-center rounded h-96 lg:w-80"
        style={{
          backgroundImage:
            "url(https://media.graphassets.com/FtlQoVOnTtOlU4e0AQA4)",
        }}
      ></div>
      <div className="lg:max-w-[445px]">
        <div className="uppercase text-3xl font-bold my-12 text-center">
          <p>Bringing you the </p>
          <p>
            <span className="text-primary-900">best</span> audio gear
          </p>
        </div>
        <p className="text-sm text-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default bringTheBestAudioGear;
