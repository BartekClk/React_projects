import React, { useState } from 'react';

import './App.css';

const Close = ({closed, toDo}) =>{
  return(
    <div onClick={toDo} className={`close stepIcon d-flex justify-content-center align-items-center h2 ${closed? 'active' : ''}`}>^</div>
  );
} 

const P_NStepIcon = ({text, toDo}) =>{
  return(
    <div onClick={toDo} className={`stepIcon d-flex justify-content-center align-items-center mx-2 PrevNextButton unselectable`} >
      {text}
    </div>
  );
}

const StepIcon = ({text, active}) =>{
  return(
    <div className={`stepIcon d-flex justify-content-center align-items-center mx-2 ${active? 'active' : ''} `} >
      {text}
    </div>
  );
}

const StepIcons = ({steps, actStep}) =>{
  return(
    <div className='d-flex unselectable' >
      {steps.map((item, index) => (
        <StepIcon key={index} text={item.id} active={index===actStep}/>
      ))}
    </div>
  );
}

const Step  = ({steps, actStep}) =>{
  return(
    <div>
      <h4 className='d-flex justify-content-center align-items-center text-center mt-4'>
        {steps[actStep].title}
      </h4>
      <h5 className='d-flex justify-content-center align-items-center text-center mt-3'>
        {steps[actStep].content}
      </h5>
    </div>
  );
}

const App = () => {

  const listName = "Jak zrealizować zadanie.";
  const steps = [
    {id: 1, title: "Określenie celu lub zadania", content: "Jasne zdefiniowanie celu, który chcesz osiągnąć lub zadania, które chcesz zrealizować." },
    {id: 2, title: "Rozbicie zadania na mniejsze etapy", content: "Podzielenie głównego zadania na mniejsze etapy lub czynności, które ułatwią jego realizację." },
    {id: 3, title: "Zapewnienie niezbędnych zasobów i informacji", content: "Upewnienie się, że masz wszystkie niezbędne narzędzia, wiedzę i zasoby, aby wykonać zadanie." },
    {id: 4, title: "Rozpoczęcie wkonywania", content: "Rozpoczęcie pracy od pierwszego etapu zgodnie z zaplanowanym działaniem." },
    {id: 5, title: "Kontynuacja wykonywania kolejnych etapów", content: "Wykonywanie kolejnych etapów zgodnie z planem, aby zbliżyć się do osiągnięcia celu." },
    {id: 6, title: "Monitorowanie postępów i dostosowywanie planu", content: "Regularne sprawdzanie postępów i ewentualne dostosowywanie planu w razie potrzeby, aby utrzymać skuteczność." },
    {id: 7, title: "Analiza wyników i wprowadzanie poprawek", content: "Po zakończeniu wszystkich kroków, ocena wyników i wprowadzenie ewentualnych korekt, aby poprawić efektywność w przyszłości." }
  ];

  const [closed, setClosed] = useState(0);

  const closeOpen = () => {
    setClosed(!closed);
  };

  const [actStep, setActStep] = useState(0);

  const prevStep = () => {
    setActStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const nextStep = () => {
    setActStep((prevStep) =>
      prevStep <  steps.length - 1 ? prevStep + 1 : prevStep
    );
  };

  return (
    <div className="app">
      <Close closed={closed} toDo={closeOpen}/>
      <div className={`content ${closed? 'closed' : ''}`}>
        <header className="d-flex justify-content-center align-items-center bg-dark text-white py-2 app-header">
          <h1>Lista kroków</h1>
        </header>
        <div className="container-md">
          <div className='mt-3 d-flex justify-content-center align-items-center'>
            <h2>
              {listName}
            </h2>
          </div>
          <div className='d-flex justify-content-center align-items-center mt-4'>
            <P_NStepIcon text={"<"} toDo={prevStep}/>
            <StepIcons steps={steps} actStep={actStep} />
            <P_NStepIcon text={">"} toDo={nextStep}/>
          </div>
          <div className='d-flex justify-content-center align-items-center mt-4'>
            <Step steps={steps} actStep={actStep}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;