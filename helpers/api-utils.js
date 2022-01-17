export async function getAllSnowboards() {
  const response = await fetch("http://localhost:3000/api/snowboards");
  const data = await response.json();
  return data.snowboards;
}
export async function getFeaturedSnowboards() {
  const boards = await getAllSnowboards();
  return boards.filter((board) => board.featured === true);
}

export async function getSnowboard(title) {
  const boards = await getAllSnowboards();
  return boards.filter((board) => board.title === title);
}
export async function getAllClothes() {
  const response = await fetch("http://localhost:3000/api/clothes");
  const data = await response.json();
  return data.clothes;
}
export async function getFeaturedClothing() {
  const clothes = await getAllClothes();
  return clothes.filter((item) => item.featured === true);
}

export async function getClothingItem(title) {
  const clothes = await getAllClothes();
  return clothes.filter((item) => item.title === title);
}

export async function getAllProducts() {
  const boards = await getAllSnowboards();
  const clothes = await getAllClothes();
  return boards.concat(clothes).sort().flat();
}

export async function postEmail(email) {
  const postObj = JSON.stringify({ email: email });
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: postObj,
  };
  const response = await fetch("http://localhost:3000/api/emails", request);
  const data = await response.json();
  console.log(data, "from postEmail")
  return data;
}
