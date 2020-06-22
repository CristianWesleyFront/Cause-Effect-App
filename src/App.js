import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FcElectronics, FcReading, FcLike, FcLink } from "react-icons/fc";

import "./App.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

// Chamada de componentes
import Card from "./components/Card";
import { Repositories, RepositoryView } from "./components/Repositors/styles";
import api from "./services";

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
              <a
                key={repository.full_name}
                onClick={() => setSelectedRepo(repository)}
              >
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
        {selectedRepo ? (
          <RepositoryView>
            <img
              src={selectedRepo.owner && selectedRepo.owner.avatar_url}
              alt={selectedRepo.owner && selectedRepo.owner.login}
            />

            <div>
              <strong>{selectedRepo.name}</strong>

              <div>
                <div>
                  <FcElectronics size={20} />
                </div>

                <p>{selectedRepo.language}</p>
              </div>

              <div>
                <div>
                  <FcReading size={20} fontSize={20} />
                </div>

                <p>{selectedRepo.description}</p>
              </div>

              <div>
                <div>
                  <FcLike size={20} />
                </div>

                <p>{selectedRepo.stargazers_count}</p>
              </div>

              <div>
                <div>
                  <FcLink size={20} />
                </div>

                <p>
                  <a href={selectedRepo.html_url}>Acesse o repositório</a>
                </p>
              </div>
            </div>
          </RepositoryView>
        ) : (
          <p className="repoView">Click em um repositório</p>
        )}
      </Card>
    </div>
  );
}

export default App;
