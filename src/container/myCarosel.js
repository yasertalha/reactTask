import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
export default function MyCarousel() {
  return (
    <Carousel responsive={responsive} class="col">
      <div
        style={{
          padding: "10px",
          margin: "0",
        }}
      >
        <img
          style={{
            maxWidth: "200px",
            height: "400px",
            padding: "0",
            margin: "0",
          }}
          src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="image"
        />
      </div>{" "}
      <div
        style={{
          padding: "10px",
          margin: "0",
        }}
      >
        <img
          style={{
            maxWidth: "200px",
            height: "200px",
            padding: "0",
            margin: "0",
          }}
          src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="image"
        />
      </div>{" "}
      <div
        style={{
          padding: "10px",
          margin: "0",
        }}
      >
        <img
          style={{
            maxWidth: "200px",
            height: "200px",
            padding: "0",
            margin: "0",
          }}
          src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="image"
        />
      </div>{" "}
      <div
        style={{
          padding: "10px",
          margin: "0",
        }}
      >
        <img
          style={{
            maxWidth: "200px",
            height: "200px",
            padding: "0",
            margin: "0",
          }}
          src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="image"
        />
      </div>{" "}
      <div
        style={{
          padding: "10px",
          margin: "0",
        }}
      >
        <img
          style={{
            maxWidth: "200px",
            height: "200px",
            padding: "0",
            margin: "0",
          }}
          src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="image"
        />
      </div>{" "}
      <div
        style={{
          padding: "10px",
          margin: "0",
        }}
      >
        <img
          style={{
            maxWidth: "200px",
            height: "200px",
            padding: "0",
            margin: "0",
          }}
          src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="image"
        />
      </div>{" "}
      <div
        style={{
          padding: "10px",
          margin: "0",
        }}
      >
        <img
          style={{
            maxWidth: "200px",
            height: "200px",
            padding: "0",
            margin: "0",
          }}
          src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="image"
        />
      </div>{" "}
      <div
        style={{
          padding: "10px",
          margin: "0",
        }}
      >
        <img
          style={{
            maxWidth: "200px",
            height: "200px",
            padding: "0",
            margin: "0",
          }}
          src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="image"
        />
      </div>
    </Carousel>
  );
}
