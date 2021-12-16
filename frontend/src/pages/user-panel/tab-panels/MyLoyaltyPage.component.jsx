import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinImage from "../../../assets/images/coin-svgrepo-com 1.svg";
import { getUserDetails } from "../../../actions/userActions";
import "../../../sass/components/Loyalty.styles.scss";
import { useHistory } from "react-router-dom";

const MyLoyaltyPageComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      }
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, user]);

  return (
    <>
      <h2 className={"header"}>My loyalty tracker</h2>
      <div className={"center"}>
        <div className="loyalty-stats-container">
          <div className="loyalty-stats-container--image">
            <img src={CoinImage} alt={"coin"} />
          </div>
          <div>
            You currently have collected{" "}
            <span className="loyalty-stats-container--points">
              <span className="loyalty-stats-container--points__digit">
                {user?.loyaltyPoints}
              </span>{" "}
              points.
            </span>
          </div>
          <hr className="separator" />
          <div className="loyalty-stats-container--info">
            <div>
              1 point is equal to 1 euro you can use to get a discount for. You
              can only cover 30% of your total purchase price with loyalty
              points. For each 20 euros you spend, you will collect 1 point.
            </div>
            <p>
              For example, you buy products for a total cost of 100 euros, in
              this case, you would be able to only use 30 loyalty points which
              covers 30% of the final price.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLoyaltyPageComponent;
