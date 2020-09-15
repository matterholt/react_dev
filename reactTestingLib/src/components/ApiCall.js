import axios from "axios";
import React from "react";

const URL = "http://hn.algolia.com/api/v1/search";

export default function ApiCall() {
  const [stories, setStories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(null);

  async function handleFetch(e) {
    let result;
    setIsLoading(true);
    try {
      result = await axios.get(`${URL}?query=React`);
      setStories(result.data.hits);
      setIsLoading(false);
    } catch (error) {
      setErrors(error);
    }
  }

  return (
    <div>
      <h1>Testing an API Call</h1>
      <div>
        <button type="button" onClick={handleFetch}>
          Fetch Stories
        </button>
        {/* <button aria-label="getData" onClick={() => setStories([])}>
          Clear
        </button> */}

        <div>
          {errors && <span>Something went wrong..</span>}
          {isLoading && <span>Items are being loaded</span>}
        </div>

        <ul>
          {stories.map((story) => (
            <li key={story.objectID}>
              <a href={story.url}> {story.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
