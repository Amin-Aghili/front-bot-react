export const fetchData = async (searchText) => {
  try {
    const response = await fetch(
      `https://mysite-5h4j.onrender.com/price/${searchText}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
