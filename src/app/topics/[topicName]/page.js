// we can mark a folder as dynamic by adding square brackets around the folder name
// in this case, the folder name is [topicName]

// this page acts as a layout/template for all the pages inside the topics folder

const Topic = ({ params: { topicName } }) => {
  console.log(topicName);
  return <div>{topicName}</div>;
};
export default Topic;
