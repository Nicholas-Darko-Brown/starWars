import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import {
  ListerPageCard,
  ListerPageContainer,
  ListerPageInput,
  ListerPageMessages,
} from "./styles";
import ListerCard from "./ListerCard";

const ListerPage = () => {
  const [info, setInfo] = useState([]);
  const [active, setActive] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState("");

  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          setActive(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const getPeople = await fetch(
          `https://www.swapi.tech/api/people?page=${active}&limit=10`
        );
        const response = await getPeople.json();
        setInfo(response.results);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [active]);

  if (isError) return <ListerPageMessages>Error, try again!</ListerPageMessages>;
  if (isLoading) return <ListerPageMessages className="spinner-container"><div className="loading-spinner"></div></ListerPageMessages>;

  return (
    <ListerPageContainer>
      <ListerPageInput
        type="search"
        placeholder="Search by name..."
        className="me-2"
        aria-label="Search"
        autoFocus
        onChange={(e) => setQuery(e.target.value)}
      />

      <ListerPageCard>
        {info
          .filter((item) => {
            if (query === "") return item;
            
            if (item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) return item;
            
            return false
          })
          .map((item) => (
            <ListerCard key={item?.uid} item={item} />
          ))}
      </ListerPageCard>

      <Pagination
        size="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px auto 40px auto",
        }}
      >
        {items}
      </Pagination>
    </ListerPageContainer>
  );
};

export default ListerPage;
