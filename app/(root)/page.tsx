import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async ({searchParams}: {searchParams: Promise<{ query?: string }>}) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt : new Date(),
      views : 55,
      author : {id:1 , name : "Amit Dahiya"},
      _id : 1,
      description : "This is description",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz34SiitFJxoxjLMtHbHM63fOvhlOHYAmG6g&s",
      category : "Robots",
      title : "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
            {query ? `Search result for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
              {posts?.length > 0 ? (posts.map((post:StartupCardType, index: number)=> (<StartupCard key={post?._id} post = {post}/>) ) ) : (
                <p className="no-results">No Startups found </p>
              ) }
        </ul>

      </section>

    </>
  );
};

export default Home;
