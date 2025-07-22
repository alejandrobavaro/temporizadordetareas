import React from "react";
import MainTemporizadorTareas from "./MainTemporizadorTareas";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  return (
    <main className="main-content-container">
      <div className="content-wrapper">
        <MainTemporizadorTareas />
      </div>
    </main>
  );
}

export default MainContent;
