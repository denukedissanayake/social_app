import Post from "./post";
import "./posts.scss";

const Posts = () => {

  const posts = [
    {
      id: '1',
      name: 'Jane Adler',
      profileImage: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B',
      post_desc : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      post_image : 'https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/header/audience-citizen_0.jpg?itok=unjNTfkP'
    },
    {
      id: '2',
      name: 'Peter Mark',
      profileImage: 'https://static.toiimg.com/photo/89456086.cms',
      post_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      post_image: undefined,

    }
  ];

  return (
    <div className="posts">
      {posts?.map((post) => (
          <Post post={post} key={post?.id}/>
      ))}
    </div>
  )
}

export default Posts