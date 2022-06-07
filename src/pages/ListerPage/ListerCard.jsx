import { ListerContent, ListerItem, ListerPageBtn } from "./styles";
import { useNavigate } from "react-router-dom";
import { PeopleState } from "./Context";

const ListerCard = ({ item }) => {
  const { setPeople } = PeopleState();
  const navigate = useNavigate();

  const handleDetails = async (id) => {
    const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
    const jsonResponse = await response.json();
    setPeople(jsonResponse.result);
    navigate("/details");
  };

  return (
    <ListerItem key={item?.uid}>
      {item?.name}

      <ListerContent>A person within the Star Wars universe</ListerContent>

      <ListerPageBtn onClick={() => handleDetails(item.uid)}>
        Details
      </ListerPageBtn>
    </ListerItem>
  );
};

export default ListerCard;
