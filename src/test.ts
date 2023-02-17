import { getData } from "@lib/api";

(async () => {
  const [data, err] = await getData({
    city: "Одеса",
    street: "Ільфа і Петрова вул.",
    house: "55/2",
  });

  if (err) {
    console.log("err");

    console.error(err);

    return;
  }

  console.log("data");

  console.log(data);
})();