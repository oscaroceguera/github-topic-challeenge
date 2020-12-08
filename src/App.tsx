import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TOPICS } from './topics';

interface IRelatedTopic {
  id: string;
  name: string;
  stargazerCount: number;
}

interface ITopic {
  topic: {
    name: string;
    id: string;
    relatedTopics: IRelatedTopic[];
  };
}

const App: React.FC = () => {
  const { loading, data, error } = useQuery<ITopic>(GET_TOPICS, {
    variables: { topico: 'angular' },
  });
  console.log('🚀 ~ file: App.tsx ~ line 19 ~ App ~ error', error);
  console.log('🚀 ~ file: App.tsx ~ line 19 ~ App ~ data', data);
  console.log('🚀 ~ file: App.tsx ~ line 19 ~ App ~ loading', loading);

  if (loading) {
    return <h1 style={{ textAlign: 'center' }}>Loading...</h1>;
  }

  if (error) {
    return <h1 style={{ textAlign: 'center' }}>Error!</h1>;
  }

  return (
    <div
      style={{ border: '1px solid black', width: '50%', margin: '1em auto' }}
    >
      <h1>{data?.topic.name}</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {data?.topic.relatedTopics.map((relatedTopic: IRelatedTopic) => (
          <div
            key={relatedTopic.id}
            style={{
              border: '1px solid gray',
              width: '300px',
              marginBottom: '.5em',
            }}
          >
            <h3>{relatedTopic.name}</h3>
            <p>STARS: {relatedTopic.stargazerCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
