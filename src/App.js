import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FcElectronics } from "react-icons/fc";

import "./App.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

// Chamada de componentes
import Card from "./components/Card";
import { Repositories } from "./components/Repositors/styles";
import api from "./services";

const fake = [
  {
    full_name: "sla",
    description: "sla",
    owner: {
      login: "sla",
      avatar_url: "sla",
    },
  },
];

function App() {
  const [repository, setRepository] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);

  const getRepository = async () => {
    try {
      const response = await api.get(`/users/CristianWesleyFront/repos`);
      const repository = response.data;

      setRepository(repository);
    } catch (err) {
      console.log("Erro na busca por esse repositório");
    }
  };

  useEffect(() => {
    getRepository();
  }, []);

  return (
    <div className="App">
      <Card>
        <input placeholder="Digite o nome do usuario" />
        <PerfectScrollbar
          data-height={400}
          data-mobile-height="200"
          data-scroll="true"
          option={{
            wheelSpeed: 2,
            suppressScrollX: true,
            wheelPropagation: false,
          }}
          style={{ maxHeight: `500px` }}
        >
          <Repositories>
            {repository.map((repository) => (
              <a key={repository.full_name}>
                <img
                  src={repository.owner && repository.owner.avatar_url}
                  alt={repository.owner && repository.owner.login}
                />
                <div>
                  <strong>{repository.name}</strong>
                  <p>
                    <FcElectronics size={20} /> {repository.language}
                  </p>
                </div>

                <FiChevronRight size={20} />
              </a>
            ))}
          </Repositories>
        </PerfectScrollbar>
      </Card>
      <Card>
        {selectedRepo ? <div>{`${selectedRepo}`}</div> : "Selecione um repo"}
      </Card>
    </div>
  );
}

export default App;
