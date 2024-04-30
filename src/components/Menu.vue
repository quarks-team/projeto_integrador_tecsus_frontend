<template>
  <div class="sidebar">
    <div class="logo">
      <h3>
        Tecnologias para
        <p>Sustentabilidade</p>
      </h3>
      <img src="../assets/tecsus.png" />
    </div>

    <nav>
      <RouterLink to="/"><i class="fa-solid fa-house"></i>INÍCIO</RouterLink>
      <RouterLink to="/reports"><i class="fa-solid fa-file-contract"></i>RELATÓRIOS</RouterLink>
      <RouterLink to="/alerts"><i class="fa-solid fa-bell"></i>ALERTAS</RouterLink>
      <RouterLink to="/importar-dados"><i class="fa-solid fa-file-csv"></i>IMPORTAR</RouterLink>
    </nav>
  </div>
</template>
<style scoped>
.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  top: 0;
  left: 0;
  width: 18%; /* Ajuste conforme necessário */
  height: 100vh; /* Preenchendo toda a altura */
  background-color: #776ae3; /* Cor de fundo do menu */
  color: white;
  padding-top: 2.5%;
}

.logo {
  border: 3px solid rgba(224, 224, 225, 0.8);
  border-radius: 10%;
  padding: 4%;
  background-color: white;
  box-shadow: 0 0 10px rgba(224, 224, 225, 0.3);
  overflow: hidden; /* Impedindo que a imagem quebre o layout ao mover */
  position: relative; /* Manter a posição do container da logo */
  height: 13%;
  width: 50%;
  display: flex;
  flex-direction: row;
  padding-left: 5%;
}

.logo h3 {
  visibility: hidden;
  color: black;
  animation: slide-and-loop-text 15s linear infinite;
  position: absolute;
  opacity: 0;
  color: #776ae3;
  text-align: center;
  align-self: center;
  justify-self: center;
  font-size: 70%;
  font-weight: bolder;
}

.logo p {
  color: #88e570;
}

.logo img {
  animation: slide-and-loop-img 15s linear infinite;
  position: absolute;
  width: 76%;
  height: 72%;
  margin-bottom: 50%;
}

nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 85%;
  text-align: center;
  font-weight: 800;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  padding-left: 5%;
}

nav a.router-link-exact-active,
nav a.router-link-exact-active i {
  color: #88e570;
}

nav a.router-link-exact-active:hover {
  opacity: 0.7;
}

nav a {
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin-left: 4.7rem;
}

nav a:hover {
  opacity: 0.7;
}

nav a i {
  font-size: 120%;
  padding-right: 1rem;
  color: white;
}
/* Definindo a animação para mover a imagem para a direita e reiniciar à esquerda */
@keyframes slide-and-loop-img {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  7% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(150%);
  }
  46% {
    visibility: hidden;
  }
  100% {
    transform: translateX(270%);
    opacity: 1;
  }
}

@keyframes slide-and-loop-text {
  0% {
    visibility: hidden;
  }
  55% {
    visibility: visible;
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  100% {
    visibility: hidden;
  }
}

/* estilização dos elementos do single page */
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

/* Media Queries para responsividade */
@media (min-width: 1024px) {
}
</style>
