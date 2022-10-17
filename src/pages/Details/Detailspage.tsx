import { BiLeftArrowAlt } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import CafeSpots from "../../components/CafeSpots";
import reviewer from "../../images/reviewer.png";
import {
  CafeImages,
  DetailBody,
  DetailsHeader,
  OverviewContainer,
  ReviewContainer,
} from "../../styles/Details/Details";
import { PageTitle } from "../../styles/KYC/KYC";

export default function Detailspage(props: any) {
  let navigate = useNavigate();
  return (
    <DetailBody>
      <PageTitle>
        <BiLeftArrowAlt fontSize="28px" color="var(--brand)" onClick={() => navigate(-1)} />
        <h3> Details </h3>
        <div />
      </PageTitle>
      <DetailsHeader>
        <div className="titles">
          <h2>Golden Tulip</h2>
          <span>5.0</span>
        </div>
        <div className="progress">
          <HiHeart />
        </div>
      </DetailsHeader>
      <CafeImages>
        <CafeSpots />
        <CafeSpots />
        <CafeSpots />
      </CafeImages>
      <OverviewContainer>
        <h2>Overview</h2>
        <span>
          The Golden Tulip is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming
          vacation.
        </span>
        <div className="map_container">
          <div className="cta">
            <h3>Golden Tulip</h3>
            <button> Get Directions </button>
          </div>
        </div>
      </OverviewContainer>
      <ReviewContainer>
        <div className="title">
          <h2>Reviews</h2>
          <div>
            <span>See all</span>
          </div>
        </div>
        <div className="review_comment">
          <div className="review_header">
            <div className="reviewer_info">
              <div className="image">
                <img src={reviewer} alt="reviewers image" />
              </div>
              <div className="profile">
                <h2>Tosin Badmus</h2>
              </div>
            </div>
            <div className="time">
              <span>4 days ago..</span>
            </div>
          </div>
          <span>
            Hospital doctors examine patients so that they can diagnose and treat health conditions and diseases. GPw
            and other health professionals refer patients to hospital doctors.
          </span>
        </div>
      </ReviewContainer>
      <BottomNav />
    </DetailBody>
  );
}
