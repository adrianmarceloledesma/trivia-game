export default async function fetchTrivia(category:string,difficulty:string) {
    const response = await fetch(
      `https://the-trivia-api.com/v2/questions?limit=10&difficulty=${difficulty}&categories=${category}`
    );
      const data = await response.json();
      return data
  
  };
