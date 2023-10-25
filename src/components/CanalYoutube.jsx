const CanalYoutube = () => {
  return (
    <section className="container">
      <div className="text-center">
        <h1 className="text-white my-5">
          Tambien podes conocernos a traves de nuestro canal
        </h1>
      </div>
      <div className="text-center video-container">
        <iframe
          src="https://www.youtube.com/embed/eKOTuG3UHU8?si=FBVf4e5vuOG__rLp"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default CanalYoutube;
