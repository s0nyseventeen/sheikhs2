import Button from "./Button";

export default function Hero() {
  return (
    <main className="grid grid-cols-2 place-items-end ml-5 my-28">
      <div>
        <div className="flex flex-col gap-8">
          <h1 className="font-eukrBold text-6xl">
            Lorem ipsum dolor sit amet, consectetu
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
            orci vel nisl vehicula blandit. Mauris congue bibendum dapibus.
            Aliquam ut mauris est. Vestibulum id mi elit. Proin id urna ac diam
            placerat iaculis at ac justo.
          </p>
          <div>
            <Button plain rounded>
              Дізнатися більше
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img src="src/assets/ezgif-2-51ffbb6c5c.gif" alt="Not Found" />
      </div>
    </main>
  );
}
