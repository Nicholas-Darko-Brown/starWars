import { ListerContent, ListerItem, ListerPageBtn } from "./styles";
import { useNavigate } from "react-router-dom";
import { PeopleState } from "./Context";

const ListerCard: React.FC = ({ item }: any) => {
  const { setPeople } = PeopleState();
  const navigate = useNavigate();

  const handleDetails = async (id: number) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const jsonResponse = await response.json();
      setPeople(jsonResponse.result);
    } catch (error) {
      console.log(error);
    }

    navigate("/details");
  };

  return (
    <ListerItem key={item?.uid}>
      {item?.name}

      <ListerContent>You’re just a child in a mask.</ListerContent>

      <ListerPageBtn onClick={() => handleDetails(item.uid)}>
        Details
      </ListerPageBtn>
    </ListerItem>
  );
};

export default ListerCard;
