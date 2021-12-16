export async function getAllSnowboards() {
  const response = await fetch("http://localhost:3000/api/snowboards");
  const data = await response.json();
  return data.snowboards;
}
export async function getFeaturedSnowboards() {
  const boards = await getAllSnowboards();
  return boards.filter((board) => board.featured === true);
}
