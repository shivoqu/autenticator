import Card from "../ui/Card";

export default function Page() {
  return (
    <>
      <section
        style={{ height: "calc(100vh - 12rem" }}
        className="grid place-items-center "
      >
        <p className="text-8xl font-bold text-gray-300 text-center">
          Authenticator
        </p>
      </section>
      <section
        className="flex flex-wrap  
          mx-auto mt-56 mb-56
          items-center justify-center 
          large:max-w-2xl 
          medium:max-w-lg  
          small:max-w-md"
      >
        <Card
          title="JWT"
          logo="🌸"
          desc="Industry standard method for secure claim representation."
        />
        <Card
          title="OAuth"
          logo="⭐"
          desc="A protocol to allow secure authorization in applications."
        />
        <Card
          title="Cookies"
          logo="🍪"
          desc="A unique identifier is created on the server-side."
        />
      </section>
    </>
  );
}
