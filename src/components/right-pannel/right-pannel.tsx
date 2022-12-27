import "./right-pannel.scss";
const user = require("../../assets/leftpannel-images/user.png");

const Rightpannel = () => {
  return (
    <div className="right-pannel">
      <div className="container">
        <div className="item">
          <span>Suggested People</span>
          <div className="user">
            <div className="userinfo">
              <img src={user}/>
              <span>Mark Boss</span>
            </div>
            <div className="actionbuttons">
              <button>Follow</button>
              <button>Remove</button>
            </div>
          </div>

          <div className="user">
            <div className="userinfo">
              <img src={user}/>
              <span>Mark Boss</span>
            </div>
            <div className="actionbuttons">
              <button>Follow</button>
              <button>Remove</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Activities</span>
          <div className="user">
            <div className="userinfo">
              <img src={user}/>
              <p>
                <span>Mark Boss</span> Changed Profile Picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online</span>
          <div className="user">
            <div className="userinfo">
              <img src={user}/>
              <div className="online"/>
              <span>Mark Boss</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src={user}/>
              <div className="online"/>
              <span>Mark Boss</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src={user}/>
              <div className="online"/>
              <span>Mark Boss</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightpannel;