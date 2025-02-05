import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import Card from "@/components/Card/Card";
import CardIcon from "@/components/CardIcon/CardIcon";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <Navigation />
        page content
        <div
          className="container"
          style={{
            width: "328px",
            minHeight: "334px",
            margin: "32px auto",
          }}
        >
          <Card
            title="Digital Collections"
            eyebrow="Card Tagline"
            description="Access digitized material, including photographs, archives and manuscripts, film and audio, and more from our specialized collections."
            date="September 31, 2023"
            link="Explore Digital Collections"
            style={{
              height: "auto",
            }}
            variant="standard"
          />

          <CardIcon
          // title="Digital Collections"
          // eyebrow="Card Tagline"
          // description="Access digitized material, including photographs, archives and manuscripts, film and audio, and more from our specialized collections."
          // date="September 31, 2023"
          // link="Explore Digital Collections"
          // style={{
          //   height: "auto",
          // }}
          // variant="standard"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
