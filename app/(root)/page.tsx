import { podcastData } from "@/constants";
import PodcastCard from "@/components/PodcastCard";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending podcast</h1>
        <div className="podcast_grid"></div>
        {podcastData.map(({ id, title, description, imgURL }) => (
          <PodcastCard
            key={id}
            imgUrl={imageURL}
            title={title}
            description={description}
            podcastId={id}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
