// we can mark a folder as dynamic by adding square brackets around the folder name
// in this case, the folder name is [topicName]

// this page acts as a layout/template for all the pages inside the topics folder

// const apiUrl = "https://api.openai.com/v1/chat/completions";
const apiUrl =
  "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";

const Topic = async ({ params: { topicName } }) => {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "system",
          content: "You write blog posts.",
        },
        {
          role: "user",
          content: `Write a blog post about ${topicName}`,
        },
      ],
    }),
  });

  const data = await res.json();
  console.log(data.choices[0].message.content);
  // console.log(typeof data.choices[0].message.content);

  const decodedTopicName = decodeURIComponent(topicName);

  return (
    <div className="container">
      <h1>{decodedTopicName}</h1>
      {data && <p>{data.choices[0].message.content}</p>}
    </div>
  );
};
export default Topic;
