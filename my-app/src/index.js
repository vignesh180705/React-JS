import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const ex = params.get('ex');
  const q = params.get('q');

  if (!ex || !q) {
    return (
      <div style={{ padding: '20px' , textAlign: 'center' }}>
        <h2>React JS Exercises</h2>
        <QuestionTable />
      </div>
    );
  }

  let Component;
  try {
    Component = lazy(() => import(`./${ex}/${q}.js`));
  } catch (err) {
    return <div>Error loading component.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

const questionList = {
  'Ex-13': ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12'],
  'Ex-14': ['Q1', 'Q2', 'Q3'],
  'Ex-15': ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12']
};

const QuestionTable = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
    {Object.entries(questionList).map(([ex, qs]) => (
      <table key={ex} border="1" cellPadding="10" style={{ minWidth: '200px', textAlign: 'center' }}>
        <thead>
          <tr><th colSpan="2">{ex}</th></tr>
          <tr><th>Question</th><th>Open</th></tr>
        </thead>
        <tbody>
          {qs.map(q => (
            <tr key={`${ex}-${q}`}>
              <td>Question-{q[1]}{q[2]}</td>
              <td>
                <a
                  href={`/?ex=${ex}&q=${q}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ))}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
