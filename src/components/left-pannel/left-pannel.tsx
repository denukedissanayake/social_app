import "./left-pannel.scss";
const calender = require("../../assets/leftpannel-images/calender.png");
const course = require("../../assets/leftpannel-images/course.png");
const friends = require("../../assets/leftpannel-images/friends.png");
const fund = require("../../assets/leftpannel-images/fund.jpeg");
const gallery = require("../../assets/leftpannel-images/gallery.jpeg");
const games = require("../../assets/leftpannel-images/games.png");
const group = require("../../assets/leftpannel-images/group.png");
const memory = require("../../assets/leftpannel-images/memory.png");
const message = require("../../assets/leftpannel-images/message.png");
const shop = require("../../assets/leftpannel-images/shop.png");
const tutorial = require("../../assets/leftpannel-images/shop.png");
const video = require("../../assets/leftpannel-images/video.jpg");
const watch = require("../../assets/leftpannel-images/watch.png");
const user = require("../../assets/leftpannel-images/user.png");


const Leftpannel = () => {
  return (
    <div className="left-pannel">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={user}/>
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src={friends}/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={group}/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={shop}/>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={watch}/>
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={memory}/>
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <img src={calender}/>
            <span>Events</span>
          </div>
          <div className="item">
            <img src={games}/>
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={gallery}/>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={video}/>
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={message}/>
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Other</span>
          <div className="item">
            <img src={fund}/>
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={tutorial}/>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={course}/>
            <span>Course</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftpannel;