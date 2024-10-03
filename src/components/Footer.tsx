import '../view/css/footer/footer.css';
import { Vote } from './Vote';
import { LeonardoAlves } from './LeonardoAlves';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MidiaIcons } from './MidiaIcons';

interface User {
  avatar_url: string;
  name: string;
  html_url: string; // Adiciona a URL do perfil do GitHub
}

export function Footer() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/leoz1995')
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <footer>
        <div id="boxes">
          <LeonardoAlves user={user} />
          <Vote />
          <MidiaIcons />
        </div>
        <p>
          {' '}
          &copy; {user?.name || 'Leonardo Alves'} 2024 Lineage 2 Interlude
          LeoWeb Site. All rights reserved.
        </p>
      </footer>
    </>
  );
}
