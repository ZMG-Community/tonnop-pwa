import { BiLeftArrowAlt } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import CafeSpots from "../../components/CafeSpots";
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
      </OverviewContainer>
      <ReviewContainer>
        <div className="title">
          <h2>Reviews</h2>
          <div>
            <span>See all</span>
          </div>
        </div>
        <span>
          The Golden Tulip is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming
          vacation.
        </span>
      </ReviewContainer>
    </DetailBody>
  );
}
