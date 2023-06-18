const SocialFeed = () => {
    const feedItems = [
      {
        id: 1,
        user: 'John Doe',
        timestamp: '2 hours ago',
        content: 'Just planted some beautiful flowers in my garden. Loving the vibrant colors!',
        likes: 12,
        comments: 5,
      },
      {
        id: 2,
        user: 'Jane Smith',
        timestamp: '5 hours ago',
        content: 'Harvested my first batch of tomatoes today. They taste amazing!',
        likes: 24,
        comments: 8,
      },
      {
        id: 3,
        user: 'Mike Johnson',
        timestamp: '1 day ago',
        content: 'Had a great time volunteering at the local community garden. We accomplished so much together!',
        likes: 45,
        comments: 15,
      },
      {
        id: 4,
        user: 'Mike Johnson',
        timestamp: '2 days ago',
        content: 'Volunteering at the local community garden.',
        likes: 45,
        comments: 15,
      },
    ];
  
    return (
      <div className="social-feed bg-gradient-to-br from-purple-900 to-blue-900 text-white px-6 py-6">
    <h2 className="text-3xl font-bold mb-4">Social Feeds</h2>
      <div className="bg-gray-800 px-6 py-6">
        {feedItems.map((item) => (
          <div className="feed-item" key={item.id}>
            <div className="feed-header">
              <div className="user-avatar"></div>
              <div className="user-info">
                <p className="user-name">{item.user}</p>
                <p className="timestamp">{item.timestamp}</p>
              </div>
            </div>
            <div className="feed-content">
              <p>{item.content}</p>
            </div>
            <div className="feed-footer">
              <div className="likes">
                <span className="count">{item.likes}</span> Likes
              </div>
              <div className="comments">
                <span className="count">{item.comments}</span> Comments
              </div>
              <hr/>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  };
  
  export default SocialFeed;
  