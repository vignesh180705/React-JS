import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const files = [
  { folder: 'Ex-13', files: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12'] },
  { folder: 'Ex-14', files: ['Q1', 'Q2', 'Q3'] },
  { folder: 'Ex-15', files: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12'] },
];

const loadComponent = (folder, file) => {
  return lazy(() => import(`./${folder}/${file}`));
};

function ExerciseTable({ folder, questions }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 align="center">{folder}</h2>
      <table border="1" cellPadding="8" cellSpacing="0" align="center" style={{ width: '200px', margin: 'auto', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Question</th>
            <th>Open</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(q => (
            <tr key={`${folder}-${q}`}>
              <td>Question-{q[1]}{q[2]}</td>
              <td>
                <Link to={`/${folder}/${q}`}>Open</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DynamicTable() {
  return (
    <div>
      <h1 align="center">React Exercises</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
      }}>
        {files.map(({ folder, files }) => (
          <ExerciseTable key={folder} folder={folder} questions={files} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DynamicTable />} />
        {files.map(({ folder, files: qList }) =>
          qList.map(q => {
            const Component = loadComponent(folder, q);
            return (
              <Route
                key={`${folder}-${q}`}
                path={`/${folder}/${q}`}
                element={
                  <Suspense fallback={<h2>Loading...</h2>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })
        )}
      </Routes>
    </Router>
  );
}

export default App;
